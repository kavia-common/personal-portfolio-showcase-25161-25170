import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
const Landing = () => (
  <div style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial' }}>
    <h1>Screens</h1>
    <ul>
      <li><Link to="/regular">Regular (7:1482)</Link></li>
      <li><Link to="/doubleview-calendar">Double-view calendar (38:682)</Link></li>
      <li><Link to="/doubleview-calendar-11401">Double-view calendar (38:11401)</Link></li>
    </ul>
  </div>
);

export default Landing;
