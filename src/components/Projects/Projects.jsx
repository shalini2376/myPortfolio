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
            <h1 className="section-heading">My <span>Projects</span></h1>
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
                    <h2>Featured Projects ✨</h2>
                    <div className="projects-card-container projects-grid ">
                    {featuredProjects.map(p => (
                        <div key={p.id} className='projects-card' >
                            <h1 className="project-title-heading">{p.title}</h1>
                            <p>{p.tagline}</p>
                            <div className="tech-badges">
                                {p.tech.map(t => (
                                    <button key={t}>{t}</button>
                                ))}
                            </div>
                            <div className='project-card-link-div'>
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View source code"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href={p.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View live project"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    ))}
                    </div>
                </>
            )}
            {otherProjects.length > 0 && (
                <>
                    <h2>Mini Projects</h2>
                    <div className="projects-card-container projects-grid featured">
                    {otherProjects.map(p => (
                        <div key={p.id} className='projects-card' >
                            <h1 className="project-title-heading">{p.title}</h1>
                            <p>{p.tagline}</p>
                            <div className="tech-badges">
                                {p.tech.map(t => (
                                    <button key={t}>{t}</button>
                                ))}
                            </div>
                             <div className='project-card-link-div'>
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="View source code"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={p.live}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="View live project"
                            >
                                <FaExternalLinkAlt />
                            </a>
                            </div>
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