goog.provide('spelling_bee.core');
if((typeof spelling_bee !== 'undefined') && (typeof spelling_bee.core !== 'undefined') && (typeof spelling_bee.core.app_state !== 'undefined')){
} else {
spelling_bee.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
spelling_bee.core.hello_world = (function spelling_bee$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(spelling_bee.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and watch it change!"], null)], null);
});
spelling_bee.core.start = (function spelling_bee$core$start(){
var G__26861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spelling_bee.core.hello_world], null);
var G__26862 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26861,G__26862) : reagent.core.render_component.call(null,G__26861,G__26862));
});
spelling_bee.core.init = (function spelling_bee$core$init(){
return spelling_bee.core.start();
});
goog.exportSymbol('spelling_bee.core.init', spelling_bee.core.init);
spelling_bee.core.stop = (function spelling_bee$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=spelling_bee.core.js.map
