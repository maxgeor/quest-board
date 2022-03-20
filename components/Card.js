import React from 'react'
import Role from './Role'
import Bag from '../icons/Bag.js';
import Link from 'next/link';

export default function Card({ id, roles, otherRoles, project, postedOn, has_reward, reward_amount, reward_type }) {
  const allRoles = otherRoles ? [...roles, ...otherRoles.split(', ')] : roles;
  const fliteredRoles = allRoles.filter(role => role !== 'Other...');

  const renderedRoles = fliteredRoles.map((role, index) => {
    return <Role key={index} 
                 title={role}
                 isLast={role === fliteredRoles[fliteredRoles.length-1]}
                 isSecondLast={role === fliteredRoles[fliteredRoles.length-2]} 
           />
  });

  return (
    <Link href={`quest/${id}`}>
      <div className='min-h-full mx-w-xs space-y-8 flex flex-col md:justify-between items-center hover:scale-101 md:active:scale-100 transition duration-75 rounded-md w-full transform md:odd:-rotate-0.25 odd:hover:-rotate-1 md:odd:active:-rotate-0.5 md:even:rotate-0.25 even:hover:rotate-1 h-min bg-gray-200 hover:bg-gray-100 text-black p-6 md:p-8 shadow-2xl cursor-default'>
        <div className='max-w-sm mx-auto space-y-4'>
          <h2 className='text-2xl font-medium text-gray-900 font-serif text-center mt-0'>
            {renderedRoles} needed!
          </h2>
          <p className='text-xl font-serif text-gray-800 text-center mx-6'>
            <span className='text-gray-600 text-sm lg:text-base mr-0.5'>for</span> {project}
          </p>  
        </div>
        <div className='w-full flex items-center justify-center space-x-4 mx-8'>
          <div className='text-sm font-mono text-center text-gray-600'><span className=''>{postedOn}</span></div>
          {has_reward ? <>
            <span className='text-gray-400'>/</span>
            <div className='flex items-center font-serif space-x-1.5'>
              <Bag /> 
              <span className='font-medium text-gray-700 space-x-1'>
                <span className='text-xl'>{reward_amount}</span>
                <span className='text-base'>{reward_type}</span>
              </span>
            </div>  
          </> : null}
        </div>
      </div>
    </Link>
  )
}
