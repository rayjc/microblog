import React, { useState } from 'react';
import './NewPostForm.css';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PostForm from './PostForm';


const NewPostForm = ({ addPost }) => {
  const INIT_FORM_STATE = {
    title: "",
    overview: "",
    body: "",
  }
  const [formData, setFormData] = useState(INIT_FORM_STATE);
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addPost({ id: uuidv4(), ...formData });
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
      <PostForm handleCancel={handleCancel} handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
    </div>
  )
}


export default NewPostForm;