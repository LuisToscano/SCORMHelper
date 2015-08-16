$("body").on("EDGE_Recurso_promiseCreated", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    var objEvt = {
        type: "EDGE_Plantilla_creationComplete",
        sym: evt.sym,
        identify: stage.prop("ed_identify")
    };

    console.log("INTERACTION UTILITIES CREATED", objEvt, stage);
    parent.$(parent.document).trigger(objEvt);
});

function enviarEventoInteraccion(tipo, pregunta, respuesta, resultado, intentos_previos, limite_intentos, timerObj, sym) {
    var stage = $(sym.getComposition().getStage().ele);
    parent.$(parent.document).trigger({
        type: "EDGE_Plantilla_submitApplied",
        interactionType: tipo,
        question: pregunta,
        answer: respuesta,
        results: resultado,
        attempts: intentos_previos,
        attempts_limit: limite_intentos,
        timer: timerObj,
        sym: sym,
        identify: stage.prop("ed_identify")
    });
}

$("body").on("TimeOut", function (data) {
    var stage = $(data.sym.getComposition().getStage().ele);

    var timer = {};
    var timerObj = buscar_sym(data.sym, stage.prop("timer"), true);
    timer.remaining_time = 0;
    timer.time_out = true;
    timer.current_state = timerObj.prop("alertState");
    enviarEventoInteraccion(stage.prop("interaction_type"), stage.prop("pregunta"), "", "incorrect", stage.prop("intentos_previos"), stage.prop("num_intentos"), timer, data.sym);
});

function buscar_sym(sym, arrSymSearch, boolJQUERY) {
    var temp = sym;
    $.each(arrSymSearch, function (index, value) {
        //EDGE_Plantilla.debug ? console.log(temp, index, value, arrSymSearch) : false;
        try {
            if (!isEmpty(boolJQUERY) && index === arrSymSearch.length - 1) {
                temp = temp.$(value);
            } else {
                temp = temp.getSymbol(value);
            }
        } catch (e) {
            console.error("SYM no encontrado")
        }
    });
    //EDGE_Plantilla.debug ? console.log(temp, arrSymSearch, boolJQUERY) : false;
    return temp;
}

$("body").on("EDGE_Recurso_Submit", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    var pagina = stage.prop("ed_identify");

    switch (pagina.actividad) {
        case "drag_drop_many":
        case "drag_drop":
            checkAnswersDragAndDrop(evt.sym);
            break;
        case "pick_many":
            checkAnswersPickMany(evt.sym);
            break;
        default:
            console.error("INTERACCION IRRECONOCIBLE", pagina);
            break;
    }
});
