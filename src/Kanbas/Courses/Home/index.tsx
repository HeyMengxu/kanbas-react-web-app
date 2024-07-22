import Modules from "../Modules";
import CourseStatus from "./Status";
import CoursesNavigation from "../Navigation";
// import KanbasNavigation from "../../Navigation";

export default function Home() {
  return (
    <div className="container-fluid mt-4">
    <div className="row">
      {/* Kanbas Navigation Sidebar
      <div className="col-lg-2 col-md-3 d-none d-md-block">
        <KanbasNavigation />
      </div> */}

      {/* Course Navigation Sidebar */}
      <div className="col-lg-2 col-md-3 d-none d-md-block">
        <CoursesNavigation />
      </div>

      {/* Modules */}
      <div className="col-lg-6 col-md-6 col-12">
        <Modules />
      </div>

      {/* Course Status */}
      <div className="col-lg-2 d-none d-lg-block">
        <CourseStatus />
      </div>
    </div>
  </div>

  );
}
