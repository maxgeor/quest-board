import React from 'react'
import Role from './Role'
import prettyDate from '../api/utils/date';

export default function Post({ showPost, roles, otherRoles, project, postedOn }) {
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
    <div onClick={showPost} className='min-h-full mx-w-xs space-y-8 flex flex-col lg:justify-between items-center hover:scale-101 transition duration-75 rounded w-full transform odd:-rotate-0.25 odd:hover:-rotate-1 even:rotate-0.25 even:hover:rotate-1 h-min bg-gray-200 hover:bg-gray-100 text-black p-6 md:p-8 shadow-2xl cursor-pointer'>
      <div className='max-w-sm mx-auto space-y-4'>
        <h2 className='text-2xl font-semibold text-gray-900 font-serif text-center'>
          {renderedRoles} needed!
        </h2>
        <p className='text-xl font-serif text-gray-800 text-center mx-6'>
          <span className='text-gray-600 text-sm lg:text-base mr-0.5'>for</span> {project}
        </p>  
      </div>
      <div className='text-sm font-mono text-center text-gray-600'>Posted on <span className='font-bold'>{prettyDate(postedOn)}</span></div>
    </div>
  )
}
