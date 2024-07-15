import { FaSearch, FaPlus ,  FaChevronDown} from 'react-icons/fa';
// import GreenCheckmark from '../Modules/GreenCheckmark';
import LessonControlButtons from '../Modules/LessonControlButtons';
// import ModuleControlButtons from '../Modules/ModuleControlButtons';
import { BsGripVertical } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentsContent() {
    
      const assignments = [
        {
          id: 'A1',
          title: 'Multiple Modules',
          availability: 'Not available until May 6 at 12:00am',
          due: 'Due May 13 at 11:59pm',
          points: '100 pts'
        },
        {
          id: 'A2',
          title: 'Multiple Modules',
          availability: 'Not available until May 13 at 12:00am',
          due: 'Due May 20 at 11:59pm',
          points: '100 pts'
        },
        {
          id: 'A3',
          title: 'Multiple Modules',
          availability: 'Not available until May 20 at 12:00am',
          due: 'Due May 27 at 11:59pm',
          points: '100 pts'
        }
      ];
    
      return (
        <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="input-group w-50">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div>
            <button className="btn btn-outline-secondary me-2 rounded-0">
              <FaPlus className="me-1" />
              Group
            </button>
            <button className="btn btn-danger rounded-0">
              <FaPlus className="me-1" />
              Assignment
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <FaChevronDown className="me-2" />
              <strong>ASSIGNMENTS</strong>
            </div>
            <div className="d-flex align-items-center">
              <span className="badge rounded-pill" style={{ backgroundColor: 'transparent', color: '#000', border: '1px solid #000' }}>
                40% of Total
              </span>
              <FaPlus className="ms-2 me-1" />
              <IoEllipsisVertical className="me-1" />
            </div>
          </div>

          <ul className="list-group list-group-flush">
          {assignments.map((assignment) => (
            <li className="list-group-item d-flex align-items-center position-relative" key={assignment.id}>
              <div className="position-absolute start-0 top-0 bottom-0 border-start border-4 border-success"></div>
              <BsGripVertical className="me-2 fs-4" />
              <GrNotes className="me-3 text-success fs-4" />
              <div className="flex-grow-1 ms-3">
                <strong>{assignment.id}</strong>
                <span className="d-block text-danger">{assignment.title}</span>
                <small className="text-muted">
                  <strong>Not available</strong> until {assignment.availability.split('until ')[1]} | 
                  <strong> Due</strong> {assignment.due.split('Due ')[1]} | {assignment.points}
                </small>
              </div>
              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </li>
          ))}
        </ul>
          </div>
        </div>
   
  );
}
  