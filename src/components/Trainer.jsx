import { useContext } from "react";
import { themeContext } from "../App";

function Trainer({ id, name, age, specialty, setTrainers }) {
    // <> -> React fragment (blank tag just for returns)
    // console.log("Props:", props);

    const {theme} = useContext(themeContext);
    const handleClick = function () {
        fetch("http://localhost:8080/trainers/" + id, { method: "DELETE" })
            .then(res => {
                if (res.status === 200) {
                    setTrainers(function(oldTrainers){
                        const newTrainers =  oldTrainers.filter(trainer => trainer.id !== id);
                        debugger;
                        return newTrainers;
                    });
                } else {
                    console.log("Failed to delete trainer with id:", id);
                    
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
            {setTrainers && <button className={theme} onClick={handleClick}>DEL</button>}
            
        </>
    );

}

export default Trainer;