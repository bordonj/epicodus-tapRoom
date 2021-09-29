import React from "react";

function Header(){
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand float-md-right" href="#!">Boba Bar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse show" id="navbarDark">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-Merch">
                <a className="nav-link active" aria-current="page" href="./">Reset</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header;
