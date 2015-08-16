/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global EC */

//<editor-fold defaultstate="collapsed" desc="Global values">
EDGE_Plantilla = {
    attemps_increasment: 1,
    allow_popups: true,
    play_general_sound: true,
    plantilla_sym: null,
    debug: true,
    base_audio: new Audio('media/navigate-main.mp3'),
    config: null,
    popup_on_show: null,
    portada_on_show: null,
    basic_contenedor_name: {
        "contenedor": ["contenedor_home"],
        "base_contenedor": ["back_contenedor_home"]
    },
    title: ["titulo"],
    basic_contenedor_popup: ["container_overlay"],
    basic_contenedor_portada: ["contenedor_portada"],
    button_menutools: {
        fullscreen: "btn_full",
        creditos: "btn_creditos",
        ayuda: "btn_ayuda",
        audio: "btn_audio",
        info: "btn_info",
        accesibilidad: "btn_accesibilidad"
    },
    button_nav: {
        R1: {
            "button": ["btnr_1"],
            "image": ["rec_1"]
        },
        R2: {
            "button": ["btnr_2"],
            "image": ["rec_2"]
        },
        R3: {
            "button": ["btnr_3"],
            "image": ["rec_3"]
        },
        R4: {
            "button": ["btnr_4"],
            "image": ["rec_4"]
        },
        R5: {
            "button": ["btnr_5"],
            "image": ["rec_5"]
        },
        R6: {
            "button": ["btnr_6"],
            "image": ["rec_6"]
        },
        R7: {
            "button": ["btnr_7"],
            "image": ["rec_7"]
        },
        learning: {
            "button": ["btn_PA"],
            "image": ["punto_A"]
        },
        vocabulario: {
            "button": ["btn_VC"],
            "image": ["vocabulario"]
        }
    },
    temp_scorm: {
    },
    temp_scorm_suspendData: {
    }

};
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Handle windows">
function handle_popup(boolShow) {
    var sym = EDGE_Plantilla.plantilla_sym;
    var copy = EDGE_Plantilla.basic_contenedor_popup;
    
    var sym_element = buscar_sym(sym, copy);
    
    console.log("MOSTRANDO POPUP", sym_element);
    $(sym_element.ele).css({"z-index": 2000});
    
    sym_element = buscar_sym(sym, copy, true);
    
    if(boolShow){
        sym_element.show();
        $("#popup_gray").css({display : "block"});
    }else{
        sym_element.hide();
        $("#popup_gray").css({display : "none"});
    }
}

function handle_portada(boolShow) {
    var sym = EDGE_Plantilla.plantilla_sym;
    var copy = EDGE_Plantilla.basic_contenedor_portada;
    var temp_arr = [];

    $.each(copy, function (index, value) {
        temp_arr.push(value);
        var sym_element = buscar_sym(sym, temp_arr, true);

        EDGE_Plantilla.debug ? console.log("HANDLE", sym_element) : false;
        if (boolShow) {
            sym_element.show();
        } else {
            sym_element.hide();
        }
        EDGE_Plantilla.debug ? console.log("COPY contenedor PORTADA", index) : false;
    });
}

function handle_style_nav(boolShow) {
    var sym = EDGE_Plantilla.plantilla_sym;

    $.each(EDGE_Plantilla.button_nav, function (index, valor) {
        //$.each(valor, function (key, value) {
        var value = valor.button;
        var sym_element;
        if (typeof value !== "string") {
            sym_element = buscar_sym(sym, value, true);
        } else {
            sym_element = sym.$(value);
        }
        //console.log("STYLE NAV", sym_element, boolShow);

        if (boolShow) {
            sym_element.show();
        } else {
            sym_element.hide();
        }
        //});
    });

    $.each(EDGE_Plantilla.basic_contenedor_name, function (key, value) {
        var sym_contenedor = buscar_sym(sym, value, true);
        if (boolShow) {
            sym_contenedor.show();
        } else {
            sym_contenedor.hide();
        }
    });
}
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Mostrar datos">
function mostrar_pagina(strPagina, objRetro) {
    //EDGE_Plantilla.config
    var sym = EDGE_Plantilla.plantilla_sym;
    EDGE_Plantilla.debug ? console.log(strPagina) : false;
    var sym_contenedor = null;
    var sym_animate = null;

    if (!EDGE_Plantilla.config.paginas.hasOwnProperty(strPagina)) {
        console.error(strPagina, EDGE_Plantilla.config.paginas, "PAGINA No encontrado");
        return false;
    }
    var pagina = EDGE_Plantilla.config.paginas[strPagina];
    EDGE_Plantilla.debug ? console.log("MOSTRANDO PAGINA", pagina) : false;

    if (!isEmpty(pagina.symbols)) {
        if (!isEmpty(objRetro)) {
            $.each(objRetro, function (index, value) {
                if (!pagina.symbols.hasOwnProperty(index)) {
                    delete pagina.symbols[index];
                }
            });
        }
    } else {
        objRetro = null;
    }

    EDGE_Plantilla.debug ? console.log("START DETECTING", EDGE_Plantilla) : false;

    if (!isEmpty(pagina.titulo)) {
        var sym_titled = buscar_sym(sym, EDGE_Plantilla.title, true);
        sym_titled.find("span").first().text(pagina.titulo);
        if (!isEmpty(pagina.subtitulo)) {
            sym_titled.find("span").last().text(pagina.subtitulo);
        }
    }

    switch (pagina.type) {
        case "portada":
            if (!EDGE_Plantilla.allow_popups)
                return;
            handle_style_nav(false);
            if (!isEmpty(pagina.sym)) {
                sym_contenedor = buscar_sym(sym, pagina.sym);
            } else {
                sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_portada);
            }
            EDGE_Plantilla.portada_on_show = pagina;
            handle_portada(true);
            //$("body").css({background: "rgba(0,0,0,0)"});
            break;
        case "popup_mini":
        case "popup_full":
            if (!EDGE_Plantilla.allow_popups)
                return;
            if (!isEmpty(pagina.sym)) {
                sym_contenedor = buscar_sym(sym, pagina.sym);
            } else {
                sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_popup);
            }
            sym_contenedor = $("#popup_gray");
            //$("body").css({background: "rgba(0,0,0,0.5)"});
            EDGE_Plantilla.popup_on_show = pagina;
            handle_popup(true);
            break;
        default:
            if (!isEmpty(pagina.sym)) {
                sym_contenedor = buscar_sym(sym, pagina.sym);
            } else {
                sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
                sym_animate = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.base_contenedor)
            }
            //$("body").css({background: "rgba(0,0,0,0)"});
            break;
    }

    EDGE_Plantilla.debug ? console.log("SYM de carga GENERAL", sym_contenedor, pagina) : false;

    EDGE_Plantilla.debug ? console.log(strPagina, objRetro, pagina) : false;

    EDGE_Plantilla.debug ? console.log(EDGE_Plantilla.config.default.url_pages + pagina.url, sym_contenedor) : false;

    //sym_contenedor.play();
    //sym.getSymbol("contenedor_home").play();
    if (!isEmpty(sym_animate)) {
        sym_animate.play(0);
        console.log("EDGE ANIMATE!");
    }

    load_pages(sym_contenedor, strPagina, pagina, objRetro);


    //sym.getSymbol("contenedor_home").play();

    // Load Third Composition and inject data

}

function load_pages(sym_contenedor, strPagina, pagina, objRetro) {
    var promise = EC.loadComposition(EDGE_Plantilla.config.default.url_pages + pagina.url,
            sym_contenedor);

    promise.done(function (comp) {
        var stage = comp.getStage();
        EDGE_Plantilla.config.paginas[strPagina].stage = stage;
        $(stage.ele).prop("ed_identify", pagina);

        if (!isEmpty(pagina.actividad)) {
            var objEvt = {
                type: "EDGE_Recurso_promiseCreated",
                sym: stage,
                scorm_prev: EDGE_Plantilla.temp_scorm,
                scorm_extra: EDGE_Plantilla.temp_scorm_suspendData
            };
            $("iframe", sym_contenedor.ele)[0].contentWindow.$('body').trigger(objEvt);
        }

        EDGE_Plantilla.debug ? console.log("DONE MOSTRAR", pagina, stage) : false;
        if (!isEmpty(objRetro)) {
            $.each(objRetro, function (index, value) {
                var arrSymSearch = pagina.symbols[index];
                var symFound = buscar_sym(stage, arrSymSearch);
                console.log(typeof value);
                if (typeof value === "string") {
                    $(symFound.ele).find("p").text(value);
                }
            });
        }
    });
}
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="generic functions">
function getRemote() {
    return $.ajax({
        type: "GET",
        dataType: "json",
        url: "json/config.json",
        async: false
    });
}

function play_buttons(evt) {
    if (EDGE_Plantilla.play_general_sound) {
        var temp = EDGE_Plantilla.base_audio.cloneNode();
        temp.play();
    }
}

function fullscreen() {
    if ($.fullscreen.isFullScreen()) {
        $.fullscreen.exit();
    } else {
        $("html").fullscreen();
    }
}

function buscar_sym(sym, arrSymSearch, boolJQUERY) {
    var temp = sym;
    $.each(arrSymSearch, function (index, value) {
        //EDGE_Plantilla.debug ? console.log(temp, index, value, arrSymSearch) : false;

        if (!isEmpty(boolJQUERY) && index === arrSymSearch.length - 1) {
            temp = temp.$(value);
        } else {
            temp = temp.getSymbol(value);
        }

    });
    //EDGE_Plantilla.debug ? console.log(temp, arrSymSearch, boolJQUERY) : false;
    return temp;
}

function inicializarPlantilla(sym) {
    var objEvt = {
        type: "EDGE_Container_loaded",
        sym: sym
    };
    $("body").trigger();
}

$("body").on("EDGE_Container_loaded", function (evt) {
    EDGE_Plantilla.plantilla_sym = evt.sym;
    EDGE_Plantilla.config = getRemote().responseJSON;

    var url = $(location).attr('href');

    EDGE_Plantilla.config.default.url_pages =
            url.substring(0, url.lastIndexOf('/'))
            + "/" + EDGE_Plantilla.config.default.url_pages;
    console.log("Paginas a cargar... ", EDGE_Plantilla.config.default.default_page);

    if (typeof EDGE_Plantilla.config.default.default_page === "string") {
        mostrar_pagina(EDGE_Plantilla.config.default.default_page);
    } else {
        $.each(EDGE_Plantilla.config.default.default_page, function (key, value) {
            mostrar_pagina(value);
        });
    }
    var element;
    
    element = $("<div/>", {
        id: "popup_gray", ed_position: "top"
    });
    element.css({
        order: 1, width: "100%", height: "100%", position: "absolute",
        "z-index": 10, top: "0px", left: "0px", "background-color": "rgba(0, 0, 0, 0.470588)",
        display: "none"
    });
    $("body").append(element);
    

    EDGE_Plantilla.debug ? console.log("****************** ENDED LOAD ********************") : false;
    
    $("body").trigger({
        type: "EDGE_Container_Finishloaded",
        sym: evt.sym
    });

    //EDGE_Plantilla.debug ? console.log(EDGE_Plantilla.config) : false;
});

$(document).on("EDGE_Plantilla_ClosePopup", function (evt) {
    play_buttons();
    handle_popup(false);
    EDGE_Plantilla.debug ? console.log("close") : false;
    EDGE_Plantilla.popup_on_show = null;
});

$(document).on("EDGE_Plantilla_ClosePortada", function (evt) {
    var pagina = evt.identify;
    play_buttons();
    handle_portada(false);
    handle_style_nav(true);
    EDGE_Plantilla.debug ? console.log("close", pagina) : false;
    EDGE_Plantilla.popup_on_show = null;

    if (!isEmpty(pagina.al_cerrar)) {
        !isEmpty(pagina.al_cerrar.cargar) ?
                mostrar_pagina(pagina.al_cerrar.cargar) : false;

        !isEmpty(pagina.al_cerrar.cambia_color) ?
                cambiarColorBordes(EDGE_Plantilla.plantilla_sym, pagina.al_cerrar.cambia_color) : false;


    }
    
    $("html").css({
        //overflow: "hidden",
        //zoom: "1.5"
        //"background": "rgba(0,0,0,0.5)"
    });

    //console.log("MOSTRAR CLICK ",evt.sym.getSymbol(EDGE_Plantilla.button_nav.R2));
    //evt.sym.$(EDGE_Plantilla.button_nav.R2).click();
});
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Controles de la plantilla">
$("body").on("EDGE_Self_Plantilla_ClickMenuTools", function (evt) {
    EDGE_Plantilla.debug ? console.log(evt) : false;
    EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
    switch (evt.evt.currentTarget.id) {
        case "Stage_" + EDGE_Plantilla.button_menutools.fullscreen:
            fullscreen();
            break;
        case "Stage_" + EDGE_Plantilla.button_menutools.creditos:
            mostrar_pagina("creditos");
            break;
        case "Stage_" + EDGE_Plantilla.button_menutools.ayuda:
            mostrar_pagina("ayudas");
            break;
        case "Stage_" + EDGE_Plantilla.button_menutools.audio:
            EDGE_Plantilla.play_general_sound = !EDGE_Plantilla.play_general_sound;
            break;
        case "Stage_" + EDGE_Plantilla.button_menutools.info:
            mostrar_pagina("info");
            break;
        case "Stage_" + EDGE_Plantilla.button_menutools.accesibilidad:
            mostrar_pagina("accesibilidad");
            break;
    }
    play_buttons(evt);
});

$("body").on("EDGE_Self_Plantilla_ClickNav", function (evt) {
    EDGE_Plantilla.debug ? console.log(evt) : false;
    EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
    switch (evt.evt.currentTarget.id) {
        case "Stage_" + EDGE_Plantilla.button_nav.R1.button:
            mostrar_pagina("1");
            break;
        case "Stage_" + EDGE_Plantilla.button_nav.R2.button:
            mostrar_pagina("2");
            break;
        case "Stage_" + EDGE_Plantilla.button_nav.R3.button:
            mostrar_pagina("3");
            break;
        case "Stage_" + EDGE_Plantilla.button_nav.R4.button:
            mostrar_pagina("4");
            break;
        case "Stage_" + EDGE_Plantilla.button_nav.R5.button:
            mostrar_pagina("5");
            break;
        case "Stage_" + EDGE_Plantilla.button_nav.R6.button:
            mostrar_pagina("6");
            break;
        case "Stage_" + EDGE_Plantilla.button_nav.R7.button:
            mostrar_pagina("7");
            break;
        case "Stage_" + EDGE_Plantilla.button_nav.learning.button:
            mostrar_pagina("learning");
            break;
        case "Stage_" + EDGE_Plantilla.button_nav.vocabulario.button:
            mostrar_pagina("vocabulario");
            break;
        default:
            break;
    }
    play_buttons(evt);
});
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="RECURSOS Y POPUPS">

/* El POPUP envía un evento a la plantilla informando que ya está creado 
 * y está listo para recibir su estado inicial
 */
$(document).on("EDGE_Plantilla_CreationCompletePop", function (evt) {
    EDGE_Plantilla.debug ? console.log("listen") : false;
    var popup = EDGE_Plantilla.popup_on_show;
    var sym = EDGE_Plantilla.plantilla_sym;

    var sym_contenedor;

    switch (popup.type) {
        case "portada":
        case "popup_mini":
        case "popup_full":
            sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_popup);
            break;
        default:
            console.error(popup.type, "POPUP tipo incorrecto");
            return false;
            break;
    }

    EDGE_Plantilla.debug ? console.log(sym_contenedor) : false;

    $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger({
        type: 'EDGE_PopUp_CreationResponse',
        sym: evt.sym,
        identify: EDGE_Plantilla.popup_on_show
    });
});
//</editor-fold>

