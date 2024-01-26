import React from 'react'
const reviews = [
  {
    name: 'John Doe',
    photo: 'https://i.imgur.com/b1fVDPB.jpg',
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    name: 'John Doe',
    photo: 'https://i.imgur.com/b1fVDPB.jpg',
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    name: 'John Doe',
    photo: 'https://i.imgur.com/b1fVDPB.jpg',
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    name: 'John Doe',
    photo: 'https://i.imgur.com/b1fVDPB.jpg',
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
 
]
const Reviews = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen w-full' >
    <h1 className='text-5xl text-center py-6 font-bold text-textColorPrimary'>What do our mentors say</h1>
      <div className=' h-3/4 w-3/4 flex p-6 overflow-auto'>
        {reviews.map((item, index) => (
          <div key={index} className='text-textPrimaryColor flex items-center mx-2  justify-center w-full h-full  rounded-xl'>
            <div  className="bg-gray-100 text-center rounded-lg shadow-xl px-14 w-[100rem] mx-10 flex flex-col items-center py-6 text-textColorPrimary">
            <img src={item.photo} className='object-cover h-32 w-32 mt-4 rounded-full' alt="" />
            <h2 className="text-3xl font-bold py-4">{item.name}</h2>
            <p className="text-base font-light">{item.review}</p>
            <div className='flex py-4'>
            {[...Array(item.rating)].map((_, i) => (
              <img key={i} src="https://i.imgur.com/4sIrwGO.png" className='object-cover h-8 w-8 rounded-full' alt="" />
            ))}
            </div>
          </div>
          </div>
        ))} 
      </div>
    </div>
    </>
  )
}

export default Reviews
