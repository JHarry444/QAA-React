import { useEffect, useState } from "react";
import Trainer from "./Trainer";

function GetTrainers() {
    const [trainers, setTrainers] = useState([]);
    const [filter, setFilter] = useState("");
    // componentDidMount
    // onLoad
    useEffect(() => {
        fetch("http://localhost:8080/trainers")
            .then(res => res.json())
            .then(json => {
                setTrainers(json);
            })
            .catch(err => console.error(err));
    }, [filter]);

    return (

        <>
        <input type="text" placeholder="name..." value={filter} onChange={e => setFilter(e.target.value)}/>
            {
                trainers.map(trainer => (
                    <Trainer
                        key={trainer.id}
                        id={trainer.id}
                        name={trainer.name}
                        age={trainer.age}
                        specialty={trainer.specialty}
                        setTrainers={setTrainers}
                    />))
            }
        </>
    );
}

export default GetTrainers;