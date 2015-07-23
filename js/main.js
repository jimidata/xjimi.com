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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-65438214-2', 'auto');
ga('send', 'pageview');

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
