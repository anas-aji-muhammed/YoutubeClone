import React from 'react';
import {
    ActionButtonContainer,
    ChannelInfo,
    ChannelInfoContainer,
    channelInfoContainer, DescriptionAndViewsContainer, VerticalLine, VideoActionsContainer,
    VideoPlayerComponentContainer,
    VideoPlayerDescription
} from "./VideoPlayerComponentStyles";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function VideoPlayerComponent(props) {
    return (
        <VideoPlayerComponentContainer>

            <iframe width="1280"  src="https://www.youtube.com/embed/2KWdT4PkXgY"
                    title="CSS Tips And Tricks I Wish I Knew Before" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>

            </iframe>
            <h1>
                CSS Tips And Tricks I Wish I Knew Before
            </h1>
            <VideoPlayerDescription>
                    <ChannelInfoContainer>
                        <img src='https://yt3.ggpht.com/ewC1nleORkp8FkJpZrDPrqmVry6JHkUV_1eWuYFLlXTJGaoQ0v0qn1YLdZcpffMaRJrMMYIT5_U=s68-c-k-c0x00ffffff-no-rj' alt='channel icon image'/>
                        <ChannelInfo>
                            <h1>
                                Business Insider
                            </h1>
                            <p>
                                10M Subscribers
                            </p>
                        </ChannelInfo>
                        <button>
                            Subscribed
                        </button>

                    </ChannelInfoContainer>
                    <VideoActionsContainer>
                        <ActionButtonContainer>
                            <div>
                                <ThumbUpOutlinedIcon/>
                                <p>2k</p>
                                <VerticalLine/>
                                <ThumbDownOffAltOutlinedIcon/>
                                <p>Dislike</p>
                            </div>

                        </ActionButtonContainer>
                        <ActionButtonContainer>
                            <div>
                                <ShareOutlinedIcon/>
                                <p>Share</p>
                            </div>
                        </ActionButtonContainer>

                    </VideoActionsContainer>
            </VideoPlayerDescription>
            <DescriptionAndViewsContainer>
                <h1>
                    86K views  1 year ago
                </h1>
                <p>
                    Aenean non porttitor magna. Nulla in pulvinar risus. Aenean lacinia tempus erat nec semper. Pellentesque augue odio, tempus at lectus ut, gravida hendrerit justo. Morbi eget eros quis nisl tincidunt laoreet vitae at quam. Nunc molestie massa nec urna mattis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.


                </p>

            </DescriptionAndViewsContainer>
        </VideoPlayerComponentContainer>
    );
}

export default VideoPlayerComponent;