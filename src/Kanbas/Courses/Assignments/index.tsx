import CoursesNavigation from "../Navigation";
import AssignmentsContent from "./AssignmentsContent";
// import KanbasNavigation from "../../Navigation";

export default function Assignments() {
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

      {/* Assignments */}
      <div className="col-lg-10 col-md-9 col-12">
        <AssignmentsContent />
      </div>

  
    </div>
  </div>

  );
}
