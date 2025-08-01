import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation, Autoplay } from "swiper/modules"
import { Card, CardContent } from "../../../../../shared/ui/card"
import type { CarouselCustomProps } from "../type"

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2,
  },
}

export function CarouselCustom({
  items,
  renderCardContent,
  className,
}: Readonly<CarouselCustomProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Swiper
      className={className}
      modules={[Navigation, Autoplay]}
      spaceBetween={25}
      slidesPerView={3}
      loop={true}
      onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={breakpoints}
    >
      {items.map((item, index) => (
        <SwiperSlide key={item.id || index}>
          <Card
            className={`border border-border card-hover-effect animate-on-scroll ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <CardContent className="p-6">
              {renderCardContent(item, index === currentIndex)}
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
