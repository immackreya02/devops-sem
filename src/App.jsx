import {useState} from "react";

function App(){

  const otp = 457154;
  const [message,setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [cotp, setCotp] = useState("");
  //const [policy, setPolicy] = useState(false);

  function check(){
    if(username===""||password===""||email===""||cpassword===""){
      setMessage("All fields are required");
    }

    if(!email.includes('@')||!email.includes('.')){
      setMessage("Invalid E-Mail address");
    }

    else if(password.length<8){
      setMessage("Password must be atleast 8 characters");
    }

    else if(password!==cpassword){
      setMessage("Password do not match. Please enter correctly");
    }

    else{
    setMessage("Enter the OTP given: " + otp);
    }
  }

    function otpCheck(){
      if(otp!==Number(cotp)){
        setMessage("Invalid OTP");
      }
      else{
        setMessage("Registration Successful");
      }
    }
  return(
    <div>
      <h1>Registration form</h1>
      <input type="text" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="email" placeholder="Enter you E-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <input type="password" placeholder="Confirm password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)}/>

      <br /><br />

      <button onClick={check}>Generate OTP</button>

      <br /><br />

      <input type="otp" placeholder="Enter otp" value={cotp} onChange={(e)=>setCotp(e.target.value)}/>

      <br /><br />

      <button onClick={otpCheck}>Confirm</button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;