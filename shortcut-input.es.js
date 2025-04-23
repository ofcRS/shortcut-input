import ce, { useState as fe, useRef as pr, useEffect as hr } from "react";
var Q = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function gr() {
  if (Me) return U;
  Me = 1;
  var y = ce, S = Symbol.for("react.element"), D = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, F = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(R, l, j) {
    var v, x = {}, O = null, C = null;
    j !== void 0 && (O = "" + j), l.key !== void 0 && (O = "" + l.key), l.ref !== void 0 && (C = l.ref);
    for (v in l) _.call(l, v) && !A.hasOwnProperty(v) && (x[v] = l[v]);
    if (R && R.defaultProps) for (v in l = R.defaultProps, l) x[v] === void 0 && (x[v] = l[v]);
    return { $$typeof: S, type: R, key: O, ref: C, props: x, _owner: F.current };
  }
  return U.Fragment = D, U.jsx = h, U.jsxs = h, U;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function yr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var y = ce, S = Symbol.for("react.element"), D = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), R = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), L = Symbol.iterator, q = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[q];
      return typeof r == "function" ? r : null;
    }
    var w = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ee("error", e, t);
      }
    }
    function ee(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var re = !1, a = !1, b = !1, m = !1, I = !1, T;
    T = Symbol.for("react.module.reference");
    function J(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === A || I || e === F || e === j || e === v || m || e === C || re || a || b || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === x || e.$$typeof === h || e.$$typeof === R || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === T || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case D:
          return "Portal";
        case A:
          return "Profiler";
        case F:
          return "StrictMode";
        case j:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return de(r) + ".Consumer";
          case h:
            var t = e;
            return de(t._context) + ".Provider";
          case l:
            return Ke(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case O: {
            var s = e, u = s._payload, o = s._init;
            try {
              return P(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, V = 0, ve, pe, he, ge, ye, be, Re;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Ve() {
      {
        if (V === 0) {
          ve = console.log, pe = console.info, he = console.warn, ge = console.error, ye = console.group, be = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
    function Ye() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: ve
            }),
            info: M({}, e, {
              value: pe
            }),
            warn: M({}, e, {
              value: he
            }),
            error: M({}, e, {
              value: ge
            }),
            group: M({}, e, {
              value: ye
            }),
            groupCollapsed: M({}, e, {
              value: be
            }),
            groupEnd: M({}, e, {
              value: Re
            })
          });
        }
        V < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = w.ReactCurrentDispatcher, ne;
    function z(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            ne = n && n[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, G;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Ue();
    }
    function Ee(e, r) {
      if (!e || ae)
        return "";
      {
        var t = G.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ae = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = te.current, te.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var i = g.stack.split(`
`), p = n.stack.split(`
`), f = i.length - 1, c = p.length - 1; f >= 1 && c >= 0 && i[f] !== p[c]; )
            c--;
          for (; f >= 1 && c >= 0; f--, c--)
            if (i[f] !== p[c]) {
              if (f !== 1 || c !== 1)
                do
                  if (f--, c--, c < 0 || i[f] !== p[c]) {
                    var E = `
` + i[f].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, E), E;
                  }
                while (f >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = u, Ye(), Error.prepareStackTrace = s;
      }
      var K = e ? e.displayName || e.name : "", W = K ? z(K) : "";
      return typeof e == "function" && G.set(e, W), W;
    }
    function Be(e, r, t) {
      return Ee(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function X(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Ne(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case j:
          return z("Suspense");
        case v:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Be(e.render);
          case x:
            return X(e.type, r, t);
          case O: {
            var n = e, s = n._payload, u = n._init;
            try {
              return X(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, _e = {}, xe = w.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, s) {
      {
        var u = Function.call.bind(Y);
        for (var o in e)
          if (u(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              i = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              i = f;
            }
            i && !(i instanceof Error) && (H(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof i), H(null)), i instanceof Error && !(i.message in _e) && (_e[i.message] = !0, H(s), d("Failed %s type: %s", t, i.message), H(null));
          }
      }
    }
    var Je = Array.isArray;
    function ie(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Ge(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Se(e);
    }
    var Te = w.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Oe;
    function He(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && Te.current;
    }
    function er(e, r) {
      {
        var t = function() {
          je || (je = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, s, u, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: S,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, n, s) {
      {
        var u, o = {}, i = null, p = null;
        t !== void 0 && (Ce(t), i = "" + t), Qe(r) && (Ce(r.key), i = "" + r.key), He(r) && (p = r.ref, Ze(r, s));
        for (u in r)
          Y.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (i || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(o, c), p && rr(o, c);
        }
        return tr(e, i, p, s, n, Te.current, o);
      }
    }
    var oe = w.ReactCurrentOwner, we = w.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === S;
    }
    function Pe() {
      {
        if (oe.current) {
          var e = P(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var ke = {};
    function ir(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var n = "";
        e && e._owner && e._owner !== oe.current && (n = " It was passed a child from " + P(e._owner.type) + "."), $(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ue(n) && De(n, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Z(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              ue(o.value) && De(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var s = P(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Ae = {};
    function Ie(e, r, t, n, s, u) {
      {
        var o = J(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = ar();
          p ? i += p : i += Pe();
          var f;
          e === null ? f = "null" : ie(e) ? f = "array" : e !== void 0 && e.$$typeof === S ? (f = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, i);
        }
        var c = nr(e, r, t, s, u);
        if (c == null)
          return c;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (ie(E)) {
                for (var K = 0; K < E.length; K++)
                  Fe(E[K], e);
                Object.freeze && Object.freeze(E);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(E, e);
        }
        if (Y.call(r, "key")) {
          var W = P(e), g = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), le = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[W + le]) {
            var dr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, W, dr, W), Ae[W + le] = !0;
          }
        }
        return e === _ ? sr(c) : or(c), c;
      }
    }
    function ur(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var fr = lr, cr = ur;
    B.Fragment = _, B.jsx = fr, B.jsxs = cr;
  }()), B;
}
var Le;
function br() {
  return Le || (Le = 1, process.env.NODE_ENV === "production" ? Q.exports = gr() : Q.exports = yr()), Q.exports;
}
var k = br();
const N = {
  container: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  placeholder: {
    color: "#666",
    fontSize: "36px",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 8px"
  },
  keyContainer: {
    padding: "4px 8px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "36px",
    minWidth: "20px",
    textAlign: "center",
    color: "#333",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: "bold"
  },
  separator: {
    color: "#666",
    fontSize: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 8px"
  }
}, Rr = ({ shortcut: y }) => {
  if (!y || y === "Press Shortcut")
    return /* @__PURE__ */ k.jsx("div", { style: N.container, children: /* @__PURE__ */ k.jsx("div", { style: N.placeholder, children: y }) });
  const S = y.split("+");
  return /* @__PURE__ */ k.jsx("div", { style: N.container, children: S.map((D, _) => /* @__PURE__ */ k.jsxs(ce.Fragment, { children: [
    /* @__PURE__ */ k.jsx("div", { style: N.keyContainer, children: D }),
    _ < S.length - 1 && /* @__PURE__ */ k.jsx("div", { style: N.separator, children: "+" })
  ] }, _)) });
}, $e = {
  container: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    cursor: "text",
    userSelect: "none",
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  focused: {
    outline: "2px solid #007bff"
  }
}, Er = ({ value: y, modifiers: S, onChange: D, placeholder: _ = "Press Shortcut" }) => {
  const [F, A] = fe(!1), [h, R] = fe([]), [l, j] = fe(y), v = pr(null), x = (a) => a === "ControlLeft" || a === "ControlRight" ? "Control" : a === "AltLeft" || a === "AltRight" ? "Alt" : a === "ShiftLeft" || a === "ShiftRight" ? "Shift" : a === "MetaLeft" || a === "MetaRight" ? "Meta" : a.startsWith("Key") ? a.slice(3) : a.startsWith("Digit") ? a.slice(5) : {
    Minus: "-",
    Equal: "=",
    BracketLeft: "[",
    BracketRight: "]",
    Semicolon: ";",
    Quote: "'",
    Backslash: "\\",
    Comma: ",",
    Period: ".",
    Slash: "/",
    Space: "Space",
    Enter: "Enter",
    Backspace: "Backspace",
    Tab: "Tab",
    Escape: "Escape"
  }[a] || a, O = (a) => a === "ControlLeft" || a === "ControlRight" ? "Control" : a === "AltLeft" || a === "AltRight" ? "Alt" : a === "ShiftLeft" || a === "ShiftRight" ? "Shift" : a === "MetaLeft" || a === "MetaRight" ? "Meta" : null, C = (a) => {
    const b = O(a);
    return b !== null && S.includes(b);
  }, L = (a) => a.length === 0 ? !1 : a.filter((m) => !C(m)).length === 1, q = (a) => [...a].sort((m, I) => {
    const T = C(m), J = C(I);
    return T && !J ? -1 : !T && J ? 1 : 0;
  }).map(x).join("+"), Z = () => l && h.length === 0 || l && !L(h) ? l : h.length > 0 && L(h) ? q(h) : l || (F ? "Press Shortcut" : _), w = (a) => {
    a.preventDefault();
    const b = a.code;
    if (!h.includes(b)) {
      const m = [...h, b], I = m.filter((T) => !C(T)).length;
      if ((C(b) || I <= 1) && (R(m), L(m))) {
        const T = q(m);
        j(T), D(T);
      }
    }
  }, d = (a) => {
    a.preventDefault();
    const b = a.code, m = h.filter((I) => I !== b);
    R(m);
  }, ee = () => {
    A(!0), R([]);
  }, re = () => {
    A(!1), R([]);
  };
  return hr(() => {
    y !== l && j(y);
  }, [y]), /* @__PURE__ */ k.jsx(
    "div",
    {
      ref: v,
      tabIndex: 0,
      onKeyDown: w,
      onKeyUp: d,
      onFocus: ee,
      onBlur: re,
      style: {
        ...$e.container,
        ...F ? $e.focused : {}
      },
      children: /* @__PURE__ */ k.jsx(Rr, { shortcut: Z() })
    }
  );
};
export {
  Er as ShortcutInput
};
