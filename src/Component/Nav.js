import { React } from "react";
import { Link } from "react-router-dom";

export function Nav (){

return(
<>
<div className="Nav-Container">

<Link to={'/'} className="Nav-Bar">Home</Link>
<Link to={'/Students'} className="Nav-Bar">Student</Link>
<Link to={'/ContactUs'} className="Nav-Bar">Contact Us</Link>

</div>
</>

)

}
