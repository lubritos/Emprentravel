interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: ()=>{},
    children: any,

}

const Button = ({
    type,
    onClick,
    children,
}: ButtonProps) => {
    return (
        <button
            className="font-bold hover:bg-secondary z-10 bg-yellow-400 border-yellow-400 mt-4 py-4 px-4 rounded-md uppercase text-sm flex text-white"
            >
            {children}
        </button>
    );
}
export default Button;