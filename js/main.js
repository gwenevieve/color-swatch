$(document).ready(function() {
  $("#first-box").click(function() {
    let firstValue = (Math.floor(Math.random() * 256));
    let secondValue = (Math.floor(Math.random() * 256));
    let thirdValue = (Math.floor(Math.random() * 256));
    let rand = 'rgb(' + firstValue + ',' + secondValue + ',' + thirdValue + ')';
    console.log(rand);
    $('.box-one').css('background', rand);
    $('.firstColor').html("This color is RGB " + firstValue + " " + secondValue + " " + thirdValue);
  })
  $("#second-box").click(function() {
    let firstValue = (Math.floor(Math.random() * 256));
    let secondValue = (Math.floor(Math.random() * 256));
    let thirdValue = (Math.floor(Math.random() * 256));
    let rand = 'rgb(' + firstValue + ',' + secondValue + ',' + thirdValue + ')';
    console.log(rand);
    $('.box-two').css('background', rand);
    $('.secondColor').html("This color is RGB " + firstValue + " " + secondValue + " " + thirdValue);
  })
  $("#third-box").click(function() {
    let firstValue = (Math.floor(Math.random() * 256));
    let secondValue = (Math.floor(Math.random() * 256));
    let thirdValue = (Math.floor(Math.random() * 256));
    let rand = 'rgb(' + firstValue + ',' + secondValue + ',' + thirdValue + ')';
    console.log(rand);
    $('.box-three').css('background', rand);
    $('.thirdColor').html("This color is RGB " + firstValue + " " + secondValue + " " + thirdValue);
  })

  //  $("button").click (function () {
  //     $('h1').css();
  //   })

});
