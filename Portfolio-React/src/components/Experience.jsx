import { styled } from "styled-components";


const DivWrapper = styled.div`
    max-width: 1000px;
    min-height: 300px;
    margin: 10px auto;
    border-radius: var(--main-border-radius);
    border: 1px solid rgb(138, 43, 226);
    background-color: #3b403e;
    box-shadow: 12px -7px 48px -30px rgb(138, 43, 226);

`
const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Div = styled.div`
    background-color: rgb(138, 43, 226)
`

export default function Experience() {
    return(
        <DivWrapper>
            <h1>Experience</h1>
            <SectionContainer>
                <aside style={{display:"flex", flexDirection: "start"}}>
                    <ul>
                        <li style={{backgroundColor: "rgb(138, 43, 226)"}}>PKOBP</li>
                        <li>Millennium</li>
                    </ul>
                </aside>
                <Div>
                    <h3>Stanowisko</h3>
                    <p>Opis stanowiska</p>
                    <p>Zakres dat na stanowisku</p>
                </Div>
            </SectionContainer>
        </DivWrapper>
    )
}