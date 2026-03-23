import { styled } from "styled-components"


const NamMenuListElementButton = styled.button`
    border: none;
    background: none;
    padding: 5px 10px;
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

export default function NavElement({title}) {
    return (
        <li className="nav-menu__list-element">
            <NamMenuListElementButton>{title}</NamMenuListElementButton>
        </li>
    )


}
