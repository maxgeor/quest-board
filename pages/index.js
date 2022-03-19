import Head from 'next/head'
import Post from '../components/Post'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import { table, minifyRecords } from './api/utils/Airtable'

export default function Home({ posts }) {
  const [showingPost, setShowingPost] = useState(false)
  const [selectedPost, setSelectedPost] = useState(undefined)

  const handleShowPost = post => {
    setSelectedPost([post])
    setShowingPost(true)
  }

  useEffect(() => {
    showingPost
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto'
  }, [showingPost])

  return (
    <div className={`${showingPost && 'overflow-hidden'} relative text-gray-200 bg-black min-h-screen font-serif pb-40`}>
      <header className='pt-12 md:pt-16 pb-16 px-4 space-y-8'>
        <div className='flex flex-col items-center space-y-3'>
          <span className='text-3xl md:text-4xl uppercase tracking-wider'>The</span>
          <h1 className='mx-6 text-6xl md:text-7xl text-center uppercase tracking-wider font-medium'>Quest Board</h1>
        </div>
        <h3 className='font-mono text-xl text-center mx-6 sm:mx-12'>
          Post & discover <span className='font-serif text-3xl '>Loot</span> projects in need of Adventurers.
        </h3>
      </header>
      <section className='hidden opacity-90 sm:max-w-2xl mb-8 mx-4 sm:mx-auto bg-gray-800 border border-gray-700 p-4 rounded text-gray-300'>While specific jobs are posted, projects are open to help form anyone. You can create your own role within the comminity. If you don&apos;t see a job listed for what you want to do, reach out to them anyways to share what you&apos;re interested in working on. They&apos;ll likely be able to figure out a place for you. You can also just make your own role or do work permissionlessly!</section>
      <main className='sm:max-w-xl md:max-w-5xl grid grid-cols-1 md:grid-cols-2 auto-rows-min sm:rounded shadow-2xl gap-4 md:gap-6 board min-h-screen border-12 border-x-0 sm:border-x-12 mx-auto border-gray-800 p-4 md:p-6'>
        <a href="https://airtable.com/shrTGIIyaOSSMAoYd" target="_blank" rel="noreferrer" className='transition duration-75 hover:scale-101 h-56 space-y-6 flex flex-col items-center  shover:scale-101 transform -rotate-0.25 hover:-rotate-1 hover:border-gray-600 rounded justify-center border-4 border-gray-700 border-dashed bg-gray-800 text-gray-300 hover:text-gray-100 p-6 py-10 lg:p-8 cursor-pointer'>
          <h2 className='transition duration-75 opacity-90 tracking-wide text-2xl  text-gray-300 font-serif text-center'>WANTED: Quests!</h2>  
          <h2 className='text-3xl font-medium font-serif text-center tracking-wide'><span className='font-extrabold'>+</span> Post a Project</h2>  
        </a>
        {posts.map(post => <Card key={post.id} 
                                 roles={post.fields.roles} 
                                 project={post.fields.project} 
                                 postedOn={post.fields.posted_on} 
                                 otherRoles={post.fields.other_roles}
                                 showPost={() => handleShowPost(post)} />
        )}
      </main>
      <div onClick={() => setShowingPost(false)} className={`${showingPost ? 'fixed' : 'hidden'} top-0 h-screen w-screen bg-black opacity-100 z-10`} />
      <Post post={selectedPost} showingPost={showingPost} hidePost={() => setShowingPost(false)} />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const records = await table.select({ view: 'posts' }).firstPage()
    return { props: { posts: minifyRecords(records) } }
  } catch (e) {
    console.log(e)
  }
}