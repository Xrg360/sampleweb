import React from 'react'

const MentorProcess = () => {
  return (
    <div className='bg-secondary h-screen w-screen flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold  text-textColorPrimary py-10'>Joining and User Calling process</h1>
      <div className='flex w-full h-full justify-evenly items-center'>
        <div className='h-3/5 w-1/3 rounded-lg m-8 p-6 shadow-xl flex flex-col items-center justify-center'>
          <img src="https://i.imgur.com/VHStX5t.png" className="h-20 w-20" alt="" />
          <h1 className='heading py-2'>Application</h1>
          <p className=' text-center'>Mentors interested need to fill out our comprehensive form that includes an evaluation of your social profiles, work experience, and professional achievements.</p>
        </div>
        <div className='h-3/5 w-1/3 rounded-lg m-8 p-6 shadow-xl flex flex-col items-center justify-center'>
        <img src="https://i.imgur.com/UdXXPNa.png" className="h-20 w-20" alt="" />
          <h1 className='heading py-2'>Review</h1>
          <p className=' text-center'>Mentors interested need to fill out our comprehensive form that includes an evaluation of your social profiles, work experience, and professional achievements.</p>
        </div>
        <div className='h-3/5 w-1/3 rounded-lg m-8 p-6 shadow-xl flex flex-col items-center justify-center'>
        <img src="https://i.imgur.com/KGP07Mq.png" className="h-20 w-20" alt="" />
          <h1 className='heading py-2'>Onboarding</h1>
          <p className=' text-center'>Mentors interested need to fill out our comprehensive form that includes an evaluation of your social profiles, work experience, and professional achievements.</p>
        </div>
      </div>
    </div>
  )
}

export default MentorProcess
