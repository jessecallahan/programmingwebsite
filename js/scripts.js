$(document).ready(function() {
  $("button").click(function(event) {

  event.preventDefault();
var instrument = $("input:radio[name=instrumentname]:checked").val();
var coffee = $("input:radio[name=coffeename]:checked").val();
var demeanor = $("input:radio[name=demeanorname]:checked").val();
var instrument = parseInt(instrument)
var coffee = parseInt(coffee)
var demeanor = parseInt(demeanor)


// my reference
// $(".wrestler").text(wrestler)
// $(".coffee").text(coffee)
if (instrument === 1 && coffee === 1 && demeanor === 1) {
  $('#answer1').show();
}else  {
  $('#answer2').show();
  }



});
});
