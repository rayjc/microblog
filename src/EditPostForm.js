import React, { useState } from 'react';
import './EditPostForm.css';
import PostForm from './PostForm';


const EditPostForm = ({ post, updatePost, toggleEdit }) => {
  const { id, title, overview, body } = post;
  const INIT_FORM_STATE = { title, overview, body }
  const [formData, setFormData] = useState(INIT_FORM_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updatePost({ id, ...formData });
    setFormData(INIT_FORM_STATE);
    toggleEdit();
  }

  const handleCancel = () => {
    setFormData(INIT_FORM_STATE);
    toggleEdit();
  }

  return (
    <div className="EditPostForm">
      <h3>Edit Post</h3>
      <PostForm handleCancel={handleCancel} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
    </div>
  )
}


export default EditPostForm;