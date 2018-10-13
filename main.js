// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Pokemon Name');
  data.addColumn('number', 'Number Hatched');
  data.addRows([
    ['Miaouss (Alola)', 6],
    ['Racaillou (Alola)', 5],
    ['Sabelette (Alola)', 5],
    ['Taupiqueur (Alola)', 4],
    ['Tadmorv (Alola)', 3],
    ['Kangourex (Régionaux)', 3],
    ['Goupix (Alola)', 2],
    ['Tauros (Régionaux)', 2],
    ['Canarticho (Régionaux)', 2],
    ['M.Mime (Régionaux)', 1],
    ['Saquedeneu', 1]
  ]);

  // Set chart options
  var options = {
                  'title':'Événements d\'Œuf de 7km Régionaux',
                  'fontName': 'Titillium Web'
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, options);
}

// Dynamically adjust chart
$(window).resize(function(){
  drawChart();
});
