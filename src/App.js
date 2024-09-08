// src/App.js
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import PatientForm from './components/PatientForm';
import FhenixContractABI from './FhenixContractABI.json'; // Import your contract ABI

const App = () => {
  const [contract, setContract] = useState(null);
  const [encryptionKey, setEncryptionKey] = useState('your-encryption-key'); // Replace with your actual encryption key
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initializeContract = async () => {
      if (window.ethereum) {
        try {
          const newProvider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(newProvider);
          const signer = newProvider.getSigner();
          const contractAddress = '0x74D17ce811A57A7707a50AC67e6a0Be3db6bf4a0'; 
          const newContract = new ethers.Contract(contractAddress, FhenixContractABI, signer);
          setContract(newContract);
        } catch (error) {
          console.error('Failed to initialize contract:', error);
        }
      } else {
        console.log('Ethereum provider not found');
      }
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
