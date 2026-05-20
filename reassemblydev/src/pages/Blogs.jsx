import "../index.css";
import "./Blogs.css";

import ClickableElementToWebsite from "../components/functions/ClickableElement";
import Box from "../components/decoration/Box";
import { Outlet } from "react-router-dom";

function Blogs() {
    return (
        <>
        <div className="page">
            <div className="title">
                Blogs
            </div>
            <div className="blogsList">
                <ClickableElementToWebsite destination="/blogs/neural-net">
                    <Box header="WORK IN PROGRESS: An idiot's attempt of making a neural net from scratch">
                        <p>Spoiler Alert, it actually worked!</p>
                    </Box>
                </ClickableElementToWebsite>
            </div>
        </div>
        </>
    )
}

export default Blogs;