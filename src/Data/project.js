import Realstate from "../assets/portfolio/realestate.png"
import Restaurent from "../assets/portfolio/restaurent.png"
import BlissFlight from "../assets/portfolio/blissflights.png"
import Vsl from "../assets/portfolio/vslaynalyzer.png"
import AfricanMoney from "../assets/portfolio/africanmoneyhustle.png"




const experiences = [
    {
      title: "Frontend Developer at MAAQ Services",
      icon: "",
      iconBg: "#383E56",
      date: "December 2023 - Presnt",
      points: [
        "Developing and maintaining web & app applications using JavaScript and other related technologies.",
        "Took part in developing frontend as a Team member",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Associate Software Engineer at BitBeaver",
      icon: "",
      iconBg: "#383E56",
      date: "July 2023 - October 2023",
      points: [
        "Developing and maintaining web applications using JavaScript and other related technologies.",
        "Took part in developing frontend as a Team member",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Learnt OOP deep concepts and Python for Back-end Development.",
      ],
    },
    {
      title: "Frontend Developer at TechnoKloud",
      icon: "",
      iconBg: "#383E56",
      date: "September 2022 - Present",
      points: [
        "Developing and maintaining web applications using JavaScript and other related technologies.",
        "Collaborating with other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];


const projects = [
    {
      name: "Restaurant",
      description:
        "Developed a Restaurant Web Application utilizing the MERN stack, featuring an integrated Stripe payment method for seamless user purchases and order management.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
        {
            name: "Expessjs",
            color: "pink-text-gradient",
        },
        {
            name: "Node Js",
            color: "pink-text-gradient",
        },
        {
            name: "MongoDB",
            color: "pink-text-gradient",
        }
        ,
        {
            name: "stripe",
            color: "pink-text-gradient",
        }
      ],
      image: Restaurent,
      source_code_link: "https://books-store-with-reducer.vercel.app/",
    },
    {
      name: "Bliss Flight",
      description:
        "Enhanced Bliss Flights' user experience through the addition of new UI pages and optimization of responsiveness as a freelance project",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "MUI",
          color: "pink-text-gradient",
        },
      ],
      image: BlissFlight,
      source_code_link: "https://bliss-flights.co.uk/flights",
    },
    {
      name: "Real Estate",
      description:
        "Developed a visually appealing and user-friendly real estate website using React, HTML, CSS, and JavaScript",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
      ],
      image: Realstate,
      source_code_link: "https://real-estate-front-end.netlify.app/",
    },
    {
      name: "vsl Aynalyzer",
      description:
        "Converting Figma designs into a responsive web application using React, Tailwind CSS, HTML, and CSS as a freelance project.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        
      ],
      image: Vsl,
      source_code_link: "http://vslanalyzer.com/",
    },
    {
      name: "African Money Hustle",
      description:
        "In 'African Money Hustle,' I adeptly convert PSD designs into responsive HTML/CSS using Bootstrap, showcasing my web development skills.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: AfricanMoney,
      source_code_link: "https://africanmoneyhustle.com/",
    },
    // {
    //   name: "Creative Agency Portfolio",
    //   description:
    //     "A comprehensive responsive and interactive Website frontend design which shows Creatic creative Agency's portfolio, pages, services, contact e.t.c ",
    //   tags: [
    //     {
    //       name: "HTML",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "CSS",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Bootstrap",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: "",
    //   source_code_link: "https://github.com/rao-rabi/Creatic-Creative-Agency.git",
    // },
  ];
  
  export { experiences, projects };