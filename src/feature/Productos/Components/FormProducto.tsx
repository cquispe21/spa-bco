import { useContext } from "react";
import ProductoContext, { IProductoContext } from "../Context/ProductContext";

export default function FormProducto() {
  const { apiList } = useContext(ProductoContext) as IProductoContext;
  apiList()
  return <></>;
}
