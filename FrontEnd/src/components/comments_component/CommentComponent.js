import React from 'react';
import {CommentContainer, CommentDetailsContainer} from "./CommentComponentStyles";

function CommentComponent(props) {
    return (
        <CommentContainer>
            <img src="https://yt3.ggpht.com/ewC1nleORkp8FkJpZrDPrqmVry6JHkUV_1eWuYFLlXTJGaoQ0v0qn1YLdZcpffMaRJrMMYIT5_U=s68-c-k-c0x00ffffff-no-rj"/>
            <CommentDetailsContainer>

                    <h1>
                        username

                        <span style={{color: 'grey'}}>  1 year ago</span>
                    </h1>

                <p>rfnjvidsnvinsdvonvosnonmovnsolnosvno</p>
            </CommentDetailsContainer>
        </CommentContainer>
    );
}

export default CommentComponent;