// import React, { useState } from 'react';
// import './table.css';

// function Table() {
//   const [rows, setRows] = useState([{}]);

//   const handleAddRow = () => {
//     setRows([...rows, {}]);
//   };

//   const handleDeleteRow = (index) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   };

//   return (
//     <table className="custom-table">
//       <thead>
//         <tr>
//           <th>Day shift</th>
//           <th>Flight no</th>
//           <th>std</th>
//           <th>adep</th>
//           <th>ades</th>
//           <th>sta</th>
//           <th>altn</th>
//           <th>distance</th>
//           <th>actions</th>
//           <th>trash</th>
//         </tr>
//       </thead>
//       <tbody>
//         {rows.map((row, index) => (
//           <React.Fragment key={index}>
//             <tr>
//               <td>
//                 <input type="text" />
//               </td>
//               <td>
//                 <input type="text" />
//               </td>
//               <td>
//                 <input type="text" />
//               </td>
//               <td>
//                 <input type="text" />
//               </td>
//               <td>
//                 <input type="text" />
//               </td>
//               <td>
//                 <input type="text" />
//               </td>
//               <td>
//                 <input type="text" />
//               </td>
//               <td>
//                 <input type="text" />
//               </td>
//               <td>
//                 {index === rows.length - 1 ? (
//                   <div  className='arrow' onClick={handleAddRow}>&#x2B;</div>
//                 ) : (
//                   <div></div>
//                 )}
//               </td>
//               <td>
//                 {index === rows.length - 1 ? (
//                   <div></div>
//                 ) : (
//                   <div className='arrow' onClick={() => handleDeleteRow(index)}> &#x2212; </div>
//                 )}
//               </td>
//             </tr>
             
//           </React.Fragment>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default Table;
import { useState } from 'react';
import './table.css';

function Table() {
  const [rows, setRows] = useState([{flightNo:'',std:'',adep:'',ades:'',sta:'',altn:'',distance:''}]);

  const handleAddRow = () => {
    setRows([...rows, {flightNo:'',std:'',adep:'',ades:'',sta:'',altn:'',distance:''}]);
  };

  const handleDeleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleChange = (e, index, field) => {
    const newRows = [...rows];
    newRows[index][field] = e.target.value;
    setRows(newRows);
  }
  console.log(rows)
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Day shift</th>
          <th>Flight no</th>
          <th>std</th>
          <th>adep</th>
          <th>ades</th>
          <th>sta</th>
          <th>altn</th>
          <th>distance</th>
          <th>actions</th>
          <th>trash</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
           <td>
  <select value={row.dayShift} onChange={(e) => handleChange(e, index, 'dayShift')} style={{width: '60px'}}>
    <option value="+0">+0</option>
    {Array.from({length: 31}).map((_, i) => (
      <option key={i+1} value={`+${i+1}`}>{`+${i+1}`}</option>
    ))}
  </select>
</td>


            <td>
              <input type="text" value={row.flightNo} onChange={(e) => handleChange(e, index, 'flightNo')} style={{width: '16px'}}/>
            </td>
            <td>
              <input type="text" value={row.std} onChange={(e) => handleChange(e, index, 'std')} style={{width: '16px'}}/>
            </td>
            <td>
              <input type="text" value={row.adep} onChange={(e) => handleChange(e, index, 'adep')} style={{width: '16px'}}/>
            </td>
            <td>
              <input type="text" value={row.ades} onChange={(e) => handleChange(e, index, 'ades')} style={{width: '16px'}}/>
            </td>
            <td>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <input
      type="text"
      value={row.sta}
      onChange={(e) => handleChange(e, index, 'sta')}
      onClick={(e) => {
        e.target.value = '00.00';
        e.target.setSelectionRange(0, 0);
      }}
      style={{ width: '60px', marginRight: '4px' }}
    />
    <div style={{ fontSize: '16px', fontWeight: 'bold' }}></div>
  </div>
</td>
            <td>
              <input type="text" value={row.altn} onChange={(e) => handleChange(e, index, 'altn')} style={{width: '16px'}}/>
            </td>
            <td>
              <input type="text" value={row.distance} onChange={(e) => handleChange(e, index, 'distance')} style={{width: '16px'}}/>
            </td>
            <td>
            {index === rows.length - 1 ? (
                  <div  className='arrow' onClick={handleAddRow}>&#x2B;</div>
                ) : (
                  <div></div>
                )}
              </td>
              <td>
                {index === rows.length - 1 ? (
                  <div></div>
                ) : (
                  <div className='arrow' onClick={() => handleDeleteRow(index)}> &#x2212; </div>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
)}
export default Table;