import React from 'react';
import './small.css';
import { useState, useEffect } from 'react';
const ModalSmall = (props) => {
   
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2 );
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

    setFromDate(firstDayOfMonth.toISOString().split('T')[0]);
    setToDate(lastDayOfMonth.toISOString().split('T')[0]);
  }, []);

  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-header">
          <button className="button modal-close" onClick={props.onClose}>
            &#10006;
          </button>
        </div>
        <div className="new-schedule">
          <span>Modify</span>
        </div>
        <div className="modals-container">
        <div className="modal-content">
          <div className="left-container">
            <div className="sub-container">
            <div className="input-cont">
                <label htmlFor="shift">from</label>
                <input type="date" id="shifts" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                <label htmlFor="shift">to</label>
                <input type="date" id="shift" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </div>
              <label htmlFor="shift" className='shifted'>Days</label> 
              <div className="input-cont checkboxes">
              
                   <label for="monday-checkbox" >
                     <input type="checkbox" id="monday-checkbox" />
                      Mon
                    </label>
                    <label for="tuesday-checkbox" >
                      <input type="checkbox" id="tuesday-checkbox" />
                      Tue
                    </label>
                    <label for="wednesday-checkbox">
                      <input type="checkbox" id="wednesday-checkbox" />
                      Wed
                    </label>
                    <label for="thursday-checkbox">
                      <input type="checkbox" id="thursday-checkbox" />
                      Thu
                    </label>
                    <label for="friday-checkbox">
                      <input type="checkbox" id="friday-checkbox" />
                      Fri
                    </label>
                    <label for="saturday-checkbox">
                      <input type="checkbox" id="saturday-checkbox" />
                      Sat
                    </label>
                    <label for="sunday-checkbox">
                      <input type="checkbox" id="sunday-checkbox" />
                      Sun
                    </label>
                  </div>
            <label htmlFor="shift" className='shifted'>Aircraft</label>
              <div className="input-cont checkboxes1">
                 
                <label for="monday-checkbox">
                     <input type="checkbox" id="monday-checkbox" />
                      ABCDE
                    </label>
                    <label for="tuesday-checkbox">
                      <input type="checkbox" id="tuesday-checkbox" />
                      B-ARTI
                    </label>
                    <label for="wednesday-checkbox">
                      <input type="checkbox" id="wednesday-checkbox" />
                      G-OVMT
                    </label>
                    <label for="thursday-checkbox">
                      <input type="checkbox" id="thursday-checkbox" />
                      V-ADER
                    </label>
                     
              </div>
              <div className="input-cont">
                <label htmlFor="altn">Flight No</label>
                <input type="text" placeholder="all" id="altn" style={{width: "100px"}} />
              </div>
              <div className="input-cont">
                <label htmlFor="ferry">ADEP</label>
                <input type="text" id="shifts" />
                <label htmlFor="shift">ADES</label>
                <input type="text" id="shift" />
              </div>
            </div>
          </div>
        </div>
      <div className="table-container-small">
        <table>
          <tbody>
            {props.selectedObjects.map((object, index) => (
              <tr key={index}>
                <td><input type="checkbox"/> {object.flight_no}</td>
                <td>{object.airport_of_departure}</td>
                <td>{object.airport_destination}</td>
                <td>{object.date_filter_from}</td>
                <td>{object.date_filter_to}</td>
                <td>{object.time_of_departure}</td>
                <td>{object.time_of_arrival}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        <div className="modal-footer" style={{float: 'right'}}>
          <button className="button" id="footB" onClick={props.onClose}>
            Cancel
          </button>
          <button className="button btn-transparent" id="footB" onClick={props.onClose}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSmall;
