import React from 'react';
import './PostForm.css';


const PostForm = ({ handleCancel, handleSubmit, handleChange, formData }) => (
  <form onSubmit={(e) => handleSubmit(e)}>
    <div className="form-group">
      <label htmlFor="title-input">Title</label>
      <input type="text" className="form-control" id="title-input" name="title"
        value={formData.title} onChange={(e) => handleChange(e)} />
    </div>
    <div className="form-group">
      <label htmlFor="overview-input">Overiew</label>
      <input type="text" className="form-control" id="overivew-input" name="overview"
        value={formData.overview} onChange={(e) => handleChange(e)} />
    </div>
    <div className="form-group">
      <label htmlFor="body-input">Body</label>
      <textarea className="form-control" id="body-input" rows="3" name="body"
        value={formData.body} onChange={(e) => handleChange(e)} />
    </div>
    <div className="PostForm-div-btn">
      <button type="reset" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      <button type="submit" className="btn btn-primary"
        disabled={Object.values(formData).some(field => field.length === 0)} >Save</button>
    </div>
  </form>
)


export default PostForm;