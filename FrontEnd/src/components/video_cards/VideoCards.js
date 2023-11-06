import React from 'react';
import {
    ChannelImage,
    ThumbnailImage,
    VideoCardContainer,
    VideoCardDescription,
    VideoCardDescriptionContainer
} from "./VideoCardStyles";
import {Link} from "react-router-dom";

function VideoCards(props) {
    return (

        <VideoCardContainer width={props.width} margin={props.margin} radius={props.radius}>
            <Link to="/video/123" style={{textDecoration: 'none'}}>

            <ThumbnailImage src={props.thumbnail} alt='video thumbnail'/>
            <VideoCardDescriptionContainer>
                <ChannelImage src={props.channelImg} alt='channel Image' />
                <VideoCardDescription>
                    <h1>React Video Sharing App UI Design</h1>
                    <h2>Tech Talks</h2>
                    <p>177K views • 2 months ago</p>

                </VideoCardDescription>
            </VideoCardDescriptionContainer>
                </Link>

        </VideoCardContainer>

    );
}

export default VideoCards;