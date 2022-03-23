import React from 'react'
import Bag from '../icons/Bag.js';
import Link from 'next/link';
import { bundleRoles } from '../utils/handleRoles';

export default function Card({ id, quest }) {
  const bundledRoles = bundleRoles(quest.roles, quest.other_roles, { useUnderlines: true });

  return (
    <Link href={`quest/${id}`}>
      <div className='md:min-h-[14rem] h-full max-w-md w-full md:max-w-none mx-auto shadow-lg hover:shadow-xl z-10 min-h-full space-y-8 flex flex-col md:justify-between items-center hover:scale-101 md:active:scale-100 transition duration-75 rounded-md transform md:odd:-rotate-0.25 odd:hover:-rotate-1 md:even:rotate-0.25 even:hover:rotate-1 bg-gray-200 hover:bg-gray-100 text-black p-6 md:p-8 cursor-default'>
        <div className='max-w-sm mx-auto space-y-4'>
          <h2 className='text-2xl font-medium text-gray-900 font-serif text-center mt-0'>
            {bundledRoles} needed!
          </h2>
          <p className='text-xl font-serif text-gray-800 text-center mx-6'>
            <span className='text-gray-600 text-sm lg:text-base mr-0.5'>for</span> {quest.project}
          </p>  
        </div>
        <div className='w-full flex items-center justify-center flex-wrap gap-y-1 gap-x-4 mx-8'>
          <span className='text-sm font-mono text-center text-gray-600'>{quest.posted_on}</span>
          {quest.has_reward && <>
          <span className='text-gray-400'>/</span>
          <div className='flex items-center font-serif space-x-1.5'>
            <Bag /> 
            <span className='text-gray-800 space-x-1'>
              <span className='text-xl'>{quest.reward_amount}</span>
              <span className='text-sm'>
                {quest.custom_reward_type
                  ? quest.custom_reward_type.trim()
                  : quest.reward_type}  
              </span>
            </span>
          </div>  
          </>}
        </div>
      </div>
    </Link>
  )
}
