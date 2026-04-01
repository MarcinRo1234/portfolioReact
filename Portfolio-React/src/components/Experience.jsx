import { styled } from "styled-components";
import { useState } from "react";
import { experience } from "../util/data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

const DivWrapper = styled.div`
    max-width: 1000px;
    min-height: 300px;
    margin: 10px auto;
    border-radius: var(--main-border-radius);
    // border: 1px solid rgb(138, 43, 226);
    // background-color: #3b403e;
    // box-shadow: 12px -7px 48px -30px rgb(138, 43, 226);

`
const SectionContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    // margin: 10px 20px;
    border-right: 5px solid rgb(138, 43, 226);
    // border-bottom: 5px solid rgb(138, 43, 226);
`
const Header = styled.h2`
    padding: 5px 10px;
    border-left: 5px solid rgb(138, 43, 226);
    border-bottom: 5px solid rgb(138, 43, 226)

`
const Aside = styled.aside`
    border-right: 5px solid rgb(138, 43, 226);
    width: 30%
`
const Div = styled.div`
    width: 70%;
    margin-left: 15px;
    
`

export default function Experience() {
    const [selectedTopic, setSelectedTopic] = useState()
    function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

    let tabContent = <p>Select button</p>
    if (selectedTopic) {
        tabContent = (<div>
            <h3>{experience[selectedTopic].header}</h3>
            <p>{experience[selectedTopic].description}</p>
            <p>{experience[selectedTopic].years}</p>
        </div>)
    }
    return(
        <DivWrapper>
            <Header>Experience</Header>
            <SectionContainer>
                <Aside>
                    <Tabs>
                        <TabButton isSelected={selectedTopic === 'millennium'} onClick={() => handleSelect('millennium')}>millennium</TabButton>
                        <TabButton isSelected={selectedTopic === 'pkobp'} onClick={() => handleSelect('pkobp')}>pkobp</TabButton>
                    </Tabs>
                </Aside>
                <Div>
                    {tabContent}

                </Div>
            </SectionContainer>
            

        </DivWrapper>
    )
}