import {useState, useEffect} from 'react'
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { useGetUserInfo } from './useGetUserInfo'
export const useGetTransaction = () =>{
    const [transactions, setTransactions] = useState([])
    const transactionCollectionRef = collection(db, "Transactions")
    const {userID} = useGetUserInfo()

    const getTransaction = async () => {
        let unsubscribe
        try{
            const queryTransactions = query(transactionCollectionRef, where("userID", "==", userID),
             orderBy("createdAt")
            )

            unsubscribe = onSnapshot(queryTransactions, (snapshot)=>{
                let docs = []

                snapshot.forEach((doc)=>{
                    const data = doc.data()
                    const id = doc.id

                    docs.push({...data, id})

                })
                console.log(docs)
                setTransactions(docs)

            })

        }catch(err){
            console.log(err)
        }

        return ()=> unsubscribe()

    }

    useEffect(()=>{
        getTransaction()
    }, [])


    return {transactions}
}