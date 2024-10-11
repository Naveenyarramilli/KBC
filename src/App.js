import React from 'react';

import './App.css'



  
 const App = () =>{

    const url ="https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then((response) =>{
        return response.json()
    }).then((jsondata) =>{
        console.log(jsondata)
    })
    
    
    

        const  redbutton = () =>{
            document.getElementById("myred").style.backgroundColor = 'red';
            document.getElementById("myyellow").style.backgroundColor = 'black';
            document.getElementById("mygreen").style.backgroundColor = 'black';
        }
        const  yeelowbutton = () =>{
            document.getElementById("myred").style.backgroundColor = "black";
            document.getElementById("myyellow").style.backgroundColor = "yellow";
            document.getElementById("mygreen").style.backgroundColor = "black";
        }
        const  greenbutton = () =>{
            document.getElementById("myred").style.backgroundColor = "black";
            document.getElementById("myyellow").style.backgroundColor = "black";
            document.getElementById("mygreen").style.backgroundColor = "green";
        }



    return(
        <>
          <div className="container">
            <h1>Traffic lights</h1>
            <div className='main-section'>
            <div className="section-1">
                <button onClick={redbutton}>red</button>
                <button onClick={yeelowbutton}>yellow</button>
                <button onClick={greenbutton}>green</button>
                </div>
                <div className="section-2">
                    <p id ="myred"></p>
                    <p id ="myyellow"></p>
                    <p id ="mygreen"></p>
                </div>
                </div>
            </div>
          
           
        </>
    )

  }
  export default App;
  