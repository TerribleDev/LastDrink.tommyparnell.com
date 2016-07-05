var calculate = function(){
        var start = moment("2016-06-30"),
        end = moment(),
    diff = end.diff(start),
    duration = moment.duration(diff);
    var answer = duration.years() + " Years " + duration.months() + " Months " +  duration.days() + " Days " + duration.hours() + " Hours " + duration.minutes() + " Minutes " + duration.seconds() + " Seconds";
    var elem = document.getElementById('answer');
    elem.innerHTML = answer;
};
  window.setInterval(function(){
  calculate();
}, 1000);
calculate();
