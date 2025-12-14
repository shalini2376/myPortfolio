import {useState} from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import './projects.css'
import {projects} from '../data/projectData.jsx';

function Projects () {

    const [activeCategory, setActiveCategory] = useState('all')

    console.log(projects.length)

    // 1. getting category array from each project
    const categoryArray = projects.map(p => p.categories)

    // 2. flattening them to make organized -> [[a,b],[a,b,c]] to [a, b, c, a , c, b]
    const flattened = categoryArray.flat();

    // 3. removed duplicates
    const uniqueCategories = [...new Set(flattened)]

    // 4.adding 'all'
    const allCategories = ["all", ...uniqueCategories]

    const filteredProjects = activeCategory === 'all' ? projects : projects.filter(p => p.categories.includes(activeCategory));
    const featuredProjects = filteredProjects.filter(p => p.featured);
    const otherProjects = filteredProjects.filter(p => !p.featured);

    return (
        <>
            <section className="project-section" id="projects">
            <h1 className="projects-heading">My Projects</h1>
            <p>“A collection of things I’ve built while learning, exploring and breaking stuff (in a good way.)”</p>
            {/* Filter buttons */}
            <div className='filter-buttons-container'>
                {allCategories.map(cat => (
                    <button 
                        className={activeCategory === cat ? 'filter-button-active' : 'filter-button'}
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat === 'all' ? "All" : cat}
                    </button>
                ))}
            </div>

            {/* Featured Projects Crad */}
            {featuredProjects.length > 0 && (
                <>
                    <h2>Featured Projects ⭐</h2>
                    <div className="projects-card-container projects-grid ">
                    {featuredProjects.map(p => (
                        <div key={p.id} className='projects-card' >
                            <h1>{p.title}</h1>
                            <p>{p.tagline}</p>
                            <div className="tech-badges">
                                {p.tech.map(t => (
                                    <button key={t}>{t}</button>
                                ))}
                            </div>
                            <h3>Links:</h3>
                            <a href={p.github} target="_blank"> <FaGithub /> </a>
                            <p>Live: <a href={p.live} target="_blank">{p.live}</a></p>
                            {/* <h3>Highlights:</h3>
                            {p.highlights.map(d => (
                                <ul className="description-list-container" key={d}>
                                    <li className="description-list">{d}</li>
                                </ul>
                            ))} */}
                            {/* <p>{p.longDescription}</p> */}
                            {/* <div className="project-images">
                                {p.images.map(img => (
                                    <img
                                        key={img}
                                        className="project-card-img"
                                        src={img}
                                        alt={`${p.title} screenshot`}
                                    />
                                ))}
                            </div> */}
                        </div>
                    ))}
                    </div>
                </>
            )}
            {otherProjects.length > 0 && (
                <>
                    <h2>Other Projects</h2>
                    <div className="projects-card-container projects-grid featured">
                    {otherProjects.map(p => (
                        <div key={p.id} className='projects-card' >
                            <h1>{p.title}</h1>
                            <p>{p.tagline}</p>
                            <div className="tech-badges">
                                {p.tech.map(t => (
                                    <button key={t}>{t}</button>
                                ))}
                            </div>
                            <h3>Links:</h3>
                            <p>Github: <a href={p.github} target="_blank">{p.github}</a></p>
                            <p>Live: <a href={p.live} target="_blank">{p.live}</a></p>
                            {/* <h3>Highlights:</h3> */}
                            {/* {p.highlights.map(d => (
                                <ul className="description-list-container" key={d}>
                                    <li className="description-list">{d}</li>
                                </ul>
                            ))} */}
                            {/* <p>{p.longDescription}</p> */}
                            {/* <div className="project-images">
                                {p.images.map(img => (
                                    <img
                                        key={img}
                                        className="project-card-img"
                                        src={img}
                                        alt={`${p.title} screenshot`}
                                    />
                                ))}
                            </div> */}
                        </div>
                    ))}
                    </div>
                </>
            )}
            </section>
        </>

    )
}
export default Projects