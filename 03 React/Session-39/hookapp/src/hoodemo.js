import RealTimeClock from "./components/hookdemo/realtimeclock";
import SubmissionTimer from "./components/hookdemo/submissiontimer";
import Timer from "./components/hookdemo/timer";
import UseCaseInputValidation from "./components/hookdemo/usecaseinputvalidation";
import UseEffectDemo from "./components/hookdemo/useeffect1";
import UserList from "./components/hookdemo/userlist";


function HookDemo(){
    return(
        <div>
        <UseEffectDemo/>
        <Timer/>
        <RealTimeClock/>
        <SubmissionTimer submissionDate="2023-11-05T23:59:59"/>
        <UseCaseInputValidation/>
        <UserList/>
        </div>
        
    )
}

export default HookDemo;