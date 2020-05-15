import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title
    });
    // after submit set title clear
    setTitle('');
    window.location.reload();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Submit
      </button>
    </form>
    
  )
}