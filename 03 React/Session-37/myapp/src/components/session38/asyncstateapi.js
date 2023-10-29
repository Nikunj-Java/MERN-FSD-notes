import { useEffect,useState } from "react";


const AsyncApiExample =()=> {

    const[data,setData]= useState(null);
    const[isLoading,setIsLoading]= useState(true);
    const[error,setError]= useState(null);

    const fetchData =async ()=>{

        try {

            // //fetch data
            const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result= await response.json();

            setTimeout(()=>{
                setData(result);//fetching a data from some API
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
            <h1>Async State API Example</h1>

            {isLoading ?(<div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading......</span>
            </div>):(error ?(<p>Error: {error.message}</p>):<p>Data:{JSON.stringify(data)}</p>)}
        </div>
    );

}

export default AsyncApiExample