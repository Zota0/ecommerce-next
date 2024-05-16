// ImageCarousel.js
import React, { useState } from "react";

const ImageCarousel = ({ images, Click, Style, StartIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    (images == undefined || images == null) ? images = [] : null;
    StartIndex ? setCurrentIndex(StartIndex) : null;

    if(!Style || Style.length <= 0) {
        Style = {
            main: "relative w-96 h-96 overflow-hidden p-0 m-2",
            img_group: "relative w-full h-full",
            img_btn: "absolute inset-0 flex items-center justify-center",
            img: "object-contain w-[90%] h-[90%]",
            btn_group: "absolute top-0 left-0 w-full h-full flex justify-between items-center",
            btn: "bg-gray-800 text-white px-4 py-2 rounded-full",
            radio_wrapper: "overflow-hidden absolute top-[95%] bottom-0 left-[20%] w-[60%] items-center h-4 flex justify-between",
            radio_group: "flex h-full w-full justify-center items-center",
            radio_btn: "bg-black p-32 mx-1 w-4 h-4 rounded-full border-4 border-gray-800",
        };
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    const onImageClick = (e) => {
        Click(e);
    };

    return (
        <div className={Style.main}>
            <div className={Style.img_group}>
                <button className={Style.img_btn} onClick={(e) => onImageClick(e)}>
                    <img className={Style.img} id={currentIndex} src={images[currentIndex]} alt={`Image ${currentIndex}`} />
                </button>
            </div>
            <div className={Style.nav_group}>
                <button className={Style.nav_btn +" "+ Style.nav_btn_prev} onClick={goToPrev}>Prev</button>
                <button className={Style.nav_btn +" "+ Style.nav_btn_prev} onClick={goToNext}>Next</button>
            </div>
            <div className={Style.radio_wrapper}>
                <div className={Style.radio_group}>
                    {images.map((_, index) => (
                        <input
                            key={index}
                            type="radio"
                            className={Style.radio_btn}
                            checked={index === currentIndex}
                            onChange={() => goToImage(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
