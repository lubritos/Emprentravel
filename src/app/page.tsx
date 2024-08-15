import Banner from "@/Components/molecules/banner";
import { Carousel } from "@/Components/molecules/Carousel";
import Form from "@/Components/molecules/form";
import { groupedItems, itemsShow } from "@/utils";
import { Team } from "@/utils/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" text-black flex min-h-screen flex-col items-center justify-between">
      <div id="Home">
        <Banner/>
      </div>
      <div id ='Services' className="flex flex-col items-center py-4">
        <h2 className="text-2xl capitalize font-bold m-4 leading-8" >OUR GREAT SERVICES</h2>
        <p className="text-base px-4 m-3 text-center w-3/4 leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
        <div className="flex px-4 py-8" >
          <div className="flex flex-col">
            <div className="flex px-4">
              <h3 className="text-1xl capitalize font-bold px-4"> airline tickets</h3>
            </div>
            <div className="flex flex-col p-4">
              <p className="flex p-4 leading-8">
                Duis ac adipiscing risus. Fusce posuere hendrerit velit sit amet scelerisque. Fusce ac nulla mauris. In accumsan eget sapien ut aliquet. Nunc pellentesque nisl at ante fermentum porta. Vestibulum dapibus sed leo nec condimentum.
              </p>
              <ul className="flex flex-col p-4 leading-8">
                <li>Nam sit amet eros vel nunc pharetra imperdiet</li>
                <li>Nam sit amet eros vel nunc pharetra imperdiet</li>
                <li>Nam sit amet eros vel nunc pharetra imperdiet</li>
                <li>Nam sit amet eros vel nunc pharetra imperdiet</li>
                <li>Nam sit amet eros vel nunc pharetra imperdiet</li>
              </ul>
              <p className="flex p-4 leading-8">
                Duis ac adipiscing risus. Fusce posuere hendrerit velit sit amet scelerisque. Fusce ac nulla mauris. In accumsan eget sapien ut aliquet. Nunc pellentesque nisl at ante fermentum porta. Vestibulum dapibus sed leo nec condimentum.
              </p>
            </div>
          </div>
          <div className="flex p-4">
            <Image src={'/assets/bus.jpg'} alt="" width={1200} height={500}/>
          </div>
        </div>      
      </div> 
      <div id ='Packages' className="flex min-h-screen flex-col items-center p-4">
        <h2 className="text-2xl capitalize font-bold m-4" >Most popular packages</h2>
        <p className="text-base px-4 m-3 text-center w-3/4 leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
        <Carousel title="" slider={groupedItems(Team, itemsShow)} gap="1rem" />
      </div>
      <div id ='ContactUs'
        style={{backgroundImage: "url('/assets/brujula.jpg')", height:'50rem'}}
        className="text-yellow-400 relative flex min-h-screen bg-no-repeat mt-4 w-full flex-col bg-center bg-cover items-center" 
        >
        <div className="absolute bg-zinc-800 w-full opacity-60 h-full p-4" />
        <div className="absolute z-10">
          <h2 className="text-2xl capitalize font-bold m-4 text-center leading-8 p-4" >Contact us</h2>
          <Form/>
        </div>
      </div>
      <footer className="flex w-full justify-around">
          <div className="flex flex-shrink-0 items-center justify-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
              <div>
                    <h1 className='text-gray-700'>Travelly</h1>
              </div>
          </div>
          <ul className="flex" >
            <li>2016</li>
            <li> - </li>
            <li>1017</li>
            <li>©Travel Tour. All rights reserved</li>
          </ul>
      </footer>
    </main>
  );
}
