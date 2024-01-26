import React from "react";

const MentorSteps = () => {
  return (
    <div className="flex ">
      <div
        id="left"
        className="h-screen w-full  flex flex-col px-4 justify-center items-center"
      >
        <h1 className="font-bold text-5xl text-textColorPrimary mb-16 mt-8 text-center">
          What you need to have before becoming mentor
        </h1>
        <p className="text-xl px-4 text-textColorPrimary">
          Our mentors are the best of the best, sharing common traits that set
          them apart:You should have a strong track record of practical
          industry experience.You should have excellent interpersonal skills
          and a welcoming demeanor. You should an abundance mindset and are
          proactive in your approach.
        </p>
        <button className='bg-textColorPrimary text-white font-bold py-4 my-10 px-8 rounded-full hover:bg-primary hover:text-textColorPrimary hover:border-textColorPrimary hover:border-2 transition-all ease-in-out '>
              Join as a Mentor
            </button>
      </div>
      <div
        id="right"
        className="h-screen w-full px-6 flex justify-center items-center"
      >
        <img
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default MentorSteps;
