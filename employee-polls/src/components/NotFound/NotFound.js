import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound = () => (
  <div className={classes.notFound}>
    <div className={classes.title}>Page Not Found</div>
    <Link to="/" className="link-home">
      Go back
    </Link>
  </div>
);

export default NotFound;
