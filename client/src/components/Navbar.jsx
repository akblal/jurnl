import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar () {
  return (
      <nav className = 'nav'>
        <Link to= '/' className= 'site-title'>Jurnl</Link>
        <ul>
          <CustomLink to= '/bigpicture' className= 'list-title'>Big Picture</CustomLink>
          <CustomLink to= '/car' className= 'list-title'>C.A.R</CustomLink>
          <CustomLink to= '/ticket' className= 'list-title'>Today's Tix</CustomLink>
          <CustomLink to= '/journal' className= 'list-title'>Journal</CustomLink>
          <CustomLink to= '/resume' className= 'list-title'>Resume</CustomLink>
        </ul>
      </nav>
  )
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPth = useResolvedPath(to)
  return (
    <li>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default Navbar;