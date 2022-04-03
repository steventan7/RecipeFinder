import "./styles.css";
import "./background.css";

document.getElementById("app").innerHTML = `
<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<h1>Recipe Finder </h1>
<div> 
<!--<a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.-->
</div>
<p style="text-align:center;">Type in your ingredients!</p>
<!-- search bar code-->

<div class = "center">
<center><form id="form" onsubmit="search('query')"> 
  <input type="search" class = "butt" id="query" name="q" placeholder="Search..." required>
  <button class="butt" type="submit" form="form" value="Submit">Search</button>
</form></center>
</div>
<br>
<div class="clearfix">
  <a href="calendar.html"><img class="img2" src="src/mittens.jpeg" alt="Pineapple" width="170" height="150"></a>
</div>

`;
