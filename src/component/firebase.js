// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// THAY THẾ bằng cấu hình CỦA HUYNH
const firebaseConfig = {
  apiKey: "AIzaSyCgr1QYwnDFgnSWlbYm-aS5jeFhx2OB09g",
  authDomain: "tribute-page-project.firebaseapp.com",
  projectId: "tribute-page-project",
  storageBucket: "tribute-page-project.firebasestorage.app",
  messagingSenderId: "262893213916",
  appId: "1:262893213916:web:39a5784d02960261257c19",
  measurementId: "G-427PC83H17"
};
// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore và Export để sử dụng trong các component khác
export const db = getFirestore(app);