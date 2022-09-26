(function () {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // set countdown time
    var countDownDate = new Date("Aug 18, 2023 00:30:00").getTime()

    var countdown = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the time between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (day));
        var hours = Math.floor((distance % (day)) / (hour));
        var minutes = Math.floor((distance % (hour)) / (minute));
        var seconds = Math.floor((distance % (minute)) / second);

        // Display the result in the element with id's
        document.getElementById("days").innerText  = days
        document.getElementById("hours").innerText  = hours
        document.getElementById("minutes").innerText  = minutes
        document.getElementById("seconds").innerText  = seconds

        if (distance < 0) {
            document.getElementById("heading").innerHTML = "It's my birthday";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("emoji").style.display = "block";
            clearInterval(countdown);
        }

    }, 1000)
}());


        
