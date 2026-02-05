// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { Slide } from './slide';
import { cn } from '@/lib/utils';
import { PartnerSlide } from './partner-slide';

interface Props {
    sliders?: any[] | null;
    perView?: number;
    className?: string
}

function PartnerSlider({ sliders, perView, className }: Props) {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    // Handle null or undefined sliders
    if (!sliders || sliders.length === 0) {
        return null;
    }

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}

                  breakpoints={{
                0: { slidesPerView: Math.min(1, sliders.length) },
    768: { slidesPerView: Math.min(3, sliders.length) },
    1024: { slidesPerView: Math.min(4, sliders.length) },
            }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => {
                    // console.log(swiper);
                    setSwiperInstance(swiper);
                }}
                className="w-full rounded-md"
            >
                {sliders.map((item, index) => (
                <SwiperSlide  key={index}  className={cn('slider-item relative z-10 flex flex-row py-2 lg:py-6 lg:gap-5 gap-3', className)}>
                    
                        <PartnerSlide item={item} />
                 
                </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            {/* <button
                onClick={() => swiperInstance?.slidePrev()}
                className="absolute top-1/2 -left-4 z-20 -translate-y-1/2 translate-x-2 rounded-full transition-all bg-gradient-to-r p-1 from-primary to-secondary shadow-[0_0_2px_1px_black]"
            >
                <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                onClick={() => swiperInstance?.slideNext()}
                className="absolute top-1/2 -right-4 z-20 -translate-y-1/2 -translate-x-2 rounded-full transition-all bg-gradient-to-l p-1 from-primary to-secondary shadow-[0_0_2px_1px_black]"
            >
                <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button> */}
        </div>
    );
}

export { PartnerSlider };