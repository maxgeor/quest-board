import Link from 'next/link'
import Bag from '../../icons/Bag'
import Group from '../../icons/Group'
import bundleRoles from '../api/utils/bundleRoles'
import ReactMarkdown from 'react-markdown'
import { table, minifyRecords } from '../api/utils/Airtable'

// export async function getStaticPaths() {
//   try {
//     const records = await table.select({ view: 'quests' }).firstPage();
//     const minifiedRecords = minifyRecords(records);
//     const paths = minifiedRecords.map(record => ({
//       params: { id: record.id },
//     }));
//     return { 
//       paths,
//       fallback: false
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }

export default function Quest({ quest }) {
  const bundledRoles = bundleRoles(quest.fields.roles, quest.fields.other_roles);

  return (
    <div className='w-full max-auto sm:pb-24'>
      <header className='flex justify-center my-10'>
        <Link href='/'>
          <div className='flex flex-col items-center cursor-default pt-4 pb-5 px-6 transition duration-75 hover:scale-101 md:active:scale-100 transform -rotate-1 hover:-rotate-2 board-logo border-4 border-gray-800 hover:border-gray-700 rounded-md hover:bg-gray-800 w-min'>
            <span className='whitespace-nowrap text-sm uppercase tracking-wider leading-4'>The</span>
            <h1 className='whitespace-nowrap text-2xl text-center uppercase tracking-wider font-medium'>Quest Board</h1>
          </div>
        </Link>
      </header>
      <main className={`py-8 pb-40 px-6 sm:px-16 mx-auto min-h-screen h-full flex flex-col items-center bg-gray-200 text-gray-900 sm:max-w-3xl rounded-xl rounded-b-none sm:rounded-b-xl shadow-2xl`}>
        <span className='text-sm font-mono text-center text-gray-600 mb-6'>{quest.fields.posted_on}</span>
        <div className='w-full relative h-full space-y-8'>
          <h1 className='font-semibold text-center text-4xl sm:text-5xl mx-4 text-gray-800'>{bundledRoles} Needed!</h1>
          <div className='text-xl flex flex-wrap items-center justify-center space-x-4'>
            <div className='flex items-center font-serif space-x-2.5'>
              <Group /> 
              {quest.fields.project_link 
                ? <Link href={`${quest.fields.project_link}`}>
                    <a target="_blank" rel="noreferrer" className='text-gray-800 text-xl underline decoration-1 decoration-dashed hover:decoration-solid decoration-gray-500 hover:decoration-gray-900 underline-offset-4'>{quest.fields.project.trim()}</a>
                  </Link>
                : <span className='text-gray-800 text-xl'>{quest.fields.project.trim()}</span>
              }
            </div> 
            {quest.fields.has_reward && <>
              <span className='text-gray-400'>/</span>
              <div className='flex items-center font-serif space-x-1.5'>
                <Bag /> 
                <span className='text-gray-800 space-x-1'>
                  <span className='text-xl'>{quest.fields.reward_amount}</span>
                  <span className='text-sm'>
                    {quest.fields.custom_reward_type
                      ? quest.fields.custom_reward_type.trim()
                      : quest.fields.reward_type}  
                  </span>
                  
                </span>
              </div>  
            </>}
          </div>
          <p className='w-full text-lg text-center p-4 px-6  border-y border-gray-300 text-gray-600'>
            Interested? Message <span className='text-base font-medium py-0.5 px-1.5 bg-gray-300/90 border border-gray-400/15 rounded font-mono text-gray-900 mx-0.5'>{quest.fields.poster.trim()}</span> in the <Link href={'https://discord.com/invite/KuYyKXam9G'} ><a target="_blank" rel="noreferrer" className='underline decoration-1 decoration-dashed hover:decoration-solid decoration-gray-500 hover:decoration-gray-900 underline-offset-4 text-gray-900'>Loot Discord</a></Link>.
          </p>
        </div>
        <article id="quest-description" className='max-w-prose mr-auto first:mt-0 mt-12 text-xl text-gray-700'>
          <ReactMarkdown>{quest.fields.project_description}</ReactMarkdown>
        </article>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
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
