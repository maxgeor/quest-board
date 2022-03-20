import Link from 'next/link'
import Bag from '../../icons/Bag'
import Group from '../../icons/Group'
import { table, minifyRecords } from '../api/utils/Airtable'

export async function getStaticPaths() {
  try {
    const records = await table.select({ view: 'quests' }).firstPage();
    const minifiedRecords = minifyRecords(records);
    const paths = minifiedRecords.map(record => ({
      params: { id: record.id },
    }));
    return { 
      paths,
      fallback: false
    }
  } catch (e) {
    console.error(e)
  }
}

export async function getStaticProps(context) {
  try {
    const record = await table.find(context.params.id)
    return { 
      props: { 
        quest: JSON.parse(JSON.stringify(record)) 
      }
    }
  } catch (e) {
    console.error(e)
  }
}

export default function Quest({ quest }) {
  return (
    <div className='w-full max-w-2xl max-auto '>
      <header className='flex justify-center my-8'>
        <Link href='/'>
          <div className='flex flex-col items-center cursor-default pt-3.5 pb-4 px-6 transition duration-75 hover:scale-101 md:active:scale-100 transform -rotate-0.5 hover:-rotate-1 board-logo border-4 border-gray-800 hover:border-gray-700 rounded-md hover:bg-gray-800 w-min'>
            <span className='whitespace-nowrap text-sm uppercase tracking-wider leading-4'>The</span>
            <h1 className='whitespace-nowrap text-2xl text-center uppercase tracking-wider font-medium'>Quest Board</h1>
          </div>
        </Link>
      </header>
      <main className={`py-8 px-6 md:px-12 mx-auto min-h-screen h-full flex flex-col items-center bg-gray-200 text-gray-900 sm:max-w-lg md:max-w-3xl rounded-xl rounded-b-0 md:rounded-b-lg shadow-2xl`}>
        <span className='text-sm font-mono text-center text-gray-600 mb-6'>{quest.fields.posted_on}</span>
        <div className='relative h-full space-y-8'>
          <h1 className='font-semibold text-center text-4xl md:text-5xl mx-4 text-gray-800'>Writer Needed!</h1>
          <div className='text-xl flex flex-wrap items-center justify-center space-x-4'>
            <div className='flex items-center font-serif space-x-2.5'>
              <Group /> 
              <h3 className='text-gray-800 text-xl underline decoration-1 decoration-dashed hover:decoration-solid decoration-gray-400 underline-offset-4'>Realms</h3>
            </div> 
            <span className='text-gray-400 font-serif'>/</span>
            <div className='flex items-center font-serif space-x-1.5'>
              <Bag /> 
              <span className='font-medium text-gray-700 space-x-1'>
                <span className='text-xl'>1</span>
                <span className='text-base'>ETH</span>
              </span>
            </div> 
          </div>
          <p className='text-center p-4 px-6 rounded bg-gray-300/50 border border-gray-400/20 text-base text-gray-600'>
            Interested? Message <span className='font-medium font-mono text-gray-900 mx-0.5'>#maxgeo3456</span> in the <Link href={'https://discord.com/invite/KuYyKXam9G'} ><a class='underline decoration-1 decoration-dashed hover:decoration-solid decoration-gray-400 hover:decoration-gray-900 underline-offset-4 text-gray-900 text-base' target="_blank">Loot Discord</a></Link>.
          </p>
          <article></article>
        </div>
      </main>
    </div>
  )
}
