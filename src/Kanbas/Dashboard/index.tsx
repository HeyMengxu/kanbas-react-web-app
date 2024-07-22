import { Link } from "react-router-dom";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

        {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/logo192.png" height="{160}" />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}

       
          {/* <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
            
          <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
            <img src="/logo192.png" width="100%" />
            <div className = "card-body">
            <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              
              <p className="card-text">
                Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div></a>
            </div>
            </div>

          <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
          <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1235/Home">
            <img src="/logo192.png" width="100%" />
            <div className = "card-body">
            <h5 className="wd-dashboard-course-title card-title">
                 CS1235 Foundations of CS
              </h5>
              
              <p className="card-text">
                Intensive Foundations
              </p>
              <button className="btn btn-primary"> Go </button>
            </div></a>
            </div>
            </div>

          <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
          <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1236/Home">
            <img src="/logo192.png" width="100%" />
            <div className = "card-body">
            <h5 className="wd-dashboard-course-title card-title">
                 CS 1236 Discrete Structures
              </h5>
              
              <p className="card-text">
                CS Foundations
              </p>
              <button className="btn btn-primary"> Go </button>
            </div></a>
            </div>
            </div>
          
          <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
          <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1237/Home">
            <img src="/logo192.png" width="100%" />
            <div className = "card-body">
            <h5 className="wd-dashboard-course-title card-title">
                 CS 1237 Algo
              </h5>
              
              <p className="card-text">
                CS Foundations
              </p>
              <button className="btn btn-primary"> Go </button>
            </div></a>
            </div>
            </div>

          <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
          <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1238/Home">
            <img src="/logo192.png" width="100%" />
            <div className = "card-body">
            <h5 className="wd-dashboard-course-title card-title">
                 CS 1238 Database
              </h5>
              
              <p className="card-text">
                CS Foundations
              </p>
              <button className="btn btn-primary"> Go </button>
            </div></a>
            </div>
            </div>
          
          <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
          <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1239/Home">
            <img src="/logo192.png" width="100%" />
            <div className = "card-body">
            <h5 className="wd-dashboard-course-title card-title">
                 CS 1239 Computer Vision
              </h5>
              
              <p className="card-text">
                CS Advance
              </p>
              <button className="btn btn-primary"> Go </button>
            </div></a>
            </div>
            </div>
          
          <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
          <div className="card">
          <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1240/Home">
            <img src="/logo192.png" width="100%" />
            <div className = "card-body">
            <h5 className="wd-dashboard-course-title card-title">
                 CS 1240 AI
              </h5>
              
              <p className="card-text">
                CS Advance
              </p>
              <button className="btn btn-primary"> Go </button>
            </div></a>
            </div>
            </div> */}



            </div>

        </div>
      </div>
  );}
  