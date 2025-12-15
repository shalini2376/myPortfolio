import './navbar.css'

function Navbar(){
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark" >
      <div className="container-fluid">

        {/* Brand */}
        <a className="navbar-brand" href="#">
          Shalini
        </a>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className="collapse navbar-collapse navbar-collapse-button" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link nav-link-color" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a 
                className="nav-link" 
                href="/Shalini_Singh_Full_Stack_Developer_Resume..pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </>
    )
}
export default Navbar