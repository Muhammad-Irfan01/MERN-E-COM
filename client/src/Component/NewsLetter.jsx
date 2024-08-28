import React from 'react'

const NewsLetter = () => {
  return (
    
    <section className='py-12 bg-white shadow-lg'>
        <div className='mx-auto xl:w-[80%] flex flex-col justify-center items-center gap-y-8 max-w-[888px]'>
            <h2 className='text-2xl md:text-4xl font-semibold'>Get Exclusive Offers On Your Email</h2>
            <h3 className='uppercase text-lg font-semibold'>subscribe to our newsletter and stay updated</h3>
            <div className='flex justify-between rounded-full ring-1 ring-slate-900/5 hover:ring-slate-900/15 bg-slate-100 w-full max-w-[558px]'>
                <input type="text" placeholder='Your Email Address' className='w-full bg-transparent bg-slate-100 ml-4 border-none outline-none'/>
                <button className='btn rounded-full bg-black text-white p-3'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter