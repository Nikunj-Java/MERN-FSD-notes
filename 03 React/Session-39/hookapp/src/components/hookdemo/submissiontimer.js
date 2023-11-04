import { useEffect, useState } from "react";



function SubmissionTimer({submissionDate}){

    const [timeleft,setTimeLeft]= useState(null);

    const calculateTimeLeft=()=>{
        const now= new Date().getTime();
        const submissionTime= new Date(submissionDate).getTime();
        const timeDifference=submissionTime-now;

        if(timeDifference<=0){
            setTimeLeft("Submission Closed");
        }else{
            const days=Math.floor(timeDifference/(24*60*60*1000));
            const hours=Math.floor(timeDifference%(24*60*60*1000)/(60*60*1000));
            const minutes=Math.floor(timeDifference%(60*60*1000)/(60*1000));
            const seconds=Math.floor(timeDifference%(60*1000)/(1000));

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }

    useEffect(()=>{
        calculateTimeLeft();

        //upadte time
        const timeInterval=setInterval(calculateTimeLeft,1000);
        //clean up

        return()=> clearInterval(timeInterval);
    },[submissionDate])

    return(
        <div>
            <h2>Time Left for Deal</h2>
            <p>{timeleft}</p>
        </div>
    )
}

export default SubmissionTimer;