import {useState, useEffect} from 'react'
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { useGetUserInfo } from './useGetUserInfo'
export const useGetTransaction = () =>{
    const [transactions, setTransactions] = useState([])
    const [transactionTotal, setTransactionTotal] = useState({balance:0.0, income:0.0, expenses:0.0})
    const transactionCollectionRef = collection(db, "Transactions")
    const {userID} = useGetUserInfo()

    const getTransaction = async () => {
        let unsubscribe
        let totalIncome =0
        let totalExpenses = 0 
    
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

                    if(data.transactionType === "expense"){
                        totalExpenses += Number(data.transactionAmount)
                    }
                    else{
                        totalIncome += Number(data.transactionAmount)
                    }

                })
                console.log(docs)
                setTransactions(docs)
                let balance = totalIncome - totalExpenses
                setTransactionTotal({balance, income:totalIncome, expenses:totalExpenses})

            })

        }catch(err){
            console.log(err)
        }

        return ()=> unsubscribe()

    }

    useEffect(()=>{
        getTransaction()
    }, [])


    return {transactions, transactionTotal}
}