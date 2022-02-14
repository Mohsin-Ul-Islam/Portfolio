const projects = [
  {
    title: "Electricity Bill Alerter",
    date: "October, 2021",
    description:
      "Utility bills in Pakistan are released around mid month. As there is no digital notification from the government, I usually forget and fail to pay the bill in the due time. This project sends me automated SMS whenever I have to pay my electricity bills.",
    link: "https://github.com/Mohsin-Ul-Islam/electricity-bill-alerter",
  },
  {
    title: "Birthday Wisher",
    date: "February, 2022",
    description:
      "After graduating from LUMS, I made a lot of quality and awesome friends. Due to my busy schedule I sometimes forget to wish my remote friends their birthday. I made this tool to wish birthdays to my friends on time.",
    link: "https://github.com/Mohsin-Ul-Islam/birthday-wisher",
  },
  {
    title: "Conway's game of life",
    date: "June, 2020",
    description:
      "This project is a browser based simulation of Conway's game of life. You can read more about it on wikipedia. The simulation is capable of providing step as well as time (in milliseconds) based game evolution. It also supports pause and play.",
    link: "https://mohsin-ul-islam.github.io/game-of-life/",
  },
  {
    title: "Dxball",
    date: "Febraury, 2019",
    description:
      "Dxball is a remake of classic dxball game. The game consist of different kinds of bricks to be broken by player using a metal ball and a platform to avoid the ball falling down. This game is made in C++ using SFML.",
    link: "https://github.com/Mohsin-Ul-Islam/dxball",
  },
  {
    title: "Snake",
    date: "July, 2020",
    description:
      "This project is a snake game made in C++ using SFML. The project is not only a snake game but a good example of best design patterns and their practices. Work for computer player using artificial intelligence is in progress.",
    link: "https://github.com/Mohsin-Ul-Islam/snake",
  },
];

const educations = [
  {
    date: "August 2003 - April 2011",
    subjects: "General Sciences, Literature",
    institution: "Working Folks Grammar School",
  },
  {
    date: "April 2011 - June 2017",
    subjects: "Pre Engineering",
    institution: "Karnal Sher Khan Cadet College Swabi",
  },
  {
    date: "August 2017 - June 2021",
    subjects: "BS Computer Science",
    institution: "Lahore University of Management Sciences",
  },
];

const experiences = [
  {
    date: "Febraury 2021 - April 2021",
    designation: "Software Engineering Intern",
    company: "laam.pk",
  },
  {
    date: "June 2021 - Febraury 2022",
    designation: "Software Engineer",
    company: "laam.pk",
  },
  {
    date: "March 2022 - Present",
    designation: "Senior Software Engineer",
    company: "tajir.app",
  },
];

function renderHomePage(_, res) {
  const data = {
    projects,
    educations,
    experiences,
  };

  return res.render("index", data);
}

module.exports = { renderHomePage };
