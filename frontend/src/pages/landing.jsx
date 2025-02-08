import "../App.css";
import { Link, useNavigate } from "react-router-dom";
function LandingPage() {
    const router=useNavigate();
  return (
   <div className="landingPageContainer">
    <nav>
        <div className="navHeader"><h1>Meetify</h1></div>
        <div className="navlist">
            <p onClick={()=>{
                 router("/guest@738");
            }}>Join as Guest</p>
            <p onClick={()=>{
                 router("/auth");
            }}>Register</p>
            <div role="button" onClick={()=>{
                 router("/auth");
            }}>
                <p>Login</p> 
            </div>
        </div>
    </nav>
     <div className="landingMainContainer">
        <div>
            <h1><span style={{color:"#FF9838"}}>Connect </span>with your loved ones</h1>
            <p>Cover a distance by Meetify </p> 
            <div role="button">
            <Link to={"/auth"}>Get Started</Link>
            </div>
        </div>
        <div>
            <img src="/mobile.png" alt="" />
        </div>
     </div>
  </div>
  )
}

export default LandingPage;
