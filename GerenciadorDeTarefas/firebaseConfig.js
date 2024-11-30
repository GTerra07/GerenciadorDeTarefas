// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import do Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9GM5260tRvXoTmfg5hvwA6-abPaLqso",
  authDomain: "gerenciador-de-tarefas-c5733.firebaseapp.com",
  projectId: "gerenciador-de-tarefas-c5733",
  storageBucket: "gerenciador-de-tarefas-c5733.firebasestorage.app",
  messagingSenderId: "939507178876",
  appId: "1:939507178876:web:f83df7d81b8ef138f598f9",
  measurementId: "G-WKZ0TJS8P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Export do Firestore
