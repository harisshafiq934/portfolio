import React from 'react';

function AboutUs() {
  return (
    <div name="about" className="container mt-16">

      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="text-center flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-white">
          <h2 className="text-4xl font-bold">
            About
          </h2>
          <div className="flex flex-col items-center md:items-start w-full md:w-2/3 mx-auto mt-4 ">
            <p className="text-center md:text-left">
              I'm a front-end developer with a year of experience building user-friendly interfaces using React. I'm passionate about creating intuitive web experiences and enjoy the challenge of translating complex ideas into clear designs. React's component-based approach allows me to write clean code and build dynamic applications. I'm always learning and excited to collaborate on projects that push the boundaries of web development!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
