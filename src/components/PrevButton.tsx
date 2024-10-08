import { ArrowLeft2 } from 'iconsax-react'
import { useSwiper } from 'swiper/react'

interface props {
   index: number
   themes: {
      background: string;
      textColor: string;
   }[]
}

const PrevButton = ({ index, themes }: props) => {
   const swiper = useSwiper()
   
   return (
      <button onClick={() => swiper.slidePrev(1800)}>
         <ArrowLeft2 style={{ color: themes[index].textColor }} className="duration-1000"/>
      </button>
   )
}

export default PrevButton
