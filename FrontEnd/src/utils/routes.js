import {
    createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/home_page/HomePage";
import VideoPage from "../pages/video_page/VideoPage";

export const routes =  createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        // loader: rootLoader,
        // children: [
        //     {
        //         path: "/:id",
        //         element: <VideoPage />,
        //         // loader: teamLoader,
        //     },
        // ],
    },
    {
        path: "video",
        // element: <VideoPage />,
        // loader: rootLoader,
        children: [
            {
                path: ":id",
                element: <VideoPage />,
                // loader: teamLoader,
            },
        ],
    },
]);