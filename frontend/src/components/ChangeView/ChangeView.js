import React from 'react';
import { Link } from 'react-router-dom';

const ChangeView = ({ action, to, title }) => (
  <div>
    {title}
    <Link to={to}>{action}</Link>
  </div>
);

export default ChangeView;
