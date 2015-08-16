// JavaScript Document
function cambiarColorBordes(sym, numRecurso) {
    //EDGE_Plantilla.debug ? console.log("CAMBIANDO COLORES BOTON", numRecurso, sym) : false;
    numRecurso = parseInt(numRecurso);
    for (var i = 1; i <= 7; i++) {
        if (i === numRecurso) {
            sym.getSymbol("btnr_" + i).$("borde").css("background-color", "rgba(255,182,0,1.00)");
            //EDGE_Plantilla.debug ? console.log("CAMBIANDO BORDE", sym.getSymbol("btnr_" + i).$("borde")) : false;
        }
        else
        {
            sym.getSymbol("btnr_" + i).$("borde").css("background-color", "rgba(204,204,204,1.00)");
        }
    }
}
