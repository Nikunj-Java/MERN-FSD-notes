import { useState } from "react";


const ToggleButton =()=>{

    const [isOn, setIsOn]=useState(false);

    const toggleButton =() => {
        setIsOn(!isOn);
    };

    return(
        <div>
            <button onClick={toggleButton}>{isOn ? 'ON': 'OFF'}</button>
        </div>
    )

};

export default ToggleButton;