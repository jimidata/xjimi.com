$(document).ready(function() {
    $("input[type=radio][name=appname]").change(function() {
        if (this.value == 'szww') {
            $(".ios.store-icon").attr("href", "https://itunes.apple.com/cn/app/shi-jie-zhi-chuang-ban-lu/id939966230?ls=1&mt=8");
            $(".android.store-icon").attr("href", "http://fir.im/szww");
            $("img.qrcode").attr("src", "/img/products/szww-qrcode.jpg");
        }
        else if (this.value == 'zhosr') {
            $(".ios.store-icon").attr("href", "https://itunes.apple.com/cn/app/hai-quan-wan-ban-lu/id958114622?ls=1&mt=8");
            $(".android.store-icon").attr("href", "http://fir.im/zhosr");
            $("img.qrcode").attr("src", "/img/products/zhosr-qrcode.jpg");
        }
    });
});