import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    debugger;
    console.log("DB: ", db);   
    const q = query(collection(db, "users", userId, "items")); 
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("Items: ", items);
    return items;
};

export async function addItem(userId, item) {
    debugger;
    console.log("DB: ", db);
        const docRef = await addDoc(collection(db, "users", userId, "items"), {
            name: item.name,
            quantity: item.quantity,
            category: item.category
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
}

// export async function addUser(userId) {
//     const docRef = await addDoc(collection(db, "users"), { userId });
//     console.log("Document written with ID: ", docRef.id);
//     return docRef.id;
// }