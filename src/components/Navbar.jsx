
import {AppBar, Box, Avatar, Hidden} from "@mui/material";
import Logo from '../assets/logo.jpg'
import { navbarLinks } from '../constants/navbarLinks'
import {Link} from "react-router-dom";
const Navbar = () =>  {


    return (
        <>
            <AppBar
                color={"transparent"}
                elevation={0}
                position="fixed"
                sx={{
                    background: '#ececec',
                }}
            >
                <Box py={1.3} px={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                    <img src={Logo} alt={'Atlan logo'} height={'40px'} />
                    <Box display={'flex'} alignItems={'center'}>
                        {
                            navbarLinks.map((each, index) => (
                                <Link to={each.link} key={index} target={each?.target} style={{textDecoration: "none"}}>
                                    <Box ml={2}>
                                        {each.title}
                                    </Box>
                                </Link>
                            ))
                        }
                        <Avatar src={'https://source.unsplash.com/featured/300x202'} sx={{background: '#2026d2', marginLeft: "30px"}} />
                    </Box>
                </Box>
            </AppBar>
        </>
    );
}

export default Navbar;
