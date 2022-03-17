import React from 'react'
import prettyDate from '../api/utils/date'

export default function Post({ showingPost, post }) {
  return (

    <div className={`${showingPost ? 'absolute' : 'hidden'} z-20 top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-gray-200 text-gray-900 w-full max-w-3xl min-h-80vh rounded-lg shadow-2xl`}>
      {post ? (
        <div className='relative py-24 px-16 '>
          <span className='absolute top-8 transform left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-gray-700 border-2 border-gray-800/30 shadow' />
          {/* <p>Posted on {prettyDate(postedOn)}</p> */}
          <h1 className='font-bold text-center text-5xl mb-8'>UX Designer & Solidity Developer Needed!</h1>
          <h3 className='text-center text-xl'>for <span className='font-medium'>Crypts & Caverns + Hyperloot Extended Universe</span></h3>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
