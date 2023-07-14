import './App.css';
import React from 'react'
import Header from './Components/Header'
import AddBook from './Components/Addbook'
import Home from './Components/Home'
import Books from './Components/Book/Books'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <React.Fragment>
       <header>
          <Header/>
        </header>
        <main>
           <Routes>
           <Route path='/' element={<Home/>} exact />
           <Route path='/add' element={<AddBook/>} />
              <Route path='/books' element={<Books/>} />
           </Routes>
        </main>
    </React.Fragment>
  );
}

export default App;
