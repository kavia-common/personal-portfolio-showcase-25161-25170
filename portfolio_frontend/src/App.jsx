import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Regular71482 from './components/screens/Regular71482';
import DoubleViewCalendar38682 from './components/screens/DoubleViewCalendar38682';
import DoubleViewCalendar3811401 from './components/screens/DoubleViewCalendar3811401';

// PUBLIC_INTERFACE
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/regular" element={<Regular71482 />} />
      <Route path="/doubleview-calendar" element={<DoubleViewCalendar38682 />} />
      <Route path="/doubleview-calendar-11401" element={<DoubleViewCalendar3811401 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
