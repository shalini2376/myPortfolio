import './home.css'

function Home (){
    return (
        <>
            <section className='home-section' id="home">
                <div className="home-page-container">
                    <div className="home-section-intro-div">
                        <h1>I'm <span>Shalini</span></h1>
                        <p className="intro-para">A developer who sees code the way some people see stories — something you shape,
                            refine, and breathe life into. I love building things that make technology feel warm,
                            simple, and human.
                        <br />
                        <br />
                        When I’m not deep into React, Node, or debugging something that worked “five minutes ago,”
                        you’ll probably find me reading, singing, or caring for my plants — learning and growing
                        one step at a time.
                        </p>
                    </div>
                    <div className="img-container">
                        <img className="my-img" alt="my-img" src="https://res.cloudinary.com/drmleijbw/image/upload/v1763625788/IMG-20240915-WA0007_1__cropped_zlvfp9.jpg" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home