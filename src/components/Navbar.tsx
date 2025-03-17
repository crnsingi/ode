interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
}

const NavBar = ({ brandName, imageSrcPath }: NavBarProps) => {
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
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div 
      className="collapse 
      navbar-collapse
      align-items-center
      d-flex
      flex-cloumn
      flex-md-row
      " 
      id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-1">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
     
    </ul>
    <form className="d-flex me-3" role="search">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
    </div>
    </nav>
  );
};

export default NavBar;
