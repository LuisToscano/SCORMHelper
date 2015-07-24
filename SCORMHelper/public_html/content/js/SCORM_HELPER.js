/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var SCORM_HELP = {"launch_data": {}, "suspend_data": {}, "interactions": {}, "last_location": {}};
var IS_SCORM;

/******************************************************************************/

$(window).load(function () {
    SCORM_INITIALIZE();
});

$(window).unload(function () {
    SCORM_TERMINATE();
});

$(document).on('loadedInteractions', function (e) {
    jQuery.each(SCORM_HELP.interactions, function (id, val) {
        var intIndex = findInteraction(id);
        if (intIndex < 0) {
            intIndex = doGetValue("cmi.interactions._count");
            doSetValue("cmi.interactions." + intIndex + ".id", id);
            doSetValue("cmi.interactions." + intIndex + ".type", val.type);
            doSetValue("cmi.interactions." + intIndex + ".description", val.question);
        }
    });
});

/******************************************************************************/

function SCORM_INITIALIZE() {

    LOAD_INTERACTIONS();
    IS_SCORM = getAPI() != null;

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    if (doInitialize() !== "initialized") {
        READ_LAUNCH_DATA();

        var entry = doGetValue("cmi.entry");
        if (entry === "ab-initio") {
            //first time entrance
            doSetValue("cmi.exit", "suspend");
            doSetValue("cmi.completion_status", "incomplete");
        }
        else {
            //already entered
            READ_SUSPEND_DATA();
            SCORM_HELP.last_location = doGetValue("cmi.location");
        }
    }
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

function UPDATE_INTERACTION_DATA(id, response, result) {

    if (SCORM_HELP.interactions[id] !== null) {
        SCORM_HELP.interactions[id].response = response;
        SCORM_HELP.interactions[id].result = result;
    } else {
        console.log("Interaction " + id + " does not exist");
    }
}

/******************************************************************************/

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
}

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

    var sdata = doGetValue("cmi.suspend_data");
    if (sdata !== null && sdata.length > 0) {
        SCORM_HELP.suspend_data = jQuery.parseJSON(sdata);
    }
}

/******************************************************************************/

function WRITE_SUSPEND_DATA(data) {

    if (!IS_SCORM) {
        console.log("SCORM API can not be accessed");
        return;
    }

    SCORM_HELP.suspend_data = data;
    doSetValue("cmi.suspend_data", JSON.stringify(data));
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
    $.ajax({
        url: "../content/json/interactions.json"
    }).done(function (data) {
        SCORM_HELP.interactions = data;
        $.event.trigger({
            type: "loadedInteractions"
        });
    });
}




