goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23950){
var map__23952 = p__23950;
var map__23952__$1 = cljs.core.__destructure_map(map__23952);
var m = map__23952__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23952__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23952__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23962_24325 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23963_24326 = null;
var count__23964_24327 = (0);
var i__23965_24328 = (0);
while(true){
if((i__23965_24328 < count__23964_24327)){
var f_24329 = chunk__23963_24326.cljs$core$IIndexed$_nth$arity$2(null,i__23965_24328);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24329], 0));


var G__24330 = seq__23962_24325;
var G__24331 = chunk__23963_24326;
var G__24332 = count__23964_24327;
var G__24333 = (i__23965_24328 + (1));
seq__23962_24325 = G__24330;
chunk__23963_24326 = G__24331;
count__23964_24327 = G__24332;
i__23965_24328 = G__24333;
continue;
} else {
var temp__5804__auto___24336 = cljs.core.seq(seq__23962_24325);
if(temp__5804__auto___24336){
var seq__23962_24337__$1 = temp__5804__auto___24336;
if(cljs.core.chunked_seq_QMARK_(seq__23962_24337__$1)){
var c__5525__auto___24338 = cljs.core.chunk_first(seq__23962_24337__$1);
var G__24339 = cljs.core.chunk_rest(seq__23962_24337__$1);
var G__24340 = c__5525__auto___24338;
var G__24341 = cljs.core.count(c__5525__auto___24338);
var G__24342 = (0);
seq__23962_24325 = G__24339;
chunk__23963_24326 = G__24340;
count__23964_24327 = G__24341;
i__23965_24328 = G__24342;
continue;
} else {
var f_24343 = cljs.core.first(seq__23962_24337__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24343], 0));


var G__24344 = cljs.core.next(seq__23962_24337__$1);
var G__24345 = null;
var G__24346 = (0);
var G__24347 = (0);
seq__23962_24325 = G__24344;
chunk__23963_24326 = G__24345;
count__23964_24327 = G__24346;
i__23965_24328 = G__24347;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24348 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24348], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_24348)))?cljs.core.second(arglists_24348):arglists_24348)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23990_24352 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23991_24353 = null;
var count__23992_24354 = (0);
var i__23993_24355 = (0);
while(true){
if((i__23993_24355 < count__23992_24354)){
var vec__24015_24357 = chunk__23991_24353.cljs$core$IIndexed$_nth$arity$2(null,i__23993_24355);
var name_24358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015_24357,(0),null);
var map__24018_24359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24015_24357,(1),null);
var map__24018_24360__$1 = cljs.core.__destructure_map(map__24018_24359);
var doc_24361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24018_24360__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24018_24360__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24358], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24362], 0));

if(cljs.core.truth_(doc_24361)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24361], 0));
} else {
}


var G__24364 = seq__23990_24352;
var G__24365 = chunk__23991_24353;
var G__24366 = count__23992_24354;
var G__24367 = (i__23993_24355 + (1));
seq__23990_24352 = G__24364;
chunk__23991_24353 = G__24365;
count__23992_24354 = G__24366;
i__23993_24355 = G__24367;
continue;
} else {
var temp__5804__auto___24368 = cljs.core.seq(seq__23990_24352);
if(temp__5804__auto___24368){
var seq__23990_24369__$1 = temp__5804__auto___24368;
if(cljs.core.chunked_seq_QMARK_(seq__23990_24369__$1)){
var c__5525__auto___24370 = cljs.core.chunk_first(seq__23990_24369__$1);
var G__24371 = cljs.core.chunk_rest(seq__23990_24369__$1);
var G__24372 = c__5525__auto___24370;
var G__24373 = cljs.core.count(c__5525__auto___24370);
var G__24374 = (0);
seq__23990_24352 = G__24371;
chunk__23991_24353 = G__24372;
count__23992_24354 = G__24373;
i__23993_24355 = G__24374;
continue;
} else {
var vec__24028_24375 = cljs.core.first(seq__23990_24369__$1);
var name_24376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24028_24375,(0),null);
var map__24031_24377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24028_24375,(1),null);
var map__24031_24378__$1 = cljs.core.__destructure_map(map__24031_24377);
var doc_24379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24031_24378__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24031_24378__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24376], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24380], 0));

if(cljs.core.truth_(doc_24379)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24379], 0));
} else {
}


var G__24387 = cljs.core.next(seq__23990_24369__$1);
var G__24388 = null;
var G__24389 = (0);
var G__24390 = (0);
seq__23990_24352 = G__24387;
chunk__23991_24353 = G__24388;
count__23992_24354 = G__24389;
i__23993_24355 = G__24390;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__24042 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24043 = null;
var count__24044 = (0);
var i__24045 = (0);
while(true){
if((i__24045 < count__24044)){
var role = chunk__24043.cljs$core$IIndexed$_nth$arity$2(null,i__24045);
var temp__5804__auto___24394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24394__$1)){
var spec_24395 = temp__5804__auto___24394__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24395)], 0));
} else {
}


var G__24396 = seq__24042;
var G__24397 = chunk__24043;
var G__24398 = count__24044;
var G__24399 = (i__24045 + (1));
seq__24042 = G__24396;
chunk__24043 = G__24397;
count__24044 = G__24398;
i__24045 = G__24399;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__24042);
if(temp__5804__auto____$1){
var seq__24042__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24042__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24042__$1);
var G__24400 = cljs.core.chunk_rest(seq__24042__$1);
var G__24401 = c__5525__auto__;
var G__24402 = cljs.core.count(c__5525__auto__);
var G__24403 = (0);
seq__24042 = G__24400;
chunk__24043 = G__24401;
count__24044 = G__24402;
i__24045 = G__24403;
continue;
} else {
var role = cljs.core.first(seq__24042__$1);
var temp__5804__auto___24405__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24405__$2)){
var spec_24406 = temp__5804__auto___24405__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24406)], 0));
} else {
}


var G__24408 = cljs.core.next(seq__24042__$1);
var G__24409 = null;
var G__24410 = (0);
var G__24411 = (0);
seq__24042 = G__24408;
chunk__24043 = G__24409;
count__24044 = G__24410;
i__24045 = G__24411;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24179 = datafied_throwable;
var map__24179__$1 = cljs.core.__destructure_map(map__24179);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24179__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24179__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24179__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24180 = cljs.core.last(via);
var map__24180__$1 = cljs.core.__destructure_map(map__24180);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24180__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24180__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24180__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24181 = data;
var map__24181__$1 = cljs.core.__destructure_map(map__24181);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24181__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24181__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24181__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24182 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24182__$1 = cljs.core.__destructure_map(map__24182);
var top_data = map__24182__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24182__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24191 = phase;
var G__24191__$1 = (((G__24191 instanceof cljs.core.Keyword))?G__24191.fqn:null);
switch (G__24191__$1) {
case "read-source":
var map__24196 = data;
var map__24196__$1 = cljs.core.__destructure_map(map__24196);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24196__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24196__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24199 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24199__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24199,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24199);
var G__24199__$2 = (cljs.core.truth_((function (){var fexpr__24204 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24204.cljs$core$IFn$_invoke$arity$1 ? fexpr__24204.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24204.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24199__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24199__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24199__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24199__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24206 = top_data;
var G__24206__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24206,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24206);
var G__24206__$2 = (cljs.core.truth_((function (){var fexpr__24210 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24210.cljs$core$IFn$_invoke$arity$1 ? fexpr__24210.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24210.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24206__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24206__$1);
var G__24206__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24206__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24206__$2);
var G__24206__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24206__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24206__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24206__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24206__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24217 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24217,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24217,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24217,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24217,(3),null);
var G__24220 = top_data;
var G__24220__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24220,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24220);
var G__24220__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24220__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24220__$1);
var G__24220__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24220__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24220__$2);
var G__24220__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24220__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24220__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24220__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24220__$4;
}

break;
case "execution":
var vec__24225 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24225,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24225,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24225,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24225,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24170_SHARP_){
var or__5002__auto__ = (p1__24170_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__24230 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24230.cljs$core$IFn$_invoke$arity$1 ? fexpr__24230.cljs$core$IFn$_invoke$arity$1(p1__24170_SHARP_) : fexpr__24230.call(null,p1__24170_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__24233 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24233__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24233);
var G__24233__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24233__$1);
var G__24233__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24233__$2);
var G__24233__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24233__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24233__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24191__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24249){
var map__24250 = p__24249;
var map__24250__$1 = cljs.core.__destructure_map(map__24250);
var triage_data = map__24250__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24250__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24262 = phase;
var G__24262__$1 = (((G__24262 instanceof cljs.core.Keyword))?G__24262.fqn:null);
switch (G__24262__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24265 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24266 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24267 = loc;
var G__24268 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24270_24451 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24271_24452 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24272_24453 = true;
var _STAR_print_fn_STAR__temp_val__24273_24454 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24272_24453);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24273_24454);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24242_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24242_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24271_24452);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24270_24451);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24265,G__24266,G__24267,G__24268) : format.call(null,G__24265,G__24266,G__24267,G__24268));

break;
case "macroexpansion":
var G__24276 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24277 = cause_type;
var G__24278 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24279 = loc;
var G__24280 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24276,G__24277,G__24278,G__24279,G__24280) : format.call(null,G__24276,G__24277,G__24278,G__24279,G__24280));

break;
case "compile-syntax-check":
var G__24283 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24284 = cause_type;
var G__24285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24286 = loc;
var G__24287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24283,G__24284,G__24285,G__24286,G__24287) : format.call(null,G__24283,G__24284,G__24285,G__24286,G__24287));

break;
case "compilation":
var G__24292 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24293 = cause_type;
var G__24294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24295 = loc;
var G__24296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24292,G__24293,G__24294,G__24295,G__24296) : format.call(null,G__24292,G__24293,G__24294,G__24295,G__24296));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24298 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24299 = symbol;
var G__24300 = loc;
var G__24301 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24303_24461 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24304_24462 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24305_24463 = true;
var _STAR_print_fn_STAR__temp_val__24306_24464 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24305_24463);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24306_24464);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24245_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24245_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24304_24462);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24303_24461);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24298,G__24299,G__24300,G__24301) : format.call(null,G__24298,G__24299,G__24300,G__24301));
} else {
var G__24309 = "Execution error%s at %s(%s).\n%s\n";
var G__24310 = cause_type;
var G__24311 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24312 = loc;
var G__24313 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24309,G__24310,G__24311,G__24312,G__24313) : format.call(null,G__24309,G__24310,G__24311,G__24312,G__24313));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24262__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
