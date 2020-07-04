import React, { useState } from 'react';
import './NewPostForm.css';
import { useHistory } from 'react-router-dom';


const NewPostFrom = ({ addPost }) => {
  const INIT_FORM_STATE = {
    "title": "",
    "overview": "",
    "body": "",
  }
  const [formData, setFormData] = useState(INIT_FORM_STATE);
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addPost(formData);
    setFormData(INIT_FORM_STATE);
    history.push("/");
  }

  const handleCancel = () => {
    setFormData(INIT_FORM_STATE);
    history.goBack();
  }

  return (
    <div className="NewPostForm">
      <h3>Create Post</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title-input">Title</label>
          <input type="text" className="form-control" id="title-input" name="title"
            value={formData.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="overview-input">Overiew</label>
          <input type="text" className="form-control" id="overivew-input" name="overview"
            value={formData.overview} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="body-input">Body</label>
          <textarea className="form-control" id="body-input" rows="3" name="body"
            value={formData.body} onChange={handleChange} />
        </div>
        <div className="NewPostForm-div-btn">
          <button type="reset" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary"
            disabled={Object.values(formData).some(field => field.length === 0)} >Submit</button>
        </div>
      </form>
    </div>
  )
}


export default NewPostFrom;