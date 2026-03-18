import { styled } from "styled-components";
const BCwrapper = styled.div`
  max-width: 1000px;
  min-height: 400px;
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
  max-width: 300px;
  max-height: 200px;
  padding: 5px;
  cursor: pointer;
  margin-top: 10px;
`;
const BCh2 = styled.h2`
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

export default function BusinessCard() {
  return (
    <BCwrapper>
      <BCwrapperContent>
        <section className="wrapper-content__text">
          <BCh2>Developer name</BCh2>
          <p>Developer description</p>
          <BCbutton>About developer</BCbutton>
        </section>
        <section className="wrapper-content__photo">
          <img src="" alt="dev foto" />
        </section>
      </BCwrapperContent>
    </BCwrapper>
  );
}