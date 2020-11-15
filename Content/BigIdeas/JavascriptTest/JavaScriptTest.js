$("#done").click(function () {
    var correctAnswers = 0;
    if ($('input[name="opt1radio"]:checked').hasClass("correct")) correctAnswers++;
    if ($('input[name="opt2radio"]:checked').hasClass("correct")) correctAnswers++;
    if ($('input[name="opt3radio"]:checked').hasClass("correct")) correctAnswers++;
    if ($('input[name="opt4radio"]:checked').hasClass("correct")) correctAnswers++;
    if ($('input[name="opt5radio"]:checked').hasClass("correct")) correctAnswers++;
    $("#percentCorrect").html((correctAnswers * 20) + "%");
    if (correctAnswers == 5) {
        $("#tryagain").css("display", "none");
        $("#tryAgainText").css("display", "none");
        $("#badgePic").css("display", "block");
        $("#badgeText").css("display", "block");
    } else {
        $("#tryagain").css("display", "block");
        $("#tryAgainText").css("display", "block");
        $("#badgePic").css("display", "none");
        $("#badgeText").css("display", "none");
    }
});

