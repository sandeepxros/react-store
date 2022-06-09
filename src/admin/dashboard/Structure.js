import AdminNav from "./AdminNav";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
export default function Structure() {
  return (
    <>
      <AdminNav />
      <div class="container-fluid bg-light">
        <div class="row">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}
