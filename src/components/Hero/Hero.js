import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
      Full stack developer <br/>
      and designer  
      </SectionTitle>
      <SectionText>I develop good-looking, responsive apps and websites. </SectionText>
      <Button onClick={()=> window.location = "mailto:ofturkol@gmail.com"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;