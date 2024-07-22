import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaGear } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";



export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];

    return (
        <div id="wd-kanbas-navigation" className="list-group rounded-0  position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"  style={{ width: 120 }}>
        
         <a className="list-group-item bg-black text-white border-0 text-center" id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/">Northeastern</a>
         <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}

          {/* <a className="list-group-item bg-white text-danger border-0 text-center" id="wd-dashboard-link" href="#/Kanbas/Dashboard">
          <AiOutlineDashboard className="fs-1 text-danger" /><br />
          Dashboard</a>
          <a className="list-group-item bg-black text-white border-0 text-center" id="wd-course-link" href="#/Kanbas/Courses">
          <LiaBookSolid className="fs-1 text-danger" /><br />Courses</a>
          <a className="list-group-item bg-black text-white border-0 text-center" id="wd-calendar-link" href="#/Kanbas/Calendar">
          <SlCalender className="fs-1 text-danger"/><br />Calendar</a>
          <a className="list-group-item bg-black text-white border-0 text-center" id="wd-inbox-link" href="#/Kanbas/Inbox">
          <FaInbox className="fs-1 text-danger" /><br />Inbox</a>
         <a className="list-group-item bg-black text-white border-0 text-center" id="wd-labs-link" href="#/Labs">
         <FaGear className="fs-1 text-danger" /><br />Labs</a> */}
        </div>
  );
}
  