document.addEventListener("DOMContentLoaded", function () {
    ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.760339, 37.614699],
        zoom: 15,
        controls: ["geolocationControl", "zoomControl"],
      },
      {
        suppressMapOpenBlock: true,
      }
    );

    var myPlacemark = new ymaps.Placemark(
      [55.760339, 37.614699],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/icon/map-icon.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-5, -10],
      }
    );
    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects.add(myPlacemark);
  }
});
