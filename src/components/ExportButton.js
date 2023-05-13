import React from 'react';

const ExportButton = ({ data }) => {
  const handleClick = () => {
    const csvData = prepareCSVData(data);
    downloadCSVFile(csvData);
  };

  const prepareCSVData = (data) => {
    const csvData = [];
    csvData.push(['Word', 'Frequency']);
    data.forEach((item) => {
      csvData.push([item.word, item.count]);
    });
    return csvData.join('\n');
  };

  const downloadCSVFile = (data) => {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'word_frequency.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="export-btn" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M16 11h-3V3H3v15h18v-9h-2v7H5V5h9z" />
      </svg>
      Export CSV
    </button>
  );
};

export default ExportButton;
