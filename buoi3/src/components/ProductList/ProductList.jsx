import { productList } from '../data/productList'
import ProductItem from './ProductItem'

const ProductList = () => {

    console.log(productList);

    return (
        <>
            <div className="product-list">
                {productList.map((item) => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default ProductList;