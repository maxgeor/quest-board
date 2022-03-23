import Head from 'next/head'
import Card from '../components/Card'
import { minifyRecords } from '../utils/Airtable'

export default function Home({ quests }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Quest Board</title>
      </Head>
      <div className={`text-gray-200 bg-black min-h-screen font-serif pb-40`}>
        <header className='pt-10 pb-12 md:py-12 px-4 space-y-6 md:space-y-8'>
          <div className='flex flex-col items-center space-y-2'>
            <span className='text-2xl md:text-3xl uppercase tracking-wider leading-7'>The</span>
            <h1 className='mx-6 text-5xl md:text-6xl text-center uppercase tracking-wider font-medium'>Quest Board</h1>
          </div>
          <h3 className='font-mono text-lg md:text-xl text-center mx-2 sm:mx-12'>
            Post & discover <span className='font-serif text-2xl md:text-3xl'>Loot</span> projects in need of Adventurers.
          </h3>
        </header>
        <section className='hidden opacity-90 sm:max-w-2xl mb-8 mx-4 sm:mx-auto bg-gray-800 border border-gray-700 p-4 rounded text-gray-300'>While specific jobs are posted, projects are open to help form anyone. You can create your own role within the comminity. If you don&apos;t see a job listed for what you want to do, reach out to them anyways to share what you&apos;re interested in working on. They&apos;ll likely be able to figure out a place for you. You can also just make your own role or do work permissionlessly!</section>
        <main className='shadow-inner bg-board w-full md:max-w-5xl sm:rounded-xl min-h-screen sm:min-h-[80vh] lg:min-h-screen border-12 border-x-0 sm:border-x-12 mx-auto border-gray-800 p-4 sm:p-6'>
          <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 auto-rows-min gap-4 sm:gap-6'>
            <a href="https://airtable.com/shrTGIIyaOSSMAoYd" target="_blank" rel="noreferrer" className='shadow-lg hover:shadow-xl transition duration-75 hover:scale-101 h-48 md:h-56 space-y-6 flex flex-col items-center shover:scale-101 md:active:scale-100 transform -rotate-0.25 hover:-rotate-1 hover:border-gray-600 rounded-md justify-center border-4 border-gray-700 border-dashed bg-gray-800 text-gray-300 hover:text-gray-100 p-6 py-10 lg:p-8 cursor-default'>
              <h2 className='transition duration-75 opacity-90 tracking-wide text-2xl text-gray-300 font-serif text-center'>WANTED: Quests!</h2>  
              <h2 className='text-3xl font-medium font-serif text-center tracking-wide'><span className='font-extrabold'>+</span> Post a Project</h2>  
            </a>
            {quests.length
              ? quests.map(quest => <Card id={quest.id} key={quest.id} quest={quest.fields} />)
              : <div className='w-96'></div>
            }
          </div>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/quests?view=quests`, {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
    });
    const data = await res.json();
    const records = minifyRecords(data.records);
    return { props: { quests: records.reverse() } }
  } catch (e) {
    console.log(e)
  }
}