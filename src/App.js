import React, { useState, useEffect } from 'react';
//import {QRCodeCanvas} from 'qrcode.react';
import './App.css'; // Import the CSS file
import MainPage from './main';

const questions = [
  {
    question: "What is the capital of France?",
    options: { A: "Berlin", B: "Madrid", C: "Paris", D: "Rome" },
    answer: "C"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Saturn" },
    answer: "B"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: { A: "Charles Dickens", B: "Mark Twain", C: "William Shakespeare", D: "Leo Tolstoy" },
    answer: "C"
  },
  {
    question: "What is the largest mammal in the world?",
    options: { A: "Elephant", B: "Blue Whale", C: "Giraffe", D: "Great White Shark" },
    answer: "B"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: { A: "Osmium", B: "Oxygen", C: "Gold", D: "Iron" },
    answer: "B"
  },
  {
    question: "What is the boiling point of water?",
    options: { A: "100°C", B: "0°C", C: "50°C", D: "25°C" },
    answer: "A"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: { A: "Vincent van Gogh", B: "Pablo Picasso", C: "Leonardo da Vinci", D: "Claude Monet" },
    answer: "C"
  },
  {
    question: "What is the smallest country in the world?",
    options: { A: "Vatican City", B: "Monaco", C: "Nauru", D: "Tuvalu" },
    answer: "A"
  },
  {
    question: "What is the capital of Japan?",
    options: { A: "Seoul", B: "Tokyo", C: "Beijing", D: "Bangkok" },
    answer: "B"
  },
  {
    question: "In which year did the Titanic sink?",
    options: { A: "1912", B: "1905", C: "1915", D: "1920" },
    answer: "A"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Arctic Ocean", D: "Pacific Ocean" },
    answer: "D"
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: { A: "Oxygen", B: "Carbon Dioxide", C: "Nitrogen", D: "Helium" },
    answer: "B"
  },
  {
    question: "Which organ is responsible for pumping blood in the human body?",
    options: { A: "Lungs", B: "Heart", C: "Liver", D: "Kidneys" },
    answer: "B"
  },
  {
    question: "Who was the first person to walk on the moon?",
    options: { A: "Buzz Aldrin", B: "Neil Armstrong", C: "Yuri Gagarin", D: "John Glenn" },
    answer: "B"
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: { A: "Tomato", B: "Pepper", C: "Avocado", D: "Onion" },
    answer: "C"
  }
];


const App = () =>{
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)

  return(
    <div>
<MainPage/>
    <h1>Quiz App</h1>
    <div className='container'>
      <div className='question'>
        <span >{currentQuestionIndex +1}.</span>
        <span >{questions[0].question}</span>
      </div>
      <div className='option-container'>
      {Object.keys(questions[0].options).map((key) => (
                  <>
                 
                 <button className='option-btn'>
                 {key}: {questions[0].options[key]}
                 </button>
                
                   
                  
                  </>
                ))}
      </div>
      <input type='button' value='next' id="next-button"/>
    </div>
    </div>
  )
}
export default App;











/*const App = () => {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const handlePlayerJoin = () => {
    if (playerName) {
      setPlayers([...players, playerName]);
      setPlayerName('');
    }
  };

  const handleAnswerSubmit = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    setPlayerAnswers({
      ...playerAnswers,
      [playerName]: answer === correctAnswer,
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Game Over! Thanks for playing!");
    }
  };

  const checkTheAnswer = () =>{
    if(questions.answer){

    }
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
