import React from 'react';
import {RecommendationContainer, VideoContentContainer, VideoPageContainer} from './VIdeoPageStyles'
import VideoPlayerComponent from "../../components/video_player/VideoPlayerComponent";
import NavigationAppBar from "../../components/appbar/NavigationAppBar";
import VideoCards from "../../components/video_cards/VideoCards";
import CommentComponent from "../../components/comments_component/CommentComponent";

function VideoPage(props) {
    return (
        <>
            <NavigationAppBar/>
                <VideoPageContainer>
                        <VideoContentContainer>
                            <VideoPlayerComponent/>
                            <CommentComponent/>
                            <CommentComponent/>
                            <CommentComponent/>
                            <CommentComponent/>
                        </VideoContentContainer>
                    <RecommendationContainer>
                        <h1>Recommendations</h1>
                        <VideoCards
                            thumbnail='https://i.ytimg.com/an_webp/axDSnoZ2zIM/mqdefault_6s.webp?du=3000&sqp=CN2XpaoG&rs=AOn4CLD7fvfuw3XkXQNQOBhdXfKP7CYMIQ'
                            channelImg='https://yt3.ggpht.com/ewC1nleORkp8FkJpZrDPrqmVry6JHkUV_1eWuYFLlXTJGaoQ0v0qn1YLdZcpffMaRJrMMYIT5_U=s68-c-k-c0x00ffffff-no-rj'
                            width={90}
                            margin={5}
                            radius={5}
                        >
                        </VideoCards>
                        <VideoCards
                            thumbnail='https://i.ytimg.com/an_webp/9zBsdzdE4sM/mqdefault_6s.webp?du=3000&sqp=CJHYo6oG&rs=AOn4CLBkh0cI461koHfri67zc2Jd92cR8A'
                            channelImg='https://yt3.ggpht.com/ewC1nleORkp8FkJpZrDPrqmVry6JHkUV_1eWuYFLlXTJGaoQ0v0qn1YLdZcpffMaRJrMMYIT5_U=s68-c-k-c0x00ffffff-no-rj'
                            width={90}
                            margin={5}
                            radius={0}
                        >
                        </VideoCards>
                            <VideoCards
                                thumbnail='https://i.ytimg.com/an_webp/9zBsdzdE4sM/mqdefault_6s.webp?du=3000&sqp=CJHYo6oG&rs=AOn4CLBkh0cI461koHfri67zc2Jd92cR8A'
                                channelImg='https://yt3.ggpht.com/ewC1nleORkp8FkJpZrDPrqmVry6JHkUV_1eWuYFLlXTJGaoQ0v0qn1YLdZcpffMaRJrMMYIT5_U=s68-c-k-c0x00ffffff-no-rj'
                                width={90}
                                margin={5}
                                radius={0}
                            >
                            </VideoCards>
                                <VideoCards
                                    thumbnail='https://i.ytimg.com/an_webp/9zBsdzdE4sM/mqdefault_6s.webp?du=3000&sqp=CJHYo6oG&rs=AOn4CLBkh0cI461koHfri67zc2Jd92cR8A'
                                    channelImg='https://yt3.ggpht.com/ewC1nleORkp8FkJpZrDPrqmVry6JHkUV_1eWuYFLlXTJGaoQ0v0qn1YLdZcpffMaRJrMMYIT5_U=s68-c-k-c0x00ffffff-no-rj'
                                    width={90}
                                    margin={5}
                                    radius={0}
                                >
                        </VideoCards>
                    </RecommendationContainer>

                </VideoPageContainer>
        </>
    );
}

export default VideoPage;