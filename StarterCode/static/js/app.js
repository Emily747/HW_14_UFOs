// from data.js
var tableData = data;


// get reference to table body
var tbody = d3.select("tbody");

// loop through data
tableData.forEach(function(sighting)
{
    // append a new row for each sighting
    var row = tbody.append("tr");

    // loop through each entry in each object in the array and log each key and value to the console
    Object.entries(sighting).forEach(function([key, value]) 
    {
        // append new cell into row for each entry in the object
        var cell = row.append("td");
        
        // enter the value in the cell
        cell.text(value);

    });
})

// Select the filter table button
var filterBtn = d3.select("#filter-btn");

filterBtn.on("click", function() 
{
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");

  // Get the value property of the input element
  var inputDateValue = inputDate.property("value");

  var filteredData = tableData.filter(sighting => sighting.datetime === inputDateValue);

   tbody.html("");
  filteredData.forEach(function(sighting)
    {
        // append a new row for sighting
        var row = tbody.append("tr");

        // loop through each entry in each object in the array
        Object.entries(sighting).forEach(function([key, value]) 
        {
            // append cell into row for each entry in the object
            var cell = row.append("td");
            
            // enter the value in the cell
            cell.text(value);  
        });
  });
})
