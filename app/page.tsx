
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Lista Rango',
  description: 'Lista Rango, onde irá listar os melhores restaurantes da região.',
};
export default function Home() {
  return (
    <main className='container mx-auto'>
      <h1 className='text-2xl text-center text-gray-800 mt-8'>Bem-vindo ao Lista Rango</h1>
      <form data-testid="home-form">
        <input 
          type="text" 
          className='
            shadow-md px-8
            w-full 
            rounded-full 
            bg-slate-100 h-10 
            focus:outline-none
            m-8
          ' 
          placeholder='Buscar estabelecimento'
        />
      </form>
    </main>
  )
}
