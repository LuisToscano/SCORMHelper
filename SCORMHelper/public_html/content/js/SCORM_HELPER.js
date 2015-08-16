/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var IS_SCORM;

/******************************************************************************/

/*
$(window).unload(function () {
    //SCORM_TERMINATE();
});
 */

/******************************************************************************/

function SCORM_INITIALIZE() {

    //LOAD_INTERACTIONS();
    IS_SCORM = getAPI() !== null;

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return "";
    }
    
    var suspend = ""; 

    if (doInitialize() !== "initialized") {
        //READ_LAUNCH_DATA();

        var entry = doGetValue("cmi.entry");
        if (entry === "ab-initio") {
            //first time entrance
            doSetValue("cmi.exit", "suspend");
            doSetValue("cmi.completion_status", "incomplete");
        }
        else {
            //already entered
            suspend = READ_SUSPEND_DATA();
            //SCORM_HELP.last_location = doGetValue("cmi.location");
        }
    }
    
    return suspend;
}

/******************************************************************************/

function SCORM_TERMINATE() {

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    return doTerminate();
}

/******************************************************************************/
/*
function UPDATE_INTERACTION_DATA(id, response, result) {

    if (SCORM_HELP.interactions[id] !== null) {
        SCORM_HELP.interactions[id].response = response;
        SCORM_HELP.interactions[id].result = result;
    } else {
        console.log("Interaction " + id + " does not exist");
    }
}*/

/******************************************************************************/

function SEND_INTERACTION_TO_LMS(id, response, result, description, type) {

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }
    
    var intIndex = findInteraction(id);
    doSetValue("cmi.interactions." + intIndex + ".description", description);
    doSetValue("cmi.interactions." + intIndex + ".type", type);
    doSetValue("cmi.interactions." + intIndex + ".result", result);
    doSetValue("cmi.interactions." + intIndex + ".learner_response", response);
}

/******************************************************************************/

/*
function SEND_INTERACTION_TO_LMS(id) {

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    if (SCORM_HELP.interactions[id] !== null && SCORM_HELP.interactions[id].response !== null && SCORM_HELP.interactions[id].result !== null) {
        var intIndex = findInteraction(id);
        if (intIndex >= 0) {
            doSetValue("cmi.interactions." + intIndex + ".learner_response", SCORM_HELP.interactions[id].response);
            doSetValue("cmi.interactions." + intIndex + ".result", SCORM_HELP.interactions[id].result);
        }
        else
        {
            console.log("Interaction " + id + " does not exist");
        }
    } else {
        console.log("Interaction data missing");
    }
}*/

/******************************************************************************/

function READ_LAUNCH_DATA() {

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    var ldata = doGetValue("cmi.launch_data");
    if (ldata !== null && ldata.length > 0) {
        SCORM_HELP.launch_data = jQuery.parseJSON(ldata);
    }
}

/******************************************************************************/

function READ_SUSPEND_DATA() {

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    return doGetValue("cmi.suspend_data");
}

/******************************************************************************/

function WRITE_SUSPEND_DATA(data) {

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    doSetValue("cmi.suspend_data", data);
}

/******************************************************************************/

function SET_OBJECTIVE_DESCRIPTION(id, description)
{
    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }
    
    var objIndex = findObjective(id);
    doSetValue("cmi.objectives."+objIndex+".description" , description);
}

/******************************************************************************/

function SET_OBJECTIVE_STATUS(id, status)
{
    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }
    
    var objIndex = findObjective(id);
    doSetValue("cmi.objectives."+objIndex+".success_status" , status);
}

/******************************************************************************/

function SET_TOTAL_SCORE(score, result) {

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    doSetValue("cmi.success_status", result);
    doSetValue("cmi.score.raw", score);
    doSetValue("cmi.score.scaled", (score / 100));
    doSetValue("cmi.completion_status", "completed");
    doSetValue("cmi.exit", "logout");
}

/******************************************************************************/

function CHANGE_LOCATION(location) {
    SCORM_HELP.last_location = location;

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    doSetValue("cmi.location", location);
}

/******************************************************************************/

function LOAD_INTERACTIONS() {
    
    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }
    
    //id, response, result, description, type
    var cont = doGetValue("cmi.interactions._count");
    var interactions = {};
    for(var i=0; i<cont; i++){
        var intObj = {};
        intObj.type = doGetValue("cmi.interactions."+i+".type");
        intObj.respuesta = jQuery.parseJSON(doGetValue("cmi.interactions."+i+".learner_response"));
        intObj.pregunta = doGetValue("cmi.interactions."+i+".description");
        intObj.result = doGetValue("cmi.interactions."+i+".result");
        interactions[doGetValue("cmi.interactions."+i+".id")] = intObj;
    }
    return interactions;
}




