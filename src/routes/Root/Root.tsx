import { Outlet } from "react-router-dom";
import "boxicons";

import "./Root.css";

function Root() {
  return (
    <div className="pb-8">
      <Outlet />
    </div>
  );
}

export default Root;
