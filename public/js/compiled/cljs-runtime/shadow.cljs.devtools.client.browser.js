goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26640 = arguments.length;
var i__5727__auto___26641 = (0);
while(true){
if((i__5727__auto___26641 < len__5726__auto___26640)){
args__5732__auto__.push((arguments[i__5727__auto___26641]));

var G__26642 = (i__5727__auto___26641 + (1));
i__5727__auto___26641 = G__26642;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq26204){
var G__26205 = cljs.core.first(seq26204);
var seq26204__$1 = cljs.core.next(seq26204);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26205,seq26204__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__26212 = cljs.core.seq(sources);
var chunk__26213 = null;
var count__26214 = (0);
var i__26215 = (0);
while(true){
if((i__26215 < count__26214)){
var map__26228 = chunk__26213.cljs$core$IIndexed$_nth$arity$2(null,i__26215);
var map__26228__$1 = cljs.core.__destructure_map(map__26228);
var src = map__26228__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26228__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26228__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26228__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26228__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e26229){var e_26647 = e26229;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26647);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26647.message)].join('')));
}

var G__26648 = seq__26212;
var G__26649 = chunk__26213;
var G__26650 = count__26214;
var G__26651 = (i__26215 + (1));
seq__26212 = G__26648;
chunk__26213 = G__26649;
count__26214 = G__26650;
i__26215 = G__26651;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26212);
if(temp__5804__auto__){
var seq__26212__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26212__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26212__$1);
var G__26652 = cljs.core.chunk_rest(seq__26212__$1);
var G__26653 = c__5525__auto__;
var G__26654 = cljs.core.count(c__5525__auto__);
var G__26655 = (0);
seq__26212 = G__26652;
chunk__26213 = G__26653;
count__26214 = G__26654;
i__26215 = G__26655;
continue;
} else {
var map__26232 = cljs.core.first(seq__26212__$1);
var map__26232__$1 = cljs.core.__destructure_map(map__26232);
var src = map__26232__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26232__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26232__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26232__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26232__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e26233){var e_26656 = e26233;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26656);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26656.message)].join('')));
}

var G__26658 = cljs.core.next(seq__26212__$1);
var G__26659 = null;
var G__26660 = (0);
var G__26661 = (0);
seq__26212 = G__26658;
chunk__26213 = G__26659;
count__26214 = G__26660;
i__26215 = G__26661;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__26234 = cljs.core.seq(js_requires);
var chunk__26235 = null;
var count__26236 = (0);
var i__26237 = (0);
while(true){
if((i__26237 < count__26236)){
var js_ns = chunk__26235.cljs$core$IIndexed$_nth$arity$2(null,i__26237);
var require_str_26662 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26662);


var G__26663 = seq__26234;
var G__26664 = chunk__26235;
var G__26665 = count__26236;
var G__26666 = (i__26237 + (1));
seq__26234 = G__26663;
chunk__26235 = G__26664;
count__26236 = G__26665;
i__26237 = G__26666;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26234);
if(temp__5804__auto__){
var seq__26234__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26234__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26234__$1);
var G__26667 = cljs.core.chunk_rest(seq__26234__$1);
var G__26668 = c__5525__auto__;
var G__26669 = cljs.core.count(c__5525__auto__);
var G__26670 = (0);
seq__26234 = G__26667;
chunk__26235 = G__26668;
count__26236 = G__26669;
i__26237 = G__26670;
continue;
} else {
var js_ns = cljs.core.first(seq__26234__$1);
var require_str_26671 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26671);


var G__26672 = cljs.core.next(seq__26234__$1);
var G__26673 = null;
var G__26674 = (0);
var G__26675 = (0);
seq__26234 = G__26672;
chunk__26235 = G__26673;
count__26236 = G__26674;
i__26237 = G__26675;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__26246){
var map__26247 = p__26246;
var map__26247__$1 = cljs.core.__destructure_map(map__26247);
var msg = map__26247__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26247__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26247__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26248(s__26249){
return (new cljs.core.LazySeq(null,(function (){
var s__26249__$1 = s__26249;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26249__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__26255 = cljs.core.first(xs__6360__auto__);
var map__26255__$1 = cljs.core.__destructure_map(map__26255);
var src = map__26255__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26255__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26255__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__26249__$1,map__26255,map__26255__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26247,map__26247__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26248_$_iter__26250(s__26251){
return (new cljs.core.LazySeq(null,((function (s__26249__$1,map__26255,map__26255__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26247,map__26247__$1,msg,info,reload_info){
return (function (){
var s__26251__$1 = s__26251;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__26251__$1);
if(temp__5804__auto____$1){
var s__26251__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26251__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26251__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26253 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26252 = (0);
while(true){
if((i__26252 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__26252);
cljs.core.chunk_append(b__26253,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__26677 = (i__26252 + (1));
i__26252 = G__26677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26253),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26248_$_iter__26250(cljs.core.chunk_rest(s__26251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26253),null);
}
} else {
var warning = cljs.core.first(s__26251__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26248_$_iter__26250(cljs.core.rest(s__26251__$2)));
}
} else {
return null;
}
break;
}
});})(s__26249__$1,map__26255,map__26255__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26247,map__26247__$1,msg,info,reload_info))
,null,null));
});})(s__26249__$1,map__26255,map__26255__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26247,map__26247__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26248(cljs.core.rest(s__26249__$1)));
} else {
var G__26678 = cljs.core.rest(s__26249__$1);
s__26249__$1 = G__26678;
continue;
}
} else {
var G__26679 = cljs.core.rest(s__26249__$1);
s__26249__$1 = G__26679;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__26260_26680 = cljs.core.seq(warnings);
var chunk__26261_26681 = null;
var count__26262_26682 = (0);
var i__26263_26683 = (0);
while(true){
if((i__26263_26683 < count__26262_26682)){
var map__26268_26684 = chunk__26261_26681.cljs$core$IIndexed$_nth$arity$2(null,i__26263_26683);
var map__26268_26685__$1 = cljs.core.__destructure_map(map__26268_26684);
var w_26686 = map__26268_26685__$1;
var msg_26687__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26268_26685__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26268_26685__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26268_26685__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26268_26685__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26690)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26688),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26689),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26687__$1)].join(''));


var G__26691 = seq__26260_26680;
var G__26692 = chunk__26261_26681;
var G__26693 = count__26262_26682;
var G__26694 = (i__26263_26683 + (1));
seq__26260_26680 = G__26691;
chunk__26261_26681 = G__26692;
count__26262_26682 = G__26693;
i__26263_26683 = G__26694;
continue;
} else {
var temp__5804__auto___26695 = cljs.core.seq(seq__26260_26680);
if(temp__5804__auto___26695){
var seq__26260_26697__$1 = temp__5804__auto___26695;
if(cljs.core.chunked_seq_QMARK_(seq__26260_26697__$1)){
var c__5525__auto___26698 = cljs.core.chunk_first(seq__26260_26697__$1);
var G__26699 = cljs.core.chunk_rest(seq__26260_26697__$1);
var G__26700 = c__5525__auto___26698;
var G__26701 = cljs.core.count(c__5525__auto___26698);
var G__26702 = (0);
seq__26260_26680 = G__26699;
chunk__26261_26681 = G__26700;
count__26262_26682 = G__26701;
i__26263_26683 = G__26702;
continue;
} else {
var map__26269_26703 = cljs.core.first(seq__26260_26697__$1);
var map__26269_26704__$1 = cljs.core.__destructure_map(map__26269_26703);
var w_26705 = map__26269_26704__$1;
var msg_26706__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26269_26704__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26269_26704__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26269_26704__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26269_26704__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26709)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26707),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26708),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26706__$1)].join(''));


var G__26711 = cljs.core.next(seq__26260_26697__$1);
var G__26712 = null;
var G__26713 = (0);
var G__26714 = (0);
seq__26260_26680 = G__26711;
chunk__26261_26681 = G__26712;
count__26262_26682 = G__26713;
i__26263_26683 = G__26714;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__26245_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__26245_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__26274){
var map__26275 = p__26274;
var map__26275__$1 = cljs.core.__destructure_map(map__26275);
var msg = map__26275__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26275__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26275__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__26276 = cljs.core.seq(updates);
var chunk__26278 = null;
var count__26279 = (0);
var i__26280 = (0);
while(true){
if((i__26280 < count__26279)){
var path = chunk__26278.cljs$core$IIndexed$_nth$arity$2(null,i__26280);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26422_26717 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26426_26718 = null;
var count__26427_26719 = (0);
var i__26428_26720 = (0);
while(true){
if((i__26428_26720 < count__26427_26719)){
var node_26721 = chunk__26426_26718.cljs$core$IIndexed$_nth$arity$2(null,i__26428_26720);
if(cljs.core.not(node_26721.shadow$old)){
var path_match_26722 = shadow.cljs.devtools.client.browser.match_paths(node_26721.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26722)){
var new_link_26723 = (function (){var G__26473 = node_26721.cloneNode(true);
G__26473.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26722),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26473;
})();
(node_26721.shadow$old = true);

(new_link_26723.onload = ((function (seq__26422_26717,chunk__26426_26718,count__26427_26719,i__26428_26720,seq__26276,chunk__26278,count__26279,i__26280,new_link_26723,path_match_26722,node_26721,path,map__26275,map__26275__$1,msg,updates,reload_info){
return (function (e){
var seq__26484_26724 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26486_26725 = null;
var count__26487_26726 = (0);
var i__26488_26727 = (0);
while(true){
if((i__26488_26727 < count__26487_26726)){
var map__26510_26728 = chunk__26486_26725.cljs$core$IIndexed$_nth$arity$2(null,i__26488_26727);
var map__26510_26729__$1 = cljs.core.__destructure_map(map__26510_26728);
var task_26730 = map__26510_26729__$1;
var fn_str_26731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26510_26729__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26510_26729__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26733 = goog.getObjectByName(fn_str_26731,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26732)].join(''));

(fn_obj_26733.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26733.cljs$core$IFn$_invoke$arity$2(path,new_link_26723) : fn_obj_26733.call(null,path,new_link_26723));


var G__26734 = seq__26484_26724;
var G__26735 = chunk__26486_26725;
var G__26736 = count__26487_26726;
var G__26737 = (i__26488_26727 + (1));
seq__26484_26724 = G__26734;
chunk__26486_26725 = G__26735;
count__26487_26726 = G__26736;
i__26488_26727 = G__26737;
continue;
} else {
var temp__5804__auto___26738 = cljs.core.seq(seq__26484_26724);
if(temp__5804__auto___26738){
var seq__26484_26739__$1 = temp__5804__auto___26738;
if(cljs.core.chunked_seq_QMARK_(seq__26484_26739__$1)){
var c__5525__auto___26740 = cljs.core.chunk_first(seq__26484_26739__$1);
var G__26741 = cljs.core.chunk_rest(seq__26484_26739__$1);
var G__26742 = c__5525__auto___26740;
var G__26743 = cljs.core.count(c__5525__auto___26740);
var G__26744 = (0);
seq__26484_26724 = G__26741;
chunk__26486_26725 = G__26742;
count__26487_26726 = G__26743;
i__26488_26727 = G__26744;
continue;
} else {
var map__26519_26745 = cljs.core.first(seq__26484_26739__$1);
var map__26519_26746__$1 = cljs.core.__destructure_map(map__26519_26745);
var task_26747 = map__26519_26746__$1;
var fn_str_26748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26519_26746__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26519_26746__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26750 = goog.getObjectByName(fn_str_26748,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26749)].join(''));

(fn_obj_26750.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26750.cljs$core$IFn$_invoke$arity$2(path,new_link_26723) : fn_obj_26750.call(null,path,new_link_26723));


var G__26751 = cljs.core.next(seq__26484_26739__$1);
var G__26752 = null;
var G__26753 = (0);
var G__26754 = (0);
seq__26484_26724 = G__26751;
chunk__26486_26725 = G__26752;
count__26487_26726 = G__26753;
i__26488_26727 = G__26754;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26721);
});})(seq__26422_26717,chunk__26426_26718,count__26427_26719,i__26428_26720,seq__26276,chunk__26278,count__26279,i__26280,new_link_26723,path_match_26722,node_26721,path,map__26275,map__26275__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26722], 0));

goog.dom.insertSiblingAfter(new_link_26723,node_26721);


var G__26755 = seq__26422_26717;
var G__26756 = chunk__26426_26718;
var G__26757 = count__26427_26719;
var G__26758 = (i__26428_26720 + (1));
seq__26422_26717 = G__26755;
chunk__26426_26718 = G__26756;
count__26427_26719 = G__26757;
i__26428_26720 = G__26758;
continue;
} else {
var G__26759 = seq__26422_26717;
var G__26760 = chunk__26426_26718;
var G__26761 = count__26427_26719;
var G__26762 = (i__26428_26720 + (1));
seq__26422_26717 = G__26759;
chunk__26426_26718 = G__26760;
count__26427_26719 = G__26761;
i__26428_26720 = G__26762;
continue;
}
} else {
var G__26763 = seq__26422_26717;
var G__26764 = chunk__26426_26718;
var G__26765 = count__26427_26719;
var G__26766 = (i__26428_26720 + (1));
seq__26422_26717 = G__26763;
chunk__26426_26718 = G__26764;
count__26427_26719 = G__26765;
i__26428_26720 = G__26766;
continue;
}
} else {
var temp__5804__auto___26767 = cljs.core.seq(seq__26422_26717);
if(temp__5804__auto___26767){
var seq__26422_26768__$1 = temp__5804__auto___26767;
if(cljs.core.chunked_seq_QMARK_(seq__26422_26768__$1)){
var c__5525__auto___26769 = cljs.core.chunk_first(seq__26422_26768__$1);
var G__26770 = cljs.core.chunk_rest(seq__26422_26768__$1);
var G__26771 = c__5525__auto___26769;
var G__26772 = cljs.core.count(c__5525__auto___26769);
var G__26773 = (0);
seq__26422_26717 = G__26770;
chunk__26426_26718 = G__26771;
count__26427_26719 = G__26772;
i__26428_26720 = G__26773;
continue;
} else {
var node_26774 = cljs.core.first(seq__26422_26768__$1);
if(cljs.core.not(node_26774.shadow$old)){
var path_match_26775 = shadow.cljs.devtools.client.browser.match_paths(node_26774.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26775)){
var new_link_26776 = (function (){var G__26525 = node_26774.cloneNode(true);
G__26525.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26775),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26525;
})();
(node_26774.shadow$old = true);

(new_link_26776.onload = ((function (seq__26422_26717,chunk__26426_26718,count__26427_26719,i__26428_26720,seq__26276,chunk__26278,count__26279,i__26280,new_link_26776,path_match_26775,node_26774,seq__26422_26768__$1,temp__5804__auto___26767,path,map__26275,map__26275__$1,msg,updates,reload_info){
return (function (e){
var seq__26526_26777 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26528_26778 = null;
var count__26529_26779 = (0);
var i__26530_26780 = (0);
while(true){
if((i__26530_26780 < count__26529_26779)){
var map__26541_26781 = chunk__26528_26778.cljs$core$IIndexed$_nth$arity$2(null,i__26530_26780);
var map__26541_26782__$1 = cljs.core.__destructure_map(map__26541_26781);
var task_26783 = map__26541_26782__$1;
var fn_str_26784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26541_26782__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26541_26782__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26786 = goog.getObjectByName(fn_str_26784,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26785)].join(''));

(fn_obj_26786.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26786.cljs$core$IFn$_invoke$arity$2(path,new_link_26776) : fn_obj_26786.call(null,path,new_link_26776));


var G__26788 = seq__26526_26777;
var G__26789 = chunk__26528_26778;
var G__26790 = count__26529_26779;
var G__26791 = (i__26530_26780 + (1));
seq__26526_26777 = G__26788;
chunk__26528_26778 = G__26789;
count__26529_26779 = G__26790;
i__26530_26780 = G__26791;
continue;
} else {
var temp__5804__auto___26793__$1 = cljs.core.seq(seq__26526_26777);
if(temp__5804__auto___26793__$1){
var seq__26526_26795__$1 = temp__5804__auto___26793__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26526_26795__$1)){
var c__5525__auto___26797 = cljs.core.chunk_first(seq__26526_26795__$1);
var G__26798 = cljs.core.chunk_rest(seq__26526_26795__$1);
var G__26799 = c__5525__auto___26797;
var G__26800 = cljs.core.count(c__5525__auto___26797);
var G__26801 = (0);
seq__26526_26777 = G__26798;
chunk__26528_26778 = G__26799;
count__26529_26779 = G__26800;
i__26530_26780 = G__26801;
continue;
} else {
var map__26544_26802 = cljs.core.first(seq__26526_26795__$1);
var map__26544_26803__$1 = cljs.core.__destructure_map(map__26544_26802);
var task_26804 = map__26544_26803__$1;
var fn_str_26805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26544_26803__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26544_26803__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26807 = goog.getObjectByName(fn_str_26805,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26806)].join(''));

(fn_obj_26807.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26807.cljs$core$IFn$_invoke$arity$2(path,new_link_26776) : fn_obj_26807.call(null,path,new_link_26776));


var G__26808 = cljs.core.next(seq__26526_26795__$1);
var G__26809 = null;
var G__26810 = (0);
var G__26811 = (0);
seq__26526_26777 = G__26808;
chunk__26528_26778 = G__26809;
count__26529_26779 = G__26810;
i__26530_26780 = G__26811;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26774);
});})(seq__26422_26717,chunk__26426_26718,count__26427_26719,i__26428_26720,seq__26276,chunk__26278,count__26279,i__26280,new_link_26776,path_match_26775,node_26774,seq__26422_26768__$1,temp__5804__auto___26767,path,map__26275,map__26275__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26775], 0));

goog.dom.insertSiblingAfter(new_link_26776,node_26774);


var G__26812 = cljs.core.next(seq__26422_26768__$1);
var G__26813 = null;
var G__26814 = (0);
var G__26815 = (0);
seq__26422_26717 = G__26812;
chunk__26426_26718 = G__26813;
count__26427_26719 = G__26814;
i__26428_26720 = G__26815;
continue;
} else {
var G__26816 = cljs.core.next(seq__26422_26768__$1);
var G__26817 = null;
var G__26818 = (0);
var G__26819 = (0);
seq__26422_26717 = G__26816;
chunk__26426_26718 = G__26817;
count__26427_26719 = G__26818;
i__26428_26720 = G__26819;
continue;
}
} else {
var G__26820 = cljs.core.next(seq__26422_26768__$1);
var G__26821 = null;
var G__26822 = (0);
var G__26823 = (0);
seq__26422_26717 = G__26820;
chunk__26426_26718 = G__26821;
count__26427_26719 = G__26822;
i__26428_26720 = G__26823;
continue;
}
}
} else {
}
}
break;
}


var G__26824 = seq__26276;
var G__26825 = chunk__26278;
var G__26826 = count__26279;
var G__26827 = (i__26280 + (1));
seq__26276 = G__26824;
chunk__26278 = G__26825;
count__26279 = G__26826;
i__26280 = G__26827;
continue;
} else {
var G__26828 = seq__26276;
var G__26829 = chunk__26278;
var G__26830 = count__26279;
var G__26831 = (i__26280 + (1));
seq__26276 = G__26828;
chunk__26278 = G__26829;
count__26279 = G__26830;
i__26280 = G__26831;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26276);
if(temp__5804__auto__){
var seq__26276__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26276__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26276__$1);
var G__26832 = cljs.core.chunk_rest(seq__26276__$1);
var G__26833 = c__5525__auto__;
var G__26834 = cljs.core.count(c__5525__auto__);
var G__26835 = (0);
seq__26276 = G__26832;
chunk__26278 = G__26833;
count__26279 = G__26834;
i__26280 = G__26835;
continue;
} else {
var path = cljs.core.first(seq__26276__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26546_26836 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26550_26837 = null;
var count__26551_26838 = (0);
var i__26552_26839 = (0);
while(true){
if((i__26552_26839 < count__26551_26838)){
var node_26841 = chunk__26550_26837.cljs$core$IIndexed$_nth$arity$2(null,i__26552_26839);
if(cljs.core.not(node_26841.shadow$old)){
var path_match_26842 = shadow.cljs.devtools.client.browser.match_paths(node_26841.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26842)){
var new_link_26843 = (function (){var G__26587 = node_26841.cloneNode(true);
G__26587.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26842),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26587;
})();
(node_26841.shadow$old = true);

(new_link_26843.onload = ((function (seq__26546_26836,chunk__26550_26837,count__26551_26838,i__26552_26839,seq__26276,chunk__26278,count__26279,i__26280,new_link_26843,path_match_26842,node_26841,path,seq__26276__$1,temp__5804__auto__,map__26275,map__26275__$1,msg,updates,reload_info){
return (function (e){
var seq__26588_26844 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26590_26845 = null;
var count__26591_26846 = (0);
var i__26592_26847 = (0);
while(true){
if((i__26592_26847 < count__26591_26846)){
var map__26596_26849 = chunk__26590_26845.cljs$core$IIndexed$_nth$arity$2(null,i__26592_26847);
var map__26596_26850__$1 = cljs.core.__destructure_map(map__26596_26849);
var task_26851 = map__26596_26850__$1;
var fn_str_26852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26596_26850__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26596_26850__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26854 = goog.getObjectByName(fn_str_26852,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26853)].join(''));

(fn_obj_26854.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26854.cljs$core$IFn$_invoke$arity$2(path,new_link_26843) : fn_obj_26854.call(null,path,new_link_26843));


var G__26855 = seq__26588_26844;
var G__26856 = chunk__26590_26845;
var G__26857 = count__26591_26846;
var G__26858 = (i__26592_26847 + (1));
seq__26588_26844 = G__26855;
chunk__26590_26845 = G__26856;
count__26591_26846 = G__26857;
i__26592_26847 = G__26858;
continue;
} else {
var temp__5804__auto___26859__$1 = cljs.core.seq(seq__26588_26844);
if(temp__5804__auto___26859__$1){
var seq__26588_26860__$1 = temp__5804__auto___26859__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26588_26860__$1)){
var c__5525__auto___26863 = cljs.core.chunk_first(seq__26588_26860__$1);
var G__26864 = cljs.core.chunk_rest(seq__26588_26860__$1);
var G__26865 = c__5525__auto___26863;
var G__26866 = cljs.core.count(c__5525__auto___26863);
var G__26867 = (0);
seq__26588_26844 = G__26864;
chunk__26590_26845 = G__26865;
count__26591_26846 = G__26866;
i__26592_26847 = G__26867;
continue;
} else {
var map__26597_26868 = cljs.core.first(seq__26588_26860__$1);
var map__26597_26869__$1 = cljs.core.__destructure_map(map__26597_26868);
var task_26870 = map__26597_26869__$1;
var fn_str_26871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26597_26869__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26597_26869__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26873 = goog.getObjectByName(fn_str_26871,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26872)].join(''));

(fn_obj_26873.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26873.cljs$core$IFn$_invoke$arity$2(path,new_link_26843) : fn_obj_26873.call(null,path,new_link_26843));


var G__26874 = cljs.core.next(seq__26588_26860__$1);
var G__26875 = null;
var G__26876 = (0);
var G__26877 = (0);
seq__26588_26844 = G__26874;
chunk__26590_26845 = G__26875;
count__26591_26846 = G__26876;
i__26592_26847 = G__26877;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26841);
});})(seq__26546_26836,chunk__26550_26837,count__26551_26838,i__26552_26839,seq__26276,chunk__26278,count__26279,i__26280,new_link_26843,path_match_26842,node_26841,path,seq__26276__$1,temp__5804__auto__,map__26275,map__26275__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26842], 0));

goog.dom.insertSiblingAfter(new_link_26843,node_26841);


var G__26878 = seq__26546_26836;
var G__26879 = chunk__26550_26837;
var G__26880 = count__26551_26838;
var G__26881 = (i__26552_26839 + (1));
seq__26546_26836 = G__26878;
chunk__26550_26837 = G__26879;
count__26551_26838 = G__26880;
i__26552_26839 = G__26881;
continue;
} else {
var G__26882 = seq__26546_26836;
var G__26883 = chunk__26550_26837;
var G__26884 = count__26551_26838;
var G__26885 = (i__26552_26839 + (1));
seq__26546_26836 = G__26882;
chunk__26550_26837 = G__26883;
count__26551_26838 = G__26884;
i__26552_26839 = G__26885;
continue;
}
} else {
var G__26886 = seq__26546_26836;
var G__26887 = chunk__26550_26837;
var G__26888 = count__26551_26838;
var G__26889 = (i__26552_26839 + (1));
seq__26546_26836 = G__26886;
chunk__26550_26837 = G__26887;
count__26551_26838 = G__26888;
i__26552_26839 = G__26889;
continue;
}
} else {
var temp__5804__auto___26890__$1 = cljs.core.seq(seq__26546_26836);
if(temp__5804__auto___26890__$1){
var seq__26546_26891__$1 = temp__5804__auto___26890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26546_26891__$1)){
var c__5525__auto___26892 = cljs.core.chunk_first(seq__26546_26891__$1);
var G__26893 = cljs.core.chunk_rest(seq__26546_26891__$1);
var G__26894 = c__5525__auto___26892;
var G__26895 = cljs.core.count(c__5525__auto___26892);
var G__26896 = (0);
seq__26546_26836 = G__26893;
chunk__26550_26837 = G__26894;
count__26551_26838 = G__26895;
i__26552_26839 = G__26896;
continue;
} else {
var node_26897 = cljs.core.first(seq__26546_26891__$1);
if(cljs.core.not(node_26897.shadow$old)){
var path_match_26898 = shadow.cljs.devtools.client.browser.match_paths(node_26897.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26898)){
var new_link_26899 = (function (){var G__26598 = node_26897.cloneNode(true);
G__26598.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26898),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26598;
})();
(node_26897.shadow$old = true);

(new_link_26899.onload = ((function (seq__26546_26836,chunk__26550_26837,count__26551_26838,i__26552_26839,seq__26276,chunk__26278,count__26279,i__26280,new_link_26899,path_match_26898,node_26897,seq__26546_26891__$1,temp__5804__auto___26890__$1,path,seq__26276__$1,temp__5804__auto__,map__26275,map__26275__$1,msg,updates,reload_info){
return (function (e){
var seq__26599_26901 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26601_26902 = null;
var count__26602_26903 = (0);
var i__26603_26904 = (0);
while(true){
if((i__26603_26904 < count__26602_26903)){
var map__26609_26905 = chunk__26601_26902.cljs$core$IIndexed$_nth$arity$2(null,i__26603_26904);
var map__26609_26906__$1 = cljs.core.__destructure_map(map__26609_26905);
var task_26907 = map__26609_26906__$1;
var fn_str_26908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26609_26906__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26609_26906__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26910 = goog.getObjectByName(fn_str_26908,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26909)].join(''));

(fn_obj_26910.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26910.cljs$core$IFn$_invoke$arity$2(path,new_link_26899) : fn_obj_26910.call(null,path,new_link_26899));


var G__26911 = seq__26599_26901;
var G__26912 = chunk__26601_26902;
var G__26913 = count__26602_26903;
var G__26914 = (i__26603_26904 + (1));
seq__26599_26901 = G__26911;
chunk__26601_26902 = G__26912;
count__26602_26903 = G__26913;
i__26603_26904 = G__26914;
continue;
} else {
var temp__5804__auto___26915__$2 = cljs.core.seq(seq__26599_26901);
if(temp__5804__auto___26915__$2){
var seq__26599_26916__$1 = temp__5804__auto___26915__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26599_26916__$1)){
var c__5525__auto___26917 = cljs.core.chunk_first(seq__26599_26916__$1);
var G__26918 = cljs.core.chunk_rest(seq__26599_26916__$1);
var G__26919 = c__5525__auto___26917;
var G__26920 = cljs.core.count(c__5525__auto___26917);
var G__26921 = (0);
seq__26599_26901 = G__26918;
chunk__26601_26902 = G__26919;
count__26602_26903 = G__26920;
i__26603_26904 = G__26921;
continue;
} else {
var map__26610_26922 = cljs.core.first(seq__26599_26916__$1);
var map__26610_26923__$1 = cljs.core.__destructure_map(map__26610_26922);
var task_26924 = map__26610_26923__$1;
var fn_str_26925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26610_26923__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26610_26923__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26927 = goog.getObjectByName(fn_str_26925,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26926)].join(''));

(fn_obj_26927.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26927.cljs$core$IFn$_invoke$arity$2(path,new_link_26899) : fn_obj_26927.call(null,path,new_link_26899));


var G__26931 = cljs.core.next(seq__26599_26916__$1);
var G__26932 = null;
var G__26933 = (0);
var G__26934 = (0);
seq__26599_26901 = G__26931;
chunk__26601_26902 = G__26932;
count__26602_26903 = G__26933;
i__26603_26904 = G__26934;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26897);
});})(seq__26546_26836,chunk__26550_26837,count__26551_26838,i__26552_26839,seq__26276,chunk__26278,count__26279,i__26280,new_link_26899,path_match_26898,node_26897,seq__26546_26891__$1,temp__5804__auto___26890__$1,path,seq__26276__$1,temp__5804__auto__,map__26275,map__26275__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26898], 0));

goog.dom.insertSiblingAfter(new_link_26899,node_26897);


var G__26936 = cljs.core.next(seq__26546_26891__$1);
var G__26937 = null;
var G__26938 = (0);
var G__26939 = (0);
seq__26546_26836 = G__26936;
chunk__26550_26837 = G__26937;
count__26551_26838 = G__26938;
i__26552_26839 = G__26939;
continue;
} else {
var G__26940 = cljs.core.next(seq__26546_26891__$1);
var G__26941 = null;
var G__26942 = (0);
var G__26943 = (0);
seq__26546_26836 = G__26940;
chunk__26550_26837 = G__26941;
count__26551_26838 = G__26942;
i__26552_26839 = G__26943;
continue;
}
} else {
var G__26944 = cljs.core.next(seq__26546_26891__$1);
var G__26945 = null;
var G__26946 = (0);
var G__26947 = (0);
seq__26546_26836 = G__26944;
chunk__26550_26837 = G__26945;
count__26551_26838 = G__26946;
i__26552_26839 = G__26947;
continue;
}
}
} else {
}
}
break;
}


var G__26948 = cljs.core.next(seq__26276__$1);
var G__26949 = null;
var G__26950 = (0);
var G__26951 = (0);
seq__26276 = G__26948;
chunk__26278 = G__26949;
count__26279 = G__26950;
i__26280 = G__26951;
continue;
} else {
var G__26952 = cljs.core.next(seq__26276__$1);
var G__26953 = null;
var G__26954 = (0);
var G__26955 = (0);
seq__26276 = G__26952;
chunk__26278 = G__26953;
count__26279 = G__26954;
i__26280 = G__26955;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__26615){
var map__26616 = p__26615;
var map__26616__$1 = cljs.core.__destructure_map(map__26616);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26616__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__26617,done,error){
var map__26618 = p__26617;
var map__26618__$1 = cljs.core.__destructure_map(map__26618);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26618__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__26619,done,error){
var map__26620 = p__26619;
var map__26620__$1 = cljs.core.__destructure_map(map__26620);
var msg = map__26620__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26623){
var map__26624 = p__26623;
var map__26624__$1 = cljs.core.__destructure_map(map__26624);
var src = map__26624__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26624__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__26625 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26625) : done.call(null,G__26625));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__26626){
var map__26627 = p__26626;
var map__26627__$1 = cljs.core.__destructure_map(map__26627);
var msg__$1 = map__26627__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26627__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e26628){var ex = e26628;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__26629){
var map__26630 = p__26629;
var map__26630__$1 = cljs.core.__destructure_map(map__26630);
var env = map__26630__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26630__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__26633){
var map__26634 = p__26633;
var map__26634__$1 = cljs.core.__destructure_map(map__26634);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26634__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26634__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__26638){
var map__26639 = p__26638;
var map__26639__$1 = cljs.core.__destructure_map(map__26639);
var svc = map__26639__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26639__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
