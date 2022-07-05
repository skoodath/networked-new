import { WrapperContainer } from "../../styles/Reusable/wrapperdiv.style";
import introvideo from "../../assets/videos/networkedexplainer.mp4";
import {
  InnerWrapper,
  IntroParaWrapper,
  Styledintropara,
} from "../../styles/intro.style";
import SectionHeader from "../reusable/sectionheader";

const Intro = () => {


    return (
    <>
      <WrapperContainer>
        <InnerWrapper>
          <SectionHeader text={`A new way of thinking`} />
          <IntroParaWrapper>
            <Styledintropara>
              Our minds make connections all the time, trying to make sense of
              the patterns we see and the information we absorb.
            </Styledintropara>
            <Styledintropara>
              These interconnections when taught to be viewed holistically, can
              open up young minds to immense possibilities, fuel curiosity and
              enhance their learning appetite.
            </Styledintropara>
            <Styledintropara
              fontsize
              fontwght
              borderleft
              paddingleft
            >
              networkED is an initiative for children to discover how everything
              is interconnected in the world around them. The method uses
              principles of Network Theory, Complex Adaptive Systems and
              Relational Thinking to help children explore and navigate real
              life situations with ease.
            </Styledintropara>
          </IntroParaWrapper>
          <video
            loop
            muted
            autoPlay
          >
            <source src={introvideo} type="video/mp4" />
          </video>
        </InnerWrapper>
      </WrapperContainer>
    </>
  );
};

export default Intro;
