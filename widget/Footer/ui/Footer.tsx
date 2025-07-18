import React from 'react';
import Image from "next/image";
import logo from "@/public/assets/logo.svg"
import tg from "@/public/assets/tg.svg"
import dc from "@/public/assets/dc.svg"
import vk from "@/public/assets/vk.svg"
import yt from "@/public/assets/yt.svg"
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className="border-t border-[--border] w-full h-auto text-[var(--p-text-gray)] font-sans font-normal text-base tracking-normal">
            <nav className="max-w-[1128px] pt-8 pb-12 flex justify-between" style={{ margin: "auto" }}>
                <div className="flex flex-col max-w-[296px] w-full">
                    <Link href="/">
                        <Image alt="logo" src={logo} width={118} height={24}/>
                    </Link>
                    <p className="mt-3 text-sm">© 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
                    <p className="mt-2 text-sm">Дизайн сделан в 0xHearts.com</p>
                </div>
                <div className="flex gap-2 flex-col max-w-[232px] w-full">
                    <h3 className="font-medium text-base text-[var(--h3-color)]">Поддержка</h3>
                    <div className="flex gap-1 flex-col">
                        <p className="text-sm">Написать в поддержку</p>
                        <p className="text-sm">Политика конфиденциальности</p>
                        <p className="text-sm">Пользовательское соглашение</p>
                    </div>
                </div>
                <div className="flex gap-3 max-w-[212px] w-full items-start">
                    <Image alt="icon telegram" src={tg} width={44} height={44}/>
                    <Image alt="icon discord" src={dc} width={44} height={44}/>
                    <Image alt="icon vk" src={vk} width={44} height={44}/>
                    <Image alt="icon youtube" src={yt} width={44} height={44}/>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;