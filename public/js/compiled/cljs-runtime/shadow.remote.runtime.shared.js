goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__21011){
var map__21012 = p__21011;
var map__21012__$1 = cljs.core.__destructure_map(map__21012);
var runtime = map__21012__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_21215 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_21215)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__21024 = runtime;
var G__21025 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_21215);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__21024,G__21025) : shadow.remote.runtime.shared.process.call(null,G__21024,G__21025));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__21027,res){
var map__21029 = p__21027;
var map__21029__$1 = cljs.core.__destructure_map(map__21029);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__21033 = res;
var G__21033__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21033,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__21033);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21033__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__21033__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__21050 = arguments.length;
switch (G__21050) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__21058,msg,handlers,timeout_after_ms){
var map__21063 = p__21058;
var map__21063__$1 = cljs.core.__destructure_map(map__21063);
var runtime = map__21063__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21219 = arguments.length;
var i__5727__auto___21220 = (0);
while(true){
if((i__5727__auto___21220 < len__5726__auto___21219)){
args__5732__auto__.push((arguments[i__5727__auto___21220]));

var G__21221 = (i__5727__auto___21220 + (1));
i__5727__auto___21220 = G__21221;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__21083,ev,args){
var map__21085 = p__21083;
var map__21085__$1 = cljs.core.__destructure_map(map__21085);
var runtime = map__21085__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21085__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__21086 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21089 = null;
var count__21090 = (0);
var i__21091 = (0);
while(true){
if((i__21091 < count__21090)){
var ext = chunk__21089.cljs$core$IIndexed$_nth$arity$2(null,i__21091);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21222 = seq__21086;
var G__21223 = chunk__21089;
var G__21224 = count__21090;
var G__21225 = (i__21091 + (1));
seq__21086 = G__21222;
chunk__21089 = G__21223;
count__21090 = G__21224;
i__21091 = G__21225;
continue;
} else {
var G__21226 = seq__21086;
var G__21227 = chunk__21089;
var G__21228 = count__21090;
var G__21229 = (i__21091 + (1));
seq__21086 = G__21226;
chunk__21089 = G__21227;
count__21090 = G__21228;
i__21091 = G__21229;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21086);
if(temp__5804__auto__){
var seq__21086__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21086__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21086__$1);
var G__21230 = cljs.core.chunk_rest(seq__21086__$1);
var G__21231 = c__5525__auto__;
var G__21232 = cljs.core.count(c__5525__auto__);
var G__21233 = (0);
seq__21086 = G__21230;
chunk__21089 = G__21231;
count__21090 = G__21232;
i__21091 = G__21233;
continue;
} else {
var ext = cljs.core.first(seq__21086__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__21235 = cljs.core.next(seq__21086__$1);
var G__21236 = null;
var G__21237 = (0);
var G__21238 = (0);
seq__21086 = G__21235;
chunk__21089 = G__21236;
count__21090 = G__21237;
i__21091 = G__21238;
continue;
} else {
var G__21239 = cljs.core.next(seq__21086__$1);
var G__21240 = null;
var G__21241 = (0);
var G__21242 = (0);
seq__21086 = G__21239;
chunk__21089 = G__21240;
count__21090 = G__21241;
i__21091 = G__21242;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq21075){
var G__21076 = cljs.core.first(seq21075);
var seq21075__$1 = cljs.core.next(seq21075);
var G__21077 = cljs.core.first(seq21075__$1);
var seq21075__$2 = cljs.core.next(seq21075__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21076,G__21077,seq21075__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__21132,p__21133){
var map__21137 = p__21132;
var map__21137__$1 = cljs.core.__destructure_map(map__21137);
var runtime = map__21137__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21137__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21138 = p__21133;
var map__21138__$1 = cljs.core.__destructure_map(map__21138);
var msg = map__21138__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21138__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__21145 = cljs.core.deref(state_ref);
var map__21145__$1 = cljs.core.__destructure_map(map__21145);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__21155,msg){
var map__21156 = p__21155;
var map__21156__$1 = cljs.core.__destructure_map(map__21156);
var runtime = map__21156__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21156__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__21166,key,p__21167){
var map__21168 = p__21166;
var map__21168__$1 = cljs.core.__destructure_map(map__21168);
var state = map__21168__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__21169 = p__21167;
var map__21169__$1 = cljs.core.__destructure_map(map__21169);
var spec = map__21169__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__21174,key,spec){
var map__21175 = p__21174;
var map__21175__$1 = cljs.core.__destructure_map(map__21175);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__21176_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__21176_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__21177_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__21177_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__21178_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__21178_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__21182_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__21182_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__21183_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__21183_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__21187,key){
var map__21188 = p__21187;
var map__21188__$1 = cljs.core.__destructure_map(map__21188);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21188__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__21191,msg){
var map__21192 = p__21191;
var map__21192__$1 = cljs.core.__destructure_map(map__21192);
var runtime = map__21192__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__21196,p__21197){
var map__21198 = p__21196;
var map__21198__$1 = cljs.core.__destructure_map(map__21198);
var runtime = map__21198__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__21199 = p__21197;
var map__21199__$1 = cljs.core.__destructure_map(map__21199);
var msg = map__21199__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__21202 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__21204 = null;
var count__21205 = (0);
var i__21206 = (0);
while(true){
if((i__21206 < count__21205)){
var map__21212 = chunk__21204.cljs$core$IIndexed$_nth$arity$2(null,i__21206);
var map__21212__$1 = cljs.core.__destructure_map(map__21212);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21212__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__21272 = seq__21202;
var G__21273 = chunk__21204;
var G__21274 = count__21205;
var G__21275 = (i__21206 + (1));
seq__21202 = G__21272;
chunk__21204 = G__21273;
count__21205 = G__21274;
i__21206 = G__21275;
continue;
} else {
var G__21276 = seq__21202;
var G__21277 = chunk__21204;
var G__21278 = count__21205;
var G__21279 = (i__21206 + (1));
seq__21202 = G__21276;
chunk__21204 = G__21277;
count__21205 = G__21278;
i__21206 = G__21279;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21202);
if(temp__5804__auto__){
var seq__21202__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21202__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21202__$1);
var G__21284 = cljs.core.chunk_rest(seq__21202__$1);
var G__21285 = c__5525__auto__;
var G__21286 = cljs.core.count(c__5525__auto__);
var G__21287 = (0);
seq__21202 = G__21284;
chunk__21204 = G__21285;
count__21205 = G__21286;
i__21206 = G__21287;
continue;
} else {
var map__21213 = cljs.core.first(seq__21202__$1);
var map__21213__$1 = cljs.core.__destructure_map(map__21213);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21213__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__21293 = cljs.core.next(seq__21202__$1);
var G__21294 = null;
var G__21295 = (0);
var G__21296 = (0);
seq__21202 = G__21293;
chunk__21204 = G__21294;
count__21205 = G__21295;
i__21206 = G__21296;
continue;
} else {
var G__21298 = cljs.core.next(seq__21202__$1);
var G__21299 = null;
var G__21300 = (0);
var G__21301 = (0);
seq__21202 = G__21298;
chunk__21204 = G__21299;
count__21205 = G__21300;
i__21206 = G__21301;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
