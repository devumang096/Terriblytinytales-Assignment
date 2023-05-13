import React from 'react';
import { CSVLink } from 'react-csv';

const ExportButton = ({ data }) => (
  <CSVLink data={data} filename={'histogram-data.csv'}>
    Export
  </CSVLink>
);

export default ExportButton;
