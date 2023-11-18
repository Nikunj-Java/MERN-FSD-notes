import { useMyContext } from "./MyContext";

function MyChild(){
    const {data,setData}=useMyContext();

    return (<div>
        <h3> Child</h3>
        <p>{data}</p>
        <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
    </div>)
}

export default MyChild;