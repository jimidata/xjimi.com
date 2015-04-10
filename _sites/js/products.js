$(document).ready(function() {
    function isWeixinBrowser(){
        var ua = navigator.userAgent.toLowerCase();
        return (/micromessenger/.test(ua)) ? true : false ;
    }

    if (isWeixinBrowser()) {
        $(".ios.store-icon").attr("href", "http://banlv.xjimi.com/szww/get");
    }

    $("input[type=radio][name=appname]").change(function() {
        if (this.value == 'szww') {
            if (isWeixinBrowser()) {
                $(".ios.store-icon").attr("href", "http://banlv.xjimi.com/szww/get");
            } else {
                $(".ios.store-icon").attr("href", "https://itunes.apple.com/cn/app/shi-jie-zhi-chuang-ban-lu/id939966230?ls=1&mt=8");
            }
            $(".android.store-icon").attr("href", "http://fir.im/szww");
            $("img.qrcode").attr("src", base_url + "/img/products/szww-qrcode.jpg");
        }
        else if (this.value == 'zhosr') {
            if (isWeixinBrowser()) {
                $(".ios.store-icon").attr("href", "http://banlv.xjimi.com/zhosr/get");
            } else {
                $(".ios.store-icon").attr("href", "https://itunes.apple.com/cn/app/hai-quan-wan-ban-lu/id958114622?ls=1&mt=8");
            }
            $(".android.store-icon").attr("href", "http://fir.im/zhosr");
            $("img.qrcode").attr("src", base_url + "/img/products/zhosr-qrcode.jpg");
        }
    });
});