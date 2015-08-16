/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function WhatBrowser() {

    var browser = (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) ? "Opera" :
            typeof InstallTrigger !== 'undefined' ? "Firefox" :
            (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) ? "Safari" :
            !!window.chrome ? "Chrome" : "IE";
    console.log(browser);

    return browser;
}


$("body").on("EDGE_Container_loaded", function () {
    //document.body.style.background = "url('images/r1.png') 50% 50% / cover no-repeat gray";
    $("html").css({
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "background": "url('images/r1.png') 50% 50% / cover no-repeat gray"
    });

    var audio = new Audio('media/navigate-begin.mp3');

    $("body").css({
        overflow: "hidden",
        //zoom: "1.5"
        //"background": "rgba(0,0,0,0.5)"
    });
    $("html").scrollTop();

    //Fixing IE EDGE

    // lock scroll position, but retain settings for later
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    ];
    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);


    // un-lock scroll position
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
    
    var suspendData = SCORM_INITIALIZE();
    if(suspendData !== ""){
        console.log(suspendData);
        console.log(jQuery.parseJSON(suspendData));
        EDGE_Plantilla.temp_scorm_suspendData = jQuery.parseJSON(suspendData);
    }
    
    var interactions = LOAD_INTERACTIONS()
    console.log(interactions);
    EDGE_Plantilla.temp_scorm = merge_options(EDGE_Plantilla.temp_scorm, interactions)
});

function menu_tools_hide_show(sym) {
    if (sym.$("menu_grafico").is(":visible")) {

        sym.$("menu_grafico").hide();
        sym.$("btn_full").hide();
        sym.$("btn_creditos").hide();
        sym.$("btn_ayuda").hide();
        sym.$("btn_audio").hide();
        sym.$("btn_info").hide();
        sym.$("btn_accesibilidad").hide()
        sym.$("Tool_accesibilidad").hide();
        sym.$("Tool_info").hide();
        sym.$("Tool_full").hide();
        sym.$("Tool_ayuda").hide();
        sym.$("Tool_audio").hide();
        sym.$("Tool_creditos").hide();

    } else {

        sym.$("menu_grafico").show();
        sym.$("btn_full").show();
        sym.$("btn_creditos").show();
        sym.$("btn_ayuda").show();
        sym.$("btn_audio").show();
        sym.$("btn_info").show();
        sym.$("btn_accesibilidad").show();
        sym.$("Tool_accesibilidad").show();
        sym.$("Tool_info").show();
        sym.$("Tool_full").show();
        sym.$("Tool_ayuda").show();
        sym.$("Tool_audio").show();
        sym.$("Tool_creditos").show();
    }
}

$("body").on("EDGE_Self_Plantilla_ClickMenuTools", function (evt) {
    menu_tools_hide_show(evt.sym);
});