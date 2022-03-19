import React from 'react'
import Role from './Role'
import prettyDate from '../pages/api/utils/date';
import Bag from '../icons/Bag.js';

export default function Card({ showPost, roles, otherRoles, project, postedOn, description }) {
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
    <div onClick={showPost} className='min-h-full mx-w-xs space-y-9 flex flex-col md:justify-between items-center hover:scale-101 transition duration-75 rounded w-full transform odd:-rotate-0.25 odd:hover:-rotate-1 even:rotate-0.25 even:hover:rotate-1 h-min bg-gray-200 hover:bg-gray-100 text-black p-6 md:p-8 shadow-2xl cursor-pointer'>
      <div className='max-w-sm mx-auto space-y-4'>
        <h2 className='text-2xl font-medium text-gray-900 font-serif text-center'>
          {renderedRoles} needed!
        </h2>
        <p className='text-xl font-serif text-gray-700 text-center mx-6'>
          <span className='text-gray-600 text-sm lg:text-base mr-0.5'>for</span> {project}
        </p>  
        {/* <div className='text-sm font-mono text-center text-gray-600'><span className=''>{prettyDate(postedOn)}</span></div> */}
      </div>
      <div className='w-full flex items-center justify-center space-x-4 mx-8'>
        <div className='text-sm font-mono text-center text-gray-600'><span className=''>{prettyDate(postedOn)}</span></div>
        <span className='text-gray-400'>/</span>
        <div className='flex items-center font-serif space-x-1.5'>
          <Bag /> 
          <div className='flex items-baseline space-x-1.5'>
            <span className='font-medium text-gray-900 space-x-1'>
              <span className='text-xl'>400</span>
              <span className='text-base'>USD</span>
            </span>
            <span className='self-center text-gray-500'>+</span>
            <span className='font-medium text-gray-900 space-x-1'>
              <span className='text-base'>2000</span>
              <span className='text-sm'>XP</span>
            </span>
          </div>
        </div>  
      </div>
    </div>
  )
}
