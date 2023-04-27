import React, { useState, useEffect, useRef,useCallback } from 'react';
import "./timeline.css"
import Timeline from 'react-calendar-timeline'; 
import moment from 'moment'
import Modal from './modal/modal';
// import './modal/modal.css';

var date = new Date();
const groups = [
    { id: 1, title: <div id="groups">ABCDE</div> }, 
    { id: 2, title: <div id="groups">B-ARTI</div> },
    { id: 3, title: <div id="groups">G-OVMT</div> },
    { id: 4, title: <div id="groups">v-ADER</div> },
    { id: 5, title: '' },
    { id: 6, title: '' },
    { id: 7, title: '' },
    { id: 8, title: '' },
    { id: 9, title: '' },
    { id: 10, title: '' },
    { id: 11, title: '' },
    { id: 12, title: '' },
    { id: 13, title: '' },
    { id: 14, title: '' },
    { id: 15, title: '' }
]
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: new Date(date.getFullYear(), date.getMonth(), 2),
    end_time: new Date(date.getFullYear(), date.getMonth(), 3)
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: new Date(date.getFullYear(), date.getMonth(), 3),
    end_time: new Date(date.getFullYear(), date.getMonth(), 5)
  },
  {
    id: 3,
    group: 3,
    title: 'item 3',
    start_time: new Date(date.getFullYear(), date.getMonth(), 3),
    end_time: new Date(date.getFullYear(), date.getMonth(), 5)
  },
  {
    id: 4,
    group: 4,
    title: 'item 4',
    start_time: new Date(date.getFullYear(), date.getMonth(), 12),
    end_time: new Date(date.getFullYear(), date.getMonth(), 13)
  },
  {
    id: 5,
    group: 5,
    title: 'item 5',
    start_time: new Date(date.getFullYear(), date.getMonth(), 2),
    end_time: new Date(date.getFullYear(), date.getMonth(), 4)
  },
  {
    id: 6,
    group: 6,
    title: 'item 6',
    start_time: new Date(date.getFullYear(), date.getMonth(), 2),
    end_time: new Date(date.getFullYear(), date.getMonth(), 3)
  },
  {
    id: 7,
    group: 7,
    title: 'item 7',
    start_time: new Date(date.getFullYear(), date.getMonth(), 10),
    end_time: new Date(date.getFullYear(), date.getMonth(), 14)
  },
  {
    id: 8,
    group: 8,
    title: 'item 8',
    start_time: new Date(date.getFullYear(), date.getMonth(), 3),
    end_time: new Date(date.getFullYear(), date.getMonth(), 5)
  },
  {
    id: 9,
    group: 9,
    title: 'item 9',
    start_time: new Date(date.getFullYear(), date.getMonth(), 6),
    end_time: new Date(date.getFullYear(), date.getMonth(), 7)
  }

]
const timeSteps = {
  hour: 6,
  day: 1,
  month: 1,
  year: 1
}
  // moment().add(-75, 'hour') 

function TimelineApp() {
  const date = new Date()  
  
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  
// const [viewportStart, setViewportStart] = useState(new Date());
// const [viewportEnd, setViewportEnd] = useState(addDays(new Date(), 7));
  const [viewportStart, setViewportStart] = useState(new Date(date.getFullYear(), date.getMonth(), 1).getTime());
  const [viewportEnd, setViewportEnd] = useState(new Date(date.getFullYear(), date.getMonth(), 6).getTime());

// const handleBackwardClick = () => {
//   const newStart = addDays(viewportStart, -1);
//   const newEnd = addDays(viewportEnd, -1);
//   setViewportStart(newStart);
//   setViewportEnd(newEnd);
// };

// const handleForwardClick = () => {
//   const newStart = addDays(viewportStart, 1);
//   const newEnd = addDays(viewportEnd, 1);
//   console.log(newStart)
//   setViewportStart(newStart);
//   setViewportEnd(newEnd);
// };

// const visibleTimeStart = useCallback(() => {
//   return viewportStart;
// }, [viewportStart]);

// const visibleTimeEnd = useCallback(() => {
//   return viewportEnd;
// }, [viewportEnd]);

// const handleZoom = (zoom, timelineContext) => {
//   const { visibleTimeStart, visibleTimeEnd } = timelineContext;
//   setViewportStart(visibleTimeStart);
//   setViewportEnd(visibleTimeEnd);
// };

 
//   const [viewportStart, setViewportStart] = useState(new Date(date.getFullYear(), date.getMonth(), 1).getTime());
//   const [viewportEnd, setViewportEnd] = useState(new Date(date.getFullYear(), date.getMonth(), 6).getTime());


//   const handleBackwardClick = () => {
//   const newStart = new Date(viewportStart);
//   const newEnd = new Date(viewportEnd);
//   newStart.setDate(newStart.getDate() - 1);
//   newEnd.setDate(newEnd.getDate() - 1);
//   console.log(newStart.getTime())
//   setViewportStart(newStart.getTime());
//   setViewportEnd(newEnd.getTime());
// };
//  const handleForwardClick = () => {
//   const newStart = new Date(viewportStart);
//   const newEnd = new Date(viewportEnd);
//   newStart.setDate(newStart.getDate() + 1);
//   newEnd.setDate(newEnd.getDate() + 1);
//   setViewportStart(newStart.getTime());
//   setViewportEnd(newEnd.getTime());
// };
// console.log(viewportStart)









const [currentMonthStart, setCurrentMonthStart] = useState(new Date(date.getFullYear(), date.getMonth(), 1));
const [currentMonthEnd, setCurrentMonthEnd] = useState(new Date(date.getFullYear(), date.getMonth(), 6));
  

// useEffect(() => {
//   const today = new Date();
//   const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1+1).toISOString().slice(0, 10);
//   setCurrentMonthStart(lastDayOfMonth);
// }, []);

// const handleDateChange = (event) => {
//   setViewportStart(currentMonthStart)
//   console.log(viewportStart)
//   setCurrentMonthStart(event.target.value);
// };

// useEffect(() => {
//   const today = new Date();
//   const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1).toISOString().slice(0, 10);
//   setCurrentMonthEnd(lastDayOfMonth);
// }, []);

// const handleDateChange1 = (event) => {
//   setViewportEnd(currentMonthEnd)
//   console.log(viewportEnd)
//   setCurrentMonthEnd(event.target.value);

// };
 const h = () =>{
   setViewportStart(new Date(date.getFullYear(), date.getMonth(), 1).getTime())
   setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 6).getTime())
 }
//  const now = () =>{
//   setViewportStart(new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()).getTime())
//   let end = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()).toISOString().split('-')[1].split('')[1]
//   setViewportEnd(new Date(date.getFullYear(), date.getMonth(), parseInt(end + 5)).getTime())
  
// }

// const [zoom, setZoom] = useState(1);

// const handleZoomIn = () => {
//   setZoom(zoom * 1.2); // increase zoom by 20%
// };

// const handleZoomOut = () => {
//   setZoom(zoom * 0.8); // decrease zoom by 20%
// };




const [showModal, setShowModal] = useState(false);

const handleNewScheduleClick = () => {
  setShowModal(true);
};

const handleModalClose = () => {
  setShowModal(false);
};

// const [viewportStart, setViewportStart] = useState(new Date(date.getFullYear(), date.getMonth(), 1).getTime());
//   const [viewportEnd, setViewportEnd] = useState(new Date(date.getFullYear(), date.getMonth(), 6).getTime());

  const handleDateChange = (event) => {
    const newStart = new Date(event.target.value).getTime();
    if (newStart < viewportEnd) {
      setViewportStart(newStart);
    }
  };

  const handleDateChange1 = (event) => {
    const newEnd = new Date(event.target.value).getTime();
    if (newEnd > viewportStart) {
      setViewportEnd(newEnd);
    }
  };
 return (
    <div> 
        <div className="Flist">
        <div className="Fitem"> <span id="refresh" title="refresh timeline" onClick={h}> &#x1f5d8; </span></div>
        <div className="Fitem"><span id='indicate'>From</span></div>
        <div className="Fitem"><input type="date" value={currentMonthStart}  onChange={handleDateChange}/></div>
        <div className="Fitem"><span id="indicate">To</span></div>
        <div className="Fitem"><input type="date" value={currentMonthEnd} onChange={handleDateChange1}/></div>
        {/* <div className="Fitem now"><span className="left arrow" title="pan left" onClick={handleBackwardClick}>&#8592;</span><span id="indicate" title="display today" onClick={now}>NOW</span><span className="arrow right" title="pan right" onClick={handleForwardClick}>&#8594;</span></div> */}
        <div className="Fitem zoom"><span className="arrow" title="zoom left" > &#x2212; </span><span className="arrow right" title="zoom right">&#x2B; </span></div>
        <div className="Fitem"><button id='publish'>PUBLISH</button></div>
        <div className="Fitem"><input type="text" placeholder="time-zone"/></div>
  </div>
  <div className="Fitem">
        <input type="date" value={moment(viewportStart).format("YYYY-MM-DD")} onChange={handleDateChange} />
      </div>
      <div className="Fitem">
        <input type="date" value={moment(viewportEnd).format("YYYY-MM-DD")} onChange={handleDateChange1} />
      </div>
        <Timeline      
            // zoomOnScroll
            // onZoom={handleZoom}
            // onBoundsChange={handleBoundsChange}
            groups={groups} //the above groups
            items={items} //same the above defined items
            defaultTimeStart={addDays(date, -3)}
        defaultTimeEnd={addDays(date, 10)}
        visibleTimeStart={viewportStart}
        visibleTimeEnd={viewportEnd}
      
            // defaultTimeStart={new Date(date.getFullYear(), date.getMonth(), 1)}
            // defaultTimeEnd={new Date(date.getFullYear(), date.getMonth(), 6)}          
            // visibleTimeStart={viewportStart}
            // visibleTimeEnd={viewportEnd}
            // visibleTimeStart={visibleTimeStart}
            // visibleTimeEnd={visibleTimeEnd}
            timeSteps={timeSteps}
       />
        {/* <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button> */}
         <div id="foot">
          <div>
              <button class="button" id="footB" onClick={handleNewScheduleClick}>new schedule</button>
              {showModal && <Modal onClose={handleModalClose} />}
          </div>
          <div><button class="button" id="footB">select flight</button></div>
          <div><button class="button btn-transparent" id="footB">modify flight</button></div>
          <div><button class="button btn-transparent" id="delete">delete</button></div>
       </div>
       <div>
        {/* <label>
          Viewport Start:
          <input type="date" value={viewportStart} onChange={HandleSetViewPortEnd} />
        </label>
        <label>
          Viewport End:
          <input type="date" value={viewportEnd} onChange={HandleSetViewPortStart} />
        </label> */}
       </div>
       

    </div>
     
  )
}
export default TimelineApp;

// working on a react calender timeline project and i need to set the viewport with the user input value in a date 
// i have two date 
// <div className="Fitem"><input type="date" value={currentMonthStart}  onChange={handleDateChange}/></div>
 
// <div className="Fitem"><input type="date" value={currentMonthEnd} onChange={handleDateChange1}/></div>
// write a funtion that set the viewport start of a timeline with the first date and set the viewport end of a timeline with the secound date
