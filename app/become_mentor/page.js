import React from 'react'
import Landing from './components/landing.js'
import WhyMentor from './components/pros.js'
import MentorSteps from './components/steps.js'
import MentorProcess from './components/process.js'
import Reviews from './components/reviews.js'
import '../globals.css'

const BecomeMentor = () => {
  return (
    <div className='w-full'>
        <Landing />
        <WhyMentor />
        <MentorSteps/>
        <MentorProcess/>
        <Reviews/>
    </div>
  )
}

export default BecomeMentor
