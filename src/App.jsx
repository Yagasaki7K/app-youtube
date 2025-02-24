import { useState } from "react"
import styled from "styled-components"

function App() {
    const [inputChannel, setInputChannel] = useState('')
    const [videoId, setVideoId] = useState('jfKfPfyJRdk')

    const handleVideoInput = (input) => {
        // Extract video ID from URL if it's a URL, otherwise use input directly
        if (input.includes('youtube.com') || input.includes('youtu.be')) {
            const url = new URL(input)
            if (input.includes('youtube.com')) {
                const id = url.searchParams.get('v')
                if (id) setVideoId(id)
            } else {
                // Handle youtu.be format
                const id = url.pathname.slice(1)
                if (id) setVideoId(id)
            }
        } else {
            setVideoId(input)
        }
    }

    return (
        <AppDetails>
            <div className="overlay" />
            <div className="header">
                <input 
                    type="text" 
                    placeholder="Insert YouTube video ID or URL" 
                    onChange={e => setInputChannel(e.target.value)} 
                />
                <button onClick={() => handleVideoInput(inputChannel)}>Search Video</button>
            </div>
            <div className="player">
                <iframe 
                    id="youtubePlayer"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className="copyright">
                ©&nbsp;2024 - {new Date().getFullYear()}&nbsp;<a href="https://github.com/Yagasaki7K/app-youtube" target="_blank" rel="noreferrer">app-youtube</a>&nbsp;by&nbsp;<a href="https://yagasaki.dev" target="_blank" rel="noreferrer">Yagasaki7K</a>&nbsp;<span>|</span>&nbsp;Todas as imagens são marcas registradas dos seus respectivos proprietários
            </div>
        </AppDetails>
    )
}

export default App

const AppDetails = styled.div`
    display: flex;
    flex-direction: column;

    input, button, iframe {
        border-radius: 15px;
    }

    a {
        text-decoration: none;
        color: var(--red);
        font-weight: bold;
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: center;

        input, button {
            border: 2px solid var(--border);
            outline: none;
            padding: 10px 20px;
            margin: 1rem 0;

            @media (max-width: 768px) {
                padding: 10px 10px;
            }
        }

        button {
            height: 50px;
            font-size: 18px;
            background: var(--red);
            color: var(--font-light);
            margin-right: 1rem;

            &:hover {
                cursor: pointer;
                background-color: var(--background-alt);
            }
        }

        input {
            width: 50%;
            height: 50px;
            font-size: 18px;
            color: white;
            background-color: transparent;
            margin-right: 1rem;
        }
    }

    .player {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;

        iframe {
            width: 90%;
            height: 51.4rem;
            border: none;

            @media (max-width: 768px) {
                height: 30rem;
            }
        }
    }

    .copyright {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--font-light);
        padding: 1rem;

        @media (max-width: 768px) {
            padding: 1.5rem;
            flex-direction: column;
            text-align: center;

            span {
                display: none;
            }
        }
    }
`