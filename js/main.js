$(document).ready(function () {
    "use strict";
    //Variables
    var whichVideoIsNext = 2;
    function switchVideos(videoNumber) {
        var newVideoURL = "";
        $(".videoWrapper").fadeOut("fast");
        switch (videoNumber) {
            case 1:
                newVideoURL = "<iframe width=\"521\" height=\"293\" src=\"http://www.youtube.com/embed/eYhsyjCU5-s?rel=0&amp;modestbranding=1&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
                break;
            case 2:
                newVideoURL = "<iframe width=\"521\" height=\"293\" src=\"http://www.youtube.com/embed/eYhsyjCU5-s?rel=0&amp;modestbranding=1&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
                break;
            case 3:
                newVideoURL = "<iframe width=\"521\" height=\"293\" src=\"http://www.youtube.com/embed/eYhsyjCU5-s?rel=0&amp;modestbranding=1&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
                break;
            default:
                newVideoURL = "There was a problem switching videos.";
                break;
        }
          $(".videoWrapper").html(newVideoURL);
          $(".videoWrapper").fadeIn("fast");
    }
    $("[name=nextVideo]").click(function() {
        if (whichVideoIsNext > 3) {
            whichVideoIsNext = 1;
        } else if (whichVideoIsNext < 1) {
            whichVideoIsNext = 1;
        }
        switchVideos(whichVideoIsNext);
        whichVideoIsNext++;
    });
    $("[name=prevVideo]").click(function() {
        whichVideoIsNext -= 2;
        if (whichVideoIsNext > 3) {
            whichVideoIsNext = 3;
        } else if (whichVideoIsNext < 1) {
            whichVideoIsNext = 3;
        }
        switchVideos(whichVideoIsNext);
        whichVideoIsNext++;
    });
});