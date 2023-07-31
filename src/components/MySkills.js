import React from 'react'
import { FlexContainer, Heading, PaddingContainer, IconContainer, ParaText, BlueText } from './styled-components/Global.styled'
import { SkillsCardContainer, SkillsCard } from './styled-components/MySkills.styled'
import { BackednSkills, FrontendSkills } from '../utils/Data'
import { motion } from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';



const MySkills = () => {
  return (
    <div>
      
      <PaddingContainer top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
      <Heading as="h4" size="h4"  style={{ marginLeft:"1rem"}}>MY SKILLS</Heading>
      <Heading as="h2" size="h2" top="0.5rem" style={{marginBottom:"30px" , marginLeft:"1rem"}}>What <BlueText>I can do</BlueText></Heading>
        <FlexContainer responsiveDirection="column-reverse" responsiveFlex fullWidthChild>
          <SkillsCardContainer
            as={motion.div}
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
          >

            {FrontendSkills.map((skill) => (
              <SkillsCard key={skill.id}>
                <IconContainer size="5rem" color="blue">
                  {skill.icon}
                </IconContainer>

                <Heading as="h4" size="h4">{skill.tech}</Heading>
              </SkillsCard>
            ))}

          </SkillsCardContainer>

          <motion.div variants={fadeInRightVariant} initial="hidden" whileInView="visible">
            <Heading as="h2" size="h2" top="0.5rem">Frontend</Heading>

            <ParaText top="2rem" bottom="1.5rem">As a versatile developer, I possess a diverse skill set with a strong focus on front-end web
              development. My expertise lies in harnessing the power of HTML, CSS, and JavaScript to craft captivating and user-friendly interfaces.
              With a keen eye for design and a deep understanding of web technologies.</ParaText>

            <ParaText>I excel in creating responsive and dynamic web applications that leave a lasting impression on users. Leveraging the
              power of React and Redux, I have honed my abilities in building interactive and engaging web experiences that seamlessly adapt to
              various devices and screen sizes. By employing these cutting-edge technologies, I ensure that the applications I create are not only
              visually appealing but also highly functional and user-centric.</ParaText>
          </motion.div>
        </FlexContainer>
      </PaddingContainer>
      {/* BackednSkills */}
      <PaddingContainer top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
        <FlexContainer responsiveDirection="column-reverse" responsiveFlex fullWidthChild>
          <motion.div variants={fadeInRightVariant} initial="hidden" whileInView="visible">
            <Heading as="h2" size="h2"top="0.5rem">Backend</Heading>

            <ParaText top="2rem" bottom="1.5rem">In addition to front-end development, I possess a strong proficiency in back-end technologies,
              further enhancing my capabilities as a full stack developer. My expertise extends to Node JS, Express, and Mongo DB, enabling me to
              build robust and scalable server-side applications. By utilizing Mongoose, I have gained proficiency in efficiently managing data and
              interactions with databases. This comprehensive back-end knowledge complements my front-end skills, allowing me to craft end-to-end
              solutions that cater to diverse business requirements. With a focus on efficiency and maintainability, I take pride in developing
              clean and well-structured code that facilitates seamless collaboration and ensures the long-term success of projects.</ParaText>
          </motion.div>
          <SkillsCardContainer
            as={motion.div}
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
          >

            {BackednSkills.map((skill) => (
              <SkillsCard key={skill.id}>
                <IconContainer size="5rem" color="blue">
                  {skill.icon}
                </IconContainer>

                <Heading as="h4" size="h4">{skill.tech}</Heading>
              </SkillsCard>
            ))}

          </SkillsCardContainer>
        </FlexContainer>
      </PaddingContainer>
    </div>

  )
}

export default MySkills