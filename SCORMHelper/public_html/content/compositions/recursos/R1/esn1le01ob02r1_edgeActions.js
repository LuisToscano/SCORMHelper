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
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${btnr1_exploremos}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var stage = $(sym.getComposition().getStage().ele);
                     parent.$(parent.document).trigger({
                         type: 'EDGE_Plantilla_ClosePortada',
                         sym: sym,
                         evt: e,
                         identify: stage.prop("ed_identify")
                     });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'funcioncomunicativa'
   (function(symbolName) {   
   
   })("funcioncomunicativa");
   //Edge symbol end:'funcioncomunicativa'

   //=========================================================
   
   //Edge symbol: 'funcioncomunicativa_1'
   (function(symbolName) {   
   
   })("discuta");
   //Edge symbol end:'discuta'

   //=========================================================
   
   //Edge symbol: 'btnr1_exploremos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("btnr1_exploremos");
   //Edge symbol end:'btnr1_exploremos'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-16656972");