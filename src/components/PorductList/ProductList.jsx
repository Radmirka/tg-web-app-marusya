import React, { useState } from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from '../hooks/useTelegram';

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 1222, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Джинсы 3', price: 4333, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 7000, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 5', price: 2455, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 4', price: 20000, description: 'Зеленого цвета, теплая'},
]

const getTotalPrice = (items) => {
    return items.reduce(acc, item => {
        return acc += item.price;
    }, 0);
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItem = [];

        if(alreadyAdded) {
            newItem = addedItems.filter(item => item.id !== product.id);
        } else {
            newItem = [...addedItems, product];
        }

        setAddedItems(newItem);

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            });
        }
    }

    return (
        <div className={'list'}>
            {ProductList.map(item => {
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            })}
        </div>
    );
};

export default ProductList;