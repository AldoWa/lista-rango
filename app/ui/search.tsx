'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"

export function Search(){
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter();

  function handleOnSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    if(term) {
      params.set('search', term)
    } else{
      params.delete('search')
    } 
    replace(`${pathName}?${params.toString()}`)
  }
  
  return (
    <div data-testid="home-form" className='flex justify-center'>
      <input 
        type="text" 
        className='
          shadow-md px-8
          w-full 
          rounded-full 
          bg-slate-100 h-10 
          focus:outline-none
          my-8
          max-w-4xl
        '
        onChange={(e) => {
          handleOnSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
        placeholder='Buscar estabelecimento'
      />
    </div>
  )
}