import { styled } from "styled-components";
import NavElement from "./NavElement";
import { navItems} from "../util/data"


const NavHeader = styled.div`
    max-width: 1600px;
    margin: 5px auto;
    margin-bottom: 20px;
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
const NavMenuContact = styled.div`
    margin-right:20px;
    &i:hover{
        transition: translate
    }

`
    




export default function Nav(){
    return(
        <NavHeader>
            <NavMenu>
                <NavMenuLogo>Logo</NavMenuLogo>
                <NavMenuList>
                    {navItems.map((item) => <NavElement key={item.title} {...item} />)}
                </NavMenuList>
                <NavMenuContact><span><i className="fa-regular fa-envelope"></i> Contact</span></NavMenuContact>
            </NavMenu>
        </NavHeader>
    )
}


    