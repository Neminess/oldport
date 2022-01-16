import {doc,getFirestore, setDoc} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import {collection,getDocs, getDoc, addDoc} from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';

const firebaseConfig = {

    apiKey: "AIzaSyC227AIexgni7ErYziB0Om51sG4YzbO-gQ",
  
    authDomain: "test-for-school-fc842.firebaseapp.com",
  
    databaseURL: "https://test-for-school-fc842-default-rtdb.firebaseio.com",
  
    projectId: "test-for-school-fc842",
  
    storageBucket: "test-for-school-fc842.appspot.com",
  
    messagingSenderId: "602813471391",
  
    appId: "1:602813471391:web:daec79169825fe85ae60aa"
  
  
  
};

const app = initializeApp(firebaseConfig);

const db=getFirestore(app);
let user2="CheeseMaker";
let textAr=document.querySelector("#replyToPost");
let dataTest=document.querySelector("#replyBtn");
dataTest.addEventListener("click", ()=>{
    //console.log("dataTest");
    //add data to db instead of replacing it
    const fireup=addDoc(collection(db,"forum1","forum1_post","messages"),{
        name:user2,
        postedText:textAr.value,
        time: Date.now()
    })});
    //Get data from db to screen
window.onload=function(){
    let fier=getDoc(doc(db,"forum1","forum1_post"));
    fier.then(docSnap=>{
        if(docSnap.exists()){
            console.log("Data: ", docSnap.data())
            const data= docSnap.data();
            console.log(docSnap.id);
            
                
           
            //this returns 2 divs to the screen from db
            let row=`<div>${data.postedText}</div><br>
                    <div>${data.creator}</div>`;
            let whereTo=document.getElementById("existing");
            whereTo.innerHTML+=row;
           
        }else{
            console.log("No data");
        }
    })};
    async function testDrive(){
        const allDocs=await getDocs(collection(db,"forum1","forum1_post","messages"));
        //this returns the array, when documents[0] is placed after [doc.is]=doc.data();
        //it returns an array-object with the correct info inside
        const documents = [];
        allDocs.forEach(doc => {
           documents[doc.id] = doc.data();
           console.log(documents)
        });
        
        }
    testDrive()