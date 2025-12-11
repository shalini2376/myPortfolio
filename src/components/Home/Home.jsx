import './home.css'

function Home (){
    return (
        <>
            <div className='home-section-container'>
                <div className="home-section-intro-div">
                    <h3 className="welcome-heading">You're Welcome🙏!!</h3>
                    <h1>I'm Shalini</h1>
                    <p>A developer who sees code the way some people sees stories: something you shape,
                        refine and breathe life into. I love building things that make technology feel warm, 
                        simple, and human, something that makes life easy and helps understand tech in a better way.
                        When I’m not deep into React, Node, or debugging something that was working “five minutes ago”, 
                        you’ll probably find me reading, singing, caring for my plants, practicing yoga, or randomly 
                        starting conversations with strangers because…tiny moments that remind me how big and beautiful learning can be.
                        I’m still growing, still learning, and still crafting my own place in this world — one line of code, one idea, 
                        one small step at a time.
                    </p>
                </div>
                <div className="img-container">
                    <img className="my-img" alt="my-img" src="https://res.cloudinary.com/drmleijbw/image/upload/v1763625788/IMG-20240915-WA0007_1__cropped_zlvfp9.jpg" />
                </div>
            </div>
        </>
    )
}
export default Home