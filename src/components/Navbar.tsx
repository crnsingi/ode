import rescueme from "../assets/rescueme.png"

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
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
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-md-0">
            {/* Services Dropdown */}
          <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Fuel Delivery
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Car Wash
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Car Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Car Engine Oil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Car Battery
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rescue me!!
                  </a>
                </li>
                
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                For Business
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>


            <li className="nav-item">
              <a className="nav-link " href="#" style={{ color: 'red' }} >
                <img src={rescueme} alt="" style={{ width: '30px', height: 'auto', }} />
                Rescue me!!
              </a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#">
                Download app
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
