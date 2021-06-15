import './App.css';
import Card from './Card';
import {robots} from './robots';

function App() {
  return (
    <div className="App">
    <h1>ROBOFRIENDS!</h1>
      {robots.map((robot) => (
          <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username} email={robot.email} />
        ))}
    </div>
  );
}

export default App;
