import React from 'react';
import './medium.css';

const ModalMedium = (props) => {
  
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
              <div className="input-container">
                <label htmlFor="shift">Shift</label>
                <input type="text" id="shift" />
              </div>
              <div className="input-container">
                <label htmlFor="aircraft">Aircraft</label>
                <select id="aircraft">
                  {/* options go here */}
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="shift">Shift</label>
                <input type="text" id="shift" />
              </div>
              <div className="input-container">
                <label htmlFor="adep">ADEP</label>
                <input type="text" id="adep" />
              </div>
              <div className="input-container">
                <label htmlFor="altn">ALTN</label>
                <input type="text" id="altn" />
              </div>
              <div className="input-container">
                <label htmlFor="ferry">Ferry</label>
                <select id="ferry">
                  {/* options go here */}
                </select>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="sub-container">
              <div className="input-container">
                <label htmlFor="block-time">Block Time</label>
                <input type="text" id="block-time" />
              </div>
              <div className="input-container">
                <label htmlFor="flight-no">Flight No</label>
                <select id="flight-no">
                  {/* options go here */}
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="ades">ADES</label>
                <input type="text" id="ades" />
              </div>
              <div className="input-container">
                <label htmlFor="distance">Distance</label>
                <input type="text" id="distance" />
              </div>
            </div>
          </div>
        </div>
      <div className="table-container">
        <table>
          <tbody>
            {props.selectedObjects.map((object, index) => (
              <tr key={index}>
                <td>{object.flight_no}</td>
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
            Cancell
          </button>
          <button className="button btn-transparent" id="footB" onClick={props.onClose}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalMedium;
