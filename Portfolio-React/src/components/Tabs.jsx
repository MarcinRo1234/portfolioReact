import { styled } from "styled-components";

const ButtonsContainer = styled.ul`
    margin: 10px;
    list-style-type: none;

`


export default function Tabs({children, buttons}) {
    // const ButtonsContainer = buttonsContainer
    return(
        <>
            <ButtonsContainer>
                {buttons}
                {children}
            </ButtonsContainer>  
        </>
    )
}