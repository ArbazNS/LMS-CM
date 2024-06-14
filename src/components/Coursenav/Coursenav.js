import React from 'react';
import './coursenav.css';
import { Link } from 'react-router-dom';

const Coursenav = () => {
  return (
    <>
      <div class="coursenavbar">
        <input class="form-control me-2 coursenavsearchbox" type="search" placeholder="Search"/>
        <Link  to="/courseaddform" style={{
          textDecoration: 'none'
        }}>
        <button type="button" class="btn btnaddnewcourse">
            <span class="material-symbols-outlined">add_circle</span> New course
          </button>
          </Link>
          

      </div>
    </>
  );
};

export default Coursenav;
