import './App.scss';
import ListItem from './ListItem';
import data from './data.json';

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
      <div className="summary">
        <div className="summary__title">Summary</div>
        <ul className="summary__list">
          {data.map((item) =>
            <li key={item.category}>
              <ListItem 
              category={item.category}
              score={item.score}
              icon={item.icon}
              />
            </li>
          )}
        </ul>
        <button className='summary__button'>Continue</button>
      </div>
     </div>
    </div>
  );
}

export default App;
