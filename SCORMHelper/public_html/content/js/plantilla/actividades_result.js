/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//<editor-fold defaultstate="collapsed" desc="Actividades CREATED">
/* El recurso envía un evento a la plantilla informando que ya está creado 
 * y está listo para recibir su estado inicial
 */
$(document).on("EDGE_Plantilla_creationComplete", function (evt) {
    //var temp_pagina = evt.identify;
    EDGE_Plantilla.debug ? console.log(evt) : false;

    switch (evt.identify.actividad) {
        case "drag_drop":
            drag_drop_toscano_created(evt);
            break;
        case "drag_drop_many":
            drag_drop_toscano_created(evt);
            break;
        case "pick_many":
            pick_many_toscano_created(evt);
            break;
        case "filling_blanks":
            filling_blanks_santiago_created(evt);
            break;
        case "sortable":
            sortable_santiago_created(evt);
            break;
        case "select":
            selecting_blanks_santiago_created(evt);
            break;
        case "R6":
            R6_heiner_created(evt);
            break;
        case "R5_QQSM":
            R6_heiner_created(evt);
            break;
        case "sopa_letras":
            sopa_letras_toscano_created(evt);
            break;
        case "concentrese":
            concentrese_santiago_created(evt);
            break;
        default:
            console.error("Creation inexistente", evt.identify);
            break;
    }
});

function concentrese_santiago_created(evt) {
    EDGE_Plantilla.debug ? console.log(evt) : false;
    //EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

    // previous_data debe ser interpretado del scorm

    var objEvt = {
        type: "EDGE_Recurso_sendPreviousData",
        block: false,
        previous_data: read_interactions(evt),
        attempts: 0,
        sym: evt.sym
    };

    objEvt = merge_options(objEvt, read_extra_data(evt));

    if (objEvt.block) {
        objEvt.show_answers = true;
    }

    send_interactions(evt.identify, objEvt, "created");
}

function sopa_letras_toscano_created(evt) {
    EDGE_Plantilla.debug ? console.log(evt) : false;
    //EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

    // previous_data debe ser interpretado del scorm

    var objEvt = {
        type: "EDGE_Recurso_sendPreviousData",
        block: false,
        previous_data: read_interactions(evt),
        attempts: 0,
        sym: evt.sym
    };

    objEvt = merge_options(objEvt, read_extra_data(evt));

    if (objEvt.block) {
        objEvt.show_answers = true;
    }

    send_interactions(evt.identify, objEvt, "created");
}

function R6_heiner_created(evt) {
    var objEvt = {
        type: "EDGE_Recurso_sendPreviousData",
        previous_data: get_interactions_by_start(evt),
        sym: evt.sym,
        block: false,
        attempts: 0
    };

    objEvt = merge_options(objEvt, read_extra_data(evt));

    //console.log(objEvt);

    send_interactions(evt.identify, objEvt, "created");
}

function selecting_blanks_santiago_created(evt) {
    var objEvt = {
        type: "EDGE_Recurso_sendPreviousData",
        previous_data: read_interactions(evt),
        sym: evt.sym,
        block: false,
        attempts: 0
    };

    objEvt = merge_options(objEvt, read_extra_data(evt));

    //console.log(objEvt);

    send_interactions(evt.identify, objEvt, "created");
}

function filling_blanks_santiago_created(evt) {
    var objEvt = {
        type: "EDGE_Recurso_sendPreviousData",
        previous_data: read_interactions(evt),
        sym: evt.sym,
        block: false,
        attempts: 0
    };

    objEvt = merge_options(objEvt, read_extra_data(evt));

    //console.log(objEvt);

    send_interactions(evt.identify, objEvt, "created");
}

function sortable_santiago_created(evt) {
    var objEvt = {
        type: "EDGE_Recurso_sendPreviousData",
        previous_data: read_interactions(evt),
        sym: evt.sym,
        block: false,
        attempts: 0
    };

    objEvt = merge_options(objEvt, read_extra_data(evt));

    send_interactions(evt.identify, objEvt, "created");
}

function drag_drop_toscano_created(evt) {
    EDGE_Plantilla.debug ? console.log(evt) : false;
    //EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

    // previous_data debe ser interpretado del scorm

    var objEvt = {
        type: "EDGE_Recurso_sendPreviousData",
        block: false,
        previous_data: read_interactions(evt),
        attempts: 0,
        sym: evt.sym
    };

    objEvt = merge_options(objEvt, read_extra_data(evt));

    if (objEvt.block) {
        objEvt.show_answers = true;
    }

    send_interactions(evt.identify, objEvt, "created");
}

function pick_many_toscano_created(evt) {
    EDGE_Plantilla.debug ? console.log(evt) : false;
    //EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

    var objEvt = {
        type: "EDGE_Recurso_sendPreviousData",
        block: false,
        previous_data: read_interactions(evt),
        attempts: 0,
        sym: evt.sym
    };
    objEvt = merge_options(objEvt, read_extra_data(evt));

    if (objEvt.block) {
        objEvt.show_answers = true;
    }

    send_interactions(evt.identify, objEvt, "created");
}
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Actividades SUBMIT">

/* El recurso ha enviado una petición de Submit, la plantilla debe decidir
 * que hacer con este request y enviarle una respuesta para que reaccione
 */
$(document).on("EDGE_Plantilla_submitApplied", function (evt) {
    //var temp_pagina = evt.identify;
    EDGE_Plantilla.debug ? console.log(evt) : false;
    switch (evt.identify.actividad) {
        case "drag_drop":
            drag_drop_toscano_submit(evt);
            break;
        case "drag_drop_many":
            drag_drop_toscano_submit(evt);
            break;
        case "pick_many":
            pick_many_toscano_submit(evt);
            break;
        case "select":
            selecting_blanks_santiago_submit(evt);
            break;
        case "filling_blanks":
            filling_blanks_santiago_submit(evt);
            break;
        case "sortable":
            sortable_santiago_submit(evt);
            break;
        case "R6":
            R6_heiner_submit(evt);
            break;
        case "sopa_letras":
            sopa_letras_toscano_submit(evt);
            break;
        case "concentrese":
            concentrese_santiago_submit(evt);
            break;
        case "R5_QQSM":
            R5_QQSM_heiner_submit(evt);
            break;
        default:
            console.error("Submit inexistente", evt.identify);
            break;
    }
});

function R5_QQSM_heiner_submit(evt) {
    var strRetro = null;

    if (evt.attempts >= evt.attempts_limit) {
        return false;
    }

    merge_extra_scorm(evt.extra_data);

    var objEvt = {
        type: "EDGE_Recurso_postSubmitApplied",
        sym: evt.sym
    };

    if (!isEmpty(evt.timer) && evt.timer.time_out) {
        delete evt.timer.time_out;
        strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
        var timer = {reset_timer: true};
        objEvt = merge_options(objEvt, {timer: timer});
    } else {
        if (evt.results === "neutral") {
            strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
            evt.results = "neutral";
            EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
        }
    }

    if (evt.results === "correct") {
        EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
        objEvt = merge_options(objEvt, {
            block: true,
            show_answers: false,
            attempts: evt.attempts
        });
        strRetro = isEmpty(strRetro) ? "correct" : strRetro;

    } else if (evt.results === "incorrect") {
        if (!isEmpty(evt.timer)) {
            timer = merge_options(timer, {reset_timer: true});
            objEvt = merge_options(objEvt, {timer: timer});
        }
        EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
        var attemps = attemps_answer(evt);
        objEvt = merge_options(objEvt, attemps);
        
        if (!attemps.block) {
            strRetro = isEmpty(strRetro) ? "nuevo_intento" : strRetro;
        }else{
            strRetro = "incorrect";
        }
    }

    retroalimentacion(strRetro, "R6");
    save_extra_data(objEvt, evt);
    merge_temp_scorm(evt.answer);
    send_interactions(evt.identify, objEvt, evt.results);
}

function sopa_letras_toscano_submit(evt) {
    //var sym = EDGE_Plantilla.plantilla_sym;
    //var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
    var strRetro = null;

    if (evt.attempts >= evt.attempts_limit) {
        return false;
    }

    var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};
    if (!isEmpty(evt.timer)) {
        var timer = {remaining_time: evt.timer.remaining_time, current_state: evt.timer.current_state};

        if (evt.timer.time_out) {
            delete evt.timer.time_out;
            strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
            timer = merge_options(timer, {reset_timer: true});
        } else {
            if (!check_answers(evt)) {
                strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
                evt.results = "neutral";
                EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
            }
        }
        console.log(timer);
        objEvt = merge_options(objEvt, {timer: timer});
    }

    if (!isEmpty(evt.response_pattern)) {
        objEvt = merge_options(objEvt, {response_pattern: evt.response_pattern});
    }

    if (evt.results === "correct") {
        EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
        objEvt = merge_options(objEvt, {
            block: true,
            show_answers: false,
            attempts: evt.attempts
        });
        strRetro = isEmpty(strRetro) ? "correct" : strRetro;

    } else if (evt.results === "incorrect") {
        if (!isEmpty(evt.timer)) {
            timer = merge_options(timer, {reset_timer: true});
            objEvt = merge_options(objEvt, {timer: timer});
        }
        EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
        var attemps = attemps_answer(evt);
        objEvt = merge_options(objEvt, attemps);
        
        if (!attemps.block) {
            strRetro = isEmpty(strRetro) ? "nuevo_intento" : strRetro;
        }else{
            strRetro = "incorrect";
        }
    }

    retroalimentacion(strRetro);
    upload_interaction(evt.question, evt.answer, evt.results, evt.interactionType, evt);
    save_extra_data(objEvt, evt);
    send_interactions(evt.identify, objEvt, evt.results);
}

function concentrese_santiago_submit(evt) {
    //var sym = EDGE_Plantilla.plantilla_sym;
    //var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
    var strRetro = null;

    if (evt.attempts >= evt.attempts_limit) {
        return false;
    }

    var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};
    if (!isEmpty(evt.timer)) {
        var timer = {remaining_time: evt.timer.remaining_time, current_state: evt.timer.current_state};

        if (evt.timer.time_out) {
            delete evt.timer.time_out;
            strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
            timer = merge_options(timer, {reset_timer: true});
        } else {
            if (!check_answers(evt)) {
                strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
                evt.results = "neutral";
                EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
            }
        }
        console.log(timer);
        objEvt = merge_options(objEvt, {timer: timer});
    }

    if (!isEmpty(evt.response_pattern)) {
        objEvt = merge_options(objEvt, {response_pattern: evt.response_pattern});
    }

    if (evt.results === "correct") {
        EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
        objEvt = merge_options(objEvt, {
            block: true,
            show_answers: false,
            attempts: evt.attempts
        });
        strRetro = "correct";

    } else if (evt.results === "incorrect") {
        if (!isEmpty(evt.timer)) {
            timer = merge_options(timer, {reset_timer: true});
            objEvt = merge_options(objEvt, {timer: timer});
        }
        EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
        var attemps = attemps_answer(evt);
        objEvt = merge_options(objEvt, attemps);
        
        if (!attemps.block) {
            strRetro = isEmpty(strRetro) ? "nuevo_intento" : strRetro;
        }else{
            strRetro = "incorrect";
        }
    }

    retroalimentacion(strRetro);
    upload_interaction(evt.question, evt.answer, evt.results, evt.interactionType, evt);
    save_extra_data(objEvt, evt);
    send_interactions(evt.identify, objEvt, evt.results);
}

function selecting_blanks_santiago_submit(evt) {
    var strRetro = null;

    if (evt.attempts >= evt.attempts_limit) {
        return false;
    }

    var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

    if (!isEmpty(evt.timer) && evt.timer.time_out) {
        delete evt.timer.time_out;
        strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
        var timer = {reset_timer: true};
        objEvt = merge_options(objEvt, {timer: timer});
    } else {
        if (!check_answers(evt)) {
            strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
            evt.results = "neutral";
            EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
        }
    }

    if (evt.results === "correct") {
        EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
        objEvt = merge_options(objEvt, {
            block: true,
            show_answers: false,
            attempts: evt.attempts
        });
        strRetro = isEmpty(strRetro) ? "correct" : strRetro;

    } else if (evt.results === "incorrect") {
        if (!isEmpty(evt.timer)) {
            timer = merge_options(timer, {reset_timer: true});
            objEvt = merge_options(objEvt, {timer: timer});
        }
        EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
        var attemps = attemps_answer(evt);
        objEvt = merge_options(objEvt, attemps);
        
        if (!attemps.block) {
            strRetro = isEmpty(strRetro) ? "nuevo_intento" : strRetro;
        }else{
            strRetro = "incorrect";
        }
    }

    retroalimentacion(strRetro);
    save_extra_data(objEvt, evt);
    upload_interaction(evt.json.preguntas, evt.answer, evt.position_which_is_right, evt.interactionType, evt);
    send_interactions(evt.identify, objEvt, evt.results);
}

function filling_blanks_santiago_submit(evt) {
    var strRetro = null;
    if (evt.attempts >= evt.attempts_limit) {
        return false;
    }

    var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

    if (!isEmpty(evt.timer) && evt.timer.time_out) {
        delete evt.timer.time_out;
        strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
        var timer = {reset_timer: true};
        objEvt = merge_options(objEvt, {timer: timer});
    } else {
        if (!check_answers(evt)) {
            strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
            evt.results = "neutral";
            EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
        }
    }

    if (evt.results === "correct") {
        EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
        objEvt = merge_options(objEvt, {
            block: true,
            show_answers: false,
            attempts: evt.attempts
        });
        strRetro = isEmpty(strRetro) ? "correct" : strRetro;

    } else if (evt.results === "incorrect") {
        if (!isEmpty(evt.timer)) {
            timer = merge_options(timer, {reset_timer: true});
            objEvt = merge_options(objEvt, {timer: timer});
        }
        EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
        var attemps = attemps_answer(evt);
        objEvt = merge_options(objEvt, attemps);
        
        if (!attemps.block) {
            strRetro = isEmpty(strRetro) ? "nuevo_intento" : strRetro;
        }else{
            strRetro = "incorrect";
        }
    }

    retroalimentacion(strRetro);
    save_extra_data(objEvt, evt);
    upload_interaction(evt.json.preguntas, evt.answer, evt.position_which_is_right, evt.interactionType, evt);
    send_interactions(evt.identify, objEvt, evt.results);
}

function sortable_santiago_submit(evt) {

    var strRetro = null;
    if (evt.attempts >= evt.attempts_limit) {
        return false;
    }
    var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};
    if (!isEmpty(evt.timer) && evt.timer.time_out) {
        delete evt.timer.time_out;
        strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
        var timer = {reset_timer: true};
        objEvt = merge_options(objEvt, {timer: timer});
    } else {
        if (!check_answers(evt)) {
            strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
            evt.results = "neutral";
            EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
        }
    }
    if (evt.results === "correct") {
        EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
        objEvt = merge_options(objEvt, {
            block: true,
            show_answers: false,
            attempts: evt.attempts
        });
        strRetro = isEmpty(strRetro) ? "correct" : strRetro;

    } else if (evt.results === "incorrect") {
        if (!isEmpty(evt.timer)) {
            timer = merge_options(timer, {reset_timer: true});
            objEvt = merge_options(objEvt, {timer: timer});
        }
        EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
        var attemps = attemps_answer(evt);
        objEvt = merge_options(objEvt, attemps);
        
        if (!attemps.block) {
            strRetro = isEmpty(strRetro) ? "nuevo_intento" : strRetro;
        }else{
            strRetro = "incorrect";
        }
    }

    retroalimentacion(strRetro);
    save_extra_data(objEvt, evt);
    upload_interaction(evt.json.preguntas, evt.answer, evt.position_which_is_right, evt.interactionType, evt);
    send_interactions(evt.identify, objEvt, evt.results);
}

function drag_drop_toscano_submit(evt) {
    var strRetro = null;

    if (evt.attempts >= evt.attempts_limit) {
        return false;
    }

    var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

    if (!isEmpty(evt.timer) && evt.timer.time_out) {
        delete evt.timer.time_out;
        strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
        var timer = {reset_timer: true};
        objEvt = merge_options(objEvt, {timer: timer});
    } else {
        if (!check_answers(evt)) {
            strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
            evt.results = "neutral";
            EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
        }
    }

    if (evt.results === "correct") {
        EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS", evt.results) : false;
        objEvt = merge_options(objEvt, {
            block: true,
            show_answers: false,
            attempts: evt.attempts
        });
        if (!isEmpty(evt.timer)) {
            objEvt = merge_options(objEvt, {timer: evt.timer});
        }
        strRetro = isEmpty(strRetro) ? "correct" : strRetro;

    } else if (evt.results === "incorrect") {
        if (!isEmpty(evt.timer)) {
            timer = merge_options(timer, {reset_timer: true});
            objEvt = merge_options(objEvt, {timer: timer});
        }
        EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
        var attemps = attemps_answer(evt);
        objEvt = merge_options(objEvt, attemps);
        
        if (!attemps.block) {
            strRetro = isEmpty(strRetro) ? "nuevo_intento" : strRetro;
        }else{
            strRetro = "incorrect";
        }
    }


    retroalimentacion(strRetro);
    save_extra_data(objEvt, evt);
    upload_interaction(evt.question, evt.answer, evt.results, evt.interactionType, evt);

    send_interactions(evt.identify, objEvt, evt.results);
}

function pick_many_toscano_submit(evt) {
    //var sym = EDGE_Plantilla.plantilla_sym;
    //var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
    var strRetro = null;

    if (evt.attempts >= evt.attempts_limit) {
        return false;
    }

    var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

    if (!isEmpty(evt.timer) && evt.timer.time_out) {
        delete evt.timer.time_out;
        strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
        var timer = {reset_timer: true};
        objEvt = merge_options(objEvt, {timer: timer});
    } else {
        if (!check_answers(evt)) {
            strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
            evt.results = "neutral";
            EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
        }
    }

    if (evt.results === "correct") {
        EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
        objEvt = merge_options(objEvt, {
            block: true,
            show_answers: false,
            attempts: evt.attempts
        });
        strRetro = isEmpty(strRetro) ? "correct" : strRetro;

    } else if (evt.results === "incorrect") {
        if (!isEmpty(evt.timer)) {
            timer = merge_options(timer, {reset_timer: true});
            objEvt = merge_options(objEvt, {timer: timer});
        }
        EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
        var attemps = attemps_answer(evt);
        objEvt = merge_options(objEvt, attemps);
        
        if (!attemps.block) {
            strRetro = isEmpty(strRetro) ? "nuevo_intento" : strRetro;
        }else{
            strRetro = "incorrect";
        }
    }

    retroalimentacion(strRetro);
    upload_interaction(evt.question, evt.answer, evt.results, evt.interactionType, evt);
    save_extra_data(objEvt, evt);
    send_interactions(evt.identify, objEvt, evt.results);
}
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Check data Actividades">
function check_answers(evt) {
    var is_empty = false;
    if (!isEmpty(evt.answer)) {
        $.each(evt.answer, function (index, value) {
            //console.log(isEmpty(value));
            if (isEmpty(value)) {

                //mostrar_pagina("med_estrella");
                is_empty = true;
                return false;
            }
        });
    } else {
        is_empty = true;
    }


    if (is_empty) {
        return false;
    }

    return true;
}

function retroalimentacion(strRetroalimentacion, type) {
    if (!EDGE_Plantilla.allow_popups) {
        return;
    }
    EDGE_Plantilla.debug ? console.log("Retroalimentacion", strRetroalimentacion, type) : false;

    if (type === "R6" && strRetroalimentacion !== "complete_all") {
        return;
    }

    switch (strRetroalimentacion) {
        case "correct":
            mostrar_pagina("correcto");
            break;
        case "incorrect":
            mostrar_pagina("incorrecto");
            break;
        case "nuevo_intento":
            mostrar_pagina("nuevointento");
            break;
        case "complete_all":
            mostrar_pagina("incompleto");
            break;
    }
}

function send_interactions(pagina, objEvt, results, isSendToFather) {
    if (isEmpty(pagina)) {
        console.error("NOT SEND TO FATHER", objEvt);
        return false;
    } else {
        EDGE_Plantilla.debug ? console.log("SENDING...", pagina, objEvt) : false;
    }
    console.log("sending...");

    var sym_contenedor;

    if (!isEmpty(pagina.sym)) {
        sym_contenedor = buscar_sym(EDGE_Plantilla.plantilla_sym, pagina.sym);
    } else {
        sym_contenedor = buscar_sym(EDGE_Plantilla.plantilla_sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
    }

    switch (results) {
        case "correct":
        case "incorrect":
        case "created":
        case "neutral":
            if (isSendToFather) {
                EDGE_Plantilla.debug ? console.log("EVENT TO SEND FATHER", objEvt, sym_contenedor) : false;
                parent.$(parent.document).trigger(objEvt);
            } else {
                EDGE_Plantilla.debug ? console.log("EVENT TO SEND CHILD", objEvt, sym_contenedor) : false;
                $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger(objEvt);
            }
            break;
        default :
            break;
    }

}

function attemps_answer(evt) {

    var this_block = false;
    var this_show_answers = false;
    var intentos = evt.attempts + EDGE_Plantilla.attemps_increasment;

    var objAttemps = {};

    if (intentos >= evt.attempts_limit) {
        this_block = true;
        this_show_answers = true;
        //objAttemps = merge_options(objAttemps, {results: "incorrect"});
    }

    objAttemps = merge_options(objAttemps, {
        block: this_block,
        show_answers: this_show_answers,
        attempts: intentos
    });

    return objAttemps;
}
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="DB Data Actividades">
function merge_temp_scorm(temp_scorm) {
    EDGE_Plantilla.temp_scorm = merge_options(EDGE_Plantilla.temp_scorm, temp_scorm);
}

function upload_interaction(json_data, answers, estado_answers, typeInteraction, evt) {
    EDGE_Plantilla.debug ? console.log("Trying to upload interactions", json_data, pagina) : false;
    var pagina = evt.identify;
    if (isEmpty(pagina.recurso)) {
        console.error("DESEA GUARDAR UNA INTERACIÖN SIN UN RECURSO ASOCIADO...", pagina);
        return;
    }

    typeInteraction = isEmpty(typeInteraction) ? "other" : typeInteraction;

    var id_interaction = pagina.recurso + "000";
    var interactions = {};


    if (!isEmpty(pagina.interaction)) {
        if (pagina.interaction.ALL) {
            var estado;
            if (typeof estado_answers !== null) {
                estado = estado_answers ? "correct" : "incorrect";
            }

            if (estado_answers === "neutral") {
                return;
            }

            interactions[id_interaction + "0"] = {
                pregunta: json_data,
                respuesta: answers,
                estado: estado_answers,
                type: typeInteraction
            };
            
            var id = id_interaction + "0";
            SEND_INTERACTION_TO_LMS(id, JSON.stringify(answers), estado, json_data, "other");
        } else {
            $.each(answers, function (key, value) {
                var estado;
                if (typeof estado_answers !== null) {
                    estado = estado_answers[key] ? "correct" : "incorrect";
                } else {
                    estado = estado_answers[key];
                }
                if (estado === "neutral") {
                    return true;
                }
                //console.log("upload interactions", key);
                interactions[id_interaction + key] = {
                    pregunta: json_data[key].pregunta,
                    estado: estado,
                    type: typeInteraction,
                    respuesta: value//JSON.stringify(value)
                };
                
                var id = id_interaction + key;
                SEND_INTERACTION_TO_LMS(id, JSON.stringify(value), estado, json_data[key].pregunta, "other");
            });
        }
    }
    
    EDGE_Plantilla.temp_scorm = merge_options(EDGE_Plantilla.temp_scorm, interactions);
    EDGE_Plantilla.debug ? console.log("UPLOADING interactions", interactions, pagina, EDGE_Plantilla.temp_scorm) : false;

    console.log("UPLOADING interactions", interactions, pagina, EDGE_Plantilla.temp_scorm)

}

function get_interactions_by_start(evt) {
    var pagina = evt.identify;
    EDGE_Plantilla.debug ? console.log("READING interactions", pagina, evt) : false;
    var id_interaction = pagina.recurso;
    var objData = {};

    $.each(EDGE_Plantilla.temp_scorm, function (key, value) {
        if (key.startsWith(id_interaction)) {
            console.log("entra", key.substring(id_interaction.length, key.length));
            objData[key] = value.respuesta;
        }
    });

    if (!isEmpty(objData)) {
        if (pagina.interaction.ALL) {
            objData = objData[0];
        }
    }

    EDGE_Plantilla.debug ? console.log("READ interactions", objData, EDGE_Plantilla.temp_scorm) : false;

    return objData;
}

function read_interactions(evt) {
    var pagina = evt.identify;
    EDGE_Plantilla.debug ? console.log("READING interactions", pagina, evt) : false;
    var id_interaction = pagina.recurso;
    var objData = {};

    $.each(EDGE_Plantilla.temp_scorm, function (key, value) {
        if (key.startsWith(id_interaction)) {
            console.log("entra", key.substring(id_interaction.length, key.length));
            objData[key.substring(id_interaction.length, key.length)] = value.respuesta;
        }
    });

    if (!isEmpty(objData)) {
        var temp;
        if (pagina.interaction.ALL) {
            $.each(objData, function (key, value) {
                temp = value;
            });
            objData = temp;
        }
    }

    EDGE_Plantilla.debug ? console.log("READ interactions", objData, EDGE_Plantilla.temp_scorm) : false;

    return objData;
}

function save_extra_data(objData, evt) {
    var pagina = evt.identify;
    var id_interaction = pagina.recurso;
    var interaction = {};

    EDGE_Plantilla.debug ?
            console.log("READING extradata", objData) : false;

    var arrObjNeedKeys = [
        "attempts", "block", "timer", "response_pattern"
    ];

    var objTrueData = {};

    $.each(arrObjNeedKeys, function (key, value) {
        if (objData.hasOwnProperty([value])) {
            objTrueData[value] = objData[value];
        }
    });

    interaction[id_interaction] = objTrueData;

    EDGE_Plantilla.temp_scorm_suspendData =
            merge_options(EDGE_Plantilla.temp_scorm_suspendData, interaction);

    EDGE_Plantilla.debug ?
            console.log("UPLOADED extradata", EDGE_Plantilla.temp_scorm_suspendData) : false;
            
    WRITE_SUSPEND_DATA(JSON.stringify(EDGE_Plantilla.temp_scorm_suspendData));
}

function merge_extra_scorm(extra_scorm) {
    EDGE_Plantilla.temp_scorm_suspendData = merge_options(EDGE_Plantilla.temp_scorm_suspendData, extra_scorm);
}

function read_extra_data(evt) {
    var pagina = evt.identify;
    var id_interaction = pagina.recurso;
    var extra_data = EDGE_Plantilla.temp_scorm_suspendData[id_interaction];
    extra_data = !isEmpty(extra_data) ? extra_data : {};

    EDGE_Plantilla.debug ?
            console.log("READ extradata", extra_data) : false;
    return extra_data;
}
//</editor-fold>
