
import './App.scss';

function App() {
  return (
    <div className="App">
     <div className="results-component">
      <div className="result">
        <div className="result__title">Your Result</div>
        <div className="result__score">
          <div className="result__your-score">76</div>
          <div className="result__total">of 100</div>
        </div>
        <div className="result__value">Great</div>
        <div className="result__info">You scored higher than 65% of the people who have taken these tests.</div>
      </div>
      <div className="summary">555</div>
     </div>
    </div>
  );
}

export default App;
