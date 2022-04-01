import React from 'react'
import Bag from '../icons/Bag.js';
import Link from 'next/link';
import { bundleRoles } from '../utils/handleRoles';

export default function Card({ id, quest }) {
  const bundledRoles = bundleRoles(quest.roles, quest.other_roles, { useUnderlines: true });

  return (
    <Link href={`quest/${id}`}>
      {/* <a className='md:min-h-[13rem] h-full max-w-md w-full md:max-w-none mx-auto shadow-lg hover:shadow-xl active:shadow-lg z-10 min-h-full flex flex-col md:justify-between items-center hover:scale-101 md:active:scale-100 transition duration-75 rounded-md transform md:odd:-rotate-0.25 odd:hover:-rotate-1 md:even:rotate-0.25 even:hover:rotate-1 bg-gray-100 hover:bg-gray-100 text-black cursor-default'> */}
      <a className='flex flex-col justify-between items-center space-y-5 p-7 h-min min-h-[13rem] md:min-h-[14rem] max-w-md w-full md:max-w-none mx-auto shadow-lg hover:shadow-xl active:shadow-lg z-10 md:justify-between hover:scale-101 md:active:scale-100 transition duration-75 rounded-md transform md:odd:-rotate-0.25 odd:hover:-rotate-1 md:even:rotate-0.25 even:hover:rotate-1 bg-gray-200 hover:bg-gray-100 text-black cursor-default'>
        <div className='max-w-sm mx-auto space-y-3'>
          <h3 className='text-2xl font-medium text-gray-900 font-serif text-center mt-0'>
            {bundledRoles} needed!
          </h3>
          <p className='text-lg font-serif text-gray-700 text-center mx-7'>
            <span className='text-gray-500 text-sm mr-0.5'>for</span> {quest.project}
          </p>  
        </div>
        {quest.has_reward && <>
        {/* <div className='w-full p-3 py-2 rounded bg-gray-300/40 border border-gray-300 flex justify-center font-serif space-x-1.5'> */}

        <div className='rounded bg-gray-300/50 p-3 w-full flex justify-center font-serif space-x-1.5'>
          <span className='transform rotate-3'>
            <Bag /> 
          </span>
          <span className='text-gray-800'>
            {quest.custom_reward
              ? quest.custom_reward
              : <span className='space-x-1'>
                  <span className='text-lg'>{quest.reward_amount}</span>
                  <span className='text-sm'>
                    {quest.custom_token
                      ? quest.custom_token.toUpperCase().trim()
                      : quest.reward_type}  
                  </span>
                </span>
            }
          </span>
        </div>
        </>}

        <span className='text-sm font-mono text-center text-gray-500'>{quest.posted_on}</span>
      </a>
    </Link>
  )
}
