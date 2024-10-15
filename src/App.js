import React  from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'
import Data from './Data/data';
import  Details  from './components/Details/Details';




  
 const App = () =>{

    return(
        <> 
         
          <BrowserRouter>
          <Routes>
          <Route path ="/" element = { <Data/>} />

           <Route path ="/details/:id" element = {<Details/>} />
          </Routes>
          </BrowserRouter>
        </>
    )

  }
  export default App;
  