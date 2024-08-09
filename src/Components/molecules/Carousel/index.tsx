"use client"
import React from "react";
import { Carousel as RPCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export const CAROUSEL_PREV_LABEL = 'prev'
export const CAROUSEL_NEXT_LABEL = 'next'
// export const PATH_IMAGES = process.env.PUBLIC_URL + '/images/';

interface IProps {
    slider:any,
    title: string,
    gap: string,
}
const displayCount = 1
export function Carousel({
    slider,
    title,
    gap,
}: IProps) {
    const [currentIndex, setSlide] = React.useState(0)
    const propsCarousel = {
        centerMode: true,
        centerSlidePercentage: 100 / displayCount,
        selectedItem: currentIndex,
        showArrows: false,
        showThumbs: false,
        showIndicators: false,
        showStatus: false,
        slidesToShow: displayCount,
        slidesToScroll:  displayCount,
    }
    function handleArrow (currentIndex: number, type: string) {
        let currentSlider = 0
        if (type === CAROUSEL_PREV_LABEL) {
        currentSlider = (!currentIndex ? currentIndex - displayCount : currentIndex - 1) + slider.length
        }
        if (type === CAROUSEL_NEXT_LABEL) {
        currentSlider = !currentIndex ? currentIndex + displayCount : currentIndex + 1
        }
        return currentSlider % slider.length
    }

    return (
    <div className="mt-4 relative">
        {title &&
        <div className="my-4 mx-20 items-center text-2xl">
            {title}
        </div>}
        <div className="bg-terciary cursor-pointer absolute p-2 z-10 left-2.5" style={{borderRadius:'10rem',top:'35%'}}
        onClick={
                () => setSlide(
                    (prev) => prev === slider.length ?
                    slider.length - 1 : 
                    handleArrow(currentIndex, CAROUSEL_PREV_LABEL))
            }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
            </svg>      
        </div>
        <RPCarousel className="carouselRfp" {...propsCarousel}>
        {slider.map((s: any) =>
        <div
        key={s}
        style={{ display: "flex", width: "100%", gap: "1rem", justifyContent: "space-around", flexWrap:"wrap"}}>
            {s.map((item: any) =>
            <div key={item} className="bg-white " style={{border: "1px solid #ccc"}}>
                <div 
                    className="h-72 bg-no-repeat bg-cover bg-center items-center flex hover:contrast-50"
                    style={{
                        backgroundImage: `url(${item.image})` || '', width:"25rem"
                    }}
                    onClick={() => {}}
                >
                </div>
                <div className="flex flex-col place-items-start p-4" >
                    <div
                        className="flex text-black hover:text-yellow-400 font-bold uppercase my-4"
                        >
                        <span>{item.title}</span>
                    </div>                  
                    <div
                        className="text-black w-60 items-start flex text-left"
                        >
                        <span>{item.description}</span>
                    </div>
                </div>
            </div>
            )}
        </div>)}
        </RPCarousel>
        {slider.length > displayCount &&
        <div className="bg-terciary cursor-pointer absolute p-2 z-10 right-2.5"style={{borderRadius:'10rem',top:'35%'}}
            onClick={() => setSlide(
                (prev: any) => handleArrow(currentIndex, CAROUSEL_NEXT_LABEL)
            )}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </div>
        }
        <div className="indicator">
            {[...Array(Math.ceil(slider.length))].map(
                (item:any, index: number) =>
                <span
                key={index}
                className={currentIndex === index ? "active" : ""}
                onClick={
                    () => setSlide(index)
                }>
                    {index}
                </span>
            )}
        </div>
    </div>
    )
}