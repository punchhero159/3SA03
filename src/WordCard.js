import React, { useState } from "react";
import _ from 'lodash'
import CharacterCard from "./CharacterCard";

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    let text
    text = "TRY TO SPELL A WORD"
    const activationHandler = c => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess: guess})
        
        console.log(guess)
        

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!! You can SPELL!')
                setState({...state, completed: true})
                text = "WOW, YOU CAN SPELL";
            }
            
            else{
                console.log('reset, try again')
                setState({...state, guess: '', attempt: state.attempt + 1})
                text = "TRY AGAIN";
            }
        }
        document.getElementById("demo").innerHTML = text;
    }
    return (
        <div>
            {
                
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
        </div>
    )
}