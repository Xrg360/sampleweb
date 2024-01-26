import React from 'react'

const landing = () => {
  return (
    <div>
      <div className="h-screen w-full bg-[url('https://i.imgur.com/qa3q08N.jpg')] ">
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='text-center'>
            <p className='text-textColorPrimary text-xl font-light'>For mentors and creators</p>
            <h1 className='text-5xl text-textColorPrimary font-bold'>Want to become a Mentor ?</h1>
            <p className='text-textColorPrimary text-xl font-light'>Share your knowledge and earn money</p>
          </div>
          <div className='mt-8'>
            <button className='bg-textColorPrimary text-primary font-bold py-4 px-8 rounded-full hover:bg-primary hover:text-textColorPrimary hover:border-textColorPrimary hover:border-2 transition-all ease-in-out '>
              Join as a Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default landing
