'use client'
import Slider from "react-slick"
import CardBanner from "../card/banner"


export default function SlickUI() {

    const settingsSlick = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots-rectangle',
    }


    const bannersData = [
        {
            background: '#F89939',
            title: 'Gestiona tu institución desde un solo lugar',
            description: 'Más ágil, más conectado, más inteligente.'
        },
        {
            background: '#3A8B7E',
            title: 'Adáptalo a tu forma de enseñar.',
            description: 'Todo lo que necesitas, cuando lo necesitas.'
        },
        {
            background: '#673A8D',
            title: 'Transforma la educación con tecnología que entiende tu realidad.'
        }
    ]


    return (
        <Slider
            {...settingsSlick}
            className={'slick-banner'}
        >
            {bannersData.map((banner, index) => (
                <CardBanner
                    data={banner}
                    key={`banner-${index}`}
                />
            ))}
        </Slider>
    )
}