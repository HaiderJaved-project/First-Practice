import React from 'react';

const Navbar = ({ isDarkMode, toggleMode }) => {
  return (
    <nav style={{ backgroundColor: 'black', color: 'white', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dashdark X</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'underline', color: 'white' }}>Mr. Haider</a>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
