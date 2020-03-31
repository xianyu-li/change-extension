$(document).ready(function() {

 $('head').append('<script src="https://code.jquery.com/jquery-1.10.2.js"></script>'
);
// header
$('.type-xl').mouseover(function(){   
    $('.type-xl').html('Nothing is going to change');
})
$('.type-xl').dblclick(function(){   
    $('.type-xl').remove()
})
$('.type-l').mouseover(function(){   
    $('.type-l').html('331,376,874 people are wasting their time. Just hide everything. Doubleclick.');
})
$('.type-l').dblclick(function(){   
    $('.type-l').remove()
})
$("[href='/start-a-petition?source_location=homepage_large_button']").html('Start nothing');

// topics
$("[href='/t/coronavirus-epidemic-en-us?source_location=homepage']").mouseover(function(){
    $("[href='/t/coronavirus-epidemic-en-us?source_location=homepage']").html('Same thing');
    $("[href='/t/shelter-in-place-en-us?source_location=homepage']").html('Same thing');
    $("[href='/t/coronavirus-workers-en-us?source_location=homepage']").html('Same thing');
    $("[href='/t/coronavirus-aid-en-us?source_location=homepage']").html('Same thing');
    $("[href='/t/first-responders?source_location=homepage']").html('Same thing');
    $("[href='/t/rent-and-mortgages-en-us?source_location=homepage']").html('Same thing');
    $("[href='/t/reschedule-graduation-en-us?source_location=homepage']").html('Same thing');
    $("[href='/t/pass-fail-grading-en-us-b6f51861-7105-4093-8e8b-bca1dda9c5f7?source_location=homepage']").html('Same thing');
    $("[href='/t/tuition-refunds-en-us?source_location=homepage']").html('Same thing');
    $("[href='/t/coronavirus-school-closures-en-us?source_location=homepage']").html('Same thing');
    $("[href='/t/health-care-3?source_location=homepage']").html('Same thing');
    $("[href='/t/insulin-prices-en-us?source_location=homepage']").html('Same thing');
})

$('#victories-carousel').remove()

// discover

$("h3").mouseover(function(){
    $("h3").html("What's not happening on Change.org");
})

$('[href="/p/ventilator-manufacturers-remove-barriers-to-fixing-ventilators?source_location=discover_feed"]').removeAttr("href")
$('[href="/p/give-2000-month-to-every-american-moneyforthepeople-covid19?source_location=discover_feed"]').removeAttr("href")
$('[href="/p/mayors-governors-legislators-save-america-s-restaurants?source_location=discover_feed"]').removeAttr("href")
$('[href="/p/we-demand-all-us-states-are-immediately-provided-functional-coronavirus-testing-kits?source_location=discover_feed"]').removeAttr("href")

$('h4').mouseover(function(){
    $('h4').html('Double click to make problems go away');
})
$('h4').dblclick(function(){
    $('h4').remove()
})
$('.hidden-xs').dblclick(function(){
    $('.hidden-xs').remove()
})

});



