import { createContext, ReactNode, useState } from "react";
import { ProductoDto } from "../../../domain/ProductoDto/product";
import useProducto from "../../../application/Producto/useProducto";

export interface IProductoContext {
  listProductos?: Array<ProductoDto>;
  apiList: () => void;
}

const ProductoContext = createContext({});

export const ProductoProvider = ({ children }: { children: ReactNode }) => {
  const [listProductos, setListProductos] = useState<Array<ProductoDto>>([]);

  const { getProductoList } = useProducto();

  const apiList = async () => {
    try {
      const res = await getProductoList();
      setListProductos(res!);
    } catch (error) {
      console.log(error);
    }
  };

  const storage: IProductoContext = {
    listProductos,
    apiList,
  };

  return (
    <ProductoContext.Provider value={storage}>
      {children}
    </ProductoContext.Provider>
  );
};

export default ProductoContext;
