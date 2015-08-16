/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function isEmpty(obj) {
// null and undefined are "empty"
    if (obj === null)
        return true;
    if (typeof obj === 'undefined')
        return true;
    if (typeof obj === 'boolean') {
        return false;
    }
// Assume if it has a length property with a non-zero value
// that that property is correct.
    if (obj.length > 0)
        return false;
    if (obj.length === 0)
        return true;
// Otherwise, does it have any properties of its own?
// Note that this doesn't handle
// toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key))
            return false;
    }
    return true;
}

function merge_options(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
}