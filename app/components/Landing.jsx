const Landing = () => {
  return (
    <div className="w-screen h-screen bg-primary flex flex-col justify-center items-center text-textColorPrimary">
      <h1 className="text-6xl font-bold select-none text-center">
        Mentors,Investors and<br/>Buisness Experts
      </h1>
      <p className="py-4 text-center">Grow your startup through personalized mentorship sessions.<br/> Book 1:1 call with Startup Mentor today!</p>
      <button className=" bg-textColorPrimary text-white font-bold py-4 px-6 rounded-full my-6">Browse Mentor</button>
    </div>
  )
};

export default Landing;
