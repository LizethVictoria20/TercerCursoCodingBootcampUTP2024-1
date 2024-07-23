import "../styles/Header.css";
import { IoIosLogIn } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import Logo from "../images/mercado-libre.png";

function Header() {
  return (
    <div>
      <header>
        <nav className="items-menu">
          <ul className="nav-bar">
            <div>
              <li>
                <a href="./index.html">
                  <img src={Logo} alt="" className="logo" />
                </a>
              </li>
            </div>
            <div>
            </div>
            <li>
              <ul>
                <div>
                  <li>
                    <a href="./login.html">
                      <IoIosLogIn />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <CiShoppingCart />
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
