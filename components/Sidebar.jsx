import Image from 'next/image'
import useKiosko from '../hooks/useKiosko'
import Categoria from './Categoria'

const Sidebar = () => {
    const { categorias } = useKiosko()
    
    return (
        <div className='mt-6'>
            <Image width={300} height={100} src="/assets/img/logo.svg" alt='Imagen Logotipo'/>
            <nav className='mt-10'>
                {categorias.map(categoria => (
                    <Categoria key={categoria.id} categoria={categoria} />
                ))}
            </nav>
        </div>
    )
}

export default Sidebar