import React from 'react';

type TProps = {
    title: string;
    img: React.ReactElement
}

const BonusCurd = (props: TProps) => {
    const { title, img } = props

    return (
        <div className="max-w-[606px] w-full flex flex-col gap-6 text-center px-10 py-6 bg-white rounded-3xl boxShadowForCard">
            <span className="flex gap-4 items-center">
                <div className="w-[154px] h-[154px]">
                    {img}
                </div>
                <span className="text-[var(--primary)] text-[28px] leading-[36px] font-bold">
                    {title}
                </span>
            </span>
        </div>
    );
};

export default BonusCurd;