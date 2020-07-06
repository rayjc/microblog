import React, { useState } from 'react';
import './EditPostForm.css';
import PostForm from './PostForm';
import { fullUpdatePost } from './reducers/actions';
import { useDispatch } from 'react-redux';


const EditPostForm = ({ postId, post, toggleEdit }) => {
  const { title, description, body } = post;
  const dispatch = useDispatch();
  const INIT_FORM_STATE = { title, description, body }
  const [formData, setFormData] = useState(INIT_FORM_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fullUpdatePost(postId, { ...formData }));
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