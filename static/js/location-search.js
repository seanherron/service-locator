$('#locator-form').submit(function(event) {
  $(this).after( "<div class='results'>loading...</div>" );
  $.getJSON( "http://locator.aids.gov/data?callback=?", {zip: "91381"} )
    .done(function( json ) {
      $.each(json.services, function(i, service){
        console.log(service.serviceType);
      });
      console.log( "JSON Data: " + json.services[1].title );
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
  event.preventDefault();
});