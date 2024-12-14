/*
JavaScript for the Progress Bar page.
*/


console.log("Let's begin.");

/* Main Progress Bar Handling class */
var ProgressBar = {

    width: 30,  // Keeps a record of the progress bar's width
    speed: "O",  // Keeps a record of the progress bar's speed

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

    setWidth: function(width) {
      // Draw the progress bar
      $( "#progress-bar" ).progressbar({
          value: width
      });
    },

    restartBar: function() {
      // Draw the progress bar
      $( "#progress-bar" ).progressbar({
          value: 0
      });
    },

    setBar30Percent: function() {
      // Draw the progress bar
      $( "#progress-bar" ).progressbar({
          value: this.width
      });
    },

    setBar70Percent: function() {
      // Draw the progress bar
      $( "#progress-bar" ).progressbar({
          value: 70
      });
    },

    setBar100Percent: function() {
      // Draw the progress bar
      $( "#progress-bar" ).progressbar({
          value: 100
      });
    },

    increaseWidth: function() {
      if (this.width < 100) {
          this.width = this.width + 10;
      }
    },
};


$(document).ready(function() {
    // This code runs only after the page has finished loading.

    console.log("Let's begin now.");

    barWidth = 0;

    ProgressBar.restartBar();

    // $( "button" ).click(function() {
    $( "#start" ).click(function() {
        barWidth = barWidth + 10;
        console.log( "barWidth: " + barWidth);
        ProgressBar.setWidth(barWidth);
        $("#progress-percentage").html(barWidth);
        $("#start").html("Continue");
    });

    $( "#reset" ).click(function() {
        barWidth = 0;
        ProgressBar.restartBar();
        $("#progress-percentage").html("0");
        $("#start").html("Start");
    });

    // Restarts the progress bar after 1,000 milliseconds
    setTimeout(
        function(){
            // Start a progress bar
            ProgressBar.setBar30Percent();
            $("#progress-percentage").html("30");
        },
        1000
    );

    // Restarts the progress bar after 2,000 milliseconds
    setTimeout(
        function(){
            // Start a progress bar
            ProgressBar.setBar70Percent();
            $("#progress-percentage").html("70");
        },
        2000
    );

    // Restarts the progress bar after 3,000 milliseconds
    setTimeout(
        function(){
            // Start a progress bar
            ProgressBar.setBar100Percent();
            $("#progress-percentage").html("100");
        },
        3000
    );

});

