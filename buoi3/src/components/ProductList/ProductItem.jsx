import React from 'react'

const ProductItem = ({ item }) => {
    return (
        <div className="product-item" key={item.id}>
            <img src={item.image} alt="" />
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>
            <button>Thêm vào giỏ hàng</button>
        </div>
    )
}

export default ProductItem
