import Image from "next/image";
import Button from "../atoms/Button";
import Separate from "../atoms/Separate";

export default function Banner (){
    return (
        <div id="Home" style={{backgroundImage: "url('/assets/header-travel.jpg')",display:"flex"}}
            className="relative h-screen bg-no-repeat bg-center items-center">
            <div className="absolute bg-zinc-800 w-full opacity-60 h-full p-4" />
            <div className="items-center justify-center w-screen" style={{display: 'flex',flexDirection: 'column'}}>
                <h2 className="text-white uppercase text-6xl font-bold text-center flex-1 items-center mb-4 z-10">Awesome & Creative</h2>
                <h2 className="text-yellow-400 uppercase text-6xl font-bold text-center flex-1 items-center mt-4 mb-4 z-10">Travel template</h2>
                <Separate/>
                <p className="leading-8 text-center w-9/12 items-center justify-center mt-4 text-white z-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500</p>
                <Button>explore more</Button>
            </div>
        </div>
    )
}