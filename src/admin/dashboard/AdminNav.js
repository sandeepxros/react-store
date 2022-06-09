import "./Dashboard.css";
export default function AdminNav() {
  return (
    <header className="navbar green navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Brand />
      <Toggler />
      <Input />
      <NavbarItem>Signout</NavbarItem>
    </header>
  );
}

const Brand = () => (
  <a className="navbar-brand col-md-2  me-0 px-3 fs-6">Leaf</a>
);

const Toggler = () => {
  return (
    <button
      className="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapsed"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  );
};

const NavbarItem = (props) => {
  return (
    <div className="navbar-nav">
      <div className="nav-item text-nowrap">
        <a className="nav-link px-3">{props.children}</a>
      </div>
    </div>
  );
};

const Input = () => (
  <input
    class="form-control form-control-dark w-100 rounded-0 border-0"
    type="text"
    placeholder="Search"
    aria-label="Search"
  />
);
