$(document).ready(function() {
    $("#container-navbar__burgerIcon").click(function() {
        navMobileView();
    });

    $(document.body).mouseup(function(element) {
        if ((!$(element.target).hasClass('container-navbar__burgerIcon')) && (!$(element.target).hasClass('container-navbar__options__link'))) {
            $(".container-navbar__options").removeClass("container-navbar__expand")
        }
    });

    $.ajax({
        url: "https://personal-website-justin.herokuapp.com/briefDescription/",
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

function TagContentSelector(entity) {
    if (entity.id == ("firstTag")) {
        $(".container-introPage__aboutTag").children().show()
    } else if (entity.id == ("eduTag")) {
        // TODO: NEED TO FIX THE BUG WHICH AJAX BEING CALLED TWICE
        $.ajax({
            url: "https://personal-website-justin.herokuapp.com/education/",
            success: function(eduHistory) {
                $(".container-introPage__aboutTag").children().hide();
                eduHistory.map(education => {
                    $("#eduList").append("<li class='container-introPage__eduTag__item'>" + education.title + "</li>")
                })
            }
        })

        //method number 2, so far this doesn't work :-(
        // var url = "https://personal-website-justin.herokuapp.com/education/"
        // $.getJSON(url, function(data) {
        //     $(".container-introPage__aboutTag").children().hide();
        //     data.map(education => {
        //         $("#eduList").append("<li class='container-introPage__eduTag__item'>" + education.title + "</li>")
        //     })
        // })

    } else if (entity.id == ("expTag")) {
        $.ajax({
            url: "https://personal-website-justin.herokuapp.com/experience/",
            success: function(workExp) {
                $(".container-introPage__aboutTag").children().hide();
            }
        })
    } else if (entity.id == ("codeTag")) {
        $.ajax({
            url: "https://personal-website-justin.herokuapp.com/experience/",
            success: function(workExp) {
                $(".container-introPage__aboutTag").children().hide();
            }
        })
    }
}