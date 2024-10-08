import { ArrowRight2 } from "iconsax-react"
import { useSwiper } from "swiper/react"

interface props {
   index: number
   themes: {
      background: string;
      textColor: string;
   }[]
}

const NextButton = ({ index, themes }: props) => {
   const swiper = useSwiper()
   
   return (
      <button onClick={() => swiper.slideNext(1800)}>
         <ArrowRight2 style={{ color: themes[index].textColor }} className="duration-1000" />
      </button>
   )
}

export default NextButton
