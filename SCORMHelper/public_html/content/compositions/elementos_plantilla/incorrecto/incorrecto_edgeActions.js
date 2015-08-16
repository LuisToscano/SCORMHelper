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
      
      
      Symbol.bindElementAction(compId, symbolName, "${cerrar_inco}", "click", function(sym, e) {
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
   
   //Edge symbol: 'cerrar_inco'
   (function(symbolName) {   
   
   })("cerrar_inco");
   //Edge symbol end:'cerrar_inco'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-25249914");