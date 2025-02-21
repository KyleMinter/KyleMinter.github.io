import { AiFillQuestionCircle } from "react-icons/ai";
import { BsChevronBarUp } from "react-icons/bs";
import { BsChevronBarDown } from "react-icons/bs";
import { FaCog } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { MdScreenLockPortrait } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";

import { SiSourceengine } from "react-icons/si";

const IconMap = {
    'question': <AiFillQuestionCircle />,
    'arrowup': <BsChevronBarUp />,
    'arrowdown': <BsChevronBarDown />,
    'cogwheel': <FaCog />,
    
    'email': <MdEmail />,
    'linkedin': <GrLinkedin />,
    'github': <FaGithub />,
    'artstation': <FaArtstation />,

    'javascript': <IoLogoJavascript />,
    'typescript': <SiTypescript />,
    'python': <FaPython />,
    'c': <SiC />,
    'c++': <SiCplusplus />,
    'html': <FaHtml5 />,
    'css': <FaCss3Alt />,

    'react': <FaReact />,
    'angular': <FaAngular />,
    'wpf': <FaWpforms />,
    'node.js': <FaNodeJs />,
    '.net': <SiDotnet />,
    'googlesignin': <MdScreenLockPortrait />,
    'restapi': <TbApi />,
    'entityframework': <FaDatabase />,
    'aws': <FaAws />,
    'postgresql': <BiLogoPostgresql />,
    'sqlite': <SiSqlite />,

    'source': <SiSourceengine />,
};

export default IconMap;