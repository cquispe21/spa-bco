import { ProductoDto } from "../../domain/ProductoDto/product";

export interface IProductoServices {
    getProductoListServices: () => Promise<ProductoDto[]>;
}