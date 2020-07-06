import React, { useState } from 'react';
import './NewPostForm.css';
import { useHistory } from 'react-router-dom';
import PostForm from './PostForm';
import { storePost } from './reducers/actions';
import { useDispatch } from 'react-redux';


const NewPostForm = () => {
  const INIT_FORM_STATE = {
    title: "",
    description: "",
    body: "",
  }
  const [formData, setFormData] = useState(INIT_FORM_STATE);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(storePost({ ...formData }));
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