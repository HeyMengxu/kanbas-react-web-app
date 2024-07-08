export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <p>
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        </p>

        <p> 
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        </p>


        <table>
        <p>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          
          <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-group">Assignment Group</label>
        </td>
        <td>
          <select id="wd-group">
            <option>ASSIGNMENTS</option>
          </select>
        </td>
      </tr>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-display-grade-as">Display Grade as</label>
        </td>
        <td>
          <select id="wd-display-grade-as">
            <option>Percentage</option>
          </select>
        </td>
      </tr>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </td>
        <td>
          <select id="wd-submission-type">
            <option>Online</option>
          </select>
        </td>
      </tr>
      </p>
    </table>

    <div id="checkbox-group">
        <table>
            <tr><p>
            <label htmlFor="wd-text-entry">
        <input type="checkbox" id="wd-text-entry" /> Text Entry
      </label></p>
            </tr>
            <tr><p>
            <label htmlFor="wd-website-url">
        <input type="checkbox" id="wd-website-url" /> Website URL
      </label></p>
            </tr>
            <tr><p>
            <label htmlFor="wd-media-recordings">
        <input type="checkbox" id="wd-media-recordings" /> Media Recordings
      </label>
      </p></tr>
            <tr><p>
            <label htmlFor="wd-student-annotation">
        <input type="checkbox" id="wd-student-annotation" /> Student Annotation
      </label>   
      </p></tr>
            <tr>
            <label htmlFor="wd-file-upload">
        <input type="checkbox" id="wd-file-upload" /> File Uploads
      </label>
    
            </tr>
        </table>
        </div>
      
      

    <table>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-assign-to">Assign to</label>
        </td>
        <td>
          <select id="wd-assign-to">
            <option>Everyone</option>
          </select>
        </td>
      </tr>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-due-date">Due</label>
        </td>
        <td>
          <input id="wd-due-date" type="date" value="2024-05-13" />
        </td>
      </tr>
      <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-available-from">Available from</label>
        </td>
        <td>
          <input id="wd-available-from" type="date" value="2024-05-06" />
        </td>

        <td align="right" valign="top">
          <label htmlFor="wd-available-until">Until</label>
        </td>
        <td>
          <input id="wd-available-until" type="date" value="2024-05-28" />
        </td>
      </tr>
 


        </table>

        <div id="button-group">
      <button id="wd-cancel">Cancel</button>
      <button id="wd-save">Save</button>
    </div>

      </div>
  );}
  