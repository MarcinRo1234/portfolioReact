import { styled } from "styled-components"

const Button = styled.button`
    background: none;
     margin-bottom: 5px;
    padding: 5px 50px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    transition: font-size 0.3s;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        transform: translateY(-1px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3)
    }
    &:active{
        transform: translateY(0)
    }
`

export default function TabButton({children, isSelected, ...props}) {
    return (
        <li>
            <Button isSelected ={isSelected} {...props}>{children}</Button>
        </li>
    )
}