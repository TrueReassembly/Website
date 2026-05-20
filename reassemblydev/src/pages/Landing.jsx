import "./Landing.css"
import "../index.css"
import Box from "../components/decoration/Box.jsx";
import ClickableTextToWebsite from "../components/functions/ClickableText.jsx";

function Landing() {
    return (
        <>
        <div className="page">
            <div className="centered">
                <Box header="Welcome to Reassembly.dev">
                    <p>Hey there, I'm Assembly. I'm most known for creating the Minecraft server 'Scrapyard', a Fight-For-Your-Music server. I made this website to start writing some blogs about other projects I've done that interest me.</p>
                    <div className="links">
                        <ClickableTextToWebsite destination="https://scrapyard.reassembly.dev">Scrapyard</ClickableTextToWebsite>
                        <ClickableTextToWebsite destination="/blogs">Blogs</ClickableTextToWebsite>
                    </div>
                </Box>
            </div>
        </div>
        </>
    )
}

export default Landing;