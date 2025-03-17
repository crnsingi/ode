interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[]
}

function NavBar({ brandName, imageSrcPath }: NavBarProps) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img
          src={imageSrcPath}
          width="60"
          height="60"
          className="d-inline-block align-center"
          alt=""
        />
        <span className="fw-bolder fs-4">{brandName}</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div 
      className="collapse 
      navbar-collapse
      justify-content-center
      d-flex
      flex-column
      flex-md-row
      " 
      id="navbarSupportedContent">
    <ul className="navbar-nav mb-2 mb-md-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">For Business</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#">Careers</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Community</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#">FAQs</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#">Rescue me!!</a>
      </li>
    </ul>
  
  </div>
    </div>
    </nav>
  );
};

export default NavBar;
