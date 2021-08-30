// console.log(document.querySelector("#testimonial .top"));
// alert("connect !");

$(document).ready (function() {
    document.querySelector("#loader").style.display = "none";


    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });





    const win = $(window);
    const doc = $(document);
    const progressBar = $("progress");
    const progressLabel = $(".progress-label");
    const setValue = () => win.scrollTop();
    const setMax = () => doc.height() - win.height();
    const setPercent = () => Math.round(win.scrollTop() / (doc.height() - win.height()) * 100);

    progressLabel.text(setPercent() + "%");
    progressBar.attr({value: setValue(), max: setMax() });


    doc.on("scroll", () => {
        progressLabel.css("right", 0);
        progressLabel.text(setPercent() + "%");
        progressBar.attr({value: setValue()});
    });

    win.on("resize", () => {
        progressLabel.text(setPercent());
        progressBar.attr({value: setValue(), max: setMax() });
    });


    $('.filkr-image').magnificPopup({
        delegate: 'img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            // titleSrc: function(item) {
            //     return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            // }
        }
    })


    $('#portfollio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'test-popup-link',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            // titleSrc: function(item) {
            //     return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            // }
        }
    })

    

});

$("#team .bottom h2").on("click", function () {
        console.log($(this).prop("dataset"));
        document.getElementById("seeData").html($(this).prop("dataset"));
    });