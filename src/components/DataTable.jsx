import React from "react";

function DataTable() {
  return (
    <div>
      <table style={{ width: "100%" ,
         border: "1px solid black" ,
          textAlign: "center" ,
           fontSize: "28px"
           
           }}>
        <thead>
          <tr style={{background: "grey"}}>
            <th colSpan={2}>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody style={{background: "green"}}>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
