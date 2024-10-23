import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../config/firebase-config"
import {useGetUserInfo} from "../hooks/useGetUserInfo"
export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "Transactions")
    const {userID} = useGetUserInfo()
    const addTransaction = async ({
        description, 
        transactionAmount,
        transactionType
    }) => {
        await addDoc(transactionCollectionRef, {
            userID,
            description,
            transactionAmount,
            transactionType,
            createdAt:serverTimestamp(),
        }).then(
            console.log("Document has been added to the Transactions collection")
        )
        
    }
    
    return { addTransaction }
}