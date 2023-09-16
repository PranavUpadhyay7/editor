import {AppBar , Toolbar , styled } from "@mui/material";

const Container=styled(AppBar)`
background: #060606;
height:9vh;
`
const logo= "https://shots.codepen.io/username/pen/WWLOpb-800.jpg?version=1556227146"
const Header = () => {
    return (
        <Container position="static">
            <Toolbar>
                <img src={logo} alt="logo" style={{width:'120px'}} />
            </Toolbar>
        </Container>
    )
}
export default Header;