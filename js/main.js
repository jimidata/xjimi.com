var base_url = "";

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).foundation();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?43aceeec629c78d58be7c28d8310144d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

$(document).ready(function() {
    $('.contact-form input').on("change keyup paste", function () {
        var email = $('.contact-form input[name="email"]').val();
        var name = $('.contact-form input[name="name"]').val();
        var company = $('.contact-form input[name="company"]').val();
        var job = $('.contact-form input[name="job"]').val();

        if (email != null && email !== "" && name != null && name !== "" && company != null && company !== "" && job != null && job !== "") {
            $('.contact-form .submit.disabled').removeClass("disabled");
            $('.contact-form .submit').addClass("enabled");
        } else {
            $('.contact-form .submit.enabled').removeClass("enabled");
            $('.contact-form .submit').addClass("disabled");
        }
    });
    $('.contact-form .submit.disabled').click(function(event) {
        event.preventDefault();
    });
});