import React from 'react'
import prettyDate from '../pages/api/utils/date'
import Bag from '../icons/Bag.js'
import Link from 'next/link'

export default function Post({ showingPost, post, hidePost }) {
  return (

    <div className={` ${showingPost ? 'fixed' : 'hidden'} overflow-y-scroll z-20 h-[calc(100vh-32px)] md:h-[calc(100vh-48px)] w-full bottom-0 md:top-1/2 left-1/2 transform md:-translate-y-1/2 -translate-x-1/2 flex flex-col items-center bg-gray-200 text-gray-900 max-w-lg md:max-w-2xl rounded-lg rounded-b-0 md:rounded-b-lg shadow-2xl`}>
      <div className='relative md:py-4 px-4 md:px-12 h-full space-y-12'>
        <span onClick={hidePost} className='cursor-pointer absolute top-3 md:top-5 right-3 md:right-5 z-20 transform rotate-45 text-4xl font-black h-6 w-6 text-gray-600'>+</span>
        <div className='space-y-6'>
          <h1 className='font-semibold text-center text-4xl md:text-5xl mx-4'>UX Designer & Solidity Develoer Needed!</h1>
          <h3 className='text-center text-gray-600 '>for <span className='ml-1 text-xl text-gray-700'>Realms</span></h3>
          <div className='w-full text-xl flex items-center justify-center space-x-4'>
            <div className='text-sm font-mono text-center text-gray-600'><span className=''>Mar 13, 2022</span></div>
            <span className='text-gray-400 font-serif'>/</span>
            <div className='flex items-center font-serif space-x-1.5'>
              <Bag /> 
              <span className='font-medium text-gray-900 space-x-1'>
                <span className='text-xl'>1</span>
                <span className='text-base'>ETH</span>
              </span>
            </div> 
          </div>
        </div>
        <section className="text-lg p-4 md:px-8 mx-4 overflow-hidden border-y-2 border-gray-900/10 border-dashed text-gray-600 w-full">
          <p className='text-center'>
            Interested? Message <span className='font-medium text-base bg-gray-300/50 py-0.5 px-1 rounded border border-gray-300 font-mono text-gray-600 mx-0.5'>#maxgeo3456</span>, <span className='font-medium text-base bg-gray-300/50 py-0.5 px-1 rounded border border-gray-300 font-mono text-gray-600 mx-0.5'>#maxgeo3456</span>, <span className='font-medium text-base bg-gray-300/50 py-0.5 px-1 rounded border border-gray-300 font-mono text-gray-600 mx-0.5'>#maxgeo3456</span> in the <Link class='underline' href={'https://discord.com/invite/KuYyKXam9G'} target="_blank">Loot Discord</Link>.</p>
        </section>
        <article className='text- mt-96'>
        
        </article>
      </div>
    </div>
  )
}
