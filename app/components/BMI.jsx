"use client"
import { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [medicationRecommendation, setMedicationRecommendation] = useState(null);
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');

  const calculateBMI = () => {
    setWeightError('');
    setHeightError('');

    if (!weight || weight < 45) { // Minimum weight is 45kg
      setWeightError('Please enter a valid weight (minimum 45 kg).');
      return;
    }

    if (!height || height <= 0) {
      setHeightError('Please enter a valid height (greater than 0).');
      return;
    }

    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBMI(calculatedBMI.toFixed(2));

      if (calculatedBMI < 18.5) {
        setCategory('Underweight');
        setMedicationRecommendation('Consult a doctor before taking any medication.');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
        setCategory('Normal weight');
        setMedicationRecommendation(null);
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setCategory('Overweight');
        setMedicationRecommendation('For mild pain, consider standard OTC pain relievers. Consult a doctor for chronic issues.');
      } else {
        setCategory('Obese');
        setMedicationRecommendation('Consult a doctor for appropriate medication and dosage.');
      }
    } else {
      setBMI(null);
      setCategory('');
      setMedicationRecommendation(null);
    }
  };

  return (
    <>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center', backgroundColor: '#121212', color: '#e0e0e0' }}>
        <h2 style={{ color: '#bb86fc' }}>BMI Calculator</h2>
        <div>
          <label style={{ color: '#e0e0e0' }}>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{ margin: '10px 0', padding: '8px', width: '100%', boxSizing: 'border-box', backgroundColor: '#333', color: '#e0e0e0', border: 'none' }}
          />
          {weightError && <p style={{ color: 'red' }}>{weightError}</p>}
        </div>
        <div>
          <label style={{ color: '#e0e0e0' }}>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{ margin: '10px 0', padding: '8px', width: '100%', boxSizing: 'border-box', backgroundColor: '#333', color: '#e0e0e0', border: 'none' }}
          />
          {heightError && <p style={{ color: 'red' }}>{heightError}</p>}
        </div>
        <button onClick={calculateBMI} style={{ padding: '10px 20px', backgroundColor: '#bb86fc', color: '#121212', border: 'none', cursor: 'pointer' }}>
          Calculate BMI
        </button>

        {bmi && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#bb86fc' }}>Your BMI: {bmi}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#bb86fc' }}>Category: {category}</p>
            {medicationRecommendation && (
              <p style={{ color: '#ffeb3b', marginTop: '10px' }}>
                {medicationRecommendation}
              </p>
            )}
            {(category === 'Underweight' || category === 'Overweight' || category === 'Obese') && (
              <p style={{ color: '#ffeb3b', marginTop: '10px' }}>
                Please consult a physician for further evaluation.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BMICalculator;