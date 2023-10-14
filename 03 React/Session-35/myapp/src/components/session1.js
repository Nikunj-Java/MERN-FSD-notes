import { Header } from "./session1/header";
import { UserDetails } from "./session1/userDetails";

function Session1(props){

    //const mymsg=props.message;

    return(<div>
        <Header/>
        <UserDetails msg="Testing Sub Child" />
        <h4>{props.message}</h4>
    </div>);
}

export default Session1;