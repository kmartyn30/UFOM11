{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },

  <><div class="jumbotron">
  <h1>Page Header: the Truth Is Out There</h1>
</div><div class="article">
    <h2L Article Title />: UFO Sightings: Fact or Fancy? Ufologist Weigh In</hr2><p>Articles Paragraph</p></>

  </div> class ="col-md-3">  <div Class= "Col - md - 9">
    
  </div>
  // import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {

}

function buildTable(data) {
  tbody.html("");
}

data.forEach((dataRow) => {

});
let row = tbody.append("tr");


Object.values(dataRow).forEach((val) => {
});

let cell = row.append("td");

cell.text(val);


data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });



{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },



function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

function handleClick() {
    let date = d3.select("#datetime").property("value");


    let filteredData = tableData;


    // if-statement syntax
if ( condition ) { code to execute }


// pseudocode practice
if (a date is entered) {
    Filter the default data to show only the date entered
};

if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
};

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

  d3.selectAll("#filter-btn").on("click", handleClick);

  buildTable(tableData);

  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);


  <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="static/css/style.css"></link>

    <body>
    <div class="wrapper">

    </div>
</body>


<nav class="navbar navbar-expand-lg">

</nav>End of code snippet


<nav class="navbar navbar-expand-lg">
<a class="navbar-brand" href="index.html">UFO Sightings</a>
</nav>

<div class="jumbotron">
<h1>The Truth Is Out There</h1>
</div>

<div class="col-md-4">

</div>
<div class="col-md-8">

</div>

<h3>UFO Sightings: Fact or Fancy? <small>Ufologists Weigh In</small></h3>

<div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <h3>UFO Sightings: Fact of Fancy? <small>Ufologists Weigh In</small></h3>
          </div>
          <div class="col-md-8">
            <p>
              Are we alone in the universe? For millennia, humans have turned to the sky to answer this question. Now, thanks to research generously funded by W. Avy, a UFO-enthusiast and amateur ufologist, we can supplement our sky-searching with data analysis.<br><br>"The release of this analysis is well-timed: It coincides with the celebration of World UFO Day, which is a moment for ufologists around the world to connect, relax, and sample a range of UFO-themed snacks," said Dr. Ursula F. Olivier, the world's preeminent expert on circular sightings. "Citizen-scientists can be especially helpful in both cataloguing sightings—which is hugely helpful for us in our search for aliens—and in helping us celebrate the work that has already been done, such as this data visualization project, which will help us raise awareness of the ubiquity of sightings!"<br><br>Not everyone is ready to celebrate, however. Local CEO and vocal anti-alien activist V. Isualize reached out to our reporters to go on record as firmly opposed to any attempts to provide access to this data. "If there are aliens, they certainly would like to be left alone," she stated, before directing us to the Leave Aliens Alone (LAA) community engagement initiative she founded and funds.<br><br>So what do YOU think? Are we alone in the universe? Are aliens trying to contact us, or do they want to be left alone? Dig through the data yourself, and let us know what you see.


            </p>
          </div>
        </div>
      </div>


      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">

          </div>
          <div class="col-md-9">

          </div>
        </div>
      </div>

      <form>
              <p>Filter Search</p>
            </form>

            <ul class="list-group">

</ul>

<li class="list-group-item">

</li>
<li class="list-group-item">

</li>End of code snippet

<label for="date">Enter Date</label>

<input type="text" placeholder="1/10/2010" id="datetime" />

<button id="filter-btn" type="button" class="btn btn-default">Filter Table</button>


<div class="col-md-9">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>


          {
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },

<th>Date</th>
<th>City</th>
<th>State</th>
<th>Country</th>
<th>Shape</th>
<th>Duration</th>
<th>Comments</th>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
  <script src="static/js/data.js"></script>
  <script src="static/js/app.js"></script>End of code snippet


  body {

color: #f7f7f7;
}

<body class="bg-dark"></body>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg"></nav>

<div class="jumbotron">
  <h1 class="display-4">The Truth is Out There</h1>
</div>

.jumbotron {
  background-image: url("../images/nasa.jpg");
  background-size: 100% 100%;
  text-align: center;



  <form>
 <p>Filter Search</p>
 <ul>
   <li>
     <label for="date">Enter Date</label>
     <input type="text" placeholder="1/10/2010" id="datetime" />
   </li>
   <li>
      <button id="filter-btn" type="button" class="btn btn-default">
        Filter Table
      </button>
   </li>
 </ul>
</form>End of code snippet

}