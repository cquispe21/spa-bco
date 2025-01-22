import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginIndex from "./feature/Auth/LoginIndex";
import InicioIndex from "./feature/Inicio/InicioIndex";
import { useEffect, useState } from "react";
function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    // Verificamos si el token existe en el localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);  // El token existe, el usuario está logueado
    } else {
      setIsLogin(false);  // Si no existe el token, no está logueado
    }
  }, []);  // Este effect solo se ejecutará una vez al montar el componente

  // Esto evitará que el componente redirija inmediatamente sin verificar el token
  if (isLogin === null) {
    return <div>Loading...</div>;  // Puedes mostrar un loading mientras se verifica el token
  }
  return (
    <Routes>
      <Route
        path="/"
        element={isLogin ? <InicioIndex /> : <Navigate to="/login" />}
      >
        <Route path="/product" element={<h1>Prueba Token</h1>} />
      </Route>
      <Route path="/login" element={<LoginIndex />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
}

export default App;
