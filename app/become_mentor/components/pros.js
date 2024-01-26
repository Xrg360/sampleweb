import React from "react";
const cardContent = [
  {
    title: "Create your own courses",
    content:
      "Create your own courses and share your knowledge with the world. You can create courses on your own and create them",
  },
  {
    title: "Earn money",
    content:
      "You can earn money by selling your courses on Sophise. You can earn money by selling your courses on Sophise. You can earn money by selling your courses on Sophise.",
  },
  {
    title: "Get featured",
    content:
      "You can earn money by selling your courses on Sophise. You can earn money by selling your courses on Sophise. You can earn money by selling your courses on Sophise.",
  },
  {
    title: "Get featured",
    content:
      "You can earn money by selling your courses on Sophise. You can earn money by selling your courses on Sophise. You can earn money by selling your courses on Sophise.",
  },
  {
    title: "Get featured",
    content:
      "You can earn money by selling your courses on Sophise. You can earn money by selling your courses on Sophise. You can earn money by selling your courses on Sophise.",
  },
];
const WhyMentor = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-5xl text-textColorPrimary font-bold">
      <h1 className="my-10">Why should you become mentor on Sophise</h1>
      <div className="w-3/4 relative overflow-auto">
      <div className="w-full flex">
        {cardContent.map((item, index) => (
          <div key={index} className="py-5 ">
          <div  className="bg-white rounded-lg shadow-md px-14 w-[25rem] h-[20rem] mx-10 flex flex-col items-center py-6  text-textPrimaryColor">
            <h2 className="text-3xl font-bold my-6">{item.title}</h2>
            <p className="text-base font-light">{item.content}</p>
          </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default WhyMentor;
