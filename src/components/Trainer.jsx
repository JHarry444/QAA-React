function Trainer({name, age, specialty}) {
    // <> -> React fragment (blank tag just for returns)
    // console.log("Props:", props);
    
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
        </>
    );

}

export default Trainer;