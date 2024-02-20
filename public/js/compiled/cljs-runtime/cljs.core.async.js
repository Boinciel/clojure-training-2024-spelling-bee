goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21179 = (function (f,blockable,meta21180){
this.f = f;
this.blockable = blockable;
this.meta21180 = meta21180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21181,meta21180__$1){
var self__ = this;
var _21181__$1 = this;
return (new cljs.core.async.t_cljs$core$async21179(self__.f,self__.blockable,meta21180__$1));
}));

(cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21181){
var self__ = this;
var _21181__$1 = this;
return self__.meta21180;
}));

(cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async21179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21180","meta21180",1849090054,null)], null);
}));

(cljs.core.async.t_cljs$core$async21179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21179");

(cljs.core.async.t_cljs$core$async21179.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21179.
 */
cljs.core.async.__GT_t_cljs$core$async21179 = (function cljs$core$async$__GT_t_cljs$core$async21179(f,blockable,meta21180){
return (new cljs.core.async.t_cljs$core$async21179(f,blockable,meta21180));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21172 = arguments.length;
switch (G__21172) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async21179(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21201 = arguments.length;
switch (G__21201) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21211 = arguments.length;
switch (G__21211) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21217 = arguments.length;
switch (G__21217) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_23480 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23480) : fn1.call(null,val_23480));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23480) : fn1.call(null,val_23480));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21271 = arguments.length;
switch (G__21271) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___23491 = n;
var x_23492 = (0);
while(true){
if((x_23492 < n__5593__auto___23491)){
(a[x_23492] = x_23492);

var G__23493 = (x_23492 + (1));
x_23492 = G__23493;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21356 = (function (flag,meta21357){
this.flag = flag;
this.meta21357 = meta21357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21358,meta21357__$1){
var self__ = this;
var _21358__$1 = this;
return (new cljs.core.async.t_cljs$core$async21356(self__.flag,meta21357__$1));
}));

(cljs.core.async.t_cljs$core$async21356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21358){
var self__ = this;
var _21358__$1 = this;
return self__.meta21357;
}));

(cljs.core.async.t_cljs$core$async21356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async21356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21357","meta21357",2114930987,null)], null);
}));

(cljs.core.async.t_cljs$core$async21356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21356");

(cljs.core.async.t_cljs$core$async21356.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21356.
 */
cljs.core.async.__GT_t_cljs$core$async21356 = (function cljs$core$async$__GT_t_cljs$core$async21356(flag,meta21357){
return (new cljs.core.async.t_cljs$core$async21356(flag,meta21357));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async21356(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21375 = (function (flag,cb,meta21376){
this.flag = flag;
this.cb = cb;
this.meta21376 = meta21376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21377,meta21376__$1){
var self__ = this;
var _21377__$1 = this;
return (new cljs.core.async.t_cljs$core$async21375(self__.flag,self__.cb,meta21376__$1));
}));

(cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21377){
var self__ = this;
var _21377__$1 = this;
return self__.meta21376;
}));

(cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21376","meta21376",1255664893,null)], null);
}));

(cljs.core.async.t_cljs$core$async21375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21375");

(cljs.core.async.t_cljs$core$async21375.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21375.
 */
cljs.core.async.__GT_t_cljs$core$async21375 = (function cljs$core$async$__GT_t_cljs$core$async21375(flag,cb,meta21376){
return (new cljs.core.async.t_cljs$core$async21375(flag,cb,meta21376));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async21375(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21383_SHARP_){
var G__21386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21383_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21386) : fret.call(null,G__21386));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21384_SHARP_){
var G__21387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21384_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21387) : fret.call(null,G__21387));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23500 = (i + (1));
i = G__23500;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23502 = arguments.length;
var i__5727__auto___23503 = (0);
while(true){
if((i__5727__auto___23503 < len__5726__auto___23502)){
args__5732__auto__.push((arguments[i__5727__auto___23503]));

var G__23504 = (i__5727__auto___23503 + (1));
i__5727__auto___23503 = G__23504;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21391){
var map__21393 = p__21391;
var map__21393__$1 = cljs.core.__destructure_map(map__21393);
var opts = map__21393__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21389){
var G__21390 = cljs.core.first(seq21389);
var seq21389__$1 = cljs.core.next(seq21389);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21390,seq21389__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21396 = arguments.length;
switch (G__21396) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21047__auto___23511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_21424){
var state_val_21425 = (state_21424[(1)]);
if((state_val_21425 === (7))){
var inst_21420 = (state_21424[(2)]);
var state_21424__$1 = state_21424;
var statearr_21427_23512 = state_21424__$1;
(statearr_21427_23512[(2)] = inst_21420);

(statearr_21427_23512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (1))){
var state_21424__$1 = state_21424;
var statearr_21428_23515 = state_21424__$1;
(statearr_21428_23515[(2)] = null);

(statearr_21428_23515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (4))){
var inst_21402 = (state_21424[(7)]);
var inst_21402__$1 = (state_21424[(2)]);
var inst_21403 = (inst_21402__$1 == null);
var state_21424__$1 = (function (){var statearr_21429 = state_21424;
(statearr_21429[(7)] = inst_21402__$1);

return statearr_21429;
})();
if(cljs.core.truth_(inst_21403)){
var statearr_21431_23516 = state_21424__$1;
(statearr_21431_23516[(1)] = (5));

} else {
var statearr_21432_23517 = state_21424__$1;
(statearr_21432_23517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (13))){
var state_21424__$1 = state_21424;
var statearr_21433_23518 = state_21424__$1;
(statearr_21433_23518[(2)] = null);

(statearr_21433_23518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (6))){
var inst_21402 = (state_21424[(7)]);
var state_21424__$1 = state_21424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21424__$1,(11),to,inst_21402);
} else {
if((state_val_21425 === (3))){
var inst_21422 = (state_21424[(2)]);
var state_21424__$1 = state_21424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21424__$1,inst_21422);
} else {
if((state_val_21425 === (12))){
var state_21424__$1 = state_21424;
var statearr_21435_23519 = state_21424__$1;
(statearr_21435_23519[(2)] = null);

(statearr_21435_23519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (2))){
var state_21424__$1 = state_21424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21424__$1,(4),from);
} else {
if((state_val_21425 === (11))){
var inst_21413 = (state_21424[(2)]);
var state_21424__$1 = state_21424;
if(cljs.core.truth_(inst_21413)){
var statearr_21436_23520 = state_21424__$1;
(statearr_21436_23520[(1)] = (12));

} else {
var statearr_21437_23521 = state_21424__$1;
(statearr_21437_23521[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (9))){
var state_21424__$1 = state_21424;
var statearr_21438_23522 = state_21424__$1;
(statearr_21438_23522[(2)] = null);

(statearr_21438_23522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (5))){
var state_21424__$1 = state_21424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21439_23523 = state_21424__$1;
(statearr_21439_23523[(1)] = (8));

} else {
var statearr_21440_23524 = state_21424__$1;
(statearr_21440_23524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (14))){
var inst_21418 = (state_21424[(2)]);
var state_21424__$1 = state_21424;
var statearr_21441_23526 = state_21424__$1;
(statearr_21441_23526[(2)] = inst_21418);

(statearr_21441_23526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (10))){
var inst_21410 = (state_21424[(2)]);
var state_21424__$1 = state_21424;
var statearr_21443_23530 = state_21424__$1;
(statearr_21443_23530[(2)] = inst_21410);

(statearr_21443_23530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21425 === (8))){
var inst_21406 = cljs.core.async.close_BANG_(to);
var state_21424__$1 = state_21424;
var statearr_21444_23531 = state_21424__$1;
(statearr_21444_23531[(2)] = inst_21406);

(statearr_21444_23531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_21445 = [null,null,null,null,null,null,null,null];
(statearr_21445[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_21445[(1)] = (1));

return statearr_21445;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_21424){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21424);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21446){var ex__20870__auto__ = e21446;
var statearr_21447_23532 = state_21424;
(statearr_21447_23532[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21424[(4)]))){
var statearr_21448_23533 = state_21424;
(statearr_21448_23533[(1)] = cljs.core.first((state_21424[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23534 = state_21424;
state_21424 = G__23534;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_21424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_21424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_21450 = f__21048__auto__();
(statearr_21450[(6)] = c__21047__auto___23511);

return statearr_21450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__21452){
var vec__21453 = p__21452;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21453,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21453,(1),null);
var job = vec__21453;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21047__auto___23542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_21460){
var state_val_21461 = (state_21460[(1)]);
if((state_val_21461 === (1))){
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21460__$1,(2),res,v);
} else {
if((state_val_21461 === (2))){
var inst_21457 = (state_21460[(2)]);
var inst_21458 = cljs.core.async.close_BANG_(res);
var state_21460__$1 = (function (){var statearr_21462 = state_21460;
(statearr_21462[(7)] = inst_21457);

return statearr_21462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21460__$1,inst_21458);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0 = (function (){
var statearr_21463 = [null,null,null,null,null,null,null,null];
(statearr_21463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__);

(statearr_21463[(1)] = (1));

return statearr_21463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1 = (function (state_21460){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21460);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21465){var ex__20870__auto__ = e21465;
var statearr_21466_23546 = state_21460;
(statearr_21466_23546[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21460[(4)]))){
var statearr_21467_23547 = state_21460;
(statearr_21467_23547[(1)] = cljs.core.first((state_21460[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23549 = state_21460;
state_21460 = G__23549;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = function(state_21460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1.call(this,state_21460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_21468 = f__21048__auto__();
(statearr_21468[(6)] = c__21047__auto___23542);

return statearr_21468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__21469){
var vec__21470 = p__21469;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21470,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21470,(1),null);
var job = vec__21470;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___23550 = n;
var __23551 = (0);
while(true){
if((__23551 < n__5593__auto___23550)){
var G__21474_23552 = type;
var G__21474_23553__$1 = (((G__21474_23552 instanceof cljs.core.Keyword))?G__21474_23552.fqn:null);
switch (G__21474_23553__$1) {
case "compute":
var c__21047__auto___23555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23551,c__21047__auto___23555,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async){
return (function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = ((function (__23551,c__21047__auto___23555,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async){
return (function (state_21487){
var state_val_21488 = (state_21487[(1)]);
if((state_val_21488 === (1))){
var state_21487__$1 = state_21487;
var statearr_21489_23556 = state_21487__$1;
(statearr_21489_23556[(2)] = null);

(statearr_21489_23556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21488 === (2))){
var state_21487__$1 = state_21487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21487__$1,(4),jobs);
} else {
if((state_val_21488 === (3))){
var inst_21485 = (state_21487[(2)]);
var state_21487__$1 = state_21487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21487__$1,inst_21485);
} else {
if((state_val_21488 === (4))){
var inst_21477 = (state_21487[(2)]);
var inst_21478 = process__$1(inst_21477);
var state_21487__$1 = state_21487;
if(cljs.core.truth_(inst_21478)){
var statearr_21491_23557 = state_21487__$1;
(statearr_21491_23557[(1)] = (5));

} else {
var statearr_21492_23558 = state_21487__$1;
(statearr_21492_23558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21488 === (5))){
var state_21487__$1 = state_21487;
var statearr_21493_23559 = state_21487__$1;
(statearr_21493_23559[(2)] = null);

(statearr_21493_23559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21488 === (6))){
var state_21487__$1 = state_21487;
var statearr_21494_23561 = state_21487__$1;
(statearr_21494_23561[(2)] = null);

(statearr_21494_23561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21488 === (7))){
var inst_21483 = (state_21487[(2)]);
var state_21487__$1 = state_21487;
var statearr_21495_23562 = state_21487__$1;
(statearr_21495_23562[(2)] = inst_21483);

(statearr_21495_23562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23551,c__21047__auto___23555,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async))
;
return ((function (__23551,switch__20866__auto__,c__21047__auto___23555,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0 = (function (){
var statearr_21496 = [null,null,null,null,null,null,null];
(statearr_21496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__);

(statearr_21496[(1)] = (1));

return statearr_21496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1 = (function (state_21487){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21487);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21497){var ex__20870__auto__ = e21497;
var statearr_21499_23567 = state_21487;
(statearr_21499_23567[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21487[(4)]))){
var statearr_21500_23568 = state_21487;
(statearr_21500_23568[(1)] = cljs.core.first((state_21487[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23569 = state_21487;
state_21487 = G__23569;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = function(state_21487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1.call(this,state_21487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__;
})()
;})(__23551,switch__20866__auto__,c__21047__auto___23555,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async))
})();
var state__21049__auto__ = (function (){var statearr_21501 = f__21048__auto__();
(statearr_21501[(6)] = c__21047__auto___23555);

return statearr_21501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
});})(__23551,c__21047__auto___23555,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async))
);


break;
case "async":
var c__21047__auto___23570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23551,c__21047__auto___23570,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async){
return (function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = ((function (__23551,c__21047__auto___23570,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async){
return (function (state_21514){
var state_val_21515 = (state_21514[(1)]);
if((state_val_21515 === (1))){
var state_21514__$1 = state_21514;
var statearr_21517_23571 = state_21514__$1;
(statearr_21517_23571[(2)] = null);

(statearr_21517_23571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (2))){
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21514__$1,(4),jobs);
} else {
if((state_val_21515 === (3))){
var inst_21512 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21514__$1,inst_21512);
} else {
if((state_val_21515 === (4))){
var inst_21504 = (state_21514[(2)]);
var inst_21505 = async(inst_21504);
var state_21514__$1 = state_21514;
if(cljs.core.truth_(inst_21505)){
var statearr_21518_23572 = state_21514__$1;
(statearr_21518_23572[(1)] = (5));

} else {
var statearr_21519_23573 = state_21514__$1;
(statearr_21519_23573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (5))){
var state_21514__$1 = state_21514;
var statearr_21520_23574 = state_21514__$1;
(statearr_21520_23574[(2)] = null);

(statearr_21520_23574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (6))){
var state_21514__$1 = state_21514;
var statearr_21521_23575 = state_21514__$1;
(statearr_21521_23575[(2)] = null);

(statearr_21521_23575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21515 === (7))){
var inst_21510 = (state_21514[(2)]);
var state_21514__$1 = state_21514;
var statearr_21522_23576 = state_21514__$1;
(statearr_21522_23576[(2)] = inst_21510);

(statearr_21522_23576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23551,c__21047__auto___23570,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async))
;
return ((function (__23551,switch__20866__auto__,c__21047__auto___23570,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0 = (function (){
var statearr_21524 = [null,null,null,null,null,null,null];
(statearr_21524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__);

(statearr_21524[(1)] = (1));

return statearr_21524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1 = (function (state_21514){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21514);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21525){var ex__20870__auto__ = e21525;
var statearr_21526_23579 = state_21514;
(statearr_21526_23579[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21514[(4)]))){
var statearr_21527_23580 = state_21514;
(statearr_21527_23580[(1)] = cljs.core.first((state_21514[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23581 = state_21514;
state_21514 = G__23581;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = function(state_21514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1.call(this,state_21514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__;
})()
;})(__23551,switch__20866__auto__,c__21047__auto___23570,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async))
})();
var state__21049__auto__ = (function (){var statearr_21528 = f__21048__auto__();
(statearr_21528[(6)] = c__21047__auto___23570);

return statearr_21528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
});})(__23551,c__21047__auto___23570,G__21474_23552,G__21474_23553__$1,n__5593__auto___23550,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21474_23553__$1)].join('')));

}

var G__23582 = (__23551 + (1));
__23551 = G__23582;
continue;
} else {
}
break;
}

var c__21047__auto___23583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_21551){
var state_val_21552 = (state_21551[(1)]);
if((state_val_21552 === (7))){
var inst_21547 = (state_21551[(2)]);
var state_21551__$1 = state_21551;
var statearr_21554_23584 = state_21551__$1;
(statearr_21554_23584[(2)] = inst_21547);

(statearr_21554_23584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21552 === (1))){
var state_21551__$1 = state_21551;
var statearr_21555_23585 = state_21551__$1;
(statearr_21555_23585[(2)] = null);

(statearr_21555_23585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21552 === (4))){
var inst_21532 = (state_21551[(7)]);
var inst_21532__$1 = (state_21551[(2)]);
var inst_21533 = (inst_21532__$1 == null);
var state_21551__$1 = (function (){var statearr_21557 = state_21551;
(statearr_21557[(7)] = inst_21532__$1);

return statearr_21557;
})();
if(cljs.core.truth_(inst_21533)){
var statearr_21558_23586 = state_21551__$1;
(statearr_21558_23586[(1)] = (5));

} else {
var statearr_21559_23587 = state_21551__$1;
(statearr_21559_23587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21552 === (6))){
var inst_21532 = (state_21551[(7)]);
var inst_21537 = (state_21551[(8)]);
var inst_21537__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21539 = [inst_21532,inst_21537__$1];
var inst_21540 = (new cljs.core.PersistentVector(null,2,(5),inst_21538,inst_21539,null));
var state_21551__$1 = (function (){var statearr_21560 = state_21551;
(statearr_21560[(8)] = inst_21537__$1);

return statearr_21560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21551__$1,(8),jobs,inst_21540);
} else {
if((state_val_21552 === (3))){
var inst_21549 = (state_21551[(2)]);
var state_21551__$1 = state_21551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21551__$1,inst_21549);
} else {
if((state_val_21552 === (2))){
var state_21551__$1 = state_21551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21551__$1,(4),from);
} else {
if((state_val_21552 === (9))){
var inst_21544 = (state_21551[(2)]);
var state_21551__$1 = (function (){var statearr_21561 = state_21551;
(statearr_21561[(9)] = inst_21544);

return statearr_21561;
})();
var statearr_21562_23588 = state_21551__$1;
(statearr_21562_23588[(2)] = null);

(statearr_21562_23588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21552 === (5))){
var inst_21535 = cljs.core.async.close_BANG_(jobs);
var state_21551__$1 = state_21551;
var statearr_21563_23590 = state_21551__$1;
(statearr_21563_23590[(2)] = inst_21535);

(statearr_21563_23590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21552 === (8))){
var inst_21537 = (state_21551[(8)]);
var inst_21542 = (state_21551[(2)]);
var state_21551__$1 = (function (){var statearr_21565 = state_21551;
(statearr_21565[(10)] = inst_21542);

return statearr_21565;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21551__$1,(9),results,inst_21537);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0 = (function (){
var statearr_21566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__);

(statearr_21566[(1)] = (1));

return statearr_21566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1 = (function (state_21551){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21551);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21567){var ex__20870__auto__ = e21567;
var statearr_21568_23592 = state_21551;
(statearr_21568_23592[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21551[(4)]))){
var statearr_21569_23593 = state_21551;
(statearr_21569_23593[(1)] = cljs.core.first((state_21551[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23594 = state_21551;
state_21551 = G__23594;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = function(state_21551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1.call(this,state_21551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_21571 = f__21048__auto__();
(statearr_21571[(6)] = c__21047__auto___23583);

return statearr_21571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


var c__21047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_21610){
var state_val_21611 = (state_21610[(1)]);
if((state_val_21611 === (7))){
var inst_21606 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
var statearr_21612_23595 = state_21610__$1;
(statearr_21612_23595[(2)] = inst_21606);

(statearr_21612_23595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (20))){
var state_21610__$1 = state_21610;
var statearr_21613_23596 = state_21610__$1;
(statearr_21613_23596[(2)] = null);

(statearr_21613_23596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (1))){
var state_21610__$1 = state_21610;
var statearr_21615_23597 = state_21610__$1;
(statearr_21615_23597[(2)] = null);

(statearr_21615_23597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (4))){
var inst_21574 = (state_21610[(7)]);
var inst_21574__$1 = (state_21610[(2)]);
var inst_21575 = (inst_21574__$1 == null);
var state_21610__$1 = (function (){var statearr_21616 = state_21610;
(statearr_21616[(7)] = inst_21574__$1);

return statearr_21616;
})();
if(cljs.core.truth_(inst_21575)){
var statearr_21617_23598 = state_21610__$1;
(statearr_21617_23598[(1)] = (5));

} else {
var statearr_21618_23599 = state_21610__$1;
(statearr_21618_23599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (15))){
var inst_21587 = (state_21610[(8)]);
var state_21610__$1 = state_21610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21610__$1,(18),to,inst_21587);
} else {
if((state_val_21611 === (21))){
var inst_21601 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
var statearr_21619_23600 = state_21610__$1;
(statearr_21619_23600[(2)] = inst_21601);

(statearr_21619_23600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (13))){
var inst_21603 = (state_21610[(2)]);
var state_21610__$1 = (function (){var statearr_21620 = state_21610;
(statearr_21620[(9)] = inst_21603);

return statearr_21620;
})();
var statearr_21621_23602 = state_21610__$1;
(statearr_21621_23602[(2)] = null);

(statearr_21621_23602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (6))){
var inst_21574 = (state_21610[(7)]);
var state_21610__$1 = state_21610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21610__$1,(11),inst_21574);
} else {
if((state_val_21611 === (17))){
var inst_21596 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
if(cljs.core.truth_(inst_21596)){
var statearr_21624_23604 = state_21610__$1;
(statearr_21624_23604[(1)] = (19));

} else {
var statearr_21625_23605 = state_21610__$1;
(statearr_21625_23605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (3))){
var inst_21608 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21610__$1,inst_21608);
} else {
if((state_val_21611 === (12))){
var inst_21584 = (state_21610[(10)]);
var state_21610__$1 = state_21610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21610__$1,(14),inst_21584);
} else {
if((state_val_21611 === (2))){
var state_21610__$1 = state_21610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21610__$1,(4),results);
} else {
if((state_val_21611 === (19))){
var state_21610__$1 = state_21610;
var statearr_21627_23606 = state_21610__$1;
(statearr_21627_23606[(2)] = null);

(statearr_21627_23606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (11))){
var inst_21584 = (state_21610[(2)]);
var state_21610__$1 = (function (){var statearr_21628 = state_21610;
(statearr_21628[(10)] = inst_21584);

return statearr_21628;
})();
var statearr_21629_23607 = state_21610__$1;
(statearr_21629_23607[(2)] = null);

(statearr_21629_23607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (9))){
var state_21610__$1 = state_21610;
var statearr_21630_23608 = state_21610__$1;
(statearr_21630_23608[(2)] = null);

(statearr_21630_23608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (5))){
var state_21610__$1 = state_21610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21631_23609 = state_21610__$1;
(statearr_21631_23609[(1)] = (8));

} else {
var statearr_21632_23610 = state_21610__$1;
(statearr_21632_23610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (14))){
var inst_21587 = (state_21610[(8)]);
var inst_21589 = (state_21610[(11)]);
var inst_21587__$1 = (state_21610[(2)]);
var inst_21588 = (inst_21587__$1 == null);
var inst_21589__$1 = cljs.core.not(inst_21588);
var state_21610__$1 = (function (){var statearr_21633 = state_21610;
(statearr_21633[(8)] = inst_21587__$1);

(statearr_21633[(11)] = inst_21589__$1);

return statearr_21633;
})();
if(inst_21589__$1){
var statearr_21634_23611 = state_21610__$1;
(statearr_21634_23611[(1)] = (15));

} else {
var statearr_21636_23612 = state_21610__$1;
(statearr_21636_23612[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (16))){
var inst_21589 = (state_21610[(11)]);
var state_21610__$1 = state_21610;
var statearr_21637_23613 = state_21610__$1;
(statearr_21637_23613[(2)] = inst_21589);

(statearr_21637_23613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (10))){
var inst_21581 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
var statearr_21638_23614 = state_21610__$1;
(statearr_21638_23614[(2)] = inst_21581);

(statearr_21638_23614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (18))){
var inst_21593 = (state_21610[(2)]);
var state_21610__$1 = state_21610;
var statearr_21639_23615 = state_21610__$1;
(statearr_21639_23615[(2)] = inst_21593);

(statearr_21639_23615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21611 === (8))){
var inst_21578 = cljs.core.async.close_BANG_(to);
var state_21610__$1 = state_21610;
var statearr_21640_23616 = state_21610__$1;
(statearr_21640_23616[(2)] = inst_21578);

(statearr_21640_23616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0 = (function (){
var statearr_21641 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__);

(statearr_21641[(1)] = (1));

return statearr_21641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1 = (function (state_21610){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21610);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21642){var ex__20870__auto__ = e21642;
var statearr_21643_23618 = state_21610;
(statearr_21643_23618[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21610[(4)]))){
var statearr_21644_23619 = state_21610;
(statearr_21644_23619[(1)] = cljs.core.first((state_21610[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23620 = state_21610;
state_21610 = G__23620;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__ = function(state_21610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1.call(this,state_21610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_21646 = f__21048__auto__();
(statearr_21646[(6)] = c__21047__auto__);

return statearr_21646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));

return c__21047__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21648 = arguments.length;
switch (G__21648) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21651 = arguments.length;
switch (G__21651) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21654 = arguments.length;
switch (G__21654) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21047__auto___23626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_21681){
var state_val_21682 = (state_21681[(1)]);
if((state_val_21682 === (7))){
var inst_21677 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21683_23627 = state_21681__$1;
(statearr_21683_23627[(2)] = inst_21677);

(statearr_21683_23627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (1))){
var state_21681__$1 = state_21681;
var statearr_21684_23628 = state_21681__$1;
(statearr_21684_23628[(2)] = null);

(statearr_21684_23628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (4))){
var inst_21658 = (state_21681[(7)]);
var inst_21658__$1 = (state_21681[(2)]);
var inst_21659 = (inst_21658__$1 == null);
var state_21681__$1 = (function (){var statearr_21686 = state_21681;
(statearr_21686[(7)] = inst_21658__$1);

return statearr_21686;
})();
if(cljs.core.truth_(inst_21659)){
var statearr_21687_23630 = state_21681__$1;
(statearr_21687_23630[(1)] = (5));

} else {
var statearr_21688_23631 = state_21681__$1;
(statearr_21688_23631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (13))){
var state_21681__$1 = state_21681;
var statearr_21689_23633 = state_21681__$1;
(statearr_21689_23633[(2)] = null);

(statearr_21689_23633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (6))){
var inst_21658 = (state_21681[(7)]);
var inst_21664 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21658) : p.call(null,inst_21658));
var state_21681__$1 = state_21681;
if(cljs.core.truth_(inst_21664)){
var statearr_21690_23634 = state_21681__$1;
(statearr_21690_23634[(1)] = (9));

} else {
var statearr_21691_23635 = state_21681__$1;
(statearr_21691_23635[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (3))){
var inst_21679 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21681__$1,inst_21679);
} else {
if((state_val_21682 === (12))){
var state_21681__$1 = state_21681;
var statearr_21692_23639 = state_21681__$1;
(statearr_21692_23639[(2)] = null);

(statearr_21692_23639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (2))){
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21681__$1,(4),ch);
} else {
if((state_val_21682 === (11))){
var inst_21658 = (state_21681[(7)]);
var inst_21668 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21681__$1,(8),inst_21668,inst_21658);
} else {
if((state_val_21682 === (9))){
var state_21681__$1 = state_21681;
var statearr_21694_23640 = state_21681__$1;
(statearr_21694_23640[(2)] = tc);

(statearr_21694_23640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (5))){
var inst_21661 = cljs.core.async.close_BANG_(tc);
var inst_21662 = cljs.core.async.close_BANG_(fc);
var state_21681__$1 = (function (){var statearr_21695 = state_21681;
(statearr_21695[(8)] = inst_21661);

return statearr_21695;
})();
var statearr_21696_23641 = state_21681__$1;
(statearr_21696_23641[(2)] = inst_21662);

(statearr_21696_23641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (14))){
var inst_21675 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21697_23642 = state_21681__$1;
(statearr_21697_23642[(2)] = inst_21675);

(statearr_21697_23642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (10))){
var state_21681__$1 = state_21681;
var statearr_21698_23643 = state_21681__$1;
(statearr_21698_23643[(2)] = fc);

(statearr_21698_23643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (8))){
var inst_21670 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
if(cljs.core.truth_(inst_21670)){
var statearr_21699_23647 = state_21681__$1;
(statearr_21699_23647[(1)] = (12));

} else {
var statearr_21700_23648 = state_21681__$1;
(statearr_21700_23648[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_21702 = [null,null,null,null,null,null,null,null,null];
(statearr_21702[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_21702[(1)] = (1));

return statearr_21702;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_21681){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21681);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21703){var ex__20870__auto__ = e21703;
var statearr_21704_23649 = state_21681;
(statearr_21704_23649[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21681[(4)]))){
var statearr_21705_23651 = state_21681;
(statearr_21705_23651[(1)] = cljs.core.first((state_21681[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23652 = state_21681;
state_21681 = G__23652;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_21681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_21681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_21706 = f__21048__auto__();
(statearr_21706[(6)] = c__21047__auto___23626);

return statearr_21706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_21729){
var state_val_21730 = (state_21729[(1)]);
if((state_val_21730 === (7))){
var inst_21725 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21732_23653 = state_21729__$1;
(statearr_21732_23653[(2)] = inst_21725);

(statearr_21732_23653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (1))){
var inst_21708 = init;
var inst_21709 = inst_21708;
var state_21729__$1 = (function (){var statearr_21733 = state_21729;
(statearr_21733[(7)] = inst_21709);

return statearr_21733;
})();
var statearr_21734_23654 = state_21729__$1;
(statearr_21734_23654[(2)] = null);

(statearr_21734_23654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (4))){
var inst_21712 = (state_21729[(8)]);
var inst_21712__$1 = (state_21729[(2)]);
var inst_21713 = (inst_21712__$1 == null);
var state_21729__$1 = (function (){var statearr_21735 = state_21729;
(statearr_21735[(8)] = inst_21712__$1);

return statearr_21735;
})();
if(cljs.core.truth_(inst_21713)){
var statearr_21736_23655 = state_21729__$1;
(statearr_21736_23655[(1)] = (5));

} else {
var statearr_21737_23656 = state_21729__$1;
(statearr_21737_23656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (6))){
var inst_21716 = (state_21729[(9)]);
var inst_21712 = (state_21729[(8)]);
var inst_21709 = (state_21729[(7)]);
var inst_21716__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21709,inst_21712) : f.call(null,inst_21709,inst_21712));
var inst_21717 = cljs.core.reduced_QMARK_(inst_21716__$1);
var state_21729__$1 = (function (){var statearr_21738 = state_21729;
(statearr_21738[(9)] = inst_21716__$1);

return statearr_21738;
})();
if(inst_21717){
var statearr_21739_23661 = state_21729__$1;
(statearr_21739_23661[(1)] = (8));

} else {
var statearr_21740_23662 = state_21729__$1;
(statearr_21740_23662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (3))){
var inst_21727 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21729__$1,inst_21727);
} else {
if((state_val_21730 === (2))){
var state_21729__$1 = state_21729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21729__$1,(4),ch);
} else {
if((state_val_21730 === (9))){
var inst_21716 = (state_21729[(9)]);
var inst_21709 = inst_21716;
var state_21729__$1 = (function (){var statearr_21742 = state_21729;
(statearr_21742[(7)] = inst_21709);

return statearr_21742;
})();
var statearr_21743_23664 = state_21729__$1;
(statearr_21743_23664[(2)] = null);

(statearr_21743_23664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (5))){
var inst_21709 = (state_21729[(7)]);
var state_21729__$1 = state_21729;
var statearr_21744_23665 = state_21729__$1;
(statearr_21744_23665[(2)] = inst_21709);

(statearr_21744_23665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (10))){
var inst_21723 = (state_21729[(2)]);
var state_21729__$1 = state_21729;
var statearr_21745_23666 = state_21729__$1;
(statearr_21745_23666[(2)] = inst_21723);

(statearr_21745_23666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21730 === (8))){
var inst_21716 = (state_21729[(9)]);
var inst_21719 = cljs.core.deref(inst_21716);
var state_21729__$1 = state_21729;
var statearr_21746_23667 = state_21729__$1;
(statearr_21746_23667[(2)] = inst_21719);

(statearr_21746_23667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__20867__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20867__auto____0 = (function (){
var statearr_21747 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21747[(0)] = cljs$core$async$reduce_$_state_machine__20867__auto__);

(statearr_21747[(1)] = (1));

return statearr_21747;
});
var cljs$core$async$reduce_$_state_machine__20867__auto____1 = (function (state_21729){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21729);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21749){var ex__20870__auto__ = e21749;
var statearr_21750_23668 = state_21729;
(statearr_21750_23668[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21729[(4)]))){
var statearr_21751_23669 = state_21729;
(statearr_21751_23669[(1)] = cljs.core.first((state_21729[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23670 = state_21729;
state_21729 = G__23670;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20867__auto__ = function(state_21729){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20867__auto____1.call(this,state_21729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20867__auto____0;
cljs$core$async$reduce_$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20867__auto____1;
return cljs$core$async$reduce_$_state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_21752 = f__21048__auto__();
(statearr_21752[(6)] = c__21047__auto__);

return statearr_21752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));

return c__21047__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_21760){
var state_val_21761 = (state_21760[(1)]);
if((state_val_21761 === (1))){
var inst_21755 = cljs.core.async.reduce(f__$1,init,ch);
var state_21760__$1 = state_21760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21760__$1,(2),inst_21755);
} else {
if((state_val_21761 === (2))){
var inst_21757 = (state_21760[(2)]);
var inst_21758 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21757) : f__$1.call(null,inst_21757));
var state_21760__$1 = state_21760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21760__$1,inst_21758);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__20867__auto__ = null;
var cljs$core$async$transduce_$_state_machine__20867__auto____0 = (function (){
var statearr_21764 = [null,null,null,null,null,null,null];
(statearr_21764[(0)] = cljs$core$async$transduce_$_state_machine__20867__auto__);

(statearr_21764[(1)] = (1));

return statearr_21764;
});
var cljs$core$async$transduce_$_state_machine__20867__auto____1 = (function (state_21760){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21760);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21765){var ex__20870__auto__ = e21765;
var statearr_21766_23677 = state_21760;
(statearr_21766_23677[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21760[(4)]))){
var statearr_21767_23678 = state_21760;
(statearr_21767_23678[(1)] = cljs.core.first((state_21760[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23679 = state_21760;
state_21760 = G__23679;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__20867__auto__ = function(state_21760){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__20867__auto____1.call(this,state_21760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__20867__auto____0;
cljs$core$async$transduce_$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__20867__auto____1;
return cljs$core$async$transduce_$_state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_21768 = f__21048__auto__();
(statearr_21768[(6)] = c__21047__auto__);

return statearr_21768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));

return c__21047__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__21770 = arguments.length;
switch (G__21770) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_21795){
var state_val_21796 = (state_21795[(1)]);
if((state_val_21796 === (7))){
var inst_21777 = (state_21795[(2)]);
var state_21795__$1 = state_21795;
var statearr_21797_23685 = state_21795__$1;
(statearr_21797_23685[(2)] = inst_21777);

(statearr_21797_23685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (1))){
var inst_21771 = cljs.core.seq(coll);
var inst_21772 = inst_21771;
var state_21795__$1 = (function (){var statearr_21798 = state_21795;
(statearr_21798[(7)] = inst_21772);

return statearr_21798;
})();
var statearr_21800_23686 = state_21795__$1;
(statearr_21800_23686[(2)] = null);

(statearr_21800_23686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (4))){
var inst_21772 = (state_21795[(7)]);
var inst_21775 = cljs.core.first(inst_21772);
var state_21795__$1 = state_21795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21795__$1,(7),ch,inst_21775);
} else {
if((state_val_21796 === (13))){
var inst_21789 = (state_21795[(2)]);
var state_21795__$1 = state_21795;
var statearr_21802_23694 = state_21795__$1;
(statearr_21802_23694[(2)] = inst_21789);

(statearr_21802_23694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (6))){
var inst_21780 = (state_21795[(2)]);
var state_21795__$1 = state_21795;
if(cljs.core.truth_(inst_21780)){
var statearr_21803_23695 = state_21795__$1;
(statearr_21803_23695[(1)] = (8));

} else {
var statearr_21804_23696 = state_21795__$1;
(statearr_21804_23696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (3))){
var inst_21793 = (state_21795[(2)]);
var state_21795__$1 = state_21795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21795__$1,inst_21793);
} else {
if((state_val_21796 === (12))){
var state_21795__$1 = state_21795;
var statearr_21805_23697 = state_21795__$1;
(statearr_21805_23697[(2)] = null);

(statearr_21805_23697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (2))){
var inst_21772 = (state_21795[(7)]);
var state_21795__$1 = state_21795;
if(cljs.core.truth_(inst_21772)){
var statearr_21806_23701 = state_21795__$1;
(statearr_21806_23701[(1)] = (4));

} else {
var statearr_21807_23702 = state_21795__$1;
(statearr_21807_23702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (11))){
var inst_21786 = cljs.core.async.close_BANG_(ch);
var state_21795__$1 = state_21795;
var statearr_21808_23706 = state_21795__$1;
(statearr_21808_23706[(2)] = inst_21786);

(statearr_21808_23706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (9))){
var state_21795__$1 = state_21795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21809_23707 = state_21795__$1;
(statearr_21809_23707[(1)] = (11));

} else {
var statearr_21810_23708 = state_21795__$1;
(statearr_21810_23708[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (5))){
var inst_21772 = (state_21795[(7)]);
var state_21795__$1 = state_21795;
var statearr_21811_23709 = state_21795__$1;
(statearr_21811_23709[(2)] = inst_21772);

(statearr_21811_23709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (10))){
var inst_21791 = (state_21795[(2)]);
var state_21795__$1 = state_21795;
var statearr_21812_23713 = state_21795__$1;
(statearr_21812_23713[(2)] = inst_21791);

(statearr_21812_23713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21796 === (8))){
var inst_21772 = (state_21795[(7)]);
var inst_21782 = cljs.core.next(inst_21772);
var inst_21772__$1 = inst_21782;
var state_21795__$1 = (function (){var statearr_21813 = state_21795;
(statearr_21813[(7)] = inst_21772__$1);

return statearr_21813;
})();
var statearr_21814_23714 = state_21795__$1;
(statearr_21814_23714[(2)] = null);

(statearr_21814_23714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_21815 = [null,null,null,null,null,null,null,null];
(statearr_21815[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_21815[(1)] = (1));

return statearr_21815;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_21795){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_21795);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e21816){var ex__20870__auto__ = e21816;
var statearr_21817_23724 = state_21795;
(statearr_21817_23724[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_21795[(4)]))){
var statearr_21821_23725 = state_21795;
(statearr_21821_23725[(1)] = cljs.core.first((state_21795[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23726 = state_21795;
state_21795 = G__23726;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_21795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_21795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_21822 = f__21048__auto__();
(statearr_21822[(6)] = c__21047__auto__);

return statearr_21822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));

return c__21047__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__21831 = arguments.length;
switch (G__21831) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23731 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23731(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23732 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23732(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23736 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23736(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23737 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23737(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21872 = (function (ch,cs,meta21873){
this.ch = ch;
this.cs = cs;
this.meta21873 = meta21873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21874,meta21873__$1){
var self__ = this;
var _21874__$1 = this;
return (new cljs.core.async.t_cljs$core$async21872(self__.ch,self__.cs,meta21873__$1));
}));

(cljs.core.async.t_cljs$core$async21872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21874){
var self__ = this;
var _21874__$1 = this;
return self__.meta21873;
}));

(cljs.core.async.t_cljs$core$async21872.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21872.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21872.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async21872.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async21872.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async21872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21873","meta21873",1430103426,null)], null);
}));

(cljs.core.async.t_cljs$core$async21872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21872");

(cljs.core.async.t_cljs$core$async21872.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21872.
 */
cljs.core.async.__GT_t_cljs$core$async21872 = (function cljs$core$async$__GT_t_cljs$core$async21872(ch,cs,meta21873){
return (new cljs.core.async.t_cljs$core$async21872(ch,cs,meta21873));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async21872(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__21047__auto___23742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_22049){
var state_val_22050 = (state_22049[(1)]);
if((state_val_22050 === (7))){
var inst_22040 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22052_23743 = state_22049__$1;
(statearr_22052_23743[(2)] = inst_22040);

(statearr_22052_23743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (20))){
var inst_21932 = (state_22049[(7)]);
var inst_21948 = cljs.core.first(inst_21932);
var inst_21949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21948,(0),null);
var inst_21950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21948,(1),null);
var state_22049__$1 = (function (){var statearr_22056 = state_22049;
(statearr_22056[(8)] = inst_21949);

return statearr_22056;
})();
if(cljs.core.truth_(inst_21950)){
var statearr_22057_23744 = state_22049__$1;
(statearr_22057_23744[(1)] = (22));

} else {
var statearr_22058_23745 = state_22049__$1;
(statearr_22058_23745[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (27))){
var inst_21979 = (state_22049[(9)]);
var inst_21897 = (state_22049[(10)]);
var inst_21981 = (state_22049[(11)]);
var inst_21986 = (state_22049[(12)]);
var inst_21986__$1 = cljs.core._nth(inst_21979,inst_21981);
var inst_21989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21986__$1,inst_21897,done);
var state_22049__$1 = (function (){var statearr_22061 = state_22049;
(statearr_22061[(12)] = inst_21986__$1);

return statearr_22061;
})();
if(cljs.core.truth_(inst_21989)){
var statearr_22063_23746 = state_22049__$1;
(statearr_22063_23746[(1)] = (30));

} else {
var statearr_22065_23747 = state_22049__$1;
(statearr_22065_23747[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (1))){
var state_22049__$1 = state_22049;
var statearr_22068_23748 = state_22049__$1;
(statearr_22068_23748[(2)] = null);

(statearr_22068_23748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (24))){
var inst_21932 = (state_22049[(7)]);
var inst_21955 = (state_22049[(2)]);
var inst_21956 = cljs.core.next(inst_21932);
var inst_21906 = inst_21956;
var inst_21907 = null;
var inst_21908 = (0);
var inst_21909 = (0);
var state_22049__$1 = (function (){var statearr_22075 = state_22049;
(statearr_22075[(13)] = inst_21908);

(statearr_22075[(14)] = inst_21909);

(statearr_22075[(15)] = inst_21906);

(statearr_22075[(16)] = inst_21907);

(statearr_22075[(17)] = inst_21955);

return statearr_22075;
})();
var statearr_22077_23749 = state_22049__$1;
(statearr_22077_23749[(2)] = null);

(statearr_22077_23749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (39))){
var state_22049__$1 = state_22049;
var statearr_22085_23750 = state_22049__$1;
(statearr_22085_23750[(2)] = null);

(statearr_22085_23750[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (4))){
var inst_21897 = (state_22049[(10)]);
var inst_21897__$1 = (state_22049[(2)]);
var inst_21898 = (inst_21897__$1 == null);
var state_22049__$1 = (function (){var statearr_22089 = state_22049;
(statearr_22089[(10)] = inst_21897__$1);

return statearr_22089;
})();
if(cljs.core.truth_(inst_21898)){
var statearr_22091_23751 = state_22049__$1;
(statearr_22091_23751[(1)] = (5));

} else {
var statearr_22092_23752 = state_22049__$1;
(statearr_22092_23752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (15))){
var inst_21908 = (state_22049[(13)]);
var inst_21909 = (state_22049[(14)]);
var inst_21906 = (state_22049[(15)]);
var inst_21907 = (state_22049[(16)]);
var inst_21927 = (state_22049[(2)]);
var inst_21929 = (inst_21909 + (1));
var tmp22081 = inst_21908;
var tmp22082 = inst_21906;
var tmp22083 = inst_21907;
var inst_21906__$1 = tmp22082;
var inst_21907__$1 = tmp22083;
var inst_21908__$1 = tmp22081;
var inst_21909__$1 = inst_21929;
var state_22049__$1 = (function (){var statearr_22099 = state_22049;
(statearr_22099[(13)] = inst_21908__$1);

(statearr_22099[(14)] = inst_21909__$1);

(statearr_22099[(18)] = inst_21927);

(statearr_22099[(15)] = inst_21906__$1);

(statearr_22099[(16)] = inst_21907__$1);

return statearr_22099;
})();
var statearr_22103_23753 = state_22049__$1;
(statearr_22103_23753[(2)] = null);

(statearr_22103_23753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (21))){
var inst_21959 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22108_23754 = state_22049__$1;
(statearr_22108_23754[(2)] = inst_21959);

(statearr_22108_23754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (31))){
var inst_21986 = (state_22049[(12)]);
var inst_21992 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21986);
var state_22049__$1 = state_22049;
var statearr_22113_23755 = state_22049__$1;
(statearr_22113_23755[(2)] = inst_21992);

(statearr_22113_23755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (32))){
var inst_21979 = (state_22049[(9)]);
var inst_21978 = (state_22049[(19)]);
var inst_21981 = (state_22049[(11)]);
var inst_21980 = (state_22049[(20)]);
var inst_21995 = (state_22049[(2)]);
var inst_21996 = (inst_21981 + (1));
var tmp22104 = inst_21979;
var tmp22105 = inst_21978;
var tmp22106 = inst_21980;
var inst_21978__$1 = tmp22105;
var inst_21979__$1 = tmp22104;
var inst_21980__$1 = tmp22106;
var inst_21981__$1 = inst_21996;
var state_22049__$1 = (function (){var statearr_22120 = state_22049;
(statearr_22120[(9)] = inst_21979__$1);

(statearr_22120[(19)] = inst_21978__$1);

(statearr_22120[(11)] = inst_21981__$1);

(statearr_22120[(20)] = inst_21980__$1);

(statearr_22120[(21)] = inst_21995);

return statearr_22120;
})();
var statearr_22123_23756 = state_22049__$1;
(statearr_22123_23756[(2)] = null);

(statearr_22123_23756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (40))){
var inst_22010 = (state_22049[(22)]);
var inst_22014 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22010);
var state_22049__$1 = state_22049;
var statearr_22127_23757 = state_22049__$1;
(statearr_22127_23757[(2)] = inst_22014);

(statearr_22127_23757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (33))){
var inst_21999 = (state_22049[(23)]);
var inst_22002 = cljs.core.chunked_seq_QMARK_(inst_21999);
var state_22049__$1 = state_22049;
if(inst_22002){
var statearr_22132_23758 = state_22049__$1;
(statearr_22132_23758[(1)] = (36));

} else {
var statearr_22134_23759 = state_22049__$1;
(statearr_22134_23759[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (13))){
var inst_21921 = (state_22049[(24)]);
var inst_21924 = cljs.core.async.close_BANG_(inst_21921);
var state_22049__$1 = state_22049;
var statearr_22138_23760 = state_22049__$1;
(statearr_22138_23760[(2)] = inst_21924);

(statearr_22138_23760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (22))){
var inst_21949 = (state_22049[(8)]);
var inst_21952 = cljs.core.async.close_BANG_(inst_21949);
var state_22049__$1 = state_22049;
var statearr_22143_23761 = state_22049__$1;
(statearr_22143_23761[(2)] = inst_21952);

(statearr_22143_23761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (36))){
var inst_21999 = (state_22049[(23)]);
var inst_22004 = cljs.core.chunk_first(inst_21999);
var inst_22005 = cljs.core.chunk_rest(inst_21999);
var inst_22006 = cljs.core.count(inst_22004);
var inst_21978 = inst_22005;
var inst_21979 = inst_22004;
var inst_21980 = inst_22006;
var inst_21981 = (0);
var state_22049__$1 = (function (){var statearr_22145 = state_22049;
(statearr_22145[(9)] = inst_21979);

(statearr_22145[(19)] = inst_21978);

(statearr_22145[(11)] = inst_21981);

(statearr_22145[(20)] = inst_21980);

return statearr_22145;
})();
var statearr_22146_23766 = state_22049__$1;
(statearr_22146_23766[(2)] = null);

(statearr_22146_23766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (41))){
var inst_21999 = (state_22049[(23)]);
var inst_22016 = (state_22049[(2)]);
var inst_22019 = cljs.core.next(inst_21999);
var inst_21978 = inst_22019;
var inst_21979 = null;
var inst_21980 = (0);
var inst_21981 = (0);
var state_22049__$1 = (function (){var statearr_22151 = state_22049;
(statearr_22151[(9)] = inst_21979);

(statearr_22151[(19)] = inst_21978);

(statearr_22151[(11)] = inst_21981);

(statearr_22151[(25)] = inst_22016);

(statearr_22151[(20)] = inst_21980);

return statearr_22151;
})();
var statearr_22153_23767 = state_22049__$1;
(statearr_22153_23767[(2)] = null);

(statearr_22153_23767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (43))){
var state_22049__$1 = state_22049;
var statearr_22157_23768 = state_22049__$1;
(statearr_22157_23768[(2)] = null);

(statearr_22157_23768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (29))){
var inst_22028 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22159_23769 = state_22049__$1;
(statearr_22159_23769[(2)] = inst_22028);

(statearr_22159_23769[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (44))){
var inst_22037 = (state_22049[(2)]);
var state_22049__$1 = (function (){var statearr_22161 = state_22049;
(statearr_22161[(26)] = inst_22037);

return statearr_22161;
})();
var statearr_22162_23770 = state_22049__$1;
(statearr_22162_23770[(2)] = null);

(statearr_22162_23770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (6))){
var inst_21970 = (state_22049[(27)]);
var inst_21969 = cljs.core.deref(cs);
var inst_21970__$1 = cljs.core.keys(inst_21969);
var inst_21971 = cljs.core.count(inst_21970__$1);
var inst_21972 = cljs.core.reset_BANG_(dctr,inst_21971);
var inst_21977 = cljs.core.seq(inst_21970__$1);
var inst_21978 = inst_21977;
var inst_21979 = null;
var inst_21980 = (0);
var inst_21981 = (0);
var state_22049__$1 = (function (){var statearr_22166 = state_22049;
(statearr_22166[(9)] = inst_21979);

(statearr_22166[(19)] = inst_21978);

(statearr_22166[(11)] = inst_21981);

(statearr_22166[(20)] = inst_21980);

(statearr_22166[(27)] = inst_21970__$1);

(statearr_22166[(28)] = inst_21972);

return statearr_22166;
})();
var statearr_22168_23774 = state_22049__$1;
(statearr_22168_23774[(2)] = null);

(statearr_22168_23774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (28))){
var inst_21978 = (state_22049[(19)]);
var inst_21999 = (state_22049[(23)]);
var inst_21999__$1 = cljs.core.seq(inst_21978);
var state_22049__$1 = (function (){var statearr_22172 = state_22049;
(statearr_22172[(23)] = inst_21999__$1);

return statearr_22172;
})();
if(inst_21999__$1){
var statearr_22173_23775 = state_22049__$1;
(statearr_22173_23775[(1)] = (33));

} else {
var statearr_22174_23776 = state_22049__$1;
(statearr_22174_23776[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (25))){
var inst_21981 = (state_22049[(11)]);
var inst_21980 = (state_22049[(20)]);
var inst_21983 = (inst_21981 < inst_21980);
var inst_21984 = inst_21983;
var state_22049__$1 = state_22049;
if(cljs.core.truth_(inst_21984)){
var statearr_22176_23777 = state_22049__$1;
(statearr_22176_23777[(1)] = (27));

} else {
var statearr_22177_23778 = state_22049__$1;
(statearr_22177_23778[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (34))){
var state_22049__$1 = state_22049;
var statearr_22181_23779 = state_22049__$1;
(statearr_22181_23779[(2)] = null);

(statearr_22181_23779[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (17))){
var state_22049__$1 = state_22049;
var statearr_22182_23780 = state_22049__$1;
(statearr_22182_23780[(2)] = null);

(statearr_22182_23780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (3))){
var inst_22042 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22049__$1,inst_22042);
} else {
if((state_val_22050 === (12))){
var inst_21964 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22186_23781 = state_22049__$1;
(statearr_22186_23781[(2)] = inst_21964);

(statearr_22186_23781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (2))){
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22049__$1,(4),ch);
} else {
if((state_val_22050 === (23))){
var state_22049__$1 = state_22049;
var statearr_22189_23782 = state_22049__$1;
(statearr_22189_23782[(2)] = null);

(statearr_22189_23782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (35))){
var inst_22026 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22192_23783 = state_22049__$1;
(statearr_22192_23783[(2)] = inst_22026);

(statearr_22192_23783[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (19))){
var inst_21932 = (state_22049[(7)]);
var inst_21937 = cljs.core.chunk_first(inst_21932);
var inst_21939 = cljs.core.chunk_rest(inst_21932);
var inst_21941 = cljs.core.count(inst_21937);
var inst_21906 = inst_21939;
var inst_21907 = inst_21937;
var inst_21908 = inst_21941;
var inst_21909 = (0);
var state_22049__$1 = (function (){var statearr_22194 = state_22049;
(statearr_22194[(13)] = inst_21908);

(statearr_22194[(14)] = inst_21909);

(statearr_22194[(15)] = inst_21906);

(statearr_22194[(16)] = inst_21907);

return statearr_22194;
})();
var statearr_22197_23784 = state_22049__$1;
(statearr_22197_23784[(2)] = null);

(statearr_22197_23784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (11))){
var inst_21932 = (state_22049[(7)]);
var inst_21906 = (state_22049[(15)]);
var inst_21932__$1 = cljs.core.seq(inst_21906);
var state_22049__$1 = (function (){var statearr_22199 = state_22049;
(statearr_22199[(7)] = inst_21932__$1);

return statearr_22199;
})();
if(inst_21932__$1){
var statearr_22200_23785 = state_22049__$1;
(statearr_22200_23785[(1)] = (16));

} else {
var statearr_22201_23786 = state_22049__$1;
(statearr_22201_23786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (9))){
var inst_21967 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22202_23787 = state_22049__$1;
(statearr_22202_23787[(2)] = inst_21967);

(statearr_22202_23787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (5))){
var inst_21904 = cljs.core.deref(cs);
var inst_21905 = cljs.core.seq(inst_21904);
var inst_21906 = inst_21905;
var inst_21907 = null;
var inst_21908 = (0);
var inst_21909 = (0);
var state_22049__$1 = (function (){var statearr_22203 = state_22049;
(statearr_22203[(13)] = inst_21908);

(statearr_22203[(14)] = inst_21909);

(statearr_22203[(15)] = inst_21906);

(statearr_22203[(16)] = inst_21907);

return statearr_22203;
})();
var statearr_22204_23790 = state_22049__$1;
(statearr_22204_23790[(2)] = null);

(statearr_22204_23790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (14))){
var state_22049__$1 = state_22049;
var statearr_22205_23794 = state_22049__$1;
(statearr_22205_23794[(2)] = null);

(statearr_22205_23794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (45))){
var inst_22034 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22206_23795 = state_22049__$1;
(statearr_22206_23795[(2)] = inst_22034);

(statearr_22206_23795[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (26))){
var inst_21970 = (state_22049[(27)]);
var inst_22030 = (state_22049[(2)]);
var inst_22031 = cljs.core.seq(inst_21970);
var state_22049__$1 = (function (){var statearr_22207 = state_22049;
(statearr_22207[(29)] = inst_22030);

return statearr_22207;
})();
if(inst_22031){
var statearr_22208_23797 = state_22049__$1;
(statearr_22208_23797[(1)] = (42));

} else {
var statearr_22209_23798 = state_22049__$1;
(statearr_22209_23798[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (16))){
var inst_21932 = (state_22049[(7)]);
var inst_21935 = cljs.core.chunked_seq_QMARK_(inst_21932);
var state_22049__$1 = state_22049;
if(inst_21935){
var statearr_22210_23799 = state_22049__$1;
(statearr_22210_23799[(1)] = (19));

} else {
var statearr_22213_23800 = state_22049__$1;
(statearr_22213_23800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (38))){
var inst_22023 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22214_23802 = state_22049__$1;
(statearr_22214_23802[(2)] = inst_22023);

(statearr_22214_23802[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (30))){
var state_22049__$1 = state_22049;
var statearr_22215_23805 = state_22049__$1;
(statearr_22215_23805[(2)] = null);

(statearr_22215_23805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (10))){
var inst_21909 = (state_22049[(14)]);
var inst_21907 = (state_22049[(16)]);
var inst_21920 = cljs.core._nth(inst_21907,inst_21909);
var inst_21921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21920,(0),null);
var inst_21922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21920,(1),null);
var state_22049__$1 = (function (){var statearr_22216 = state_22049;
(statearr_22216[(24)] = inst_21921);

return statearr_22216;
})();
if(cljs.core.truth_(inst_21922)){
var statearr_22221_23806 = state_22049__$1;
(statearr_22221_23806[(1)] = (13));

} else {
var statearr_22222_23807 = state_22049__$1;
(statearr_22222_23807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (18))){
var inst_21962 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22227_23808 = state_22049__$1;
(statearr_22227_23808[(2)] = inst_21962);

(statearr_22227_23808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (42))){
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22049__$1,(45),dchan);
} else {
if((state_val_22050 === (37))){
var inst_22010 = (state_22049[(22)]);
var inst_21897 = (state_22049[(10)]);
var inst_21999 = (state_22049[(23)]);
var inst_22010__$1 = cljs.core.first(inst_21999);
var inst_22011 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22010__$1,inst_21897,done);
var state_22049__$1 = (function (){var statearr_22229 = state_22049;
(statearr_22229[(22)] = inst_22010__$1);

return statearr_22229;
})();
if(cljs.core.truth_(inst_22011)){
var statearr_22230_23809 = state_22049__$1;
(statearr_22230_23809[(1)] = (39));

} else {
var statearr_22231_23810 = state_22049__$1;
(statearr_22231_23810[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (8))){
var inst_21908 = (state_22049[(13)]);
var inst_21909 = (state_22049[(14)]);
var inst_21911 = (inst_21909 < inst_21908);
var inst_21912 = inst_21911;
var state_22049__$1 = state_22049;
if(cljs.core.truth_(inst_21912)){
var statearr_22232_23811 = state_22049__$1;
(statearr_22232_23811[(1)] = (10));

} else {
var statearr_22233_23812 = state_22049__$1;
(statearr_22233_23812[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__20867__auto__ = null;
var cljs$core$async$mult_$_state_machine__20867__auto____0 = (function (){
var statearr_22242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22242[(0)] = cljs$core$async$mult_$_state_machine__20867__auto__);

(statearr_22242[(1)] = (1));

return statearr_22242;
});
var cljs$core$async$mult_$_state_machine__20867__auto____1 = (function (state_22049){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_22049);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e22243){var ex__20870__auto__ = e22243;
var statearr_22244_23817 = state_22049;
(statearr_22244_23817[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_22049[(4)]))){
var statearr_22245_23818 = state_22049;
(statearr_22245_23818[(1)] = cljs.core.first((state_22049[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23822 = state_22049;
state_22049 = G__23822;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20867__auto__ = function(state_22049){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20867__auto____1.call(this,state_22049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20867__auto____0;
cljs$core$async$mult_$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20867__auto____1;
return cljs$core$async$mult_$_state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_22250 = f__21048__auto__();
(statearr_22250[(6)] = c__21047__auto___23742);

return statearr_22250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22255 = arguments.length;
switch (G__22255) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23831 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23831(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23842 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23842(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23843 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23843(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23844 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23844(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23845 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23845(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23846 = arguments.length;
var i__5727__auto___23847 = (0);
while(true){
if((i__5727__auto___23847 < len__5726__auto___23846)){
args__5732__auto__.push((arguments[i__5727__auto___23847]));

var G__23848 = (i__5727__auto___23847 + (1));
i__5727__auto___23847 = G__23848;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22309){
var map__22310 = p__22309;
var map__22310__$1 = cljs.core.__destructure_map(map__22310);
var opts = map__22310__$1;
var statearr_22311_23849 = state;
(statearr_22311_23849[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_22312_23850 = state;
(statearr_22312_23850[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_22314_23851 = state;
(statearr_22314_23851[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22298){
var G__22299 = cljs.core.first(seq22298);
var seq22298__$1 = cljs.core.next(seq22298);
var G__22300 = cljs.core.first(seq22298__$1);
var seq22298__$2 = cljs.core.next(seq22298__$1);
var G__22301 = cljs.core.first(seq22298__$2);
var seq22298__$3 = cljs.core.next(seq22298__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22299,G__22300,G__22301,seq22298__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22331 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22332){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22332 = meta22332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22333,meta22332__$1){
var self__ = this;
var _22333__$1 = this;
return (new cljs.core.async.t_cljs$core$async22331(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22332__$1));
}));

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22333){
var self__ = this;
var _22333__$1 = this;
return self__.meta22332;
}));

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22331.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async22331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22332","meta22332",-677181205,null)], null);
}));

(cljs.core.async.t_cljs$core$async22331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22331");

(cljs.core.async.t_cljs$core$async22331.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22331.
 */
cljs.core.async.__GT_t_cljs$core$async22331 = (function cljs$core$async$__GT_t_cljs$core$async22331(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22332){
return (new cljs.core.async.t_cljs$core$async22331(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22332));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async22331(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__21047__auto___23867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_22412){
var state_val_22413 = (state_22412[(1)]);
if((state_val_22413 === (7))){
var inst_22372 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
if(cljs.core.truth_(inst_22372)){
var statearr_22414_23868 = state_22412__$1;
(statearr_22414_23868[(1)] = (8));

} else {
var statearr_22415_23869 = state_22412__$1;
(statearr_22415_23869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (20))){
var inst_22365 = (state_22412[(7)]);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22412__$1,(23),out,inst_22365);
} else {
if((state_val_22413 === (1))){
var inst_22346 = calc_state();
var inst_22347 = cljs.core.__destructure_map(inst_22346);
var inst_22348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22347,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22347,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22347,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22352 = inst_22346;
var state_22412__$1 = (function (){var statearr_22416 = state_22412;
(statearr_22416[(8)] = inst_22348);

(statearr_22416[(9)] = inst_22350);

(statearr_22416[(10)] = inst_22349);

(statearr_22416[(11)] = inst_22352);

return statearr_22416;
})();
var statearr_22417_23870 = state_22412__$1;
(statearr_22417_23870[(2)] = null);

(statearr_22417_23870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (24))){
var inst_22355 = (state_22412[(12)]);
var inst_22352 = inst_22355;
var state_22412__$1 = (function (){var statearr_22418 = state_22412;
(statearr_22418[(11)] = inst_22352);

return statearr_22418;
})();
var statearr_22419_23871 = state_22412__$1;
(statearr_22419_23871[(2)] = null);

(statearr_22419_23871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (4))){
var inst_22367 = (state_22412[(13)]);
var inst_22365 = (state_22412[(7)]);
var inst_22364 = (state_22412[(2)]);
var inst_22365__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22364,(0),null);
var inst_22366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22364,(1),null);
var inst_22367__$1 = (inst_22365__$1 == null);
var state_22412__$1 = (function (){var statearr_22420 = state_22412;
(statearr_22420[(13)] = inst_22367__$1);

(statearr_22420[(7)] = inst_22365__$1);

(statearr_22420[(14)] = inst_22366);

return statearr_22420;
})();
if(cljs.core.truth_(inst_22367__$1)){
var statearr_22421_23872 = state_22412__$1;
(statearr_22421_23872[(1)] = (5));

} else {
var statearr_22422_23873 = state_22412__$1;
(statearr_22422_23873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (15))){
var inst_22357 = (state_22412[(15)]);
var inst_22386 = (state_22412[(16)]);
var inst_22386__$1 = cljs.core.empty_QMARK_(inst_22357);
var state_22412__$1 = (function (){var statearr_22423 = state_22412;
(statearr_22423[(16)] = inst_22386__$1);

return statearr_22423;
})();
if(inst_22386__$1){
var statearr_22424_23874 = state_22412__$1;
(statearr_22424_23874[(1)] = (17));

} else {
var statearr_22425_23875 = state_22412__$1;
(statearr_22425_23875[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (21))){
var inst_22355 = (state_22412[(12)]);
var inst_22352 = inst_22355;
var state_22412__$1 = (function (){var statearr_22426 = state_22412;
(statearr_22426[(11)] = inst_22352);

return statearr_22426;
})();
var statearr_22427_23876 = state_22412__$1;
(statearr_22427_23876[(2)] = null);

(statearr_22427_23876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (13))){
var inst_22379 = (state_22412[(2)]);
var inst_22380 = calc_state();
var inst_22352 = inst_22380;
var state_22412__$1 = (function (){var statearr_22428 = state_22412;
(statearr_22428[(17)] = inst_22379);

(statearr_22428[(11)] = inst_22352);

return statearr_22428;
})();
var statearr_22429_23877 = state_22412__$1;
(statearr_22429_23877[(2)] = null);

(statearr_22429_23877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (22))){
var inst_22406 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22430_23878 = state_22412__$1;
(statearr_22430_23878[(2)] = inst_22406);

(statearr_22430_23878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (6))){
var inst_22366 = (state_22412[(14)]);
var inst_22370 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22366,change);
var state_22412__$1 = state_22412;
var statearr_22431_23879 = state_22412__$1;
(statearr_22431_23879[(2)] = inst_22370);

(statearr_22431_23879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (25))){
var state_22412__$1 = state_22412;
var statearr_22432_23880 = state_22412__$1;
(statearr_22432_23880[(2)] = null);

(statearr_22432_23880[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (17))){
var inst_22358 = (state_22412[(18)]);
var inst_22366 = (state_22412[(14)]);
var inst_22388 = (inst_22358.cljs$core$IFn$_invoke$arity$1 ? inst_22358.cljs$core$IFn$_invoke$arity$1(inst_22366) : inst_22358.call(null,inst_22366));
var inst_22389 = cljs.core.not(inst_22388);
var state_22412__$1 = state_22412;
var statearr_22433_23881 = state_22412__$1;
(statearr_22433_23881[(2)] = inst_22389);

(statearr_22433_23881[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (3))){
var inst_22410 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22412__$1,inst_22410);
} else {
if((state_val_22413 === (12))){
var state_22412__$1 = state_22412;
var statearr_22434_23882 = state_22412__$1;
(statearr_22434_23882[(2)] = null);

(statearr_22434_23882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (2))){
var inst_22355 = (state_22412[(12)]);
var inst_22352 = (state_22412[(11)]);
var inst_22355__$1 = cljs.core.__destructure_map(inst_22352);
var inst_22357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22355__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22355__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22355__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22412__$1 = (function (){var statearr_22435 = state_22412;
(statearr_22435[(15)] = inst_22357);

(statearr_22435[(12)] = inst_22355__$1);

(statearr_22435[(18)] = inst_22358);

return statearr_22435;
})();
return cljs.core.async.ioc_alts_BANG_(state_22412__$1,(4),inst_22359);
} else {
if((state_val_22413 === (23))){
var inst_22397 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
if(cljs.core.truth_(inst_22397)){
var statearr_22436_23883 = state_22412__$1;
(statearr_22436_23883[(1)] = (24));

} else {
var statearr_22437_23884 = state_22412__$1;
(statearr_22437_23884[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (19))){
var inst_22392 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22438_23885 = state_22412__$1;
(statearr_22438_23885[(2)] = inst_22392);

(statearr_22438_23885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (11))){
var inst_22366 = (state_22412[(14)]);
var inst_22376 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22366);
var state_22412__$1 = state_22412;
var statearr_22441_23886 = state_22412__$1;
(statearr_22441_23886[(2)] = inst_22376);

(statearr_22441_23886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (9))){
var inst_22357 = (state_22412[(15)]);
var inst_22366 = (state_22412[(14)]);
var inst_22383 = (state_22412[(19)]);
var inst_22383__$1 = (inst_22357.cljs$core$IFn$_invoke$arity$1 ? inst_22357.cljs$core$IFn$_invoke$arity$1(inst_22366) : inst_22357.call(null,inst_22366));
var state_22412__$1 = (function (){var statearr_22442 = state_22412;
(statearr_22442[(19)] = inst_22383__$1);

return statearr_22442;
})();
if(cljs.core.truth_(inst_22383__$1)){
var statearr_22443_23887 = state_22412__$1;
(statearr_22443_23887[(1)] = (14));

} else {
var statearr_22444_23888 = state_22412__$1;
(statearr_22444_23888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (5))){
var inst_22367 = (state_22412[(13)]);
var state_22412__$1 = state_22412;
var statearr_22445_23895 = state_22412__$1;
(statearr_22445_23895[(2)] = inst_22367);

(statearr_22445_23895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (14))){
var inst_22383 = (state_22412[(19)]);
var state_22412__$1 = state_22412;
var statearr_22446_23896 = state_22412__$1;
(statearr_22446_23896[(2)] = inst_22383);

(statearr_22446_23896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (26))){
var inst_22402 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22447_23897 = state_22412__$1;
(statearr_22447_23897[(2)] = inst_22402);

(statearr_22447_23897[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (16))){
var inst_22394 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
if(cljs.core.truth_(inst_22394)){
var statearr_22448_23898 = state_22412__$1;
(statearr_22448_23898[(1)] = (20));

} else {
var statearr_22449_23899 = state_22412__$1;
(statearr_22449_23899[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (10))){
var inst_22408 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22450_23900 = state_22412__$1;
(statearr_22450_23900[(2)] = inst_22408);

(statearr_22450_23900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (18))){
var inst_22386 = (state_22412[(16)]);
var state_22412__$1 = state_22412;
var statearr_22452_23901 = state_22412__$1;
(statearr_22452_23901[(2)] = inst_22386);

(statearr_22452_23901[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22413 === (8))){
var inst_22365 = (state_22412[(7)]);
var inst_22374 = (inst_22365 == null);
var state_22412__$1 = state_22412;
if(cljs.core.truth_(inst_22374)){
var statearr_22454_23902 = state_22412__$1;
(statearr_22454_23902[(1)] = (11));

} else {
var statearr_22455_23903 = state_22412__$1;
(statearr_22455_23903[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__20867__auto__ = null;
var cljs$core$async$mix_$_state_machine__20867__auto____0 = (function (){
var statearr_22456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22456[(0)] = cljs$core$async$mix_$_state_machine__20867__auto__);

(statearr_22456[(1)] = (1));

return statearr_22456;
});
var cljs$core$async$mix_$_state_machine__20867__auto____1 = (function (state_22412){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_22412);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e22457){var ex__20870__auto__ = e22457;
var statearr_22458_23908 = state_22412;
(statearr_22458_23908[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_22412[(4)]))){
var statearr_22459_23909 = state_22412;
(statearr_22459_23909[(1)] = cljs.core.first((state_22412[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23910 = state_22412;
state_22412 = G__23910;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20867__auto__ = function(state_22412){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20867__auto____1.call(this,state_22412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20867__auto____0;
cljs$core$async$mix_$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20867__auto____1;
return cljs$core$async$mix_$_state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_22460 = f__21048__auto__();
(statearr_22460[(6)] = c__21047__auto___23867);

return statearr_22460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_23915 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_23915(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23916 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_23916(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23917 = (function() {
var G__23918 = null;
var G__23918__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__23918__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__23918 = function(p,v){
switch(arguments.length){
case 1:
return G__23918__1.call(this,p);
case 2:
return G__23918__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23918.cljs$core$IFn$_invoke$arity$1 = G__23918__1;
G__23918.cljs$core$IFn$_invoke$arity$2 = G__23918__2;
return G__23918;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22473 = arguments.length;
switch (G__22473) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23917(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23917(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22501 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22502){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22502 = meta22502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22503,meta22502__$1){
var self__ = this;
var _22503__$1 = this;
return (new cljs.core.async.t_cljs$core$async22501(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22502__$1));
}));

(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22503){
var self__ = this;
var _22503__$1 = this;
return self__.meta22502;
}));

(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async22501.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async22501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22502","meta22502",1842581124,null)], null);
}));

(cljs.core.async.t_cljs$core$async22501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22501");

(cljs.core.async.t_cljs$core$async22501.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22501.
 */
cljs.core.async.__GT_t_cljs$core$async22501 = (function cljs$core$async$__GT_t_cljs$core$async22501(ch,topic_fn,buf_fn,mults,ensure_mult,meta22502){
return (new cljs.core.async.t_cljs$core$async22501(ch,topic_fn,buf_fn,mults,ensure_mult,meta22502));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22481 = arguments.length;
switch (G__22481) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__22479_SHARP_){
if(cljs.core.truth_((p1__22479_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22479_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22479_SHARP_.call(null,topic)))){
return p1__22479_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22479_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async22501(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__21047__auto___23921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_22593){
var state_val_22597 = (state_22593[(1)]);
if((state_val_22597 === (7))){
var inst_22588 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22600_23922 = state_22593__$1;
(statearr_22600_23922[(2)] = inst_22588);

(statearr_22600_23922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (20))){
var state_22593__$1 = state_22593;
var statearr_22601_23923 = state_22593__$1;
(statearr_22601_23923[(2)] = null);

(statearr_22601_23923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (1))){
var state_22593__$1 = state_22593;
var statearr_22603_23924 = state_22593__$1;
(statearr_22603_23924[(2)] = null);

(statearr_22603_23924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (24))){
var inst_22571 = (state_22593[(7)]);
var inst_22580 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22571);
var state_22593__$1 = state_22593;
var statearr_22605_23925 = state_22593__$1;
(statearr_22605_23925[(2)] = inst_22580);

(statearr_22605_23925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (4))){
var inst_22520 = (state_22593[(8)]);
var inst_22520__$1 = (state_22593[(2)]);
var inst_22521 = (inst_22520__$1 == null);
var state_22593__$1 = (function (){var statearr_22606 = state_22593;
(statearr_22606[(8)] = inst_22520__$1);

return statearr_22606;
})();
if(cljs.core.truth_(inst_22521)){
var statearr_22607_23926 = state_22593__$1;
(statearr_22607_23926[(1)] = (5));

} else {
var statearr_22608_23927 = state_22593__$1;
(statearr_22608_23927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (15))){
var inst_22565 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22609_23929 = state_22593__$1;
(statearr_22609_23929[(2)] = inst_22565);

(statearr_22609_23929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (21))){
var inst_22585 = (state_22593[(2)]);
var state_22593__$1 = (function (){var statearr_22610 = state_22593;
(statearr_22610[(9)] = inst_22585);

return statearr_22610;
})();
var statearr_22611_23930 = state_22593__$1;
(statearr_22611_23930[(2)] = null);

(statearr_22611_23930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (13))){
var inst_22547 = (state_22593[(10)]);
var inst_22549 = cljs.core.chunked_seq_QMARK_(inst_22547);
var state_22593__$1 = state_22593;
if(inst_22549){
var statearr_22612_23931 = state_22593__$1;
(statearr_22612_23931[(1)] = (16));

} else {
var statearr_22613_23932 = state_22593__$1;
(statearr_22613_23932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (22))){
var inst_22577 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
if(cljs.core.truth_(inst_22577)){
var statearr_22614_23937 = state_22593__$1;
(statearr_22614_23937[(1)] = (23));

} else {
var statearr_22616_23938 = state_22593__$1;
(statearr_22616_23938[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (6))){
var inst_22571 = (state_22593[(7)]);
var inst_22520 = (state_22593[(8)]);
var inst_22573 = (state_22593[(11)]);
var inst_22571__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22520) : topic_fn.call(null,inst_22520));
var inst_22572 = cljs.core.deref(mults);
var inst_22573__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22572,inst_22571__$1);
var state_22593__$1 = (function (){var statearr_22618 = state_22593;
(statearr_22618[(7)] = inst_22571__$1);

(statearr_22618[(11)] = inst_22573__$1);

return statearr_22618;
})();
if(cljs.core.truth_(inst_22573__$1)){
var statearr_22619_23939 = state_22593__$1;
(statearr_22619_23939[(1)] = (19));

} else {
var statearr_22620_23940 = state_22593__$1;
(statearr_22620_23940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (25))){
var inst_22582 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22621_23941 = state_22593__$1;
(statearr_22621_23941[(2)] = inst_22582);

(statearr_22621_23941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (17))){
var inst_22547 = (state_22593[(10)]);
var inst_22556 = cljs.core.first(inst_22547);
var inst_22557 = cljs.core.async.muxch_STAR_(inst_22556);
var inst_22558 = cljs.core.async.close_BANG_(inst_22557);
var inst_22559 = cljs.core.next(inst_22547);
var inst_22533 = inst_22559;
var inst_22534 = null;
var inst_22535 = (0);
var inst_22536 = (0);
var state_22593__$1 = (function (){var statearr_22623 = state_22593;
(statearr_22623[(12)] = inst_22534);

(statearr_22623[(13)] = inst_22558);

(statearr_22623[(14)] = inst_22536);

(statearr_22623[(15)] = inst_22535);

(statearr_22623[(16)] = inst_22533);

return statearr_22623;
})();
var statearr_22625_23942 = state_22593__$1;
(statearr_22625_23942[(2)] = null);

(statearr_22625_23942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (3))){
var inst_22590 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22593__$1,inst_22590);
} else {
if((state_val_22597 === (12))){
var inst_22567 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22629_23943 = state_22593__$1;
(statearr_22629_23943[(2)] = inst_22567);

(statearr_22629_23943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (2))){
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22593__$1,(4),ch);
} else {
if((state_val_22597 === (23))){
var state_22593__$1 = state_22593;
var statearr_22630_23944 = state_22593__$1;
(statearr_22630_23944[(2)] = null);

(statearr_22630_23944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (19))){
var inst_22520 = (state_22593[(8)]);
var inst_22573 = (state_22593[(11)]);
var inst_22575 = cljs.core.async.muxch_STAR_(inst_22573);
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22593__$1,(22),inst_22575,inst_22520);
} else {
if((state_val_22597 === (11))){
var inst_22547 = (state_22593[(10)]);
var inst_22533 = (state_22593[(16)]);
var inst_22547__$1 = cljs.core.seq(inst_22533);
var state_22593__$1 = (function (){var statearr_22631 = state_22593;
(statearr_22631[(10)] = inst_22547__$1);

return statearr_22631;
})();
if(inst_22547__$1){
var statearr_22632_23945 = state_22593__$1;
(statearr_22632_23945[(1)] = (13));

} else {
var statearr_22633_23946 = state_22593__$1;
(statearr_22633_23946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (9))){
var inst_22569 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22634_23947 = state_22593__$1;
(statearr_22634_23947[(2)] = inst_22569);

(statearr_22634_23947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (5))){
var inst_22530 = cljs.core.deref(mults);
var inst_22531 = cljs.core.vals(inst_22530);
var inst_22532 = cljs.core.seq(inst_22531);
var inst_22533 = inst_22532;
var inst_22534 = null;
var inst_22535 = (0);
var inst_22536 = (0);
var state_22593__$1 = (function (){var statearr_22635 = state_22593;
(statearr_22635[(12)] = inst_22534);

(statearr_22635[(14)] = inst_22536);

(statearr_22635[(15)] = inst_22535);

(statearr_22635[(16)] = inst_22533);

return statearr_22635;
})();
var statearr_22636_23949 = state_22593__$1;
(statearr_22636_23949[(2)] = null);

(statearr_22636_23949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (14))){
var state_22593__$1 = state_22593;
var statearr_22640_23951 = state_22593__$1;
(statearr_22640_23951[(2)] = null);

(statearr_22640_23951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (16))){
var inst_22547 = (state_22593[(10)]);
var inst_22551 = cljs.core.chunk_first(inst_22547);
var inst_22552 = cljs.core.chunk_rest(inst_22547);
var inst_22553 = cljs.core.count(inst_22551);
var inst_22533 = inst_22552;
var inst_22534 = inst_22551;
var inst_22535 = inst_22553;
var inst_22536 = (0);
var state_22593__$1 = (function (){var statearr_22641 = state_22593;
(statearr_22641[(12)] = inst_22534);

(statearr_22641[(14)] = inst_22536);

(statearr_22641[(15)] = inst_22535);

(statearr_22641[(16)] = inst_22533);

return statearr_22641;
})();
var statearr_22642_23955 = state_22593__$1;
(statearr_22642_23955[(2)] = null);

(statearr_22642_23955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (10))){
var inst_22534 = (state_22593[(12)]);
var inst_22536 = (state_22593[(14)]);
var inst_22535 = (state_22593[(15)]);
var inst_22533 = (state_22593[(16)]);
var inst_22541 = cljs.core._nth(inst_22534,inst_22536);
var inst_22542 = cljs.core.async.muxch_STAR_(inst_22541);
var inst_22543 = cljs.core.async.close_BANG_(inst_22542);
var inst_22544 = (inst_22536 + (1));
var tmp22637 = inst_22534;
var tmp22638 = inst_22535;
var tmp22639 = inst_22533;
var inst_22533__$1 = tmp22639;
var inst_22534__$1 = tmp22637;
var inst_22535__$1 = tmp22638;
var inst_22536__$1 = inst_22544;
var state_22593__$1 = (function (){var statearr_22643 = state_22593;
(statearr_22643[(12)] = inst_22534__$1);

(statearr_22643[(17)] = inst_22543);

(statearr_22643[(14)] = inst_22536__$1);

(statearr_22643[(15)] = inst_22535__$1);

(statearr_22643[(16)] = inst_22533__$1);

return statearr_22643;
})();
var statearr_22644_23958 = state_22593__$1;
(statearr_22644_23958[(2)] = null);

(statearr_22644_23958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (18))){
var inst_22562 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22645_23959 = state_22593__$1;
(statearr_22645_23959[(2)] = inst_22562);

(statearr_22645_23959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22597 === (8))){
var inst_22536 = (state_22593[(14)]);
var inst_22535 = (state_22593[(15)]);
var inst_22538 = (inst_22536 < inst_22535);
var inst_22539 = inst_22538;
var state_22593__$1 = state_22593;
if(cljs.core.truth_(inst_22539)){
var statearr_22650_23960 = state_22593__$1;
(statearr_22650_23960[(1)] = (10));

} else {
var statearr_22651_23961 = state_22593__$1;
(statearr_22651_23961[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_22653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22653[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_22653[(1)] = (1));

return statearr_22653;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_22593){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_22593);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e22655){var ex__20870__auto__ = e22655;
var statearr_22656_23968 = state_22593;
(statearr_22656_23968[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_22593[(4)]))){
var statearr_22658_23970 = state_22593;
(statearr_22658_23970[(1)] = cljs.core.first((state_22593[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23971 = state_22593;
state_22593 = G__23971;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_22593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_22593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_22659 = f__21048__auto__();
(statearr_22659[(6)] = c__21047__auto___23921);

return statearr_22659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22662 = arguments.length;
switch (G__22662) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22668 = arguments.length;
switch (G__22668) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22670 = arguments.length;
switch (G__22670) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__21047__auto___23978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_22723){
var state_val_22724 = (state_22723[(1)]);
if((state_val_22724 === (7))){
var state_22723__$1 = state_22723;
var statearr_22725_23979 = state_22723__$1;
(statearr_22725_23979[(2)] = null);

(statearr_22725_23979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (1))){
var state_22723__$1 = state_22723;
var statearr_22726_23980 = state_22723__$1;
(statearr_22726_23980[(2)] = null);

(statearr_22726_23980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (4))){
var inst_22682 = (state_22723[(7)]);
var inst_22681 = (state_22723[(8)]);
var inst_22684 = (inst_22682 < inst_22681);
var state_22723__$1 = state_22723;
if(cljs.core.truth_(inst_22684)){
var statearr_22730_23981 = state_22723__$1;
(statearr_22730_23981[(1)] = (6));

} else {
var statearr_22731_23982 = state_22723__$1;
(statearr_22731_23982[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (15))){
var inst_22707 = (state_22723[(9)]);
var inst_22713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22707);
var state_22723__$1 = state_22723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22723__$1,(17),out,inst_22713);
} else {
if((state_val_22724 === (13))){
var inst_22707 = (state_22723[(9)]);
var inst_22707__$1 = (state_22723[(2)]);
var inst_22708 = cljs.core.some(cljs.core.nil_QMARK_,inst_22707__$1);
var state_22723__$1 = (function (){var statearr_22732 = state_22723;
(statearr_22732[(9)] = inst_22707__$1);

return statearr_22732;
})();
if(cljs.core.truth_(inst_22708)){
var statearr_22733_23985 = state_22723__$1;
(statearr_22733_23985[(1)] = (14));

} else {
var statearr_22734_23986 = state_22723__$1;
(statearr_22734_23986[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (6))){
var state_22723__$1 = state_22723;
var statearr_22735_23987 = state_22723__$1;
(statearr_22735_23987[(2)] = null);

(statearr_22735_23987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (17))){
var inst_22715 = (state_22723[(2)]);
var state_22723__$1 = (function (){var statearr_22737 = state_22723;
(statearr_22737[(10)] = inst_22715);

return statearr_22737;
})();
var statearr_22738_23988 = state_22723__$1;
(statearr_22738_23988[(2)] = null);

(statearr_22738_23988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (3))){
var inst_22720 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22723__$1,inst_22720);
} else {
if((state_val_22724 === (12))){
var _ = (function (){var statearr_22739 = state_22723;
(statearr_22739[(4)] = cljs.core.rest((state_22723[(4)])));

return statearr_22739;
})();
var state_22723__$1 = state_22723;
var ex22736 = (state_22723__$1[(2)]);
var statearr_22740_23989 = state_22723__$1;
(statearr_22740_23989[(5)] = ex22736);


if((ex22736 instanceof Object)){
var statearr_22741_23994 = state_22723__$1;
(statearr_22741_23994[(1)] = (11));

(statearr_22741_23994[(5)] = null);

} else {
throw ex22736;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (2))){
var inst_22680 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22681 = cnt;
var inst_22682 = (0);
var state_22723__$1 = (function (){var statearr_22742 = state_22723;
(statearr_22742[(11)] = inst_22680);

(statearr_22742[(7)] = inst_22682);

(statearr_22742[(8)] = inst_22681);

return statearr_22742;
})();
var statearr_22743_23996 = state_22723__$1;
(statearr_22743_23996[(2)] = null);

(statearr_22743_23996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (11))){
var inst_22686 = (state_22723[(2)]);
var inst_22687 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22723__$1 = (function (){var statearr_22744 = state_22723;
(statearr_22744[(12)] = inst_22686);

return statearr_22744;
})();
var statearr_22745_24002 = state_22723__$1;
(statearr_22745_24002[(2)] = inst_22687);

(statearr_22745_24002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (9))){
var inst_22682 = (state_22723[(7)]);
var _ = (function (){var statearr_22746 = state_22723;
(statearr_22746[(4)] = cljs.core.cons((12),(state_22723[(4)])));

return statearr_22746;
})();
var inst_22693 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22682) : chs__$1.call(null,inst_22682));
var inst_22694 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22682) : done.call(null,inst_22682));
var inst_22695 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22693,inst_22694);
var ___$1 = (function (){var statearr_22747 = state_22723;
(statearr_22747[(4)] = cljs.core.rest((state_22723[(4)])));

return statearr_22747;
})();
var state_22723__$1 = state_22723;
var statearr_22748_24003 = state_22723__$1;
(statearr_22748_24003[(2)] = inst_22695);

(statearr_22748_24003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (5))){
var inst_22705 = (state_22723[(2)]);
var state_22723__$1 = (function (){var statearr_22749 = state_22723;
(statearr_22749[(13)] = inst_22705);

return statearr_22749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22723__$1,(13),dchan);
} else {
if((state_val_22724 === (14))){
var inst_22711 = cljs.core.async.close_BANG_(out);
var state_22723__$1 = state_22723;
var statearr_22750_24005 = state_22723__$1;
(statearr_22750_24005[(2)] = inst_22711);

(statearr_22750_24005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (16))){
var inst_22718 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22751_24006 = state_22723__$1;
(statearr_22751_24006[(2)] = inst_22718);

(statearr_22751_24006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (10))){
var inst_22682 = (state_22723[(7)]);
var inst_22698 = (state_22723[(2)]);
var inst_22699 = (inst_22682 + (1));
var inst_22682__$1 = inst_22699;
var state_22723__$1 = (function (){var statearr_22752 = state_22723;
(statearr_22752[(7)] = inst_22682__$1);

(statearr_22752[(14)] = inst_22698);

return statearr_22752;
})();
var statearr_22753_24011 = state_22723__$1;
(statearr_22753_24011[(2)] = null);

(statearr_22753_24011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (8))){
var inst_22703 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22754_24012 = state_22723__$1;
(statearr_22754_24012[(2)] = inst_22703);

(statearr_22754_24012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_22755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22755[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_22755[(1)] = (1));

return statearr_22755;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_22723){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_22723);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e22756){var ex__20870__auto__ = e22756;
var statearr_22757_24013 = state_22723;
(statearr_22757_24013[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_22723[(4)]))){
var statearr_22758_24014 = state_22723;
(statearr_22758_24014[(1)] = cljs.core.first((state_22723[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24019 = state_22723;
state_22723 = G__24019;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_22723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_22723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_22759 = f__21048__auto__();
(statearr_22759[(6)] = c__21047__auto___23978);

return statearr_22759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22763 = arguments.length;
switch (G__22763) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21047__auto___24024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_22798){
var state_val_22799 = (state_22798[(1)]);
if((state_val_22799 === (7))){
var inst_22775 = (state_22798[(7)]);
var inst_22774 = (state_22798[(8)]);
var inst_22774__$1 = (state_22798[(2)]);
var inst_22775__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22774__$1,(0),null);
var inst_22776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22774__$1,(1),null);
var inst_22777 = (inst_22775__$1 == null);
var state_22798__$1 = (function (){var statearr_22800 = state_22798;
(statearr_22800[(7)] = inst_22775__$1);

(statearr_22800[(8)] = inst_22774__$1);

(statearr_22800[(9)] = inst_22776);

return statearr_22800;
})();
if(cljs.core.truth_(inst_22777)){
var statearr_22801_24025 = state_22798__$1;
(statearr_22801_24025[(1)] = (8));

} else {
var statearr_22802_24026 = state_22798__$1;
(statearr_22802_24026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (1))){
var inst_22764 = cljs.core.vec(chs);
var inst_22765 = inst_22764;
var state_22798__$1 = (function (){var statearr_22807 = state_22798;
(statearr_22807[(10)] = inst_22765);

return statearr_22807;
})();
var statearr_22808_24027 = state_22798__$1;
(statearr_22808_24027[(2)] = null);

(statearr_22808_24027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (4))){
var inst_22765 = (state_22798[(10)]);
var state_22798__$1 = state_22798;
return cljs.core.async.ioc_alts_BANG_(state_22798__$1,(7),inst_22765);
} else {
if((state_val_22799 === (6))){
var inst_22794 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22809_24032 = state_22798__$1;
(statearr_22809_24032[(2)] = inst_22794);

(statearr_22809_24032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (3))){
var inst_22796 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22798__$1,inst_22796);
} else {
if((state_val_22799 === (2))){
var inst_22765 = (state_22798[(10)]);
var inst_22767 = cljs.core.count(inst_22765);
var inst_22768 = (inst_22767 > (0));
var state_22798__$1 = state_22798;
if(cljs.core.truth_(inst_22768)){
var statearr_22811_24033 = state_22798__$1;
(statearr_22811_24033[(1)] = (4));

} else {
var statearr_22812_24034 = state_22798__$1;
(statearr_22812_24034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (11))){
var inst_22765 = (state_22798[(10)]);
var inst_22787 = (state_22798[(2)]);
var tmp22810 = inst_22765;
var inst_22765__$1 = tmp22810;
var state_22798__$1 = (function (){var statearr_22813 = state_22798;
(statearr_22813[(11)] = inst_22787);

(statearr_22813[(10)] = inst_22765__$1);

return statearr_22813;
})();
var statearr_22814_24039 = state_22798__$1;
(statearr_22814_24039[(2)] = null);

(statearr_22814_24039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (9))){
var inst_22775 = (state_22798[(7)]);
var state_22798__$1 = state_22798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22798__$1,(11),out,inst_22775);
} else {
if((state_val_22799 === (5))){
var inst_22792 = cljs.core.async.close_BANG_(out);
var state_22798__$1 = state_22798;
var statearr_22815_24040 = state_22798__$1;
(statearr_22815_24040[(2)] = inst_22792);

(statearr_22815_24040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (10))){
var inst_22790 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22816_24041 = state_22798__$1;
(statearr_22816_24041[(2)] = inst_22790);

(statearr_22816_24041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (8))){
var inst_22775 = (state_22798[(7)]);
var inst_22774 = (state_22798[(8)]);
var inst_22776 = (state_22798[(9)]);
var inst_22765 = (state_22798[(10)]);
var inst_22782 = (function (){var cs = inst_22765;
var vec__22770 = inst_22774;
var v = inst_22775;
var c = inst_22776;
return (function (p1__22761_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22761_SHARP_);
});
})();
var inst_22783 = cljs.core.filterv(inst_22782,inst_22765);
var inst_22765__$1 = inst_22783;
var state_22798__$1 = (function (){var statearr_22817 = state_22798;
(statearr_22817[(10)] = inst_22765__$1);

return statearr_22817;
})();
var statearr_22818_24046 = state_22798__$1;
(statearr_22818_24046[(2)] = null);

(statearr_22818_24046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_22833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22833[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_22833[(1)] = (1));

return statearr_22833;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_22798){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_22798);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e22834){var ex__20870__auto__ = e22834;
var statearr_22835_24047 = state_22798;
(statearr_22835_24047[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_22798[(4)]))){
var statearr_22842_24048 = state_22798;
(statearr_22842_24048[(1)] = cljs.core.first((state_22798[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24050 = state_22798;
state_22798 = G__24050;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_22798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_22798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_22843 = f__21048__auto__();
(statearr_22843[(6)] = c__21047__auto___24024);

return statearr_22843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22865 = arguments.length;
switch (G__22865) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21047__auto___24068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_22891){
var state_val_22892 = (state_22891[(1)]);
if((state_val_22892 === (7))){
var inst_22873 = (state_22891[(7)]);
var inst_22873__$1 = (state_22891[(2)]);
var inst_22874 = (inst_22873__$1 == null);
var inst_22875 = cljs.core.not(inst_22874);
var state_22891__$1 = (function (){var statearr_22894 = state_22891;
(statearr_22894[(7)] = inst_22873__$1);

return statearr_22894;
})();
if(inst_22875){
var statearr_22895_24073 = state_22891__$1;
(statearr_22895_24073[(1)] = (8));

} else {
var statearr_22897_24077 = state_22891__$1;
(statearr_22897_24077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (1))){
var inst_22868 = (0);
var state_22891__$1 = (function (){var statearr_22899 = state_22891;
(statearr_22899[(8)] = inst_22868);

return statearr_22899;
})();
var statearr_22900_24078 = state_22891__$1;
(statearr_22900_24078[(2)] = null);

(statearr_22900_24078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (4))){
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22891__$1,(7),ch);
} else {
if((state_val_22892 === (6))){
var inst_22886 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22904_24079 = state_22891__$1;
(statearr_22904_24079[(2)] = inst_22886);

(statearr_22904_24079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (3))){
var inst_22888 = (state_22891[(2)]);
var inst_22889 = cljs.core.async.close_BANG_(out);
var state_22891__$1 = (function (){var statearr_22905 = state_22891;
(statearr_22905[(9)] = inst_22888);

return statearr_22905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22891__$1,inst_22889);
} else {
if((state_val_22892 === (2))){
var inst_22868 = (state_22891[(8)]);
var inst_22870 = (inst_22868 < n);
var state_22891__$1 = state_22891;
if(cljs.core.truth_(inst_22870)){
var statearr_22906_24080 = state_22891__$1;
(statearr_22906_24080[(1)] = (4));

} else {
var statearr_22907_24081 = state_22891__$1;
(statearr_22907_24081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (11))){
var inst_22868 = (state_22891[(8)]);
var inst_22878 = (state_22891[(2)]);
var inst_22879 = (inst_22868 + (1));
var inst_22868__$1 = inst_22879;
var state_22891__$1 = (function (){var statearr_22908 = state_22891;
(statearr_22908[(10)] = inst_22878);

(statearr_22908[(8)] = inst_22868__$1);

return statearr_22908;
})();
var statearr_22909_24093 = state_22891__$1;
(statearr_22909_24093[(2)] = null);

(statearr_22909_24093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (9))){
var state_22891__$1 = state_22891;
var statearr_22910_24097 = state_22891__$1;
(statearr_22910_24097[(2)] = null);

(statearr_22910_24097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (5))){
var state_22891__$1 = state_22891;
var statearr_22911_24098 = state_22891__$1;
(statearr_22911_24098[(2)] = null);

(statearr_22911_24098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (10))){
var inst_22883 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22912_24099 = state_22891__$1;
(statearr_22912_24099[(2)] = inst_22883);

(statearr_22912_24099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (8))){
var inst_22873 = (state_22891[(7)]);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22891__$1,(11),out,inst_22873);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_22913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22913[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_22913[(1)] = (1));

return statearr_22913;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_22891){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_22891);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e22914){var ex__20870__auto__ = e22914;
var statearr_22915_24128 = state_22891;
(statearr_22915_24128[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_22891[(4)]))){
var statearr_22916_24129 = state_22891;
(statearr_22916_24129[(1)] = cljs.core.first((state_22891[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24130 = state_22891;
state_22891 = G__24130;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_22891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_22891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_22917 = f__21048__auto__();
(statearr_22917[(6)] = c__21047__auto___24068);

return statearr_22917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22922 = (function (f,ch,meta22920,_,fn1,meta22923){
this.f = f;
this.ch = ch;
this.meta22920 = meta22920;
this._ = _;
this.fn1 = fn1;
this.meta22923 = meta22923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22924,meta22923__$1){
var self__ = this;
var _22924__$1 = this;
return (new cljs.core.async.t_cljs$core$async22922(self__.f,self__.ch,self__.meta22920,self__._,self__.fn1,meta22923__$1));
}));

(cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22924){
var self__ = this;
var _22924__$1 = this;
return self__.meta22923;
}));

(cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__22918_SHARP_){
var G__22925 = (((p1__22918_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22918_SHARP_) : self__.f.call(null,p1__22918_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22925) : f1.call(null,G__22925));
});
}));

(cljs.core.async.t_cljs$core$async22922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22920","meta22920",830963358,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22919","cljs.core.async/t_cljs$core$async22919",522615521,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22923","meta22923",-678502684,null)], null);
}));

(cljs.core.async.t_cljs$core$async22922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22922");

(cljs.core.async.t_cljs$core$async22922.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22922.
 */
cljs.core.async.__GT_t_cljs$core$async22922 = (function cljs$core$async$__GT_t_cljs$core$async22922(f,ch,meta22920,_,fn1,meta22923){
return (new cljs.core.async.t_cljs$core$async22922(f,ch,meta22920,_,fn1,meta22923));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22919 = (function (f,ch,meta22920){
this.f = f;
this.ch = ch;
this.meta22920 = meta22920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22921,meta22920__$1){
var self__ = this;
var _22921__$1 = this;
return (new cljs.core.async.t_cljs$core$async22919(self__.f,self__.ch,meta22920__$1));
}));

(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22921){
var self__ = this;
var _22921__$1 = this;
return self__.meta22920;
}));

(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async22922(self__.f,self__.ch,self__.meta22920,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22934 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22934) : self__.f.call(null,G__22934));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async22919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22920","meta22920",830963358,null)], null);
}));

(cljs.core.async.t_cljs$core$async22919.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22919");

(cljs.core.async.t_cljs$core$async22919.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22919");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22919.
 */
cljs.core.async.__GT_t_cljs$core$async22919 = (function cljs$core$async$__GT_t_cljs$core$async22919(f,ch,meta22920){
return (new cljs.core.async.t_cljs$core$async22919(f,ch,meta22920));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async22919(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22938 = (function (f,ch,meta22939){
this.f = f;
this.ch = ch;
this.meta22939 = meta22939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22940,meta22939__$1){
var self__ = this;
var _22940__$1 = this;
return (new cljs.core.async.t_cljs$core$async22938(self__.f,self__.ch,meta22939__$1));
}));

(cljs.core.async.t_cljs$core$async22938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22940){
var self__ = this;
var _22940__$1 = this;
return self__.meta22939;
}));

(cljs.core.async.t_cljs$core$async22938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async22938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22939","meta22939",-371681754,null)], null);
}));

(cljs.core.async.t_cljs$core$async22938.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22938");

(cljs.core.async.t_cljs$core$async22938.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22938");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22938.
 */
cljs.core.async.__GT_t_cljs$core$async22938 = (function cljs$core$async$__GT_t_cljs$core$async22938(f,ch,meta22939){
return (new cljs.core.async.t_cljs$core$async22938(f,ch,meta22939));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async22938(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22941 = (function (p,ch,meta22942){
this.p = p;
this.ch = ch;
this.meta22942 = meta22942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22943,meta22942__$1){
var self__ = this;
var _22943__$1 = this;
return (new cljs.core.async.t_cljs$core$async22941(self__.p,self__.ch,meta22942__$1));
}));

(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22943){
var self__ = this;
var _22943__$1 = this;
return self__.meta22942;
}));

(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async22941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22942","meta22942",611998906,null)], null);
}));

(cljs.core.async.t_cljs$core$async22941.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22941");

(cljs.core.async.t_cljs$core$async22941.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22941");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22941.
 */
cljs.core.async.__GT_t_cljs$core$async22941 = (function cljs$core$async$__GT_t_cljs$core$async22941(p,ch,meta22942){
return (new cljs.core.async.t_cljs$core$async22941(p,ch,meta22942));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async22941(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22953 = arguments.length;
switch (G__22953) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21047__auto___24189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_22974){
var state_val_22975 = (state_22974[(1)]);
if((state_val_22975 === (7))){
var inst_22970 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22976_24190 = state_22974__$1;
(statearr_22976_24190[(2)] = inst_22970);

(statearr_22976_24190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (1))){
var state_22974__$1 = state_22974;
var statearr_22977_24192 = state_22974__$1;
(statearr_22977_24192[(2)] = null);

(statearr_22977_24192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (4))){
var inst_22956 = (state_22974[(7)]);
var inst_22956__$1 = (state_22974[(2)]);
var inst_22957 = (inst_22956__$1 == null);
var state_22974__$1 = (function (){var statearr_22978 = state_22974;
(statearr_22978[(7)] = inst_22956__$1);

return statearr_22978;
})();
if(cljs.core.truth_(inst_22957)){
var statearr_22979_24193 = state_22974__$1;
(statearr_22979_24193[(1)] = (5));

} else {
var statearr_22980_24194 = state_22974__$1;
(statearr_22980_24194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (6))){
var inst_22956 = (state_22974[(7)]);
var inst_22961 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22956) : p.call(null,inst_22956));
var state_22974__$1 = state_22974;
if(cljs.core.truth_(inst_22961)){
var statearr_22981_24195 = state_22974__$1;
(statearr_22981_24195[(1)] = (8));

} else {
var statearr_22982_24197 = state_22974__$1;
(statearr_22982_24197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (3))){
var inst_22972 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22974__$1,inst_22972);
} else {
if((state_val_22975 === (2))){
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22974__$1,(4),ch);
} else {
if((state_val_22975 === (11))){
var inst_22964 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22983_24198 = state_22974__$1;
(statearr_22983_24198[(2)] = inst_22964);

(statearr_22983_24198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (9))){
var state_22974__$1 = state_22974;
var statearr_22987_24201 = state_22974__$1;
(statearr_22987_24201[(2)] = null);

(statearr_22987_24201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (5))){
var inst_22959 = cljs.core.async.close_BANG_(out);
var state_22974__$1 = state_22974;
var statearr_22988_24202 = state_22974__$1;
(statearr_22988_24202[(2)] = inst_22959);

(statearr_22988_24202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (10))){
var inst_22967 = (state_22974[(2)]);
var state_22974__$1 = (function (){var statearr_22989 = state_22974;
(statearr_22989[(8)] = inst_22967);

return statearr_22989;
})();
var statearr_22990_24203 = state_22974__$1;
(statearr_22990_24203[(2)] = null);

(statearr_22990_24203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (8))){
var inst_22956 = (state_22974[(7)]);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22974__$1,(11),out,inst_22956);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_22991 = [null,null,null,null,null,null,null,null,null];
(statearr_22991[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_22991[(1)] = (1));

return statearr_22991;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_22974){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_22974);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e22992){var ex__20870__auto__ = e22992;
var statearr_22993_24208 = state_22974;
(statearr_22993_24208[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_22974[(4)]))){
var statearr_22994_24212 = state_22974;
(statearr_22994_24212[(1)] = cljs.core.first((state_22974[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24214 = state_22974;
state_22974 = G__24214;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_22974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_22974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_23005 = f__21048__auto__();
(statearr_23005[(6)] = c__21047__auto___24189);

return statearr_23005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23010 = arguments.length;
switch (G__23010) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21047__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_23099){
var state_val_23100 = (state_23099[(1)]);
if((state_val_23100 === (7))){
var inst_23095 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23103_24221 = state_23099__$1;
(statearr_23103_24221[(2)] = inst_23095);

(statearr_23103_24221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (20))){
var inst_23054 = (state_23099[(7)]);
var inst_23072 = (state_23099[(2)]);
var inst_23073 = cljs.core.next(inst_23054);
var inst_23034 = inst_23073;
var inst_23035 = null;
var inst_23036 = (0);
var inst_23037 = (0);
var state_23099__$1 = (function (){var statearr_23104 = state_23099;
(statearr_23104[(8)] = inst_23072);

(statearr_23104[(9)] = inst_23034);

(statearr_23104[(10)] = inst_23035);

(statearr_23104[(11)] = inst_23037);

(statearr_23104[(12)] = inst_23036);

return statearr_23104;
})();
var statearr_23105_24222 = state_23099__$1;
(statearr_23105_24222[(2)] = null);

(statearr_23105_24222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (1))){
var state_23099__$1 = state_23099;
var statearr_23106_24224 = state_23099__$1;
(statearr_23106_24224[(2)] = null);

(statearr_23106_24224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (4))){
var inst_23023 = (state_23099[(13)]);
var inst_23023__$1 = (state_23099[(2)]);
var inst_23024 = (inst_23023__$1 == null);
var state_23099__$1 = (function (){var statearr_23107 = state_23099;
(statearr_23107[(13)] = inst_23023__$1);

return statearr_23107;
})();
if(cljs.core.truth_(inst_23024)){
var statearr_23108_24228 = state_23099__$1;
(statearr_23108_24228[(1)] = (5));

} else {
var statearr_23109_24229 = state_23099__$1;
(statearr_23109_24229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (15))){
var state_23099__$1 = state_23099;
var statearr_23113_24231 = state_23099__$1;
(statearr_23113_24231[(2)] = null);

(statearr_23113_24231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (21))){
var state_23099__$1 = state_23099;
var statearr_23114_24232 = state_23099__$1;
(statearr_23114_24232[(2)] = null);

(statearr_23114_24232[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (13))){
var inst_23034 = (state_23099[(9)]);
var inst_23035 = (state_23099[(10)]);
var inst_23037 = (state_23099[(11)]);
var inst_23036 = (state_23099[(12)]);
var inst_23047 = (state_23099[(2)]);
var inst_23048 = (inst_23037 + (1));
var tmp23110 = inst_23034;
var tmp23111 = inst_23035;
var tmp23112 = inst_23036;
var inst_23034__$1 = tmp23110;
var inst_23035__$1 = tmp23111;
var inst_23036__$1 = tmp23112;
var inst_23037__$1 = inst_23048;
var state_23099__$1 = (function (){var statearr_23115 = state_23099;
(statearr_23115[(14)] = inst_23047);

(statearr_23115[(9)] = inst_23034__$1);

(statearr_23115[(10)] = inst_23035__$1);

(statearr_23115[(11)] = inst_23037__$1);

(statearr_23115[(12)] = inst_23036__$1);

return statearr_23115;
})();
var statearr_23116_24234 = state_23099__$1;
(statearr_23116_24234[(2)] = null);

(statearr_23116_24234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (22))){
var state_23099__$1 = state_23099;
var statearr_23117_24235 = state_23099__$1;
(statearr_23117_24235[(2)] = null);

(statearr_23117_24235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (6))){
var inst_23023 = (state_23099[(13)]);
var inst_23032 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23023) : f.call(null,inst_23023));
var inst_23033 = cljs.core.seq(inst_23032);
var inst_23034 = inst_23033;
var inst_23035 = null;
var inst_23036 = (0);
var inst_23037 = (0);
var state_23099__$1 = (function (){var statearr_23118 = state_23099;
(statearr_23118[(9)] = inst_23034);

(statearr_23118[(10)] = inst_23035);

(statearr_23118[(11)] = inst_23037);

(statearr_23118[(12)] = inst_23036);

return statearr_23118;
})();
var statearr_23119_24240 = state_23099__$1;
(statearr_23119_24240[(2)] = null);

(statearr_23119_24240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (17))){
var inst_23054 = (state_23099[(7)]);
var inst_23062 = cljs.core.chunk_first(inst_23054);
var inst_23063 = cljs.core.chunk_rest(inst_23054);
var inst_23064 = cljs.core.count(inst_23062);
var inst_23034 = inst_23063;
var inst_23035 = inst_23062;
var inst_23036 = inst_23064;
var inst_23037 = (0);
var state_23099__$1 = (function (){var statearr_23120 = state_23099;
(statearr_23120[(9)] = inst_23034);

(statearr_23120[(10)] = inst_23035);

(statearr_23120[(11)] = inst_23037);

(statearr_23120[(12)] = inst_23036);

return statearr_23120;
})();
var statearr_23121_24241 = state_23099__$1;
(statearr_23121_24241[(2)] = null);

(statearr_23121_24241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (3))){
var inst_23097 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23099__$1,inst_23097);
} else {
if((state_val_23100 === (12))){
var inst_23081 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23122_24248 = state_23099__$1;
(statearr_23122_24248[(2)] = inst_23081);

(statearr_23122_24248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (2))){
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23099__$1,(4),in$);
} else {
if((state_val_23100 === (23))){
var inst_23093 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23123_24251 = state_23099__$1;
(statearr_23123_24251[(2)] = inst_23093);

(statearr_23123_24251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (19))){
var inst_23076 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23124_24256 = state_23099__$1;
(statearr_23124_24256[(2)] = inst_23076);

(statearr_23124_24256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (11))){
var inst_23054 = (state_23099[(7)]);
var inst_23034 = (state_23099[(9)]);
var inst_23054__$1 = cljs.core.seq(inst_23034);
var state_23099__$1 = (function (){var statearr_23125 = state_23099;
(statearr_23125[(7)] = inst_23054__$1);

return statearr_23125;
})();
if(inst_23054__$1){
var statearr_23126_24257 = state_23099__$1;
(statearr_23126_24257[(1)] = (14));

} else {
var statearr_23127_24258 = state_23099__$1;
(statearr_23127_24258[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (9))){
var inst_23083 = (state_23099[(2)]);
var inst_23088 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23099__$1 = (function (){var statearr_23128 = state_23099;
(statearr_23128[(15)] = inst_23083);

return statearr_23128;
})();
if(cljs.core.truth_(inst_23088)){
var statearr_23129_24259 = state_23099__$1;
(statearr_23129_24259[(1)] = (21));

} else {
var statearr_23130_24260 = state_23099__$1;
(statearr_23130_24260[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (5))){
var inst_23026 = cljs.core.async.close_BANG_(out);
var state_23099__$1 = state_23099;
var statearr_23131_24261 = state_23099__$1;
(statearr_23131_24261[(2)] = inst_23026);

(statearr_23131_24261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (14))){
var inst_23054 = (state_23099[(7)]);
var inst_23060 = cljs.core.chunked_seq_QMARK_(inst_23054);
var state_23099__$1 = state_23099;
if(inst_23060){
var statearr_23132_24263 = state_23099__$1;
(statearr_23132_24263[(1)] = (17));

} else {
var statearr_23133_24264 = state_23099__$1;
(statearr_23133_24264[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (16))){
var inst_23079 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23136_24269 = state_23099__$1;
(statearr_23136_24269[(2)] = inst_23079);

(statearr_23136_24269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (10))){
var inst_23035 = (state_23099[(10)]);
var inst_23037 = (state_23099[(11)]);
var inst_23042 = cljs.core._nth(inst_23035,inst_23037);
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23099__$1,(13),out,inst_23042);
} else {
if((state_val_23100 === (18))){
var inst_23054 = (state_23099[(7)]);
var inst_23070 = cljs.core.first(inst_23054);
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23099__$1,(20),out,inst_23070);
} else {
if((state_val_23100 === (8))){
var inst_23037 = (state_23099[(11)]);
var inst_23036 = (state_23099[(12)]);
var inst_23039 = (inst_23037 < inst_23036);
var inst_23040 = inst_23039;
var state_23099__$1 = state_23099;
if(cljs.core.truth_(inst_23040)){
var statearr_23137_24274 = state_23099__$1;
(statearr_23137_24274[(1)] = (10));

} else {
var statearr_23138_24275 = state_23099__$1;
(statearr_23138_24275[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20867__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20867__auto____0 = (function (){
var statearr_23144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23144[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20867__auto__);

(statearr_23144[(1)] = (1));

return statearr_23144;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20867__auto____1 = (function (state_23099){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_23099);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e23151){var ex__20870__auto__ = e23151;
var statearr_23152_24290 = state_23099;
(statearr_23152_24290[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_23099[(4)]))){
var statearr_23153_24291 = state_23099;
(statearr_23153_24291[(1)] = cljs.core.first((state_23099[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24297 = state_23099;
state_23099 = G__24297;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20867__auto__ = function(state_23099){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20867__auto____1.call(this,state_23099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20867__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20867__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_23154 = f__21048__auto__();
(statearr_23154[(6)] = c__21047__auto__);

return statearr_23154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));

return c__21047__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23158 = arguments.length;
switch (G__23158) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23160 = arguments.length;
switch (G__23160) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23162 = arguments.length;
switch (G__23162) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21047__auto___24316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_23188){
var state_val_23189 = (state_23188[(1)]);
if((state_val_23189 === (7))){
var inst_23183 = (state_23188[(2)]);
var state_23188__$1 = state_23188;
var statearr_23191_24317 = state_23188__$1;
(statearr_23191_24317[(2)] = inst_23183);

(statearr_23191_24317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23189 === (1))){
var inst_23163 = null;
var state_23188__$1 = (function (){var statearr_23192 = state_23188;
(statearr_23192[(7)] = inst_23163);

return statearr_23192;
})();
var statearr_23193_24318 = state_23188__$1;
(statearr_23193_24318[(2)] = null);

(statearr_23193_24318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23189 === (4))){
var inst_23168 = (state_23188[(8)]);
var inst_23168__$1 = (state_23188[(2)]);
var inst_23169 = (inst_23168__$1 == null);
var inst_23170 = cljs.core.not(inst_23169);
var state_23188__$1 = (function (){var statearr_23194 = state_23188;
(statearr_23194[(8)] = inst_23168__$1);

return statearr_23194;
})();
if(inst_23170){
var statearr_23195_24323 = state_23188__$1;
(statearr_23195_24323[(1)] = (5));

} else {
var statearr_23196_24324 = state_23188__$1;
(statearr_23196_24324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23189 === (6))){
var state_23188__$1 = state_23188;
var statearr_23197_24334 = state_23188__$1;
(statearr_23197_24334[(2)] = null);

(statearr_23197_24334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23189 === (3))){
var inst_23185 = (state_23188[(2)]);
var inst_23186 = cljs.core.async.close_BANG_(out);
var state_23188__$1 = (function (){var statearr_23207 = state_23188;
(statearr_23207[(9)] = inst_23185);

return statearr_23207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23188__$1,inst_23186);
} else {
if((state_val_23189 === (2))){
var state_23188__$1 = state_23188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23188__$1,(4),ch);
} else {
if((state_val_23189 === (11))){
var inst_23168 = (state_23188[(8)]);
var inst_23177 = (state_23188[(2)]);
var inst_23163 = inst_23168;
var state_23188__$1 = (function (){var statearr_23208 = state_23188;
(statearr_23208[(10)] = inst_23177);

(statearr_23208[(7)] = inst_23163);

return statearr_23208;
})();
var statearr_23209_24349 = state_23188__$1;
(statearr_23209_24349[(2)] = null);

(statearr_23209_24349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23189 === (9))){
var inst_23168 = (state_23188[(8)]);
var state_23188__$1 = state_23188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23188__$1,(11),out,inst_23168);
} else {
if((state_val_23189 === (5))){
var inst_23168 = (state_23188[(8)]);
var inst_23163 = (state_23188[(7)]);
var inst_23172 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23168,inst_23163);
var state_23188__$1 = state_23188;
if(inst_23172){
var statearr_23212_24350 = state_23188__$1;
(statearr_23212_24350[(1)] = (8));

} else {
var statearr_23213_24351 = state_23188__$1;
(statearr_23213_24351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23189 === (10))){
var inst_23180 = (state_23188[(2)]);
var state_23188__$1 = state_23188;
var statearr_23214_24356 = state_23188__$1;
(statearr_23214_24356[(2)] = inst_23180);

(statearr_23214_24356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23189 === (8))){
var inst_23163 = (state_23188[(7)]);
var tmp23210 = inst_23163;
var inst_23163__$1 = tmp23210;
var state_23188__$1 = (function (){var statearr_23215 = state_23188;
(statearr_23215[(7)] = inst_23163__$1);

return statearr_23215;
})();
var statearr_23216_24363 = state_23188__$1;
(statearr_23216_24363[(2)] = null);

(statearr_23216_24363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_23217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23217[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_23217[(1)] = (1));

return statearr_23217;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_23188){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_23188);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e23218){var ex__20870__auto__ = e23218;
var statearr_23219_24381 = state_23188;
(statearr_23219_24381[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_23188[(4)]))){
var statearr_23220_24384 = state_23188;
(statearr_23220_24384[(1)] = cljs.core.first((state_23188[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24391 = state_23188;
state_23188 = G__24391;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_23188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_23188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_23221 = f__21048__auto__();
(statearr_23221[(6)] = c__21047__auto___24316);

return statearr_23221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23223 = arguments.length;
switch (G__23223) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21047__auto___24404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_23263){
var state_val_23264 = (state_23263[(1)]);
if((state_val_23264 === (7))){
var inst_23259 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
var statearr_23265_24407 = state_23263__$1;
(statearr_23265_24407[(2)] = inst_23259);

(statearr_23265_24407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (1))){
var inst_23224 = (new Array(n));
var inst_23225 = inst_23224;
var inst_23226 = (0);
var state_23263__$1 = (function (){var statearr_23266 = state_23263;
(statearr_23266[(7)] = inst_23226);

(statearr_23266[(8)] = inst_23225);

return statearr_23266;
})();
var statearr_23268_24412 = state_23263__$1;
(statearr_23268_24412[(2)] = null);

(statearr_23268_24412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (4))){
var inst_23229 = (state_23263[(9)]);
var inst_23229__$1 = (state_23263[(2)]);
var inst_23230 = (inst_23229__$1 == null);
var inst_23231 = cljs.core.not(inst_23230);
var state_23263__$1 = (function (){var statearr_23270 = state_23263;
(statearr_23270[(9)] = inst_23229__$1);

return statearr_23270;
})();
if(inst_23231){
var statearr_23271_24413 = state_23263__$1;
(statearr_23271_24413[(1)] = (5));

} else {
var statearr_23272_24414 = state_23263__$1;
(statearr_23272_24414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (15))){
var inst_23251 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
var statearr_23273_24416 = state_23263__$1;
(statearr_23273_24416[(2)] = inst_23251);

(statearr_23273_24416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (13))){
var state_23263__$1 = state_23263;
var statearr_23274_24419 = state_23263__$1;
(statearr_23274_24419[(2)] = null);

(statearr_23274_24419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (6))){
var inst_23226 = (state_23263[(7)]);
var inst_23247 = (inst_23226 > (0));
var state_23263__$1 = state_23263;
if(cljs.core.truth_(inst_23247)){
var statearr_23275_24420 = state_23263__$1;
(statearr_23275_24420[(1)] = (12));

} else {
var statearr_23276_24424 = state_23263__$1;
(statearr_23276_24424[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (3))){
var inst_23261 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23263__$1,inst_23261);
} else {
if((state_val_23264 === (12))){
var inst_23225 = (state_23263[(8)]);
var inst_23249 = cljs.core.vec(inst_23225);
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23263__$1,(15),out,inst_23249);
} else {
if((state_val_23264 === (2))){
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23263__$1,(4),ch);
} else {
if((state_val_23264 === (11))){
var inst_23241 = (state_23263[(2)]);
var inst_23242 = (new Array(n));
var inst_23225 = inst_23242;
var inst_23226 = (0);
var state_23263__$1 = (function (){var statearr_23277 = state_23263;
(statearr_23277[(7)] = inst_23226);

(statearr_23277[(8)] = inst_23225);

(statearr_23277[(10)] = inst_23241);

return statearr_23277;
})();
var statearr_23278_24430 = state_23263__$1;
(statearr_23278_24430[(2)] = null);

(statearr_23278_24430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (9))){
var inst_23225 = (state_23263[(8)]);
var inst_23239 = cljs.core.vec(inst_23225);
var state_23263__$1 = state_23263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23263__$1,(11),out,inst_23239);
} else {
if((state_val_23264 === (5))){
var inst_23226 = (state_23263[(7)]);
var inst_23225 = (state_23263[(8)]);
var inst_23234 = (state_23263[(11)]);
var inst_23229 = (state_23263[(9)]);
var inst_23233 = (inst_23225[inst_23226] = inst_23229);
var inst_23234__$1 = (inst_23226 + (1));
var inst_23235 = (inst_23234__$1 < n);
var state_23263__$1 = (function (){var statearr_23279 = state_23263;
(statearr_23279[(11)] = inst_23234__$1);

(statearr_23279[(12)] = inst_23233);

return statearr_23279;
})();
if(cljs.core.truth_(inst_23235)){
var statearr_23280_24431 = state_23263__$1;
(statearr_23280_24431[(1)] = (8));

} else {
var statearr_23281_24432 = state_23263__$1;
(statearr_23281_24432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (14))){
var inst_23254 = (state_23263[(2)]);
var inst_23256 = cljs.core.async.close_BANG_(out);
var state_23263__$1 = (function (){var statearr_23283 = state_23263;
(statearr_23283[(13)] = inst_23254);

return statearr_23283;
})();
var statearr_23284_24433 = state_23263__$1;
(statearr_23284_24433[(2)] = inst_23256);

(statearr_23284_24433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (10))){
var inst_23245 = (state_23263[(2)]);
var state_23263__$1 = state_23263;
var statearr_23292_24434 = state_23263__$1;
(statearr_23292_24434[(2)] = inst_23245);

(statearr_23292_24434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23264 === (8))){
var inst_23225 = (state_23263[(8)]);
var inst_23234 = (state_23263[(11)]);
var tmp23282 = inst_23225;
var inst_23225__$1 = tmp23282;
var inst_23226 = inst_23234;
var state_23263__$1 = (function (){var statearr_23293 = state_23263;
(statearr_23293[(7)] = inst_23226);

(statearr_23293[(8)] = inst_23225__$1);

return statearr_23293;
})();
var statearr_23294_24435 = state_23263__$1;
(statearr_23294_24435[(2)] = null);

(statearr_23294_24435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_23296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23296[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_23296[(1)] = (1));

return statearr_23296;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_23263){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_23263);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e23297){var ex__20870__auto__ = e23297;
var statearr_23298_24436 = state_23263;
(statearr_23298_24436[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_23263[(4)]))){
var statearr_23302_24439 = state_23263;
(statearr_23302_24439[(1)] = cljs.core.first((state_23263[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24440 = state_23263;
state_23263 = G__24440;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_23263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_23263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_23309 = f__21048__auto__();
(statearr_23309[(6)] = c__21047__auto___24404);

return statearr_23309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23315 = arguments.length;
switch (G__23315) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21047__auto___24445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21048__auto__ = (function (){var switch__20866__auto__ = (function (state_23370){
var state_val_23371 = (state_23370[(1)]);
if((state_val_23371 === (7))){
var inst_23366 = (state_23370[(2)]);
var state_23370__$1 = state_23370;
var statearr_23377_24446 = state_23370__$1;
(statearr_23377_24446[(2)] = inst_23366);

(statearr_23377_24446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (1))){
var inst_23324 = [];
var inst_23325 = inst_23324;
var inst_23326 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23370__$1 = (function (){var statearr_23378 = state_23370;
(statearr_23378[(7)] = inst_23326);

(statearr_23378[(8)] = inst_23325);

return statearr_23378;
})();
var statearr_23379_24447 = state_23370__$1;
(statearr_23379_24447[(2)] = null);

(statearr_23379_24447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (4))){
var inst_23329 = (state_23370[(9)]);
var inst_23329__$1 = (state_23370[(2)]);
var inst_23330 = (inst_23329__$1 == null);
var inst_23331 = cljs.core.not(inst_23330);
var state_23370__$1 = (function (){var statearr_23380 = state_23370;
(statearr_23380[(9)] = inst_23329__$1);

return statearr_23380;
})();
if(inst_23331){
var statearr_23381_24449 = state_23370__$1;
(statearr_23381_24449[(1)] = (5));

} else {
var statearr_23383_24450 = state_23370__$1;
(statearr_23383_24450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (15))){
var inst_23325 = (state_23370[(8)]);
var inst_23358 = cljs.core.vec(inst_23325);
var state_23370__$1 = state_23370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23370__$1,(18),out,inst_23358);
} else {
if((state_val_23371 === (13))){
var inst_23351 = (state_23370[(2)]);
var state_23370__$1 = state_23370;
var statearr_23384_24455 = state_23370__$1;
(statearr_23384_24455[(2)] = inst_23351);

(statearr_23384_24455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (6))){
var inst_23325 = (state_23370[(8)]);
var inst_23353 = inst_23325.length;
var inst_23354 = (inst_23353 > (0));
var state_23370__$1 = state_23370;
if(cljs.core.truth_(inst_23354)){
var statearr_23388_24456 = state_23370__$1;
(statearr_23388_24456[(1)] = (15));

} else {
var statearr_23389_24457 = state_23370__$1;
(statearr_23389_24457[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (17))){
var inst_23363 = (state_23370[(2)]);
var inst_23364 = cljs.core.async.close_BANG_(out);
var state_23370__$1 = (function (){var statearr_23391 = state_23370;
(statearr_23391[(10)] = inst_23363);

return statearr_23391;
})();
var statearr_23392_24460 = state_23370__$1;
(statearr_23392_24460[(2)] = inst_23364);

(statearr_23392_24460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (3))){
var inst_23368 = (state_23370[(2)]);
var state_23370__$1 = state_23370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23370__$1,inst_23368);
} else {
if((state_val_23371 === (12))){
var inst_23325 = (state_23370[(8)]);
var inst_23344 = cljs.core.vec(inst_23325);
var state_23370__$1 = state_23370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23370__$1,(14),out,inst_23344);
} else {
if((state_val_23371 === (2))){
var state_23370__$1 = state_23370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23370__$1,(4),ch);
} else {
if((state_val_23371 === (11))){
var inst_23329 = (state_23370[(9)]);
var inst_23333 = (state_23370[(11)]);
var inst_23325 = (state_23370[(8)]);
var inst_23341 = inst_23325.push(inst_23329);
var tmp23393 = inst_23325;
var inst_23325__$1 = tmp23393;
var inst_23326 = inst_23333;
var state_23370__$1 = (function (){var statearr_23394 = state_23370;
(statearr_23394[(7)] = inst_23326);

(statearr_23394[(12)] = inst_23341);

(statearr_23394[(8)] = inst_23325__$1);

return statearr_23394;
})();
var statearr_23395_24468 = state_23370__$1;
(statearr_23395_24468[(2)] = null);

(statearr_23395_24468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (9))){
var inst_23326 = (state_23370[(7)]);
var inst_23337 = cljs.core.keyword_identical_QMARK_(inst_23326,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23370__$1 = state_23370;
var statearr_23397_24473 = state_23370__$1;
(statearr_23397_24473[(2)] = inst_23337);

(statearr_23397_24473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (5))){
var inst_23334 = (state_23370[(13)]);
var inst_23329 = (state_23370[(9)]);
var inst_23326 = (state_23370[(7)]);
var inst_23333 = (state_23370[(11)]);
var inst_23333__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23329) : f.call(null,inst_23329));
var inst_23334__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23333__$1,inst_23326);
var state_23370__$1 = (function (){var statearr_23398 = state_23370;
(statearr_23398[(13)] = inst_23334__$1);

(statearr_23398[(11)] = inst_23333__$1);

return statearr_23398;
})();
if(inst_23334__$1){
var statearr_23399_24475 = state_23370__$1;
(statearr_23399_24475[(1)] = (8));

} else {
var statearr_23401_24476 = state_23370__$1;
(statearr_23401_24476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (14))){
var inst_23329 = (state_23370[(9)]);
var inst_23333 = (state_23370[(11)]);
var inst_23346 = (state_23370[(2)]);
var inst_23347 = [];
var inst_23348 = inst_23347.push(inst_23329);
var inst_23325 = inst_23347;
var inst_23326 = inst_23333;
var state_23370__$1 = (function (){var statearr_23408 = state_23370;
(statearr_23408[(14)] = inst_23348);

(statearr_23408[(7)] = inst_23326);

(statearr_23408[(8)] = inst_23325);

(statearr_23408[(15)] = inst_23346);

return statearr_23408;
})();
var statearr_23409_24477 = state_23370__$1;
(statearr_23409_24477[(2)] = null);

(statearr_23409_24477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (16))){
var state_23370__$1 = state_23370;
var statearr_23411_24478 = state_23370__$1;
(statearr_23411_24478[(2)] = null);

(statearr_23411_24478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (10))){
var inst_23339 = (state_23370[(2)]);
var state_23370__$1 = state_23370;
if(cljs.core.truth_(inst_23339)){
var statearr_23412_24479 = state_23370__$1;
(statearr_23412_24479[(1)] = (11));

} else {
var statearr_23413_24480 = state_23370__$1;
(statearr_23413_24480[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (18))){
var inst_23360 = (state_23370[(2)]);
var state_23370__$1 = state_23370;
var statearr_23414_24481 = state_23370__$1;
(statearr_23414_24481[(2)] = inst_23360);

(statearr_23414_24481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23371 === (8))){
var inst_23334 = (state_23370[(13)]);
var state_23370__$1 = state_23370;
var statearr_23415_24482 = state_23370__$1;
(statearr_23415_24482[(2)] = inst_23334);

(statearr_23415_24482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__20867__auto__ = null;
var cljs$core$async$state_machine__20867__auto____0 = (function (){
var statearr_23418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23418[(0)] = cljs$core$async$state_machine__20867__auto__);

(statearr_23418[(1)] = (1));

return statearr_23418;
});
var cljs$core$async$state_machine__20867__auto____1 = (function (state_23370){
while(true){
var ret_value__20868__auto__ = (function (){try{while(true){
var result__20869__auto__ = switch__20866__auto__(state_23370);
if(cljs.core.keyword_identical_QMARK_(result__20869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20869__auto__;
}
break;
}
}catch (e23419){var ex__20870__auto__ = e23419;
var statearr_23420_24485 = state_23370;
(statearr_23420_24485[(2)] = ex__20870__auto__);


if(cljs.core.seq((state_23370[(4)]))){
var statearr_23423_24486 = state_23370;
(statearr_23423_24486[(1)] = cljs.core.first((state_23370[(4)])));

} else {
throw ex__20870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24487 = state_23370;
state_23370 = G__24487;
continue;
} else {
return ret_value__20868__auto__;
}
break;
}
});
cljs$core$async$state_machine__20867__auto__ = function(state_23370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20867__auto____1.call(this,state_23370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20867__auto____0;
cljs$core$async$state_machine__20867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20867__auto____1;
return cljs$core$async$state_machine__20867__auto__;
})()
})();
var state__21049__auto__ = (function (){var statearr_23424 = f__21048__auto__();
(statearr_23424[(6)] = c__21047__auto___24445);

return statearr_23424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21049__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
