    // src/components/PatientForm.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
import CryptoJS from 'crypto-js'; // Encryption for example, replace with FHE encryption method

const PatientForm = ({ contract, encryptionKey }) => {
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState('');
  const [glucose, setGlucose] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Encrypt patient data
    const encryptedAge = CryptoJS.AES.encrypt(age, encryptionKey).toString();
    const encryptedBmi = CryptoJS.AES.encrypt(bmi, encryptionKey).toString();
    const encryptedGlucose = CryptoJS.AES.encrypt(glucose, encryptionKey).toString();

    try {
      // Send encrypted data to smart contract
      const tx = await contract.predict(
        ethers.utils.formatBytes32String(encryptedAge),
        ethers.utils.formatBytes32String(encryptedBmi),
        ethers.utils.formatBytes32String(encryptedGlucose)
      );
      
      // Wait for the transaction receipt and get prediction result
      const receipt = await tx.wait();
      const prediction = receipt.events[0].args[0]; 

      // Decrypt the result and display it
      const decryptedPrediction = CryptoJS.AES.decrypt(prediction, encryptionKey).toString(CryptoJS.enc.Utf8);
      setResult(decryptedPrediction);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
      <input type="number" placeholder="BMI" step="0.1" value={bmi} onChange={(e) => setBmi(e.target.value)} required />
      <input type="number" placeholder="Glucose" value={glucose} onChange={(e) => setGlucose(e.target.value)} required />
      <button type="submit">Predict</button>
      {result && <p>Prediction: {result}</p>}
    </form>
  );
};

export default PatientForm;
