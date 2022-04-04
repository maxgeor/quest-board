import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { bundleRoles } from '../utils/handleRoles';

export default function Card({ id, quest }) {
  const bundledRoles = bundleRoles(quest.roles, quest.other_roles, { useUnderlines: true });

  return (
    <Link href={`quest/${id}`}>
      <a className={`flex flex-col justify-between items-center p-6 h-full min-h-[12rem] md:min-h-[13rem] max-w-md w-full md:max-w-none mx-auto shadow-lg hover:shadow-xl active:shadow-lg z-10 md:justify-between hover:scale-101 md:active:scale-100 transition duration-75 rounded-md transform odd:hover:-rotate-1 even:hover:rotate-1 bg-gray-200 hover:bg-gray-100 text-black cursor-default`}>
        <section className='flex flex-col items-center space-y-6'>
          <div className='max-w-sm mx-auto space-y-3'>
            <h3 className='text-2xl font-medium text-gray-900 font-serif text-center mt-0'>
              {bundledRoles} needed!
            </h3>
            <p className='text-lg font-serif text-gray-700 text-center mx-6'>
              <span className='text-gray-500 text-sm mr-0.5'>for</span> {quest.project}
            </p>  
          </div>
          {quest.has_reward && <>
          <div className='bg-gray-300/50 rounded py-2 px-3 w-full'>
            <div className='flex items-center justify-center font-serif -ml-0.5 space-x-2'>
              <span className='flex items-center justify-center flex-shrink-0 h-6 w-6 self-start'>
                <Image alt="Reward" src='/icons/bag.png' width={24} height={24} />
              </span>
              <p className='text-gray-800'>
                {quest.custom_reward
                  ? quest.custom_reward
                  : <p className='flex items-baseline space-x-1'>
                      <p className='text-lg leading-6'>{quest.reward_amount}</p>
                      <p className='text-sm'>
                        {quest.custom_token
                          ? quest.custom_token.toUpperCase().trim()
                          : quest.reward_type}  
                      </p>
                    </p>
                }
              </p>
            </div>
          </div>
          </>}
        </section>
        <span className={`${quest.has_reward ? 'mt-6' : 'mt-9'} text-sm font-mono text-center text-gray-500`}>{quest.posted_on}</span>
      </a>
    </Link>
  )
}
