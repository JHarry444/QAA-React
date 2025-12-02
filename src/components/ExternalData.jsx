import trainers from '../trainers.json';
import GetTrainers from './GetTrainers';
import Trainer from './Trainer';

function ExternalData() {
    return (
        <>
            <div>
                <h3>JSON File:</h3>
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
            <h2>GET REQ:</h2>
            <GetTrainers />
        </>
    );
}

export default ExternalData;