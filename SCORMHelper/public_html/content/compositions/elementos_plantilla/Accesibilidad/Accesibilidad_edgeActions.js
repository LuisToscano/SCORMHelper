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
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${cerrar_acce}", "click", function(sym, e) {
         parent.$(parent.document).trigger({
                                 type: 'EDGE_Plantilla_ClosePopup',
                                 sym: sym,
                                 evt: e
                             });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${descargable2}", "click", function(sym, e) {
         window.open("../../../media/pdf/accessibility.pdf", "_blank");

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
   
   //Edge symbol: 'cerrar_acce'
   (function(symbolName) {   
   
   })("cerrar_acce");
   //Edge symbol end:'cerrar_acce'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-13904317");