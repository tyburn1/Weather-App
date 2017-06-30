var API_KEY = "f8d110c40a08a1078b2eb6e527471e90";

$(function() {
  var show;
  var tempToggle=true;
  $.getJSON("https://ipinfo.io", function(data) {
    console.log(data);
    show = data.loc.split(",");
    console.log(show);

    $.getJSON(
      "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=" +
        show[0] +
        "&lon=" +
        show[1] +
        "&APPID=" +
        API_KEY,
      function(wm) {
        console.log("Did it work ", wm);
        var currentLoc = wm.name;
        var currentWeather = wm.weather[0].description;
        var currentTemp = wm.main.temp;
        var avHigh = wm.main.temp_max;
        var avLow = wm.main.temp_min;
        var cel = Math.round(currentTemp - 32 * (9/5));  
        var fah = Math.round(currentTemp * (5/9) + 35); 
          
        $("#location").html(currentLoc);
        $("#currentTemp").html(currentTemp + " &#8457;");
        $("#avgHigh").html("Highs of: " + avHigh + " &#8457;");
        $("#avgLow").html("Lows of: " + avLow + " &#8457;");
        
        $("#currentTemp").click(function(){
            if(tempToggle===false){
               $("#currentTemp").html("Currently: "+cel + "&#8451;");
                tempToggle=true;
            }else{
                $("#currentTemp").html("Currently: "+fah + " &#8457;");
                tempToggle=false;
            };
        });
        
        $("#avgHigh").click(function(){
            if(tempToggle===false){
               $("#avgHigh").html("Highs of: " + cel + "&#8451;");
                tempToggle=true;
            }else{
                $("#avgHigh").html("Highs of: " + fah + " &#8457;");
                tempToggle=false;
            };
        }); 
          
        $("#avgLow").click(function(){
            if(tempToggle===false){
               $("#avgLow").html("Lows of: " + cel + "&#8451;");
                tempToggle=true;
            }else{
                $("#avgLow").html("Lows of: " + fah + " &#8457;");
                tempToggle=false;
            };
        });
       
        if(currentTemp>=75){
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1489914099268-1dad649f76bf?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs)');
        }else if(currentTemp>=60){
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1437149310981-0f2690a6069d?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1199&amp;h=799&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg=)');
        }else if(currentTemp>=40){
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1445264618000-f1e069c5920f?dpr=1&auto=compress,format&fit=crop&w=1199&h=799)');     
        }else if(currentTemp>=29){
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1484603738253-e5b73679e8cb?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1199&amp;h=749&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg=)');
        }else if(currentTemp>=10){
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1482594254723-cc424817c99a?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1199&amp;h=809&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg=)');
        }else if(currentTemp<=9){
            $('body').css('background-image', 'url(https://images.unsplash.com/photo-1483333312588-7f53835a19dd?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1199&amp;h=700&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg=)');
        };
        
      });
    
  });
});