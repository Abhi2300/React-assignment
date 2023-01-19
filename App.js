import React, {useState} from "react";
import Welcome from './Welcome';


function App(){
    const [name, setName] = useState('');
    const [submit , setSubmit] = useState(false)
    const handleNameChange = (event) => {
        setName(event.target.value);
      }
    return(
        <>
            <h4>Enter your name:</h4>
            <div>
            <input type="text" placeholder="Enter your name" value = {name} onChange={handleNameChange}/>
            <button onClick={()=>{setSubmit(!submit)}}>Log in</button>
            </div>

            {(submit && name) && <Welcome name={name} ></Welcome>}

            <h4>Assignment done by Abhinav paul (12006872)</h4>

        </>
    );
}

export default App;