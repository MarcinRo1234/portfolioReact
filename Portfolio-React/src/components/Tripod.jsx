import { styled } from "styled-components";

const DivWrapper = styled.div`
  max-width: 1000px;
  margin: 5px auto;
  margin-bottom: 40px;
//   background-color: blueviolet;
`;
const H2 = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 25px;
`;
const UL = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  column-gap: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`;
const Li = styled.li`
    padding: 5px 10px;
    box-shadow: 12px -7px 48px -30px rgb(138, 43, 226);
    border: 1px solid rgb(138, 43, 226);
`
const H3 = styled.h3`
  font-size: 20px;
  line-height: 26px;
  margin: 24px 0px 2px;
`;
const Button = styled.button`
  display: block;
    margin: 10px auto;
//   font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
//   -webkit-box-reflect: below 10px
//     linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  &:active {
    scale: 0.92;
  }
  &:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(2, 29, 78, 0.681) 0%,
      rgba(31, 215, 232, 0.873) 60%
    );
    color: rgb(4, 4, 38);
  }
`;
export default function Tripod() {
  return (
    <DivWrapper>
      <H2>Lorem korem dolorem prolem</H2>
      <UL>
        <Li>
          <div className="section_box">
            <picture></picture>
            <div className="section_box__content">
              <H3>Lorem, ipsum dolor.</H3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section_box__btns">
              <Button>Lorem</Button>
            </div>
          </div>
        </Li>
        <li>
          <div className="section_box">
            <picture></picture>
            <div className="section_box__content">
              <H3>Lorem, ipsum dolor.</H3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section_box__btns">
              <Button>Lorem</Button>
            </div>
          </div>
        </li>
        <li>
          <div className="section_box">
            <picture></picture>
            <div className="section_box__content">
              <H3>Lorem, ipsum dolor.</H3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section_box__btns">
              <Button>Lorem</Button>
            </div>
          </div>
        </li>
      </UL>
    </DivWrapper>
  );
}
