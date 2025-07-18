import React from 'react';
import {TOptionMainDataPage} from "@/app/page";

interface IProductProps {
    render: (item: TOptionMainDataPage) => React.ReactElement;
    list: TOptionMainDataPage[]
    isLoading: boolean
}

const ProductList = (props: IProductProps) => {
    const { render, list, isLoading } = props;

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (!list.length) {
        return <div>Нету товаров в наличии</div>;
    }

    return (
        <div>
            <ul className="flex flex-col gap-2 mt-3">
                {list.map((item: TOptionMainDataPage, id) =>
                    <React.Fragment key={id}><li>{render(item)}</li> { id !== list.length - 1 && <hr/>} </React.Fragment>
                )}
            </ul>
        </div>
    );
};

export default ProductList;