import React from "react";

const Nav = ({ profiles, filter }) => {

  const maleFilter = () => {
    filter(profiles.filter((person) => person.Gender === "Male"));
  };
  const femaleFilter = () => {
    filter(profiles.filter((person) => person.Gender === "Female"));
  };
  const noGenderFilter = () => {
    filter(profiles.filter((person) => person.Gender === "Prefer to skip"));
  };
  const allFilter = () => {
    filter(profiles);
  };

  const paypalFilter = () => {
    filter(profiles.filter(person => person.PaymentMethod === "paypal"));
  }
  const checkFilter = () => {
    filter(profiles.filter(person => person.PaymentMethod === "check"));
  }
  const moneyOrderFilter = () => {
    filter(profiles.filter(person => person.PaymentMethod === "money order"));
  }
  const ccFilter = () => {
    filter(profiles.filter(person => person.PaymentMethod === "cc"));
  }

  const handleChange = (event) => {
    const { value } = event.target;
    const foundProfiles = profiles.filter(profile => {
      const item = profile.FirstName.toLowerCase();
      const filter = value.toLowerCase();
      return item.includes(filter);
    })
    
    filter(foundProfiles)
    event.preventDefault();
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg colored-section">
      <a className="navbar-brand" href="/">
        ENYE
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter by Gender
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#" onClick={maleFilter}>Male</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={femaleFilter}>Female</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={noGenderFilter}>Prefer to skip</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={allFilter}>All</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter by Payment Method
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#" onClick={paypalFilter}>Paypal</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={checkFilter}>Check</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={moneyOrderFilter}>Money Order</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={ccFilter}>CC</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={allFilter}>All</a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex ">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search using FirstName"
            aria-label="Search"
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button"><i className="fas fa-redo-alt" onClick={allFilter}></i></button>
          </div>
        </div>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
