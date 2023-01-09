import './Login.scss'
import MembershipIntro from "../../components/LoginPage/MembershipIntro/MembershipIntro";
import SignInAccount from "../../components/LoginPage/SignInAccount/SignInAccount";

const Login = () => {
    return(
        <div className='login'>
            <div className="container">
                <h1 className="loginTitle">
                   Wellbeing made easier. We've got you
                </h1>
                <div className="loginMain">
                    <div className="membershipIntro">
                        <MembershipIntro/>
                    </div>
                    <div className="signInAccount">
                        <SignInAccount/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login