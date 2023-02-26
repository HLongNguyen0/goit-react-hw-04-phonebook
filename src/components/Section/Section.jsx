import { SectionContainer, Header } from "./Section.styled";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <>
      <SectionContainer>
        <Header>{title}</Header>
        {children}
      </SectionContainer>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;
