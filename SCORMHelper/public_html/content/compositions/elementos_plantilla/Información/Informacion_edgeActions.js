/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${cerrar_info}", "click", function(sym, e) {
         parent.$(parent.document).trigger({
                                 type: 'EDGE_Plantilla_ClosePopup',
                                 sym: sym,
                                 evt: e
                             });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_cerrar_creditos'
   (function(symbolName) {   
   
   })("btn_cerrar_creditos");
   //Edge symbol end:'btn_cerrar_creditos'

   //=========================================================
   
   //Edge symbol: 'cerrar_info'
   (function(symbolName) {   
   
   })("cerrar_info");
   //Edge symbol end:'cerrar_info'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-13904317");