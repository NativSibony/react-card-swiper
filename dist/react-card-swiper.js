(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".swipe-card{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;width:100%;height:100%}.swipe-card__cards{position:relative;width:100%;height:100%}.swipe-card__container{position:absolute;overflow:hidden;pointer-events:none;top:0;left:0;width:100%;height:100%;background-color:#fff;display:flex;flex-direction:column;border-radius:15px;gap:10px;cursor:grab;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:scale(.95) translateY(30px);transition:all .5s}.swipe-card__container:first-of-type{filter:drop-shadow(0px 0px 10px rgba(0,0,0,.2))}.swipe-card__container:last-of-type{pointer-events:auto;filter:drop-shadow(0px 0px 10px rgba(0,0,0,.2));transform:scale(1) translateY(0)}.swipe-card__header{display:flex}.swipe-card__ribbons-container{position:absolute;width:100%}.swipe-card__ribbon-like,.swipe-card__ribbon-dislike{position:absolute;opacity:0;color:#fff;display:flex;justify-content:center;align-items:center;width:170px;height:60px;font-weight:700;font-size:2rem;top:3rem;z-index:50;padding-block:.25rem;padding-inline:.5rem;border-radius:.375rem;transition:all .4s;box-shadow:0 0 5px #00000040}.swipe-card__ribbon-like{left:2rem;background-color:#4ade80;transform:rotate(-20deg);text-shadow:-2px 0px 1px rgba(0,0,0,.2)}.swipe-card__ribbon-dislike{right:2rem;background-color:#f87171;transform:rotate(20deg);text-shadow:2px 0px 1px rgba(0,0,0,.2)}.swipe-card__ribbon-like.show,.swipe-card__ribbon-dislike.show{opacity:1}.swipe-card__image-container{position:relative;height:250px}.swipe-card__image{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.swipe-card__children{bottom:0;display:flex;justify-content:space-evenly;width:100%;transition:all .7s ease;opacity:1}.swipe-card__children.hide-action-buttons{opacity:0}.swipe-card__action-button{height:65px;width:65px;display:flex;justify-content:center;align-items:center;text-align:center;border-radius:50%;padding:10px;box-shadow:0 0 10px #47474733;cursor:pointer}.swipe-card__empty-state{width:100%;height:100%;opacity:0;display:flex;justify-content:center;align-items:center;transform:scale(.95);transition:all .5s ease}.swipe-card__empty-state.swipe-card__empty-state.show-empty-state{transform:scale(1);opacity:1}@media (max-height: 750px){.swipe-card__container{transform:scale(.95) translateY(25px)}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var vt = Object.defineProperty;
var mt = (i, n, a) => n in i ? vt(i, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : i[n] = a;
var _ = (i, n, a) => (mt(i, typeof n != "symbol" ? n + "" : n, a), a);
import Ye, { useRef as pt, useState as Y, useEffect as W, useMemo as _t } from "react";
var ve = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Et() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Ye, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), j = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), D = Symbol.iterator, T = "@@iterator";
    function h(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = D && e[D] || e[T];
      return typeof t == "function" ? t : null;
    }
    var b = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          r[s - 1] = arguments[s];
        B("error", e, r);
      }
    }
    function B(e, t, r) {
      {
        var s = b.ReactDebugCurrentFrame, u = s.getStackAddendum();
        u !== "" && (t += "%s", r = r.concat([u]));
        var d = r.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var U = !1, M = !1, H = !1, z = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === w || J || e === v || e === O || e === E || z || e === P || U || M || H || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === x || e.$$typeof === k || e.$$typeof === j || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function Be(e, t, r) {
      var s = e.displayName;
      if (s)
        return s;
      var u = t.displayName || t.name || "";
      return u !== "" ? r + "(" + u + ")" : r;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case a:
          return "Portal";
        case w:
          return "Profiler";
        case v:
          return "StrictMode";
        case O:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var t = e;
            return pe(t) + ".Consumer";
          case k:
            var r = e;
            return pe(r._context) + ".Provider";
          case y:
            return Be(e, e.render, "ForwardRef");
          case x:
            var s = e.displayName || null;
            return s !== null ? s : L(e.type) || "Memo";
          case C: {
            var u = e, d = u._payload, c = u._init;
            try {
              return L(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, V = 0, _e, Ee, ge, ye, we, Re, Te;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ue() {
      {
        if (V === 0) {
          _e = console.log, Ee = console.info, ge = console.warn, ye = console.error, we = console.group, Re = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function Ve() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: _e
            }),
            info: A({}, e, {
              value: Ee
            }),
            warn: A({}, e, {
              value: ge
            }),
            error: A({}, e, {
              value: ye
            }),
            group: A({}, e, {
              value: we
            }),
            groupCollapsed: A({}, e, {
              value: Re
            }),
            groupEnd: A({}, e, {
              value: Te
            })
          });
        }
        V < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = b.ReactCurrentDispatcher, oe;
    function Q(e, t, r) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (u) {
            var s = u.stack.trim().match(/\n( *(at )?)/);
            oe = s && s[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ce = !1, ee;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new Ke();
    }
    function xe(e, t) {
      if (!e || ce)
        return "";
      {
        var r = ee.get(e);
        if (r !== void 0)
          return r;
      }
      var s;
      ce = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = se.current, se.current = null, Ue();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (I) {
              s = I;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (I) {
              s = I;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            s = I;
          }
          e();
        }
      } catch (I) {
        if (I && s && typeof I.stack == "string") {
          for (var o = I.stack.split(`
`), R = s.stack.split(`
`), p = o.length - 1, g = R.length - 1; p >= 1 && g >= 0 && o[p] !== R[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (o[p] !== R[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || o[p] !== R[g]) {
                    var S = `
` + o[p].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, S), S;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ce = !1, se.current = d, Ve(), Error.prepareStackTrace = u;
      }
      var $ = e ? e.displayName || e.name : "", Ne = $ ? Q($) : "";
      return typeof e == "function" && ee.set(e, Ne), Ne;
    }
    function Xe(e, t, r) {
      return xe(e, !1);
    }
    function qe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function te(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, qe(e));
      if (typeof e == "string")
        return Q(e);
      switch (e) {
        case O:
          return Q("Suspense");
        case E:
          return Q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Xe(e.render);
          case x:
            return te(e.type, t, r);
          case C: {
            var s = e, u = s._payload, d = s._init;
            try {
              return te(d(u), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, Se = {}, je = b.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var t = e._owner, r = te(e.type, e._source, t ? t.type : null);
        je.setExtraStackFrame(r);
      } else
        je.setExtraStackFrame(null);
    }
    function Ge(e, t, r, s, u) {
      {
        var d = Function.call.bind(re);
        for (var c in e)
          if (d(e, c)) {
            var o = void 0;
            try {
              if (typeof e[c] != "function") {
                var R = Error((s || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              o = e[c](t, c, s, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              o = p;
            }
            o && !(o instanceof Error) && (ne(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", r, c, typeof o), ne(null)), o instanceof Error && !(o.message in Se) && (Se[o.message] = !0, ne(u), m("Failed %s type: %s", r, o.message), ne(null));
          }
      }
    }
    var He = Array.isArray;
    function ue(e) {
      return He(e);
    }
    function ze(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function Je(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Pe(e) {
      if (Je(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Ce(e);
    }
    var K = b.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, ke, le;
    le = {};
    function Qe(e) {
      if (re.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function et(e) {
      if (re.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, t) {
      if (typeof e.ref == "string" && K.current && t && K.current.stateNode !== t) {
        var r = L(K.current.type);
        le[r] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(K.current.type), e.ref), le[r] = !0);
      }
    }
    function rt(e, t) {
      {
        var r = function() {
          Oe || (Oe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function nt(e, t) {
      {
        var r = function() {
          ke || (ke = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var it = function(e, t, r, s, u, d, c) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: c,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function at(e, t, r, s, u) {
      {
        var d, c = {}, o = null, R = null;
        r !== void 0 && (Pe(r), o = "" + r), et(t) && (Pe(t.key), o = "" + t.key), Qe(t) && (R = t.ref, tt(t, u));
        for (d in t)
          re.call(t, d) && !Ze.hasOwnProperty(d) && (c[d] = t[d]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (d in p)
            c[d] === void 0 && (c[d] = p[d]);
        }
        if (o || R) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rt(c, g), R && nt(c, g);
        }
        return it(e, o, R, u, s, K.current, c);
      }
    }
    var fe = b.ReactCurrentOwner, Le = b.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var t = e._owner, r = te(e.type, e._source, t ? t.type : null);
        Le.setExtraStackFrame(r);
      } else
        Le.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ie() {
      {
        if (fe.current) {
          var e = L(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function st(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), r = e.lineNumber;
          return `

Check your code at ` + t + ":" + r + ".";
        }
        return "";
      }
    }
    var De = {};
    function ot(e) {
      {
        var t = Ie();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Fe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = ot(t);
        if (De[r])
          return;
        De[r] = !0;
        var s = "";
        e && e._owner && e._owner !== fe.current && (s = " It was passed a child from " + L(e._owner.type) + "."), N(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, s), N(null);
      }
    }
    function Me(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var r = 0; r < e.length; r++) {
            var s = e[r];
            he(s) && Fe(s, t);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = h(e);
          if (typeof u == "function" && u !== e.entries)
            for (var d = u.call(e), c; !(c = d.next()).done; )
              he(c.value) && Fe(c.value, t);
        }
      }
    }
    function ct(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === x))
          r = t.propTypes;
        else
          return;
        if (r) {
          var s = L(t);
          Ge(r, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !de) {
          de = !0;
          var u = L(t);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var s = t[r];
          if (s !== "children" && s !== "key") {
            N(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Ae(e, t, r, s, u, d) {
      {
        var c = ae(e);
        if (!c) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = st(u);
          R ? o += R : o += Ie();
          var p;
          e === null ? p = "null" : ue(e) ? p = "array" : e !== void 0 && e.$$typeof === n ? (p = "<" + (L(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, o);
        }
        var g = at(e, t, r, u, d);
        if (g == null)
          return g;
        if (c) {
          var S = t.children;
          if (S !== void 0)
            if (s)
              if (ue(S)) {
                for (var $ = 0; $ < S.length; $++)
                  Me(S[$], e);
                Object.freeze && Object.freeze(S);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(S, e);
        }
        return e === l ? ut(g) : ct(g), g;
      }
    }
    function lt(e, t, r) {
      return Ae(e, t, r, !0);
    }
    function ft(e, t, r) {
      return Ae(e, t, r, !1);
    }
    var dt = ft, ht = lt;
    X.Fragment = l, X.jsx = dt, X.jsxs = ht;
  }()), X;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function gt() {
  if (We)
    return q;
  We = 1;
  var i = Ye, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(j, y, O) {
    var E, x = {}, C = null, P = null;
    O !== void 0 && (C = "" + O), y.key !== void 0 && (C = "" + y.key), y.ref !== void 0 && (P = y.ref);
    for (E in y)
      l.call(y, E) && !w.hasOwnProperty(E) && (x[E] = y[E]);
    if (j && j.defaultProps)
      for (E in y = j.defaultProps, y)
        x[E] === void 0 && (x[E] = y[E]);
    return { $$typeof: n, type: j, key: C, ref: P, props: x, _owner: v.current };
  }
  return q.Fragment = a, q.jsx = k, q.jsxs = k, q;
}
process.env.NODE_ENV === "production" ? ve.exports = gt() : ve.exports = Et();
var f = ve.exports, G = /* @__PURE__ */ ((i) => (i[i.LEFT = -1] = "LEFT", i[i.RIGHT = 1] = "RIGHT", i))(G || {}), F = /* @__PURE__ */ ((i) => (i.LIKE = "like", i.DISLIKE = "dislike", i.FINISHED = "finished", i))(F || {}), me = /* @__PURE__ */ ((i) => (i.SWIPE = "swipe", i.CLICK = "click", i))(me || {});
class yt {
  constructor({ element: n, id: a, meta: l, onDismiss: v }) {
    _(this, "element");
    _(this, "id");
    _(this, "meta");
    _(this, "onDismiss");
    // private properties
    _(this, "startPoint", { x: 0, y: 0 });
    _(this, "offsetX", 0);
    _(this, "offsetY", 0);
    _(this, "isTouchDevice", () => "ontouchstart" in window || navigator.maxTouchPoints > 0);
    _(this, "init", () => {
      this.isTouchDevice() ? this.listenToTouchEvents() : this.listenToMouseEvents();
    });
    _(this, "listenToTouchEvents", () => {
      this.element.addEventListener("touchstart", (n) => {
        const a = n.changedTouches[0];
        if (!a)
          return;
        const { clientX: l, clientY: v } = a;
        this.startPoint = { x: l, y: v }, document.addEventListener("touchmove", this.handleTouchMove), this.element.style.transition = "transform 0s";
      }), document.addEventListener("touchend", this.handleTouchEnd), document.addEventListener("cancel", this.handleTouchEnd);
    });
    _(this, "listenToMouseEvents", () => {
      this.element.addEventListener("mousedown", (n) => {
        const { clientX: a, clientY: l } = n;
        this.startPoint = { x: a, y: l }, document.addEventListener("mousemove", this.handleMouseMove), this.element.style.transition = "transform 0s";
      }), document.addEventListener("mouseup", this.handleMoveUp), this.element.addEventListener("dragstart", (n) => {
        n.preventDefault();
      });
    });
    _(this, "handleMove", (n, a) => {
      if (!this.startPoint)
        return;
      this.showRibbons(), this.offsetX = n - this.startPoint.x;
      const l = this.offsetX * 0.07;
      this.element.style.transform = `translate(${this.offsetX}px,0) rotate(${l}deg)`, Math.abs(this.offsetX) > this.element.clientWidth * 0.4 && this.dismiss(this.offsetX > 0 ? 1 : -1);
    });
    _(this, "showRibbons", () => {
      const n = this.element.querySelector(".swipe-card__ribbon-like"), a = this.element.querySelector(".swipe-card__ribbon-dislike");
      this.offsetX > 10 ? (n == null || n.classList.add("show"), a == null || a.classList.remove("show")) : this.offsetX < -10 ? (n == null || n.classList.remove("show"), a == null || a.classList.add("show")) : (n == null || n.classList.remove("show"), a == null || a.classList.remove("show"));
    });
    _(this, "hideRibbons", () => {
      const n = this.element.querySelector(".swipe-card__ribbon-like"), a = this.element.querySelector(".swipe-card__ribbon-dislike");
      n == null || n.classList.remove("show"), a == null || a.classList.remove("show");
    });
    // mouse event handlers
    _(this, "handleMouseMove", (n) => {
      if (n.preventDefault(), !this.startPoint)
        return;
      const { clientX: a, clientY: l } = n;
      this.handleMove(a, l);
    });
    _(this, "handleMoveUp", () => {
      this.startPoint = null, document.removeEventListener("mousemove", this.handleMouseMove), this.element.style.transform = "", this.element.style.transition = "all .5s", this.hideRibbons();
    });
    // touch event handlers
    _(this, "handleTouchMove", (n) => {
      if (!this.startPoint)
        return;
      const a = n.changedTouches[0];
      if (!a)
        return;
      const { clientX: l, clientY: v } = a;
      this.handleMove(l, v);
    });
    _(this, "handleTouchEnd", () => {
      this.startPoint = null, document.removeEventListener("touchmove", this.handleTouchMove), this.element.style.transform = "", this.element.style.transition = "all .5s", this.hideRibbons();
    });
    _(this, "dismiss", (n, a = me.SWIPE) => {
      if (this.startPoint = null, document.removeEventListener("mouseup", this.handleMoveUp), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("touchend", this.handleTouchEnd), document.removeEventListener("touchmove", this.handleTouchMove), this.element.style.transition = "all 0.6s", this.element.style.transform = `translate(${n * window.innerWidth * 2}px, ${this.offsetY}px) rotate(${60 * n}deg)`, this.element.classList.add("dismissing"), setTimeout(() => this.element.remove(), 300), typeof this.onDismiss == "function") {
        const l = n === 1 ? F.LIKE : F.DISLIKE;
        this.onDismiss(this.element, this.meta, this.id, l, a);
      }
    });
    _(this, "dismissById", (n) => {
      this.dismiss(n, me.CLICK);
    });
    this.id = a, this.meta = l, this.element = n, this.onDismiss = v, this.init();
  }
}
const wt = ({ onDismiss: i, onFinish: n, onEnter: a, data: l }) => {
  const v = pt([]), [w, k] = Y(l.length), [j, y] = Y(l), [O, E] = Y(!1), x = (T, h, b) => {
    if (T) {
      const m = new yt({ element: T, id: h, meta: b, onDismiss: P });
      v.current.push(m);
    }
  }, C = (T, h, b) => {
    a && a(T, h, b);
  }, P = (T, h, b, m, B) => {
    k((U) => U - 1), i && i(T, h, b, m, B), v.current.pop();
  }, D = (T) => {
    if (w) {
      const h = v.current[w - 1];
      h == null || h.dismissById(T);
    }
  };
  return W(() => {
    !w && n && (E(!0), n(F.FINISHED));
  }, [w]), {
    isFinish: O,
    dynamicData: j,
    swiperIndex: w,
    swiperElements: v,
    handleEnter: C,
    setDynamicData: y,
    handleClickEvents: D,
    handleNewCardSwiper: x
  };
};
function ie({ buttonContent: i, direction: n, isCustom: a = !1, action: l, onClick: v }) {
  const w = `swipe-card__${a ? "custom-" : ""}action-button`;
  return /* @__PURE__ */ f.jsx("div", { className: w, id: `swipe-card__${l}-action-button`, onClick: () => v(n), children: i });
}
function Rt({ isFinish: i, children: n }) {
  const [a, l] = Y("");
  return W(() => {
    const v = setTimeout(() => {
      i && l("show-empty-state");
    }, 100);
    return () => clearTimeout(v);
  }, [i]), /* @__PURE__ */ f.jsx("div", { className: `swipe-card__empty-state ${a}`, id: "swipe-card__empty-state", children: n });
}
const Tt = () => /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 320 512", fill: "lightcoral", height: "2em", width: "2em", children: /* @__PURE__ */ f.jsx("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z" }) });
function bt({ ribbonColors: i, dislikeRibbonText: n, likeRibbonText: a }) {
  return /* @__PURE__ */ f.jsxs("div", { className: "swipe-card__ribbons-container", id: "swipe-card__ribbons-container", children: [
    /* @__PURE__ */ f.jsx(
      "div",
      {
        id: "swipe-card__ribbon-like",
        className: "swipe-card__ribbon-like",
        style: { color: i == null ? void 0 : i.textColor, backgroundColor: i == null ? void 0 : i.bgLike },
        children: a || "LIKE"
      }
    ),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        id: "swipe-card__ribbon-dislike",
        className: "swipe-card__ribbon-dislike",
        style: { color: i == null ? void 0 : i.textColor, backgroundColor: i == null ? void 0 : i.bgDislike },
        children: n || "PASS"
      }
    )
  ] });
}
function xt() {
  return /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 20 20", fill: "palegreen", height: "2em", width: "2em", children: /* @__PURE__ */ f.jsx("path", { d: "M0 11l2-2 5 5L18 3l2 2L7 18z" }) });
}
const Ct = (i) => {
  const { data: n, likeButton: a, dislikeButton: l, withActionButtons: v = !1, emptyState: w, onDismiss: k, onFinish: j, onEnter: y } = i, { handleEnter: O, handleClickEvents: E, handleNewCardSwiper: x, dynamicData: C, isFinish: P, swiperIndex: D, swiperElements: T } = wt({
    onDismiss: k,
    onFinish: j,
    onEnter: y,
    data: n
  }), [h, b] = Y(T.current[D]), [m, B] = Y("");
  W(() => {
    b(T.current[D - 1]);
  }, [T, D]), W(() => {
    h && O(h.element, h.meta, h.id);
  }, [h]);
  const U = _t(
    () => C.map(({ id: M, header: H, src: z, content: J, meta: Z }) => /* @__PURE__ */ f.jsxs(
      "div",
      {
        ref: (ae) => x(ae, M, Z),
        className: "swipe-card__container",
        id: "swipe-card__container",
        children: [
          H && /* @__PURE__ */ f.jsx("div", { className: "swipe-card__header-container", id: "swipe-card__header-container", children: /* @__PURE__ */ f.jsx("h2", { id: "swipe-card__header", children: H }) }),
          i.withRibbons && /* @__PURE__ */ f.jsx(
            bt,
            {
              likeRibbonText: i.likeRibbonText,
              dislikeRibbonText: i.dislikeRibbonText,
              ribbonColors: i.ribbonColors
            }
          ),
          /* @__PURE__ */ f.jsx("div", { className: "swipe-card__image-container", children: /* @__PURE__ */ f.jsx("img", { className: "swipe-card__image", src: z, alt: z, id: "swipe-card__image" }) }),
          J && /* @__PURE__ */ f.jsx("div", { className: "swipe-card__content", children: J })
        ]
      },
      M
    )),
    []
  );
  return W(() => {
    P && B("hide-action-buttons");
  }, [P]), W(() => {
    const M = () => {
      h == null || h.handleTouchEnd(), h == null || h.handleMoveUp();
    };
    return window.addEventListener("blur", M), () => window.removeEventListener("blur", M);
  }, [h]), /* @__PURE__ */ f.jsxs("div", { className: "swipe-card", id: "swipe-card", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "swipe-card__cards", id: "swipe-card__cards", children: [
      U,
      w && P && /* @__PURE__ */ f.jsx(Rt, { children: w, isFinish: P })
    ] }),
    v && /* @__PURE__ */ f.jsx("div", { className: `swipe-card__children ${m}`, id: "swipe-card__children", children: a && l ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        ie,
        {
          isCustom: !0,
          direction: G.LEFT,
          action: F.DISLIKE,
          onClick: E,
          buttonContent: l
        }
      ),
      /* @__PURE__ */ f.jsx(
        ie,
        {
          isCustom: !0,
          direction: G.RIGHT,
          action: F.LIKE,
          onClick: E,
          buttonContent: a
        }
      )
    ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        ie,
        {
          direction: G.LEFT,
          action: F.DISLIKE,
          onClick: E,
          buttonContent: /* @__PURE__ */ f.jsx(Tt, {})
        }
      ),
      /* @__PURE__ */ f.jsx(
        ie,
        {
          direction: G.RIGHT,
          action: F.LIKE,
          onClick: E,
          buttonContent: /* @__PURE__ */ f.jsx(xt, {})
        }
      )
    ] }) })
  ] });
};
export {
  Ct as CardSwiper,
  F as SwipeAction,
  G as SwipeDirection,
  me as SwipeOperation
};
