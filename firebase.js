// firebase.js (CDN) — ใช้เวอร์ชันเดียวกับหน้า login (10.7.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKGmHv8c0-j9i34cWXGb2yaXUIqgcLbEM",
  authDomain: "a-level-math-fe2d0.firebaseapp.com",
  projectId: "a-level-math-fe2d0",
  storageBucket: "a-level-math-fe2d0.firebasestorage.app",
  messagingSenderId: "157275403096",
  appId: "1:157275403096:web:1761cc44d02af5da0f2b2d",
  measurementId: "G-452WY2B7CE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
