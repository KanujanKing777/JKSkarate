// Import necessary libraries
import React, { useEffect, useState } from 'react';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4L7yOaZEusDDLXdLPNrC6TxOEcLcJmQM",
  authDomain: "jkskarate.firebaseapp.com",
  projectId: "jkskarate",
  storageBucket: "jkskarate.firebasestorage.app",
  messagingSenderId: "474130930599",
  appId: "1:474130930599:web:018ac3d8778ed034e57482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DisplayBoxes = () => {
  const [boxes, setBoxes] = useState([]); // State to hold the Firestore data
  const [loading, setLoading] = useState(true); // Loading state
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchBoxes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tournaments')); // 'boxes' is the collection name
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBoxes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
        setLoading(false);
      }
    };

    fetchBoxes();
  }, []); // Run once on component mount

  if (loading) return <p>Loading...</p>;

  return (
    <div className='container'>
      {boxes.map((box) => (
        <div
          className='box'
          key={box.id}
          onClick={() => setActiveBox(box)}
        >
          <img className='img' src={box.imageLink} alt='tournament'></img>
          <p className='text'>{box.title || 'Untitled'}</p>
        </div>
      ))}

      {activeBox && (
        <div className='overlay' style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1000,
          overflowY: 'scroll'
        }}>
          <div className='overlay-content' style={{
            backgroundColor: '#fff',
            margin: '50px auto',
            maxWidth: '600px',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
            <button onClick={() => setActiveBox(null)} style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer'
            }}>×</button>
            <h1 style={{
              fontSize: '24px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>{activeBox.title}</h1>
            <img className='img' src={activeBox.imageLink} alt='tournament' style={{
              width: '100%',
              borderRadius: '8px',
              marginBottom: '20px'
            }}></img>
            <p className='details' style={{
              fontSize: '16px',
              lineHeight: '1.5',
              color: '#333'
            }}>{activeBox.description || 'No additional details available.'}</p>
            {activeBox.anotherimageLink && (
              <img className='img' src={activeBox.anotherimageLink} alt='tournament' style={{
                width: '100%',
                borderRadius: '8px',
                marginBottom: '20px'
              }}></img>
            )} 
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayBoxes;
