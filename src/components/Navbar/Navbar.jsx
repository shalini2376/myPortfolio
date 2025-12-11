import './navbar.css'

function Navbar(){
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#3E5C76" }} >
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
              <a className="nav-link nav-link-color" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Skill & Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
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