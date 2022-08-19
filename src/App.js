import './App.css';
import WordCard from './WordCard';


const word = "HELLO";
const text = "TRY TO SPELL";

function App() {
  <h1>TRY TO REMEMBER</h1>
  return (
    
    <div className="center"><b>
      <p id='demo' class="p2">TRY TO SPEEL A WORD</p>
      <h3 id='temp'>.</h3>
      <WordCard value={word}/>  
      </b>
    </div>
    
  );
}


export default App;

