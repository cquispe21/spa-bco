import { IProductoServices } from "../../application/Producto/productoApi";
import { ProductoDto } from "../../domain/ProductoDto/product";
import ProductoClient from "../../utils/configuration";
const ProductoServices = (): IProductoServices => {
  const getProductoListServices = async (): Promise<ProductoDto[]> => {
    try {
      const res = await ProductoClient.get("/Productos/productosList");
      return res.data;
    } catch (error) {
      console.error("Error fetching productos list:", error);
      throw new Error(
        "No se pudo obtener la lista de productos. Por favor, inténtelo más tarde."
      );
    }
  };
  return { getProductoListServices };
};
export default ProductoServices;
