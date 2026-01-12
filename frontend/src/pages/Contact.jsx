import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const addNewFeedback = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://supriyo-portfolio.onrender.com/api/user/new', {
        name,
        email,
        comment
      });
      toast.success("Message sent successfully!");
      setName('');
      setEmail('');
      setComment('');
      
    } catch (error) {
      toast.error(`Failed to send message: ${error.response?.data?.message || error.message}`);
      console.error(error);
    }
  };

  return (
    <div className='contact-page'>
      <div className="form-container">
        <form className="form" onSubmit={addNewFeedback}>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Share your thoughts</label>
            <textarea
              id="message"
              rows="6"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button className="form-submit-btn" type="submit">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
