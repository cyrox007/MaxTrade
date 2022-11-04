maxtrade = {};
maxtrade.main = {
    data: {
        mapContainer: 'map',
        mapCoordinate: [55.834251, 37.623086],
        disableOptions: [
            'default', 
            'drag', 
            'scrollZoom', 
            'dblClickZoom', 
            'multiTouch',
            'rightMouseButtonMagnifier',
            'leftMouseButtonMagnifier',
            'ruler',
            'routeEditor'
        ]
    },
    handler: {
        init: () => {
            // Создание карты.
            var myMap = new ymaps.Map(
                maxtrade.main.data.mapContainer, {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: maxtrade.main.data.mapCoordinate,
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 15
            });
            myMap.behaviors.disable(maxtrade.main.data.disableOptions);
        }
    },
    methods: {
        // здесь будут методы, управляющие картой
    }
};

(function () {
    ymaps.ready(maxtrade.main.handler.init);
}());