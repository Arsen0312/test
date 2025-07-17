import {TOptionMainDataPage} from "@/app/page";
import React from "react";
import Image from "next/image";
import {getColorPack} from "@/feature/ProductCard/utils/getColorPack";
import starRatingIcon from "@/public/assets/starRatingIcon.svg"
import StarRatingIcon from "@/feature/ProductCard/ui/starRatingIcon";

type TProps = TOptionMainDataPage

const ProductCard = (props: TProps) => {
    const { server, seller, side, price, count } = props;

     const colorPack = getColorPack(seller.rating)

    return (
        <div className="flex gap-6">
            <span className="max-w-[104px] w-full">{server}</span>
            <span className="max-w-[168px] w-full">{side}</span>
            <span className="max-w-[232px] w-full h-[43px] flex gap-2">
                <div className="relative w-[28px] h-[28px]">
                    <Image alt={`${seller.username} avatar image`} src={seller.avatar} width={100} height={100} className="rounded-[50%] w-[28px] h-[28px]"/>
                    <div className="absolute bottom-0 right-0 w-[12px] h-[12px] bg-[white] rounded-[50%] flex items-center justify-center">
                        <div className={`w-[8px] h-[8px] rounded-[50%] ${seller.online ? "bg-green-500": "bg-gray-400"}`}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        <h3>{seller.username}</h3>
                        <div
                            className="text-xs flex items-center justify-center gap-0.5 px-1 py-0.5 rounded-[6px]"
                            style={{
                                backgroundColor: colorPack.bg,
                                color: colorPack.text
                            }}>
                            {seller.rating}
                            <StarRatingIcon fill={colorPack.text}/>
                        </div>
                    </div>
                    <span className="text-xs">
                        {seller.seniority}, {seller.reviews} отзывов
                    </span>
                </div>
            </span>
            <span className="max-w-[104px] w-full text-right">{count} кк</span>
            <span className="max-w-[104px] w-full text-right">{price} ₽</span>
        </div>
    );
};

export default ProductCard;