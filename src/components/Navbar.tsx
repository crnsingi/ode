interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
}

const NavBar = ({ brandName, imageSrcPath }: NavBarProps) => {
  return (
    <nav className="navbar navbar-light bg-white shadow">
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
    </div>
      
    </nav>
  );
};

export default NavBar;
