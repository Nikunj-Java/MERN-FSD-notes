import RealTimeClock from "./components/hookdemo/realtimeclock";
import SubmissionTimer from "./components/hookdemo/submissiontimer";
import Timer from "./components/hookdemo/timer";
import UseCaseInputValidation from "./components/hookdemo/usecaseinputvalidation";
import UseEffectDemo from "./components/hookdemo/useeffect1";


function HookDemo(){
    return(
        <div>
        <UseEffectDemo/>
        <Timer/>
        <RealTimeClock/>
        <SubmissionTimer submissionDate="2023-11-05T23:59:59"/>
        <UseCaseInputValidation/>
        </div>
        
    )
}

export default HookDemo;