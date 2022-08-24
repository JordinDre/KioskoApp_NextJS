import { createContext, useState, useEffect } from "react";
import axios from "axios";

const KioskoContext = createContext()

const KioskoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    
    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias]);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0]);
    }

    return (
        <KioskoContext.Provider
            value={{ categorias, handleClickCategoria, categoriaActual }}
        >
            {children}
        </KioskoContext.Provider>
    )
}

export { KioskoProvider }

export default KioskoContext