import React from 'react';
import WordFrequency from './components/ExportButton';
import HistogramChart from './components/HistogramChart';
import ExportButton from './components/ExportButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      histogramData: null,
    };
  }

  handleFetch = async () => {
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
    this.setState({ data: frequencyMap, histogramData });
  };

  render() {
    const { data, histogramData } = this.state;
    return (
      <div>
        <button onClick={this.handleFetch}>Submit</button>
        {histogramData && <HistogramChart data={histogramData} />}
        {histogramData && <ExportButton data={histogramData} />}
        {data && <WordFrequency data={data} />}
      </div>
    );
  }
}

export default App;
