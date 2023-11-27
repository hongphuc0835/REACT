
import React,{useState} from "react";

function RegistationForm(){
    //kiem soat hanh vi cua cac thanh phan trong form
    //Thong qua "useState componentd"
    const [input, setInput] = useState ({});
    const handleChange = (event)=> {
        const name = event.target.value;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        setInput(values => ({...values, [name]:value}))
    }
    const handleSubmit = (event)=> {
        //Kiểm soát bất đồng bộ dự kiện
        //Đảm bảo các sự kiện KHÔNG diễn ra đồng thời
        event.preventDefault();
        // console.log(inputs);
    return(
        <div> 
            <fom onSubmit={handleSubmit}>
                <label>
                    Enter your name: <input
                       type="text"
                       name="username"
                       value={input.userName || ""}
                       onChange={handleChange} />
                </label>
                <br/>
                <input type="submit"/>
            </fom>
        </div>
    )    
  }
}
export default RegistationForm;