
function sortByProperty(property) {
    'use strict';
    return function (a, b) {
        var sortStatus = 0;
        if (a[property] < b[property]) {
            sortStatus = 1;
        } else if (a[property] > b[property]) {
            sortStatus = -1;
        }
        return sortStatus;
    };
}
    
Handlebars.registerHelper("prettifyDate", function (timestamp) {
    var d = new Date(timestamp);
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    return curr_month + "/" + curr_date + "/" + curr_year;

});

var comments = [
    { name: "Vito Corleone", comment: "I'm gonna make him an offer he can't refuse.", timestamp: 69379200 },
    { name: "Terry Benedict", comment: "Congratulations... You're a dead man!", timestamp: 1007683200 },
    { name: "Jessica Rabbit", comment: "I'm not bad. I'm just drawn that way.", timestamp: 583113600 },
    { name: "Martin Brody", comment: "You're gonna need a bigger boat.", timestamp: 172281600 },
    { name: "Jack Dawson", comment: "I'm the king of the world!", timestamp: 882489600 },
    { name: "The Terminator", comment: "Hasta la vista, baby.", timestamp: 678326400 },
    { name: "The Joker", comment: "Why so serious..?", timestamp: 1215993600 }
];

comments = comments.sort(sortByProperty('timestamp'));
var source = $("#src").html();
var template = Handlebars.compile(source);
$("body").append(template({ objects: comments }));
