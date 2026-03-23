import { styled } from "styled-components";
const BCwrapper = styled.div`
  max-width: 1000px;
  min-height: 300px;
  margin: 10px auto;
  border-radius: var(--main-border-radius);
  border: 1px solid #eceadb;
  background-color: #3b403e;
  box-shadow: 12px -7px 48px -30px rgba(249, 249, 249, 1);
`;
const BCwrapperContent = styled.div`
  display: flex;
  // flex-direction: row;
  align-items: center;
  justify-content: space-evenly;    
  //   background-color: #434a47;

  margin: 20px;
`;
const BCwrapperContentText = styled.section`
  margin: 10px;
`;
const BCbutton = styled.button`
  cursor: pointer;
  margin-top: 30px;
  background: #8a2be2;
  border: none;
  border-radius: 8px;
  padding: 7px 12px;
`;
const BCh2 = styled.h2`
  margin-bottom: 50px;
  letter-spacing: 2px;
  border-bottom: 2px solid #8a2be2;
`;
const SectionImg = styled.section`
  height: 300px;
  width: 300px;
  border-radius: 50px 7px 68px 7px;
  border: 5px dotted #8a2be2;
`


export default function BusinessCard({title, description, buttonText, imgSrc, imgAlt}) {
  return (
    <BCwrapper>
      <BCwrapperContent>
        <section className="wrapper-content__text">
          <BCh2>{title}</BCh2>
          <p>{description}</p>
          <BCbutton type="button">{buttonText}</BCbutton>
        </section>
        <SectionImg>
          <img src={imgSrc} alt={imgAlt} />
        </SectionImg>
      </BCwrapperContent>
    </BCwrapper>
  );
}