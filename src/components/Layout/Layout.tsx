import React from 'react';
import './Layout.css';
import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/update/:id">Update</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};