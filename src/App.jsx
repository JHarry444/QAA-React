import './App.css'
import Counter from './components/Counter';
import Input from './components/Input'
import Trainer from './components/Trainer';
import trainers from "./trainers.json";


function App() {

  return (
    <div>
      <p> BLOOP!</p>
      <p>My name is Jordan!</p>
      <p>2 + 2</p>
      <p>{2 + 2}</p>
      <div>
        <h2>Components:</h2>
        <Input />
        <input />
        <div>
          <h3>Manually:</h3>
          <Trainer name="Jordan" age={31} specialty="Java" />
          <Trainer name="Cameron" age={32} specialty="Web" />
          <Trainer name="Shafeeq" age={42} specialty="Oracle" />
        </div>
        <div>
          <h3>Dataset:</h3>
          {
            trainers.map(trainer => (
              <Trainer
                key={trainer.id}
                name={trainer.name}
                age={trainer.age}
                specialty={trainer.specialty}
              />))
          }
        </div>
        <div>
          <h2>State:</h2>
          <Counter />
        </div>
      </div>
    </div>

  );

}

export default App
