import React from 'react'
import {
    PaddingContainer,
    Heading,
    BlueText,
}
    from './styled-components/Global.styled';


import UrlShortener from '../assets/UrlShortner.png';
import MockMeet from "../assets/Mockmeet.png";
import ExpenseTracker from "../assets/expense-tracker.png";
import TodoApp from "../assets/Todoapp.png"

import Project from './layouts/Project';
import { motion } from 'framer-motion';
import { fadeInTopVariant } from '../utils/Variants';

const MyProjects = () => {
    return (
        <PaddingContainer top="5%" bottom="5%" responsiveTop="20%" responsiveLeft="1rem" responsiveRight="1rem">
            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h4"
            >
                MY PROJECTS
            </Heading>

            <Heading
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
                top="0.5rem"
            >
                What <BlueText>I have built</BlueText>
            </Heading>

            <PaddingContainer top="5rem" bottom="5rem">
                {randomProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </PaddingContainer>

        </PaddingContainer>
    )
}

export default MyProjects;

const randomProjects = [
    {
        index:0,
        rowReverse:false,
        heading: 'UrlShortener',
        description:
            "Created a URL shortening service with data persistence using MongoDB API services for URL creation and retrieval and hosted the application on Render allowing users to shorten and access URLs efficiently.",
        skillsUsed: ['Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/yashwanthg7/url-shortener',
        websiteUrl: 'https://url-shortener-rp1j.onrender.com/',
        image: UrlShortener,
    },
    {
        index:1,
        rowReverse:true,
        heading: 'MockMeet',
        description:
            'I contributed as a member of the frontend team in the development of MockMeet, a mock interview scheduler app that enables students to schedule interviews, receive feedback.',
        skillsUsed: ['React JS', 'Chakra-UI' , 'styled-components'],
        githubLink: 'https://github.com/hash-insert/mockmeet',
        websiteUrl: null,
        image: MockMeet,
    },
    {
        index:2,
        rowReverse:false,
        heading: 'Expense Tracker',
        description:
            'I developed a full stack MERN expense tracker enabling users to effortlessly manage finances, track earnings and spending, and optimize budgets for better financial control',
        skillsUsed: ['React JS', 'Node JS' , 'Mongo DB' , 'Express JS'],
        githubLink: 'https://github.com/yashwanthg7/Track-your-wallet',
        websiteUrl: 'https://track-your-wallet.onrender.com/',
        image:ExpenseTracker,
    },
    {
        index:3,
        rowReverse:true,
        heading: 'Todo App',
        description: 'I created a clean and user-friendly notes takingapp using React, implementing core concepts such as components,state, and hooks. The app allows users to effortlessly add, delete, search, and display notes using a simple card-based UI',
        skillsUsed: ['React JS', 'Node JS', 'Mongo Db' , 'Express JS'],
        githubLink: 'https://github.com/hash-insert/checkpoint-yet-another-todo-app-yashwanthg7',
        websiteUrl: null,
        image: TodoApp,
    },
];
