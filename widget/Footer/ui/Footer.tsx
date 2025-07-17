import React from 'react';
import Image from "next/image";
import logo from "@/public/assets/logo.svg"

const Footer = () => {
    return (
        <footer className="border-t border-gray-500 w-full">
            <nav className="max-w-[1128px] mb-12" style={{ margin: "auto" }}>
                <div>
                    <Image alt="logo" src={logo} width={118} height={24}/>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;