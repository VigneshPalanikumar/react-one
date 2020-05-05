import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Greet';
import Greet from './Components/Greet';
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
import Form1 from './Components/Form1';
import Car from './Components/Car';
import Message from './Components/Message';
import Counter from './Components/Counter';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Form from './Components/Form'
import Table from './Components/Table'
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div className="App">
    <Greet name='India' />
    <Greet name='Us' />
    <Greet name='China'>
         <p>Children</p> 
    </Greet>
    <Welcome name='Diana'>
        <p>Children from Class component</p>
    </Welcome>
    <Counter/>
    <Message/>
    <Car/> 
    <UserGreeting/> 
    <NameList/>
    <ParentComponent/>
    <Form />
  <Table/>
  <ParentComp/>

    </div>
  );
}

export default App;
