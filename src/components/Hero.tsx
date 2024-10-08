import { Apple, HambergerMenu, ShoppingBag, UserSquare } from "iconsax-react"
import Slider from "./Slider"
import { useState } from "react"
import { cn } from "../lib/util"
import { motion } from "framer-motion"

const themes = [
   {
      background: "#f4f4f5",
      textColor: "#09090b",
      navColor: "#52525b"
   },
   {
      background: "#d9f99d",
      textColor: "#09090b",
      navColor: "#a3e635"
   },
   {
      background: "#f87171",
      textColor: "#ffffff",
      navColor: "#ef4444"
   },
   {
      background: "#94a3b8",
      textColor: "#ffffff",
      navColor: "#64748b"
   },
   {
      background: "#09090b",
      textColor: "#ffffff",
      navColor: "#18181b"
   },
]

const Hero = () => {
   const [index, setIndex] = useState(0)
   const [isNavOpen, setIsNavOpen] = useState(false)
   
   return (
      <section style={{ background: themes[index].background, color: themes[index].textColor }} className="relative h-screen font-Poppins transition duration-[2s]">
         <div className="relative container px-6 xl:px-12 mx-auto flex flex-col h-full">
            <div className="relative z-20 py-6 flex justify-between items-center">
               <a href="#">
                  <Apple style={{ color: themes[index].textColor}} className="duration-1000" variant="Bold" size={32}/>
               </a>
               
               <nav className="space-x-12 font-light max-md:hidden">
                  <a href="#" className="hover:opacity-65 duration-300">New Releases</a>
                  <a href="#" className="hover:opacity-65 duration-300">Men</a>
                  <a href="#" className="hover:opacity-65 duration-300">Women</a>
                  <a href="#" className="hover:opacity-65 duration-300">Kids</a>
                  <a href="#" className="hover:opacity-65 duration-300">Shop All</a>
               </nav>
               
               {/*mobile nav */}
               <motion.nav 
                  initial={{ scale: 0 }}
                  animate={{ scale: isNavOpen ? 1 : 0 }}
                  transition={{ duration: 0.5, bounce: 0.5, ease: "easeInOut" }}
                  style={{
                     color: themes[index].navColor
                  }}
                  className="space-y-6 origin-top-right text-2xl font-semibold bg-white text-zinc-950 md:hidden flex flex-col justify-center items-start absolute top-6 rounded-md w-full p-6 h-[calc(100vh-44px)] overflow-hidden"
               >
                  <div className="flex justify-between items-start absolute top-0 left-0 w-full">
                     <a href="#" className="p-6 rounded-br-xl" style={{ background: themes[index].navColor}}>
                        <Apple className="duration-1000 text-white" variant="Bold" size={32}/>
                     </a>
                     <button style={{ background: themes[index].background }} onClick={() => setIsNavOpen(!isNavOpen)} className="hidden max-md:block rounded-bl-xl p-1 rounded-tr">
                        <HambergerMenu style={{ color: themes[index].textColor }} size={24}/>
                     </button>
                     
                  </div>
                  
                  <a href="#" className="opacity-50 hover:opacity-100 duration-300">New Releases</a>
                  <a href="#" className="opacity-50 hover:opacity-100 duration-300">Men</a>
                  <a href="#" className="opacity-50 hover:opacity-100 duration-300">Women</a>
                  <a href="#" className="opacity-50 hover:opacity-100 duration-300">Kids</a>
                  <a href="#" className="opacity-50 hover:opacity-100 duration-300">Shop All</a>
               </motion.nav>
               
               <div className="flex items-center gap-3 md:gap-6">
                  <a href="#" className="hover:opacity-65 duration-300">
                     <UserSquare strokeWidth={1} size={22} />
                  </a>
                  <a href="#" className="hover:opacity-65 duration-300">
                     <ShoppingBag strokeWidth={1} size={22} />
                  </a>
                  
                  <button style={{ background: themes[index].textColor }} onClick={() => setIsNavOpen(!isNavOpen)} className="hidden max-md:block p-1 rounded-md">
                     <HambergerMenu style={{ color: themes[index].background }} size={24}/>
                  </button>
               </div>
            </div>
            
            <div className="relative w-full flex pt-20 justify-center flex-1">
               <h1 className="text-5xl sm:text-7xl md:text-[7rem] xl:text-[11rem] font-bold text-center leading-none">
                  <span>Airpods</span>
                  <span>{" "}</span>
                  <span className={cn("max-text relative z-10 text-transparent opacity-75 duration-1000", { "max-text-white": themes[index].textColor === "#ffffff" })}>Max</span>
               </h1>
               
               <div className="absolute bottom-20 md:bottom-10 left-0 flex flex-col md:items-start w-full md:w-[280px] z-[12]">
                  <p className="md:text-lg max-md:text-center font-extralight">
                     A perfect balance of exhilarating high-fidelity audio and the 
                     effortless magic of airpods.
                  </p> 
                  <div className="flex items-center max-md:justify-center gap-4 py-4">
                     <div className="size-8 max-md:size-6 rounded-full bg-[linear-gradient(to_bottom,white_50%,#d4d4d8_50%)]"></div>
                     <div className="size-8 max-md:size-6 rounded-full bg-[linear-gradient(to_bottom,#ecfccb_50%,#4d7c0f_50%)] opacity-60"></div>
                     <div className="size-8 max-md:size-6 rounded-full bg-[linear-gradient(to_bottom,#fca5a5_50%,#b91c1c_50%)] opacity-90"></div>
                     <div className="size-8 max-md:size-6 rounded-full bg-[linear-gradient(to_bottom,#94a3b8_50%,#475569_50%)]"></div>
                     <div className="size-8 max-md:size-6 rounded-full bg-[linear-gradient(to_bottom,#a1a1aa_50%,#18181b_50%)]"></div>
                  </div>
                  
                  <button 
                     style={{
                        borderColor: themes[index].textColor,
                        color: themes[index].textColor,
                     }} 
                     className="px-8 py-3 max-md:mt-1 mt-4 max-md:mx-auto border rounded-full duration-300"
                  >
                     Buy Now
                  </button>
                  
               </div>
            </div>
            
         </div>
         <Slider index={index} setIndex={setIndex} numberOfThemes={themes.length} themes={themes}/>
      </section>
   )
}

export default Hero
