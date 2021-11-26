import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                Designer, Front-end Developer & Mentor
                </h1>

                <p>
                I design and code beautifully simple things, and I love what I do. 
                Starting from the design stage to the development stage.
                You dont need to worry, I bring your thoughts to LIVE 
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="enter your email"/>
                    <button type="button">Say Hello </button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1600 clients </p>
                </div>

                {/* <div className="gpt3__header-image">
                    <img src={ai} alt="ai" />
                </div> */}
            </div>
        </div>
    )
}

export default Header
