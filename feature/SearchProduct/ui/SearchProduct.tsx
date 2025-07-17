"use client"

import { Input } from '@/components/ui/input';
import React from 'react';
import Image from "next/image";

const SearchProduct = () => {
    return (
        <div className="relative w-full max-w-sm">
            <Image alt="SearchIcon" src="/assets/search.svg" width={16} height={16} className="absolute" style={{ top: "50%", left: "12px", transform: "translate(0, -50%)" }} />
            <Input type="text" className="pl-10 text-sm pt-1.5 pb-1.5 w-full" placeholder="Поиск игр и приложений..." />
        </div>
    );
};

export default SearchProduct;