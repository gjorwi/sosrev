import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export default function loginPage() {
  return (
    <main className='h-screen flex justify-center items-center bg-blue-500'>
      <div className='w-72 flex justify-center p-2 flex-col'>
        <div className='w-full text-white mb-[60%] flex justify-center font-bold p-2 text-2xl'>
          SOSREV
        </div>
        <div className='flex justify-center'>
          <Link href={'/dashboard'}>
            <button className='bg-white py-2 px-6 text-blue-500 rounded'>Entrar</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
