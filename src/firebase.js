// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//firebase.js
import { getFirestore } from "firebase/firestore";
//파이어 스토리지 (대용량 데이터베이스)
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEiS6cLlJjnSQ15QoaYuojpf-MgmiRJ78",
  authDomain: "af-mpm-brevity-words.firebaseapp.com",
  projectId: "af-mpm-brevity-words",
  storageBucket: "af-mpm-brevity-words.appspot.com",
  messagingSenderId: "556915310146",
  appId: "1:556915310146:web:e03c030b2b3bb9206df7db",
  measurementId: "G-XYB6DP54LH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore();
//app 프로젝트의 스토리지 가져오기
const storage = getStorage(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db, storage };
