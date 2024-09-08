# MediGuard Protocol

**MediGuard Protocol** is a Web3-based platform revolutionizing how medical institutions can leverage AI predictions using sensitive medical data. This project addresses a significant issue in the medical data ecosystem — the need for privacy-preserving machine learning (ML) computations. By enabling on-chain computation of ML models with encrypted data, MediGuard ensures the security and privacy of medical data while offering seamless AI-driven predictions.

## 🚀 Project Overview

### Why MediGuard?

In healthcare, ML models are crucial for medical advancements and improved patient care. However, processing medical data for training and predictions poses a massive risk of data exposure, making it difficult for organizations to use such models at scale. Running these computations locally is impractical due to computational limitations.

MediGuard Protocol proposes a robust solution: allow medical institutions to **share and process encrypted medical data** without compromising on privacy or security, leveraging **Fully Homomorphic Encryption (FHE)** and on-chain computation.

### How It Works

1. **Login and Select Services**: Medical institutions log in through a decentralized identity system, utilizing account abstraction to make the process seamless. The institution selects a prediction model or service to run, which could involve individual or combined datasets.
   
2. **Data Encryption**: Medical data is entered locally through the UI. The data is **encrypted at the client side using the institution’s public address**. The encryption ensures that sensitive medical information is never exposed.

3. **On-chain Model Computation**: The encrypted data is sent to the smart contract, where **Fhenix's Fully Homomorphic Encryption (FHE)** is used to perform secure computations on the encrypted data. The smart contract deploys computations to predict results on-chain.

4. **Encrypted Predictions**: The results of the prediction are computed on-chain and sent back to the user interface in encrypted form, ensuring that even the results remain confidential until decrypted by the intended recipient.

### Example Use Case: Diabetes Prediction

The current prototype focuses on **diabetes prediction**, using a regression model. The system takes three encrypted parameters:
- **Age**
- **BMI**
- **Glucose Levels**

These encrypted values are sent to a smart contract that runs the logistic regression model and returns an encrypted prediction back to the user. This demonstrates how the MediGuard protocol can be applied to various medical use cases.

## 🔒 Why Fhenix Protocol?

Fhenix Protocol brings **Fully Homomorphic Encryption (FHE)** to smart contracts, allowing computations to be performed on encrypted data. Fhenix allows MediGuard to handle sensitive medical data without ever needing to decrypt it, guaranteeing the privacy and security of patient information throughout the ML prediction process.

**Key Advantages of Fhenix:**
- **Privacy-Preserving Computation**: Medical data is never revealed, even during model execution.
- **On-chain Computation**: The smart contract performs all necessary computations, with no off-chain dependencies, making the process transparent and auditable.
- **Seamless Encryption**: Public keys (addresses) are used as encryption keys, ensuring that medical entities can securely manage their own data without external key management complexities.

## 🌍 Revolutionizing On-Chain ML with MediGuard

By integrating Fhenix’s FHE and deploying computation logic on-chain, MediGuard Protocol is a game-changer for medical data processing. It provides:
- **Security and Trust**: Medical institutions don’t have to worry about data breaches or privacy issues.
- **Decentralization**: Computations are performed on the blockchain, enabling verifiability, transparency, and trustlessness.
- **Ease of Use**: Medical professionals can easily interact with the protocol without deep technical expertise.

With APIs for future integrations, MediGuard aims to build an entire ecosystem around secure and privacy-preserving medical AI services.

## ⚙️ Tech Stack

- **Smart Contract**: Solidity, Fhenix FHE Library
- **Blockchain**: Ethereum
- **Frontend**: React, ethers.js, Web3 integration
- **Encryption**: FHE for on-chain computation and AES for local encryption
- **Deployment**: Web3 provider, Metamask, and Ethereum

## 👥 Contributing

We welcome contributions and collaborations, especially from those passionate about privacy-preserving AI and medical innovations in Web3. Please open an issue or pull request for any contributions!

## 🛠️ Future Plans

- **Expand ML Model Support**: We plan to integrate various ML models and extend services for broader use cases.
- **API Integration**: Soon, MediGuard will offer APIs for seamless integration with other healthcare applications and platforms.
- **Scalability**: Work towards improving the scalability of on-chain computation for more complex models.

# Build at EthOnline Hackathon

### Contact

For more details or collaboration inquiries, reach out via [GitHub Issues](https://github.com/YourRepo).

