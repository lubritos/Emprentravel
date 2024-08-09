const Form = [
    {
        label:'Nombre :',
        input: <input type="text" className="border border-black w-full h-12"/>
    },
    {
        label:'Apellido :',
        input: <input type="text" className="border border-black w-full h-12"/>
    },
    { 
        label:'Telefono :',
        input: <input type="phone" className="border border-black w-full h-12"/>
    },
    {
        label:'Email :',
        input: <input type="email" className="border border-black w-full h-12"/>
    },
]

const TextFile = ()=>{
    return(
        <div className="flex flex-col items-center w-96">
            {Form.map((item:any )=> (
                <div key={item.label} className='w-full'>
                    <label> {item.label} </label>
                    <div className='w-96 min-w-6 my-4 border-white'>{item.input}</div>
                </div>
            )
            )}   
        </div>
    )
}
export  default TextFile;