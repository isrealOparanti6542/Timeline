import React from 'react';
import './modal.css';
import Table from '../Table/table';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-body">
      <div className="modal-header">
        <button className="button modal-close" onClick={onClose}>
        &#10006;
        </button>
      </div>
      <div className='new-schedule'><span>New schedule</span></div>
      <div class="modal-row">
  <div class="label-wrapper">
    <label for="from-date">From</label><br/>
    <input type="date" id="from-date" />
  </div>
  <div class="label-wrapper">
    <label for="to-date">To</label><br/>  
    <input type="date" id="to-date" />
  </div>
  <div class="label-wrapper">
    <label for="select-1">Aircraft</label><br/>
    <select id="select-1">
      <option>....</option>
      <option>ABCDE</option>
      <option>B-ARTI</option>
      <option>G-OVR</option>
      <option>v-ADER</option>
    </select>
  </div>
  <div class="label-wrapper">
    <label for="select-2">Rotation</label><br />
    <select id="select-2">
      <option>....</option>
      <option>weekly</option>
      <option>biweekly</option>
    </select>
  </div>
  <div class="label-wrapper">
    <label for="select-3">Trip Type</label><br/>
    <select id="select-3">
      <option>PAX Charter</option>
      <option>Flight for owner</option>
      <option>Training</option>
      <option>Technical</option>
      <option>Other</option>
    </select>
  </div>
  <div class="label-wrapper">
    <label for="select-4">ICAO Type</label><br/>
    <select id="select-4">
      <option>Weekly</option>
      <option>Non-scheduled</option>
      <option>General aviation</option>
      <option>Military</option>
      <option>Other</option>
    </select>
  </div>
</div>
<div class="modal-row">
  <div class="label-wrapper">
    <label for="client-input">Client</label><br/>
    <input type="text" id="client-input" />
  </div>
  <div class="label-wrapper">
    <label for="monday-checkbox">Repeat schedule on</label><br/>
    <div class="checkbox-group">
      <label for="monday-checkbox">
        <input type="checkbox" id="monday-checkbox" />
        Mon
      </label>
      <label for="tuesday-checkbox">
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
  </div>
  <div class="label-wrapper">
    <label for="commercial-select">Commercial</label><br/>
    <select id="commercial-select">
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
</div>
<Table/>
<div style={{float: 'right'}}>
    <button className="button" id="footB" onClick={onClose}>Add Schedule</button>
    <button className="button btn-transparent" id="footB" onClick={onClose} >cancel</button> 
</div>
      </div>
    </div>
  );
};

export default Modal;
