$(document).ready(function() {
    $("#container-navbar__burgerIcon").mouseup(function() {
        navMobileView();
    });

    $(document.body).mouseup(function(element) {
        if ((!$(element.target).hasClass('container-navbar__burgerIcon')) && (!$(element.target).hasClass('container-navbar__options__link'))) {
            $(".container-navbar__options").removeClass("container-navbar__expand")
        }
    });

    $.ajax({
        url: "https://justin-personal-website.herokuapp.com/briefDescription",
        success: function(brief) {
            IntroPageBrief(brief);
        }
    });

    $(".container-introPage__sideMenu__content").click(function() {
        TagContentSelector(this);
    });
});

function navMobileView() {
    if ($(".container-navbar__options").hasClass("container-navbar__expand")) {
        //console.log("YES");
        $(".container-navbar__options").removeClass("container-navbar__expand")
    } else {
        //console.log("NO");
        $(".container-navbar__options").addClass("container-navbar__expand")
    }

    $(".container-navbar__options__buttons").each(function(index, listItem) {
        //console.log(`div${index}: ${this.id}`);

        if (!$("#" + this.id).is(":animated")) {
            $("#" + this.id).animate({
                opacity: '1',
                transform: 'translateX(0%)'
            }, 3000);
        }
    })
};

function IntroPageBrief(brief) {
    brief.map(briefDescription => {
        //console.log(briefDescription.content)
        $('#briefIntro').text(briefDescription.content)
    })
}

function TagContentSelector(element) {
    if (element.id == ("firstTag")) {
        $(".container-introPage__aboutTag").children().show()
    } else if (element.id == ("eduTag")) {
        console.log("YES")
        $.ajax({
            url: "https://justin-personal-website.herokuapp.com/education",
            success: function() {
                $(".container-introPage__aboutTag").children().hide();
            }
        })
    }
}