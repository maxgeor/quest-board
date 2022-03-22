import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col items-center text-gray-200 bg-black min-h-screen font-serif'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
