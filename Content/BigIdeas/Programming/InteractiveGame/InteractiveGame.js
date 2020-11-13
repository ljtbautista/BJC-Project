var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow_night");
editor.session.setMode("ace/mode/css");

var EditSession = require("ace/edit_session").EditSession;
var rotateLevel = new EditSession(["", "/*Make Kevin and his friends rotate", "90 degrees when hovered*/", "#cloud {", "\twidth: 200px;", "\ttransition: all 0.4s ease;",
    "}", "/*add code below*/", "#cloud:hover {", "", "}"]);

$("#run").click(function () {
    //level 1
    if (editor.getSession() != rotateLevel) {
        //if answer isnt undefined, then the correct answer is in the editor
        var answer = editor.find('transform: scale(1.5)');
        if (answer != undefined) {
            $("#cloud1").hover(function () {
                $(this).toggleClass("hover");
            });
            //show success alert
            $("#tryagain").hide();
            $("#woohoo").show();
            $("#next").show();
        }
        else {
            $("#tryagain").show();
        }
    }
    //level 2
    else {
        var answer = editor.find('transform: rotate(90deg)');
        if (answer != undefined) {
            $("#cloud2").hover(function () {
                $(this).toggleClass("rotate");
            });
            //show success alert
            $("#tryagain").hide();
            $("#woohoo").show();
            $("#done").show();
        }
        else {
            $("#tryagain").show();
        }
    }
});

$("#next").click(function () {
    //switch the clouds
    $("#cloud1").hide();
    $("#cloud2").show();
    //change session instructions
    editor.setSession(rotateLevel);
    editor.session.setMode("ace/mode/css");
    //hide success alert
    $("#woohoo").hide();
    $("#tryagain").hide();
    $("#next").hide();

});

$("#done").click(function () {
    confetti.start(1500);
});