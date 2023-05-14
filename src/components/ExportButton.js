import React from 'react';
import { CSVLink } from 'react-csv';
import { FaFileCsv } from 'react-icons/fa';

const ExportButton = ({ data }) => (
  <CSVLink data={data} filename={'histogram-data.csv'} className="export-btn">
    <FaFileCsv className="csv-icon" />
    Export CSV
  </CSVLink>
);

export default ExportButton;
