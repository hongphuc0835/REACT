
import "./style.css"

import { useState } from "react";
import Input from "./input";
import Button from "./button";
import validateEmail from "./utils";


export default function App(){
  const [email,setEmail] = useState(
   {
    value:"",
    isTouched:false,
    isValid:false
   }
  );
  const [pwd, setPwd] = useState({
    value:"",
    isTouched:false,
    isValid:false
  });
  const [confirmPwd, setConfirmPwd] = useState({
    value:"",
    isTouched:false,
    isValid:false
  });
  function handleEmailInput(e){
    setEmail({
      isTouched:true,
      value:e.target.value,
      isValid: validateEmail(e.target.value)
    });
  }
  function handlePwdInput(e){
    setPwd({
      isTouched:true,
      value:e.target.value,
      isValid:e.target.value.lenght >= 6 ? true : false
    });

  }
  function handleConfirmPwdInput(e){
    setConfirmPwd({
      isTouched:true,
      value:e.target.value,
      isValid:e.target.value === pwd.value ? true : false
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    window.alert(
      `Submitted: \n Email: ${email.value} \n Password: ${pwd.value}`
    );
  }
  const formIsValid = email.isValid && pwd.isValid && confirmPwd.isValid;

  return(
    <div className="App">
      <div className="form-container">
      <Input
        name="email"
        type="text"
        label="Email"
        onChange={handleEmailInput}
        isValid={email.isValid}
        isTouched={email.isTouched}
        placeholder="Email..."
        value={email.value}
        errorMng="Enter valid email"
        />
        <Input
        name="password"
        type="password"
        label="password"
        onChange={handlePwdInput}
        isValid={pwd.isValid}
        isTouched={pwd.isTouched}
        placeholder="password..."
        value={pwd.value}
        errorMng="Minimum 6 characters"
        />
        <Input
        name="confirmPwd"
        type="password"
        label="Confirm password"
        onChange={handleConfirmPwdInput}
        isValid={confirmPwd.isValid}
        isTouched={confirmPwd.isTouched}
        placeholder="Confirm password..."
        value={confirmPwd.value}
        errorMng="Password do not match!"
        />
        <Button 
        text="REGISTER"
        ocClick={handleSubmit}
        disabled={!formIsValid}
        />
        
      </div>
    </div>
  );
}
