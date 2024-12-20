import ProductoServices from "../../infraestructure/ProductoRepotisory/ProductoServices";

export default function useProducto() {
  const { getProductoListServices } = ProductoServices();
  const getProductoList = async () => {
    try {
      return getProductoListServices();
    } catch (error) {
      console.log(error);
    }
  };

  return { getProductoList };
}
