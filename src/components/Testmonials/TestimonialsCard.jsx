import { Swiper, SwiperSlide } from 'swiper/react';
import { testi1, testi2, testi3, testi1text, testi2text, testi3text } from '../../assets/assetsData';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

const TestimonialsCard = () => {
  return (
    <div className='px-6 py-12 lg:px-0'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='md:max-[2000px]:w-[500px] md:max-[2000px]:h-[700px]'
      >
        <SwiperSlide className='rounded-[18px] relative'>
            <img src={testi1} alt="" className='rounded-[18px]'/>
            <img src={testi1text} alt="" className='absolute bottom-0 xl:left-6'/>
        </SwiperSlide>
        <SwiperSlide className='rounded-[18px]'>
            <img src={testi2} alt=""/>
            <img src={testi2text} alt="" className='absolute bottom-0 xl:bottom-[-30px] xl:left-8'/>
        </SwiperSlide>
        <SwiperSlide className='rounded-[18px]'>
            <img src={testi3} alt=""/>
            <img src={testi3text} alt="" className='absolute bottom-0 xl:bottom-[-30px] xl:left-8'/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default TestimonialsCard;