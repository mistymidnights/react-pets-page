import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import "./Header.css";

const Header = () => {
  const {pet, logout} = useContext(JwtContext);
  let navigate = useNavigate()

  return (
    <>
      <header>
        <nav>
          <div className="logo-home">
            <Link className="link" to="/">
                <img
                  className="logo-container"
                  src="src\assets\cat copia.png"
                  alt="logo"
                />
            </Link>
          </div>
          <ul>
          {pet ? (
            <>
              <li>
                Welcome {pet.petName}!
              </li>
              <li>
                <Link to="/pets">Pets</Link>
              </li>
              {/*TODO: Ver bien dónde es mejor poner la imágen de perfil :3*/}
              <li className="li_avatar">
                <div className="avatar_container">
                  <Link to="/profile">Profile</Link>
                  {pet.avatar != "undefined" ? <img src={pet?.avatar} alt="Pet Avatar" /> : null}
                </div>
              </li>
              <li>
                <button onClick={() => {logout(), navigate("/")}}>Logout</button>
              </li>
            </>
            ) : (
            <>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
            )}
          </ul>
        </nav>

      </header>
    </>
  );
};

export default Header;
