import white from "../assets/white.png"
import green from "../assets/green.png"
import red from "../assets/orange.png"
import blue from "../assets/blue.png"
import black from "../assets/black.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade"
import 'swiper/css/pagination';
import { Dispatch } from "react"
import NextButton from "./NextButton"
import PrevButton from "./PrevButton"

const images = [
   {
      src: white,
   },
   {
      src: green,
   },
   {
      src: red,
   },
   {
      src: blue,
   },
   {
      src: black,
   },
]

interface SliderProps {
   index: number
   setIndex: Dispatch<React.SetStateAction<number>>
   numberOfThemes: number
   themes: {
      background: string;
      textColor: string;
   }[]
}

const Slider = ({ index, setIndex, numberOfThemes, themes }: SliderProps) => {   
   return (
      <div className="absolute inset-0 text-white z-10">
         <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop
            className="h-full flex flex-col" 
            onActiveIndexChange={(swiper) => setIndex(swiper.realIndex)} 
         >
            {images.map(image => (
               <SwiperSlide key={image.src} className='h-full flex justify-center items-center'>
                  <img src={image.src} alt="hello" className="w-[min(36rem,80%)] p-6 aspect-square object-cover pointer-events-none" />
               </SwiperSlide>
            ))}
            
            <div className="z-[20] flex items-center justify-center gap-12 py-4">
               <PrevButton index={index} themes={themes}/>
               <div style={{ color: themes[index].textColor }} className="text-lg font-medium">
                  <span>0{index + 1}</span>
                  <span className="opacity-60">/</span>
                  <span className="opacity-60">0{numberOfThemes}</span>
               </div>
               <NextButton index={index} themes={themes}/>
            </div>
         </Swiper>
      </div>
   )
}

export default Slider
