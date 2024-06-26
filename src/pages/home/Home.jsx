// import { H1heading } from "./Home.styled";
import {
  AdvantagesList,
  AdvantagesSection,
  Container,
  ContentWrapper,
  CustomLink,
  HighlightSpan,
  HighlightedText,
  ImageContainer,
  ImageGirl,
  ImageMac,
  MainContent,
  StatItem,
  StatNumber,
  StatText,
  Subtitle,
  Title,
} from "./Home.styled.js";

import girlAvatar from "../../images/GirlAvatar.png";
import girlAvatar2x from "../../images/GirlAvatar-2x.png";
import girlAvatar3x from "../../images/GirlAvatar-3x.png";

import mac from "../../images/Mac.png";
import mac2x from "../../images/Mac-2x.png";
import mac3x from "../../images/Mac-3x.png";

const Home = () => {
  return (
    <Container>
      <MainContent>
        {/* Main body */}
        <ContentWrapper>
          <Title>
            Unlock your potential with the best{" "}
            <HighlightSpan>language</HighlightSpan> tutors
          </Title>
          <Subtitle>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Subtitle>
          <CustomLink to="/teachers">Get started</CustomLink>
        </ContentWrapper>

        {/* Image */}
        <ImageContainer>
          <picture>
            <source
              srcSet={`${girlAvatar} 1x, ${girlAvatar2x} 2x, ${girlAvatar3x} 3x`}
            />
            <ImageGirl src={girlAvatar} alt="Girl" />
          </picture>
          <picture>
            <source srcSet={`${mac} 1x, ${mac2x} 2x, ${mac3x} 3x`} />
            <ImageMac src={mac} alt="Mac" />
          </picture>
        </ImageContainer>
      </MainContent>

      {/* Advantages */}
      <AdvantagesSection>
        <AdvantagesList>
          <StatItem>
            <StatNumber>32,000 +</StatNumber>
            <StatText>
              Experienced <HighlightedText>tutors</HighlightedText>
            </StatText>
          </StatItem>
          <StatItem>
            <StatNumber>300,000 +</StatNumber>
            <StatText>
              5-star tutor <HighlightedText>reviews</HighlightedText>
            </StatText>
          </StatItem>
          <StatItem>
            <StatNumber>120 +</StatNumber>
            <StatText>
              Subjects <HighlightedText>taught</HighlightedText>
            </StatText>
          </StatItem>
          <StatItem>
            <StatNumber>200 +</StatNumber>
            <StatText>
              Tutor <HighlightedText>nationalities</HighlightedText>
            </StatText>
          </StatItem>
        </AdvantagesList>
      </AdvantagesSection>
    </Container>
  );
};

export default Home;
