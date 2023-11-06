import React from 'react';
import {Link} from "react-router-dom";

import {
    HorizontalLine,
    LogoContainer,
    MenuButton,
    NavigationDrawerContainer,
} from "./NavigationDrawerStyle";
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {SignInContainer} from "../common_styled_components/AuthenticationStyles";


function NavigationDrawer(props) {
    return (
        <NavigationDrawerContainer>
            <div>

                <MenuButton>
                    <HomeOutlinedIcon></HomeOutlinedIcon>
                    <h3>Home</h3>
                </MenuButton>
                <MenuButton>
                    <ExploreOutlinedIcon></ExploreOutlinedIcon>
                    <h3>Explore</h3>
                </MenuButton>
                <MenuButton>
                    <SubscriptionsOutlinedIcon></SubscriptionsOutlinedIcon>
                    <h3>Subscriptions</h3>
                </MenuButton>
                <HorizontalLine/>
                <MenuButton>
                    <LibraryAddCheckOutlinedIcon></LibraryAddCheckOutlinedIcon>
                    <h3>Library</h3>
                </MenuButton>
                <MenuButton>
                    <HistoryOutlinedIcon></HistoryOutlinedIcon>
                    <h3>History</h3>
                </MenuButton>
                <HorizontalLine/>
                <SignInContainer>
                    <p>Sign in to like, comment and subscribe.</p>
                    <button>Login</button>
                </SignInContainer>
                <HorizontalLine/>
                <MenuButton>
                    <MusicNoteOutlinedIcon></MusicNoteOutlinedIcon>
                    <h3>Music</h3>
                </MenuButton>
                <MenuButton>
                    <SportsBaseballOutlinedIcon></SportsBaseballOutlinedIcon>
                    <h3>Sports</h3>
                </MenuButton>
                <MenuButton>
                    <SportsEsportsOutlinedIcon></SportsEsportsOutlinedIcon>
                    <h3>Gaming</h3>
                </MenuButton>
                <MenuButton>
                    <LiveTvOutlinedIcon></LiveTvOutlinedIcon>
                    <h3>Live</h3>
                </MenuButton>
                <HorizontalLine/>
                <MenuButton>
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                    <h3>Settings</h3>
                </MenuButton>
                <MenuButton>
                    <LightModeOutlinedIcon></LightModeOutlinedIcon>
                    <h3 >LightMode</h3>
                </MenuButton>
            </div>
        </NavigationDrawerContainer>
    );
}

export default NavigationDrawer;