import Button from "../atoms/Button";
import Textarea from "../atoms/Textarea";
import TextFile from "../atoms/TextFile";

const Form = ()=>{
    return(
        <div className="py-4 flex flex-col items-center leading-4">
            <TextFile/>
            <Textarea/>
            <Button> enviar</Button>
        </div>
    )
}
export default Form;