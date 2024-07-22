import { FaFilter, FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';


export default function Grades(){
    const students = [
        { name: 'Jane Adams', grades: [100, 100, 92.18, 66.22] },
        { name: 'Christina Allen', grades: [100, 100, 100, 100] },
        { name: 'Samreen Ansari', grades: [100, 100, 100, 100] },
        { name: 'Han Bao', grades: [100, 100, '88.02', 98.99] },
        { name: 'Mahi Sai Srinivas Bobbili', grades: [100, 96.67, 98.37, 100] },
        { name: 'Siran Cao', grades: [100, 100, 100, 100] },
        { name: 'John Doe', grades: [100, 90, 85, 95] },
        { name: 'Jane Smith', grades: [80, 88, 92, 100] },
        { name: 'Robert Brown', grades: [70, 85, 78, 82] },
        { name: 'Emily Johnson', grades: [85, 95, 100, 90] },
        // Add more dummy students as needed
      ];
    
      return (
        <div className="container mt-4">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-secondary me-2">
              <FaFileImport className="me-1" />
              Import
            </button>

            <div className="btn-group me-2">
            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <FaFileExport className="me-1" />
                Export
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Export as CSV</a></li>
                <li><a className="dropdown-item" href="#">Export as Excel</a></li>
            </ul>
            </div>

            <button className="btn btn-secondary me-2">
              <FaCog />
            </button>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="fw-bold">Student Names</label>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search Students" />
               
              </div>
            </div>
            <div className="col-md-6">
              <label className="fw-bold">Assignment Names</label>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search Assignments" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start mb-3">
            <button className="btn btn-secondary">
              <FaFilter className="me-1" />
              Apply Filters
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped" style={{ minWidth: '1200px' }}>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>A1 SETUP<br />Out of 100</th>
                  <th>A2 HTML<br />Out of 100</th>
                  <th>A3 CSS<br />Out of 100</th>
                  <th>A4 BOOTSTRAP<br />Out of 100</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="text-danger">{student.name}</td>
                    {student.grades.map((grade, i) => (
                      <td key={i}>
                        {typeof grade === 'number' ? `${grade}%` : (
                          <input type="text" className="form-control form-control-sm" defaultValue={grade} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}