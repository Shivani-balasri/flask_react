// src/App.js

import React, { useState } from 'react';

function App() {
  const [studentName, setStudentName] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState('');

  const handleInputChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentName }),
    });
    const data = await response.json();
    setGeneratedNumber(data.generatedNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" value={studentName} onChange={handleInputChange} />
        </label>
        <button type="submit">Generate Number</button>
      </form>
      {generatedNumber && (
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Generated Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{studentName}</td>
              <td>{generatedNumber}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
