# Word Frequency Histogram

This is a React.js application that fetches the contents of a text file, calculates the frequency of occurrence of each word, and displays a histogram of the 20 most occurring words. The user can also export the histogram data as a CSV file.

## Installation

To run this project locally, you'll need to have Node.js and npm installed on your machine. Once you have those installed, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the command `npm install` to install the project dependencies.
4. Run the command `npm start` to start the development server.
5. Open your web browser and navigate to `http://localhost:3000` to view the app.


## Live Demo
You can view a live demo of this project at the following link: https://frequency-count.netlify.app/

## Libraries and Plugins

This project uses the following libraries and plugins:

- React.js: A JavaScript library for building user interfaces.
- react-chartjs-2: A React wrapper for Chart.js, a charting library for JavaScript.
- react-csv: A React component for exporting data to CSV format.
- react-icons: A collection of customizable icons for React.
- axios: A Promise-based HTTP client for making API requests.

## Components

This project consists of the following React components:

- **App:** The main component that fetches the text file, calculates the word frequency, and renders the Histogram and ExportButton components.
- **Histogram:** A component that displays a histogram of the 20 most occurring words in the text file.
- **ExportButton:** A component that exports the histogram data as a CSV file when clicked.

## Usage

To use this app, simply click the "Submit" button on the homepage to fetch the text file and generate the histogram. The histogram will be displayed on the page, and you can click the "Export CSV" button to download the histogram data as a CSV file.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.