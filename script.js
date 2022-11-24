$(document).ready(function() {
    $(".back").click(() => {
        document.querySelector("head").innerHTML += "<meta http-equiv='refresh' content='0' />";
    });
    var links = document.querySelectorAll(".textToHref");
    for (let i = 0; i < links.length; i++) {
        links[i].href = links[i].innerHTML;
        links[i].target = "_blank";
    }
    var line = $("#line1");
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0.281096276 * $(window).height()) {
        scrollTop = 0.281096276 * $(window).height();
    }
    var width = scrollTop / (0.281096276 * $(window).height()) * 100;
    if (width > 80) {
        width = 80;
    }
    line.css("width", `${width}vw`);
    if (width >= 0) {
        $("#word1").addClass("scrolled");
    } else {
        $("#word1").removeClass("scrolled");
    }
    if (width >= 40) {
        $("#word2").addClass("scrolled");
    } else {
        $("#word2").removeClass("scrolled");
    }
    if (width >= 80) {
        $("#word3").addClass("scrolled");
    } else {
        $("#word3").removeClass("scrolled");
    }
    $("#homepages").css("top", `${scrollTop}px`);

    if (width >= 80) {
        $("#page1").addClass("scrolled");
    } else {
        $("#page1").removeClass("scrolled");
    }
    $(window).scroll(function() {
        var line = $("#line1");
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 0.281096276 * $(window).height()) {
            scrollTop = 0.281096276 * $(window).height();
        }
        var width = scrollTop / (0.281096276 * $(window).height()) * 100;
        if (width > 80) {
            width = 80;
        }
        line.css("width", `${width}vw`);
        if (width >= 0) {
            $("#word1").addClass("scrolled");
        } else {
            $("#word1").removeClass("scrolled");
        }
        if (width >= 40) {
            $("#word2").addClass("scrolled");
        } else {
            $("#word2").removeClass("scrolled");
        }
        if (width >= 80) {
            $("#word3").addClass("scrolled");
        } else {
            $("#word3").removeClass("scrolled");
        }
        $("#homepages").css("top", `${scrollTop}px`);

        if (width >= 80) {
            $("#page1").addClass("scrolled");
        } else {
            $("#page1").removeClass("scrolled");
        }
    });


    dragDumpling(document.querySelector("#page2 .img"));
    dragPork(document.querySelectorAll("#page2 .img")[1]);
    function dragDumpling(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            var top = elmnt.offsetTop - pos2;
            var left = elmnt.offsetLeft - pos1;
            if (top > ($(window).height() + 17 + 0.636 * $(window).width()) && left > (0.314235624 * $(window).width()) && left < (0.685764376 * $(window).width())) {
                top = $(window).height() + 17 + 0.686 * $(window).width();
                left = 0.364235624 * $(window).width();
                setTimeout(() => {chooseDumpling();}, 750);
                chosenChoice = true;
            }
            elmnt.style.top = top + "px";
            elmnt.style.left = left + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    function dragPork(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            var top = elmnt.offsetTop - pos2;
            var left = elmnt.offsetLeft - pos1;
            if (top > ($(window).height() + 17 + 0.636 * $(window).width()) && left > (0.314235624 * $(window).width()) && left < (0.685764376 * $(window).width())) {
                top = $(window).height() + 17 + 0.686 * $(window).width();
                left = 0.364235624 * $(window).width();
                setTimeout(() => {choosePork();}, 750);
                chosenChoice = true;
            }
            elmnt.style.top = top + "px";
            elmnt.style.left = left + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    function chooseDumpling() {
        $("#homepages").css("display", "none");
        $("#loading").css("display", "flex");
        $(".loading").addClass("started");
        setTimeout(() => {
            document.querySelector(".loading").src = "img/pancake2.png";
            document.querySelector("#pancakeNameLoading").innerHTML = "Injera - Africa";
            setTimeout(() => {
                document.querySelector(".loading").src = "img/pancake3.png";
                document.querySelector("#pancakeNameLoading").innerHTML = "Pancake - United States";
                setTimeout(() => {
                    document.querySelector(".loading").src = "img/pancake4.png";
                    document.querySelector("#pancakeNameLoading").innerHTML = "Oyaki - Japan";
                    setTimeout(() => {
                        document.querySelector(".loading").src = "img/pancake5.png";
                        document.querySelector("#pancakeNameLoading").innerHTML = "Nale\u015bniki- Poland";
                        setTimeout(() => {
                            document.querySelector(".loading").src = "img/pancake5.png";
                            document.querySelector("#pancakeNameLoading").innerHTML = "Nale\u015bniki- Poland";
                            $("#loading").css("display", "none");
                            $("#dumplingChoice").css("display", "block");
                        }, 800);
                    }, 800);
                }, 800);
            }, 800);
        }, 800);
    }

    function choosePork() {
        $("#homepages").css("display", "none");
        $("#loading").css("display", "flex");
        $(".loading").addClass("started");
        setTimeout(() => {
            document.querySelector(".loading").src = "img/pancake2.png";
            document.querySelector("#pancakeNameLoading").innerHTML = "Injera - Africa";
            setTimeout(() => {
                document.querySelector(".loading").src = "img/pancake3.png";
                document.querySelector("#pancakeNameLoading").innerHTML = "Pancake - United States";
                setTimeout(() => {
                    document.querySelector(".loading").src = "img/pancake4.png";
                    document.querySelector("#pancakeNameLoading").innerHTML = "Oyaki - Japan";
                    setTimeout(() => {
                        document.querySelector(".loading").src = "img/pancake5.png";
                        document.querySelector("#pancakeNameLoading").innerHTML = "Nale\u015bniki- Poland";
                        setTimeout(() => {
                            $("#loading").css("display", "none");
                            $("#porkChoice").css("display", "block");
                        }, 800);
                    }, 800);
                }, 800);
            }, 800);
        }, 800);
    }

    $("#fillingClick").click(function() {
        $("#filling").addClass("chosen");
        $("#pinching").removeClass("chosen");
    });

    $("#pinchingClick").click(function() {
        $("#filling").removeClass("chosen");
        $("#pinching").addClass("chosen");
    });



    $("#poundingClick").click(function() {
        $("#pounding").addClass("chosen");
        $("#dipping").removeClass("chosen");
        $("#frying").removeClass("chosen");
    });

    $("#dippingClick").click(function() {
        $("#pounding").removeClass("chosen");
        $("#dipping").addClass("chosen");
        $("#frying").removeClass("chosen");
    });

    $("#fryingClick").click(function() {
        $("#pounding").removeClass("chosen");
        $("#dipping").removeClass("chosen");
        $("#frying").addClass("chosen");
    });
});

function brighten(element, amountInPercent) {
    element.css("filter", `brightness(${100 + 0.5 * amountInPercent}%)`);
}