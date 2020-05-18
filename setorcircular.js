class SetorCircular {

    /** Obter posições que formam um setor circular
     * Parâmetros:
     * Latitude: Latitude de partida do setor;
     * Longitude: longitude de partida do setor;
     * Azimute: A direção que o setor irá apontar;
     * Angulo: Tamanho do ângulo que o setor irá formar;
     * Raio: Qual distância o setor irá atingir.
     * Return:
     * Retornará um array composto por latlng's 
     */
    ObterPosicoes = (latitude, longitude, azimute, angulo, raio) =>{

        let points = [];

        var calcRaio = raio / 1000;
        var latlng = new google.maps.LatLng(latitude,longitude);
        var latlng1 = new google.maps.LatLng((latitude + 1), longitude);
        var latlng2 = new google.maps.LatLng(latitude, (longitude + 1));
       
        var latConv = google.maps.geometry.spherical.computeDistanceBetween(latlng, latlng1) / 1000;
        var lngConv = google.maps.geometry.spherical.computeDistanceBetween(latlng, latlng2) / 1000;

        points.push(latlng);
        for (var i = (azimute - angulo / 2) ; i <= (azimute + angulo / 2) ; i += 2) {
            var point = new google.maps.LatLng(latlng.lat() + (calcRaio / latConv * Math.cos(i * Math.PI / 180)), latlng.lng() + (calcRaio / lngConv * Math.sin(i * Math.PI / 180)));
            points.push(point);
        }
            return points;
    }

  }