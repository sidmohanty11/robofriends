import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';
import {robots} from './robots';

function App() {
  const [searchfield, setSearchField] = useState('');
  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }
  const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="App tc">
    <h1>ROBOFRIENDS!</h1>
    <SearchBox searchfield={searchfield} onSearchChange={onSearchChange} />
      {filteredRobots? 
        filteredRobots.map((robot) => (
          <Card 
          key={robot.id} 
          id={robot.id} 
          name={robot.name} 
          username={robot.username}  
          email={robot.email} />
          )): 
          robots.map((robot) => (
          <Card 
          key={robot.id} 
          id={robot.id} 
          name={robot.name} 
          username={robot.username}  
          email={robot.email} />
        ))}
    </div>
  );
}

export default App;
