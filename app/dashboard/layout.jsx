import HeaderDash from '../components/header'

export default function RootLayout({ children }) {
  return (
    <>
      <div className=' h-full'>
      <HeaderDash></HeaderDash>
        {children}
      </div>
    </>
  )
}
