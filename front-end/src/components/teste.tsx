import { FC } from "react";
import { ProductModel } from "../types/Product";

interface Props {
    product: ProductModel
}


const Product: FC<Props> = ({ product }) =>  (
    <div>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
)

export default Product;
