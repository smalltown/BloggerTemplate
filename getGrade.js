<!-- Generate food grade through chart.js -->
<script language="javascript">
//<![CDATA[

function getFoodGrade()
{
	var result = new Object();
	
	result.delicious = document.getElementById('foodChart').rows[1].cells[2].innerHTML;
	result.clean = document.getElementById('foodChart').rows[2].cells[2].innerHTML;
	result.service = document.getElementById('foodChart').rows[3].cells[2].innerHTML;
	result.atmosphere = document.getElementById('foodChart').rows[4].cells[2].innerHTML;
	result.average = document.getElementById('foodChart').rows[1].cells[3].innerHTML;
	
	return result;
}

function generateChart()
{
	var grade = getFoodGrade();
	
	var barChartData = {
	labels : ["美味","衛生","服務","氣氛","平均"],
	datasets : [
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					data : [grade.delicious,grade.clean,grade.service,grade.atmosphere,grade.average]
				}
		]
	}
	
	var myLine = new Chart(document.getElementById("myChart").getContext("2d")).Bar(barChartData);
	
}



//]]>
</script>


<script language="javascript">generateChart();</script>