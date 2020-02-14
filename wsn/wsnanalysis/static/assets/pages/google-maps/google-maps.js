  'use strict';
  $(document).ready(function() {
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: { lat: 21.2334329, lng: 72.866472 },
          mapTypeId: 'satellite'
      });

      // Create an array of alphabetical characters used to label the markers.
      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      // Add some markers to the map.
      // Note: The code uses the JavaScript Array.prototype.map() method to
      // create an array of markers based on a given "locations" array.
      // The map() method here has nothing To Do with the Google Maps API.
      var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
              position: location,
              label: labels[i % labels.length]
          });
      });

      // Add a marker clusterer to manage the markers.
      var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
      map.addListener('tilesloaded', function(e) {
                $('.dismissButton').click();
              });
  });
  setInterval(function(){
    $("*").each(function() {
        if ($(this).css("zIndex") == 100) {
          $(this).css("zIndex", "-100");
          //alert("test");
        }
      })}, 10);
  var locations = [
      { lat: 21.1702401, lng: 72.8310607 },
      { lat: 21.128143, lng: 79.125618 },
      { lat: 22.451530, lng: 88.399818 },
      { lat: 20.264774, lng: 73.508148 },
      { lat: 23.080135, lng: 72.572174 },
      { lat: 22.835373, lng: 88.360992 },
      { lat: 29.280394, lng: 78.831718 },
      { lat: 9.907271, lng: 78.094429 },
      { lat: 26.903660, lng: 78.514259 },
      { lat: 19.062054, lng: 72.883438 },
      { lat: 11.235264, lng: 78.858414 },
      { lat: 23.302189, lng: 81.356804 },
      { lat: 12.695032, lng: 78.621887 },
      { lat: 22.511976, lng: 88.250992 },
      { lat: 23.125587, lng: 88.546867 },
      { lat: 21.164993, lng: 81.775307 },
      { lat: 21.779188, lng: 87.744629 },
      { lat: 25.416676, lng: 86.129379 },
      { lat: 15.478569, lng: 78.483093 },
      { lat: 13.340881, lng: 74.742142 },
      { lat: 22.164993, lng: 81.775307 },
      { lat: 23.779188, lng: 87.744629 },
      { lat: 24.416676, lng: 86.129379 },
      { lat: 16.478569, lng: 78.483093 },
      { lat: 14.340881, lng: 74.742142 },
      { lat: 18.143908, lng: 79.623924 }

  ]
