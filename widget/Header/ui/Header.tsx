import React from 'react';
import Image from "next/image";
import Link from "next/link";
import SearchProduct from '@/feature/SearchProduct/ui/SearchProduct';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from '@/components/ui/button';

const Header = () => {
    return (
        <header className="w-full border-b border-gray-200" style={{padding: "12px 0", background: "white"}}>
            <nav className="flex" style={{maxWidth: "1128px", margin: '0 auto'}}>
                <div className="flex items-center w-1/2 gap-12.5">
                    <Link href="/" style={{width: "118px", height: "24px"}}>
                        <Image src="/assets/logo.svg" alt="logo" width={118} height={24}
                               style={{width: "118px", height: "24px"}}/>
                    </Link>
                    <SearchProduct/>
                </div>
                <div className="flex items-center justify-end w-1/2">
                    <div className="flex items-center gap-4">
                        <Select>
                            <SelectTrigger className="border-none shadow-none p-0">
                                <SelectValue placeholder="Поддержка"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Моральное">
                                    Моральное
                                </SelectItem>
                                <SelectItem value="Материальное">
                                    Материальное
                                </SelectItem>
                                <SelectItem value="Духовное">
                                    Духовное
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="border-none shadow-none p-0">
                                <SelectValue placeholder="Русский"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Китайский">
                                    Китайский
                                </SelectItem>
                                <SelectItem value="Японский">
                                    Японский
                                </SelectItem>
                                <SelectItem value="Французский">
                                    Французский
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="border-none shadow-none p-0">
                                <SelectValue placeholder="RUB"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="USD">
                                    USD
                                </SelectItem>
                                <SelectItem value="EUR">
                                    EUR
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex gap-1 ml-6">
                        <Button variant="white">
                            Вход
                        </Button>
                        <Button>
                            Регистрация
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;