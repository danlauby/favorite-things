// var toHTML = function(name,favColor,favNum,favPerson) {
//   var html;
//   html += "<h2>Hi, <span id='personName'>";
//   html += name;
//   html += " </span>here is a list of your favorite things!</h2>";
//   html += "<ul>";
//   html += "<li>Color: ";
//   html += favColor;
//   html += "</li>";
//   html += "<li>Number: ";
//   html += favNum;
//   html += "</li>";
//   html += "<li>Person: ";
//   html += favPerson;
//   html += "</li></ul>";
//   return html;
// }
//
// $(function() {
//     $('form#survey').submit(function(e) {
//       var name = $('input[name="name"]').val();
//       var favColor = $('input[name="color"]').val();
//       var favNum = parseInt($('input[name="number"]').val());
//       var favPerson = $('input[name="person"]').val();
//       var userInput = [];
//       userInput.push(name, favColor, favNum, favPerson);
//
//
//       if (!name && !favColor && !favNum && !favPerson) {
//       alert("Please complete the survey");
//     } else {
//       $('.show').empty().append(toHTML(name,favColor,favNum,favPerson));
//     }
//     e.preventDefault();
//     });
//   });

$(function() {
  $('form#survey').submit(function(e) {
    var name = $('input[name="name"]').val();
    var favColor = $('input[name="color"]').val();
    var favNum = parseInt($('input[name="number"]').val());
    var favPerson = $('input[name="person"]').val();
    var userInputs = [];
    userInputs.push(name, favColor, favNum, favPerson);
    var threeElements = [];
    threeElements.push(userInputs[1], userInputs[0], userInputs[2]);

    var html;
    html += "<h2>Hi, <span id='personName'>";
    html += name;
    html += " </span>here is a list of your favorite things!</h2>";
    html += "<ul>";
    $.each(threeElements, function(index, userInput) {
      html += "<li>" + userInput + "</li>";
    });
    html += "</ul>";
    $('.show').empty().append(html);
    e.preventDefault();
  });
});
