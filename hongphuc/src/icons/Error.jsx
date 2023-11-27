import {IconConText} from"react-icons";
import {FaExclamationTriangle } from"react-icons/fa";


export default function ErrorIcon(){
    return(
        <IconConText.provider value = {{color:"forestgreen",size:"1.7rem"}}>
        <FaExclamationTriangle/>

        </IconConText.provider>
    );
}