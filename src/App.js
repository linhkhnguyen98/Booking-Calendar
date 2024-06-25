import { useState } from 'react';
import { Calendar } from './Calendar';
import { MOCKEVENTS } from './Calendar/const';
import logo from './logo.svg';
import "./styles.css";

export default function App() {
  const [events, setEvents] = useState(MOCKEVENTS);
  
  const addEvent = (date, color) => {
    const text = window.prompt("text");
    setEvents((prev) => [...prev, {date, title: text, color}]);
  };
  return (
    <div className="App">
      <Calendar 
      startingDate={new Date()} 
      eventsArr={events}
      addEvent={addEvent}
      />
    </div>
    
  );
}

// export default App;
