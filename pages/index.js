import Head from 'next/head'
import Card from '../components/Card'
import Link from 'next/link'
import { minifyRecords } from '../utils/Airtable'

export default function Home({ quests }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>The Quest Board</title>
      </Head>
      <div className={`w-full bg-black min-h-screen font-serif pb-40`}>
        <header className='py-10 sm:py-12 px-6 space-y-6'>
          <div className='flex flex-col items-center space-y-1'>
            <span className='text-2xl md:text-3xl uppercase tracking-wide leading-7'>The</span>
            <h1 className='mx-6 text-5xl md:text-6xl text-gray-200 text-center uppercase tracking-wide font-medium'>Quest Board</h1>
          </div>
          <h2 className='font-mono text-lg md:text-xl text-gray-300 text-center mx-2 sm:mx-12'>
            Post & discover <Link href="https://www.lootproject.com/"><a className='text-xl md:text-2xl h-8 font-serif'>Loot</a></Link> projects in need of Adventurers.
          </h2>
        </header>
        <main className='shadow-inner board bg-board w-full sm:max-w-lg md:max-w-[62rem] sm:rounded-xl min-h-screen sm:min-h-[80vh] md:min-h-screen border-12 border-x-0 sm:border-x-12 mx-auto border-[#201e1c] p-6'>
          <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 auto-rows-min gap-6'>
            <a href="https://airtable.com/shrTGIIyaOSSMAoYd" target="_blank" rel="noreferrer" className='max-w-md w-full md:max-w-none mx-auto shadow-lg hover:shadow-xl active:shadow-lg transition duration-75 hover:scale-101 min-h-[12rem] h-full space-y-6 flex flex-col items-center shover:scale-101 md:active:scale-100 transform hover:-rotate-1 hover:border-gray-600 rounded-md justify-center border-4 border-gray-700 border-dashed bg-gray-800 text-gray-300 hover:text-gray-100 p-6 cursor-default'>
              <h3 className='transition duration-75 opacity-90 text-2xl text-gray-300 font-serif text-center'>WANTED: Quests!</h3>  
              <h4 className='text-3xl leading-8 font-medium font-serif text-center'>+ Post a Project</h4>  
            </a>
            { quests.map(quest => <Card id={quest.id} key={quest.id} quest={quest.fields} />) }
          </div>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/quests?view=quests`, {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}` }
    });
    const data = await res.json();
    const records = minifyRecords(data.records);
    return { props: { quests: records.reverse() } }
  } catch (e) {
    console.log(e)
  }
}