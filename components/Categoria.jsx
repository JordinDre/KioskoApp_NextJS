import React from 'react'
import Image from 'next/dist/client/image'
import useKiosko from '../hooks/useKiosko'

const Categoria = ({ categoria }) => {

    const { categoriaActual, handleClickCategoria } = useKiosko()
    const { nombre, icono, id } = categoria

    return (
        <div className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 ${categoriaActual?.id === id ? 'bg-amber-400' : ''}`}>
            <Image width={70} height={70} src={`/assets/img/icono_${icono}.svg`} alt="Imagen Icono" />
            <button type='button' className='text-2xl font-bold hover:cursor-pointer' onClick={() => handleClickCategoria(id)}>
                {nombre}
            </button>
        </div>
    )
}

export default Categoria