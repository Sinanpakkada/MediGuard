// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@fhenixprotocol/contracts/FHE.sol"; // Import the Fhenix FHE library

contract DiabetesPredictor {
    // Encrypted logistic regression weights and bias using euint16
    euint8[] private encryptedWeights;
    euint8 private encryptedBias;

    // Pre-encrypted constants (e.g., 1) using deterministic encryption
    euint8 private encryptedOne;

    // Constructor to initialize encrypted weights, bias, and constants
    constructor(euint8[] memory _encryptedWeights, euint8 _encryptedBias) {
        encryptedWeights = _encryptedWeights;
        encryptedBias = _encryptedBias;
        encryptedOne = FHE.asEuint8(1); // Trivially encrypted constant
    }

    function predict(euint8 _encryptedAge, euint8 _encryptedBmi, euint8 _encryptedGlucose) public view returns (euint8) {
        // Perform homomorphic computations
        euint8 weightedSum = FHE.add(
            FHE.add(
                FHE.mul(_encryptedAge, encryptedWeights[0]),
                FHE.mul(_encryptedBmi, encryptedWeights[1])
            ),
            FHE.add(
                FHE.mul(_encryptedGlucose, encryptedWeights[2]),
                encryptedBias
            )
        );

        // Apply sigmoid function (using an approximation)
        euint8 sigmoidResult = sigmoid(weightedSum);

        return sigmoidResult;
    }

    function sigmoid(euint8 x) internal view returns (euint8) {
        // Simple linear approximation of sigmoid function with euint16
        
        // Use pre-encrypted constant '1'
        euint8 threshold = FHE.add(encryptedOne, x); // Linear approximation
        
        // Perform division within euint32 limits if needed
        euint8 sigmoidValue = FHE.div(encryptedOne, threshold);

        return sigmoidValue;
    }
}
