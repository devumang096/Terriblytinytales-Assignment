import React from 'react';
import WordFrequency from './components/WordFrequency';
import HistogramChart from './components/HistogramChart';
import ExportButton from './components/ExportButton';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      histogramData: null,
      isLoading: false,
    };
  }

  handleFetch = async () => {
    this.setState({ isLoading: true });
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text.split(/\W+/);
    const frequencyMap = {};
    words.forEach((word) => {
      if (word) {
        frequencyMap[word.toLowerCase()] = (frequencyMap[word.toLowerCase()] || 0) + 1;
      }
    });
    const frequencyArray = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]).slice(0, 20);
    const histogramData = frequencyArray.map(([word, frequency]) => ({ word, frequency }));
    this.setState({ data: frequencyMap, histogramData, isLoading: false });
  };

  render() {
    const { data, histogramData, isLoading } = this.state;
    return (
      <div className="App">
        <div className="header">
          <h1>Word Frequency Counter</h1>
        </div>
        <div className="container">
          <div className="form">
            <button className="submit-btn" onClick={this.handleFetch} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
          <div className="chart">
            {histogramData && <HistogramChart data={histogramData} />}
            {histogramData && <ExportButton data={histogramData} />}
          </div>
          <div className="table">
            {data && <WordFrequency data={data} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
