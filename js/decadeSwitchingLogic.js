function calculatePercentage(numberOfDonors, TotalNumberOfAlumni) {
	//create variable and set a value. This is to ensure we don't return nil.
	var percentOfAlumni = 0;
	if(numberOfDonors < 0) {
		return 0;
	} else if (TotalNumberOfAlumni <= 0) {
		return 0;
	}

	//Donors / Alumni gives us decimal percent, multiply by 100 for numerical percentage.
	percentOfAlumni = (100 * (numberOfDonors / TotalNumberOfAlumni));

	if (percentOfAlumni > 100) {
		percentOfAlumni = 100;
	} else if (percentOfAlumni < 0) {
		percentOfAlumni = 0;
	}

	return percentOfAlumni;
}

function showHiddenBars() {
	//show the bars we aren't using.
	$('#decade10').show("clip");
	$('#decade11').show("clip");
	$('#decade12').show("clip");
}
function hideHiddenBars() {
	//hide the bars we aren't using.
	$('#decade10').hide("clip");
	$('#decade11').hide("clip");
	$('#decade12').hide("clip");
}

function initilizeBars2000to2012(decade1Donors, decade1TotalDonors, decade2Donors, decade2TotalDonors, decade3Donors, decade3TotalDonors, decade4Donors, decade4TotalDonors, decade5Donors, decade5TotalDonors, decade6Donors, decade6TotalDonors, decade7Donors, decade7TotalDonors, decade8Donors, decade8TotalDonors, decade9Donors, decade9TotalDonors, decade10Donors, decade10TotalDonors, decade11Donors, decade11TotalDonors, decade12donors, decade12TotalDonors) {

      var decade1Percentage = 0, decade2Percentage = 0, decade3Percentage = 0, decade4Percentage = 0, decade5Percentage = 0, decade6Percentage = 0, decade7Percentage = 0, decade8Percentage = 0, decade9Percentage = 0, decade10Percentage = 0, decade11Percentage = 0, decade12Percentage = 0;

	decade1Percentage = calculatePercentage(decade1Donors, decade1TotalDonors);
	decade2Percentage = calculatePercentage(decade2Donors, decade2TotalDonors);
	decade3Percentage = calculatePercentage(decade3Donors, decade3TotalDonors);
	decade4Percentage = calculatePercentage(decade4Donors, decade4TotalDonors);
	decade5Percentage = calculatePercentage(decade5Donors, decade5TotalDonors);
	decade6Percentage = calculatePercentage(decade6Donors, decade6TotalDonors);
	decade7Percentage = calculatePercentage(decade7Donors, decade7TotalDonors);
	decade8Percentage = calculatePercentage(decade8Donors, decade8TotalDonors);
	decade9Percentage = calculatePercentage(decade9Donors, decade9TotalDonors);

      //update the progress bar with our calculated percentage
      $("#decade1").progressbar({
          value: decade1Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade2").progressbar({
      	value: decade2Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade3").progressbar({
      	value: decade3Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade4").progressbar({
      	value: decade4Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade5").progressbar({
      	value: decade5Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade6").progressbar({
      	value: decade6Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade7").progressbar({
      	value: decade7Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade8").progressbar({
      	value: decade8Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade9").progressbar({
      	value: decade9Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade10").progressbar({
      	value: decade10Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade11").progressbar({
      	value: decade11Percentage
      });
      //update the progress bar with our calculated percentage
      $("#decade12").progressbar({
      	value: decade12Percentage
      });
}
//Updates the 2010-Present Progress bars, hides the ones that aren't used.
function updateBars12Years(decade1Donors, decade1TotalDonors, decade2Donors, decade2TotalDonors, decade3Donors, decade3TotalDonors, decade4Donors, decade4TotalDonors, decade5Donors, decade5TotalDonors, decade6Donors, decade6TotalDonors, decade7Donors, decade7TotalDonors, decade8Donors, decade8TotalDonors, decade9Donors, decade9TotalDonors, decade10Donors, decade10TotalDonors, decade11Donors, decade11TotalDonors, decade12donors, decade12TotalDonors) {
	var decade1Percentage = 0, decade2Percentage = 0, decade3Percentage = 0, decade4Percentage = 0, decade5Percentage = 0, decade6Percentage = 0, decade7Percentage = 0, decade8Percentage = 0, decade9Percentage = 0, decade10Percentage = 0, decade11Percentage = 0, decade12Percentage = 0;

	//Calculate the percentages
	decade1Percentage = calculatePercentage(decade1Donors, decade1TotalDonors);
	decade2Percentage = calculatePercentage(decade2Donors, decade2TotalDonors);
	decade3Percentage = calculatePercentage(decade3Donors, decade3TotalDonors);
	decade4Percentage = calculatePercentage(decade4Donors, decade4TotalDonors);
	decade5Percentage = calculatePercentage(decade5Donors, decade5TotalDonors);
	decade6Percentage = calculatePercentage(decade6Donors, decade6TotalDonors);
	decade7Percentage = calculatePercentage(decade7Donors, decade7TotalDonors);
	decade8Percentage = calculatePercentage(decade8Donors, decade8TotalDonors);
	decade9Percentage = calculatePercentage(decade9Donors, decade9TotalDonors);
	decade10Percentage = calculatePercentage(decade10Donors, decade10TotalDonors);
	decade11Percentage = calculatePercentage(decade11Donors, decade11TotalDonors);
	decade12Percentage = calculatePercentage(decade12Donors, decade12TotalDonors);

	//Hide bars we aren't using
	showHiddenBars();

	//Update existing progress bars.
     	$('#decade1').progressbar("value", decade1Percentage);
	$('#decade2').progressbar("value", decade2Percentage);
	$('#decade3').progressbar("value", decade3Percentage);
	$('#decade4').progressbar("value", decade4Percentage);
	$('#decade5').progressbar("value", decade5Percentage);
	$('#decade6').progressbar("value", decade6Percentage);
	$('#decade7').progressbar("value", decade7Percentage);
	$('#decade8').progressbar("value", decade8Percentage);
	$('#decade9').progressbar("value", decade9Percentage);
	$('#decade10').progressbar("value", decade10Percentage);
	$('#decade11').progressbar("value", decade11Percentage);
	$('#decade12').progressbar("value", decade12Percentage);
}

//Updates the 2010-Present Progress bars, hides the ones that aren't used.
function updateBars9Years(decade1Donors, decade1TotalDonors, decade2Donors, decade2TotalDonors, decade3Donors, decade3TotalDonors, decade4Donors, decade4TotalDonors, decade5Donors, decade5TotalDonors, decade6Donors, decade6TotalDonors, decade7Donors, decade7TotalDonors, decade8Donors, decade8TotalDonors, decade9Donors, decade9TotalDonors) {
	var decade1Percentage = 0, decade2Percentage = 0, decade3Percentage = 0, decade4Percentage = 0, decade5Percentage = 0, decade6Percentage = 0, decade7Percentage = 0, decade8Percentage = 0, decade9Percentage = 0;

	//Calculate the percentages
	decade1Percentage = calculatePercentage(decade1Donors, decade1TotalDonors);
	decade2Percentage = calculatePercentage(decade2Donors, decade2TotalDonors);
	decade3Percentage = calculatePercentage(decade3Donors, decade3TotalDonors);
	decade4Percentage = calculatePercentage(decade4Donors, decade4TotalDonors);
	decade5Percentage = calculatePercentage(decade5Donors, decade5TotalDonors);
	decade6Percentage = calculatePercentage(decade6Donors, decade6TotalDonors);
	decade7Percentage = calculatePercentage(decade7Donors, decade7TotalDonors);
	decade8Percentage = calculatePercentage(decade8Donors, decade8TotalDonors);
	decade9Percentage = calculatePercentage(decade9Donors, decade9TotalDonors);

	//Hide bars we aren't using
	hideHiddenBars();

	//Update existing progress bars.
     	$('#decade1').progressbar("value", decade1Percentage);
	$('#decade2').progressbar("value", decade2Percentage);
	$('#decade3').progressbar("value", decade3Percentage);
	$('#decade4').progressbar("value", decade4Percentage);
	$('#decade5').progressbar("value", decade5Percentage);
	$('#decade6').progressbar("value", decade6Percentage);
	$('#decade7').progressbar("value", decade7Percentage);
	$('#decade8').progressbar("value", decade8Percentage);
	$('#decade9').progressbar("value", decade9Percentage);
}