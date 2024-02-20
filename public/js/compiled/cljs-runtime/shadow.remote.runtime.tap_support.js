goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__24718,p__24719){
var map__24722 = p__24718;
var map__24722__$1 = cljs.core.__destructure_map(map__24722);
var svc = map__24722__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24722__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24722__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24722__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24723 = p__24719;
var map__24723__$1 = cljs.core.__destructure_map(map__24723);
var msg = map__24723__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24723__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24723__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24723__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24723__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__24725,p__24726){
var map__24727 = p__24725;
var map__24727__$1 = cljs.core.__destructure_map(map__24727);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24727__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__24728 = p__24726;
var map__24728__$1 = cljs.core.__destructure_map(map__24728);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24728__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__24732,p__24733){
var map__24735 = p__24732;
var map__24735__$1 = cljs.core.__destructure_map(map__24735);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24735__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24735__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24736 = p__24733;
var map__24736__$1 = cljs.core.__destructure_map(map__24736);
var msg = map__24736__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24736__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__24742,tid){
var map__24743 = p__24742;
var map__24743__$1 = cljs.core.__destructure_map(map__24743);
var svc = map__24743__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24743__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__24754 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__24755 = null;
var count__24756 = (0);
var i__24757 = (0);
while(true){
if((i__24757 < count__24756)){
var vec__24784 = chunk__24755.cljs$core$IIndexed$_nth$arity$2(null,i__24757);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24784,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24784,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24831 = seq__24754;
var G__24832 = chunk__24755;
var G__24833 = count__24756;
var G__24834 = (i__24757 + (1));
seq__24754 = G__24831;
chunk__24755 = G__24832;
count__24756 = G__24833;
i__24757 = G__24834;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24754);
if(temp__5804__auto__){
var seq__24754__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24754__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24754__$1);
var G__24837 = cljs.core.chunk_rest(seq__24754__$1);
var G__24838 = c__5525__auto__;
var G__24839 = cljs.core.count(c__5525__auto__);
var G__24840 = (0);
seq__24754 = G__24837;
chunk__24755 = G__24838;
count__24756 = G__24839;
i__24757 = G__24840;
continue;
} else {
var vec__24789 = cljs.core.first(seq__24754__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24789,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24789,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24842 = cljs.core.next(seq__24754__$1);
var G__24843 = null;
var G__24844 = (0);
var G__24845 = (0);
seq__24754 = G__24842;
chunk__24755 = G__24843;
count__24756 = G__24844;
i__24757 = G__24845;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__24745_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__24745_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__24746_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__24746_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__24747_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__24747_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__24748_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__24748_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__24811){
var map__24816 = p__24811;
var map__24816__$1 = cljs.core.__destructure_map(map__24816);
var svc = map__24816__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24816__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
