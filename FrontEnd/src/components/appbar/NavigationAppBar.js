import React from 'react';
import {AppBarContainer, LogoContainer, SearchContainer, verticalLine} from "./NavigationAppBarStyles";
import {SearchOutlined} from "@mui/icons-material";
import {SignInContainer} from "../common_styled_components/AuthenticationStyles";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {Link} from "react-router-dom";

function NavigationAppBar(props) {
    return (
        <AppBarContainer>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <LogoContainer>

                <YouTubeIcon style={{color: "red", height: "40px", width: "40px",}}/>
                <h1>Ytube</h1>

            </LogoContainer>
            </Link>
            <SearchContainer>
                <input type='text' placeholder='Search'/>
                <verticalLine></verticalLine>
                <div>
                    <SearchOutlined ></SearchOutlined>
                </div>
            </SearchContainer>
            <SignInContainer>
                <button>Login</button>
            </SignInContainer>

        </AppBarContainer>
    );
}

export default NavigationAppBar;