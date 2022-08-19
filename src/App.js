import './App.css';
import WordCard from './WordCard';


const word = "HELLO";
const text = "TRY TO SPELL";

function App() {
  return (
    
    <div className="center"><b>
      <p id='demo'></p>
      <WordCard value={word}/>  
      </b>
    </div>
    
  );
}


export default App;

