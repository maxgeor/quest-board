import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Hand from '../../icons/Hand'
import Bag from '../../icons/Bag'
import Group from '../../icons/Group'
import ReactMarkdown from 'react-markdown'
import { bundleRoles, getAllRoles } from '../../utils/handleRoles'

export default function Quest({ quest }) {
  const allRoles = getAllRoles(quest.fields.roles, quest.fields.other_roles);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>{`Quest: ${allRoles.join(', ')} Needed!`}</title>
      </Head>
      <div className='w-full max-auto sm:pb-24'>
        <header className='flex justify-center my-9'>
          <Link href='/'>
            <a className='shadow-inner board-logo bg-board flex flex-col items-center cursor-default pt-4 pb-5 px-6 transition duration-75 hover:scale-101 md:active:scale-100 transform -rotate-1 hover:-rotate-2 border-4 border-board-logo-border hover:border-gray-700 rounded-md hover:bg-gray-800 w-min'>
              <span className='whitespace-nowrap text-sm uppercase tracking-wide leading-4'>The</span>
              <h1 className='whitespace-nowrap text-2xl text-center uppercase tracking-wide font-medium'>Quest Board</h1>
            </a>
          </Link>
        </header>
        <main className={`py-6 pb-40 px-6 sm:px-16 mx-auto min-h-[110vh] h-full flex flex-col items-center bg-gray-200 text-gray-900 sm:max-w-3xl rounded-xl rounded-b-none sm:rounded-b-xl shadow-2xl`}>
          <span className='text-sm font-mono text-center text-gray-600 mb-6 mt-1'>{quest.fields.posted_on}</span>
          <div className='w-full relative h-full space-y-9'>
            <div className='flex flex-col items-center space-y-6'>
              <h1 className='font-semibold text-center text-4xl sm:text-5xl mx-4 text-gray-900'>{quest.fields.title}</h1>
            </div>
            <div className='bg-gray-300/50 pt-0 rounded-lg text-lg flex flex-col max-w-lg mx-auto'>
              <div className='space-y-6 p-6'>
                <div className=' flex items-center font-serif space-x-3'>
                  <span className='flex items-center justify-center flex-shrink-0 h-7 w-7 self-start'>
                    <Image alt="Group icon" src='/icons/group.png' width={24} height={24} />
                  </span>
                  {quest.fields.project_link 
                    ? <Link href={`${quest.fields.project_link}`}>
                        <a target="_blank" rel="noreferrer" className='text-lg underline decoration-1 decoration-dashed hover:decoration-solid hover:decoration-gray-900 decoration-gray-600 underline-offset-4'>{quest.fields.project.trim()}</a>
                      </Link>
                    : <span className='text-gray-800 text-lg'>{quest.fields.project.trim()}</span>
                  }
                </div>
                {quest.fields.has_reward && <>
                  <div className='flex items-center font-serif space-x-3'>
                    <span className='flex items-center justify-center flex-shrink-0 h-7 w-7 self-start'>
                      <Image alt="Bag icon" src='/icons/bag.png' width={24} height={24} />
                    </span>
                    <span className='text-gray-800 space-x-1'>
                      {quest.fields.custom_reward
                        ? quest.fields.custom_reward
                        : <p className='flex items-baseline space-x-1'>
                            <p className='text-lg leading-6'>{quest.fields.reward_amount}</p>
                            <p className='text-sm'>
                              {quest.fields.custom_token
                                ? quest.fields.custom_token.toUpperCase().trim()
                                : quest.fields.reward_type}  
                            </p>
                          </p>
                      }
                    </span>
                  </div>  
                </>}
                <div className='flex items-center font-serif space-x-3'>
                  <span className='flex items-center justify-center flex-shrink-0 h-7 w-7 self-start'>
                    <Image alt="Hand icon" src='/icons/hand.png' width={24} height={24} />
                  </span>
                  <p className='text-lg'>
                    Interested? Message <span className='text-base font-medium py-0.5 px-1.5 bg-gray-400/25 border border-gray-400/30 rounded font-mono text-gray-900 mx-0.5'>{quest.fields.poster.trim()}</span> in the <Link href={'https://discord.com/invite/KuYyKXam9G'} ><a target="_blank" rel="noreferrer" className='underline decoration-1 decoration-dashed hover:decoration-solid hover:decoration-gray-900 decoration-gray-600 underline-offset-4 text-gray-900'>Loot Discord</a></Link>.
                  </p>
                </div>
              </div>
              <div className='flex space-x-2 justify-center py-3 px-6 border-t border-gray-400/15 bg-gray-400/20 rounded-b-lg'>
                <p>Roles:</p>
                {allRoles?.map((role, index) => (
                  <span key={index} className='text-base bg-gray-600 text-gray-200 rounded-md px-2 py-0.5 tracking-wider'>{role}</span>
                ))}
              </div>
            </div>
          </div>
          <article id="quest-description" className='max-w-prose mr-auto first:mt-0 mt-12 text-xl text-gray-700'>
            <ReactMarkdown>{quest.fields.project_description}</ReactMarkdown>
          </article>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const { id } = await context.params;
    const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/quests/${id}`, {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
    });
    const data = await res.json();
    return { props: { quest: data } }
  } catch (e) {
    console.log(e)
  }
}
