import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <nav className="nav fixed-top">
        <div className="container">
          <div className="logoName">
            <a href="./home">React GitHub Search App</a>
          </div>

          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <a href="./home">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
