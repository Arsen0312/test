import React from 'react';

type TProps = {
    title: string;
    description: string;
}

const TextCurds = (props: TProps) => {
    const { description, title } = props

    return (
        <div className="w-full flex flex-col gap-6 text-center px-10 py-6 bg-white rounded-3xl boxShadowForCard">
            <span className="text-[var(--primary)] text-[28px] leading-[36px] font-bold">
                {title}
            </span>
            <p className="text-[var(--primary)] text-[22px] leading-[28px] font-semibold ">
                {description}
            </p>
        </div>
    );
};

export default TextCurds;