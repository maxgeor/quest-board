import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { bundleRoles } from '../utils/handleRoles'
import { useState, useEffect } from 'react'

export default function Card({ id, quest }) {
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (!quest.title) {
      return setTitle(`${bundleRoles(quest.roles, quest.other_roles)} needed!`);
    }
    setTitle(quest.title);
  }, []);

  return (
    <Link href={`/quest/${id}`}>
      <a className={`group flex flex-col justify-between items-center p-6 h-full min-h-[12rem] md:min-h-[13rem] max-w-md w-full md:max-w-none mx-auto shadow-lg hover:shadow-xl active:shadow-lg z-10 md:justify-between hover:scale-101 md:active:scale-100 transition duration-75 rounded-md transform odd:hover:-rotate-1 even:hover:rotate-1 bg-gray-200 hover:bg-gray-100 text-black cursor-default`}>
        <section className='flex flex-col items-center w-full space-y-6'>
          <div className='max-w-sm mx-auto space-y-3'>
            <h3 className='line-clamp-2 text-2xl font-medium text-gray-800 font-serif text-center mt-0'>
              {title}
            </h3>
            <p className='text-lg font-serif text-gray-600 text-center mx-6'>
              <span className='text-gray-500 text-sm mr-0.5'>for</span> {quest.project}
            </p>  
          </div>
          {quest.has_reward && 
            <div className='bg-gray-300/40 group-hover:bg-gray-300/30 rounded py-2 px-3 w-full'>
              <div className='flex items-center justify-center font-serif -ml-0.5 space-x-2'>
                <span className='flex items-center justify-center flex-shrink-0 h-6 w-6 self-start'>
                  <Image alt="Reward" src='/icons/bag.png' width={24} height={24} />
                </span>
                <div className='inline-block text-gray-600'>
                  {quest.custom_reward
                    ? quest.custom_reward
                    : <div className='flex items-baseline space-x-1'>
                        <div className='text-lg leading-6'>{quest.reward_amount}</div>
                        <div className='text-sm text-gray-600'>
                          {quest.custom_token
                            ? quest.custom_token.toUpperCase().trim()
                            : quest.reward_type
                          }  
                        </div>
                      </div>
                  }
                </div>
              </div>
            </div>}
        </section>
        <span className={`${quest.has_reward ? 'mt-6' : 'mt-9'} text-sm font-mono text-center text-gray-500`}>{quest.posted_on}</span>
      </a>
    </Link>
  )
}
