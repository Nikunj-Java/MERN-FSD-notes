import { useEffect, useState } from "react";

function AsyncStateExample(){

    const[data,setData]= useState(null);
    const[isLoading,setIsLoading]= useState(true);
    const[error,setError]= useState(null);

    const fetchData =async ()=>{

        try {

            setTimeout(()=>{
                setData({id:1, name: "Nikunj Soni"});//fetching a data from some API
                setIsLoading(false);
            },2000);
            
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    //execute when the component starts itself

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div>
            <h1>Async State Example</h1>

            {isLoading ?(<div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading......</span>
            </div>):(error ?(<p>Error: {error.message}</p>):<p>Data:{JSON.stringify(data)}</p>)}
        </div>
    );

}

export default AsyncStateExample;