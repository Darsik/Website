$(document).ready(function() {

    $(this).scrollTop(0);

    $(".intro").click(function() {
      $('html, body').animate({
        scrollTop: $(".introduction").offset().top
        }, 1000);
      console.log("true");
    });
    $(".serv").click(function() {
      $('html, body').animate({
        scrollTop: $(".service").offset().top
        }, 1000);
    });
    $(".galler").click(function() {
      $('html, body').animate({
        scrollTop: $(".gallery").offset().top
        }, 1000);
    });
    $(".conta").click(function() {
      $('html, body').animate({
        scrollTop: $(".contact").offset().top
        }, 1000);
    });
    
    $(".dropMenu").click(function() {
      var winWid = $(window).width() + 17;
      if(winWid < 991)
        $(".hiddenMenu").slideToggle("fast");
      else
        return false;
    });


    

    $(window).resize(function() {
      var winWid = $(window).width() + 17;
      if(winWid >= 991) {
        $(".hiddenMenu").attr("style", false);
      } 
        if(winWid < 500)
        {
          if ($(this).scrollTop() > 140) {
            $(".hiddenMenu").removeClass("hid");
            $(".company").removeClass("comp1");
            $(".company").removeClass("comp2");
            $(".company").removeClass("comp3");
            $(".company").removeClass("comp4");
            $(".company").removeClass("comp5");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp");
            $(".backThreeLine").addClass("fixedLine");
            $(".backThreeLine").addClass("fixMenu");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".company").addClass("fixedColor");
          } 
          else 
          {
            $(".hiddenMenu").removeClass("hid");
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp");
            $(".backThreeLine").removeClass("fixedLine");
            $(".backThreeLine").removeClass("fixMenu");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 500 && winWid < 768)
        {
          if($(this).scrollTop() > 190) {
            $(".hiddenMenu").removeClass("hid");
            $(".company").removeClass("comp");
            $(".company").removeClass("comp2");
            $(".company").removeClass("comp3");
            $(".company").removeClass("comp4");
            $(".company").removeClass("comp5");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp1");
            $(".backThreeLine").addClass("fixedLine");
            $(".backThreeLine").addClass("fixMenu");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".hiddenMenu").removeClass("hid");
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp1");
            $(".backThreeLine").removeClass("fixedLine");
            $(".backThreeLine").removeClass("fixMenu");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 768 && winWid < 991)
        {
          if($(this).scrollTop() > 300) {
            $(".hiddenMenu").removeClass("hid");
            $(".company").removeClass("comp");
            $(".company").removeClass("comp1");
            $(".company").removeClass("comp3");
            $(".company").removeClass("comp4");
            $(".company").removeClass("comp5");
            $(".hiddenMenu").removeClass("fixMenuBack");          
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp2");
            $(".backThreeLine").addClass("fixedLine");
            $(".backThreeLine").addClass("fixMenu");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".hiddenMenu").removeClass("hid");
            $(".company").removeClass("comp1");
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp2");
            $(".backThreeLine").removeClass("fixedLine");
            $(".backThreeLine").removeClass("fixMenu");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 991 && winWid < 1200)
        {
          if($(this).scrollTop() > 360)
          {
            $(".company").removeClass("comp");
            $(".company").removeClass("comp1");
            $(".company").removeClass("comp2");
            $(".company").removeClass("comp4");
            $(".company").removeClass("comp5");
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp3");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".hiddenMenu").addClass("fixMenuBack");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".hiddenMenu").addClass("hid");
            $(".company").removeClass("comp1");
            $(".company").removeClass("comp2");
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp3");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 1200 && winWid < 1600)
        {
          if($(this).scrollTop() > 440)
          {
            $(".company").removeClass("comp");
            $(".company").removeClass("comp1");
            $(".company").removeClass("comp2");
            $(".company").removeClass("comp3");
            $(".company").removeClass("comp5");
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp4");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".hiddenMenu").addClass("fixMenuBack");
            $(".hiddenMenu").addClass("hid");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".company").removeClass("comp1");
            $(".company").removeClass("comp2");
            $(".company").removeClass("comp3");
            $(".company").removeClass("comp5");
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp4");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 1600)
        {
          if($(this).scrollTop() > 720)
          {
            $(".company").removeClass("comp");
            $(".company").removeClass("comp1");
            $(".company").removeClass("comp2");
            $(".company").removeClass("comp3");
            $(".company").removeClass("comp4");
            $(".company").removeClass("comp5");
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp5");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".hiddenMenu").addClass("fixMenuBack");
            $(".hiddenMenu").addClass("hid");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".company").removeClass("comp4");
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp5");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").removeClass("fixedColor");
          }
        }

    });

    $(window).scroll(function () {
        var winWid = $(window).width() + 17;
        if(winWid < 500)
        {
          if ($(this).scrollTop() > 140) {
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp");
            $(".backThreeLine").addClass("fixedLine");
            $(".backThreeLine").addClass("fixMenu");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".company").addClass("fixedColor");
          } 
          else 
          {
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp");
            $(".backThreeLine").removeClass("fixedLine");
            $(".backThreeLine").removeClass("fixMenu");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid > 500 && winWid < 768)
        {
          if($(this).scrollTop() > 190) {
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp1");
            $(".backThreeLine").addClass("fixedLine");
            $(".backThreeLine").addClass("fixMenu");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp1");
            $(".backThreeLine").removeClass("fixedLine");
            $(".backThreeLine").removeClass("fixMenu");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 768 && winWid < 991)
        {
          if($(this).scrollTop() > 300) {
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp2");
            $(".backThreeLine").addClass("fixedLine");
            $(".backThreeLine").addClass("fixMenu");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp2");
            $(".backThreeLine").removeClass("fixedLine");
            $(".backThreeLine").removeClass("fixMenu");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 991 && winWid < 1200)
        {
          if($(this).scrollTop() > 360)
          {
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp3");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".hiddenMenu").addClass("fixMenuBack");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp3");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 1200 && winWid < 1600)
        {
          if($(this).scrollTop() > 440)
          {
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp4");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".hiddenMenu").addClass("fixMenuBack");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp4");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").removeClass("fixedColor");
          }
        }
        if(winWid >= 1600)
        {
          if($(this).scrollTop() > 720)
          {
            $(".company").addClass("fixedLine");
            $(".company").addClass("comp5");
            $(".hiddenMenu").addClass("fixedLine");
            $(".hiddenMenu").addClass("fixHidden");
            $(".hiddenMenu").addClass("fixMenuBack");
            $(".company").addClass("fixedColor");
          }
          else
          {
            $(".company").removeClass("fixedLine");
            $(".company").removeClass("comp5");
            $(".hiddenMenu").removeClass("fixedLine");
            $(".hiddenMenu").removeClass("fixHidden");
            $(".hiddenMenu").removeClass("fixMenuBack");
            $(".company").removeClass("fixedColor");
          }
        }
      });

 var adresa = "F.L. Čelakovského 5, Jablonec nad Nisou";
 var parametry = {address : adresa};
 var geocode = "https://maps.googleapis.com/maps/api/geocode/json";


 $.getJSON(geocode, parametry, function (json)    
            {                  
              if (json.status == "OK")
              {
                var latitude = json.results[0].geometry.location.lat;
                var longitude = json.results[0].geometry.location.lng;

                var pozice = new google.maps.LatLng(latitude, longitude);
                var baseOption = {zoom: 14, center: pozice, mapTypeId: google.maps.MapTypeId.ROADMAP}; 
                map = new google.maps.Map($(".map")[0],baseOption);

                var marker = new google.maps.Marker({
                  position: pozice,
                  title: adresa
                });
                marker.setMap(map);
              } 
           });
});