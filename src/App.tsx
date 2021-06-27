import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import Card from './Card';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

type robot = {
  id: number,
  username: string,
  email: string,
  name: string,
}

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState('');

  useEffect(() => { 
    async function addRobots() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setRobots(data);
    }
    addRobots();
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  }
  const filteredRobots = robots.filter((robot: robot): boolean => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="App tc">
    <h1>ROBOFRIENDS!</h1>
    <SearchBox searchfield={searchfield} onSearchChange={onSearchChange} />
    <Scroll>
      {filteredRobots? 
        filteredRobots.map((robot: robot) => (
          <Card 
          key={robot.id} 
          id={robot.id} 
          name={robot.name} 
          username={robot.username}  
          email={robot.email} />
          )): 
          robots.map((robot: robot) => (
          <Card 
          key={robot.id} 
          id={robot.id} 
          name={robot.name} 
          username={robot.username}  
          email={robot.email} />
        ))}
    </Scroll>
    </div>
  );
}

export default App;
