goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_24717 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_24717(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_24721 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_24721(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__23513 = coll;
var G__23514 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__23513,G__23514) : shadow.dom.lazy_native_coll_seq.call(null,G__23513,G__23514));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__23563 = arguments.length;
switch (G__23563) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__23578 = arguments.length;
switch (G__23578) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__23591 = arguments.length;
switch (G__23591) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__23603 = arguments.length;
switch (G__23603) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__23621 = arguments.length;
switch (G__23621) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__23632 = arguments.length;
switch (G__23632) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e23650){if((e23650 instanceof Object)){
var e = e23650;
return console.log("didnt support attachEvent",el,e);
} else {
throw e23650;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__23657 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__23658 = null;
var count__23659 = (0);
var i__23660 = (0);
while(true){
if((i__23660 < count__23659)){
var el = chunk__23658.cljs$core$IIndexed$_nth$arity$2(null,i__23660);
var handler_24764__$1 = ((function (seq__23657,chunk__23658,count__23659,i__23660,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23657,chunk__23658,count__23659,i__23660,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24764__$1);


var G__24766 = seq__23657;
var G__24767 = chunk__23658;
var G__24768 = count__23659;
var G__24769 = (i__23660 + (1));
seq__23657 = G__24766;
chunk__23658 = G__24767;
count__23659 = G__24768;
i__23660 = G__24769;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23657);
if(temp__5804__auto__){
var seq__23657__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23657__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23657__$1);
var G__24774 = cljs.core.chunk_rest(seq__23657__$1);
var G__24775 = c__5525__auto__;
var G__24776 = cljs.core.count(c__5525__auto__);
var G__24777 = (0);
seq__23657 = G__24774;
chunk__23658 = G__24775;
count__23659 = G__24776;
i__23660 = G__24777;
continue;
} else {
var el = cljs.core.first(seq__23657__$1);
var handler_24778__$1 = ((function (seq__23657,chunk__23658,count__23659,i__23660,el,seq__23657__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23657,chunk__23658,count__23659,i__23660,el,seq__23657__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24778__$1);


var G__24780 = cljs.core.next(seq__23657__$1);
var G__24781 = null;
var G__24782 = (0);
var G__24783 = (0);
seq__23657 = G__24780;
chunk__23658 = G__24781;
count__23659 = G__24782;
i__23660 = G__24783;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__23676 = arguments.length;
switch (G__23676) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__23687 = cljs.core.seq(events);
var chunk__23688 = null;
var count__23689 = (0);
var i__23690 = (0);
while(true){
if((i__23690 < count__23689)){
var vec__23703 = chunk__23688.cljs$core$IIndexed$_nth$arity$2(null,i__23690);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23703,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24792 = seq__23687;
var G__24793 = chunk__23688;
var G__24794 = count__23689;
var G__24795 = (i__23690 + (1));
seq__23687 = G__24792;
chunk__23688 = G__24793;
count__23689 = G__24794;
i__23690 = G__24795;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23687);
if(temp__5804__auto__){
var seq__23687__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23687__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23687__$1);
var G__24796 = cljs.core.chunk_rest(seq__23687__$1);
var G__24797 = c__5525__auto__;
var G__24798 = cljs.core.count(c__5525__auto__);
var G__24799 = (0);
seq__23687 = G__24796;
chunk__23688 = G__24797;
count__23689 = G__24798;
i__23690 = G__24799;
continue;
} else {
var vec__23710 = cljs.core.first(seq__23687__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23710,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24800 = cljs.core.next(seq__23687__$1);
var G__24801 = null;
var G__24802 = (0);
var G__24803 = (0);
seq__23687 = G__24800;
chunk__23688 = G__24801;
count__23689 = G__24802;
i__23690 = G__24803;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__23715 = cljs.core.seq(styles);
var chunk__23716 = null;
var count__23717 = (0);
var i__23718 = (0);
while(true){
if((i__23718 < count__23717)){
var vec__23733 = chunk__23716.cljs$core$IIndexed$_nth$arity$2(null,i__23718);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23733,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24806 = seq__23715;
var G__24807 = chunk__23716;
var G__24808 = count__23717;
var G__24809 = (i__23718 + (1));
seq__23715 = G__24806;
chunk__23716 = G__24807;
count__23717 = G__24808;
i__23718 = G__24809;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23715);
if(temp__5804__auto__){
var seq__23715__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23715__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23715__$1);
var G__24812 = cljs.core.chunk_rest(seq__23715__$1);
var G__24813 = c__5525__auto__;
var G__24814 = cljs.core.count(c__5525__auto__);
var G__24815 = (0);
seq__23715 = G__24812;
chunk__23716 = G__24813;
count__23717 = G__24814;
i__23718 = G__24815;
continue;
} else {
var vec__23738 = cljs.core.first(seq__23715__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23738,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24818 = cljs.core.next(seq__23715__$1);
var G__24819 = null;
var G__24820 = (0);
var G__24821 = (0);
seq__23715 = G__24818;
chunk__23716 = G__24819;
count__23717 = G__24820;
i__23718 = G__24821;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__23741_24822 = key;
var G__23741_24823__$1 = (((G__23741_24822 instanceof cljs.core.Keyword))?G__23741_24822.fqn:null);
switch (G__23741_24823__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_24826 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_24826,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_24826,"aria-");
}
})())){
el.setAttribute(ks_24826,value);
} else {
(el[ks_24826] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__23788){
var map__23789 = p__23788;
var map__23789__$1 = cljs.core.__destructure_map(map__23789);
var props = map__23789__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23789__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__23791 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23791,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23791,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23791,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__23796 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__23796,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__23796;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__23804 = arguments.length;
switch (G__23804) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__23813){
var vec__23814 = p__23813;
var seq__23815 = cljs.core.seq(vec__23814);
var first__23816 = cljs.core.first(seq__23815);
var seq__23815__$1 = cljs.core.next(seq__23815);
var nn = first__23816;
var first__23816__$1 = cljs.core.first(seq__23815__$1);
var seq__23815__$2 = cljs.core.next(seq__23815__$1);
var np = first__23816__$1;
var nc = seq__23815__$2;
var node = vec__23814;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23823 = nn;
var G__23824 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23823,G__23824) : create_fn.call(null,G__23823,G__23824));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23825 = nn;
var G__23826 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23825,G__23826) : create_fn.call(null,G__23825,G__23826));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__23828 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23828,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23828,(1),null);
var seq__23832_24847 = cljs.core.seq(node_children);
var chunk__23833_24848 = null;
var count__23834_24849 = (0);
var i__23835_24850 = (0);
while(true){
if((i__23835_24850 < count__23834_24849)){
var child_struct_24851 = chunk__23833_24848.cljs$core$IIndexed$_nth$arity$2(null,i__23835_24850);
var children_24852 = shadow.dom.dom_node(child_struct_24851);
if(cljs.core.seq_QMARK_(children_24852)){
var seq__23861_24853 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24852));
var chunk__23863_24854 = null;
var count__23864_24855 = (0);
var i__23865_24856 = (0);
while(true){
if((i__23865_24856 < count__23864_24855)){
var child_24857 = chunk__23863_24854.cljs$core$IIndexed$_nth$arity$2(null,i__23865_24856);
if(cljs.core.truth_(child_24857)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24857);


var G__24860 = seq__23861_24853;
var G__24861 = chunk__23863_24854;
var G__24862 = count__23864_24855;
var G__24863 = (i__23865_24856 + (1));
seq__23861_24853 = G__24860;
chunk__23863_24854 = G__24861;
count__23864_24855 = G__24862;
i__23865_24856 = G__24863;
continue;
} else {
var G__24864 = seq__23861_24853;
var G__24865 = chunk__23863_24854;
var G__24866 = count__23864_24855;
var G__24867 = (i__23865_24856 + (1));
seq__23861_24853 = G__24864;
chunk__23863_24854 = G__24865;
count__23864_24855 = G__24866;
i__23865_24856 = G__24867;
continue;
}
} else {
var temp__5804__auto___24868 = cljs.core.seq(seq__23861_24853);
if(temp__5804__auto___24868){
var seq__23861_24869__$1 = temp__5804__auto___24868;
if(cljs.core.chunked_seq_QMARK_(seq__23861_24869__$1)){
var c__5525__auto___24870 = cljs.core.chunk_first(seq__23861_24869__$1);
var G__24871 = cljs.core.chunk_rest(seq__23861_24869__$1);
var G__24872 = c__5525__auto___24870;
var G__24873 = cljs.core.count(c__5525__auto___24870);
var G__24874 = (0);
seq__23861_24853 = G__24871;
chunk__23863_24854 = G__24872;
count__23864_24855 = G__24873;
i__23865_24856 = G__24874;
continue;
} else {
var child_24875 = cljs.core.first(seq__23861_24869__$1);
if(cljs.core.truth_(child_24875)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24875);


var G__24876 = cljs.core.next(seq__23861_24869__$1);
var G__24877 = null;
var G__24878 = (0);
var G__24879 = (0);
seq__23861_24853 = G__24876;
chunk__23863_24854 = G__24877;
count__23864_24855 = G__24878;
i__23865_24856 = G__24879;
continue;
} else {
var G__24880 = cljs.core.next(seq__23861_24869__$1);
var G__24881 = null;
var G__24882 = (0);
var G__24883 = (0);
seq__23861_24853 = G__24880;
chunk__23863_24854 = G__24881;
count__23864_24855 = G__24882;
i__23865_24856 = G__24883;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24852);
}


var G__24884 = seq__23832_24847;
var G__24885 = chunk__23833_24848;
var G__24886 = count__23834_24849;
var G__24887 = (i__23835_24850 + (1));
seq__23832_24847 = G__24884;
chunk__23833_24848 = G__24885;
count__23834_24849 = G__24886;
i__23835_24850 = G__24887;
continue;
} else {
var temp__5804__auto___24888 = cljs.core.seq(seq__23832_24847);
if(temp__5804__auto___24888){
var seq__23832_24890__$1 = temp__5804__auto___24888;
if(cljs.core.chunked_seq_QMARK_(seq__23832_24890__$1)){
var c__5525__auto___24891 = cljs.core.chunk_first(seq__23832_24890__$1);
var G__24892 = cljs.core.chunk_rest(seq__23832_24890__$1);
var G__24893 = c__5525__auto___24891;
var G__24894 = cljs.core.count(c__5525__auto___24891);
var G__24895 = (0);
seq__23832_24847 = G__24892;
chunk__23833_24848 = G__24893;
count__23834_24849 = G__24894;
i__23835_24850 = G__24895;
continue;
} else {
var child_struct_24896 = cljs.core.first(seq__23832_24890__$1);
var children_24897 = shadow.dom.dom_node(child_struct_24896);
if(cljs.core.seq_QMARK_(children_24897)){
var seq__23889_24898 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24897));
var chunk__23891_24899 = null;
var count__23892_24900 = (0);
var i__23893_24901 = (0);
while(true){
if((i__23893_24901 < count__23892_24900)){
var child_24902 = chunk__23891_24899.cljs$core$IIndexed$_nth$arity$2(null,i__23893_24901);
if(cljs.core.truth_(child_24902)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24902);


var G__24904 = seq__23889_24898;
var G__24905 = chunk__23891_24899;
var G__24906 = count__23892_24900;
var G__24907 = (i__23893_24901 + (1));
seq__23889_24898 = G__24904;
chunk__23891_24899 = G__24905;
count__23892_24900 = G__24906;
i__23893_24901 = G__24907;
continue;
} else {
var G__24908 = seq__23889_24898;
var G__24909 = chunk__23891_24899;
var G__24910 = count__23892_24900;
var G__24911 = (i__23893_24901 + (1));
seq__23889_24898 = G__24908;
chunk__23891_24899 = G__24909;
count__23892_24900 = G__24910;
i__23893_24901 = G__24911;
continue;
}
} else {
var temp__5804__auto___24912__$1 = cljs.core.seq(seq__23889_24898);
if(temp__5804__auto___24912__$1){
var seq__23889_24913__$1 = temp__5804__auto___24912__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23889_24913__$1)){
var c__5525__auto___24914 = cljs.core.chunk_first(seq__23889_24913__$1);
var G__24915 = cljs.core.chunk_rest(seq__23889_24913__$1);
var G__24916 = c__5525__auto___24914;
var G__24917 = cljs.core.count(c__5525__auto___24914);
var G__24918 = (0);
seq__23889_24898 = G__24915;
chunk__23891_24899 = G__24916;
count__23892_24900 = G__24917;
i__23893_24901 = G__24918;
continue;
} else {
var child_24919 = cljs.core.first(seq__23889_24913__$1);
if(cljs.core.truth_(child_24919)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24919);


var G__24920 = cljs.core.next(seq__23889_24913__$1);
var G__24921 = null;
var G__24922 = (0);
var G__24923 = (0);
seq__23889_24898 = G__24920;
chunk__23891_24899 = G__24921;
count__23892_24900 = G__24922;
i__23893_24901 = G__24923;
continue;
} else {
var G__24924 = cljs.core.next(seq__23889_24913__$1);
var G__24925 = null;
var G__24926 = (0);
var G__24927 = (0);
seq__23889_24898 = G__24924;
chunk__23891_24899 = G__24925;
count__23892_24900 = G__24926;
i__23893_24901 = G__24927;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24897);
}


var G__24928 = cljs.core.next(seq__23832_24890__$1);
var G__24929 = null;
var G__24930 = (0);
var G__24931 = (0);
seq__23832_24847 = G__24928;
chunk__23833_24848 = G__24929;
count__23834_24849 = G__24930;
i__23835_24850 = G__24931;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__23933 = cljs.core.seq(node);
var chunk__23934 = null;
var count__23935 = (0);
var i__23936 = (0);
while(true){
if((i__23936 < count__23935)){
var n = chunk__23934.cljs$core$IIndexed$_nth$arity$2(null,i__23936);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24932 = seq__23933;
var G__24933 = chunk__23934;
var G__24934 = count__23935;
var G__24935 = (i__23936 + (1));
seq__23933 = G__24932;
chunk__23934 = G__24933;
count__23935 = G__24934;
i__23936 = G__24935;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23933);
if(temp__5804__auto__){
var seq__23933__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23933__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23933__$1);
var G__24937 = cljs.core.chunk_rest(seq__23933__$1);
var G__24938 = c__5525__auto__;
var G__24939 = cljs.core.count(c__5525__auto__);
var G__24940 = (0);
seq__23933 = G__24937;
chunk__23934 = G__24938;
count__23935 = G__24939;
i__23936 = G__24940;
continue;
} else {
var n = cljs.core.first(seq__23933__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24941 = cljs.core.next(seq__23933__$1);
var G__24942 = null;
var G__24943 = (0);
var G__24944 = (0);
seq__23933 = G__24941;
chunk__23934 = G__24942;
count__23935 = G__24943;
i__23936 = G__24944;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__23956 = arguments.length;
switch (G__23956) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__23969 = arguments.length;
switch (G__23969) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__23984 = arguments.length;
switch (G__23984) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___24951 = arguments.length;
var i__5727__auto___24952 = (0);
while(true){
if((i__5727__auto___24952 < len__5726__auto___24951)){
args__5732__auto__.push((arguments[i__5727__auto___24952]));

var G__24953 = (i__5727__auto___24952 + (1));
i__5727__auto___24952 = G__24953;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__24035_24954 = cljs.core.seq(nodes);
var chunk__24036_24955 = null;
var count__24037_24956 = (0);
var i__24038_24957 = (0);
while(true){
if((i__24038_24957 < count__24037_24956)){
var node_24958 = chunk__24036_24955.cljs$core$IIndexed$_nth$arity$2(null,i__24038_24957);
fragment.appendChild(shadow.dom._to_dom(node_24958));


var G__24959 = seq__24035_24954;
var G__24960 = chunk__24036_24955;
var G__24961 = count__24037_24956;
var G__24962 = (i__24038_24957 + (1));
seq__24035_24954 = G__24959;
chunk__24036_24955 = G__24960;
count__24037_24956 = G__24961;
i__24038_24957 = G__24962;
continue;
} else {
var temp__5804__auto___24963 = cljs.core.seq(seq__24035_24954);
if(temp__5804__auto___24963){
var seq__24035_24964__$1 = temp__5804__auto___24963;
if(cljs.core.chunked_seq_QMARK_(seq__24035_24964__$1)){
var c__5525__auto___24965 = cljs.core.chunk_first(seq__24035_24964__$1);
var G__24966 = cljs.core.chunk_rest(seq__24035_24964__$1);
var G__24967 = c__5525__auto___24965;
var G__24968 = cljs.core.count(c__5525__auto___24965);
var G__24969 = (0);
seq__24035_24954 = G__24966;
chunk__24036_24955 = G__24967;
count__24037_24956 = G__24968;
i__24038_24957 = G__24969;
continue;
} else {
var node_24970 = cljs.core.first(seq__24035_24964__$1);
fragment.appendChild(shadow.dom._to_dom(node_24970));


var G__24971 = cljs.core.next(seq__24035_24964__$1);
var G__24972 = null;
var G__24973 = (0);
var G__24974 = (0);
seq__24035_24954 = G__24971;
chunk__24036_24955 = G__24972;
count__24037_24956 = G__24973;
i__24038_24957 = G__24974;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq24023){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24023));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__24124_24976 = cljs.core.seq(scripts);
var chunk__24125_24977 = null;
var count__24126_24978 = (0);
var i__24127_24979 = (0);
while(true){
if((i__24127_24979 < count__24126_24978)){
var vec__24158_24981 = chunk__24125_24977.cljs$core$IIndexed$_nth$arity$2(null,i__24127_24979);
var script_tag_24982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24158_24981,(0),null);
var script_body_24983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24158_24981,(1),null);
eval(script_body_24983);


var G__24984 = seq__24124_24976;
var G__24985 = chunk__24125_24977;
var G__24986 = count__24126_24978;
var G__24987 = (i__24127_24979 + (1));
seq__24124_24976 = G__24984;
chunk__24125_24977 = G__24985;
count__24126_24978 = G__24986;
i__24127_24979 = G__24987;
continue;
} else {
var temp__5804__auto___24988 = cljs.core.seq(seq__24124_24976);
if(temp__5804__auto___24988){
var seq__24124_24989__$1 = temp__5804__auto___24988;
if(cljs.core.chunked_seq_QMARK_(seq__24124_24989__$1)){
var c__5525__auto___24990 = cljs.core.chunk_first(seq__24124_24989__$1);
var G__24991 = cljs.core.chunk_rest(seq__24124_24989__$1);
var G__24992 = c__5525__auto___24990;
var G__24993 = cljs.core.count(c__5525__auto___24990);
var G__24994 = (0);
seq__24124_24976 = G__24991;
chunk__24125_24977 = G__24992;
count__24126_24978 = G__24993;
i__24127_24979 = G__24994;
continue;
} else {
var vec__24175_24995 = cljs.core.first(seq__24124_24989__$1);
var script_tag_24996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24175_24995,(0),null);
var script_body_24997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24175_24995,(1),null);
eval(script_body_24997);


var G__24999 = cljs.core.next(seq__24124_24989__$1);
var G__25000 = null;
var G__25001 = (0);
var G__25002 = (0);
seq__24124_24976 = G__24999;
chunk__24125_24977 = G__25000;
count__24126_24978 = G__25001;
i__24127_24979 = G__25002;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__24178){
var vec__24184 = p__24178;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24184,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24184,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__24209 = arguments.length;
switch (G__24209) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__24252 = cljs.core.seq(style_keys);
var chunk__24253 = null;
var count__24254 = (0);
var i__24255 = (0);
while(true){
if((i__24255 < count__24254)){
var it = chunk__24253.cljs$core$IIndexed$_nth$arity$2(null,i__24255);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__25008 = seq__24252;
var G__25009 = chunk__24253;
var G__25010 = count__24254;
var G__25011 = (i__24255 + (1));
seq__24252 = G__25008;
chunk__24253 = G__25009;
count__24254 = G__25010;
i__24255 = G__25011;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24252);
if(temp__5804__auto__){
var seq__24252__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24252__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24252__$1);
var G__25012 = cljs.core.chunk_rest(seq__24252__$1);
var G__25013 = c__5525__auto__;
var G__25014 = cljs.core.count(c__5525__auto__);
var G__25015 = (0);
seq__24252 = G__25012;
chunk__24253 = G__25013;
count__24254 = G__25014;
i__24255 = G__25015;
continue;
} else {
var it = cljs.core.first(seq__24252__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__25016 = cljs.core.next(seq__24252__$1);
var G__25017 = null;
var G__25018 = (0);
var G__25019 = (0);
seq__24252 = G__25016;
chunk__24253 = G__25017;
count__24254 = G__25018;
i__24255 = G__25019;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k24282,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__24315 = k24282;
var G__24315__$1 = (((G__24315 instanceof cljs.core.Keyword))?G__24315.fqn:null);
switch (G__24315__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24282,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__24319){
var vec__24320 = p__24319;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24320,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24320,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24281){
var self__ = this;
var G__24281__$1 = this;
return (new cljs.core.RecordIter((0),G__24281__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24288,other24289){
var self__ = this;
var this24288__$1 = this;
return (((!((other24289 == null)))) && ((((this24288__$1.constructor === other24289.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24288__$1.x,other24289.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24288__$1.y,other24289.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24288__$1.__extmap,other24289.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k24282){
var self__ = this;
var this__5307__auto____$1 = this;
var G__24415 = k24282;
var G__24415__$1 = (((G__24415 instanceof cljs.core.Keyword))?G__24415.fqn:null);
switch (G__24415__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24282);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__24281){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__24421 = cljs.core.keyword_identical_QMARK_;
var expr__24422 = k__5309__auto__;
if(cljs.core.truth_((pred__24421.cljs$core$IFn$_invoke$arity$2 ? pred__24421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__24422) : pred__24421.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__24422)))){
return (new shadow.dom.Coordinate(G__24281,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24421.cljs$core$IFn$_invoke$arity$2 ? pred__24421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__24422) : pred__24421.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__24422)))){
return (new shadow.dom.Coordinate(self__.x,G__24281,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__24281),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__24281){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__24281,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__24302){
var extmap__5342__auto__ = (function (){var G__24444 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24302,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__24302)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24444);
} else {
return G__24444;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__24302),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__24302),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k24470,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__24483 = k24470;
var G__24483__$1 = (((G__24483 instanceof cljs.core.Keyword))?G__24483.fqn:null);
switch (G__24483__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24470,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__24489){
var vec__24490 = p__24489;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24469){
var self__ = this;
var G__24469__$1 = this;
return (new cljs.core.RecordIter((0),G__24469__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24471,other24472){
var self__ = this;
var this24471__$1 = this;
return (((!((other24472 == null)))) && ((((this24471__$1.constructor === other24472.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24471__$1.w,other24472.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24471__$1.h,other24472.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24471__$1.__extmap,other24472.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k24470){
var self__ = this;
var this__5307__auto____$1 = this;
var G__24506 = k24470;
var G__24506__$1 = (((G__24506 instanceof cljs.core.Keyword))?G__24506.fqn:null);
switch (G__24506__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24470);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__24469){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__24507 = cljs.core.keyword_identical_QMARK_;
var expr__24508 = k__5309__auto__;
if(cljs.core.truth_((pred__24507.cljs$core$IFn$_invoke$arity$2 ? pred__24507.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__24508) : pred__24507.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__24508)))){
return (new shadow.dom.Size(G__24469,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24507.cljs$core$IFn$_invoke$arity$2 ? pred__24507.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__24508) : pred__24507.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__24508)))){
return (new shadow.dom.Size(self__.w,G__24469,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__24469),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__24469){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__24469,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__24474){
var extmap__5342__auto__ = (function (){var G__24516 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24474,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__24474)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24516);
} else {
return G__24516;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__24474),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__24474),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__25043 = (i + (1));
var G__25044 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__25043;
ret = G__25044;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24540){
var vec__24541 = p__24540;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24541,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__24549 = arguments.length;
switch (G__24549) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__25054 = ps;
var G__25055 = (i + (1));
el__$1 = G__25054;
i = G__25055;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__24566 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24566,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24566,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24566,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__24569_25060 = cljs.core.seq(props);
var chunk__24570_25061 = null;
var count__24571_25062 = (0);
var i__24572_25063 = (0);
while(true){
if((i__24572_25063 < count__24571_25062)){
var vec__24586_25064 = chunk__24570_25061.cljs$core$IIndexed$_nth$arity$2(null,i__24572_25063);
var k_25065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24586_25064,(0),null);
var v_25066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24586_25064,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_25065);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_25065),v_25066);


var G__25067 = seq__24569_25060;
var G__25068 = chunk__24570_25061;
var G__25069 = count__24571_25062;
var G__25070 = (i__24572_25063 + (1));
seq__24569_25060 = G__25067;
chunk__24570_25061 = G__25068;
count__24571_25062 = G__25069;
i__24572_25063 = G__25070;
continue;
} else {
var temp__5804__auto___25071 = cljs.core.seq(seq__24569_25060);
if(temp__5804__auto___25071){
var seq__24569_25073__$1 = temp__5804__auto___25071;
if(cljs.core.chunked_seq_QMARK_(seq__24569_25073__$1)){
var c__5525__auto___25074 = cljs.core.chunk_first(seq__24569_25073__$1);
var G__25075 = cljs.core.chunk_rest(seq__24569_25073__$1);
var G__25076 = c__5525__auto___25074;
var G__25077 = cljs.core.count(c__5525__auto___25074);
var G__25078 = (0);
seq__24569_25060 = G__25075;
chunk__24570_25061 = G__25076;
count__24571_25062 = G__25077;
i__24572_25063 = G__25078;
continue;
} else {
var vec__24595_25079 = cljs.core.first(seq__24569_25073__$1);
var k_25080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24595_25079,(0),null);
var v_25081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24595_25079,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_25080);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_25080),v_25081);


var G__25085 = cljs.core.next(seq__24569_25073__$1);
var G__25086 = null;
var G__25087 = (0);
var G__25088 = (0);
seq__24569_25060 = G__25085;
chunk__24570_25061 = G__25086;
count__24571_25062 = G__25087;
i__24572_25063 = G__25088;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__24605 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24605,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24605,(1),null);
var seq__24608_25089 = cljs.core.seq(node_children);
var chunk__24610_25090 = null;
var count__24611_25091 = (0);
var i__24612_25092 = (0);
while(true){
if((i__24612_25092 < count__24611_25091)){
var child_struct_25093 = chunk__24610_25090.cljs$core$IIndexed$_nth$arity$2(null,i__24612_25092);
if((!((child_struct_25093 == null)))){
if(typeof child_struct_25093 === 'string'){
var text_25094 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_25094),child_struct_25093].join(''));
} else {
var children_25095 = shadow.dom.svg_node(child_struct_25093);
if(cljs.core.seq_QMARK_(children_25095)){
var seq__24632_25096 = cljs.core.seq(children_25095);
var chunk__24634_25097 = null;
var count__24635_25098 = (0);
var i__24636_25099 = (0);
while(true){
if((i__24636_25099 < count__24635_25098)){
var child_25100 = chunk__24634_25097.cljs$core$IIndexed$_nth$arity$2(null,i__24636_25099);
if(cljs.core.truth_(child_25100)){
node.appendChild(child_25100);


var G__25101 = seq__24632_25096;
var G__25102 = chunk__24634_25097;
var G__25103 = count__24635_25098;
var G__25104 = (i__24636_25099 + (1));
seq__24632_25096 = G__25101;
chunk__24634_25097 = G__25102;
count__24635_25098 = G__25103;
i__24636_25099 = G__25104;
continue;
} else {
var G__25105 = seq__24632_25096;
var G__25106 = chunk__24634_25097;
var G__25107 = count__24635_25098;
var G__25108 = (i__24636_25099 + (1));
seq__24632_25096 = G__25105;
chunk__24634_25097 = G__25106;
count__24635_25098 = G__25107;
i__24636_25099 = G__25108;
continue;
}
} else {
var temp__5804__auto___25109 = cljs.core.seq(seq__24632_25096);
if(temp__5804__auto___25109){
var seq__24632_25111__$1 = temp__5804__auto___25109;
if(cljs.core.chunked_seq_QMARK_(seq__24632_25111__$1)){
var c__5525__auto___25112 = cljs.core.chunk_first(seq__24632_25111__$1);
var G__25113 = cljs.core.chunk_rest(seq__24632_25111__$1);
var G__25114 = c__5525__auto___25112;
var G__25115 = cljs.core.count(c__5525__auto___25112);
var G__25116 = (0);
seq__24632_25096 = G__25113;
chunk__24634_25097 = G__25114;
count__24635_25098 = G__25115;
i__24636_25099 = G__25116;
continue;
} else {
var child_25118 = cljs.core.first(seq__24632_25111__$1);
if(cljs.core.truth_(child_25118)){
node.appendChild(child_25118);


var G__25119 = cljs.core.next(seq__24632_25111__$1);
var G__25120 = null;
var G__25121 = (0);
var G__25122 = (0);
seq__24632_25096 = G__25119;
chunk__24634_25097 = G__25120;
count__24635_25098 = G__25121;
i__24636_25099 = G__25122;
continue;
} else {
var G__25123 = cljs.core.next(seq__24632_25111__$1);
var G__25124 = null;
var G__25125 = (0);
var G__25126 = (0);
seq__24632_25096 = G__25123;
chunk__24634_25097 = G__25124;
count__24635_25098 = G__25125;
i__24636_25099 = G__25126;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_25095);
}
}


var G__25127 = seq__24608_25089;
var G__25128 = chunk__24610_25090;
var G__25129 = count__24611_25091;
var G__25130 = (i__24612_25092 + (1));
seq__24608_25089 = G__25127;
chunk__24610_25090 = G__25128;
count__24611_25091 = G__25129;
i__24612_25092 = G__25130;
continue;
} else {
var G__25131 = seq__24608_25089;
var G__25132 = chunk__24610_25090;
var G__25133 = count__24611_25091;
var G__25134 = (i__24612_25092 + (1));
seq__24608_25089 = G__25131;
chunk__24610_25090 = G__25132;
count__24611_25091 = G__25133;
i__24612_25092 = G__25134;
continue;
}
} else {
var temp__5804__auto___25135 = cljs.core.seq(seq__24608_25089);
if(temp__5804__auto___25135){
var seq__24608_25136__$1 = temp__5804__auto___25135;
if(cljs.core.chunked_seq_QMARK_(seq__24608_25136__$1)){
var c__5525__auto___25137 = cljs.core.chunk_first(seq__24608_25136__$1);
var G__25138 = cljs.core.chunk_rest(seq__24608_25136__$1);
var G__25139 = c__5525__auto___25137;
var G__25140 = cljs.core.count(c__5525__auto___25137);
var G__25141 = (0);
seq__24608_25089 = G__25138;
chunk__24610_25090 = G__25139;
count__24611_25091 = G__25140;
i__24612_25092 = G__25141;
continue;
} else {
var child_struct_25143 = cljs.core.first(seq__24608_25136__$1);
if((!((child_struct_25143 == null)))){
if(typeof child_struct_25143 === 'string'){
var text_25144 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_25144),child_struct_25143].join(''));
} else {
var children_25145 = shadow.dom.svg_node(child_struct_25143);
if(cljs.core.seq_QMARK_(children_25145)){
var seq__24648_25147 = cljs.core.seq(children_25145);
var chunk__24650_25148 = null;
var count__24651_25149 = (0);
var i__24652_25150 = (0);
while(true){
if((i__24652_25150 < count__24651_25149)){
var child_25151 = chunk__24650_25148.cljs$core$IIndexed$_nth$arity$2(null,i__24652_25150);
if(cljs.core.truth_(child_25151)){
node.appendChild(child_25151);


var G__25152 = seq__24648_25147;
var G__25153 = chunk__24650_25148;
var G__25154 = count__24651_25149;
var G__25155 = (i__24652_25150 + (1));
seq__24648_25147 = G__25152;
chunk__24650_25148 = G__25153;
count__24651_25149 = G__25154;
i__24652_25150 = G__25155;
continue;
} else {
var G__25156 = seq__24648_25147;
var G__25157 = chunk__24650_25148;
var G__25158 = count__24651_25149;
var G__25159 = (i__24652_25150 + (1));
seq__24648_25147 = G__25156;
chunk__24650_25148 = G__25157;
count__24651_25149 = G__25158;
i__24652_25150 = G__25159;
continue;
}
} else {
var temp__5804__auto___25160__$1 = cljs.core.seq(seq__24648_25147);
if(temp__5804__auto___25160__$1){
var seq__24648_25165__$1 = temp__5804__auto___25160__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24648_25165__$1)){
var c__5525__auto___25166 = cljs.core.chunk_first(seq__24648_25165__$1);
var G__25167 = cljs.core.chunk_rest(seq__24648_25165__$1);
var G__25168 = c__5525__auto___25166;
var G__25169 = cljs.core.count(c__5525__auto___25166);
var G__25170 = (0);
seq__24648_25147 = G__25167;
chunk__24650_25148 = G__25168;
count__24651_25149 = G__25169;
i__24652_25150 = G__25170;
continue;
} else {
var child_25171 = cljs.core.first(seq__24648_25165__$1);
if(cljs.core.truth_(child_25171)){
node.appendChild(child_25171);


var G__25173 = cljs.core.next(seq__24648_25165__$1);
var G__25174 = null;
var G__25175 = (0);
var G__25176 = (0);
seq__24648_25147 = G__25173;
chunk__24650_25148 = G__25174;
count__24651_25149 = G__25175;
i__24652_25150 = G__25176;
continue;
} else {
var G__25177 = cljs.core.next(seq__24648_25165__$1);
var G__25178 = null;
var G__25179 = (0);
var G__25180 = (0);
seq__24648_25147 = G__25177;
chunk__24650_25148 = G__25178;
count__24651_25149 = G__25179;
i__24652_25150 = G__25180;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_25145);
}
}


var G__25181 = cljs.core.next(seq__24608_25136__$1);
var G__25182 = null;
var G__25183 = (0);
var G__25184 = (0);
seq__24608_25089 = G__25181;
chunk__24610_25090 = G__25182;
count__24611_25091 = G__25183;
i__24612_25092 = G__25184;
continue;
} else {
var G__25185 = cljs.core.next(seq__24608_25136__$1);
var G__25186 = null;
var G__25187 = (0);
var G__25188 = (0);
seq__24608_25089 = G__25185;
chunk__24610_25090 = G__25186;
count__24611_25091 = G__25187;
i__24612_25092 = G__25188;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25189 = arguments.length;
var i__5727__auto___25190 = (0);
while(true){
if((i__5727__auto___25190 < len__5726__auto___25189)){
args__5732__auto__.push((arguments[i__5727__auto___25190]));

var G__25191 = (i__5727__auto___25190 + (1));
i__5727__auto___25190 = G__25191;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq24677){
var G__24678 = cljs.core.first(seq24677);
var seq24677__$1 = cljs.core.next(seq24677);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24678,seq24677__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__24686 = arguments.length;
switch (G__24686) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__21047__auto___25201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_24691){
var state_val_24692 = (state_24691[(1)]);
if((state_val_24692 === (1))){
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24691__$1,(2),once_or_cleanup);
} else {
if((state_val_24692 === (2))){
var inst_24688 = (state_24691[(2)]);
var inst_24689 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_24691__$1 = (function (){var statearr_24699 = state_24691;
(statearr_24699[(7)] = inst_24688);

return statearr_24699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24691__$1,inst_24689);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__20867__auto__ = null;
var shadow$dom$state_machine__20867__auto____0 = (function (){
var statearr_24704 = [null,null,null,null,null,null,null,null];
(statearr_24704[(0)] = shadow$dom$state_machine__20867__auto__);

(statearr_24704[(1)] = (1));

return statearr_24704;
});
var shadow$dom$state_machine__20867__auto____1 = (function (state_24691){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_24691);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e24705){var ex__20870__auto__ = e24705;
var statearr_24706_25204 = state_24691;
(statearr_24706_25204[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_24691[(4)]))){
var statearr_24707_25207 = state_24691;
(statearr_24707_25207[(1)] = cljs.core.first((state_24691[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25208 = state_24691;
state_24691 = G__25208;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
shadow$dom$state_machine__20867__auto__ = function(state_24691){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__20867__auto____0.call(this);
case 1:
return shadow$dom$state_machine__20867__auto____1.call(this,state_24691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__20867__auto____0;
shadow$dom$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__20867__auto____1;
return shadow$dom$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_24708 = f__21048__auto__();
(statearr_24708[(6)] = c__21047__auto___25201);

return statearr_24708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
