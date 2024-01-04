'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function HeaderDash () {
  let pathName=usePathname()

  const links=[
    {
      route:'/dashboard',
      label:'Principal'
    },
    {
      route:'/dashboard/estadisticas',
      label:'Estadisticas'
    }
  ]
  return(
    <>
      <header className="flex h-[60px] bg-slate-100 justify-center gap-4">
        <nav className='h-full flex justify-center items-center gap-4'>
          <ul className="flex gap-4">
            {
              links.map(({route,label})=>(
                <li key={route}  className={(pathName==route ?'border-b-4 border-blue-500':'')+' cursor-pointer'}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="h-full flex justify-center items-center ">
          <Link href={'/dashboard/agregar'}>
            <button className="py-1 px-2 bg-green-400 text-white border border-green-600 rounded cursor-pointer">Agregar +</button> 
          </Link>
        </div>
      </header>
    </>
  )
}