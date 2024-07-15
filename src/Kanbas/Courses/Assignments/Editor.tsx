export default function AssignmentEditor() {
    return (
      <div className="container mt-4">
      <form>
        <div className="row mb-3">
          <label htmlFor="assignmentName" className="col-md-2 col-form-label text-end align-self-start">Assignment Name</label>
          <div className="col-md-10">
            <input type="text" className="form-control" id="assignmentName" defaultValue="A1" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="assignmentDescription" className="col-md-2 col-form-label text-end align-self-start">Assignment Description</label>
          <div className="col-md-10">
            <textarea 
              className="form-control" 
              id="assignmentDescription" 
              rows={10}
              placeholder={`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}>
            </textarea>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="points" className="col-md-2 col-form-label text-end align-self-start">Points</label>
          <div className="col-md-10">
            <input type="number" className="form-control" id="points" defaultValue="100" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="assignmentGroup" className="col-md-2 col-form-label text-end align-self-start">Assignment Group</label>
          <div className="col-md-10">
            <select id="assignmentGroup" className="form-control">
              <option>ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="displayGradeAs" className="col-md-2 col-form-label text-end align-self-start">Display Grade as</label>
          <div className="col-md-10">
            <select id="displayGradeAs" className="form-control">
              <option>Percentage</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="submissionType" className="col-md-2 col-form-label text-end align-self-start">Submission Type</label>
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <select id="submissionType" className="form-control mb-3">
                  <option>Online</option>
                </select>
                <label className="form-label fw-bold">Online Entry Options</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="textEntry" />
                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="websiteURL" defaultChecked />
                  <label className="form-check-label" htmlFor="websiteURL">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="mediaRecordings" />
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="studentAnnotation" />
                  <label className="form-check-label" htmlFor="studentAnnotation">
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="fileUploads" />
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="assign" className="col-md-2 col-form-label text-end align-self-start">Assign to</label>
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-12">
                    <select id="assign" className="form-control">
                      <option>Everyone</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <label htmlFor="dueDate" className="form-label fw-bold">Due</label>
                    <input type="datetime-local" className="form-control" id="dueDate" defaultValue="2024-05-13T23:59" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="availableFrom" className="form-label fw-bold">Available from</label>
                    <input type="datetime-local" className="form-control" id="availableFrom" defaultValue="2024-05-06T12:00" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="until" className="form-label fw-bold">Until</label>
                    <input type="datetime-local" className="form-control" id="until" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}
  