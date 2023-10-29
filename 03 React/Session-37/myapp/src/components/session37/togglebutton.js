import { useState } from "react";


const ToggleButton =()=>{

    const [isOn, setIsOn]=useState(false);

    const toggleButton =() => {
        setIsOn(!isOn);
    };

    return(
        <div className="container">
            <button className="btn btn-danger" onClick={toggleButton}>{isOn ? 'ON': 'OFF'}</button>
        </div>
    )

};

export default ToggleButton;