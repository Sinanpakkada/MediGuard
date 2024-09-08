// src/components/PatientForm.js
import React, { useState } from 'react';
import { ethers } from 'ethers';

const PatientForm = ({ contract }) => {
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState('');
  const [glucose, setGlucose] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert inputs to BigNumber for compatibility with Solidity euint types
      const ageBN = ethers.BigNumber.from(age);
      const bmiBN = ethers.BigNumber.from(bmi);
      const glucoseBN = ethers.BigNumber.from(glucose);

      // Send encrypted data to smart contract
      const tx = await contract.predict(ageBN, bmiBN, glucoseBN);
      
      // Wait for the transaction receipt and get prediction result
      const receipt = await tx.wait();
      const prediction = receipt.events[0].args[0]; 

      // Convert prediction result to readable format
      setResult(prediction.toString());
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
