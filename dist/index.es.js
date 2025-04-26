(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._curve_106zt_2{stroke:#000;stroke-width:2px;fill:none}._curve_old_106zt_8{stroke:gray;stroke-width:1px;fill:none}._curve_new_106zt_14{stroke:#8b0000;stroke-width:3px;fill:none}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const ci = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function Zt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function fi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function cr(t) {
  let n, e, r;
  t.length !== 2 ? (n = Zt, e = (s, u) => Zt(t(s), u), r = (s, u) => t(s) - u) : (n = t === Zt || t === fi ? t : hi, e = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function hi() {
  return 0;
}
function pi(t) {
  return t === null ? NaN : +t;
}
const di = cr(Zt), gi = di.right;
cr(pi).center;
const yi = Math.sqrt(50), _i = Math.sqrt(10), mi = Math.sqrt(2);
function tn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= yi ? 10 : o >= _i ? 5 : o >= mi ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? tn(t, n, e * 2) : [s, u, l];
}
function vi(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? tn(n, t, e) : tn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Pn(t, n, e) {
  return n = +n, t = +t, e = +e, tn(t, n, e)[2];
}
function wi(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Pn(n, t, e) : Pn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Xt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function xi(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var bi = { value: () => {
} };
function Wn() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Wt(e);
}
function Wt(t) {
  this._ = t;
}
function Mi(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Wt.prototype = Wn.prototype = {
  constructor: Wt,
  on: function(t, n) {
    var e = this._, r = Mi(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ai(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = ve(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ve(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Wt(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Ai(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ve(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = bi, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Nn = "http://www.w3.org/1999/xhtml";
const we = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Nn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function hn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), we.hasOwnProperty(n) ? { space: we[n], local: t } : t;
}
function $i(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Nn && n.documentElement.namespaceURI === Nn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ti(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function fr(t) {
  var n = hn(t);
  return (n.local ? Ti : $i)(n);
}
function Si() {
}
function Jn(t) {
  return t == null ? Si : function() {
    return this.querySelector(t);
  };
}
function Ei(t) {
  typeof t != "function" && (t = Jn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new C(r, this._parents);
}
function Pi(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ni() {
  return [];
}
function hr(t) {
  return t == null ? Ni : function() {
    return this.querySelectorAll(t);
  };
}
function zi(t) {
  return function() {
    return Pi(t.apply(this, arguments));
  };
}
function Ii(t) {
  typeof t == "function" ? t = zi(t) : t = hr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new C(r, i);
}
function pr(t) {
  return function() {
    return this.matches(t);
  };
}
function dr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ki = Array.prototype.find;
function Oi(t) {
  return function() {
    return ki.call(this.children, t);
  };
}
function Ci() {
  return this.firstElementChild;
}
function Ri(t) {
  return this.select(t == null ? Ci : Oi(typeof t == "function" ? t : dr(t)));
}
var Fi = Array.prototype.filter;
function Di() {
  return Array.from(this.children);
}
function Li(t) {
  return function() {
    return Fi.call(this.children, t);
  };
}
function qi(t) {
  return this.selectAll(t == null ? Di : Li(typeof t == "function" ? t : dr(t)));
}
function Bi(t) {
  typeof t != "function" && (t = pr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new C(r, this._parents);
}
function gr(t) {
  return new Array(t.length);
}
function Hi() {
  return new C(this._enter || this._groups.map(gr), this._parents);
}
function nn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
nn.prototype = {
  constructor: nn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Xi(t) {
  return function() {
    return t;
  };
}
function Gi(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new nn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Ui(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = g = a.call(u, u.__data__, s, n) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : e[s] = new nn(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Yi(t) {
  return t.__data__;
}
function Ki(t, n) {
  if (!arguments.length) return Array.from(this, Yi);
  var e = n ? Ui : Gi, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Xi(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, g = Vi(t.call(c, c && c.__data__, l, r)), p = g.length, d = s[l] = new Array(p), w = a[l] = new Array(p), x = u[l] = new Array(h);
    e(c, f, d, w, x, g, n);
    for (var M = 0, A = 0, y, m; M < p; ++M)
      if (y = d[M]) {
        for (M >= A && (A = M + 1); !(m = w[A]) && ++A < p; ) ;
        y._next = m || null;
      }
  }
  return a = new C(a, r), a._enter = s, a._exit = u, a;
}
function Vi(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ji() {
  return new C(this._exit || this._groups.map(gr), this._parents);
}
function Zi(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Wi(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], c = r[u], f = l.length, h = s[u] = new Array(f), g, p = 0; p < f; ++p)
      (g = l[p] || c[p]) && (h[p] = g);
  for (; u < i; ++u)
    s[u] = e[u];
  return new C(s, this._parents);
}
function Ji() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Qi(t) {
  t || (t = to);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(n);
  }
  return new C(i, this._parents).order();
}
function to(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function no() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function eo() {
  return Array.from(this);
}
function ro() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function io() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function oo() {
  return !this.node();
}
function ao(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function so(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function uo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function lo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function co(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function fo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ho(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function po(t, n) {
  var e = hn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? uo : so : typeof n == "function" ? e.local ? ho : fo : e.local ? co : lo)(e, n));
}
function yr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function go(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function yo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function _o(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function mo(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? go : typeof n == "function" ? _o : yo)(t, n, e ?? "")) : vt(this.node(), t);
}
function vt(t, n) {
  return t.style.getPropertyValue(n) || yr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function vo(t) {
  return function() {
    delete this[t];
  };
}
function wo(t, n) {
  return function() {
    this[t] = n;
  };
}
function xo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function bo(t, n) {
  return arguments.length > 1 ? this.each((n == null ? vo : typeof n == "function" ? xo : wo)(t, n)) : this.node()[t];
}
function _r(t) {
  return t.trim().split(/^|\s+/);
}
function Qn(t) {
  return t.classList || new mr(t);
}
function mr(t) {
  this._node = t, this._names = _r(t.getAttribute("class") || "");
}
mr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function vr(t, n) {
  for (var e = Qn(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function wr(t, n) {
  for (var e = Qn(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Mo(t) {
  return function() {
    vr(this, t);
  };
}
function Ao(t) {
  return function() {
    wr(this, t);
  };
}
function $o(t, n) {
  return function() {
    (n.apply(this, arguments) ? vr : wr)(this, t);
  };
}
function To(t, n) {
  var e = _r(t + "");
  if (arguments.length < 2) {
    for (var r = Qn(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? $o : n ? Mo : Ao)(e, n));
}
function So() {
  this.textContent = "";
}
function Eo(t) {
  return function() {
    this.textContent = t;
  };
}
function Po(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function No(t) {
  return arguments.length ? this.each(t == null ? So : (typeof t == "function" ? Po : Eo)(t)) : this.node().textContent;
}
function zo() {
  this.innerHTML = "";
}
function Io(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ko(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Oo(t) {
  return arguments.length ? this.each(t == null ? zo : (typeof t == "function" ? ko : Io)(t)) : this.node().innerHTML;
}
function Co() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ro() {
  return this.each(Co);
}
function Fo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Do() {
  return this.each(Fo);
}
function Lo(t) {
  var n = typeof t == "function" ? t : fr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function qo() {
  return null;
}
function Bo(t, n) {
  var e = typeof t == "function" ? t : fr(t), r = n == null ? qo : typeof n == "function" ? n : Jn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ho() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Xo() {
  return this.each(Ho);
}
function Go() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Uo() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Yo(t) {
  return this.select(t ? Uo : Go);
}
function Ko(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Vo(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function jo(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Zo(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Wo(t, n, e) {
  return function() {
    var r = this.__on, i, o = Vo(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Jo(t, n, e) {
  var r = jo(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Wo : Zo, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function xr(t, n, e) {
  var r = yr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Qo(t, n) {
  return function() {
    return xr(this, t, n);
  };
}
function ta(t, n) {
  return function() {
    return xr(this, t, n.apply(this, arguments));
  };
}
function na(t, n) {
  return this.each((typeof n == "function" ? ta : Qo)(t, n));
}
function* ea() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var br = [null];
function C(t, n) {
  this._groups = t, this._parents = n;
}
function qt() {
  return new C([[document.documentElement]], br);
}
function ra() {
  return this;
}
C.prototype = qt.prototype = {
  constructor: C,
  select: Ei,
  selectAll: Ii,
  selectChild: Ri,
  selectChildren: qi,
  filter: Bi,
  data: Ki,
  enter: Hi,
  exit: ji,
  join: Zi,
  merge: Wi,
  selection: ra,
  order: Ji,
  sort: Qi,
  call: no,
  nodes: eo,
  node: ro,
  size: io,
  empty: oo,
  each: ao,
  attr: po,
  style: mo,
  property: bo,
  classed: To,
  text: No,
  html: Oo,
  raise: Ro,
  lower: Do,
  append: Lo,
  insert: Bo,
  remove: Xo,
  clone: Yo,
  datum: Ko,
  on: Jo,
  dispatch: na,
  [Symbol.iterator]: ea
};
function T(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], br);
}
function ia(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function zn(t, n) {
  if (t = ia(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const oa = { passive: !1 }, It = { capture: !0, passive: !1 };
function xn(t) {
  t.stopImmediatePropagation();
}
function _t(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function aa(t) {
  var n = t.document.documentElement, e = T(t).on("dragstart.drag", _t, It);
  "onselectstart" in n ? e.on("selectstart.drag", _t, It) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function sa(t, n) {
  var e = t.document.documentElement, r = T(t).on("dragstart.drag", null);
  n && (r.on("click.drag", _t, It), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Gt = (t) => () => t;
function In(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
In.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ua(t) {
  return !t.ctrlKey && !t.button;
}
function la() {
  return this.parentNode;
}
function ca(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function fa() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ha() {
  var t = ua, n = la, e = ca, r = fa, i = {}, o = Wn("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(y) {
    y.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", x, oa).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(y, m) {
    if (!(c || !t.call(this, y, m))) {
      var S = A(this, n.call(this, y, m), y, m, "mouse");
      S && (T(y.view).on("mousemove.drag", p, It).on("mouseup.drag", d, It), aa(y.view), xn(y), l = !1, s = y.clientX, u = y.clientY, S("start", y));
    }
  }
  function p(y) {
    if (_t(y), !l) {
      var m = y.clientX - s, S = y.clientY - u;
      l = m * m + S * S > f;
    }
    i.mouse("drag", y);
  }
  function d(y) {
    T(y.view).on("mousemove.drag mouseup.drag", null), sa(y.view, l), _t(y), i.mouse("end", y);
  }
  function w(y, m) {
    if (t.call(this, y, m)) {
      var S = y.changedTouches, E = n.call(this, y, m), I = S.length, X, V;
      for (X = 0; X < I; ++X)
        (V = A(this, E, y, m, S[X].identifier, S[X])) && (xn(y), V("start", y, S[X]));
    }
  }
  function x(y) {
    var m = y.changedTouches, S = m.length, E, I;
    for (E = 0; E < S; ++E)
      (I = i[m[E].identifier]) && (_t(y), I("drag", y, m[E]));
  }
  function M(y) {
    var m = y.changedTouches, S = m.length, E, I;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < S; ++E)
      (I = i[m[E].identifier]) && (xn(y), I("end", y, m[E]));
  }
  function A(y, m, S, E, I, X) {
    var V = o.copy(), v = zn(X || S, m), G, k, D;
    if ((D = e.call(y, new In("beforestart", {
      sourceEvent: S,
      target: h,
      identifier: I,
      active: a,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), E)) != null)
      return G = D.x - v[0] || 0, k = D.y - v[1] || 0, function Ht(et, it, dt) {
        var R = v, wn;
        switch (et) {
          case "start":
            i[I] = Ht, wn = a++;
            break;
          case "end":
            delete i[I], --a;
          // falls through
          case "drag":
            v = zn(dt || it, m), wn = a;
            break;
        }
        V.call(
          et,
          y,
          new In(et, {
            sourceEvent: it,
            subject: D,
            target: h,
            identifier: I,
            active: wn,
            x: v[0] + G,
            y: v[1] + k,
            dx: v[0] - R[0],
            dy: v[1] - R[1],
            dispatch: V
          }),
          E
        );
      };
  }
  return h.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Gt(!!y), h) : t;
  }, h.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Gt(y), h) : n;
  }, h.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Gt(y), h) : e;
  }, h.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Gt(!!y), h) : r;
  }, h.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? h : y;
  }, h.clickDistance = function(y) {
    return arguments.length ? (f = (y = +y) * y, h) : Math.sqrt(f);
  }, h;
}
function te(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Mr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Bt() {
}
var kt = 0.7, en = 1 / kt, mt = "\\s*([+-]?\\d+)\\s*", Ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", pa = /^#([0-9a-f]{3,8})$/, da = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), ga = new RegExp(`^rgb\\(${U},${U},${U}\\)$`), ya = new RegExp(`^rgba\\(${mt},${mt},${mt},${Ot}\\)$`), _a = new RegExp(`^rgba\\(${U},${U},${U},${Ot}\\)$`), ma = new RegExp(`^hsl\\(${Ot},${U},${U}\\)$`), va = new RegExp(`^hsla\\(${Ot},${U},${U},${Ot}\\)$`), xe = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
te(Bt, ct, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: be,
  // Deprecated! Use color.formatHex.
  formatHex: be,
  formatHex8: wa,
  formatHsl: xa,
  formatRgb: Me,
  toString: Me
});
function be() {
  return this.rgb().formatHex();
}
function wa() {
  return this.rgb().formatHex8();
}
function xa() {
  return Ar(this).formatHsl();
}
function Me() {
  return this.rgb().formatRgb();
}
function ct(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = pa.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ae(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Ut(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Ut(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = da.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = ga.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ya.exec(t)) ? Ut(n[1], n[2], n[3], n[4]) : (n = _a.exec(t)) ? Ut(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ma.exec(t)) ? Se(n[1], n[2] / 100, n[3] / 100, 1) : (n = va.exec(t)) ? Se(n[1], n[2] / 100, n[3] / 100, n[4]) : xe.hasOwnProperty(t) ? Ae(xe[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function Ae(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ut(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new O(t, n, e, r);
}
function ba(t) {
  return t instanceof Bt || (t = ct(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function kn(t, n, e, r) {
  return arguments.length === 1 ? ba(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
te(O, kn, Mr(Bt, {
  brighter(t) {
    return t = t == null ? en : Math.pow(en, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? kt : Math.pow(kt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(lt(this.r), lt(this.g), lt(this.b), rn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: $e,
  // Deprecated! Use color.formatHex.
  formatHex: $e,
  formatHex8: Ma,
  formatRgb: Te,
  toString: Te
}));
function $e() {
  return `#${st(this.r)}${st(this.g)}${st(this.b)}`;
}
function Ma() {
  return `#${st(this.r)}${st(this.g)}${st(this.b)}${st((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Te() {
  const t = rn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${lt(this.r)}, ${lt(this.g)}, ${lt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function rn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function lt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function st(t) {
  return t = lt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Se(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new q(t, n, e, r);
}
function Ar(t) {
  if (t instanceof q) return new q(t.h, t.s, t.l, t.opacity);
  if (t instanceof Bt || (t = ct(t)), !t) return new q();
  if (t instanceof q) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new q(a, s, u, t.opacity);
}
function Aa(t, n, e, r) {
  return arguments.length === 1 ? Ar(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
te(q, Aa, Mr(Bt, {
  brighter(t) {
    return t = t == null ? en : Math.pow(en, t), new q(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? kt : Math.pow(kt, t), new q(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new O(
      bn(t >= 240 ? t - 240 : t + 120, i, r),
      bn(t, i, r),
      bn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new q(Ee(this.h), Yt(this.s), Yt(this.l), rn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = rn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ee(this.h)}, ${Yt(this.s) * 100}%, ${Yt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ee(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Yt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function bn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ne = (t) => () => t;
function $a(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Ta(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Sa(t) {
  return (t = +t) == 1 ? $r : function(n, e) {
    return e - n ? Ta(n, e, t) : ne(isNaN(n) ? e : n);
  };
}
function $r(t, n) {
  var e = n - t;
  return e ? $a(t, e) : ne(isNaN(t) ? n : t);
}
const on = function t(n) {
  var e = Sa(n);
  function r(i, o) {
    var a = e((i = kn(i)).r, (o = kn(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = $r(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ea(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Pa(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Na(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ee(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function za(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function L(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Ia(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ee(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var On = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Mn = new RegExp(On.source, "g");
function ka(t) {
  return function() {
    return t;
  };
}
function Oa(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Tr(t, n) {
  var e = On.lastIndex = Mn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = On.exec(t)) && (i = Mn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: L(r, i) })), e = Mn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Oa(u[0].x) : ka(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function ee(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ne(n) : (e === "number" ? L : e === "string" ? (r = ct(n)) ? (n = r, on) : Tr : n instanceof ct ? on : n instanceof Date ? za : Pa(n) ? Ea : Array.isArray(n) ? Na : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Ia : L)(t, n);
}
function Ca(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Pe = 180 / Math.PI, Cn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Sr(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Pe,
    skewX: Math.atan(u) * Pe,
    scaleX: a,
    scaleY: s
  };
}
var Kt;
function Ra(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Cn : Sr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Fa(t) {
  return t == null || (Kt || (Kt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kt.setAttribute("transform", t), !(t = Kt.transform.baseVal.consolidate())) ? Cn : (t = t.matrix, Sr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Er(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, g, p) {
    if (l !== f || c !== h) {
      var d = g.push("translate(", null, n, null, e);
      p.push({ i: d - 4, x: L(l, f) }, { i: d - 2, x: L(c, h) });
    } else (f || h) && g.push("translate(" + f + n + h + e);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: L(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: L(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, g, p) {
    if (l !== f || c !== h) {
      var d = g.push(i(g) + "scale(", null, ",", null, ")");
      p.push({ i: d - 4, x: L(l, f) }, { i: d - 2, x: L(c, h) });
    } else (f !== 1 || h !== 1) && g.push(i(g) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(g) {
      for (var p = -1, d = h.length, w; ++p < d; ) f[(w = h[p]).i] = w.x(g);
      return f.join("");
    };
  };
}
var Da = Er(Ra, "px, ", "px)", "deg)"), La = Er(Fa, ", ", ")", ")"), wt = 0, Et = 0, Tt = 0, Pr = 1e3, an, Pt, sn = 0, ft = 0, pn = 0, Ct = typeof performance == "object" && performance.now ? performance : Date, Nr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function re() {
  return ft || (Nr(qa), ft = Ct.now() + pn);
}
function qa() {
  ft = 0;
}
function un() {
  this._call = this._time = this._next = null;
}
un.prototype = zr.prototype = {
  constructor: un,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? re() : +e) + (n == null ? 0 : +n), !this._next && Pt !== this && (Pt ? Pt._next = this : an = this, Pt = this), this._call = t, this._time = e, Rn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Rn());
  }
};
function zr(t, n, e) {
  var r = new un();
  return r.restart(t, n, e), r;
}
function Ba() {
  re(), ++wt;
  for (var t = an, n; t; )
    (n = ft - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --wt;
}
function Ne() {
  ft = (sn = Ct.now()) + pn, wt = Et = 0;
  try {
    Ba();
  } finally {
    wt = 0, Xa(), ft = 0;
  }
}
function Ha() {
  var t = Ct.now(), n = t - sn;
  n > Pr && (pn -= n, sn = t);
}
function Xa() {
  for (var t, n = an, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : an = e);
  Pt = t, Rn(r);
}
function Rn(t) {
  if (!wt) {
    Et && (Et = clearTimeout(Et));
    var n = t - ft;
    n > 24 ? (t < 1 / 0 && (Et = setTimeout(Ne, t - Ct.now() - pn)), Tt && (Tt = clearInterval(Tt))) : (Tt || (sn = Ct.now(), Tt = setInterval(Ha, Pr)), wt = 1, Nr(Ne));
  }
}
function ze(t, n, e) {
  var r = new un();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Ga = Wn("start", "end", "cancel", "interrupt"), Ua = [], Ir = 0, Ie = 1, Fn = 2, Jt = 3, ke = 4, Dn = 5, Qt = 6;
function dn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Ya(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ga,
    tween: Ua,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ir
  });
}
function ie(t, n) {
  var e = B(t, n);
  if (e.state > Ir) throw new Error("too late; already scheduled");
  return e;
}
function K(t, n) {
  var e = B(t, n);
  if (e.state > Jt) throw new Error("too late; already running");
  return e;
}
function B(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ya(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = zr(o, 0, e.time);
  function o(l) {
    e.state = Ie, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var c, f, h, g;
    if (e.state !== Ie) return u();
    for (c in r)
      if (g = r[c], g.name === e.name) {
        if (g.state === Jt) return ze(a);
        g.state === ke ? (g.state = Qt, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[c]) : +c < n && (g.state = Qt, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[c]);
      }
    if (ze(function() {
      e.state === Jt && (e.state = ke, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = Fn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Fn) {
      for (e.state = Jt, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (g = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = g);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = Dn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === Dn && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = Qt, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Ka(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Fn && r.state < Dn, r.state = Qt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Va(t) {
  return this.each(function() {
    Ka(this, t);
  });
}
function ja(t, n) {
  var e, r;
  return function() {
    var i = K(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Za(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = K(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function Wa(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = B(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? ja : Za)(e, t, n));
}
function oe(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return B(i, r).value[n];
  };
}
function kr(t, n) {
  var e;
  return (typeof n == "number" ? L : n instanceof ct ? on : (e = ct(n)) ? (n = e, on) : Tr)(t, n);
}
function Ja(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Qa(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ts(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ns(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function es(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function rs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function is(t, n) {
  var e = hn(t), r = e === "transform" ? La : kr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? rs : es)(e, r, oe(this, "attr." + t, n)) : n == null ? (e.local ? Qa : Ja)(e) : (e.local ? ns : ts)(e, r, n));
}
function os(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function as(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function ss(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && as(t, o)), e;
  }
  return i._value = n, i;
}
function us(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && os(t, o)), e;
  }
  return i._value = n, i;
}
function ls(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = hn(t);
  return this.tween(e, (r.local ? ss : us)(r, n));
}
function cs(t, n) {
  return function() {
    ie(this, t).delay = +n.apply(this, arguments);
  };
}
function fs(t, n) {
  return n = +n, function() {
    ie(this, t).delay = n;
  };
}
function hs(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? cs : fs)(n, t)) : B(this.node(), n).delay;
}
function ps(t, n) {
  return function() {
    K(this, t).duration = +n.apply(this, arguments);
  };
}
function ds(t, n) {
  return n = +n, function() {
    K(this, t).duration = n;
  };
}
function gs(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ps : ds)(n, t)) : B(this.node(), n).duration;
}
function ys(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    K(this, t).ease = n;
  };
}
function _s(t) {
  var n = this._id;
  return arguments.length ? this.each(ys(n, t)) : B(this.node(), n).ease;
}
function ms(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, t).ease = e;
  };
}
function vs(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ms(this._id, t));
}
function ws(t) {
  typeof t != "function" && (t = pr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new W(r, this._parents, this._name, this._id);
}
function xs(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], c = u.length, f = a[s] = new Array(c), h, g = 0; g < c; ++g)
      (h = u[g] || l[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new W(a, this._parents, this._name, this._id);
}
function bs(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ms(t, n, e) {
  var r, i, o = bs(n) ? ie : K;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function As(t, n) {
  var e = this._id;
  return arguments.length < 2 ? B(this.node(), e).on.on(t) : this.each(Ms(e, t, n));
}
function $s(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Ts() {
  return this.on("end.remove", $s(this._id));
}
function Ss(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Jn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, dn(l[h], n, e, h, l, B(c, e)));
  return new W(o, this._parents, n, e);
}
function Es(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = hr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), g, p = B(c, e), d = 0, w = h.length; d < w; ++d)
          (g = h[d]) && dn(g, n, e, d, h, p);
        o.push(h), a.push(c);
      }
  return new W(o, a, n, e);
}
var Ps = qt.prototype.constructor;
function Ns() {
  return new Ps(this._groups, this._parents);
}
function zs(t, n) {
  var e, r, i;
  return function() {
    var o = vt(this, t), a = (this.style.removeProperty(t), vt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Or(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Is(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = vt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ks(t, n, e) {
  var r, i, o;
  return function() {
    var a = vt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), vt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function Os(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = K(this, t), l = u.on, c = u.value[o] == null ? s || (s = Or(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(a, i = c), u.on = r;
  };
}
function Cs(t, n, e) {
  var r = (t += "") == "transform" ? Da : kr;
  return n == null ? this.styleTween(t, zs(t, r)).on("end.style." + t, Or(t)) : typeof n == "function" ? this.styleTween(t, ks(t, r, oe(this, "style." + t, n))).each(Os(this._id, t)) : this.styleTween(t, Is(t, r, n), e).on("end.style." + t, null);
}
function Rs(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Fs(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Rs(t, a, e)), r;
  }
  return o._value = n, o;
}
function Ds(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Fs(t, n, e ?? ""));
}
function Ls(t) {
  return function() {
    this.textContent = t;
  };
}
function qs(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Bs(t) {
  return this.tween("text", typeof t == "function" ? qs(oe(this, "text", t)) : Ls(t == null ? "" : t + ""));
}
function Hs(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Xs(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Hs(i)), n;
  }
  return r._value = t, r;
}
function Gs(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Xs(t));
}
function Us() {
  for (var t = this._name, n = this._id, e = Cr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = B(u, n);
        dn(u, t, e, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new W(r, this._parents, t, e);
}
function Ys() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = K(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var Ks = 0;
function W(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Cr() {
  return ++Ks;
}
var j = qt.prototype;
W.prototype = {
  constructor: W,
  select: Ss,
  selectAll: Es,
  selectChild: j.selectChild,
  selectChildren: j.selectChildren,
  filter: ws,
  merge: xs,
  selection: Ns,
  transition: Us,
  call: j.call,
  nodes: j.nodes,
  node: j.node,
  size: j.size,
  empty: j.empty,
  each: j.each,
  on: As,
  attr: is,
  attrTween: ls,
  style: Cs,
  styleTween: Ds,
  text: Bs,
  textTween: Gs,
  remove: Ts,
  tween: Wa,
  delay: hs,
  duration: gs,
  ease: _s,
  easeVarying: vs,
  end: Ys,
  [Symbol.iterator]: j[Symbol.iterator]
};
function Vs(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var js = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Vs
};
function Zs(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ws(t) {
  var n, e;
  t instanceof W ? (n = t._id, t = t._name) : (n = Cr(), (e = js).time = re(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && dn(u, t, n, l, a, e || Zs(u, n));
  return new W(r, this._parents, t, n);
}
qt.prototype.interrupt = Va;
qt.prototype.transition = Ws;
const Ln = Math.PI, qn = 2 * Ln, ot = 1e-6, Js = qn - ot;
function Rr(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Qs(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Rr;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ae {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Rr : Qs(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, c = a - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > ot) if (!(Math.abs(f * u - l * c) > ot) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let g = r - a, p = i - s, d = u * u + l * l, w = g * g + p * p, x = Math.sqrt(d), M = Math.sqrt(h), A = o * Math.tan((Ln - Math.acos((d + h - w) / (2 * x * M))) / 2), y = A / M, m = A / x;
      Math.abs(y - 1) > ot && this._append`L${n + y * c},${e + y * f}`, this._append`A${o},${o},0,0,${+(f * g > c * p)},${this._x1 = n + m * u},${this._y1 = e + m * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ot || Math.abs(this._y1 - c) > ot) && this._append`L${l},${c}`, r && (h < 0 && (h = h % qn + qn), h > Js ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ot && this._append`A${r},${r},0,${+(h >= Ln)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function H() {
  return new ae();
}
H.prototype = ae.prototype;
function tu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ln(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function xt(t) {
  return t = ln(Math.abs(t)), t ? t[1] : NaN;
}
function nu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function eu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var ru = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function cn(t) {
  if (!(n = ru.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new se({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
cn.prototype = se.prototype;
function se(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
se.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function iu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Fr;
function ou(t, n) {
  var e = ln(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Fr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + ln(t, Math.max(0, n + o - 1))[0];
}
function Oe(t, n) {
  var e = ln(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ce = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: tu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Oe(t * 100, n),
  r: Oe,
  s: ou,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Re(t) {
  return t;
}
var Fe = Array.prototype.map, De = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function au(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Re : nu(Fe.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Re : eu(Fe.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = cn(f);
    var h = f.fill, g = f.align, p = f.sign, d = f.symbol, w = f.zero, x = f.width, M = f.comma, A = f.precision, y = f.trim, m = f.type;
    m === "n" ? (M = !0, m = "g") : Ce[m] || (A === void 0 && (A = 12), y = !0, m = "g"), (w || h === "0" && g === "=") && (w = !0, h = "0", g = "=");
    var S = d === "$" ? e : d === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", E = d === "$" ? r : /[%p]/.test(m) ? a : "", I = Ce[m], X = /[defgprs%]/.test(m);
    A = A === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function V(v) {
      var G = S, k = E, D, Ht, et;
      if (m === "c")
        k = I(v) + k, v = "";
      else {
        v = +v;
        var it = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? u : I(Math.abs(v), A), y && (v = iu(v)), it && +v == 0 && p !== "+" && (it = !1), G = (it ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + G, k = (m === "s" ? De[8 + Fr / 3] : "") + k + (it && p === "(" ? ")" : ""), X) {
          for (D = -1, Ht = v.length; ++D < Ht; )
            if (et = v.charCodeAt(D), 48 > et || et > 57) {
              k = (et === 46 ? i + v.slice(D + 1) : v.slice(D)) + k, v = v.slice(0, D);
              break;
            }
        }
      }
      M && !w && (v = n(v, 1 / 0));
      var dt = G.length + v.length + k.length, R = dt < x ? new Array(x - dt + 1).join(h) : "";
      switch (M && w && (v = n(R + v, R.length ? x - k.length : 1 / 0), R = ""), g) {
        case "<":
          v = G + v + k + R;
          break;
        case "=":
          v = G + R + v + k;
          break;
        case "^":
          v = R.slice(0, dt = R.length >> 1) + G + v + k + R.slice(dt);
          break;
        default:
          v = R + G + v + k;
          break;
      }
      return o(v);
    }
    return V.toString = function() {
      return f + "";
    }, V;
  }
  function c(f, h) {
    var g = l((f = cn(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(xt(h) / 3))) * 3, d = Math.pow(10, -p), w = De[8 + p / 3];
    return function(x) {
      return g(d * x) + w;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var Vt, ue, Dr;
su({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function su(t) {
  return Vt = au(t), ue = Vt.format, Dr = Vt.formatPrefix, Vt;
}
function uu(t) {
  return Math.max(0, -xt(Math.abs(t)));
}
function lu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(xt(n) / 3))) * 3 - xt(Math.abs(t)));
}
function cu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, xt(n) - xt(t)) + 1;
}
function fu(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function hu(t) {
  return function() {
    return t;
  };
}
function pu(t) {
  return +t;
}
var Le = [0, 1];
function yt(t) {
  return t;
}
function Bn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : hu(isNaN(n) ? NaN : 0.5);
}
function du(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function gu(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Bn(i, r), o = e(a, o)) : (r = Bn(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function yu(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Bn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = gi(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function _u(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function mu() {
  var t = Le, n = Le, e = ee, r, i, o, a = yt, s, u, l;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== yt && (a = du(t[0], t[h - 1])), s = h > 2 ? yu : gu, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), L)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, pu), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = Ca, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : yt, c()) : a !== yt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return r = h, i = g, c();
  };
}
function vu() {
  return mu()(yt, yt);
}
function wu(t, n, e, r) {
  var i = wi(t, n, e), o;
  switch (r = cn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = lu(i, a)) && (r.precision = o), Dr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = cu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = uu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return ue(r);
}
function xu(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return vi(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return wu(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = Pn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function J() {
  var t = vu();
  return t.copy = function() {
    return _u(t, J());
  }, fu.apply(t, arguments), xu(t);
}
function gt(t) {
  return function() {
    return t;
  };
}
function bu(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new ae(n);
}
function Mu(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Lr(t) {
  this._context = t;
}
Lr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Au(t) {
  return new Lr(t);
}
function $u(t) {
  return t[0];
}
function Tu(t) {
  return t[1];
}
function Su(t, n) {
  var e = gt(!0), r = null, i = Au, o = null, a = bu(s);
  t = typeof t == "function" ? t : t === void 0 ? $u : gt(t), n = typeof n == "function" ? n : n === void 0 ? Tu : gt(n);
  function s(u) {
    var l, c = (u = Mu(u)).length, f, h = !1, g;
    for (r == null && (o = i(g = a())), l = 0; l <= c; ++l)
      !(l < c && e(f = u[l], l, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(f, l, u), +n(f, l, u));
    if (g) return o = null, g + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : gt(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : gt(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : gt(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), s) : r;
  }, s;
}
function Nt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Nt.prototype = {
  constructor: Nt,
  scale: function(t) {
    return t === 1 ? this : new Nt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Nt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Nt.prototype;
var qr = typeof global == "object" && global && global.Object === Object && global, Eu = typeof self == "object" && self && self.Object === Object && self, Q = qr || Eu || Function("return this")(), Y = Q.Symbol, Br = Object.prototype, Pu = Br.hasOwnProperty, Nu = Br.toString, St = Y ? Y.toStringTag : void 0;
function zu(t) {
  var n = Pu.call(t, St), e = t[St];
  try {
    t[St] = void 0;
    var r = !0;
  } catch {
  }
  var i = Nu.call(t);
  return r && (n ? t[St] = e : delete t[St]), i;
}
var Iu = Object.prototype, ku = Iu.toString;
function Ou(t) {
  return ku.call(t);
}
var Cu = "[object Null]", Ru = "[object Undefined]", qe = Y ? Y.toStringTag : void 0;
function At(t) {
  return t == null ? t === void 0 ? Ru : Cu : qe && qe in Object(t) ? zu(t) : Ou(t);
}
function bt(t) {
  return t != null && typeof t == "object";
}
var Fu = "[object Symbol]";
function gn(t) {
  return typeof t == "symbol" || bt(t) && At(t) == Fu;
}
function Hr(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var F = Array.isArray, Be = Y ? Y.prototype : void 0, He = Be ? Be.toString : void 0;
function Xr(t) {
  if (typeof t == "string")
    return t;
  if (F(t))
    return Hr(t, Xr) + "";
  if (gn(t))
    return He ? He.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var Du = /\s/;
function Lu(t) {
  for (var n = t.length; n-- && Du.test(t.charAt(n)); )
    ;
  return n;
}
var qu = /^\s+/;
function Bu(t) {
  return t && t.slice(0, Lu(t) + 1).replace(qu, "");
}
function Mt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Xe = NaN, Hu = /^[-+]0x[0-9a-f]+$/i, Xu = /^0b[01]+$/i, Gu = /^0o[0-7]+$/i, Uu = parseInt;
function Yu(t) {
  if (typeof t == "number")
    return t;
  if (gn(t))
    return Xe;
  if (Mt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Mt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Bu(t);
  var e = Xu.test(t);
  return e || Gu.test(t) ? Uu(t.slice(2), e ? 2 : 8) : Hu.test(t) ? Xe : +t;
}
var Ku = 1 / 0, Vu = 17976931348623157e292;
function An(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Yu(t), t === Ku || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Vu;
  }
  return t === t ? t : 0;
}
function Gr(t) {
  return t;
}
var ju = "[object AsyncFunction]", Zu = "[object Function]", Wu = "[object GeneratorFunction]", Ju = "[object Proxy]";
function Ur(t) {
  if (!Mt(t))
    return !1;
  var n = At(t);
  return n == Zu || n == Wu || n == ju || n == Ju;
}
var $n = Q["__core-js_shared__"], Ge = function() {
  var t = /[^.]+$/.exec($n && $n.keys && $n.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Qu(t) {
  return !!Ge && Ge in t;
}
var tl = Function.prototype, nl = tl.toString;
function pt(t) {
  if (t != null) {
    try {
      return nl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var el = /[\\^$.*+?()[\]{}|]/g, rl = /^\[object .+?Constructor\]$/, il = Function.prototype, ol = Object.prototype, al = il.toString, sl = ol.hasOwnProperty, ul = RegExp(
  "^" + al.call(sl).replace(el, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ll(t) {
  if (!Mt(t) || Qu(t))
    return !1;
  var n = Ur(t) ? ul : rl;
  return n.test(pt(t));
}
function cl(t, n) {
  return t == null ? void 0 : t[n];
}
function $t(t, n) {
  var e = cl(t, n);
  return ll(e) ? e : void 0;
}
var Hn = $t(Q, "WeakMap");
function fl(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var hl = 9007199254740991, pl = /^(?:0|[1-9]\d*)$/;
function le(t, n) {
  var e = typeof t;
  return n = n ?? hl, !!n && (e == "number" || e != "symbol" && pl.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function ce(t, n) {
  return t === n || t !== t && n !== n;
}
var dl = 9007199254740991;
function fe(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= dl;
}
function yn(t) {
  return t != null && fe(t.length) && !Ur(t);
}
function gl(t, n, e) {
  if (!Mt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? yn(e) && le(n, e.length) : r == "string" && n in e) ? ce(e[n], t) : !1;
}
var yl = Object.prototype;
function _l(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || yl;
  return t === e;
}
function ml(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var vl = "[object Arguments]";
function Ue(t) {
  return bt(t) && At(t) == vl;
}
var Yr = Object.prototype, wl = Yr.hasOwnProperty, xl = Yr.propertyIsEnumerable, he = Ue(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ue : function(t) {
  return bt(t) && wl.call(t, "callee") && !xl.call(t, "callee");
};
function bl() {
  return !1;
}
var Kr = typeof exports == "object" && exports && !exports.nodeType && exports, Ye = Kr && typeof module == "object" && module && !module.nodeType && module, Ml = Ye && Ye.exports === Kr, Ke = Ml ? Q.Buffer : void 0, Al = Ke ? Ke.isBuffer : void 0, Xn = Al || bl, $l = "[object Arguments]", Tl = "[object Array]", Sl = "[object Boolean]", El = "[object Date]", Pl = "[object Error]", Nl = "[object Function]", zl = "[object Map]", Il = "[object Number]", kl = "[object Object]", Ol = "[object RegExp]", Cl = "[object Set]", Rl = "[object String]", Fl = "[object WeakMap]", Dl = "[object ArrayBuffer]", Ll = "[object DataView]", ql = "[object Float32Array]", Bl = "[object Float64Array]", Hl = "[object Int8Array]", Xl = "[object Int16Array]", Gl = "[object Int32Array]", Ul = "[object Uint8Array]", Yl = "[object Uint8ClampedArray]", Kl = "[object Uint16Array]", Vl = "[object Uint32Array]", b = {};
b[ql] = b[Bl] = b[Hl] = b[Xl] = b[Gl] = b[Ul] = b[Yl] = b[Kl] = b[Vl] = !0;
b[$l] = b[Tl] = b[Dl] = b[Sl] = b[Ll] = b[El] = b[Pl] = b[Nl] = b[zl] = b[Il] = b[kl] = b[Ol] = b[Cl] = b[Rl] = b[Fl] = !1;
function jl(t) {
  return bt(t) && fe(t.length) && !!b[At(t)];
}
function Zl(t) {
  return function(n) {
    return t(n);
  };
}
var Vr = typeof exports == "object" && exports && !exports.nodeType && exports, zt = Vr && typeof module == "object" && module && !module.nodeType && module, Wl = zt && zt.exports === Vr, Tn = Wl && qr.process, Ve = function() {
  try {
    var t = zt && zt.require && zt.require("util").types;
    return t || Tn && Tn.binding && Tn.binding("util");
  } catch {
  }
}(), je = Ve && Ve.isTypedArray, jr = je ? Zl(je) : jl, Jl = Object.prototype, Ql = Jl.hasOwnProperty;
function tc(t, n) {
  var e = F(t), r = !e && he(t), i = !e && !r && Xn(t), o = !e && !r && !i && jr(t), a = e || r || i || o, s = a ? ml(t.length, String) : [], u = s.length;
  for (var l in t)
    Ql.call(t, l) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    le(l, u))) && s.push(l);
  return s;
}
function nc(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var ec = nc(Object.keys, Object), rc = Object.prototype, ic = rc.hasOwnProperty;
function oc(t) {
  if (!_l(t))
    return ec(t);
  var n = [];
  for (var e in Object(t))
    ic.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function pe(t) {
  return yn(t) ? tc(t) : oc(t);
}
var ac = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sc = /^\w*$/;
function de(t, n) {
  if (F(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || gn(t) ? !0 : sc.test(t) || !ac.test(t) || n != null && t in Object(n);
}
var Rt = $t(Object, "create");
function uc() {
  this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
}
function lc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var cc = "__lodash_hash_undefined__", fc = Object.prototype, hc = fc.hasOwnProperty;
function pc(t) {
  var n = this.__data__;
  if (Rt) {
    var e = n[t];
    return e === cc ? void 0 : e;
  }
  return hc.call(n, t) ? n[t] : void 0;
}
var dc = Object.prototype, gc = dc.hasOwnProperty;
function yc(t) {
  var n = this.__data__;
  return Rt ? n[t] !== void 0 : gc.call(n, t);
}
var _c = "__lodash_hash_undefined__";
function mc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Rt && n === void 0 ? _c : n, this;
}
function ht(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ht.prototype.clear = uc;
ht.prototype.delete = lc;
ht.prototype.get = pc;
ht.prototype.has = yc;
ht.prototype.set = mc;
function vc() {
  this.__data__ = [], this.size = 0;
}
function _n(t, n) {
  for (var e = t.length; e--; )
    if (ce(t[e][0], n))
      return e;
  return -1;
}
var wc = Array.prototype, xc = wc.splice;
function bc(t) {
  var n = this.__data__, e = _n(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : xc.call(n, e, 1), --this.size, !0;
}
function Mc(t) {
  var n = this.__data__, e = _n(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Ac(t) {
  return _n(this.__data__, t) > -1;
}
function $c(t, n) {
  var e = this.__data__, r = _n(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function tt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
tt.prototype.clear = vc;
tt.prototype.delete = bc;
tt.prototype.get = Mc;
tt.prototype.has = Ac;
tt.prototype.set = $c;
var Ft = $t(Q, "Map");
function Tc() {
  this.size = 0, this.__data__ = {
    hash: new ht(),
    map: new (Ft || tt)(),
    string: new ht()
  };
}
function Sc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function mn(t, n) {
  var e = t.__data__;
  return Sc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Ec(t) {
  var n = mn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Pc(t) {
  return mn(this, t).get(t);
}
function Nc(t) {
  return mn(this, t).has(t);
}
function zc(t, n) {
  var e = mn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function nt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
nt.prototype.clear = Tc;
nt.prototype.delete = Ec;
nt.prototype.get = Pc;
nt.prototype.has = Nc;
nt.prototype.set = zc;
var Ic = "Expected a function";
function ge(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Ic);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (ge.Cache || nt)(), e;
}
ge.Cache = nt;
var kc = 500;
function Oc(t) {
  var n = ge(t, function(r) {
    return e.size === kc && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Cc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rc = /\\(\\)?/g, Fc = Oc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Cc, function(e, r, i, o) {
    n.push(i ? o.replace(Rc, "$1") : r || e);
  }), n;
});
function Dc(t) {
  return t == null ? "" : Xr(t);
}
function Zr(t, n) {
  return F(t) ? t : de(t, n) ? [t] : Fc(Dc(t));
}
function vn(t) {
  if (typeof t == "string" || gn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Wr(t, n) {
  n = Zr(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[vn(n[e++])];
  return e && e == r ? t : void 0;
}
function Lc(t, n, e) {
  var r = t == null ? void 0 : Wr(t, n);
  return r === void 0 ? e : r;
}
function Jr(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Ze = Y ? Y.isConcatSpreadable : void 0;
function qc(t) {
  return F(t) || he(t) || !!(Ze && t && t[Ze]);
}
function Bc(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = qc), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Jr(i, s) : i[i.length] = s;
  }
  return i;
}
function Hc(t) {
  var n = t == null ? 0 : t.length;
  return n ? Bc(t) : [];
}
function Xc() {
  this.__data__ = new tt(), this.size = 0;
}
function Gc(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Uc(t) {
  return this.__data__.get(t);
}
function Yc(t) {
  return this.__data__.has(t);
}
var Kc = 200;
function Vc(t, n) {
  var e = this.__data__;
  if (e instanceof tt) {
    var r = e.__data__;
    if (!Ft || r.length < Kc - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new nt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function Z(t) {
  var n = this.__data__ = new tt(t);
  this.size = n.size;
}
Z.prototype.clear = Xc;
Z.prototype.delete = Gc;
Z.prototype.get = Uc;
Z.prototype.has = Yc;
Z.prototype.set = Vc;
function jc(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Zc() {
  return [];
}
var Wc = Object.prototype, Jc = Wc.propertyIsEnumerable, We = Object.getOwnPropertySymbols, Qc = We ? function(t) {
  return t == null ? [] : (t = Object(t), jc(We(t), function(n) {
    return Jc.call(t, n);
  }));
} : Zc;
function tf(t, n, e) {
  var r = n(t);
  return F(t) ? r : Jr(r, e(t));
}
function Je(t) {
  return tf(t, pe, Qc);
}
var Gn = $t(Q, "DataView"), Un = $t(Q, "Promise"), Yn = $t(Q, "Set"), Qe = "[object Map]", nf = "[object Object]", tr = "[object Promise]", nr = "[object Set]", er = "[object WeakMap]", rr = "[object DataView]", ef = pt(Gn), rf = pt(Ft), of = pt(Un), af = pt(Yn), sf = pt(Hn), rt = At;
(Gn && rt(new Gn(new ArrayBuffer(1))) != rr || Ft && rt(new Ft()) != Qe || Un && rt(Un.resolve()) != tr || Yn && rt(new Yn()) != nr || Hn && rt(new Hn()) != er) && (rt = function(t) {
  var n = At(t), e = n == nf ? t.constructor : void 0, r = e ? pt(e) : "";
  if (r)
    switch (r) {
      case ef:
        return rr;
      case rf:
        return Qe;
      case of:
        return tr;
      case af:
        return nr;
      case sf:
        return er;
    }
  return n;
});
var ir = Q.Uint8Array, uf = "__lodash_hash_undefined__";
function lf(t) {
  return this.__data__.set(t, uf), this;
}
function cf(t) {
  return this.__data__.has(t);
}
function fn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new nt(); ++n < e; )
    this.add(t[n]);
}
fn.prototype.add = fn.prototype.push = lf;
fn.prototype.has = cf;
function ff(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function hf(t, n) {
  return t.has(n);
}
var pf = 1, df = 2;
function Qr(t, n, e, r, i, o) {
  var a = e & pf, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(n);
  if (l && c)
    return l == n && c == t;
  var f = -1, h = !0, g = e & df ? new fn() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var p = t[f], d = n[f];
    if (r)
      var w = a ? r(d, p, f, n, t, o) : r(p, d, f, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!ff(n, function(x, M) {
        if (!hf(g, M) && (p === x || i(p, x, e, r, o)))
          return g.push(M);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === d || i(p, d, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function gf(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function yf(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var _f = 1, mf = 2, vf = "[object Boolean]", wf = "[object Date]", xf = "[object Error]", bf = "[object Map]", Mf = "[object Number]", Af = "[object RegExp]", $f = "[object Set]", Tf = "[object String]", Sf = "[object Symbol]", Ef = "[object ArrayBuffer]", Pf = "[object DataView]", or = Y ? Y.prototype : void 0, Sn = or ? or.valueOf : void 0;
function Nf(t, n, e, r, i, o, a) {
  switch (e) {
    case Pf:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Ef:
      return !(t.byteLength != n.byteLength || !o(new ir(t), new ir(n)));
    case vf:
    case wf:
    case Mf:
      return ce(+t, +n);
    case xf:
      return t.name == n.name && t.message == n.message;
    case Af:
    case Tf:
      return t == n + "";
    case bf:
      var s = gf;
    case $f:
      var u = r & _f;
      if (s || (s = yf), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= mf, a.set(t, n);
      var c = Qr(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case Sf:
      if (Sn)
        return Sn.call(t) == Sn.call(n);
  }
  return !1;
}
var zf = 1, If = Object.prototype, kf = If.hasOwnProperty;
function Of(t, n, e, r, i, o) {
  var a = e & zf, s = Je(t), u = s.length, l = Je(n), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in n : kf.call(n, h)))
      return !1;
  }
  var g = o.get(t), p = o.get(n);
  if (g && p)
    return g == n && p == t;
  var d = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++f < u; ) {
    h = s[f];
    var x = t[h], M = n[h];
    if (r)
      var A = a ? r(M, x, h, n, t, o) : r(x, M, h, t, n, o);
    if (!(A === void 0 ? x === M || i(x, M, e, r, o) : A)) {
      d = !1;
      break;
    }
    w || (w = h == "constructor");
  }
  if (d && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (d = !1);
  }
  return o.delete(t), o.delete(n), d;
}
var Cf = 1, ar = "[object Arguments]", sr = "[object Array]", jt = "[object Object]", Rf = Object.prototype, ur = Rf.hasOwnProperty;
function Ff(t, n, e, r, i, o) {
  var a = F(t), s = F(n), u = a ? sr : rt(t), l = s ? sr : rt(n);
  u = u == ar ? jt : u, l = l == ar ? jt : l;
  var c = u == jt, f = l == jt, h = u == l;
  if (h && Xn(t)) {
    if (!Xn(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new Z()), a || jr(t) ? Qr(t, n, e, r, i, o) : Nf(t, n, u, e, r, i, o);
  if (!(e & Cf)) {
    var g = c && ur.call(t, "__wrapped__"), p = f && ur.call(n, "__wrapped__");
    if (g || p) {
      var d = g ? t.value() : t, w = p ? n.value() : n;
      return o || (o = new Z()), i(d, w, e, r, o);
    }
  }
  return h ? (o || (o = new Z()), Of(t, n, e, r, i, o)) : !1;
}
function ye(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !bt(t) && !bt(n) ? t !== t && n !== n : Ff(t, n, e, r, ye, i);
}
var Df = 1, Lf = 2;
function qf(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new Z(), f;
      if (!(f === void 0 ? ye(l, u, Df | Lf, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function ti(t) {
  return t === t && !Mt(t);
}
function Bf(t) {
  for (var n = pe(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ti(i)];
  }
  return n;
}
function ni(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Hf(t) {
  var n = Bf(t);
  return n.length == 1 && n[0][2] ? ni(n[0][0], n[0][1]) : function(e) {
    return e === t || qf(e, t, n);
  };
}
function Xf(t, n) {
  return t != null && n in Object(t);
}
function Gf(t, n, e) {
  n = Zr(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = vn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && fe(i) && le(a, i) && (F(t) || he(t)));
}
function Uf(t, n) {
  return t != null && Gf(t, n, Xf);
}
var Yf = 1, Kf = 2;
function Vf(t, n) {
  return de(t) && ti(n) ? ni(vn(t), n) : function(e) {
    var r = Lc(e, t);
    return r === void 0 && r === n ? Uf(e, t) : ye(n, r, Yf | Kf);
  };
}
function jf(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function Zf(t) {
  return function(n) {
    return Wr(n, t);
  };
}
function Wf(t) {
  return de(t) ? jf(vn(t)) : Zf(t);
}
function Jf(t) {
  return typeof t == "function" ? t : t == null ? Gr : typeof t == "object" ? F(t) ? Vf(t[0], t[1]) : Hf(t) : Wf(t);
}
function Qf(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var th = Qf();
function nh(t, n) {
  return t && th(t, n, pe);
}
function eh(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!yn(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var ei = eh(nh);
function rh(t) {
  return typeof t == "function" ? t : Gr;
}
function ih(t, n) {
  var e = F(t) ? fl : ei;
  return e(t, rh(n));
}
function oh(t, n) {
  var e = -1, r = yn(t) ? Array(t.length) : [];
  return ei(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Kn(t, n) {
  var e = F(t) ? Hr : oh;
  return e(t, Jf(n));
}
var ah = Math.ceil, sh = Math.max;
function uh(t, n, e, r) {
  for (var i = -1, o = sh(ah((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function lh(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && gl(n, e, r) && (e = r = void 0), n = An(n), e === void 0 ? (e = n, n = 0) : e = An(e), r = r === void 0 ? n < e ? 1 : -1 : An(r), uh(n, e, r);
  };
}
var ri = lh();
const ch = (t, n, e = 12, r = 12) => {
  const i = J().domain([0, e]).range([0, t]), o = J().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return ri((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = Hc(Kn(l, function(f) {
        return Kn(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, fh = "_widget_18g36_1", hh = "_label_18g36_19", ph = "_lit_18g36_24", dh = "_button_18g36_29", gh = "_symbol_18g36_29", yh = "_radio_18g36_29", _h = "_radiobutton_18g36_29", mh = "_selected_18g36_35", vh = "_toggle_18g36_35", wh = "_slider_18g36_44", xh = "_track_18g36_44", bh = "_track_overlay_18g36_48", Mh = "_handle_18g36_55", _ = {
  widget: fh,
  label: hh,
  lit: ph,
  button: dh,
  symbol: gh,
  radio: yh,
  radiobutton: _h,
  selected: mh,
  toggle: vh,
  slider: wh,
  track: xh,
  track_overlay: bh,
  handle: Mh
}, ii = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, _e = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, Ah = (t = 1) => {
  const n = H();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, $h = (t = 1) => {
  const n = H(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Th = (t = 1) => {
  const n = H();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Sh = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = H();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Eh = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Ph = (t = 1) => {
  const n = H(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Nh = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, zh = (t = 1) => {
  var n = H(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Ih = (t = 1) => {
  const n = H(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Vn = (t) => {
  switch (t) {
    case "play":
      return Ah;
    case "forward":
      return $h;
    case "back":
      return Th;
    case "pause":
      return Sh;
    case "reload":
      return Eh;
    case "capture":
      return Ph;
    case "rewind":
      return Nh;
    case "stop":
      return zh;
    case "push":
      return Ih;
  }
}, oi = () => {
  const t = "button";
  var n = ii(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(p) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return l = p, this;
      l(p);
    },
    actions: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), T(this.parentNode).select("." + _.symbol).attr("d", Vn(c[f])(r * e));
    },
    press: function(p) {
      f = (f + 1) % c.length, l(), p.select("#button_" + n).select("." + _.symbol).attr("d", Vn(c[f])(r * e));
    }
  };
}, kh = () => {
  const t = "radio";
  var n = ii(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, c = function(d) {
  }, f = [], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    buttonsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    buttonpadding: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    orientation: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? s.x : (s.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? s.y : (s.y = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return c = d, this;
      c(d);
    },
    choices: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function(d, w) {
      h = w, T(this.parentNode).selectAll("." + _.symbol).classed(_.selected, (x) => x == h), c();
    },
    reset: function(d, w) {
      h = w, d.select("#radio_" + n).selectAll("." + _.symbol).classed(_.selected, (x) => x == h), c();
    }
  };
}, Oh = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = T(o).attr("class", _.widget + " " + _.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", _.background).on("click", t.click).on("mouseover", function() {
    T(this).classed(_.lit, !0), T(this.parentNode).select("." + _.symbol).classed(_.lit, !0);
  }).on("mouseout", function() {
    T(this).classed(_.lit, !1), T(this.parentNode).select("." + _.symbol).classed(_.lit, !1);
  }), a.append("path").attr("d", Vn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", _.symbol), r) {
    const u = _e(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", _.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, ai = (t, n) => {
  const e = H();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, Ch = (t, n) => {
  const e = ue(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = T(u).attr("class", _.widget + " " + _.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", ai(t.size(), t.girth())).attr("class", _.track), s.append("circle").attr("class", _.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", _.track_overlay).on("click", function(p) {
    const d = zn(p, this)[0];
    t.value(a.invert(d)), t.update(), t.update_end(), s.selectAll("." + _.handle).attr("cx", a(t.value())), t.show() && s.select("." + _.label).text(t.label() + " = " + e(t.value()));
  }).call(
    ha().on("drag", function(p) {
      t.value(a.invert(p.x)), t.update(), s.selectAll("." + _.handle).attr("cx", a(t.value())), t.show() && s.select("." + _.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var c, f, h, g = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Xt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Xt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Xt([t.girth() / 2, t.knob()]) + 7 : -Xt([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", _.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, Rh = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = T(a).attr("class", _.widget + " " + _.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(_.selected, t.value() == 1);
  if (s.append("path").attr("d", ai(2 * t.size(), 2 * t.size())).attr("class", _.track), s.append("circle").attr("class", _.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", _.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = _e(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", _.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, Fh = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = xi(a), u = J().domain([0, a - 1]).range([0, t.size()]), l = J().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = T(c).attr("class", _.widget + " " + _.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + _.radiobutton).data(s).enter().append("g").attr("class", _.radiobutton).attr("id", (w) => "b" + w).attr("transform", (w) => t.orientation() == "vertical" ? "translate(0," + l(w) + ")" : "translate(" + u(w) + ",0)");
  var g, p;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), g.attr("class", _.background).on("mouseover", function() {
    T(this).classed(_.lit, !0), T(this.parentNode).select("." + _.symbol).classed(_.lit, !0);
  }).on("mouseout", function() {
    T(this).classed(_.lit, !1), T(this.parentNode).select("." + _.symbol).classed(_.lit, !1);
  }), p.attr("class", _.symbol), p.filter((w) => w == t.value()).classed(_.selected, !0), h.on("click", t.click);
  const d = _e(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", _.label).text(function(w, x) {
    return t.choices()[x];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, lr = (t, n) => {
  switch (t.type) {
    case "button":
      return Oh(t);
    case "slider":
      return Ch(t);
    case "radio":
      return Fh(t);
    case "toggle":
      return Rh(t);
  }
}, Dh = (t, n) => {
  const e = ch(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = T("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
};
J().domain([0, 360]).range([0, 2 * Math.PI]);
J().range([0, 360]).domain([0, 2 * Math.PI]);
function P(t, n, e, r) {
  var i = Math.sin(e / 180 * Math.PI), o = Math.cos(e / 180 * Math.PI), a = n.x - t.x, s = n.y - t.y;
  return { x: r * (o * a - i * s), y: r * (i * a + o * s), state: t.state };
}
function N(t, n) {
  return { x: t.x + n.x, y: t.y + n.y, state: t.state };
}
function Lh(t, n) {
  return { x: 0.5 * (t.x + n.x), y: 0.5 * (t.y + n.y), state: t.state };
}
function qh(t, n, e) {
  var r = t, i = Lh(t, n);
  return ri(e).map(function(o, a) {
    return a == 0 ? r : i;
  });
}
const me = [
  {
    name: "Sierpinksi Triangle",
    M: 3,
    K: 10,
    scale: 1 / 2,
    states: ["A", "B"],
    axiom: [
      { x: -0.5, y: -0.5 + (1 - Math.sqrt(3) / 2) / 2, state: "A" },
      { x: 0.5, y: -0.5 + (1 - Math.sqrt(3) / 2) / 2, state: "E" }
    ],
    rule: function(t, n) {
      var e, r, i;
      return t.state == "A" ? (e = t, r = N(e, P(t, n, 60, this.scale)), i = N(r, P(t, n, 0, this.scale)), e.state = "B", r.state = "A", i.state = "B") : (e = t, r = N(e, P(t, n, -60, this.scale)), i = N(r, P(t, n, 0, this.scale)), e.state = "A", r.state = "B", i.state = "A"), [e, r, i];
    }
  },
  {
    name: "Koch Snowflake",
    M: 4,
    K: 7,
    scale: 1 / 3,
    states: ["A"],
    axiom: [
      { x: -0.5 / 2 * Math.sqrt(3), y: -1 / 4, state: "A" },
      { x: 0.5 / 2 * Math.sqrt(3), y: -1 / 4, state: "A" },
      { x: 0, y: 3 / 4 - 1 / 4, state: "A" },
      { x: -0.5 / 2 * Math.sqrt(3), y: -1 / 4, state: "E" }
    ],
    rule: function(t, n) {
      var e = t, r = N(e, P(t, n, 0, this.scale)), i = N(r, P(t, n, -60, this.scale)), o = N(i, P(t, n, 60, this.scale));
      return [e, r, i, o];
    }
  },
  {
    name: "Anti Koch Snowflake",
    M: 4,
    K: 7,
    scale: 1 / 3,
    states: ["A"],
    axiom: [
      { x: -0.5, y: -1 / 2 + (1 - Math.sqrt(3) / 2) / 2, state: "A" },
      { x: 0.5, y: -1 / 2 + (1 - Math.sqrt(3) / 2) / 2, state: "A" },
      { x: 0, y: Math.sqrt(3) / 2 - 1 / 2 + (1 - Math.sqrt(3) / 2) / 2, state: "A" },
      { x: -0.5, y: -1 / 2 + (1 - Math.sqrt(3) / 2) / 2, state: "E" }
    ],
    rule: function(t, n) {
      var e = t, r = N(e, P(t, n, 0, this.scale)), i = N(r, P(t, n, 60, this.scale)), o = N(i, P(t, n, -60, this.scale));
      return [e, r, i, o];
    }
  },
  {
    name: "Dragon Curve",
    M: 2,
    K: 15,
    scale: 1 / Math.sqrt(2),
    states: ["A", "B"],
    axiom: [
      { x: -1 / 3 + 1 / 18, y: -1 / 9, state: "A" },
      { x: 1 / 3 + 1 / 18, y: -1 / 9, state: "E" }
    ],
    rule: function(t, n) {
      var e, r;
      return t.state == "A" ? (e = t, r = N(e, P(t, n, 45, this.scale)), e.state = "A", r.state = "B") : (e = t, r = N(e, P(t, n, -45, this.scale)), e.state = "A", r.state = "B"), [e, r];
    }
  },
  {
    name: "Terdragon Curve",
    M: 3,
    K: 9,
    scale: 1 / Math.sqrt(3),
    states: ["A"],
    axiom: [
      { x: -0.42, y: 0, state: "A" },
      { x: 0.42, y: 0, state: "E" }
    ],
    rule: function(t, n) {
      var e, r, i;
      return e = t, r = N(e, P(t, n, -30, this.scale)), i = N(r, P(t, n, 90, this.scale)), [e, r, i];
    }
  },
  {
    name: "Golden Dragon",
    M: 2,
    K: 15,
    scale: 1 / 2,
    states: ["A", "B"],
    axiom: [
      { x: -1 / 3 + 1 / 18, y: -1 / 9, state: "A" },
      { x: 1 / 3 + 1 / 18, y: -1 / 9, state: "E" }
    ],
    rule: function(t, n) {
      var e, r;
      return t.state == "A" ? (e = t, r = N(e, P(t, n, 32.893818, 0.74274)), e.state = "A", r.state = "B") : (e = t, r = N(e, P(t, n, -46.98598225, 0.74274 * 0.74274)), e.state = "A", r.state = "B"), [e, r];
    }
  }
], z = {
  widgets: {
    fontsize: 20,
    playbutton_size: 120,
    playbutton_anchor: { x: 2, y: 3 },
    resetbutton_size: 80,
    resetbutton_anchor: { x: 2, y: 7 },
    radio_anchor: { x: 5, y: 2 },
    radio_size: 320,
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_shape: "circ",
    radio_buttonsize: 30
  }
}, En = {
  choices: Kn(me, (t) => t.name),
  default: 0,
  id: "fractals"
}, Dt = kh().choices(En.choices).id(En.id).value(En.default).orientation(z.widgets.radio_orientation).labelposition(z.widgets.radio_label_position).buttonsize(z.widgets.radio_buttonsize).fontsize(z.widgets.fontsize), ut = oi().actions(["play"]).id("play"), Lt = oi().actions(["rewind"]).id("reset"), Bh = [ut, Lt], Hh = (t, n) => {
  const e = n.position(z.widgets.radio_anchor.x, z.widgets.radio_anchor.y);
  Dt.position(e).size(z.widgets.radio_size).shape(z.widgets.radio_shape), Lt.position(n.position(z.widgets.resetbutton_anchor.x, z.widgets.resetbutton_anchor.y)).size(z.widgets.resetbutton_size), ut.position(n.position(z.widgets.playbutton_anchor.x, z.widgets.playbutton_anchor.y)).size(z.widgets.playbutton_size), Lt.position(n.position(z.widgets.resetbutton_anchor.x, z.widgets.resetbutton_anchor.y)), t.selectAll(null).data(Bh).enter().append(lr), t.selectAll(null).data([Dt]).enter().append(lr);
};
var $ = {
  iteration: 0,
  points: []
};
const Xh = () => {
  $.points = [], $.new_points_target = [], $.iteration = 0;
  const t = me[Dt.value()];
  ih(t.axiom, (n) => {
    $.points.push({ x: n.x, y: n.y, state: n.state }), $.new_points_target.push({ x: n.x, y: n.y, state: n.state });
  });
}, Gh = () => {
  const t = me[Dt.value()], n = t.M;
  return $.iteration++, $.points = $.new_points_target, $.new_points_source = [].concat(...$.points.map(function(e, r) {
    return e.state != "E" ? qh($.points[r], $.points[r + 1], n) : e;
  })), $.new_points_target = [].concat(...$.points.map(function(e, r) {
    return e.state != "E" ? t.rule($.points[r], $.points[r + 1]) : e;
  })), $.iteration >= t.K;
}, si = {
  xrange: [-0.51, 0.51],
  yrange: [-0.51, 0.51]
}, Uh = "_curve_106zt_2", Yh = "_curve_old_106zt_8", Kh = "_curve_new_106zt_14", at = {
  curve: Uh,
  curve_old: Yh,
  curve_new: Kh
}, ui = J().domain(si.xrange), li = J().domain(si.yrange), jn = Su().x((t) => ui(t.x)).y((t) => li(t.y)), Vh = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  ui.range([0, e]), li.range([r, 0]), t.selectAll("#origin").remove(), t.append("g").attr("id", "origin").selectAll("." + at.curve).data([$.points]).enter().append("path").attr("class", at.curve).attr("d", jn);
}, jh = (t, n) => {
  const e = t.select("#origin"), r = e.selectAll("." + at.curve).attr("class", at.curve_old), i = e.selectAll("." + at.curve_new).data([$.new_points_source]).enter().append("path").attr("class", at.curve_new).attr("d", jn);
  r.transition().duration(1e3).style("opacity", 0).remove(), i.data([$.new_points_target]).transition().duration(500).attr("d", jn).on("end", function() {
    T(this).attr("class", at.curve);
  });
};
function Zh(t, n) {
  const e = Gh();
  return jh(t), e;
}
function Zn(t, n) {
  Xh(), Vh(t, n);
}
const Wh = (t, n, e) => {
  Dt.update(() => {
    n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null), Zn(t, e);
  }), Lt.update(() => {
    n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null), Zn(t, e);
  }), ut.update(() => {
    Zh(t) && (n.select("#button_play").transition(1e3).style("opacity", 0), n.select("#button_play").style("pointer-events", "none"));
  });
}, Jh = {
  name: "@explorables/hokus_fractus",
  title: "Hokus Fractus!",
  subtitle: "Famous fractals",
  description: "A collection of regular fractals that illustrates the nature of self-similarity.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Qh(t, n = ci) {
  const e = Dh(t, n), r = e.display, i = e.controls, o = e.grid;
  return Hh(i, o), Wh(r, i, n), Zn(r, n), {
    halt() {
      ut.value() === 1 && ut.press(i);
    },
    reset() {
      ut.value() === 1 && ut.press(i), Lt.press(i);
    },
    config: n,
    meta: Jh
  };
}
export {
  ci as config,
  Qh as default,
  Qh as load,
  Jh as meta
};
