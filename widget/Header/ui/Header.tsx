import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import cls from "./Header.module.css"

const Header = () => {
    return (
        <header className="w-full bg-[#DA3438] py-[25px] px-[100px]">
            <nav className="w-full mx-auto flex justify-between items-center">
                <Image src="assets/logoBimar.svg" alt="logo" width={144} height={50}/>
                <div className="flex gap-[41px] items-center">
                    <Link href="#Лояльность" className={cls.navText}>Лояльность</Link>
                    <Link href="#Скачать" className={cls.navText}>Скачать</Link>
                    <Link href="#Карта" className={cls.navText}>Карта</Link>
                    <Link href="#Карта" className={cls.navText}>Где нас найти</Link>
                </div>
                <div className="flex gap-6 items-center">

                    <Link href="https://www.facebook.com/bimar.kg">
                        <Image src="assets/facebook.svg" alt="logo" width={24} height={24}/>
                    </Link>
                    <Link href="https://www.instagram.com/bimar.kg">
                        <Image src="assets/instagram.svg" alt="logo" width={24} height={24}/>

                    </Link>
                    <Link href="https://www.tiktok.com/@bimarkg">
                        <Image src="assets/tiktok.svg" alt="logo" width={24} height={24}/>

                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;