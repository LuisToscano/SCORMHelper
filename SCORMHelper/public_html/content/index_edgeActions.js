/***********************
 * Acciones de composición de Adobe Edge Animate
 *
 * Editar este archivo con precaución, teniendo cuidado de conservar 
 * las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
 * capacidad de interactuar con estas acciones en Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

    //Edge symbol: 'stage'
    (function (symbolName) {


        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_audio").play("b");


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_audio").play("a");


        });
        //Edge binding end





























        Symbol.bindElementAction(compId, symbolName, "${btn_accesibilidad}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_accesibilidad").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_info").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_creditos").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_ayuda").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_full}", "mouseout", function (sym, e) {
            sym.getSymbol("Tool_full").play("a");

        });
        //Edge binding end

















        Symbol.bindElementAction(compId, symbolName, "${btn_accesibilidad}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_accesibilidad").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_info").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_ayuda").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_creditos").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_full}", "mouseover", function (sym, e) {
            sym.getSymbol("Tool_full").play("b");

        });
        //Edge binding end















        Symbol.bindElementAction(compId, symbolName, "${btn_full}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_info}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_accesibilidad}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickMenuTools",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end





        Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function (sym, e) {
            $("body").trigger({
                type: "EDGE_Container_loaded",
                sym: sym
            });


            // Ocultar un elemento 
            sym.$("menu_grafico").hide();
            sym.$("btn_full").hide();
            sym.$("btn_creditos").hide();
            sym.$("btn_ayuda").hide();
            sym.$("btn_audio").hide();
            sym.$("btn_info").hide();
            sym.$("btn_accesibilidad").hide();
            sym.$("Tool_accesibilidad").hide();
            sym.$("Tool_info").hide();
            sym.$("Tool_full").hide();
            sym.$("Tool_ayuda").hide();
            sym.$("Tool_audio").hide();
            sym.$("Tool_creditos").hide();
            sym.$("punto_A").hide();
            sym.$("vocabulario").hide();

            sym.$("rec_1").hide();
            sym.$("rec_2").hide();
            sym.$("rec_3").hide();
            sym.$("rec_4").hide();
            sym.$("rec_5").hide();
            sym.$("rec_6").hide();
            sym.$("rec_7").hide();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_menugrafico}", "click", function (sym, e) {
            // muestra/oculta menu grafico

            menu_tools_hide_show(sym);


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_PA}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_PA}", "mouseover", function (sym, e) {
            sym.$("punto_A").show();
            sym.getSymbol("punto_A").play("b");


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_PA}", "mouseout", function (sym, e) {
            sym.$("punto_A").hide();
            sym.getSymbol("punto_A").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_VC}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_VC}", "mouseover", function (sym, e) {
            sym.$("vocabulario").show();
            sym.getSymbol("vocabulario").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btn_VC}", "mouseout", function (sym, e) {
            sym.$("vocabulario").hide();
            sym.getSymbol("vocabulario").play("a");


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_1}", "click", function (sym, e) {
            cambiarColorBordes(sym, 1);
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_2}", "click", function (sym, e) {
            cambiarColorBordes(sym, 2);
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_3}", "click", function (sym, e) {
            cambiarColorBordes(sym, 3);

            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_4}", "click", function (sym, e) {
            cambiarColorBordes(sym, 4);
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_5}", "click", function (sym, e) {
            cambiarColorBordes(sym, 5);
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_6}", "click", function (sym, e) {
            cambiarColorBordes(sym, 6);
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_7}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            cambiarColorBordes(sym, 7);
            $("body").trigger({
                type: "EDGE_Self_Plantilla_ClickNav",
                sym: sym,
                evt: e
            });


        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_1}", "mouseout", function (sym, e) {
            sym.$("rec_1").hide();
            sym.getSymbol("rec_1").play("a");
            sym.getSymbol("btnr_1").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_2}", "mouseout", function (sym, e) {
            sym.$("rec_2").hide();
            sym.getSymbol("rec_2").play("a");
            sym.getSymbol("btnr_2").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_3}", "mouseout", function (sym, e) {
            sym.$("rec_3").hide();
            sym.getSymbol("rec_3").play("a");
            sym.getSymbol("btnr_3").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_4}", "mouseout", function (sym, e) {
            sym.$("rec_4").hide();
            sym.getSymbol("rec_4").play("a");
            sym.getSymbol("btnr_4").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_5}", "mouseout", function (sym, e) {
            sym.$("rec_5").hide();
            sym.getSymbol("rec_5").play("a");
            sym.getSymbol("btnr_5").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_6}", "mouseout", function (sym, e) {
            sym.$("rec_6").hide();
            sym.getSymbol("rec_6").play("a");
            sym.getSymbol("btnr_6").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_7}", "mouseout", function (sym, e) {
            sym.$("rec_7").hide();
            sym.getSymbol("rec_7").play("a");
            sym.getSymbol("btnr_7").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_7}", "mouseover", function (sym, e) {
            sym.$("rec_7").show();
            sym.getSymbol("rec_7").play("b");
            sym.getSymbol("btnr_7").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_6}", "mouseover", function (sym, e) {
            sym.$("rec_6").show();
            sym.getSymbol("rec_6").play("b");
            sym.getSymbol("btnr_6").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_5}", "mouseover", function (sym, e) {
            sym.$("rec_5").show();
            sym.getSymbol("rec_5").play("b");
            sym.getSymbol("btnr_5").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_4}", "mouseover", function (sym, e) {
            sym.$("rec_4").show();
            sym.getSymbol("rec_4").play("b");
            sym.getSymbol("btnr_4").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_3}", "mouseover", function (sym, e) {
            sym.$("rec_3").show();
            sym.getSymbol("rec_3").play("b");
            sym.getSymbol("btnr_3").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_2}", "mouseover", function (sym, e) {
            sym.$("rec_2").show();
            sym.getSymbol("rec_2").play("b");
            sym.getSymbol("btnr_2").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${btnr_1}", "mouseover", function (sym, e) {
            sym.$("rec_1").show();
            sym.getSymbol("rec_1").play("b");
            sym.getSymbol("btnr_1").play("b");

        });
        //Edge binding end

        

        Symbol.bindElementAction(compId, symbolName, "${btn_sena}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón

            if (EDGE_Plantilla.debug) {
                var pagina = EDGE_Plantilla.element_on_show;
                
                var objEvt = {
                    type: "EDGE_Recurso_Submit",
                    sym: pagina.stage
                };
                
                var sym_content = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor, true);
                $("iframe", sym_content)[0].contentWindow.$('body').trigger(objEvt);
            }

        });
        //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${container_overlay}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         $(document).trigger({
             type: 'EDGE_Plantilla_ClosePopup',
             sym: sym,
             evt: e
         });

      });
      //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'Tool_audio'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_audio");
   //Edge symbol end:'Tool_audio'

    //=========================================================

    //Edge symbol: 'btn_audio'
    (function (symbolName) {

    })("btn_audio");
   //Edge symbol end:'btn_audio'

    //=========================================================

    //Edge symbol: 'rec_6'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("rec_6");
   //Edge symbol end:'rec_6'

    //=========================================================

    //Edge symbol: 'rec_2'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("rec_2");
   //Edge symbol end:'rec_2'

    //=========================================================

    //Edge symbol: 'rec_3'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("rec_3");
   //Edge symbol end:'rec_3'

    //=========================================================

    //Edge symbol: 'rec_4'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("rec_4");
   //Edge symbol end:'rec_4'

    //=========================================================

    //Edge symbol: 'rec_5'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("rec_5");
   //Edge symbol end:'rec_5'

    //=========================================================

    //Edge symbol: 'rec_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("rec_1");
   //Edge symbol end:'rec_1'

    //=========================================================

    //Edge symbol: 'btnR_1'
    (function (symbolName) {

    })("btnR_1");
   //Edge symbol end:'btnR_1'

    //=========================================================

    //Edge symbol: 'btnR_2'
    (function (symbolName) {

    })("btnR_2");
   //Edge symbol end:'btnR_2'

    //=========================================================

    //Edge symbol: 'btnR_3'
    (function (symbolName) {

    })("btnR_3");
   //Edge symbol end:'btnR_3'

    //=========================================================

    //Edge symbol: 'btnR_4'
    (function (symbolName) {

    })("btnR_4");
   //Edge symbol end:'btnR_4'

    //=========================================================

    //Edge symbol: 'btnR_5'
    (function (symbolName) {

    })("btnR_5");
   //Edge symbol end:'btnR_5'

    //=========================================================

    //Edge symbol: 'btnR_6'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnR_6");
   //Edge symbol end:'btnR_6'

    //=========================================================

    //Edge symbol: 'Tool_audio_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_creditos");
   //Edge symbol end:'Tool_creditos'

    //=========================================================

    //Edge symbol: 'Tool_audio_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_ayuda");
   //Edge symbol end:'Tool_ayuda'

    //=========================================================

    //Edge symbol: 'Tool_creditos_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_full");
   //Edge symbol end:'Tool_full'

    //=========================================================

    //Edge symbol: 'Tool_full_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_info");
   //Edge symbol end:'Tool_info'

    //=========================================================

    //Edge symbol: 'Tool_info_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("Tool_accesibilidad");
   //Edge symbol end:'Tool_accesibilidad'

    //=========================================================

    //Edge symbol: 'btn_audio_1'
    (function (symbolName) {

    })("btn_full");
   //Edge symbol end:'btn_full'

    //=========================================================

    //Edge symbol: 'btn_full_1'
    (function (symbolName) {

    })("btn_ayuda");
   //Edge symbol end:'btn_ayuda'

    //=========================================================

    //Edge symbol: 'btn_full_1'
    (function (symbolName) {

    })("btn_creditos");
   //Edge symbol end:'btn_creditos'

    //=========================================================

    //Edge symbol: 'btn_creditos_1'
    (function (symbolName) {

    })("btn_info");
   //Edge symbol end:'btn_info'

    //=========================================================

    //Edge symbol: 'btn_info_1'
    (function (symbolName) {

    })("btn_accesibilidad");
   //Edge symbol end:'btn_accesibilidad'

    //=========================================================

    //Edge symbol: 'punto_A'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("punto_A");
   //Edge symbol end:'punto_A'

    //=========================================================

    //Edge symbol: 'vocabulario'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("vocabulario");
   //Edge symbol end:'vocabulario'

    //=========================================================

    //Edge symbol: 'btnR7'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("rec_7");
   //Edge symbol end:'rec_7'

    //=========================================================

    //Edge symbol: 'overlay'
    (function (symbolName) {

    })("overlay");
   //Edge symbol end:'overlay'

    //=========================================================

    //Edge symbol: 'container_overlay'
    (function (symbolName) {

    })("container_overlay");
   //Edge symbol end:'container_overlay'

    //=========================================================

    //Edge symbol: 'contenedor_home'
    (function (symbolName) {

    })("contenedor_home");
   //Edge symbol end:'contenedor_home'

    //=========================================================

    //Edge symbol: 'overlay_portada'
    (function (symbolName) {

    })("overlay_portada");
   //Edge symbol end:'overlay_portada'

    //=========================================================

    //Edge symbol: 'back_contenedor_home'
    (function (symbolName) {

    })("back_contenedor_home");
   //Edge symbol end:'back_contenedor_home'

    //=========================================================

    //Edge symbol: 'menu_grafico'
    (function (symbolName) {

    })("menu_grafico");
   //Edge symbol end:'menu_grafico'

    //=========================================================

    //Edge symbol: 'btn_menugrafico'
    (function (symbolName) {

    })("btn_menugrafico");
   //Edge symbol end:'btn_menugrafico'

    //=========================================================

    //Edge symbol: 'titulo'
    (function (symbolName) {

    })("titulo");
   //Edge symbol end:'titulo'

    //=========================================================

    //Edge symbol: 'btn_PA'
    (function (symbolName) {

    })("btn_PA");
   //Edge symbol end:'btn_PA'

    //=========================================================

    //Edge symbol: 'btn_PA_1'
    (function (symbolName) {

    })("btn_VC");
   //Edge symbol end:'btn_VC'

    //=========================================================

    //Edge symbol: 'btnr_6'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_6");
   //Edge symbol end:'btnr_6'

    //=========================================================

    //Edge symbol: 'btnr_5'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_5");
   //Edge symbol end:'btnr_5'

    //=========================================================

    //Edge symbol: 'btnr_4'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_4");
   //Edge symbol end:'btnr_4'

    //=========================================================

    //Edge symbol: 'btnr_3'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_3");
   //Edge symbol end:'btnr_3'

    //=========================================================

    //Edge symbol: 'btnr_2'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_2");
   //Edge symbol end:'btnr_2'

    //=========================================================

    //Edge symbol: 'btnr_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_1");
   //Edge symbol end:'btnr_1'

    //=========================================================

    //Edge symbol: 'btnR_8'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("btnr_7");
   //Edge symbol end:'btnr_7'

    //=========================================================

    //Edge symbol: 'btn_sena'
    (function (symbolName) {

    })("btn_sena");
   //Edge symbol end:'btn_sena'

   //=========================================================
   
   //Edge symbol: 'ruta'
   (function(symbolName) {   
   
   })("ruta");
   //Edge symbol end:'ruta'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-7659645");