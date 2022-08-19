import './App.css';
import WordCard from './WordCard';


const word = "HELLO";


function App() {
  return (
    
    <div className="center"><b>

      <WordCard value={word}/>  
      </b>
    </div>
    
  );
}


export default App;

