import './App.css';
import WordCard from './WordCard';


const word = "HELLO";
const text = "TRY TO SPELL";

function App() {
  return (
    
    <div className="center"><b>
      <p id='demo' class="p2">TRY TO SPELL A WORD</p>
      <h3 id='temp'>[YOUR WORD WILL BE HERE]</h3>
      <WordCard value={word}/>  
      </b>
    </div>
    
  );
}


export default App;

