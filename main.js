$(document).ready(function() {
    $("#container-navbar__burgerIcon").mouseup(function(element) {
        navMobileView();
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
            }, 3000, function() {
                console.log(this.id);
            });
        }
    })
}