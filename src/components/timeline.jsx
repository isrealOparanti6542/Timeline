import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./timeline.css"
import Timeline from 'react-calendar-timeline'; 
import moment from 'moment'
import ModalFull from './ModalFull/full';
import ModalMedium from './ModalMedium/medium';
import ModalSmall from './ModalSmall/small';
import './ModalFull/full.css';
 
var date = new Date();
const groups = [
    { id: 1, title: <div id="groups"><span>ABCDE</span><span>C150</span></div> }, 
    { id: 2, title: <div id="groups"><span>B-ARTI</span><span>F900</span></div> },
    { id: 3, title: <div id="groups"><span>G-OVMT</span><span>3T69</span></div> },
    { id: 4, title: <div id="groups"><span>V-ADER</span><span>F900</span></div> },
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
    title: 'ABC OPO',
    flight_no: 'ABC',
    airport_of_departure: 'WAW',
    airport_destination: 'OPO',
    date_filter_from: '01 MAY',
    date_filter_to: '30 MAY',
    time_of_departure: '12:00',
    time_of_arrival: '15:00',
    start_time:  new Date(date.getFullYear(), date.getMonth(), 2).setHours(6, 0),
    end_time: new Date(date.getFullYear(), date.getMonth(), 2).setHours(10, 0)
  },

  {
    id: 2,
    group: 1,
    title: 'ABC OPO',
    flight_no: 'ABC',
    airport_of_departure: 'WAW',
    airport_destination: 'OPO',
    date_filter_from: '01 APRIP',
    date_filter_to: '30 APRIL',
    time_of_departure: '13:00',
    time_of_arrival: '17:00',
    start_time:  new Date(date.getFullYear(), date.getMonth(), 3).setHours(12, 0),
    end_time: new Date(date.getFullYear(), date.getMonth(), 3).setHours(16, 0)
  },
  {
    id: 3,
    group: 1,
    title: 'ABC OPO',
    flight_no: 'ABC',
    airport_of_departure: 'WAW',
    airport_destination: 'OPO',
    date_filter_from: '01 JULY',
    date_filter_to: '30 JULY',
    time_of_departure: '9:00',
    time_of_arrival: '17:00',
    start_time:  new Date(date.getFullYear(), date.getMonth(), 4).setHours(8, 0),
    end_time: new Date(date.getFullYear(), date.getMonth(), 4).setHours(12, 0)
  }
      
]
 var counter = 6
   // moment().add(-75, 'hour') 

function TimelineApp() {


  const timelineRef = useRef(null);
  const outsideClickRef = useRef(null);
  const buttonRef = useRef(null);

  const date = new Date()   
  const [timeSteps, setTimeSteps] = useState({
    millisecond: 1,
    second: 1,
    minites: 1,
    hour: 6,
    day: 1,
    month: 1,
    year: 1
  });
  
  const [viewportStart, setViewportStart] = useState(new Date(date.getFullYear(), date.getMonth(), 1).getTime());
  const [viewportEnd, setViewportEnd] = useState(new Date(date.getFullYear(), date.getMonth(), 6).getTime());
  console.log(timeSteps)
  
  const [newScheduleModalOpen, setNewScheduleModalOpen] = useState(false)
  const [modifyModalOpen, setModifyModalOpen] = useState(false)
  const [selectModalOpen, setselectModalOpen] = useState(false)   
  const [selectedItem, setSelectedItem] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [shiftKeyPressed, setShiftKeyPressed] = useState(false);  
   
    const [selectedTimeStep, setSelectedTimeStep] = useState('30days'); // Default option
  
    
    // Function to handle the dropdown selection
     
    const handleTimeStepChange = (event) => {
      const selectedOption = event.target.value;
      setSelectedTimeStep(selectedOption);
      switch (selectedOption) {
        case '30days':
          setTimeSteps({ ...timeSteps, hour: 6 });
          setViewportStart(new Date(date.getFullYear(), date.getMonth(), 1,-2).getTime());
          setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 6).getTime());
          break;
        case '2weeks':
          setTimeSteps({ ...timeSteps, hour: 4 });
          setViewportStart(new Date(date.getFullYear(), date.getMonth(), 2).getTime());
          setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 5).getTime());
          break;
        case '1week':
          setTimeSteps({ ...timeSteps, hour: 2 });
          setViewportStart(new Date(date.getFullYear(), date.getMonth(), 3).getTime());
          setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 4, 3).getTime());
          break;
        case '3days':
          setTimeSteps({ ...timeSteps, hour: 1 });
          setViewportStart(new Date(date.getFullYear(), date.getMonth(), 3, 5).getTime());
          setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 4, -1).getTime());
          break;
        case '1day':
          setTimeSteps({ ...timeSteps, minute: 30 });
          setViewportStart(new Date(date.getFullYear(), date.getMonth(), 3, 10).getTime());
          setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 3, 18).getTime());
          break;
        default:
          setTimeSteps({ ...timeSteps, hour: 6 });
          setViewportStart(new Date(date.getFullYear(), date.getMonth(), 1,-2).getTime());
           setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 6).getTime());
      }
    };

//   const [selectedTimeStep, setSelectedTimeStep] = useState('30days'); // Default option
 

   
  
function handleItemClick(itemId, shiftKeyPressed) {
  setSelectedItem(itemId);
  const selectedItem = items.find(item => item.id === itemId);
  setShiftKeyPressed(shiftKeyPressed);

  setSelectedObjects(prevSelectedObjects => {
    const updatedObjects = prevSelectedObjects.map(obj => {
      if (obj.id === itemId) {
        return selectedItem;
      }
      return obj;
    });
    if (!updatedObjects.some(obj => obj.id === itemId)) {
      updatedObjects.push(selectedItem);
    }
    return updatedObjects;
  });

  setSelectedItems(prevSelectedObjects => [...prevSelectedObjects, selectedItem])
}


const selected = shiftKeyPressed ? selectedObjects : selectedObjects[0];
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (outsideClickRef.current && !outsideClickRef.current.contains(event.target)) {
        handleItemUnselect();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

//  console.log(selectedItem)
 
 function handleItemUnselect() {
    setSelectedItem(null);

    if (selectedItem === null) {
         setSelectedItems([])   
    }
  }

  function handlePublishClick() {
  
  }

  function handleModifyClick() {
    setModifyModalOpen(true);
  }
  function handleSelect() {
    setselectModalOpen(true)
  }

  function handleDeleteClick() {
    // logic to delete selected item
  }
  
  const handleBackwardClick = () => {
  const newStart = new Date(viewportStart);
  const newEnd = new Date(viewportEnd);
  if(timeSteps.hour == 1){
    newStart.setDate(newStart.getDate() - timeSteps.hour);
    newEnd.setDate(newEnd.getDate() - timeSteps.hour);  
  }else{
    newStart.setDate(newStart.getDate() - timeSteps.hour + 1);
    newEnd.setDate(newEnd.getDate() - timeSteps.hour + 1);
  }

  console.log(newStart.getTime())
  setViewportStart(newStart.getTime());
  setViewportEnd(newEnd.getTime());
};

 const handleForwardClick = () => {
  const newStart = new Date(viewportStart);
  const newEnd = new Date(viewportEnd);
  if(timeSteps.hour == 1){
    newStart.setDate(newStart.getDate() + timeSteps.hour);
    newEnd.setDate(newEnd.getDate() + timeSteps.hour);  
  }else{
    newStart.setDate(newStart.getDate() + timeSteps.hour - 1);
    newEnd.setDate(newEnd.getDate() + timeSteps.hour - 1);
  }
  
  console.log(newStart.getTime())
  console.log(newEnd.getTime())
  setViewportStart(newStart.getTime());
  setViewportEnd(newEnd.getTime());
};
 
 
  const h = () =>{
  setTimeSteps({ ...timeSteps, hour: 6 });
   setViewportStart(new Date(date.getFullYear(), date.getMonth(), 1,-2).getTime())
   setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 6).getTime())
 }
 const now = () =>{
  setViewportStart(new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()).getTime())
  let end = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()).toISOString().split('-')[1].split('')[1]
  console.log(end)
  setViewportEnd(new Date(date.getFullYear(), date.getMonth(), parseInt(end)+3).getTime()) 
}
var hourStep = timeSteps.hour
var miniteSteps = 30

const handleZoomOut = () => {
   
      const newStart = new Date(viewportStart);
      const newEnd = new Date(viewportEnd);
      const diff = (newEnd - newStart) * 0.2; // increase by 20%
      newStart.setTime(newStart.getTime() + diff / 2);
      newEnd.setTime(newEnd.getTime() - diff / 2);
      setViewportStart(newStart.getTime());
      setViewportEnd(newEnd.getTime());

    
  setTimeSteps(prevTimeSteps => ({
    ...prevTimeSteps,
    hour: checktimestep(prevTimeSteps.hour),
     
  }));
  //  console.log(timeSteps)  
  const checktimestep = (hour) => {
    if (hour === 6) {
      setViewportStart(new Date(date.getFullYear(), date.getMonth(), 2).getTime());
      setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 5).getTime());
      console.log('about to be 4')

      return 4;
    } else if (hour === 4) {
      setViewportStart(new Date(date.getFullYear(), date.getMonth(), 3).getTime());
      setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 4, 3).getTime());
      console.log('about to be 2')
      return 2;
    } else if (hour === 2) {
      setViewportStart(new Date(date.getFullYear(), date.getMonth(), 3, 5).getTime());
      setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 4, -1).getTime());
      return 1;
    } 
     else if (hour === 1) {
  
          
        setTimeSteps({ ...timeSteps, minute: 30 });
        setViewportStart(new Date(date.getFullYear(), date.getMonth(), 3, 10).getTime());
        setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 3, 18).getTime());
        
         console.log(timeSteps)
      return 1;
    }
       
    
    return hour;
  };   
}


const handleZoomIn = () => {
  
  const newStart = new Date(viewportStart);
  const newEnd = new Date(viewportEnd);
  const diff = (newEnd - newStart) * 0.2; // decrease by 20%
  newStart.setTime(newStart.getTime() - diff / 2);
  newEnd.setTime(newEnd.getTime() + diff / 2);
  setViewportStart(newStart.getTime());
  setViewportEnd(newEnd.getTime());

  
  setTimeSteps(prevTimeSteps => ({
    ...prevTimeSteps,
    hour: checktimestep(prevTimeSteps.hour),
     
  }));
  //  console.log(timeSteps)  
  const checktimestep = (hour) => {
    if (timeSteps.minute === 30) {
       setViewportStart(new Date(date.getFullYear(), date.getMonth(), 3, 5).getTime());
       setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 4, -1).getTime());
       
        console.log('about to be 4')
        setTimeSteps({ ...timeSteps, minute: 1 }); 
      
    } else if (hour === 1) {
         setViewportStart(new Date(date.getFullYear(), date.getMonth(), 3).getTime());
         setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 4, 3).getTime());
         console.log('about to be 2')
         return 2;
    } else if (hour === 2) {
      setViewportStart(new Date(date.getFullYear(), date.getMonth(), 2).getTime());
      setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 5).getTime());
      return 4;
    } 
     else if (hour === 4) {     
      setViewportStart(new Date(date.getFullYear(), date.getMonth(), 1,-2).getTime());
      setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 6).getTime());
      return 6;
    }
    return hour;
  };  
   
}
 
 
const handleNewScheduleClick = () => {
  setNewScheduleModalOpen(true);
};

function handleModalClose() {
  setNewScheduleModalOpen(false);
  setModifyModalOpen(false);
  setselectModalOpen(false)
}

 
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

  const handleTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
    setViewportStart(visibleTimeStart);
    setViewportEnd(visibleTimeEnd);
  };
 return (
   
    <div> 
        <div className="Flist">
        <div className="Fitem"><span id="refresh" title="refresh timeline" onClick={h}> &#x1f5d8; </span></div>
        <div className="Fitem"><span id='indicate'>From</span></div>
        <div className="Fitem"><input type="date" value={moment(viewportStart).format("YYYY-MM-DD")}  onChange={handleDateChange}/></div>
        <div className="Fitem"><span id="indicate">To</span></div>
        <div className="Fitem"><input type="date" value={moment(viewportEnd).format("YYYY-MM-DD")} onChange={handleDateChange1}/></div>
        <div className="Fitem now"><span className="left arrow" title="pan left" onClick={handleBackwardClick}>&#8592;</span><span id="indicate" title="display today" onClick={now}>NOW</span><span className="arrow right" title="pan right" onClick={handleForwardClick}>&#8594;</span></div>
        <div className="Fitem zoom"><span className="arrow" onClick={handleZoomIn} title="zoom left" > &#x2212; </span><span className="arrow right" onClick={handleZoomOut} title="zoom right">&#x2B; </span></div>
        <div className="Fitem"><button className='btn-transparent' id='publish'>PUBLISH</button></div>
        <div className="Fitem"><input type="text" id="timezone" placeholder="time-zone"/></div>
        <div className="Fitem">

        <select value={selectedTimeStep}  id="viewSelect" onChange={handleTimeStepChange}>
          <option value="30days">30 days</option>
          <option value="2weeks">2 weeks</option>
          <option value="1week">1 week</option>
          <option value="3days">3 days</option>
          <option value="1day">1 day</option>
        </select>
      </div>
    </div>
        
       
          <Timeline      
              ref={timelineRef}
              groups={groups} //the above groups
              // items={items} //same the above defined items
              items={items.map(item => ({
                ...item,
                onClick: () => handleItemClick(item.id, shiftKeyPressed)
              }))}
              onItemClick={handleItemClick}
              // defaultTimeStart={addDays(date, -1)}
              // defaultTimeEnd={addDays(date, 1)}
              visibleTimeStart={viewportStart}
              visibleTimeEnd={viewportEnd}
              onTimeChange={handleTimeChange}
              onItemUnselect={handleItemUnselect}
              // itemRenderer={CustomItemRenderer}
              timeSteps={timeSteps}
         />

         
      {/* Display the selected item's property value in a div */}
     
               <div id="foot">
                <div>
                    <button class="button" id="footB" onClick={handleNewScheduleClick}>new schedule</button>
                    {newScheduleModalOpen && <ModalFull onClose={handleModalClose} />}
                </div>
                <div>
                  <button class="button" id="footB" onClick={handleSelect}>select flight</button>
                  {selectModalOpen && <ModalSmall selectedObjects={selectedObjects} onClose={handleModalClose} />}
                </div>
                <div className="button-group" ref={outsideClickRef}>
              <button
                className={`button btn-transparent ${selectedItem !== null ? 'green-button' : ''}`}
                onClick={handleModifyClick}
                disabled={selectedItem === null}
              >
                Modify Flight
              </button>
              {modifyModalOpen && <ModalMedium selectedObjects={selectedObjects} onClose={handleModalClose} />}
              <button
                className={`button btn-transparent ${selectedItem !== null ? 'red-button' : ''}`}
                onClick={handleDeleteClick}
                disabled={selectedItem === null}
              >
                Delete
              </button>
            </div>
            {
                selectedItems && (
                  <div className="selected">
                    {selectedItems.length > 0 && (
                      <div key={selectedItems[selectedItems.length - 1].id}>
                        {selectedItems[selectedItems.length - 1].flight_no} {selectedItems[selectedItems.length - 1].date_filter_from} {selectedItems[selectedItems.length - 1].time_of_departure} {selectedItems[selectedItems.length - 1].airport_of_departure}-{selectedItems[selectedItems.length - 1].airport_destination} {selectedItems[selectedItems.length - 1].date_filter_to} {selectedItems[selectedItems.length - 1].time_of_arrival}
                      </div>
                    )}
                  </div>
                )
              }
            <div>    
       </div>
      </div>
   </div>
  )
}
export default TimelineApp;