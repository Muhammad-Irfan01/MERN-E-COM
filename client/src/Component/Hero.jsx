
import { MdOutlineLocalOffer, MdStar } from "react-icons/md"
import { NavLink } from "react-router-dom"


const Hero = () => {
  return (
    <section className=" bg-center pl-5 bg-no-repeat bg-custom-pattern bg-cover h-screen w-full flex items-center">

       <div className="">
     
            <div className="top-23 sm:top-32">
                <h1 className="font-bold text-2xl lg:text-5xl  max-w-[37rem]">Digital Shopping Hub Junction</h1>
                <p className="md:text-gray-500 mt-6 max-w-[33rem] text-md text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione provident minima, fugiat animi qui culpa saepe nemo totam,<br/> rerum quidem doloremque dolor nisi, voluptate nostrum autem earum ducimus excepturi? Animi, obcaecati ratione?</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start gap-x-4 mt-5">
                <div className="flex text-lg md:text-2xl gap-x-3 md:gap-x-6 mt-1">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </div>
                <div className="font-bold text-lg md:text-2xl">176K <span className="font-normal text-lg md:text-2xl">Excellent Reviews</span></div>
            </div>
            <div className="flex max-xs:flex-col gap-4 mt-5">
                <NavLink to={''} className={'btn bg-black text-white rounded-full p-3 flex justify-center w-[120px]'}>
                    Shop Now
                </NavLink>
                <NavLink to={''} className={'btn bg-black text-white rounded-full p-3 flex justify-center gap-x-1 w-[120px]'}>
                    <MdOutlineLocalOffer className="text-2xl"/>
                    Offers
                </NavLink>
            </div>
        </div>
    </section>
    
  )
}

export default Hero