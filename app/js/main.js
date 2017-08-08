$(function(){
	console.log('Ready');
    // Load exchange rates data via AJAX:

   setInterval(function () {
       $.ajax({
           url: "https://api.cryptonator.com/api/ticker/btc-eur",
           jsonp: "callback",
           dataType: "json",

           // Work with the response
           success: function( response ) {
               var date = new Date(response.timestamp*1000);
               var hours = date.getHours();
               var minutes = "0" + date.getMinutes();
               var seconds = "0" + date.getSeconds();

               var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
               $("#price").html(Math.round(response.ticker.price)+"€");
               $("#last_refresh").html(formattedTime);
           }
       });
   }, 5000);
});