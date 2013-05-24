$(document).ready(function () {
    "use strict";
    //Variables
    var whichVideoIsNext = 2;
    function switchVideos(videoNumber) {
        var newVideoURL = "", newVideoTitle = "";
        $(".videoWrapper").fadeOut("fast");
        switch (videoNumber) {
            case 1:
                newVideoTitle = "&ldquo;Fishin&rsquo; Blues&rdquo; by Professors Cabas and Townsend";
                newVideoURL = "<iframe width=\"521\" height=\"293\" src=\"http://www.youtube.com/embed/MQKjobmu-0Y?rel=0&amp;modestbranding=1&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
                break;
            case 2:
                newVideoTitle = "General Sam Shares a Story";
                newVideoURL = "<iframe width=\"521\" height=\"293\" src=\"http://www.youtube.com/embed/_gRmUAqaCwk?rel=0&amp;modestbranding=1&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
                break;
            case 3:
                newVideoTitle = "Life on Campus: Spring Semester 2013";
                newVideoURL = "<iframe width=\"521\" height=\"293\" src=\"http://www.youtube.com/embed/XK93kVGLZ6Y?rel=0&amp;modestbranding=1&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
                break;
            case 4:
                newVideoTitle = "Dr. Pontuso supports 3,000 Strong Challenge";
                newVideoURL = "<iframe width=\"521\" height=\"293\" src=\"http://www.youtube.com/embed/eYhsyjCU5-s?rel=0&amp;modestbranding=1&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>";
                break;
            default:
                newVideoTitle = "";
                newVideoURL = "There was a problem switching videos.";
                break;
        }
        $("#videoTitle").html(newVideoTitle);
        $(".videoWrapper").html(newVideoURL);
        $(".videoWrapper").fadeIn("fast");
        return false;
    }
    $("[name=nextVideo]").click(function(e) {
        e.preventDefault();
        if (whichVideoIsNext > 4) {
            whichVideoIsNext = 1;
        } else if (whichVideoIsNext < 1) {
            whichVideoIsNext = 1;
        }
        switchVideos(whichVideoIsNext);
        whichVideoIsNext++;
    });
    $("[name=prevVideo]").click(function(e) {
        e.preventDefault();
        whichVideoIsNext -= 2;
        if (whichVideoIsNext > 4) {
            whichVideoIsNext = 4;
        } else if (whichVideoIsNext < 1) {
            whichVideoIsNext = 4;
        }
        switchVideos(whichVideoIsNext);
        whichVideoIsNext++;
    });
});
