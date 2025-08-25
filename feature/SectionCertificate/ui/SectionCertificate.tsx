"use client"

import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionCertificate = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section className="flex flex-col gap-10 self-stretch items-center mt-9">
            <div className="flex max-w-[1440px] h-auto px-[100px] flex-col items-center">
                <h2 className="max-w-[1203px] text-[var(--primary)] text-center text-4xl font-bold leading-[46px]">
                    Подарочные сертификаты
                </h2>
                <p className="text-[28px] font-semibold text-[#212121] leading-9 max-w-[1240px] mt-3.5 text-center">
                    Дарите вкус и заботу вашим близким. Наши подарочные сертификаты — это
                    возможность выбрать любимые продукты, турецкие деликатесы и свежие
                    блюда в любое удобное время
                </p>
            </div>

            <div className="w-full relative flex justify-center">
                <div
                    className="max-h-[686px] aspect-[1440/686] bg-contain bg-no-repeat w-full h-auto bg-center"
                    style={{backgroundImage: "url(/assets/Иллюстрация.png)"}}
                >
                    <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                        <Slider
                            {...sliderSettings}

                        >
                            {[1, 2, 3].map(id => (
                                <Image
                                    key={id}
                                    src="/assets/Cертификат.svg"
                                    alt="Сертификат"
                                    width={783}
                                    height={380}
                                    className="object-contain"
                                    priority
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCertificate;