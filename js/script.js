$(document).ready(
    function() {
        $(".initialheader").fadeOut(0);
        $(".initialheader").delay(1000).fadeIn(1000);
        $("#text1").fadeOut(0);
        $("#text2").fadeOut(0);
        $("#text3").fadeOut(0);
        $("#text4").fadeOut(0);
        $("#gallery-ExecutiveBoard").fadeOut(0);
        $("#text5").fadeOut(0);
        $("#map").fadeOut(0);
        $("#text6").fadeOut(0);
        $("#gallery-Secretariat").fadeOut(0);
        $("#text7").fadeOut(0);
        $("#text8").fadeOut(0);
        $(".finalheader").fadeOut(0);
        $("nav").fadeOut(0);
        $(".initialheader").delay(1000).fadeOut(1000);
        $("nav").delay(3900).fadeIn(3000);
        $(".finalheader").delay(3900).fadeIn(3000);
        $(".text").css({"padding":"0 !important"});



        $("#link1").click(
            function() {
                $("#text1").delay(500).fadeIn(1000);
                $(".text").css({"padding":"20px 50px"});
                $("#text2").fadeOut(0);
                $("#text3").fadeOut(0);
                $("#text4").fadeOut(0);
                $("#text5").fadeOut(0);
                $("#map").fadeOut(0);
                $("#text6").fadeOut(0);
                $("#text7").fadeOut(0);
                $("#text8").fadeOut(0);
            }

        );

        $("#link2").click(
            function() {
                $("#text2").delay(500).fadeIn(1000);
                $(".text").css({"padding":"20px 50px"});
                $("#text1").fadeOut(0);
                $("#text3").fadeOut(0);
                $("#text4").fadeOut(0);
                $("#gallery-ExecutiveBoard").fadeOut(0);
                $("#text5").fadeOut(0);
                $("#map").fadeOut(0);
                $("#text6").fadeOut(0);
                $("#gallery-Secretariat").fadeOut(0);
                $("#text7").fadeOut(0);
                $("#text8").fadeOut(0);
            }

        );


        $("#link3").click(
            function() {
                $("#text3").delay(500).fadeIn(1000);
                $(".text").css({"padding":"20px 50px"});
                $("#text1").fadeOut(0);
                $("#text2").fadeOut(0);
                $("#text4").fadeOut(0);
                $("#gallery-ExecutiveBoard").fadeOut(0);
                $("#text5").fadeOut(0);
                $("#map").fadeOut(0);
                $("#text6").fadeOut(0);
                $("#gallery-Secretariat").fadeOut(0);
                $("#text7").fadeOut(0);
                $("#text8").fadeOut(0);
            }

        );

        $("#link4").click(
            function() {
                $("#text4").delay(500).fadeIn(1000);
                $(".text").css({"padding":"20px 50px"});
                $("#text1").fadeOut(0);
                $("#text2").fadeOut(0);
                $("#text3").fadeOut(0);
                $("#gallery-ExecutiveBoard").delay(500).fadeIn(1000);
                $("#text5").fadeOut(0);
                $("#map").fadeOut(0);
                $("#text6").fadeOut(0);
                $("#gallery-Secretariat").fadeOut(0);
                $("#text7").fadeOut(0);
                $("#text8").fadeOut(0);
            }

        );

        $("#link5").click(
            function() {
                $("#text5").delay(500).fadeIn(1000);
                $(".text").css({"padding":"20px 50px"});
                $("#text1").fadeOut(0);
                $("#text2").fadeOut(0);
                $("#text3").fadeOut(0);
                $("#text4").fadeOut(0);
                $("#gallery-ExecutiveBoard").fadeOut(0);
                $("#text5").fadeOut(0);
                $("#map").delay(500).fadeIn(1000);
                $("#text6").fadeOut(0);
                $("#gallery-Secretariat").fadeOut(0);
                $("#text7").fadeOut(0);
                $("#text8").fadeOut(0);
            }

        );

        $("#link6").click(
            function() {
                $("#text6").delay(500).fadeIn(1000);
                $(".text").css({"padding":"20px 50px"});
                $("#text1").fadeOut(0);
                $("#text2").fadeOut(0);
                $("#text3").fadeOut(0);
                $("#text4").fadeOut(0);
                $("#gallery-ExecutiveBoard").fadeOut(0);
                $("#text5").fadeOut(0);
                $("#map").fadeOut(0);
                $("#gallery-Secretariat").delay(500).fadeIn(1000);
                $("#text7").fadeOut(0);

            }

        );

        $("#link7").click(
            function() {
                $("#text7").delay(500).fadeIn(1000);
                $(".text").css({"padding":"20px 50px"});
                $("#text1").fadeOut(0);
                $("#text2").fadeOut(0);
                $("#text3").fadeOut(0);
                $("#text4").fadeOut(0);
                $("#gallery-ExecutiveBoard").fadeOut(0);
                $("#text5").fadeOut(0);
                $("#map").fadeOut(0);
                $("#text6").fadeOut(0);
                $("#gallery-Secretariat").fadeOut(0);

            }

        );

    }

);
