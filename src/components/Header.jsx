import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>RANKed</h1>
      <Link to="/">Main Feed</Link> | <Link to="/newticket">Make my Post</Link>
    </div>
  );
}

export default Header;
