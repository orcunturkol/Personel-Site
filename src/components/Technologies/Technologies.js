import React from 'react';
import { DiAndroid, DiFirebase, DiMongodb, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
  <SectionTitle main>Technologies</SectionTitle>
  <SectionText>I have worked with many technologies. From Back-end to design.</SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>Experince with <br/>
        React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    
    <ListItem>
      <DiMongodb size="3rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>Experince with <br/>
        Node.js and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiAndroid size="3rem"/>
      <ListContainer>
        <ListTitle>Mobile App</ListTitle>
        <ListParagraph>Experince with <br/>
        Flutter
        </ListParagraph>
      </ListContainer>
    </ListItem>

  </List>
 </Section>
);

export default Technologies;
