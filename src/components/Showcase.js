import React from 'react';
import { PaddingContainer, FlexContainer, Heading, BlueText, ParaText, Particle } from './styled-components/Global.styled';
import { ShowcaseImageCard, ShowcaseParticleContainer, IconContainer } from './styled-components/Showcase.styled'
import ShowcaseImg from '../assets/showcase-img.png';
import BackgroundImg from '../assets/particle.png';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {

    const handleIconClick = (url) => {
        if (url.startsWith('mailto:')) {
            window.location.href = url;
        } else {
            window.open(url, '_blank');
        }
    };
    return (
        <PaddingContainer left="3%" right="10%" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
            <FlexContainer align="center" fullWidthChild>
                <motion.div variants={fadeInLeftVariant} initial="hidden" whileInView="visible">
                    <Heading as="h4" size="h4" >Hello!</Heading>

                    <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                        I'm <BlueText>Yashwanth</BlueText>
                    </Heading>

                    <Heading as="h3" size="h3">
                        I'm a <BlueText>Full-stack Developer</BlueText>
                    </Heading>

                    <ParaText as="p" top="2rem" bottom="4rem">
                        Hello, I'm Yashwanth Reddy, a passionate Full Stack Developer with a solid technical background in web development.
                        Over the course of my journey, I have honed my skills in both front-end and back-end technologies through specialized
                        training at HashInsert.
                    </ParaText>

                    <FlexContainer gap="20px" responsiveFlex>
                        <IconContainer onClick={() => handleIconClick('mailto:yashwanth18183@gmail.com')}>
                            <MdEmail />
                        </IconContainer>

                        <IconContainer onClick={() => handleIconClick('https://github.com/yashwanthg7')}>
                            <BsGithub />
                        </IconContainer>

                        <IconContainer onClick={() => handleIconClick('https://www.linkedin.com/in/yashwanth-reddy-peddaivuram-088741211/')}>
                            <BsLinkedin />
                        </IconContainer>

                        <IconContainer onClick={() => handleIconClick('https://twitter.com/YASHWAN88969733')}>
                            <BsTwitter />
                        </IconContainer>
                    </FlexContainer>
                </motion.div>

                <FlexContainer justify="flex-end">
                    <ShowcaseParticleContainer as={motion.div} variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                        <ShowcaseImageCard background={BackgroundImg}>
                            <img src={ShowcaseImg} alt="showcase"
                                width='400px'
                                height="450px"
                            />
                        </ShowcaseImageCard>

                        <Particle src={BackgroundImg} initialTop="-80px" initialLeft="20px" rotate="60deg" />
                        <Particle src={BackgroundImg} initialTop="50px" initialRight="-70px" rotate="0deg" />
                        <Particle src={BackgroundImg} initialBottom="10px" initialLeft="-70px" rotate="50deg" />
                    </ShowcaseParticleContainer>
                </FlexContainer>

            </FlexContainer>

        </PaddingContainer>
    )
}

export default Showcase;