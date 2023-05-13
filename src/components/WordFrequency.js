import React from 'react';

const WordFrequency = ({ data }) => (
  <table className="word-frequency">
    <thead>
      <tr>
        <th>Word</th>
        <th>Frequency</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(data).map(([word, frequency]) => (
        <tr key={word}>
          <td>{word}</td>
          <td>{frequency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default WordFrequency;
