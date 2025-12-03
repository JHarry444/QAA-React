import { useState } from "react";
import { useNavigate } from "react-router";

function AddTrainer() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [specialty, setSpecialty] = useState("");


    const navigate = useNavigate();

    const handleSubmit = e => {
            e.preventDefault();

            fetch("http://localhost:8080/trainers", {
                method: "POST",
                body: JSON.stringify({name, age, specialty})
            })
                .then(res => {
                    if (res.status === 201) {
                        navigate("/external")
                    }
                })
                .catch(err => console.error(err));
        }
    return (
        <form onSubmit={handleSubmit} id="trainerForm">
            <label htmlFor="trainerName">Name:</label>
            <input type="text" name="name" id="trainerName" value={name} onChange={e => setName(e.target.value)}/>
            <label htmlFor="trainerAge">Age:</label>
            <input type="text" name="age" id="trainerAge"  value={age} onChange={e => setAge(parseInt(e.target.value))}/>
            <label htmlFor="trainerSpecialty">Specialty:</label>
            <input type="text" name="specialty" id="trainerSpecialty" value={specialty} onChange={e => setSpecialty(e.target.value)}/>
            <button type="submit">ADD</button>
        </form>
    );
}

export default AddTrainer;