import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${props.darkMode ? 'navbar-dark bg-dark' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <b>{props.title}</b>
          </a>
          <div className="d-flex">
            <button className="btn btn-outline-light" onClick={props.toggleDarkMode}>
              <b><i className={`fa-solid ${props.darkMode ? 'fa-sun' : 'fa-moon'}`} ></i> {props.darkMode ? 'DayMode' : 'NightMode'}</b>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
