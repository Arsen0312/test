import React from 'react';
import Image from "next/image"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-20 px-25 bg-[#DA3438] flex justify-between text-white mt-10">
            <div className="flex flex-col gap-7">
                <Image src="/assets/logoBimar.svg" alt="logo" width={288} height={100}/>
                <div className="flex items-center gap-10 text-[16px] font-medium leading-[26px]">
                    <span>
                        Лояльность
                    </span>
                    <span>
                        Скачать
                    </span>
                    <span>
                        Контакты
                    </span>
                    <span>
                        Где нас найти
                    </span>
                </div>
                <div className="flex items-center gap-3 text-[14px] font-normal leading-[22px]">
                    <span>
                        © 2025 BIMAR. Все права защищены.
                    </span>
                    <span>
                        •
                    </span>
                    <span>
                        Политика конфиденциальности
                    </span>
                    <span>
                        •
                    </span>
                    <span>
                        Политика конфиденциальности
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-3">
                        <Link href="https://apps.apple.com/kg/app/%D0%B1%D0%B8%D0%BC%D0%B0%D1%80/id6747991622"
                              className="">
                            <Image src="/assets/appStroreWhiteIcon.svg" alt="logo" width={120} height={40}/>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.navisdevs.bimar"
                              className="">
                            <Image src="/assets/googleStroreWhiteIcon.svg" alt="logo" width={120} height={40}/>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 text-right text-[14px] font-normal leading-[22px]">
                        <Link href="tel:+996500123456">
                            Телефон: +996 500 123 456
                        </Link>
                        <Link href="mailto:support@bimar.kg">
                            Email: support@bimar.kg
                        </Link>
                    </div>
                </div>
                <div className="flex gap-6 items-center justify-end">
                    <Link href="https://www.facebook.com/bimar.kg">
                        <Image src="/assets/facebook.svg" alt="logo" width={24} height={24}/>
                    </Link>
                    <Link href="https://www.instagram.com/bimar.kg">
                        <Image src="/assets/instagram.svg" alt="logo" width={24} height={24}/>
                    </Link>
                    <Link href="https://www.tiktok.com/@bimarkg">
                        <Image src="/assets/tiktok.svg" alt="logo" width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;