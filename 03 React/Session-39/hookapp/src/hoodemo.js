import RealTimeClock from "./components/hookdemo/realtimeclock";
import SubmissionTimer from "./components/hookdemo/submissiontimer";
import Timer from "./components/hookdemo/timer";
import UseEffectDemo from "./components/hookdemo/useeffect1";


function HookDemo(){
    return(
        <div>
        <UseEffectDemo/>
        <Timer/>
        <RealTimeClock/>
        <SubmissionTimer submissionDate="2023-11-04T23:59:59"/>
        </div>
        
    )
}

export default HookDemo;