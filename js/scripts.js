$(document).ready(function() {
  $("button").click(function(event) {

  event.preventDefault();
var instrument = parseInt($("input:radio[name=instrumentname]:checked").val());
var coffee = $("input:radio[name=coffeename]:checked").val();
var demeanor = $("input:radio[name=demeanorname]:checked").val();
var trip = $("input:radio[name=tripname]:checked").val();
var coffee = parseInt(coffee)
var demeanor = parseInt(demeanor)
var trip = parseInt(trip)


// my reference
// $(".instrument").text(istrument)
// $(".coffee").text(coffee)
if (trip === 3) {
  $('#answer3').show();
  $('#answer1').hide();
  $('#answer2').hide();
} else if (instrument === 1 && coffee === 1 && demeanor === 1) {
  $('#answer1').show();
  $('#answer2').hide();
  $('#answer3').hide();
} else {
  $("#answer2").show();
  $('#answer1').hide();
  $('#answer3').hide();
}



});
});
