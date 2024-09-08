// src/App.js
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import PatientForm from './components/PatientForm';
import FhenixContractABI from './FhenixContractABI.json'; // Import your contract ABI

const App = () => {
  const [contract, setContract] = useState(null);
  const [encryptionKey, setEncryptionKey] = useState('your-encryption-key');

  useEffect(() => {
    const initializeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAddress = '0xYourContractAddress'; // Replace with your contract address
      const contract = new ethers.Contract(contractAddress, FhenixContractABI, signer);
      setContract(contract);
    };

    initializeContract();
  }, []);

  return (
    <div className="App">
      <h1>Diabetes Prediction</h1>
      {contract && <PatientForm contract={contract} encryptionKey={encryptionKey} />}
    </div>
  );
};

export default App;
