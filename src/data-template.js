import photosnapLogo from "./assets/images/photosnap.svg";
import manageLogo from "./assets/images/manage.svg";
import accountLogo from "./assets/images/account.svg";
import myhomeLogo from "./assets/images/myhome.svg";
import loop_studiosLogo from "./assets/images/loop-studios.svg";
import faceitLogo from "./assets/images/faceit.svg";
import shortlyLogo from "./assets/images/shortly.svg";
import insureLogo from "./assets/images/insure.svg";
import eyecam_coLogo from "./assets/images/eyecam-co.svg";
import the_air_filter_companyLogo from "./assets/images/the-air-filter-company.svg";

const data = [
  {
    logo: photosnapLogo,
    name: "Photosnap",
    job: "Senior Frontend Developer",
    badges: ["NEW", "FEATURED"],
    level: "Senior",
    role: "Frontend",
    languages: ["HTML", "CSS", "JavaScript"],
    time: "1d ago",
    workMethod: "Full Time",
    workType: "USA only",
    tools: []
  },
  {
    logo: manageLogo,
    name: "Manage",
    job: "Fullstack Developer",
    badges: ["NEW", "FEATURED"],
    level: "Midweight",
    role: "Fullstack",
    languages: ["Python"],
    time: "1d ago",
    workMethod: "Part Time",
    workType: "Remote",
    tools: ["React"]
  },
  {
    logo: accountLogo,
    name: "Account",
    job: "Junior Frontend Developer",
    badges: ["NEW"],
    level: "Junior",
    role: "Frontend",
    languages: ["JavaScript"],
    time: "2d ago",
    workMethod: "Part Time",
    workType: "USA only",
    tools: ["React", "Sass"]
  },
  {
    logo: myhomeLogo,
    name: "MyHome",
    job: "Junior Frontend Developer",
    badges: [],
    level: "Junior",
    role: "Frontend",
    languages: ["CSS", "JavaScript"],
    time: "5d ago",
    workMethod: "Contract",
    workType: "USA only",
    tools: ["React", "Sass"]
  },
  {
    logo: loop_studiosLogo,
    name: "Loop Studios",
    job: "Software Engineer",
    badges: [],
    level: "Midweight",
    role: "Fullstack",
    languages: ["JavaScript", "Ruby"],
    time: "1w ago",
    workMethod: "Full Time",
    workType: "Worldwide",
    tools: ["Sass"]
  },
  {
    logo: faceitLogo,
    name: "FaceIt",
    job: "Junior Backend Developer",
    badges: [],
    level: "Junior",
    role: "Backend",
    languages: ["Ruby"],
    time: "2w ago",
    workMethod: "Full Time",
    workType: "UK only",
    tools: ["RoR"]
  },
  {
    logo: shortlyLogo,
    name: "Shortly",
    job: "Junior Developer",
    badges: [],
    level: "Junior",
    role: "Frontend",
    languages: ["HTML", "JavaScript"],
    time: "2w ago",
    workMethod: "Full Time",
    workType: "Worldwide",
    tools: ["Sass"]
  },
  {
    logo: insureLogo,
    name: "Insure",
    job: "Junior Frontend Developer",
    badges: [],
    level: "Junior",
    role: "Frontend",
    languages: ["JavaScript"],
    time: "2w ago",
    workMethod: "Full Time",
    workType: "USA only",
    tools: ["Vue", "Sass"]
  },
  {
    logo: eyecam_coLogo,
    name: "Eyecam Co.",
    job: "Fullstack Engineer",
    badges: [],
    level: "Midweight",
    role: "Fullstack",
    languages: ["JavaScript", "Python"],
    time: "3w ago",
    workMethod: "Full Time",
    workType: "Worldwide",
    tools: ["Django"]
  },
  {
    logo: the_air_filter_companyLogo,
    name: "The Air Filter Company",
    job: "Front-end Dev",
    badges: [],
    level: "Junior",
    role: "Frontend",
    languages: ["JavaScript"],
    time: "1m ago",
    workMethod: "Part Time",
    workType: "Worldwide",
    tools: ["React", "Sass"]
  }
];

data.map(item => {
  const mappedItem = (item.tabs = [
    item.role,
    item.level,
    ...item.languages,
    ...item.tools
  ]);
  return mappedItem;
});

export default data;
