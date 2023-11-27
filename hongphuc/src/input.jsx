import ErrorIcon from "./icons/valid";
import Valid from "./icons/valid"
export default function Input(props){
     return(
         <div
         className={`input-group ${
            !props.isValid && props.isTouched
            ? "invalid"
            :`${props.isValid && props.isTouched ? "Valid" : ""}` }`}
         
         >
            <label htmlFor={props.name}>{props.label}</label>
            <input className="input" 
            name={props.name} 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e)=>props.onChange(e)}/>

          <span className= "input_error">{`${
             !props.isTouched && !props.isTouched ? props.errorMng:""
          }`}
           </span>
           <div className="input_icon">
            {props.isTouched && !props.isValid && <ErrorIcon/>}
            {props.isTouched && props.isValid && <Valid/>} 

           </div>

         </div>

     );

}