import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';
import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../styled-components/Global.styled';
import {
    ProjectContentContainer,
    ProjectImageContainer,
    TechStackCard,
    ProjectImage,
} from '../styled-components/MyProjects.styled';

const Project = ({
    rowReverse,
    heading,
    description,
    skillsUsed,
    githubLink,
    websiteUrl,
    image,
    index,
}) => {
    return (
        <FlexContainer
            rowReverse={rowReverse ? true : false}
            fullWidthChild
            style={{ marginTop: index !== 0 ? '50px' : '10px' }}
        >
            <ProjectContentContainer
                as={motion.div}
                variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                        {heading}
                    </Heading>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">
                        {skillsUsed && skillsUsed.map((skill, index) => <TechStackCard key={index}>{skill}</TechStackCard>)}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top="1.5rem" bottom="2rem">
                    {description}
                </ParaText>
                <FlexContainer align="center" gap="2rem">
                    {websiteUrl ? (
                        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                            <Button>Visit Website</Button>
                        </a>
                    ) : (
                        <span>
                            <Button disabled>Visit Website</Button>
                        </span>
                    )}

                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" >
                            <IconContainer color="blue" size="2rem">
                                <FaGithub />
                            </IconContainer>
                        </a>
                    )}
                </FlexContainer>

            </ProjectContentContainer>
            <ProjectImageContainer
                justify={rowReverse ? 'flex-start' : 'flex-end'}
                as={motion.div}
                variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <ProjectImage src={image} alt="project" />
            </ProjectImageContainer>
        </FlexContainer>
    );
};

export default Project;
