import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./timeline.css"
import Timeline from 'react-calendar-timeline'; 
import moment from 'moment'
import ModalFull from './ModalFull/full';
import ModalMedium from './ModalMedium/medium';
import ModalSmall from './ModalSmall/small';
import './ModalFull/full.css';
// import './ModalMedium/medium.css';
// import  './ModalSmall/small.css';
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
    end_time: new Date(date.getFullYear(), date.getMonth(), 2).setHours(15, 0)
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
    end_time: new Date(date.getFullYear(), date.getMonth(), 3).setHours(20, 0)
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
    end_time: new Date(date.getFullYear(), date.getMonth(), 4).setHours(15, 0)
  }
      
]
const timeSteps = {
  millisecond: 1,
  second: 1,
  minute: 1,
  hour: 6, // set to 6 to match the desired time points
  day: 1,
  month: 1,
  year: 1,
};

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
  const [viewportStart, setViewportStart] = useState(new Date(date.getFullYear(), date.getMonth(), 2).getTime());
  const [viewportEnd, setViewportEnd] = useState(new Date(date.getFullYear(), date.getMonth(), 7).getTime());
  const [newScheduleModalOpen, setNewScheduleModalOpen] = useState(false)
  const [modifyModalOpen, setModifyModalOpen] = useState(false)
  const [selectModalOpen, setselectModalOpen] = useState(false)
   
  const [selectedItem, setSelectedItem] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const timelineRef = useRef(null);
  const outsideClickRef = useRef(null);
  const buttonRef = useRef(null);
 
const [selectedItems, setSelectedItems] = useState([]);
const [selectedObjects, setSelectedObjects] = useState([]);
const [shiftKeyPressed, setShiftKeyPressed] = useState(false);
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
  console.log(selectedObjects);
  console.log(selectedItems);
  // console.log(selected);
  // const [selectedItems, setSelectedItems] = useState([]);
  // const [clickedItem, setClickedItem] = useState(null);
  // const [selectedObject, setSelectedObject] = useState(null);
  
  // function handleItemClick(itemId) {
  //   setSelectedItem(itemId);
  //   const selectedItem = items.find(item => item.id === itemId);
  //   setSelectedItems(prevSelectedItems => [...prevSelectedItems, itemId]);
  //   setClickedItem(itemId);
  //   setSelectedObject(selectedItem);
  // }
  
  // const selected = selectedObject;
  



//   const [selectedItems, setSelectedItems] = useState([]);
// const [clickedItem, setClickedItem] = useState(null);
// const [selectedObjects, setSelectedObjects] = useState([]);

// function handleItemClick(itemId) {
//   const selectedItem = items.find(item => item.id === itemId);
//   setSelectedItems(prevSelectedItems => [...prevSelectedItems, itemId]);
//   setClickedItem(itemId);
//   setSelectedObjects(prevSelectedObjects => [...prevSelectedObjects, selectedItem]);
// }

// const selected = selectedObjects[selectedObjects.length - 1];

///disable and enable button when item clicked///////
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

 console.log(selectedItem)
 
 function handleItemUnselect() {
    setSelectedItem(null);

    if (selectedItem === null) {
         setSelectedItems([])   
    }
  }

  function handlePublishClick() {
    // logic to publish selected item
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
  newStart.setDate(newStart.getDate() - 1);
  newEnd.setDate(newEnd.getDate() - 1);
  console.log(newStart.getTime())
  setViewportStart(newStart.getTime());
  setViewportEnd(newEnd.getTime());
};
 const handleForwardClick = () => {
  const newStart = new Date(viewportStart);
  const newEnd = new Date(viewportEnd);
  newStart.setDate(newStart.getDate() + 1);
  newEnd.setDate(newEnd.getDate() + 1);
  setViewportStart(newStart.getTime());
  setViewportEnd(newEnd.getTime());
};
console.log(viewportStart)
 



  const h = () =>{
   setViewportStart(new Date(date.getFullYear(), date.getMonth(), 1).getTime())
   setViewportEnd(new Date(date.getFullYear(), date.getMonth(), 6).getTime())
 }
 const now = () =>{
  setViewportStart(new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()).getTime())
  let end = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()).toISOString().split('-')[1].split('')[1]
  setViewportEnd(new Date(date.getFullYear(), date.getMonth(), parseInt(end + 5)).getTime()) 
}
 
const handleZoomOut = () => {
  const newStart = new Date(viewportStart);
  const newEnd = new Date(viewportEnd);
  const diff = (newEnd - newStart) * 0.2; // increase by 20%
  newStart.setTime(newStart.getTime() + diff / 2);
  newEnd.setTime(newEnd.getTime() - diff / 2);
  setViewportStart(newStart.getTime());
  setViewportEnd(newEnd.getTime());
};

const handleZoomIn = () => {
  const newStart = new Date(viewportStart);
  const newEnd = new Date(viewportEnd);
  const diff = (newEnd - newStart) * 0.2; // decrease by 20%
  newStart.setTime(newStart.getTime() - diff / 2);
  newEnd.setTime(newEnd.getTime() + diff / 2);
  setViewportStart(newStart.getTime());
  setViewportEnd(newEnd.getTime());
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
  // <div
  //     className={`timeline-item ${isSelected ? 'selected' : ''}`}
  //     onClick={() => handleItemClick(item.id)}
  //   >
       
  //   </div>
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
        <div className="Fitem"><input type="text" placeholder="time-zone"/></div>
    </div>
        
       
          <Timeline      
              ref={timelineRef}
              groups={groups} //the above groups
              // items={items} //same the above defined items
              items={items.map(item => ({
                ...item,
                onClick: () => handleItemClick(item)
              }))}
              onItemClick={handleItemClick}
              defaultTimeStart={addDays(date, -3)}
              defaultTimeEnd={addDays(date, 10)}
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
                <div className="button-group" ref={outsideClickRef} style={{ backgroundColor: 'red', height: '50px', width: '70px' }}>
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

 