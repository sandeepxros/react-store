export default function Ticket() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="mb-3 p-5">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Logo />
        <NavButton />
        <NavbarCollapse>
          <NavLink for="Home" />
          <NavLink for="Create a New ticket" onClick={() => alert("heoo")} />
        </NavbarCollapse>
      </div>
    </nav>
  );
};

const NavbarCollapse = (props) => {
  return (
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">{props.children}</ul>
    </div>
  );
};

const Logo = () => {
  return (
    <a class="navbar-brand" href="#">
      Leaf Ticketing
    </a>
  );
};

const NavButton = () => {
  return (
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  );
};

const NavLink = (props) => {
  return (
    <li class="nav-item">
      <a
        class="nav-link active"
        aria-current="page"
        href="#"
        onClick={props.onClick}
      >
        {props.for}
      </a>
    </li>
  );
};
