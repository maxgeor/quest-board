import '../styles/globals.css'
import { QuestsContext } from '../context/QuestsContext'

function MyApp({ Component, pageProps }) {
  return (
    <QuestsContext.Provider value={{}}>
      <div className='flex flex-col items-center text-gray-200 bg-black min-h-screen font-serif'>
        <Component {...pageProps} />
      </div>)
    </QuestsContext.Provider>
  )
}

export default MyApp
