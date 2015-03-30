var cbpAnimatedHeader = (function() {

    var header = $('#header'),
        headerNavAs = $("#header .nav-item"),
        changeHeaderOn = 0,
        headerMaxHeight = 200,
        headerMinHeight = 72;

    function init() {
        scrollPage();
        $( window ).scroll( function( event ) {
            scrollPage();
        });
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn + headerMaxHeight - headerMinHeight ) {
            header.css("height", headerMinHeight + "px");
        } else if ( sy >= changeHeaderOn ) {
            header.css("height", changeHeaderOn + headerMaxHeight - sy + "px");
        } else {
            header.css("height", headerMaxHeight + "px");
        }
    }

    function scrollY() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    //init();
})();

(function(exports){         
    var map = new AMap.Map('mapContainer', {
        //resizeEnable: true,
        //rotateEnable: true,
        dragEnable: true,
        zoomEnable: false,
        scrollWheel: false,
        //设置可缩放的级别
        zooms: [14,17],
        //传入2D视图，设置中心点和缩放级别
        view: new AMap.View2D({
            center: new AMap.LngLat(113.944518, 22.540636),
            zoom: 17
        })
    });

    var marker = new AMap.Marker({                 
        map: map, //将点添加到地图                 
        position: new AMap.LngLat(113.944518, 22.540736),                    
        icon: "/img/callout.png",//marker图标，直接传递地址url                 
        offset:new AMap.Pixel(20, -40) //相对于基点的位置 
    });
})(window);
