import "../styles/Header.css";
import { IoIosLogIn } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

function Header() {
    return (
        <div>
                <header>
      <nav class="items-menu">
        <ul class="nav-bar">
          <div>
            <li>
              <a href="./index.html"
                ><img src="./img/icons-leaf.png" alt=""
              /></a>
            </li>
          </div>
          <li>
            <ul>
              <div>
                <li>
                  <a href="./login.html"
                    ><IoIosLogIn /></a>
                </li>
                <li>
                  <a href="/"
                    ><CiShoppingCart /></a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
        </div>
    )
}

export default Header;