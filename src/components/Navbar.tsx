interface NavBarProps{
    brandName : string;
    imageSrcPath: string;
}


const NavBar = ({brandName , imageSrcPath}: NavBarProps) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={imageSrcPath}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        {brandName}
      </a>
    </nav>
  );
};

export default NavBar;
