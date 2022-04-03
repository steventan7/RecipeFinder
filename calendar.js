import "./calendar.css";

document.getElementById("app").innerHTML = `
<table  align="center" 
    cellspacing="21" cellpadding="21">
    <thead>
        <tr class = "weekdays">
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
    </thead>
      
  <tbody id = "col">
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
  </tbody>
  </table>

`;
