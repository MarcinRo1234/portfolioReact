import { styled } from "styled-components";

const NavHeader = styled.div`
    max-width: 1600px;
    margin: 5px auto;
`
const NavMenu = styled.nav`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 50px;
    background-color: blueviolet;
    border-radius: 10px;
`
const NavMenuLogo = styled.div`
`
const NavMenuList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;
    list-style: none;
    width: 500px;
`
    

const NamMenuListElementButton = styled.button`
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    transition: font-size 0.3s;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        transform: translateY(-1px);
        box-shadow: 0 6px 10px rgba(188, 196, 235, 0.3)
    }
    &:active{
        transform: translateY(0)
    }

`

export default function Nav(){
    return(
        <NavHeader>
            <NavMenu>
                <NavMenuLogo>Logo</NavMenuLogo>
                <NavMenuList>
                    <li class="nav-menu__list-element"><NamMenuListElementButton>About ME</NamMenuListElementButton></li>
                    <li class="nav-menu__list-element"><NamMenuListElementButton>Career</NamMenuListElementButton></li>
                    <li class="nav-menu__list-element"><NamMenuListElementButton>Skills</NamMenuListElementButton></li>
                    <li class="nav-menu__list-element"><NamMenuListElementButton>Portfolio</NamMenuListElementButton></li>
                </NavMenuList>
                <div class="changeMode"><span>change theme</span></div>
            </NavMenu>
        </NavHeader>
    )
}


    