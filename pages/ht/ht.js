!function (r, F, S) {
  "use strict";
  var H = "ht";
  if (!r[H]) {
    !function () {
      Date.now && Date.prototype.getTime || (Date.now = function () {
        return (new Date).getTime()
      }), r.performance && r.performance.now || function () {
        var E = Date.now();
        r.performance || (r.performance = {}), r.performance.now = function () {
          return Date.now() - E
        }
      }();
      for (var U = Date.now(), y = 16, o = ["ms", "moz", "webkit", "o"], w = 0; w < o.length && !r.requestAnimationFrame; ++w) r.requestAnimationFrame = r[o[w] + "RequestAnimationFrame"], r.cancelAnimationFrame = r[o[w] + "CancelAnimationFrame"] || r[o[w] + "CancelRequestAnimationFrame"];
      r.requestAnimationFrame || (r.requestAnimationFrame = function (F) {
        var D = Date.now(), C = y + U - D;
        return 0 > C && (C = 0), U = D, r.setTimeout(function () {
          U = Date.now(), F(performance.now())
        }, C)
      }), r.cancelAnimationFrame || (r.cancelAnimationFrame = function (z) {
        return r.clearTimeout(z)
      }), F.assign === S && (F.assign = function (C) {
        if (C === S || null === C) throw new TypeError("Cannot convert undefined or null to object");
        for (var s = F(C), O = 1; O < arguments.length; O++) {
          var h = arguments[O];
          if (h !== S && null !== h) for (var U in h) F.prototype.hasOwnProperty.call(h, U) && (s[U] = h[U])
        }
        return s
      })
    }();
    var _, u, d, W, y = r.document, A = null, Q = r[H] = {}, m = r[H + "config"], E = Q.Default = m && m.Default || {},
      h = Q.Style = m && m.Style || {}, P = Q.Attr = m && m.Attr || {}, w = Q.Color = m && m.Color || {},
      Z = Q.IsGetter = m && m.IsGetter || {}, G = Math, l = G.round, n = G.floor, t = G.ceil, Y = G.sqrt, R = G.max,
      L = G.min, C = G.abs, J = G.cos, B = G.acos, D = G.sin, o = G.pow, s = G.asin, I = G.PI, U = 2 * I, b = I / 2,
      v = G.tan, i = G.atan2, k = G.random, c = G.log, V = !0, j = !1, g = r.parseInt || global.parseInt,
      T = "2018-12-01", p = r.navigator ? r.navigator.platform.indexOf("Win") > -1 : !1, q = function (w) {
        return w * w
      }, x = r.setTimeout, O = r.clearTimeout, f = r.location, e = r.navigator ? r.navigator.userAgent.toLowerCase() : "",
      M = function (N) {
        return N.test(e)
      }, X = M(/msie/), N = M(/msie/) || M(/trident/), z = M(/msie 10/), K = M(/edge/), a = M(/firefox/), $ = M(/mac/),
      Qe = E.isTouchable === S ? p ? !1 : y ? "ontouchend" in y : !1 : E.isTouchable, Cn = "default", _o = "single",
      xd = "multiple", ji = "front", _d = "back", kl = "left", we = "right", rd = "top", Aj = "bottom", Zm = "center",
      zk = "eye", gj = "middle", gh = "east", Tj = "west", yh = "north", wc = "none", Kh = "px", ac = "absolute",
      Fq = "border", Gn = "triangle", Kd = "rect", hj = "circle", uo = "cylinder", Mq = "shape", Cl = "items",
      yf = "normal", ub = "remove", ip = "clear", Sq = "width", oi = "height", rr = "ingroup", mp = "check",
      Mi = "uncheck", Tn = "radio", Gc = "radioOn", io = "radioOff", vl = "points", Vg = "values", xf = "series",
      om = "body", Dg = "label", rl = "label2", Wd = "note", qc = "note2", Bc = "icons", Gi = "labelFont",
      Or = "labelColor", Rp = "labelSelectColor", Np = "note.expanded", fe = "note2.expanded", Se = "edge.expanded",
      Ni = "edge.points", Vm = "edge.type", sp = "rotation", pd = "getRotation", xp = "setRotation", sn = "hidden",
      hh = "visible", Nb = "tuv", _l = "no", fm = "draw", ml = "select", bs = "currentSubGraph",
      Fj = "selectBackground", Pk = "autoMakeVisible", Te = "autoHideScrollBar", xs = "scrollBarColor",
      Xj = "scrollBarSize", Je = "indent", Sm = "rowHeight", zn = "columnLineColor", jk = "rowLineColor",
      nb = "columnLineVisible", Hc = "rowLineVisible", ge = "visibleFunc", Xi = "expandIcon", Ym = "collapseIcon",
      sq = "checkMode", nm = "sortFunc", xe = "editable", Fp = "batchEditable", lj = "tristate", Al = "asc",
      mr = "desc", zr = "position", db = "elevation", Tg = "children", vp = "translateX", yi = "translateY",
      Bn = "dataModel", nf = "maxSize", jb = "shape3d", Ii = "shape3d.resolution", Pl = "shape3d.visible",
      dp = "shape3d.from.visible", Lo = "shape3d.to.visible", ap = "shape3d.top.visible", Ic = "shape3d.bottom.visible",
      hn = "repeat.uv.length", Nj = "serializeValue", jn = "deserializeValue", lc = "centerUniform", km = "uniform",
      rn = "rgba(255,255,255,0)", cj = "style", Ln = "attr", Ol = "field", _j = "string", mb = "boolean", kj = "color",
      qn = "int", Yn = "number", kc = "ew-resize", Ph = "ns-resize", yg = "pointer", Hn = "auto", Lk = "mousedown",
      dj = "mousemove", Wi = "mouseup", Zp = "mouseout", pi = "touchstart", gi = "touchmove", Ao = "touchend",
      Xp = "keydown", eh = "keyup", Xb = ["DOMMouseScroll", "mousewheel"], vi = a ? Xb[0] : Xb[1],
      tp = Qe ? [pi, gi, Ao, Xp, eh, "keypress", "input", "contextmenu", "compositionstart", "compositionupdate", "compositionend"] : [Xp, eh, "keypress", "input", Lk, dj, Wi, Zp, vi, "wheel", "contextmenu", "mouseenter", "mouseleave", "mouseover", "compositionstart", "compositionupdate", "compositionend"],
      Ci = A, Yr = A, Be = A, ul = Wi.length, js = function () {
        Be && (O(Be.timeout), Be = A)
      }, ag = function () {
        Be && hg(Be.e, Be.info)
      };
    r.addEventListener && (Qe || (r.addEventListener(Zp, function () {
      js()
    }, !1), r.addEventListener(vi, function () {
      qd()
    }, !1)), r.addEventListener(eh, function (H) {
      91 === H.keyCode ? Th = {} : delete Th[H.keyCode]
    }, !0), r.addEventListener(Xp, function ($) {
      Th[$.keyCode] = !0
    }, !0), r.addEventListener("blur", function () {
      Th = {}
    }));
    var Sg, Dl, lm, _r = 0, Sj = A, Qh = function (B, c) {
        var e = x(function () {
          delete Sj[e], Ah(Sj) && (Sj = A), B()
        }, c);
        return e
      }, Uf = A, cs = A, Lp = {}, Bk = {}, ok = {}, zc = {}, Dn = {}, Th = {}, Rb = {}, Vr = {}, Fe = {}, Lf = {},
      li = /.json$/, gq = /^data:image\/svg\+xml/, Kl = {}, Jj = [], ho = {}, Qj = A, ls = A, Lc = function () {
      }, uj = function () {
        throw"Oops!"
      }, Db = [0, 0, 0], mm = [0, 0, 0, 0], ui = {x: 0, y: 0, width: 0, height: 0}, yq = A, nj = A, ec = A,
      qj = function (N) {
        nj && !N._72O && (ec || (ec = {}), ec[N._72O = Xe()] = N), Sg != A ? wg() < .05 && W && !Dl && (Gf = js) : Gf = ye
      }, ln = function (i, C, Z, n) {
        nj || (nj = {});
        var r = nj[i];
        if (r) {
          if (r.url === C) return;
          r.image ? (r.image.onload = Lc, r.image.onerror = Lc) : r.request && (r.request.onload = Lc, r.request.onerror = Lc)
        }
        if (li.test(C)) {
          var g = new XMLHttpRequest;
          if (nj[i] = {
            request: g,
            url: C
          }, g.overrideMimeType && g.overrideMimeType("text/plain"), C = E.beforeLoadURL(C), C.data) {
            var L = E.parse(C.data);
            Sb(i, L), E.handleImageLoaded(i, L)
          } else g.open("GET", encodeURI(C), !0), g.onload = function (H) {
            if (200 === this.status || 0 === this.status) {
              var R = E.parse(H.target.response || H.target.responseText);
              Sb(i, R), E.handleImageLoaded(i, R)
            } else Sb(i, E.handleUnfoundImage(i, C) || A)
          }, g.onerror = function () {
            Sb(i, E.handleUnfoundImage(i, C) || A)
          }, g.send(null)
        } else {
          var L = new Image;
          nj[i] = {
            image: L,
            url: C
          }, N && (C.toLowerCase().indexOf(".svg") > 0 || gq.test(C)) ? (y.body.appendChild(L), L.style.visibility = "hidden", L.onload = function () {
            x(function () {
              if (Z && (L.width = Z), n && (L.height = n), !L.width || !L.height) {
                var M = L.width || L.clientWidth, t = L.height || L.clientHeight;
                L.width = M, L.height = t
              }
              E.handleImageLoaded(i, L), Sb(i, L), y.body.removeChild(L), L.style.visibility = ""
            }, 180)
          }, L.onerror = function () {
            Sb(i, E.handleUnfoundImage(i, C) || A), y.body.removeChild(L), L.style.visibility = ""
          }) : (L.onload = function () {
            Z && (L.width = Z), n && (L.height = n), E.handleImageLoaded(i, L), Sb(i, L)
          }, L.onerror = function () {
            Sb(i, E.handleUnfoundImage(i, C) || A)
          }), /^data:image/.test(C) || (C = E.beforeLoadURL(C), /^data:image/.test(C) || (C = E.appendTimeStamp(C), C = encodeURI(C), L.crossOrigin = E.crossOrigin)), L.src = C
        }
      }, Sb = function (T, X) {
        if (Bk[T] = X, delete nj[T], Ah(nj) && (nj = A, ec)) {
          for (var l in ec) {
            var U = ec[l];
            U._2O && (U._2O = {}), U.invalidateAll && U.invalidateAll(S, "imageLoaded", T), U.redraw && U.redraw(), U.iv(), delete U._72O
          }
          ec = A
        }
        if (X && ec) for (var l in ec) {
          var U = ec[l];
          U.invalidateAll && U.invalidateAll(S, "imageLoading", T), U.redraw && U.redraw(), U.iv()
        }
      }, gb = function () {
        return c = G && Date, function () {
          return r.performance && r.performance.now ? r.performance.now() : Date.now()
        }
      }(), yl = function (v, A) {
        A ? O(v) : r.cancelAnimationFrame(v)
      }, se = function (V, T, U) {
        return {width: V, height: T, comps: cl(U) ? U : [U]}
      }, Yg = function (t, f) {
        return {
          type: hj,
          rect: [t, f, 1.6, 1.6],
          borderWidth: 1,
          borderColor: Kj,
          gradient: eb,
          gradientColor: Jf,
          background: Kj
        }
      }, nh = function (h, O) {
        return se(16, 16, {type: Gn, rect: [4, 4, 10, 8], background: h, rotation: O ? 1.57 : 3.14})
      }, Nm = function (y, f) {
        return se(16, 16, {type: Gn, rect: [4, 4, 8, 7], background: y, rotation: f ? 3.14 : 0})
      }, hf = function (U) {
        var S = U._orientation;
        return "horizontal" === S || "h" === S
      }, mh = function (q) {
        var p = A || 4, B = A || 1, S = A || 1;
        0 > p ? p = 0 : p > .25 && (p = .25);
        var C, k, b, n, f, E, v, L = .5, P = [], K = [], c = [], x = U / S, d = U / B, h = L - p;
        for (k = 0; B >= k; k++) for (n = -I + k * d, E = J(n), f = D(n), C = 0; S >= C; C++) b = C * x, v = h + p * E, P.push(J(b) * v, f * p, -D(b) * v), (u = q) && K.push(C / S, 1 - k / B);
        for (k = 0; B > k; k++) {
          var Y = k * (S + 1), o = (k + 1) * (S + 1);
          for (C = 0; S > C; C++) c.push(Y + C, o + C + 1, o + C, Y + C, Y + C + 1, o + C + 1), Ee.z = zl.z = q
        }
      }, xg = function (S) {
        var F = 2, G = 0;
        for (var r in S) r.length === F && g(r, 32) === Zb && (Qj = ls = S[r]), G++;
        return G
      }, pq = function (C, q, H, k) {
        return H || (H = Qe ? 5 : 3, H /= k || 1), {x: C - H, y: q - H, width: 2 * H, height: 2 * H}
      }, de = function (n, d, x, i) {
        var R = this;
        d || (d = Qe ? 5 : 3, x = 20, i = 20);
        var D = {x: n, y: d, width: x, height: i};
        if (x) for (var t = 0; x > t; t++) if (3 === x) i = 20; else for (var X = 0; i > X; X++) R = r ? r : x;
        var H = {x: I, y: 2 * I};
        if (en(D, H)) {
          var $ = oi[0] + rd[0] + ip[1] + (Al.length - 1);
          Ap[zk] = R[$], R[$] = te[zk]
        }
      }, vn = function (K) {
        return (/ble$/.test(K) || /ed$/.test(K) || Z[K] ? "is" : "get") + K.charAt(0).toUpperCase() + K.slice(1)
      }, te = function (v) {
        return "set" + v.charAt(0).toUpperCase() + v.slice(1)
      }, pp = function (Y) {
        return typeof Y === _j || Y instanceof String
      }, Hl = function (K) {
        return typeof K === Yn
      }, ye = function (E) {
        return typeof E === mb
      }, mk = function (P) {
        return P && "object" == typeof P
      }, En = function (A) {
        return "function" == typeof A
      }, cl = function (E) {
        return E instanceof Array
      }, Fi = function (u) {
        return u instanceof Oh
      }, _i = function (L) {
        return cl(L) ? new Oh(L) : L
      }, Kf = function (K) {
        return K instanceof ol
      }, yc = function (Y) {
        return Y instanceof Dh
      }, Xo = function (X) {
        return X instanceof xc
      }, sr = function (L, Z) {
        if (!(L instanceof Q.Group)) return !1;
        if (!Z) return L.isExpanded();
        var m = Z.getDataUI(L);
        return m && m._88I ? !0 : !1
      }, si = function (E) {
        return E instanceof Bp
      }, xk = function (r) {
        return r && "IFRAME" === r.tagName
      }, Uq = function (M) {
        return M == A || E.numberDigits == A ? M : parseFloat(M.toFixed(E.numberDigits))
      }, yn = function (O, s, t) {
        var d, w = s.length;
        if (t) for (var k = 0; t > k; k++) if (3 === w) O.push(s[0]), O.push(s[1]), O.push(s[2]); else for (d = 0; w > d; d++) O.push(s[d]); else if (3 === w) O.push(s[0]), O.push(s[1]), O.push(s[2]); else for (d = 0; w > d; d++) O.push(s[d])
      }, br = function (d) {
        return d ? mk(d) ? d : {} : !1
      }, Ak = function (c, H, x) {
        var M, y = mk(c) ? c : c.prototype;
        for (M in H) x && y[M] !== S || (y[M] = H[M]);
        return c
      }, Rg = function (g) {
        return String.fromCharCode(g)
      }, Hh = function (s) {
        for (var $, r = 0, T = ""; r < s.length; r++) $ = s[s.length - 1 - r], "%" === $ ? $ = "'" : "a" === $ ? $ = '"' : "]" === $ && ($ = "\\"), T += Rg($.charCodeAt(0) - 1);
        return T
      }, Eo = function (h, w, q) {
        h.superClass.constructor.apply(w, q)
      }, Ah = function (I) {
        for (var m in I) return !1;
        return !0
      }, ql = function (u) {
        return u ? 0 === u.length : !0
      }, Ck = function () {
        var S = "";
        return [Mi[0], jk[0], Dg[0]].forEach(function (p) {
          S += te(p).slice(3)
        }), km = y && y[S] || lc, function (v, k) {
          return v === k ? !0 : v.x === k.x && v.y === k.y && v.width === k.width && v.height === k.height
        }
      }(), kh = function (a, A, E) {
        return A > a ? A : a > E ? E : a
      }, Yh = function ($) {
        return 0 > $ ? -1 : $ > 0 ? 1 : 0
      }, wg = function () {
        var T = 1e4 * D(ul++);
        return T - n(T)
      }, kp = function (l, X, D) {
        return Ef(l.x, l.y, X.x, X.y, D.x, D.y, D.x + D.width, D.y, !0) || Ef(l.x, l.y, X.x, X.y, D.x + D.width, D.y, D.x + D.width, D.y + D.height, !0) || Ef(l.x, l.y, X.x, X.y, D.x + D.width, D.y + D.height, D.x, D.y + D.height, !0) || Ef(l.x, l.y, X.x, X.y, D.x, D.y + D.height, D.x, D.y, !0)
      }, Ef = function (P, p, J, F, Q, j, $, S, d) {
        var U = ($ - Q) * (p - j) - (S - j) * (P - Q), m = (S - j) * (J - P) - ($ - Q) * (F - p);
        if (0 !== m) {
          var n = U / m, D = P + n * (J - P), I = p + n * (F - p);
          return d && (D + kr < L(P, J) || D - kr > R(P, J) || D + kr < L(Q, $) || D - kr > R(Q, $) || I + kr < L(p, F) || I - kr > R(p, F) || I + kr < L(j, S) || I - kr > R(j, S)) ? A : [D, I]
        }
        return A
      }, bf = function (_, u, d) {
        if (_ && d) if (u) {
          if (u === cj) return _.getStyle(d);
          if (u === Ln) return _.getAttr(d);
          if (u === Ol) return _[d]
        } else if (d = vn(d), _[d]) return _[d]();
        return S
      }, ll = function (i, S, D, X) {
        if (i && D) if (S) {
          if (S === cj) i.s(D, X); else if (S === Ln) i.a(D, X); else if (S === Ol) {
            var I = i[D];
            i[D] = X, i.fp("f:" + D, I, X)
          }
        } else D = te(D), i[D] && i[D](X)
      }, sf = function (_, Z, J) {
        return Z && "top" !== Z ? "bottom" === Z ? {
          x: _.x,
          y: _.y,
          width: _.width,
          height: _.height * J
        } : "right" === Z ? {
          x: _.x,
          y: _.y,
          width: _.width * J,
          height: _.height
        } : "left" === Z ? {x: _.x + _.width * (1 - J), y: _.y, width: _.width * J, height: _.height} : void 0 : {
          x: _.x,
          y: _.y + _.height * (1 - J),
          width: _.width,
          height: _.height * J
        }
      }, th = function (A, N, v, X, M) {
        N && yj(A, v, X, 1, M, N)
      }, mg = function (l, t, O, k) {
        var K = 1 - l;
        return K * K * t + 2 * l * K * O + l * l * k
      }, Ee = function (u, c, I, x, m) {
        var s = 1 - u;
        return s * s * s * c + 3 * s * s * u * I + 3 * s * u * u * x + u * u * u * m
      }, qh = function (o) {
        var Q, S, x, r, u = 0;
        return o.forEach(function (B) {
          if (Q = B.length, Q > 0) for (S = B[0], r = 1; Q > r; r++) x = B[r], u += lf(S, x), S = x
        }), u
      }, Fd = function (E, p, Q) {
        var X = "__" + E, y = function (z) {
          Q.disabled || Q["handle_" + E](z)
        };
        Q[X] || (Q[X] = y, p.addEventListener(E, y, !1))
      }, bo = function (u, s, e) {
        var g = "__" + u, S = e[g];
        S && (s.removeEventListener(u, S, !1), delete e[g])
      }, Oc = function (G, A) {
        var v = "_" + A;
        G[vn(A)] = function () {
          return this[v]
        }, G[te(A)] = function (Z) {
          var t = this[v];
          this[v] = Z, this.fp(A, t, Z)
        }
      }, af = function (N) {
        return F.create(N)
      }, Kq = function (s) {
        if (!s.element) {
          var m, Q;
          (m = s.textField) ? Q = _n(Tb.TextField, m) : (m = s.textArea) ? Q = _n(Tb.TextArea, m) : (m = s.button) ? Q = _n(Tb.Button, m) : (m = s.comboBox) ? Q = _n(Tb.ComboBox, m) : (m = s.checkBox) ? Q = _n(Tb.CheckBox, m) : (m = s.radioButton) ? Q = _n(Tb.RadioButton, m) : (m = s.slider) ? Q = _n(Tb.Slider, m) : (m = s.colorPicker) ? Q = _n(Tb.ColorPicker, m) : (m = s.image) && (Q = _n(Tb.Image, m)), Q && (s.element = Q)
        }
      }, Ae = function (g, H) {
        var f = Zg(g);
        return f._ht = H, f
      }, Zg = function (b, F) {
        var l = y.createElement("div"), T = l.style;
        return l.tabIndex = -1, l.onkeydown = gm, T.msTouchAction = wc, Df(l, A, 0), Qe && T.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", A), b && (T.overflow = sn), F && wm(F, l), l
      }, Ze = function (O, e) {
        var p = y.createElement("canvas"), i = p.style;
        return i.msTouchAction = wc, e || (i.pointerEvents = wc), Df(p, A, 0), O && wm(O, p), p
      }, Df = function (j, C, O) {
        var F = j.style;
        F.border = C ? C + " solid 1px" : 0, F.outline = 0, F.padding = O ? "0 " + O + Kh : 0, Vf(j)
      }, Vf = function (Q) {
        var K = Q.style;
        K.position = ac, K.margin = 0, K.setProperty("box-sizing", "border-box", A), K.setProperty("-moz-box-sizing", "border-box", A)
      }, Mb = function (E, d, S, s) {
        s || (s = Ne), d != A && (E.width = d * s, E.style.width = d + Kh), S != A && (E.height = S * s, E.style.height = S + Kh)
      }, wm = function (U, F, d) {
        U.appendChild(F), d && (F.style.position = ac)
      }, ms = function (B, Q) {
        Q.split || (Q += "");
        for (var M, w = Q.split("\n"), I = 0, y = w.length, g = 0; y > g; g++) {
          var V = gl(B.font, w[g]);
          V.width > I && (I = V.width), M || (M = V.height)
        }
        return B.ss = w, {width: I, height: M * y}
      }, Wn = function (q, l, T, K, m, Q) {
        var t = l.length;
        if (1 === t) Jp(q, l[0], T, K, m); else for (var A = T.height / t, d = {
          x: T.x,
          y: T.y,
          width: T.width,
          height: A
        }, n = 0; n < l.length; n++) Q ? Po(q, l[n], K, m, d.x, d.y, d.width, d.height, Q) : Jp(q, l[n], d, K, m), d.y += A
      }, Jp = function (a, d, W, Y, j) {
        a.font = Y ? Y : Co, a.fillStyle = j ? j : es, a.textAlign = Zm, a.textBaseline = gj;
        var g, c;
        W ? W.width === S ? (g = W.x, c = W.y) : (g = W.x + W.width / 2, c = W.y + W.height / 2) : (g = 0, c = 0), a.fillText(d, l(g), l(c))
      }, cb = function (M) {
        M.getView && (M = M.getView());
        var G = M.offsetWidth || M.scrollWidth;
        return !G && M.style.width && (G = g(M.style.width)), G
      }, $o = function (V) {
        V.getView && (V = V.getView());
        var u = V.offsetHeight || V.scrollHeight;
        return !u && V.style.height && (u = g(V.style.height)), u
      }, xm = function (r, n, v) {
        var $ = n[0].toUpperCase() + n.substring(1, n.length);
        r["webkit" + $] = v, r["moz" + $] = v, r["ms" + $] = v, r["o" + $] = v, r[n] = v
      }, Ve = function () {
        var z = function (P) {
          gm(P), P.stopPropagation()
        }, g = Qe ? [pi] : [Xp, Lk];
        return function (Y) {
          var i = Zg(), q = i.style;
          return q.backgroundColor = E.disabledBackground, Y && (q.backgroundImage = "url(" + Y + ")", q.backgroundPosition = "50% 50%", q.backgroundRepeat = "no-repeat no-repeat"), g.forEach(function (v) {
            i.addEventListener(v, z)
          }), i
        }
      }(), dn = function (w) {
        var X = w.getContext("2d");
        return X.save(), X.lineCap = he, X.lineJoin = po, X
      }, Gf = function (J, d, q, M) {
        Of(J, d * Ne, q * Ne), M *= Ne, 1 !== M && J.scale(M, M)
      }, Of = function (b, N, C) {
        b.translate(N, C)
      }, Rq = function (E, Q) {
        Q && E.rotate(Q)
      }, jd = function (c, s, C) {
        s === S && (s = 1), C === S && (C = 1), (1 !== s || 1 !== C) && c.scale(s, C)
      }, ni = !1, zi = function (z) {
        var S = y.activeElement;
        if (y.activeElement !== z) {
          S && S.forceOnblur && S.forceOnblur();
          for (var d = [], T = z.parentNode; T;) d.push([T, T.scrollLeft, T.scrollTop]), T = T.parentNode;
          if (!ni) {
            var Z = [], c = [];
            try {
              for (var E = r.parent, X = r; E !== X;) Z.push([E, E.scrollX, E.scrollY]), X = E, E = r.parent;
              var I = r.frameElement;
              if (I) for (var A = I.parentNode; A;) c.push([A, A.scrollLeft, A.scrollTop]), A = A.parentNode
            } catch (n) {
              ni = !0
            }
          }
          if (Qe) z.focus(); else {
            var h = tf(), k = h.target;
            z.focus(), k.scrollLeft = h.left, k.scrollTop = h.top
          }
          d.forEach(function (A) {
            A[0].scrollLeft = A[1], A[0].scrollTop = A[2]
          }), ni || (Z.forEach(function (f) {
            f[0].scrollTo(f[1], f[2])
          }), c.forEach(function (v) {
            v[0].scrollLeft = v[1], v[0].scrollTop = v[2]
          }))
        }
      }, ss = function (D) {
        return D && D.getView ? D.getView() : D
      }, vk = function (M, K, Y, o, J) {
        if (2 === arguments.length && (Y = K.y, o = K.width, J = K.height, K = K.x), M.isSelfViewEvent) M.setX(K), M.setY(Y), M.setWidth(o), M.setHeight(J); else {
          var Z = ss(M), w = Z.style;
          if ((y.fullscreenElement || y.mozFullScreenElement || y.webkitFullscreenElement || y.msFullscreenElement) !== Z) K !== S && (w.left = K + Kh), Y !== S && (w.top = Y + Kh), o !== S && (w.width = o + Kh), J !== S && (w.height = J + Kh); else {
            var p = E.getWindowInfo();
            w.left = (K = p.left) + Kh, w.top = (Y = p.top) + Kh, w.width = (o = p.width) + Kh, w.height = (J = p.height) + Kh
          }
          M.endEditing && !Qe && M.endEditing(), M.redraw && M.redraw(), M.invalidate && M.invalidate(), M.onLayouted && M.onLayouted(K, Y, o, J), M.fireViewEvent && M.fireViewEvent("layout")
        }
      }, Zo = function (h) {
        if (!h.touches) return h;
        var E = h.touches[0];
        return E ? E : h.changedTouches[0]
      }, Ek = function (t) {
        return Qe ? Zo(t).target : t.target
      }, Sk = function (R) {
        E.popup && E.popup.close(), E.popup = R
      }, ze = A, bl = function (f) {
        ze.handleWindowTouchMove(f)
      }, Mm = function (v) {
        ze.handleWindowTouchEnd(v), r.removeEventListener(gi, bl, !1), r.removeEventListener(Ao, Mm, !1), ze = A
      }, fq = function (b) {
        ze.handleWindowMouseMove(b)
      }, Tr = function (F) {
        ze.handleWindowMouseUp(F), r.removeEventListener(dj, fq, !1), r.removeEventListener(Wi, Tr, !1), ze = A
      }, mj = function (t) {
        return 1 === Ro(t)
      }, lp = function (Q, N) {
        return N ? N.keyCode === Q : Th[Q]
      }, pg = function (p) {
        return xr(p) && lp(65, p)
      }, wj = function (w) {
        return lp(46, w) || lp(8, w)
      }, wn = function (h) {
        return function (i) {
          return i ? i.keyCode === h : Th[h]
        }
      }, Zb = 573, zg = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27], pf = wn(zg[0]), So = wn(zg[1]), Ar = wn(zg[2]),
      dh = wn(zg[3]), nl = wn(zg[4]), $p = wn(zg[5]), $j = wn(zg[6]), Mj = wn(zg[7]), ih = wn(zg[8]), Ok = wn(zg[9]),
      Fr = wn(zg[10]), Ec = {65: 1, 83: 1, 68: 1, 87: 1, 37: 1, 38: 1, 39: 1, 40: 1},
      Vo = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 8933], Gr = A, so = A, zj = function (n, z) {
        Gr || (Gr = Ze()), Mb(Gr, n, z, 1);
        var T = dn(Gr);
        return T.clearRect(0, 0, n, z), T
      }, Ig = function () {
        var h, H = {};
        for (var n in r) {
          var I = xd.length;
          if (n.length == I && n[0] === xd[2] && n[1] === wc[1] && n[4] === xd[3] && n[5] === xd[4] && n.substr(I - 2) === wc[1] + wc[2]) {
            var U = r[n];
            for (var u in U) u.length === I && u.substr(0, 3) === we[3] + ub[3] + ml[0] && u.substr(I - 2) === xd[0] + Wd[3] && (Xb = U[u])
          }
        }
        return function (u) {
          var r, M = H[u];
          return M || (h || (h = Ze(), Mb(h, 1, 1, 1)), r = h.getContext("2d"), r.clearRect(0, 0, 1, 1), yj(r, 0, 0, 1, 1, u), M = r.getImageData(0, 0, 1, 1).data, M = H[u] = [M[0], M[1], M[2], M[3]]), M
        }
      }(), Di = function (a) {
        if (!pp(a)) return a;
        var h = Ig(a);
        return h.CA || (h.CA = [h[0] / 255, h[1] / 255, h[2] / 255, h[3] / 255]), h.CA
      }, oo = function (D, o, A, j, F) {
        var f = Ze();
        f.width = A, f.height = j;
        var u = f.getContext("2d");
        u.drawImage(D, 0, 0, A, j);
        try {
          for (var S = u.getImageData(0, 0, A, j), x = S.data, d = 0, N = x.length; N > d; d += 4) {
            var K = x[d + 0], P = x[d + 1], _ = x[d + 2], E = x[d + 3];
            "override_a" === F ? x[d + 3] = 255 * o[3] : "override_rgb" === F ? (x[d + 0] = 255 * o[0], x[d + 1] = 255 * o[1], x[d + 2] = 255 * o[2]) : "override" === F ? (x[d + 0] = 255 * o[0], x[d + 1] = 255 * o[1], x[d + 2] = 255 * o[2], x[d + 3] = 255 * o[3]) : (x[d + 0] = o[0] * K, x[d + 1] = o[1] * P, x[d + 2] = o[2] * _, x[d + 3] = o[3] * E)
          }
          u.putImageData(S, 0, 0)
        } catch (G) {
          return D
        }
        return f
      }, Ap = function (M, v, u) {
        return v && (v = "miter" === u ? 8 * v + 20 : v + 1, M && hq(M, v)), v
      }, Ip = function (s, e) {
        if (e) {
          var Q = new uh(e), Z = s.width / 2, g = s.height / 2,
            i = Ue([Q.tf(-Z, -g), Q.tf(Z, -g), Q.tf(Z, g), Q.tf(-Z, g)]);
          return i.x += s.x + Z, i.y += s.y + g, i
        }
        return s
      }, Zh = function (V, m, y, l, S, t, F, W) {
        l *= Math.PI / 180;
        var f = {
          x: Math.cos(l) * (V.x - F.x) / 2 + Math.sin(l) * (V.y - F.y) / 2,
          y: -Math.sin(l) * (V.x - F.x) / 2 + Math.cos(l) * (V.y - F.y) / 2
        }, n = Math.pow(f.x, 2) / Math.pow(m, 2) + Math.pow(f.y, 2) / Math.pow(y, 2);
        n > 1 && (m *= Math.sqrt(n), y *= Math.sqrt(n));
        var T = (S == t ? -1 : 1) * Math.sqrt((Math.pow(m, 2) * Math.pow(y, 2) - Math.pow(m, 2) * Math.pow(f.y, 2) - Math.pow(y, 2) * Math.pow(f.x, 2)) / (Math.pow(m, 2) * Math.pow(f.y, 2) + Math.pow(y, 2) * Math.pow(f.x, 2)));
        isNaN(T) && (T = 0);
        var D = {x: T * m * f.y / y, y: T * -y * f.x / m}, u = {
            x: (V.x + F.x) / 2 + Math.cos(l) * D.x - Math.sin(l) * D.y,
            y: (V.y + F.y) / 2 + Math.sin(l) * D.x + Math.cos(l) * D.y
          }, C = function (B) {
            return Math.sqrt(Math.pow(B[0], 2) + Math.pow(B[1], 2))
          }, R = function (K, i) {
            return (K[0] * i[0] + K[1] * i[1]) / (C(K) * C(i))
          }, z = function (m, k) {
            return (m[0] * k[1] < m[1] * k[0] ? -1 : 1) * Math.acos(R(m, k))
          }, O = z([1, 0], [(f.x - D.x) / m, (f.y - D.y) / y]), L = [(f.x - D.x) / m, (f.y - D.y) / y],
          Z = [(-f.x - D.x) / m, (-f.y - D.y) / y], $ = z(L, Z);
        R(L, Z) <= -1 && ($ = Math.PI), R(L, Z) >= 1 && ($ = 0);
        var R = m > y ? m : y, q = m > y ? 1 : m / y, P = m > y ? y / m : 1;
        if (null == W) {
          var M = {x: 0, y: 0, width: 0, height: 0};
          hq(M, R), M.x *= q, M.width *= q, M.y *= P, M.height *= P;
          var v = new uh(l);
          return M = Ue([v.tf(M.x, M.y), v.tf(M.x + M.width, M.y), v.tf(M.x + M.width, M.y + M.height), v.tf(M.x, M.y + M.height)]), M.x += u.x, M.y += u.y, [{
            x: M.x,
            y: M.y
          }, {x: M.x + M.width, y: M.y}, {x: M.x + M.width, y: M.y + M.height}, {x: M.x, y: M.y + M.height}]
        }
        W.translate(u.x, u.y), W.rotate(l), W.scale(q, P), W.arc(0, 0, R, O, O + $, 1 - t), W.scale(1 / q, 1 / P), W.rotate(-l), W.translate(-u.x, -u.y)
      }, hd = function (x, Y) {
        x && x.beginPath();
        for (var m, u, D, W = [], I = function (X) {
          for (var c, y = /(\-{0,1}[\d\.]+)/gi, B = []; c = y.exec(X);) B.push(parseFloat(c[0]));
          return B
        }, A = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, l = {x: 0, y: 0}; m = A.exec(Y);) {
          var z = m[0], O = z.substr(0, 1);
          if ("M" === O || "m" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 2) {
              var q = t[o], G = t[o + 1];
              "m" === O && (q += l.x, G += l.y), x && x.moveTo(q, G), W.push({x: q, y: G}), l.x = q, l.y = G
            }
            u = D = null
          } else if ("H" === O || "h" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 1) {
              var q = t[o];
              "h" === O && (q += l.x), x && x.lineTo(q, l.y), W.push({x: q, y: l.y}), l.x = q
            }
            u = D = null
          } else if ("C" === O || "c" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 6) {
              var L = t[o], V = t[o + 1], E = t[o + 2], R = t[o + 3], q = t[o + 4], G = t[o + 5];
              "c" === O && (L += l.x, V += l.y, E += l.x, R += l.y, q += l.x, G += l.y), x && x.bezierCurveTo(L, V, E, R, q, G), W.push({
                x: L,
                y: V
              }), W.push({x: E, y: R}), W.push({x: q, y: G}), l.x = q, l.y = G
            }
            u = [L, V, E, R, q, G], D = null
          } else if ("S" === O || "s" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 4) {
              var L, V;
              u ? (L = 2 * u[4] - u[2], V = 2 * u[5] - u[3]) : (L = l.x, V = l.y);
              var E = t[o], R = t[o + 1], q = t[o + 2], G = t[o + 3];
              "s" === O && (E += l.x, R += l.y, q += l.x, G += l.y), x && x.bezierCurveTo(L, V, E, R, q, G), W.push({
                x: L,
                y: V
              }), W.push({x: E, y: R}), W.push({x: q, y: G}), l.x = q, l.y = G
            }
            u = [L, V, E, R, q, G], D = null
          } else if ("Q" === O || "q" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 4) {
              var L = t[o], V = t[o + 1], q = t[o + 2], G = t[o + 3];
              "q" === O && (L += l.x, V += l.y, q += l.x, G += l.y), x && x.quadraticCurveTo(L, V, q, G), W.push({
                x: L,
                y: V
              }), W.push({x: q, y: G}), l.x = q, l.y = G
            }
            u = null, D = [L, V, q, G]
          } else if ("T" === O || "t" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 2) {
              var L, V;
              D ? (L = 2 * D[2] - D[0], V = 2 * D[3] - D[1]) : (L = l.x, V = l.y);
              var q = t[o], G = t[o + 1];
              "t" === O && (q += l.x, G += l.y), x && x.quadraticCurveTo(L, V, q, G), W.push({x: L, y: V}), W.push({
                x: q,
                y: G
              }), l.x = q, l.y = G
            }
            u = null, D = [L, V, q, G]
          } else if ("V" === O || "v" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 1) {
              var G = t[o];
              "v" === O && (G += l.y), x && x.lineTo(l.x, G), W.push({x: l.x, y: G}), l.y = G
            }
            u = D = null
          } else if ("L" === O || "l" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 2) {
              var q = t[o], G = t[o + 1];
              "l" === O && (q += l.x, G += l.y), x && x.lineTo(q, G), W.push({x: q, y: G}), l.x = q, l.y = G
            }
            u = D = null
          } else if ("A" === O || "a" === O) {
            for (var t = I(z), o = 0; o < t.length; o += 7) {
              var H = t[o], X = t[o + 1], S = t[o + 2], a = t[o + 3], r = t[o + 4], q = t[o + 5], G = t[o + 6];
              "a" === O && (q += l.x, G += l.y);
              var U = Zh(l, H, X, S, a, r, {x: q, y: G}, x);
              U && (W = W.concat(U)), l.x = q, l.y = G
            }
            u = D = null
          }
          var n = z.substr(z.length - 1);
          ("z" === n || "Z" === n) && x && x.closePath()
        }
        return W
      }, Eg = function (h, u) {
        var b, O, T = "L" === u[0], A = u.length;
        for (h.save(), T ? (h.transform(u[5], u[6], u[7], u[8], u[9], u[10]), b = h.createLinearGradient(u[1], u[2], u[3], u[4]), O = 11) : (h.transform(u[7], u[8], u[9], u[10], u[11], u[12]), b = h.createRadialGradient(u[1], u[2], u[3], u[4], u[5], u[6]), O = 13); A > O;) b.addColorStop(u[O], u[O + 1]), O += 2;
        h.fillStyle = b
      }, zl = function (A, g) {
        var l = A.s("shape.gradient.pack");
        if (l) {
          for (var F = l.length, e = new Array(F), C = 0; F > C; C++) e[C] = l[C];
          var j, b, i, Y, u, E, I, H, P, y, c, B, D, o = "L" === e[0];
          j = o ? 5 : 7, b = e[j], i = e[j + 1], Y = e[j + 2], u = e[j + 3], E = e[j + 4], I = e[j + 5], H = g[0], P = g[1], y = g[2], c = g[3], B = g[4], D = g[5], e[j] = H * b + y * i, e[j + 1] = P * b + c * i, e[j + 2] = H * Y + y * u, e[j + 3] = P * Y + c * u, e[j + 4] = H * E + y * I + B, e[j + 5] = P * E + c * I + D, A.s("shape.gradient.pack", e)
        }
      }, tb = function (U, $, M, i) {
        var I = !1;
        if (U.beginPath ? U.beginPath() : I = !0, Fi($) && ($ = $._as), Fi(M) && (M = M._as), M && M.length) {
          for (var C, S, G, L, c = 0, N = 0, s = M.length; s > N; N++) C = M[N], 1 === C ? (S = $[c++], U.moveTo(S.x, I ? -S.y : S.y)) : 2 === C ? (S = $[c++], U.lineTo(S.x, I ? -S.y : S.y)) : 3 === C ? (S = $[c++], G = $[c++], U.quadraticCurveTo(S.x, I ? -S.y : S.y, G.x, I ? -G.y : G.y)) : 4 === C ? (S = $[c++], G = $[c++], L = $[c++], U.bezierCurveTo(S.x, I ? -S.y : S.y, G.x, I ? -G.y : G.y, L.x, I ? -L.y : L.y)) : 5 === C && U.closePath();
          i && 5 !== C && U.closePath()
        } else {
          var W, R, H, w = $.length;
          if (w > 0) {
            for (W = $[0], U.moveTo(W.x, I ? -W.y : W.y), R = 1; w > R; R++) H = $[R], U.lineTo(H.x, I ? -H.y : H.y);
            i && U.closePath()
          }
        }
      }, Gq = function (U, S, O, W) {
        if (Fi(U) && (U = U._as), Fi(S) && (S = S._as), S && S.length) {
          O = O || ne;
          for (var l, w, L, d, T, J, q, n, X = [], I = A, _ = 0, g = 0, P = S.length; P > g; g++) if (l = S[g], 1 === l) X.push(I = []), I.push(U[_++]); else if (2 === l) I.push(U[_++]); else if (3 === l) {
            for (w = I[I.length - 1], L = U[_++], d = U[_++], J = 1; O > J; J++) q = mg(J / O, w.x, L.x, d.x), n = mg(J / O, w.y, L.y, d.y), I.push({
              x: q,
              y: n,
              b: !0
            });
            I.push(d)
          } else if (4 === l) {
            for (w = I[I.length - 1], L = U[_++], d = U[_++], T = U[_++], J = 1; O > J; J++) q = Ee(J / O, w.x, L.x, d.x, T.x), n = Ee(J / O, w.y, L.y, d.y, T.y), I.push({
              x: q,
              y: n,
              b: !0
            });
            I.push(T)
          } else 5 === l && I.push(I[0]);
          return W && 5 !== l && I && I.length > 2 && I.push(I[0]), X
        }
        return W && U.length > 2 && (U = U.slice(), U.push(U[0])), U ? [U] : []
      }, Wq = function (k, u, y, O, F, g) {
        var J, n, v, c = Ig(u), o = O, N = c[0], A = c[1], r = c[2];
        if (y) {
          var M = Ig(y);
          J = M[0] - N, n = M[1] - A, v = M[2] - r
        } else J = 255 - N, n = 255 - A, v = 255 - r;
        for (g || (g = O > 10 ? 1 : .5, g = 1 > F ? L(g / F, 2) : g); (O -= g) > 0;) {
          var e = 1 - O / o, j = N + J * e, S = A + n * e, I = r + v * e;
          j = L(t(j), 255), S = L(t(S), 255), I = L(t(I), 255), k.strokeStyle = "rgb(" + j + "," + S + "," + I + ")", k.lineWidth = O, k.stroke()
        }
      }, Tm = function () {
        var x = {};
        return function (l, Z) {
          var X = l + "-" + Z, H = x[X];
          if (H) return H;
          var D, u, q, r = Ig(l);
          return 0 > Z ? (Z = (100 + Z) / 100, D = t(r[0] * Z), u = t(r[1] * Z), q = t(r[2] * Z)) : (Z /= 100, D = r[0], u = r[1], q = r[2], D += (255 - D) * Z, u += (255 - u) * Z, q += (255 - q) * Z, D = L(t(D), 255), u = L(t(u), 255), q = L(t(q), 255)), x[X] = "rgb(" + D + "," + u + "," + q + ")"
        }
      }(), yj = function (q, d, z, S, A, C) {
        C && (q.fillStyle = C), q.beginPath(), q.rect(d, z, S, A), q.fill()
      }, jf = function (w, L, O, I, x, m, t) {
        w.beginPath(), Aq[L](w, O.x, O.y, O.width, O.height, I, x, m, t)
      }, cf = function ($, H, P, Q, b) {
        var N = Aq[P];
        $.fillStyle = N ? N($, H, Q ? Q : Jf, b.x, b.y, b.width, b.height) : H
      }, pc = function (J, m, G, s, F, R) {
        try {
          if (!m.tagName && m.comps) {
            m._cacheImage_ || (m._cacheImage_ = {});
            var P;
            P = "override" === s ? "colors_override" : "override_rgb" === s ? "colors_override_rgb" : "override_a" === s ? "colors_override_a" : "colors", m._cacheImage_[P] || (m._cacheImage_[P] = {__count__: 0});
            var v = m._cacheImage_[P][G];
            v || (m._cacheImage_[P].__count__ > E.imageCacheThreshold && (m._cacheImage_[P] = {__count__: 0}), v = Q.Default.toCanvas(m, Hk(m), Ll(m), null, F, R, G, null, s), m._cacheImage_[P][G] = v, m._cacheImage_[P].__count__++), m = v
          }
          J.fillStyle = J.createPattern(m, "repeat")
        } catch (p) {
          J.fillStyle = "black"
        }
      }, Hg = function (F, X, C, Q, t, E, x) {
        F.save(), F.translate(X, C), F.scale(1, x / E), F.arc(0, 0, E, Q, t), F.restore()
      }, Pf = function (g, b, K, n, E, N, u, M) {
        var S, d, q, i, $, U, O, Q, A, h, W;
        if (C(E) > 2 * I && (E = 2 * I), $ = t(C(E) / (I / 4)), S = E / $, d = -S, q = -n, $ > 0) {
          U = b + J(n) * N, O = K + D(-n) * u, M ? g.lineTo(U, O) : g.moveTo(U, O);
          for (var p = 0; $ > p; p++) q += d, i = q - d / 2, Q = b + J(q) * N, A = K + D(q) * u, h = b + J(i) * (N / J(d / 2)), W = K + D(i) * (u / J(d / 2)), g.quadraticCurveTo(h, W, Q, A)
        }
      }, Pi = function (e, C, k, Q, p, z, K, v, a) {
        6 === arguments.length && (K = z, v = z, a = z);
        var S = C + Q, G = k + p, A = p > Q ? 2 * Q : 2 * p;
        z = A > z ? z : A, K = A > K ? K : A, v = A > v ? v : A, a = A > a ? a : A;
        var d = .29 * a, f = .58 * a;
        e.moveTo(S, G - a), e.quadraticCurveTo(S, G - f, S - d, G - d), e.quadraticCurveTo(S - f, G, S - a, G), d = .29 * v, f = .58 * v, e.lineTo(C + v, G), e.quadraticCurveTo(C + f, G, C + d, G - d), e.quadraticCurveTo(C, G - f, C, G - v), d = .29 * z, f = .58 * z, e.lineTo(C, k + z), e.quadraticCurveTo(C, k + f, C + d, k + d), e.quadraticCurveTo(C + f, k, C + z, k), d = .29 * K, f = .58 * K, e.lineTo(S - K, k), e.quadraticCurveTo(S - f, k, S - d, k + d), e.quadraticCurveTo(S, k + f, S, k + K), e.lineTo(S, G - a)
      }, Yo = function (c, U, J, Q, S, X, o) {
        U && (J = l(J), Q = l(Q), o || (o = 1), c.fillStyle = U, c.beginPath(), c.rect(J, Q, o, X), c.rect(J, Q, S, o), X - o > 0 && c.rect(J, Q + X - o, S, o), S - o > 0 && c.rect(J + S - o, Q, o, X), c.fill())
      }, Yj = function (o, n, s, t) {
        var F = t.x, J = t.y, B = t.width, R = t.height;
        if (!(!n || !s || 0 >= B || 0 >= R)) {
          var Y, c = Pc(n), P = Kn(n), D = s > 0;
          1 === s || -1 === s ? (o.fillStyle = D ? c : P, o.beginPath(), o.rect(F, J, 1, R), o.rect(F, J, B, 1), o.fill(), o.fillStyle = D ? P : c, o.beginPath(), o.rect(F, J + R - 1, B, 1), o.rect(F + B - 1, J, 1, R), o.fill()) : (s = L(C(s), L(B / 2, R / 2)), Y = o.createLinearGradient(F, J, F + s, J), Y.addColorStop(0, D ? c : P), Y.addColorStop(1, n), o.fillStyle = Y, o.beginPath(), o.moveTo(F, J), o.lineTo(F + s, J + s), o.lineTo(F + s, J + R - s), o.lineTo(F, J + R), o.lineTo(F, J), o.fill(), Y = o.createLinearGradient(F, J, F, J + s), Y.addColorStop(0, D ? c : P), Y.addColorStop(1, n), o.fillStyle = Y, o.beginPath(), o.moveTo(F, J), o.lineTo(F + s, J + s), o.lineTo(F + B - s, J + s), o.lineTo(F + B, J), o.lineTo(F, J), o.fill(), Y = o.createLinearGradient(F, J + R, F, J + R - s), Y.addColorStop(0, D ? P : c), Y.addColorStop(1, n), o.fillStyle = Y, o.beginPath(), o.moveTo(F, J + R), o.lineTo(F + s, J + R - s), o.lineTo(F + B - s, J + R - s), o.lineTo(F + B, J + R), o.lineTo(F, J + R), o.fill(), Y = o.createLinearGradient(F + B, J, F + B - s, J), Y.addColorStop(0, D ? P : c), Y.addColorStop(1, n), o.fillStyle = Y, o.beginPath(), o.moveTo(F + B, J), o.lineTo(F + B - s, J + s), o.lineTo(F + B - s, J + R - s), o.lineTo(F + B, J + R), o.lineTo(F + B, J), o.fill())
        }
      }, Vh = function (M, k, V, N, A, n, o) {
        var w = M.createLinearGradient(N, A, n, o);
        return w.addColorStop(0, V), w.addColorStop(1, k), w
      }, Pp = function (A, I, V, Z, S, Y, e) {
        var p = A.createLinearGradient(Z, S, Y, e);
        return p.addColorStop(0, I), p.addColorStop(.5, V), p.addColorStop(1, I), p
      }, fd = function (j, w, m, b, C, B, Z) {
        var S = j.createLinearGradient(b, C, B, Z);
        return S.addColorStop(0, w), S.addColorStop(1 / 3, m), S.addColorStop(2 / 3, w), S.addColorStop(1, m), S
      }, Bb = function ($, p, C, Z, F, d, W, b, A) {
        var X = $.createRadialGradient(Z + d * b, F + W * A, L(d, W) / 24, Z + d / 2, F + W / 2, R(d, W) / 2);
        return X.addColorStop(0, C), X.addColorStop(1, p), X
      }, Aq = {
        polygon: function (F, Z, j, t, l, r) {
          (r == A || 3 > r) && (r = 6);
          for (var B, e, S = L(t, l) / 2, w = Z + t / 2, H = j + l / 2, T = 0, f = 2 * I / r, i = 0; r > i; i++) B = w + J(T) * S, e = H + D(T) * S, 0 === i ? F.moveTo(B, e) : F.lineTo(B, e), T += f;
          F.closePath()
        }, arc: function (_, N, J, Q, x, s, i, o, h) {
          s == A && (s = I), i == A && (i = U), o == A && (o = !0);
          var Y = N + Q / 2, M = J + x / 2;
          o && _.moveTo(Y, M), h ? Hg(_, Y, M, s, i, Q / 2, x / 2) : _.arc(Y, M, L(Q, x) / 2, s, i), o && _.closePath()
        }, rect: function (y, z, c, G, d) {
          y.rect(z, c, G, d)
        }, circle: function (z, h, X, y, $) {
          z.arc(h + y / 2, X + $ / 2, L(y, $) / 2, 0, U, !0)
        }, oval: function (w, h, V, e, k) {
          Hg(w, h + e / 2, V + k / 2, 0, U, e / 2, k / 2)
        }, roundRect: function (c, w, n, $, x, R) {
          R == A && (R = L(L($, x) / 4, 8)), Pi(c, w, n, $, x, R)
        }, star: function (X, M, Z, n, f) {
          var H = 2 * n, A = 2 * f, d = M + n / 2, k = Z + f / 2;
          X.moveTo(d - H / 4, k - A / 12), X.lineTo(M + .306 * n, Z + .579 * f), X.lineTo(d - H / 6, k + A / 4), X.lineTo(M + n / 2, Z + .733 * f), X.lineTo(d + H / 6, k + A / 4), X.lineTo(M + .693 * n, Z + .579 * f), X.lineTo(d + H / 4, k - A / 12), X.lineTo(M + .611 * n, Z + .332 * f), X.lineTo(d + 0, k - A / 4), X.lineTo(M + .388 * n, Z + .332 * f), X.closePath()
        }, triangle: function (w, l, P, m, J) {
          w.moveTo(l + m / 2, P), w.lineTo(l + m, P + J), w.lineTo(l, P + J), w.closePath()
        }, hexagon: function (V, Z, B, R, K) {
          V.moveTo(Z, B + K / 2), V.lineTo(Z + R / 4, B + K), V.lineTo(Z + 3 * R / 4, +B + K), V.lineTo(Z + R, B + K / 2), V.lineTo(Z + 3 * R / 4, B), V.lineTo(Z + R / 4, B), V.closePath()
        }, pentagon: function (O, d, R, q, G) {
          var p = 2 * q, N = 2 * G, g = d + q / 2, A = R + G / 2;
          O.moveTo(g - p / 4, A - N / 12), O.lineTo(g - p / 6, A + N / 4), O.lineTo(g + p / 6, A + N / 4), O.lineTo(g + p / 4, A - N / 12), O.lineTo(g + 0, A - N / 4), O.closePath()
        }, diamond: function (H, h, O, l, k) {
          H.moveTo(h + l / 2, O), H.lineTo(h, O + k / 2), H.lineTo(h + l / 2, O + k), H.lineTo(h + l, O + k / 2), H.closePath()
        }, rightTriangle: function (u, _, S, l, m) {
          u.moveTo(_, S), u.lineTo(_ + l, S + m), u.lineTo(_, S + m), u.closePath()
        }, parallelogram: function (t, i, k, Z, j) {
          var I = Z / 4;
          t.moveTo(i + I, k), t.lineTo(i + Z, k), t.lineTo(i + Z - I, k + j), t.lineTo(i, k + j), t.closePath()
        }, trapezoid: function ($, K, P, G, w) {
          var o = G / 4;
          $.moveTo(K + o, P), $.lineTo(K + G - o, P), $.lineTo(K + G, P + w), $.lineTo(K, P + w), $.closePath()
        }, "linear.southwest": function (z, h, P, G, k, q, S) {
          return Vh(z, h, P, G, k + S, G + q, k)
        }, "linear.southeast": function ($, l, P, D, r, Z, X) {
          return Vh($, l, P, D + Z, r + X, D, r)
        }, "linear.northwest": function (o, g, r, J, h, $, f) {
          return Vh(o, g, r, J, h, J + $, h + f)
        }, "linear.northeast": function (s, T, t, F, W, $, l) {
          return Vh(s, T, t, F + $, W, F, W + l)
        }, "linear.north": function (e, d, E, k, c, W, r) {
          return Vh(e, d, E, k, c, k, c + r)
        }, "linear.south": function (q, t, M, l, r, R, A) {
          return Vh(q, t, M, l, r + A, l, r)
        }, "linear.west": function (K, n, d, J, V, r) {
          return Vh(K, n, d, J, V, J + r, V)
        }, "linear.east": function (m, V, x, Z, A, a) {
          return Vh(m, V, x, Z + a, A, Z, A)
        }, "radial.center": function (u, N, n, b, P, X, k) {
          return Bb(u, N, n, b, P, X, k, .5, .5)
        }, "radial.southwest": function (K, r, b, z, y, E, N) {
          return Bb(K, r, b, z, y, E, N, .25, .75)
        }, "radial.southeast": function (P, G, r, K, o, C, m) {
          return Bb(P, G, r, K, o, C, m, .75, .75)
        }, "radial.northwest": function (D, W, u, Z, j, F, X) {
          return Bb(D, W, u, Z, j, F, X, .25, .25)
        }, "radial.northeast": function (C, _, N, s, q, l, x) {
          return Bb(C, _, N, s, q, l, x, .75, .25)
        }, "radial.north": function (E, s, m, Q, B, R, H) {
          return Bb(E, s, m, Q, B, R, H, .5, .25)
        }, "radial.south": function (s, p, i, h, t, m, f) {
          return Bb(s, p, i, h, t, m, f, .5, .75)
        }, "radial.west": function (G, p, Y, I, N, D, C) {
          return Bb(G, p, Y, I, N, D, C, .25, .5)
        }, "radial.east": function (A, P, O, e, g, h, R) {
          return Bb(A, P, O, e, g, h, R, .75, .5)
        }, "spread.horizontal": function (O, y, S, W, t, Y) {
          return Pp(O, y, S, W, t, W + Y, t)
        }, "spread.vertical": function (d, L, m, n, s, _, q) {
          return Pp(d, L, m, n, s, n, s + q)
        }, "spread.diagonal": function (i, A, d, L, w, h, t) {
          return Pp(i, A, d, L + h, w, L, w + t)
        }, "spread.antidiagonal": function (H, V, W, N, D, X, P) {
          return Pp(H, V, W, N, D, N + X, D + P)
        }, "spread.north": function (G, I, n, x, S, F, X) {
          return fd(G, I, n, x, S - X / 4, x, S + X + X / 4)
        }, "spread.south": function (P, v, U, F, J, R, q) {
          return fd(P, U, v, F, J - q / 4, F, J + q + q / 4)
        }, "spread.west": function (P, m, H, F, s, p) {
          return fd(P, m, H, F - p / 4, s, F + p + p / 4, s)
        }, "spread.east": function (J, q, i, j, I, z) {
          return fd(J, i, q, j - z / 4, I, j + z + z / 4, I)
        }
      }, Le = function (m, r, y) {
        return new uh(m).tf(r, y)
      }, Xg = function (c) {
        var t = c.touches[0], i = c.touches[1], K = t.clientX, V = t.clientY, L = i.clientX, Z = i.clientY;
        return Y((K - L) * (K - L) + (V - Z) * (V - Z))
      }, iq = (function () {
        for (var I = 0, D = mr.split(""), z = 0; z < D.length; z++) I = 10 * g(D[z]) + I;
        return mh(r[Zb.toString(8 * z) + Dg.substr(z) + 2]), I
      }(), function (V, q, $) {
        for (var v = 0; v < $.size(); v++) {
          var C = $.get(v);
          V.co(C) && q.add(C)
        }
        for (v = 0; v < $.size(); v++) C = $.get(v), iq(V, q, C._children)
      }), Jg = function (L, M, V) {
        for (var B = 0; B < V.size(); B++) {
          var O = V.get(V.size() - 1 - B);
          L.co(O) && M.add(O)
        }
        for (B = 0; B < V.size(); B++) O = V.get(B), Jg(L, M, O._children)
      }, Ce = function (w, N, X) {
        for (var P = !1, s = 0; s < X.size(); s++) {
          var g = X.get(s);
          w.co(g) ? P && N.add(g) : P = 1
        }
        for (s = 0; s < X.size(); s++) g = X.get(s), Ce(w, N, g._children)
      }, Er = function (P, k, S) {
        for (var v = !1, L = 0; L < S.size(); L++) {
          var j = S.get(S.size() - 1 - L);
          P.co(j) ? v && k.add(j) : v = !0
        }
        for (L = 0; L < S.size(); L++) j = S.get(L), Er(P, k, j._children)
      }, Jh = function (M, R, d, j) {
        var v = j == A;
        if (0 !== R || 0 !== d || !v && 0 !== j) {
          var m, h, s, S, $, Y = new Oh;
          M.each(function (O) {
            if (Kf(O)) {
              var N = !0;
              if (s) for (m = 0; m < s.size(); m++) h = s.get(m), h.isHostOn(O) ? (s.removeAt(m), m--, Y.remove(h)) : N && (O.isHostOn(h) || O.isLoopedHostOn(h)) && (N = !1);
              if (S) for (m = 0; m < S.size(); m++) h = S.get(m), pb(h, O) ? (S.removeAt(m), m--, Y.remove(h)) : N && pb(O, h) && (N = !1);
              if ($) for (m = 0; m < $.size(); m++) h = $.get(m), Ge(h, O) ? ($.removeAt(m), m--, Y.remove(h)) : N && Ge(O, h) && (N = !1);
              N && (Y.add(O), (O._host || O._69O) && (s || (s = new Oh), s.add(O)), (Xo(O) || Xo(O._parent)) && (S || (S = new Oh), S.add(O)), (si(O) || si(O._parent)) && ($ || ($ = new Oh), $.add(O)))
            } else if (yc(O) && O.s(Vm) === vl) {
              var x = O.s(Ni);
              if (x && !x.isEmpty()) {
                var p = new Oh;
                x.each(function (n) {
                  n = Wf(n), v ? (n.x += R, n.y += d) : (n.x += R, n.y += j, n.e == A ? n.e = d : n.e += d), p.add(n)
                }), O.s(Ni, p)
              }
            }
          }), Y.each(function (y) {
            v ? y.translate(R, d) : y.translate3d(R, d, j)
          })
        }
      }, Oj = function (g, W) {
        for (; g && !g.hasOwnProperty(W);) g = F.getPrototypeOf(g);
        return g && F.getOwnPropertyDescriptor(g, W)
      }, og = F.getPrototypeOf ? function (A, f, s) {
        var V = Oj(f, s);
        V && F.defineProperty(A, s, V)
      } : function (v, Z, z) {
        v[z] = Z[z]
      }, np = {
        1: 29,
        2: 30,
        3: 31,
        4: 32,
        5: 33,
        6: 26,
        7: 27,
        8: 28,
        9: 21,
        10: 22,
        11: 23,
        12: 24,
        13: 25,
        14: 14,
        15: 15,
        16: 16,
        17: 17,
        18: 18,
        19: 19,
        20: 20,
        21: 9,
        22: 10,
        23: 11,
        24: 12,
        25: 13,
        26: 6,
        27: 7,
        28: 8,
        29: 1,
        30: 2,
        31: 3,
        32: 4,
        33: 5,
        34: 36,
        35: 37,
        36: 34,
        37: 35,
        38: 54,
        39: 55,
        40: 52,
        41: 53,
        42: 50,
        43: 51,
        44: 49,
        50: 42,
        51: 43,
        52: 40,
        53: 41,
        54: 38,
        55: 39
      }, um = function () {
        var I = {
          1: function (R, p) {
            return {x: R.x - p.width / 2, y: R.y - p.height / 2}
          }, 2: function (A, p) {
            return {x: A.x + p.width / 2, y: A.y - p.height / 2}
          }, 3: function (G, m) {
            return {x: G.x + G.width / 2, y: G.y - m.height / 2}
          }, 4: function (V, N) {
            return {x: V.x + V.width - N.width / 2, y: V.y - N.height / 2}
          }, 5: function (y, U) {
            return {x: y.x + y.width + U.width / 2, y: y.y - U.height / 2}
          }, 6: function (X) {
            return {x: X.x, y: X.y}
          }, 7: function (L) {
            return {x: L.x + L.width / 2, y: L.y}
          }, 8: function (I) {
            return {x: I.x + I.width, y: I.y}
          }, 9: function (R, x) {
            return {x: R.x - x.width / 2, y: R.y + x.height / 2}
          }, 10: function (_, n) {
            return {x: _.x + n.width / 2, y: _.y + n.height / 2}
          }, 11: function (W, l) {
            return {x: W.x + W.width / 2, y: W.y + l.height / 2}
          }, 12: function (F, J) {
            return {x: F.x - J.width / 2 + F.width, y: F.y + J.height / 2}
          }, 13: function (e, W) {
            return {x: e.x + e.width + W.width / 2, y: e.y + W.height / 2}
          }, 14: function (W, s) {
            return {x: W.x - s.width / 2, y: W.y + W.height / 2}
          }, 15: function (Z) {
            return {x: Z.x, y: Z.y + Z.height / 2}
          }, 16: function (i, r) {
            return {x: i.x + r.width / 2, y: i.y + i.height / 2}
          }, 17: function (Q) {
            return {x: Q.x + Q.width / 2, y: Q.y + Q.height / 2}
          }, 18: function (O, I) {
            return {x: O.x + O.width - I.width / 2, y: O.y + O.height / 2}
          }, 19: function (Z) {
            return {x: Z.x + Z.width, y: Z.y + Z.height / 2}
          }, 20: function (t, y) {
            return {x: t.x + t.width + y.width / 2, y: t.y + t.height / 2}
          }, 21: function (N, z) {
            return {x: N.x - z.width / 2, y: N.y + N.height - z.height / 2}
          }, 22: function (Z, V) {
            return {x: Z.x + V.width / 2, y: Z.y + Z.height - V.height / 2}
          }, 23: function (Q, F) {
            return {x: Q.x + Q.width / 2, y: Q.y + Q.height - F.height / 2}
          }, 24: function (U, N) {
            return {x: U.x + U.width - N.width / 2, y: U.y + U.height - N.height / 2}
          }, 25: function (T, o) {
            return {x: T.x + T.width + o.width / 2, y: T.y + T.height - o.height / 2}
          }, 26: function (E) {
            return {x: E.x, y: E.y + E.height}
          }, 27: function (b) {
            return {x: b.x + b.width / 2, y: b.y + b.height}
          }, 28: function (w) {
            return {x: w.x + w.width, y: w.y + w.height}
          }, 29: function (r, X) {
            return {x: r.x - X.width / 2, y: r.y + r.height + X.height / 2}
          }, 30: function (i, E) {
            return {x: i.x + E.width / 2, y: i.y + i.height + E.height / 2}
          }, 31: function (e, a) {
            return {x: e.x + e.width / 2, y: e.y + e.height + a.height / 2}
          }, 32: function (y, S) {
            return {x: y.x + y.width - S.width / 2, y: y.y + y.height + S.height / 2}
          }, 33: function (d, B) {
            return {x: d.x + d.width + B.width / 2, y: d.y + d.height + B.height / 2}
          }, 34: function (r, o) {
            return {x: r.x, y: r.y - o.height / 2}
          }, 35: function (S, g) {
            return {x: S.x + S.width, y: S.y - g.height / 2}
          }, 36: function (j, p) {
            return {x: j.x, y: j.y + j.height + p.height / 2}
          }, 37: function (c, M) {
            return {x: c.x + c.width, y: c.y + c.height + M.height / 2}
          }, 38: function (j, t) {
            return {x: j.x + j.width / 4, y: j.y - t.height / 2}
          }, 39: function (P, t) {
            return {x: P.x + 3 * P.width / 4, y: P.y - t.height / 2}
          }, 40: function (N) {
            return {x: N.x + N.width / 4, y: N.y}
          }, 41: function (E) {
            return {x: E.x + 3 * E.width / 4, y: E.y}
          }, 42: function (O, X) {
            return {x: O.x + O.width / 4, y: O.y + X.height / 2}
          }, 43: function (f, i) {
            return {x: f.x + 3 * f.width / 4, y: f.y + i.height / 2}
          }, 44: function (M, o) {
            return {x: M.x + M.width / 2, y: M.y + M.height / 2 - o.height / 2}
          }, 45: function (E) {
            return {x: E.x + E.width / 4, y: E.y + E.height / 2}
          }, 46: function (t, V) {
            return {x: t.x + t.width / 2 - V.width / 2, y: t.y + t.height / 2}
          }, 47: function (e, N) {
            return {x: e.x + e.width / 2 + N.width / 2, y: e.y + e.height / 2}
          }, 48: function (k) {
            return {x: k.x + 3 * k.width / 4, y: k.y + k.height / 2}
          }, 49: function (B, b) {
            return {x: B.x + B.width / 2, y: B.y + B.height / 2 + b.height / 2}
          }, 50: function (u, Y) {
            return {x: u.x + u.width / 4, y: u.y + u.height - Y.height / 2}
          }, 51: function (M, y) {
            return {x: M.x + 3 * M.width / 4, y: M.y + M.height - y.height / 2}
          }, 52: function (n) {
            return {x: n.x + n.width / 4, y: n.y + n.height}
          }, 53: function (i) {
            return {x: i.x + 3 * i.width / 4, y: i.y + i.height}
          }, 54: function (t, o) {
            return {x: t.x + t.width / 4, y: t.y + t.height + o.height / 2}
          }, 55: function (N, Z) {
            return {x: N.x + 3 * N.width / 4, y: N.y + N.height + Z.height / 2}
          }
        };
        return xg(r) ? function (o, j, E) {
          return I[o](j, E ? E : ui)
        } : void 0
      }();
    Ak(w, {
      highlight: "#1ABC9C",
      label: "#000",
      labelSelect: "#FFF",
      transparent: "rgba(0,0,0,0.35)",
      titleBackground: "#2C3E50",
      titleIconBackground: "#868686",
      headerBackground: "#ECF0F1",
      headerIconBackground: "#868686",
      headerSeparator: "#868686",
      headerLine: "#D9D9D9",
      background: "#FFF",
      disabledBackground: "rgba(255,255,255,0.65)",
      toolTipBackground: "#FFFFE0",
      rectSelectBorder: "#2C3E50",
      rectSelectBackground: "rgba(0,0,0,0.35)",
      editPointBorder: "#2C3E50",
      editPointBackground: "#D9D9D9",
      dash: "#2C3E50",
      groupBackground: "#ECF0F1",
      groupTitleBackground: "#2C3E50",
      gridBackground: "#D9D9D9",
      gridCellBorderColor: "#868686",
      gridBlockColor: "#868686",
      reverse: "#868686",
      contentIconBackground: "#868686",
      contentLine: "#D9D9D9",
      widgetBackground: "#ECF0F1",
      widgetBorder: "#D9D9D9",
      widgetIconBackground: "#868686",
      widgetIconBorder: "#868686",
      widgetIconGradient: "#D9D9D9",
      widgetIconHighlight: "#43AFF1",
      imageBackground: "#3498DB",
      imageGradient: "#D9D9D9",
      chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
    }, !0);
    var Ij = w.reverse, hk = w.transparent, ff = w.rectSelectBackground, us = w.dash, ue = w.titleBackground,
      cp = w.titleIconBackground, kn = w.headerBackground, cc = w.headerIconBackground, rg = w.headerSeparator,
      yo = w.headerLine, Nq = w.contentIconBackground, Eb = w.contentLine,
      Pe = (w.widgetIconHighlight, w.widgetIconBorder), Kj = (w.widgetIconGradient, w.imageBackground),
      Jf = w.imageGradient, Br = w.highlight, ri = w.label, Qk = w.labelSelect;
    if (T && !r.shutAlert) {
      var Cj = new Date, $k = T.split("-"), jh = new Date(Cj.getFullYear(), Cj.getMonth(), Cj.getDate()),
        T = new Date(g($k[0], 10), g($k[1], 10) - 1, g($k[2], 10)), Oo = jh.getTime(), oe = T.getTime(),
        Ag = H + "_try", Yq = r.alert;
      try {
        var ee = r.localStorage;
        if (ee && Yq) if (oe > Oo && 1728e6 > oe - Oo) {
          var He = (oe - Oo) / 864e5;
          ee && ee[Ag] != He && (ee[Ag] = He, Yq("HT for Web free trial license will expire in " + He + " days, please apply for a new license!"))
        } else Oo >= oe && Yq("Your free trial of HT for Web has expired!"), ee && delete ee[Ag]
      } catch (em) {
      }
    }
    var Rf = {
      ms_ac: function (Y, P) {
        for (var H = P.ms_ac, k = 0; k < H.length; k++) Oc(Y, H[k])
      }, ms_listener: function (q) {
        q.addListeners = function () {
          for (var D = this, z = 0; z < tp.length; z++) D["handle_" + tp[z]] && Fd(tp[z], D.getView(), D)
        }, q.removeListeners = function () {
          for (var F = this, D = 0; D < tp.length; D++) F["handle_" + tp[D]] && bo(tp[D], F.getView(), F)
        }
      }, ms_fire: function (s) {
        s.mp = function (i, p, H) {
          this.addPropertyChangeListener(i, p, H)
        }, s.ump = function (V, h) {
          this.removePropertyChangeListener(V, h)
        }, s.fp = function (y, c, X, $, O) {
          return this.firePropertyChange(y, c, X, $, O)
        }, s.addPropertyChangeListener = function (s, g, k) {
          var X = this;
          X._62I || (X._62I = new Ke), X._62I.add(s, g, k)
        }, s.removePropertyChangeListener = function (C, q) {
          this._62I && this._62I.remove(C, q)
        }, s.firePropertyChange = function (h, F, U, $, e) {
          if ($) {
            if ($(F, U)) return !1
          } else if (F === U) return !1;
          var O = this, P = e || {};
          return P.property = h, P.oldValue = F, P.newValue = U, P.source = O, P.data = O, O._62I && O._62I.fire(P), O.onPropertyChanged && O.onPropertyChanged(P), !0
        }
      }, ms_attr: function (a) {
        a.a = function (V, X) {
          var h = this;
          if (2 === arguments.length) h.setAttr(V, X); else {
            if (!mk(V)) return h.getAttr(V);
            for (var W in V) h.setAttr(W, V[W])
          }
          return h
        }, a.getAttr = function (p, L) {
          if (L === S && (L = 1), this._attrObject && p in this._attrObject) return this._attrObject[p];
          if (this.getImage) {
            var z = this.getImage();
            if (pp(z) && (z = Bk[z]), mk(z) && "dataBindings" in z) for (var H = z.dataBindings, M = H.length - 1; M >= 0; M--) {
              var W = H[M];
              if (W.attr === p) {
                if ("defaultValue" in W) return W.defaultValue;
                break
              }
            }
          }
          return L ? P[p] : S
        }, a.setAttr = function (A, h) {
          var P = this;
          P._attrObject || (P._attrObject = {});
          var o = P._attrObject[A];
          h === S ? delete P._attrObject[A] : P._attrObject[A] = h, P.fp && P.fp("a:" + A, o, h) && P.onAttrChanged && P.onAttrChanged(A, o, h)
        }, a.getSerializableAttrs = function () {
          var M, f = {};
          for (M in this._attrObject) f[M] = 1;
          return f
        }
      }, ms_bnb: function (X) {
        X.getBodyColor = function (S) {
          return S.s("body.color")
        }, X.getBorderColor = function (J) {
          return J.s("border.color")
        }
      }, _51o: function (i) {
        i.mi = function (V, z, T) {
          this.addInteractorListener(V, z, T)
        }, i.umi = function (S, l) {
          this.removeInteractorListener(S, l)
        }, i.fi = function (J) {
          this.fireInteractorEvent(J)
        }, i.addInteractorListener = function (N, u, W) {
          var l = this;
          l._63I || (l._63I = new Ke), l._63I.add(N, u, W)
        }, i.removeInteractorListener = function (n, Y) {
          this._63I.remove(n, Y)
        }, i.fireInteractorEvent = function (t) {
          this._63I && this._63I.fire(t)
        }, i.setInteractors = function (K) {
          var Z = this, f = Z._interactors;
          f && f.each(function (K) {
            K.tearDown()
          }), cl(K) && (K = new Oh(K)), Z._interactors = K, K && K.each(function (Q) {
            Q.setUp()
          }), Z.fp("interactors", f, K), Z.invalidateSelection()
        }, i.getInteractors = function () {
          return this._interactors
        }
      }, _49o: function (E) {
        E._44O = A, E._45O = A, E.getTopPainters = function () {
          return this._44O
        }, E.getBottomPainters = function () {
          return this._45O
        }, E.addTopPainter = function (e) {
          var C = this;
          C._44O || (C._44O = new Oh), C._44O.contains(e) || (C._44O.add(e), C.redraw && C.redraw())
        }, E.removeTopPainter = function (h) {
          var Q = this;
          Q._44O && (Q._44O.remove(h), Q.redraw && Q.redraw())
        }, E.addBottomPainter = function (q) {
          var F = this;
          F._45O || (F._45O = new Oh), F._45O.contains(q) || (F._45O.add(q), F.redraw && F.redraw())
        }, E.removeBottomPainter = function (M) {
          var c = this;
          c._45O && (c._45O.remove(M), c.redraw && c.redraw())
        }, E._93db = function (_, p) {
          var t = this;
          t._45O && t._45O.each(function (D) {
            D.draw ? D.draw(_, p) : D.call(t, _, p)
          })
        }, E._92db = function (b, u) {
          var X = this;
          X._44O && X._44O.each(function (j) {
            j.draw ? j.draw(b, u) : j.call(X, b, u)
          })
        }
      }, ms_sm: function (R) {
        R.sm = function () {
          return this.getSelectionModel()
        }, R.setSelectableFunc = function (Y) {
          this.sm().setFilterFunc(Y)
        }, R.getSelectableFunc = function () {
          return this.sm().getFilterFunc()
        }, R.getSelectionModel = function () {
          var v = this;
          return v._selectionModel ? v._selectionModel : v.dm().sm()
        }, R.isSelectionModelShared = function () {
          return !this._selectionModel
        }, R.setSelectionModelShared = function (V) {
          var E = this, P = !E._selectionModel, T = E.handleSelectionChange, S = E.dm();
          P !== V && (E.invalidateSelection && E.invalidateSelection(), V ? (S.sm().ms(T, E), E._selectionModel.ums(T, E), E._selectionModel.dispose(), E._selectionModel = A) : (S.sm().ums(T, E), E._selectionModel = new Tc(S), E._selectionModel.ms(T, E)), E.onSelectionModelSharedChanged(), E.fp("selectionModelShared", P, V))
        }, R.onSelectionModelSharedChanged = function () {
          var i = this;
          i.redraw(), i.invalidateSelection && i.invalidateSelection()
        }, R.removeSelection = function () {
          var Z = this.dm();
          Z.beginTransaction(), this.sm().toSelection().each(Z.remove, Z), Z.endTransaction()
        }, R.selectAll = function () {
          var j = this;
          j.sm().ss(j.dm().toDatas(function (Q) {
            return j.isVisible(Q) && j.isSelectable(Q)
          }))
        }, R.isSelected = function (p) {
          return this.sm().co(p)
        }, R.isSelectedById = function (Y) {
          var t = this.dm().getDataById(Y);
          return t ? this.isSelected(t) : !1
        }, R.isSelectable = function (A) {
          return this.sm().isSelectable(A)
        }
      }, ms_tx: function (E) {
        E._64I = 0, E._65O = 0, E.isScrollable = function () {
          return this.getWidth() < this._64I
        }, E._40o = function () {
          return this.isScrollable()
        }, E.getLogicalPoint = function (C) {
          return Gh(C, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
        }, E.tx = function (W) {
          return W === S ? this.getTranslateX() : (this.setTranslateX(W), void 0)
        }, E.getTranslateX = function () {
          return this._65O
        }, E.setTranslateX = function (p) {
          var s = this, r = s.getWidth() - s._64I;
          r > p && (p = r), p > 0 && (p = 0), p = l(p);
          var v = s._65O;
          s._65O = p, s.fp(vp, v, p)
        }
      }, ms_ty: function (L) {
        L._23Q = 0, L._66O = 0, L._41o = function () {
          return this.getHeight() < this._23Q
        }, L.getLogicalPoint = function (E) {
          return Gh(E, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
        }, L.ty = function (h) {
          return h === S ? this.getTranslateY() : (this.setTranslateY(h), void 0)
        }, L.getTranslateY = function () {
          return this._66O
        }, L.setTranslateY = function (j) {
          var o = this, h = o.getHeight() - o._23Q;
          h > j && (j = h), j > 0 && (j = 0), j = l(j);
          var e = o._66O;
          o._66O = j, o.fp(yi, e, j)
        }
      }, ms_txy: function (d) {
        d._65O = 0, d._66O = 0, d.tx = function (T) {
          return T === S ? this.getTranslateX() : (this.setTranslateX(T), void 0)
        }, d.ty = function ($) {
          return $ === S ? this.getTranslateY() : (this.setTranslateY($), void 0)
        }, d.onTranslateEnded = function () {
        }, d.setTranslate = function (S, y, m) {
          var x = this;
          if (m = br(m)) {
            x._65I && x._65I.stop(!0);
            var M = x.tx(), g = x.ty();
            m.action = function (s) {
              x.setTranslate(M + (S - M) * s, g + (y - g) * s)
            }, m._37o = function () {
              delete x._66I, delete x._65I, x.onTranslateEnded()
            }, x._66I = 1, x._65I = bi(m)
          } else x.tx(S), x.ty(y)
        }, d.getTranslateX = function () {
          return this._65O
        }, d.setTranslateX = function (f) {
          var I = this;
          f = I.adjustTranslateX(f);
          var g = I._65O;
          I._65O = f, I.fp(vp, g, f)
        }, d.getTranslateY = function () {
          return this._66O
        }, d.setTranslateY = function (t) {
          var O = this;
          t = O.adjustTranslateY(t);
          var y = O._66O;
          O._66O = t, O.fp(yi, y, t)
        }, d.adjustTranslateX = function (G) {
          return l(G)
        }, d.adjustTranslateY = function (C) {
          return l(C)
        }, d.translate = function (k, N, Q) {
          this.setTranslate(this.tx() + k, this.ty() + N, Q)
        }, d.getLogicalPoint = function (U) {
          var z = this;
          return Gh(U, this._canvas || z._view, z.tx(), z.ty())
        }
      }, ms_dm: function (_) {
        _.dm = function (h) {
          return h ? (this.setDataModel(h), void 0) : this.getDataModel()
        }, _.getDataModel = function () {
          return this._dataModel
        }
      }, ms_lp: function (M) {
        M.lp = function (v) {
          return this.getLogicalPoint(v)
        }
      }, ms_v: function (L) {
        L._disabled = !1, L.setDisabled = function (l, c) {
          var P = this, k = P._disabled;
          k !== l && (k && (up(P._63O), delete P._63O), l && (wm(P._view, P._63O = Ve(c)), P.iv()), P._disabled = l, P.fp("disabled", k, l))
        }, L.isDisabled = function () {
          return this._disabled
        }, L.getDisabledDiv = function () {
          return this._63O
        }, L.getView = function () {
          return this._view
        }, L.addToDOM = function (f) {
          var i = this, X = i.getView(), V = X.style;
          f = f || y.body, f.appendChild(X), V.left = "0", V.right = "0", V.top = "0", V.bottom = "0", r.addEventListener("resize", function () {
            i.iv()
          }, !1), i.iv()
        }, L.getWidth = function () {
          return this._view.clientWidth
        }, L.getHeight = function () {
          return this._view.clientHeight
        }, L.setWidth = function (R) {
          var L = this;
          L._view.style.width = R + Kh, L.iv(), L.fp && L.fp(Sq, A, R)
        }, L.setHeight = function (J) {
          var s = this;
          s._view.style.height = J + Kh, s.iv(), s.fp && s.fp(oi, A, J)
        }, L.setFocus = function (G) {
          var A = this, Z = A._currentEditor;
          return G && Z && (Z.getView && (Z = Z.getView()), Z.contains(G.target)) ? !1 : (zi(A._view), A.endEditing && A.endEditing(), A.fireViewEvent("focus"), !0)
        }, L.iv = function (D) {
          this.invalidate(D)
        }, L.invalidate = function (M) {
          var o = this;
          o._68I || (o._68I = 1, Rl(o.validate, o, A, M), o.onInvalidated && o.onInvalidated(), o.fireViewEvent("invalidate"))
        }, L.validate = function () {
          var b = this, o = b._view;
          if (b._68I && (delete b._68I, o.parentNode)) if (0 === o.offsetWidth && 0 === o.offsetHeight && b._67I !== A) b._67I === S && (b._67I = E.reinvalidateCount), b._67I > 0 ? b._67I-- : b._67I = A, b.iv(); else {
            b.fireViewEvent("beginValidate"), b.validateImpl(), b.onValidated && b.onValidated(), b.fireViewEvent("validate");
            var j = b._63O;
            j && (o.lastChild !== j && (up(j), wm(o, j)), vk(j, 0, 0, b.getWidth(), b.getHeight())), qj(b), Qb(b), zd(b)
          }
        }, L.layout = function (E, i, R, X) {
          1 === arguments.length ? vk(this, E) : vk(this, E, i, R, X)
        }, L.addViewListener = function (w, s, Y) {
          var v = this;
          v._67O || (v._67O = new Ke), v._67O.add(w, s, Y)
        }, L.removeViewListener = function (Z, _) {
          this._67O.remove(Z, _)
        }, L.fireViewEvent = function (m) {
          var p = this;
          p._67O && (pp(m) && (m = {kind: m}), p._67O.fire(m)), E.viewListener && E.viewListener(p, m)
        }
      }, ms_tip: function (F) {
        F.setToolTipEnabled = function (B) {
          var F = this;
          B ? Qe || F._13o || (F.enableToolTip(), F.fp("toolTipEnabled", !1, !0)) : F._13o && (F.disableToolTip(), F.fp("toolTipEnabled", !0, !1))
        }, F.isToolTipEnabled = function () {
          return !!this._13o
        }, F.enableToolTip = function () {
          var h = this;
          Qe || h._13o || (h._13o = function (z) {
            var P = h.getToolTip(z);
            P != A ? E.toolTipContinual && E.isToolTipShowing() ? hg(z, P) : (qd(), Be = {
              timeout: x(ag, mq),
              e: z,
              info: P
            }) : qd()
          }, h.getView().addEventListener(dj, h._13o, !1), h.getView().addEventListener("mouseleave", E.hideToolTip, !1))
        }, F.disableToolTip = function () {
          var q = this;
          q._13o && (q.getView().removeEventListener(dj, q._13o, !1), q.getView().removeEventListener("mouseleave", E.hideToolTip, !1), delete q._13o)
        }, F.getToolTip = function (e) {
          var q = this;
          if (q.getDataAt) {
            var N = q.getDataAt(e);
            return N ? N.getToolTip() : A
          }
          return q.getValue ? q.getValue() : void 0
        }
      }, _52o: function (t) {
        t._zoom = 1, t._29I = ui, t.zoomIn = function (q, h) {
          this.setZoom(this._zoom * ef, q, h)
        }, t.zoomOut = function (Q, E) {
          this.setZoom(this._zoom / ef, Q, E)
        }, t.zoomReset = function (D, x) {
          this.setZoom(1, D, x)
        }, t.scrollZoomIn = function (e) {
          this.setZoom(this._zoom * Xc, A, e)
        }, t.scrollZoomOut = function (e) {
          this.setZoom(this._zoom / Xc, A, e)
        }, t.pinchZoomIn = function (h) {
          this.setZoom(this._zoom * ng, A, h)
        }, t.pinchZoomOut = function (c) {
          this.setZoom(this._zoom / ng, A, c)
        }, t.adjustZoom = function (k) {
          return Dd > k ? Dd : k > lh ? lh : k
        }, t.getZoom = function () {
          return this._zoom
        }, t.setZoom = function (R, N, M) {
          var z = this;
          if (N = br(N)) {
            z._14o && z._14o.stop(!0);
            var P = z._zoom;
            N.action = function (F) {
              z._96O(P + (R - P) * F, M)
            }, N._37o = function () {
              delete z._zooming, delete z._14o, z.onZoomEnded()
            }, z._zooming = 1, z._14o = bi(N)
          } else z._96O(R, M)
        }, t._96O = function (d, m) {
          var h = this;
          if (d = h.adjustZoom(d), d !== h._zoom) {
            h.validate();
            var X = h._29I, k = h._zoom;
            0 !== X.width && 0 !== X.height && (m = m ? m : {
              x: X.x + X.width / 2,
              y: X.y + X.height / 2
            }, h.tx((m.x - X.x) * k - m.x * d), h.ty((m.y - X.y) * k - m.y * d)), h._zoom = d, h.fp("zoom", k, d)
          }
        }
      }
    };
    Ak(E, {
      numberDigits: 5,
      crossOrigin: "",
      baseZIndex: S,
      isTouchable: Qe,
      devicePixelRatio: r.devicePixelRatio ? r.devicePixelRatio : 1,
      reinvalidateCount: 3,
      hitMaxArea: 3e3,
      imageCacheThreshold: 20,
      autoMakeVisible: !0,
      autoHideScrollBar: !0,
      disabledOpacity: .4,
      disabledBackground: w.disabledBackground,
      forceHierarchicalSerialization: !0,
      hoverDelay: 600,
      toolTipDelay: 800,
      toolTipContinual: !1,
      getDragger: function () {
        return ze
      },
      lineCap: "butt",
      lineJoin: "round",
      imageGradient: "linear.northeast",
      dashPattern: [16, 16],
      doubleClickRange: Qe ? 20 : 1,
      animDuration: 200,
      animEasing: function (d) {
        return d * d
      },
      labelColor: ri,
      labelSelectColor: Qk,
      labelFont: (Qe ? "15" : "12") + "px arial, sans-serif",
      widgetIndent: Qe ? 30 : 20,
      widgetRowHeight: Qe ? 30 : 20,
      widgetHeaderHeight: Qe ? 32 : 22,
      widgetTitleHeight: Qe ? 34 : 24,
      scrollBarColor: hk,
      scrollBarSize: 7,
      scrollBarTimeout: 1e3,
      scrollBarMinLength: 20,
      scrollBarInteractiveSize: Qe ? 32 : 16,
      zoomIncrement: 1.3,
      scrollZoomIncrement: 1.05,
      pinchZoomIncrement: 1.08,
      zoomMax: 20,
      zoomMin: .01,
      segmentResolution: 12,
      shapeResolution: 24,
      shapeSide: 24,
      intersectionLineRect: kp,
      intersectionLineLine: Ef,
      isEnter: Ok,
      isEsc: Fr,
      isDelete: wj,
      isSpace: ih,
      isLeft: nl,
      isUp: $p,
      isRight: $j,
      isDown: Mj,
      getTarget: Ek,
      isString: pp,
      isNumber: Hl,
      isBoolean: ye,
      isArray: cl,
      isSelectAll: pg,
      isFunction: En,
      isObject: mk,
      getPropertyValue: bf,
      setPropertyValue: ll,
      addMethod: Ak,
      getVersion: function () {
        return "6.2.4"
      },
      appendToScreen: function (V) {
        V = V.getView ? V.getView() : V, (y.fullscreenElement || y.mozFullScreenElement || y.webkitFullscreenElement || y.msFullscreenElement || y.body).appendChild(V)
      },
      toggleFullscreen: function (o) {
        var v = o.getView();
        if (y.fullscreenElement || y.mozFullScreenElement || y.webkitFullscreenElement || y.msFullscreenElement) y.exitFullscreen ? y.exitFullscreen() : y.msExitFullscreen ? y.msExitFullscreen() : y.mozCancelFullScreen ? y.mozCancelFullScreen() : y.webkitExitFullscreen && y.webkitExitFullscreen(); else {
          var B = !0;
          if (o.isSelfViewEvent) {
            var k = o.getX(), g = o.getY(), E = o.getWidth(), r = o.getHeight(), p = v.style.background;
            p || (v.style.background = "white"), v.requestFullscreen ? v.requestFullscreen() : v.msRequestFullscreen ? v.msRequestFullscreen() : v.mozRequestFullScreen ? v.mozRequestFullScreen() : v.webkitRequestFullscreen && v.webkitRequestFullscreen();
            var t = setInterval(function () {
              if (v !== (y.fullscreenElement || y.mozFullScreenElement || y.webkitFullscreenElement || y.msFullscreenElement)) clearInterval(t), o.setX(k), o.setY(g), o.setWidth(E), o.setHeight(r), o._fullscreen = !1, v.style.background = p, o.iv(); else {
                var b = Q.Default.getWindowInfo();
                (B || b.width !== o.getWidth() || b.height !== o.getHeight()) && (o.setX(b.left), o.setY(b.top), o.setWidth(b.width), o.setHeight(b.height), o._fullscreen = !0, o.iv(), B = !1)
              }
            }, 500)
          } else {
            var X = v.style.left, W = v.style.top, E = v.style.width, r = v.style.height, p = v.style.background;
            p || (v.style.background = "white"), v.requestFullscreen ? v.requestFullscreen() : v.msRequestFullscreen ? v.msRequestFullscreen() : v.mozRequestFullScreen ? v.mozRequestFullScreen() : v.webkitRequestFullscreen && v.webkitRequestFullscreen();
            var t = setInterval(function () {
              if (v !== (y.fullscreenElement || y.mozFullScreenElement || y.webkitFullscreenElement || y.msFullscreenElement)) clearInterval(t), v.style.left = X, v.style.top = W, v.style.width = E, v.style.height = r, v.style.background = p, o.iv(); else {
                var R = Q.Default.getWindowInfo();
                (B || R.width !== o.getWidth() || R.height !== o.getHeight()) && (vk(o), B = !1)
              }
            }, 500)
          }
        }
      },
      appendTimeStamp: function (i) {
        return i
      },
      setCompType: function (M, I) {
        En(I) || mk(I) ? Rb[M] = I : qi(M)
      },
      getCompType: function (H) {
        var v = Rb[H];
        return v === S && li.test(H) && qi(H), v
      },
      getCompTypeMap: function () {
        return Rb
      },
      drawCompType: function (b, e, h, T, j, F) {
        b(e, h, T, j, F)
      },
      numberListener: function () {
        var h = {46: 1, 8: 1, 9: 1, 27: 1, 13: 1, 109: 1, 110: 1, 189: 1, 190: 1};
        return function (L) {
          var j = L.keyCode;
          h[j] || 65 === j && E.isCtrlDown(L) || 86 === j && E.isCtrlDown(L) || 67 === j && E.isCtrlDown(L) || 88 === j && E.isCtrlDown(L) || j >= 35 && 40 >= j || (L.shiftKey || 48 > j || j > 57) && (96 > j || j > 105) && L.preventDefault()
        }
      }(),
      ignoreKeyCodes: [122, 123],
      preventDefault: function (x) {
        var S = x.target.tagName;
        ("DIV" === S || "CANVAS" === S) && !(E.ignoreKeyCodes.indexOf(x.keyCode) >= 0) && ("keydown" !== x.type || nl(x) || $j(x) || $p(x) || Mj(x) || wj(x) || 65 === x.keyCode && (x.metaKey || x.ctrlKey)) && (x.preventDefault(), x.preventManipulation && x.preventManipulation())
      },
      getWindowInfo: function () {
        var d = y.documentElement, P = d && (d.scrollLeft || d.scrollTop) ? d : y.body;
        return {
          target: P,
          left: P.scrollLeft,
          top: P.scrollTop,
          width: r.innerWidth || P.clientWidth,
          height: r.innerHeight || P.clientHeight
        }
      },
      isDragging: function () {
        return !!ze
      },
      isLeftButton: function (i) {
        return Qe ? !0 : 0 === i.button
      },
      isInput: function (J) {
        if (!J) return !1;
        var O = J.tagName;
        return "INPUT" === O || "TEXTAREA" === O || "SELECT" === O
      },
      getTouchCount: function (K) {
        return Qe ? K.touches.length : 1
      },
      isDoubleClick: function () {
        function C(D) {
          D.details = 0, D.timeout = null, D.lastPoint = null
        }

        var h = {};
        return Uf = new c, cs = Uf.getTime(), function (r) {
          if (r.touches && r.touches.length > 1) return !1;
          var y = r.button == A ? "" : r.button, X = r.type + y, I = X + "_isDoubleClick", j = h[X];
          if (j || (j = h[X] = {details: 0, timeout: null, lastPoint: null}), r[I] === S) {
            r[I] = !0;
            var T = ab(r);
            j.timeout && (O(j.timeout), j.timeout = null), j.lastPoint && lf(j.lastPoint, T) > E.doubleClickRange && C(j), j.lastPoint = T, j.details++, j.timeout = x(function () {
              C(this)
            }.bind(j), 500)
          }
          return 2 === j.details
        }
      }(),
      isShiftDown: function (A) {
        return A ? A.shiftKey : Th["16"]
      },
      isCtrlDown: function (i) {
        return i ? $ ? i.metaKey : i.ctrlKey : $ ? Th["91"] : Th["17"]
      },
      getClientPoint: function (L) {
        return Qe && (L = Zo(L)), {x: L.clientX, y: L.clientY}
      },
      isMouseEvent: function (Y) {
        return Y instanceof MouseEvent || 0 === Y.type.indexOf("mouse")
      },
      getTargetElement: function (m) {
        if (E.isMouseEvent(m) || !y.elementFromPoint) return m.target;
        var S = Rn(m);
        return y.elementFromPoint(S.x, S.y)
      },
      getPagePoint: function (f) {
        return Qe && (f = Zo(f)), {x: f.pageX, y: f.pageY}
      },
      createObject: function (q, P) {
        var x = new q;
        for (var D in P) {
          var L = P[D];
          if (En(L)) x[D] = L; else if (0 === D.indexOf("s:")) x.s(D.substr(2), P[D]); else if (0 === D.indexOf("a:")) x.a(D.substr(2), P[D]); else {
            var R = te(D), L = P[D];
            x[R] ? (x[R](L), "setToolTip" === R && x.enableToolTip && x.enableToolTip()) : x[D] = L
          }
        }
        return x
      },
      setImage: function (l, A, K, n) {
        var j = arguments.length;
        4 === j ? ln(l, n, A, K) : 2 === j ? pp(A) ? ln(l, A) : Bk[l] = A : 1 === j && ln(l, l)
      },
      getImage: function (L, v, x) {
        var g;
        if (L == A) return A;
        if (mk(L) ? g = L : (g = Bk[L], L && g === S && (nj && nj[L] || ln(L, L))), v && g && g.tagName) {
          var V;
          V = "override" === x ? "colors_override" : "override_rgb" === x ? "colors_override_rgb" : "override_a" === x ? "colors_override_a" : "colors", g[V] || (g[V] = {__count__: 0});
          var T = g[V][v];
          return T || (g[V].__count__ > E.imageCacheThreshold && (g[V] = {__count__: 0}), T = oo(g, Di(v), g.width, g.height, x), g[V][v] = T, g[V].__count__++), T
        }
        return g
      },
      isImageComplete: function (W, Z, I) {
        var J = mk(W) ? W : Bk[W];
        if (!J) return !1;
        if (J.tagName) return J.complete;
        for (var j, W, f, L = J.comps, $ = !0, d = 0, N = L.length; N > d; d++) if (j = L[d], f = j.type, "image" === j.type) {
          W = j.name, W && W.func && (W = $q(W, Z));
          var l = vb(W, Z, I);
          if (!l) {
            $ = !1;
            break
          }
        } else if (li.test(f) && E.getCompType(f) === S) {
          $ = !1;
          break
        }
        return $
      },
      getId: function () {
        var l = 1;
        return function () {
          return ++l
        }
      }(),
      callLater: function (B, M, H, w) {
        var p = function () {
          B.apply(M, H)
        };
        return w ? x(p, w) : r.requestAnimationFrame(p)
      },
      clone: function (t) {
        if (null == t || "object" != typeof t) return t;
        if (t instanceof Date) {
          var J = new Date;
          return J.setTime(t.getTime()), J
        }
        if (t instanceof Array) {
          for (var J = [], U = 0, A = t.length; A > U; U++) J[U] = Wf(t[U]);
          return J
        }
        if (t instanceof Oh) {
          for (var J = new Oh, U = 0, A = t.length; A > U; U++) J.set(U, Wf(t.get(U)));
          return J
        }
        if (t instanceof aj) return t;
        if (t instanceof F) {
          var J = {};
          for (var S in t) t.hasOwnProperty(S) && (J[S] = Wf(t[S]));
          return J
        }
        return t
      },
      callWhenLoaded: function (j, w) {
        w = w || 100;
        var f = Qh(j, w);
        Sj || (Sj = {}), Sj[f] = {tick: f, cb: j, delay: w}
      },
      beforeLoadURL: function (x) {
        if (Sj) {
          var k = {};
          for (var J in Sj) {
            var Z = Sj[J];
            O(Z.tick);
            var c = Qh(Z.cb, Z.delay);
            k[c] = {tick: c, delay: Z.delay, cb: Z.cb}
          }
          Sj = k
        }
        return E.convertURL ? E.convertURL(x) : x
      },
      convertURL: function (U) {
        return U
      },
      handleRefGraphLoaded: function () {
      },
      handleCompTypeLoaded: function () {
      },
      handleImageLoaded: function () {
      },
      handleUnfoundImage: function () {
      },
      sortFunc: function (r, b) {
        if (r === b) return 0;
        if (r == A && b != A) return 1;
        if (r != A && b == A) return -1;
        if (r == A && b == A) return 0;
        var y, h = typeof r, C = typeof b;
        return h === _j && C === _j ? y = r.localeCompare(b) : h === Yn && C === Yn && (y = r - b), y === S && (y = ("" + r).localeCompare("" + b)), y > 0 ? 1 : 0 > y ? -1 : 0
      },
      getClassMap: function () {
        return Lp
      },
      getClass: function (j) {
        if (pp(j)) {
          var z, S = Lp[j];
          if (!S) {
            z = j.split("."), S = r;
            for (var U = 0; U < z.length; U++) S = S[z[U]];
            Lp[j] = S
          }
          return S
        }
        return j
      },
      def: function (M, P, f) {
        var Q, C, d, U = function () {
        };
        if (U.prototype = P.prototype, Q = new U, pp(M)) {
          if (Lp[M]) throw"'" + M + "' already defined";
          d = Ye(M), Q.getClassName = function () {
            return M
          }
        } else d = M;
        if (Q.constructor = d, Q.getClass = function () {
          return d
        }, Q.getSuperClass = function () {
          return P
        }, f) for (C in f) Rf[C] && Rf.hasOwnProperty(C) ? Rf[C](Q, f) : og(Q, f, C);
        d.prototype = Q, d.superClass = P.prototype
      },
      startAnim: function () {
        var X = function (n) {
          n.duration && (n.startTime = gb()), n.timeId = Rl(n.tick, A, A, n.interval)
        };
        return function (U) {
          return U = Wf(U), U.easing = U.easing || E.animEasing, U.duration || U.frames || (U.duration = E.animDuration), U.t = 0, U.duration ? U.interval = 0 : (U.frame = 0, U.interval = U.interval || 10), U.tick = function () {
            if (U.duration) {
              var i = (gb() - U.startTime) / U.duration;
              i > 1 && (i = 1), U.t = i, U.action(U.easing(i), i), 1 === i ? U.stop() : U._isPaused || (U.timeId = Rl(U.tick))
            } else U.frame++, i = U.t = U.frame / U.frames, U.action(U.easing(i), i), U.frame < U.frames ? U._isPaused || (U.timeId = Rl(U.tick, A, A, U.interval)) : U.stop()
          }, U.resume = function () {
            U._isPaused && (delete U._isPaused, U.duration ? U.t < 1 && (U.startTime = gb() - U.duration * U.t, U.timeId = Rl(U.tick)) : U.frame < U.frames && (U.timeId = Rl(U.tick, A, A, U.interval)))
          }, U.pause = function () {
            U._isPaused = !0
          }, U.isPaused = function () {
            return this._isPaused
          }, U.stop = function (c) {
            U.isRunning() && (U.duration ? U.t < 1 && c && (U.t = 1, U.action(U.easing(1), 1)) : U.frame < U.frames && c && (U.frame = U.frames, U.action(U.easing(1), 1)), U._37o && U._37o(), U.finishFunc && U.finishFunc(), yl(U.timeId, !U.duration), delete U.timeId)
          }, U.isRunning = function () {
            return U.timeId != A
          }, U.delay ? Rl(X, A, [U], U.delay) : X(U), U
        }
      }(),
      getTextSize: function () {
        var F = {}, o = y ? Ze().getContext("2d") : A;
        return function (s, E) {
          o.font = s ? s : Co;
          var Y = F[o.font];
          return Y || (Y = 2 * o.measureText("e").width + 4, F[o.font] = Y), {
            width: o.measureText(E).width + 4,
            height: Y
          }
        }
      }(),
      drawText: function (W, N, V, t, e, C, K, Z, i, g) {
        if (N != A) {
          var F = gl(V, N), m = {};
          m.y = g && g !== gj ? g === rd ? C + F.height / 2 : C + Z - F.height / 2 : C + Z / 2, m.x = i && i !== kl ? i === we ? e + K - F.width / 2 : e + K / 2 : e + F.width / 2, Jp(W, N, m, V, t)
        }
      },
      getDistance: function (x, d) {
        var p = x.length;
        return d ? 3 === p ? Y(q(x[0] - d[0]) + q(x[1] - d[1]) + q(x[2] - d[2])) : 2 === p ? Y(q(x[0] - d[0]) + q(x[1] - d[1])) : x.z === S ? Y(q(d.x - x.x) + q(d.y - x.y)) : Y(q(d.x - x.x) + q(d.y - x.y) + q(d.z - x.z)) : 3 === p ? Y(q(x[0]) + q(x[1]) + q(x[2])) : 2 === p ? Y(q(x[0]) + q(x[1])) : void 0
      },
      brighter: function (d, Z) {
        return 0 > Z && (Z = -Z), Tm(d, Z ? Z : 40)
      },
      darker: function (r, T) {
        return T > 0 && (T = -T), Tm(r, T ? T : -40)
      },
      unionPoint: function (g, M) {
        if (!g) return A;
        if (2 === arguments.length) return g && M ? {
          x: L(g.x, M.x),
          y: L(g.y, M.y),
          width: C(g.x - M.x),
          height: C(g.y - M.y)
        } : A;
        var U = g;
        if (U._as && (U = U._as), U.length === S) return A;
        var $ = U.length;
        if (0 >= $) return A;
        for (var Z = 1, I = U[0], u = {x: I.x, y: I.y, width: 0, height: 0}; $ > Z; Z++) {
          I = U[Z];
          var K = L(u.x, I.x), F = R(u.x + u.width, I.x), y = L(u.y, I.y), X = R(u.y + u.height, I.y);
          u.x = K, u.y = y, u.width = F - K, u.height = X - y
        }
        return u
      },
      unionRect: function (S, N) {
        if (S && !N) return Wf(S);
        if (!S && N) return Wf(N);
        if (S && N) {
          var w = {x: L(S.x, N.x), y: L(S.y, N.y)};
          return w.width = R(S.x + S.width, N.x + N.width) - w.x, w.height = R(S.y + S.height, N.y + N.height) - w.y, w
        }
        return A
      },
      containsPoint: function (H, b, M, p) {
        if (p != A && 1 !== p) {
          var t = H.x + H.width / 2, v = H.y + H.height / 2;
          H = {x: t - H.width / 2 * p, y: v - H.height / 2 * p, width: H.width * p, height: H.height * p}
        }
        if (M) {
          var X = H.width / 2, Q = H.height / 2, n = D(-M), m = J(-M), x = b.x - H.x - X, L = b.y - H.y - Q;
          return b = {x: m * x - n * L, y: n * x + m * L}, en({x: -X, y: -Q, width: H.width, height: H.height}, b)
        }
        return !(!H || b.x < H.x || b.y < H.y || b.x > H.x + H.width || b.y > H.y + H.height)
      },
      containsRect: function ($, J) {
        if (!$ || !J) return !1;
        var d = J.x, L = J.y, f = J.width, x = J.height, s = $.width, j = $.height;
        if (0 > (s | j | f | x)) return !1;
        var X = $.x, A = $.y;
        if (X > d || A > L) return !1;
        if (s += X, f += d, d >= f) {
          if (s >= X || f > s) return !1
        } else if (s >= X && f > s) return !1;
        if (j += A, x += L, L >= x) {
          if (j >= A || x > j) return !1
        } else if (j >= A && x > j) return !1;
        return !0
      },
      intersectsRect: function (I, i) {
        if (!I || !i) return !1;
        var c = i.width, W = i.height, M = I.width, A = I.height;
        if (0 >= M || 0 >= A || 0 >= c || 0 >= W) return !1;
        var V = i.x, e = i.y, m = I.x, J = I.y;
        return M += m, A += J, c += V, W += e, M > V && A > e && c > m && W > J
      },
      intersection: function (i, D) {
        if (!i || !D) return A;
        var n = D.x, Q = D.y, h = i.x, K = i.y, c = n, Y = Q, Z = h, v = K;
        return c += D.width, Y += D.height, Z += i.width, v += i.height, h > n && (n = h), K > Q && (Q = K), c > Z && (c = Z), Y > v && (Y = v), c -= n, Y -= Q, 0 >= c || 0 >= Y ? A : {
          x: n,
          y: Q,
          width: c,
          height: Y
        }
      },
      grow: function (K, p, f) {
        f === S && (f = p), K.x -= p, K.y -= f, K.width = K.width + 2 * p, K.height = K.height + 2 * f
      },
      getScreenPoint: function (b, g, $, l, T, t, i) {
        var R, r, J = $.getBoundingClientRect(), V = b * (t || 1) + J.left - $.scrollLeft + (l || 0),
          k = g * (i || 1) + J.top - $.scrollTop + (T || 0), Q = {x: V, y: k};
        return (R = $.parentElement) && (r = R.maxtrixAppend) ? r.applyInverse(Q, {}) : Q
      },
      getLogicalPoint: function (o, p, x, V, h, K) {
        var f, M, g = p.getBoundingClientRect();
        o.target ? (xr(o) ? $ ? Th["91"] = !0 : Th["17"] = !0 : $ ? Th["91"] = !1 : Th["17"] = !1, Th["16"] = jr(o) ? !0 : !1, o = Qe ? Zo(o) : o, f = o.clientX, M = o.clientY) : (f = o.x, M = o.y);
        var m, I;
        if ((m = p.parentElement) && (I = m.maxtrixAppend)) {
          var Q = I.apply({x: f, y: M}, {});
          return Q.x = (Q.x + p.scrollLeft - (x || 0)) / (h || 1), Q.y = (Q.y + p.scrollTop - (V || 0)) / (K || 1), Q
        }
        return {
          x: (f - g.left + p.scrollLeft - (x || 0)) / (h || 1),
          y: (M - g.top + p.scrollTop - (V || 0)) / (K || 1)
        }
      },
      removeHTML: function () {
        var X;
        return function (u) {
          return u && u.parentNode ? X === u ? !0 : (X = u, u.parentNode.removeChild(u), X = A, !0) : !1
        }
      }(),
      getToolTipDiv: function () {
        if (!Ci) {
          Ci = Zg(), Yr = Zg();
          var Q = Ci.style;
          E.baseZIndex != A && (Q.zIndex = g(E.baseZIndex) + 3 + ""), Q.whiteSpace = "nowrap", Q.color = E.toolTipLabelColor, Q.background = E.toolTipBackground, Q.font = E.toolTipLabelFont, Q.padding = "5px", Q.boxShadow = "0px 0px 3px " + E.toolTipShadowColor
        }
        return Ci
      },
      isToolTipShowing: function () {
        return Ci && Ci.parentNode ? !0 : Yr && Yr.parentNode ? !0 : !1
      },
      hideToolTip: function () {
        up(Ci), up(Yr), js()
      },
      showToolTip: function (f, o) {
        if (!f || o == A) return qd(), void 0;
        E.getToolTipDiv();
        var X, v;
        if (o.html ? (o = o.html, X = Yr, up(Ci)) : (X = Ci, up(Yr)), v = X.style, X.innerHTML = o, X.parentNode || Q.Default.appendToScreen(X), f.target) {
          f = Rn(f);
          var D = tf(), S = f.x, j = f.y, n = Qe ? 60 : 12;
          if (Qe) {
            var P = X.getBoundingClientRect();
            v.left = S - P.width / 2 + Kh, v.top = j - P.height - n < D.top ? j + n + Kh : j - P.height - n + Kh
          } else {
            v.left = S + n + Kh, v.top = j + n + Kh;
            var P = X.getBoundingClientRect();
            P.left + P.width > D.width && (v.left = S - n - P.width + Kh), P.top + P.height > D.height && (v.top = j - n - P.height + Kh), P.left < 0 && (v.left = S + n + Kh), P.top < 0 && (v.top = j + n + Kh)
          }
        } else v.left = f.x + Kh, v.top = f.y + Kh;
        js()
      },
      startDragging: function (B, X) {
        B !== ze && (ze ? Qe ? ze.handleWindowTouchEnd(X) : ze.handleWindowMouseUp(X) : Qe ? (r.addEventListener(gi, bl, !1), r.addEventListener(Ao, Mm, !1)) : (r.addEventListener(dj, fq, !1), r.addEventListener(Wi, Tr, !1)), ze = B)
      },
      getImageMap: function () {
        return Bk
      },
      toBoundaries: function (R, i, k, A) {
        var L = [];
        return Gq(R, i, k, A).forEach(function (R) {
          var H = [];
          R.forEach(function (u) {
            H.push(u.x, u.y)
          }), L.push(H)
        }), L
      },
      getCurrentKeyCodeMap: function () {
        return Th
      },
      drawCenterImage: function (r, T, G, m, j, K, q, H) {
        var L = Hk(T, j, K), b = Ll(T, j, K);
        dm(r, T, l(G - L / 2), l(m - b / 2), L, b, j, K, q, H)
      },
      drawStretchImage: function (x, K, i, O, H, _, q, M, u, A, p, a) {
        var r, J = Hk(K, M, u, _), T = Ll(K, M, u, q);
        "uniform" === i ? (r = L(_ / J, q / T), J *= r, T *= r, O += l((_ - J) / 2), H += l((q - T) / 2), _ = J, q = T) : "centerUniform" === i && ((J > _ || T > q) && (r = L(_ / J, q / T), J *= r, T *= r), O += l((_ - J) / 2), H += l((q - T) / 2), _ = J, q = T);
        var z = x.interactiveInfo;
        if (z) {
          var C;
          if (C = "center" === i ? {x: O + _ / 2 - J / 2, y: H + q / 2 - T / 2, width: J, height: T} : {
            x: O,
            y: H,
            width: _,
            height: q
          }, z.rect) {
            var R = z.compInfos, t = R.length;
            t && (R[t - 1].rect.image = K)
          } else z.rect = C
        }
        if ("center" === i) {
          var m = p !== !1 && (J > _ || T > q);
          m && (x.save(), x.beginPath(), x.rect(O, H, _, q), x.clip()), dm(x, K, O + _ / 2 - J / 2, H + q / 2 - T / 2, J, T, M, u, A, a), m && x.restore()
        } else dm(x, K, O, H, _, q, M, u, A, a)
      },
      toCanvas: function (Z, t, e, L, P, p, E, J, m) {
        Z = vf(Z, E), t = t || Hk(Z, P), e = e || Ll(Z, P);
        var n = Ze(), h = dn(n);
        return J ? (Mb(n, t, e, J), h.scale(J, J)) : Mb(n, t, e, 1), Jl(h, Z, L, 0, 0, t, e, P, p, E, m), Z && Z.clampToEdge && (n.clampToEdge = Z.clampToEdge), h.restore(), n
      },
      createGradientImage: function (H, R, w, Z) {
        for (var s = ["L", 0, 0, H, 0, 1, 0, 0, 1, 0, 0], V = 0, i = Math.min(R.length, w.length); i > V; V++) s.push(w[V], R[V]);
        var A = Q.Default.toCanvas({
          width: H,
          height: H,
          clampToEdge: !0,
          comps: [{
            type: "shape",
            rotation: Z || 0,
            points: [0, 0, H, 0, H, H, 0, H],
            background: "#ffffff",
            gradientPack: s
          }]
        });
        return A
      },
      createElement: function (P, Z, p, b) {
        var d = y.createElement(P);
        return Df(d, Z || w.widgetBorder, 2), d.style.font = p ? p : Co, b != A && (d.value = b), E.onElementCreated && E.onElementCreated(d), d
      },
      containedInView: function (i, t) {
        var u = ss(t).getBoundingClientRect();
        return en({x: u.left, y: u.top, width: u.width, height: u.height}, ab(i))
      },
      isIsolating: function () {
        return _r > 0
      },
      setIsolating: function (x) {
        x ? _r++ : _r--
      },
      getMSMap: function () {
        return Rf
      },
      stringify: function (n, t) {
        var P = Date.prototype.toJSON;
        Date.prototype.toJSON = function () {
          return "__ht__date" + this.getTime()
        };
        var e = JSON.stringify(n, function (d, k) {
          return "function" == typeof k ? "__ht__" + (k.__ht__ || k.toString()) : Hl(k) ? Uq(k) : k
        }, t == A ? 2 : t);
        return Date.prototype.toJSON = P, e
      },
      parse: function (G) {
        return pp(G) ? JSON.parse(G, function (w, W) {
          if (pp(W)) {
            if ("__ht__function" == W.substr(0, 14)) {
              var X = W.indexOf("{") + 1, o = W.lastIndexOf("}"), f = W.indexOf("(") + 1, U = W.indexOf(")");
              if (X && o && f && U) {
                var M = new Function(W.substring(f, U), W.substring(X, o));
                return M.__ht__ = W.substr(6), M
              }
            }
            if ("__ht__date" == W.substr(0, 10)) return new Date(g(W.substr(10)))
          }
          return W
        }) : G
      },
      loadJS: function (e, c) {
        c && e.push(c);
        var _ = e.shift();
        if (cl(_)) e = _.contact(e), E.loadJS(e); else if (En(_)) _(), E.loadJS(e); else if (pp(_)) {
          var J = y.createElement("script");
          J.onload = function () {
            E.loadJS(e)
          }, J.setAttribute("src", _), y.getElementsByTagName("head")[0].appendChild(J)
        } else e.length && E.loadJS(e)
      },
      toRoundedCorner: function (C, q) {
        var e = C.size();
        if (0 >= q) return {points: C};
        var E, W = new Oh, b = new Oh, V = C.get(0);
        W.add(V), b.add(1);
        for (var y = 1; e > y; y++) if (e > y + 1) {
          var F = C.get(y), g = C.get(y + 1), R = V.x, j = V.y, Q = F.x, N = F.y, K = N - j, A = Q - R, p = i(K, A);
          E = L(.99 * lf(V, F), q), W.add({
            x: Q - E * J(p),
            y: N - E * D(p)
          }), W.add(F), R = F.x, j = F.y, Q = g.x, N = g.y, K = N - j, A = Q - R, p = i(K, A), E = L(.99 * lf(F, g), q), V = {
            x: R + E * J(p),
            y: j + E * D(p)
          }, W.add(V), b.addAll([2, 3])
        } else W.add(C.get(y)), b.add(2);
        return {points: W, segments: b}
      },
      toColorData: Ig,
      setCanvas: Mb,
      createDiv: Zg,
      createDisabledDiv: Ve,
      createView: Ae,
      createCanvas: Ze,
      appendChild: wm,
      initContext: dn,
      checkLoadingImage: qj,
      translateAndScale: Gf,
      layout: vk,
      getPosition: um,
      drawPoints: tb,
      drawRoundRect: Pi,
      drawBorder: Yo,
      setFocus: zi,
      getter: vn,
      setter: te,
      isEmptyObject: Ah
    }, !0), Ak(Z, {
      autoAdjustIndex: 1,
      hierarchicalRendering: 1,
      adjustChildrenToTop: 1,
      autoHideScrollBar: 1,
      autoUpdate: 1,
      firstPersonMode: 1,
      ortho: 1,
      strict: 1,
      stickToRight: 1,
      instant: 1,
      closePath: 1,
      hierarchical: 1,
      doubleClickToToggle: 1,
      continuousLayout: 1,
      syncSize: 1
    }, !0);
    var Qd = E.disabledOpacity, mq = E.toolTipDelay, Ne = E.devicePixelRatio, nd = E.autoMakeVisible,
      tk = E.autoHideScrollBar, eb = E.imageGradient, hg = E.showToolTip, qd = E.hideToolTip, bq = E.dashPattern,
      he = E.lineCap, po = E.lineJoin, es = E.labelColor, qp = E.labelSelectColor, Co = E.labelFont,
      fi = E.widgetIndent, Cc = E.widgetRowHeight, Am = E.widgetHeaderHeight, _m = E.widgetTitleHeight,
      No = E.scrollBarColor, Mh = E.scrollBarSize, hc = E.scrollBarTimeout, Jm = E.scrollBarMinLength,
      Oe = E.scrollBarInteractiveSize, ef = E.zoomIncrement, Xc = E.scrollZoomIncrement, ng = E.pinchZoomIncrement,
      lh = E.zoomMax, Dd = E.zoomMin, _n = E.createObject, gm = E.preventDefault, $n = E.setImage, vf = E.getImage,
      vb = E.isImageComplete, Zq = E.drawCenterImage, Jl = E.drawStretchImage, Xe = E.getId, Rl = E.callLater,
      qe = E.sortFunc, Wf = E.clone, Ye = E.getClass, bi = E.startAnim, Pc = E.brighter, Kn = E.darker, Po = E.drawText,
      gl = E.getTextSize, Wb = E.isLeftButton, Ro = E.getTouchCount, qo = E.isDoubleClick, jr = E.isShiftDown,
      xr = E.isCtrlDown, ab = E.getClientPoint, Rn = E.getPagePoint, lf = E.getDistance, Ue = E.unionPoint,
      Uk = E.unionRect, en = E.containsPoint, qm = E.containsRect, Xl = E.intersectsRect, rs = E.intersection,
      tf = E.getWindowInfo, hq = E.grow, Gh = E.getLogicalPoint, ar = E.getScreenPoint, Dj = E.startDragging,
      up = E.removeHTML, gf = E.createElement, ne = E.segmentResolution, Hf = E.shapeResolution, Og = E.shapeSide,
      Dr = E.def, Lj = function (X, C, d) {
        Dr(H + "." + X, C, d)
      }, fg = function (C, L) {
        C.childNodes.forEach(function (e) {
          L(e), fg(e, L)
        })
      };
    Ak(E, {
      toolTipLabelColor: es,
      toolTipLabelFont: Co,
      toolTipBackground: w.toolTipBackground,
      toolTipShadowColor: hk,
      drawBreakableText: Wn,
      setDevicePixelRatio: function (D) {
        Ne = E.devicePixelRatio = "number" == typeof D ? D : r.devicePixelRatio, fg(y.body, function (v) {
          var W = v._ht;
          W && W._canvas && (Mb(W._canvas, W.getWidth(), W.getHeight()), W.redraw ? W.redraw() : W.iv())
        })
      }
    }, !0);
    var kr = 1e-6, Xr = "undefined" != typeof Uint16Array ? Uint16Array : Array,
      on = "undefined" != typeof Float32Array ? Float32Array : Array, el = function (D, r, f) {
        var Q = [D[0] - r[0], D[1] - r[1], D[2] - r[2]];
        if (f) {
          var S = lf(Q);
          S > 0 && (Q[0] /= S, Q[1] /= S, Q[2] /= S)
        }
        return Q
      }, dk = function () {
        var q = "charCodeAt", T = 2 * (2 * ac.length + 1);
        for (var P in r) if (P === H + kl[0] + Kh.length) {
          var k = r[P];
          if (!k) break;
          for (var R = k.length, i = 0; R > i; i++) if (k[i][q](0) === T && k[i + 1] != A && k[i + 1] === Kh[0] && k[i + 2] != A && k[i + 2][q](0) === T) {
            for (var g = i + 3; R > g; g++) if (k[g][q](0) === T) {
              if (0 == k[g + 1]) for (var p, $ = g + 2; R > $; $++) {
                if (k[$][q](0) === T) {
                  0 == k[$ - 1] && p && (X = p.substr(0, p.length - 1));
                  break
                }
                p == A ? p = k[$] : p += k[$]
              }
              break
            }
            break
          }
          break
        }
        return function (J) {
          return [-J[0], -J[1], -J[2]]
        }
      }(), nn = function (A, z) {
        return 3 === A.length ? A[0] * z[0] + A[1] * z[1] + A[2] * z[2] : A[0] * z[0] + A[1] * z[1]
      }, gc = function () {
        var i = new on(16);
        return i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 1, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 1, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, i
      }, Xf = gc(), Kc = function (B) {
        var $ = new on(16);
        return $[0] = B[0], $[1] = B[1], $[2] = B[2], $[3] = B[3], $[4] = B[4], $[5] = B[5], $[6] = B[6], $[7] = B[7], $[8] = B[8], $[9] = B[9], $[10] = B[10], $[11] = B[11], $[12] = B[12], $[13] = B[13], $[14] = B[14], $[15] = B[15], $
      }, Zf = function (n, T) {
        return n[0] = T[0], n[1] = T[1], n[2] = T[2], n[3] = T[3], n[4] = T[4], n[5] = T[5], n[6] = T[6], n[7] = T[7], n[8] = T[8], n[9] = T[9], n[10] = T[10], n[11] = T[11], n[12] = T[12], n[13] = T[13], n[14] = T[14], n[15] = T[15], n
      }, be = function (i) {
        return i[0] = 1, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = 1, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 1, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, i
      }, Qp = function (h, n) {
        var O = h[0], u = h[1], T = h[2];
        return h[0] = n[0] * O + n[4] * u + n[8] * T + n[12], h[1] = n[1] * O + n[5] * u + n[9] * T + n[13], h[2] = n[2] * O + n[6] * u + n[10] * T + n[14], h
      }, tl = function (g, c) {
        var R = g[0], A = g[1], H = g[2], U = g[3];
        return g[0] = c[0] * R + c[4] * A + c[8] * H + c[12] * U, g[1] = c[1] * R + c[5] * A + c[9] * H + c[13] * U, g[2] = c[2] * R + c[6] * A + c[10] * H + c[14] * U, g[3] = c[3] * R + c[7] * A + c[11] * H + c[15] * U, g
      }, $c = function () {
        var i, b, p, T, K = Rg(zg[1] + zg[7]), S = Rg(zg[0] + zg[3] - zg[10]), h = Rg(zg[8] + 2), n = function () {
          return b = p.charAt(i), i += 1, b
        }, Q = function () {
          var f = "";
          if (b === h) for (; n();) {
            if (b === h) return n(), f;
            f += b
          } else n()
        }, X = function () {
          for (; b && " " >= b;) n()
        }, D = function () {
          var y, k = {};
          if (b === K) {
            if (n(), X(), b === S) return n(), k;
            for (; b;) {
              if (y = Q(), X(), n(), k[y] = T(), X(), b === S) return n(), k;
              n(), X()
            }
          }
        };
        return T = function () {
          switch (X(), b) {
            case K:
              return D();
            default:
              return Q()
          }
        }, function (o) {
          if (W = {}, o) {
            var G;
            if (p = o, i = 0, b = " ", G = T(), X(), !b) return G
          }
        }
      }(), wo = function (c, z) {
        if (z) {
          var M = D(z), x = J(z), W = c[4], $ = c[5], u = c[6], Q = c[7], p = c[8], A = c[9], U = c[10], h = c[11];
          c[4] = W * x + p * M, c[5] = $ * x + A * M, c[6] = u * x + U * M, c[7] = Q * x + h * M, c[8] = p * x - W * M, c[9] = A * x - $ * M, c[10] = U * x - u * M, c[11] = h * x - Q * M
        }
      }, mn = function (P, z) {
        if (z) {
          var Z = D(z), X = J(z), k = P[0], K = P[1], G = P[2], g = P[3], d = P[8], T = P[9], V = P[10], i = P[11];
          P[0] = k * X - d * Z, P[1] = K * X - T * Z, P[2] = G * X - V * Z, P[3] = g * X - i * Z, P[8] = k * Z + d * X, P[9] = K * Z + T * X, P[10] = G * Z + V * X, P[11] = g * Z + i * X
        }
      }, yr = function (Q, p) {
        if (p) {
          var F = D(p), j = J(p), O = Q[0], E = Q[1], S = Q[2], N = Q[3], P = Q[4], g = Q[5], m = Q[6], G = Q[7];
          Q[0] = O * j + P * F, Q[1] = E * j + g * F, Q[2] = S * j + m * F, Q[3] = N * j + G * F, Q[4] = P * j - O * F, Q[5] = g * j - E * F, Q[6] = m * j - S * F, Q[7] = G * j - N * F
        }
      }, Sh = function ($, r, H) {
        return Xn(A, H === !1 ? A : $.getFinalScale3d(), $.getFinalRotation3d(), $.getRotationMode(), $.p3(), A, r)
      }, Xn = function (g, e, l, X, c, o, a) {
        return o || (o = gc()), c && Dc(o, c), $f(o, l, X), a && fp(o, o, a), e && il(o, e), g && fp(o, o, g), o
      }, fr = function (v, e, b) {
        e = g(e), b = g(b);
        var G = this;
        G.g = v, G._84O = e, G._85O = b, G._70I = !0, G.F = 0, G._83O = e + b, G.pen = {x: 0, y: 0}
      }, vr = "lineDashOffset", ic = "setLineDash", Bj = function (s) {
        for (var a in s) 1 === a.length && (vr = s[a]);
        return a ? 1 : 0
      }, To = function (W, O, u) {
        return ql(O) ? W : W[ic] ? (W[ic](O), u && (W.lineDashOffset = u), W) : new fr(W, O[0], O.length > 1 ? O[1] : O[0])
      }, Rh = function (I, r) {
        !ql(r) && I[ic] && (I[ic](Jj), I.lineDashOffset = 0)
      };
    if (Dr(fr, F, {
      _69I: 6, moveTo: function (x, M) {
        var d = this, b = d.pen;
        b.x = x, b.y = M, d.g.moveTo(x, M), d.start || (d.start = {x: x, y: M})
      }, lineTo: function (W, w) {
        var v = this, N = v.pen, O = W - N.x, A = w - N.y, f = i(A, O), j = J(f), t = D(f), L = v._23O(N.x, N.y, W, w),
          e = v._85O, E = v._84O, b = v._83O;
        if (v.F) {
          if (v.F > L) return v._70I ? v._72I(W, w) : v.moveTo(W, w), v.F -= L, void 0;
          if (v._70I ? v._72I(N.x + j * v.F, N.y + t * v.F) : v.moveTo(N.x + j * v.F, N.y + t * v.F), L -= v.F, v.F = 0, v._70I = !v._70I, !L) return
        }
        var S = n(L / b);
        if (S) {
          for (var a = j * E, H = t * E, c = j * e, K = t * e, M = 0; S > M; M++) v._70I ? (v._72I(N.x + a, N.y + H), v.moveTo(N.x + c, N.y + K)) : (v.moveTo(N.x + c, N.y + K), v._72I(N.x + a, N.y + H));
          L -= b * S
        }
        v._70I ? L > E ? (v._72I(N.x + j * E, N.y + t * E), v.moveTo(W, w), v.F = e - (L - E), v._70I = !1) : (v._72I(W, w), L === E ? (v.F = 0, v._70I = !v._70I) : (v.F = E - L, v.moveTo(W, w))) : L > e ? (v.moveTo(N.x + j * e, N.y + t * e), v._72I(W, w), v.F = E - (L - e), v._70I = !0) : (v.moveTo(W, w), L === e ? (v.F = 0, v._70I = !v._70I) : v.F = e - L)
      }, quadraticCurveTo: function (u, q, O, r) {
        var W, j = this, E = j.pen, G = E.x, a = E.y, t = j._22O(G, a, u, q, O, r), i = 0, U = 0, v = j._85O,
          c = j._84O;
        if (j.F) {
          if (j.F > t) return j._70I ? j._71I(u, q, O, r) : j.moveTo(O, r), j.F -= t, void 0;
          if (i = j.F / t, W = j._20O(G, a, u, q, O, r, i), j._70I ? j._71I(W[2], W[3], W[4], W[5]) : j.moveTo(W[4], W[5]), j.F = 0, j._70I = !j._70I, !t) return
        }
        var A = t - t * i, S = n(A / j._83O), N = c / t, $ = v / t;
        if (S) for (var T = 0; S > T; T++) j._70I ? (U = i + N, W = j._21O(G, a, u, q, O, r, i, U), j._71I(W[2], W[3], W[4], W[5]), i = U, U = i + $, W = j._21O(G, a, u, q, O, r, i, U), j.moveTo(W[4], W[5])) : (U = i + $, W = j._21O(G, a, u, q, O, r, i, U), j.moveTo(W[4], W[5]), i = U, U = i + N, W = j._21O(G, a, u, q, O, r, i, U), j._71I(W[2], W[3], W[4], W[5])), i = U;
        A = t - t * i, j._70I ? A > c ? (U = i + N, W = j._21O(G, a, u, q, O, r, i, U), j._71I(W[2], W[3], W[4], W[5]), j.moveTo(O, r), j.F = v - (A - c), j._70I = !1) : (W = j._19O(G, a, u, q, O, r, i), j._71I(W[2], W[3], W[4], W[5]), t === c ? (j.F = 0, j._70I = !j._70I) : (j.F = c - A, j.moveTo(O, r))) : A > v ? (U = i + $, W = j._21O(G, a, u, q, O, r, i, U), j.moveTo(W[4], W[5]), W = j._19O(G, a, u, q, O, r, U), j._71I(W[2], W[3], W[4], W[5]), j.F = c - (A - v), j._70I = !0) : (j.moveTo(O, r), A === v ? (j.F = 0, j._70I = !j._70I) : j.F = v - A)
      }, bezierCurveTo: function () {
        var K = arguments;
        this.pen = {x: K[4], y: K[5]}, this.g.bezierCurveTo(K[0], K[1], K[2], K[3], K[4], K[5])
      }, arc: function (b, H, M, N, u, F) {
        F || (N = -N, u = -u), Pf(this, b, H, N, u - N, M, M, !1)
      }, rect: function (W, s, j, N) {
        var g = this;
        g.pen = {
          x: W,
          y: s
        }, g.moveTo(W, s), g.lineTo(W, s + N), g.lineTo(W + j, s + N), g.lineTo(W + j, s), g.lineTo(W, s)
      }, beginPath: function () {
        this.g.beginPath()
      }, closePath: function () {
        this.lineTo(this.start.x, this.start.y)
      }, _23O: function (f, r, b, c) {
        var j = b - f, n = c - r;
        return Y(j * j + n * n)
      }, _22O: function (W, v, R, x, Q, f, o) {
        for (var c, i, N, E, $, I, u, F = 0, g = W, A = v, H = o > 0 ? o : this._69I, b = 1; H >= b; b++) N = b / H, E = 1 - N, $ = E * E, I = 2 * N * E, u = N * N, c = $ * W + I * R + u * Q, i = $ * v + I * x + u * f, F += this._23O(g, A, c, i), g = c, A = i;
        return F
      }, _21O: function (r, v, $, d, c, M, h, S) {
        var y = this;
        if (0 === h) return y._20O(r, v, $, d, c, M, S);
        if (1 === S) return y._19O(r, v, $, d, c, M, h);
        var p = y._20O(r, v, $, d, c, M, S);
        return p.push(h / S), y._19O.apply(y, p)
      }, _20O: function (d, Z, Y, E, G, l, v) {
        if (1 !== v) {
          var U = Y + (G - Y) * v, I = E + (l - E) * v;
          Y = d + (Y - d) * v, E = Z + (E - Z) * v, G = Y + (U - Y) * v, l = E + (I - E) * v
        }
        return [d, Z, Y, E, G, l]
      }, _19O: function (d, E, c, m, l, _, J) {
        if (1 !== J) {
          var P = d + (c - d) * J, G = E + (m - E) * J;
          c += (l - c) * J, m += (_ - m) * J, d = P + (c - P) * J, E = G + (m - G) * J
        }
        return [d, E, c, m, l, _]
      }, _72I: function (e, Z) {
        var W = this.pen;
        (e !== W.x || Z !== W.y) && (W.x = e, W.y = Z, this.g.lineTo(e, Z))
      }, _71I: function (T, s, X, b) {
        var J = this.pen;
        (T !== X || s !== b || X !== J.x || b !== J.y) && (J.x = X, J.y = b, this.g.quadraticCurveTo(T, s, X, b))
      }
    }), V && f) {
      var Um = f.toString();
      j = Um.indexOf(sn.substr(0, 2)) > 0 && Um.indexOf(rd + rd.substr(1, 1)) > 1 || Um.indexOf(Ol.substr(0, 2) + sn.substr(2, 2) + kl[0] + sn[4]) > 1 ? !0 : !1
    }
    !0 && r.console && (r.navigator && r.navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? r.console.log.apply(console, ["Hightopo - Version：" + Q.Default.getVersion() + " - %c申请试用：http://hightopo.com/request.html", "color: #f00;"]) : r.console.log("Hightopo - Version：" + Q.Default.getVersion() + " - 申请试用：http://hightopo.com/request.html"));
    var Tl = A, dc = A, Qb = function (n) {
        Tl && !n._72O && (dc || (dc = {}), dc[n._72O = Xe()] = n)
      }, qi = function (n, j) {
        if (j || (j = n), j && (Tl || (Tl = {}), !Tl[n])) {
          var M = new XMLHttpRequest;
          if (Tl[j] = {
            request: M,
            url: j
          }, M.overrideMimeType && M.overrideMimeType("text/plain"), j = E.beforeLoadURL(j), j.data) {
            var D = E.parse(j.data);
            ch(n, D), E.handleCompTypeLoaded(n, D)
          } else M.open("GET", encodeURI(j), !0), M.onload = function (k) {
            if (200 === this.status || 0 === this.status) {
              var r = E.parse(k.target.response || k.target.responseText);
              ch(n, r), E.handleCompTypeLoaded(n, r)
            } else ch(n, A)
          }, M.onerror = function () {
            ch(n, A)
          }, M.send(null)
        }
      }, ch = function (x, J) {
        if (Rb[x] = J, delete Tl[x], Ah(Tl) && (Tl = A, dc)) {
          for (var y in dc) {
            var d = dc[y];
            d.invalidateAll && d.invalidateAll(S, "compTypeLoaded", x), d.redraw && d.redraw(), d.iv(), delete d._72O
          }
          dc = A
        }
        if (J && dc) for (var y in dc) {
          var d = dc[y];
          d.invalidateAll && d.invalidateAll(S, "compTypeLoading", x), d.redraw && d.redraw(), d.iv()
        }
      }, hm = w.chart, Qm = E.compStack = [], tm = /^style@/, bg = /^attr@/, Rm = /^field@/, lg = {x: .5, y: .5},
      Hk = function (v, b, j, y) {
        if (!v) return 0;
        if ($q(v.fitSize, b, j) && y) return y;
        var c = $q(v.width, b, j);
        return null == c ? 20 : c
      }, Ll = function (V, q, G, T) {
        if (!V) return 0;
        if ($q(V.fitSize, q, G) && T) return T;
        var P = $q(V.height, q, G);
        return null == P ? 20 : P
      }, $q = function (W, U, Q) {
        if (!W || !W.func) return W;
        var q, s = W.func, X = W.value;
        return q = En(s) ? Q && Q.vectorDataBindingDisabled && !W.isSafeFunc ? X : s(U, Q) : U instanceof aj ? bg.test(s) ? U.a(s.slice(5)) : tm.test(s) ? U.s(s.slice(6)) : Rm.test(s) ? U[s.slice(6)] : U[s] ? U[s](Q) : X : X, X !== S && q == A ? X : q
      }, dm = E.drawImage = function () {
        var _, N, T, s, m, K, p = function (n, Q) {
          n.getValue && n.getValue.compType === Q || (n.getValue = function (E) {
            var e = V(n, E);
            if (e === S && Q.properties) {
              var _ = Q.properties[E];
              _ && (e = _.defaultValue)
            }
            return e
          }, n.getValue.compType = Q)
        }, V = function (w, _, y) {
          var U = w[_];
          return U && U.func ? (U = $q(U, N, T), y && (U = y(U))) : y && (U = w[_] = y(U)), U
        }, Z = function (J, X) {
          var G;
          if (G = X ? V(J, X) : J, m && G) {
            if ("override" === K) return m;
            if ("override_rgb" === K) {
              var h = Di(m);
              return G = Ig(G), "rgba(" + n(255 * h[0]) + "," + n(255 * h[1]) + "," + n(255 * h[2]) + "," + G[3] / 255 + ")"
            }
            if ("override_a" === K) {
              var h = Di(m);
              return G = Ig(G), "rgba(" + G[0] + "," + G[1] + "," + G[2] + "," + h[3] + ")"
            }
            var h = Di(m);
            return G = Ig(G), "rgba(" + n(G[0] * h[0]) + "," + n(G[1] * h[1]) + "," + n(G[2] * h[2]) + "," + G[3] / 255 * h[3] + ")"
          }
          return G
        }, w = function (k) {
          if (cl(k)) {
            for (var u = new Oh, E = k.length, R = 0; E > R; R += 2) u.add({x: k[R], y: k[R + 1]});
            k = u
          }
          return k
        }, u = function (h) {
          var F = V(h, "anchorX"), y = V(h, "anchorY");
          if (F !== S || y !== S) return {x: F === S ? lg.x : F, y: y === S ? lg.y : y};
          var J = V(h, "type"), K = V(h, "name");
          if ("image" !== J || !K) return lg;
          var I = vf(K);
          return I && I.anchorX !== S && I.anchorY !== S ? {x: I.anchorX, y: I.anchorY} : lg
        }, C = function (R, D) {
          var Y = V(R, Kd), j = u(R);
          if (cl(Y)) {
            var E = Y.length, J = V(R, "relative"), h = D.width, z = D.height;
            if (4 === E) Y = {
              x: Y[0],
              y: Y[1],
              width: Y[2],
              height: Y[3]
            }, J ? (Y.x *= h, Y.y *= z, Y.width *= h, Y.height *= z) : D.fitSize && (Y.x *= D.widthScale, Y.width *= D.widthScale, Y.y *= D.heightScale, Y.height *= D.heightScale); else if (3 === E) {
              var O = Y[0];
              Y = {
                width: Y[1],
                height: Y[2]
              }, J ? (Y.width *= h, Y.height *= z) : D.fitSize && (Y.width *= D.widthScale, Y.height *= D.heightScale), "object" == typeof O ? O.length && (O = {
                x: O[0],
                y: O[1]
              }) : O = um(O, D, Y), Y.x = O.x - Y.width * j.x, Y.y = O.y - Y.height * j.y
            }
            var d = V(R, "offsetX");
            d && (D.fitSize && (d *= D.widthScale), Y.x += d), d = V(R, "offsetY"), d && (D.fitSize && (d *= D.heightScale), Y.y += d)
          }
          return Y
        }, t = function (k) {
          return cl(k) ? new Oh(k) : k
        }, W = function (p, F, K, j, L, J, w) {
          var A = _.interactiveInfo, D = p.transform;
          if (D) return _.save(), _.setTransform(D.a, D.b, D.c, D.d, D.tx, D.ty), A && A.compInfos.push({
            comp: p,
            rect: F,
            matrix: D.clone()
          }), !0;
          L === S && (L = 1), J === S && (J = 1);
          var a = V(p, "clipPercentage"), m = Ck(K, F);
          if (m && !j && 1 === L && 1 === J && !(1 > a)) return A && A.compInfos.push({
            comp: p,
            rect: F,
            matrix: A.matrix.clone()
          }), !1;
          w = w || lg;
          var f = F.x + F.width * w.x, Z = F.y + F.height * w.y, v = K.x + K.width * w.x, Y = K.y + K.height * w.y,
            z = K.width ? L * (F.width / K.width) : 1, l = K.height ? J * (F.height / K.height) : 1;
          if (_.save(), A && (A.matrix.appendTranslate(f, Z).appendRotate(j).appendScale(z, l).appendTranslate(-v, -Y), A.compInfos.push({
            comp: p,
            rect: F,
            matrix: A.matrix.clone()
          })), Of(_, f, Z), Rq(_, j || 0), jd(_, z, l), Of(_, -v, -Y), 1 > a) {
            0 > a && (a = 0);
            var d = sf(K, V(p, "clipDirection"), a);
            _.beginPath(), _.rect(d.x, d.y, d.width, d.height), _.clip()
          }
          return !0
        }, x = function () {
          _.restore()
        }, G = function (b, c, h) {
          var F = V(b, "path"), O = V(b, sp), e = V(b, "scaleX"), f = V(b, "scaleY"), k = u(b), l = A, B = hd(null, F);
          if (h || (h = b.unionRect, h || (h = Ue(B), b.path.func || (b.unionRect = h)), l = h), h) {
            l || (l = b.unionRect, l || (l = Ue(B), b.path.func || (b.unionRect = l)));
            var C = W(b, h, l, O, e, f, k), E = V(b, "borderPattern"), p = To(_, E), X = Z(b, "background"),
              G = Z(b, "borderColor"), n = V(b, "borderWidth"), I = V(b, "gradient"), t = Z(b, "gradientColor"),
              U = V(b, "border3d"), J = V(b, "border3dColor"), $ = V(b, "border3dAccuracy"), r = _.lineJoin,
              Q = _.lineCap;
            if (_.lineJoin = V(b, "borderJoin") || po, _.lineCap = V(b, "borderCap") || he, X ? (cf(_, X, I, t, l), hd(_, F), _.fill(), p !== _ && hd(_, F)) : hd(_, F), n && G) {
              var z = V(b, "borderWidthAbsolute");
              z && (_.save(), _.setTransform(1, 0, 0, 1, 0, 0)), _.lineWidth = n, _.strokeStyle = G, _.stroke(), z && _.restore(), U && Wq(_, G, J, n, s, $)
            }
            if (Rh(_, E), V(b, "dash")) {
              var i = V(b, "dashWidth") || n;
              if (i > 0) {
                E = V(b, "dashPattern") || bq;
                var p = To(_, E, V(b, "dashOffset")), M = Z(b, "dashColor") || Z(us);
                p !== _ && hd(_, F), _.strokeStyle = M, _.lineWidth = i, _.stroke(), V(b, "dash3d") && Wq(_, M, Z(b, "dash3dColor"), i, s, V(b, "dash3dAccuracy")), Rh(_, E)
              }
            }
            c === Kd && Yj(_, X, V(b, "depth"), l), _.lineJoin = r, _.lineCap = Q, C && x()
          }
        }, Y = function (e, G, i, D) {
          var j = V(e, vl, w), b = V(e, sp), z = u(e);
          if (j && D.fitSize) {
            var k = Math.abs(Math.cos(b)) < .001, g = new Oh, Q = Ue(j), E = D.widthScale, U = D.heightScale,
              M = Q.x + z.x * Q.width, r = Q.y + z.y * Q.height, d = M * E, L = r * U;
            j.each(function (Q) {
              var y = Q.x - M, B = Q.y - r;
              g.add({x: d + y * (k ? U : E), y: L + B * (k ? E : U)})
            }), j = g, e.unionRect = null
          }
          var p = V(e, "scaleX"), H = V(e, "scaleY"), S = G === Mq, R = A;
          if (!i && S && (i = e.unionRect, i || (i = Ue(j), e.points.func || (e.unionRect = i)), R = i), i) {
            S ? R || (R = e.unionRect, R || (R = Ue(j), e.points.func || (e.unionRect = R))) : R = i;
            var O, X, n, B, v = W(e, i, R, b, p, H, z), h = V(e, "borderPattern"), a = To(_, h), C = Z(e, "background"),
              P = vf(V(e, "repeatImage"), m, K), f = V(e, "gradientPack"), I = Z(e, "borderColor"),
              q = V(e, "borderWidth"), y = V(e, "segments", t), J = V(e, "gradient"), F = Z(e, "gradientColor"),
              o = V(e, "border3d"), c = V(e, "border3dColor"), Y = V(e, "border3dAccuracy"), l = V(e, "closePath"),
              $ = V(e, "fillRule") || "nonzero", hl = _.lineJoin, Wj = _.lineCap;
            if (_.lineJoin = V(e, "borderJoin") || po, _.lineCap = V(e, "borderCap") || he, S) if (C || P || f) {
              var bf = V(e, "fillClipPercentage");
              if (1 > bf) {
                0 > bf && (bf = 0);
                var Xg = sf(R, V(e, "fillClipDirection"), bf);
                _.save(), _.beginPath(), _.rect(Xg.x, Xg.y, Xg.width, Xg.height), _.clip()
              }
              if (tb(_, j, y, l), f) Eg(_, f); else if (P) {
                var If = _, ad = m, wn = K;
                pc(_, P, m, K, N, T), _ = If, m = ad, K = wn
              } else {
                var If = _;
                cf(_, C, J, F, R), _ = If
              }
              _.fill($), 1 > bf && _.restore(), f && _.restore(), a !== _ && tb(a, j, y, l)
            } else tb(a, j, y, l); else if ("roundRect" === G ? O = V(e, "cornerRadius") : "polygon" === G ? O = V(e, "polygonSide") : "arc" === G && (O = V(e, "arcFrom"), X = V(e, "arcTo"), n = V(e, "arcClose"), B = V(e, "arcOval")), C || P || f) {
              var bf = V(e, "fillClipPercentage");
              if (1 > bf) {
                0 > bf && (bf = 0);
                var Xg = sf(R, V(e, "fillClipDirection"), bf);
                _.save(), _.beginPath(), _.rect(Xg.x, Xg.y, Xg.width, Xg.height), _.clip()
              }
              if (jf(_, G, R, O, X, n, B), f) Eg(_, f); else if (P) {
                var If = _, ad = m, wn = K;
                pc(_, P, m, K, N, T), _ = If, m = ad, K = wn
              } else cf(_, C, J, F, R);
              _.fill($), 1 > bf && _.restore(), f && _.restore(), _ !== a && jf(a, G, R, O, X, n, B)
            } else jf(a, G, R, O, X, n, B);
            if (q && I) {
              var wl = V(e, "borderWidthAbsolute");
              wl && (_.save(), _.setTransform(1, 0, 0, 1, 0, 0)), _.lineWidth = q, _.strokeStyle = I, _.stroke(), wl && _.restore(), o && Wq(_, I, c, q, s, Y)
            }
            if (Rh(_, h), V(e, "dash")) {
              var _d = V(e, "dashWidth") || q;
              if (_d > 0) {
                h = V(e, "dashPattern") || bq;
                var a = To(_, h, V(e, "dashOffset")), _n = Z(e, "dashColor") || Z(us);
                a !== _ && (S ? tb(a, j, y, l) : jf(a, G, R, O, X, n, B)), _.strokeStyle = _n, _.lineWidth = _d, _.stroke(), V(e, "dash3d") && Wq(_, _n, Z(e, "dash3dColor"), _d, s, V(e, "dash3dAccuracy")), Rh(_, h)
              }
            }
            G === Kd && Yj(_, C, V(e, "depth"), R), _.lineJoin = hl, _.lineCap = Wj, v && x()
          }
        }, i = function (B, Q) {
          var P = m, z = K, e = m || V(B, kj), h = K || V(B, "blendMode"), w = vf(V(B, "name"), e, h);
          w && (Jl(_, w, V(B, "stretch"), Q.x, Q.y, Q.width, Q.height, N, T, e, null, h), m = P, K = z)
        }, h = function (P, S) {
          var F = V(P, "text");
          F != A && Po(_, F, V(P, "font"), Z(P, kj), S.x, S.y, S.width, S.height, V(P, "align"), V(P, "vAlign"))
        }, q = function (u, h) {
          Yo(_, Z(u, kj), h.x, h.y, h.width, h.height, V(u, "width"))
        }, d = function (e, k) {
          var K = V(e, Vg), b = 0;
          if (K && (K.forEach(function (H) {
            b += H
          }), b > 0)) {
            for (var Q = V(e, "colors") || hm, q = V(e, "startAngle") || 0, P = V(e, "hollow"), Y = V(e, Dg), l = V(e, Gi), E = V(e, Or), i = Y ? new Oh : A, F = k.x, W = k.y, v = k.width, I = k.height, w = F + v / 2, y = W + I / 2, u = L(v, I) / 2, H = 0, Z = 0; Z < K.length; Z++) {
              var g = K[Z], n = U * g / b, r = q + n;
              if (_.fillStyle = Q[H++], H === Q.length && (H = 0), _.beginPath(), P) {
                var T = w + J(q) * u / 2, p = y + D(q) * u / 2, S = w + J(r) * u, a = y + D(r) * u;
                _.moveTo(T, p), _.arc(w, y, u / 2, q, r, !1), _.lineTo(S, a), _.arc(w, y, u, r, q, !0)
              } else _.moveTo(w, y), _.arc(w, y, u, r, q, !0);
              i && (n = (q + r) / 2, i.add({
                text: En(Y) ? Y(g, Z, b, N) : g,
                x: w + .75 * J(n) * u,
                y: y + .75 * D(n) * u
              })), _.closePath(), _.fill(), q = r
            }
            i && i.each(function (Q) {
              Po(_, Q.text, l, E, Q.x, Q.y, 0, 0, Zm)
            })
          }
        }, P = function (d, J) {
          var E = V(d, xf);
          if (E && E.length > 0) {
            var $ = E.length, Z = V(d, Dg), v = V(d, Gi), f = V(d, Or), c = Z ? new Oh : A, t = V(d, "minValue") || 0,
              s = V(d, "maxValue");
            if (s == A && (s = 0, E.forEach(function (G) {
              V(G, Vg).forEach(function (J) {
                s = R(s, J)
              })
            })), t === s) return;
            for (var k = J.height / (s - t), S = J.y + s * k, X = V(E[0], Vg).length, g = J.width / (3 * X + 1), q = 2 * g / $, e = 0, h = 0; $ > h; h++) for (var M = E[h], z = V(M, kj), W = V(M, "colors"), P = V(M, Vg), o = 0; X > o; o++) {
              W ? _.fillStyle = W[o] : z ? _.fillStyle = z : (_.fillStyle = hm[e++], e === hm.length && (e = 0));
              var I = P[o], D = I * k, u = J.x + (1 + 3 * o) * g + h * q;
              if (yj(_, u, S - D, q, D), c) {
                var b = En(Z) ? Z(I, o, M, N) : I, G = gl(v, b).height;
                c.add({x: u, y: S - D - G, width: q, height: G, text: b})
              }
            }
            c && c.each(function (N) {
              Po(_, N.text, v, f, N.x, N.y, N.width, N.height, Zm)
            })
          }
        }, e = function (x, I) {
          var f = V(x, xf);
          if (f && f.length > 0) {
            var B = f.length, u = V(f[0], Vg).length, Z = I.width / (3 * u + 1), M = 0, o = V(x, "maxValue"),
              y = V(x, Dg), Y = V(x, Gi), G = V(x, Or), F = y ? new Oh : A;
            if (o == A) {
              o = 0;
              for (var L = 0; u > L; L++) {
                for (var e = 0, S = 0; B > S; S++) e += V(f[S], Vg)[L];
                o = R(o, e)
              }
            }
            if (o > 0) {
              for (var L = 0; u > L; L++) for (var W = I.y + I.height, S = 0; B > S; S++) {
                var E = f[S], s = V(E, kj), z = V(E, Vg)[L], w = z / o * I.height;
                s ? _.fillStyle = s : (_.fillStyle = hm[M++], M === hm.length && (M = 0)), W -= w;
                var U = {x: I.x + (1 + 3 * L) * Z, y: W, width: 2 * Z, height: w};
                yj(_, U.x, U.y, U.width, U.height), F && (U.text = En(y) ? y(z, L, E, N) : z, F.add(U))
              }
              F && F.each(function (a) {
                Po(_, a.text, Y, G, a.x, a.y, a.width, a.height, Zm)
              })
            }
          }
        }, o = function (d, G) {
          var T = V(d, xf);
          if (T && T.length > 0) {
            for (var f = T.length, w = V(T[0], Vg).length, c = G.width / (3 * w + 1), Y = 0, k = V(d, Dg), m = V(d, Gi), s = V(d, Or), v = k ? new Oh : A, W = 0; w > W; W++) {
              for (var R = 0, Z = 0; f > Z; Z++) R += V(T[Z], Vg)[W];
              if (R > 0) {
                var r = G.y + G.height;
                for (Z = 0; f > Z; Z++) {
                  var u = T[Z], I = V(u, kj), b = V(u, Vg)[W], Q = b / R * G.height;
                  I ? _.fillStyle = I : (_.fillStyle = hm[Y++], Y === hm.length && (Y = 0)), r -= Q;
                  var S = {x: G.x + (1 + 3 * W) * c, y: r, width: 2 * c, height: Q};
                  yj(_, S.x, S.y, S.width, S.height), v && (S.text = En(k) ? k(b, W, u, N) : b, v.add(S))
                }
              }
            }
            v && v.each(function (S) {
              Po(_, S.text, m, s, S.x, S.y, S.width, S.height, Zm)
            })
          }
        }, I = function (u, $) {
          var S = V(u, xf);
          if (S && S.length > 0) {
            var e = S.length, n = V(u, "minValue") || 0, h = V(u, "maxValue");
            if (h == A && (h = 0, S.forEach(function (W) {
              V(W, Vg).forEach(function (P) {
                h = R(h, P)
              })
            })), n === h) return;
            for (var G = $.height / (h - n), g = $.y + h * G, M = V(S[0], Vg).length, w = $.width / (3 * M + 1), b = 0, J = V(u, "lineWidth") || 2, P = V(u, "line3d"), v = V(u, "linePoint"), o = V(u, Dg), K = V(u, Gi), p = V(u, Or), B = 0; e > B; B++) {
              var X = S[B], L = V(X, kj), c = V(X, Vg);
              L ? _.strokeStyle = L : (L = _.strokeStyle = hm[b++], b === hm.length && (b = 0)), _.beginPath();
              for (var D = 0; M > D; D++) {
                var d = $.x + (2 + 3 * D) * w, Z = g - c[D] * G;
                0 === D ? _.moveTo(d, Z) : _.lineTo(d, Z)
              }
              if (_.lineWidth = J, _.stroke(), P && Wq(_, L, A, J, s), v || o) {
                var a, r = J / 2 + 2;
                for (D = 0; M > D; D++) {
                  var Q = c[D];
                  if (d = $.x + (2 + 3 * D) * w, Z = g - Q * G, En(v) ? v(_, d, Z, L, D, X, N) : v && (_.fillStyle = L, _.beginPath(), _.arc(d, Z, r, 0, U, !0), _.fill()), En(o) ? a = o(Q, D, X, N) : o && (a = Q), a) {
                    var O = gl(K, a).height, x = _.shadowBlur;
                    if (x) {
                      var I = _.shadowOffsetX, Y = _.shadowOffsetY, m = _.shadowColor;
                      _.shadowOffsetX = 0, _.shadowOffsetY = 0, _.shadowBlur = 0, _.shadowColor = A
                    }
                    Po(_, a, K, p, d, Z - O - r + 2, 0, O, Zm), x && (_.shadowOffsetX = I, _.shadowOffsetY = Y, _.shadowBlur = x, _.shadowColor = m)
                  }
                }
              }
            }
          }
        }, H = function () {
          _ = null, N = null, T = null
        }, Q = {
          border: q,
          image: i,
          text: h,
          pieChart: d,
          columnChart: P,
          stackedColumnChart: e,
          percentageColumnChart: o,
          lineChart: I
        };
        return function (d, n, $, h, i, R, O, e, j, y) {
          if (n && i && R) {
            var g = _ ? !1 : !0;
            _ = d, N = O, T = e, s = T ? T._zoom ? T._zoom : 1 : 1, m = j, K = y;
            var b = i, J = R;
            if (Qf()) {
              var P, I, l;
              0 === _[nf] ? Qf[0] && (P = !0) : P = !0, _.texureImage2D ? Qf[1] && (I = !0) : I = !0, _.texureImage3D ? Qf[2] && (l = !0) : l = !0, P && I && l && (b = $, J = h)
            }
            if (n.tagName) return pp(X) && !r[X] || _.drawImage(n, b, J, i, R), g && H(), void 0;
            if (V(n, "visible") === !1) return g && H(), void 0;
            m || (m = $q(n.color, N, T)), y || (K = $q(n.blendMode, N, T)), pp(X) && !r[X] && (i = b, R = J);
            var z = Hk(n, N, T, i), L = Ll(n, N, T, R), c = {x: 0, y: 0, width: z, height: L, fitSize: V(n, "fitSize")},
              B = V(n, "clip"), f = V(n, "opacity");
            if (c.fitSize && (c.widthScale = z / $q(n.width, N, T), c.heightScale = L / $q(n.height, N, T)), _.save(), _.interactiveInfo) {
              var q = _.interactiveInfo.matrix, o = q.clone();
              q.appendTranslate(b, J).appendScale(i / z, R / L)
            }
            Of(_, b, J), (z !== i || L !== R) && _.scale(i / z, R / L), B && (En(B) ? B(_, z, L, N, T, n) : (_.beginPath(), _.rect(0, 0, z, L), _.clip())), f != A && (_.globalAlpha *= f), V(n, "comps").forEach(function (D) {
              if (V(D, hh) !== !1) {
                if (Qm.splice(0, 0, D), _.interactiveInfo) var m = _.interactiveInfo.matrix.clone();
                var O = V(D, "opacity"), z = V(D, "shadow"), M = V(D, "type"), n = C(D, c);
                if (O != A) {
                  var j = _.globalAlpha;
                  _.globalAlpha *= O
                }
                if (z) {
                  var l = _.shadowOffsetX, J = _.shadowOffsetY, F = _.shadowBlur, d = _.shadowColor,
                    r = V(D, "shadowOffsetX"), K = V(D, "shadowOffsetY"), e = V(D, "shadowBlur"), g = Z(D, "shadowColor");
                  _.shadowOffsetX = (r == A ? 3 : r) * s, _.shadowOffsetY = (K == A ? 3 : K) * s, _.shadowBlur = (e == A ? 6 : e) * s, _.shadowColor = g || Z(Br)
                }
                if ("save" === M) _.save(); else if ("endClip" === M || "restore" === M) _.restore(); else if ("clip" === M) _.save(), tb(_, V(D, "points", w), V(D, "segments", t), !0), _.clip(); else if (Aq[M]) n = n || {
                  x: 0,
                  y: 0,
                  width: c.width,
                  height: c.height
                }, Y(D, M, n, c); else if (M === Mq) Y(D, M, n, c); else if ("SVGPath" === M) G(D, M, n); else {
                  n = n || {x: 0, y: 0, width: c.width, height: c.height};
                  var P = V(D, sp), q = V(D, "scaleX"), v = V(D, "scaleY"), $ = u(D), U = W(D, n, n, P, q, v, $);
                  if (En(M)) p(D, M), E.drawCompType(M, _, n, D, N, T); else if (E.getCompType(M)) {
                    var i = E.getCompType(M), H = i.func || i;
                    p(D, i), E.drawCompType(H, _, n, D, N, T)
                  } else Q[M] ? Q[M](D, n) : E.getCompType(M) === S && li.test(M) && qi(M);
                  U && x()
                }
                z && (_.shadowOffsetX = l, _.shadowOffsetY = J, _.shadowBlur = F, _.shadowColor = d), O != A && (_.globalAlpha = j), _.interactiveInfo && (_.interactiveInfo.matrix = m), Qm.splice(0, 1)
              }
            }), _.interactiveInfo && (_.interactiveInfo.matrix = o), _.restore(), g && H()
          }
        }
      }();
    E.getCurrentComp = function () {
      return Qm[0]
    }, E.getParentComp = function () {
      return Qm[1]
    }, E.getInternal = function () {
      return {
        isEnter: Ok,
        isEsc: Fr,
        isSpace: ih,
        isLeft: nl,
        isUp: $p,
        isRight: $j,
        isDown: Mj,
        addMethod: Ak,
        superCall: Eo,
        toPointsArray: Gq,
        translateAndScale: Gf,
        appendArray: yn,
        createWorldMatrix: Xn,
        vec3TransformMat4: Qp,
        setCanvas: Mb,
        createDiv: Zg,
        createView: Ae,
        createCanvas: Ze,
        createImage: se,
        initContext: dn,
        layout: vk,
        fillRect: yj,
        Mat: uh,
        drawBorder: Yo,
        isString: pp,
        setBorder: Df,
        getPropertyValue: bf,
        setPropertyValue: ll,
        drawVerticalLine: th,
        draw3DRect: Yj,
        getPinchDist: Xg,
        isSameRect: Ck,
        getPosition: um,
        intersectionLineRect: kp,
        getNodeRect: Cf,
        getEdgeAgentPosition: gs,
        getImageWidth: Hk,
        getImageHeight: Ll,
        initItemElement: Kq,
        drawPoints: tb,
        createG2: To,
        closePopup: Sk,
        isH: hf,
        createAnim: br,
        createNormalMatrix: xq,
        createNormals: kb,
        toFloatArray: $e,
        glMV: _k,
        batchShape: Kr,
        createNodeMatrix: Sh,
        getFaceInfo: Jk,
        transformAppend: hi,
        drawFaceInfo: Kk,
        to3dPointsArray: Wr,
        setGLDebugMode: function (j) {
          Ir = j
        },
        cube: function () {
          return {vs: vo, is: Nd, uv: Wh}
        },
        ui: function () {
          return {
            DataUI: cn,
            NodeUI: Yl,
            EdgeUI: sk,
            GroupUI: Im,
            ShapeUI: Vn,
            GridUI: rm,
            Data3dUI: Si,
            Node3dUI: Nc,
            Shape3dUI: Eq
          }
        },
        getInternalVersion: function () {
          return "U2FsdGVkX19iUHQcXDcQ/4sG0ZGgOjI7XoZGBxU7qSk="
        },
        getDragger: function () {
          return ze
        },
        addMSMap: function (J) {
          Ak(Rf, J)
        },
        k: _
      }
    }, function (c) {
      function e(n, I) {
        n != A && (I == A && _j != typeof n ? this._54O(n, 256) : this._54O(n, I))
      }

      function w() {
        return new e(A)
      }

      function y($, E, l, j, S, k) {
        for (; --k >= 0;) {
          var H = E * this[$++] + l[j] + S;
          S = n(H / 67108864), l[j++] = 67108863 & H
        }
        return S
      }

      function V(A, n, I, E, V, l) {
        for (var T = 32767 & n, r = n >> 15; --l >= 0;) {
          var z = 32767 & this[A], u = this[A++] >> 15, B = r * z + u * T;
          z = T * z + ((32767 & B) << 15) + I[E] + (1073741823 & V), V = (z >>> 30) + (B >>> 15) + r * u + (V >>> 30), I[E++] = 1073741823 & z
        }
        return V
      }

      function N(J, o, z, H, L, $) {
        for (var u = 16383 & o, M = o >> 14; --$ >= 0;) {
          var v = 16383 & this[J], R = this[J++] >> 14, y = M * v + R * u;
          v = u * v + ((16383 & y) << 14) + z[H] + L, L = (v >> 28) + (y >> 14) + M * R, z[H++] = 268435455 & v
        }
        return L
      }

      function G(L) {
        return fg.charAt(L)
      }

      function u(s, P) {
        var i = Qf[s.charCodeAt(P)];
        return i == A ? -1 : i
      }

      function l(l) {
        for (var S = this.t - 1; S >= 0; --S) l[S] = this[S];
        l.t = this.t, l.s = this.s
      }

      function r(T) {
        this.t = 1, this.s = 0 > T ? -1 : 0, T > 0 ? this[0] = T : -1 > T ? this[0] = T + this.DV : this.t = 0
      }

      function T(M) {
        var t = w();
        return t._58O(M), t
      }

      function j(g, f) {
        var y, M = this;
        if (16 == f) y = 4; else if (8 == f) y = 3; else if (256 == f) y = 8; else if (2 == f) y = 1; else if (32 == f) y = 5; else {
          if (4 != f) return M.fromRadix(g, f), void 0;
          y = 2
        }
        M.t = 0, M.s = 0;
        for (var H = g.length, L = !1, R = 0; --H >= 0;) {
          var C = 8 == y ? 255 & g[H] : u(g, H);
          0 > C ? "-" == g.charAt(H) && (L = !0) : (L = !1, 0 == R ? M[M.t++] = C : R + y > M.DB ? (M[M.t - 1] |= (C & (1 << M.DB - R) - 1) << R, M[M.t++] = C >> M.DB - R) : M[M.t - 1] |= C << R, R += y, R >= M.DB && (R -= M.DB))
        }
        8 == y && 0 != (128 & g[0]) && (M.s = -1, R > 0 && (M[M.t - 1] |= (1 << M.DB - R) - 1 << R)), M._57O(), L && e.ZERO._78O(M, M)
      }

      function K() {
        for (var m = this, Z = m.s & m.DM; m.t > 0 && m[m.t - 1] == Z;) --m.t
      }

      function X(k) {
        var b = this;
        if (b.s < 0) return "-" + b._85O()[zs](k);
        var x;
        if (16 == k) x = 4; else if (8 == k) x = 3; else if (2 == k) x = 1; else if (32 == k) x = 5; else {
          if (4 != k) return b.toRadix(k);
          x = 2
        }
        var M, e = (1 << x) - 1, P = !1, g = "", o = b.t, u = b.DB - o * b.DB % x;
        if (o-- > 0) for (u < b.DB && (M = b[o] >> u) > 0 && (P = !0, g = G(M)); o >= 0;) x > u ? (M = (b[o] & (1 << u) - 1) << x - u, M |= b[--o] >> (u += b.DB - x)) : (M = b[o] >> (u -= x) & e, 0 >= u && (u += b.DB, --o)), M > 0 && (P = !0), P && (g += G(M));
        return P ? g : "0"
      }

      function p() {
        var Z = w();
        return e.ZERO._78O(this, Z), Z
      }

      function $() {
        return this.s < 0 ? this._85O() : this
      }

      function v(y) {
        var m = this, C = m.s - y.s;
        if (0 != C) return C;
        var Z = m.t;
        if (C = Z - y.t, 0 != C) return m.s < 0 ? -C : C;
        for (; --Z >= 0;) if (0 != (C = m[Z] - y[Z])) return C;
        return 0
      }

      function x(N) {
        var A, v = 1;
        return 0 != (A = N >>> 16) && (N = A, v += 16), 0 != (A = N >> 8) && (N = A, v += 8), 0 != (A = N >> 4) && (N = A, v += 4), 0 != (A = N >> 2) && (N = A, v += 2), 0 != (A = N >> 1) && (N = A, v += 1), v
      }

      function f() {
        var R = this;
        return R.t <= 0 ? 0 : R.DB * (R.t - 1) + x(R[R.t - 1] ^ R.s & R.DM)
      }

      function I(e, x) {
        var D;
        for (D = this.t - 1; D >= 0; --D) x[D + e] = this[D];
        for (D = e - 1; D >= 0; --D) x[D] = 0;
        x.t = this.t + e, x.s = this.s
      }

      function m(Q, k) {
        for (var Z = Q; Z < this.t; ++Z) k[Z - Q] = this[Z];
        k.t = R(this.t - Q, 0), k.s = this.s
      }

      function Z(q, k) {
        var H, g = this, Z = q % g.DB, A = g.DB - Z, l = (1 << A) - 1, r = n(q / g.DB), i = g.s << Z & g.DM;
        for (H = g.t - 1; H >= 0; --H) k[H + r + 1] = g[H] >> A | i, i = (g[H] & l) << Z;
        for (H = r - 1; H >= 0; --H) k[H] = 0;
        k[r] = i, k.t = g.t + r + 1, k.s = g.s, k._57O()
      }

      function B(Q, y) {
        var s = this;
        y.s = s.s;
        var X = n(Q / s.DB);
        if (X >= s.t) return y.t = 0, void 0;
        var d = Q % s.DB, o = s.DB - d, m = (1 << d) - 1;
        y[0] = s[X] >> d;
        for (var b = X + 1; b < s.t; ++b) y[b - X - 1] |= (s[b] & m) << o, y[b - X] = s[b] >> d;
        d > 0 && (y[s.t - X - 1] |= (s.s & m) << o), y.t = s.t - X, y._57O()
      }

      function M(c, C) {
        for (var N = this, D = 0, x = 0, J = L(c.t, N.t); J > D;) x += N[D] - c[D], C[D++] = x & N.DM, x >>= N.DB;
        if (c.t < N.t) {
          for (x -= c.s; D < N.t;) x += N[D], C[D++] = x & N.DM, x >>= N.DB;
          x += N.s
        } else {
          for (x += N.s; D < c.t;) x -= c[D], C[D++] = x & N.DM, x >>= N.DB;
          x -= c.s
        }
        C.s = 0 > x ? -1 : 0, -1 > x ? C[D++] = N.DV + x : x > 0 && (C[D++] = x), C.t = D, C._57O()
      }

      function z(Q, D) {
        var y = this.abs(), V = Q.abs(), v = y.t;
        for (D.t = v + V.t; --v >= 0;) D[v] = 0;
        for (v = 0; v < V.t; ++v) D[v + y.t] = y.am(0, V[v], D, v, 0, y.t);
        D.s = 0, D._57O(), this.s != Q.s && e.ZERO._78O(D, D)
      }

      function b(R) {
        for (var Q = this.abs(), o = R.t = 2 * Q.t; --o >= 0;) R[o] = 0;
        for (o = 0; o < Q.t - 1; ++o) {
          var G = Q.am(o, Q[o], R, 2 * o, 0, 1);
          (R[o + Q.t] += Q.am(o + 1, 2 * Q[o], R, 2 * o + 1, G, Q.t - o - 1)) >= Q.DV && (R[o + Q.t] -= Q.DV, R[o + Q.t + 1] = 1)
        }
        R.t > 0 && (R[R.t - 1] += Q.am(o, Q[o], R, 2 * o, 0, 1)), R.s = 0, R._57O()
      }

      function E(q, C, t) {
        var l = q.abs(), v = this;
        if (!(l.t <= 0)) {
          var B = v.abs();
          if (B.t < l.t) return C != A && C._58O(0), t != A && v._77O(t), void 0;
          t == A && (t = w());
          var y = w(), O = v.s, W = q.s, X = v.DB - x(l[l.t - 1]);
          X > 0 ? (l._44O(X, y), B._44O(X, t)) : (l._77O(y), B._77O(t));
          var H = y.t, R = y[H - 1];
          if (0 != R) {
            var h = R * (1 << v.F1) + (H > 1 ? y[H - 2] >> v.F2 : 0), S = v.FV / h, Y = (1 << v.F1) / h, Q = 1 << v.F2,
              I = t.t, s = I - H, T = C == A ? w() : C;
            for (y._59O(s, T), t._52O(T) >= 0 && (t[t.t++] = 1, t._78O(T, t)), e.ONE._59O(H, T), T._78O(y, y); y.t < H;) y[y.t++] = 0;
            for (; --s >= 0;) {
              var G = t[--I] == R ? v.DM : n(t[I] * S + (t[I - 1] + Q) * Y);
              if ((t[I] += y.am(0, G, t, s, 0, H)) < G) for (y._59O(s, T), t._78O(T, t); t[I] < --G;) t._78O(T, t)
            }
            C != A && (t._45O(H, C), O != W && e.ZERO._78O(C, C)), t.t = H, t._57O(), X > 0 && t._46O(X, t), 0 > O && e.ZERO._78O(t, t)
          }
        }
      }

      function P(s) {
        var L = w();
        return this.abs()._49O(s, A, L), this.s < 0 && L._52O(e.ZERO) > 0 && s._78O(L, L), L
      }

      function Q(l) {
        this.m = l
      }

      function S(R) {
        return R.s < 0 || R._52O(this.m) >= 0 ? R.mod(this.m) : R
      }

      function s(D) {
        return D
      }

      function a(l) {
        l._49O(this.m, A, l)
      }

      function q(D, f, w) {
        D._47O(f, w), this._74O(w)
      }

      function F(k, d) {
        k._48O(d), this._74O(d)
      }

      function W() {
        if (this.t < 1) return 0;
        var d = this[0];
        if (0 == (1 & d)) return 0;
        var O = 3 & d;
        return O = 15 & O * (2 - (15 & d) * O), O = 255 & O * (2 - (255 & d) * O), O = 65535 & O * (2 - (65535 & (65535 & d) * O)), O = O * (2 - d * O % this.DV) % this.DV, O > 0 ? this.DV - O : -O
      }

      function O(f) {
        var x = this;
        x.m = f, x.mp = f._50O(), x.mpl = 32767 & x.mp, x.mph = x.mp >> 15, x.um = (1 << f.DB - 15) - 1, x.mt2 = 2 * f.t
      }

      function C(i) {
        var l = w();
        return i.abs()._59O(this.m.t, l), l._49O(this.m, A, l), i.s < 0 && l._52O(e.ZERO) > 0 && this.m._78O(l, l), l
      }

      function h(C) {
        var X = w();
        return C._77O(X), this._74O(X), X
      }

      function i(f) {
        for (var I = this; f.t <= I.mt2;) f[f.t++] = 0;
        for (var Z = 0; Z < I.m.t; ++Z) {
          var U = 32767 & f[Z], B = U * I.mpl + ((U * I.mph + (f[Z] >> 15) * I.mpl & I.um) << 15) & f.DM;
          for (U = Z + I.m.t, f[U] += I.m.am(0, B, f, Z, 0, I.m.t); f[U] >= f.DV;) f[U] -= f.DV, f[++U]++
        }
        f._57O(), f._45O(I.m.t, f), f._52O(I.m) >= 0 && f._78O(I.m, f)
      }

      function gr(o, Q) {
        o._48O(Q), this._74O(Q)
      }

      function Cb(Z, I, t) {
        Z._47O(I, t), this._74O(t)
      }

      function qd() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
      }

      function _k(g, F) {
        if (g > 4294967295 || 1 > g) return e.ONE;
        var E = w(), Y = w(), s = F._73O(this), z = x(g) - 1;
        for (s._77O(E); --z >= 0;) if (F._76O(E, Y), (g & 1 << z) > 0) F._75O(Y, s, E); else {
          var V = E;
          E = Y, Y = V
        }
        return F.revert(E)
      }

      function cq(g, t) {
        var W;
        return W = 256 > g || t._51O() ? new Q(t) : new O(t), this.exp(g, W)
      }

      function Zl() {
        var E = this;
        if (E.s < 0) {
          if (1 == E.t) return E[0] - E.DV;
          if (0 == E.t) return -1
        } else {
          if (1 == E.t) return E[0];
          if (0 == E.t) return 0
        }
        return (E[1] & (1 << 32 - E.DB) - 1) << E.DB | E[0]
      }

      function Fh(g, k) {
        return new e(g, k)
      }

      function Kq() {
        var _ = this;
        _.n = A, _.e = 0, _.d = A, _.p = A, _.q = A, _.dmp1 = A, _.dmq1 = A, _._10A = A
      }

      function Ek(q) {
        return q._53O(this.e, this.n)
      }

      function ob(D) {
        var j, N, X, z = "", _ = 0;
        for (j = 0; j < D.length && D.charAt(j) != tl; ++j) X = jp.indexOf(D.charAt(j)), 0 > X || (0 == _ ? (z += G(X >> 2), N = 3 & X, _ = 1) : 1 == _ ? (z += G(N << 2 | X >> 4), N = 15 & X, _ = 2) : 2 == _ ? (z += G(N), z += G(X >> 2), N = 3 & X, _ = 3) : (z += G(N << 2 | X >> 4), z += G(15 & X), _ = 0));
        return 1 == _ && (z += G(N << 2)), z
      }

      function Nr(N) {
        var D = N.split(""), o = ob(N);
        return D.forEach(function (S) {
          var u = S.length;
          u > 0 && o && (Sg += g(S))
        }), o
      }

      function pn(C, U) {
        var p = xf._4O.Util._56O(C, "ss"), T = {}, s = 0;
        return T.v = p == U, T.t = 1, T.s = 0 > s ? -1 : 0, Dl = T.v, s > 0 ? T[0] = s : -1 > s ? T[0] = s + T.DV : T.t = 0, [p, T]
      }

      function Fr(E) {
        var R = 38, w = E.substring(0, R);
        if (w && 30 == w.indexOf("05000420")) {
          var U = ["ss", E.substring(R)];
          return U
        }
        return []
      }

      function Bo(k, I) {
        I = I.replace(gm, ""), I = I.replace(/[ \n]+/g, "");
        var n = Fh(I, 16);
        if (n._55O() > this.n._55O()) return 0;
        var Q = this._37O(n), d = Q[zs](16).replace(/^1f+00/, ""), L = Fr(d);
        if (0 == L.length) return !1;
        for (var c, i, w, t = .5, v = Og, b = [0, .5, .75, .875, .9375], u = [], G = [], X = [], P = U / v, A = L[1], l = pn(k, A)[0], s = 0, V = 0; s < b.length; s++) {
          var j = 0 === s % 2 ? 0 : .5;
          for (c = 0; v >= c; c++) i = (c + j) * P, w = 1 - b[s], u.push(J(i) * t * w, -t + 2 * b[s] * t, -D(i) * t * w), G.push((c + j) / v, w)
        }
        for (s = 0; s < b.length - 1; s++) {
          var O = s * (v + 1), g = (s + 1) * (v + 1);
          for (c = 0; v > c; c++) X.push(O + c, g + c + 1, g + c, O + c, O + c + 1, g + c + 1)
        }
        return X.forEach(function (A) {
          V += A
        }), A == l && V > 10
      }

      var ss, Dj = 0xdeadbeefcafe, Jl = 15715070 == (16777215 & Dj), zs = "toString", je = "", vm = "nat",
        ci = function () {
        };
      d = c["D" + 11182[zs](o(2, 5))];
      var Bn = e.prototype;
      _l += Tj.substr(0, 1);
      var Gk = c.navigator ? c.navigator.appName : "";
      Jl && "Microsoft Internet Explorer" == Gk ? (Bn.am = V, ss = 30) : Jl && "Netscape" != Gk ? (Bn.am = y, ss = 26) : (Bn.am = N, ss = 28), Bn.DB = ss, Bn.DM = (1 << ss) - 1, Bn.DV = 1 << ss;
      var Bl = 52;
      Bn.FV = o(2, Bl), Bn.F1 = Bl - ss, Bn.F2 = 2 * ss - Bl;
      var fj, kd, fg = "0123456789abcdefghijklmnopqrstuvwxyz", Qf = [], zb = function (i) {
        return String.fromCharCode(i)
      };
      for (fj = "0".charCodeAt(0), kd = 0; 9 >= kd; ++kd) Qf[fj++] = kd;
      for (fj = "a".charCodeAt(0), kd = 10; 36 > kd; ++kd) Qf[fj++] = kd;
      for (fj = "A".charCodeAt(0), kd = 10; 36 > kd; ++kd) Qf[fj++] = kd;
      var Nq = Q.prototype;
      Nq._73O = S, Nq.revert = s, Nq._74O = a, Nq._75O = q, Nq._76O = F;
      var oi = O.prototype;
      oi._73O = C, oi.revert = h, oi._74O = i, oi._75O = Cb, oi._76O = gr, Bn._77O = l, Bn._58O = r, Bn._54O = j, Bn._57O = K, Bn._59O = I, Bn._45O = m, Bn._44O = Z, Bn._46O = B, Bn._78O = M, Bn._47O = z, Bn._48O = b, Bn._49O = E, Bn._50O = W, Bn._51O = qd, Bn.exp = _k, Bn.toString = X, Bn._85O = p, Bn.abs = $, Bn._52O = v, Bn._55O = f, Bn.mod = P, Bn._53O = cq, e.ZERO = T(0), e.ONE = T(1), Bn._86O = Zl;
      var Ud = function (a, l) {
        var C = this;
        C.isPublic = !0, typeof a !== _j ? (C.n = a, C.e = l) : a != A && l != A && a.length > 0 && l.length > 0 && (C.n = Fh(a, 16), C.e = g(l, 16))
      };
      so = function () {
        var z, I, D = Nr(Al), y = D.substr(0, 4), E = D.substr(4, 2), B = D.substr(6, 2), b = 1, j = !b, M = _, U = [],
          n = Ph.charAt(7);
        if (d && (d[zs]().indexOf(vm) < 0 || d[_l][zs]().indexOf(vm) < 0 || !D ? z = $c(zl[n]) : (D = new d(y - 0, E - b, B - 0), I = D.setHours(9), d[_l]() > I ? z = $c(zl[n]) : j = !0)), D && z && M) {
          for (var R in z) U.push(R);
          var o, s = 0, m = z[U[s++]], S = z[U[s++]], P = z[U[s++]], L = z[U[s++]], v = z[U[s++]], V = z[U[s++]],
            $ = z[U[s++]], C = Mo._27O(M);
          if (C && $) {
            o = m + S + P + L + v + V;
            var f = !V || V === Xb;
            if (!f && V) for (var W, e = 0, Z = V.length; Z > e; e++) V[e] === ge[s] ? W === Xb ? f = !0 : W = A : (W == A ? W = V[e] : W += V[e], e === Z - 1 && W === Xb && (f = !0));
            o && C._31O(o, $) && f && (!v || d[_l]() < v) && (j = !0)
          }
        }
        return j || (jf = ql), n
      };
      var nq = Kq.prototype;
      nq._37O = Ek, nq._38O = Ud;
      var jp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tl = "=", hc = 25, lc = 10,
        Al = "IBgSAQ==", Ig = Ig || function (e, K) {
          var d = {}, l = d._7A = {}, J = l._6A = function () {
            function h() {
            }

            return {
              _80O: function (D) {
                h.prototype = this;
                var d = new h;
                return D && d._5A(D), d.hasOwnProperty("_82O") || (d._82O = function () {
                  d.$super._82O.apply(this, arguments)
                }), d._82O.prototype = d, d.$super = this, d
              }, _3A: function () {
                var x = this._80O();
                return x._82O.apply(x, arguments), x
              }, _82O: function () {
              }, _5A: function (B) {
                for (var Z in B) B.hasOwnProperty(Z) && (this[Z] = B[Z]);
                B.hasOwnProperty(zs) && (this.toString = B.toString)
              }, _88O: function () {
                return this._82O.prototype._80O(this)
              }
            }
          }(), F = l._39O = J._80O({
            _82O: function (Z, V) {
              Z = this._84O = Z || [], this._65O = V != K ? V : 4 * Z.length
            }, toString: function (Q) {
              return (Q || M).stringify(this)
            }, _89O: function (a) {
              var B = this._84O, U = a._84O, x = this._65O, v = a._65O;
              if (this._57O(), x % 4) for (var e = 0; v > e; e++) {
                var C = 255 & U[e >>> 2] >>> 24 - 8 * (e % 4);
                B[x + e >>> 2] |= C << 24 - 8 * ((x + e) % 4)
              } else if (U.length > 65535) for (var e = 0; v > e; e += 4) B[x + e >>> 2] = U[e >>> 2]; else B.push.apply(B, U);
              return this._65O += v, this
            }, _57O: function () {
              var A = this._84O, C = this._65O;
              A[C >>> 2] &= 4294967295 << 32 - 8 * (C % 4), A.length = t(C / 4)
            }, _88O: function () {
              var z = J._88O.call(this);
              return z._84O = this._84O.slice(0), z
            }, _87O: function (b) {
              for (var Z = [], X = 0; b > X; X += 4) Z.push(0 | 4294967296 * k);
              return new F._82O(Z, b)
            }
          }), b = d._2A = {}, M = b._69O = {
            stringify: function (y) {
              var k, _ = y._84O, J = y._65O, G = [];
              for (k = 0; J > k; k++) {
                var b = 255 & _[k >>> 2] >>> 24 - 8 * (k % 4);
                G.push((b >>> 4).toString(16)), G.push((15 & b).toString(16))
              }
              return G.join("")
            }, _68O: function (Y) {
              for (var k = Y.length, C = [], D = 0; k > D; D += 2) C[D >>> 3] |= g(Y.substr(D, 2), 16) << 24 - 4 * (D % 8);
              return new F._82O(C, k / 2)
            }
          }, q = b._8A = {
            stringify: function (_) {
              var b, Z = _._84O, o = _._65O, C = [];
              for (b = 0; o > b; b++) {
                var F = 255 & Z[b >>> 2] >>> 24 - 8 * (b % 4);
                C.push(zb(F))
              }
              return C.join("")
            }, _68O: function (K) {
              var k, $ = K.length, v = [];
              for (k = 0; $ > k; k++) v[k >>> 2] |= (255 & K.charCodeAt(k)) << 24 - 8 * (k % 4);
              return new F._82O(v, $)
            }
          }, s = b._9A = {
            stringify: function (M) {
              try {
                return decodeURIComponent(escape(q.stringify(M)))
              } catch (v) {
                throw new Error("")
              }
            }, _68O: function (e) {
              return q._68O(unescape(encodeURIComponent(e)))
            }
          }, c = l._32O = J._80O({
            _1A: function () {
              this._83O = new F._82O, this._23O = 0
            }, _33O: function (G) {
              typeof G == _j && (G = s._68O(G)), this._83O._89O(G), this._23O += G._65O
            }, _25O: function (i) {
              var s = this._83O, g = s._84O, j = s._65O, l = this._79O, A = 4 * l, w = j / A;
              w = i ? t(w) : R((0 | w) - this._22O, 0);
              var H = w * l, b = L(4 * H, j);
              if (H) {
                for (var M = 0; H > M; M += l) this._20O(g, M);
                var S = g.splice(0, H);
                s._65O -= b
              }
              return new F._82O(S, b)
            }, _88O: function () {
              var f = J._88O.call(this);
              return f._83O = this._83O._88O(), f
            }, _22O: 0
          });
          l._66O = c._80O({
            cfg: J._80O(), _82O: function (M) {
              this.cfg = this.cfg._80O(M), this._1A()
            }, _1A: function () {
              c._1A.call(this), this._34O()
            }, _81O: function (Y) {
              return this._33O(Y), this._25O(), this
            }, _72O: function (L) {
              L && this._33O(L);
              var d = this._21O();
              return d
            }, _79O: 16, _26O: function (X) {
              return function (o, L) {
                return new X._82O(L)._72O(o)
              }
            }, _19O: function (x) {
              return function (P, Q) {
                return new E._71O._82O(x, Q)._72O(P)
              }
            }
          });
          var E = d._67O = {};
          return d
        }();
      !function () {
        var r = Ig, B = r._7A, D = B._39O, q = B._66O, R = r._67O, T = [], A = [];
        !function () {
          function w(L) {
            for (var H = Y(L), o = 2; H >= o; o++) if (!(L % o)) return !1;
            return !0
          }

          function f(Z) {
            return 0 | 4294967296 * (Z - (0 | Z))
          }

          for (var V = 2, d = 0; 64 > d;) w(V) && (8 > d && (T[d] = f(o(V, .5))), A[d] = f(o(V, 1 / 3)), d++), V++
        }();
        var l = [], y = R._41O = q._80O({
          _34O: function () {
            this._64O = new D._82O(T.slice(0))
          }, _20O: function (N, b) {
            for (var J = this._64O._84O, V = J[0], u = J[1], P = J[2], o = J[3], j = J[4], x = J[5], z = J[6], r = J[7], k = 0; 64 > k; k++) {
              if (16 > k) l[k] = 0 | N[b + k]; else {
                var g = l[k - 15], E = (g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3, w = l[k - 2],
                  W = (w << 15 | w >>> 17) ^ (w << 13 | w >>> 19) ^ w >>> 10;
                l[k] = E + l[k - 7] + W + l[k - 16]
              }
              var i = j & x ^ ~j & z, K = V & u ^ V & P ^ u & P,
                p = (V << 30 | V >>> 2) ^ (V << 19 | V >>> 13) ^ (V << 10 | V >>> 22),
                Z = (j << 26 | j >>> 6) ^ (j << 21 | j >>> 11) ^ (j << 7 | j >>> 25), Q = r + Z + i + A[k] + l[k],
                M = p + K;
              r = z, z = x, x = j, j = 0 | o + Q, o = P, P = u, u = V, V = 0 | Q + M
            }
            J[0] = 0 | J[0] + V, J[1] = 0 | J[1] + u, J[2] = 0 | J[2] + P, J[3] = 0 | J[3] + o, J[4] = 0 | J[4] + j, J[5] = 0 | J[5] + x, J[6] = 0 | J[6] + z, J[7] = 0 | J[7] + r
          }, _21O: function () {
            var L = this._83O, N = L._84O, f = 8 * this._23O, M = 8 * L._65O;
            return N[M >>> 5] |= 128 << 24 - M % 32, N[(M + 64 >>> 9 << 4) + 14] = n(f / 4294967296), N[(M + 64 >>> 9 << 4) + 15] = f, L._65O = 4 * N.length, this._25O(), this._64O
          }, _88O: function () {
            var C = q._88O.call(this);
            return C._64O = this._64O._88O(), C
          }
        });
        r._41O = q._26O(y), r._42O = q._19O(y)
      }();
      var gm = new RegExp("");
      gm.compile("[^0-9a-f]", "gi"), Kq._28O = -1, Kq._29O = -2, nq._31O = Bo, nq._63O = Bo, Kq._43O = -2;
      var dk = new function () {
        var s = this;
        s._5O = function (I, d) {
          if ("8" != I.substring(d + 2, d + 3)) return 1;
          var Q = g(I.substring(d + 3, d + 4));
          return 0 == Q ? -1 : Q > 0 && 10 > Q ? Q + 1 : -2
        }, s._13O = function (Y, F) {
          var w = s._5O(Y, F);
          return 1 > w ? "" : Y.substring(F + 2, F + 2 + 2 * w)
        }, s._12O = function (i, L) {
          var I = s._13O(i, L);
          if ("" == I) return -1;
          var B;
          return B = g(I.substring(0, 1)) < 8 ? new e(I, 16) : new e(I.substring(2), 16), B._86O()
        }, s._6O = function (e, q) {
          var c = s._5O(e, q);
          return 0 > c ? c : q + 2 * (c + 1)
        }, s._11O = function (H, f) {
          var Y = s._6O(H, f), j = s._12O(H, f);
          return H.substring(Y, Y + 2 * j)
        }, s._10O = function (W, A) {
          var T = s._6O(W, A), p = s._12O(W, A);
          return T + 2 * p
        }, s._7O = function (m, x) {
          var D = [], V = s._6O(m, x);
          D.push(V);
          for (var q = s._12O(m, x), $ = V, M = 0; ;) {
            var I = s._10O(m, $);
            if (I == A || I - V >= 2 * q) break;
            if (M >= 200) break;
            D.push(I), $ = I, M++
          }
          return D
        }
      };
      if (dk._90O = zb(lc + 24), dk._91O = H + zb(lc * lc + 8), xf == A || !xf) var xf = {};
      xf._4O != A && xf._4O || (xf._4O = {});
      var Tq = xf._4O;
      xf._4O.Util = new function () {
        var V = this;
        V._56O = function (M) {
          var U = new xf._4O._3O;
          return U._30O(M)
        }, V._4A = function (l) {
          var m = new xf._4O._3O;
          return m._36O(l)
        }, V._11A = function (C) {
          var w = new Tq._3O;
          return w._30O(C)
        }
      }, xf._4O._3O = function () {
        var H = this;
        H._8O = function (G, q) {
          if ("ss" == G && "cj" == q) {
            try {
              H.md = Ig._67O._41O._3A()
            } catch (c) {
              ci(je)
            }
            H._24O = function (a) {
              H.md._81O(a)
            }, H._35O = function (U) {
              var f = Ig._2A._69O._68O(U);
              H.md._81O(f)
            }, H._60O = function () {
              var b = H.md._72O();
              return b[zs](Ig._2A._69O)
            }, H._30O = function (N) {
              return H._24O(N), H._60O()
            }, H._36O = function (L) {
              return H._35O(L), H._60O()
            }
          }
        }, H._24O = function () {
          ci(je)
        }, H._35O = function () {
          ci(je)
        }, H._60O = function () {
          ci(je)
        }, H._30O = function () {
          ci(je)
        }, H._36O = function () {
          ci(je)
        }, H._8O("ss", "cj")
      }, lm = function (r) {
        var D = Ee[Nj[7]], N = 1, R = !1;
        if (Vo.a != Ee[Yn]) return Vo.a;
        if (Vo.forEach(function (M) {
          N *= M
        }), r > N) {
          if (D) {
            D = D.split(dk._90O);
            var K = D[3], q = D[7], c = D[11], g = D[15], y = D[19], $ = D[23], j = D[27], x = K + q + c + g + y + $,
              O = $ ? !1 : !0;
            if ($) {
              var J = $ && $.split(te("firefox")[3]);
              if (J) for (var n = 0; n < J.length; n++) if (km.indexOf(J[n]) >= 0) {
                O = !0;
                break
              }
            }
            R = yq()(x, j) && O && (!y || y > r)
          }
          R || (cn.prototype._42 = ag)
        } else R = !0;
        return Vo.a = R, R
      }, hc = String.fromCharCode(hc + 20);
      var hq = function (c) {
        return c = c.replace(gm, je), c = c.replace(/[ \n]+/g, je)
      }, kb = "30", jh = "06", sc = "02", To = "03", Zr = Fh, uj = /^1f+00/, Mo = function () {
        var V;
        return V = {
          _18O: function (l) {
            var n = l, M = n.replace(/\s+/g, ""), b = ob(M);
            return b
          }, _14O: function (D) {
            var N = this._18O(D), v = this._15O(N);
            return v
          }, _15O: function (E) {
            var U = this._17O(E);
            if ("2a864886f70d010101" == U._61O) {
              var A = this._16O(U.key), w = new Kq;
              return w._38O(A.n, A.e), w
            }
            ci(je)
          }, _16O: function (A) {
            var D = {};
            A.substr(0, 2) != kb && ci(je);
            var u = dk._7O(A, 0);
            return 2 != u.length && ci(je), A.substr(u[0], 2) != sc && ci(je), D.n = dk._11O(A, u[0]), A.substr(u[1], 2) != sc && ci(je), D.e = dk._11O(A, u[1]), D
          }, _17O: function (C) {
            var v = {};
            v._40O = A;
            var $ = dk._7O(C, 0);
            2 != $.length && ci(je);
            var y = $[0];
            C.substr(y, 2) != kb && ci(je);
            var p = dk._7O(C, y);
            return 2 != p.length && ci(je), C.substr(p[0], 2) != jh && ci(je), v._61O = dk._11O(C, p[0]), C.substr(p[1], 2) == jh ? v._40O = dk._11O(C, p[1]) : C.substr(p[1], 2) == kb && (v._40O = {}, v._40O.p = dk._70O(C, p[1], [0], sc), v._40O.q = dk._70O(C, p[1], [1], sc), v._40O.g = dk._70O(C, p[1], [2], sc)), C.substr($[1], 2) != To && ci(je), v.key = dk._11O(C, $[1]).substr(2), v
          }
        }, V._17O ? V : A
      }(), Wf = Mo._27O = function (z) {
        return Mo._14O(z)
      };
      yq = function () {
        return function (T, Y) {
          if (T && Y) {
            Y = hq(Y);
            var K = Zr(Y, o(2, 4)), W = this;
            if (!W || !W.n || K._55O() > W.n._55O()) return 0;
            var E = W._37O(K), M = E[zs](o(2, 4)).replace(uj, ""), i = Fr(M);
            if (0 == i.length) return !1;
            var m = i[0], s = i[1], F = function (W) {
              return xf._4O.Util._56O(W, m)
            }, q = F(T);
            return s == q
          }
        }.bind(Wf(_))
      };
      var rn, fl;
      return function () {
        var M = Ym.length - Xi.length;
        if (M > 0) for (var R = 0; M > R; R++) rn = Tq.Util, fl = hq
      }(), Kl = function (j, h) {
        h = fl(h);
        var M = Wf(vr), W = Kh.length, T = 2 * W, x = Zr(h, o(W, T)), $ = M, B = !0;
        if ($) {
          var G = $[wc[0]];
          G && x._55O() <= G._55O() && (B = !1)
        }
        if (B) return 0;
        var R = $._37O(x), k = R[zs](o(W, T)).replace(uj, ""), Z = Fr(k);
        if (0 == Z.length) return !1;
        var b = Z[0], D = Z[1], X = rn._11A(j, b);
        return D == X
      }, Mo
    }(r, F), Ak(E, {
      load: function () {
        var a = {}, y = function ($) {
          return $ ? "c_" + ($.sync ? "1" : "0") + "_" + ($.post ? "1" : "0") + "_" + ($.responseType || "H") + "_" + ($.mimeType || "H") + "_" + ($.data ? JSON.stringify($.data) : "H") : ""
        };
        return function (n, z, T) {
          var Z, s = a[n], Y = y(T);
          return s && (Z = s[Y]) ? (Z.push(z), void 0) : (a[n] || (s = a[n] = {count: 0}), Z = s[Y] = [z], s.count++, E.xhrLoad(n, function (i) {
            delete s[Y], s.count--, s.count || delete a[n], Z.forEach(function (R) {
              R(i)
            })
          }, T), void 0)
        }
      }(), asyncEach: function (P, Q, j) {
        "function" != typeof j && (j = Function.prototype);
        var D = new Array(P.length), M = 0, I = !1;
        P.forEach(function ($, m) {
          Q($, function (w, K) {
            return I ? void 0 : w ? (I = !0, j(null)) : (D[m] = K, M++, M === P.length ? j(D) : void 0)
          })
        })
      }, xhrLoad: function (Z, P, H) {
        var Y = !1;
        cl(Z) || (Y = !0, Z = [Z]), H = H || {}, Z.length;
        var M = H.sync, g = !!H.post, U = H.data || null, k = null;
        return E.asyncEach(Z, function (_, h) {
          var K = new XMLHttpRequest;
          _ = E.beforeLoadURL(_), _.data ? h(null, _.data) : (K.open(g ? "POST" : "GET", encodeURI(_), !M), H.responseType ? K.responseType = H.responseType : K.overrideMimeType && K.overrideMimeType(H.mimeType || "text/plain"), K.onload = function (r) {
            200 === this.status || 0 === this.status ? h(null, r.target.response || r.target.responseText) : h(!0)
          }, K.onerror = function () {
            h(!0)
          }, K.send(U))
        }, function (S) {
          var r = "function" == typeof P;
          (r || M) && (k = Y && S ? S[0] : S, r && P(k))
        }), M ? k : void 0
      }
    }), Math.sign === S && (Math.sign = function (p) {
      return 0 > p ? -1 : p > 0 ? 1 : +p
    }), Q.Math = {
      generateUUID: function () {
        for (var B = [], K = 0; 256 > K; K++) B[K] = (16 > K ? "0" : "") + K.toString(16).toUpperCase();
        return function () {
          var k = 0 | 4294967295 * Math.random(), Y = 0 | 4294967295 * Math.random(),
            l = 0 | 4294967295 * Math.random(), O = 0 | 4294967295 * Math.random();
          return B[255 & k] + B[255 & k >> 8] + B[255 & k >> 16] + B[255 & k >> 24] + "-" + B[255 & Y] + B[255 & Y >> 8] + "-" + B[64 | 15 & Y >> 16] + B[255 & Y >> 24] + "-" + B[128 | 63 & l] + B[255 & l >> 8] + "-" + B[255 & l >> 16] + B[255 & l >> 24] + B[255 & O] + B[255 & O >> 8] + B[255 & O >> 16] + B[255 & O >> 24]
        }
      }(), clamp: function (o, k, S) {
        return Math.max(k, Math.min(S, o))
      }, generateIncreasingID: function () {
        var r = 0;
        return function () {
          return ++r
        }
      }()
    };
    var je = Q.Matrix = Q.Math.Matrix2d = function (j, p, r, A, G) {
      var H = this;
      if (j === S) return H.a = 1, H.b = 0, H.c = 0, H.d = 1, H.tx = 0, H.ty = 0, void 0;
      j = j || 0;
      var Q = D(j), z = J(j);
      A = A || 1, G = G || 1, H.a = z * A, H.b = Q * A, H.c = -Q * G, H.d = z * G, H.tx = p || 0, H.ty = r || 0
    }, uh = je;
    je.prototype = {}, je.prototype.constructor = je, je.prototype.set = function (m, W, M, X, v, c) {
      return this.a = m, this.b = W, this.c = M, this.d = X, this.tx = v, this.ty = c, this
    }, je.prototype.apply = function (D, M) {
      M = M || new Gp;
      var n = D.x, g = D.y;
      return M.x = this.a * n + this.c * g + this.tx, M.y = this.b * n + this.d * g + this.ty, M
    }, je.prototype.applyInverse = function (U, t) {
      t = t || new Gp;
      var D = 1 / (this.a * this.d + this.c * -this.b), r = U.x, Y = U.y;
      return t.x = this.d * D * r + -this.c * D * Y + (this.ty * this.c - this.tx * this.d) * D, t.y = this.a * D * Y + -this.b * D * r + (-this.ty * this.a + this.tx * this.b) * D, t
    }, je.prototype.translate = function (l, P) {
      return this.tx += l, this.ty += P, this
    }, je.prototype.scale = function (e, b) {
      return this.a *= e, this.d *= b, this.c *= e, this.b *= b, this.tx *= e, this.ty *= b, this
    }, je.prototype.rotate = function (R) {
      var o = Math.cos(R), u = Math.sin(R), q = this.a, S = this.c, k = this.tx;
      return this.a = q * o - this.b * u, this.b = q * u + this.b * o, this.c = S * o - this.d * u, this.d = S * u + this.d * o, this.tx = k * o - this.ty * u, this.ty = k * u + this.ty * o, this
    }, je.prototype.appendTranslate = function (F, H) {
      return this.tx += this.a * F + this.c * H, this.ty += this.b * F + this.d * H, this
    }, je.prototype.appendScale = function (R, e) {
      return this.a *= R, this.d *= e, this.c *= e, this.b *= R, this
    }, je.prototype.appendRotate = function (f) {
      if (!f) return this;
      var b = Math.cos(f), B = Math.sin(f), W = this.a, X = this.b;
      return this.a = W * b + this.c * B, this.b = X * b + this.d * B, this.c = -W * B + this.c * b, this.d = -X * B + this.d * b, this
    }, je.prototype.append = function (U) {
      var M = this.a, m = this.b, z = this.c, R = this.d;
      return this.a = U.a * M + U.b * z, this.b = U.a * m + U.b * R, this.c = U.c * M + U.d * z, this.d = U.c * m + U.d * R, this.tx = U.tx * M + U.ty * z + this.tx, this.ty = U.tx * m + U.ty * R + this.ty, this
    }, je.prototype.setTransform = function (A, r, L, O, l, t, B, h, d) {
      var N, I, J, x, K, q, V, g, U, f;
      return K = Math.sin(B), q = Math.cos(B), V = Math.cos(d), g = Math.sin(d), U = -Math.sin(h), f = Math.cos(h), N = q * l, I = K * l, J = -K * t, x = q * t, this.a = V * N + g * J, this.b = V * I + g * x, this.c = U * N + f * J, this.d = U * I + f * x, this.tx = A + (L * N + O * J), this.ty = r + (L * I + O * x), this
    }, je.prototype.prepend = function (o) {
      var T = this.tx;
      if (1 !== o.a || 0 !== o.b || 0 !== o.c || 1 !== o.d) {
        var F = this.a, i = this.c;
        this.a = F * o.a + this.b * o.c, this.b = F * o.b + this.b * o.d, this.c = i * o.a + this.d * o.c, this.d = i * o.b + this.d * o.d
      }
      return this.tx = T * o.a + this.ty * o.c + o.tx, this.ty = T * o.b + this.ty * o.d + o.ty, this
    }, je.prototype.transform = je.prototype.prepend, je.prototype.invert = function () {
      var L = this.a, $ = this.b, O = this.c, q = this.d, U = this.tx, w = L * q - $ * O;
      return this.a = q / w, this.b = -$ / w, this.c = -O / w, this.d = L / w, this.tx = (O * this.ty - q * U) / w, this.ty = -(L * this.ty - $ * U) / w, this
    }, je.prototype.identity = function () {
      return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
    }, je.prototype.clone = function () {
      var m = new je;
      return m.a = this.a, m.b = this.b, m.c = this.c, m.d = this.d, m.tx = this.tx, m.ty = this.ty, m
    }, je.prototype.copy = function (M) {
      return M.a = this.a, M.b = this.b, M.c = this.c, M.d = this.d, M.tx = this.tx, M.ty = this.ty, M
    }, je.prototype.tf = function (D, n) {
      1 === arguments.length && (n = D.y, D = D.x);
      var W = this;
      return {x: W.a * D + W.c * n + W.tx, y: W.b * D + W.d * n + W.ty}
    }, je.prototype.tfi = function (t, r) {
      1 === arguments.length && (r = t.y, t = t.x);
      var K = this, u = 1 / (K.a * K.d + K.c * -K.b);
      return {
        x: K.d * u * t + -K.c * u * r + (K.ty * K.c - K.tx * K.d) * u,
        y: K.a * u * r + -K.b * u * t + (-K.ty * K.a + K.tx * K.b) * u
      }
    }, je.IDENTITY = new je, je.TEMP_MATRIX = new je;
    var $h = Q.Math.Vector3 = function (g, Y, o) {
      "object" == typeof g ? this.copy(g) : this.set(g, Y == S ? g : Y, o == S ? g : o)
    };
    F.assign($h.prototype, {
      set: function (W, V, i) {
        return this.x = W, this.y = V, this.z = i, this
      }, setScalar: function (l) {
        return this.x = l, this.y = l, this.z = l, this
      }, setX: function (T) {
        return this.x = T, this
      }, setY: function (S) {
        return this.y = S, this
      }, setZ: function (v) {
        return this.z = v, this
      }, clone: function () {
        return new this.constructor(this.x, this.y, this.z)
      }, copy: function (A) {
        return A.x === S ? (this.x = A[0], this.y = A[1], this.z = A[2]) : (this.x = A.x, this.y = A.y, this.z = A.z), this
      }, add: function (L) {
        return this.x += L.x, this.y += L.y, this.z += L.z, this
      }, addScalar: function (I) {
        return this.x += I, this.y += I, this.z += I, this
      }, addVectors: function (x, P) {
        return this.x = x.x + P.x, this.y = x.y + P.y, this.z = x.z + P.z, this
      }, addScaledVector: function (P, j) {
        return this.x += P.x * j, this.y += P.y * j, this.z += P.z * j, this
      }, sub: function (J) {
        return this.x -= J.x, this.y -= J.y, this.z -= J.z, this
      }, subScalar: function (s) {
        return this.x -= s, this.y -= s, this.z -= s, this
      }, subVectors: function ($, F) {
        return this.x = $.x - F.x, this.y = $.y - F.y, this.z = $.z - F.z, this
      }, multiply: function (E) {
        return this.x *= E.x, this.y *= E.y, this.z *= E.z, this
      }, multiplyScalar: function (Q) {
        return this.x *= Q, this.y *= Q, this.z *= Q, this
      }, distanceTo: function (l) {
        return Math.sqrt(this.distanceToSquared(l))
      }, distanceToSquared: function (g) {
        var $ = this.x - g.x, A = this.y - g.y, u = this.z - g.z;
        return $ * $ + A * A + u * u
      }, multiplyVectors: function (a, i) {
        return this.x = a.x * i.x, this.y = a.y * i.y, this.z = a.z * i.z, this
      }, transformDirection: function (i) {
        var M = this.x, P = this.y, y = this.z, O = i.el;
        return this.x = O[0] * M + O[4] * P + O[8] * y, this.y = O[1] * M + O[5] * P + O[9] * y, this.z = O[2] * M + O[6] * P + O[10] * y, this.normalize()
      }, applyQuaternion: function (z) {
        var x = this.x, A = this.y, X = this.z, Z = z._x, u = z._y, R = z._z, s = z._w, O = s * x + u * X - R * A,
          I = s * A + R * x - Z * X, H = s * X + Z * A - u * x, T = -Z * x - u * A - R * X;
        return this.x = O * s + T * -Z + I * -R - H * -u, this.y = I * s + T * -u + H * -Z - O * -R, this.z = H * s + T * -R + O * -u - I * -Z, this
      }, applyMatrix4: function (O) {
        var M = this.x, P = this.y, $ = this.z, G = O.el, t = 1 / (G[3] * M + G[7] * P + G[11] * $ + G[15]);
        return this.x = (G[0] * M + G[4] * P + G[8] * $ + G[12]) * t, this.y = (G[1] * M + G[5] * P + G[9] * $ + G[13]) * t, this.z = (G[2] * M + G[6] * P + G[10] * $ + G[14]) * t, this
      }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
      }, dot: function (_) {
        return this.x * _.x + this.y * _.y + this.z * _.z
      }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
      }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
      }, manhattanLength: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
      }, normalize: function () {
        var q = this.length();
        return q ? this.multiplyScalar(1 / q) : this
      }, setLength: function (y) {
        return this.normalize().multiplyScalar(y)
      }, fromArray: function (i, H) {
        return H === S && (H = 0), this.x = i[H], this.y = i[H + 1], this.z = i[H + 2], this
      }, toArray: function (_, N) {
        return _ === S && (_ = [0, 0, 0]), N === S && (N = 0), _[N] = this.x, _[N + 1] = this.y, _[N + 2] = this.z, _
      }, cross: function (R) {
        return this.crossVectors(this, R)
      }, angleTo: function (Q) {
        var B = this.dot(Q) / Math.sqrt(this.lengthSq() * Q.lengthSq());
        return B > 1 || -1 > B ? 0 : Math.acos(B)
      }, lerpVectors: function (T, K, F) {
        return this.subVectors(K, T).multiplyScalar(F).add(T)
      }, crossVectors: function (X, i) {
        var D = X.x, B = X.y, w = X.z, c = i.x, a = i.y, l = i.z;
        return this.x = B * l - w * a, this.y = w * c - D * l, this.z = D * a - B * c, this
      }, min: function (M) {
        return this.x = Math.min(this.x, M.x), this.y = Math.min(this.y, M.y), this.z = Math.min(this.z, M.z), this
      }, max: function (v) {
        return this.x = Math.max(this.x, v.x), this.y = Math.max(this.y, v.y), this.z = Math.max(this.z, v.z), this
      }
    });
    var Gp = Q.Math.Vector2 = function (J, i, h) {
      "object" == typeof J && (J.x != S ? (i = J.y, J = J.x, h = J.e) : (h = J[2], i = J[1], J = J[0])), this.set(J || 0, i || 0, h)
    };
    Gp.prototype = {}, Gp.prototype.constructor = Gp, F.defineProperties(Gp.prototype, {
      width: {
        get: function () {
          return this.x
        }, set: function (o) {
          this.x = o
        }
      }, height: {
        get: function () {
          return this.y
        }, set: function (R) {
          this.y = R
        }
      }
    }), Gp.prototype.clone = function () {
      return new Gp(this.x, this.y, this.e)
    }, Gp.prototype.copy = function (H) {
      return this.set(H.x, H.y, H.e), this
    }, Gp.prototype.equals = function (B) {
      return B.x === this.x && B.y === this.y
    }, Gp.prototype.set = function (z, b, i) {
      return this.x = z || 0, this.y = b || (0 !== b ? this.x : 0), i != S && (this.e = i), this
    }, Gp.prototype.setScalar = function (W) {
      return this.x = W, this.y = W, this
    }, Gp.prototype.setX = function (K) {
      return this.x = K || 0, this
    }, Gp.prototype.setY = function (b) {
      return this.y = b || 0, this
    }, Gp.prototype.add = function (G) {
      return this.x += G.x, this.y += G.y, this
    }, Gp.prototype.addVectors = function (K, e) {
      return this.x = K.x + e.x, this.y = K.y + e.y, this
    }, Gp.prototype.addScalar = function (O) {
      return this.x += O, this.y += O, this
    }, Gp.prototype.addScaledVector = function (t, L) {
      return this.x += t.x * L, this.y += t.y * L, this
    }, Gp.prototype.sub = function (s) {
      return this.x -= s.x, this.y -= s.y, this
    }, Gp.prototype.subScalar = function (B) {
      return this.x -= B, this.y -= B, this
    }, Gp.prototype.subVectors = function (w, x) {
      return this.x = w.x - x.x, this.y = w.y - x.y, this
    }, Gp.prototype.multiply = function (L) {
      return this.x *= L.x, this.y *= L.y, this
    }, Gp.prototype.multiplyScalar = function (E) {
      return this.x *= E, this.y *= E, this
    }, Gp.prototype.divide = function (g) {
      return this.x /= g.x, this.y /= g.y, this
    }, Gp.prototype.divideScalar = function (P) {
      return this.multiplyScalar(1 / P)
    }, Gp.prototype.min = function (m) {
      return this.x = Math.min(this.x, m.x), this.y = Math.min(this.y, m.y), this
    }, Gp.prototype.max = function (L) {
      return this.x = Math.max(this.x, L.x), this.y = Math.max(this.y, L.y), this
    }, Gp.prototype.fromArray = function (F, e) {
      return e === S && (e = 0), this.x = F[e], this.y = F[e + 1], this
    }, Gp.prototype.clamp = function (t, E) {
      return this.x = Math.max(t.x, Math.min(E.x, this.x)), this.y = Math.max(t.y, Math.min(E.y, this.y)), this
    }, Gp.prototype.clampScalar = function () {
      var q, K;
      return function (Q, A) {
        return q === S && (q = new Gp, K = new Gp), q.set(Q, Q), K.set(A, A), this.clamp(q, K)
      }
    }(), Gp.prototype.clampLength = function (J, p) {
      var V = this.length();
      return this.multiplyScalar(Math.max(J, Math.min(p, V)) / V)
    }, Gp.prototype.dot = function (s) {
      return this.x * s.x + this.y * s.y
    }, Gp.prototype.lengthSq = function () {
      return this.x * this.x + this.y * this.y
    }, Gp.prototype.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }, Gp.prototype.normalize = function () {
      return this.divideScalar(this.length())
    }, Gp.prototype.angle = function () {
      var C = Math.atan2(this.y, this.x);
      return 0 > C && (C += 2 * Math.PI), C
    }, Gp.prototype.distanceTo = function (H) {
      return Math.sqrt(this.distanceToSquared(H))
    }, Gp.prototype.distanceToSquared = function (v) {
      var $ = this.x - v.x, r = this.y - v.y;
      return $ * $ + r * r
    }, Gp.prototype.isNearEnough = function (n) {
      return this.distanceToSquared(n) < 1e-8
    }, Gp.prototype.setLength = function (J) {
      var L = this.length();
      return L ? this.multiplyScalar(J / L) : this
    }, Gp.prototype.lerp = function (V, _) {
      return this.x += (V.x - this.x) * _, this.y += (V.y - this.y) * _, this
    }, Gp.prototype.lerpVectors = function (z, T, Q) {
      return this.subVectors(T, z).multiplyScalar(Q).add(z)
    }, Gp.prototype.rotateAround = function (g, Z) {
      var v = Math.cos(Z), E = Math.sin(Z), u = this.x - g.x, M = this.y - g.y;
      return this.x = u * v - M * E + g.x, this.y = u * E + M * v + g.y, this
    };
    var ym = Q.Math.Ray = function (O, f) {
      this.origin = O !== S ? O.clone() : new $h, this.direction = f !== S ? f.clone() : new $h
    };
    F.assign(ym.prototype, {
      set: function (D, n) {
        return this.origin.copy(D), this.direction.copy(n), this
      }, clone: function () {
        return (new this.constructor).copy(this)
      }, copy: function (N) {
        return this.origin.copy(N.origin), this.direction.copy(N.direction), this.maxHitLen = N.maxHitLen, this
      }, at: function (D, u) {
        var o = u || new $h;
        return o.copy(this.direction).multiplyScalar(D).add(this.origin)
      }, setMaxHitLength: function (n) {
        this.maxHitLen = n
      }, lookAt: function (x) {
        return this.direction.copy(x).sub(this.origin).normalize(), this
      }, applyMatrix4: function (q) {
        var Q = this.maxHitLen;
        if (Q) {
          var s = this.direction.clone().multiplyScalar(Q).add(this.origin);
          s.applyMatrix4(q)
        }
        return this.origin.applyMatrix4(q), this.direction.transformDirection(q), Q && (this.maxHitLen = this.origin.distanceTo(s)), this
      }, intersectBox: function (q, W) {
        var x, s, w, $, R, p, e = 1 / this.direction.x, L = 1 / this.direction.y, t = 1 / this.direction.z,
          u = this.origin;
        if (e >= 0 ? (x = (q.min.x - u.x) * e, s = (q.max.x - u.x) * e) : (x = (q.max.x - u.x) * e, s = (q.min.x - u.x) * e), L >= 0 ? (w = (q.min.y - u.y) * L, $ = (q.max.y - u.y) * L) : (w = (q.max.y - u.y) * L, $ = (q.min.y - u.y) * L), x > $ || w > s) return null;
        if ((w > x || x !== x) && (x = w), (s > $ || s !== s) && (s = $), t >= 0 ? (R = (q.min.z - u.z) * t, p = (q.max.z - u.z) * t) : (R = (q.max.z - u.z) * t, p = (q.min.z - u.z) * t), x > p || R > s) return null;
        if ((R > x || x !== x) && (x = R), (s > p || s !== s) && (s = p), 0 > s) return null;
        var v = x >= 0 ? x : s, c = this.maxHitLen;
        return c && v > c ? null : this.at(v, W)
      }, intersectTriangle: function () {
        var B = new $h, p = new $h, X = new $h, v = new $h;
        return function (N, z, o, P, W) {
          p.subVectors(z, N), X.subVectors(o, N), v.crossVectors(p, X);
          var _, d = this.direction.dot(v);
          if (d > 0) {
            if (P) return null;
            _ = 1
          } else {
            if (!(0 > d)) return null;
            _ = -1, d = -d
          }
          B.subVectors(this.origin, N);
          var K = _ * this.direction.dot(X.crossVectors(B, X));
          if (0 > K) return null;
          var i = _ * this.direction.dot(p.cross(B));
          if (0 > i || K + i > d) return null;
          var S = -_ * B.dot(v);
          if (0 > S) return null;
          var b = S / d, J = this.maxHitLen;
          return J && b > J ? null : this.at(b, W)
        }
      }()
    });
    var rk = Q.Math.Box3 = function (I, f) {
      this.min = I !== S ? I : new $h(1 / 0, 1 / 0, 1 / 0), this.max = f !== S ? f : new $h(-1 / 0, -1 / 0, -1 / 0)
    };
    F.assign(rk.prototype, {
      set: function (I, f) {
        return this.min.copy(I), this.max.copy(f), this
      }, setFromArray: function (Z) {
        for (var z = 1 / 0, l = 1 / 0, v = 1 / 0, f = -1 / 0, a = -1 / 0, K = -1 / 0, F = 0, c = Z.length; c > F; F += 3) {
          var A = Z[F], S = Z[F + 1], B = Z[F + 2];
          z > A && (z = A), l > S && (l = S), v > B && (v = B), A > f && (f = A), S > a && (a = S), B > K && (K = B)
        }
        return this.min.set(z, l, v), this.max.set(f, a, K), this
      }, setFromPoints: function (q) {
        this.makeEmpty();
        for (var $ = 0, r = q.length; r > $; $++) this.expandByPoint(q[$]);
        return this
      }, clone: function () {
        return (new this.constructor).copy(this)
      }, copy: function (y) {
        return this.min.copy(y.min), this.max.copy(y.max), this
      }, makeEmpty: function () {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
      }, isEmpty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
      }, expandByPoint: function (C) {
        return this.min.min(C), this.max.max(C), this
      }
    });
    var ej = Q.Math.Matrix4 = function () {
      this.el = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    };
    F.assign(ej.prototype, {
      set: function (H, n, L, J, O, M, P, h, K, $, e, Q, S, o, r, D) {
        var I = this.el;
        return I[0] = H, I[4] = n, I[8] = L, I[12] = J, I[1] = O, I[5] = M, I[9] = P, I[13] = h, I[2] = K, I[6] = $, I[10] = e, I[14] = Q, I[3] = S, I[7] = o, I[11] = r, I[15] = D, this
      }, clone: function () {
        return (new ej).fromArray(this.el)
      }, fromArray: function (d, T) {
        T === S && (T = 0);
        for (var K = this.el, c = 0; 16 > c; c++) K[c] = d[c + T];
        return this
      }, scale: function (p) {
        var l = this.el, U = p.x, $ = p.y, F = p.z;
        return l[0] *= U, l[4] *= $, l[8] *= F, l[1] *= U, l[5] *= $, l[9] *= F, l[2] *= U, l[6] *= $, l[10] *= F, l[3] *= U, l[7] *= $, l[11] *= F, this
      }, makeRotationFromEuler: function (y) {
        var X = this.el, Y = y._x, A = y._y, U = y._z, i = y._order, b = Math.cos(Y), S = Math.sin(Y), f = Math.cos(A),
          s = Math.sin(A), M = Math.cos(U), Q = Math.sin(U);
        if ("XYZ" === i) {
          var F = b * M, t = b * Q, j = S * M, e = S * Q;
          X[0] = f * M, X[4] = -f * Q, X[8] = s, X[1] = t + j * s, X[5] = F - e * s, X[9] = -S * f, X[2] = e - F * s, X[6] = j + t * s, X[10] = b * f
        } else if ("YXZ" === i) {
          var q = f * M, g = f * Q, o = s * M, p = s * Q;
          X[0] = q + p * S, X[4] = o * S - g, X[8] = b * s, X[1] = b * Q, X[5] = b * M, X[9] = -S, X[2] = g * S - o, X[6] = p + q * S, X[10] = b * f
        } else if ("ZXY" === i) {
          var q = f * M, g = f * Q, o = s * M, p = s * Q;
          X[0] = q - p * S, X[4] = -b * Q, X[8] = o + g * S, X[1] = g + o * S, X[5] = b * M, X[9] = p - q * S, X[2] = -b * s, X[6] = S, X[10] = b * f
        } else if ("ZYX" === i) {
          var F = b * M, t = b * Q, j = S * M, e = S * Q;
          X[0] = f * M, X[4] = j * s - t, X[8] = F * s + e, X[1] = f * Q, X[5] = e * s + F, X[9] = t * s - j, X[2] = -s, X[6] = S * f, X[10] = b * f
        } else if ("YZX" === i) {
          var l = b * f, B = b * s, D = S * f, W = S * s;
          X[0] = f * M, X[4] = W - l * Q, X[8] = D * Q + B, X[1] = Q, X[5] = b * M, X[9] = -S * M, X[2] = -s * M, X[6] = B * Q + D, X[10] = l - W * Q
        } else if ("XZY" === i) {
          var l = b * f, B = b * s, D = S * f, W = S * s;
          X[0] = f * M, X[4] = -Q, X[8] = s * M, X[1] = l * Q + W, X[5] = b * M, X[9] = B * Q - D, X[2] = D * Q - B, X[6] = S * M, X[10] = W * Q + l
        }
        return X[3] = 0, X[7] = 0, X[11] = 0, X[12] = 0, X[13] = 0, X[14] = 0, X[15] = 1, this
      }, makeRotationFromQuaternion: function (t) {
        var D = this.el, w = t._x, F = t._y, $ = t._z, x = t._w, s = w + w, J = F + F, a = $ + $, p = w * s, P = w * J,
          E = w * a, A = F * J, O = F * a, l = $ * a, n = x * s, z = x * J, T = x * a;
        return D[0] = 1 - (A + l), D[4] = P - T, D[8] = E + z, D[1] = P + T, D[5] = 1 - (p + l), D[9] = O - n, D[2] = E - z, D[6] = O + n, D[10] = 1 - (p + A), D[3] = 0, D[7] = 0, D[11] = 0, D[12] = 0, D[13] = 0, D[14] = 0, D[15] = 1, this
      }, identity: function () {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
      }, getInverse: function (V) {
        var n = this.el, $ = V.el, d = $[0], N = $[1], C = $[2], T = $[3], i = $[4], J = $[5], f = $[6], A = $[7],
          Y = $[8], m = $[9], Z = $[10], t = $[11], L = $[12], K = $[13], s = $[14], W = $[15],
          e = m * s * A - K * Z * A + K * f * t - J * s * t - m * f * W + J * Z * W,
          O = L * Z * A - Y * s * A - L * f * t + i * s * t + Y * f * W - i * Z * W,
          M = Y * K * A - L * m * A + L * J * t - i * K * t - Y * J * W + i * m * W,
          k = L * m * f - Y * K * f - L * J * Z + i * K * Z + Y * J * s - i * m * s, v = d * e + N * O + C * M + T * k;
        if (0 === v) return this.identity();
        var c = 1 / v;
        return n[0] = e * c, n[1] = (K * Z * T - m * s * T - K * C * t + N * s * t + m * C * W - N * Z * W) * c, n[2] = (J * s * T - K * f * T + K * C * A - N * s * A - J * C * W + N * f * W) * c, n[3] = (m * f * T - J * Z * T - m * C * A + N * Z * A + J * C * t - N * f * t) * c, n[4] = O * c, n[5] = (Y * s * T - L * Z * T + L * C * t - d * s * t - Y * C * W + d * Z * W) * c, n[6] = (L * f * T - i * s * T - L * C * A + d * s * A + i * C * W - d * f * W) * c, n[7] = (i * Z * T - Y * f * T + Y * C * A - d * Z * A - i * C * t + d * f * t) * c, n[8] = M * c, n[9] = (L * m * T - Y * K * T - L * N * t + d * K * t + Y * N * W - d * m * W) * c, n[10] = (i * K * T - L * J * T + L * N * A - d * K * A - i * N * W + d * J * W) * c, n[11] = (Y * J * T - i * m * T - Y * N * A + d * m * A + i * N * t - d * J * t) * c, n[12] = k * c, n[13] = (Y * K * C - L * m * C + L * N * Z - d * K * Z - Y * N * s + d * m * s) * c, n[14] = (L * J * C - i * K * C - L * N * f + d * K * f + i * N * s - d * J * s) * c, n[15] = (i * m * C - Y * J * C + Y * N * f - d * m * f - i * N * Z + d * J * Z) * c, this
      }, makeRotationAxis: function (U, M) {
        var W = Math.cos(M), F = Math.sin(M), Y = 1 - W, y = U.x, c = U.y, w = U.z, B = Y * y, _ = Y * c;
        return this.set(B * y + W, B * c - F * w, B * w + F * c, 0, B * c + F * w, _ * c + W, _ * w - F * y, 0, B * w - F * c, _ * w + F * y, Y * w * w + W, 0, 0, 0, 0, 1), this
      }, multiply: function (T) {
        return this.multiplyMatrices(this, T)
      }, premultiply: function (O) {
        return this.multiplyMatrices(O, this)
      }, multiplyMatrices: function (A, c) {
        var H = A.el, I = c.el, m = this.el, r = H[0], b = H[4], t = H[8], u = H[12], X = H[1], y = H[5], L = H[9],
          F = H[13], P = H[2], o = H[6], E = H[10], e = H[14], Q = H[3], Y = H[7], V = H[11], Z = H[15], R = I[0],
          h = I[4], x = I[8], S = I[12], B = I[1], C = I[5], f = I[9], s = I[13], T = I[2], U = I[6], q = I[10],
          D = I[14], W = I[3], w = I[7], k = I[11], G = I[15];
        return m[0] = r * R + b * B + t * T + u * W, m[4] = r * h + b * C + t * U + u * w, m[8] = r * x + b * f + t * q + u * k, m[12] = r * S + b * s + t * D + u * G, m[1] = X * R + y * B + L * T + F * W, m[5] = X * h + y * C + L * U + F * w, m[9] = X * x + y * f + L * q + F * k, m[13] = X * S + y * s + L * D + F * G, m[2] = P * R + o * B + E * T + e * W, m[6] = P * h + o * C + E * U + e * w, m[10] = P * x + o * f + E * q + e * k, m[14] = P * S + o * s + E * D + e * G, m[3] = Q * R + Y * B + V * T + Z * W, m[7] = Q * h + Y * C + V * U + Z * w, m[11] = Q * x + Y * f + V * q + Z * k, m[15] = Q * S + Y * s + V * D + Z * G, this
      }
    });
    var xj = Q.Math.Quaternion = function (I, z, K, Z) {
      this.set(I, z, K, Z)
    };
    F.assign(xj.prototype, {
      set: function (p, x, B, d) {
        var Z = this;
        return Z._x = p || 0, Z._y = x || 0, Z._z = B || 0, Z._w = d !== S ? d : 1, Z
      }, clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._w)
      }, copy: function (Q) {
        var r = this;
        return r._x = Q._x, r._y = Q._y, r._z = Q._z, r._w = Q._w, r
      }, fromArray: function (z, P) {
        P === S && (P = 0);
        var a = this;
        return a._x = z[P], a._y = z[P + 1], a._z = z[P + 2], a._w = z[P + 3], this
      }, slerp: function (x, T) {
        if (0 === T) return this;
        if (1 === T) return this.copy(x);
        var F = this._x, u = this._y, d = this._z, j = this._w, v = j * x._w + F * x._x + u * x._y + d * x._z;
        if (0 > v ? (this._w = -x._w, this._x = -x._x, this._y = -x._y, this._z = -x._z, v = -v) : this.copy(x), v >= 1) return this._w = j, this._x = F, this._y = u, this._z = d, this;
        var Z = Math.sqrt(1 - v * v);
        if (Math.abs(Z) < .001) return this._w = .5 * (j + this._w), this._x = .5 * (F + this._x), this._y = .5 * (u + this._y), this._z = .5 * (d + this._z), this;
        var R = Math.atan2(Z, v), D = Math.sin((1 - T) * R) / Z, _ = Math.sin(T * R) / Z;
        return this._w = j * D + this._w * _, this._x = F * D + this._x * _, this._y = u * D + this._y * _, this._z = d * D + this._z * _, this
      }, setFromAxisAngle: function (S, t) {
        var R = t / 2, k = Math.sin(R);
        return this._x = S.x * k, this._y = S.y * k, this._z = S.z * k, this._w = Math.cos(R), this
      }, setFromEuler: function (u) {
        var q = u._x, v = u._y, x = u._z, w = u._order, $ = Math.cos, z = Math.sin, m = $(q / 2), B = $(v / 2),
          N = $(x / 2), D = z(q / 2), K = z(v / 2), C = z(x / 2);
        return "XYZ" === w ? (this._x = D * B * N + m * K * C, this._y = m * K * N - D * B * C, this._z = m * B * C + D * K * N, this._w = m * B * N - D * K * C) : "YXZ" === w ? (this._x = D * B * N + m * K * C, this._y = m * K * N - D * B * C, this._z = m * B * C - D * K * N, this._w = m * B * N + D * K * C) : "ZXY" === w ? (this._x = D * B * N - m * K * C, this._y = m * K * N + D * B * C, this._z = m * B * C + D * K * N, this._w = m * B * N - D * K * C) : "ZYX" === w ? (this._x = D * B * N - m * K * C, this._y = m * K * N + D * B * C, this._z = m * B * C - D * K * N, this._w = m * B * N + D * K * C) : "YZX" === w ? (this._x = D * B * N + m * K * C, this._y = m * K * N + D * B * C, this._z = m * B * C - D * K * N, this._w = m * B * N - D * K * C) : "XZY" === w && (this._x = D * B * N - m * K * C, this._y = m * K * N - D * B * C, this._z = m * B * C + D * K * N, this._w = m * B * N + D * K * C), this
      }
    });
    var hs = Q.Math.Triangle = function (l, P, o) {
      this.a = l !== S ? l : new $h, this.b = P !== S ? P : new $h, this.c = o !== S ? o : new $h
    };
    F.assign(hs, {
      barycoordFromPoint: function () {
        var A = new $h, o = new $h, r = new $h;
        return function (B, n, u, b, R) {
          A.subVectors(b, n), o.subVectors(u, n), r.subVectors(B, n);
          var G = A.dot(A), i = A.dot(o), f = A.dot(r), y = o.dot(o), z = o.dot(r), M = G * y - i * i, v = R || new $h;
          if (0 === M) return v.set(-2, -1, -1);
          var P = 1 / M, k = (y * f - i * z) * P, T = (G * z - i * f) * P;
          return v.set(1 - k - T, T, k)
        }
      }()
    });
    var Kb = Q.Math.Euler = function (y, d, k, I, r) {
      this.set(y, d, k, I, r)
    };
    Kb.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], Kb.DefaultOrder = "XYZ", F.defineProperties(Kb.prototype, {
      x: {
        get: function () {
          return this._x
        }, set: function (y) {
          this._x = y, this.onChangeCallback()
        }
      }, y: {
        get: function () {
          return this._y
        }, set: function (o) {
          this._y = o, this.onChangeCallback()
        }
      }, z: {
        get: function () {
          return this._z
        }, set: function (r) {
          this._z = r, this.onChangeCallback()
        }
      }, order: {
        get: function () {
          return this._order
        }, set: function (b) {
          this._order = b, this.onChangeCallback()
        }
      }
    }), F.assign(Kb.prototype, {
      set: function (y, g, N, E, H) {
        return cl(y) && (H = N, E = g, N = y[2], g = y[1], y = y[0]), E ? (H && (E = E[2] + E[1] + E[0]), E = E.toUpperCase()) : E = "ZYX", this._x = y || 0, this._y = g || 0, this._z = N || 0, this._order = E || this._order, this.onChangeCallback(), this
      }, clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._order)
      }, copy: function (s) {
        return this._x = s._x, this._y = s._y, this._z = s._z, this._order = s._order, this.onChangeCallback(), this
      }, setFromRotationMatrix: function (x, v, E) {
        var V = Q.Math.clamp, G = x.el || x, n = G[0], R = G[4], K = G[8], H = G[1], y = G[5], _ = G[9], J = G[2],
          I = G[6], X = G[10];
        return v = v || this._order, "XYZ" === v ? (this._y = Math.asin(V(K, -1, 1)), Math.abs(K) < .99999 ? (this._x = Math.atan2(-_, X), this._z = Math.atan2(-R, n)) : (this._x = Math.atan2(I, y), this._z = 0)) : "YXZ" === v ? (this._x = Math.asin(-V(_, -1, 1)), Math.abs(_) < .99999 ? (this._y = Math.atan2(K, X), this._z = Math.atan2(H, y)) : (this._y = Math.atan2(-J, n), this._z = 0)) : "ZXY" === v ? (this._x = Math.asin(V(I, -1, 1)), Math.abs(I) < .99999 ? (this._y = Math.atan2(-J, X), this._z = Math.atan2(-R, y)) : (this._y = 0, this._z = Math.atan2(H, n))) : "ZYX" === v ? (this._y = Math.asin(-V(J, -1, 1)), Math.abs(J) < .99999 ? (this._x = Math.atan2(I, X), this._z = Math.atan2(H, n)) : (this._x = 0, this._z = Math.atan2(-R, y))) : "YZX" === v ? (this._z = Math.asin(V(H, -1, 1)), Math.abs(H) < .99999 ? (this._x = Math.atan2(-_, y), this._y = Math.atan2(-J, n)) : (this._x = 0, this._y = Math.atan2(K, X))) : "XZY" === v ? (this._z = Math.asin(-V(R, -1, 1)), Math.abs(R) < .99999 ? (this._x = Math.atan2(I, y), this._y = Math.atan2(K, n)) : (this._x = Math.atan2(-_, X), this._y = 0)) : console.warn("unsupported order: " + v), this._order = v, E !== !1 && this.onChangeCallback(), this
      }, setFromQuaternion: function () {
        var e = new ej;
        return function (T, R, p) {
          return e.makeRotationFromQuaternion(T), this.setFromRotationMatrix(e, R, p)
        }
      }(), setFromVector3: function (A, r) {
        return this.set(A.x, A.y, A.z, r || this._order)
      }, reorder: function () {
        var q = new xj;
        return function (x) {
          return q.setFromEuler(this), this.setFromQuaternion(q, x)
        }
      }(), equals: function (S) {
        return S._x === this._x && S._y === this._y && S._z === this._z && S._order === this._order
      }, fromArray: function (y) {
        return this._x = y[0], this._y = y[1], this._z = y[2], y[3] !== S && (this._order = y[3]), this.onChangeCallback(), this
      }, toArray: function (k, l) {
        return k === S && (k = []), l === S && (l = 0), k[l] = this._x, k[l + 1] = this._y, k[l + 2] = this._z, k[l + 3] = this._order, k
      }, toVector3: function (N) {
        return N ? N.set(this._x, this._y, this._z) : new $h(this._x, this._y, this._z)
      }, onChange: function (u) {
        return this.onChangeCallback = u, this
      }, onChangeCallback: function () {
      }
    });
    var Oh = Q.List = function () {
      this._as = [];
      var E, Y, q = arguments.length;
      if (1 === q) {
        var Q = arguments[0];
        if (Fi(Q) && (Q = Q._as), cl(Q)) for (Y = Q.length, E = 0; Y > E; E++) this._as.push(Q[E]); else Q != A && this._as.push(Q)
      } else if (q > 1) for (E = 0; q > E; E++) this._as.push(arguments[E])
    };
    Lj("List", F, {
      forEach: function (z, Y) {
        this.each(z, Y)
      }, push: function () {
        for (var B = 0; B < arguments.length; B++) this.add(arguments[B])
      }, pop: function () {
        return this._as.pop()
      }, shift: function () {
        return this._as.shift()
      }, unshift: function () {
        return this._as.unshift.apply(this._as, arguments)
      }, size: function () {
        return this._as.length
      }, isEmpty: function () {
        return 0 === this._as.length
      }, add: function (C, P) {
        return P === S ? this._as.push(C) : this._as.splice(P, 0, C)
      }, addAll: function (b) {
        Fi(b) && (b = b._as), cl(b) ? yn(this._as, b) : this._as.push(b)
      }, get: function (y) {
        return this._as[y]
      }, slice: function (W, R) {
        return new Oh(this._as.slice(W, R))
      }, remove: function (m) {
        var K = this._as.indexOf(m);
        return K >= 0 && K < this._as.length && this.removeAt(K), K
      }, removeAt: function (K) {
        return this._as.splice(K, 1)[0]
      }, set: function (l, f) {
        return this._as[l] = f
      }, clear: function () {
        return this._as.splice(0, this._as.length)
      }, contains: function (H) {
        return this._as.indexOf(H) >= 0
      }, indexOf: function (t) {
        return this._as.indexOf(t)
      }, each: function (U, y) {
        for (var R = 0, q = this._as.length; q > R; R++) {
          var Q = this._as[R];
          y ? U.call(y, Q, R, this) : U(Q, R, this)
        }
      }, reverseEach: function (g, u) {
        for (var E = this._as.length - 1; E >= 0; E--) {
          var Y = this._as[E];
          u ? g.call(u, Y) : g(Y)
        }
      }, toArray: function (b, O) {
        if (b) {
          for (var N, l = [], y = 0, d = this._as.length; d > y; y++) N = this._as[y], O ? b.call(O, N) && l.push(N) : b(N) && l.push(N);
          return l
        }
        return this._as.concat()
      }, toList: function (C, r) {
        if (C) {
          for (var w, F = new Oh, V = 0, G = this._as.length; G > V; V++) w = this._as[V], r ? C.call(r, w) && F.add(w) : C(w) && F.add(w);
          return F
        }
        return new Oh(this)
      }, reverse: function () {
        this._as.reverse()
      }, sort: function (e) {
        return this._as.sort(e ? e : qe), this
      }, toString: function () {
        return this._as.toString()
      }
    }), F.defineProperties(Oh.prototype, {
      length: {
        get: function () {
          return this._as.length
        }, set: function (A) {
          this._as.length = A
        }
      }
    });
    var ai = new Oh;
    Ak(ai, {
      size: function () {
        return 0
      }, indexOf: function () {
        return -1
      }, contains: function () {
        return !1
      }, isEmpty: function () {
        return !0
      }, sort: Lc, each: Lc, reverseEach: Lc, toArray: function () {
        return []
      }, toList: function () {
        return new Oh
      }, add: uj, addAll: uj, set: uj, remove: uj, removeAt: uj, clear: uj
    });
    var Ke = Q.Notifier = function () {
      this._f = 0
    };
    Lj("Notifier", F, {
      contains: function (G, O) {
        if (this._ls) for (var X, E = 0, L = this._ls.size(); L > E; E++) if (X = this._ls.get(E), G === X.l && O === X.s) return !0;
        return !1
      }, add: function (o, C, l) {
        var P = this, q = {l: o, s: C, a: l};
        P._ls || (P._ls = new Oh), P._f ? (P._as || (P._as = new Oh), P._as.add(q)) : q.a ? P._ls.add(q, 0) : P._ls.add(q)
      }, remove: function (h, V) {
        var s = this;
        s._ls && (s._f ? (s._rs || (s._rs = new Oh), s._rs.add({l: h, s: V})) : s._remove(h, V))
      }, _remove: function (n, $) {
        for (var a, S = this._ls, X = 0, R = S.size(); R > X; X++) if (a = S.get(X), a.l === n && a.s === $) return S.removeAt(X), void 0
      }, fire: function (L) {
        var j = this, F = j._ls;
        if (j._b = 1e4, F) {
          ++j._f;
          try {
            for (var Z, r = 0, l = F.size(); l > r; r++) Z = F.get(r), Z.s ? Z.l.call(Z.s, L) : Z.l(L)
          } finally {
            if (--j._f) return;
            if (j._rs) {
              for (l = j._rs.size(), r = 0; l > r; r++) Z = j._rs.get(r), j._remove(Z.l, Z.s);
              delete j._rs
            }
            if (j._as) {
              for (l = j._as.size(), r = 0; l > r; r++) Z = j._as.get(r), Z.a ? F.add(Z, 0) : F.add(Z);
              delete j._as
            }
          }
        }
      }
    });
    var aj = Q.Data = function () {
      this._id = Xe()
    };
    Lj("Data", F, {
      ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "styleMap", "layer", "adjustChildrenToTop", "dataBindings"],
      ms_dm: 1,
      ms_attr: 1,
      _icon: A,
      _parent: A,
      _children: ai,
      _childMap: A,
      _styleMap: A,
      _layer: "0",
      _adjustChildrenToTop: !1,
      getUIClass: function () {
        return A
      },
      _22Q: function () {
        return A
      },
      s: function (p, h) {
        var q = this;
        if (2 === arguments.length) q.setStyle(p, h); else {
          if (!mk(p)) return q.getStyle(p);
          for (var U in p) q.setStyle(U, p[U])
        }
        return q
      },
      fp: function (D, K, P, x, $) {
        return this.firePropertyChange(D, K, P, x, $)
      },
      firePropertyChange: function (p, o, $, u, F) {
        if (u) {
          if (u(o, $)) return !1
        } else if (o === $) return !1;
        var x = this, t = F || {};
        return t.property = p, t.oldValue = o, t.newValue = $, t.data = x, x._dataModel && x._dataModel.handleDataPropertyChange(t), x.onPropertyChanged(t), !0
      },
      onPropertyChanged: function (D) {
        var N = this, A = N._parent, n = D.property;
        if (Xo(A)) {
          var B = N.s(rr), m = "s:ingroup" === n;
          (B && Il[n] || n === m) && A._81I(), (B || m) && A.fp("childChange", !0, !1)
        }
        si(A) && Il[n] && A.updateFromChildren()
      },
      _21I: function (N) {
        var D = this;
        if (N && D._dataModel) throw"Remove data from dataModel before adding";
        D._dataModel = N
      },
      removeFromDataModel: function () {
        this._dataModel ? this._dataModel.remove(this) : this.setParent(null)
      },
      clearChildrenFromDataModel: function () {
        for (var y = 0, W = this._children.toArray(), Y = W.length; Y > y; y++) W[y].removeFromDataModel()
      },
      getId: function () {
        return this._id
      },
      setId: function (u) {
        this._id = u
      },
      getChildren: function () {
        return this._children
      },
      size: function () {
        return this._children.size()
      },
      toChildren: function (D, f) {
        return this._children.toList(D, f)
      },
      eachChild: function (X, z) {
        this._children.each(X, z)
      },
      addChild: function (s, m) {
        var g = this;
        s !== g && (g._children === ai && (g._children = new Oh, g._childMap = {}), m >= 0 || (m = g._children.size()), g._childMap[s._id] || g.isDescendantOf(s) || (s._parent && s._parent.removeChild(s), (0 > m || m > g._children.size()) && (m = g._children.size()), g._children.add(s, m), g._childMap[s._id] = s, s.setParent(g), g.onChildAdded(s, m), g.fp(Tg, A, s)))
      },
      onChildAdded: function () {
      },
      removeChild: function (o) {
        var m = this;
        if (m._childMap && m._childMap[o._id]) {
          var i = m._children.remove(o);
          delete m._childMap[o._id], m.fp(Tg, o, A), o.setParent(A, i), m.onChildRemoved(o, i)
        }
      },
      onChildRemoved: function () {
      },
      getChildAt: function (g) {
        return this._children.get(g)
      },
      clearChildren: function () {
        var m = this;
        if (!m._children.isEmpty()) for (var V = 0, c = m._children.toArray(), G = c.length; G > V; V++) m.removeChild(c[V])
      },
      getParent: function () {
        return this._parent
      },
      setParent: function (K, h) {
        var p = this;
        if (!(p._73I || p._parent === K || p === K || K && K.isDescendantOf(p))) {
          var m, f = p._parent;
          p._parent = K, p._73I = 1, f ? (h == A && (h = f.getChildren().indexOf(p)), f.removeChild(p)) : p._dataModel && h == A && (h = p._dataModel.getRoots().indexOf(p)), K && (K.addChild(p), m = K.getChildren().indexOf(p)), delete p._73I, p.fp("parent", f, K, S, {
            oldIndex: h,
            newIndex: m
          }), p.onParentChanged(f, K)
        }
      },
      onParentChanged: function () {
      },
      hasChildren: function () {
        return this._children.size() > 0
      },
      isEmpty: function () {
        return this._children.isEmpty()
      },
      isRelatedTo: function (c) {
        return c ? this.isDescendantOf(c) || c.isDescendantOf(this) : !1
      },
      isParentOf: function (F) {
        return F && this._childMap ? !!this._childMap[F._id] : !1
      },
      isDescendantOf: function (j) {
        if (!j || j.isEmpty()) return !1;
        for (var G = this._parent; G;) {
          if (j === G) return !0;
          G = G._parent
        }
        return !1
      },
      getStyle: function (e, H) {
        H === S && (H = 1);
        var g = this._styleMap ? this._styleMap[e] : S;
        return g === S && H ? h[e] : g
      },
      setStyle: function ($, N) {
        var t = this;
        t._styleMap || (t._styleMap = {});
        var l = t._styleMap[$];
        N === S ? delete t._styleMap[$] : t._styleMap[$] = N, t.fp("s:" + $, l, N) && t.onStyleChanged($, l, N)
      },
      onStyleChanged: function () {
      },
      iv: function (H) {
        this.invalidate(H)
      },
      invalidate: function (i) {
        this.fp(i || "*", !1, !0)
      },
      toString: function () {
        var c = this;
        return c._displayName || c._name || c._tag || c._id
      },
      toLabel: function () {
        return this._displayName || this._name
      },
      addStyleIcon: function (F, k) {
        var t = this, I = t.s(Bc);
        I || t.s(Bc, I = {}), k ? I[F] = k : delete I[F], t.fp(Bc, A, I)
      },
      removeStyleIcon: function (d) {
        var J = this.s(Bc);
        if (J) {
          var w = J[d];
          delete J[d], this.fp(Bc, A, J)
        }
        return w
      },
      getSerializableProperties: function () {
        return {
          name: 1,
          displayName: 1,
          icon: 1,
          toolTip: 1,
          parent: 1,
          layer: 1,
          tag: 1,
          adjustChildrenToTop: 1,
          dataBindings: 1
        }
      },
      getSerializableStyles: function () {
        var m, S = {};
        for (m in this._styleMap) S[m] = 1;
        return S
      }
    });
    var Yc = Q.DataModel = function () {
      var z = this;
      z._datas = new Oh, z._dataMap = {}, z._roots = new Oh, z._rootMap = {}, z._78O = {}, z._36I = new Ke, z._35I = new Ke, z._selectionModel = new Tc(z);
      var B = z._29Q = [], l = z._scheduleCallback = function () {
        for (var o = Date.now(), n = 0; n < B.length; n++) {
          var k = B[n];
          k.enabled && o - k.lastTime > k.interval && (k.beforeAction && k.beforeAction(), z.each(function (b) {
            k.action(b)
          }), k.afterAction && k.afterAction(), k.lastTime = o)
        }
        B.length && (z._30Q = r.requestAnimationFrame(l))
      }
    };
    Lj("DataModel", F, {
      ms_fire: 1,
      ms_attr: 1,
      ms_ac: ["layers", "name", "autoAdjustIndex", "hierarchicalRendering", "background", "init"],
      _name: S,
      _autoAdjustIndex: !0,
      _hierarchicalRendering: !1,
      _background: S,
      _init: S,
      sm: function () {
        return this.getSelectionModel()
      },
      mm: function (v, E, s) {
        this.addDataModelChangeListener(v, E, s)
      },
      umm: function (q, o) {
        this.removeDataModelChangeListener(q, o)
      },
      md: function (n, C, e) {
        this.addDataPropertyChangeListener(n, C, e)
      },
      umd: function (I, p) {
        this.removeDataPropertyChangeListener(I, p)
      },
      mh: function (e, A, W) {
        this.addHierarchyChangeListener(e, A, W)
      },
      umh: function (P, S) {
        this.removeHierarchyChangeListener(P, S)
      },
      getAttrObject: function () {
        return this._attrObject
      },
      setAttrObject: function (i) {
        return this._attrObject = i
      },
      getSelectionModel: function () {
        return this._selectionModel
      },
      size: function () {
        return this._datas.size()
      },
      isEmpty: function () {
        return this._datas.isEmpty()
      },
      getRoots: function () {
        return this._roots
      },
      getDatas: function () {
        return this._datas
      },
      getDataById: function (s) {
        return this._dataMap[s]
      },
      removeDataById: function (H) {
        this.remove(this.getDataById(H))
      },
      toDatas: function (F, D) {
        return this._datas.toList(F, D)
      },
      each: function (P, a) {
        this._datas.each(P, a)
      },
      getDataByTag: function (l) {
        return this._78O[l]
      },
      getTagMap: function () {
        return this._78O
      },
      removeDataByTag: function (K) {
        this.remove(this.getDataByTag(K))
      },
      add: function (l, M, H) {
        var k = this, W = l._id, h = l._tag, D = k._roots;
        if (k._dataMap[W]) throw"'" + W + "' already exists";
        h != A && (k._78O[h] = l), k._dataMap[W] = l, H >= 0 ? k._datas.add(l, H) : k._datas.add(l), l._parent || (k._rootMap[W] = l, M >= 0 ? D.add(l, M) : D.add(l)), l._21I(k), k.onAdded(l), k._36I.fire({
          kind: "add",
          data: l,
          rootsIndex: M,
          datasIndex: H
        })
      },
      onAdded: function () {
      },
      remove: function (K, n) {
        if (K) {
          var G = this, C = K._id, M = n && n.keepStructure, b = n && n.keepChildren, l = K.getTag();
          if (K._dataModel === G) {
            this.beginTransaction(), M ? G._removingData || (G._removingData = K) : G.prepareRemove(K), b || K.toChildren().each(function (T) {
              G.remove(T, n)
            }, G), M ? G._removingData === K && (K._parent && K._parent.removeChild(K), delete G._removingData) : K._parent && K._parent.removeChild(K);
            var H = G._datas.remove(K);
            delete G._dataMap[C], l != A && delete G._78O[l];
            var e;
            G._rootMap[C] && (delete G._rootMap[C], e = G._roots.remove(K)), K._21I(A), G.onRemoved(K), G._36I.fire({
              kind: ub,
              data: K,
              rootsIndex: e,
              datasIndex: H
            }), this.endTransaction()
          }
        }
      },
      onRemoved: function () {
      },
      prepareRemove: function () {
      },
      clear: function () {
        var $ = this;
        if ($._datas.size()) {
          var j = $._historyManager ? this.toJSON() : S;
          $._datas.toArray().forEach(function (s) {
            s._21I(A)
          }), $._datas.clear(), $._dataMap = {}, $._roots.clear(), $._rootMap = {}, $._78O = {}, $._36I.fire({
            kind: ip,
            json: j
          })
        }
      },
      contains: function (A) {
        return A && A._dataModel === this
      },
      handleDataPropertyChange: function (t) {
        var H = this, U = t.data, V = t.property;
        if ("parent" === V) {
          var b = U._id, Z = H._rootMap, p = H._roots;
          U._parent ? Z[b] && (delete Z[b], p.remove(U)) : Z[b] || (Z[b] = U, p.add(U))
        } else if ("tag" === V) {
          var K = t.oldValue, N = t.newValue, i = H._78O;
          K != A && delete i[K], N != A && (i[N] = U)
        }
        this.onDataPropertyChanged(U, t), this._35I.fire(t)
      },
      onDataPropertyChanged: function () {
      },
      addDataModelChangeListener: function (h, d, b) {
        this._36I.add(h, d, b)
      },
      removeDataModelChangeListener: function (K, $) {
        this._36I.remove(K, $)
      },
      addDataPropertyChangeListener: function (V, v, F) {
        this._35I.add(V, v, F)
      },
      removeDataPropertyChangeListener: function (Z, g) {
        this._35I.remove(Z, g)
      },
      _38I: function (i, x, e) {
        this._37I && this._37I.fire({data: i, oldIndex: x, newIndex: e})
      },
      addHierarchyChangeListener: function (l, T, L) {
        this._37I || (this._37I = new Ke), this._37I.add(l, T, L)
      },
      removeHierarchyChangeListener: function (w, z) {
        this._37I.remove(w, z)
      },
      getSiblings: function (M) {
        var p = M._parent;
        return p ? p._children : this._roots
      },
      eachByHierarchical: function (w, M, F) {
        if (M) return this._eachByHierarchical(w, M, F);
        for (var p = 0, r = this._roots, T = r.size(); T > p; p++) if (this._eachByHierarchical(w, r.get(p), F) === !1) return !1;
        return !0
      },
      _eachByHierarchical: function (s, x, o) {
        if (o) {
          if (s.call(o, x) === !1) return !1
        } else if (s(x) === !1) return !1;
        for (var p = x.size(), O = 0; p > O; O++) if (this._eachByHierarchical(s, x.getChildAt(O), o) === !1) return !1;
        return !0
      },
      reverseEachByHierarchical: function (G, W, F) {
        if (W) return this._reverseEachByHierarchical(G, W, F);
        for (var h = this._roots, p = h.size(), r = p - 1; r >= 0; r--) if (this._reverseEachByHierarchical(G, h.get(r), F) === !1) return !1;
        return !0
      },
      _reverseEachByHierarchical: function (l, o, M) {
        for (var p = o.size(), f = p - 1; f >= 0; f--) if (this._reverseEachByHierarchical(l, o.getChildAt(f), M) === !1) return !1;
        if (M) {
          if (l.call(M, o) === !1) return !1
        } else if (l(o) === !1) return !1;
        return !0
      },
      eachByDepthFirst: function (v, Y, C) {
        if (Y) return this._11I(v, Y, C);
        for (var K = 0, p = this._roots, e = p.size(); e > K; K++) if (this._11I(v, p.get(K), C) === !1) return !1;
        return !0
      },
      _11I: function (k, E, G) {
        for (var t = E.size(), w = 0; t > w; w++) if (this._11I(k, E.getChildAt(w), G) === !1) return !1;
        if (G) {
          if (k.call(G, E) === !1) return !1
        } else if (k(E) === !1) return !1;
        return !0
      },
      eachByBreadthFirst: function (m, $, K) {
        var P = new Oh;
        for ($ ? P.add($) : this._roots.each(P.add, P); P.size() > 0;) if ($ = P.removeAt(0), $.eachChild(P.add, P), K) {
          if (m.call(K, $) === !1) return !1
        } else if (m($) === !1) return !1;
        return !0
      },
      moveTo: function (u, Y) {
        var n = this.getSiblings(u), v = n.indexOf(u);
        v === Y || 0 > v || Y >= 0 && Y <= n.size() && (n.remove(u), Y > n.size() && Y--, n.add(u, Y), this._38I(u, v, Y))
      },
      moveUp: function (P) {
        this.moveTo(P, this.getSiblings(P).indexOf(P) - 1)
      },
      moveDown: function (X) {
        this.moveTo(X, this.getSiblings(X).indexOf(X) + 1)
      },
      moveToTop: function (y) {
        this.moveTo(y, 0)
      },
      moveToBottom: function (D) {
        this.moveTo(D, this.getSiblings(D).size())
      },
      moveSelectionUp: function (P) {
        this.beginTransaction(), P || (P = this.sm());
        var u = new Oh;
        Ce(P, u, this._roots), u.each(this.moveUp, this), this.endTransaction()
      },
      moveSelectionDown: function (J) {
        this.beginTransaction(), J || (J = this.sm());
        var s = new Oh;
        Er(J, s, this._roots), s.each(this.moveDown, this), this.endTransaction()
      },
      moveSelectionToTop: function (C) {
        this.beginTransaction(), C || (C = this.sm());
        var h = new Oh;
        Jg(C, h, this._roots), h.each(this.moveToTop, this), this.endTransaction()
      },
      moveSelectionToBottom: function (L) {
        this.beginTransaction(), L || (L = this.sm());
        var q = new Oh;
        iq(L, q, this._roots), q.each(this.moveToBottom, this), this.endTransaction()
      },
      moveToIndex: function (E, B, w) {
        var K = this.getDatas();
        null == w && (w = K.indexOf(E)), w === B || 0 > w || B >= 0 && B <= K.size() && (K.remove(E), B > K.size() && B--, K.add(E, B), this._76I(E, w, B))
      },
      bringForward: function (R) {
        this.moveToIndex(R, this.getDatas().indexOf(R) + 1)
      },
      bringToFront: function (g) {
        this.moveToIndex(g, this.size())
      },
      sendBackward: function (w) {
        this.moveToIndex(w, this.getDatas().indexOf(w) - 1)
      },
      sendToBack: function (u) {
        this.moveToIndex(u, 0)
      },
      bringSelectionForward: function (w) {
        this.beginTransaction(), w || (w = this.sm());
        for (var c = new Oh, q = this.getDatas(), b = !1, I = 0; I < q.size(); I++) {
          var X = q.get(q.size() - 1 - I);
          w.contains(X) ? b && c.add(X) : b = !0
        }
        c.each(this.bringForward, this), this.endTransaction()
      },
      bringSelectionToFront: function (B) {
        this.beginTransaction(), B || (B = this.sm());
        for (var c = new Oh, l = this.getDatas(), C = 0; C < l.size(); C++) {
          var j = l.get(C);
          B.contains(j) && c.add(j)
        }
        c.each(this.bringToFront, this), this.endTransaction()
      },
      sendSelectionBackward: function (e) {
        this.beginTransaction(), e || (e = this.sm());
        for (var l = new Oh, r = this.getDatas(), p = !1, z = 0; z < r.size(); z++) {
          var s = r.get(z);
          e.contains(s) ? p && l.add(s) : p = !0
        }
        l.each(this.sendBackward, this), this.endTransaction()
      },
      sendSelectionToBack: function (f) {
        this.beginTransaction(), f || (f = this.sm());
        for (var H = new Oh, s = this.getDatas(), B = 0; B < s.size(); B++) {
          var K = s.get(s.size() - 1 - B);
          f.contains(K) && H.add(K)
        }
        H.each(this.sendToBack, this), this.endTransaction()
      },
      addScheduleTask: function (b) {
        var h = this;
        h.removeScheduleTask(b), b.enabled == A && (b.enabled = !0), b.interval == A && (b.interval = 10), b.action == A && (b.action = Lc), b.lastTime = Date.now(), h._29Q.push(b), h._30Q == A && (h._30Q = r.requestAnimationFrame(h._scheduleCallback))
      },
      removeScheduleTask: function ($) {
        var q = this, B = q._29Q, o = B.indexOf($);
        o >= 0 && B.splice(o, 1), B.length || q._30Q == A || (r.cancelAnimationFrame(q._30Q), delete q._30Q)
      },
      getHistoryManager: function () {
        return this._historyManager
      },
      enableHistoryManager: function (Z) {
        this._historyManager || new Q.HistoryManager(this), null != Z && this._historyManager.setMaxHistoryCount(Z), this._historyManager.setDisabled(!1)
      },
      disableHistoryManager: function () {
        this._historyManager && this._historyManager.setDisabled(!0)
      },
      clearHistoryManager: function () {
        this._historyManager && this._historyManager.clear()
      },
      undo: function (W) {
        this._historyManager && this._historyManager.undo(W)
      },
      redo: function (R) {
        this._historyManager && this._historyManager.redo(R)
      },
      beginTransaction: function () {
        this._historyManager && this._historyManager.beginTransaction()
      },
      endTransaction: function () {
        this._historyManager && this._historyManager.endTransaction()
      },
      addHistory: function (p) {
        this._historyManager && this._historyManager.addHistory(p)
      },
      onHistoryManagerChanged: function () {
      }
    });
    var Tc = Q.SelectionModel = function (M) {
      var V = this;
      V._68O = xd, V._map = {}, V._73O = new Oh, V._74I = new Ke, V._21I(M)
    };
    Lj("SelectionModel", F, {
      ms_fire: 1, ms_dm: 1, ms: function (w, G, v) {
        this.addSelectionChangeListener(w, G, v)
      }, ums: function (X, U) {
        this.removeSelectionChangeListener(X, U)
      }, fd: function () {
        return this.getFirstData()
      }, ld: function () {
        return this.getLastData()
      }, sg: function () {
        return this._68O === _o
      }, co: function (T) {
        return this._map[T._id] != A
      }, ss: function (Q) {
        this.setSelection(Q)
      }, as: function (f) {
        this.appendSelection(f)
      }, rs: function (F) {
        this.removeSelection(F)
      }, cs: function () {
        this.clearSelection()
      }, sa: function () {
        this.selectAll()
      }, getSelectionMode: function () {
        return this._68O
      }, setSelectionMode: function (y) {
        var u = this;
        if (u._68O !== y && (y === wc || y === _o || y === xd)) {
          u.cs();
          var d = u._68O;
          u._68O = y, u.fp("selectionMode", d, y)
        }
      }, _21I: function (H) {
        var D = this, s = D._dataModel;
        s !== H && (s && (D.cs(), s.umm(D.handleDataModelChange, D)), D._dataModel = H, H.mm(D.handleDataModelChange, D, !0), D.fp(Bn, s, H))
      }, dispose: function () {
        var c = this;
        c.cs(), c._dataModel.umm(c.handleDataModelChange, c)
      }, handleDataModelChange: function (Y) {
        var v = this;
        if (Y.kind === ub) {
          var L = Y.data;
          v.co(L) && (v._73O.remove(L), delete v._map[L._id], v._75I(ub, new Oh(L)))
        } else Y.kind === ip && v.cs()
      }, getFilterFunc: function () {
        return this._filterFunc
      }, setFilterFunc: function (Q) {
        var F = this;
        if (F._filterFunc !== Q) {
          F.cs();
          var u = F._filterFunc;
          F._filterFunc = Q, F.fp("filterFunc", u, F._filterFunc)
        }
      }, _75I: function (Y, C, O, j) {
        O && (this._73O.each(function (K) {
          j[K._id] ? O.remove(K) : O.add(K)
        }), C = O.toList()), this._74I.fire({kind: Y, datas: new Oh(C)})
      }, addSelectionChangeListener: function (w, D, _) {
        this._74I.add(w, D, _)
      }, removeSelectionChangeListener: function (R, r) {
        this._74I.remove(R, r)
      }, _97O: function (f, J) {
        for (var G, F = this, h = 0, c = new Oh(f); h < c.size(); h++) G = c.get(h), (F._filterFunc && !F._filterFunc(G) || J && F.co(G) || !J && !F.co(G) || !F._dataModel.contains(G)) && (c.removeAt(h), h--);
        return c
      }, appendSelection: function (h) {
        var n = this;
        if (n._68O !== wc) {
          var d, Z, E = n._73O, b = n._97O(h, !0);
          b.isEmpty() || (n.sg() && (d = new Oh(E), Z = n._map, E.clear(), n._map = {}, b = new Oh(b.get(b.size() - 1))), b.each(function (K) {
            E.add(K), n._map[K._id] = K
          }), n._75I("append", b, d, Z))
        }
      }, removeSelection: function (r) {
        var x = this, i = x._97O(r), E = 0, N = i.size();
        if (0 !== N) {
          for (; N > E; E++) {
            var f = i.get(E);
            x._73O.remove(f), delete x._map[f._id]
          }
          x._75I(ub, i)
        }
      }, toSelection: function (W, u) {
        return this._73O.toList(W, u)
      }, getSelection: function () {
        return this._73O
      }, each: function (H, m) {
        this._73O.each(H, m)
      }, setSelection: function (g) {
        var s = this, O = s._73O;
        if (s._68O !== wc && !(O.isEmpty() && !g || 1 === O.size() && s.ld() === g)) {
          var m = new Oh(O), v = s._map;
          O.clear(), s._map = {};
          var e = s._97O(g, !0);
          s.sg() && e.size() > 1 && (e = new Oh(e.get(e.size() - 1))), e.each(function (w) {
            O.add(w), s._map[w._id] = w
          }), s._75I("set", A, m, v)
        }
      }, clearSelection: function () {
        var i = this, l = i._73O;
        if (l.size() > 0) {
          var N = l.toList();
          l.clear(), i._map = {}, i._75I(ip, N)
        }
      }, selectAll: function () {
        var h = this;
        if (h._68O !== wc) {
          var t, G, n = h._dataModel.toDatas();
          if (h._filterFunc) for (t = 0; t < n.size(); t++) G = n.get(t), h._filterFunc(G) || (n.removeAt(t), t--);
          var i = h._73O, E = new Oh(i), X = h._map;
          i.clear(), h._map = {}, h.sg() && n.size() > 1 && (n = new Oh(n.get(n.size() - 1)));
          var L = n.size();
          for (t = 0; L > t; t++) G = n.get(t), i.add(G), h._map[G._id] = G;
          h._75I("all", A, E, X)
        }
      }, size: function () {
        return this._73O.size()
      }, isEmpty: function () {
        return this._73O.isEmpty()
      }, contains: function (w) {
        return this._map[w._id] != A
      }, getLastData: function () {
        var f = this._73O;
        return f.size() > 0 ? f.get(f.size() - 1) : A
      }, getFirstData: function () {
        var u = this._73O;
        return u.size() > 0 ? u.get(0) : A
      }, isSelectable: function (D) {
        var i = this;
        return D && i._68O !== wc ? i._filterFunc ? i._filterFunc(D) : !0 : !1
      }, getTopSelection: function () {
        var k = this, S = new Oh;
        return k._73O.each(function (Z) {
          for (var c = Z.getParent(); c;) {
            if (k.contains(c)) {
              Z = A;
              break
            }
            c = c.parent
          }
          Z && S.add(Z)
        }), S
      }
    });
    var Cf = function () {
      return de(0), function (U, E) {
        var i;
        if (sr(E)) {
          var F = U.getDataUI(E);
          F && F._88I && (i = F._88I.rect)
        }
        return i ? i : E.getRect()
      }
    }();
    Ak(E, {
      edgeGroupAgentFunc: A,
      graphViewAutoScrollZone: 16,
      graphViewResettable: !1,
      graphViewPannable: !0,
      graphViewRectSelectable: !0,
      graphViewScrollBarVisible: !0,
      graphViewRectSelectBorderColor: w.rectSelectBorder,
      graphViewRectSelectBackground: ff,
      graphViewEditPointSize: Qe ? 17 : 7,
      graphViewEditPointBorderColor: w.editPointBorder,
      graphViewEditPointBackground: w.editPointBackground,
      setEdgeType: function (Q, d, r) {
        Vr[Q] = d, Lf[Q] = r
      },
      getEdgeType: function (W) {
        return Vr[W]
      },
      getEdgeTypeMap: function () {
        return Vr
      },
      getNodeRect: Cf
    }, !0), Ak(h, {
      "2d.selectable": !0,
      "2d.visible": !0,
      "2d.movable": !0,
      "2d.editable": !0,
      "2d.move.mode": S,
      interactive: !1,
      "image.stretch": "fill",
      icons: S,
      ingroup: !0,
      "body.color": S,
      opacity: S,
      pixelPerfect: !0,
      keepAspectRatio: !1,
      "clip.direction": "top",
      "clip.percentage": 1,
      "select.color": Br,
      "select.width": 1,
      "select.padding": 2,
      "select.type": Kd,
      shadow: !1,
      "shadow.blur": 6,
      "shadow.offset.x": 3,
      "shadow.offset.y": 3,
      "border.color": S,
      "border.width": 2,
      "border.padding": 2,
      "border.type": Kd,
      label: S,
      "label.font": S,
      "label.color": es,
      "label.background": S,
      "label.position": 31,
      "label.position.fixed": !1,
      "label.offset.x": 0,
      "label.offset.y": 2,
      "label.rotation": S,
      "label.max": S,
      "label.opacity": S,
      "label.scale": 1,
      "label.align": S,
      "label.selectable": !0,
      label2: S,
      "label2.font": S,
      "label2.color": es,
      "label2.background": S,
      "label2.position": 34,
      "label2.position.fixed": !1,
      "label2.offset.x": 0,
      "label2.offset.y": -2,
      "label2.rotation": S,
      "label2.max": S,
      "label2.opacity": S,
      "label2.scale": 1,
      "label2.align": S,
      "label2.selectable": !0,
      note: S,
      "note.expanded": !0,
      "note.font": S,
      "note.color": qp,
      "note.background": Br,
      "note.position": 8,
      "note.offset.x": -3,
      "note.offset.y": 3,
      "note.max": S,
      "note.toggleable": !0,
      "note.border.width": 1,
      "note.border.color": S,
      "note.opacity": S,
      "note.scale": 1,
      "note.align": S,
      note2: S,
      "note2.expanded": !0,
      "note2.font": S,
      "note2.color": qp,
      "note2.background": Br,
      "note2.position": 3,
      "note2.offset.x": 3,
      "note2.offset.y": -3,
      "note2.max": S,
      "note2.toggleable": !0,
      "note2.border.width": 1,
      "note2.border.color": S,
      "note2.opacity": S,
      "note2.scale": 1,
      "note2.align": S,
      "group.type": S,
      "group.image": S,
      "group.image.stretch": "fill",
      "group.repeat.image": S,
      "group.padding": 8,
      "group.padding.left": 0,
      "group.padding.right": 0,
      "group.padding.top": 0,
      "group.padding.bottom": 0,
      "group.position": 17,
      "group.toggleable": !0,
      "group.title.font": S,
      "group.title.color": qp,
      "group.title.background": w.groupTitleBackground,
      "group.title.align": kl,
      "group.background": w.groupBackground,
      "group.depth": 1,
      "group.border.width": 1,
      "group.border.pattern": S,
      "group.border.color": Kj,
      "group.border.cap": he,
      "group.border.join": po,
      "group.gradient": A,
      "group.gradient.color": "#FFF",
      shape: S,
      "shape.background": Kj,
      "shape.repeat.image": S,
      "shape.border.width": 0,
      "shape.border.width.absolute": !1,
      "shape.border.color": Kj,
      "shape.border.3d": !1,
      "shape.border.3d.color": S,
      "shape.border.3d.accuracy": S,
      "shape.border.cap": he,
      "shape.border.join": po,
      "shape.border.pattern": S,
      "shape.gradient": A,
      "shape.gradient.color": "#FFF",
      "shape.depth": 0,
      "shape.dash": !1,
      "shape.dash.pattern": bq,
      "shape.dash.offset": 0,
      "shape.dash.color": us,
      "shape.dash.width": S,
      "shape.dash.3d": !1,
      "shape.dash.3d.color": S,
      "shape.dash.3d.accuracy": S,
      "shape.polygon.side": 6,
      "shape.arc.from": I,
      "shape.arc.to": U,
      "shape.arc.close": !0,
      "shape.arc.oval": !1,
      "shape.corner.radius": S,
      "shape.gradient.pack": S,
      "shape.fill.rule": "nonzero",
      "shape.fill.clip.direction": "top",
      "shape.fill.clip.percentage": 1,
      "shape.foreground": S,
      "shape.foreground.gradient": A,
      "shape.foreground.gradient.color": "#FFF",
      "shape.foreground.clip.direction": "top",
      "shape.foreground.clip.percentage": 1,
      "autolayout.gap": S,
      "autolayout.hgap": S,
      "autolayout.vgap": S,
      "edge.type": S,
      "edge.points": S,
      "edge.segments": S,
      "edge.color": Kj,
      "edge.width": 2,
      "edge.width.absolute": !1,
      "edge.offset": 20,
      "edge.group": 0,
      "edge.expanded": !0,
      "edge.gap": 12,
      "edge.toggleable": !0,
      "edge.center": !1,
      "edge.3d": !1,
      "edge.3d.color": S,
      "edge.3d.accuracy": S,
      "edge.cap": he,
      "edge.join": po,
      "edge.source.position": 17,
      "edge.source.anchor.x": S,
      "edge.source.anchor.y": S,
      "edge.source.offset.x": 0,
      "edge.source.offset.y": 0,
      "edge.target.position": 17,
      "edge.target.anchor.x": S,
      "edge.target.anchor.y": S,
      "edge.target.offset.x": 0,
      "edge.target.offset.y": 0,
      "edge.pattern": S,
      "edge.dash": !1,
      "edge.dash.pattern": bq,
      "edge.dash.offset": 0,
      "edge.dash.color": us,
      "edge.dash.width": S,
      "edge.dash.3d": !1,
      "edge.dash.3d.color": S,
      "edge.dash.3d.accuracy": S,
      "edge.independent": !1,
      "attach.row.index": 0,
      "attach.column.index": 0,
      "attach.row.span": 1,
      "attach.column.span": 1,
      "attach.padding": 0,
      "attach.padding.left": 0,
      "attach.padding.right": 0,
      "attach.padding.top": 0,
      "attach.padding.bottom": 0,
      "attach.index": -1,
      "attach.offset": 0,
      "attach.offset.relative": !1,
      "attach.offset.opposite": !1,
      "attach.thickness": S,
      "attach.gap": 0,
      "attach.gap.relative": !1,
      "grid.row.count": 1,
      "grid.column.count": 1,
      "grid.row.percents": S,
      "grid.column.percents": S,
      "grid.border": 1,
      "grid.border.left": 0,
      "grid.border.right": 0,
      "grid.border.top": 0,
      "grid.border.bottom": 0,
      "grid.gap": 1,
      "grid.background": w.gridBackground,
      "grid.depth": 1,
      "grid.cell.depth": -1,
      "grid.cell.border.color": w.gridCellBorderColor,
      "grid.block": S,
      "grid.block.padding": 3,
      "grid.block.width": 1,
      "grid.block.color": w.gridBlockColor,
      text: "",
      "text.align": "left",
      "text.vAlign": "middle",
      "text.color": es,
      "text.font": Co,
      "text.shadow": !1,
      "text.shadow.color": Br,
      "text.shadow.blur": 6,
      "text.shadow.offset.x": 3,
      "text.shadow.offset.y": 3,
      "text.scale.x": 1,
      "text.scale.y": 1
    }, !0), Ak(Yc, {
      _76I: function (n, z, h) {
        this._39I && this._39I.fire({data: n, oldIndex: z, newIndex: h})
      }, addIndexChangeListener: function (M, F, j) {
        var l = this;
        l._39I || (l._39I = new Ke), l._39I.add(M, F, j)
      }, removeIndexChangeListener: function (t, e) {
        this._39I.remove(t, e)
      }, prepareRemove: function ($) {
        yc($) && ($.setSource(A), $.setTarget(A)), $._70O && $._70O.toList().each(this.remove, this), $._69O && $._69O.toList().each(function (F) {
          F.setHost(A)
        }), $._host && $.setHost(A)
      }, onAdded: function (f) {
        this.isAutoAdjustIndex() && this.adjustIndex(f)
      }, onDataPropertyChanged: function (G, e) {
        Jc[e.property] && this.isAutoAdjustIndex() && this.adjustIndex(G)
      }, isAdjustable: function (x) {
        return Kf(x) || yc(x)
      }, isAdjustedToBottom: function (N) {
        return Xo(N) ? N.isExpanded() && ob(N) : !1
      }, adjustIndex: function (w) {
        var p = this;
        this.isHierarchicalRendering() || (p.isAdjustedToBottom(w) ? (p.sendToBottom(w), w.eachChild(p.adjustIndex, p)) : p.sendToTop(w))
      }, sendToTop: function (X) {
        var q = this;
        if (q.contains(X) && q.isAdjustable(X)) {
          var H = q._datas;
          if (X !== H.get(q.size() - 1)) {
            var p = H.indexOf(X);
            H.removeAt(p), H.add(X), q._76I(X, p, q.size() - 1)
          }
          if (yc(X)) {
            var h = X._40I;
            h && !q.isAdjustedToBottom(h) && q.sendToTop(h), h = X._41I, h && !q.isAdjustedToBottom(h) && q.sendToTop(h)
          }
          X._69O && X._69O.each(function (Z) {
            Z.isRelatedTo(X) || Kf(X) && Z.isLoopedHostOn(X) || q.sendToTop(Z)
          }), X.ISubGraph || (!Xo(X) || X.isExpanded()) && X._adjustChildrenToTop && X.eachChild(function (d) {
            yc(d) || q.sendToTop(d)
          })
        }
      }, sendToBottom: function (W, L) {
        var F = this;
        if (W !== L && F.contains(W) && F.isAdjustable(W) && (!L || F.contains(L))) {
          var p = F._datas, E = p.remove(W), U = L ? F._datas.indexOf(L) : 0;
          if (p.add(W, U), E !== U) {
            F._76I(W, E, U);
            var t = W._parent;
            !t || t.ISubGraph || yc(t) || F.sendToBottom(W._parent, W)
          }
        }
      }
    }), Ak(Rf, {
      ms_edit: function (U) {
        U._46O = function (n) {
          var E = this, A = E.gv.dm(), k = E._index, R = E._89I, s = E._node, _ = E._shape, b = E._edge, q = E._77I;
          s && R ? (this.fi({
            kind: "endEditRect",
            event: n,
            data: s,
            direction: R
          }), A.endTransaction()) : _ && k >= 0 ? (E.fi({
            kind: "endEditPoint",
            event: n,
            data: _,
            index: k
          }), A.endTransaction()) : b && k >= 0 ? (E.fi({
            kind: "endEditPoint",
            event: n,
            data: b,
            index: k
          }), A.endTransaction()) : q && (E.fi({kind: "endEditRotation", event: n, data: q}), A.endTransaction())
        }, U._78I = function (t) {
          var n = this;
          n.autoScroll(t);
          var S = n.gv.lp(t), k = n._index, N = n._89I, y = n._node, K = n._shape, o = n._edge, X = n._77I;
          if (y && N) n._80O(S), n.fi({
            kind: "betweenEditRect",
            event: t,
            data: y,
            direction: N
          }); else if (K && k >= 0) S.e = K.getPoints().get(k).e, K.setPoint(k, S), n.fi({
            kind: "betweenEditPoint",
            event: t,
            data: K,
            index: k
          }); else if (o && k >= 0) {
            var Q = o.s(Ni);
            S.e = Q.get(k).e, Q.set(k, S), o.fp(Ni, A, Q), n.fi({kind: "betweenEditPoint", event: t, data: o, index: k})
          } else if (X) {
            var G = X.p(), u = X.getScale(), z = b + i(S.y - G.y, S.x - G.x);
            u.y < 0 && (z += I), C(z) < .04 && (z = 0), X.setRotation(z), n.fi({
              kind: "betweenEditRotation",
              event: t,
              data: X
            })
          }
        }, U._80O = function (B) {
          var F = this, i = F._node, G = F._rect, L = G.x, N = G.y, M = G.width, e = G.height, R = F._89I,
            S = F._anchor, E = F._matrix, B = E.tfi(B);
          "northwest" === R ? G = Ue(B, {x: L + M, y: N + e}) : R === yh ? G = Ue({x: L, y: B.y}, {
            x: L + M,
            y: N + e
          }) : "northeast" === R ? G = Ue({x: L, y: B.y}, {x: B.x, y: N + e}) : R === Tj ? G = Ue({
            x: B.x,
            y: N
          }, {x: L + M, y: N + e}) : R === gh ? G = Ue({x: L, y: N}, {
            x: B.x,
            y: N + e
          }) : "southwest" === R ? G = Ue({x: B.x, y: N}, {x: L + M, y: B.y}) : "south" === R ? G = Ue({
            x: L,
            y: N
          }, {x: L + M, y: B.y}) : "southeast" === R && (G = Ue({
            x: L,
            y: N
          }, B)), i.setPosition(E.tf(G.x + G.width * S.x, G.y + G.height * S.y)), i.setWidth(G.width), i.setHeight(G.height)
        }, U._80I = function (n, P, N, _) {
          var q = this, G = q.gv._zoom, f = (q.gv.getEditPointSize() + 2) / G;
          return en({x: P - f / 2, y: N - f / 2, width: f, height: f}, n) ? (q._89I !== _ && (q._89I = _), !0) : !1
        }, U._79I = function (B, $, O) {
          var a = this, F = a.gv, U = $ ? F.getDataUI($) : A, t = U ? U._55O : A;
          if (t) {
            var E, T, R, W, u = F._zoom, y = (F.getEditPointSize() + 2) / u, K = F.lp(B);
            if (Kf($)) {
              if (t._56O && Kf($) && (T = t._98o, en({
                x: T.x - y / 2,
                y: T.y - y / 2,
                width: y,
                height: y
              }, K))) return a._77I = $, O && a.fi({
                kind: "beginEditRotation",
                event: B,
                data: $
              }), a.setCursor("crosshair"), !0;
              if (t._43O && $ instanceof wb) for (R = $.getPoints(), E = R.size() - 1; E >= 0; E--) if (T = R.get(E), en({
                x: T.x - y / 2,
                y: T.y - y / 2,
                width: y,
                height: y
              }, K)) return a._index = E, a._shape = $, O && a.fi({
                kind: "beginEditPoint",
                event: B,
                data: $,
                index: E
              }), a.setCursor("crosshair"), !0;
              if (t._42O) for (var d = $.getEditControlPoints(), S = ["northwest", -1, -1, Tj, -1, 0, "southwest", -1, 1, "south", 0, 1, "southeast", 1, 1, gh, 1, 0, "northeast", 1, -1, yh, 0, -1], E = 0, W = d.length; W > E; E++) {
                var k = S[3 * E], b = d[E];
                if (a._80I(K, b.x, b.y, k)) {
                  a._node = $;
                  var r = $.getWidth(), n = $.getHeight(), P = $.getAnchor();
                  a._rect = {x: -r * P.x, y: -n * P.y, width: r, height: n}, a._anchor = P, a._matrix = $.getMatrix();
                  var q = $.getRotation(), G = J(q), e = D(q), l = S[3 * E + 1] * Yh($.getScale().x),
                    I = S[3 * E + 2] * Yh($.getScale().y), C = Math.atan2(-e * l - G * I, G * l - e * I),
                    N = (Math.round(C / (Math.PI / 4)) + 8) % 8,
                    M = [kc, "nesw-resize", Ph, "nwse-resize", kc, "nesw-resize", Ph, "nwse-resize"][N];
                  return a.setCursor(M), O && a.fi({kind: "beginEditRect", event: B, data: $, direction: a._89I}), !0
                }
              }
            }
            if (t._43O && yc($) && $.s(Vm) === vl && (R = $.s(Ni))) for (E = R.size() - 1; E >= 0; E--) if (T = R.get(E), en({
              x: T.x - y / 2,
              y: T.y - y / 2,
              width: y,
              height: y
            }, K)) return a._index = E, a._edge = $, O && a.fi({
              kind: "beginEditPoint",
              event: B,
              data: $,
              index: E
            }), a.setCursor("crosshair"), !0
          }
          return !1
        }
      }, ms_gv: function (o) {
        o._currentSubGraph = A, o.upSubGraph = function () {
          this.setCurrentSubGraph(bj(this._currentSubGraph))
        }, o.isVisible = function (J) {
          var G = this;
          if (bj(J) !== G._currentSubGraph) return !1;
          if (yc(J)) {
            var Y = J._40I, E = J._41I;
            if (!Y || !E) return !1;
            if (!(J.s("edge.independent") || G.isVisible(Y) && G.isVisible(E))) return !1;
            if (J.isEdgeGroupHidden()) return !1
          } else for (var j = J._parent; j && !j.ISubGraph;) {
            if (Xo(j) && (!j.isExpanded() || !G.isVisible(j))) return !1;
            j = j._parent
          }
          if (J._parent instanceof Bp && !G.isVisible(J._parent)) return !1;
          if (J._refGraph instanceof Md && !G.isVisible(J._refGraph)) return !1;
          if (G instanceof Lg) {
            if (!J.s("3d.visible")) return !1
          } else {
            var v = G.getLayersInfo();
            if (v) {
              var g = v[J._layer];
              if (g && g.visible === !1) return !1
            }
            if (!J.s("2d.visible")) return !1
          }
          return G._visibleFunc ? G._visibleFunc(J) : !0
        }, o.handleSelectionChange = function (k) {
          var W = this;
          k.datas.each(function (H) {
            W.invalidateData(H);
            var q = H._parent;
            Xo(q) && Kf(H) && H.s(rr) && (W.invalidateData(q), q._49I && q._49I.each(function (K) {
              W.invalidateData(K)
            }))
          }), W.onSelectionChanged(k)
        }, o.onSelectionChanged = function (U) {
          var s = this, G = s.sm();
          if (1 === G.size() && ("set" === U.kind || "append" === U.kind)) {
            var E = G.ld();
            s.isAutoMakeVisible() && s.makeVisible(E), s.adjustIndex && s._dataModel.isAutoAdjustIndex() && s.adjustIndex(E)
          }
        }, o.makeVisible = function (D) {
          if (D) {
            var e = this, y = e.getDataUI ? e.getDataUI(D) : e.getData3dUI(D);
            if (y) {
              var r = D, F = bj(D);
              for (F !== e._currentSubGraph && e.setCurrentSubGraph(F); (r = r._parent) && r !== F;) Xo(r) && r.setExpanded(!0);
              e._23I = D, e.iv()
            }
          }
        }, o.getLabel = function (z) {
          var A = z.getStyle(Dg);
          return A === S ? z.getName() : A
        }, o.getLabelBackground = function (m) {
          return m.getStyle("label.background")
        }, o.getLabelColor = function (y) {
          return y.getStyle("label.color")
        }, o.getLabel2 = function (p) {
          return p.getStyle("label2")
        }, o.getLabel2Background = function (Z) {
          return Z.getStyle("label2.background")
        }, o.getLabel2Color = function (I) {
          return I.getStyle("label2.color")
        }, o.getNote = function (K) {
          return K.getStyle(Wd)
        }, o.getNoteBackground = function (f) {
          return f.getStyle("note.background")
        }, o.getNote2 = function (m) {
          return m.getStyle(qc)
        }, o.getNote2Background = function (I) {
          return I.getStyle("note2.background")
        }, o.handleClick = function (F, j, J) {
          var S = this;
          j ? (S.fi({
            kind: "clickData",
            event: F,
            data: j,
            part: J
          }), S.onDataClicked(j, F)) : (S.fi({kind: "clickBackground", event: F}), S.onBackgroundClicked(F))
        }, o.handleDoubleClick = function (p, m, s) {
          var d = this;
          Wb(p) && (m ? (d.fi({
            kind: "doubleClickData",
            event: p,
            data: m,
            part: s
          }), d.onDataDoubleClicked(m, p, s), d.checkDoubleClickOnNote(p, m, s) || d.checkDoubleClickOnRotation && d.checkDoubleClickOnRotation(p, m, s) || (yc(m) ? d.onEdgeDoubleClicked(m, p, s) : m.ISubGraph ? d.onSubGraphDoubleClicked(m, p, s) : Xo(m) ? d.onGroupDoubleClicked(m, p, s) : m.IDoorWindow ? d.onDoorWindowDoubleClicked(m, p, s) : m.ICSGBox && d.onCSGBoxDoubleClicked(m, p, s))) : (d.fi({
            kind: "doubleClickBackground",
            event: p
          }), d.onBackgroundDoubleClicked(p)))
        }, o.onSubGraphDoubleClicked = function (W) {
          this.setCurrentSubGraph(W)
        }, o.onEdgeDoubleClicked = function (D, q) {
          D.ISubGraph && !xr(q) ? this.setCurrentSubGraph(D) : D.s("edge.toggleable") && D.toggle()
        }, o.onGroupDoubleClicked = function (s) {
          s.s("group.toggleable") && s.toggle()
        }, o.onDoorWindowDoubleClicked = function (N) {
          N.s("dw.toggleable") && N.toggle(!0)
        }, o.onCSGBoxDoubleClicked = function (D, C) {
          var v = this;
          if (v instanceof Lg) {
            var u = v.getHitFaceInfo(C);
            u && u.face && D.s(u.face + ".toggleable") && D.toggleFace(u.face, !0)
          }
        }, o.onBackgroundClicked = function () {
        }, o.onBackgroundDoubleClicked = function () {
          this.upSubGraph()
        }, o.onDataClicked = function () {
        }, o.onDataDoubleClicked = function () {
        }, o.onAutoLayoutEnded = function () {
        }, o.onMoveEnded = function () {
        }, o.onPanEnded = function () {
        }, o.onPinchEnded = function () {
        }, o.onRectSelectEnded = function () {
        }, o.onZoomEnded = function () {
        }
      }, ms_icons: function (y) {
        y.getRotation = function (C) {
          return C == A ? 0 : C
        }, y._15O = function () {
          var u = this, o = u.s(Bc);
          if (o) {
            var G = u, C = u.data || u._data, S = u._38o = {icons: o, rects: {}};
            for (var H in o) {
              var r = o[H], D = $q(r.shape3d, C, G);
              if (!($q(r.visible, C, G) === !1 || $q(r.for3d, C, G) && !u.I3d || D && !u.I3d)) {
                var T = D ? [D] : $q(r.names, C, G), q = T ? T.length : 0, x = $q(r.position, C, G) || 3,
                  F = $q(r.offsetX, C, G) || 0, w = $q(r.offsetY, C, G) || 0, J = $q(r.direction, C, G) || gh,
                  M = $q(r.gap, C, G), e = M != A ? M : 1, y = $q(r.rotation, C, G), $ = $q(r.keepOrien, C, G),
                  B = $q(r.rotationFixed, C, G) ? y : u.getRotation(y, $, x), Y = A, Z = S.rects[H] = new Array(q);
                Z.rotation = B;
                for (var N = 0; q > N; N++) {
                  var V, h, R, K, m = T[N];
                  if (D) R = 0, K = 0; else {
                    var W = vf(m);
                    R = $q(r.width, C, G), K = $q(r.height, C, G), R == A && (R = Hk(W, C)), K == A && (K = Ll(W, C))
                  }
                  if (Y ? J === gh ? F += R / 2 : J === Tj ? F -= R / 2 : J === yh ? w -= K / 2 : w += K / 2 : Y = {
                    width: R,
                    height: K
                  }, u.I3d) {
                    var i = -R / 2, b = -K / 2;
                    h = {
                      width: R,
                      height: K,
                      mat: u._16O($q(r.autorotate, C, G), x, Y, $q(r.face, C, G) || ji, $q(r.t3, C, G), $q(r.r3, C, G), $q(r.rotationMode, C, G), F, w),
                      vs: new on([i, -b, 0, i, -b - K, 0, i + R, -b - K, 0, i + R, -b, 0])
                    }
                  } else V = u.getPosition(x, F, w, Y, $q(r.positionFixed, C, G)), h = {
                    x: V.x - R / 2,
                    y: V.y - K / 2,
                    width: R,
                    height: K
                  }, u._68o(h, B);
                  Z[N] = h, J === gh ? F += R / 2 + e : J === Tj ? F -= R / 2 + e : J === yh ? w -= K / 2 + e : w += K / 2 + e
                }
              }
            }
          }
        }
      }
    });
    var kq = {
        1: 1,
        2: 1,
        6: 1,
        9: 1,
        10: 1,
        14: 1,
        15: 1,
        16: 1,
        21: 1,
        22: 1,
        26: 1,
        29: 1,
        30: 1,
        34: 1,
        36: 1,
        38: 1,
        40: 1,
        42: 1,
        45: 1,
        50: 1,
        52: 1,
        54: 1
      }, eq = {3: 1, 7: 1, 11: 1, 17: 1, 23: 1, 27: 1, 31: 1, 44: 1, 46: 1, 47: 1, 49: 1},
      tg = {translateX: 1, translateY: 1, zoom: 1, scrollBarVisible: 1},
      Jc = {sourceAgent: 1, targetAgent: 1, expanded: 1, parent: 1, host: 1},
      Il = {position: 1, width: 1, height: 1, expanded: 1, rotation: 1, anchor: 1, scale: 1, "s:edge.points": 1},
      Em = {"edge.type": 1, "edge.group": 1}, Cs = {rotation: 1, rotationX: 1, rotationZ: 1}, Xh = {
        position: 1,
        width: 1,
        height: 1,
        anchor: 1,
        scale: 1,
        "s:grid.row.count": 1,
        "s:grid.column.count": 1,
        "s:grid.row.percents": 1,
        "s:grid.column.percents": 1,
        "s:grid.border": 1,
        "s:grid.border.left": 1,
        "s:grid.border.right": 1,
        "s:grid.border.top": 1,
        "s:grid.border.bottom": 1,
        "s:grid.gap": 1
      }, id = {
        "attach.row.index": 1,
        "attach.column.index": 1,
        "attach.row.span": 1,
        "attach.column.span": 1,
        "attach.padding": 1,
        "attach.padding.left": 1,
        "attach.padding.right": 1,
        "attach.padding.top": 1,
        "attach.padding.bottom": 1,
        "attach.index": 1,
        "attach.offset": 1,
        "attach.offset.relative": 1,
        "attach.offset.opposite": 1,
        "attach.gap": 1,
        "attach.gap.relative": 1,
        "attach.thickness": 1
      }, Ob = {shape: 1, thickness: 1, position: 1, anchor: 1, scale: 1}, pb = function (K, x) {
        if (!K || !Xo(x) || x.isEmpty()) return !1;
        for (K = K._parent; Xo(K);) {
          if (K === x) return !0;
          K = K._parent
        }
        return !1
      }, Ge = function (b, i) {
        if (!b || !si(i) || i.isEmpty()) return !1;
        for (b = b._parent; si(b);) {
          if (b === i) return !0;
          b = b._parent
        }
        return !1
      }, bj = function (K) {
        if (!K) return A;
        if (yc(K)) {
          var N = K._40I, k = K._41I;
          if (!N || !k) return A;
          var D = bj(N), $ = bj(k);
          return D === $ ? D : A
        }
        for (var H = K._parent; yc(H) && !H.ISubGraph;) H = H._parent;
        return H ? H.ISubGraph ? H : bj(H) : A
      }, nc = function (Q, M, Z, c) {
        var y = M.getStyle(Z) * c;
        y && hq(Q, y), y = M.getStyle(Z + ".left") * c, y && (Q.x -= y, Q.width += y), y = M.getStyle(Z + ".right") * c, y && (Q.width += y), y = M.getStyle(Z + ".top") * c, y && (Q.y -= y, Q.height += y), y = M.getStyle(Z + ".bottom") * c, y && (Q.height += y), Q.width < 0 && (Q.width = -Q.width, Q.x -= Q.width), Q.height < 0 && (Q.height = -Q.height, Q.y -= Q.height)
      }, ob = function (j) {
        for (var s, S = 0, Y = j.size(); Y > S; S++) if (s = j.getChildAt(S), Kf(s) && ob(s)) return !0;
        return j.hasAgentEdges()
      }, _q = function (J) {
        if (!J) return A;
        for (var F = J._parent; Xo(F);) {
          if (!Xo(F._parent)) return F.isExpanded() ? J : F;
          F.isExpanded() || (J = F), F = F._parent
        }
        return J
      }, lo = function (E, f) {
        if (!E || !f) return A;
        var L, J, P, V = bj(E), Q = bj(f);
        if (V !== Q) {
          for (; Q && V !== Q;) Q = bj(Q);
          if (V === Q) return E;
          L = new Oh, L.add(E, 0);
          for (var $ = E._parent; Kf($) && !f.isDescendantOf($);) L.add($, 0), $ = $._parent;
          for (P = L.size(), J = 0; P > J; J++) {
            var U = L.get(J);
            if (Xo(U) && !U.isExpanded()) return U;
            if (U.ISubGraph) return U
          }
          return E
        }
        return E
      }, Do = function (c) {
        if (c.isLooped()) return c._source;
        var s = _q(c._source), h = _q(c._target);
        return s === h ? c._source : lo(s, h)
      }, cm = function (U) {
        if (U.isLooped()) return U._target;
        var O = _q(U._source), s = _q(U._target);
        return O === s ? U._target : lo(s, O)
      }, gs = function (w, H, n, R, a, W, z) {
        if (!H) return A;
        var B, X = H.getRotation ? H.getRotation() : 0;
        if (W !== S || z !== S) if (W = W === S ? .5 : W, z = z === S ? .5 : z, X && !sr(H, w)) {
          var _ = H.getPosition(), $ = H.getWidth(), O = H.getHeight(), E = H.getAnchor(), U = H.getScale(),
            M = new uh(X, _.x, _.y, U.x, U.y);
          n = M.tf((W - E.x) * $, (z - E.y) * O)
        } else B = Cf(w, H), n = {x: B.x + W * B.width, y: B.y + z * B.height}; else n = um(n, Cf(w, H));
        if (X) {
          var l = J(X), h = D(X), u = R * l - a * h;
          a = R * h + a * l, R = u
        }
        return n.x += R, n.y += a, n
      }, sj = function (i, Q) {
        if (!i || !Q) return A;
        var J, b, H, _, d, s;
        if (i === Q) {
          if (_ = i.getLoopedEdges(), !_) return A;
          _ = new Oh(_)
        } else {
          if (d = i.getAgentEdges(), s = Q.getAgentEdges(), !d || !s) return A;
          for (b = d.size(), J = 0; b > J; J++) H = d.get(J), s.contains(H) && (_ || (_ = new Oh), _.add(H))
        }
        if (_) for (J = 0; J < _.size(); J++) H = _.get(J), H.getStyle(Vm) === vl && (H._22I(A), _.removeAt(J), J--);
        return _
      }, qg = function (q, p) {
        var G = sj(q, p);
        if (G && !G.isEmpty()) {
          if (1 === G.size()) return G.get(0)._22I(A), void 0;
          var f = new Oh, n = new Oh;
          G.each(function (u) {
            var V = u.s("edge.group");
            f.contains(V) || f.add(V)
          }), f.sort(), f.each(function (r) {
            n.add(new Q.EdgeGroup(G.toList(function (l) {
              return r === l.s("edge.group")
            }), n))
          }), n.each(function (k) {
            k.each(function (W) {
              W._22I(k)
            })
          })
        }
      }, xi = function (U, Y) {
        if (Y) {
          var X = Y.rect, G = Y.color, h = Y.rotation, O = Y.labelWidth, s = Y.background, e = Y.opacity, l = Y.scale,
            g = l != A && 1 !== l;
          if (e != A) {
            var C = U.globalAlpha;
            U.globalAlpha *= e
          }
          if (h || g) {
            U.save();
            var t = X.x + X.width / 2, p = X.y + X.height / 2;
            Of(U, t, p), h && Rq(U, h), g && U.scale(l, l), Of(U, -t, -p)
          }
          if (s && yj(U, X.x, X.y, X.width, X.height, s), O) {
            var T = X.width, j = U.createLinearGradient(X.x, X.y, X.x + T, X.y);
            j.addColorStop(0, G), j.addColorStop(.9, G), j.addColorStop(1, rn), G = j, X.width = O
          }
          Wn(U, Y.ss, X, Y.font, G, Y.align), O && (X.width = T), (h || g) && U.restore(), e != A && (U.globalAlpha = C)
        }
      }, yb = function (X, B) {
        if (B) {
          var E = B.rect, P = E.x, e = E.y, J = E.width, S = E.height, R = B.background, z = B.backgroundImage,
            V = B.borderWidth, C = B.borderColor, T = B.labelWidth, r = B.opacity, i = B.scale, Z = i != A && 1 !== i;
          if (r != A) {
            var f = X.globalAlpha;
            X.globalAlpha *= r
          }
          if (Z) {
            X.save();
            var $ = E.x + E.width / 2, N = E.y + E.height / 2;
            Of(X, $, N), X.scale(i, i), Of(X, -$, -N)
          }
          if (B.expanded) {
            var O = L(8, J / 4), c = e + S - 8;
            if (X.fillStyle = R, X.beginPath(), X.moveTo(P, e), X.lineTo(P, c), X.lineTo(P + J / 2, c), X.lineTo(P + J / 2, e + S), X.lineTo(P + J / 2 + O, c), X.lineTo(P + J, c), X.lineTo(P + J, e), X.closePath(), X.fill(), V && (X.lineWidth = V, X.lineJoin = "round", X.lineCap = "round", C ? (X.strokeStyle = C, X.stroke()) : (X.strokeStyle = Kn(R), X.beginPath(), X.moveTo(P + J, e), X.lineTo(P + J, c), X.lineTo(P + J / 2 + O, c), X.lineTo(P + J / 2, e + S), X.stroke(), X.strokeStyle = Pc(R), X.beginPath(), X.moveTo(P + J, e), X.lineTo(P, e), X.lineTo(P, c), X.lineTo(P + J / 2, c), X.lineTo(P + J / 2, e + S), X.stroke())), z) Jl(X, vf(z), lc, E.x, E.y, E.width, E.height - 8, B.data, B.view); else {
              if (E.height -= 8, R = B.color, T) {
                var u = J, o = X.createLinearGradient(P, e, P + u, e);
                o.addColorStop(0, R), o.addColorStop(.9, R), o.addColorStop(1, rn), R = o, E.width = T
              }
              Wn(X, B.ss, E, B.font, R, B.align), T && (E.width = u), E.height += 8
            }
          } else if (B.icon) dm(X, vf(B.icon), P, e, J, S, B.data, B.view); else {
            var y = J / 2;
            V && (X.lineWidth = V, X.lineJoin = "round", X.lineCap = "round", X.strokeStyle = C ? C : Kn(R), X.beginPath(), X.arc(P + y, e + y, y, b, 1.6 * I, !0), X.moveTo(P + y, e + S), X.lineTo(P + J - y / 5, e + y), X.stroke(), X.strokeStyle = C ? C : Pc(R), X.beginPath(), X.arc(P + y, e + y, y, 1.6 * I, b, !0), X.moveTo(P + y, e + S), X.lineTo(P + y / 5, e + y), X.stroke()), X.fillStyle = R, X.beginPath(), X.arc(P + y, e + y, y, 0, U, !0), X.moveTo(P + y, e + S), X.lineTo(P + J - y / 5, e + y), X.lineTo(P + y / 5, e + y), X.closePath(), X.fill(), X.fillStyle = B.color, X.beginPath(), X.arc(P + y, e + y, y / 3, 0, U, !0), X.fill()
          }
          Z && X.restore(), r != A && (X.globalAlpha = f)
        }
      }, un = function (k, L) {
        return L > 2 * k ? k : L / 2
      }, td = function (H, R, w, Y) {
        if (!H || !R) return 0;
        var V = i(R.y - H.y, R.x - H.x);
        return w || (V = R.x < H.x ? V + I : V), V + Y
      }, Ih = function (j, K, V, Q, h, d, S) {
        S && (j.x > K.x || j.x === K.x && j.y > K.y) && (V = np[V], h = -h);
        var Z = um(V, {x: 0, y: 0, width: lf(j, K), height: 0}, d);
        return Z.x += Q, Z.y += h, Z = new uh(i(K.y - j.y, K.x - j.x)).tf(Z), Z.x += j.x, Z.y += j.y, Z
      }, ud = function (v, p, G, D, c) {
        if (v._19Q = !0, !G.getEdgeGroup()) return D ? G.s("edge.gap") : 0;
        var Q, r = 0, x = 0, m = 0;
        if (G.getEdgeGroup().getSiblings().each(function (k) {
          k.each(function (C) {
            if (p.isVisible(C) && C.s(Vm) == c) {
              var R = C.s("edge.gap");
              Q ? (x += m / 2 + R / 2, m = R) : (Q = C, m = R), C === G && (r = x)
            }
          })
        }), D) return x - r + m;
        var T = r - x / 2;
        return Q && G._40I !== Q._40I && (v._19Q = !1), T
      }, uq = function () {
        var b = function (T) {
          var s = [];
          return T.forEach(function (M) {
            s.push({x: M.x, y: M.y}), s.push({x: M.x + M.width, y: M.y + M.height}), s.push({
              x: M.x + M.width,
              y: M.y
            }), s.push({x: M.x, y: M.y + M.height})
          }), s
        };
        return function (g, s, U) {
          if ("oval" === g) {
            var I = 0, J = U.height / U.width, p = J * J, q = U.x + U.width / 2, Q = U.y + U.height / 2, l = b(s);
            l.forEach(function (u) {
              var W = u.x - q, Z = u.y - Q, U = W * W + Z * Z / p;
              U > I && (I = U)
            }), I = Y(I);
            var d = J * I;
            return {x: q - I, y: Q - d, width: 2 * I, height: 2 * d}
          }
          if ("circle" === g) {
            var P = 0, q = U.x + U.width / 2, Q = U.y + U.height / 2, l = b(s);
            return l.forEach(function (L) {
              var F = L.x - q, O = L.y - Q, j = F * F + O * O;
              j > P && (P = j)
            }), P = Y(P), {x: q - P, y: Q - P, width: 2 * P, height: 2 * P}
          }
          return "roundRect" === g ? (hq(U, L(U.width, U.height) / 16), U) : U
        }
      }(), Ui = Q.graph = {}, Pb = function (f, T, z) {
        Dr(H + ".graph." + f, T, z)
      };
    Q.layout = {};
    var Hp = {
      comps: [{
        type: Mq,
        points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 43, 50, 115, 107, 87, 113, 97, 71, 115, 77, 118, 119, 118, 77, 118, 79, 109, 87, 53, 79, 54, 86, 76, 90, 66, 43, 107, 88, 83, 73, 100, 86, 99, 61],
        borderWidth: 1,
        borderColor: A
      }]
    };
    Hp[Sq] = Hp[oi] = 160, $n("node_image", se(30, 30, [{
      type: Kd,
      rect: [4, 5, 22, 16],
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }, {type: Kd, rect: [2, 3, 26, 20], borderWidth: 1, borderColor: Kj}, {
      type: Kd,
      rect: [11, 23, 8, 4],
      background: Kj
    }, {type: Kd, rect: [6, 27, 18, 2], background: Kj}])), $n("node_icon", se(16, 16, [{
      type: Kd,
      rect: [2, 2, 12, 10],
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }, {type: Fq, rect: [2, 2, 12, 10], width: 1, color: Kj}, {
      type: Kd,
      rect: [6, 12, 4, 2],
      background: Kj
    }, {type: Kd, rect: [4, 14, 8, 1], background: Kj}])), $n("block_icon", se(16, 16, [{
      type: Fq,
      rect: [1, 1, 14, 14],
      width: 1,
      color: Kj
    }])), $n("group_image", se(66, 39, [{
      type: Kd,
      rect: [44.3, 18, 18.1, 12.8],
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }, {type: Kd, rect: [3.3, 17.8, 18.1, 12.8], gradient: eb, gradientColor: Jf, background: Kj}, {
      type: Kd,
      rect: [15.8, 3.2, 33.5, 26.4],
      borderWidth: 1,
      borderColor: Kj,
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }, {type: Kd, rect: [26.2, 29.4, 12.8, 4.2], background: Kj}, {
      type: Kd,
      rect: [21.3, 33.5, 22.5, 2.3],
      background: Kj
    }, {type: Kd, rect: [5.3, 32.7, 14.1, 2.1], background: Kj}, {
      type: Kd,
      rect: [9, 30.4, 6.7, 2.4],
      background: Kj
    }, {type: Kd, rect: [50, 30.7, 6.7, 2.4], background: Kj}, {
      type: Kd,
      rect: [46.3, 33, 14.1, 2.1],
      background: Kj
    }])), $n("group_icon", se(16, 16, [{type: Kd, rect: [4, 12, 4, 2], background: Kj}, {
      type: Kd,
      rect: [2, 13, 8, 1],
      background: Kj
    }, {type: Kd, rect: [12, 12, 2, 1], background: Kj}, {type: Kd, rect: [11, 13, 4, 1], background: Kj}, {
      type: Kd,
      rect: [10, 7, 6, 5],
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }, {type: Kd, rect: [1, 2, 10, 10], gradient: eb, gradientColor: Jf, background: Kj}, {
      type: Fq,
      rect: [1, 2, 10, 10],
      width: 1,
      color: Kj
    }])), $n("refGraph_icon", se(16, 16, [{
      type: "shape",
      borderWidth: 1,
      borderColor: Kj,
      borderCap: "round",
      rotation: .7854,
      points: [12.5502, 6.7981, 12.5502, 6.7981, 12.5502, 4.8181, 12.5502, 3.7981, 12.5502, 2.7781, 11.36687, 1.7981, 10.0502, 1.7981, 8.73354, 1.7981, 7.5502, 2.8181, 7.5502, 3.7981, 7.5502, 4.55989, 7.5502, 7.79805, 7.5502, 7.79805, 7.5502, 7.79805, 7.5502, 9.7981, 10.0502, 9.7981],
      segments: [1, 4, 4, 4, 4, 4]
    }, {
      type: "shape",
      borderWidth: 1,
      borderColor: Kj,
      borderCap: "round",
      rotation: -2.35619,
      points: [8.4498, 11.2019, 8.4498, 11.2019, 8.4498, 9.2219, 8.4498, 8.2019, 8.4498, 7.1819, 7.26646, 6.2019, 5.9498, 6.2019, 4.63313, 6.2019, 3.4498, 7.2219, 3.4498, 8.2019, 3.4498, 8.9637, 3.4498, 12.20186, 3.4498, 12.20186, 3.4498, 12.20186, 3.4498, 14.2019, 5.9498, 14.2019],
      segments: [1, 4, 4, 4, 4, 4]
    }])), $n("edge_icon", se(16, 16, [{
      type: Kd,
      rect: [2.1, 6.9, 11.5, 2.6],
      rotation: -.79,
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }, {type: Kd, rect: [10.8, 1, 4, 4], background: Kj}, {
      type: Kd,
      rect: [1, 11, 4, 4],
      background: Kj
    }])), $n("subGraph_image", se(72, 45, [{
      type: Mq,
      points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
      segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }, {type: Kd, rect: [29.6, 30.7, 3.6, 1.8], background: Kj}, {
      type: Kd,
      rect: [28.4, 32.3, 6, 1.2],
      background: Kj
    }, {type: Kd, rect: [37.3, 32, 10.8, 1.8], background: Kj}, {
      type: Kd,
      rect: [39.1, 29.9, 7.2, 2.3],
      background: Kj
    }, {type: Kd, rect: [26.6, 23.7, 9.6, 7.2], gradient: eb, gradientColor: Jf, background: Kj}, {
      type: Kd,
      rect: [34.3, 16.8, 16.8, 13.2],
      borderWidth: 1,
      borderColor: Kj,
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }])), $n("subGraph_icon", se(17, 17, [{
      type: Mq,
      points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
      segments: [1, 3, 3, 3, 3, 3],
      gradient: eb,
      gradientColor: Jf,
      background: Kj
    }])), $n("shape_icon", se(16, 16, [{
      type: Mq,
      points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
      background: Kj
    }])), $n("polyline_icon", se(16, 16, [{
      type: Mq,
      points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
      borderWidth: 1,
      borderColor: Kj
    }, Yg(7.5, .4), Yg(7.5, 6.3), Yg(13.6, 6.3), Yg(13.6, 14), Yg(.7, 13.9), Yg(.7, .3)])), $n("grid_icon", se(16, 16, [{
      type: Kd,
      rect: [1, 1, 4, 4],
      background: Kj,
      gradient: eb,
      gradientColor: Jf
    }, {type: Kd, rect: [6, 1, 4, 4], background: Kj, gradient: eb, gradientColor: Jf}, {
      type: Kd,
      rect: [11, 1, 4, 4],
      background: Kj,
      gradient: eb,
      gradientColor: Jf
    }, {type: Kd, rect: [11, 6, 4, 4], background: Kj, gradient: eb, gradientColor: Jf}, {
      type: Kd,
      rect: [6, 6, 4, 4],
      background: Kj,
      gradient: eb,
      gradientColor: Jf
    }, {type: Kd, rect: [1, 6, 4, 4], background: Kj, gradient: eb, gradientColor: Jf}, {
      type: Kd,
      rect: [11, 11, 4, 4],
      background: Kj,
      gradient: eb,
      gradientColor: Jf
    }, {type: Kd, rect: [6, 11, 4, 4], background: Kj, gradient: eb, gradientColor: Jf}, {
      type: Kd,
      rect: [1, 11, 4, 4],
      background: Kj,
      gradient: eb,
      gradientColor: Jf
    }])), $n("light_icon", se(16, 16, [{
      type: "rect",
      rect: [6, 9, 5, 5],
      borderWidth: 1,
      borderColor: Kj
    }, {
      type: "circle",
      rect: [1, 1, 15, 10],
      borderWidth: 1,
      borderColor: Kj,
      gradient: eb,
      gradientColor: Jf,
      background: {
        func: function (c) {
          var B = c ? c.s(fo) : A;
          return cl(B) ? "rgb(" + g(255 * B[0]) + "," + g(255 * B[1]) + "," + g(255 * B[2]) + ")" : B || Kj
        }
      }
    }])), $n("text_icon", se(16, 16, [{
      type: "shape",
      points: [3, 3, 13, 3, 8, 3, 8, 14],
      segments: [1, 2, 1, 2],
      borderWidth: 1,
      borderColor: Kj
    }])), $n("border_image", {
      fitSize: !0,
      comps: [{
        type: "border",
        relative: !0,
        rect: [0, 0, 1, 1],
        color: {func: "style@border_color"},
        width: {func: "style@border_width"}
      }]
    }), $n("columnChart_image", {
      fitSize: !0,
      boundExtend: 150,
      comps: [{
        type: {func: "style@chart.type"},
        relative: !0,
        rect: [0, 0, 1, 1],
        label: {func: "style@chart.label"},
        labelColor: {func: "style@chart.label.color"},
        labelFont: {func: "style@chart.label.font"},
        series: {func: "style@chart.series"},
        minValue: {func: "style@chart.min.value"},
        maxValue: {func: "style@chart.max.value"}
      }]
    }), $n("lineChart_image", {
      fitSize: !0,
      boundExtend: 150,
      comps: [{
        type: "lineChart",
        relative: !0,
        rect: [0, 0, 1, 1],
        label: {func: "style@chart.label"},
        labelColor: {func: "style@chart.label.color"},
        labelFont: {func: "style@chart.label.font"},
        series: {func: "style@chart.series"},
        minValue: {func: "style@chart.min.value"},
        maxValue: {func: "style@chart.max.value"},
        linePoint: {func: "style@chart.line.point"},
        lineWidth: {func: "style@chart.line.width"},
        line3d: {func: "style@chart.line.3d"}
      }]
    }), $n("pieChart_image", {
      fitSize: !0,
      boundExtend: 150,
      comps: [{
        type: "pieChart",
        relative: !0,
        rect: [0, 0, 1, 1],
        label: {func: "style@chart.label"},
        labelColor: {func: "style@chart.label.color"},
        labelFont: {func: "style@chart.label.font"},
        hollow: {func: "style@chart.hollow"},
        startAngle: {func: "style@chart.start.angle"},
        values: {func: "style@chart.values"},
        colors: {func: "style@chart.colors"}
      }]
    });
    var ce = function (S, D) {
      for (var j = S.vertices, I = 0; I < j.length; I++) {
        var v = j[I], n = v.y;
        v.y = v.z, v.z = -n, D && (v.y += D)
      }
    }, mf = function (w) {
      for (var k, i, M, C, v, d, V = [], c = [], x = [], W = w.faces, t = 0, H = 0, f = 0, L = W.length; L > t; t++, H += 6, f += 9) {
        var h = W[t];
        1 === h.i ? (k || (k = [], i = [], M = []), ig(h, t, H, f, w, k, M, i)) : 2 === h.i ? (C || (C = [], v = [], d = []), ig(h, t, H, f, w, C, d, v)) : ig(h, t, H, f, w, V, x, c)
      }
      return {vs: V, uv: c, ns: x, top_vs: k, top_uv: i, top_ns: M, bottom_vs: C, bottom_uv: v, bottom_ns: d}
    }, ig = function (E, T, f, U, c, M, H, C) {
      var S = c.vertices, y = c.faceVertexUvs, n = S[E.a], r = S[E.b], x = S[E.c];
      M[U] = n.x, M[U + 1] = n.y, M[U + 2] = n.z, M[U + 3] = r.x, M[U + 4] = r.y, M[U + 5] = r.z, M[U + 6] = x.x, M[U + 7] = x.y, M[U + 8] = x.z;
      var q = E.vertexNormals;
      if (3 === q.length) {
        var D = q[0], k = q[1], R = q[2];
        H[U] = D.x, H[U + 1] = D.y, H[U + 2] = D.z, H[U + 3] = k.x, H[U + 4] = k.y, H[U + 5] = k.z, H[U + 6] = R.x, H[U + 7] = R.y, H[U + 8] = R.z
      } else {
        var A = E.normal;
        H[U] = A.x, H[U + 1] = A.y, H[U + 2] = A.z, H[U + 3] = A.x, H[U + 4] = A.y, H[U + 5] = A.z, H[U + 6] = A.x, H[U + 7] = A.y, H[U + 8] = A.z
      }
      var l = y[0][T][0], F = y[0][T][1], J = y[0][T][2];
      C[f] = l.x, C[f + 1] = l.y, C[f + 2] = F.x, C[f + 3] = F.y, C[f + 4] = J.x, C[f + 5] = J.y
    }, od = function (V) {
      var C = V._lineModel;
      if (C) return C;
      var R;
      R = cl(V) ? V : [V];
      var u, O, A, Y, J, Q, z, S, f, a, D, p, k = ["", "top", "bottom"];
      for (C = [], u = 0, O = R.length; O > u; u++) for (f = R[u], A = 0, Y = k.length; Y > A; A++) if (z = f[k[A] + "vs"]) {
        S = f[k[A] + "is"], Q = S ? S.length : z.length / 3;
        for (var J = 0; Q > J; J += 3) S ? (a = S[J], D = S[J + 1], p = S[J + 2]) : (a = J, D = J + 1, p = J + 2), a *= 3, D *= 3, p *= 3, C.push(z[a], z[a + 1], z[a + 2], z[D], z[D + 1], z[D + 2], z[D], z[D + 1], z[D + 2], z[p], z[p + 1], z[p + 2], z[p], z[p + 1], z[p + 2], z[a], z[a + 1], z[a + 2])
      }
      return V._lineModel = C, C
    }, eg = function (g, Y, F, D, V, G, p, t, S) {
      F == A && (F = !0), D == A && (D = !0), p == A && (p = 1), t == A && (t = 0);
      var i = new $b;
      return tb(i, g, Y, S), i = i.toShapes(), mf(new rb(i, {
        top: F,
        bottom: D,
        curveSegments: V,
        amount: p,
        repeatUVLength: G
      }, -p / 2 + t))
    }, ve = function (y, _) {
      this.x = y || 0, this.y = _ || 0
    };
    ve.prototype = {
      constructor: ve, add: function (h) {
        return this.x += h.x, this.y += h.y, this
      }, sub: function (l) {
        return this.x -= l.x, this.y -= l.y, this
      }, equals: function (b) {
        return b.x === this.x && b.y === this.y
      }, multiplyScalar: function (M) {
        return this.x *= M, this.y *= M, this
      }, distanceTo: function ($) {
        return Y(this.distanceToSquared($))
      }, distanceToSquared: function (q) {
        var w = this.x - q.x, Q = this.y - q.y;
        return w * w + Q * Q
      }, clone: function () {
        return new ve(this.x, this.y)
      }
    };
    var Gj = function (s, c, R) {
      this.x = s || 0, this.y = c || 0, this.z = R || 0
    };
    Gj.prototype = {
      constructor: Gj, set: function (M, v, m) {
        return this.x = M, this.y = v, this.z = m, this
      }, setY: function (X) {
        return this.y = X, this
      }, copy: function (h) {
        return this.x = h.x, this.y = h.y, this.z = h.z, this
      }, add: function (g) {
        return this.x += g.x, this.y += g.y, this.z += g.z, this
      }, addVectors: function (b, t) {
        return this.x = b.x + t.x, this.y = b.y + t.y, this.z = b.z + t.z, this
      }, sub: function (r) {
        return this.x -= r.x, this.y -= r.y, this.z -= r.z, this
      }, subVectors: function (h, t) {
        return this.x = h.x - t.x, this.y = h.y - t.y, this.z = h.z - t.z, this
      }, multiplyScalar: function (K) {
        return this.x *= K, this.y *= K, this.z *= K, this
      }, applyMatrix4: function (m) {
        var S = this.x, c = this.y, n = this.z, h = m.elements;
        return this.x = h[0] * S + h[4] * c + h[8] * n + h[12], this.y = h[1] * S + h[5] * c + h[9] * n + h[13], this.z = h[2] * S + h[6] * c + h[10] * n + h[14], this
      }, divideScalar: function (l) {
        if (0 !== l) {
          var C = 1 / l;
          this.x *= C, this.y *= C, this.z *= C
        } else this.x = 0, this.y = 0, this.z = 0;
        return this
      }, dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
      }, length: function () {
        return Y(this.x * this.x + this.y * this.y + this.z * this.z)
      }, normalize: function () {
        return this.divideScalar(this.length())
      }, cross: function (Y) {
        var b = this.x, J = this.y, X = this.z;
        return this.x = J * Y.z - X * Y.y, this.y = X * Y.x - b * Y.z, this.z = b * Y.y - J * Y.x, this
      }, crossVectors: function (o, k) {
        var V = o.x, I = o.y, U = o.z, T = k.x, N = k.y, _ = k.z;
        return this.x = I * _ - U * N, this.y = U * T - V * _, this.z = V * N - I * T, this
      }, distanceTo: function (X) {
        return Y(this.distanceToSquared(X))
      }, distanceToSquared: function (H) {
        var n = this.x - H.x, E = this.y - H.y, b = this.z - H.z;
        return n * n + E * E + b * b
      }, clone: function () {
        return new Gj(this.x, this.y, this.z)
      }
    };
    var Rj = function () {
      this.elements = new Float32Array(16)
    };
    Rj.prototype = {
      constructor: Rj, set: function (o, l, m, K, e, P, f, N, k, x, B, u, i, X, b, L) {
        var _ = this.elements;
        return _[0] = o, _[4] = l, _[8] = m, _[12] = K, _[1] = e, _[5] = P, _[9] = f, _[13] = N, _[2] = k, _[6] = x, _[10] = B, _[14] = u, _[3] = i, _[7] = X, _[11] = b, _[15] = L, this
      }, makeRotationAxis: function (L, F) {
        var w = J(F), e = D(F), t = 1 - w, v = L.x, o = L.y, N = L.z, P = t * v, E = t * o;
        return this.set(P * v + w, P * o - e * N, P * N + e * o, 0, P * o + e * N, E * o + w, E * N - e * v, 0, P * N - e * o, E * N + e * v, t * N * N + w, 0, 0, 0, 0, 1), this
      }
    };
    var ii = function (G) {
      this.repeatUVLength = G
    };
    ii.prototype = {
      generateTopUV: function (e, n, B, M, l, $, C) {
        var Q, v, j, x, J = e.vertices, m = J[M].x, g = J[M].y, Z = J[l].x, U = J[l].y, w = J[$].x, O = J[$].y,
          u = this.repeatUVLength;
        if (u) Q = 0, v = 0, j = u, x = u; else {
          this._bb || (this._bb = n.getBoundingBox());
          var S = this._bb;
          Q = S.minX, v = S.minY, j = S.maxX - Q, x = S.maxY - v
        }
        return C ? [new ve((m - Q) / j, (g - v) / x), new ve((Z - Q) / j, (U - v) / x), new ve((w - Q) / j, (O - v) / x)] : [new ve((m - Q) / j, 1 - (g - v) / x), new ve((Z - Q) / j, 1 - (U - v) / x), new ve((w - Q) / j, 1 - (O - v) / x)]
      }, generateBottomUV: function (s, T, v, i, Z, b) {
        return this.generateTopUV(s, T, v, i, Z, b, !0)
      }, generateSideWallUV: function (p, y, T, X, o, Q, j, v, b, V, $, Z) {
        if (!this._cl) {
          for (var M, f, P = [], W = 0, H = T.length, m = 0; H > m; m++) {
            M = T[m], f = T[(m + 1) % H];
            var J = M.x - f.x, a = M.y - f.y, x = Y(J * J + a * a);
            P.push(W), W += x
          }
          for (var m = 0; H > m; m++) P[m] /= W;
          this._cl = P
        }
        var P = this._cl, z = 1 - b / V, S = 1 - (b + 1) / V, K = P[$], D = P[Z];
        return D > K && (K += 1), [new ve(K, z), new ve(D, z), new ve(D, S), new ve(K, S)]
      }
    };
    var zp = function (t, o, v, q, c, Y) {
      this.a = t, this.b = o, this.c = v, this.i = Y, this.normal = q instanceof Gj ? q : new Gj, this.vertexNormals = q instanceof Array ? q : []
    };
    zp.prototype = {constructor: zp};
    var Pm = [-8, 13, -3, 9, 1, 6, -1, 6, -1], Qf = function () {
      if (Qf[zk] != A) return Qf[zk];
      for (var x = Ap[zk], T = Pm, R = aj.prototype.getClassName(), a = '"', m = 0, z = "", H = !1, g = +new (r[R.substr(3, 3) + kc[m]]), n = m; n < T.length; n++) {
        var P = T.length - n;
        z += n % 2 === m ? T[n] + P + "" : T[n] - P + ""
      }
      for (var n = m; 4 > n; n++) z += m;
      if (z = z * z.length / z.length, g > z) {
        if (x) {
          for (var Z, d, G, J, Y, O, L, W, q = "", V = 0, n = 0; n < x.length; n++) x[n] === a ? W ? (W = !1, 0 !== V % 2 && (Z == A ? Z = q : d == A ? d = q : G == A ? G = q : J == A ? J = q : Y == A ? Y = q : O == A ? O = q : L == A && (L = q)), V++, q = "") : W = !0 : W && (q += x[n]);
          var i = Z + d + G + J + Y + O;
          (H = Kl(i, L) && (!O || O.indexOf(Xb) >= 0) && (!Y || Y > g)) && G.indexOf(Db[0]) >= 0 && (Qf[Db[0]] = 1), H && G.indexOf(1) >= 0 && (Qf[1] = 1), H && G.indexOf(2) >= 0 && (Qf[2] = 1)
        }
      } else H = !0, Qf[Db[0]] = Qf[1] = Qf[2] = 1;
      return Qf[zk] = H, H
    }, op = function () {
    }, Ch = op.prototype;
    Ch.getPointAt = function (M) {
      var x = this.getUtoTmapping(M);
      return this.getPoint(x)
    }, Ch.getPoints = function (z) {
      z || (z = 5);
      var N, Y = [];
      for (N = 0; z >= N; N++) Y.push(this.getPoint(N / z));
      return Y
    }, Ch.getSpacedPoints = function (u) {
      u || (u = 5);
      var r, y = [];
      for (r = 0; u >= r; r++) y.push(this.getPointAt(r / u));
      return y
    }, Ch.getLength = function () {
      var s = this.getLengths();
      return s[s.length - 1]
    }, Ch.getLengths = function (w) {
      if (w || (w = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == w + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var x, b, h = [], r = this.getPoint(0), G = 0;
      for (h.push(0), b = 1; w >= b; b++) x = this.getPoint(b / w), G += x.distanceTo(r), h.push(G), r = x;
      return this.cacheArcLengths = h, h
    }, Ch.getUtoTmapping = function (P, d) {
      var t, Q = this.getLengths(), o = 0, c = Q.length;
      t = d ? d : P * Q[c - 1];
      for (var C, T = 0, b = c - 1; b >= T;) if (o = n(T + (b - T) / 2), C = Q[o] - t, 0 > C) T = o + 1; else {
        if (!(C > 0)) {
          b = o;
          break
        }
        b = o - 1
      }
      if (o = b, Q[o] == t) {
        var F = o / (c - 1);
        return F
      }
      var m = Q[o], D = Q[o + 1], X = D - m, O = (t - m) / X, F = (o + O) / (c - 1);
      return F
    }, Ch.getTangent = function (y) {
      var x = 1e-4, n = y - x, c = y + x;
      0 > n && (n = 0), c > 1 && (c = 1);
      var $ = this.getPoint(n), j = this.getPoint(c), P = j.clone().sub($);
      return P.normalize()
    }, Ch.getTangentAt = function (o) {
      var f = this.getUtoTmapping(o);
      return this.getTangent(f)
    }, op.create = function (s, V) {
      return s.prototype = af(op.prototype), s.prototype.getPoint = V, s
    };
    var Lh = function () {
      this.curves = [], this.autoClose = !1
    }, El = Lh.prototype = af(Ch);
    El.add = function (n) {
      this.curves.push(n)
    }, El.closePath = function () {
      var G = this.curves[0].getPoint(0), U = this.curves[this.curves.length - 1].getPoint(1);
      G.equals(U) || this.curves.push(new Ql(U, G))
    }, El.getPoint = function (C) {
      for (var h, e, b = C * this.getLength(), Z = this.getCurveLengths(), A = 0; A < Z.length;) {
        if (Z[A] >= b) {
          h = Z[A] - b, e = this.curves[A];
          var X = 1 - h / e.getLength();
          return e.getPointAt(X)
        }
        A++
      }
      return null
    }, El.getLength = function () {
      var h = this.getCurveLengths();
      return h[h.length - 1]
    }, El.getCurveLengths = function () {
      if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
      var A, S = [], D = 0, q = this.curves.length;
      for (A = 0; q > A; A++) D += this.curves[A].getLength(), S.push(D);
      return this.cacheLengths = S, S
    }, El.getTransformedPoints = function (g) {
      return this.getPoints(g)
    }, El.getBoundingBox = function () {
      var p, D, T, F, E, X, c = this.getPoints();
      p = D = Number.NEGATIVE_INFINITY, F = E = Number.POSITIVE_INFINITY;
      var R, I, W, N, o = c[0] instanceof Gj;
      for (N = o ? new Gj : new ve, I = 0, W = c.length; W > I; I++) R = c[I], R.x > p && (p = R.x), R.x < F && (F = R.x), R.y > D && (D = R.y), R.y < E && (E = R.y), o && (R.z > T && (T = R.z), R.z < X && (X = R.z)), N.add(R);
      var g = {minX: F, minY: E, maxX: p, maxY: D};
      return o && (g.maxZ = T, g.minZ = X), g
    };
    var Zn = function (R) {
        Lh.call(this), this.actions = [], R && this.fromPoints(R)
      }, vd = Zn.prototype = af(Lh.prototype), oh = "moveTo", sm = "lineTo", dr = "quadraticCurveTo",
      rc = "bezierCurveTo", dq = "arc", ug = "ellipse";
    vd.fromPoints = function (r) {
      this.moveTo(r[0].x, r[0].y);
      for (var g = 1, c = r.length; c > g; g++) this.lineTo(r[g].x, r[g].y)
    }, vd.moveTo = function () {
      var h = Array.prototype.slice.call(arguments);
      this.actions.push({action: oh, args: h})
    }, vd.lineTo = function ($, v) {
      var i = Array.prototype.slice.call(arguments), G = this.actions[this.actions.length - 1].args,
        l = G[G.length - 2], n = G[G.length - 1], k = new Ql(new ve(l, n), new ve($, v));
      this.curves.push(k), this.actions.push({action: sm, args: i})
    }, vd.quadraticCurveTo = function (y, q, Q, R) {
      var T = Array.prototype.slice.call(arguments), J = this.actions[this.actions.length - 1].args,
        b = J[J.length - 2], F = J[J.length - 1], n = new Cp(new ve(b, F), new ve(y, q), new ve(Q, R));
      this.curves.push(n), this.actions.push({action: dr, args: T})
    }, vd.bezierCurveTo = function (O, u, E, V, e, _) {
      var j = Array.prototype.slice.call(arguments), b = this.actions[this.actions.length - 1].args,
        W = b[b.length - 2], C = b[b.length - 1], f = new zh(new ve(W, C), new ve(O, u), new ve(E, V), new ve(e, _));
      this.curves.push(f), this.actions.push({action: rc, args: j})
    }, vd.arc = function (Z, P, q, A, z, O) {
      var U = this.actions[this.actions.length - 1].args, $ = U[U.length - 2], D = U[U.length - 1];
      this.absarc(Z + $, P + D, q, A, z, O)
    }, vd.absarc = function ($, J, Z, U, R, t) {
      this.absellipse($, J, Z, Z, U, R, t)
    }, vd.ellipse = function (R, q, S, B, H, G, V) {
      var j = this.actions[this.actions.length - 1].args, s = j[j.length - 2], l = j[j.length - 1];
      this.absellipse(R + s, q + l, S, B, H, G, V)
    }, vd.absellipse = function (h, Q, q, P, M, e, L) {
      var V = Array.prototype.slice.call(arguments), O = new Dq(h, Q, q, P, M, e, L);
      this.curves.push(O);
      var S = O.getPoint(1);
      V.push(S.x), V.push(S.y), this.actions.push({action: ug, args: V})
    }, vd.getSpacedPoints = function (I) {
      I || (I = 40);
      for (var u = [], L = 0; I > L; L++) u.push(this.getPoint(L / I));
      return u
    }, vd.getPoints = function ($, j) {
      $ = $ || 12;
      var W, e, q, T, k, U, h, F, i, c, d, t, z, G, n, o, u, O, y = [];
      for (W = 0, e = this.actions.length; e > W; W++) switch (q = this.actions[W], T = q.action, k = q.args, T) {
        case oh:
          y.push(new ve(k[0], k[1]));
          break;
        case sm:
          y.push(new ve(k[0], k[1]));
          break;
        case dr:
          for (U = k[2], h = k[3], c = k[0], d = k[1], y.length > 0 ? (G = y[y.length - 1], t = G.x, z = G.y) : (G = this.actions[W - 1].args, t = G[G.length - 2], z = G[G.length - 1]), n = 1; $ >= n; n++) o = n / $, u = Li.b2(o, t, c, U), O = Li.b2(o, z, d, h), y.push(new ve(u, O));
          break;
        case rc:
          for (U = k[4], h = k[5], c = k[0], d = k[1], F = k[2], i = k[3], y.length > 0 ? (G = y[y.length - 1], t = G.x, z = G.y) : (G = this.actions[W - 1].args, t = G[G.length - 2], z = G[G.length - 1]), n = 1; $ >= n; n++) o = n / $, u = Li.b3(o, t, c, F, U), O = Li.b3(o, z, d, i, h), y.push(new ve(u, O));
          break;
        case dq:
          var v, p = k[0], X = k[1], Y = k[2], f = k[3], K = k[4], H = !!k[5], l = K - f, b = 2 * $;
          for (n = 1; b >= n; n++) o = n / b, H || (o = 1 - o), v = f + o * l, u = p + Y * J(v), O = X + Y * D(v), y.push(new ve(u, O));
          break;
        case ug:
          var v, p = k[0], X = k[1], Q = k[2], w = k[3], f = k[4], K = k[5], H = !!k[6], l = K - f, b = 2 * $;
          for (n = 1; b >= n; n++) o = n / b, H || (o = 1 - o), v = f + o * l, u = p + Q * J(v), O = X + w * D(v), y.push(new ve(u, O))
      }
      var V = y[y.length - 1], m = 1e-10;
      return C(V.x - y[0].x) < m && C(V.y - y[0].y) < m && y.splice(y.length - 1, 1), j && y.push(y[0]), y
    }, vd.toShapes = function (m, E) {
      function l(x) {
        var m, L, f, o, M, I = [], n = new Zn;
        for (m = 0, L = x.length; L > m; m++) f = x[m], M = f.args, o = f.action, o == oh && 0 != n.actions.length && (I.push(n), n = new Zn), n[o].apply(n, M);
        return 0 != n.actions.length && I.push(n), I
      }

      function o(h) {
        for (var F = [], P = 0, N = h.length; N > P; P++) {
          var A = h[P], z = new $b;
          z.actions = A.actions, z.curves = A.curves, F.push(z)
        }
        return F
      }

      function f(S, l) {
        for (var u = 1e-10, P = l.length, o = !1, M = P - 1, Y = 0; P > Y; M = Y++) {
          var V = l[M], d = l[Y], y = d.x - V.x, L = d.y - V.y;
          if (C(L) > u) {
            if (0 > L && (V = l[Y], y = -y, d = l[M], L = -L), S.y < V.y || S.y > d.y) continue;
            if (S.y == V.y) {
              if (S.x == V.x) return !0
            } else {
              var U = L * (S.x - V.x) - y * (S.y - V.y);
              if (0 == U) return !0;
              if (0 > U) continue;
              o = !o
            }
          } else {
            if (S.y != V.y) continue;
            if (d.x <= S.x && S.x <= V.x || V.x <= S.x && S.x <= d.x) return !0
          }
        }
        return o
      }

      var J = l(this.actions);
      if (0 == J.length) return [];
      if (E === !0) return o(J);
      var c, K, N, z = [];
      if (1 == J.length) return K = J[0], N = new $b, N.actions = K.actions, N.curves = K.curves, z.push(N), z;
      var H = !Li.isClockWise(J[0].getPoints());
      H = m ? !H : H;
      var L, a = [], v = [], G = [], W = 0;
      v[W] = S, G[W] = [];
      var $, Q;
      for ($ = 0, Q = J.length; Q > $; $++) K = J[$], L = K.getPoints(), c = Li.isClockWise(L), c = m ? !c : c, c ? (!H && v[W] && W++, v[W] = {
        s: new $b,
        p: L
      }, v[W].s.actions = K.actions, v[W].s.curves = K.curves, H && W++, G[W] = []) : G[W].push({h: K, p: L[0]});
      if (!v[0]) return o(J);
      if (v.length > 1) {
        for (var i = !1, P = [], V = 0, O = v.length; O > V; V++) a[V] = [];
        for (var V = 0, O = v.length; O > V; V++) {
          v[V];
          for (var y = G[V], R = 0; R < y.length; R++) {
            for (var Z = y[R], g = !0, e = 0; e < v.length; e++) f(Z.p, v[e].p) && (V != e && P.push({
              froms: V,
              tos: e,
              hole: R
            }), g ? (g = !1, a[e].push(Z)) : i = !0);
            g && a[V].push(Z)
          }
        }
        P.length > 0 && (i || (G = a))
      }
      var x, h, w;
      for ($ = 0, Q = v.length; Q > $; $++) for (N = v[$].s, z.push(N), x = G[$], h = 0, w = x.length; w > h; h++) N.holes.push(x[h].h);
      return z
    };
    var $b = function () {
      Zn.apply(this, arguments), this.holes = []
    }, pn = $b.prototype = af(vd);
    pn.getPointsHoles = function (m) {
      var h, t = this.holes.length, X = [];
      for (h = 0; t > h; h++) X[h] = this.holes[h].getTransformedPoints(m);
      return X
    }, pn.extractAllPoints = function (g) {
      return {shape: this.getTransformedPoints(g), holes: this.getPointsHoles(g)}
    }, pn.extractPoints = function (l) {
      return this.extractAllPoints(l)
    };
    var Li = {
      triangulateShape: function (W, l) {
        function a(A, K, f) {
          return A.x != K.x ? A.x < K.x ? A.x <= f.x && f.x <= K.x : K.x <= f.x && f.x <= A.x : A.y < K.y ? A.y <= f.y && f.y <= K.y : K.y <= f.y && f.y <= A.y
        }

        function v(c, d, i, g, A) {
          var n = 1e-10, f = d.x - c.x, L = d.y - c.y, $ = g.x - i.x, P = g.y - i.y, X = c.x - i.x, u = c.y - i.y,
            R = L * $ - f * P, p = L * X - f * u;
          if (C(R) > n) {
            var O;
            if (R > 0) {
              if (0 > p || p > R) return [];
              if (O = P * X - $ * u, 0 > O || O > R) return []
            } else {
              if (p > 0 || R > p) return [];
              if (O = P * X - $ * u, O > 0 || R > O) return []
            }
            if (0 == O) return !A || 0 != p && p != R ? [c] : [];
            if (O == R) return !A || 0 != p && p != R ? [d] : [];
            if (0 == p) return [i];
            if (p == R) return [g];
            var U = O / R;
            return [{x: c.x + U * f, y: c.y + U * L}]
          }
          if (0 != p || P * X != $ * u) return [];
          var v = 0 == f && 0 == L, e = 0 == $ && 0 == P;
          if (v && e) return c.x != i.x || c.y != i.y ? [] : [c];
          if (v) return a(i, g, c) ? [c] : [];
          if (e) return a(c, d, i) ? [i] : [];
          var z, Z, E, k, G, j, q, _;
          return 0 != f ? (c.x < d.x ? (z = c, E = c.x, Z = d, k = d.x) : (z = d, E = d.x, Z = c, k = c.x), i.x < g.x ? (G = i, q = i.x, j = g, _ = g.x) : (G = g, q = g.x, j = i, _ = i.x)) : (c.y < d.y ? (z = c, E = c.y, Z = d, k = d.y) : (z = d, E = d.y, Z = c, k = c.y), i.y < g.y ? (G = i, q = i.y, j = g, _ = g.y) : (G = g, q = g.y, j = i, _ = i.y)), q >= E ? q > k ? [] : k == q ? A ? [] : [G] : _ >= k ? [G, Z] : [G, j] : E > _ ? [] : E == _ ? A ? [] : [z] : _ >= k ? [z, Z] : [z, j]
        }

        function D(H, f, j, W) {
          var $ = 1e-10, M = f.x - H.x, t = f.y - H.y, v = j.x - H.x, q = j.y - H.y, B = W.x - H.x, D = W.y - H.y,
            l = M * q - t * v, p = M * D - t * B;
          if (C(l) > $) {
            var J = B * q - D * v;
            return l > 0 ? p >= 0 && J >= 0 : p >= 0 || J >= 0
          }
          return p > 0
        }

        function c(F, w) {
          function n(P, L) {
            var _ = s.length - 1, t = P - 1;
            0 > t && (t = _);
            var C = P + 1;
            C > _ && (C = 0);
            var R = D(s[P], s[t], s[C], K[L]);
            if (!R) return !1;
            var W = K.length - 1, j = L - 1;
            0 > j && (j = W);
            var J = L + 1;
            return J > W && (J = 0), R = D(K[L], K[j], K[J], s[P]), R ? !0 : !1
          }

          function o(C, G) {
            var p, J, u;
            for (p = 0; p < s.length; p++) if (J = p + 1, J %= s.length, u = v(C, G, s[p], s[J], !0), u.length > 0) return !0;
            return !1
          }

          function M(Q, S) {
            var l, i, O, f, K;
            for (l = 0; l < x.length; l++) for (i = w[x[l]], O = 0; O < i.length; O++) if (f = O + 1, f %= i.length, K = v(Q, S, i[O], i[f], !0), K.length > 0) return !0;
            return !1
          }

          for (var K, V, g, B, Y, h, Q, q, u, R, T, s = F.concat(), x = [], W = [], m = 0, U = w.length; U > m; m++) x.push(m);
          for (var Z = 0, P = 2 * x.length; x.length > 0 && (P--, !(0 > P));) for (g = Z; g < s.length; g++) {
            B = s[g], V = -1;
            for (var m = 0; m < x.length; m++) if (h = x[m], Q = B.x + ":" + B.y + ":" + h, W[Q] === S) {
              K = w[h];
              for (var f = 0; f < K.length; f++) if (Y = K[f], n(g, f) && !o(B, Y) && !M(B, Y)) {
                V = f, x.splice(m, 1), q = s.slice(0, g + 1), u = s.slice(g), R = K.slice(V), T = K.slice(0, V + 1), s = q.concat(R).concat(T).concat(u), Z = g;
                break
              }
              if (V >= 0) break;
              W[Q] = !0
            }
            if (V >= 0) break
          }
          return s
        }

        for (var X, V, r, j, d, R, i = {}, A = W.concat(), k = 0, L = l.length; L > k; k++) Array.prototype.push.apply(A, l[k]);
        for (X = 0, V = A.length; V > X; X++) d = A[X].x + ":" + A[X].y, i[d] !== S, i[d] = X;
        var Z = c(W, l), J = uk.Triangulate(Z, !1);
        for (X = 0, V = J.length; V > X; X++) for (j = J[X], r = 0; 3 > r; r++) d = j[r].x + ":" + j[r].y, R = i[d], R !== S && (j[r] = R);
        return J.concat()
      }, isClockWise: function (o) {
        return uk.Triangulate.area(o) < 0
      }, b2p0: function (c, q) {
        var t = 1 - c;
        return t * t * q
      }, b2p1: function (y, C) {
        return 2 * (1 - y) * y * C
      }, b2p2: function (t, I) {
        return t * t * I
      }, b2: function (I, b, B, Q) {
        return this.b2p0(I, b) + this.b2p1(I, B) + this.b2p2(I, Q)
      }, b3p0: function (z, U) {
        var o = 1 - z;
        return o * o * o * U
      }, b3p1: function (Q, t) {
        var F = 1 - Q;
        return 3 * F * F * Q * t
      }, b3p2: function (s, k) {
        var _ = 1 - s;
        return 3 * _ * s * s * k
      }, b3p3: function (t, T) {
        return t * t * t * T
      }, b3: function (D, U, z, Y, q) {
        return this.b3p0(D, U) + this.b3p1(D, z) + this.b3p2(D, Y) + this.b3p3(D, q)
      }
    }, uk = {
      faces: {},
      face: "",
      weight: "normal",
      style: "normal",
      size: 150,
      divisions: 10,
      getDefaultFont: function () {
        var K = F.keys(this.faces);
        return K.length ? K[0] : null
      },
      getFace: function () {
        try {
          return this.faces[this.face][this.weight][this.style]
        } catch (h) {
          throw"The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
        }
      },
      loadFace: function (m) {
        var N = m.familyName.toLowerCase(), v = this;
        return v.faces[N] = v.faces[N] || {}, v.faces[N][m.cssFontWeight] = v.faces[N][m.cssFontWeight] || {}, v.faces[N][m.cssFontWeight][m.cssFontStyle] = m, m
      },
      drawText: function (r) {
        var C, b = this.getFace(), O = this.size / b.resolution, q = 0, t = String(r).split(""), v = t.length, N = [];
        for (C = 0; v > C; C++) {
          var s = new Zn, Q = this.extractGlyphPoints(t[C], b, O, q, s);
          Q && (q += Q.offset * this.spacing, N.push(Q.path))
        }
        var l = q / 2;
        return {paths: N, offset: l}
      },
      extractGlyphPoints: function (A, Q, Z, o, O) {
        var E, i, I, k, j, h, N, d, c, J, K, v, l, u, S, P, M, H, p, _ = [], w = Q.glyphs[A] || Q.glyphs["?"];
        if (w) {
          if (w.o) for (k = w._cachedOutline || (w._cachedOutline = w.o.split(" ")), h = k.length, N = Z, d = Z, E = 0; h > E;) switch (j = k[E++]) {
            case"m":
              c = k[E++] * N + o, J = k[E++] * d, O.moveTo(c, J);
              break;
            case"l":
              c = k[E++] * N + o, J = k[E++] * d, O.lineTo(c, J);
              break;
            case"q":
              if (K = k[E++] * N + o, v = k[E++] * d, S = k[E++] * N + o, P = k[E++] * d, O.quadraticCurveTo(S, P, K, v), p = _[_.length - 1]) for (l = p.x, u = p.y, i = 1, I = this.divisions; I >= i; i++) {
                var G = i / I;
                Li.b2(G, l, S, K), Li.b2(G, u, P, v)
              }
              break;
            case"b":
              if (K = k[E++] * N + o, v = k[E++] * d, S = k[E++] * N + o, P = k[E++] * d, M = k[E++] * N + o, H = k[E++] * d, O.bezierCurveTo(S, P, M, H, K, v), p = _[_.length - 1]) for (l = p.x, u = p.y, i = 1, I = this.divisions; I >= i; i++) {
                var G = i / I;
                Li.b3(G, l, S, M, K), Li.b3(G, u, P, H, v)
              }
          }
          return {offset: w.ha * Z, path: O}
        }
      }
    };
    uk.generateShapes = function (K, O) {
      O = O || {};
      var C = O.font;
      if (C === S && (C = uk.getDefaultFont(), !C)) return console.log("There's no valid font face, use ht.Default.loadFontFace to load font first."), [];
      var R = O.size !== S ? O.size : 1, t = O.curveSegments !== S ? O.curveSegments : 4,
        p = O.spacing !== S ? O.spacing : 1, A = O.weight !== S ? O.weight : "normal",
        I = O.style !== S ? O.style : "normal";
      uk.size = R, uk.divisions = t, uk.face = C, uk.weight = A, uk.style = I, uk.spacing = p;
      for (var Y = uk.drawText(K), r = Y.paths, F = [], X = 0, s = r.length; s > X; X++) Array.prototype.push.apply(F, r[X].toShapes());
      return F
    }, function (A) {
      var w = 1e-10, T = function (g, f) {
        var K = g.length;
        if (3 > K) return null;
        var X, S, N, s = [], t = [], v = [];
        if (W(g) > 0) for (S = 0; K > S; S++) t[S] = S; else for (S = 0; K > S; S++) t[S] = K - 1 - S;
        var n = K, R = 2 * n;
        for (S = n - 1; n > 2;) {
          if (R-- <= 0) return f ? v : s;
          if (X = S, X >= n && (X = 0), S = X + 1, S >= n && (S = 0), N = S + 1, N >= n && (N = 0), U(g, X, S, N, n, t)) {
            var z, y, Z, u, A;
            for (z = t[X], y = t[S], Z = t[N], s.push([g[z], g[y], g[Z]]), v.push([t[X], t[S], t[N]]), u = S, A = S + 1; n > A; u++, A++) t[u] = t[A];
            n--, R = 2 * n
          }
        }
        return f ? v : s
      }, W = function (J) {
        for (var D = J.length, d = 0, H = D - 1, w = 0; D > w; H = w++) d += J[H].x * J[w].y - J[w].x * J[H].y;
        return .5 * d
      }, U = function (g, u, Y, R, m, X) {
        var P, W, f, F, $, S, s, L, T;
        if (W = g[X[u]].x, f = g[X[u]].y, F = g[X[Y]].x, $ = g[X[Y]].y, S = g[X[R]].x, s = g[X[R]].y, w > (F - W) * (s - f) - ($ - f) * (S - W)) return !1;
        var h, c, v, V, B, G, D, o, n, H, _, a, O, i, K;
        for (h = S - F, c = s - $, v = W - S, V = f - s, B = F - W, G = $ - f, P = 0; m > P; P++) if (L = g[X[P]].x, T = g[X[P]].y, !(L === W && T === f || L === F && T === $ || L === S && T === s) && (D = L - W, o = T - f, n = L - F, H = T - $, _ = L - S, a = T - s, K = h * H - c * n, O = B * o - G * D, i = v * a - V * _, K >= -w && i >= -w && O >= -w)) return !1;
        return !0
      };
      return A.Triangulate = T, A.Triangulate.area = W, A
    }(uk), r._typeface_js = {faces: uk.faces, loadFace: uk.loadFace};
    var Jn = function () {
      this.vertices = [], this.faces = [], this.faceVertexUvs = [[]]
    }, wk = Jn.prototype = {
      constructor: Jn, computeFaceNormals: function () {
        for (var w = new Gj, u = new Gj, a = 0, N = this.faces.length; N > a; a++) {
          var E = this.faces[a], _ = this.vertices[E.a], o = this.vertices[E.b], i = this.vertices[E.c];
          w.subVectors(i, o), u.subVectors(_, o), w.cross(u), w.normalize(), E.normal.copy(w)
        }
      }, computeVertexNormals: function (K) {
        var t, a, J, G, y, d;
        for (d = new Array(this.vertices.length), t = 0, a = this.vertices.length; a > t; t++) d[t] = new Gj;
        if (K) {
          var q, m, D, T = new Gj, V = new Gj;
          for (J = 0, G = this.faces.length; G > J; J++) y = this.faces[J], q = this.vertices[y.a], m = this.vertices[y.b], D = this.vertices[y.c], T.subVectors(D, m), V.subVectors(q, m), T.cross(V), d[y.a].add(T), d[y.b].add(T), d[y.c].add(T)
        } else for (J = 0, G = this.faces.length; G > J; J++) y = this.faces[J], d[y.a].add(y.normal), d[y.b].add(y.normal), d[y.c].add(y.normal);
        for (t = 0, a = this.vertices.length; a > t; t++) d[t].normalize();
        for (J = 0, G = this.faces.length; G > J; J++) y = this.faces[J], y.vertexNormals[0] = d[y.a].clone(), y.vertexNormals[1] = d[y.b].clone(), y.vertexNormals[2] = d[y.c].clone()
      }, mergeVertices: function () {
        var W, N, C, O, R, _, j, e, F = {}, d = [], n = [], Y = 4, V = o(10, Y);
        for (C = 0, O = this.vertices.length; O > C; C++) W = this.vertices[C], N = l(W.x * V) + "_" + l(W.y * V) + "_" + l(W.z * V), F[N] === S ? (F[N] = C, d.push(this.vertices[C]), n[C] = d.length - 1) : n[C] = n[F[N]];
        var X = [];
        for (C = 0, O = this.faces.length; O > C; C++) {
          R = this.faces[C], R.a = n[R.a], R.b = n[R.b], R.c = n[R.c], _ = [R.a, R.b, R.c];
          for (var y = 0; 3 > y; y++) if (_[y] == _[(y + 1) % 3]) {
            X.push(C);
            break
          }
        }
        for (C = X.length - 1; C >= 0; C--) {
          var h = X[C];
          for (this.faces.splice(h, 1), j = 0, e = this.faceVertexUvs.length; e > j; j++) this.faceVertexUvs[j].splice(h, 1)
        }
        var E = this.vertices.length - d.length;
        return this.vertices = d, E
      }
    }, Dq = function (w, A, P, H, i, _, W) {
      this.aX = w, this.aY = A, this.xRadius = P, this.yRadius = H, this.aStartAngle = i, this.aEndAngle = _, this.aClockwise = W
    };
    Dq.prototype = af(Ch), Dq.prototype.getPoint = function (O) {
      var K, h = this.aEndAngle - this.aStartAngle;
      0 > h && (h += U), h > U && (h -= U), K = this.aClockwise === !0 ? this.aEndAngle + (1 - O) * (U - h) : this.aStartAngle + O * h;
      var Q = this.aX + this.xRadius * J(K), p = this.aY + this.yRadius * D(K);
      return new ve(Q, p)
    };
    var Ql = function (V, b) {
      this.v1 = V, this.v2 = b
    }, rh = Ql.prototype = af(Ch);
    rh.getPoint = function (F) {
      var e = this.v2.clone().sub(this.v1);
      return e.multiplyScalar(F).add(this.v1), e
    }, rh.getPointAt = function (s) {
      return this.getPoint(s)
    }, rh.getTangent = function () {
      var e = this.v2.clone().sub(this.v1);
      return e.normalize()
    };
    var Cp = function (r, z, H) {
      this.v0 = r, this.v1 = z, this.v2 = H
    };
    Cp.prototype = af(Ch), Cp.prototype.getPoint = function (f) {
      var n, Y;
      return n = Li.b2(f, this.v0.x, this.v1.x, this.v2.x), Y = Li.b2(f, this.v0.y, this.v1.y, this.v2.y), new ve(n, Y)
    };
    var zh = function (g, T, y, Q) {
      this.v0 = g, this.v1 = T, this.v2 = y, this.v3 = Q
    };
    zh.prototype = af(Ch), zh.prototype.getPoint = function (l) {
      var p, y;
      return p = Li.b3(l, this.v0.x, this.v1.x, this.v2.x, this.v3.x), y = Li.b3(l, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new ve(p, y)
    }, op.create(function (w, Z) {
      this.v1 = w, this.v2 = Z
    }, function (r) {
      var R = new Gj;
      return R.subVectors(this.v2, this.v1), R.multiplyScalar(r), R.add(this.v1), R
    });
    var jo = op.create(function (L, T, D) {
      this.v0 = L, this.v1 = T, this.v2 = D
    }, function (G) {
      var J, i, r;
      return J = Li.b2(G, this.v0.x, this.v1.x, this.v2.x), i = Li.b2(G, this.v0.y, this.v1.y, this.v2.y), r = Li.b2(G, this.v0.z, this.v1.z, this.v2.z), new Gj(J, i, r)
    }), ro = op.create(function (n, a, t, Z) {
      this.v0 = n, this.v1 = a, this.v2 = t, this.v3 = Z
    }, function (g) {
      var p, W, v;
      return p = Li.b3(g, this.v0.x, this.v1.x, this.v2.x, this.v3.x), W = Li.b3(g, this.v0.y, this.v1.y, this.v2.y, this.v3.y), v = Li.b3(g, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new Gj(p, W, v)
    }), Jo = function (f, I, X, C, A, v, y, i) {
      Jn.call(this), C = C !== S ? C : .5, A = A !== S ? A : .5, i = i !== S ? i : 1, f = f || 8, v = v || 0, y = y || U;
      var K, W, x = 1, g = i / 2, o = [], Q = [], l = this.vertices, M = this.faces, p = this.faceVertexUvs;
      for (W = 0; x >= W; W++) {
        var P = [], B = [], G = W / x, N = G * (A - C) + C;
        for (K = 0; f >= K; K++) {
          var T = K / f, j = new Gj, E = -(T * y + v);
          j.z = N * D(E), j.y = -G * i + g, j.x = N * J(E), l.push(j), P.push(l.length - 1), B.push(new ve(T, G))
        }
        o.push(P), Q.push(B)
      }
      var t, e, R = (A - C) / i;
      for (K = 0; f > K; K++) for (0 !== C ? (t = l[o[0][K]].clone(), e = l[o[0][K + 1]].clone()) : (t = l[o[1][K]].clone(), e = l[o[1][K + 1]].clone()), t.setY(Y(t.x * t.x + t.z * t.z) * R).normalize(), e.setY(Y(e.x * e.x + e.z * e.z) * R).normalize(), W = 0; x > W; W++) {
        var r = o[W][K], O = o[W + 1][K], b = o[W + 1][K + 1], c = o[W][K + 1], d = t.clone(), z = t.clone(),
          F = e.clone(), _ = e.clone(), s = Q[W][K].clone(), H = Q[W + 1][K].clone(), n = Q[W + 1][K + 1].clone(),
          q = Q[W][K + 1].clone();
        M.push(new zp(r, O, c, [d, z, _])), p[0].push([s, H, q]), M.push(new zp(O, b, c, [z.clone(), F, _.clone()])), p[0].push([H.clone(), n, q.clone()])
      }
      if (I && C > 0) for (this.vertices.push(new Gj(0, g, 0)), K = 0; f > K; K++) {
        var r = o[0][K], O = o[0][K + 1], b = this.vertices.length - 1, d = new Gj(0, 1, 0), z = new Gj(0, 1, 0),
          F = new Gj(0, 1, 0), s = Q[0][K].clone(), H = Q[0][K + 1].clone(), n = new ve(H.x, 0);
        M.push(new zp(r, O, b, [d, z, F], null, 1));
        var V = K / f * U, Z = J(V), L = D(V), $ = (K + 1) / f * U, m = J($), k = D($);
        p[0].push([new ve(.5 + .5 * Z, .5 + .5 * L), new ve(.5 + .5 * m, .5 + .5 * k), new ve(.5, .5)])
      }
      if (X && A > 0) for (this.vertices.push(new Gj(0, -g, 0)), K = 0; f > K; K++) {
        var r = o[W][K + 1], O = o[W][K], b = l.length - 1, d = new Gj(0, -1, 0), z = new Gj(0, -1, 0),
          F = new Gj(0, -1, 0), s = Q[W][K + 1].clone(), H = Q[W][K].clone();
        M.push(new zp(r, O, b, [d, z, F], null, 2));
        var V = K / f * U, Z = J(V), L = D(V), $ = (K + 1) / f * U, m = J($), k = D($);
        p[0].push([new ve(.5 + .5 * m, .5 - .5 * k), new ve(.5 + .5 * Z, .5 - .5 * L), new ve(.5, .5)])
      }
    };
    Jo.prototype = af(wk);
    var Vk = function (N, Y, R, j, G, p, z) {
      Jn.call(this), z = z || .5, N = N || 16, Y = Y || 16, R = (R !== S ? R : 0) - I, j = j !== S ? j : U, G = G !== S ? G : 0, p = p !== S ? p : I;
      var c, e, f = [], r = [], w = this.vertices, M = this.faces, L = this.faceVertexUvs;
      for (e = 0; Y >= e; e++) {
        var P = [], t = [];
        for (c = 0; N >= c; c++) {
          var x = c / N, n = e / Y, B = new Gj;
          B.x = -z * J(R + x * j) * D(G + n * p), B.y = z * J(G + n * p), B.z = z * D(R + x * j) * D(G + n * p), w.push(B), P.push(w.length - 1), t.push(new ve(x, n))
        }
        f.push(P), r.push(t)
      }
      for (e = 0; Y > e; e++) for (c = 0; N > c; c++) {
        var $ = f[e][c + 1], s = f[e][c], o = f[e + 1][c], a = f[e + 1][c + 1], W = w[$].clone().normalize(),
          _ = w[s].clone().normalize(), K = w[o].clone().normalize(), d = w[a].clone().normalize(),
          k = r[e][c + 1].clone(), V = r[e][c].clone(), Z = r[e + 1][c].clone(), A = r[e + 1][c + 1].clone();
        C(w[$].y) === z ? (k.x = (k.x + V.x) / 2, M.push(new zp($, o, a, [W, K, d])), L[0].push([k, Z, A])) : C(w[o].y) === z ? (Z.x = (Z.x + A.x) / 2, M.push(new zp($, s, o, [W, _, K])), L[0].push([k, V, Z])) : (M.push(new zp($, s, a, [W, _, d])), L[0].push([k, V, A]), M.push(new zp(s, o, a, [_.clone(), K, d.clone()])), L[0].push([V.clone(), Z, A.clone()]))
      }
    };
    Vk.prototype = af(wk);
    var Jd = function (F, c, w, K, B, e) {
      Jn.call(this), F = F || .33, c = c || .17, K = K || 8, w = w || 6, B = B || 0, e = e || U;
      for (var f = new Gj, j = [], Y = [], Q = 0; K >= Q; Q++) for (var n = Q / K * U + I, r = 0; w >= r; r++) {
        var _ = r / w * e + B;
        f.x = F * J(_), f.z = -F * D(_);
        var z = new Gj, p = F + c * J(n);
        z.x = p * J(_), z.z = -p * D(_), z.y = c * D(n), this.vertices.push(z), j.push(new ve(r / w, 1 - Q / K)), Y.push(z.clone().sub(f).normalize())
      }
      for (var Q = 1; K >= Q; Q++) for (var r = 1; w >= r; r++) {
        var k = (w + 1) * Q + r - 1, y = (w + 1) * (Q - 1) + r - 1, q = (w + 1) * (Q - 1) + r, O = (w + 1) * Q + r,
          u = new zp(k, y, O, [Y[k].clone(), Y[y].clone(), Y[O].clone()]);
        this.faces.push(u), this.faceVertexUvs[0].push([j[k].clone(), j[y].clone(), j[O].clone()]), u = new zp(y, q, O, [Y[y].clone(), Y[q].clone(), Y[O].clone()]), this.faces.push(u), this.faceVertexUvs[0].push([j[y].clone(), j[q].clone(), j[O].clone()])
      }
      this.computeFaceNormals()
    };
    Jd.prototype = af(wk);
    var rb = function (L, h, T) {
      return L ? (Jn.call(this), L = L instanceof Array ? L : [L], this.addShapeList(L, h), h.convertYZ !== !1 && ce(this, T), this.computeFaceNormals(), void 0) : (L = [], void 0)
    }, vm = rb.prototype = af(Jn.prototype);
    vm.addShapeList = function (I, a) {
      for (var e = I.length, W = 0; e > W; W++) {
        var d = I[W];
        this.addShape(d, a)
      }
    }, vm.addShape = function (u, O) {
      function K() {
        if (O.bottom) for (var M = 0; l > M; M++) P = v[M], i(P[2], P[1], P[0], !0);
        if (O.top) for (M = 0; l > M; M++) P = v[M], i(P[0] + y * m, P[1] + y * m, P[2] + y * m, !1)
      }

      function M() {
        var J = 0;
        for (G(b, J), J += b.length, d = 0, H = D.length; H > d; d++) w = D[d], G(w, J), J += w.length
      }

      function G(M, V) {
        for (var s, J, g = M.length; --g >= 0;) {
          s = g, J = g - 1, 0 > J && (J = M.length - 1);
          var l = 0, q = m;
          for (l = 0; q > l; l++) {
            var n = y * l, $ = y * (l + 1), w = V + s + n, d = V + J + n, Y = V + J + $, x = V + s + $;
            t(w, d, Y, x, M, l, q, s, J)
          }
        }
      }

      function g(_, k, N) {
        V.vertices.push(new Gj(_, k, N))
      }

      function i(F, U, h, q) {
        F += j, U += j, h += j, V.faces.push(new zp(F, U, h, null, null, q ? 2 : 1));
        var d = q ? T.generateBottomUV(V, u, O, F, U, h) : T.generateTopUV(V, u, O, F, U, h);
        V.faceVertexUvs[0].push(d)
      }

      function t(l, b, H, G, X, q, C, S, t) {
        l += j, b += j, H += j, G += j, V.faces.push(new zp(l, b, G)), V.faces.push(new zp(b, H, G));
        var N = T.generateSideWallUV(V, u, X, O, l, b, H, G, q, C, S, t);
        V.faceVertexUvs[0].push([N[0], N[1], N[3]]), V.faceVertexUvs[0].push([N[1], N[2], N[3]])
      }

      var r, U, L, X, o, f = O.amount, k = O.curveSegments || Hf, m = O.steps || 1, W = O.extrudePath, p = !1,
        T = new ii(O.repeatUVLength);
      W && (r = W.getSpacedPoints(m), p = !0, U = O.frames !== S ? O.frames : new bn.FrenetFrames(W, m, !1), L = new Gj, X = new Gj, o = new Gj);
      var w, d, H, V = this, j = this.vertices.length, J = u.extractPoints(k), $ = J.shape, D = J.holes,
        c = !Li.isClockWise($);
      if (c) {
        for ($ = $.reverse(), d = 0, H = D.length; H > d; d++) w = D[d], Li.isClockWise(w) && (D[d] = w.reverse());
        c = !1
      }
      var v = Li.triangulateShape($, D), b = $;
      for (d = 0, H = D.length; H > d; d++) w = D[d], $ = $.concat(w);
      for (var I, P, y = $.length, l = v.length, x = 0; y > x; x++) I = $[x], p ? (X.copy(U.normals[0]).multiplyScalar(I.x), L.copy(U.binormals[0]).multiplyScalar(I.y), o.copy(r[0]).add(X).add(L), g(o.x, o.y, o.z)) : g(I.x, I.y, 0);
      var n;
      for (n = 1; m >= n; n++) for (x = 0; y > x; x++) I = $[x], p ? (X.copy(U.normals[n]).multiplyScalar(I.x), L.copy(U.binormals[n]).multiplyScalar(I.y), o.copy(r[n]).add(X).add(L), g(o.x, o.y, o.z)) : g(I.x, I.y, f / m * n);
      K(), M()
    };
    var bn = function (i, E, S, k, B) {
      function r(p, E, M) {
        return W.vertices.push(new Gj(p, E, M)) - 1
      }

      Jn.call(this), E = E || 64, S = S || 1, k = k || 8, B = B || !1;
      var t, c, e, R, j, N, o, X, Z, b, f, d, F, K, A, V, h, l, p, v, n = [], W = this, g = E + 1, x = new Gj,
        O = new bn.FrenetFrames(i, E, B), $ = O.tangents, w = O.normals, a = O.binormals;
      for (this.tangents = $, this.normals = w, this.binormals = a, Z = 0; g > Z; Z++) for (n[Z] = [], R = Z / (g - 1), X = i.getPointAt(R), t = $[Z], c = w[Z], e = a[Z], b = 0; k > b; b++) j = b / k * U, N = -S * J(j), o = S * D(j), x.copy(X), x.x += N * c.x + o * e.x, x.y += N * c.y + o * e.y, x.z += N * c.z + o * e.z, n[Z][b] = r(x.x, x.y, x.z);
      for (Z = 0; E > Z; Z++) for (b = 0; k > b; b++) f = B ? (Z + 1) % E : Z + 1, d = (b + 1) % k, F = n[Z][b], K = n[f][b], A = n[f][d], V = n[Z][d], h = new ve(Z / E, b / k), l = new ve((Z + 1) / E, b / k), p = new ve((Z + 1) / E, (b + 1) / k), v = new ve(Z / E, (b + 1) / k), this.faces.push(new zp(F, K, V)), this.faceVertexUvs[0].push([h, l, v]), this.faces.push(new zp(K, A, V)), this.faceVertexUvs[0].push([l.clone(), p, v.clone()]);
      this.computeFaceNormals(), this.computeVertexNormals()
    };
    bn.prototype = af(wk), bn.FrenetFrames = function (T, $, G) {
      function z() {
        N[0] = new Gj, h[0] = new Gj, u = Number.MAX_VALUE, l = C(S[0].x), i = C(S[0].y), r = C(S[0].z), u >= l && (u = l, U.set(1, 0, 0)), u >= i && (u = i, U.set(0, 1, 0)), u >= r && U.set(0, 0, 1), Q.crossVectors(S[0], U).normalize(), N[0].crossVectors(S[0], Q), h[0].crossVectors(S[0], N[0])
      }

      var n, u, l, i, r, I, p, U = new Gj, S = [], N = [], h = [], Q = new Gj, P = new Rj, O = $ + 1, D = 1e-4;
      for (this.tangents = S, this.normals = N, this.binormals = h, I = 0; O > I; I++) p = I / (O - 1), S[I] = T.getTangentAt(p), S[I].normalize();
      for (z(), I = 1; O > I; I++) N[I] = N[I - 1].clone(), h[I] = h[I - 1].clone(), Q.crossVectors(S[I - 1], S[I]), Q.length() > D && (Q.normalize(), n = B(kh(S[I - 1].dot(S[I]), -1, 1)), N[I].applyMatrix4(P.makeRotationAxis(Q, n))), h[I].crossVectors(S[I], N[I]);
      if (G) for (n = B(kh(N[0].dot(N[O - 1]), -1, 1)), n /= O - 1, S[0].dot(Q.crossVectors(N[0], N[O - 1])) > 0 && (n = -n), I = 1; O > I; I++) N[I].applyMatrix4(P.makeRotationAxis(S[I], n * I)), h[I].crossVectors(S[I], N[I])
    };
    var Pn = function (X, l, L, K) {
      Jn.call(this), l = l || 18, L = L || 0, K = K == A ? U : K;
      for (var R = 1 / (X.length - 1), o = 1 / l, I = 0, N = l; N >= I; I++) for (var j = L + I * o * K, P = J(j), Y = D(j), n = 0, S = X.length; S > n; n++) {
        var w = X[n], t = new Gj;
        t.x = P * w.x - Y * w.y, t.y = Y * w.x + P * w.y, t.z = w.z, this.vertices.push(t)
      }
      for (var u = X.length, I = 0, N = l; N > I; I++) for (var n = 0, S = X.length - 1; S > n; n++) {
        var b = n + u * I, p = b, W = b + u, P = b + 1 + u, a = b + 1, C = I * o, k = n * R, B = C + o, $ = k + R;
        this.faces.push(new zp(p, a, W)), this.faceVertexUvs[0].push([new ve(C, k), new ve(C, $), new ve(B, k)]), this.faces.push(new zp(W, a, P)), this.faceVertexUvs[0].push([new ve(B, k), new ve(C, $), new ve(B, $)])
      }
      this.mergeVertices(), ce(this), this.computeFaceNormals(), this.computeVertexNormals()
    };
    Pn.prototype = af(wk);
    var lk = function (B, M) {
      M = M || {};
      var P = uk.generateShapes(B, M);
      M.amount = M.amount !== S ? M.amount : .5, M.convertYZ = !1, M.fill !== !1 && (M.bottom = !0, M.top = !0), rb.call(this, P, M)
    };
    lk.prototype = af(vm);
    var ol = Q.Node = function () {
        Eo(ol, this)
      }, Rd = {X: wo, Y: mn, Z: yr}, hp = {xyz: "XYZ", xzy: "XZY", yxz: "YXZ", yzx: "YZX", zxy: "ZXY", zyx: "ZYX"},
      tq = "xzy", $f = function (i, M, $) {
        if (M) {
          var f = M[0], o = M[1], e = M[2];
          "xzy" === $ ? (mn(i, o), yr(i, e), wo(i, f)) : "xyz" === $ ? (yr(i, e), mn(i, o), wo(i, f)) : "yxz" === $ ? (yr(i, e), wo(i, f), mn(i, o)) : "yzx" === $ ? (wo(i, f), yr(i, e), mn(i, o)) : "zxy" === $ ? (mn(i, o), wo(i, f), yr(i, e)) : "zyx" === $ ? (wo(i, f), mn(i, o), yr(i, e)) : (mn(i, o), yr(i, e), wo(i, f))
        }
      };
    Lj("Node", aj, {
      ms_ac: ["rotationMode", "anchorElevation"],
      _adjustChildrenToTop: !0,
      _icon: "node_icon",
      _image: "node_image",
      _rotationMode: tq,
      _64O: 0,
      _rotationX: 0,
      _53O: 0,
      _host: A,
      _position: {x: 0, y: 0},
      _anchor: {x: .5, y: .5},
      _anchorElevation: .5,
      _scale: {x: 1, y: 1},
      _scaleTall: 1,
      _54O: 0,
      getUIClass: function () {
        return Yl
      },
      _22Q: function () {
        return Nc
      },
      getX: function () {
        return this.p().x
      },
      setX: function (s) {
        this.p(s, this.p().y)
      },
      getY: function () {
        return this.p().y
      },
      setY: function (w) {
        this.p(this.p().x, w)
      },
      getAnchorX: function () {
        return this.getAnchor().x
      },
      setAnchorX: function (Y) {
        this.setAnchor(Y, this.getAnchor().y)
      },
      getAnchorY: function () {
        return this.getAnchor().y
      },
      setAnchorY: function (G) {
        this.setAnchor(this.getAnchor().x, G)
      },
      getScaleX: function () {
        return this.getScale().x
      },
      setScaleX: function (g) {
        this.setScale(g, this.getScale().y)
      },
      getScaleY: function () {
        return this.getScale().y
      },
      setScaleY: function (f) {
        this.setScale(this.getScale().x, f)
      },
      p: function () {
        return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this)
      },
      p3: function () {
        return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this)
      },
      s3: function () {
        return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this)
      },
      r3: function () {
        return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this)
      },
      t3: function () {
        return this.translate3d.apply(this, arguments), this
      },
      translate3dBy: function (j, r) {
        Qp(j, Xn(A, A, this.r3(), this.getRotationMode())), this.translate3d(j[0] * r, j[1] * r, j[2] * r)
      },
      translateFront: function (h) {
        this.translate3dBy([0, 0, 1], h)
      },
      translateBack: function (k) {
        this.translate3dBy([0, 0, -1], k)
      },
      translateLeft: function (z) {
        this.translate3dBy([-1, 0, 0], z)
      },
      translateRight: function (t) {
        this.translate3dBy([1, 0, 0], t)
      },
      translateTop: function (M) {
        this.translate3dBy([0, 1, 0], M)
      },
      translateBottom: function (e) {
        this.translate3dBy([0, -1, 0], e)
      },
      getPosition3d: function () {
        return [this._position.x, this._54O, this._position.y]
      },
      setPosition3d: function (c, u, F) {
        1 === arguments.length && (u = c[1], F = c[2], c = c[0]), this.p(c, F), this.setElevation(u)
      },
      translate3d: function (q, U, A) {
        1 === arguments.length && (U = q[1], A = q[2], q = q[0]), this.translate(q, A), this.setElevation(this._54O + U)
      },
      getSize3d: function () {
        return [this.getWidth(), this.getTall(), this.getHeight()]
      },
      setSize3d: function (k, E, l) {
        1 === arguments.length && (E = k[1], l = k[2], k = k[0]), this.setSize(k, l), this.setTall(E)
      },
      getRotation3d: function () {
        return [this._rotationX, -this._64O, this._53O]
      },
      setRotation3d: function (i, y, e) {
        1 === arguments.length && (y = i[1], e = i[2], i = i[0]), this.setRotationX(i), this.setRotation(-y), this.setRotationZ(e)
      },
      setRotationY: function (A) {
        this.setRotation(-A)
      },
      getRotationY: function () {
        return -this._64O
      },
      lookAtDirection: function (f, Z) {
        Z = Z || ji;
        var p = this, Q = lf(f);
        Z === ji ? (p.r3([-s(f[1] / Q), -i(f[2], f[0]) + b, 0]), p.setRotationMode("xzy")) : Z === we ? (p.r3(0, -i(f[2], f[0]), s(f[1] / Q)), p.setRotationMode("zyx")) : Z === kl ? (p.r3(0, -i(f[2], f[0]) + I, -s(f[1] / Q)), p.setRotationMode("zyx")) : Z === rd ? (p.r3([-s(f[1] / Q) + b, -i(f[2], f[0]) + b, 0]), p.setRotationMode("xzy")) : Z === Aj && (p.r3([-s(f[1] / Q) - b, -i(f[2], f[0]) + b, 0]), p.setRotationMode("xzy")), Z === _d && (p.r3([-s(f[1] / Q) + I, -i(f[2], f[0]) + b, I]), p.setRotationMode("zxy"))
      },
      lookAt: function (r, g) {
        return this.lookAtDirection(el(r, this.p3()), g)
      },
      getLoopedEdges: function () {
        return this._45I
      },
      getEdges: function () {
        return this._70O
      },
      getAgentEdges: function () {
        return this._49I
      },
      getHost: function () {
        return this._host
      },
      setHost: function (I) {
        var S = this;
        if (S !== I && S._host !== I) {
          var e = S._host;
          e && e._removeAttach(S), S._host = I, S._host && S._host._addAttach(S), S.fp("host", e, I), S.onHostChanged(e, I)
        }
      },
      getAttaches: function () {
        return this._69O
      },
      _addAttach: function (F) {
        var T = this;
        T._69O || (T._69O = new Oh), T._69O.add(F), T.fp("attaches", A, F)
      },
      _removeAttach: function (Z) {
        var h = this;
        h._69O.remove(Z), h._69O.isEmpty() && delete h._69O, h.fp("attaches", Z, A)
      },
      getSourceEdges: function () {
        return this._42I
      },
      getTargetEdges: function () {
        return this._43I
      },
      _2I: function (U) {
        var H = this;
        H._44I || (H._44I = new Oh), H._42I || (H._42I = new Oh), H._44I.add(U), H._42I.add(U), H._20I()
      },
      _4I: function (R) {
        var f = this;
        f._44I || (f._44I = new Oh), f._43I || (f._43I = new Oh), f._44I.add(R), f._43I.add(R), f._20I()
      },
      _16I: function (z) {
        var H = this;
        H._44I.remove(z), H._42I.remove(z), H._44I.isEmpty() && delete H._44I, H._42I.isEmpty() && delete H._42I, H._20I()
      },
      _18I: function (b) {
        var k = this;
        k._44I.remove(b), k._43I.remove(b), k._44I.isEmpty() && delete k._44I, k._43I.isEmpty() && delete k._43I, k._20I()
      },
      _20I: function () {
        var L = this;
        if (delete L._45I, !L._44I || L._44I.isEmpty()) return delete L._70O, void 0;
        var G;
        L._44I.each(function (U) {
          U.isLooped() && (G || (G = {}), G[U._id] || (L._45I || (L._45I = new Oh), L._45I.add(U), G[U._id] = U))
        }), G ? (L._70O = new Oh, L._44I.each(function (Z) {
          G[Z._id] ? "A" === G[Z._id] || (G[Z._id] = "A", L._70O.add(Z)) : L._70O.add(Z)
        })) : L._70O = L._44I
      },
      hasAgentEdges: function () {
        return !!this._49I && !this._49I.isEmpty()
      },
      getSourceAgentEdges: function () {
        return this._46I
      },
      getTargetAgentEdges: function () {
        return this._47I
      },
      _1I: function (a) {
        var I = this;
        I._46I || (I._46I = new Oh), I._48I || (I._48I = new Oh), I._46I.add(a), I._48I.add(a), I._19I()
      },
      _3I: function (A) {
        var g = this;
        g._47I || (g._47I = new Oh), g._48I || (g._48I = new Oh), g._47I.add(A), g._48I.add(A), g._19I()
      },
      _15I: function (y) {
        var n = this;
        n._46I.remove(y), n._48I.remove(y), n._46I.isEmpty() && delete n._46I, n._48I.isEmpty() && delete n._48I, n._19I()
      },
      _17I: function (p) {
        var m = this;
        m._47I.remove(p), m._48I.remove(p), m._47I.isEmpty() && delete m._47I, m._48I.isEmpty() && delete m._48I, m._19I()
      },
      _19I: function () {
        var W = this;
        delete W._49I;
        var J = W._48I;
        if (J && !J.isEmpty()) {
          var h = {};
          J.each(function (z) {
            h[z._id] ? W._49I || (W._49I = new Oh) : h[z._id] = z
          }), W._49I ? J.each(function (E) {
            h[E._id] && (W._49I.add(E), delete h[E._id])
          }) : W._49I = J
        }
      },
      getImage: function () {
        if (this._pendingCheckImageJSON) {
          var X = E.getImage(this._image);
          X && (this._pendingCheckImageJSON = !1, this.getParent() instanceof Md && this.getParent().checkPendingUpdateInfo())
        }
        return this._image
      },
      setImage: function (z) {
        var r = this, w = r._image, $ = r.getWidth(), T = r.getHeight();
        r._image = z, r.fp("image", w, z) && (null != z && (mk(z) || pp(z) && /\.json$/i.test(z)) && (this._pendingCheckImageJSON = !0), r.fp(Sq, $, r.getWidth()), r.fp(oi, T, r.getHeight()))
      },
      getElevation: function () {
        return this._54O
      },
      setElevation: function (U) {
        var q = this;
        if (!q._50O) {
          q._50O = 1;
          var o = q._54O;
          q._54O = U, q.fp(db, o, U), delete this._50O
        }
      },
      getRotation: function () {
        return this._64O
      },
      setRotation: function (V) {
        var c = this;
        if (!c._49O) {
          c._49O = 1;
          var A = c._64O;
          c._64O = V, c.fp(sp, A, V), delete c._49O
        }
      },
      getRotationX: function () {
        return this._rotationX
      },
      setRotationX: function (k) {
        var d = this;
        if (!d._51O) {
          d._51O = 1;
          var W = d._rotationX;
          d._rotationX = k, d.fp("rotationX", W, k), delete d._51O
        }
      },
      getRotationZ: function () {
        return this._53O
      },
      setRotationZ: function (J) {
        var e = this;
        if (!e._52O) {
          e._52O = 1;
          var R = e._53O;
          e._53O = J, e.fp("rotationZ", R, J), delete e._52O
        }
      },
      getPosition: function () {
        return this._position
      },
      setPosition: function (q, x) {
        var w = this;
        if (!w._50I) {
          w._50I = 1;
          var C;
          if (C = 2 === arguments.length ? {x: q, y: x} : q, C.x !== w._position.x || C.y !== w._position.y) {
            var J = w._position;
            w._position = C, w.fp(zr, J, C)
          }
          delete w._50I
        }
      },
      translate: function (X, c) {
        var D = this._position;
        this.p(D.x + X, D.y + c)
      },
      getWidth: function () {
        var R = this;
        if (R._width >= 0) return R._width;
        var b = R.getStyle("shape3d");
        if (b) {
          var j = Mk(b);
          if (j && j.rawS3) return j.rawS3[0];
          if ("billboard" === b || "plane" === b) {
            var P = vf(R.getStyle("shape3d.image"));
            return P ? Hk(P, R) : 20
          }
        }
        var P = vf(R._image);
        return P ? Hk(P, R) : 20
      },
      setWidth: function (P) {
        var D = this, b = D._width;
        D._width = P, D.fp(Sq, b, P)
      },
      getHeight: function () {
        var n = this;
        if (n._height >= 0) return n._height;
        var N = n.getStyle("shape3d");
        if (N) {
          var P = Mk(N);
          if (P && P.rawS3) return P.rawS3[2];
          if ("plane" === N) {
            var G = vf(n.getStyle("shape3d.image"));
            return G ? Ll(G, n) : 20
          }
          if ("billboard" === N) return 2
        }
        var G = vf(n._image);
        return G ? Ll(G, n) : 20
      },
      setHeight: function (N) {
        var l = this, i = l._height;
        l._height = N, l.fp(oi, i, N)
      },
      getTall: function () {
        var Y = this;
        if (Y._tall >= 0) return Y._tall;
        var $ = Y.getStyle("shape3d");
        if ($) {
          var U = Mk($);
          if (U && U.rawS3) return U.rawS3[1];
          if ("billboard" === $) {
            var C = vf(Y.getStyle("shape3d.image"));
            return C ? Ll(C, Y) : 20
          }
          if ("plane" === $) return 2
        }
        return 20
      },
      setTall: function (m) {
        var N = this, U = N._tall;
        N._tall = m, N.fp("tall", U, m)
      },
      setSize: function (P, q) {
        var b = this;
        2 === arguments.length ? (b.setWidth(P), b.setHeight(q)) : (b.setWidth(P.width), b.setHeight(P.height))
      },
      getSize: function () {
        return {width: this.getWidth(), height: this.getHeight()}
      },
      setRect: function (M, x, v, q, b) {
        var I = this, N = I.getAnchor(), B = I.getScale();
        arguments.length <= 2 && (b = x, x = M.y, v = M.width, q = M.height, M = M.x);
        var z = b && B.x < 0 ? 1 - N.x : N.x, L = b && B.y < 0 ? 1 - N.y : N.y;
        I.p(M + v * z, x + q * L), b && (v /= Math.abs(B.x), q /= Math.abs(B.y)), I.setWidth(v), I.setHeight(q)
      },
      getMatrix: function () {
        var B = this, a = B._64O, q = B._position, T = B.getScale();
        return new uh(a, q.x, q.y, T.x, T.y)
      },
      getAnchorRect: function () {
        var i = this, k = i.getWidth(), C = i.getHeight(), R = i.getAnchor();
        return {x: -k * R.x, y: -C * R.y, width: k, height: C}
      },
      toLocal: function (P) {
        return this.getMatrix().tfi(P)
      },
      toGlobal: function (G) {
        return this.getMatrix().tf(G)
      },
      isInRect: function (y) {
        y = this.toLocal(y);
        var h = this.getWidth(), g = this.getHeight();
        return y.x += h * this.getAnchorX(), y.y += g * this.getAnchorY(), !(y.x < 0 || y.y < 0 || y.x > h || y.y > g)
      },
      getRect: function () {
        var L = this, $ = L.getWidth(), R = L.getHeight(), Y = L.getAnchor(),
          Z = {x: -$ * Y.x, y: -R * Y.y, width: $, height: R}, F = L.getMatrix();
        return Z = Ue([F.tf(Z.x, Z.y), F.tf(Z.x + Z.width, Z.y), F.tf(Z.x + Z.width, Z.y + Z.height), F.tf(Z.x, Z.y + Z.height)])
      },
      getAnchorElevation: function () {
        return this._anchorElevation
      },
      getAnchor3d: function () {
        var q = this, B = q.getAnchor(), l = q._anchorElevation;
        return {x: B.x, y: l, z: B.y}
      },
      setAnchorElevation: function (k) {
        var B = this, i = B._anchorElevation;
        return i !== k ? (B._anchorElevation = k, B.fp("anchorElevation", i, k), !0) : !1
      },
      setAnchor3d: function (d, s, r, y) {
        var m, N = this;
        "number" == typeof d ? m = {x: d, y: s, z: r} : (m = d.length ? {x: d[0], y: d[1], z: d[2]} : d, y = s);
        var t = N.getDataModel();
        t && t.beginTransaction();
        var k = N.getAnchor3d(), _ = N.setAnchor(m.x, m.z);
        if (N.setAnchorElevation(m.y) && (_ = !0), _ && y && !_r) {
          N.getAnchor3d();
          var L = Sh(N), Q = Qp([m.x - k.x, m.y - k.y, m.z - k.z], L);
          N.p3(Q)
        }
        return t && t.endTransaction(), _
      },
      getAnchor: function () {
        var w = this;
        if (w.hasOwnProperty("_anchor")) return w._anchor;
        var O = vf(w._image);
        return O && O.anchorX !== S ? {x: O.anchorX, y: O.anchorY} : w._anchor
      },
      setAnchor: function (r, p, l) {
        var x, F = this;
        "number" == typeof r ? x = {x: r, y: p} : (x = r.length ? {x: r[0], y: r[1]} : r, l = p);
        var L = F.getAnchor();
        if (L.x !== x.x || L.y !== x.y) {
          var K = F.getDataModel();
          if (K && K.beginTransaction(), F._anchor = x, F.fp("anchor", L, x), l && !_r) {
            var v = F.getPosition(), f = F.getSize(), t = F.getRotation(), k = F.getScale(),
              I = -f.width * (L.x - x.x) * k.x, Q = -f.height * (L.y - x.y) * k.y, S = D(t), Y = J(t);
            F.setPosition(v.x + Y * I - S * Q, v.y + S * I + Y * Q)
          }
          return K && K.endTransaction(), !0
        }
        return !1
      },
      getScale: function () {
        return this._scale
      },
      setScale: function (o, e) {
        var _, P = this;
        _ = 2 === arguments.length ? {x: o, y: e} : o;
        var Z = P.getScale();
        (Z.x !== _.x || Z.y !== _.y) && (P._scale = _, P.fp("scale", Z, _))
      },
      getScaleTall: function () {
        return this._scaleTall
      },
      getScale3d: function () {
        var o = this, O = o._scaleTall, r = o.getScale();
        return [r.x, O, r.y]
      },
      getFinalScale3d: function () {
        var g = this, F = g.s3(), o = g._dynamicScale3d, J = g.getScale3d();
        return F && (J[0] *= F[0], J[1] *= F[1], J[2] *= F[2]), o && (J[0] *= o[0], J[1] *= o[1], J[2] *= o[2]), J
      },
      getFinalRotation3d: function () {
        var O = this;
        return O._dynamicRotation || O.r3()
      },
      setScaleTall: function (B) {
        var d = this, p = d._scaleTall;
        p !== B && (d._scaleTall = B, d.fp("scaleTall", p, B))
      },
      setScale3d: function (H, c, d) {
        var k, O = this;
        k = "number" == typeof H ? {x: H, y: c, z: d} : H.length ? {
          x: H[0],
          y: H[1],
          z: H[2]
        } : H, O.setScaleTall(k.y), O.setScale(k.x, k.z)
      },
      getCorners: function (i, q) {
        i == A && (i = 0), q == A && (q = i);
        var U = this, Y = U.getAnchor(), O = U.getWidth(), l = U.getHeight(), y = -O * Y.x - i, j = -l * Y.y - q,
          a = O + 2 * i, H = l + 2 * q, K = U.getMatrix();
        return [K.tf(y, j), K.tf(y, j + H), K.tf(y + a, j + H), K.tf(y + a, j)]
      },
      getEditControlPoints: function (K, Q, I) {
        Q == A && (Q = 0), I == A && (I = Q);
        var z = this, P = z.getAnchor(), i = z.getWidth(), J = z.getHeight(), a = -i * P.x - Q, d = -J * P.y - I,
          G = i + 2 * Q, p = J + 2 * I;
        if (K) return [{x: a, y: d}, {x: a, y: 0}, {x: a, y: d + p}, {x: 0, y: d + p}, {x: a + G, y: d + p}, {
          x: a + G,
          y: 0
        }, {x: a + G, y: d}, {x: 0, y: d}];
        var k = z.getMatrix();
        return [k.tf(a, d), k.tf(a, 0), k.tf(a, d + p), k.tf(0, d + p), k.tf(a + G, d + p), k.tf(a + G, 0), k.tf(a + G, d), k.tf(0, d)]
      },
      rotateAt: function (M, l, g) {
        var z = this, c = z._position, V = z._64O, j = new uh(V, c.x, c.y).tf(M, l), X = Y(M * M + l * l),
          K = i(c.y - j.y, c.x - j.x) + g;
        z.setRotation(V + g), z.p(j.x + X * J(K), j.y + X * D(K))
      },
      onParentChanged: function () {
        ol.superClass.onParentChanged.apply(this, arguments), this._8I()
      },
      _8I: function () {
        this._70O && this._70O.each(function (D) {
          D._7I()
        })
      },
      onPropertyChanged: function (G) {
        var _ = this;
        ol.superClass.onPropertyChanged.call(_, G), _._69O && _._69O.each(function (w) {
          w.handleHostPropertyChange(G)
        }), _._49I && _._49I.each(function (q) {
          q.fp("agentChange", !0, !1)
        })
      },
      onHostChanged: function () {
        this.updateAttach()
      },
      handleHostPropertyChange: function (x) {
        this.updateAttach(x)
      },
      onStyleChanged: function ($) {
        ol.superClass.onStyleChanged.apply(this, arguments), id[$] && this.updateAttach()
      },
      updateAttach: function (w) {
        var F = this;
        F._51I || _r || (F._51I = 1, F._71O(w), delete F._51I)
      },
      _71O: function (K) {
        var n, X, b, d, V, N, S = this, Z = S._host, l = K ? K.property : A, f = K ? K.oldValue : A,
          v = K ? K.newValue : A;
        if (Z instanceof Q.Grid) {
          if (l === db) S.setElevation(S._54O + v - f); else if (!K || Xh[l]) {
            if (n = S.s("attach.row.index"), X = S.s("attach.column.index"), b = Z.getCellRect(n, X), !b) return;
            d = S.s("attach.row.span"), V = S.s("attach.column.span"), (1 !== d || 1 !== V) && (b = Uk(b, Z.getCellRect(n + d - 1, X + V - 1))), nc(b, S, "attach.padding", 1), S.setRect(b)
          }
        } else if (Z instanceof wb && (N = S.s("attach.index")) >= 0 && (!K || Ob[l])) {
          var D = S.s("attach.thickness");
          D != A && S.setHeight(Z.getThickness() * D);
          var B = S.s("attach.offset"), s = Z.getPoints(), T = s.size();
          if (T > N) {
            var O = s.get(N), p = T === N + 1 ? s.get(0) : s.get(N + 1), E = [p.x - O.x, p.y - O.y], o = lf(E);
            if (o) {
              S.s("attach.offset.relative") && (B *= o), S.s("attach.offset.opposite") && (B = o - B);
              var m = {x: O.x + E[0] / o * B, y: O.y + E[1] / o * B}, k = S.s("attach.gap");
              k && (S.s("attach.gap.relative") && (k *= Z.getThickness()), m = zf(A, m, p, k)), S.p(m), S.setRotation(i(E[1], E[0]))
            }
          }
        } else K && (l === zr ? S.translate(v.x - f.x, v.y - f.y) : l === db ? S.setElevation(S._54O + v - f) : Cs[l] && S._11Q(Z, l, v - f))
      },
      _11Q: function (D, p, $) {
        var M = this, W = D.p3(), I = el(M.p3(), W), z = gc(), V = hp[M.getRotationMode()], e = V[0], b = V[1],
          d = V[2], X = Rd[e], f = Rd[b], C = Rd[d];
        p === sp && (p = "rotationY", $ = -$), p === sp + e ? (C(z, D[pd + d]()), f(z, D[pd + b]()), X(z, $), f(z, -D[pd + b]()), C(z, -D[pd + d]()), M[xp + e](M[pd + e]() + $)) : p === sp + b ? (C(z, D[pd + d]()), f(z, $), C(z, -D[pd + d]()), M[xp + b](M[pd + b]() + $)) : p === sp + d && (C(z, $), M[xp + d](M[pd + d]() + $)), Qp(I, z), M.p3(W[0] + I[0], W[1] + I[1], W[2] + I[2])
      },
      isHostOn: function (B) {
        var i = this;
        if (i._host && B && B._69O) for (var l = {}, F = i._host; F && F !== i && !l[F._id];) {
          if (F === B) return !0;
          l[F._id] = F, F = F._host
        }
        return !1
      },
      isLoopedHostOn: function (l) {
        return this.isHostOn(l) && l.isHostOn(this)
      },
      getSerializableProperties: function () {
        var T = ol.superClass.getSerializableProperties.call(this);
        return Ak(T, {
          image: 1,
          host: 1,
          rotation: 1,
          rotationX: 1,
          rotationZ: 1,
          rotationMode: 1,
          position: 1,
          anchor: 1,
          anchorElevation: 1,
          scale: 1,
          scaleTall: 1,
          _width: 1,
          _height: 1,
          _tall: 1,
          elevation: 1
        }), T
      }
    });
    var Dh = Q.Edge = function (Y, p) {
      var u = this;
      Eo(Dh, u), u.setSource(Y), u.setTarget(p)
    };
    Lj("Edge", aj, {
      _icon: "edge_icon", getUIClass: function () {
        return sk
      }, _22Q: function () {
        return _g
      }, getSource: function () {
        return this._source
      }, getTarget: function () {
        return this._target
      }, getSourceAgent: function () {
        return this._40I
      }, getTargetAgent: function () {
        return this._41I
      }, setSource: function (X) {
        var W = this;
        if (W._source !== X) {
          var K = W._source;
          W._source = X, K && K._16I(W), X && X._2I(W), W._7I(), W.fp("source", K, X)
        }
      }, setTarget: function (W) {
        var t = this;
        if (t._target !== W) {
          var F = t._target;
          t._target = W, F && F._18I(t), W && W._4I(t), t._7I(), t.fp("target", F, W)
        }
      }, isLooped: function () {
        var M = this;
        return M._source === M._target && !!M._source && !!M._target
      }, _7I: function () {
        var M, P = this, y = Do(P);
        P._40I !== y && (M = this._40I, M && M._15I(P), P._40I = y, y && y._1I(P), P.fp("sourceAgent", M, y), qg(M, P._41I), qg(y, P._41I));
        var f = cm(P);
        P._41I !== f && (M = P._41I, M && M._17I(P), P._41I = f, f && f._3I(P), P.fp("targetAgent", M, f), qg(M, P._40I), qg(f, P._40I))
      }, _22I: function (f) {
        this._52I = f, this.fp("edgeGroup", !0, !1)
      }, getEdgeGroup: function () {
        return this._52I
      }, isEdgeGroupHidden: function () {
        var N = this;
        return N._52I && N._52I.get(0) !== N && !N.getStyle(Se)
      }, getEdgeGroupSize: function () {
        return this._52I ? this._52I.size() : 1
      }, getEdgeGroupIndex: function () {
        return this._52I ? this._52I.indexOf(this) : 0
      }, isEdgeGroupAgent: function () {
        var t = this, e = t._52I;
        return e && !t.getStyle(Se) && e.size() > 1 && t === e.get(0)
      }, toggle: function () {
        var k = this._52I, v = !this.s(Se);
        k && k.size() > 1 && (k.each(function (W) {
          W.s(Se, v)
        }), k.getSiblings().each(function (F) {
          F !== k && F.each(function (m) {
            m.fp("edgeGroup", A, F)
          })
        }))
      }, setStyle: function (V, T) {
        (V === Ni || "edge.segments" === V) && (T = _i(T)), Dh.superClass.setStyle.call(this, V, T)
      }, onStyleChanged: function (x) {
        Dh.superClass.onStyleChanged.apply(this, arguments), Em[x] && qg(this._41I, this._40I)
      }, getSerializableProperties: function () {
        var i = Dh.superClass.getSerializableProperties.call(this);
        return Ak(i, {source: 1, target: 1}), i
      }
    });
    var xc = Q.Group = function () {
      Eo(xc, this)
    };
    Lj("Group", ol, {
      _image: "group_image", _icon: "group_icon", _57O: !1, getUIClass: function () {
        return Im
      }, onChildAdded: function () {
        xc.superClass.onChildAdded.apply(this, arguments), this._81I()
      }, onChildRemoved: function () {
        xc.superClass.onChildRemoved.apply(this, arguments), this._81I()
      }, _81I: function () {
        var g = this;
        if (!g._54I && !_r) {
          var M = g.getChildrenRect();
          M && (g._53I = 1, g.p(um(g.s("group.position"), M, g.getSize())), delete g._53I)
        }
      }, getChildrenRect: function () {
        var K, E = this;
        return E.eachChild(function (b) {
          K = Uk(K, E.getChildRect(b))
        }), K
      }, getChildRect: function (t) {
        var l;
        return Kf(t) && t.s(rr) && (Xo(t) && t.isExpanded() && t.eachChild(function (T) {
          l = Uk(l, t.getChildRect(T))
        }), !l && t.getRect && (l = t.getRect())), l
      }, setPosition: function (h, q) {
        var p = this;
        if (!p._54I) {
          var i;
          i = 2 === arguments.length ? {
            x: h,
            y: q
          } : h, _r || p._53I || (p._54I = 1, Jh(p._children, i.x - p._position.x, i.y - p._position.y), delete p._54I), xc.superClass.setPosition.call(this, i)
        }
      }, toggle: function () {
        this.setExpanded(!this.isExpanded())
      }, isExpanded: function () {
        return this._57O
      }, setExpanded: function (m) {
        var w = this;
        if (w._57O !== m) {
          var c = w._57O;
          w._57O = m, w.fp("expanded", c, w._57O), w._8I()
        }
      }, _8I: function () {
        xc.superClass._8I.call(this), this.eachChild(function (M) {
          Kf(M) && M._8I()
        })
      }, onStyleChanged: function (v) {
        xc.superClass.onStyleChanged.apply(this, arguments), "group.position" === v && this._81I()
      }, getSerializableProperties: function () {
        var m = xc.superClass.getSerializableProperties.call(this);
        return m.expanded = 1, m
      }
    });
    var Bp = Q.Block = function () {
      Eo(Bp, this)
    };
    Lj("Block", ol, {
      _icon: "block_icon",
      _clickThroughEnabled: !1,
      _syncSize: !0,
      ms_ac: ["clickThroughEnabled", "syncSize"],
      getUIClass: function () {
        return Vd
      },
      onChildAdded: function () {
        Bp.superClass.onChildAdded.apply(this, arguments), this.updateFromChildren()
      },
      onChildRemoved: function () {
        Bp.superClass.onChildRemoved.apply(this, arguments), this.updateFromChildren()
      },
      updateFromChildren: function () {
        var n = this;
        if (!_r && !n._updatingToChildren && n._syncSize) {
          var A, l, K, V, N, b = [], p = n.getRotation();
          if (n.eachChild(function (o) {
            Kf(o) && b.push.apply(b, o.getCorners())
          }), b.length) {
            n._updatingFromChildren = 1;
            var U = J(-p), v = D(-p), Z = 1 / 0, P = -1 / 0, d = 1 / 0, F = -1 / 0;
            for (V = 0, N = b.length; N > V; V++) K = b[V], A = K.x, l = K.y, K.x = U * A - v * l, K.y = v * A + U * l, Z = L(Z, K.x), P = R(P, K.x), d = L(d, K.y), F = R(F, K.y);
            var h = n.getScale();
            n.setSize(C((P - Z) / h.x), C((F - d) / h.y));
            var s;
            h.x < 0 && (s = Z, Z = P, P = s), h.y < 0 && (s = d, d = F, F = s), U = J(p), v = D(p);
            var a = n.getAnchor();
            A = Z + (P - Z) * a.x, l = d + (F - d) * a.y, n.setPosition(U * A - v * l, v * A + U * l), delete n._updatingFromChildren
          }
        }
      },
      setPosition: function (D, E) {
        var u = this;
        if (!u._updatingToChildren) {
          var z;
          z = 2 === arguments.length ? {
            x: D,
            y: E
          } : D, _r || u._updatingFromChildren || (u._updatingToChildren = 1, Jh(u._children, z.x - u._position.x, z.y - u._position.y), delete u._updatingToChildren), Bp.superClass.setPosition.call(this, z)
        }
      },
      setWidth: function (Y) {
        return this.setSize(Y, this.getHeight())
      },
      setHeight: function (N) {
        return this.setSize(this.getWidth(), N)
      },
      setSize: function (W, A) {
        1 > W && (W = 1), 1 > A && (A = 1);
        var h = this;
        if (!h._updatingToChildren) {
          2 !== arguments.length && (A = W.height, W = W.width);
          var g = h.getWidth(), l = h.getHeight();
          if (W !== g && Bp.superClass.setWidth.call(h, W), A !== l && Bp.superClass.setHeight.call(h, A), !_r && !h._updatingFromChildren) {
            h._updatingToChildren = 1;
            var s = W / g, S = A / l;
            h._adjustChildScaleOrSize(s, S, "size"), delete h._updatingToChildren, h.updateFromChildren()
          }
        }
      },
      _adjustChildScaleOrSize: function (R, v, _) {
        var r = this;
        if (r._syncSize) {
          var o = r.getPosition(), q = r.getRotation();
          r.getScale(), r.eachChild(function (u) {
            if (Kf(u)) {
              var e = u.getPosition(), L = u.getRotation(), s = u.getWidth(), X = u.getHeight(), g = u.getScale(),
                V = g.x * s, A = g.y * X, p = new uh(L, e.x, e.y, V, A);
              p.translate(-o.x, -o.y), p.rotate(-q), L = i(p.b * Math.sign(V), p.a * Math.sign(V)), p.scale(R, v);
              var y, O, r, c = J(L);
              if (Math.abs(c) < .001 ? (y = D(L), O = p.b / y, r = -p.c / y) : (O = p.a / c, r = p.d / c), "scale" === _) u.setScale(O / s, r / X); else if ("size" === _) {
                var j = O / g.x, I = r / g.y;
                u.setScale(Yh(O) * Math.abs(g.x), Yh(r) * Math.abs(g.y)), u.setSize(Math.max(.1, Math.abs(j)), Math.max(.1, Math.abs(I)))
              }
              p.rotate(q), p.translate(o.x, o.y), u.setPosition(p.tx, p.ty)
            }
          })
        }
      },
      _calcChangeFactor: function (D, y, s, L) {
        var h, H, F, m;
        return h = C(D), H = C(s), F = h > H ? h / H : H / h, h = C(y), H = C(L), m = h > H ? h / H : H / h, R(F, m)
      },
      setAnchor: function () {
        var c = this;
        if (!c._updatingToChildren) {
          var H = c.getAnchor();
          if (Bp.superClass.setAnchor.apply(c, arguments), !_r && !c._updatingFromChildren && c._syncSize) {
            c._updatingToChildren = 1;
            var z = c.getAnchor();
            c.getPosition();
            var m = c.getSize(), Z = c.getScale(), n = c.getRotation(), Q = -m.width * Z.x * (H.x - z.x),
              i = -m.height * Z.y * (H.y - z.y), s = D(n), j = J(n), N = j * Q - s * i, L = s * Q + j * i;
            c.eachChild(function (M) {
              if (Kf(M)) {
                var U = M.getPosition();
                M.setPosition(U.x - N, U.y - L)
              }
            }), delete c._updatingToChildren
          }
        }
      },
      setRotation: function (Q) {
        var l = this;
        if (!l._updatingToChildren) {
          var V = l.getRotation();
          if (Bp.superClass.setRotation.apply(l, arguments), !_r && !l._updatingFromChildren) {
            l._updatingToChildren = 1;
            var J = l.getPosition(), p = Q - V;
            l.eachChild(function (I) {
              if (Kf(I)) {
                var V = I.getMatrix();
                V.translate(-J.x, -J.y), V.rotate(p), V.translate(J.x, J.y);
                var H = Math.sign(I.getScale().x);
                I.setRotation(i(V.b * H, V.a * H)), I.setPosition(V.tx, V.ty)
              }
            }), delete l._updatingToChildren
          }
        }
      },
      setScale: function (x, u) {
        var B = this;
        if (!B._updatingToChildren) {
          null == u && (u = x.y, x = x.x);
          var V = B.getScale();
          if (C(x) < .01 && (x = .01 * (Yh(x) || Yh(V.x))), C(u) < .01 && (u = .01 * (Yh(u) || Yh(V.y))), Bp.superClass.setScale.call(B, x, u), !_r && !B._updatingFromChildren) {
            B._updatingToChildren = 1;
            var t = x / V.x, p = u / V.y;
            B._adjustChildScaleOrSize(t, p, "size"), delete B._updatingToChildren, B.updateFromChildren()
          }
        }
      },
      getSerializableProperties: function () {
        var S = Bp.superClass.getSerializableProperties.call(this);
        return S.clickThroughEnabled = 1, S.syncSize = 1, S
      }
    });
    var bc = Q.Grid = function () {
      Eo(Q.Grid, this)
    };
    Lj("Grid", ol, {
      IRotatable: !1, _icon: "grid_icon", _image: A, getUIClass: function () {
        return rm
      }, setRotation: function () {
      }, getCellRect: function (l, _) {
        var y = this, m = y.s("grid.row.count"), k = y.s("grid.column.count");
        if (0 >= m || 0 >= k || 0 > l || l >= m || 0 > _ || _ >= k) return A;
        var C, Z, x, r = y.getRect(), V = y.s("grid.row.percents"), w = y.s("grid.column.percents");
        if (nc(r, y, "grid.border", -1), V && V._as && (V = V._as), w && w._as && (w = w._as), V && V.length === m) {
          for (x = 0, C = 0; l > C; C++) x += r.height * V[C];
          r.y += x, r.height = r.height * V[l]
        } else r.height = r.height / m, r.y += r.height * l;
        if (w && w.length === k) {
          for (Z = 0, C = 0; _ > C; C++) Z += r.width * w[C];
          r.x += Z, r.width = r.width * w[_]
        } else r.width = r.width / k, r.x += r.width * _;
        return hq(r, -y.s("grid.gap")), r
      }
    });
    var Tk = Q.Text = function () {
      Eo(Tk, this), this.setSize(100, 50), this.s("text", "TEXT")
    };
    Lj("Text", ol, {
      _icon: "text_icon", _image: "__text__", getUIClass: function () {
        return pj
      }, setWidth: function (Z) {
        Z || (Z = .001), Tk.superClass.setWidth.call(this, Z)
      }, setHeight: function (l) {
        l || (l = .001), Tk.superClass.setHeight.call(this, l)
      }, toLabel: function () {
        return this._displayName || this._name || this.s("text")
      }
    }), $n("__text__", {
      width: {
        value: 100, isSafeFunc: !0, func: function (D) {
          return D._width
        }
      },
      height: {
        value: 50, isSafeFunc: !0, func: function (Q) {
          return Q._height
        }
      },
      comps: [{
        type: "text",
        relative: !0,
        rect: [0, 0, 1, 1],
        text: {func: "style@text"},
        align: {func: "style@text.align"},
        vAlign: {func: "style@text.vAlign"},
        color: {func: "style@text.color"},
        font: {func: "style@text.font"},
        shadow: {func: "style@text.shadow"},
        shadowColor: {func: "style@text.shadow.color"},
        shadowBlur: {func: "style@text.shadow.blur"},
        shadowOffsetX: {func: "style@text.shadow.offset.x"},
        shadowOffsetY: {func: "style@text.shadow.offset.y"},
        scaleX: {func: "style@text.scale.x"},
        scaleY: {func: "style@text.scale.y"}
      }]
    });
    var wb = Q.Shape = function () {
      Eo(wb, this), this._59O = new Oh
    };
    wb.__de__ = Hp, Lj("Shape", ol, {
      ms_ac: ["thickness", "closePath"],
      _icon: "shape_icon",
      _thickness: 10,
      _closePath: !1,
      getUIClass: function () {
        return Vn
      },
      _22Q: function () {
        return Eq
      },
      getLength: function (j) {
        return qh(Gq(this._59O, this._58O, j, this._closePath))
      },
      getSegments: function () {
        return this._58O
      },
      toSegments: function () {
        var K = this._58O;
        return K ? new Oh(K._as.slice(0)) : K
      },
      setSegments: function (t) {
        var $ = this._58O;
        t = t ? cl(t) ? new Oh(t.slice(0)) : new Oh(t._as.slice(0)) : null, ($ && t && $._as.join(",") !== t._as.join(",") || $ !== t) && (this._58O = t, this.fp("segments", $, t))
      },
      getPoints: function () {
        return this._59O
      },
      toPoints: function () {
        var S = this._59O;
        return new Oh(S._as.slice(0))
      },
      setPoints: function (W, w) {
        var R = this, I = R._59O;
        W = W ? cl(W) ? new Oh(W.slice(0)) : new Oh(W._as.slice(0)) : new Oh;
        var x, E, q, s, t, y;
        w && (x = R.getPosition(), y = new uh(R.getRotation(), 0, 0, R.getScale().x, R.getScale().y)), (I && W && I._as.join(",") !== W._as.join(",") || I !== W) && (R._59O = W, R.fs(), R.fp("points", I, W)), w && (E = R.getPosition(), q = E.x - x.x, s = E.y - x.y, t = y.tf(q, s), R.setPosition(E.x - q + t.x, E.y - s + t.y))
      },
      addPoint: function (d, q, S) {
        var D = this.toPoints();
        D.add(d, q), this.setPoints(D, S)
      },
      setPoint: function (n, _, U) {
        var M = this.toPoints();
        M.set(n, _), this.setPoints(M, U)
      },
      removePointAt: function (e) {
        var J = this.toPoints();
        J.removeAt(e), this.setPoints(J)
      },
      setWidth: function (K) {
        var y = this;
        if (1 > K && (K = 1), !y._55I && !_r && y.getWidth()) {
          y._55I = 1;
          var V = y._position.x, k = K / y.getWidth(), G = y.toPoints(), b = new Oh;
          G.each(function (L) {
            b.add({x: (L.x - V) * k + V, y: L.y, e: L.e})
          }), y.setPoints(b), zl(y, [k, 0, 0, 1, V * (1 - k), 0]), y.fs(), delete y._55I
        }
        wb.superClass.setWidth.call(y, K)
      },
      setHeight: function (E) {
        var A = this;
        if (1 > E && (E = 1), !A._55I && !_r && A.getHeight()) {
          A._55I = 1;
          var J = A._position.y, S = E / A.getHeight(), z = A.toPoints(), u = new Oh;
          z.each(function (z) {
            u.add({x: z.x, y: (z.y - J) * S + J, e: z.e})
          }), A.setPoints(u), zl(A, [1, 0, 0, S, 0, J * (1 - S)]), A.fs(), delete A._55I
        }
        wb.superClass.setHeight.call(A, E)
      },
      setAnchorElevation: function (w) {
        var q = this;
        q._55I = !0;
        var C = q._updatingAnchor3d, a = !_r && !C;
        if (a) {
          var O, g = w, o = q.getAnchorElevation(), c = q.getTall();
          O = c * (o - g), q.shiftPointsElevation(O)
        }
        var s = wb.superClass.setAnchorElevation.apply(q, arguments);
        return C || delete q._55I, s
      },
      getShapeElevation: function () {
        var S = this, v = S._54O;
        return v - (S.getTall() || 0) * (S._anchorElevation - .5)
      },
      setAnchor3d: function (Y, l, b, I) {
        var i, F = this;
        "number" == typeof Y ? i = {x: Y, y: l, z: b} : (i = Y.length ? {
          x: Y[0],
          y: Y[1],
          z: Y[2]
        } : Y, I = l), F._55I = !0, F._updatingAnchor3d = !0;
        var o = F.getDataModel();
        if (o && o.beginTransaction(), !_r) {
          var R = F.getAnchor3d(), M = F.getSize(), u = F.getTall(), y = M.width * (R.x - i.x),
            N = M.height * (R.z - i.z), f = u * (R.y - i.y);
          I || F.shiftPoints(y, N, f);
          var d = F.p3()
        }
        var h = wb.superClass.setAnchor3d.apply(F, arguments);
        if (!_r && I) {
          var g = F.p3();
          F.shiftPoints(g[0] - d[0] + y, g[2] - d[2] + N, g[1] - d[1] + f)
        }
        return o && o.endTransaction(), delete F._updatingAnchor3d, delete F._55I, h
      },
      setAnchor: function (j, b, z) {
        var m = this;
        m._55I = !0;
        var A = m._updatingAnchor3d, Y = !_r && !A;
        if (Y) {
          var s, J, R;
          "number" == typeof j ? R = {x: j, y: b} : (R = j.length ? {x: j[0], y: j[1]} : j, z = b);
          var f = m.getAnchor(), $ = m.getSize();
          s = $.width * (f.x - R.x), J = $.height * (f.y - R.y), z || m.shiftPoints(s, J);
          var u = m.getPosition()
        }
        var d = wb.superClass.setAnchor.apply(m, arguments);
        if (Y) {
          var r = m.getPosition();
          z && m.shiftPoints(r.x - u.x + s, r.y - u.y + J)
        }
        return A || delete m._55I, d
      },
      shiftPoints: function (W, S, i) {
        var e = this, w = e.getElevation() || 0, q = e.toPoints(), I = new Oh;
        q.each(function (l) {
          var y = l.e;
          i && (y = (y == A ? w : y) + i), I.add({x: l.x + W, y: l.y + S, e: y})
        }), e.setPoints(I), e.fs()
      },
      shiftPointsElevation: function (R) {
        return this.shiftPoints(0, 0, R)
      },
      setPosition: function (v, V) {
        var S, p = this;
        if (!p._28Q) {
          if (p._28Q = 1, !p._55I && !_r) {
            S = 2 === arguments.length ? {x: v, y: V} : v;
            var X = S.x - p._position.x, T = S.y - p._position.y;
            if (0 === X && 0 === T) return delete p._28Q, void 0;
            p._55I = 1, p.shiftPoints(X, T), zl(p, [1, 0, 0, 1, X, T]), delete p._55I
          }
          wb.superClass.setPosition.apply(p, arguments), delete p._28Q
        }
      },
      fs: function () {
        this.fireShapeChange()
      },
      _70I: function () {
        var S = this;
        if (2 !== S._59O.size()) return !1;
        var D = S._58O;
        return D ? 2 === D.size() && 1 === D.get(0) && 2 === D.get(1) ? !0 : !1 : !0
      },
      fireShapeChange: function () {
        var _ = this;
        if (!_._55I && !_r) {
          var y = Ue(_._59O);
          y && (_._55I = 1, _.setRect(y), delete _._55I)
        }
        _.fp(Mq, !1, !0)
      },
      getSerializableProperties: function () {
        var n = wb.superClass.getSerializableProperties.call(this);
        return n.segments = 1, n.points = 1, n.thickness = 1, n.closePath = 1, n
      }
    });
    var Af = Q.Polyline = function () {
      Eo(Af, this), this.s({"shape.background": null, "shape.border.width": 2})
    };
    Lj("Polyline", wb, {
      _icon: "polyline_icon", _22Q: function () {
        return Ed
      }, getUIClass: function () {
        return Cr
      }, setClosePath: function () {
      }, setTall: function (S) {
        var M = this;
        if (!M._55I && !M._24Q && !_r && M.getTall()) {
          M._24Q = 1;
          var I = M._54O, i = S / M.getTall();
          M._59O.each(function (B) {
            B.e = B.e == A ? I : (B.e - I) * i + I
          }), M.fs(), delete M._24Q
        }
        Af.superClass.setTall.call(M, S)
      }, setElevation: function (q) {
        var T = this;
        if (!T._55I && !T._24Q && !_r) {
          T._24Q = 1;
          var C = q - T._54O;
          T._59O.each(function (S) {
            S.e == A ? S.e = q : S.e += C
          }), T.fs(), delete T._24Q
        }
        Af.superClass.setElevation.apply(T, arguments)
      }, fireShapeChange: function () {
        var n = this, W = n._59O;
        if (!n._55I && !n._24Q && !_r) {
          var s = W.size();
          if (s) {
            var g = 1, C = W.get(0), F = n._54O;
            C.e == A && (C.e = F);
            for (var x = C.e, V = 0; s > g; g++) {
              C = W.get(g), C.e == A && (C.e = F);
              var v = L(x, C.e), j = R(x + V, C.e);
              x = v, V = j - v
            }
            n._24Q = 1, n.setTall(V), n.setElevation(x + V * n._anchorElevation), delete n._24Q
          }
        }
        Af.superClass.fireShapeChange.apply(n, arguments)
      }
    });
    var Ie = Q.SubGraph = function () {
      Eo(Ie, this)
    };
    Lj("SubGraph", ol, {
      ISubGraph: 1, _image: "subGraph_image", _icon: "subGraph_icon", _8I: function () {
        Ie.superClass._8I.call(this), this.eachChild(function (s) {
          Kf(s) && s._8I()
        })
      }
    }), E.loadingRefGraph = 0;
    var Md = Q.RefGraph = function () {
      Eo(Md, this)
    };
    Lj("RefGraph", Bp, {
      _icon: "refGraph_icon", getRef: function () {
        return this._ref
      }, setRef: function (C) {
        var z = this._ref;
        this._ref = C, this.fp("ref", z, C), this.updateRef()
      }, _21I: function () {
        Md.superClass._21I.apply(this, arguments), this.updateRef()
      }, updateRef: function () {
        var k = this;
        if (E.loadingRefGraph++, k.clearChildrenFromDataModel(), E.loadingRefGraph--, k._ref && k._dataModel) {
          k._xhrLoadHandler && (k._xhrLoadHandler.cancel = !0);
          var s = _r, n = k._xhrLoadHandler = function (Q) {
            if (Q && k._dataModel) {
              E.loadingRefGraph++;
              var C = k._pendingUpdateInfo = {needToRestore: s};
              s && (C.position = k.p(), C.width = k.getWidth(), C.height = k.getHeight(), C.rotation = k.getRotation(), C.anchor = k.getAnchor(), C.scale = k.getScale()), k.p(0, 0), k.setAnchor(.5, .5), k.setRotation(0), k.setScale(1, 1);
              var j = E.parse(Q), v = k._dataModel.deserialize(j, k, {justDatas: !0});
              v.each(function (Y) {
                Y._refGraph = k
              }), k.checkPendingUpdateInfo(), E.loadingRefGraph--, E.handleRefGraphLoaded(k, v, j)
            }
          };
          n.xhrLoadCalled = !1, E.load(k._ref, function (D) {
            n.cancel || (n.xhrLoadCalled ? n(D) : Rl(function () {
              n(D)
            }))
          }), n.xhrLoadCalled = !0
        }
      }, checkPendingUpdateInfo: function () {
        var e = this, A = e._pendingUpdateInfo;
        if (!A) return e.onPendingUpdated && (E.loadingRefGraph++, e.onPendingUpdated(), E.loadingRefGraph--), void 0;
        var D = !0;
        this.eachChild(function (d) {
          (d._pendingCheckImageJSON || d._pendingUpdateInfo) && (D = !1)
        }), D && (E.loadingRefGraph++, e._pendingUpdateInfo = null, e.updateFromChildren(), A.needToRestore && (e.setSize(A.width, A.height), e.setAnchor(A.anchor), e.setRotation(A.rotation), e.setScale(A.scale), e.p(A.position)), this.getParent() instanceof Md && this.getParent().checkPendingUpdateInfo(), e.onPendingUpdated && e.onPendingUpdated(), E.loadingRefGraph--)
      }, getSerializableProperties: function () {
        var c = Md.superClass.getSerializableProperties.call(this);
        return c.ref = 1, c
      }
    }), Q.EdgeGroup = function (w, B) {
      this._70O = w, this._siblings = B;
      for (var p, e, v = 0, x = w.size(), d = h[Se]; x > v; v++) if (p = w.get(v).getStyle(Se, !1), p != A) {
        d = p;
        break
      }
      d == A && (d = !0);
      var u = E.edgeGroupAgentFunc;
      for (u && (e = u(w), e && e !== w.get(0) && (w.remove(e), w.add(e, 0))), v = 0; x > v; v++) w.get(v).s(Se, d)
    }, Lj("EdgeGroup", F, {
      getEdges: function () {
        return this._70O
      }, size: function () {
        return this._70O.size()
      }, get: function (Y) {
        return this._70O.get(Y)
      }, indexOf: function (z) {
        return this._70O.indexOf(z)
      }, each: function (W, Z) {
        this._70O.each(W, Z)
      }, getSiblings: function () {
        return this._siblings
      }, eachSiblingEdge: function (s, T) {
        this._siblings.each(function (Q) {
          Q._70O.each(s, T)
        })
      }
    });
    var al = function (N, G, C) {
      var r = Fe[N] = {type: N, action: G};
      if (C) for (var Y in C) r[Y] = C[Y]
    };
    Ak(E, {
      setConnectAction: al, getConnectAction: function (l, n) {
        if (!n) {
          if (!l) return null;
          n = l.getCurrentConnectActionType()
        }
        return Fe[n]
      }, doConnectAction: function (I, Z, W, g) {
        g = g || I.getCurrentConnectActionType();
        var v = Fe[g];
        if (!v) return !1;
        var P = v.action;
        return P ? (Z instanceof co.Group ? I.sm().getSelection().each(function (f) {
          P.call(null, I, f, W)
        }) : P.call(null, I, Z, W), !0) : !1
      }, doDeleteConnectionAction: function (f, n, Z) {
        Z = Z || f.getCurrentConnectActionType();
        var M = Fe[Z];
        if (!M || !M.delete) return !1;
        var U = M.delete.action;
        return U ? (n instanceof co.Group ? f.sm().getSelection().each(function (X) {
          U.call(null, f, X)
        }) : U.call(null, f, n), !0) : !1
      }
    });
    var Ul = Q.JSONSerializer = function (e, R) {
      this.dm = this._dataModel = e, this._hierarchical = E.forceHierarchicalSerialization ? !0 : R == A ? e.isHierarchicalRendering() : R
    };
    Lj("JSONSerializer", F, {
      ms_ac: ["hierarchical"], serialize: function (z) {
        return E.stringify(this.toJSON(), z)
      }, toJSON: function () {
        var U = this, L = U.dm, H = L.getRoots(), Z = U.json = {v: E.getVersion(), p: {}, a: {}, d: []},
          Y = L.getSerializableAttrs();
        L.getInit() && (Z.init = L.getInit()), L.getName() && (Z.p.name = L.getName()), L.getBackground() && (Z.p.background = L.getBackground()), L.getLayers() && (Z.p.layers = L.getLayers()), Z.p.autoAdjustIndex = L.isAutoAdjustIndex(), Z.p.hierarchicalRendering = L.isHierarchicalRendering();
        for (var l in Y) {
          var x = L.a(l);
          x !== S && U[Nj](l, x, Z.a)
        }
        return Ah(Z.a) && delete Z.a, U._hierarchical ? H.each(U.serializeData, this) : L.each(function (t) {
          U.serializeData(t)
        }), Z
      }, isSerializable: function () {
        return !0
      }, getProperties: function (J) {
        return J.getSerializableProperties()
      }, getStyles: function (m) {
        return m.getSerializableStyles()
      }, getAttrs: function (k) {
        return k.getSerializableAttrs()
      }, serializeData: function (N) {
        var S = this;
        if (S.isSerializable(N) && !N._refGraph) {
          var K, y, z, n, G = Ye(N.getClassName()) || N.getClass(), l = new G,
            f = {c: N.getClassName(), i: N.getId(), p: {}, s: {}, a: {}};
          S.json.d.push(f), K = S.getProperties(N);
          for (y in K) /^_/.test(y) ? (z = N[y], z !== l[y] && S[Nj](y.substr(1), z, f.p)) : (n = vn(y), N[n] && (z = N[n](), z !== l[n]() && S[Nj](y, z, f.p)));
          K = S.getStyles(N);
          for (y in K) z = N.s(y), z !== l.s(y) && S[Nj](y, z, f.s);
          K = S.getAttrs(N);
          for (y in K) z = N.a(y), z !== l.a(y) && S[Nj](y, z, f.a);
          Ah(f.p) && delete f.p, Ah(f.s) && delete f.s, Ah(f.a) && delete f.a
        }
        S._hierarchical && N.getChildren().each(S.serializeData, S)
      }, serializeValue: function (T, h, W) {
        Fi(h) ? h = {__a: h._as} : h instanceof aj && (h = {__i: h.getId()}), W[T] = h
      }, deserialize: function (i, g, f) {
        var J = this, Y = J.dm;
        Y.beginTransaction(), _r++, f = ye(f) ? {setId: f} : f || {}, i = J.json = pp(i) ? E.parse(i) : i, J._82I = {};
        var B = new Oh, O = new Oh, C = 0, $ = i.d.length;
        if (f.justDatas || (En(i.init) && i.init(Y), Y.setInit(i.init)), !f.justDatas) {
          for (var u in i.a) Y.a(u, J[jn](i.a[u]));
          for (var k in i.p) Y[te(k)](i.p[k])
        }
        for (; $ > C; C++) {
          var c = i.d[C], T = Ye(c.c), m = new T, S = c.i;
          f.setId && S != A && (m._id = S), J._82I[S] = m, B.add(m), O.add(c)
        }
        for (C = 0; $ > C; C++) J.deserializeData(B.get(C), O.get(C));
        return B.each(function (B) {
          g && !B.getParent() && B.setParent(g), Y.add(B)
        }), _r--, Y.endTransaction(), B
      }, deserializeData: function (N, p) {
        for (var u in p.p) N[te(u)](this[jn](p.p[u]));
        for (u in p.s) N.s(u, this[jn](p.s[u]));
        for (u in p.a) N.a(u, this[jn](p.a[u]))
      }, deserializeValue: function (G) {
        if (mk(G)) {
          var o = G.__i;
          if (o != A) return this._82I[o];
          if (o = G.__a, cl(o)) return new Oh(o)
        }
        return G
      }
    }), Ak(Yc, {
      serialize: function (l, b) {
        return new Ul(this, b).serialize(l)
      }, toJSON: function (q) {
        return new Ul(this, q).toJSON()
      }, deserialize: function (S, X, Y) {
        return new Ul(this).deserialize(S, X, Y)
      }
    });
    var im = Q.OverlappingBox = function ($) {
      this.gv = $, this.boxes = {}
    };
    Lj("OverlappingBox", F, {
      clear: function () {
        var m, E, Y = this.boxes;
        for (m in Y) E = Y[m], E.length = 0
      }, isOverlapping: function (d, Y) {
        var Q, U, I = this, S = I.boxes, n = S[d];
        n ? (Q = n.rects, U = n.length) : n = S[d] = {rects: Q = [], length: U = 0};
        var t, r, Y;
        for (t = 0; U > t; t++) if (r = Q[t], r.x < Y.x + Y.w && r.x + r.w > Y.x && r.y < Y.y + Y.h && r.h + r.y > Y.y) return !0;
        return Q.length <= U ? (Q.push(Y), n.length++) : Q[n.length++] = Y, !1
      }
    }), Ui.GraphView = function (q) {
      var W = this;
      W._24I = {}, W._34I = new Oh, W._25I = {}, W._56I = {}, W._view = Ae(1, W), W._canvas = Ze(W._view), W.dm(q ? q : new Yc), this._coreInteractor = new qk(this), W.setEditable(!1), W.setScrollBarVisible(E.graphViewScrollBarVisible)
    }, Pb("GraphView", F, {
      ms_v: 1,
      ms_gv: 1,
      ms_bnb: 1,
      ms_tip: 1,
      ms_dm: 1,
      ms_lp: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      _52o: 1,
      _51o: 1,
      ms_ac: [xs, Xj, Pk, Te, "resettable", "editInteractor", bs, "pannable", "rectSelectable", "autoScrollZone", ge, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "anchorEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
      _resettable: E.graphViewResettable,
      _pannable: E.graphViewPannable,
      _rectSelectable: E.graphViewRectSelectable,
      _autoScrollZone: E.graphViewAutoScrollZone,
      _rectSelectBackground: E.graphViewRectSelectBackground,
      _rectSelectBorderColor: E.graphViewRectSelectBorderColor,
      _editPointSize: E.graphViewEditPointSize,
      _editPointBorderColor: E.graphViewEditPointBorderColor,
      _editPointBackground: E.graphViewEditPointBackground,
      _scrollBarColor: No,
      _scrollBarSize: Mh,
      _autoHideScrollBar: tk,
      _autoMakeVisible: nd,
      _currentActionType: null,
      getCoreInteractor: function () {
        return this._coreInteractor
      },
      getLayers: function () {
        return this._dataModel.getLayers()
      },
      setLayers: function (a) {
        this._dataModel.setLayers(a)
      },
      setEditable: function (j) {
        var o = this, k = o.__interactorMap__;
        if (!k) {
          var G = Ui.XEditInteractor;
          k = o.__interactorMap__ = {
            scrollBar: new ik(o),
            select: new ir(o),
            edit: G ? new G(o) : new jg(o),
            move: new yk(o),
            "default": new fl(o),
            touch: new Hb(o, {editable: !1})
          }
        }
        j ? (o._uieditable = !0, o.setInteractors([k.scrollBar, k.select, k.edit, k.move, k.default, k.touch])) : (o._uieditable = !1, o.setInteractors([k.scrollBar, k.select, k.move, k.default, k.touch]))
      },
      getCanvas: function () {
        return this._canvas
      },
      _33I: function (y) {
        var B = y.getUIClass();
        return B ? new B(this, y) : A
      },
      getDataUI: function (l) {
        var z = this, o = z._25I[l._id];
        return o === S && (o = z._33I(l), z._25I[l._id] = o), o
      },
      getNodeRect: function (Z) {
        return E.getNodeRect(this, Z)
      },
      getEdgeInfo: function (U) {
        var c = this.getDataUI(U);
        return c ? (c._79o(), c._78o) : null
      },
      getEdgeSourcePosition: function (S) {
        var F = this, R = F.getDataUI(S), h = R.s, T = R._data._40I;
        return gs(F, T, h("edge.source.position"), h("edge.source.offset.x"), h("edge.source.offset.y"), h("edge.source.anchor.x"), h("edge.source.anchor.y"))
      },
      getEdgeTargetPosition: function (l) {
        var R = this, N = R.getDataUI(l), Z = N.s, v = N._data._41I;
        return gs(R, v, Z("edge.target.position"), Z("edge.target.offset.x"), Z("edge.target.offset.y"), Z("edge.target.anchor.x"), Z("edge.target.anchor.y"))
      },
      invalidateAll: function (G) {
        var m = this;
        if (G) {
          for (var R in m._25I) {
            var l = m._25I[R];
            l && l.dispose()
          }
          m._25I = {}, m._56I = {}, m._24I = {}, m._34I.clear(), m.redraw()
        } else m.dm().each(function (U) {
          m.invalidateData(U)
        })
      },
      invalidateSelection: function () {
        var N = this;
        N.sm().each(function (D) {
          N.invalidateData(D)
        })
      },
      invalidateData: function (d) {
        var $ = this;
        $._24I[d._id] = d, $._21Q(d), $.iv()
      },
      _21Q: function ($) {
        var D = this, Q = D._24I;
        if (yc($) && Lf[$.s(Vm)]) {
          var L = $.getSourceAgent();
          L && L.getAgentEdges().each(function (x) {
            Q[x._id] = x
          }), L = $.getTargetAgent(), L && L.getAgentEdges().each(function (k) {
            Q[k._id] = k
          }), D.iv()
        }
      },
      redraw: function (W) {
        var P = this;
        P._32I || (W ? P._34I.add(W) : (P._32I = 1, P._34I.clear()), P.iv())
      },
      each: function (M, A) {
        var c, j, U, B = 0, r = this.getLayers(), O = this._dataModel, N = O._datas._as, v = N.length;
        if (r) {
          for (var w = r.length; w > B; B++) if (U = r[B], mk(U) && (U = U.name), O.isHierarchicalRendering()) {
            var l = function (f) {
              return f._layer === U ? A ? M.call(A, f) : M(f) : void 0
            };
            if (this._dataModel.eachByHierarchical(l) === !1) return
          } else for (var R = 0; v > R; R++) if (c = N[R], c._layer === U && (j = A ? M.call(A, c) : M(c), j === !1)) return
        } else if (O.isHierarchicalRendering()) this._dataModel.eachByHierarchical(M, null, A); else for (; v > B; B++) if (c = N[B], j = A ? M.call(A, c) : M(c), j === !1) return
      },
      reverseEach: function (A, b) {
        var Z, G, m, K, j = this._dataModel, k = j._layers, a = j._datas._as, E = a.length;
        if (k) {
          for (Z = k.length - 1; Z >= 0; Z--) if (K = k[Z], mk(K) && (K = K.name), j.isHierarchicalRendering()) {
            var n = function (Q) {
              return Q._layer === K ? b ? A.call(b, Q) : A(Q) : void 0
            };
            if (j.reverseEachByHierarchical(n) === !1) return
          } else for (var p = E - 1; p >= 0; p--) if (G = a[p], G._layer === K && (m = b ? A.call(b, G) : A(G), m === !1)) return
        } else if (j.isHierarchicalRendering()) j.reverseEachByHierarchical(A, null, b); else for (Z = E - 1; Z >= 0; Z--) if (G = a[Z], m = b ? A.call(b, G) : A(G), m === !1) return
      },
      getViewRect: function () {
        return this._29I
      },
      getContentRect: function () {
        var z = this, Y = z._84I;
        if (!Y) {
          var e = this.dm().a("width"), l = this.dm().a("height");
          e > 0 && l > 0 ? z._84I = {x: 0, y: 0, width: e, height: l} : (z.each(function (e) {
            z.isVisible(e) && (Y = Uk(Y, z.getDataUIBounds(e)))
          }), z._84I = Y ? Y : ui)
        }
        return z._84I
      },
      getScrollRect: function () {
        return Uk(this.getContentRect(), this._29I)
      },
      makeCenter: function (j, z, Y) {
        var T = this;
        if (!T.getWidth() || !T.getHeight()) return Y || Rl(T.centerData, T, [j, z, !0], 500), void 0;
        T.makeVisible(j), T.validate();
        var W = T.getDataUIBounds(j);
        if (W) {
          var d = T.getWidth(), i = T.getHeight(), A = W.x + W.width / 2, h = W.y + W.height / 2,
            $ = -A * T._zoom + d / 2, v = -h * T._zoom + i / 2;
          T.setTranslate($, v, z)
        }
      },
      fitData: function (d, f, U, H, O) {
        var v = this;
        if (!v.getWidth() || !v.getHeight()) return O || Rl(v.fitData, v, [d, f, U, H, !0], 500), void 0;
        var K = function () {
          v.makeVisible(d), v.validate();
          var k = v.getDataUIBounds(d);
          k && (k = Wf(k), hq(k, U == A ? 20 : U), v.fitRect(k, f, H))
        };
        f ? E.callWhenLoaded(K) : K()
      },
      fitContent: function (X, H, V, k) {
        var t = this;
        if (!t.getWidth() || !t.getHeight()) return k || Rl(t.fitContent, t, [X, H, V, !0], 500), void 0;
        var R = function () {
          t.validate();
          var M = Wf(t.getContentRect());
          hq(M, H == A ? 20 : H), t.fitRect(M, X, V)
        };
        X ? E.callWhenLoaded(R) : R()
      },
      fitRect: function (Y, O, x) {
        var i = this, m = i.getWidth(), s = i.getHeight(), R = Y.x + Y.width / 2, H = Y.y + Y.height / 2,
          M = L(m / Y.width, s / Y.height), D = i._zoom, z = -R * D + m / 2, $ = -H * D + s / 2;
        0 === M || isNaN(M) || (x && (M = L(1, M)), O ? (i._65I && (delete i._65I.finishFunc, i._65I.stop(!0)), i._14o && i._14o.stop(!0), i.setTranslate(z, $, {
          finishFunc: function () {
            i.setZoom(M, O)
          }
        })) : (i.setTranslate(z, $), i.setZoom(M)))
      },
      toCanvas: function (C, m) {
        m = m || this._zoom, this.validateImpl();
        var I = this, e = I.getContentRect();
        e.width || (e.width = 10), e.height || (e.height = 10);
        var b = Ze(), p = e.x * m, H = e.y * m, B = e.width * m, L = e.height * m;
        Mb(b, B, L, 1);
        var D = dn(b);
        return C = C || this._dataModel.getBackground(), C && yj(D, 0, 0, B, L, C), Of(D, -p, -H), D.scale(m, m), I._42(D), D.restore(), b
      },
      toDataURL: function (c, p, f) {
        return this.toCanvas(c, f).toDataURL(p || "image/png", 1)
      },
      getClipBounds: function () {
        return this._74O
      },
      _42: function (R, Y) {
        var u = this;
        u._93db(R, Y), u.each(function (E) {
          var q = u.getDataUI(E);
          if (q) {
            var g = u._56I[E._id], e = q._htmlView;
            if (g) {
              var T = q._79o();
              if (e = q._htmlView, Q.HtmlNode && E instanceof Q.HtmlNode) q._42(R); else {
                var t = u.getViewRect(), j = e && e.layoutHTML;
                !Y || Xl(Y, T) ? (j && (e.layoutHTML(), q.__outerLayout && delete q.__outerLayout), q._42(R)) : Xl(t, T) || !j || q.__outerLayout || (e.layoutHTML(), q.__outerLayout = !0)
              }
            }
            e && (e.getView && (e = e.getView()), e.style.display = g ? "block" : wc)
          }
        }), u._92db(R, Y)
      },
      validateImpl: function () {
        var C, g, D, b, j, c = this, P = c.tx(), w = c.ty(), z = c._zoom, F = c._canvas, O = this.getWidth(),
          p = this.getHeight(), k = c._29I, V = {x: -P / z, y: -w / z, width: O / z, height: p / z}, N = {}, H = c._34I,
          J = c._24I, $ = c._32I, A = c._23I;
        c._24I = {}, (O !== F.clientWidth || p !== F.clientHeight) && (Mb(F, O, p), $ = 1), $ || Ck(V, k) || ($ = 1), c._29I = V, c.each(function (b) {
          g = b._id;
          var Y = N[g] = c.isVisible(b);
          Y !== c._56I[g] && (J[g] = b, D = c.getDataUI(J[g]), D && D._84o(Y), c._84o(b, Y))
        }, c);
        for (g in J) D = c.getDataUI(J[g]), D && (!$ && c._56I[g] && (j = D._79o(), j && H.add(j)), D.invalidate()), c._83I = 1;
        if (c._56I = N, !$) for (g in J) N[g] && (D = c.getDataUI(J[g]), D && (j = D._79o(), j && H.add(j)));
        if ($ ? b = V : (H.each(function (W) {
          Xl(V, W) && (b = Uk(b, W))
        }), b && (hq(b, R(1, 1 / z)), b.x = n(b.x * z) / z, b.y = n(b.y * z) / z, b.width = t(b.width * z) / z, b.height = t(b.height * z) / z, b = rs(V, b))), c._74O = b, b) {
          C = dn(F);
          var y = b.x, h = b.y, G = b.width, s = b.height;
          y = Math.floor((y * z + P) * Ne), h = Math.floor((h * z + w) * Ne), G = Math.ceil(G * z * Ne) + 1, s = Math.ceil(s * z * Ne) + 1, C.beginPath(), C.rect(y, h, G, s), C.clip(), C.clearRect(y, h, G, s), Gf(C, P, w, z), c._42(C, b), C.restore(), delete c._74O
        }
        if (H.clear(), delete c._32I, A && O > 0 && p > 0) {
          var D = c.getDataUI(A);
          if (D) {
            var j = D._79o(), K = c._29I, d = K.x, v = K.y, u = K.width, Y = K.height, z = c._zoom;
            j && !Xl(j, K) && (j.x + j.width < d && c.tx(-j.x * z), j.x > d + u && c.tx(-(j.x + j.width - u) * z), j.y + j.height < v && c.ty(-j.y * z), j.y > v + Y && c.ty(-(j.y + j.height - Y) * z))
          }
          delete c._23I
        }
        c._83I && (delete c._83I, delete c._84I), c._98O(), Ah(c._24I) || Rl(c.iv, c)
      },
      isScrollBarVisible: function () {
        return !!this._79O
      },
      setScrollBarVisible: function (E) {
        var u = this;
        E !== u.isScrollBarVisible() && (E ? (wm(u._view, u._79O = Zg()), wm(u._79O, u._27I = Zg()), wm(u._79O, u._28I = Zg())) : (up(u._79O), delete u._79O, delete u._27I, delete u._28I), u.fp("scrollBarVisible", !E, E))
      },
      showScrollBar: function () {
        var Q = this;
        Q._79O && (Q._85I || (x(function () {
          Q._86I()
        }, hc), Q.iv()), Q._85I = new Date)
      },
      _86I: function () {
        var Y = this;
        if (Y._85I) {
          var N = new Date, c = N.getTime();
          c - Y._85I.getTime() >= hc ? (delete Y._85I, Y.iv()) : x(function () {
            Y._86I()
          }, hc)
        }
      },
      getVScrollBar: function () {
        return this._27I
      },
      getHScrollBar: function () {
        return this._28I
      },
      _98O: function () {
        var X = this, y = this._27I, H = this._28I;
        if (X._79O) {
          if (X._autoHideScrollBar && !X._85I) return y.style.visibility = sn, H.style.visibility = sn, void 0;
          var V = X.getScrollBarColor(), $ = X._zoom, e = X.getScrollBarSize(), S = X.getViewRect(),
            I = X.getScrollRect(), o = S.height * $, R = I.height * $, A = S.width * $ - e - 2,
            N = o * ((S.y - I.y) * $ / R), l = o * (o / R), z = y.style;
          R - .5 > o ? (Jm > l && (N = N + l / 2 - Jm / 2, 0 > N && (N = 0), N + Jm > o && (N = o - Jm), l = Jm), vk(y, A, N, e, l), z.visibility = hh, z.background = V, z.borderRadius = e / 2 + Kh) : z.visibility = sn;
          var h = S.width * $, b = I.width * $, N = S.height * $ - e - 2, A = h * ((S.x - I.x) * $ / b),
            k = h * (h / b), z = H.style;
          b - .5 > h ? (Jm > k && (A = A + k / 2 - Jm / 2, 0 > A && (A = 0), A + Jm > h && (A = h - Jm), k = Jm), vk(H, A, N, k, e), z.visibility = hh, z.background = V, z.borderRadius = e / 2 + Kh) : z.visibility = sn
        }
      },
      setDataModel: function (X) {
        var N = this, G = N._dataModel, U = N._selectionModel;
        G !== X && (G && (G.ump(N.handleDataModelPropertyChange, N), G.umm(N.handleDataModelChange, N), G.umd(N.handleDataPropertyChange, N), G.removeIndexChangeListener(N._75O, N), G.removeHierarchyChangeListener(N.handleHierarchyChange, N), U || G.sm().ums(N.handleSelectionChange, N)), N._dataModel = X, X.mp(N.handleDataModelPropertyChange, N), X.mm(N.handleDataModelChange, N), X.md(N.handleDataPropertyChange, N), X.addIndexChangeListener(N._75O, N), X.addHierarchyChangeListener(N.handleHierarchyChange, N), U ? U._21I(X) : X.sm().ms(N.handleSelectionChange, N), N.invalidateAll(!0), N.fp(Bn, G, X), N._canvas.style.background = X.getBackground() || "")
      },
      getLayersInfo: function () {
        if (this._layersInfo === S) {
          var q = this.getLayers();
          q ? (this._layersInfo = {}, q.forEach(function (U) {
            var I = mk(U) ? U.name : U;
            this._layersInfo[I] = U
          }, this)) : this._layersInfo = null
        }
        return this._layersInfo
      },
      updateLayers: function () {
        this._layersInfo = S, this.invalidateSelection(), this.redraw()
      },
      handleDataModelPropertyChange: function (S) {
        if ("background" === S.property) {
          var H = this._canvas.style.background, Y = S.newValue || "";
          this._canvas.style.background = Y, this.fp("canvasBackground", H, Y)
        } else "a:width" === S.property || "a:height" === S.property ? (this._83I = 1, this.redraw()) : "layers" === S.property ? this.updateLayers() : "hierarchicalRendering" === S.property && this.redraw()
      },
      handleDataPropertyChange: function (m) {
        this.dm().isHierarchicalRendering() && "parent" === m.property && m.data.hasChildren() && this.redraw(), this.invalidateData(m.data)
      },
      onPropertyChanged: function (k) {
        var A = this, D = k.property;
        if (A.redraw(), "zoom" === D) {
          var u = A.sm().getSelection();
          u.size() && u.each(function (w) {
            w.invalidate()
          })
        }
        tg[D] ? A.showScrollBar() : D === bs && A.onCurrentSubGraphChanged(k)
      },
      onCurrentSubGraphChanged: function () {
        this.sm().cs(), this.reset()
      },
      handleDataModelChange: function (J) {
        var i = this, $ = J.kind, B = J.data;
        if (i._83I = 1, "add" === $) i.invalidateData(B), yc(B) && B.getEdgeGroup() && B.getEdgeGroup().eachSiblingEdge(i.invalidateData, i); else if ($ === ub) {
          i._21Q(B);
          var Q = B._id, V = i._25I[Q];
          if (V) {
            if (i._56I[Q]) {
              var o = V._79o();
              o && i.redraw(o)
            }
            V.dispose(), delete i._25I[Q], delete i._24I[Q], delete i._56I[Q]
          }
          B === i._currentSubGraph && i.setCurrentSubGraph(A)
        } else $ === ip && (i.invalidateAll(!0), i.setCurrentSubGraph(A))
      },
      _75O: function (Z) {
        this.invalidateData(Z.data)
      },
      handleHierarchyChange: function (H) {
        this.dm().isHierarchicalRendering() && H.data.hasChildren() && this.redraw(), this.invalidateData(H.data)
      },
      adjustIndex: function (G) {
        var R = this;
        if (R.isVisible(G)) {
          R.dm().beginTransaction();
          for (var l = G; l._parent && R.isVisible(l._parent);) l = l._parent;
          l && l !== G && R._dataModel.adjustIndex(l), R._dataModel.adjustIndex(G), R.dm().endTransaction()
        }
      },
      getImage: function (A) {
        return A.getImage ? A.getImage() : S
      },
      getSelectWidth: function (h) {
        var q = vf(this.getImage(h));
        return q && $q(q.disableSelectedBorder, h, this) ? 0 : h.s("select.width")
      },
      getSelectColor: function (c) {
        return c.s("select.color")
      },
      isSelectable: function (a) {
        if (!this._clickThroughChecking && a.getParent() instanceof Bp && a.getParent().isSyncSize()) return !1;
        var N = this.getLayersInfo();
        if (N) {
          var B = N[a._layer];
          if (B && B.selectable === !1) return !1
        }
        return a.s("2d.selectable") && this.sm().isSelectable(a)
      },
      isMovable: function (S) {
        var v = this;
        if (yc(S) && S.getStyle(Vm) !== vl) return !1;
        var o = this.getLayersInfo();
        if (o) {
          var m = o[S._layer];
          if (m && m.movable === !1) return !1
        }
        return S.s("2d.movable") ? v._movableFunc ? v._movableFunc(S) : !0 : !1
      },
      isEditable: function (E) {
        var z = this;
        if (Q._uiSerializing) return z._uieditable;
        if (!z._editInteractor || !z.isSelected(E)) return !1;
        if (Xo(E)) {
          var k = z.getDataUI(E);
          if (!k || k._88I) return !1
        }
        if (yc(E) && E.getStyle(Vm) !== vl) return !1;
        var u = this.getLayersInfo();
        if (u) {
          var N = u[E._layer];
          if (N && N.editable === !1) return !1
        }
        return E.s("2d.editable") ? z._editableFunc ? z._editableFunc(E) : !0 : !1
      },
      handleDelete: function () {
        this._editInteractor && (this._editInteractor.handleDelete ? this._editInteractor.handleDelete() : this.removeSelection())
      },
      isPointEditable: function (L) {
        return Kf(L) && 0 !== L.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(L) : !0
      },
      isRectEditable: function (u) {
        return this._rectEditableFunc ? this._rectEditableFunc(u) : !0
      },
      isAnchorEditable: function (n) {
        return this._anchorEditableFunc ? this._anchorEditableFunc(n) : !0
      },
      isRotationEditable: function (m) {
        return m.setRotation && m.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(m) : !0 : !1
      },
      getRotationPoint: function (t) {
        var b = t.getAnchor(), J = t.getScale(), U = this._zoom,
          L = Le(t.getRotation(), 0, -t.getHeight() * J.y * b.y - (J.y < 0 ? -1 : 1) * (Qe ? 32 : 16) / U), _ = t.p();
        return L.x += _.x, L.y += _.y, L
      },
      getLogicalPoint: function (E) {
        var I = this;
        return Gh(E, I._canvas, I.tx(), I.ty(), I._zoom, I._zoom)
      },
      getScreenPoint: function (o, L) {
        var H, u = this;
        return "object" == typeof o ? o.x !== S ? (H = o.x, L = o.y) : (H = o[0], L = o[1]) : H = o, ar(H, L, u._canvas, u.tx(), u.ty(), u._zoom, u._zoom)
      },
      getSelectedDataAt: function (q) {
        var I = this;
        return this.getDataAt(q, function (x) {
          return I.isSelected(x)
        })
      },
      getDataInfoAt: function (i, W, f) {
        var o, G = this.lp(i), P = this.getDataAt(G, W, f);
        if (P) {
          var y = this.getDataUI(P);
          o = {data: P, ui: y, point: G};
          var X = y._38o;
          if (X) {
            var E = X.icons;
            for (var Q in E) {
              var V = E[Q], q = X.rects[Q];
              if (q) for (var R = $q(V.names, P, this), z = R ? R.length : 0, j = q.rotation, c = z - 1; c >= 0; c--) {
                var t = R[c], L = q[c];
                if (en(L, G, j)) return o.part = "icons", o.name = Q, o.icon = t, o.rect = L, o.index = c, o.rotation = j, o
              }
            }
          }
          if (this.isNoteVisible(P)) {
            if (y.note2Info && en(y.note2Info.clickRect, G, A, y.note2Info.scale)) return o.part = "note2", o;
            if (y.noteInfo && en(y.noteInfo.clickRect, G, A, y.noteInfo.scale)) return o.part = "note", o
          }
          if (this.isLabelVisible(P)) {
            if (y.label2Info && en(y.label2Info.rect, G, y.label2Info.rotation, y.label2Info.scale)) return o.part = "label2", o;
            if (y.labelInfo && en(y.labelInfo.rect, G, y.labelInfo.rotation, y.labelInfo.scale)) return o.part = "label", o
          }
          if (P.isInRect && P.isInRect(G)) return o.part = "body", o
        }
        return o
      },
      getDataAt: function (o, c, U) {
        o.target && (o = this.lp(o));
        var r, T = this._zoom;
        return this.reverseEach(function (h) {
          return (c ? c(h) : this.isSelectable(h)) && this.rectIntersects(h, pq(o.x, o.y, U, T)) ? (r = h, !1) : void 0
        }, this), r
      },
      getIconInfoAt: function (S, a) {
        var u = this;
        if (S.target && (S = u.lp(S)), a || (a = u.getDataAt(S)), a) {
          var h = u.getDataUI(a);
          if (h && h._38o) {
            var X, p = h._38o, w = new Oh;
            for (X in p.icons) w.add(X);
            for (var c = w.size() - 1; c >= 0; c--) {
              X = w.get(c);
              for (var m = p.rects[X], W = m.rotation, $ = m.length - 1; $ >= 0; $--) {
                var t = m[$], D = t.width, b = t.height, _ = {x: S.x - t.x - D / 2, y: S.y - t.y - b / 2};
                W != A && (_ = Le(-W, _.x, _.y));
                var t = {x: -D / 2, y: -b / 2, width: D, height: b};
                if (en(t, _)) return {
                  key: X,
                  index: $,
                  name: p.icons[X].names[$],
                  rect: m[$],
                  point: S,
                  rotation: W,
                  relativeRect: t,
                  relativePoint: _,
                  data: a
                }
              }
            }
          }
        }
        return A
      },
      getDatasInRect: function (r, I, v) {
        v === S && (v = 1);
        var R = this, s = new Oh;
        return R.reverseEach(function (G) {
          v && !R.isSelectable(G) || (I ? R.rectIntersects(G, r) : R.rectContains(G, r)) && s.add(G)
        }), s
      },
      moveSelection: function (N, A) {
        var y = this;
        y.dm().beginTransaction(), Jh(y.sm().toSelection(y.isMovable, y), N, A), y.dm().endTransaction()
      },
      moveDatas: function (Y, w, U) {
        var I = this;
        I.dm().beginTransaction(), Y instanceof Oh || (Y = new Oh(Y)), Jh(Y, w, U), I.dm().endTransaction()
      },
      getDataUIBounds: function (w) {
        var s = this.getDataUI(w);
        return s ? s._79o() : A
      },
      drawData: function (S, o, e) {
        var j = this.getDataUI(o);
        if (j) {
          var K = j._79o();
          (!e || Xl(e, K)) && (j._42(S), o instanceof Q.Block && o.eachChild(function (O) {
            this.drawData(S, O, e)
          }, this))
        }
      },
      getBoundsForGroup: function (X) {
        return X.s(rr) ? this.getDataUIBounds(X) : A
      },
      isPixelPerfect: function (f) {
        return f.s("pixelPerfect")
      },
      rectIntersects: function (Z, G) {
        this.validate();
        var p = A;
        if (this._56I[Z._id]) {
          var z = this._25I[Z._id];
          if (z) {
            var M = z._79o();
            if (qm(G, M)) p = !0; else if ((G = rs(G, M)) && (z.rectIntersects && (p = z.rectIntersects(G)), p == A)) {
              if (!this.isPixelPerfect(Z)) return !0;
              var D = G.x, T = G.y, W = G.width, c = G.height, h = this._zoom, N = E.hitMaxArea, I = W * c * h * h;
              if (I > N) {
                var S = Math.sqrt(N / I);
                h *= S
              }
              W *= h, c *= h, 2 > W && (W = 2), 2 > c && (c = 2), D *= h, T *= h;
              var i = zj(W, c);
              Of(i, -D, -T), i.scale(h, h), this._drawForChecking = !0, this.drawData(i, Z, G), this._drawForChecking = !1;
              try {
                for (var U = 0, d = i.getImageData(0, 0, W, c).data; U < d.length; U += 4) if (0 !== d[U + 3]) {
                  p = !0;
                  break
                }
                i.restore()
              } catch (L) {
                Gr = A, p = !1
              }
            }
          }
        }
        return p ? !0 : !1
      },
      rectContains: function (U, p) {
        if (this._56I[U._id]) {
          var y = this._25I[U._id];
          if (y) return qm(p, y._79o())
        }
        return !1
      },
      reset: function () {
        this.setZoom(1), this.setTranslate(0, 0)
      },
      handleKeyDown: function (u) {
        if (!E.isInput(u.target)) {
          var S = this, C = S._focusData, P = C && S._25I[C._id], B = 0, Y = S._dataModel._datas;
          if (!(C && C._enabled && C._editable && P && P.onKeyDown && P.onKeyDown(u) === !0)) if (9 === u.keyCode && (C && (B = Y.indexOf(C), jr(u) ? -1 === --B && (B = 0) : ++B === Y.size() && (B = 0)), S._focusData = C = Y.get(B), S.sm().setSelection(C)), pg(u) ? S.selectAll() : ih(u) && S.isResettable() && S.reset(), S.sm().isEmpty()) {
            if (S._editing) return;
            var o = S.tx(), r = S.ty(), Z = !1, z = jr() ? 100 : 10;
            nl(u) && (o -= z, Z = !0), $p(u) && (r -= z, Z = !0), $j(u) && (o += z, Z = !0), Mj(u) && (r += z, Z = !0), Z && S.setTranslate(o, r)
          } else {
            wj(u) && S.handleDelete(u);
            var q = jr() ? 10 : 1;
            nl(u) && (S.moveSelection(-q, 0), S.fi({kind: "moveLeft"})), $p(u) && (S.moveSelection(0, -q), S.fi({kind: "moveUp"})), $j(u) && (S.moveSelection(q, 0), S.fi({kind: "moveRight"})), Mj(u) && (S.moveSelection(0, q), S.fi({kind: "moveDown"}))
          }
        }
      },
      handleScroll: function (k, S) {
        if (gm(k), !this.getEditInteractor()) {
          var M = this.getDataAt(k);
          if (M) {
            var m = vf(this.getImage(M));
            if (m && $q(m.scrollable, M, this)) return
          }
        }
        var j = this.lp(k);
        S > 0 ? this.scrollZoomIn(j) : 0 > S && this.scrollZoomOut(j)
      },
      handlePinch: function (G, A, T) {
        this._68I || (A > T ? this.pinchZoomIn(G) : this.pinchZoomOut(G))
      },
      checkDoubleClickOnNote: function (n, p) {
        var U = this, F = U.lp(n), P = U.getDataUI(p), $ = P.note2Info;
        return $ && p.s("note2.toggleable") && en($.clickRect, F) ? (p.s(fe, !p.s(fe)), U.fi({
          kind: "toggleNote2",
          event: n,
          data: p
        }), !0) : ($ = P.noteInfo, $ && p.s("note.toggleable") && en($.clickRect, F) ? (p.s(Np, !p.s(Np)), U.fi({
          kind: "toggleNote",
          event: n,
          data: p
        }), !0) : !1)
      },
      _84o: function () {
      },
      isNoteVisible: function () {
        return this._zoom > .15
      },
      isLabelVisible: function () {
        return this._zoom > .15
      },
      isEditVisible: function () {
        return this._zoom > .15
      },
      autoScroll: function (D, g) {
        var N = this, R = N.getAutoScrollZone(), b = R / N.getZoom(), p = R / 4, w = N._29I, C = N.lp(D),
          T = {x: N.tx(), y: N.ty()};
        return C && R > 0 && w && (C.x - w.x < b ? N.translate(p, 0) : w.x + w.width - C.x < b && N.translate(-p, 0), C.y - w.y < b ? N.translate(0, p) : w.y + w.height - C.y < b && N.translate(0, -p)), T.x = N.tx() - T.x, T.y = N.ty() - T.y, g && (g.x += T.x, g.y += T.y), T
      },
      getMoveMode: function (z, f) {
        var t = f.s("2d.move.mode");
        return t ? t : Th["88"] ? "x" : Th["89"] ? "y" : "xy"
      },
      getSerializableProperties: function () {
        return {
          scrollBarColor: 1,
          scrollBarSize: 1,
          autoMakeVisible: 1,
          autoHideScrollBar: 1,
          editable: 1,
          resettable: 1,
          pannable: 1,
          rectSelectable: 1,
          autoScrollZone: 1,
          visibleFunc: 1,
          movableFunc: 1,
          editableFunc: 1,
          pointEditableFunc: 1,
          rectEditableFunc: 1,
          anchorEditableFunc: 1,
          rotationEditableFunc: 1,
          rectSelectBackground: 1,
          rectSelectBorderColor: 1,
          editPointSize: 1,
          editPointBorderColor: 1,
          editPointBackground: 1,
          hoverDelay: 1,
          dataModel: 1,
          selectionModel: 1,
          currentSubGraph: 1,
          zoom: 1,
          translateX: 1,
          translateY: 1
        }
      },
      serializeProperty: function (l, e, g) {
        var d = this;
        return "currentSubGraph" === e ? {__i: l.getId()} : g.serializeProperty(l, e, d)
      },
      deserializeProperty: function (k, R, h) {
        var K = this;
        if ("currentSubGraph" === R) {
          var L = K.dm(), P = L.__idMap;
          return P[k.__i]
        }
        return h.deserializeProperty(k, R, K)
      },
      setDefaultCursor: function (A, R) {
        this._defaultCursor = A, R !== !1 && this.setCursor(A)
      },
      setCursor: function (f) {
        "default" === f && (f = this._defaultCursor || f);
        var $ = this.getView().style;
        $.cursor = f, $.cursor = "-webkit-" + f, $.cursor = "-moz-" + f
      },
      getCurrentConnectActionType: function () {
        return this._currentActionType
      },
      setCurrentConnectActionType: function (F) {
        return F === A || E.getConnectAction(null, F) ? (this._currentActionType = F, this.redraw(), !0) : !1
      },
      isConnectActionVisible: function (A) {
        var T = E.getConnectAction(this);
        if (!T) return !1;
        var w = T.visible;
        return En(w) && (w = w(this, A)), w
      },
      isInteractive: function (k) {
        var R = vf(this.getImage(k));
        return R && $q(R.interactive, k, this) ? !0 : k.s("interactive")
      },
      appendHTML: function (c) {
        var p = this.getView();
        if (!c || c.parentNode === p || c.getView && c.getView() === p) return !1;
        if (c.isSelfViewEvent) return c.addToDOM(p), !0;
        c.getView && (c = c.getView());
        var w = this.getCanvas().nextSibling;
        return w ? p.insertBefore(c, w) : wm(p, c), !0
      },
      layoutHTML: function (w, Z, T) {
        var X, U = this, W = U._zoom;
        if (Z.getView && (X = Z, Z = Z.getView()), Z.style.position = "absolute", T) {
          var M = w.getRect();
          vk(X || Z, U.tx() + M.x * W, U.ty() + M.y * W, M.width * W, M.height * W)
        } else {
          var B = new je, M = w.getAnchorRect(), J = w.getPosition(), I = w.getScale(), Q = Z.style;
          vk(X || Z, M), B.appendTranslate(U.tx(), U.ty()), B.appendScale(W, W), B.append(new je(w.getRotation(), J.x, J.y, I.x, I.y)), xm(Q, "transform", "matrix(" + B.a.toFixed(5) + ", " + B.b.toFixed(5) + ", " + B.c.toFixed(5) + ",\n    " + B.d.toFixed(5) + ", " + B.tx.toFixed(5) + ", " + B.ty.toFixed(5) + ")"), xm(Q, "transformOrigin", (-M.x).toFixed(5) + "px " + (-M.y).toFixed(5) + "px"), Z.maxtrixAppend = B.invert().translate(-M.x, -M.y)
        }
      }
    });
    var cn = function (t, L) {
      var y = this;
      y.gv = t, y.s = function (O) {
        return L.getStyle(O)
      }, y._data = L, y._87I = new Oh
    };
    Dr(cn, F, {
      _6I: A, ms_icons: 1, _84o: function () {
      }, dispose: function () {
      }, isShadowed: function () {
        return this.s("shadow") || this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
      }, getSelectWidth: function () {
        var A = this, R = A.gv.isSelected(A._data);
        return !R || A.isShadowed() ? 0 : A.gv.getSelectWidth(A._data)
      }, getSelectColor: function () {
        return this.gv.getSelectColor(this._data)
      }, getBodyColor: function (T) {
        var d = this._data, c = this.gv.getBodyColor(d);
        return c ? c : T ? d.getStyle(T) : A
      }, _2Q: function (w) {
        return this.s(w)
      }, _1Q: function (a, R, r, f) {
        var W = this.s, z = W(R + ".dash.color");
        a.strokeStyle = z, a.lineWidth = r, a.stroke(), W(R + ".dash.3d") && Wq(a, z, W(R + ".dash.3d.color"), r, this.gv._zoom, W(R + ".dash.3d.accuracy")), Rh(a, f)
      }, invalidate: function () {
        this._6I = A
      }, _79o: function () {
        var W = this;
        if (!W._6I) {
          var n = W._data, y = W.gv;
          W.labelInfo = W.label2Info = W.noteInfo = W.note2Info = W._38o = A, W._87I.clear(), W.interactiveInfo = y.isInteractive(n) ? {} : A, W._3O(), W._55O = y.isEditable(n) ? {
            _42O: y.isRectEditable(n),
            _43O: y.isPointEditable(n),
            _56O: y.isRotationEditable(n)
          } : A, W._6I = W._81o()
        }
        return W._6I
      }, _3O: function () {
      }, getPosition: function () {
        return ui
      }, _68o: function (R, i) {
        R && this._87I.add(Ip(R, i))
      }, _81o: function () {
        var E = this, o = E.s;
        E._24O(Dg, "getLabel"), E._24O(rl, "getLabel2"), E._26O(Wd, "getNote"), E._26O(qc, "getNote2"), E._15O(), E._55O && E._48O();
        var T;
        if (E._87I.each(function (P) {
          T = Uk(T, P)
        }), T && E.isShadowed()) {
          var j = Wf(T);
          j.x += o("shadow.offset.x"), j.y += o("shadow.offset.y"), hq(j, o("shadow.blur")), T = Uk(T, j)
        }
        return E._87I.clear(), T
      }, _42: function (w) {
        var H = this, I = H._data, P = H.gv, O = H.s, c = O("opacity"), X = this.isShadowed();
        if (X) {
          var T = w.shadowOffsetX, L = w.shadowOffsetY, t = w.shadowBlur, S = w.shadowColor, G = P.getZoom();
          w.shadowOffsetX = O("shadow.offset.x") * G, w.shadowOffsetY = O("shadow.offset.y") * G, w.shadowBlur = O("shadow.blur") * G, w.shadowColor = H.getSelectColor()
        }
        if (c != A) {
          var B = w.globalAlpha;
          w.globalAlpha = c
        }
        H._80o(w), P.isLabelVisible(I) && ((!P._drawForChecking || O("label.selectable")) && xi(w, H.labelInfo), (!P._drawForChecking || O("label2.selectable")) && xi(w, H.label2Info)), P.isNoteVisible(I) && (yb(w, H.noteInfo), yb(w, H.note2Info)), H._99O(w), c != A && (w.globalAlpha = B), X && (w.shadowOffsetX = T, w.shadowOffsetY = L, w.shadowBlur = t, w.shadowColor = S)
      }, _80o: function () {
      }, _47O: function () {
      }, _24O: function (j, Q) {
        var f = this, i = f._data, P = f.gv, F = f.s, I = P[Q](i);
        if (I != A) {
          var S = F(j + ".scale"), U = F(j + ".max"), Z = F(j + ".position"), M = f[j + "Info"] = {
            label: I,
            scale: S,
            color: P[Q + "Color"](i),
            font: F(j + ".font"),
            opacity: F(j + ".opacity"),
            align: F(j + ".align"),
            rotation: f.getRotation(F(j + ".rotation"), !1, Z),
            background: P[Q + "Background"](i)
          }, y = ms(M, I);
          U > 0 && U < y.width && (M.labelWidth = y.width, y.width = U), 1 !== S && (y.width *= S, y.height *= S);
          var z = f.getPosition(Z, F(j + ".offset.x"), F(j + ".offset.y"), y, F(j + ".position.fixed"));
          if (y.x = z.x - y.width / 2, y.y = z.y - y.height / 2, f._68o(M.rect = y, M.rotation), 1 !== S) {
            var h = y.width / S, r = y.height / S;
            M.rect = {x: z.x - h / 2, y: z.y - r / 2, width: h, height: r}
          }
        }
      }, _26O: function (E, F) {
        var p = this, i = p.gv, I = p._data, g = p.s, q = i[F](I);
        if (q != A) {
          var d, V, a = g(E + ".scale"), m = p[E + "Info"] = {
            note: q,
            scale: a,
            data: I,
            view: i,
            expanded: g(E + ".expanded"),
            font: g(E + ".font"),
            color: g(E + ".color"),
            opacity: g(E + ".opacity"),
            align: g(E + ".align"),
            icon: g(E + ".icon"),
            backgroundImage: g(E + ".backgroundImage"),
            borderWidth: g(E + ".border.width"),
            borderColor: g(E + ".border.color"),
            background: i[F + "Background"](I)
          }, X = p.getPosition(g(E + ".position"), g(E + ".offset.x"), g(E + ".offset.y")), u = X.x, Z = X.y;
          if (m.expanded) {
            var _, w = g(E + ".max"), W = g(E + ".backgroundImage");
            W ? (W = vf(W), _ = {
              width: Hk(W, I),
              height: Ll(W, I)
            }) : _ = ms(m, q), _.width += 6, _.height += 2, w > 0 && w < _.width && (m.labelWidth = _.width, _.width = w), d = _.width, V = _.height + 8, m.clickRect = {
              x: u - d * a / 2,
              y: Z - V * a,
              width: d * a,
              height: V * a * _.height / V
            }
          } else {
            var H = g(E + ".icon");
            H ? (H = vf(H), d = Hk(H, I), V = Ll(H, I)) : (d = 12, V = 18), m.clickRect = {
              x: u - d * a / 2,
              y: Z - V * a,
              width: d * a,
              height: V * a
            }
          }
          m.rect = {x: u - d / 2, y: Z - V * a / 2 - V / 2, width: d, height: V};
          var o = t(m.borderWidth / 2) * a;
          p._68o({x: u - d * a / 2 - o, y: Z - V * a - o, width: d * a + 2 * o, height: V * a + 2 * o})
        }
      }, _48O: function () {
      }, _99O: function (e) {
        var V = this, o = V._38o;
        if (o) {
          var f = V.gv, S = V._data, b = o.icons, J = V.interactiveInfo;
          J && (J._38o = {});
          for (var z in b) {
            var l = b[z], G = o.rects[z];
            if (G) {
              J && (J._38o[z] = []);
              var W = $q(l.opacity, S, f), v = $q(l.names, S, f), $ = v ? v.length : 0, U = G.rotation;
              if (W != A) {
                var a = e.globalAlpha;
                e.globalAlpha *= W
              }
              for (var B = 0; $ > B; B++) {
                var K = v[B], H = vf(K), g = G[B];
                if (U) {
                  var t = g.x + g.width / 2, m = g.y + g.height / 2;
                  e.save(), Of(e, t, m), Rq(e, U), Of(e, -t, -m)
                }
                J && J._38o[z].push(e.interactiveInfo = {
                  compInfos: [],
                  matrix: U ? new je(U, t, m).appendTranslate(-t, -m) : new je
                }), Jl(e, H, $q(l.stretch, S, f), g.x, g.y, g.width, g.height, V._data, V.gv), e.interactiveInfo = A, U && e.restore()
              }
              W != A && (e.globalAlpha = a)
            }
          }
        }
      }
    });
    var Yl = function (p, H) {
      Eo(Yl, this, [p, H])
    };
    Dr(Yl, cn, {
      _checkEmptyRect: !0, _40O: function (x, z) {
        var N = this, e = N.s, U = x.rect;
        (x.borderColor = N.gv.getBorderColor(N._data)) && (x.borderType = e("border.type"), x.borderWidth = e("border.width"), x.borderPadding = e("border.padding"), z = R(z, x.borderPadding + x.borderWidth / 2));
        var M = N._data.getScale(), g = R(1, R(C(M.x), C(M.y)));
        if (x.selectWidth = N.getSelectWidth()) {
          var w = N.gv._zoom;
          x.selectType = e("select.type"), x._97o = N.getSelectColor(), x.selectPadding = e("select.padding"), z = R(z, (x.selectPadding + x.selectWidth / 2 / w) / g)
        }
        z > 0 && (z *= g, U = Wf(U), hq(U, z)), N._68o(U)
      }, _39O: function (p, h) {
        var B, g = this, W = h.rect;
        if (h.borderWidth > 0 && (B = h.borderPadding, p.strokeStyle = h.borderColor, p.lineWidth = h.borderWidth, jf(p, h.borderType, {
          x: W.x - B,
          y: W.y - B,
          width: W.width + 2 * B,
          height: W.height + 2 * B
        }), p.stroke()), h.selectWidth > 0) {
          var s = g.gv._zoom;
          if (B = h.selectPadding, p.strokeStyle = h._97o, p.lineWidth = h.selectWidth / s, h.rotation != A) {
            p.save(), p.translate(h.position.x, h.position.y), p.rotate(h.rotation);
            var k = g._data, J = k.getWidth(), U = k.getHeight(), w = h.scale, E = h.anchor;
            W = {x: w.x * -J * E.x, y: w.y * -U * E.y, width: w.x * J, height: w.y * U}
          }
          jf(p, h.selectType, {
            x: W.x - B,
            y: W.y - B,
            width: W.width + 2 * B,
            height: W.height + 2 * B
          }), h.rotation != A && p.restore(), p.stroke()
        }
      }, dispose: function () {
        var v = this, O = v._htmlView;
        Yl.superClass._3O.call(v), O && (O.onHTMLRemoved && O.onHTMLRemoved(), up(O))
      }, _3O: function () {
        var w = this, $ = w.s, D = w._data, m = w.gv, I = D.getStyle(Mq), Z = w.getBodyColor(), b = w._83o = I ? {
          shape: I,
          _53o: w.getBodyColor("shape.background"),
          _27Q: vf($("shape.repeat.image"), Z),
          shapeGradientPack: $("shape.gradient.pack"),
          _54o: $("shape.border.width"),
          _55o: $("shape.border.color"),
          _56o: $("shape.border.3d"),
          _57o: $("shape.border.3d.color"),
          _58o: $("shape.border.3d.accuracy"),
          shapeGradient: $("shape.gradient"),
          _59o: $("shape.gradient.color"),
          _60o: $("shape.border.pattern"),
          _61o: $("shape.border.cap"),
          _62o: $("shape.border.join"),
          shapeForeground: $("shape.foreground"),
          bodyColor: Z
        } : {img: vf(m.getImage(D), Z), bodyColor: Z, stretch: $("image.stretch")};
        if (V && !j) ; else {
          var z, Y = b.img;
          Y && Y.renderHTML ? (w._htmlInfo && w._htmlInfo.img !== Y && (w._htmlInfo = A), w._htmlInfo || (w._htmlInfo = {
            img: Y,
            cache: {}
          }), z = Y.renderHTML(D, m, w._htmlInfo.cache)) : w._htmlInfo = A, w._htmlView && w._htmlView !== z && (w._htmlView.onHTMLRemoved && w._htmlView.onHTMLRemoved(), up(w._htmlView.getView ? w._htmlView.getView() : w._htmlView)), (w._htmlView = z) && m.appendHTML(z) && z.onHTMLAdded && z.onHTMLAdded(), b.rect = D.getRect(), b.position = D.p(), b.scale = D.getScale(), b.anchor = D.getAnchor(), b.rotation = D.getRotation(), I === Kd && (b._63o = $("shape.depth"));
          var X = 0;
          if (I) X = Ap(A, b._54o / 2, b._62o), w.s("shape.dash") && (X = R(X, (w.s("shape.dash.width") || b._54o) / 2)); else if (Y && Y.boundExtend) if (X = $q(Y.boundExtend, D, m), Y.boundExtendAbsolute) {
            var B = D.getScale();
            X /= m._zoom * R(1, R(C(B.x), C(B.y)))
          } else if (!$q(Y.fitSize, D, m)) {
            var E = $q(Y.width, D, m), W = $q(Y.height, D, m);
            X *= R(D.getWidth() / E, D.getHeight() / W)
          }
          w._40O(b, X);
          var H = $("clip.percentage");
          if (1 > H && (0 > H && (H = 0), b.clipRect = sf(D.getAnchorRect(), $("clip.direction"), H)), I) {
            var d = $("shape.fill.clip.percentage");
            1 > d && (0 > d && (d = 0), b.shapeClipRect = sf(D.getAnchorRect(), $("shape.fill.clip.direction"), d));
            var e = $("shape.foreground.clip.percentage");
            1 > e && (0 > e && (e = 0), b.shapeForegroundClipRect = sf(D.getAnchorRect(), $("shape.foreground.clip.direction"), e))
          }
        }
      }, getPosition: function (L, a, Z, D) {
        var l = um(L, this._83o.rect, D);
        return l.x += a, l.y += Z, l
      }, _80o: function (J) {
        var w = this, b = w.s, H = w.gv, C = w._data, S = w._83o, G = S.rect, i = S.position, h = S.rotation,
          K = S.anchor, r = S.scale, I = S.shape, D = S.clipRect;
        if (!w._checkEmptyRect || G.width > 0 && G.height > 0) {
          var L = C.getSize();
          if (L.x = -L.width * K.x, L.y = -L.height * K.y, J.save(), Of(J, i.x, i.y), Rq(J, h), jd(J, r.x, r.y), D && (J.beginPath(), J.rect(D.x, D.y, D.width, D.height), J.clip()), H._drawForChecking && S.img && $q(S.img.pixelPerfect, C, H) === !1) yj(J, L.x, L.y, L.width, L.height, "#888888"); else if (w.freeDraw) w.freeDraw(J, L, S); else if (I) {
            var z, g, F, l, p = S._60o, t = To(J, p), Y = S._53o, R = S._27Q, m = S._54o, k = S._55o,
              U = S.shapeGradientPack, n = J.lineJoin, O = J.lineCap;
            if ("roundRect" === I ? z = b("shape.corner.radius") : "polygon" === I ? z = b("shape.polygon.side") : "arc" === I && (z = b("shape.arc.from"), g = b("shape.arc.to"), F = b("shape.arc.close"), l = b("shape.arc.oval")), J.lineJoin = S._62o, J.lineCap = S._61o, Y || R || U) {
              var T = S.shapeClipRect;
              T && (J.save(), J.beginPath(), J.rect(T.x, T.y, T.width, T.height), J.clip()), jf(J, I, L, z, g, F, l), U ? Eg(J, U) : R ? pc(J, R, S.bodyColor, null, C, H) : cf(J, Y, S.shapeGradient, S._59o, L), J.fill(), T && J.restore(), U && J.restore(), J !== t && jf(t, I, L, z, g, F, l)
            } else jf(t, I, L, z, g, F, l);
            var Z = S.shapeForeground;
            if (Z) {
              J.save();
              var d = S.shapeForegroundClipRect;
              d && (J.beginPath(), J.rect(d.x, d.y, d.width, d.height), J.clip()), jf(J, I, L, z, g, F, l), cf(J, Z, b("shape.foreground.gradient"), b("shape.foreground.gradient.color"), L), J.fill(), J.restore()
            }
            if (m > 0) {
              var s = b("shape.border.width.absolute");
              s && (J.save(), J.setTransform(1, 0, 0, 1, 0, 0)), J.lineWidth = m, J.strokeStyle = k, J.stroke(), s && J.restore(), S._56o && Wq(J, k, S._57o, m, H._zoom, S._58o)
            }
            if (Rh(J, p), b("shape.dash")) {
              var c = b("shape.dash.width") || m;
              if (c > 0) {
                p = b("shape.dash.pattern");
                var t = To(J, p, w._2Q("shape.dash.offset"));
                t !== J && jf(t, I, L, z, g, F, l), w._1Q(J, "shape", c, p)
              }
            }
            Yj(J, Y, S._63o, L), J.lineJoin = n, J.lineCap = O
          } else {
            var X = w.interactiveInfo;
            X && (J.interactiveInfo = X.bodyInfo = {
              compInfos: [],
              matrix: new je(h, i.x, i.y, r.x, r.y)
            }), Jl(J, S.img, S.stretch, L.x, L.y, L.width, L.height, C, H, S.bodyColor), J.interactiveInfo = A
          }
          J.restore()
        }
        w._39O(J, S)
      }, _48O: function () {
      }, _47O: function () {
      }
    });
    var sk = function (p, l) {
      Eo(sk, this, [p, l])
    }, Sc = function (X, E, A, F) {
      var O = lf(X, E);
      return A = F ? L(A, O) : un(A, O), O ? A /= O : A = 0, {x: X.x + (E.x - X.x) * A, y: X.y + (E.y - X.y) * A}
    };
    Dr(sk, cn, {
      _3O: function () {
        var q, y = this, D = y._data, P = y.gv, j = y.s, s = j(Vm), x = D.isLooped(), K = j("edge.width"),
          $ = j("edge.center"), p = j("edge.offset"), C = P.getBorderColor(D), u = C ? j("border.width") : 0,
          Z = y.getSelectWidth(), n = D._40I, _ = D._41I, F = y._78o = n && _ ? {
            looped: x,
            type: s,
            width: K,
            center: $,
            color: y.getBodyColor("edge.color"),
            borderColor: C,
            borderWidth: u,
            _97o: Z ? y.getSelectColor() : A,
            selectWidth: Z,
            pattern: j("edge.pattern"),
            cap: j("edge.cap"),
            join: j("edge.join"),
            is3d: j("edge.3d"),
            _67o: j("edge.3d.color"),
            _66o: j("edge.3d.accuracy")
          } : A;
        if (F) {
          var o = E.getEdgeType(s);
          if (o) {
            var t = o(D, ud(y, P, D, x, s), P, y._19Q);
            t.points && t.points.size() > 1 ? (F.edgeTypeInfo = t, q = Ue(F.edgeTypeInfo.points)) : t[fm] && t.rect && (F.edgeTypeInfo = t, q = t.rect)
          } else {
            var T = j("edge.source.anchor.x"), m = j("edge.source.anchor.y"), B = j("edge.target.anchor.x"),
              J = j("edge.target.anchor.y"),
              k = gs(P, n, j("edge.source.position"), j("edge.source.offset.x"), j("edge.source.offset.y"), T, m),
              e = gs(P, _, j("edge.target.position"), j("edge.target.offset.x"), j("edge.target.offset.y"), B, J);
            if (s === vl) {
              var M = F.points = j(Ni) || ai, b = M.size();
              F.segments = j("edge.segments");
              var H = T !== S || m !== S, l = B !== S || J !== S;
              if (!$) if (p) H || (k = Sc(k, b ? M.get(0) : e, p, b)), l || (e = Sc(e, b ? M.get(b - 1) : k, p, b)); else {
                var Q;
                H || (Q = kp(k, b ? M.get(0) : e, Cf(P, n)), Q && (k = {
                  x: Q[0],
                  y: Q[1]
                })), l || (Q = kp(b ? M.get(b - 1) : k, e, Cf(P, _)), Q && (e = {x: Q[0], y: Q[1]}))
              }
              q = Uk(Ue(F.points), Ue(k, e))
            } else {
              var G = ud(y, P, D, x, s);
              if (y._19Q || (G = -G), x) k = Wf(k), k.x = P.getNodeRect(n).x, F.radius = G, q = {
                x: k.x - G,
                y: k.y - G,
                width: 2 * G,
                height: 2 * G
              }; else {
                var O = lf(k, e), c = un(p, O), N = {x: c, y: G}, r = {x: O - c, y: G}, w = i(e.y - k.y, e.x - k.x),
                  g = F.mat = new uh(w);
                if (F.orienAngle = w, F.angle = e.x < k.x ? w + I : w, F.rect = {
                  x: N.x,
                  y: N.y,
                  width: r.x - N.x,
                  height: 0
                }, F.origin = k, N = g.tf(N), N.x += k.x, N.y += k.y, r = g.tf(r), r.x += k.x, r.y += k.y, $) {
                  var v = {x: O, y: 0};
                  v = g.tf(v), v.x += k.x, v.y += k.y, q = Ue([k, N, r, v]), F.c1 = k, F.c2 = v
                } else q = Ue(N, r);
                k = N, e = r
              }
            }
            F.sourcePoint = k, F.targetPoint = e, D._lastSourcePoint = k, D._lastTargetPoint = e
          }
          var a = 0;
          j("edge.dash") && (a = j("edge.dash.width") || K);
          var U = "square" === F.cap ? .71 : .5;
          Ap(q, R(a * U, K * U + u + Z), F.join), y._68o(q)
        }
      }, getRotation: function (x, M, z) {
        x = x || 0;
        var U = this._78o;
        if (U) {
          var V, T = U.angle, Q = U.points, s = U.edgeTypeInfo;
          if (T != A) return M ? U.orienAngle + x : T + x;
          if (s && s[fm]) return s.getRotation ? s.getRotation(this, x, M, z) : 0;
          if (s && s.points) {
            var m = s.points;
            return V = m.size(), eq[z] ? V && 0 === V % 2 ? td(m.get(V / 2 - 1), m.get(V / 2), M, x) : x : kq[z] ? td(m.get(0), m.get(1), M, x) : td(m.get(V - 2), m.get(V - 1), M, x)
          }
          if (Q) return V = Q.size(), eq[z] ? V && 0 === V % 2 ? td(Q.get(V / 2 - 1), Q.get(V / 2), M, x) : x : kq[z] ? td(U.sourcePoint, V ? Q.get(0) : U.targetPoint, M, x) : td(V ? Q.get(V - 1) : U.sourcePoint, U.targetPoint, M, x)
        }
        return x
      }, getPosition: function (F, w, v, n, h) {
        var u = this._78o;
        if (u) {
          var Q, d = u.type, Z = u.points, b = u.edgeTypeInfo, K = u.sourcePoint, E = u.targetPoint;
          if (!d) return u.looped ? {
            x: K.x - u.radius + w,
            y: K.y + v
          } : (h && K && E && (K.x > E.x || K.x === E.x && K.y > E.y) && (F = np[F], v = -v), Q = um(F, u.rect, n), Q.x += w, Q.y += v, Q = u.mat.tf(Q), Q.x += u.origin.x, Q.y += u.origin.y, Q);
          if (b && b[fm]) return b.getPosition ? b.getPosition(this, F, w, v, n, h) : {
            x: (K.x + E.x) / 2,
            y: (K.y + E.y) / 2
          };
          if (Z) {
            var Q, C = Z.size();
            if (eq[F]) {
              if (C) {
                var p = C % 2;
                if (0 === p) return Ih(Z.get(C / 2 - 1), Z.get(C / 2), F, w, v, n, h);
                Q = Z.get((C - p) / 2)
              } else Q = {x: (K.x + E.x) / 2, y: (K.y + E.y) / 2};
              return Q = um(F, {x: Q.x, y: Q.y, width: 0, height: 0}, n), Q.x += w, Q.y += v, Q
            }
            return kq[F] ? Ih(K, C ? Z.get(0) : E, F, w, v, n, h) : Ih(C ? Z.get(C - 1) : K, E, F, w, v, n, h)
          }
          if (b) {
            var H = b.points, C = H.size();
            if (eq[F]) {
              var p = C % 2;
              return 0 === p ? Ih(H.get(C / 2 - 1), H.get(C / 2), F, w, v, n, h) : (Q = H.get((C - p) / 2), Q = um(F, {
                x: Q.x,
                y: Q.y,
                width: 0,
                height: 0
              }, n), Q.x += w, Q.y += v, Q)
            }
            return kq[F] ? Ih(H.get(0), H.get(1), F, w, v, n, h) : Ih(H.get(C - 2), H.get(C - 1), F, w, v, n, h)
          }
        }
        return ui
      }, _42: function (r) {
        this._78o && sk.superClass._42.call(this, r)
      }, drawPath: function (O, L) {
        O.beginPath();
        var M = L.type, J = L.points, l = L.segments, S = L.edgeTypeInfo;
        if (!M || J) {
          var q = L.sourcePoint, e = q.x, u = q.y, d = L.targetPoint, D = d.x, T = d.y;
          if (M) if (l) {
            var i = new Oh({x: e, y: u});
            i.addAll(J), i.add({x: D, y: T}), tb(O, i, l)
          } else O.moveTo(e, u), J.each(function (d) {
            O.lineTo(d.x, d.y)
          }), O.lineTo(D, T); else L.looped ? O.arc(e, u, L.radius, 0, U, !0) : L.center ? (O.moveTo(L.c1.x, L.c1.y), O.lineTo(e, u), O.lineTo(D, T), O.lineTo(L.c2.x, L.c2.y)) : (O.moveTo(e, u), O.lineTo(D, T))
        } else S && (S.points ? tb(O, S.points, S.segments) : S[fm] && S[fm](O, S))
      }, _80o: function (Z) {
        var u = this, U = u.s, D = u._78o, E = D.width, h = D.selectWidth, r = D.borderWidth, m = D.color,
          L = Z.lineJoin, z = Z.lineCap, e = D.pattern;
        Z.lineJoin = D.join, Z.lineCap = D.cap, u.drawPath(To(Z, e), D);
        var o = U("edge.width.absolute");
        if (o && (Z.save(), Z.setTransform(1, 0, 0, 1, 0, 0)), h && (Z.strokeStyle = D._97o, Z.lineWidth = E + 2 * (r + h), Z.stroke()), r && (Z.strokeStyle = D.borderColor, Z.lineWidth = E + 2 * r, Z.stroke()), Z.strokeStyle = m, Z.lineWidth = E, Z.stroke(), D.is3d && Wq(Z, m, D._67o, E, u.gv._zoom, D._66o), o && Z.restore(), Rh(Z, e), U("edge.dash")) {
          e = U("edge.dash.pattern");
          var b = To(Z, e, u._2Q("edge.dash.offset"));
          b !== Z && u.drawPath(b, D), u._1Q(Z, "edge", U("edge.dash.width") || E, e)
        }
        Z.lineJoin = L, Z.lineCap = z
      }, _48O: function () {
      }, _47O: function () {
      }, _71o: function (z, t) {
        var G = this, i = G._data;
        if (G._19Q = !0, !i.getEdgeGroup()) return z ? i.s("edge.gap") : 0;
        var a, Q = 0, j = 0, _ = 0;
        if (i.getEdgeGroup().getSiblings().each(function (U) {
          U.each(function (q) {
            if (G.gv.isVisible(q) && q.s(Vm) == t) {
              var H = q.s("edge.gap");
              a ? (j += _ / 2 + H / 2, _ = H) : (a = q, _ = H), q === i && (Q = j)
            }
          })
        }), z) return j - Q + _;
        var d = Q - j / 2;
        return a && i._40I !== a._40I && (G._19Q = !1), d
      }
    });
    var Im = function (f, A) {
      Eo(Im, this, [f, A])
    };
    Dr(Im, Yl, {
      _3O: function () {
        var f, c, N = this, p = N.s, m = N._data, R = N.gv;
        if (N._88I = A, m.isExpanded() && m.eachChild(function (Y) {
          var H = R.getBoundsForGroup(Y);
          H && (c || (c = []), c.push(H), f = Uk(f, H))
        }), f) {
          var D = R.getLabel(m), S = p("group.type");
          f = uq(S, c, f), nc(f, m, "group.padding", 1);
          var W = N._88I = {type: S, rect: f, _64o: f};
          if (!S && D != A) {
            var H, l = N.labelInfo = {
              label: D,
              color: p("group.title.color"),
              font: p("group.title.font"),
              align: p("group.title.align")
            }, O = ms(l, D), z = O.width, b = O.height, U = p("group.title.align");
            z > f.width && (f.width = z), l.rect = {
              y: f.y - b,
              width: O.width,
              height: b
            }, H = U === kl ? f.x : U === we ? f.x + f.width - z : f.x + f.width / 2 - z / 2, l.rect.x = H, W.titleRect = {
              x: f.x,
              y: f.y - b,
              width: f.width,
              height: b + 1
            }, W.rect = {x: f.x, y: f.y - b, width: f.width, height: f.height + b}
          }
          N._40O(W, p("group.border.width") / 2)
        } else Im.superClass._3O.call(N)
      }, getPosition: function (v, r, e, Q) {
        var x = this._88I;
        if (x) {
          var m = um(v, x.rect, Q);
          return m.x += r, m.y += e, m
        }
        return Im.superClass.getPosition.apply(this, arguments)
      }, _24O: function (J, Q) {
        var K = this._88I;
        (!K || K.type || "label2" === J) && Im.superClass._24O.call(this, J, Q)
      }, _80o: function (n) {
        var x = this, V = x._88I;
        if (V) {
          var p = x._data, X = x.s, Z = x.gv, c = V.type, I = V.rect, K = V._64o, $ = V.titleRect, H = x.getBodyColor(),
            l = vf(X("group.image"), H), h = X("group.image.stretch"), k = x.getBodyColor("group.background"),
            z = vf(X("group.repeat.image"), H), L = X("group.gradient.pack"), R = X("group.gradient"),
            w = X("group.gradient.color"), T = X("group.depth");
          if (c) {
            var v = X("group.border.pattern"), t = X("group.border.width"), D = n.lineJoin, i = n.lineCap;
            if (n.lineJoin = X("group.border.join"), n.lineCap = X("group.border.cap"), l) {
              if (n.save(), jf(n, c, I), n.clip(), Jl(n, l, h, I.x, I.y, I.width, I.height, p, Z, H), n.restore(), t > 0) {
                var m = To(n, v);
                jf(m, c, I), n.lineWidth = t, n.strokeStyle = X("group.border.color"), n.stroke(), Rh(n, v)
              }
            } else {
              var m = To(n, v);
              k || z || L ? (jf(n, c, I), L ? Eg(n, L) : z ? pc(n, z, H, null, p, Z) : cf(n, k, R, w, I), n.fill(), L && n.restore(), n !== m && jf(m, c, I)) : jf(m, c, I), t > 0 && (n.lineWidth = t, n.strokeStyle = X("group.border.color"), n.stroke()), Rh(n, v), c === Kd && Yj(n, k, T, I)
            }
            n.lineJoin = D, n.lineCap = i
          } else if (l ? Jl(n, l, h, K.x, K.y, K.width, K.height, p, Z, x.getBodyColor()) : (k || z) && (z ? pc(n, z, H, null, p, Z) : cf(n, k, R, w, K), jf(n, Kd, K), n.fill(), Yj(n, k, T, K)), $) {
            var E = X("group.title.background");
            yj(n, $.x, $.y, $.width, $.height, E), Yj(n, E, T, $)
          }
          x._39O(n, V)
        } else Im.superClass._80o.call(x, n)
      }
    });
    var Vd = function (s, O) {
      Eo(Vd, this, [s, O])
    };
    Dr(Vd, Yl, {
      _80o: function (K) {
        this._39O(K, this._83o)
      }
    });
    var Vn = function ($, Q) {
      Eo(Vn, this, [$, Q])
    };
    Dr(Vn, Yl, {
      _3O: function () {
        var P = this, l = P._data, f = P.s, c = P.gv, G = l.getPoints(), h = c.getBorderColor(l),
          Q = h ? f("border.width") : 0, w = P.getSelectWidth(), L = f("shape.border.width"), M = l.getRect(),
          y = c.getBodyColor(l), F = P._99o = G.isEmpty() ? A : {
            rect: M,
            rotation: l.getRotation(),
            fillRule: f("shape.fill.rule"),
            scale: l.getScale(),
            position: l.p(),
            points: G,
            segments: l.getSegments(),
            bodyColor: y,
            borderColor: h,
            borderWidth: Q,
            _94o: f("shape.border.3d"),
            _95o: f("shape.border.3d.color"),
            _96o: f("shape.border.3d.accuracy"),
            _97o: w ? P.getSelectColor() : A,
            selectWidth: w,
            _53o: f("shape.background"),
            _27Q: vf(f("shape.repeat.image"), y),
            shapeGradientPack: f("shape.gradient.pack"),
            _54o: L,
            _55o: f("shape.border.color"),
            shapeGradient: f("shape.gradient"),
            _59o: f("shape.gradient.color"),
            _60o: f("shape.border.pattern"),
            _61o: f("shape.border.cap"),
            _62o: f("shape.border.join"),
            shapeForeground: f("shape.foreground")
          };
        if (F) {
          var j = l.getScale(), K = R(1, R(C(j.x), C(j.y)));
          f("shape.dash") && f("shape.dash.width") > L && (L = f("shape.dash.width"));
          var t = L * ("square" === F._61o ? .71 : .5) + Q + w / P.gv._zoom / K;
          t && (t *= K, M = Wf(M), Ap(M, t, F._62o)), P._68o(M);
          var d = f("clip.percentage");
          1 > d && (0 > d && (d = 0), F.clipRect = sf(l.getAnchorRect(), f("clip.direction"), d));
          var O = f("shape.fill.clip.percentage");
          1 > O && (0 > O && (O = 0), F.shapeClipRect = sf(l.getAnchorRect(), f("shape.fill.clip.direction"), O));
          var _ = f("shape.foreground.clip.percentage");
          1 > _ && (0 > _ && (_ = 0), F.shapeForegroundClipRect = sf(l.getAnchorRect(), f("shape.foreground.clip.direction"), _))
        }
      }, getPosition: function (L, m, c, y) {
        var j = this._99o;
        if (j) {
          var J = um(L, j.rect, y);
          return J.x += m, J.y += c, J
        }
        return ui
      }, _42: function (n) {
        this._99o && Vn.superClass._42.call(this, n)
      }, _80o: function (l) {
        var o, F = this, v = F.s, d = F._99o, f = d.position, D = d.scale, _ = d.rotation, h = d.bodyColor,
          P = d.borderWidth, R = d.selectWidth, q = d._53o, A = d._27Q, u = d.shapeGradientPack, U = d._54o,
          O = d.clipRect, K = d.shapeClipRect, z = d.points, L = d.segments, a = F._data.isClosePath(), p = d.fillRule,
          n = q || A || u;
        l.save(), Of(l, f.x, f.y), Rq(l, _), jd(l, D.x, D.y), O && (l.beginPath(), l.rect(O.x, O.y, O.width, O.height), l.clip()), n && K && (l.save(), l.beginPath(), l.rect(K.x, K.y, K.width, K.height), l.clip()), Of(l, -f.x, -f.y);
        var m = d._60o, X = To(l, m), V = l.lineJoin, M = l.lineCap;
        l.lineJoin = d._62o, l.lineCap = d._61o, n ? (tb(l, z, L, a), u ? Eg(l, u) : A ? pc(l, A, h, null, F._data, F.gv) : (o = h ? h : q, cf(l, o, d.shapeGradient, d._59o, d.rect)), l.fill(p), K && (l.restore(), Of(l, -f.x, -f.y)), u && l.restore(), X !== l && tb(X, z, L, a)) : tb(X, z, L, a);
        var J = d.shapeForeground;
        if (J) {
          l.save();
          var g = d.shapeForegroundClipRect;
          g && (Of(l, f.x, f.y), l.beginPath(), l.rect(g.x, g.y, g.width, g.height), l.clip(), Of(l, -f.x, -f.y)), tb(l, z, L, a), cf(l, J, v("shape.foreground.gradient"), v("shape.foreground.gradient.color"), d.rect), l.fill(p), l.restore()
        }
        var I = v("shape.border.width.absolute");
        if (I && (l.save(), l.setTransform(1, 0, 0, 1, 0, 0)), R && (l.strokeStyle = d._97o, l.lineWidth = U + 2 * (P + R), l.stroke()), P && (l.strokeStyle = d.borderColor, l.lineWidth = U + 2 * P, l.stroke()), U && (o = d._55o, !q && h && (o = h), l.strokeStyle = o, l.lineWidth = U, l.stroke(), d._94o && Wq(l, o, d._95o, U, F.gv._zoom, d._96o)), I && l.restore(), Rh(l, m), v("shape.dash")) {
          var T = v("shape.dash.width") || U;
          if (T > 0) {
            m = v("shape.dash.pattern");
            var X = To(l, m, F._2Q("shape.dash.offset"));
            X !== l && tb(X, z, L, a), F._1Q(l, "shape", T, m)
          }
        }
        l.lineJoin = V, l.lineCap = M, l.restore()
      }, _48O: function () {
      }, _47O: function () {
      }
    });
    var Cr = function (z, u) {
      Eo(Cr, this, [z, u])
    };
    Dr(Cr, Vn, {
      getRotation: function (p, I, P) {
        p = p || 0;
        var l = this._data.getPoints(), Y = l.size();
        return Y > 1 ? eq[P] ? Y && 0 === Y % 2 ? td(l.get(Y / 2 - 1), l.get(Y / 2), I, p) : p : kq[P] ? td(l.get(0), l.get(1), I, p) : td(l.get(Y - 2), l.get(Y - 1), I, p) : p
      }, getPosition: function (O, N, M, P, p) {
        var s = this._data.getPoints(), u = s.size();
        if (u > 1) {
          if (eq[O]) {
            var r = u % 2;
            if (0 === r) return Ih(s.get(u / 2 - 1), s.get(u / 2), O, N, M, P, p);
            var S = s.get((u - r) / 2), t = {x: S.x, y: S.y, width: 0, height: 0};
            return S = um(O, t, P), S.x += N, S.y += M, S
          }
          return kq[O] ? Ih(s.get(0), s.get(1), O, N, M, P, p) : Ih(s.get(u - 2), s.get(u - 1), O, N, M, P, p)
        }
        return ui
      }
    });
    var rm = function (t, y) {
      Eo(rm, this, [t, y])
    };
    Dr(rm, Yl, {
      _3O: function () {
        var w = this;
        rm.superClass._3O.call(w);
        var x = w.s, d = w._83o;
        w._82o = d.img || d.shape ? A : {
          background: w.getBodyColor("grid.background"),
          depth: x("grid.depth"),
          rect: d.rect,
          _88o: x("grid.cell.depth"),
          cellBorderColor: x("grid.cell.border.color"),
          _89o: x("grid.row.count"),
          _90o: x("grid.column.count"),
          block: x("grid.block"),
          _91o: x("grid.block.color"),
          _92o: x("grid.block.padding"),
          _93o: x("grid.block.width")
        }
      }, _80o: function (n) {
        var T = this, Q = T._82o;
        if (!Q) return rm.superClass._80o.call(T, n), void 0;
        var $, b, p = T._data, Y = Q.background, m = Q.rect, J = Q.block, d = Q._91o, g = Q._92o, e = Q._93o,
          o = Q._88o, y = Q.cellBorderColor, i = Q._89o, q = Q._90o;
        if (Y) if (yj(n, m.x, m.y, m.width, m.height, Y), Yj(n, Y, Q.depth, m), o) for ($ = 0; i > $; $++) for (b = 0; q > b; b++) m = p.getCellRect($, b), m && Yj(n, Y, o, m); else if (y) {
          for (n.beginPath(), $ = 0; i > $; $++) for (b = 0; q > b; b++) m = p.getCellRect($, b), m && n.rect(m.x, m.y, m.width, m.height);
          n.strokeStyle = y, n.lineWidth = 1, n.stroke()
        }
        if ("h" === J) for ($ = 0; i > $; $++) m = Uk(p.getCellRect($, 0), p.getCellRect($, q - 1)), hq(m, g), Yo(n, d, m.x, m.y, m.width, m.height, e); else if ("v" === J) for (b = 0; q > b; b++) m = Uk(p.getCellRect(0, b), p.getCellRect(i - 1, b)), hq(m, g), Yo(n, d, m.x, m.y, m.width, m.height, e);
        T._39O(n, T._83o)
      }
    });
    var pj = function (Z, C) {
      Eo(pj, this, [Z, C])
    };
    Dr(pj, Yl, {
      _checkEmptyRect: !1, _81o: function () {
        var c = this._data, w = pj.superClass._81o.call(this), U = c.s("text");
        if (U != A) {
          var Q, W, k = c.s("text.font"), d = c.s("text.align"), e = c.s("text.vAlign"), T = gl(k, U), P = T.width,
            x = T.height, B = c.getAnchor(), Y = c.getWidth(), i = c.getHeight();
          "left" === d ? Q = -Y * B.x : "center" === d ? Q = -Y * B.x + (Y - P) / 2 : "right" === d && (Q = Y * (1 - B.x) - T.width), "top" === e ? W = -i * B.y : "middle" === e ? W = -i * B.y + (i - x) / 2 : "bottom" === e && (W = i * (1 - B.y) - T.height);
          var r, z = c.getMatrix();
          if (r = Ue([z.tf(Q, W), z.tf(Q + P, W), z.tf(Q + P, W + x), z.tf(Q, W + x)]), w = Uk(w, r), w && c.s("text.shadow")) {
            var N = Wf(w);
            N.x += c.s("text.shadow.offset.x"), N.y += c.s("text.shadow.offset.y"), hq(N, c.s("text.shadow.blur")), w = Uk(w, N)
          }
        }
        return w
      }
    });
    var pk = Ui.Interactor = function (d) {
      this.gv = this._graphView = d
    };
    Pb("Interactor", F, {
      ms_listener: 1, getView: function () {
        return this.gv.getView()
      }, setUp: function () {
        this.addListeners()
      }, tearDown: function () {
        this.removeListeners(), this.clear()
      }, clear: function () {
      }, fi: function (m) {
        this.gv.fi(m)
      }, setCursor: function (O) {
        Qe || this.gv.setCursor(O)
      }, startDragging: function (Q) {
        var P = this;
        P._lastClientPoint = ab(Q), P._lastLogicalPoint = P.gv.lp(Q), Dj(P, Q)
      }, clearDragging: function () {
        var v = this;
        v._lastClientPoint = v._lastLogicalPoint = v._logicalPoint = A
      }, autoScroll: function (h) {
        return this.gv.autoScroll(h, this._lastClientPoint)
      }
    });
    var aq = A, qf = function (g) {
      aq.handleWindowTouchMove(g)
    }, cr = function (T) {
      aq.handleWindowTouchEnd(T), r.removeEventListener(gi, qf, !1), r.removeEventListener(Ao, cr, !1), aq = A
    }, Nr = function (s) {
      aq.handleWindowMouseMove(s)
    }, Bh = function (B) {
      aq.handleWindowMouseUp(B), r.removeEventListener(dj, Nr, !1), r.removeEventListener(Wi, Bh, !1), aq = A
    }, gd = function (e, B) {
      e !== aq && (aq ? Qe ? aq.handleWindowTouchEnd(B) : aq.handleWindowMouseUp(B) : Qe ? (r.addEventListener(gi, qf, !1), r.addEventListener(Ao, cr, !1)) : (r.addEventListener(dj, Nr, !1), r.addEventListener(Wi, Bh, !1)), aq = e)
    }, qk = function (I) {
      var W = this;
      W.gv = I, W._is2d = I instanceof Ui.GraphView, W._is2d && (W.filter = function (T) {
        return I.isSelectable(T) && I.isInteractive(T)
      }), I.getView(), ["mousedown", "mousemove", "touchstart", "touchmove", vi].forEach(function (i) {
        W.addListener(i)
      }), W.initImageResource()
    };
    Dr(qk, pk, {
      enableVR: function (l) {
        var y = this;
        if (!!y._vrEnable !== l) if (y._vrEnable = l, l) y.gv.vr.mp(y.onVRControllerChange, y); else if (y.gv.vr.ump(y.onVRControllerChange, y), y._vrRayPolyline) {
          var F = y.gv.dm();
          F.remove(y._vrRayPolyline), F.remove(y._vrRayHitPoint), y._vrRayPolyline = S, y._vrRayHitPoint = S
        }
      }, onVRControllerChange: function (D) {
        var j = this, V = D.property, v = D.newValue, i = j.gv.vr.getController(v.id), d = i.getRay();
        d && ("gamepad.button.trigger" === V ? "down" === v._62O ? j.handle_mousedown(d) : j.handleWindowUp(d) : "gamepad.pose" === V && (j.handle_mousemove(d), j.handleWindowMove(d)))
      }, drawVRRay: function (O, l, Z) {
        var q, F = this, X = F.gv, s = F._vrRayPolyline, I = !1;
        if (s) q = F._vrRayHitPoint; else {
          var o = X.dm();
          F._vrRayPolyline = s = new Q.Polyline, F._vrRayHitPoint = q = new Q.Node, q.s({
            shape3d: "billboard",
            "shape3d.transparent": !0,
            "shape3d.texture.scale": 10,
            "shape3d.image": "coreInteractorRayHitImage"
          }), q.setAnchor3d(.5, .5, .499);
          var K = .2 / X.vr.measureOflength;
          q.s3(K, K, K), s.s("intersect", !1), q.s("intersect", !1), o.add(s), o.add(q), I = !0
        }
        if (l) {
          var C = Z.world, S = Z.worldNormal, n = C.x, m = C.y, E = C.z;
          s.s("shape.border.color", "red"), s.setPoints([{x: O.origin.x, y: O.origin.z, e: O.origin.y}, {
            x: n,
            y: E,
            e: m
          }]), q.s("3d.visible", !0), q.p3(n, m, E), q.lookAtDirection([S.x, S.y, S.z], "front")
        } else {
          s.s("shape.border.color", "blue");
          var G = new Q.Math.Vector3;
          G.copy(O.direction).setLength(1e3 / F.gv.vr.measureOflength).add(O.origin), s.setPoints([{
            x: O.origin.x,
            y: O.origin.z,
            e: O.origin.y
          }, {x: G.x, y: G.z, e: G.y}]), q.s("3d.visible", !1)
        }
        X.fi({kind: "vrRayIntersect", ray: O, data: l, intersect: Z, polyline: s, hitNode: q, begin: I})
      }, addListener: function (N) {
        var x = this;
        x.gv.getView().addEventListener(N, function (v) {
          E.preventDefault(v), Wb(v) && !x.disabled && x["handle_" + N](v)
        }, !1)
      }, handleWindowTouchMove: function (k) {
        this.handleWindowMouseMove(k)
      }, handleWindowMouseMove: function (D) {
        this.downInfo && (this.isDragging ? this.handleDownInfo("onDrag", D) : (this.handleDownInfo("onBeginDrag", D), this.isDragging = !0))
      }, handleWindowTouchEnd: function (F) {
        this.handleWindowMouseUp(F)
      }, handleWindowMouseUp: function (H) {
        if (this.isDragging && (this.handleDownInfo("onEndDrag", H), this.isDragging = !1), this.downInfo) {
          var y = this.handle("onUp", H);
          y && y.data === this.downInfo.data ? this.handleMissingUp(H) : this.handleDownInfo("onUp", H), this.downInfo = A
        }
      }, handle_mousewheel: function (F) {
        F.scrollDelta = F.wheelDelta / 40, this.handle("onScroll", F)
      }, handle_DOMMouseScroll: function (y) {
        y.scrollDelta = 2 === y.axis ? -y.detail : 0, this.handle("onScroll", y)
      }, handle_touchstart: function (f) {
        this.handle_mousedown(f)
      }, handle_touchmove: function (P) {
        this.handle("onMove", P)
      }, handle_mousedown: function (P) {
        this.isDragging && (this.handleDownInfo("onEndDrag", P), this.isDragging = !1), this.downInfo = this.handle("onDown", P), this.downInfo && gd(this, P)
      }, handle_mousemove: function (B) {
        var D = this, P = D.gv;
        D._hoverTimer && (O(D._hoverTimer), delete D._hoverTimer);
        var f, $, w, i = D.handle("onMove", B), y = this.currentInfo ? this.currentInfo.data : A,
          K = this.currentInfo ? this.currentInfo.hits : A;
        if (i && ($ = i.data, w = i.hits, D._hoverTimer = x(function () {
          O(D._hoverTimer), delete D._hoverTimer, D.handle("onHover", B, i)
        }, P.getHoverDelay() || E.hoverDelay)), $ !== y) {
          if ($ && $.s("onEnter") && $.s("onEnter")(B, $, P), y && y.s("onLeave") && y.s("onLeave")(B, y, P), K) for (f in K) K[f].target.onLeave && this.handleLeave(B, f);
          if (w) for (f in w) w[f].target.onEnter && w[f].target.onEnter(B, $, P, w[f].point, w[f].width, w[f].height)
        } else {
          if (K) for (f in K) w && w[f] || K[f].target.onLeave && this.handleLeave(B, f);
          if (w) for (f in w) K && K[f] || w[f].target.onEnter && w[f].target.onEnter(B, $, P, w[f].point, w[f].width, w[f].height)
        }
        this.currentInfo = i
      }, handle: function (p, z, o) {
        var s, k = this, T = k.gv;
        if (k._is2d) {
          if (o = o || T.getDataInfoAt(z, this.filter), !o) return;
          if (s = o.ui.interactiveInfo) {
            var K, w = o.data;
            if (w.s(p) && w.s(p)(z, w, T), "body" === o.part && s.bodyInfo) K = "body", o.hits = this.handleImage(K, T.getImage(w), p, z, w, o.point, s.bodyInfo); else if ("icons" === o.part && s._38o) {
              var t = s._38o[o.name];
              t && t[o.index] && (K = "icons|" + o.name + "|" + o.index, o.hits = this.handleImage(K, o.icon, p, z, w, o.point, t[o.index]))
            }
          }
          return o
        }
        var w, m;
        if (!o) if (z && z instanceof Q.Math.Ray) {
          var b = T.vr.intersectWorld(z);
          if (w = b.data, m = b.intersect, k.drawVRRay(z, w, m), !w) return;
          var V = T.getData3dUI(w);
          if (s = V.interactiveInfo, !s) return;
          o = {data: w, part: m.part, ui: V}
        } else {
          if (o = T.getDataInfoAt(z), !o) return;
          o && (o = {data: o.data, part: o.part})
        }
        if (!m) {
          w = o.data;
          var V = T.getData3dUI(w);
          if (o.ui = V, s = V.interactiveInfo, !s) return o;
          if (m = T.intersectObject(z, w), !m) return
        }
        w.s(p) && w.s(p)(z, w, T);
        var $, P = m.part;
        return "body" !== P && ($ = w.s(P + ".image") || w.s("shape3d." + P + ".image")), $ || ($ = w.s("all.image") || w.s("shape3d.image")), (s = s[$]) ? (o.part = "body", o.interactiveInfo = s, o.point = m.uv.multiply({
          x: s.bodyInfo.rect.width,
          y: s.bodyInfo.rect.height
        }), o.image = $, o.hits = this.handleImage("body", $, p, z, w, o.point, s.bodyInfo), o) : void 0
      }, _handleLeaveOrMissing: function (g, T, F) {
        var G = "leave" === g ? this.currentInfo : this.downInfo;
        if (G) {
          var $ = G.interactiveInfo || G.ui.interactiveInfo;
          if ($) {
            var J, w, E = G.data;
            if (this._is2d) {
              if (w = this.gv.lp(T), "body" === G.part && $.bodyInfo) J = "body", "leave" === g ? this.handleLeaveImage(F, J, this.gv.getImage(E), T, E, w, $.bodyInfo) : this.handleMissingUpImage(J, this.gv.getImage(E), T, E, w, $.bodyInfo); else if ("icons" === G.part && $._38o) {
                var L = $._38o[G.name];
                L && L[G.index] && (J = "icons|" + G.name + "|" + G.index, "leave" === g ? this.handleLeaveImage(F, J, G.icon, T, E, w, L[G.index]) : this.handleMissingUpImage(J, G.icon, T, E, w, L[G.index]))
              }
            } else {
              var m = this.gv.intersectObject(T, E);
              w = m ? m.uv.multiply({x: $.bodyInfo.rect.width, y: $.bodyInfo.rect.height}) : {
                x: 1 / 0,
                y: 1 / 0
              }, "leave" === g ? this.handleLeaveImage(F, "body", G.image, T, E, w, $.bodyInfo) : this.handleMissingUpImage("body", G.image, T, E, w, $.bodyInfo)
            }
          }
        }
      }, handleDownInfo: function (Z, e) {
        if (this.downInfo) {
          var z = this.downInfo, I = z.interactiveInfo || z.ui.interactiveInfo;
          if (I) {
            var h, i = z.data;
            if (i.s(Z) && i.s(Z)(e, i, this.gv), this._is2d) {
              var t = this.gv.lp(e);
              if ("body" === z.part && I.bodyInfo) h = "body", this.handleDownInfoImage(h, this.gv.getImage(i), Z, e, i, t, I.bodyInfo); else if ("icons" === z.part && I._38o) {
                var L = I._38o[z.name];
                L && L[z.index] && (h = "icons|" + z.name + "|" + z.index, this.handleDownInfoImage(h, z.icon, Z, e, i, t, L[z.index]))
              }
            } else {
              var s = this.gv.intersectObject(e, i);
              if (!s) return;
              t = s.uv.multiply({
                x: I.bodyInfo.rect.width,
                y: I.bodyInfo.rect.height
              }), this.handleDownInfoImage("body", z.image, Z, e, i, t, I.bodyInfo)
            }
          }
        }
      }, handleImage: function (v, A, k, t, p, y, F) {
        var $ = {};
        if (A && (A = vf(A))) {
          var b = this.gv, m = F.rect, I = this.convertPoint(y, F);
          I.inRect && (A[k] && A[k](t, p, b, I, m.width, m.height), $[v + "|image"] = {
            target: A,
            point: I,
            width: m.width,
            height: m.height
          });
          for (var G = F.compInfos, H = A, r = G.length - 1; r >= 0; r--) {
            var e = G[r], Q = e.comp;
            I = this.convertPoint(y, e, H, Q, b, p), I.inRect && (m = e.rect, Q[k] && Q[k](t, p, b, I, m.width, m.height), (A = m.image) && A[k] && A[k](t, p, b, I, m.width, m.height), $[v + "|" + r] = {
              target: Q,
              point: I,
              width: m.width,
              height: m.height
            }, A && ($[v + "|" + r + "|image"] = {target: A, point: I, width: m.width, height: m.height}))
          }
        }
        return $
      }, handleLeave: function (y, T) {
        return this._handleLeaveOrMissing("leave", y, T)
      }, handleMissingUp: function (t) {
        return this._handleLeaveOrMissing("missing", t)
      }, handleLeaveImage: function (e, Q, F, A, L, c, f) {
        if (F && (F = vf(F))) {
          var K = this.gv, x = f.rect, g = this.convertPoint(c, f);
          e === Q + "|image" && F.onLeave && F.onLeave(A, L, K, g, x.width, x.height);
          for (var v = f.compInfos, R = F, y = v.length - 1; y >= 0; y--) {
            var U = v[y], $ = U.comp;
            g = this.convertPoint(c, U, R, $, K, L), x = U.rect, $.onLeave && e === Q + "|" + y && $.onLeave(A, L, K, g, x.width, x.height), (F = x.image) && F.onLeave && e === Q + "|" + y + "|image" && F.onLeave(A, L, K, g, x.width, x.height)
          }
        }
      }, handleMissingUpImage: function (C, d, p, u, Q, z) {
        var m = "onUp", v = this.downInfo.hits;
        if (v && d && (d = vf(d))) {
          var n = z.rect, E = this.convertPoint(Q, z);
          !E.inRect && v[C + "|image"] && d[m] && d[m](p, u, this.gv, E, n.width, n.height);
          for (var g = z.compInfos, o = d, j = g.length - 1; j >= 0; j--) {
            var G = g[j], A = G.comp;
            E = this.convertPoint(Q, G, o, A, this.gv, u), E.inRect || (n = G.rect, A[m] && v[C + "|" + j] && A[m](p, u, this.gv, E, n.width, n.height), (d = n.image) && d[m] && v[C + "|" + j + "|image"] && d[m](p, u, this.gv, E, n.width, n.height))
          }
        }
      }, handleDownInfoImage: function (E, k, F, K, n, S, N) {
        var J = this.downInfo.hits;
        if (J && k && (k = vf(k))) {
          var V = this.gv, $ = N.rect, Y = this.convertPoint(S, N);
          J[E + "|image"] && k[F] && k[F](K, n, V, Y, $.width, $.height);
          for (var C = N.compInfos, B = k, s = C.length - 1; s >= 0; s--) {
            var G = C[s], l = G.comp;
            Y = this.convertPoint(S, G, B, l, V, n), $ = G.rect, l[F] && J[E + "|" + s] && l[F](K, n, V, Y, $.width, $.height), (k = $.image) && k[F] && J[E + "|" + s + "|image"] && k[F](K, n, V, Y, $.width, $.height)
          }
        }
      }, initImageResource: function () {
        E.setImage("coreInteractorRayHitImage", {
          width: 16,
          height: 16,
          comps: [{
            type: "oval",
            background: "rgb(255,0,0)",
            borderWidth: 1,
            borderColor: "rgb(250,120,120)",
            opacity: .3,
            rotation: -1.593,
            rect: [.73315, .6933, 14.5337, 14.61341]
          }, {
            type: "oval",
            background: "rgb(255,0,0)",
            borderWidth: 1,
            borderColor: "rgb(250,120,120)",
            rotation: -1.593,
            rect: [3.56695, 3.75073, 8.8661, 8.49856]
          }]
        })
      }, convertPoint: function (s, d, $, J, Z, X) {
        var z = d.rect, j = d.matrix.applyInverse(s).sub(z),
          i = j.x >= 0 && j.y >= 0 && j.x <= z.width && j.y <= z.height;
        if (!i) return j;
        if (J && $q(J.pixelPerfect, X, Z)) {
          var z, D = 1;
          this._is2d ? (D = Z.getZoom(), z = pq(s.x, s.y, S, D)) : z = pq(s.x, s.y);
          var k = !1, T = z.x, t = z.y, B = z.width, M = z.height, u = E.hitMaxArea, V = B * M * D * D;
          if (V > u) {
            var c = Math.sqrt(u / V);
            D *= c
          }
          B *= D, M *= D, 2 > B && (B = 2), 2 > M && (M = 2), T *= D, t *= D;
          var N = zj(B, M), x = new je(0, -T, -t, D, D);
          x.append(d.matrix), Z._drawForChecking = !0, J.transform = x;
          var n = $.comps;
          $.comps = [J], dm(N, $, 0, 0, B, M, X, self), $.comps = n, delete J.transform, Z._drawForChecking = !1;
          try {
            for (var p = 0, q = N.getImageData(0, 0, B, M).data; p < q.length; p += 4) if (0 !== q[p + 3]) {
              k = !0;
              break
            }
            N.restore()
          } catch (_) {
            Gr = A, k = !1
          }
          j.inRect = k
        } else j.inRect = !0;
        return j
      }
    });
    var fl = Ui.DefaultInteractor = function (s) {
      Eo(fl, this, [s])
    };
    Pb("DefaultInteractor", pk, {
      handle_mousedown: function (Q) {
        gm(Q);
        var J = this, l = J.gv, E = l.getDataAt(Q);
        !l.setFocus(Q) || l._editing || l._scrolling || (qo(Q) ? l.handleDoubleClick(Q, E) : l.handleClick(Q, E), !ih() && E && (l.isMovable(E) || l.isInteractive(E)) || !l.isPannable() || !Wb(Q) || xr(Q) || (J._tx = l.tx(), J._ty = l.ty(), J.startDragging(Q)))
      }, handleWindowMouseUp: function (a) {
        var P = this, U = P.gv;
        U._panning && (delete U._panning, U.onPanEnded(), P.fi({
          kind: "endPan",
          event: a
        })), delete P._tx, delete P._ty, P.clearDragging()
      }, handle_mousemove: function (L) {
        var q = this, F = q.gv;
        q._hoverTimer && (O(q._hoverTimer), delete q._hoverTimer), q._hoverTimer = x(function () {
          q.fi({kind: "hover", event: L}), O(q._hoverTimer), delete q._hoverTimer
        }, F.getHoverDelay() || E.hoverDelay)
      }, handle_touchmove: function (G) {
        this.handle_mousemove(G)
      }, handleWindowMouseMove: function (e) {
        var y = this, j = y.gv, I = y._lastClientPoint;
        y.fi({
          kind: j._panning ? "betweenPan" : "beginPan",
          event: e
        }), j._panning = 1, j.setTranslate(y._tx + e.clientX - I.x, y._ty + e.clientY - I.y)
      }, handle_mousewheel: function (x) {
        this.gv.handleScroll(x, x.wheelDelta)
      }, handle_DOMMouseScroll: function (Z) {
        2 === Z.axis && this.gv.handleScroll(Z, -Z.detail)
      }, handle_keydown: function (l) {
        this.gv.handleKeyDown(l)
      }
    });
    var ir = Ui.SelectInteractor = function (L) {
      Eo(ir, this, [L])
    };
    Pb("SelectInteractor", pk, {
      _42: function () {
        var y = this, v = y.gv, l = v.getZoom(), n = y.mark, g = y.div;
        g || (g = y.div = Zg(), wm(y.getView(), g));
        var Y = {};
        Y.x = n.x * l + v.tx(), Y.y = n.y * l + v.ty(), Y.width = n.width * l, Y.height = n.height * l, vk(g, Y), this.intersects() ? (g.style.border = "", g.style.background = v.getRectSelectBackground()) : (g.style.background = "", g.style.border = "1px solid " + v.getRectSelectBorderColor())
      }, handle_mousedown: function ($) {
        var H = this, c = H.gv;
        if (H._57I = A, !(c._editing || c._scrolling || ih())) {
          var I = c.getDataAt($), M = c.sm();
          if (I) if (xr($)) M.co(I) ? M.rs(I) : M.as(I); else if (M.co(I)) {
            if (qo($) && I instanceof Bp && I.isClickThroughEnabled()) {
              var E = c.getDataAt($, function (e) {
                c._clickThroughChecking = !0;
                var O = e.getParent() === I && c.isSelectable(e);
                return delete c._clickThroughChecking, O
              });
              E && ($.clickThrough = !0, M.ss(E))
            }
          } else M.ss(I); else xr($) || !c.isPannable() ? Wb($) && (xr($) || M.cs(), c.isRectSelectable() && (H.startDragging($), c._77O = 1)) : Wb($) && (H._57I = ab($))
        }
      }, handle_mouseup: function (V) {
        var F = this, M = F._57I;
        M && (lf(M, ab(V)) <= 1 && F.gv.sm().cs(), F._57I = A)
      }, handleWindowMouseUp: function (a) {
        this.clear(a)
      }, handleWindowMouseMove: function (R) {
        var T = this, X = T.gv;
        T._logicalPoint = X.lp(R), T.mark ? (T.fi({
          kind: "betweenRectSelect",
          event: R
        }), X.isPannable() && T.autoScroll(R), T.redraw()) : T.fi({
          kind: "beginRectSelect",
          event: R
        }), T.mark = Ue(T._lastLogicalPoint, T._logicalPoint), T.redraw()
      }, intersects: function () {
        var h = this, T = h._lastLogicalPoint, Q = h._logicalPoint;
        return T.x > Q.x || T.y > Q.y
      }, clear: function (X) {
        var U = this, L = U.gv, n = U.mark;
        if (U._57I = A, U._lastLogicalPoint) {
          if (n) {
            if (0 !== n.width && 0 !== n.height) {
              var H = L.getDatasInRect(n, U.intersects());
              if (!H.isEmpty()) {
                var y = L.sm(), R = y.toSelection();
                H.each(function (s) {
                  y.co(s) ? R.remove(s) : R.add(s)
                }), y.ss(R)
              }
            }
            up(U.div), delete U.div, delete U.mark, U.redraw(), U.fi({
              kind: "endRectSelect",
              event: X
            }), L.onRectSelectEnded()
          }
          U.clearDragging(), delete L._77O
        }
      }, redraw: function () {
        var k = this;
        k._draw || (k._draw = 1, x(function () {
          k.mark && k._42(), delete k._draw
        }, 16))
      }
    });
    var yk = Ui.MoveInteractor = function (f) {
      Eo(yk, this, [f])
    };
    Pb("MoveInteractor", pk, {
      handle_mousedown: function (o) {
        var k = this, r = k.gv;
        if (Wb(o) && !r._editing && !r._scrolling && !ih()) {
          var l = r.getSelectedDataAt(o);
          !l || r.isInteractive(l) && !r.isMovable(l) ? r._focusData = A : (k._data = l, r.handleMouseDown && r.handleMouseDown(o, l), k.startDragging(o), r.isMovable(l) && (r._moving = 1))
        }
      }, handleWindowMouseUp: function (N) {
        var R = this, H = R.gv;
        H.handleMouseUp && H.handleMouseUp(N, R._data), R.clear(N)
      }, handleWindowMouseMove: function (N) {
        var P = this, S = P._data, R = P.gv;
        if ((!R._93O || !R._93O(N, S)) && R._moving) {
          P._logicalPoint || P.fi({kind: "prepareMove", event: N});
          var O = P._logicalPoint ? "betweenMove" : "beginMove", x = {kind: O, event: N}, f = P._logicalPoint = R.lp(N);
          "beginMove" !== O || P._alreadyBeginTransaction || (P._alreadyBeginTransaction = !0, R.getDataModel().beginTransaction());
          var Z = P._calcShift(O, N), c = Z.x, H = Z.y, J = P.gv.getMoveMode(N, S);
          J && ("x" === J ? H = 0 : "y" === J ? c = 0 : "xy" !== J && (c = H = 0)), R.moveSelection(c, H), P._lastLogicalPoint = f, P.autoScroll(N), P.fi(x)
        }
      }, _calcShift: function () {
        var K = this, o = K._logicalPoint, A = K._lastLogicalPoint, L = o.x - A.x, n = o.y - A.y;
        return {x: L, y: n}
      }, clear: function (n) {
        var i = this, _ = i.gv;
        i._lastLogicalPoint && (i._lastLogicalPoint = i._data = _._moving = A, i._logicalPoint && (i.fi({
          kind: "endMove",
          event: n
        }), _.onMoveEnded()), i.clearDragging()), i._alreadyBeginTransaction && (i._alreadyBeginTransaction = !1, _.getDataModel().endTransaction())
      }
    });
    var ik = Ui.ScrollBarInteractor = function (D) {
      Eo(ik, this, [D])
    };
    Pb("ScrollBarInteractor", pk, {
      _41o: function () {
        return this.gv.getViewRect().height < this.gv.getScrollRect().height
      }, _40o: function () {
        return this.gv.getViewRect().width < this.gv.getScrollRect().width
      }, isV: function (Z) {
        var T = this.gv.getViewRect();
        return this._41o() && (T.x + T.width - this.gv.lp(Z).x) * this.gv.getZoom() < Oe
      }, isH: function (o) {
        var D = this.gv.getViewRect();
        return this._40o() && (D.y + D.height - this.gv.lp(o).y) * this.gv.getZoom() < Oe
      }, handle_mousemove: function (r) {
        this.handle_touchmove(r)
      }, handle_touchmove: function (A) {
        if (!ze && Wb(A) && this.gv.isScrollBarVisible()) {
          var _ = this, J = _.isV(A), O = _.isH(A);
          (J || O) && _.gv.showScrollBar(), _.gv._scrolling = J || O
        }
      }, handleWindowMouseUp: function (E) {
        this.handleWindowTouchEnd(E)
      }, handleWindowTouchEnd: function (u) {
        this._state = this._cp = this._tx = this._ty = this.gv._scrolling = A, this.fi({kind: "endScroll", event: u})
      }, handle_mousedown: function (Z) {
        this.handle_touchstart(Z)
      }, handle_touchstart: function (U) {
        var Y = this;
        if (Y.gv.setFocus(U), gm(U), Y.handle_touchmove(U), !(Ro(U) > 1) && Y.gv._scrolling && Y.gv.isScrollBarVisible()) {
          Y._cp = ab(U), Y._tx = Y.gv.tx(), Y._ty = Y.gv.ty();
          var v = Y.isV(U);
          Y._state = v ? "vScroll" : "hScroll", Dj(Y, U), Y.fi({kind: "beginScroll", event: U})
        }
      }, handleWindowMouseMove: function (c) {
        this.handleWindowTouchMove(c)
      }, handleWindowTouchMove: function (E) {
        var d = ab(E), n = this.gv.getViewRect(), D = this.gv.getScrollRect();
        "vScroll" === this._state ? this.gv.ty(this._ty + (this._cp.y - d.y) * D.height / n.height) : "hScroll" === this._state && this.gv.tx(this._tx + (this._cp.x - d.x) * D.width / n.width), this.fi({
          kind: "betweenScroll",
          event: E
        })
      }
    });
    var Hb = Ui.TouchInteractor = function (W, N) {
      N = N || {}, N.selectable === S && (N.selectable = !0), N.movable === S && (N.movable = !0), N.pannable === S && (N.pannable = !0), N.pinchable === S && (N.pinchable = !0), N.editable === S && (N.editable = !0), this.params = N, Eo(Hb, this, [W])
    };
    Pb("TouchInteractor", pk, {
      ms_edit: 1, setUp: function () {
        var N = this;
        Hb.superClass.setUp.call(N), Qe && N.params.editable && N.gv.setEditInteractor(N)
      }, tearDown: function () {
        var N = this;
        Hb.superClass.tearDown.call(N), Qe && N.params.editable && N.gv.setEditInteractor(A)
      }, clear: function (i) {
        var m = this, Y = m.gv;
        Y._moving && (m.fi({
          kind: "endMove",
          event: i
        }), delete Y._moving, Y.onMoveEnded(), Y.dm().endTransaction()), Y._panning && (m.fi({
          kind: "endPan",
          event: i
        }), delete Y._panning, Y.onPanEnded()), Y._pinching && (m.fi({
          kind: "endPinch",
          event: i
        }), delete Y._pinching, Y.onPinchEnded()), Y._editing && (m._46O(i), m._77I = m._node = m._edge = m._shape = m._rect = m._89I = m._index = Y._editing = A), m._moving = m._panning = m._pinching = m._editing = m._57I = m._data = m._beginHistory = A, m.clearDragging()
      }, handle_touchstart: function (V) {
        var S = this;
        if (!S.gv._editing) {
          gm(V), S._57I = A;
          var Z = S.params, u = S.gv, t = u.sm(), s = u.getDataAt(V), O = Ro(V);
          if (1 === O) {
            if (qo(V)) return u.handleDoubleClick(V, s), void 0;
            u.handleClick(V, s), s && (u.handleMouseDown && u.handleMouseDown(V, s), S._data = s), Z.selectable || (s = A), s ? (t.co(s) || t.ss(s), Z.editable && u.isEditable(s) && S._79I(V, s, !0) ? (S._editing = 1, S.startDragging(V)) : Z.movable && u.isMovable(s) && (S._moving = 1, S.startDragging(V))) : (S._57I = ab(V), Z.pannable && u.isPannable() && (S._panning = 1, S.startDragging(V), S._translate = {
              x: u.tx(),
              y: u.ty()
            }))
          } else if (Z.pinchable && 2 === O) {
            S._pinching = 1, S.startDragging(V);
            var C = u.getView(), g = u.getZoom(), h = C.getBoundingClientRect(), j = V.touches[0], z = V.touches[1],
              o = {x: (j.clientX + z.clientX) / 2 - h.left, y: (j.clientY + z.clientY) / 2 - h.top};
            o.x -= u.tx(), o.y -= u.ty(), o.x /= g, o.y /= g, S._p = o, S._d = Xg(V)
          }
        }
      }, handle_touchend: function (l) {
        var I = this, n = I.gv, w = I._57I, N = I._data;
        w && (lf(w, ab(l)) <= 1 && n.sm().cs(), I._57I = A), N && n.handleMouseUp && n.handleMouseUp(l, N)
      }, handleWindowTouchEnd: function (c) {
        this.clear(c)
      }, handleWindowTouchMove: function (P) {
        var s = this, $ = s.gv, b = Ro(P);
        if (1 === b) {
          if (s._editing && (s._beginHistory || (s._beginHistory = 1, $.dm().beginTransaction()), $._editing = 1, s._78I(P)), s._moving) s._beginHistory || (s._beginHistory = 1, $.dm().beginTransaction()), s.handleMove(P); else if (s._panning) {
            var U = ab(P);
            $.setTranslate(s._translate.x + U.x - s._lastClientPoint.x, s._translate.y + U.y - s._lastClientPoint.y), s.fi({
              kind: $._panning ? "betweenPan" : "beginPan",
              event: P
            }), $._panning = 1
          }
        } else if (2 === b && s._pinching) {
          var y = Xg(P);
          $.handlePinch(s._p, y, s._d), s._d = y, s.fi({
            kind: $._pinching ? "betweenPinch" : "beginPinch",
            event: P
          }), $._pinching = 1
        }
      }, handleMove: function (M) {
        var j = this, n = j.gv, A = n.lp(M);
        n._93O && n._93O(M, j._data) || (n.moveSelection(A.x - j._lastLogicalPoint.x, A.y - j._lastLogicalPoint.y), j._lastLogicalPoint = A, j.autoScroll(M), j.fi({
          kind: n._moving ? "betweenMove" : "beginMove",
          event: M
        }), n._moving = 1)
      }
    });
    var Q = r.ht, co = Q.graph._editor = {Math: Q.Math, Guide: {}};
    co.getStyle = function (T) {
      var l, W = co.StyleMap;
      return W && (l = W[T], l !== S) ? l : co.DefaultStyleMap[T]
    }, co.setStyle = function (t, W) {
      var y = co.StyleMap;
      y || (y = co.StyleMap = {}), y[t] = W
    }, co.inEdit = function (j) {
      return j._inXEdit === !0
    }, co.startEdit = function (_) {
      _._inXEdit = !0, co.Inject.doInject(_)
    }, co._46O = function (q) {
      q._inXEdit = !1, co.Inject.undoInject(q)
    }, co.toScreenPosition = function (l, O) {
      var C = l.tx(), t = l.ty(), p = l._zoom;
      return new co.Math.Vector2(O.x * p + C, O.y * p + t)
    }, co.checkHit = function (j, E, t) {
      return j.distanceTo(E) < t ? !0 : !1
    }, co.toWorldPosition = function (F, w) {
      var T = F.tx(), E = F.ty(), z = F._zoom;
      return {x: (w.x - T) / z, y: (w.y - E) / z}
    }, co.setAntialias = function (V, d) {
      for (var a, n = ["imageSmoothingEnabled", "webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "oImageSmoothingEnabled", "msImageSmoothingEnabled"], v = 0, t = n.length; t > v && (a = n[v], !(a in V)); v++) ;
      V[a], V[a] = d
    }, co.getTargetCornersOnScreen = function (R, c) {
      if (!c) return null;
      var H, B = [];
      if (sr(c, R)) {
        var N = Cf(R, c);
        H = [{x: N.x, y: N.y}, {x: N.x + N.width, y: N.y}, {x: N.x + N.width, y: N.y + N.height}, {
          x: N.x,
          y: N.y + N.height
        }]
      } else {
        if (!c.getCorners) return null;
        H = c.getCorners()
      }
      return H.forEach(function (T) {
        var w = co.toScreenPosition(R, T);
        B.push(w.x, w.y)
      }), B
    }, co.log = function () {
    };
    var Wl = co.Inject = {_modules: []};
    Wl.registAsModule = function (E, g) {
      var H = {}, C = {};
      for (var Q in E) {
        var o = g.prototype[Q];
        H[Q] = o
      }
      E.getBackup = function (q) {
        return H[q]
      }, E.getBackups = function () {
        return H
      }, C.doInject = function () {
        for (var W in E) "getBackup" !== W && (g.prototype[W] = E[W])
      }, C.undoInject = function () {
        for (var T in E) "getBackup" !== T && (g.prototype[T] = H[T])
      }, Wl._modules.push(C)
    }, Wl.doInject = function (Y) {
      for (var n, c = Wl._modules, R = 0, T = c.length; T > R; R++) n = c[R], n.doInject(Y)
    }, Wl.undoInject = function (U) {
      for (var e, J = Wl._modules, H = 0, o = J.length; o > H; H++) e = J[H], e.undoInject(U)
    };
    var pk = Q.graph.EditInteractor = function (Z) {
      var t = this, c = y.createElement("canvas");
      c.className = "editCanvas", c.style.position = "absolute", t._styleMap = {}, t._canvas = c, t._context = c.getContext("2d"), pk.superClass.constructor.call(t, Z), co.setAntialias(t._context, !1), t._subModules = [new co.Anchor(t), new co.Rect(t), new co.Curve(t), new co.MoveHelper(t)], t._gridGuide = new co.Guide.Grid(t), t._rectGuide = new co.Guide.Rect(t)
    }, jg = pk;
    Q.Default.def(pk, Q.graph.Interactor, {
      ms_edit: 1,
      ms_fire: 1
    }), F.defineProperties(pk.prototype, {
      editDetail: {
        get: function () {
          var p = !!this._editDetail;
          return p
        }, set: function (J) {
          var F = this, O = F._editDetail;
          O !== J && (F._editDetail = J, F.gv._editing = J, F.fp("editDetail", O, J), F.fp("pointsEditingMode", O, J), F.fi({kind: J ? "beginEditPoints" : "endEditPoints"}))
        }
      }, gvEditing: {
        get: function () {
          return this.gv._editing
        }, set: function (s) {
          (!this._editDetail || s) && (this.gv._editing = s, s || (this.editDetail = !1))
        }
      }, editing: {
        get: function () {
          return this._editing
        }, set: function (d) {
          this._editing = d, this.gvEditing = d
        }
      }, pointsEditingMode: {
        get: function () {
          return this.editDetail
        }, set: function (K) {
          var X = this;
          X.editDetail !== K && (K ? X._tryEnterEditDetailMode() : X._tryQuitEditDetailMode())
        }
      }, gridEnabled: {
        get: function () {
          var v = this._gridEnabled;
          if (!v) return !1;
          var C = this.gv;
          return C ? !0 : !0
        }, set: function (x) {
          x !== this._gridEnabled && (this._gridEnabled = x, this._42())
        }
      }, alignmentGuideEnabled: {
        get: function () {
          return this._agEnabled
        }, set: function (v) {
          v !== this._agEnabled && (this._agEnabled = v, this._42())
        }
      }, gridGuide: {
        get: function () {
          return this._gridGuide
        }
      }, rectGuide: {
        get: function () {
          return this._rectGuide
        }
      }
    }), pk.prototype.getSubModule = function (I) {
      var $, w, h, _ = this._subModules;
      for (w = 0, h = _.length; h > w; w++) if ($ = _[w], $.catalog === I) return $
    }, pk.prototype.invokeSubModule = function (y, z) {
      var E = this, i = E._subModules;
      if (i) for (var I, O, Y, V = Array.prototype.slice.call(arguments, 2), j = 0, g = i.length; g > j; j++) if (I = i[j], O = I[y], O && (Y = O.apply(I, V), Y != S && z)) return I
    }, pk.prototype.invokeSubModuleInverse = function (L, s) {
      var W = this, P = W._subModules;
      if (P) for (var g, z, A, j = Array.prototype.slice.call(arguments, 2), B = P.length - 1; B >= 0; B--) if (g = P[B], z = g[L], z && (A = z.apply(g, j), A != S && s)) return g
    }, pk.prototype.setUp = function () {
      co.log("setUp");
      var l = this, R = l.gv, a = R.getView(), E = l._canvas;
      pk.superClass.setUp.call(l), R.setEditInteractor(l), R._79O ? a.insertBefore(E, R._79O) : a.appendChild(E), co.startEdit(R), l.invokeSubModule("setUp"), R.dm().mm(l._onDataModelChanged, l), R.dm().md(l._onDataPropertyChanged, l)
    }, pk.prototype.tearDown = function () {
      co.log("tearDown");
      var r = this, Q = r.gv, t = Q.getView();
      r._resetCustomCursorStyle(), pk.superClass.tearDown.call(r), Q.dm().umm(r._onDataModelChanged, r), Q.dm().umd(r._onDataPropertyChanged, r), Q.setEditInteractor(null), t.removeChild(r._canvas), r._drawTimer && (O(r._drawTimer), r._drawTimer = null), co._46O(Q), r.invokeSubModule("tearDown")
    }, pk.prototype._onDataModelChanged = function (q) {
      var t = this;
      ("clear" === q.kind || "remove" === q.kind && t.editDetail && q.data === t.getSubModule("Curve").target) && (t.editDetail = !1, t._42())
    }, pk.prototype._onDataPropertyChanged = function (Z) {
      var f = this;
      if (f.editDetail) {
        var O = f.getSubModule("Curve"), c = Z.data;
        c === O.target && (c._writing || O._handleDataChanged())
      }
    }, pk.prototype.clear = function () {
      co.log("clear")
    }, pk.prototype.redraw = function () {
      this._42()
    }, pk.prototype._42 = function () {
      var n = this;
      n._drawTimer || (n._drawTimer = x(function () {
        n._drawTimer = null, n.drawImpl()
      }, 0))
    }, pk.prototype.drawImpl = function () {
      var n;
      for (n in{_42: !0}) break;
      return function () {
        var Z = this, z = Z._canvas, u = Z.gv, G = u.getWidth(), v = u.getHeight(), N = Z._context,
          U = Q.Default.getInternal();
        (z.width !== G || z.height !== v) && U.setCanvas(z, G, v), N.clearRect(0, 0, z.width, z.height);
        var H = Z._getValidSelection();
        N.save();
        var S = Q.Default.devicePixelRatio;
        N.scale(S, S), Z._gridGuide._42(), Z.invokeSubModuleInverse(n, !1, N, u, H), Z._rectGuide._42(), N.restore()
      }
    }(), pk.prototype._getValidSelection = function () {
      var o = this, B = o.gv, n = B.sm().getSelection(), I = [];
      return n.each(function (k) {
        B.isVisible(k) && B.isEditable(k) && I.push(k)
      }), I
    }, pk.prototype.handle_touchmove = function (w) {
      return this.handle_mousemove(w)
    }, pk.prototype.handle_mousemove = function (u) {
      if (!Q.Default.isDragging()) {
        var m = this;
        (m.editDetail || !ih()) && (m.gvEditing = !1, m._checkEdit(u) && (m.gvEditing = !0))
      }
    }, pk.prototype.handle_touchstart = function (g) {
      return this.handle_mousedown(g)
    }, pk.prototype.handle_mousedown = function (K) {
      gm(K);
      var $ = this;
      if ($.editDetail || !ih()) {
        if (qo(K) && !K.clickThrough) {
          if ($.editDetail) {
            if ($._tryQuitEditDetailMode(K)) return
          } else if ($._tryEnterEditDetailMode()) return;
          $.gv.dm().beginTransaction();
          var i = $.invokeSubModule("handleDoubleClick", !0, K);
          if ($.gv.dm().endTransaction(), i) return
        }
        var f = $._checkEdit(K);
        f && ($._downPosition = $._getLogicalPoint(K), $.gv.dm().beginTransaction(), f.startEdit($, K), $.editing = !0)
      }
    }, pk.prototype._checkEdit = function (Y) {
      var B = this, N = B.gv, E = B._getLogicalPoint(Y), q = B.invokeSubModule("check", !0, N, Y, E) || null;
      return B._editMod = q, q
    }, pk.prototype.handleWindowTouchMove = function (G) {
      return this.handleWindowMouseMove(G)
    }, pk.prototype.handleWindowMouseMove = function (D) {
      var v = this, k = v._downPosition;
      if (k) {
        var C = v._getLogicalPoint(D);
        if (C.distanceTo(k) < v.getStyle("moveSensitivity")) return;
        delete v._downPosition
      }
      var b = v._editMod;
      b && b.handleEdit(v.gv, D)
    }, pk.prototype._getLogicalPoint = function (d) {
      var L = this, F = Q.Default.getLogicalPoint(d, L._canvas);
      return new co.Math.Vector2(F)
    }, pk.prototype.handleWindowTouchEnd = function (R) {
      return this.handleWindowMouseUp(R)
    }, pk.prototype.handleWindowMouseUp = function () {
      var T;
      for (T in{_46O: !0}) break;
      return function (Z) {
        var d = this;
        d.editing = !1, d.setCursor("default"), d.invokeSubModule(T, !1, Z), d._42(), d.gv.dm().endTransaction()
      }
    }(), pk.prototype.handle_mousewheel = function (d) {
      var n = this;
      gm(d), n.invokeSubModule("preHandleScroll", !0) || n.gv.handleScroll(d, d.wheelDelta)
    }, pk.prototype.handleDelete = function () {
      var W = this;
      if (!W.editDetail) {
        W.gv.dm().beginTransaction();
        var o = W.invokeSubModule("handleNormalStateDelete", !0);
        return W.gv.dm().endTransaction(), o || W.gv.removeSelection(), void 0
      }
      W.gv.dm().beginTransaction(), W.invokeSubModule("handleDelete", !0), W.gv.dm().endTransaction(), W._42()
    }, pk.prototype.handle_keydown = function (L) {
      var w = this;
      if ((L.metaKey || L.ctrlKey) && w._42(), ih(L) && !w.editing) return w.gvEditing = !1, w.setCursor("default"), w._42(), void 0;
      var H = Ok(L);
      return w.editDetail ? ((H || Fr(L)) && (w.editDetail = !1, w._42()), w.gv.dm().beginTransaction(), w.invokeSubModule("handle_keydown", !0, L), w.gv.dm().endTransaction(), void 0) : (w.gv.dm().beginTransaction(), w.invokeSubModule("handleNormalStateKeyDown", !0, L), w.gv.dm().endTransaction(), H && w._tryEnterEditDetailMode(), void 0)
    }, pk.prototype.handle_keyup = function (h) {
      this.gv.dm().beginTransaction(), this.invokeSubModule("handle_keyup", !0, h), this.gv.dm().endTransaction()
    }, pk.prototype._tryEnterEditDetailMode = function () {
      var X = this;
      return !X.editDetail && X.invokeSubModule("canEnterEditDetailMode", !0) && 1 === X._getValidSelection().length ? (X.editDetail = !0, X._42(), !0) : void 0
    }, pk.prototype._tryQuitEditDetailMode = function (X) {
      var c = this;
      if (c.editDetail) {
        var b = c.gv, H = c.getSubModule("Curve").target;
        return X && b.getDataAt(X) === H ? void 0 : (c.editDetail = !1, c._42(), !0)
      }
    }, pk.prototype.setStyle = function (Q, E, p) {
      var C = this;
      p ? co.setStyle(Q, E) : C._styleMap[Q] = E, C.fp("styleChanged", null, {key: Q, value: E, base: p}), C._42()
    }, pk.prototype.getStyle = function (F) {
      var V = this, n = V._styleMap[F];
      return n !== S ? n : co.getStyle(F)
    }, pk.prototype.setCursor = function (T) {
      this._resetCustomCursorStyle(), Q.graph.EditInteractor.superClass.setCursor.call(this, T)
    }, pk.prototype._resetCustomCursorStyle = function () {
      var m = this;
      if (m._customStyle) {
        var h = this.gv.getView();
        h.classList && h.classList.remove && h.classList.remove(m._customStyle), m._customStyle = null
      }
    }, pk.prototype._setRotateCursor = function (P) {
      var I = this, p = I._cursorFactory;
      p || (p = I._cursorFactory = new co.CursorFactory(I));
      var r = p.getRotateCursor(P), L = I.gv.getView();
      I._resetCustomCursorStyle(), I._customStyle = r, L.classList && L.classList.add && L.classList.add(r)
    };
    var Rc = co.Group = function (j) {
      var n = this;
      n._entities = j, n._64O = 0, n._position = {x: 0, y: 0}, n._scale = {x: 1, y: 1}, n._anchor = {
        x: .5,
        y: .5
      }, n._anchor2 = {x: .5, y: .5}
    };
    Rc.prototype = {}, Rc.prototype.constructor = Rc;
    var Oq = null;
    Rc.findOrCreateGroup = function (y) {
      if (Oq && Oq.checkIsMe(y)) return Oq;
      var x = new co.Group(y);
      return x.getKeyOb() ? (Oq = x, x) : void 0
    }, Rc.prototype.checkIsMe = function (w) {
      var K = this._entities;
      if (K.length !== w.length) return !1;
      var F, s = {}, $ = w.length;
      for (F = 0; $ > F; F++) s[w[F]._id] = !0;
      for (F = 0; $ > F; F++) if (!s[K[F]._id]) return !1;
      return !0
    }, Rc.prototype.getRotation = function () {
      return this._64O
    }, Rc.prototype.getPosition = function () {
      return this._position
    }, Rc.prototype.getAnchor = function () {
      return this._anchor
    }, Rc.prototype.getWidth = function () {
      return this._width
    }, Rc.prototype.getScale = function () {
      return this._scale
    }, Rc.prototype.getSize = function () {
      return {width: this._width, height: this._height}
    }, Rc.prototype.getHeight = function () {
      return this._height
    }, Rc.prototype.getKeyOb = function () {
      for (var W = this._entities, r = W.length - 1; r >= 0; r--) {
        var I = W[r];
        if (this.isNode(I)) return I
      }
    }, Rc.prototype.getAnchor2 = function () {
      var z = this, G = z.rotateCenter;
      if (G) return G;
      var L = z.getKeyOb();
      if (!L) return z._anchor;
      var t = z._anchor2, F = L.getMatrix();
      return F.tf({x: L.getWidth() * (t.x - L.getAnchor().x), y: L.getHeight() * (t.y - L.getAnchor().y)})
    }, Rc.prototype.setAnchor2 = function (l, n) {
      var q = this, h = q.getKeyOb();
      if (h) {
        var Q, $ = h.getMatrix();
        Q = "number" == typeof l ? {x: l, y: n} : l;
        var T = $.tfi(Q);
        q._anchor2 = {x: h.getAnchor().x + T.x / h.getWidth(), y: h.getAnchor().y + T.y / h.getHeight()}
      }
    }, Rc.prototype.setRotation = function () {
    }, Rc.prototype.beginRotate = function ($) {
      this.rotateCenter = $.pos, this.rotateMode = $.groupRotateMode
    }, Rc.prototype.endRotate = function () {
      delete this.rotateCenter, delete this.rotateMode
    }, Rc.prototype.addRotation = function (M, C) {
      return "batch" === C ? this._addRotationInBatchMode(M) : "block" === C ? this._addRotationInBlockMode(M) : void 0
    }, Rc.prototype._addRotationInBlockMode = function (V) {
      var F = this, E = F.rotateCenter || F.getPosition();
      F._entities.forEach(function ($) {
        if (F.isNode($)) {
          var U = $.getMatrix();
          U.translate(-E.x, -E.y), U.rotate(V), U.translate(E.x, E.y);
          var o = Math.sign($.getScale().x);
          $.setRotation(i(U.b * o, U.a * o)), $.setPosition(U.tx, U.ty)
        }
      })
    }, Rc.prototype._addRotationInBatchMode = function (N) {
      var w = this, H = w._anchor2;
      w._entities.forEach(function (b) {
        if (w.isNode(b)) {
          var h = b.getAnchor(), D = b.getMatrix(),
            u = D.tf({x: b.getWidth() * (H.x - h.x), y: b.getHeight() * (H.y - h.y)}), l = new co.Math.Matrix2d;
          l.set(D.a, D.b, D.c, D.d, D.tx, D.ty), l.translate(-u.x, -u.y), l.rotate(N), l.translate(u.x, u.y);
          var q = Math.sign(b.getScale().x);
          b.setRotation(i(l.b * q, l.a * q)), b.setPosition(l.tx, l.ty)
        }
      })
    }, Rc.prototype.setPosition = function (e) {
      var x, P, v, b, p = this, y = p._position, S = e.x - y.x, i = e.y - y.y, h = p._entities;
      for (P = 0, v = h.length; v > P; P++) x = h[P], Kf(x) && (b = x.getPosition(), x.setPosition(b.x + S, b.y + i));
      p._position = e
    }, Rc.prototype.setScale = function (J, B) {
      var d = this, M = J / d._scale.x, L = B / d._scale.y;
      d._adjustChildScaleOrSize(M, L, "size"), d._scale = {x: J, y: B}
    }, Rc.prototype.getRect = function () {
      var d = this, J = d._position, P = d._width, C = d._height;
      return {x: J.x - P / 2, y: J.y - C / 2, width: P, height: C}
    }, Rc.prototype.setSize = function (d, z) {
      var K = this, d = Math.max(1, d), z = Math.max(1, z), U = d / K._width, p = z / K._height;
      K._adjustChildScaleOrSize(U, p, "size"), K._width = d, K._height = z
    }, Rc.prototype._adjustChildScaleOrSize = function (g, q, r) {
      var f, w, J, T, c, _, o, A, x, b, I, D, t, h, U = this, F = U._position, S = U._entities,
        H = new co.Math.Matrix2d;
      for (w = 0, J = S.length; J > w; w++) if (f = S[w], U.isNode(f)) {
        if (T = f.getPosition(), c = f.getRotation(), _ = f.getWidth(), o = f.getHeight(), A = f.getScale(), I = A.x * _, D = A.y * o, H.identity().scale(I, D).rotate(c).translate(T.x, T.y).translate(-F.x, -F.y).rotate(-U._64O), c = i(H.b * Math.sign(I), H.a * Math.sign(I)), H.scale(g, q), x = Math.cos(c), b = Math.sin(c), Math.abs(x) < .001 ? (t = H.b / b, h = -H.c / b) : (t = H.a / x, h = H.d / x), "scale" === r) f.setScale(t / _, h / o); else if ("size" === r) {
          var $ = t / A.x, v = h / A.y;
          f.setScale(Yh(t) * Math.abs(A.x), Yh(h) * Math.abs(A.y)), f.setSize(Math.max(.1, Math.abs($)), Math.max(.1, Math.abs(v)))
        }
        H.rotate(U._64O).translate(F.x, F.y), f.setPosition(H.tx, H.ty)
      }
    }, Rc.prototype.getMatrix = function () {
      var V = this, w = V._position, U = Q.Default.getInternal(), T = V._scale;
      return new U.Mat(V._64O, w.x, w.y, T.x, T.y)
    }, Rc.prototype.toGlobal = function (L) {
      return this.getMatrix().tf(L)
    }, Rc.prototype.getCorners = function () {
      var H = this, S = H._width, o = H._height, i = H._anchor, c = -S * i.x, F = -o * i.y, V = H.getMatrix();
      return [V.tf(c, F), V.tf(c, F + o), V.tf(c + S, F + o), V.tf(c + S, F)]
    }, Rc.prototype.calcInfo = function () {
      var Z, g, T, R, B, a, P = this, l = [], J = P._entities, k = P._64O;
      for (R = 0, B = J.length; B > R; R++) a = J[R], P.isNode(a) && a.getCorners && l.push.apply(l, a.getCorners());
      if (l.length) {
        var L = Math.cos(-k), e = Math.sin(-k), i = 1 / 0, m = -1 / 0, y = 1 / 0, f = -1 / 0;
        for (R = 0, B = l.length; B > R; R++) T = l[R], Z = T.x, g = T.y, T.x = L * Z - e * g, T.y = e * Z + L * g, i = Math.min(i, T.x), m = Math.max(m, T.x), y = Math.min(y, T.y), f = Math.max(f, T.y);
        P._width = (m - i) / P._scale.x, P._height = (f - y) / P._scale.y, L = Math.cos(k), e = Math.sin(k);
        var h = P._anchor;
        Z = i + (m - i) * h.x, g = y + (f - y) * h.y, P._position = {x: L * Z - e * g, y: e * Z + L * g}
      }
    }, Rc.prototype.isNode = function (h) {
      return Kf(h) ? sr(h) ? !1 : !0 : !1
    }, Rc.prototype._42 = function (j, G, Y) {
      var w, r, f, z, P, i, b, W, t = this, s = t._entities, J = t.rotateMode;
      for ("batch" === J && (W = t.getKeyOb()), w = 0, r = s.length; r > w; w++) f = s[w], t.isNode(f) && (i = f.getRect(), z = co.toScreenPosition(Y, {
        x: i.x,
        y: i.y
      }), P = co.toScreenPosition(Y, {x: i.x + i.width, y: i.y + i.height}), b = {
        min: z,
        max: P
      }, f === W && (b.isKeyOb = !0), co.Icons.DrawIcon(j, G, co.Icons.GroupSubEntityRect, b))
    };
    var pl = co.CurveActiving = function (w, p) {
      this._curve = w, this._interactor = w._interactor;
      for (var Y in p) this[Y] = p[Y]
    };
    pl.prototype = {}, pl.prototype.constructor = pl, F.defineProperties(pl.prototype, {
      point: {
        get: function () {
          return this._point
        }, set: function (J) {
          var O = this;
          O._point = J, O.editingCtrl || O._firePointChange()
        }
      }, pairs: {
        get: function () {
          return this._pairs
        }, set: function (b) {
          var j = this;
          j._pairs = b, j.editingCtrl && j._firePointChange()
        }
      }
    }), pl.prototype._firePointChange = function () {
      var _ = this, I = _.getCurrentEditingPoint();
      if (!I) return r.fi({kind: "selectPoint"}), void 0;
      var r = _._interactor, N = this._curve.target;
      if (N) {
        var g = co.getDataMatrix(N).invert(), s = I.e;
        I = g.apply(co.toWorldPosition(r.gv, I)), I.e = s;
        var k = _._lastFirePoint;
        k && Math.abs(I.x - k.x) < 1e-5 && Math.abs(I.y - k.y) < 1e-5 && (I.e == S && k.e == S || Math.abs(I.e - k.e) < 1e-5) || (_._lastFirePoint = I, r.fi({
          kind: "selectPoint",
          x: I.x,
          y: I.y,
          e: I.e
        }))
      }
    }, pl.prototype.dispose = function () {
      this._interactor.fi({kind: "selectPoint"})
    }, pl.prototype.getCurrentEditingPoint = function () {
      var t = this, D = t.editingCtrl;
      if (D) {
        var S = t.pairs;
        if (S) {
          var G = S[D.pairId], r = G[D.type];
          if (r) return r
        }
      }
      return t._point
    };
    var Pq = co.CursorFactory = function (l) {
      var F = this;
      F._interactor = l, F._rotateCursorStyles = {}
    };
    Pq.prototype = {}, Pq.prototype.constructor = Pq, Pq.prototype.getRotateCursor = function (w) {
      var g = this;
      0 > w && (w += 2 * Math.PI);
      var l = g._interactor, B = l.getStyle("rotateCursorSize"), Q = l.getStyle("rotateCursorRound"),
        d = Math.round(180 * (w / Math.PI) / Q);
      d * Q >= 360 && (d = 0);
      var T = g._rotateCursorStyles, E = "htCustomRotateStyle_" + B + "_" + Q + "_" + d;
      return T[E] || (g._produceRotateCursor(E, B, Q, d), T[E] = !0), E
    }, Pq.prototype._produceRotateCursor = function (t, H, T, N) {
      var o = this;
      o._interactor;
      var v = o._canvas;
      v || (v = o._canvas = y.createElement("canvas")), v.width = v.height = H * devicePixelRatio, v.style.width = v.style.height = H + " px";
      var w = v.getContext("2d");
      co.setAntialias(w, !1), w.scale(devicePixelRatio, devicePixelRatio);
      var Z, I, p, q, P, j = Math.round(H / 2), F = "" + j + " " + j + ",auto !important;";
      Z = Math.PI / 180 * N * T, w.clearRect(0, 0, H, H), w.save(), w.scale(H / 32, H / 32), w.translate(16, 16), w.rotate(Z + Math.PI / 2), w.beginPath(), w.moveTo(-8, 0), w.lineTo(-8, 3), w.lineTo(-5, 3), w.moveTo(8, 0), w.lineTo(8, 3), w.lineTo(5, 3), w.moveTo(-8, 3), w.quadraticCurveTo(0, -6, 8, 3), w.restore(), w.strokeStyle = "white", w.lineWidth = 4, w.stroke(), w.strokeStyle = "black", w.lineWidth = 2, w.stroke(), I = JSON.stringify(v.toDataURL()), q = "cursor:url(" + I + ")" + F, 1 !== devicePixelRatio && (p = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + H + 'px" height="' + H + 'px"><image xlink:href=' + I + ' width="' + H + '" height="' + H + '"/></svg>', q += "cursor:url(data:image/svg+xml;base64," + btoa(p) + ")" + F, q += "cursor:-webkit-image-set(url(" + I + ")" + devicePixelRatio + "x,url(" + I + ")1x)" + F), P = y.createElement("style"), P.textContent = "body." + t + " *, ." + t + "{" + q + "}", y.head.appendChild(P)
    };
    var bc = co.Guide.Grid = function (y) {
      var e = this;
      e._interactor = y, e._alignmentGuideId = 0, e._xAlignmentGuide = [], e._yAlignmentGuide = []
    };
    bc.prototype = {}, bc.prototype.constructor = bc, F.defineProperties(bc.prototype, {
      gridBlockSize: {
        get: function () {
          var O = this;
          return O._gridBlockSize || O._interactor.getStyle("gridBlockSize")
        }, set: function (s) {
          this._gridBlockSize = s, this._interactor._42()
        }
      }, gridThickLinesEvery: {
        get: function () {
          var V = this;
          return V._gridThickLinesEvery || V._interactor.getStyle("gridThickLinesEvery")
        }, set: function (E) {
          this._gridThickLinesEvery = E, this._interactor._42()
        }
      }, gridEnabled: {
        get: function () {
          var o = this, U = o._interactor;
          return U.gridEnabled && o.isValidGrid()
        }
      }
    }), bc.prototype._42 = function () {
      var j = this, Y = j._interactor;
      j.gridEnabled && j.drawGrid(), Y.alignmentGuideEnabled && j.drawAlignmentGuide()
    }, bc.prototype.makeMatrix = function () {
      var m = this, t = m._interactor.getStyle("gridAngle"), U = m._interactor.getStyle("gridRotation"),
        l = new co.Math.Matrix2d, u = Math.sin(t), q = Math.cos(t);
      return l.set(1, 0, q, u, 0, 0), l.rotate(U), l
    }, bc.prototype.isValidGrid = function () {
      var N = this, R = Math.PI, u = N._interactor, D = u.gv;
      if (D._zoom < u.getStyle("gridZoomThreshold")) return !1;
      var Y = u.getStyle("gridAngle"), k = Math.abs(180 * (Y % R / R)), t = 1 - 1e-8;
      return t > k || k > 180 - t ? !1 : !0
    }, bc.prototype.drawAlignmentGuide = function () {
      var O = this, t = O._interactor, M = t.gv, V = t._canvas, s = t._context, G = V.width, i = V.height, o = M.tx(),
        A = M.ty(), Z = M._zoom;
      s.beginPath(), s.strokeStyle = t.getStyle("gridAlignmentGuideColor"), s.lineWidth = 1, O._xAlignmentGuide.forEach(function (Y) {
        var w = Y.p * Z + o;
        s.moveTo(w, 0), s.lineTo(w, i)
      }), O._yAlignmentGuide.forEach(function (r) {
        var m = r.p * Z + A;
        s.moveTo(0, m), s.lineTo(G, m)
      }), s.stroke()
    }, bc.prototype.drawGrid = function () {
      function y(M, f, r, v) {
        var g = co.toScreenPosition(h, _.apply({x: M, y: f})), x = co.toScreenPosition(h, _.apply({x: r, y: v}));
        $.moveTo(g.x, g.y), $.lineTo(x.x, x.y)
      }

      var C = this, A = C._interactor, O = C.gridBlockSize, u = C.gridThickLinesEvery, N = A.getStyle("gridThickColor"),
        T = A.getStyle("gridLightColor"), h = A.gv, t = A._canvas, $ = A._context, W = t.width, o = t.height,
        _ = C.makeMatrix(), l = _.applyInverse(co.toWorldPosition(h, {x: 0, y: 0})),
        R = _.applyInverse(co.toWorldPosition(h, {x: W, y: 0})),
        n = _.applyInverse(co.toWorldPosition(h, {x: 0, y: o})),
        J = _.applyInverse(co.toWorldPosition(h, {x: W, y: o})), H = Math.min(l.x, R.x, n.x, J.x),
        w = Math.max(l.x, R.x, n.x, J.x), p = Math.min(l.y, R.y, n.y, J.y), X = Math.max(l.y, R.y, n.y, J.y);
      W = w - H, o = X - p;
      var z = Math.ceil(H / O), P = Math.floor(w / O), Q = Math.ceil(p / O), B = Math.floor(X / O);
      h.tx(), h.ty(), h._zoom;
      var m, j, q;
      for ($.save(), $.lineWidth = 1, $.beginPath(), $.strokeStyle = N, q = Math.ceil(z / u) * u; P >= q; q += u) m = q * O, y(m, p, m, X);
      for (q = Math.ceil(Q / u) * u; B >= q; q += u) j = q * O, y(H, j, w, j);
      for ($.stroke(), $.beginPath(), $.strokeStyle = T, q = z; P >= q; q++) 0 !== q % u && (m = q * O, y(m, p, m, X));
      for (q = Q; B >= q; q++) 0 !== q % u && (j = q * O, y(H, j, w, j));
      $.stroke(), $.restore()
    }, bc.prototype.getAlignmentGuides = function () {
      var c = this;
      return {x: c._xAlignmentGuide, y: c._yAlignmentGuide}
    }, bc.prototype.addAlignmentGuide = function (l, k, j) {
      var W = this, L = "x" === l ? W._xAlignmentGuide : W._yAlignmentGuide, j = j ? j : ++W._alignmentGuideId,
        K = {p: k, id: j};
      if (L.length) {
        var c = W._findClosestAlignmentGuide(K.p, L);
        c.dis < 0 ? L.splice(c.index + 1, 0, K) : L.splice(c.index, 0, K)
      } else L.push(K);
      return W._interactor._42(), j
    }, bc.prototype.findClosest = function (g, L, i) {
      var Z = this, B = Z._interactor, V = B.gv;
      i && (g = co.toWorldPosition(V, g));
      var v, d, h, b = 1 / 0, q = 1 / 0, H = g.x, G = g.y;
      if (Z.gridEnabled) {
        var u = Z.gridBlockSize, M = Z.makeMatrix(), z = M.applyInverse(g);
        z = M.apply({x: Math.round(z.x / u) * u, y: Math.round(z.y / u) * u}), b = z.x - H, q = z.y - G, h = !0
      }
      if (B.alignmentGuideEnabled && (v = Z._findClosestAlignmentGuide(H, Z._xAlignmentGuide).dis, d = Z._findClosestAlignmentGuide(G, Z._yAlignmentGuide).dis, Math.abs(v) < Math.abs(b) && (b = v, h = !0), Math.abs(d) < Math.abs(q) && (q = d, h = !0)), h) {
        h = !1;
        var j = V._zoom, t = B.getStyle("smartGuideSensitivity") / j, k = {};
        if (Math.abs(b) < t && "y" !== L && (k.x = i ? b * j : b, h = !0), Math.abs(q) < t && "x" !== L && (k.y = i ? q * j : q, h = !0), h) return k
      }
    }, bc.prototype._findClosestAlignmentGuide = function (A, h) {
      if (!h.length) return {dis: 1 / 0};
      for (var b, H = 0, D = h.length - 1; D - H > 1;) b = Math.floor((H + D) / 2), h[b].p < A ? H = b : D = b;
      var E = h[H].p - A, Q = h[D].p - A;
      return Math.abs(E) <= Math.abs(Q) ? {line: h[H], dis: E, index: H} : {line: h[D], dis: Q, index: D}
    }, bc.prototype.removeAllAlignmentGuide = function (H) {
      var e = this;
      "y" !== H && (e._xAlignmentGuide = []), "x" !== H && (e._yAlignmentGuide = []), e._interactor._42()
    }, bc.prototype.removeAlignmentGuide = function (L) {
      for (var s, x, Y, o = this, E = o._xAlignmentGuide, I = 0; 2 > I; I++) for (E = 0 === I ? o._xAlignmentGuide : o._yAlignmentGuide, s = 0, x = E.length; x > s; s++) if (Y = E[s], Y.id === L) return E.splice(s, 1), o._interactor._42(), {
        axis: 0 === I ? "x" : "y",
        position: Y.p
      };
      return !1
    }, bc.prototype.adjustAlignmentGuide = function (V, f) {
      var h = this, S = h.removeAlignmentGuide(V);
      return S ? (h.addAlignmentGuide(S.axis, f, V), !0) : !1
    };
    var pe = co.Guide.Rect = function (d) {
      var K = this;
      K._interactor = d
    };
    pe.prototype = {}, pe.prototype.constructor = pe, pe.prototype.gatherRects = function () {
      var d, c, f, K, $ = this, r = $._interactor.gv, w = [], A = [], J = {x: w, y: A}, P = {}, u = r.getDataModel(),
        o = u.a("width"), B = u.a("height");
      o && B && (d = 0, c = 0, f = o, K = B, w.push({node: u, type: 0, p: d}, {
        node: u,
        type: 1,
        p: d + f / 2
      }, {node: u, type: 2, p: d + f}), A.push({node: u, type: 0, p: c}, {node: u, type: 1, p: c + K / 2}, {
        node: u,
        type: 2,
        p: c + K
      }), P[u._id || 0] = {x: d, y: c, width: f, height: K}), u.each(function (h) {
        if (Kf(h) && !r.isSelected(h) && r.isVisible(h)) {
          var M = !1;
          if (r.sm().getSelection().each(function (e) {
            M || (h.isHostOn(e) ? M = !0 : h.isDescendantOf(e) && (M = !0))
          }), !M) {
            var q = h.getRect();
            d = q.x, c = q.y, f = q.width, K = q.height, w.push({node: h, type: 0, p: d}, {
              node: h,
              type: 1,
              p: d + f / 2
            }, {node: h, type: 2, p: d + f}), A.push({node: h, type: 0, p: c}, {
              node: h,
              type: 1,
              p: c + K / 2
            }, {node: h, type: 2, p: c + K}), P[h._id] = q
          }
        }
      }), w.sort(function (L, n) {
        return L.p - n.p
      }), A.sort(function (K, m) {
        return K.p - m.p
      }), $._grid = J, $._87I = P
    }, pe.prototype.gatherLines = function (_, j, B) {
      var t, J, l, F, L, V, I, m, K, C, D, f, d = this, Q = [d.findClosest({x: _.x, y: _.y}, j), d.findClosest({
        x: _.x + _.w / 2,
        y: _.y + _.h / 2
      }, j), d.findClosest({x: _.x + _.w, y: _.y + _.h}, j)], e = {}, u = d._87I;
      B = B || 255;
      var R, X;
      for (d._guideLine = [], t = 0; 2 > t; t++) for (e = {}, 0 === t ? (F = "y", m = _.x, K = m + _.w) : (F = "x", m = _.y, K = m + _.h), J = 0; 3 > J; J++) L = Q[J], L && isFinite(L[F]) && (R = 1 << 3 * t + J, B & R && (V = L[F + "Line"], I = V.node, X = I._id || 0, e[X] || (e[X] = !0, f = u[X], "y" === F ? (C = f.x, D = f.x + f.width) : (C = f.y, D = f.y + f.height), l = V.p, d._guideLine.push({
        type: F,
        a: m,
        b: K,
        c: C,
        d: D,
        p: l,
        center: 1 === V.type
      }))))
    }, pe.prototype._binarySearchClosest = function (m, q) {
      if (!q.length) return {dis: 1 / 0};
      for (var k, o = 0, p = q.length - 1; p - o > 1;) k = Math.floor((o + p) / 2), q[k].p < m ? o = k : p = k;
      var v = q[o].p - m, _ = q[p].p - m;
      return Math.abs(v) <= Math.abs(_) ? {line: q[o], dis: v} : {line: q[p], dis: _}
    }, pe.prototype.findClosest = function (d, m, b) {
      var X = this, l = X._interactor, k = l.gv, V = X._grid;
      b && (d = co.toWorldPosition(k, d));
      var t, C = X._binarySearchClosest(d.x, V.x), e = X._binarySearchClosest(d.y, V.y), j = C.dis, N = e.dis,
        T = k._zoom, M = l.getStyle("smartGuideSensitivity") / T, u = {};
      return Math.abs(j) < M && "y" !== m && (u.x = b ? j * T : j, u.xLine = C.line, t = !0), Math.abs(N) < M && "x" !== m && (u.y = b ? N * T : N, u.yLine = e.line, t = !0), t ? u : void 0
    }, pe.prototype._42 = function () {
      var T = this, V = T._guideLine;
      if (V && !Q.Default.isCtrlDown()) {
        var x, X, w, m, K, i, p, z, j, b, O, q, U, F, L, y, f, G = T._interactor, P = G.gv, v = G._context, l = P.tx(),
          W = P.ty(), N = P._zoom, e = G.getStyle("guideLineTextSpacing");
        for (x = 0, X = V.length; X > x; x++) w = V[x], z = w.type, j = w.p, b = w.a, O = w.b, q = w.c, U = w.d, F = Math.min(b, q), L = Math.max(O, U), "x" === z ? (m = j * N + l, K = F * N + W, i = m, p = L * N + W) : (m = F * N + l, K = j * N + W, i = L * N + l, p = K), co.Icons.DrawIcon(G, v, co.Icons.MoveLineGuide, {
          rect: [m, K, i, p],
          center: w.center
        }), U >= b && O >= q || (F = b > U ? U : O, L = b > U ? b : q, f = L - F, "x" === z ? (w.center2center || (m -= e, i = m), K = F * N + W, p = L * N + W, y = co.Icons.MoveLineGuideDistanceV) : "y" === z && (w.center2center || (K -= e, p = K), m = F * N + l, i = L * N + l, y = co.Icons.MoveLineGuideDistanceH), co.Icons.DrawIcon(G, v, y, {
          x0: m,
          y0: K,
          x1: i,
          y1: p,
          dis: f
        }))
      }
    }, pe.prototype.clear = function () {
      this._guideLine = null
    }, co.DefaultStyleMap = {
      pointSize: [24, 9],
      checkSize: 7,
      rotateCheckSize: 10,
      moveSensitivity: 10,
      keepAspectRatio: !1,
      rotateRound: Math.PI / 2,
      rotateSensitivity: Math.PI / 60,
      shiftRotateRound: Math.PI / 12,
      shiftLineRotateRound: Math.PI / 4,
      anchorMovable: !0,
      anchorVisible: !0,
      anchorHideThreshold: 25,
      anchorOutsideVisibleThreshold: .25,
      anchorRound: .25,
      anchorSensitivity: .02,
      smartGuideSensitivity: 8,
      curveIntersectSize: 5,
      curvePointIntersectSize: 8,
      edgeHostDetectPerFrame: !0,
      guideLineTextSpacing: 0,
      gridBlockSize: 40,
      gridThickLinesEvery: 10,
      gridThickColor: "#5d5d5d",
      gridLightColor: "#d0d0d0",
      gridZoomThreshold: .25,
      gridAlignmentGuideColor: "#ff0000",
      gridAngle: Math.PI / 2,
      gridRotation: 0,
      groupRotateModeDefault: "block",
      groupRotateModeKey: ["ctrlKey", "metaKey"],
      rotateCursorSize: 32,
      rotateCursorRound: 45,
      tipTextColor: "#ffffff",
      tipBackground: "#333333",
      curveHighlightColor: "#30599e",
      rectPointBackground: "white",
      rectPointBorderColor: "#666666",
      rectPointShadowColor: "rgba(0,0,0,0.35)",
      shapeCtrlPointBackground: "white",
      shapeCtrlPointBorderColor: null,
      shapeCtrlPointHighlightBorder: null,
      shapeHighlighPointBackground: "#30599e",
      curveElevationVisible: !0,
      curveElevationIntersectSize: 8,
      curveElevationGuideShift: [20, 0],
      connectGuideVisible: !0,
      connectGuideShift: [1, .25, 8, 0],
      connectGuideIntersectSize: 8,
      connectGuideGarbageIntersectsize: 25,
      connectGuideGarbageShift: [1, 1, -48, -48]
    };
    var Fo = co.Icons = {}, _f = 1e4, is = null, In = "rgb(51,153,255)", Nh = "rgb(183,232,135)",
      am = "rgb(255,204,153)", Nn = 6;
    Q.Default.setImage("Icons.RectPoint", {
      width: Nn,
      height: Nn,
      comps: [{type: "rect", background: "rgb(247,247,247)", borderWidth: 1, borderColor: In, rect: [0, 0, Nn, Nn]}]
    });
    var gk = "#e000e0";
    Fo.GroupSubEntityRect = {
      comps: [{
        type: "shape", points: {
          func: function () {
            var A = Fo.GroupSubEntityRect.data;
            if (!A) return [];
            var a = A.min, b = A.max;
            return [a.x, a.y, a.x, b.y, b.x, b.y, b.x, a.y]
          }
        }, segments: [1, 2, 2, 2, 5], background: null, borderWidth: 1, borderColor: {
          func: function () {
            return Fo.GroupSubEntityRect.data.isKeyOb ? gk : "#666666"
          }
        }
      }]
    }, Fo.Line = {
      comps: [{
        type: "image", name: "Icons.RectPoint", rect: {
          func: function () {
            return [[Fo.Line.data.P1.x, Fo.Line.data.P1.y], Nn, Nn]
          }
        }
      }, {
        type: "image", name: "Icons.RectPoint", rect: {
          func: function () {
            return [[Fo.Line.data.P2.x, Fo.Line.data.P2.y], Nn, Nn]
          }
        }
      }]
    }, Fo.NodeHoverGuide = {
      comps: [{
        type: "shape", points: {
          func: function () {
            return Fo.NodeHoverGuide.data
          }
        }, segments: [1, 2, 2, 2, 5], background: null, borderWidth: 1, borderColor: "#3399FF"
      }]
    }, Fo.Rect = {
      comps: [{
        type: "shape", points: {
          func: function () {
            var A = Fo.Rect.data;
            if (!A) return [];
            var u = A.LT, x = A.LB, f = A.RB, n = A.RT;
            return [u.x, u.y, x.x, x.y, f.x, f.y, n.x, n.y]
          }
        }, segments: [1, 2, 2, 2, 5], background: null, borderWidth: 1, borderColor: In
      }, {
        type: "image", name: "Icons.RectPoint", rotation: {
          func: function () {
            return Fo.Rect.data.rotation
          }
        }, rect: {
          func: function () {
            return [[Fo.Rect.data.LT.x, Fo.Rect.data.LT.y], Nn, Nn]
          }
        }
      }, {
        type: "image", name: "Icons.RectPoint", rotation: {
          func: function () {
            return Fo.Rect.data.rotation
          }
        }, rect: {
          func: function () {
            return [[Fo.Rect.data.LB.x, Fo.Rect.data.LB.y], Nn, Nn]
          }
        }
      }, {
        type: "image", name: "Icons.RectPoint", rotation: {
          func: function () {
            return Fo.Rect.data.rotation
          }
        }, rect: {
          func: function () {
            return [[Fo.Rect.data.RB.x, Fo.Rect.data.RB.y], Nn, Nn]
          }
        }
      }, {
        type: "image", name: "Icons.RectPoint", rotation: {
          func: function () {
            return Fo.Rect.data.rotation
          }
        }, rect: {
          func: function () {
            return [[Fo.Rect.data.RT.x, Fo.Rect.data.RT.y], Nn, Nn]
          }
        }
      }, {
        type: "image", name: "Icons.RectPoint", rotation: {
          func: function () {
            return Fo.Rect.data.rotation
          }
        }, visible: {
          func: function () {
            return Fo.Rect.data.L ? !0 : !1
          }
        }, rect: {
          func: function () {
            return [[Fo.Rect.data.L.x, Fo.Rect.data.L.y], Nn, Nn]
          }
        }
      }, {
        type: "image", name: "Icons.RectPoint", rotation: {
          func: function () {
            return Fo.Rect.data.rotation
          }
        }, visible: {
          func: function () {
            return Fo.Rect.data.R ? !0 : !1
          }
        }, rect: {
          func: function () {
            return [[Fo.Rect.data.R.x, Fo.Rect.data.R.y], Nn, Nn]
          }
        }
      }, {
        type: "image", name: "Icons.RectPoint", rotation: {
          func: function () {
            return Fo.Rect.data.rotation
          }
        }, visible: {
          func: function () {
            return Fo.Rect.data.T ? !0 : !1
          }
        }, rect: {
          func: function () {
            return [[Fo.Rect.data.T.x, Fo.Rect.data.T.y], Nn, Nn]
          }
        }
      }, {
        type: "image", name: "Icons.RectPoint", rotation: {
          func: function () {
            return Fo.Rect.data.rotation
          }
        }, visible: {
          func: function () {
            return Fo.Rect.data.B ? !0 : !1
          }
        }, rect: {
          func: function () {
            return [[Fo.Rect.data.B.x, Fo.Rect.data.B.y], Nn, Nn]
          }
        }
      }]
    };
    var Gk = 16;
    Q.Default.setImage("Icons.Anchor", {
      width: 12,
      height: 12,
      comps: [{
        type: "shape",
        borderWidth: 1,
        borderColor: In,
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [.50928, 6, 11.49072, 6, 6, 6, 6, .50928, 6, 11.49072]
      }, {
        type: "circle",
        borderWidth: 1,
        borderColor: In,
        shadowColor: "#1ABC9C",
        rect: [2.84391, 2.84391, 6.53697, 6.53697]
      }]
    }), Fo.Anchor = {
      comps: [{
        type: "image", name: "Icons.Anchor", rect: {
          func: function () {
            return [[Fo.Anchor.data.POS.x, Fo.Anchor.data.POS.y], Gk, Gk]
          }
        }
      }]
    }, Fo.TipShiftX = 12, Fo.TipShiftY = 12;
    var Ac = [8, 28];
    Fo.TipHelper = {
      comps: [{
        type: "roundRect", rect: {
          func: function () {
            return [Fo.TipHelper.data.helperPos.x, Fo.TipHelper.data.helperPos.y, Ac[0] * Fo.TipHelper.data.size, Ac[1]]
          }
        }, background: {
          func: function () {
            return is.getStyle("tipBackground")
          }
        }, opacity: .6
      }, {
        type: "text", text: {
          func: function () {
            return Fo.TipHelper.data.text
          }
        }, rect: {
          func: function () {
            return [Fo.TipHelper.data.helperPos.x, Fo.TipHelper.data.helperPos.y, Ac[0] * Fo.TipHelper.data.size, Ac[1]]
          }
        }, color: {
          func: function () {
            return is.getStyle("tipTextColor")
          }
        }, font: "bold 12px Arial", align: "center"
      }]
    };
    var Fk = 7;
    Fo.ShapePoint = {
      comps: [{
        type: "circle", rect: {
          func: function () {
            var o = Fo.ShapePoint.data.point;
            return [o, Fk, Fk]
          }
        }, background: {
          func: function () {
            var P = Fo.ShapePoint.data.isEnd;
            return P ? "rgba(27,124,222,0.7)" : "#ffffff"
          }
        }, borderWidth: 1, borderColor: In
      }]
    }, Fo.ShapeBgCurve = {
      comps: [{
        type: "shape", points: {
          func: function () {
            return Fo.ShapeBgCurve.data.P
          }
        }, segments: {
          func: function () {
            return Fo.ShapeBgCurve.data.S
          }
        }, background: null, borderWidth: 1, borderColor: In
      }]
    };
    var gr = 8;
    Fo.ShapeHighlighPoint = {
      comps: [{
        type: "circle", rect: {
          func: function () {
            var S = Fo.ShapeHighlighPoint.data;
            return [[S.x, S.y], gr, gr]
          }
        }, background: {
          func: function () {
            return is.getStyle("shapeHighlighPointBackground")
          }
        }, borderWidth: 0
      }]
    };
    var Ur = 10;
    Fo.ShapeHighlighRealPoint = {
      comps: [{
        type: "circle", rect: {
          func: function () {
            var W = Fo.ShapeHighlighRealPoint.data;
            return [[W.x, W.y], Ur, Ur]
          }
        }, background: "#ffffff", borderWidth: 2, borderColor: In
      }]
    };
    var fn = 8;
    Fo.ShapeHighlighCtrlPoint = {
      comps: [{
        type: "shape", points: {
          func: function () {
            var L = Fo.ShapeHighlighCtrlPoint.data, i = L.x, W = L.y, s = fn / 2;
            return [i - s, W - s, i - s, W + s, i + s, W + s, i + s, W - s]
          }
        }, segments: [1, 2, 2, 2, 5], borderWidth: 2, background: {
          func: function () {
            return is.getStyle("shapeCtrlPointBackground")
          }
        }, borderColor: {
          func: function () {
            return is.getStyle("shapeCtrlPointBorderColor") || In
          }
        }
      }]
    };
    var ad = 3;
    Fo.ShapeHighlightCurve = {
      comps: [{
        type: "shape", points: {
          func: function () {
            return Fo.ShapeHighlightCurve.data
          }
        }, segments: [1, 4], background: null, borderWidth: ad, borderColor: {
          func: function () {
            return is.getStyle("curveHighlightColor")
          }
        }
      }]
    }, Fo.ShapeGuideLine = {
      comps: [{
        type: "shape", points: {
          func: function () {
            return Fo.ShapeGuideLine.data
          }
        }, background: null, borderWidth: 1, borderColor: "rgb(255,204,153)"
      }]
    }, Fo.MoveLineGuide = {
      comps: [{
        type: "shape", points: {
          func: function () {
            return Fo.MoveLineGuide.data.rect
          }
        }, background: null, borderWidth: 1, borderColor: {
          func: function () {
            return Fo.MoveLineGuide.data.center ? Nh : am
          }
        }
      }]
    };
    var Vl = 5;
    Fo.MoveLineGuideDistanceH = {
      comps: [{
        type: "shape", points: {
          func: function () {
            var J = Fo.MoveLineGuideDistanceH.data, Y = J.x0, M = J.y0;
            return [Y, M - Vl, Y, M + Vl]
          }
        }, rotation: -Math.PI / 4, segments: [1, 2], background: null, borderWidth: 1, borderColor: am
      }, {
        type: "shape", points: {
          func: function () {
            var Q = Fo.MoveLineGuideDistanceH.data, K = Q.x1, p = Q.y1;
            return [K, p - Vl, K, p + Vl]
          }
        }, rotation: -Math.PI / 4, segments: [1, 2], background: null, borderWidth: 1, borderColor: am
      }, {
        type: "text", text: {
          func: function () {
            return Math.round(Fo.MoveLineGuideDistanceH.data.dis)
          }
        }, rect: {
          func: function () {
            var J = Fo.MoveLineGuideDistanceH.data;
            return [[(J.x0 + J.x1) / 2, J.y0 - 10], 20, 20]
          }
        }, color: am, font: "12px Arial", align: "center"
      }]
    }, Fo.MoveLineGuideDistanceV = {
      comps: [{
        type: "shape", points: {
          func: function () {
            var A = Fo.MoveLineGuideDistanceV.data, f = A.x0, r = A.y0;
            return [f - Vl, r, f + Vl, r]
          }
        }, rotation: Math.PI / 4, segments: [1, 2], background: null, borderWidth: 1, borderColor: am
      }, {
        type: "shape", points: {
          func: function () {
            var Z = Fo.MoveLineGuideDistanceV.data, C = Z.x1, G = Z.y1;
            return [C - Vl, G, C + Vl, G]
          }
        }, rotation: Math.PI / 4, segments: [1, 2], background: null, borderWidth: 1, borderColor: am
      }, {
        type: "text", text: {
          func: function () {
            return Math.round(Fo.MoveLineGuideDistanceV.data.dis)
          }
        }, rect: {
          func: function () {
            var H = Fo.MoveLineGuideDistanceV.data;
            return [[H.x0 - 10, (H.y0 + H.y1) / 2], 20, 20]
          }
        }, color: am, font: "12px Arial", align: "center"
      }]
    }, Q.Default.setImage("Icons.EdgeElevationGuideImage", {
      width: 16,
      height: 16,
      comps: [{
        type: "oval",
        background: "rgb(255,255,255)",
        borderWidth: 1,
        borderColor: "rgb(138,138,138)",
        rect: [.5, .5, 15, 15]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(44,44,44)",
        borderCap: "round",
        points: [4, 8, 8, 4, 12, 8, 8, 4, 8, 13],
        segments: [1, 2, 2, 1, 2]
      }]
    }), Fo.EdgeElevationGuide = {
      comps: [{
        type: "image",
        name: "Icons.EdgeElevationGuideImage",
        rect: {
          func: function () {
            var U = Fo.EdgeElevationGuide.data, V = U.x, e = U.y, m = is.getStyle("curveElevationIntersectSize"),
              k = is.getStyle("curveElevationGuideShift");
            return V += k[0], e += k[1], [V - m, e - m, 2 * m, 2 * m]
          }
        }
      }]
    }, Q.Default.setImage("Icons.ConnectGuideBgImage", {
      width: 12,
      height: 12,
      comps: [{
        type: "shape",
        background: "#3399ff",
        fillRule: "evenodd",
        shadowColor: "#1ABC9C",
        rotation: 3.14159,
        points: [6.00001, 11.99999, 6.00001, 11.99999, 2.6863, 11.99999, 1e-5, 9.30695, 1e-5, 5.99999, 1e-5, 5.99999, 1e-5, 2.68628, 2.69305, -1e-5, 6.00001, -1e-5, 12.00001, -1e-5, 11.99998, 12.00001, 6.00001, 11.99999],
        segments: [1, 2, 4, 2, 4, 2, 2, 2]
      }]
    }), Q.Default.setImage("Icons.ConnectGuideHeaderImage", {
      width: 12,
      height: 12,
      comps: [{
        type: "oval",
        background: "#3399FF",
        borderColor: "#3399FF",
        shadowColor: "#1ABC9C",
        rect: [0, 0, 12, 12]
      }, {
        type: "shape",
        borderWidth: 1,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [4.76, 2.56, 8.2, 5.98, 4.76, 9.44]
      }]
    }), Fo.ConnectGuide = {
      comps: [{
        type: "image", name: "Icons.ConnectGuideBgImage", rotation: {
          func: function () {
            return Fo.ConnectGuide.data.rotation
          }
        }, rect: {
          func: function () {
            var I = Fo.ConnectGuide.data.connect;
            I.x, I.y;
            var b = is.getStyle("connectGuideIntersectSize");
            return [[I.x, I.y], 2 * b, 2 * b]
          }
        }
      }, {
        type: "image", name: "Icons.ConnectGuideHeaderImage", rect: {
          func: function () {
            var p = Fo.ConnectGuide.data.cursorPos || Fo.ConnectGuide.data.connect,
              W = is.getStyle("connectGuideIntersectSize");
            return [[p.x, p.y], 2 * W - 2, 2 * W - 2]
          }
        }
      }, {
        type: "shape",
        background: null,
        borderColor: "#3399ff",
        borderWidth: 2,
        segments: [1, 4],
        points: {
          func: function () {
            var o = Fo.ConnectGuide.data.connect, T = Fo.ConnectGuide.data.cursorPos || o;
            return [o.x, o.y, o.x + .5 * (T.x - o.x), o.y, T.x + .5 * (o.x - T.x), T.y, T.x, T.y]
          }
        }
      }]
    }, Q.Default.setImage("Icons.ConnectGuideGarbageImage", {
      width: 48,
      height: 48,
      comps: [{
        type: "oval",
        background: "rgba(0,0,0,0.1)",
        borderColor: "#979797",
        shadowColor: "#1ABC9C",
        rect: [0, 0, 48, 48]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [19.84721, 19.69091, 19.84721, 32.25123]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [24.10371, 19.69091, 24.10371, 32.25123]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [28.15279, 19.69091, 28.15279, 32.25123]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [11.23055, 15.22377, 36.76945, 15.189, 19.12302, 15.17121, 20.94722, 11.5228, 26.41985, 11.5228, 28.24406, 15.17121]
      }, {
        type: "rect",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        shadowColor: "#1ABC9C",
        rect: [15.48702, 15.22377, 17.02595, 21.25344]
      }]
    }), Q.Default.setImage("Icons.ConnectGuideDeletingImage", {
      width: 56,
      height: 56,
      comps: [{
        type: "oval",
        background: "rgba(232,0,0,0.75)",
        borderColor: "#979797",
        shadowColor: "#1ABC9C",
        rect: [0, 0, 56, 56]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [22.67939, 27.69091, 22.67939, 40.25123]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [26.93588, 27.69091, 26.93588, 40.25123]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        points: [30.98497, 27.69091, 30.98497, 40.25123]
      }, {
        type: "shape",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        borderCap: "round",
        shadowColor: "#1ABC9C",
        anchorX: 0,
        anchorY: 1,
        rotation: 5.65062,
        points: [14.06272, 23.22377, 39.60163, 23.189, 21.9552, 23.17121, 23.7794, 19.5228, 29.25203, 19.5228, 31.07623, 23.17121]
      }, {
        type: "rect",
        borderWidth: 2,
        borderColor: "rgb(255,255,255)",
        shadowColor: "#1ABC9C",
        rect: [18.3192, 23.22377, 17.02595, 21.25344]
      }]
    }), Fo.ConnectGuideGarbage = {
      comps: [{
        type: "image", name: {
          func: function () {
            var P = Fo.ConnectGuideGarbage.data.hover;
            return P ? "Icons.ConnectGuideDeletingImage" : "Icons.ConnectGuideGarbageImage"
          }
        }, rect: {
          func: function () {
            var o = Fo.ConnectGuideGarbage.data, z = is.getStyle("connectGuideGarbageIntersectsize");
            return o.hover && (z += 5), [[o.x, o.y], 2 * z, 2 * z]
          }
        }
      }]
    };
    var mi = 6;
    Fo.ShapeActivingCtrl = {
      comps: [{
        type: "shape", visible: {
          func: function () {
            return Fo.ShapeActivingCtrl.data.c1 ? !0 : !1
          }
        }, points: {
          func: function () {
            var F = Fo.ShapeActivingCtrl.data;
            return [F.point.x, F.point.y, F.c1.x, F.c1.y]
          }
        }, segments: [1, 2], background: null, borderWidth: 1, borderColor: In
      }, {
        type: "shape", visible: {
          func: function () {
            return Fo.ShapeActivingCtrl.data.c2 ? !0 : !1
          }
        }, points: {
          func: function () {
            var D = Fo.ShapeActivingCtrl.data;
            return [D.point.x, D.point.y, D.c2.x, D.c2.y]
          }
        }, segments: [1, 2], background: null, borderWidth: 1, borderColor: In
      }, {
        type: "shape", visible: {
          func: function () {
            return Fo.ShapeActivingCtrl.data.c1 ? !0 : !1
          }
        }, points: {
          func: function () {
            var G = Fo.ShapeActivingCtrl.data.c1, t = G.x, U = G.y, H = mi / 2;
            return "c1" === Fo.ShapeActivingCtrl.data.hl && (H += .5), [t - H, U - H, t - H, U + H, t + H, U + H, t + H, U - H]
          }
        }, segments: [1, 2, 2, 2, 5], borderWidth: 2, background: {
          func: function () {
            return is.getStyle("shapeCtrlPointBackground")
          }
        }, borderColor: {
          func: function () {
            return "c1" === Fo.ShapeActivingCtrl.data.hl ? is.getStyle("shapeCtrlPointHighlightBorder") || In : is.getStyle("shapeCtrlPointBorderColor") || In
          }
        }
      }, {
        type: "shape", visible: {
          func: function () {
            return Fo.ShapeActivingCtrl.data.c2 ? !0 : !1
          }
        }, points: {
          func: function () {
            var m = Fo.ShapeActivingCtrl.data.c2, F = m.x, u = m.y, j = mi / 2;
            return "c2" === Fo.ShapeActivingCtrl.data.hl && (j += .5), [F - j, u - j, F - j, u + j, F + j, u + j, F + j, u - j]
          }
        }, segments: [1, 2, 2, 2, 5], borderWidth: 2, background: {
          func: function () {
            return is.getStyle("shapeCtrlPointBackground")
          }
        }, borderColor: {
          func: function () {
            return "c2" === Fo.ShapeActivingCtrl.data.hl ? is.getStyle("shapeCtrlPointHighlightBorder") || In : is.getStyle("shapeCtrlPointBorderColor") || In
          }
        }
      }]
    }, co.Icons.DrawIcon = function (B, U, k, o) {
      k.width = k.height = _f, k.data = o, is = B, Q.Default.drawImage(U, k, 0, 0, _f, _f)
    }, co.Icons.MapPoints = function (v, S) {
      for (var O = 0, U = v.length; U > O; O++) v[O] /= S
    }, co.roundTo = function (i, F, S) {
      var n = Math.abs(i % F);
      return S > n || S > F - n ? F * Math.round(i / F) : i
    }, co.toFixed = function (B) {
      return Math.round(100 * B) / 100
    }, co.getDataMatrix = function (f) {
      if (f instanceof Q.Shape) {
        var w = new Q.Math.Matrix2d, $ = f.getPosition();
        return w.translate(-$.x, -$.y).scale(f.getScale().x, f.getScale().y).rotate(f.getRotation()).translate($.x, $.y), w
      }
      return f.getMatrix ? f.getMatrix() : new Q.Math.Matrix2d
    };
    var Eh = co.Math.Curve = function () {
      this._curves = []
    };
    Eh.prototype = {}, Eh.prototype.constructor = Eh, Eh.prototype.createFromHtShape = function (X, f, W) {
      f instanceof Q.List && (f = f.toArray());
      var k, F, w, p, J, M, T, P = this, K = null, y = null, N = 0, A = co.Math.Vector2, a = co.Math.CubicBezier,
        I = function (R) {
          return new A(X[R], X[R + 1], W ? W[R / 2] : S)
        };
      for (F = 0, w = f.length; w > F; F++) {
        switch (p = f[F], J = null, p) {
          case 1:
            y = I(N), K = y, N += 2;
            break;
          case 2:
            k = I(N), N += 2, J = new a(y, y.clone(), k.clone(), k), y = k;
            break;
          case 3:
            M = I(N), k = I(N + 2), N += 4, J = new a(y, M.clone().sub(y).multiplyScalar(2 / 3).add(y), M.clone().sub(k).multiplyScalar(2 / 3).add(k), k), y = k;
            break;
          case 4:
            M = I(N), T = I(N + 2), k = I(N + 4), N += 6, J = new a(y, M, T, k), y = k;
            break;
          case 5:
            if (!K) break;
            J = new a(y, y.clone(), K.clone(), K), y = null, K = null
        }
        J && (J._index = P._curves.length, P._curves.push(J))
      }
    }, Eh.prototype.checkPoint = function ($, U) {
      var z, P, C, V, t, e = this, I = e._curves;
      for (z = 0, P = I.length; P > z; z++) if (V = I[z], t = V.intersectRect($, U, U), t.length) return C = 0, t.forEach(function (c) {
        C += c.t
      }), C /= t.length, $ = V.getPointAt(C), $.t = C, {bezier: V, intersection: $}
    }, Eh.prototype.insertKnot = function (q, Z) {
      var X = q.insertKnot(Z), D = this, g = D._curves;
      g.splice(q._index, 1, X[0], X[1])
    }, Eh.prototype._isCloseEnough = function (r, M) {
      return Math.abs(r.x - M.x) < 1e-6 && Math.abs(r.y - M.y) < 1e-6
    }, Eh.prototype._isSamePoint = function (o, D) {
      return o === D
    }, Eh.prototype.moveRealPoint = function (v, g) {
      var F = this, W = F._curves, c = g.clone().sub(v);
      W.forEach(function (S) {
        var o = S._p1;
        S._p2, S._p3;
        var J = S._p4;
        F._isSamePoint(o, v) && (S._p2.add(c), S._p1 = g), F._isSamePoint(J, v) && (S._p3.add(c), S._p4 = g)
      })
    }, Eh.prototype.moveCtrlDueToRealPointMovement = function (v, I) {
      var w = this, g = w._curves, U = function (U) {
        U.add(I), U.e && I.e && (U.e += I.e)
      };
      g.forEach(function (S) {
        var q = S._p1;
        S._p2, S._p3;
        var Q = S._p4;
        w._isSamePoint(q, v) && U(S._p2), w._isSamePoint(Q, v) && U(S._p3)
      })
    }, Eh.prototype.moveCtrlPoint = function (n, B, u) {
      var b = n[u];
      if (b) {
        b.e !== S && (B.e = b.e);
        var F = this, m = F._curves;
        B.clone().sub(b), m.forEach(function (s) {
          var H;
          "c2" === u ? H = "_p2" : "c1" === u && (H = "_p3"), F._isSamePoint(s[H], b) && (s[H] = B)
        }), n[u] = B
      }
    }, Eh.prototype.deleteRealPoint = function (f, s) {
      var I, T, n, g, v, M, b, d = this, a = d._curves, C = {}, p = [], y = co.Math.CubicBezier;
      for (T = 0, n = a.length; n > T; T++) I = a[T], g = I._p1, v = I._p2, M = I._p3, b = I._p4, (C[T] || !d._isSamePoint(g, f)) && (d._isSamePoint(b, f) ? n > T + 1 && d._isSamePoint(a[T + 1]._p1, f) && (s || p.push(new y(g, v, a[T + 1]._p3, a[T + 1]._p4))) : p.push(I));
      d._curves = p
    }, Eh.prototype.findPairs = function (Y, J) {
      var v, i, h, l, F, f, I, E, Q = this, R = Q._curves, k = {}, G = [];
      for (i = 0, h = R.length; h > i; i++) v = R[i], l = v._p1, F = v._p2, f = v._p3, I = v._p4, !k[i] && Q._isSamePoint(l, Y) && (J ? G.push({
        point: l,
        r2: I
      }) : G.push({point: l, c2: F})), Q._isSamePoint(I, Y) && (E = J ? {point: I, r1: l} : {
        point: I,
        c1: f
      }, h > i + 1 && Q._isSamePoint(R[i + 1]._p1, Y) && (J ? E.r2 = R[i + 1]._p4 : E.c2 = R[i + 1]._p2, k[i + 1] = !0), G.push(E));
      return G
    }, Eh.prototype.toHtShape = function () {
      var G = this, f = G._curves, v = [], i = [], K = {x: 1 / 0, y: 1 / 0};
      return f.forEach(function (J) {
        var X = J._p1, Y = J._p2, E = J._p3, k = J._p4;
        return G._isCloseEnough(X, K) || (v.push(1), i.push(X.clone())), K = k, G._isCloseEnough(X, Y) && G._isCloseEnough(E, k) ? (v.push(2), i.push(k.clone()), void 0) : (v.push(4), i.push(Y.clone(), E.clone(), k.clone()), void 0)
      }), {segments: v, points: i}
    };
    var Dp = co.Math.CubicBezier = function (o, P, I, Q) {
      var n = this;
      n._id = co.Math.CubicBezier._globalId++, n._p1 = o, n._p2 = P, n._p3 = I, n._p4 = Q
    };
    Dp._globalId = 1, Dp.prototype = {}, Dp.prototype.constructor = Dp, Dp.prototype.toString = function () {
      return this._id
    }, Dp.prototype.intersectRect = function (y, N, g) {
      var a = N / 2, J = g / 2, K = y.x, O = y.y, p = co.Math.Vector2, T = new p(-a + K, -J + O),
        Z = new p(a + K, J + O), i = new p(Z.x, T.y), F = new p(T.x, Z.y), G = this, o = G.intersectLine(T, i),
        D = G.intersectLine(i, Z), I = G.intersectLine(Z, F), x = G.intersectLine(F, T),
        S = o.concat(D).concat(I).concat(x);
      return S
    }, Dp.prototype.intersectLine = function (e, M) {
      var R, x, W, G, i, y, U, p, d, c, N, h, D, k = this, H = e.clone().min(M), w = e.clone().max(M);
      G = k._p1, i = k._p2, y = k._p3, U = k._p4, R = G.clone().multiplyScalar(-1), x = i.clone().multiplyScalar(3), W = y.clone().multiplyScalar(-3), N = R.add(x).add(W).add(U), R = G.clone().multiplyScalar(3), x = i.clone().multiplyScalar(-6), W = y.clone().multiplyScalar(3), c = R.add(x).add(W), R = G.clone().multiplyScalar(-3), x = i.clone().multiplyScalar(3), d = R.add(x), p = G.clone(), D = new co.Math.Vector2(e.y - M.y, M.x - e.x), h = e.x * M.y - M.x * e.y;
      for (var F = k.getRoots(D.dot(N), D.dot(c), D.dot(d), D.dot(p) + h), X = new Array, _ = 0, V = F.length; V > _; _++) {
        var J = F[_];
        if (!(0 > J || J > 1)) {
          var K = G.clone().lerp(i, J), v = i.clone().lerp(y, J), S = y.clone().lerp(U, J), t = K.lerp(v, J),
            C = v.lerp(S, J), o = t.lerp(C, J);
          o.t = J, e.x == M.x ? H.y <= o.y && o.y <= w.y && X.push(o) : e.y == M.y ? H.x <= o.x && o.x <= w.x && X.push(o) : o.x >= H.x && o.y >= H.y && o.x <= w.x && o.y <= w.y && X.push(o)
        }
      }
      return X
    }, Dp.prototype.solveTForPoint = function (K) {
      var k, l, J, c, w = this;
      k = w._p1.x - K.x, l = w._p2.x - K.x, J = w._p3.x - K.x, c = w._p4.x - K.x;
      for (var X = w.getRoots(c - 3 * J + 3 * l - k, 3 * J - 6 * l + 3 * k, 3 * l - 3 * k, k), v = S, F = 1 / 0, V = 0, h = X.length; h > V; V++) {
        var g = X[V];
        if (!(0 > g || g > 1)) {
          var Y = w._p1.clone().lerp(w._p2, g), M = w._p2.clone().lerp(w._p3, g), x = w._p3.clone().lerp(w._p4, g),
            b = Y.lerp(M, g), u = M.lerp(x, g), e = b.lerp(u, g);
          e.t = g;
          var E = Math.abs(e.y - K.y);
          F > E && (F = E, v = e)
        }
      }
      return v
    }, Dp.prototype.getPointAt = function ($) {
      var E = this, R = E._p1, q = E._p2, H = E._p3, N = E._p4, U = R.clone().lerp(q, $), Q = q.clone().lerp(H, $),
        Y = H.clone().lerp(N, $), Z = U.lerp(Q, $), P = Q.lerp(Y, $);
      return Z.lerp(P, $)
    }, Dp.prototype.getRoots = function (L, G, O, m) {
      var $, Q, N, K, f, Z = new Array;
      if (Math.abs(L) < 1e-6) {
        var $ = G, Q = O / $, N = m / $, K = Q * Q - 4 * N;
        if (K > 0) {
          var f = Math.sqrt(K);
          Z.push(.5 * (-Q + f)), Z.push(.5 * (-Q - f))
        } else 0 == K && Z.push(.5 * -Q)
      }
      G /= L, O /= L, m /= L, $ = (3 * O - G * G) / 3, Q = (2 * G * G * G - 9 * O * G + 27 * m) / 27;
      var t = G / 3, e = Q * Q / 4 + $ * $ * $ / 27, s = Q / 2;
      if (Math.abs(e) <= 1e-6 && (e = 0), e > 0) {
        var W, q, f = Math.sqrt(e);
        W = -s + f, q = W >= 0 ? Math.pow(W, 1 / 3) : -Math.pow(-W, 1 / 3), W = -s - f, W >= 0 ? q += Math.pow(W, 1 / 3) : q -= Math.pow(-W, 1 / 3), Z.push(q - t)
      } else if (0 > e) {
        var l = Math.sqrt(-$ / 3), D = Math.atan2(Math.sqrt(-e), -s) / 3, B = Math.cos(D), x = Math.sin(D),
          E = Math.sqrt(3);
        Z.push(2 * l * B - t), Z.push(-l * (B + E * x) - t), Z.push(-l * (B - E * x) - t)
      } else {
        var W;
        W = s >= 0 ? -Math.pow(s, 1 / 3) : Math.pow(-s, 1 / 3), Z.push(2 * W - t), Z.push(-W - t)
      }
      return Z
    }, Dp.prototype._70I = function () {
      var M = this;
      return M._p1.distanceToSquared(M._p2) < 1e-10 && M._p3.distanceToSquared(M._p4) < 1e-10
    }, Dp.prototype.insertKnot = function (r) {
      var e = this, Z = e._p1, w = e._p2, b = e._p3, G = e._p4, c = Z.clone().lerp(w, r), K = w.clone().lerp(b, r),
        l = b.clone().lerp(G, r), V = c.clone().lerp(K, r), E = K.clone().lerp(l, r), H = V.clone().lerp(E, r);
      return e._70I() ? (Z.clone().lerp(G, r), [new co.Math.CubicBezier(Z, Z.clone(), H.clone(), H), new co.Math.CubicBezier(H, H.clone(), G.clone(), G)]) : [new co.Math.CubicBezier(Z, c, V, H), new co.Math.CubicBezier(H, E, l, G)]
    };
    var sk = Q.Default.getInternal().ui().EdgeUI, jp = {
      _47O: function (T) {
        var j = this, u = jp.getBackups()._47O;
        co.inEdit(j.gv) || u.call(j, T)
      }
    };
    co.Inject.registAsModule(jp, sk);
    var Yl = Q.Default.getInternal().ui().NodeUI, tr = {
      _47O: function (T) {
        var w = this, n = tr.getBackups()._47O;
        co.inEdit(w.gv) || n.call(w, T)
      }, getSelectWidth: function () {
        var D = this, b = D.gv, K = D._data;
        if (b.isEditable(K) && co.inEdit(b)) return 0;
        var e = tr.getBackup("getSelectWidth");
        return e.call(D)
      }
    };
    co.Inject.registAsModule(tr, Yl);
    var Tq = Q.graph.GraphView, Yd = {
      _editPointSize: function () {
        var C = Q.Default.isTouchable, S = co.getStyle("pointSize");
        return S[C ? 0 : 1]
      }(), isPointEditable: function (v) {
        var B = this;
        if (co.inEdit(B)) return B._pointEditableFunc ? B._pointEditableFunc(v) : !0;
        var g = Yd.getBackup("isPointEditable");
        g.call(B, v)
      }, isEditable: function (F) {
        var g, n = this, S = Yd.getBackup("isEditable");
        if (g = F instanceof co.Group ? !0 : S.call(n, F), !co.inEdit(n)) return g;
        if (!(F instanceof Q.Edge)) return g;
        if (!F.s("2d.editable")) return !1;
        var r = n.getEditableFunc();
        return r ? r(F) : !0
      }, _42: function (V, J) {
        var r = this, j = Yd.getBackups()._42;
        if (j.call(r, V, J), co.inEdit(r)) {
          var o = r.getEditInteractor();
          o.drawImpl()
        }
      }
    };
    co.Inject.registAsModule(Yd, Tq);
    var Vn = Q.Default.getInternal().ui().ShapeUI, Yp = {
      _47O: function (w) {
        var v = this, F = Yp.getBackups()._47O;
        co.inEdit(v.gv) || F.call(v, w)
      }
    };
    co.Inject.registAsModule(Yp, Vn);
    var fl = Q.graph.DefaultInteractor, ie = {
      handle_mousewheel: function (o) {
        var R = this, t = ie.getBackup("handle_mousewheel");
        co.inEdit(R.gv) || t.call(R, o)
      }
    };
    co.Inject.registAsModule(ie, fl);
    var yk = Q.graph.MoveInteractor, yd = {
      _calcShift: function (u, J) {
        var w = this, t = yd.getBackup("_calcShift"), m = w.gv;
        if (!co.inEdit(m)) return t.call(w, u, J);
        var l = m.getEditInteractor(), F = l.getSubModule("Move").calcShift(u, J, w);
        return F || t.call(w, u, J)
      }, clear: function (n) {
        var T = this, Q = yd.getBackup("clear");
        Q.call(T, n);
        var C = T.gv;
        if (co.inEdit(C)) {
          var D = C.getEditInteractor();
          D.getSubModule("Move").clear(n)
        }
      }
    };
    co.Inject.registAsModule(yd, yk);
    var pe = co.Rect = function (o) {
      this.catalog = "Rect", this._interactor = o
    };
    pe.prototype = {}, pe.prototype.constructor = pe, pe.prototype.gatherInfo = function (Z, X) {
      var P = this;
      if (1 === X.length) {
        var K = X[0];
        return K instanceof Q.Shape && K._70I() ? P.gatherLine(Z, K) : sr(K, Z) ? !1 : P.gatherSingleTarget(Z, K)
      }
      return X.length > 1 ? P.gatherMultiTargets(Z, X) : !1
    }, pe.prototype.gatherSingleTarget = function (y, j) {
      if (j.getCorners) {
        var F, a = this, S = a.info;
        a.target = j, F = a.screenInfo = {};
        var c = j.getCorners();
        S.LT = new co.Math.Vector2(c[0]), S.LB = new co.Math.Vector2(c[1]), S.RB = new co.Math.Vector2(c[2]), S.RT = new co.Math.Vector2(c[3]), S.T = S.LT.clone().add(S.RT).divideScalar(2), S.B = S.LB.clone().add(S.RB).divideScalar(2), S.L = S.LT.clone().add(S.LB).divideScalar(2), S.R = S.RT.clone().add(S.RB).divideScalar(2);
        for (var Y in S) F[Y] = co.toScreenPosition(y, S[Y]);
        var W = a._interactor, N = W.getStyle("checkSize"), I = function (j, r, q) {
          var _ = r.clone().sub(j).setLength(-N), M = q.clone().sub(j).setLength(-N), S = _.add(M).add(j);
          return S
        };
        return F.rotLT = I(F.LT, F.RT, F.LB), F.rotLB = I(F.LB, F.LT, F.RB), F.rotRB = I(F.RB, F.LB, F.RT), F.rotRT = I(F.RT, F.LT, F.RB), F.rotT = F.rotLT.clone().add(F.rotRT).divideScalar(2), F.rotB = F.rotLB.clone().add(F.rotRB).divideScalar(2), F.rotL = F.rotLT.clone().add(F.rotLB).divideScalar(2), F.rotR = F.rotRT.clone().add(F.rotRB).divideScalar(2), F.rotation = j.getRotation(), a.gatherConnectInfo(), !0
      }
    }, pe.prototype.gatherConnectInfo = function () {
      var o = this, G = o.target, H = o._interactor, D = o.screenInfo, L = H.gv;
      if (L.isConnectActionVisible(G) && H.getStyle("connectGuideVisible")) {
        var z;
        G.s && (z = G.s("connectGuideShift")), z || (z = H.getStyle("connectGuideShift"));
        var v = G.getAnchor(), q = G.getSize(), Q = G.toGlobal({x: q.width * (z[0] - v.x), y: q.height * (z[1] - v.y)});
        Q = co.toScreenPosition(L, Q), D.P1 ? Q.add(D.P2.clone().sub(D.P1).setLength(z[2])) : (Q.add(D.RT.clone().sub(D.LT).setLength(z[2])), Q.add(D.LB.clone().sub(D.LT).setLength(z[3]))), D.connect = Q
      }
    }, pe.prototype.gatherMultiTargets = function (x, S) {
      var K = co.Group.findOrCreateGroup(S);
      if (!K) return !1;
      var A = this;
      return A.editing && "rotate" !== A.editing.mode || K.calcInfo(), A.gatherSingleTarget(x, K)
    }, pe.prototype.gatherLine = function (s, z) {
      this.target = z;
      var Y = this.screenInfo = {}, S = z.getPoints(), r = co.getDataMatrix(z);
      return Y.P1 = co.toScreenPosition(s, r.apply(S.get(0))), Y.P2 = co.toScreenPosition(s, r.apply(S.get(1))), this.gatherConnectInfo(), !0
    }, pe.ResizeKeys = ["LT", "RB", "LB", "RT", "L", "R", "B", "T"], pe.ResizeDirection = [{x: -1, y: -1}, {
      x: 1,
      y: 1
    }, {x: -1, y: 1}, {x: 1, y: -1}, {x: -1, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {
      x: 0,
      y: -1
    }], pe.RotateKeys = ["rotLT", "rotRB", "rotLB", "rotRT", "rotL", "rotR", "rotB", "rotT"], pe.prototype.check = function (R, G, E) {
      if (Q.Default.isLeftButton(G)) {
        var W = this;
        if (W.editing = null, W.tipInfo = null, W.screenInfo) {
          var X = W.target, D = R.isEditable(X), d = W.screenInfo;
          if (D && d.connect) {
            var s = W._checkConnect(E);
            if (s) return s
          }
          if (d.P1) return W._checkLine(E);
          var I, r, k, t = null, J = W._interactor, q = J.getStyle("checkSize");
          if (D && R.isRectEditable(X)) for (r = 0; r < co.Rect.ResizeKeys.length; r++) if (k = co.Rect.ResizeKeys[r], co.checkHit(E, d[k], q)) {
            t = k, I = "resize";
            break
          }
          if (!t && D && R.isRotationEditable(X)) {
            var P = J.getStyle("rotateCheckSize");
            for (r = 0; r < co.Rect.RotateKeys.length; r++) if (k = co.Rect.RotateKeys[r], co.checkHit(E, d[k], P)) {
              t = k, I = "rotate";
              break
            }
          }
          if (!t) return J.setCursor("default"), void 0;
          if ("rotate" === I) {
            var Z, f = R.lp(G);
            if (X instanceof co.Group) {
              var F = J.getStyle("groupRotateModeKey");
              "string" == typeof F && (F = [F]);
              for (var l = !1, H = 0, B = F.length; B > H; H++) if (G[F[H]]) {
                l = !0;
                break
              }
              var y = J.getStyle("groupRotateModeDefault");
              Z = l ? "batch" === y ? "block" : "batch" : y
            }
            var u = "batch" === Z ? X.getAnchor2() : X.getPosition(), L = Math.atan2(f.y - u.y, f.x - u.x);
            J._setRotateCursor(L), W.editing = {
              mode: I,
              key: t,
              pos: u,
              flipY: X.getScale().y < 0,
              rotation: X.getRotation(),
              hitRot: L
            }, Z && (W.editing.groupRotateMode = Z)
          } else {
            var b = co.Rect.ResizeKeys.indexOf(t), A = co.Rect.ResizeDirection[b], v = Math.cos(X.getRotation()),
              K = Math.sin(X.getRotation()), w = A.x * Math.sign(X.getScale().x), c = A.y * Math.sign(X.getScale().y),
              e = Math.atan2(-K * w - v * c, v * w - K * c), n = (Math.round(e / (Math.PI / 4)) + 8) % 8,
              Y = ["ew-resize", "nesw-resize", "ns-resize", "nwse-resize", "ew-resize", "nesw-resize", "ns-resize", "nwse-resize"][n];
            this._interactor.setCursor(Y);
            var g = X.getWidth(), S = X.getHeight(), z = X.getAnchor();
            W.editing = {
              mode: I,
              key: t,
              rect: {x: -g * z.x, y: -S * z.y, width: g, height: S},
              anchor: z,
              matrix: X.getMatrix()
            }
          }
          return t
        }
      }
    }, pe.prototype._checkLine = function (z) {
      var P = this;
      P.screenInfo;
      var A, V = P._interactor.getStyle("checkSize");
      if (co.checkHit(z, P.screenInfo.P1, V)) A = "P1"; else {
        if (!co.checkHit(z, P.screenInfo.P2, V)) return this._interactor.setCursor("default"), void 0;
        A = "P2"
      }
      return P.editing = {mode: "line", key: A}, A
    }, pe.prototype._checkConnect = function (N) {
      var t = this, X = t.screenInfo, O = t._interactor, Z = O.getStyle("connectGuideIntersectSize"), U = X.connect,
        o = N.x, F = U.x;
      if (F > o && Z > F - o && Math.abs(U.y - N.y) < Z || o >= F && co.checkHit(N, U, Z)) {
        var C = "connect", s = E.getConnectAction(O.gv);
        if (t.editing = {mode: C}, s && s.delete) if (t.target instanceof co.Group) {
          var I = !0;
          O.gv.sm().getSelection().each(function ($) {
            s.delete.visible.call(null, O.gv, $) || (I = !1)
          }), t.editing.hasDeleteAction = I
        } else s.delete.visible.call(null, O.gv, t.target) && (t.editing.hasDeleteAction = !0);
        return O.setCursor("default"), C
      }
    }, pe.prototype._fireEditEvent = function (v, A) {
      var H = this._interactor, W = this.editing;
      if (W) {
        var L = W.mode;
        L = "rotate" === L ? "Rotation" : "connect" === L ? "Connection" : L[0].toUpperCase() + L.slice(1), H.fi({
          kind: v + "Edit" + L,
          event: A
        })
      }
    }, pe.prototype.startEdit = function (U, w) {
      U.startDragging(w);
      var A = this;
      A._interactor.fi({kind: "prepareEdit", event: w});
      var G = A.editing, g = A.target;
      if (G) {
        if (A._fireEditEvent("begin", w), "rotate" === G.mode) return G.groupRotateMode && g.beginRotate(G), void 0;
        if ("connect" !== G.mode) ("line" === G.mode || g && 0 === g.getRotation()) && (A._inSmartGuide = !0, A._interactor.rectGuide.gatherRects()); else if (G.hasDeleteAction) {
          var V = U.gv, M = A._interactor.getStyle("connectGuideGarbageShift");
          G.garbageInfo = {
            x: V.getWidth() * M[0] + M[2],
            y: V.getHeight() * M[1] + M[3],
            size: A._interactor.getStyle("connectGuideGarbageIntersectsize")
          }, U._42()
        }
      }
    }, pe.prototype._46O = function (o) {
      var t, w = this, H = w.editing;
      if (H) {
        if ("connect" === H.mode && !H.canceled && !H.deleted) try {
          H.garbageInfo && H.garbageInfo.hover ? E.doDeleteConnectionAction(w._interactor.gv, w.target) : E.doConnectAction(w._interactor.gv, w.target, H.target)
        } catch (r) {
          console.error(r)
        }
        t = w.editing.groupRotateMode, w._fireEditEvent("end", o), w.editing = null
      }
      w.tipInfo = null, w._inSmartGuide && (w._interactor.rectGuide.clear(), w._inSmartGuide = !1), t && w.target && w.target.endRotate()
    }, pe.prototype.handleNormalStateDelete = function () {
      var a = this, p = a.editing;
      if (p && "connect" === p.mode && !p.canceled && !p.deleted) {
        if (p.garbageInfo) {
          try {
            E.doDeleteConnectionAction(a._interactor.gv, a.target)
          } catch (q) {
            console.error(q)
          }
          p.garbageInfo = null
        }
        return p.cursorPos = null, p.targetCorners = null, p.deleted = !0, a._interactor._42(), !0
      }
    }, pe.prototype.handleNormalStateKeyDown = function (B) {
      var T = this, E = T.editing;
      return !E || "connect" !== E.mode || E.canceled || E.deleted ? void 0 : Q.Default.isEsc(B) ? (E.cursorPos = null, E.targetCorners = null, E.canceled = !0, T._interactor._42(), !0) : void 0
    }, pe.prototype.handleEdit = function (z, O) {
      var E = this, R = E.editing;
      if (R) {
        var p, W, M, P, B, s = E.target, L = R.key, q = R.mode, r = z.lp(O), j = E._interactor;
        if ("connect" === q) {
          if (R.canceled) return;
          if (R.deleted) return;
          R.cursorPos = j._getLogicalPoint(O);
          var C = R.garbageInfo;
          return C && co.checkHit(R.cursorPos, C, C.size) ? (C.hover = !0, R.target = null, R.targetCorners = null) : (C && (C.hover = !1), R.target = z.getDataAt(r, function (n) {
            return z.isSelectable(n) ? Kf(n) ? !0 : !1 : !1
          }) || null, R.targetCorners = co.getTargetCornersOnScreen(z, R.target)), j._42(), void 0
        }
        if ("rotate" === q) {
          var g, Y, y = R.pos, m = Math.atan2(r.y - y.y, r.x - y.x);
          if (R.groupRotateMode ? Y = m - R.hitRot : (g = m - R.hitRot, Y = R.rotation + g), Y %= 2 * Math.PI, 0 > Y && (Y += 2 * Math.PI), !Q.Default.isCtrlDown(O)) {
            var h, X;
            jr(O) ? (h = j.getStyle("shiftRotateRound"), X = h / 2) : (h = j.getStyle("rotateRound"), X = j.getStyle("rotateSensitivity")), Y = co.roundTo(Y, h, X)
          }
          R.groupRotateMode ? (g = Y - (R.lastRotation || 0), 0 !== g && (s.addRotation(g, R.groupRotateMode), R.lastRotation = Y)) : s.setRotation(Y), j._setRotateCursor(m), Y > Math.PI && (Y -= 2 * Math.PI);
          var S = 180 * (Y / Math.PI);
          S = S.toFixed(2), p = "" + S + "°"
        } else if ("resize" === q) {
          var _ = R.rect;
          M = _.x, P = _.y;
          var A, d = _.width, u = _.height, I = R.anchor, l = R.matrix,
            f = s.s && s.s("keepAspectRatio") || j.getStyle("keepAspectRatio");
          jr(O) && (f = !f);
          var U = E._unionPointMode1, b = E._unionPointMode2;
          if (E._inSmartGuide && !Q.Default.isCtrlDown(O) && !f) {
            var T;
            "L" === L || "R" === L ? T = "x" : ("T" === L || "B" === L) && (T = "y"), E._adsorbedToClosest(r, T), B = !0
          }
          A = l.tfi(r);
          var K;
          "LT" === L ? (_ = U(A, {x: M + d, y: P + u}, d, u, f), K = 9) : "T" === L ? (_ = b({x: M, y: A.y}, {
            x: M + d,
            y: P + u
          }, d, u, f, "v"), K = 1) : "RT" === L ? (_ = U(A, {
            x: M,
            y: P + u
          }, d, u, f), K = 33) : "L" === L ? (_ = b({x: A.x, y: P}, {
            x: M + d,
            y: P + u
          }, d, u, f, "h"), K = 8) : "R" === L ? (_ = b({x: M, y: P}, {
            x: A.x,
            y: P + u
          }, d, u, f, "h"), K = 32) : "LB" === L ? (_ = U(A, {
            x: M + d,
            y: P
          }, d, u, f), K = 12) : "B" === L ? (_ = b({x: M, y: P}, {
            x: M + d,
            y: A.y
          }, d, u, f, "v"), K = 4) : "RB" === L && (_ = U(A, {x: M, y: P}, d, u, f), K = 36);
          var o = l.tf(_.x + _.width * I.x, _.y + _.height * I.y);
          s.setPosition(o), s.setSize(_.width, _.height), B && (W = s.getRect(), j.rectGuide.gatherLines({
            node: s,
            x: W.x,
            y: W.y,
            w: W.width,
            h: W.height
          }, T, K)), p = "" + Math.round(_.width) + " * " + Math.round(_.height)
        } else if ("line" === q) {
          if (jr(O)) {
            var F = s.getPoints(), k = "P1" === L ? F.get(1) : F.get(0), n = {x: r.x - k.x, y: r.y - k.y},
              H = j.getStyle("shiftLineRotateRound"), Z = E._shiftDirList;
            if (!Z || E._shiftRotateRound !== H) {
              E._shiftRotateRound = H, E._shiftDirList = Z = [];
              for (var v = 0; v < Math.PI; v += H) Z.push({x: D(v), y: J(v)})
            }
            for (var N, x = 0, t = 0, w = Z.length; w > t; t++) {
              var V = Z[t], c = V.x * n.x + V.y * n.y;
              Math.abs(c) > Math.abs(x) && (x = c, N = V)
            }
            r = {x: k.x + N.x * x, y: k.y + N.y * x}, j.rectGuide.clear()
          } else E._inSmartGuide && !Q.Default.isCtrlDown(O) && (E._adsorbedToClosest(r), B = !0);
          var i = co.getDataMatrix(s).applyInverse(r);
          s.setPoint("P1" === L ? 0 : 1, i, !0);
          var G = s.getPoints(), a = G.get(0), e = G.get(1);
          M = a.x - e.x, P = a.y - e.y, p = " " + Math.round(Math.sqrt(M * M + P * P)) + " ", B && (W = s.getRect(), j.rectGuide.gatherLines({
            node: s,
            x: W.x,
            y: W.y,
            w: W.width,
            h: W.height
          }))
        }
        if (p) {
          var $ = Q.Default.getLogicalPoint(O, j._canvas);
          $.x += co.Icons.TipShiftX, $.y += co.Icons.TipShiftY, E.tipInfo = {helperPos: $, text: p, size: p.length}
        }
        E._fireEditEvent("between", O)
      }
    }, pe.prototype._unionPointMode1 = function (J, g, V, h, m) {
      if (m && V && h) {
        var S = J.x - g.x, s = J.y - g.y;
        Math.abs(S * h) < Math.abs(s * V) ? (s = Math.sign(s) * Math.abs(S * h / V), J.y = g.y + s) : (S = Math.sign(S) * Math.abs(s * V / h), J.x = g.x + S)
      }
      return Q.Default.unionPoint(J, g)
    }, pe.prototype._unionPointMode2 = function (M, Y, x, A, V, L) {
      var v = Q.Default.unionPoint(M, Y);
      if (V && x && A) {
        var r;
        "v" === L ? (r = v.x + v.width / 2, v.width = x * v.height / A, v.x = r - v.width / 2) : (r = v.y + v.height / 2, v.height = A * v.width / x, v.y = r - v.height / 2)
      }
      return v
    }, pe.prototype._adsorbedToClosest = function (r, S) {
      var m = this, H = m._interactor, q = H.rectGuide.findClosest(r, S), W = H.gridGuide.findClosest(r, S), s = 1 / 0,
        D = 1 / 0;
      q && (isFinite(q.x) && (s = q.x), isFinite(q.y) && (D = q.y)), W && (isFinite(W.x) && Math.abs(W.x) < Math.abs(s) && (s = W.x), isFinite(W.y) && Math.abs(W.y) < Math.abs(D) && (D = W.y)), isFinite(s) && (r.x += s), isFinite(D) && (r.y += D)
    }, pe.prototype._42 = function (k, K, v) {
      var _ = this;
      _.info = {}, _.screenInfo = null;
      var D = _._interactor;
      if (!D.editDetail && _.gatherInfo(K, v)) {
        var E = _.editing, W = E ? E.groupRotateMode : null, N = _.screenInfo;
        "block" !== W && (N.P1 ? co.Icons.DrawIcon(D, k, co.Icons.Line, N) : co.Icons.DrawIcon(D, k, co.Icons.Rect, N), N.connect && (co.Icons.DrawIcon(D, k, co.Icons.ConnectGuide, {
          rotation: N.rotation,
          connect: N.connect,
          cursorPos: E ? E.cursorPos : null
        }), E && (E.targetCorners && co.Icons.DrawIcon(D, k, co.Icons.NodeHoverGuide, E.targetCorners), E.garbageInfo && co.Icons.DrawIcon(D, k, co.Icons.ConnectGuideGarbage, E.garbageInfo))), _.tipInfo && co.Icons.DrawIcon(D, k, co.Icons.TipHelper, _.tipInfo)), _.target instanceof co.Group && _.target._42(D, k, K)
      }
    };
    var kd = co.Anchor = function (o) {
      this.catalog = "Anchor", this._interactor = o
    };
    kd.prototype = {}, kd.prototype.constructor = kd, kd.prototype.gatherInfo = function (q, x) {
      var a = this;
      if (1 === x.length) {
        var d = x[0];
        if (!d.getAnchor) return;
        if (d instanceof Q.Shape && d._70I()) return;
        if (sr(d, q)) return;
        return a.gatherSingleTarget(q, x[0])
      }
      return x.length > 1 ? a.gatherMultiTargets(q, x) : !1
    }, kd.prototype.gatherSingleTarget = function (U, Q) {
      var D = this;
      return D.info.POS = Q.getPosition(), D.screenInfo.POS = co.toScreenPosition(U, D.info.POS), D.target = Q, !0
    }, kd.prototype.gatherMultiTargets = function (E, X) {
      var J = this, x = co.Group.findOrCreateGroup(X);
      return x ? (J.screenInfo.POS = co.toScreenPosition(E, x.getAnchor2()), J.target = x, !0) : !1
    }, kd.prototype.isVisible = function () {
      var O = this, A = O._interactor;
      if (A.getStyle("anchorVisible") === !1) return !1;
      var D = O.target;
      if (D) {
        if (this.editing) return !0;
        var f = D.getAnchor(), p = A.getStyle("anchorOutsideVisibleThreshold");
        if (f.x < -p || f.x > 1 + p || f.y < -p || f.y > 1 + p) return !0;
        var $ = D.getSize(), c = D.getScale(), k = Math.min(Math.abs($.width * c.x), Math.abs($.height * c.y));
        if (k * A.gv._zoom < A.getStyle("anchorHideThreshold")) return !1
      }
      return !0
    }, kd.prototype.check = function (l, d, A) {
      if (Q.Default.isLeftButton(d)) {
        var k = this, N = k._interactor;
        if (k.isVisible() && N.getStyle("anchorMovable") !== !1) {
          k.editing = null, k.tipInfo = null;
          var T = k.target;
          if (T && l.isAnchorEditable(T) && l.isEditable(T)) {
            var c;
            if (k.screenInfo && (c = k.screenInfo.POS) && co.checkHit(A, new co.Math.Vector2(c), N.getStyle("checkSize"))) {
              if (T instanceof co.Group) return k.editing = {}, !0;
              var r = T.getWidth(), g = T.getHeight(), q = T.getAnchor();
              return k.editing = {
                rect: {x: -r * q.x, y: -g * q.y, width: r, height: g},
                anchor: q,
                matrix: T.getMatrix()
              }, !0
            }
          }
        }
      }
    }, kd.prototype.startEdit = function (i, f) {
      i.startDragging(f), i.fi({kind: "beginEditAnchor", event: f})
    }, kd.prototype._46O = function (A) {
      var X = this;
      X.editing && (X.editing = null, X._interactor.fi({kind: "endEditAnchor", event: A})), X.tipInfo = null
    }, kd.prototype.handleEdit = function (T, U) {
      var O = this, o = O.target;
      if (o) {
        var q = O.editing;
        if (q) {
          var Y = T.lp(U), B = O._interactor;
          if (o instanceof co.Group) return o.setAnchor2(Y), B._42(), void 0;
          var S = q.matrix, j = S.tfi(Y), J = q.rect, s = (j.x - J.x) / J.width, v = (j.y - J.y) / J.height;
          if (!Q.Default.isCtrlDown(U)) {
            var P = B.getStyle("anchorRound"), H = B.getStyle("anchorSensitivity");
            s = co.roundTo(s, P, H), v = co.roundTo(v, P, H)
          }
          o.setAnchor(s, v, !0);
          var M = Q.Default.getLogicalPoint(U, B._canvas);
          M.x += co.Icons.TipShiftX, M.y += co.Icons.TipShiftY;
          var l = "" + s.toFixed(2) + ", " + v.toFixed(2);
          O.tipInfo = {helperPos: M, text: l, size: l.length}, B.fi({kind: "betweenEditAnchor", event: U})
        }
      }
    }, kd.prototype._42 = function (K, h, W) {
      var i = this;
      i.info = {}, i.screenInfo = {};
      var X = i._interactor;
      X.editDetail || i.gatherInfo(h, W) && i.isVisible() && (co.Icons.DrawIcon(X, K, co.Icons.Anchor, i.screenInfo), i.tipInfo && co.Icons.DrawIcon(X, K, co.Icons.TipHelper, i.tipInfo))
    };
    var Eh = co.Curve = function (d) {
      this.catalog = "Curve", this._interactor = d
    };
    Eh.prototype = {}, Eh.prototype.constructor = Eh, F.defineProperties(Eh.prototype, {
      activing: {
        get: function () {
          return this._activing
        }, set: function (m) {
          var c = this;
          if (m) c._activing = new co.CurveActiving(this, m); else {
            var N = c._activing;
            N && N.dispose(), c._activing = null
          }
        }
      }
    }), Eh.PointType = {Mirrored: 0, Straight: 1, Disconnected: 2, Asymmetric: 3}, Eh.prototype.setUp = function () {
      var t = this, F = t._interactor;
      F && F.gv.mp(t._onGraphviewPropertyChanged, t)
    }, Eh.prototype._onGraphviewPropertyChanged = function (_) {
      ("zoom" === _.property || "translateX" === _.property || "translateY" === _.property) && this._handleDataChanged()
    }, Eh.prototype.tearDown = function () {
      var v = this, e = v._interactor;
      e && e.gv.ump(v._onGraphviewPropertyChanged, v)
    }, Eh.prototype.canEnterEditDetailMode = function () {
      var f = this, M = f._interactor, r = M._getValidSelection();
      if (1 === r.length) {
        var z = r[0], i = z instanceof Q.Edge;
        if (z instanceof Q.Shape || i) {
          if (i) {
            var n = z.s("edge.type");
            if (n && "points" !== n) return
          }
          var y = M.gv;
          if (y.isPointEditable(z) && y.isEditable(z)) return f.target = z, !0
        }
      }
    }, Eh.prototype.preHandleScroll = function () {
      var G = this.editing;
      return G && G.inEdit ? !0 : void 0
    }, Eh.prototype.getCurrentSelectintStatus = function () {
      var J = this;
      if (J.activing && !J.activing.selections) {
        if (J.activing.status != S) return J.activing.status;
        var p = function (k) {
          var r = J.activing.status;
          J.activing.status = k, J._interactor.fp("shapePointStatus", r, k)
        }, I = co.Curve.PointType, B = J.activing.point, c = J.activing.pairs;
        if (!c || 1 !== c.length) return p(I.Mirrored);
        var w = c[0], Y = w.c1 && w.c1.isNearEnough(B), u = w.c2 && w.c2.isNearEnough(B);
        if (!w.c1 || !w.c2) return Y || u ? p(I.Straight) : p(I.Disconnected);
        if (Y && u) return p(I.Straight);
        if (Y || u) return p(I.Asymmetric);
        var Z = w.c1.clone().sub(B), z = w.c2.clone().sub(B);
        return Math.abs(Z.x * z.y - Z.y * z.x) > 1e-5 || Z.x * z.x > 0 ? p(I.Disconnected) : Math.abs(Z.length() - z.length()) > 1e-5 ? p(I.Asymmetric) : p(I.Mirrored)
      }
    }, Eh.prototype.handle_keydown = function (z) {
      var S = this;
      if (S._interactor.editDetail) {
        var J = co.Curve.PointType;
        "1" === z.key ? S._setCurrentSelectionStatus(J.Straight) : "2" === z.key ? S._setCurrentSelectionStatus(J.Mirrored) : "3" === z.key ? S._setCurrentSelectionStatus(J.Disconnected) : "4" === z.key && S._setCurrentSelectionStatus(J.Asymmetric)
      }
    }, Eh.prototype.setCurrentSelectionStatus = function (K) {
      var g = this, E = g._interactor;
      if (E) {
        var $ = E.gv;
        $.dm().beginTransaction(), this._setCurrentSelectionStatus(K), $.dm().endTransaction()
      }
    }, Eh.prototype._setCurrentSelectionStatus = function (k) {
      var Q = this, a = Q.activing;
      if (a) {
        var H = Q.getCurrentSelectintStatus();
        if (null !== H && H !== k) {
          a.status = k;
          var A = Q.activing.point, s = Q.activing.pairs;
          if (s && 1 === s.length) {
            var j = s[0], X = Q.screenInfo.curve, R = co.Curve.PointType, T = function () {
              Q._writeToHt(), Q._interactor.fp("shapePointStatus", H, k)
            };
            if (k === R.Straight) return X.moveCtrlPoint(j, A, "c1"), X.moveCtrlPoint(j, A, "c2"), T(), void 0;
            if (H === R.Straight) {
              var S = X.findPairs(A, !0), u = S[0], q = u.r1 || A, o = u.r2 || A,
                $ = o.clone().sub(q).multiplyScalar(.25);
              return X.moveCtrlPoint(j, A.clone().sub($), "c1"), X.moveCtrlPoint(j, A.clone().add($), "c2"), T(), void 0
            }
            var D = j.c1, n = j.c2;
            if (D && n) {
              if (k === R.Mirrored) return X.moveCtrlPoint(j, A.clone().multiplyScalar(2).sub(n), "c1"), T(), void 0;
              if (k === R.Asymmetric && H === R.Disconnected) {
                var t = D.clone().sub(A).length(), $ = A.clone().sub(n).setLength(t).add(A);
                return X.moveCtrlPoint(j, $, "c1"), T(), void 0
              }
            }
            a._firePointChange(), Q._interactor.fp("shapePointStatus", H, k)
          }
        }
      }
    }, Eh.prototype._handleDataChanged = function (I) {
      var J = this;
      if (J.screenInfo && J.target) {
        var X = J._interactor;
        J.gatherSingleTarget(X.gv, J.target, !0), J.check(X.gv, null, I ? X._getLogicalPoint(I) : new co.Math.Vector2(X._lastClientPoint)), X._42()
      }
    }, Eh.prototype.gatherSingleTarget = function (T, $, L) {
      var E, H, b = this;
      b.screenInfo && b.screenInfo.curve && (H = b.screenInfo.curve._curves);
      var f = b.editing;
      E = f ? b.screenInfo : b.screenInfo = {};
      var a, C, l = $ instanceof Q.Edge;
      l ? (a = $.s("edge.segments"), C = $.s("edge.points") || new Q.List) : (a = $._58O, C = $._59O), E.S = a;
      var Y, J = E.P = [], n = co.getDataMatrix($);
      if ($ instanceof Q.Polyline && (Y = $.getElevation() || 0, E.E = []), C.each(function (l) {
        E.E && E.E.push(l.e || Y), l = n.apply(l);
        var Z = co.toScreenPosition(T, l);
        J.push(Z.x, Z.y)
      }), l) {
        var c = co.toScreenPosition(T, $._lastSourcePoint), t = co.toScreenPosition(T, $._lastTargetPoint);
        J.splice(0, 0, c.x, c.y), J.push(t.x, t.y)
      }
      if (!E.S || !E.S.size()) {
        E.S = new Q.List, E.S.add(1);
        for (var G = 0; G < J.length / 2 - 1; G++) E.S.add(2)
      }
      if ((!f || L) && b.convertToCubicBezier(H), b.activing && (L || !b.editing || "realPoint" === b.editing.type)) {
        var y = E.curve.findPairs(b.activing.point);
        b.activing.pairs = y
      }
      l && "points" !== $.s("edge.type") && b._writeToHt()
    }, Eh.prototype._convertToNewPoint = function (H, a, I) {
      var k, i, Y;
      for (k = 0, i = a.length; i > k; k++) {
        if (Y = a[k], Y._p1.isNearEnough(H)) return Y._p1;
        if (Y._p4.isNearEnough(H)) return Y._p4
      }
      if (I) for (k = 0, i = Math.min(I.length, i); i > k; k++) {
        if (Y = I[k], Y._p1 === H) return a[k]._p1;
        if (Y._p4 === H) return a[k]._p4
      }
    }, Eh.prototype.convertToCubicBezier = function (x) {
      var w, G, h = this, $ = new co.Math.Curve, E = h.screenInfo;
      if ($.createFromHtShape(E.P, E.S, E.E), E.curve = $, h.activing) {
        var f = $._curves;
        if (w = h.activing.point, G = h._convertToNewPoint(w, f, x), G && (h.activing.point = G), h.activing.selections) {
          var k = -1, j = h.activing.selections;
          j.forEach(function (X) {
            k++, G = h._convertToNewPoint(X, f, x), G && (j[k] = G)
          })
        }
      }
    }, Eh.prototype.check = function (u, M, m) {
      if (!M || Q.Default.isLeftButton(M)) {
        var D = this;
        if (D._interactor.setCursor("default"), D.editing = null, D.highlight = null, D.tipInfo = null, D.screenInfo) {
          if (ih()) return D._interactor._42(), !0;
          if (D._checkEditCtrlPoint(m)) return D._interactor._42(), !0;
          if (D._checkEditRealPoint(m)) return D._interactor._42(), !0;
          if (D._checkEditElevation(m)) return D._interactor._42(), !0;
          var b = D.screenInfo.curve, L = b.checkPoint(m, D._interactor.getStyle("curveIntersectSize"));
          if (L) {
            var z = D.highlight = {};
            z.type = "insertKnot", z.bezier = L.bezier, z.point = L.intersection
          }
          return D._interactor._42(), !0
        }
      }
    }, Eh.prototype._checkEditRealPoint = function (l) {
      var e, F, n, L, i, Z, Y = this, N = Y.screenInfo.curve._curves,
        o = Y._interactor.getStyle("curvePointIntersectSize"), Q = 1 / 0;
      for (o *= o, n = 0, L = N.length; L > n; n++) e = N[n], i = e._p1, Z = l.distanceToSquared(i), Q > Z && (Q = Z, F = i), i = e._p4, Z = l.distanceToSquared(i), Q > Z && (Q = Z, F = i);
      if (Q > o) return !1;
      var c = Y.highlight = {};
      return c.type = "changeRealPoint", c.point = F, Y.editing = {
        type: "realPoint",
        point: F,
        shiftGuide: {point: F.clone(), dir: "x", limit: 0}
      }, Y._interactor.setCursor("crosshair"), !0
    }, Eh.prototype._checkEditElevation = function (J) {
      var B = this;
      if (!B._interactor.getStyle("curveElevationVisible")) return !1;
      var u = B.activing;
      if (!u) return !1;
      var D = u.getCurrentEditingPoint();
      if (!D) return !1;
      var R = B._interactor, f = R.getStyle("curveElevationGuideShift"), k = R.getStyle("curveElevationIntersectSize"),
        t = J.distanceToSquared({x: D.x + f[0], y: D.y + f[1]});
      if (!(t > k * k)) {
        var L = B.highlight = {};
        L.type = "elevation";
        var Z = new co.Math.Vector2(J.x, J.y, D.e);
        return B.editing = {type: "elevation", startPoint: Z}, B._interactor.setCursor("crosshair"), !0
      }
    }, Eh.prototype._checkEditCtrlPoint = function (m) {
      var k = this;
      if (k.activing && !k.activing.selections) {
        var K = k.getCurrentSelectintStatus();
        if (K !== co.Curve.PointType.Straight) {
          var v = k.activing.pairs;
          if (v) {
            var J = k._interactor.getStyle("curvePointIntersectSize");
            J *= J;
            var U, H, Z, b, V, p, N, O, R, s = 1 / 0;
            for (N = 0, R = v.length; R > N; N++) for (b = v[N], O = 0; 2 > O; O++) V = 0 === O ? "c1" : "c2", b[V] && (p = m.distanceToSquared(b[V]), s > p && (s = p, U = b, H = N, Z = V));
            if (s > J) return !1;
            k.activing.hlpair = U, k.activing.hltype = Z;
            var I = k.highlight = {};
            return I.type = "changeCtrlPoint", I.point = U[Z], k.editing = {
              type: "ctrlPoint",
              pair: U,
              pairId: H,
              ctrlType: Z,
              direction: U[Z].clone().sub(k.activing.point).normalize()
            }, k._interactor.setCursor("crosshair"), !0
          }
        }
      }
    }, Eh.prototype.startEdit = function (_, D) {
      _.startDragging(D);
      var b = this;
      b.highlight && "insertKnot" === b.highlight.type && (b.insertKnot(), b.gatherSingleTarget(b._interactor.gv, b.target), b.activing = null, b._checkEditRealPoint(b._interactor._getLogicalPoint(D)));
      var Y = b._activing;
      if (Y) {
        var o = b.editing ? b.editing.type : null;
        "ctrlPoint" === o ? Y.editingCtrl = {
          pairId: b.editing.pairId,
          type: Y.hltype
        } : "realPoint" === o && (Y.editingCtrl = !1)
      }
      var J = b.highlight, X = Q.Default.isCtrlDown(D);
      if (!J || ih()) {
        var v = b._interactor.gv;
        if (!v.setFocus(D) || v._scrolling) return;
        return v.isPannable() && Wb(D) && !X && (b._pan = {tx: v.tx(), ty: v.ty()}, _.fi({
          kind: "beginPan",
          event: D
        })), void 0
      }
      if ("changeRealPoint" === J.type) {
        var m, L = b.activing ? b.activing.point : null, u = b.activing ? b.activing.selections : null;
        if (X && b.activing) L === J.point ? (u ? (b.activing = {point: u[0]}, u.length > 1 && (u.splice(0, 1), b.activing.selections = u)) : b.activing = null, b.editing = null) : u && (m = u.indexOf(J.point)) >= 0 ? (u.length > 1 ? u.splice(m, 1) : delete b.activing.selections, b.editing = null) : u ? (u.push(L), b.activing = {
          point: J.point,
          selections: u
        }) : b.activing = {
          point: J.point,
          selections: [L]
        }; else if (u) L === J.point || ((m = u.indexOf(J.point)) >= 0 ? (u.splice(m, 1, L), b.activing = {
          point: J.point,
          selections: u
        }) : b.activing = {point: J.point}); else {
          var S;
          L === J.point && (S = b.activing.status), b.activing = {point: J.point}, S && (b.activing.status = S)
        }
        _.fi({kind: "beginEditPoint", event: D})
      }
    }, Eh.prototype.insertKnot = function () {
      var E = this, Y = E.highlight, g = E.screenInfo.curve;
      g.insertKnot(Y.bezier, Y.point.t), E._writeToHt()
    }, Eh.prototype._writeToHt = function () {
      var C, V, P, b, K = this, r = K.screenInfo.curve, a = r.toHtShape(), p = a.points, U = [], I = a.segments,
        W = K._interactor.gv, f = K.target, M = f instanceof Q.Edge, L = co.getDataMatrix(f).invert();
      b = f instanceof Q.Polyline, b && (P = f.getElevation());
      for (var j = 0, N = p.length; N > j; j++) C = p[j], V = co.toWorldPosition(W, C), V = L.apply(V), C.e != S && C.e !== P && (V.e = C.e), U.push(V);
      if (f._writing = !0, M) {
        f.s("edge.type", "points"), f.setStyle("edge.segments", I), f.setStyle("edge.points", U.slice(1, U.length - 1)), f.setStyle("edge.source.offset.x", 0), f.setStyle("edge.source.offset.y", 0), f.setStyle("edge.target.offset.x", 0), f.setStyle("edge.target.offset.y", 0);
        var t = K._nextChangeEdgeHost;
        delete K._nextChangeEdgeHost, t && ("source" === t.type ? f.setSource(t.host) : f.setTarget(t.host)), K._writeEdgeHostAnchor("source", U[0]), K._writeEdgeHostAnchor("target", U[U.length - 1])
      } else U.length ? (f.setSegments(I), f.setPoints(U, !0)) : f.removeFromDataModel();
      delete f._writing
    }, Eh.prototype._writeEdgeHostAnchor = function (w, h) {
      var C = this, Y = C.target, V = C._calcHostAnchor(Y, w, h);
      Y.s("edge." + w + ".anchor.x", V.x), Y.s("edge." + w + ".anchor.y", V.y)
    }, Eh.prototype._calcHostAnchor = function (S, K, Z, C) {
      C || (C = "source" === K ? S.getSource() : S.getTarget());
      var F = C.getRotation(), N = C.getAnchor(), x = this._interactor.gv;
      if (sr(C, x) && (F = 0), F) {
        var n = C.getMatrix(), q = n.tfi(Z), O = C.getSize();
        return {x: q.x / O.width + N.x, y: q.y / O.height + N.y}
      }
      var r = Cf(x, C), c = {x: (Z.x - r.x) / r.width, y: (Z.y - r.y) / r.height};
      return c
    }, Eh.prototype._handlePanning = function (P) {
      var G = this, v = G._pan;
      if (v) {
        v.started = !0;
        var g = G._interactor, t = g.gv, V = g._lastClientPoint, M = ab(P);
        t.setTranslate(v.tx + M.x - V.x, v.ty + M.y - V.y), G.gatherSingleTarget(g.gv, G.target), g._42(), g.fi({
          kind: "betweenPan",
          event: P
        })
      }
    }, Eh.prototype.handleEdit = function (v, D) {
      var s = this, Z = s.editing;
      if (s._pan) return s._handlePanning(D), void 0;
      if (Z) {
        Z.inEdit = !0;
        var H, C, q, p = s._interactor._getLogicalPoint(D), r = Q.Default.isCtrlDown(D), h = Q.Default.isShiftDown(D),
          g = Z.type, w = s.activing;
        if (s._guideInfo = null, "ctrlPoint" === g && h) {
          var d = s.editing.direction.clone();
          H = w.point;
          var E = d.dot(p.clone().sub(H));
          p = d.setLength(E).add(H)
        } else if ("ctrlPoint" === g || "realPoint" === g) {
          var d;
          if ("realPoint" === g && h) {
            var $ = s.editing.shiftGuide;
            C = $.point;
            var F = Math.abs(p.x - C.x), T = Math.abs(p.y - C.y);
            F > T && F > $.limit && "y" === $.dir && ($.dir = "x"), T > F && T > $.limit && "x" === $.dir && ($.dir = "y"), d = $.dir, "x" === d ? (p.y = C.y, $.limit = Math.max($.limit, F)) : "y" === d && (p.x = C.x, $.limit = Math.max($.limit, T))
          }
          var y = s._isEditEdgeSourceTarget();
          if (y) {
            var L = s._editEdgeSourceTarget(y, p, r);
            L && (q = L.tipText)
          } else if (!r) {
            var V = s._guidingToEdit(p, d),
              u = "realPoint" === g ? s._interactor.gridGuide.findClosest(p, d, !0) : null, N = 1 / 0, e = 1 / 0;
            u && (u.x && (N = u.x), u.y && (e = u.y));
            var J = !1;
            V && (V.xList && (Math.abs(V.x) <= Math.abs(N) ? (J = !0, N = V.x) : delete V.xList), V.yList && (Math.abs(V.y) <= Math.abs(e) ? (J = !0, e = V.y) : delete V.yList), J && (s._guideInfo = V)), isFinite(N) && (p.x += N), isFinite(e) && (p.y += e), J && (V.v = p)
          }
        }
        var B = s.screenInfo.curve;
        if ("realPoint" === Z.type) {
          H = Z.point, H.e !== S && (p.e = H.e), B.moveRealPoint(H, p), Z.point = p, s.highlight.point = p;
          var G = w.status, K = w.selections;
          if (s.activing = {point: p, status: G}, K) {
            var I = p.clone().sub(H), O = 0;
            K.forEach(function (A) {
              var r = A.clone().add(I);
              B.moveRealPoint(A, r), K[O++] = r
            }), s.activing.selections = K
          }
        } else if ("ctrlPoint" === Z.type) {
          var i = w.pairs, _ = i[Z.pairId];
          B.moveCtrlPoint(_, p, Z.ctrlType);
          var k = w.status, R = co.Curve.PointType;
          if ((k === R.Mirrored || k === R.Asymmetric) && _.c1 && _.c2) {
            var H = new co.Math.Vector2(w.point), c = "c1" === Z.ctrlType ? "c2" : "c1";
            if (k === co.Curve.PointType.Mirrored) B.moveCtrlPoint(_, H.clone().multiplyScalar(2).sub(p), c); else if (k === R.Asymmetric) {
              var E = _[c].clone().sub(H).length(), M = H.clone().sub(_[Z.ctrlType]).setLength(E).add(H);
              isNaN(M.x) || B.moveCtrlPoint(_, M, c)
            }
          }
          w._firePointChange()
        } else if ("elevation" === Z.type) {
          C = Z.startPoint;
          var U = C.e + (C.y - p.y) / v._zoom;
          s._setCurrentPointImpl("e", U), w._firePointChange(), q = "E: " + co.toFixed(U)
        }
        var n = Q.Default.getLogicalPoint(D, s._interactor._canvas);
        if (n.x += co.Icons.TipShiftX, n.y += co.Icons.TipShiftY, !q) {
          var j = co.toWorldPosition(v, p);
          q = "" + co.toFixed(j.x) + ", " + co.toFixed(j.y)
        }
        s.tipInfo = {helperPos: n, text: q, size: q.length}, s._writeToHt(), s._interactor.fi({
          kind: "betweenEditPoint",
          event: D
        })
      }
    }, Eh.prototype._setCurrentPointImpl = function (O, x) {
      var Y = this, z = Y._activing;
      if (!z) return !1;
      var c = Y.target;
      if (!c) return !1;
      var Q = z.getCurrentEditingPoint();
      if (!Q) return !1;
      var p = z.editingCtrl;
      if (!p) var U = Q.clone();
      if ("e" === O) Q.e = x; else {
        var $;
        if ("x" === O || "y" === O) {
          var E = z._lastFirePoint;
          $ = "x" === O ? {x: x, y: E ? E.y : 0} : {x: E ? E.x : 0, y: x}
        } else "object" == typeof O ? ($ = O, O.e !== S && (Q.e = O.e)) : ($ = {
          x: arguments[0],
          y: arguments[1]
        }, arguments[2] !== S && (Q.e = arguments[2]));
        var I = co.getDataMatrix(c);
        $ = co.toScreenPosition(Y._interactor.gv, I.apply($)), Q.x = $.x, Q.y = $.y
      }
      if (!p) {
        var k = U.multiplyScalar(-1).add(Q);
        Q.e && U.e && (k.e = Q.e - U.e), Y.screenInfo.curve.moveCtrlDueToRealPointMovement(Q, k)
      }
      return !0
    }, Eh.prototype.setCurrentPoint = function (h, Z) {
      return this._setCurrentPointImpl(h, Z) ? (this._writeToHt(), !0) : !1
    }, Eh.prototype._isEditEdgeSourceTarget = function () {
      var W = this, F = W.target;
      if (!(F instanceof Q.Edge)) return !1;
      var $ = W.editing.point, c = W.screenInfo.curve._curves;
      return $ === c[0]._p1 ? "source" : $ === c[c.length - 1]._p4 ? "target" : !1
    }, Eh.prototype._editEdgeSourceTarget = function (P, w, c) {
      var S, J = this, H = J.target;
      if (S = "source" === P ? H.getSource() : H.getTarget()) {
        var e = J._interactor.gv, M = co.toWorldPosition(e, w), h = J._calcHostAnchor(H, P, M, S);
        if (!c) {
          var r = J._interactor.getStyle("anchorRound"), I = J._interactor.getStyle("anchorSensitivity");
          h.x = co.roundTo(h.x, r, I), h.y = co.roundTo(h.y, r, I)
        }
        if (J._interactor.getStyle("edgeHostDetectPerFrame") || h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) {
          var C = e.getDataAt(M, function (M) {
            return e.isSelectable(M) ? Kf(M) ? !0 : !1 : !1
          });
          if (C) {
            var f = J._calcHostAnchor(H, P, M, C);
            S = C, J._nextChangeEdgeHost = {
              type: P,
              host: C
            }, h = f, c || (h.x = co.roundTo(h.x, r, I), h.y = co.roundTo(h.y, r, I))
          }
        }
        if (!c) {
          var A = gs(e, S, 0, 0, 0, h.x, h.y), b = co.toScreenPosition(e, A);
          w.x = b.x, w.y = b.y
        }
        return J._edgeHostGuideInfo = co.getTargetCornersOnScreen(e, S), {
          host: S,
          anchor: h,
          tipText: "" + h.x.toFixed(2) + ", " + h.y.toFixed(2)
        }
      }
    }, Eh.prototype._guidingToEdit = function (l, m) {
      var O, E, r = this;
      if (O = r.screenInfo.curve) {
        E = O._curves;
        var R, L, w, J, P, e, u, j, g = 1 / 0, V = 1 / 0, q = [];
        for (r.editing && "realPoint" === r.editing.type && (j = r.editing.point), P = 0, e = 2 * E.length; e > P; P++) u = E[Math.floor(P / 2)][P % 2 ? "_p4" : "_p1"], q.indexOf(u) >= 0 || (q.push(u), j && j === u || (w = u.x - l.x, J = u.y - l.y, Math.abs(w) < Math.abs(g) ? (g = w, R = [u]) : w === g && R.push(u), Math.abs(J) < Math.abs(V) ? (V = J, L = [u]) : J === V && L.push(u)));
        var k = r._interactor.getStyle("smartGuideSensitivity");
        if ((Math.abs(g) > k || "y" === m) && (R = null), (Math.abs(V) > k || "x" === m) && (L = null), R || L) {
          var i = !1, C = {};
          if (R && (i = !0, C.xList = R, C.x = g), L && (i = !0, C.yList = L, C.y = V), i) return C
        }
      }
    }, Eh.prototype._46O = function (B) {
      var P = this;
      P.editing && (P.editing = null, P._interactor.fi({
        kind: "endEditPoint",
        event: B
      })), P._guideInfo = null, P._edgeHostGuideInfo = null, P._pan && (P._pan = null, P._interactor.fi({
        kind: "endPan",
        event: B
      })), P.tipInfo = null
    }, Eh.prototype._canDeletePoint = function (U, y) {
      var k = this.target;
      if (!(k instanceof Q.Edge)) return !0;
      var I = U._curves[0], T = U._curves[U._curves.length - 1];
      return I._p1 === y || T._p4 === y ? !1 : !0
    }, Eh.prototype.handleDelete = function () {
      var Y = this;
      if (Y.activing && Y.screenInfo) {
        var N = Q.Default.isShiftDown(), B = Y.screenInfo.curve;
        Y._canDeletePoint(B, Y.activing.point) && B.deleteRealPoint(Y.activing.point, N), Y.activing.selections && Y.activing.selections.forEach(function (u) {
          Y._canDeletePoint(B, u) && B.deleteRealPoint(u, N)
        }), Y.activing = null, delete Y.editing, delete Y.tipInfo, delete Y._pan, Y._writeToHt(), Y._interactor.fp("deleteShapePoint", !1, !0)
      }
    }, Eh.prototype.handleDoubleClick = function (x) {
      var A = this, b = A._interactor._getLogicalPoint(x);
      if (A.screenInfo && A._checkEditRealPoint(b)) {
        var n = A.getCurrentSelectintStatus(), s = co.Curve.PointType;
        return n = n === s.Mirrored ? s.Straight : s.Mirrored, A._setCurrentSelectionStatus(n), A._interactor._42(), !0
      }
    }, Eh.prototype._drawHighlight = function (a) {
      var s = this, M = s.highlight;
      if (M) {
        var F = M.bezier, P = s._interactor;
        F && co.Icons.DrawIcon(P, a, co.Icons.ShapeHighlightCurve, [F._p1.x, F._p1.y, F._p2.x, F._p2.y, F._p3.x, F._p3.y, F._p4.x, F._p4.y]);
        var U = M.point;
        U && "insertKnot" === M.type && co.Icons.DrawIcon(P, a, co.Icons.ShapeHighlighPoint, U)
      }
    }, Eh.prototype._drawGuide = function (N) {
      var o = this, Q = o._guideInfo;
      if (Q) {
        var v, _, O, F, D = Q.v;
        for (v = 0; 2 > v; v++) if (F = 0 === v ? Q.xList : Q.yList) for (_ = 0, O = F.length; O > _; _++) co.Icons.DrawIcon(o._interactor, N, co.Icons.ShapeGuideLine, [D.x, D.y, F[_].x, F[_].y])
      }
    }, Eh.prototype._drawCurrentPoint = function ($) {
      var E = this;
      if (E.activing) {
        var S = E.activing, T = E.getCurrentSelectintStatus(), A = E._interactor;
        if (T !== co.Curve.PointType.Straight) {
          var r = S.pairs;
          S.hlpair, S.hltype;
          var o = S.selections, j = S.editingCtrl;
          if (r && !o) {
            var s, H, m;
            for (H = 0, m = r.length; m > H; H++) s = r[H], j && H === j.pairId && s[j.type] ? co.Icons.DrawIcon(A, $, co.Icons.ShapeActivingCtrl, {
              point: s.point,
              c1: s.c1,
              c2: s.c2,
              hl: j.type
            }) : co.Icons.DrawIcon(A, $, co.Icons.ShapeActivingCtrl, s)
          }
        }
        co.Icons.DrawIcon(A, $, co.Icons.ShapeHighlighRealPoint, E.activing.point), o && o.forEach(function (P) {
          co.Icons.DrawIcon(A, $, co.Icons.ShapeHighlighRealPoint, P)
        })
      }
    }, Eh.prototype.clear = function () {
      var P = this;
      P.editing = null, P._guideInfo = null, P.activing = null, P.highlight = null
    }, Eh.prototype._42 = function (i) {
      var r = this;
      r.info = {}, r.editing || (r.screenInfo = null);
      var V = r._interactor;
      if (!V.editDetail) return r.clear(), void 0;
      if (!r.target || !r._interactor.gv.isSelected(r.target) || !r._interactor.gv.isVisible(r.target)) return V.editDetail = !1, r.clear(), void 0;
      if (r.gatherSingleTarget(V.gv, r.target), co.Icons.DrawIcon(V, i, co.Icons.ShapeBgCurve, r.screenInfo), r._drawHighlight(i), r._drawCurrentPoint(i), r._getRealPoint().forEach(function (k) {
        co.Icons.DrawIcon(V, i, co.Icons.ShapePoint, k)
      }), r._drawGuide(i), r.tipInfo && co.Icons.DrawIcon(V, i, co.Icons.TipHelper, r.tipInfo), r._edgeHostGuideInfo && co.Icons.DrawIcon(V, i, co.Icons.NodeHoverGuide, r._edgeHostGuideInfo), r._interactor.getStyle("curveElevationVisible") && r.target instanceof Q.Polyline && r.activing) {
        var P = r.activing.getCurrentEditingPoint();
        P && co.Icons.DrawIcon(V, i, co.Icons.EdgeElevationGuide, P)
      }
    }, Eh.prototype._getRealPoint = function () {
      var I, _ = this.screenInfo, d = _.P, g = _.S, B = -1, L = [], V = -1, v = g.length;
      return g.each(function (O) {
        V++;
        var m = 1;
        if (3 === O) m = 2; else if (4 === O) m = 3; else if (5 === O) return;
        B += m, I = V + 1 >= v ? !0 : 1 === g.get(V + 1) ? !0 : !1, L.push({
          point: {x: d[2 * B], y: d[2 * B + 1]},
          isEnd: I
        })
      }), L
    };
    var _b = co.MoveHelper = function (y) {
      var v = this;
      v.catalog = "Move", v._interactor = y
    };
    _b.prototype = {}, _b.prototype.constructor = _b, _b.prototype.calcShift = function (g, h, L) {
      var I, x, u = this, H = u._interactor.gv, r = H.lp(h);
      if ("beginMove" === g && u._gatherGridInfo(L._lastLogicalPoint || r), I = u._target) {
        var T = I.downPosition;
        if (T) {
          var J = u._interactor.getStyle("moveSensitivity") / H._zoom;
          if (T.distanceTo(r) < J) return {x: 0, y: 0};
          delete I.downPosition
        }
        var m;
        x = Q.Default.isShiftDown(h), x && (r = u._dealShiftDown(r), m = I.shiftGuide.dir);
        var i, V = I.rawPos = {x: I.pos.x + r.x - I.lp.x, y: I.pos.y + r.y - I.lp.y};
        if (Q.Default.isCtrlDown(h)) {
          if (i = u._calcShiftByAddon(), u._target.node instanceof co.Group) {
            var E = u._target.node;
            E._position.x += i.x, E._position.y += i.y
          }
          return i
        }
        for (var l, W = I.x + V.x, P = I.y + V.y, Z = {x: W, y: P}, d = {
          x: W + I.w / 2,
          y: P + I.h / 2
        }, S = {
          x: W + I.w,
          y: P + I.h
        }, q = u._interactor.rectGuide, f = u._interactor.gridGuide, s = [q.findClosest(Z, m), q.findClosest(d, m), q.findClosest(S, m), f.findClosest(Z, m), f.findClosest(d, m), f.findClosest(S, m)], D = 1 / 0, C = 1 / 0, G = 0, B = s.length; B > G; G++) l = s[G], l && (W = l.x, P = l.y, isFinite(W) && Math.abs(W) < Math.abs(D) && (D = W), isFinite(P) && Math.abs(P) < Math.abs(C) && (C = P));
        if (isFinite(D) || (D = 0), isFinite(C) || (C = 0), i = u._calcShiftByAddon(D, C), u._target.node instanceof co.Group) {
          var E = u._target.node;
          E._position.x += i.x, E._position.y += i.y
        }
        var U = I.node;
        if (!sr(U, H)) {
          var A = V.x + D, b = V.y + C;
          u._interactor.rectGuide.gatherLines({node: U, x: I.x + A, y: I.y + b, w: I.w, h: I.h}, m)
        }
        return i
      }
    }, _b.prototype._calcShiftByAddon = function ($, T) {
      var t = this._target, R = t.rawPos, m = t.node.getPosition();
      return $ = $ || 0, T = T || 0, {x: R.x - m.x + $, y: R.y - m.y + T}
    }, _b.prototype._dealShiftDown = function (u) {
      var f = this, p = f._target.shiftGuide, y = f._target.lp, e = Math.abs(u.x - y.x), N = Math.abs(u.y - y.y);
      e > N && e > p.limit && "y" === p.dir && (p.dir = "x"), N > e && N > p.limit && "x" === p.dir && (p.dir = "y");
      var M = p.dir;
      return "x" === M ? (u.y = y.y, p.limit = Math.max(p.limit, e)) : "y" === M && (u.x = y.x, p.limit = Math.max(p.limit, N)), u
    }, _b.prototype._gatherGridInfo = function (M) {
      var _, Q = this, Z = Q._interactor, k = Z._getValidSelection();
      if (1 === k.length) {
        if (_ = k[0], !_.getRect) return Q._target = null, void 0
      } else if (_ = co.Group.findOrCreateGroup(k), !_) return Q._target = null, void 0;
      var E = _.getPosition(), v = _.getRect();
      Q._target = {
        node: _,
        x: v.x - E.x,
        y: v.y - E.y,
        w: v.width,
        h: v.height,
        lp: {x: M.x, y: M.y},
        pos: {x: E.x, y: E.y},
        shiftGuide: {dir: "x", limit: 0},
        downPosition: new co.Math.Vector2(M)
      }, Z.rectGuide.gatherRects()
    }, _b.prototype.clear = function () {
      var F = this;
      F._interactor.rectGuide.clear(), F._interactor._42()
    };
    var rp = "directional", Cm = "point", zb = "spot", fo = "light.color", Vq = function (T, n) {
      pp(n) && li.test(n) ? fh(T, n) : mk(n) && n.modelType ? ib(T, n) : zc[T] = n
    }, Mk = function (Y) {
      if (mk(Y)) return Y;
      var d = zc[Y];
      return Y && d === S && li.test(Y) && (Vc && Vc[Y] || fh(Y, Y)), d
    };
    Ak(E, {
      graph3dViewAttributes: A,
      graph3dViewFirstPersonMode: !1,
      graph3dViewMouseRoamable: !0,
      graph3dViewMoveStep: 15,
      graph3dViewRotateStep: I / 60,
      graph3dViewEditHelperDisabled: !1,
      graph3dViewPannable: !0,
      graph3dViewRotatable: !0,
      graph3dViewWalkable: !0,
      graph3dViewResettable: !0,
      graph3dViewZoomable: !0,
      graph3dViewRectSelectable: !0,
      graph3dViewRectSelectBackground: ff,
      graph3dViewGridVisible: !1,
      graph3dViewGridSize: 50,
      graph3dViewGridGap: 50,
      graph3dViewGridColor: [.4, .75, .85, 1],
      graph3dViewOriginAxisVisible: !1,
      graph3dViewCenterAxisVisible: !1,
      graph3dViewAxisXColor: [1, 0, 0, 1],
      graph3dViewAxisYColor: [0, 1, 0, 1],
      graph3dViewAxisZColor: [0, 0, 1, 1],
      graph3dViewEditSizeColor: [1, 1, 0, 1],
      graph3dViewOrtho: !1,
      graph3dViewOrthoWidth: 2e3,
      graph3dViewFovy: I / 4,
      graph3dViewNear: 10,
      graph3dViewFar: 1e4,
      graph3dViewEye: [0, 300, 1e3],
      graph3dViewCenter: [0, 0, 0],
      graph3dViewUp: [0, 1, -1e-7],
      graph3dViewHeadlightRange: 0,
      graph3dViewHeadlightColor: [1, 1, 1, 1],
      graph3dViewHeadlightIntensity: 1,
      graph3dViewHeadlightDisabled: !1,
      graph3dViewFogDisabled: !0,
      graph3dViewFogColor: "white",
      graph3dViewFogNear: 1,
      graph3dViewFogFar: 2e3,
      graph3dViewDashDisabled: !0,
      graph3dViewBatchBlendDisabled: !0,
      graph3dViewBatchBrightnessDisabled: !0,
      graph3dViewBatchColorDisabled: !1,
      setShape3dModel: Vq,
      getShape3dModel: Mk,
      createMatrix: function (Q, p) {
        cl(Q) || (Q = [Q]);
        for (var a = Q.length - 1; a >= 0; a--) {
          var R = Q[a];
          p = Xn(R.mat, R.s3, R.r3, R.rotationMode, R.t3, p)
        }
        return p
      },
      transformVec: function (m, k) {
        return Qp(m, k)
      },
      createBoxModel: function () {
        return {vs: vo, ns: vs, uv: Wh, is: Nd}
      },
      createRoundRectModel: function (T, Z) {
        return rf.roundRect(T, Z)
      },
      createStarModel: function (D, C) {
        return rf.star(D, C)
      },
      createRectModel: function (h, d) {
        return rf.rect(h, d)
      },
      createTriangleModel: function (O, Y) {
        return rf.triangle(O, Y)
      },
      createRightTriangleModel: function (P, l) {
        return rf.rightTriangle(P, l)
      },
      createParallelogramModel: function (o, P) {
        return rf.parallelogram(o, P)
      },
      createTrapezoidModel: function (V, n) {
        return rf.trapezoid(V, n)
      },
      createSmoothSphereModel: function (f, k, V, g, v, j, J) {
        return mf(new Vk(f, k, V, g, v, j, J))
      },
      createSphereModel: function ($, P, W, U, f, K) {
        return $ ? Yk($, P, W, U, f, K) : E.createSmoothSphereModel()
      },
      createSmoothConeModel: function (E, Z, G, A, I) {
        return Mf(E, Z, G, A, I)
      },
      createConeModel: function (c, Z, O, C, $, j) {
        return c ? Xk(c, Z, O, C, $, j) : Mf(j)
      },
      createSmoothCylinderModel: function (y, m, D, A, o, T, R, b) {
        return mf(new Jo(y, m, D, A, o, T, R, b))
      },
      createCylinderModel: function (m, X, K, v, A, P, i) {
        return m ? Up(m, X, K, v, A, P, i) : $g(P, i)
      },
      createSmoothTorusModel: function (a, T, Q, M, E, N) {
        return mf(new Jd(a, T, Q, M, E, N))
      },
      createTorusModel: function (O, t, Q, T, e, V, g) {
        return O ? Wc(O, t, Q, T, e, V, g) : vj(V, g)
      },
      createExtrusionModel: function (p, o, _, G, C, H, y, T) {
        return Lr(p, o, _, G, C, H, y, T)
      },
      createSmoothRingModel: function (U, n, x, a, m, B) {
        for (var C = [], T = 0; T < U.length - 1; T += 2) C.push({x: U[T], y: U[T + 1]});
        for (U = Gq(C, n, x)[0], C = [], T = 0; T < U.length; T++) {
          var u = U[T];
          C.push(new Gj(u.x, 0, u.y))
        }
        return mf(new Pn(C, B, a, m))
      },
      createTextGeometry: function (U, o) {
        return mf(new lk(U, o))
      },
      loadFontFace: function (Q, U) {
        E.xhrLoad(Q, function (w) {
          if (!w) return U();
          var e;
          try {
            e = JSON.parse(w)
          } catch (Z) {
            e = JSON.parse(w.substring(65, w.length - 2))
          }
          uk.loadFace(e), U && U(e.familyName.toLowerCase())
        }, U ? null : {sync: !0})
      },
      createRingModel: function (r, H, x, $, Z, m, o, Q, F, V) {
        for (var C = [], T = 0; T < r.length - 1; T += 2) C.push({x: r[T], y: r[T + 1]});
        m = m || E.shapeSide, o = o || 0, Q = Q || m;
        var O, u, I, q, _, U, f, j, B, c, T, b, L, l, g, h, t, P, z = [], n = [], w = F ? [] : A, N = F ? [] : A,
          a = V ? [] : A, Y = V ? [] : A, M = $ ? [] : A, s = $ ? [] : A, i = Z ? [] : A, R = Z ? [] : A,
          r = Gq(C, H, x), e = qh(r), d = 0, p = 2 * Math.PI / m;
        return r.forEach(function (K) {
          if (I = K.length, I > 1) {
            if (q = K[0], $) for (U = q.x, j = q.y, T = o; Q > T; T++) b = T + 1, L = T * p, l = b * p, g = J(L), h = D(L), t = J(l), P = D(l), M.push(g * U, j, -h * U, t * U, j, -P * U, 0, j, 0), s.push(.5 - .5 * g, .5 - .5 * h, .5 - .5 * t, .5 - .5 * P, .5, .5);
            for (c = 0; I > c; c++) {
              for (_ = K[c], U = q.x, f = _.x, j = q.y, B = _.y, O = d / e, d += lf(q, _), u = d / e, T = o; Q > T; T++) b = T + 1, L = T * p, l = b * p, g = J(L), h = D(L), t = J(l), P = D(l), z.push(g * f, B, -h * f, t * f, B, -P * f, g * U, j, -h * U, t * f, B, -P * f, t * U, j, -P * U, g * U, j, -h * U), n.push(T / m, u, b / m, u, T / m, O, b / m, u, b / m, O, T / m, O), F && T === o && (w.push(0, j, 0, 0, B, 0, g * f, B, -h * f, g * f, B, -h * f, g * U, j, -h * U, 0, j, 0), N.push(0, .5 - j, 0, .5 - B, 2 * f, .5 - B, 2 * f, .5 - B, 2 * U, .5 - j, 0, .5 - j)), V && b === Q && (a.push(0, j, 0, t * f, B, -P * f, 0, B, 0, t * f, B, -P * f, 0, j, 0, t * U, j, -P * U), Y.push(1, .5 - j, 1 - 2 * f, .5 - B, 1, .5 - B, 1 - 2 * f, .5 - B, 1, .5 - j, 1 - 2 * U, .5 - j));
              q = _
            }
            if (Z) for (U = q.x, j = q.y, T = o; Q > T; T++) b = T + 1, L = T * p, l = b * p, g = J(L), h = D(L), t = J(l), P = D(l), i.push(t * U, j, -P * U, g * U, j, -h * U, 0, j, 0), R.push(.5 - .5 * t, .5 + .5 * P, .5 - .5 * g, .5 + .5 * h, .5, .5)
          }
        }), {vs: z, uv: n, bottom_vs: i, bottom_uv: R, top_vs: M, top_uv: s, from_vs: w, from_uv: N, to_vs: a, to_uv: Y}
      }
    }, !0), Ak(h, {
      "3d.move.mode": S,
      "3d.selectable": !0,
      "3d.visible": !0,
      "3d.movable": !0,
      "3d.editable": !0,
      "shape.border.gradient.color": S,
      "edge.gradient.color": S,
      "edge.source.t3": S,
      "edge.target.t3": S,
      "light.type": Cm,
      "light.center": [0, 0, 0],
      "light.color": [1, 1, 1, 1],
      "light.disabled": !1,
      "light.angle": I / 4,
      "light.range": 0,
      "light.exponent": 1,
      "light.intensity": 1,
      "wf.visible": !1,
      "wf.width": 1,
      "wf.color": Br,
      "wf.short": !1,
      "wf.mat": S,
      "wf.geometry": !1,
      batch: S,
      "transparent.mask": !1,
      brightness: S,
      "select.brightness": .7,
      "repeat.uv.length": S,
      alphaTest: .4,
      "label.face": ji,
      "label.t3": S,
      "label.r3": S,
      "label.texture.scale": 2,
      "label.rotationMode": tq,
      "label.light": !1,
      "label.blend": S,
      "label.reverse.flip": !1,
      "label.reverse.color": Ij,
      "label.reverse.cull": !1,
      "label.transparent": !1,
      "label.autorotate": !1,
      "label2.face": ji,
      "label2.t3": S,
      "label2.r3": S,
      "label2.texture.scale": 2,
      "label2.rotationMode": tq,
      "label2.light": !1,
      "label2.blend": S,
      "label2.reverse.flip": !1,
      "label2.reverse.color": Ij,
      "label2.reverse.cull": !1,
      "label2.transparent": !1,
      "label2.autorotate": !1,
      "note.face": ji,
      "note.t3": S,
      "note.r3": S,
      "note.texture.scale": 2,
      "note.rotationMode": tq,
      "note.light": !1,
      "note.blend": S,
      "note.reverse.flip": !1,
      "note.reverse.color": Ij,
      "note.reverse.cull": !1,
      "note.transparent": !1,
      "note.autorotate": !1,
      "note2.face": ji,
      "note2.t3": S,
      "note2.r3": S,
      "note2.texture.scale": 2,
      "note2.rotationMode": tq,
      "note2.light": !1,
      "note2.blend": S,
      "note2.reverse.flip": !1,
      "note2.reverse.color": Ij,
      "note2.reverse.cull": !1,
      "note2.transparent": !1,
      "note2.autorotate": !1,
      shape3d: S,
      "shape3d.color": Kj,
      "shape3d.top.color": S,
      "shape3d.bottom.color": S,
      "shape3d.from.color": S,
      "shape3d.to.color": S,
      "shape3d.image": S,
      "shape3d.top.image": S,
      "shape3d.bottom.image": S,
      "shape3d.from.image": S,
      "shape3d.to.image": S,
      "shape3d.light": !0,
      "shape3d.side": 0,
      "shape3d.side.from": S,
      "shape3d.side.to": S,
      "shape3d.visible": !0,
      "shape3d.from.visible": !0,
      "shape3d.to.visible": !0,
      "shape3d.top.visible": !0,
      "shape3d.bottom.visible": !0,
      "shape3d.torus.radius": .17,
      "shape3d.resolution": 0,
      "shape3d.blend": S,
      "shape3d.opacity": S,
      "shape3d.reverse.flip": !1,
      "shape3d.reverse.color": Ij,
      "shape3d.reverse.cull": !1,
      "shape3d.transparent": !1,
      "shape3d.uv.offset": S,
      "shape3d.uv.scale": S,
      "shape3d.top.uv.offset": S,
      "shape3d.top.uv.scale": S,
      "shape3d.bottom.uv.offset": S,
      "shape3d.bottom.uv.scale": S,
      "shape3d.from.uv.offset": S,
      "shape3d.from.uv.scale": S,
      "shape3d.to.uv.offset": S,
      "shape3d.to.uv.scale": S,
      "shape3d.top.cap": S,
      "shape3d.bottom.cap": S,
      "shape3d.start.angle": 0,
      "shape3d.sweep.angle": U,
      "shape3d.discard.selectable": !0,
      "shape3d.top.discard.selectable": !0,
      "shape3d.bottom.discard.selectable": !0,
      "shape3d.from.discard.selectable": !0,
      "shape3d.to.discard.selectable": !0,
      "shape3d.scaleable": !0,
      "shape3d.autorotate": !1,
      "shape3d.fixSizeOnScreen": S,
      "shape3d.image.cache": !1,
      "shape3d.alwaysOnTop": !1,
      "all.light": !0,
      "all.visible": !0,
      "all.color": Kj,
      "all.image": S,
      "all.blend": S,
      "all.opacity": S,
      "all.reverse.flip": !1,
      "all.reverse.color": Ij,
      "all.reverse.cull": !1,
      "all.transparent": !1,
      "all.uv": S,
      "all.uv.offset": S,
      "all.uv.scale": S,
      "all.discard.selectable": !0,
      mat: S,
      "left.mat": S,
      "right.mat": S,
      "top.mat": S,
      "bottom.mat": S,
      "front.mat": S,
      "back.mat": S
    }, !0);
    var Ir, gp = !1, Wp = [0, 0, 0, 0], Hd = {
        left: [1 / 255, 0, 0, 1],
        right: [2 / 255, 0, 0, 1],
        top: [3 / 255, 0, 0, 1],
        bottom: [4 / 255, 0, 0, 1],
        front: [5 / 255, 0, 0, 1],
        back: [6 / 255, 0, 0, 1],
        m: {1: kl, 2: we, 3: rd, 4: Aj, 5: ji, 6: _d}
      }, pm = function (F, e, l, P) {
        if (e.getFaceVisible(F, l)) {
          _k(e, Sh(F, e.getFaceMat(F, l) || e.getMat(F)));
          var Z = e._26I;
          e.getFaceReverseCull(F, l) ? Z.enable(Z.CULL_FACE) : Z.disable(Z.CULL_FACE), ke(Z, e._prg.uFixPickReverseColor, Hd[l]), Ho(Z), or(Z, P, 6), hb(Z), Ub(e)
        }
      }, Pd = function (C) {
        return C instanceof Sl
      }, Bl = function (h) {
        return [h.x, h.e || 0, h.y]
      }, Lb = function (m, n, W) {
        for (var n = Di(n), k = n[0], q = n[1], B = n[2]; W--;) m.push(k, q, B)
      }, of = function (A, U, Q) {
        for (var U = Di(U), q = U[0], x = U[1], a = U[2], c = U[3]; Q--;) A.push(q, x, a, c)
      }, hi = function (E, j, y) {
        if (j) for (var x, m, f, B = j[0], F = j[1], z = j[2], $ = j[4], U = j[5], K = j[6], M = j[8], e = j[9], u = j[10], S = j[12], v = j[13], Z = j[14], _ = y.length, O = 0, O = 0; _ > O; O += 3) x = y[O], m = y[O + 1], f = y[O + 2], E.push(B * x + $ * m + M * f + S, F * x + U * m + e * f + v, z * x + K * m + u * f + Z); else yn(E, y)
      }, ij = function (O, k) {
        var f = k.s("light.intensity"), X = Di(k.s(fo)), A = X[0], G = X[1], e = X[2];
        1 !== f && (A *= f, G *= f, e *= f), O.push(A, G, e, k.s("light.disabled") ? 1 : 0)
      }, wp = function (O, P, t) {
        ke(P, t.uHeadlightRange, O._headlightRange);
        var w = O._headlightIntensity, L = Di(O._headlightColor);
        1 !== w && (L = [L[0] * w, L[1] * w, L[2] * w]), ke(P, t.uHeadlightColor, [L[0], L[1], L[2], O._headlightDisabled ? 1 : 0]);
        var x = O._59O, b = O._spots, A = O._dirs;
        if (x.length) {
          var g = [], C = [], z = [];
          x.forEach(function (w) {
            ij(g, w), yn(C, O._transformPointToViewSpace(w.p3())), z.push(w.s("light.range"))
          }), P.uniform4fv(t.uPointColor, g), P.uniform1fv(t.uPointRange, z), P.uniform3fv(t.uPointPosition, C)
        }
        if (b.length) {
          var B = [], Y = [], f = [], F = [], N = [], X = [];
          b.forEach(function (y) {
            ij(B, y), yn(Y, O._transformPointToViewSpace(y.p3())), yn(N, O._transformDirectionToViewSpace(y.p3(), y.s("light.center"))), f.push(y.s("light.range")), F.push(J(y.s("light.angle") / 2)), X.push(y.s("light.exponent"))
          }), P.uniform4fv(t.uSpotColor, B), P.uniform1fv(t.uSpotRange, f), P.uniform1fv(t.uSpotAngle, F), P.uniform1fv(t.uSpotExponent, X), P.uniform3fv(t.uSpotPosition, Y), P.uniform3fv(t.uSpotDirection, N)
        }
        if (A.length) {
          var l = [], j = [];
          A.forEach(function (d) {
            ij(l, d), yn(j, O._transformDirectionToViewSpace(d.p3()))
          }), P.uniform4fv(t.uDirColor, l), P.uniform3fv(t.uDirDirection, j)
        }
      }, Uj = function (E) {
        return E > 0 && 0 === (E - 1 & E)
      }, Uo = function (d) {
        return d = R(0, L(I, d)), d = R(kr, L(I - kr, d))
      }, jc = function () {
        return .05 + k() / 2
      }, zq = function (Q, p, e, N) {
        var S, F = Q.getEye();
        return Q.isOrtho() ? (S = el(Q.getCenter(), F), S[0] += N[0], S[1] += N[1], S[2] += N[2]) : S = F, Rk(p, e, N, S)
      }, Rk = function (m, S, V, $) {
        var X = nn(m, S), n = el($, V, !0), L = nn(n, S);
        if (C(L) < kr) return A;
        var r = (X - nn(V, S)) / L;
        return [V[0] + n[0] * r, V[1] + n[1] * r, V[2] + n[2] * r]
      }, Xd = function (k, y) {
        return {x: 2 * k.x - y.x, y: 2 * k.y - y.y}
      }, zf = function (O, r, G, L) {
        var X, e;
        if (!O) return X = i(r.y - G.y, G.x - r.x), {x: r.x + L * D(X), y: r.y + L * J(X)};
        if (!G) return X = i(O.y - r.y, r.x - O.x), {x: r.x + L * D(X), y: r.y + L * J(X)};
        var M = el([O.x, O.y, 0], [r.x, r.y, 0], !0), w = el([G.x, G.y, 0], [r.x, r.y, 0], !0), o = -(M[0] + w[0]) / 2,
          d = -(M[1] + w[1]) / 2, _ = Y(o * o + d * d);
        if (kr > _) return X = i(O.y - r.y, r.x - O.x), {x: r.x + L * D(X), y: r.y + L * J(X)};
        var m = O.x - r.x, q = O.y - r.y, c = G.x - r.x, T = G.y - r.y, k = Y(m * m + q * q), S = Y(c * c + T * T);
        X = B(nn(M, w)) / 2, e = M[1] * w[0] - M[0] * w[1] > 0 ? -1 : 1, o /= _, d /= _;
        var g = L / D(X), $ = R(k, S) / J(X);
        _ = Math.min(g, $);
        var Z = {x: r.x + e * _ * o, y: r.y + e * _ * d};
        return G.b && g > S / J(X) && (Z.adjust = !0), Z
      }, Qq = function (U) {
        var W = U[1], u = U[2], Z = U[3], $ = U[6], b = U[7], v = U[11];
        U[1] = U[4], U[2] = U[8], U[3] = U[12], U[4] = W, U[6] = U[9], U[7] = U[13], U[8] = u, U[9] = $, U[11] = U[14], U[12] = Z, U[13] = b, U[14] = v
      }, oj = function (l) {
        var $ = l[0], I = l[1], M = l[2], D = l[3], L = l[4], h = l[5], v = l[6], k = l[7], Z = l[8], i = l[9], _ = l[10],
          u = l[11], P = l[12], N = l[13], y = l[14], c = l[15], x = $ * h - I * L, X = $ * v - M * L, W = $ * k - D * L,
          O = I * v - M * h, m = I * k - D * h, K = M * k - D * v, S = Z * N - i * P, p = Z * y - _ * P,
          G = Z * c - u * P, o = i * y - _ * N, g = i * c - u * N, j = _ * c - u * y,
          T = x * j - X * g + W * o + O * G - m * p + K * S;
        return T ? (T = 1 / T, l[0] = (h * j - v * g + k * o) * T, l[1] = (M * g - I * j - D * o) * T, l[2] = (N * K - y * m + c * O) * T, l[3] = (_ * m - i * K - u * O) * T, l[4] = (v * G - L * j - k * p) * T, l[5] = ($ * j - M * G + D * p) * T, l[6] = (y * W - P * K - c * X) * T, l[7] = (Z * K - _ * W + u * X) * T, l[8] = (L * g - h * G + k * S) * T, l[9] = (I * G - $ * g - D * S) * T, l[10] = (P * m - N * W + c * x) * T, l[11] = (i * W - Z * m - u * x) * T, l[12] = (h * p - L * o - v * S) * T, l[13] = ($ * o - I * p + M * S) * T, l[14] = (N * X - P * O - y * x) * T, l[15] = (Z * O - i * X + _ * x) * T, void 0) : A
      }, Dc = function (H, v) {
        if (v) {
          var q = v[0], T = v[1], c = v[2];
          H[12] = H[0] * q + H[4] * T + H[8] * c + H[12], H[13] = H[1] * q + H[5] * T + H[9] * c + H[13], H[14] = H[2] * q + H[6] * T + H[10] * c + H[14], H[15] = H[3] * q + H[7] * T + H[11] * c + H[15]
        }
      }, il = function (o, R) {
        if (R) {
          var U = R[0], X = R[1], t = R[2];
          o[0] = o[0] * U, o[1] = o[1] * U, o[2] = o[2] * U, o[3] = o[3] * U, o[4] = o[4] * X, o[5] = o[5] * X, o[6] = o[6] * X, o[7] = o[7] * X, o[8] = o[8] * t, o[9] = o[9] * t, o[10] = o[10] * t, o[11] = o[11] * t
        }
      }, fp = function (G, z, F) {
        var M = z[0], d = z[1], Z = z[2], Y = z[3], v = z[4], V = z[5], l = z[6], B = z[7], f = z[8], T = z[9], D = z[10],
          U = z[11], w = z[12], r = z[13], L = z[14], s = z[15], $ = F[0], A = F[1], p = F[2], g = F[3];
        return G[0] = $ * M + A * v + p * f + g * w, G[1] = $ * d + A * V + p * T + g * r, G[2] = $ * Z + A * l + p * D + g * L, G[3] = $ * Y + A * B + p * U + g * s, $ = F[4], A = F[5], p = F[6], g = F[7], G[4] = $ * M + A * v + p * f + g * w, G[5] = $ * d + A * V + p * T + g * r, G[6] = $ * Z + A * l + p * D + g * L, G[7] = $ * Y + A * B + p * U + g * s, $ = F[8], A = F[9], p = F[10], g = F[11], G[8] = $ * M + A * v + p * f + g * w, G[9] = $ * d + A * V + p * T + g * r, G[10] = $ * Z + A * l + p * D + g * L, G[11] = $ * Y + A * B + p * U + g * s, $ = F[12], A = F[13], p = F[14], g = F[15], G[12] = $ * M + A * v + p * f + g * w, G[13] = $ * d + A * V + p * T + g * r, G[14] = $ * Z + A * l + p * D + g * L, G[15] = $ * Y + A * B + p * U + g * s, G
      }, ck = function (K, M, O, b) {
        var p, r, w, k, F, U, e, u, P, j, v = M[0], d = M[1], o = M[2], _ = b[0], E = b[1], R = b[2], H = O[0], A = O[1],
          m = O[2];
        return C(v - H) < kr && C(d - A) < kr && C(o - m) < kr ? be(K) : (e = v - H, u = d - A, P = o - m, j = 1 / Y(e * e + u * u + P * P), e *= j, u *= j, P *= j, p = E * P - R * u, r = R * e - _ * P, w = _ * u - E * e, j = Y(p * p + r * r + w * w), j ? (j = 1 / j, p *= j, r *= j, w *= j) : (p = 0, r = 0, w = 0), k = u * w - P * r, F = P * p - e * w, U = e * r - u * p, j = Y(k * k + F * F + U * U), j ? (j = 1 / j, k *= j, F *= j, U *= j) : (k = 0, F = 0, U = 0), K[0] = p, K[1] = k, K[2] = e, K[3] = 0, K[4] = r, K[5] = F, K[6] = u, K[7] = 0, K[8] = w, K[9] = U, K[10] = P, K[11] = 0, K[12] = -(p * v + r * d + w * o), K[13] = -(k * v + F * d + U * o), K[14] = -(e * v + u * d + P * o), K[15] = 1, K)
      }, Lm = function (j, W, d, K, I) {
        var C = 1 / v(W / 2), k = 1 / (K - I);
        return j[0] = C / d, j[1] = 0, j[2] = 0, j[3] = 0, j[4] = 0, j[5] = C, j[6] = 0, j[7] = 0, j[8] = 0, j[9] = 0, j[10] = (I + K) * k, j[11] = -1, j[12] = 0, j[13] = 0, j[14] = 2 * I * K * k, j[15] = 0, j
      }, pr = function (Y, n, I, L, q, x, k) {
        var Z = 1 / (n - I), H = 1 / (L - q), m = 1 / (x - k);
        return Y[0] = -2 * Z, Y[1] = 0, Y[2] = 0, Y[3] = 0, Y[4] = 0, Y[5] = -2 * H, Y[6] = 0, Y[7] = 0, Y[8] = 0, Y[9] = 0, Y[10] = 2 * m, Y[11] = 0, Y[12] = (n + I) * Z, Y[13] = (q + L) * H, Y[14] = (k + x) * m, Y[15] = 1, Y
      }, Od = function (K, o) {
        var Y = o[0], N = o[1], s = o[2], d = o[3], S = Y * Y + N * N + s * s + d * d, z = S ? 1 / S : 0;
        return K[0] = -Y * z, K[1] = -N * z, K[2] = -s * z, K[3] = d * z, K
      }, kg = function (R, d) {
        var h = d[0] + d[5] + d[10], O = 0;
        return h > 0 ? (O = 2 * Math.sqrt(h + 1), R[3] = .25 * O, R[0] = (d[6] - d[9]) / O, R[1] = (d[8] - d[2]) / O, R[2] = (d[1] - d[4]) / O) : d[0] > d[5] & d[0] > d[10] ? (O = 2 * Math.sqrt(1 + d[0] - d[5] - d[10]), R[3] = (d[6] - d[9]) / O, R[0] = .25 * O, R[1] = (d[1] + d[4]) / O, R[2] = (d[8] + d[2]) / O) : d[5] > d[10] ? (O = 2 * Math.sqrt(1 + d[5] - d[0] - d[10]), R[3] = (d[8] - d[2]) / O, R[0] = (d[1] + d[4]) / O, R[1] = .25 * O, R[2] = (d[6] + d[9]) / O) : (O = 2 * Math.sqrt(1 + d[10] - d[0] - d[5]), R[3] = (d[1] - d[4]) / O, R[0] = (d[8] + d[2]) / O, R[1] = (d[6] + d[9]) / O, R[2] = .25 * O), R
      }, Uh = function (w, F, H) {
        var T = F[0], C = F[1], $ = F[2], M = F[3], Q = T + T, z = C + C, v = $ + $, V = T * Q, L = T * z, J = T * v,
          i = C * z, S = C * v, j = $ * v, W = M * Q, h = M * z, R = M * v;
        return w[0] = 1 - (i + j), w[1] = L + R, w[2] = J - h, w[3] = 0, w[4] = L - R, w[5] = 1 - (V + j), w[6] = S + W, w[7] = 0, w[8] = J + h, w[9] = S - W, w[10] = 1 - (V + i), w[11] = 0, w[12] = H[0], w[13] = H[1], w[14] = H[2], w[15] = 1, w
      }, Gd = function () {
        var o = [0, 0, 0], n = [0, 0, 0], u = [0, 0, 0], Y = function (C, r, d) {
          C[0] = r[1] * d[2] - r[2] * d[1], C[1] = r[2] * d[0] - r[0] * d[2], C[2] = r[0] * d[1] - r[1] * d[0]
        }, l = function (z) {
          return z[0] * z[0] + z[1] * z[1] + z[2] * z[2]
        }, k = function (z) {
          var k = Math.sqrt(l(z));
          z[0] /= k, z[1] /= k, z[2] /= k
        }, F = function (L, X, v) {
          L[0] = X[0] - v[0], L[1] = X[1] - v[1], L[2] = X[2] - v[2]
        };
        return function (R, N, J) {
          var v = gc();
          return F(u, R, N), 0 === l(u) && (u[2] = 1), k(u), Y(o, J, u), 0 === l(o) && (1 === Math.abs(J[2]) ? u[0] += 1e-4 : u[2] += 1e-4, k(u), Y(o, J, u)), k(o), Y(n, u, o), v[0] = o[0], v[4] = n[0], v[8] = u[0], v[1] = o[1], v[5] = n[1], v[9] = u[1], v[2] = o[2], v[6] = n[2], v[10] = u[2], v
        }
      }(), nq = function (J, M) {
        if (J.vr.enable) {
          var Q = J.vr.getViewMatrix(M);
          if (Q) return Q
        }
        return ck(M ? M : gc(), J._eye, J._center, J._up)
      }, hr = function (d) {
        if (d.vr.enable) {
          var R = d.vr.getProjectMatrix();
          if (R) return R
        }
        var a = d.getAspect(), u = d._near, A = d._far, N = gc();
        if (d._ortho) {
          var n = d._orthoWidth / 2, x = n / a;
          pr(N, -n, n, -x, x, u, A)
        } else Lm(N, d._fovy, a, u, A);
        return N
      }, kb = function (U, Q) {
        if (!U) return A;
        var $ = 0, o = 1, N = 2, F = [], J = 0, D = U.length, P = D / 3;
        if (Q) {
          for (; D > J; J++) F[J] = 0;
          for (J = 0; J < Q.length; J += 3) {
            var p = [], K = [], k = [];
            p[$] = U[3 * Q[J + 1] + $] - U[3 * Q[J] + $], p[o] = U[3 * Q[J + 1] + o] - U[3 * Q[J] + o], p[N] = U[3 * Q[J + 1] + N] - U[3 * Q[J] + N], K[$] = U[3 * Q[J + 2] + $] - U[3 * Q[J + 1] + $], K[o] = U[3 * Q[J + 2] + o] - U[3 * Q[J + 1] + o], K[N] = U[3 * Q[J + 2] + N] - U[3 * Q[J + 1] + N], k[$] = p[o] * K[N] - p[N] * K[o], k[o] = p[N] * K[$] - p[$] * K[N], k[N] = p[$] * K[o] - p[o] * K[$];
            for (var H = 0; 3 > H; H++) F[3 * Q[J + H] + $] += k[$], F[3 * Q[J + H] + o] += k[o], F[3 * Q[J + H] + N] += k[N]
          }
        } else for (J = 0; P > J; J += 3) {
          var p = [], K = [], k = [];
          p[$] = U[3 * (J + 1) + $] - U[3 * J + $], p[o] = U[3 * (J + 1) + o] - U[3 * J + o], p[N] = U[3 * (J + 1) + N] - U[3 * J + N], K[$] = U[3 * (J + 2) + $] - U[3 * (J + 1) + $], K[o] = U[3 * (J + 2) + o] - U[3 * (J + 1) + o], K[N] = U[3 * (J + 2) + N] - U[3 * (J + 1) + N], k[$] = p[o] * K[N] - p[N] * K[o], k[o] = p[N] * K[$] - p[$] * K[N], k[N] = p[$] * K[o] - p[o] * K[$];
          for (var H = 0; 3 > H; H++) F[3 * (J + H) + $] = k[$], F[3 * (J + H) + o] = k[o], F[3 * (J + H) + N] = k[N]
        }
        for (J = 0; D > J; J += 3) {
          var r = [];
          r[$] = F[J + $], r[o] = F[J + o], r[N] = F[J + N];
          var d = Y(r[$] * r[$] + r[o] * r[o] + r[N] * r[N]);
          0 === d && (d = kr), r[$] = r[$] / d, r[o] = r[o] / d, r[N] = r[N] / d, F[J + $] = r[$], F[J + o] = r[o], F[J + N] = r[N]
        }
        return new on(F)
      }, Io = function (L, x, R, C) {
        if (R || (R = L.createTexture()), x) {
          var G = L.TEXTURE_2D, s = L.REPEAT, T = L.CLAMP_TO_EDGE, U = L.TEXTURE_MIN_FILTER;
          C !== L.NEAREST && (C = L.LINEAR), Dm(L, R), L.texImage2D(G, 0, L.RGBA, L.RGBA, L.UNSIGNED_BYTE, x), Qi(L, L.TEXTURE_MAG_FILTER, C);
          var o = x.naturalWidth || x.width, B = x.naturalHeight || x.height;
          Uj(o) && Uj(B) && !x.clampToEdge ? (Qi(L, L.TEXTURE_WRAP_S, s), Qi(L, L.TEXTURE_WRAP_T, s), Qi(L, U, L.LINEAR_MIPMAP_LINEAR), L.generateMipmap(G)) : (Qi(L, L.TEXTURE_WRAP_S, T), Qi(L, L.TEXTURE_WRAP_T, T), Qi(L, U, C)), Dm(L, A)
        }
        return R
      }, wf = function (y, L) {
        var T = new Uint8Array(3);
        return L = L || y.createTexture(), Dm(y, L), Qi(y, y.TEXTURE_MIN_FILTER, y.LINEAR), y.texImage2D(y.TEXTURE_2D, 0, y.RGB, 1, 1, 0, y.RGB, y.UNSIGNED_BYTE, T), L
      }, Kg = function (E) {
        E._26I && E._prg && (E._26I.deleteProgram(E._prg), E._prg = A)
      }, An = function (t, O, T, E) {
        var w = t.createShader(T);
        return t.shaderSource(w, E), t.compileShader(w), t.attachShader(O, w), w
      }, Ab = function (g) {
        return g.createBuffer()
      }, Dm = function (I, C) {
        I.bindTexture(I.TEXTURE_2D, C)
      }, Gm = function (g, J) {
        g.bindFramebuffer(g.FRAMEBUFFER, J)
      }, Qi = function (j, b, q) {
        j.texParameteri(j.TEXTURE_2D, b, q)
      }, Kp = function (E, u) {
        E.enable(E.POLYGON_OFFSET_FILL), E.polygonOffset(u[0], u[1])
      }, On = function (z) {
        z.disable(z.POLYGON_OFFSET_FILL)
      }, Vp = function (m, r) {
        if (r) {
          var r = Di(r);
          m.clearColor(r[0], r[1], r[2], r[3])
        }
      }, sb = function (I, l) {
        ke(I, l.uFix, !0), nk(I, l.aNormal)
      }, Hq = function (B, b) {
        ke(B, b.uFix, !1), xn(B, b.aNormal)
      }, Bg = function (T, Y, w, S, e, L, H, P) {
        T._picking || (w ? (ke(T, Y.uBlend, !0), ke(T, Y.uBlendColor, w)) : ke(T, Y.uBlend, !1), ke(T, Y.uLight, S == A ? !0 : S), Hl(e) && 1 !== e && ke(T, Y.uPartOpacity, e), ke(T, Y.uReverseFlip, L == A ? !1 : L), ke(T, Y.uFixPickReverseColor, H || Ij)), P ? T.enable(T.CULL_FACE) : T.disable(T.CULL_FACE)
      }, Mc = function (i, W) {
        i._picking || ke(i, W.uPartOpacity, 1)
      }, Ho = function (k, y, Y, X, i, E, Q, J, o) {
        if (!Y) return k.activeTexture(k.TEXTURE0), Dm(k, k._emptyTexture), k.activeTexture(k.TEXTURE1), Dm(k, k._emptyBlendTexture), void 0;
        ke(k, y.uTexture, !0), ke(k, y.uDiscardSelectable, ye(X) ? X : !0), xn(k, y.aUv), $m(k, i, E, y.aUv, 2), o ? (ke(k, y.uBlendTexture, !0), k.activeTexture(k.TEXTURE1), Dm(k, o), k.uniform1i(y.uBlendSampler, 1)) : (ke(k, y.uBlendTexture, !1), k.activeTexture(k.TEXTURE1), Dm(k, k._emptyBlendTexture)), k.activeTexture(k.TEXTURE0), Dm(k, Y), k.uniform1i(y.uSampler, 0);
        var A = [0, 0, 1, 1];
        Q && (A[0] = Q[0], A[1] = Q[1]), J && (A[2] = J[0], A[3] = J[1]), ke(k, y.uOffsetScale, A)
      }, hb = function (e, W, C) {
        e.activeTexture(e.TEXTURE0), Dm(e, A), e.activeTexture(e.TEXTURE1), Dm(e, A), C && (nk(e, W.aUv), ke(e, W.uTexture, !1), ke(e, W.uBlendTexture, !1))
      }, os = function (i, $, P, k, F, L) {
        !P || N || K || i.lineWidth(P), k && !i._picking && ke(i, $.uFixPickReverseColor, k), F && $m(i, F, L, $.aPosition)
      }, ae = function (s, a, f, n) {
        Ir && (n = s[Ir]), s.drawArrays(n == A ? s.TRIANGLES : n, a, f);
        var F = s._renderInfo;
        F && (F.calls++, F.vertices += f, (n == A || n === s.TRIANGLES) && (F.faces += f / 3), n === s.LINES && (F.lines += f / 2))
      }, or = function (S, g, H, _) {
        Ir && (_ = S[Ir]), S.drawElements(_ == A ? S.TRIANGLES : _, H, S.UNSIGNED_SHORT, g == A ? 0 : 2 * g);
        var m = S._renderInfo;
        m && (m.calls++, m.vertices += H, (_ == A || _ === S.TRIANGLES) && (m.faces += H / 3), _ === S.LINES && (m.lines += H / 2))
      }, Vi = function (C, t, n, X, Z) {
        var U = C.ARRAY_BUFFER;
        C.bindBuffer(U, t), n && C.bufferData(U, n, C.STATIC_DRAW), X != A && C.vertexAttribPointer(X, Z ? Z : 3, C.FLOAT, !1, 0, 0)
      }, $m = function (B, V, z, j, k) {
        return z ? (rq(B, B.ARRAY_BUFFER, V, z), j != A && B.vertexAttribPointer(j, k ? k : 3, B.FLOAT, !1, 0, 0), void 0) : Vi(B, V, z, j, k)
      }, xh = function (M, Q, I) {
        var l = M.ELEMENT_ARRAY_BUFFER;
        M.bindBuffer(l, Q), I && M.bufferData(l, I, M.STATIC_DRAW)
      }, ki = function (u, Y, a) {
        rq(u, u.ELEMENT_ARRAY_BUFFER, Y, a)
      }, rq = function (r, e, i, I) {
        var G = I._bufId;
        G || (G = I._bufId = Q.Math.generateIncreasingID());
        var i, $ = r._bufPool;
        (i = $[G]) && i._buf ? r.bindBuffer(e, i._buf) : (i = $[G] = {_buf: Ab(r)}, r.bindBuffer(e, i._buf), r.bufferData(e, I, r.STATIC_DRAW)), i._fid = r._renderInfo.frame
      }, ke = function (o, m, j) {
        if (j != A && m != A) {
          j = Di(j);
          var U = j.length;
          3 === U ? o.uniform3fv(m, j) : 4 === U ? o.uniform4fv(m, j) : 16 === U ? o.uniformMatrix4fv(m, !1, j) : ye(j) ? o.uniform1i(m, j ? 1 : 0) : 2 === U ? o.uniform2fv(m, j) : o.uniform1f(m, j)
        }
      }, xn = function (Q, H) {
        H != A && H >= 0 && Q.enableVertexAttribArray(H)
      }, nk = function (U, g) {
        g != A && g >= 0 && U.disableVertexAttribArray(g)
      }, Ub = function (u, T) {
        var L = u.getGL(), m = u._prg;
        u._7O = u._8O.pop(), T && (ke(L, m.uMVMatrix, u._7O), u._6O = T, ke(L, m.uNMatrix, T))
      }, xq = function (j, i) {
        return i || (i = gc()), Zf(i, j), oj(i), Qq(i), i
      }, _k = function (w, C) {
        var T = w.getGL(), A = w._prg, j = w._7O;
        C && (w._8O.push(Kc(j)), fp(j, j, C), w._7O = j), ke(T, A.uMVMatrix, j), ke(T, A.uNMatrix, xq(j, w._6O))
      }, Ti = function (F, w, s, k, I, Q) {
        if (s) {
          if (k) {
            var h = s.value++, g = 2147483648 | h,
              S = [(255 & g >> 16) / 255, (255 & g >> 8) / 255, (255 & g) / 255, (255 & g >> 24) / 255];
            s[h] = {data: I, part: Q}
          } else S = Wp;
          return ke(F, w.uFixPickReverseColor, S), S
        }
      }, ak = function () {
        var o = {
          center: function (b, O, $, u, w) {
            var q = -O[1] / 2, D = {x: -O[0] / 2, y: q, width: O[0], height: O[1]}, Z = um(b, D, $);
            return [Z.x + u, -Z.y - w, jc()]
          }, front: function (W, h, q, u, A) {
            var i = -h[1] / 2, l = {x: -h[0] / 2, y: i, width: h[0], height: h[1]}, K = um(W, l, q);
            return [K.x + u, -K.y - A, h[2] / 2 + jc()]
          }, back: function (h, R, O, d, D) {
            var k = -R[0] / 2, t = -R[1] / 2, E = {x: k, y: t, width: R[0], height: R[1]}, B = um(h, E, O);
            return [-B.x - d, -B.y - D, -R[2] / 2 - jc()]
          }, left: function (F, y, b, G, U) {
            var n = -y[1] / 2, M = {x: -y[2] / 2, y: n, width: y[2], height: y[1]}, A = um(F, M, b);
            return [-y[0] / 2 - jc(), -A.y - U, A.x + G]
          }, right: function (A, C, e, i, $) {
            var F = -C[2] / 2, z = -C[1] / 2, g = {x: F, y: z, width: C[2], height: C[1]}, L = um(A, g, e);
            return [C[0] / 2 + jc(), -L.y - $, -L.x - i]
          }, top: function (e, T, F, k, b) {
            var S = {x: -T[0] / 2, y: -T[2] / 2, width: T[0], height: T[2]}, V = um(e, S, F);
            return [V.x + k, T[1] / 2 + jc(), V.y + b]
          }, bottom: function (D, I, U, N, p) {
            var g = -I[2] / 2, m = {x: -I[0] / 2, y: g, width: I[0], height: I[2]}, o = um(D, m, U);
            return [o.x + N, -I[1] / 2 - jc(), -o.y - p]
          }
        };
        return function (R, A, q, z, $, p) {
          return o[z](R, A, q, $ || 0, p || 0)
        }
      }(), re = function ($, t, T, C, h, M, S, F, V, z) {
        if (h && (t[0] += h[0], t[1] += h[1], t[2] += h[2]), Dc($, T), F) {
          var G = gc();
          if ($f(G, V, z), Qp(t, G), Dc($, t), $.auto = F, $.pos = Qp([0, 0, 0], $), M) {
            var l = $.mat2 = gc();
            $f(l, M, S)
          }
        } else $f($, V, z), Dc($, t), C === kl ? mn($, -b) : C === we ? mn($, b) : C === rd ? wo($, -b) : C === Aj ? wo($, b) : C === _d && mn($, I), $f($, M, S);
        return $
      }, lr = function (j, a) {
        var S = a.auto, P = a.mat2, I = j.gv;
        if (S) {
          var s, w = gc(), T = [0, 0, 0, 0];
          s = "string" == typeof S ? [S.indexOf("x") < 0 ? I._eye[0] : I._center[0], S.indexOf("y") < 0 ? I._eye[1] : I._center[1], S.indexOf("z") < 0 ? I._eye[2] : I._center[2]] : I._eye, kg(T, ck(gc(), s, I._center, I._up)), Uh(w, Od(T, T), a.pos), P && fp(w, w, P), _k(I, w)
        } else _k(I, a)
      }, Bs = function (x, W, C, s, B) {
        var V = x.s, Y = x.gv, t = Y.getGL(), n = Y._prg, _ = Y._buffer, A = Y._1O;
        Io(t, Gr, A), lr(x, C), Bg(t, n, V(W + ".blend"), V(W + ".light"), V(W + ".opacity"), V(W + ".reverse.flip"), V(W + ".reverse.color"), V(W + ".reverse.cull")), Ho(t, n, A, B, _.uv, zs), $m(t, _.vs, s, n.aPosition), $m(t, _.ns, sl, n.aNormal), ki(t, _.is, We), or(t, 0, We.length), hb(t, n, A), Mc(t, n), Ub(Y)
      }, Jk = function (C, R, q) {
        var j = C.gv, k = C.data, t = C[R] = {
          blend: j.getBodyColor(k) || j.getFaceBlend(k, R),
          light: j.getFaceLight(k, R),
          color: j.getFaceColor(k, R),
          opacity: j.getFaceOpacity(k, R),
          transparent: j.getFaceTransparent(k, R),
          reverseFlip: j.getFaceReverseFlip(k, R),
          reverseColor: j.getFaceReverseColor(k, R),
          reverseCull: j.getFaceReverseCull(k, R),
          texture: j.getFaceImage(k, R),
          blendTexture: j.getFaceBlendImage(k, R),
          discardSelectable: j.getFaceDiscardSelectable(k, R)
        };
        if ("csg" !== R) {
          t.uv = j.getFaceUv(k, R) || q && q[R + "Uv"], t.uvScale = j.getFaceUvScale(k, R) || q && q[R + "UvScale"], t.uvOffset = j.getFaceUvOffset(k, R) || q && q[R + "UvOffset"];
          var z = j.getFaceMat(k, R);
          z && (t.mat = Sh(k, z))
        }
        return t
      }, Kk = function (n, S, E, z, l) {
        if (z) {
          if (!l(z.transparent)) return;
          var t = n.data, g = n.gv, e = g._buffer, A = g.getTexture(z.texture, t), h = g.getTexture(z.blendTexture, t);
          Ho(S, E, A, z.discardSelectable, e.uv, z.tuv, z.uvOffset, z.uvScale, h), Bg(S, E, z.blend, z.light, z.opacity, z.reverseFlip, z.reverseColor, z.reverseCull), ke(S, E.uDiffuse, z.color), $m(S, e.vs, z.vs, E.aPosition), $m(S, e.ns, z.ns, E.aNormal), ae(S, 0, z.vs.length / 3), Mc(S, E), hb(S, E, A)
        }
      }, $d = function (w, H, r, I, f, y) {
        var _, D, E, Z, q, Y, C, F, z, u, A, P = [I - H, f - r], B = w ? w.length : 0;
        for (E = 0; B > E; E++) {
          for (Z = 2, _ = w[E], q = _[0], Y = _[1]; Z + 1 < _.length;) {
            if (C = _[Z], F = _[Z + 1], D = Ef(H, r, I, f, q, Y, C, F, !0)) {
              z = [C - q, F - Y], u = lf(z), z[0] /= u, z[1] /= u, u = nn(P, z), u = u > 0 ? y : -y, A = [z[0] * u, z[1] * u];
              break
            }
            q = C, Y = F, Z += 2
          }
          if (A) break
        }
        if (A) for (I = H + A[0], f = r + A[1], E = 0; B > E; E++) for (Z = 2, _ = w[E], q = _[0], Y = _[1]; Z + 1 < _.length;) {
          if (C = _[Z], F = _[Z + 1], D = Ef(H, r, I, f, q, Y, C, F, !0)) return [0, 0];
          q = C, Y = F, Z += 2
        }
        return A ? A : [I - H, f - r]
      }, lb = Q.graph3d = {}, Pj = function (G, R, _) {
        Dr(H + ".graph3d." + G, R, _)
      },
      Sr = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<wVb!>!wVs|*fsvuyfUeofmCv)gj~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVs!3dfw!hojzsbw<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUeofmCv!mppc!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN",
      yp = "~~<eJ!>!spmpDhbsG`mh~<spmpDsfmqnbTwv!>+!eJ<*wVs!-sfmqnbTeofmCv)E3fsvuyfu!>!spmpDsfmqnbTwv!5dfw|!*fsvuyfUeofmCv)!gj!!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTv)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTv!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQv!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEv)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~~!<esbdtje!|!*1/1!>>!b/spmpDhbsG`mh)!gj!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~!<esbdtje!|!*utfUbiqmBv!>=!b/spmpDwv)!gj!!!!|!ftmf~~!<esbdtje!|!*1/1!>>!b/spmpDwv)!gj!!!!|!*uofsbqtobsUv)!gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<wVs!3dfw!hojzsbw<sfmqnbTeofmCv!E3sfmqnbt!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUeofmCv!mppc!nspgjov<fsvuyfUv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov<utfUbiqmBv!ubpmg!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
    Ak(E, {
      setBatchInfo: function (u, F) {
        ok[u] = F
      }, getBatchInfo: function (r) {
        return ok[r]
      }
    }, !0);
    var ur = [1, 1, 1], xb = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
      Un = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5],
      Rr = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5],
      Pg = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5],
      ys = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5],
      er = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5],
      as = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5], Ff = function (V, Z) {
        tj(V, Z, "_batchModelMap", "_batchIndexMap"), Wg(V, Z, "_wireframeModelMap", "_wireframeIndexMap"), Wg(V, Z, "_polylineModelMap", "_polylineIndexMap"), Wg(V, Z, "_wireframeModelMapSwap", "_wireframeIndexMapSwap"), Wg(V, Z, "_polylineModelMapSwap", "_polylineIndexMapSwap")
      }, tj = function (w, u, Z, E) {
        if (!u) return w[Z] = {}, w[E] = {}, void 0;
        var $ = u._id, D = w[E], L = D[$];
        if (L) {
          var l = w[Z], p = L.batch, g = l[p], F = g.ds, e = L.index;
          if (g.invalidate = !0, delete D[$], F.splice(e, 1), ql(F)) return delete l[p], void 0;
          for (var c = L.begin, m = L.size, x = 3 * c, C = 3 * m, O = 4 * c, h = 4 * m, i = g.vs, f = g.ps, y = g.uv, b = g.cs, _ = g.bs, j = g.rs, K = g.ns, d = g.ls; e < F.length; e++) L = D[F[e]._id], L.index--, L.begin -= m;
          i.splice(x, C), f.splice(O, h), y && y.splice(2 * c, 2 * m), b && b.splice(O, h), _ && _.splice(x, C), j && j.splice(c, m), K && K.splice(x, C), d && d.splice(c, m)
        }
      }, Wg = tj, Zc = function (I, p, O, Q) {
        if (!Q) return A;
        var h = p[Q];
        if (!h) {
          var $ = ok[Q] || ho, a = $.image ? [] : A;
          h = p[Q] = {
            vs: [],
            ns: [],
            uv: a,
            cs: a ? A : $.color ? A : [],
            bs: $.blend ? [] : A,
            ps: [],
            rs: $.brightness ? [] : A,
            ds: []
          }
        }
        return h.invalidate = !0, I[O._id] = {index: h.ds.length, begin: h.vs.length / 3, batch: Q}, h.ds.push(O), h
      }, Bo = function (i, k) {
        return k != A && 1 !== k ? [i[0] * k, i[1] * k, i[2] * k, i[3]] : i
      }, ei = function (r, L, l) {
        var o = r.getBrightness(L), H = Di(l.color || "white"), e = H[3] < 1, M = Math.ceil(l.width) || 1,
          m = (e ? "T" : "O") + M, O = r._wireframeIndexMap, h = r._wireframeModelMap, F = h[m];
        F || (F = h[m] = {vs: [], cs: [], ps: [], ds: [], T: e, W: M});
        var K, N = r.getData3dUI(L), w = ao(N);
        if (l.geometry) {
          if (!w) return;
          if (K = od(w), !K) return
        } else K = l.short ? Re : Wo;
        F.invalidate = !0;
        var W = F.vs, n = F.cs, S = F.ds, f = O[L._id] = {index: S.length, begin: W.length / 3, batch: m};
        S.push(L);
        var $ = Sh(L, l.mat), Z = N._calcAnchorMat(L);
        Z && fp($, $, Z), hi(W, $, K);
        var t = f.size = W.length / 3 - f.begin;
        of(n, Bo(H, o), t)
      }, Zr = function (B, E, h, P, H, j, o, l, y) {
        var I = B.getBrightness(E);
        I == A && (I = 1);
        var O = Bo(Di(P), I), n = O[3] < 1;
        j = Math.ceil(j) || 1;
        var J = (n ? "T" : "O") + j;
        if (o) {
          var v = o[0], M = (o[1] || v) + v;
          J += "-" + v + "-" + M, y && (J += "-" + Ig(y) + "-" + I, y = Bo(Di(y), I))
        }
        var C = B._polylineIndexMap, Q = B._polylineModelMap, U = Q[J];
        U || (U = Q[J] = {
          vs: [],
          cs: [],
          ps: [],
          ds: [],
          ls: o ? [] : A,
          T: n,
          W: j
        }, o && (U.D = v, U.G = M, U.A = y)), U.invalidate = !0;
        var Y, q = U.vs, d = U.cs, Z = U.ds, S = U.ls, f = C[E._id] = {index: Z.length, begin: q.length / 3, batch: J};
        Z.push(E), yn(q, h);
        var b, X = f.size = q.length / 3 - f.begin, $ = h.length, k = 0, R = [];
        if (o || H) for (Y = 0; $ > Y; Y += 6) b = lf([h[Y], h[Y + 1], h[Y + 2]], [h[Y + 3], h[Y + 4], h[Y + 5]]), R.push(b), k += b;
        if (k && H) {
          var V, m = Bo(Di(H), I), T = [m[0] - O[0], m[1] - O[1], m[2] - O[2], m[3] - O[3]], e = 0;
          for (Y = 0; $ > Y; Y += 6) V = e / k, of(d, [O[0] + T[0] * V, O[1] + T[1] * V, O[2] + T[2] * V, O[3] + T[3] * V], 1), e += R[Y / 6], V = e / k, of(d, [O[0] + T[0] * V, O[1] + T[1] * V, O[2] + T[2] * V, O[3] + T[3] * V], 1)
        } else of(d, O, X);
        if (o) for (e = l || 0, Y = 0; $ > Y; Y += 6) S.push(e), e += R[Y / 6], S.push(e)
      }, hl = function (A, L, b) {
        if (L) for (var h = 4 * L.begin, x = b[L.batch].ps, G = 0; G < L.size; G++) x[h++] = A[0], x[h++] = A[1], x[h++] = A[2], x[h++] = A[3]
      }, ds = function (r, P) {
        var X = P + ["32"], u = r[P], i = r[X];
        u ? i && i.length === u.length ? (i.set(u), i._bufId = null) : r[X] = new on(u) : delete r[X]
      }, Gl = function (i, d, p, r, J, h, G, E, b) {
        if (cl(p)) p.forEach(function (o) {
          Gl(i, d, o, r, J, h, G, E, b)
        }); else if (pp(p)) Gl(i, d, ao(r, p), r, J, h, G, E, b); else if (mk(p)) {
          var L, R = $q(p.mat, d, i), $ = $q(p.s3, d, i), a = $q(p.t3, d, i), W = $q(p.r3, d, i);
          if (($ || W || a || R) && (L = Xn(R, $, W, $q(p.rotationMode, d, i), a), h.push(L)), p.shape3d) Gl(i, d, p.shape3d, r, J, h, G, E, p); else {
            var w = r.s;
            b = b || ho;
            var H = h[0], f = h.length, e = w("shape3d.color", p.color, b.color);
            if (J || (J = w("shape3d.blend", p.blend, b.blend)), f > 1) {
              H = Kc(H);
              for (var M = 1; f > M; M++) fp(H, H, h[M])
            }
            p.vs && w(Pl, p.visible, b.visible) && ld(H, G, E, p.vs, p.uv, p.is, J, e), p.top_vs && w(ap, p.topVisible, b.topVisible) && ld(H, G, E, p.top_vs, p.top_uv, p.top_is, J, w("shape3d.top.color", p.topColor, b.topColor) || e), p.bottom_vs && w(Ic, p.bottomVisible, b.bottomVisible) && ld(H, G, E, p.bottom_vs, p.bottom_uv, p.bottom_is, J, w("shape3d.bottom.color", p.bottomColor, b.bottomColor) || e), p.from_vs && w(dp, p.fromVisible, b.fromVisible) && ld(H, G, E, p.from_vs, p.from_uv, p.from_is, J, w("shape3d.from.color", p.fromColor, b.fromColor) || e), p.to_vs && w(Lo, p.toVisible, b.toVisible) && ld(H, G, E, p.to_vs, p.to_uv, p.to_is, J, w("shape3d.to.color", p.toColor, b.toColor) || e)
          }
          L && h.pop()
        }
      }, ld = function (P, c, B, K, u, U, e, X) {
        var r, T = c.cs, g = c.uv, H = c.bs;
        if (U) {
          r = U.length;
          for (var O = 0; r > O; O++) {
            var v = U[O];
            hi(B, P, [K[3 * v], K[3 * v + 1], K[3 * v + 2]]), g && yn(g, [u[2 * v], u[2 * v + 1]])
          }
        } else r = K.length / 3, hi(B, P, K), g && yn(g, u);
        T && of(T, X, r), H && (e ? Lb(H, e, r) : yn(H, ur, r))
      }, Kr = function (S, e, E, x) {
        var P = [];
        x ? Gl(S.gv, S.data, x, S, S.getBodyColor(), [e], E, P) : (Nl(S, kl, e, E, P), Nl(S, we, e, E, P), Nl(S, ji, e, E, P), Nl(S, _d, e, E, P), Nl(S, rd, e, E, P), Nl(S, Aj, e, E, P), Nl(S, "csg", e, E, P)), P.length && (yn(E.vs, P), yn(E.ns, kb(P)))
      }, Nl = function (H, X, i, g, r) {
        var y = H[X];
        if (y) {
          var c = y.tuv;
          if (c) {
            var $, m, k, u, Z = y.uvScale, S = y.uvOffset;
            if (Z) for ($ = c.length, m = Z[0], k = Z[1], u = 0; $ > u; u += 2) c[u] *= m, c[u + 1] *= k;
            if (S) for ($ = c.length, m = S[0], k = S[1], u = 0; $ > u; u += 2) c[u] += m, c[u + 1] += k
          }
          ld(i, g, r, y.vs, c, A, y.blend, y.color)
        }
      }, Km = function (B, R, C, l, q, c, I, E) {
        var F, k = C.cs, g = C.uv, v = C.bs;
        if (B.getFaceVisible(R, c)) {
          var Y = B.getFaceMat(R, c);
          if (Y && (q = Sh(R, Y)), hi(I, q, E), k && of(k, B.getFaceColor(R, c), 6), g) {
            var b = B.getFaceUv(R, c) || l[c + "Uv"], U = B.getFaceUvScale(R, c) || l[c + "UvScale"],
              h = B.getFaceUvOffset(R, c) || l[c + "UvOffset"];
            b = b ? [b[6], b[7], b[0], b[1], b[2], b[3], b[2], b[3], b[4], b[5], b[6], b[7]] : xb;
            var x = b[0], V = b[1], a = b[2], z = b[3], L = b[4], i = b[5], o = b[6], e = b[7], $ = b[8], n = b[9],
              w = b[10], J = b[11];
            if (U) {
              var Q = U[0], K = U[1];
              x *= Q, V *= K, a *= Q, z *= K, L *= Q, i *= K, o *= Q, e *= K, $ *= Q, n *= K, w *= Q, J *= K
            }
            if (h) {
              var S = h[0], M = h[1];
              x += S, V += M, a += S, z += M, L += S, i += M, o += S, e += M, $ += S, n += M, w += S, J += M
            }
            g.push(x, V, a, z, L, i, o, e, $, n, w, J)
          }
          v && (F = B.getBodyColor(R) || B.getFaceBlend(R, c), F ? Lb(v, F, 6) : yn(v, ur, 6))
        }
      }, lq = function (_, W, y, Z) {
        var I = _.getGL(), E = _._prg, L = _._buffer;
        if (!Ah(W)) {
          _k(_), sb(I, E);
          for (var d in W) {
            var x = W[d];
            if (!(Z && !x.T || !Z && x.T)) {
              x.invalidate ? (x.invalidate = !1, ds(x, "vs"), ds(x, "cs"), ds(x, "ls"), ds(x, "ps")) : y && ds(x, "ps");
              var N = x.vs32, q = y ? x.ps32 : x.cs32;
              os(I, E, x.W, A, L.vs, N);
              var k = x.D, U = !_._dashDisabled && k;
              ke(I, E.uAlphaTest, h.alphaTest), U && (ke(I, E.uDash, !0), ke(I, E.uDashDistance, k), ke(I, E.uDashGapDistance, x.G), xn(I, E.aLineDistance), $m(I, L.lineDistance, x.ls32, E.aLineDistance, 1), ke(I, E.uDiffuse, x.A || mm));
              var z = !_._batchColorDisabled;
              z && (ke(I, E.uBatchColor, !0), xn(I, E.aBatchColor), $m(I, L.batchColor, q, E.aBatchColor, 4)), Ho(I), ae(I, 0, N.length / 3, I.LINES), hb(I), z && (ke(I, E.uBatchColor, !1), nk(I, E.aBatchColor)), U && (ke(I, E.uDash, !1), nk(I, E.aLineDistance))
            }
          }
          Hq(I, E)
        }
      }, go = function (N, B, O) {
        var t, n, H, Q, X, M, u, T, W, R, F, d = N.getGL(), v = N._prg, $ = N._buffer, y = N._batchModelMap;
        if (!Ah(y)) {
          _k(N);
          for (t in y) if (n = ok[t] || ho, !(O && !n.transparent || !O && n.transparent) && (H = y[t], B || !n.transparentMask)) {
            var I = O && n.autoSort !== !1 && (N._33Q || H.invalidate);
            if (H.invalidate ? (H.invalidate = !1, ds(H, "vs"), ds(H, "ns"), ds(H, "cs"), ds(H, "rs"), ds(H, "ps"), ds(H, "bs"), ds(H, "uv")) : B && ds(H, "ps"), X = H.vs32, M = B ? H.ps32 : H.cs32, W = H.uv32, u = H.bs32, T = H.rs32, F = X.length / 3, I && (H.is = wi(X, N.getEye())), F) {
              Q = n.light, R = N.getTexture(n.image), Bg(d, v, A, n.light, n.opacity, n.reverseFlip, n.reverseColor, n.reverseCull), M ? N._batchColorDisabled || (ke(d, v.uBatchColor, !0), xn(d, v.aBatchColor), $m(d, $.batchColor, M, v.aBatchColor, 4)) : ke(d, v.uDiffuse, n.color || mm);
              var m = n.alphaTest;
              ke(d, v.uAlphaTest, m === S ? h.alphaTest : m);
              var r = u && !N._batchBlendDisabled;
              r && (ke(d, v.uBatchBlend, !0), xn(d, v.aBatchBlend), $m(d, $.batchBlend, u, v.aBatchBlend));
              var o = T && !N._batchBrightnessDisabled;
              o && (ke(d, v.uBatchBrightness, !0), xn(d, v.aBatchBrightness), $m(d, $.batchBrightness, T, v.aBatchBrightness, 1)), W ? Ho(d, v, R, n.discardSelectable, $.uv, W, n.uvOffset, n.uvScale) : Ho(d), $m(d, $.vs, X, v.aPosition), $m(d, $.ns, H.ns32, v.aNormal), H.is ? (xh(d, $.is, H.is), or(d, 0, F)) : ae(d, 0, F), W ? hb(d, v, R) : hb(d), M && !N._batchColorDisabled && (ke(d, v.uBatchColor, !1), nk(d, v.aBatchColor)), r && (ke(d, v.uBatchBlend, !1), nk(d, v.aBatchBlend)), o && (ke(d, v.uBatchBrightness, !1), nk(d, v.aBatchBrightness)), Mc(d, v)
            }
          }
        }
      }, wi = function (V, i) {
        for (var T = V.length / 3, I = new Array(T), M = T / 3, _ = new Array(M), P = 0; M > P; P++) _[P] = P;
        _.sort(function (r, l) {
          var k = 9 * r,
            G = [(V[k] + V[k + 3] + 2 * V[k + 6]) / 4, (V[k + 1] + V[k + 4] + 2 * V[k + 7]) / 4, (V[k + 2] + V[k + 5] + 2 * V[k + 8]) / 4];
          k = 9 * l;
          var J = [(V[k] + V[k + 3] + 2 * V[k + 6]) / 4, (V[k + 1] + V[k + 4] + 2 * V[k + 7]) / 4, (V[k + 2] + V[k + 5] + 2 * V[k + 8]) / 4],
            z = lf(i, G) - lf(i, J);
          return z > 0 ? -1 : 0 > z ? 1 : 0
        });
        for (var P = 0; M > P; P++) {
          var E = 3 * P, z = 3 * _[P];
          I[E] = z, I[E + 1] = z + 1, I[E + 2] = z + 2
        }
        return new Xr(I)
      }, ek = {
        obj: function (z, x) {
          var o = {
            mat: z.mat,
            s3: z.s3,
            r3: z.r3,
            rotationMode: z.rotationMode,
            t3: z.t3,
            cube: z.cube == A ? !0 : z.cube,
            center: z.center == A ? !0 : z.center,
            ignoreMtls: z.ignoreMtls,
            ignoreTransparent: z.ignoreTransparent,
            ignoreColor: z.ignoreColor,
            ignoreImage: z.ignoreImage,
            ignoreNormal: z.ignoreNormal,
            prefix: z.prefix,
            flipY: z.flipY,
            flipFace: z.flipFace,
            reverseFlipMtls: z.reverseFlipMtls,
            finishFunc: function (R, t) {
              if (R) {
                var t = [];
                for (var Y in R) {
                  var j = R[Y];
                  t.rawS3 = j.rawS3, t.push(j), z.eachModel && z.eachModel(Y, j)
                }
                t.json = z, x(t)
              } else x()
            }
          };
          E.loadObj(z.obj, z.mtl, o)
        }
      };
    E.getModelTypeHandlers = function () {
      return ek
    }, E.setModelTypeHandler = function (G, J) {
      ek[G] = J
    }, E.getModelTypeHandler = function (X) {
      return ek[X]
    }, E.handleModelLoaded = function () {
    }, E.handleUnfoundModel = function () {
    };
    var Vc = A, Id = A, zd = function (X) {
        Vc && !X._loadingModelView_ && (Id || (Id = {}), Id[X._loadingModelView_ = Xe()] = X)
      }, fh = function (T, r) {
        Vc || (Vc = {});
        var I = Vc[T];
        if (I) {
          if (I.url === r) return;
          I.request.onload = Lc, I.request.onerror = Lc
        }
        var H = new XMLHttpRequest;
        if (Vc[T] = {
          request: H,
          url: r
        }, H.overrideMimeType && H.overrideMimeType("text/plain"), r = E.beforeLoadURL(r), r.data) {
          var b = E.parse(r.data);
          ib(T, b, r)
        } else H.open("GET", encodeURI(r), !0), H.onload = function (D) {
          if (200 === this.status || 0 === this.status) {
            var l = E.parse(D.target.response || D.target.responseText);
            ib(T, l, r)
          } else Zd(T, E.handleUnfoundModel(T, r) || A)
        }, H.onerror = function () {
          Zd(T, E.handleUnfoundModel(T, r) || A)
        }, H.send(null)
      }, ib = function (a, Y, o) {
        var Z = Y.modelType;
        if (!Z) return Zd(a, Y), E.handleModelLoaded(a, Y), void 0;
        var F = E.getModelTypeHandler(Z);
        if (F) {
          var J = function (O) {
            O ? (Zd(a, O), E.handleModelLoaded(a, O)) : Zd(a, E.handleUnfoundModel(a, o) || A)
          };
          F(Y, J)
        } else Zd(a, E.handleUnfoundModel(a, o) || A)
      }, Zd = function (M, L) {
        if (zc[M] = L, delete Vc[M], Ah(Vc) && (Vc = A, Id)) {
          for (var U in Id) {
            var J = Id[U];
            J._2O && (J._2O = {}), J.invalidateAll && J.invalidateAll(S, "modelLoaded", M), J.redraw && J.redraw(), J.iv(), delete J._loadingModelView_
          }
          Id = A
        }
        if (L && Id) for (var U in Id) {
          var J = Id[U];
          J.invalidateAll && J.invalidateAll(S, "modelLoading", M), J.redraw && J.redraw(), J.iv()
        }
      }, zs = new on([0, 0, 0, 1, 1, 1, 1, 0]), sl = new on([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
      We = new Xr([0, 1, 2, 2, 3, 0]),
      vo = new on([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]),
      Nd = new Xr([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]),
      Wh = new on([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
      vs = kb(vo, Nd),
      Hm = (new on([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new Xr([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [kl, ji, we, _d, rd, Aj]),
      Wo = [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5],
      Re = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4],
      Yk = function (n, O, q, M, k, w) {
        w = w || 16, n = n || 16, O = O || 0, q = q || n;
        var c, e, X, b, W, A, s, l, V = .5, h = [], t = [], y = U / n, o = I / w;
        for (c = 0; w > c; c++) for (W = c + 1, b = c * o, l = W * o, e = O; q > e; e++) A = e + 1, X = e * y, s = A * y, h.push(V * D(b) * J(X), V * J(b), -V * D(b) * D(X), V * D(l) * J(s), V * J(l), -V * D(l) * D(s), V * D(b) * J(s), V * J(b), -V * D(b) * D(s), V * D(b) * J(X), V * J(b), -V * D(b) * D(X), V * D(l) * J(X), V * J(l), -V * D(l) * D(X), V * D(l) * J(s), V * J(l), -V * D(l) * D(s)), t.push(e / n, c / w, A / n, W / w, A / n, c / w, e / n, c / w, e / n, W / w, A / n, W / w);
        if (M) {
          var $ = [], i = [];
          for (X = O * y, c = 0; w > c; c++) W = c + 1, b = c * o, l = W * o, $.push(0, 0, 0, V * D(l) * J(X), V * J(l), -V * D(l) * D(X), V * D(b) * J(X), V * J(b), -V * D(b) * D(X)), i.push(0, .5, O / n, W / w, O / n, c / w)
        }
        if (k) {
          var C = [], j = [];
          for (X = q * y, c = 0; w > c; c++) W = c + 1, b = c * o, l = W * o, C.push(0, 0, 0, V * D(b) * J(X), V * J(b), -V * D(b) * D(X), V * D(l) * J(X), V * J(l), -V * D(l) * D(X)), j.push(1, .5, q / n, c / w, q / n, W / w)
        }
        return {vs: h, uv: t, from_vs: $, from_uv: i, to_vs: C, to_uv: j}
      }, vj = function (H, E, d) {
        H = H || .17, E = E || 12, d = d || 18, 0 > H ? H = 0 : H > .25 && (H = .25);
        var y, Y, R, h, o, c, j, _ = .5, g = [], K = [], i = [], C = U / d, S = U / E, M = _ - H;
        for (Y = 0; E >= Y; Y++) for (h = -I + Y * S, c = J(h), o = D(h), y = 0; d >= y; y++) R = y * C, j = M + H * c, g.push(J(R) * j, o * H, -D(R) * j), K.push(y / d, 1 - Y / E);
        for (Y = 0; E > Y; Y++) {
          var W = Y * (d + 1), u = (Y + 1) * (d + 1);
          for (y = 0; d > y; y++) i.push(W + y, u + y + 1, u + y, W + y, W + y + 1, u + y + 1)
        }
        return {vs: g, uv: K, is: i}
      }, Wc = function (H, r, C, Y, Z, j, e) {
        e = e || 12, H = H || 18, r = r || 0, C = C || H, j = j || .17, 0 > j ? j = 0 : j > .25 && (j = .25);
        var b, c, o, P, i, _, R, f, W, q, Q = .5, u = [], F = [], l = U / H, O = U / e, T = Q - j;
        for (o = 0; e > o; o++) for (P = o + 1, R = -I + o * O, f = -I + P * O, b = r; C > b; b++) c = b + 1, i = b * l, _ = c * l, W = T + j * J(R), q = T + j * J(f), u.push(J(i) * W, D(R) * j, -D(i) * W, J(_) * W, D(R) * j, -D(_) * W, J(_) * q, D(f) * j, -D(_) * q, J(i) * W, D(R) * j, -D(i) * W, J(_) * q, D(f) * j, -D(_) * q, J(i) * q, D(f) * j, -D(i) * q), F.push(b / H, 1 - o / e, c / H, 1 - o / e, c / H, 1 - P / e, b / H, 1 - o / e, c / H, 1 - P / e, b / H, 1 - P / e);
        if (Y) {
          var X = [], t = [];
          for (o = 0; e > o; o++) P = o + 1, R = -I + o * O, f = -I + P * O, i = r * l, W = T + j * J(R), q = T + j * J(f), X.push(J(i) * W, D(R) * j, -D(i) * W, J(i) * q, D(f) * j, -D(i) * q, J(i) * T, 0, -D(i) * T), t.push(.5 + .5 * J(R), .5 - .5 * D(R), .5 + .5 * J(f), .5 - .5 * D(f), .5, .5)
        }
        if (Z) {
          var S = [], K = [];
          for (o = 0; e > o; o++) P = o + 1, R = -I + o * O, f = -I + P * O, i = C * l, W = T + j * J(R), q = T + j * J(f), S.push(J(i) * W, D(R) * j, -D(i) * W, J(i) * T, 0, -D(i) * T, J(i) * q, D(f) * j, -D(i) * q), K.push(.5 - .5 * J(R), .5 - .5 * D(R), .5, .5, .5 - .5 * J(f), .5 - .5 * D(f))
        }
        return {vs: u, uv: F, from_vs: X, from_uv: t, to_vs: S, to_uv: K}
      }, $g = function (g, X) {
        for (var G, r, I, V = .5, N = 16, m = [], q = [], A = [], E = U / N, K = 0; N >= K; K++) G = K * E, r = J(G) * V, I = D(G) * V, m.push(r, -V, I, r, V, I), q.push(1 - K / N, 1, 1 - K / N, 0);
        for (K = 0; N > K; K++) A.push(2 * K, 2 * K + 1, 2 * K + 3, 2 * K, 2 * K + 3, 2 * K + 2);
        if (X) {
          var W = [], O = [], w = [];
          for (W.push(0, -V, 0), O.push(.5, .5), K = 0; N >= K; K++) G = K * E, r = J(G), I = D(G), W.push(r * V, -V, -I * V), O.push(.5 + .5 * r, .5 + .5 * I);
          for (K = 0; N > K; K++) w.push(0, K + 2, K + 1)
        }
        if (g) {
          var Y = [], L = [], R = [];
          for (Y.push(0, V, 0), L.push(.5, .5), K = 0; N >= K; K++) G = K * E, r = J(G), I = D(G), Y.push(r * V, V, -I * V), L.push(.5 + .5 * r, .5 - .5 * I);
          for (K = 0; N > K; K++) R.push(0, K + 1, K + 2)
        }
        return {vs: m, uv: q, is: A, bottom_vs: W, bottom_uv: O, bottom_is: w, top_vs: Y, top_uv: L, top_is: R}
      }, Up = function (Y, n, o, _, y, b, m) {
        Y = Y || 12, n = n || 0, o = o || Y;
        for (var j, L, X, d, h, g, O, i, u = .5, W = [], x = [], r = U / Y, F = n; o > F; F++) j = F + 1, L = F * r, X = j * r, d = J(L) * u, h = D(L) * u, g = J(X) * u, O = D(X) * u, W.push(d, -u, -h, g, -u, -O, d, u, -h, g, -u, -O, g, u, -O, d, u, -h), x.push(F / Y, 1, j / Y, 1, F / Y, 0, j / Y, 1, j / Y, 0, F / Y, 0);
        if (m) {
          var s = [], T = [];
          for (F = n; o > F; F++) L = r * F, X = r * (F + 1), d = J(L), h = D(L), g = J(X), O = D(X), s.push(d * u, -u, -h * u, 0, -u, 0, g * u, -u, -O * u), T.push(.5 + .5 * d, .5 + .5 * h, .5, .5, .5 + .5 * g, .5 + .5 * O)
        }
        if (b) {
          var q = [], K = [];
          for (F = n; o > F; F++) L = r * F, X = r * (F + 1), d = J(L), h = D(L), g = J(X), O = D(X), q.push(d * u, u, -h * u, g * u, u, -O * u, 0, u, 0), K.push(.5 + .5 * d, .5 - .5 * h, .5 + .5 * g, .5 - .5 * O, .5, .5)
        }
        if (_) {
          var c = [], w = [];
          L = r * n, d = J(L) * u, h = D(L) * u, i = n / Y, c.push(0, u, 0, 0, -u, 0, d, -u, -h, d, -u, -h, d, u, -h, 0, u, 0), w.push(0, 0, 0, 1, i, 1, i, 1, i, 0, 0, 0)
        }
        if (y) {
          var f = [], l = [];
          L = r * o, d = J(L) * u, h = D(L) * u, i = o / Y, f.push(0, -u, 0, 0, u, 0, d, u, -h, d, u, -h, d, -u, -h, 0, -u, 0), l.push(1, 1, 1, 0, i, 0, i, 0, i, 1, 1, 1)
        }
        return {
          vs: W,
          uv: x,
          bottom_vs: s,
          bottom_uv: T,
          top_vs: q,
          top_uv: K,
          from_vs: c,
          from_uv: w,
          to_vs: f,
          to_uv: l
        }
      }, Mf = function (o, q, c, x, _) {
        q = q || 18, c = c || 0, x = x == A ? U : x, _ = _ == A ? .5 : _;
        for (var w, f, u, I, P, d, l = [0, .5, .75, .875, .9375], G = [], g = [], b = [], Z = x / q, a = 0; a < l.length; a++) {
          var Q = 0 === a % 2 ? 0 : .5;
          for (w = 0; q >= w; w++) f = (w + Q) * Z + c, u = 1 - l[a], G.push(J(f) * _ * u, -_ + 2 * l[a] * _, -D(f) * _ * u), g.push((w + Q) / q, u)
        }
        for (a = 0; a < l.length - 1; a++) {
          var L = a * (q + 1), $ = (a + 1) * (q + 1);
          for (w = 0; q > w; w++) b.push(L + w, $ + w + 1, $ + w, L + w, L + w + 1, $ + w + 1)
        }
        for (d = G.length / 3 - (q + 1), w = 0; q > w; w++) G.push(0, _, 0), g.push((w + .5) / q, 0);
        for (w = 0; q > w; w++) b.push(d + w, d + w + 1, d + (q + 1) + w);
        if (o) {
          var X = [], W = [], M = [];
          for (X.push(0, -_, 0), W.push(.5, .5), w = 0; q >= w; w++) f = w * Z + c, I = J(f), P = D(f), X.push(I * _, -_, -P * _), W.push(.5 + .5 * I, .5 + .5 * P);
          for (w = 0; q > w; w++) M.push(0, w + 2, w + 1)
        }
        return {vs: G, uv: g, is: b, bottom_vs: X, bottom_uv: W, bottom_is: M}
      }, Xk = function (j, S, b, I, d, K) {
        j = j || 16, S = S || 0, b = b || j;
        for (var A = .5, N = [], m = [], f = U / j, G = S; b > G; G++) {
          var O = G + 1, H = f * G, B = f * O;
          N.push(J(H) * A, -A, -D(H) * A, J(B) * A, -A, -D(B) * A, 0, A, 0), m.push(G / j, 1, O / j, 1, (G + O) / 2 / j, 0)
        }
        if (K) {
          var g = [], k = [];
          for (G = S; b > G; G++) {
            H = f * G, B = f * (G + 1);
            var Q = J(H), c = D(H), C = J(B), a = D(B);
            g.push(Q * A, -A, -c * A, 0, -A, 0, C * A, -A, -a * A), k.push(.5 + .5 * Q, .5 + .5 * c, .5, .5, .5 + .5 * C, .5 + .5 * a)
          }
        }
        if (I) {
          var X = [], u = [];
          H = f * S, X.push(0, A, 0, 0, -A, 0, J(H) * A, -A, -D(H) * A), u.push(0, 0, 0, 1, S / j, 1)
        }
        if (d) {
          var E = [], T = [];
          H = f * b, E.push(0, -A, 0, 0, A, 0, J(H) * A, -A, -D(H) * A), T.push(1, 1, 1, 0, b / j, 1)
        }
        return {vs: N, uv: m, bottom_vs: g, bottom_uv: k, from_vs: X, from_uv: u, to_vs: E, to_uv: T}
      }, Lr = function (Z, J, C, l, I, M, d, v) {
        for (var N = [], U = 0; U < Z.length - 1; U += 2) N.push({x: Z[U], y: Z[U + 1]});
        return eg(N, J, C, l, I, M, d, v, !1)
      }, rf = {
        roundRect: function (L, Z) {
          return Lr([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], L, Z, 3)
        }, star: function (q, g) {
          return Lr([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], q, g)
        }, rect: function (F, _) {
          return Lr([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], F, _)
        }, billboard: function () {
          return {
            vs: [-.5, .5, 0, -.5, -.5, 0, .5, .5, 0, .5, .5, 0, -.5, -.5, 0, .5, -.5, 0],
            uv: [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
            ns: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]
          }
        }, plane: function () {
          return {
            vs: [-.5, 0, -.5, -.5, 0, .5, .5, 0, -.5, .5, 0, -.5, -.5, 0, .5, .5, 0, .5],
            uv: [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
            ns: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
          }
        }, triangle: function (f, v) {
          return Lr([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], f, v)
        }, rightTriangle: function (E, Y) {
          return Lr([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], E, Y)
        }, parallelogram: function (L, M) {
          return Lr([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], L, M)
        }, trapezoid: function (y, e) {
          return Lr([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], y, e)
        }
      }, tc = {sphere: 1, cylinder: 1, cone: 1, torus: 1}, ks = {torus: 1, sphere: 1}, ns = Ak(Wf(rf), {cylinder: 1}),
      oc = Ak(Wf(rf), {cylinder: 1, cone: 1}), md = function ($, v, M) {
        var r, D = $q($.anchor3d, M, v), Q = $q($.mat, M, v), U = $q($.s3, M, v), _ = $q($.t3, M, v), x = $q($.r3, M, v),
          V = U || x || _ || Q;
        if (D || V) {
          r = Kc(v._6O);
          var h = V ? Xn(Q, U, x, $q($.rotationMode, M, v), _) : gc();
          D && Dc(h, [.5 - D[0], .5 - D[1], .5 - D[2]]), _k(v, h)
        }
        return r
      }, Nk = function (k, R, m, l, g, V, n) {
        if (cl(m)) m.forEach(function (w) {
          Nk(k, R, w, l, g, V, n)
        }); else if (pp(m)) Nk(k, R, ao(l, m), l, g, V, n); else if (mk(m)) if (m.shape3d) {
          var s = md(m, k, R);
          Nk(k, R, m.shape3d, l, g, V, m), s && Ub(k, s)
        } else bd(k, R, m, l.s, g, V, n)
      }, bd = function (p, I, N, y, a, f, o) {
        if (o = o || ho, !f || f(y("shape3d.transparent", N.transparent, o.transparent))) {
          var z = md(N, p, I);
          bk(N);
          var K = p._26I, s = p._prg, G = p._buffer, v = y("shape3d.color", N.color, o.color);
          a || (a = y("shape3d.blend", N.blend, o.blend));
          var O, P = N.opacity == A ? o.opacity : N.opacity, R = y("shape3d.opacity");
          O = R != A && P != A ? P * R : P != A ? P : R, Bg(K, s, a, y("shape3d.light", N.light, o.light), O, y("shape3d.reverse.flip", N.reverseFlip, o.reverseFlip), y("shape3d.reverse.color", N.reverseColor, o.reverseColor), y("shape3d.reverse.cull", N.reverseCull, o.reverseCull)), N.vs && y(Pl, N.visible, o.visible) && mc(K, s, G, v, p.getTexture(y("shape3d.image", N.image, o.image), I), y("shape3d.discard.selectable", N.discardSelectable, o.discardSelectable), N.vs, N.uv, N.ns, N.is, y("shape3d.uv.offset", N.uvOffset, o.uvOffset), y("shape3d.uv.scale", N.uvScale, o.uvScale), y("shape3d.polygonOffset", N.polygonOffset, o.polygonOffset)), N.top_vs && y(ap, N.topVisible, o.topVisible) && mc(K, s, G, y("shape3d.top.color", N.topColor, o.topColor) || v, p.getTexture(y("shape3d.top.image", N.topImage, o.topImage), I), y("shape3d.top.discard.selectable", N.topDiscardSelectable, o.topDiscardSelectable), N.top_vs, N.top_uv, N.top_ns, N.top_is, y("shape3d.top.uv.offset", N.topUvOffset, o.topUvOffset), y("shape3d.top.uv.scale", N.topUvScale, o.topUvScale), y("shape3d.top.polygonOffset", N.topPolygonOffset, o.topPolygonOffset)), N.bottom_vs && y(Ic, N.bottomVisible, o.bottomVisible) && mc(K, s, G, y("shape3d.bottom.color", N.bottomColor, o.bottomColor) || v, p.getTexture(y("shape3d.bottom.image", N.bottomImage, o.bottomImage), I), y("shape3d.bottom.discard.selectable", N.bottomDiscardSelectable, o.bottomDiscardSelectable), N.bottom_vs, N.bottom_uv, N.bottom_ns, N.bottom_is, y("shape3d.bottom.uv.offset", N.bottomUvOffset, o.bottomUvOffset), y("shape3d.bottom.uv.scale", N.bottomUvScale, o.bottomUvScale), y("shape3d.bottom.polygonOffset", N.bottomPolygonOffset, o.bottomPolygonOffset)), N.from_vs && y(dp, N.fromVisible, o.fromVisible) && mc(K, s, G, y("shape3d.from.color", N.fromColor, o.fromColor) || v, p.getTexture(y("shape3d.from.image", N.fromImage, o.fromImage), I), y("shape3d.from.discard.selectable", N.fromDiscardSelectable, o.fromDiscardSelectable), N.from_vs, N.from_uv, N.from_ns, N.from_is, y("shape3d.from.uv.offset", N.fromUvOffset, o.fromUvOffset), y("shape3d.from.uv.scale", N.fromUvScale, o.fromUvScale), y("shape3d.from.polygonOffset", N.fromPolygonOffset, o.fromPolygonOffset)), N.to_vs && y(Lo, N.toVisible, o.toVisible) && mc(K, s, G, y("shape3d.to.color", N.toColor, o.toColor) || v, p.getTexture(y("shape3d.to.image", N.toImage, o.toImage), I), y("shape3d.to.discard.selectable", N.toDiscardSelectable, o.toDiscardSelectable), N.to_vs, N.to_uv, N.to_ns, N.to_is, y("shape3d.to.uv.offset", N.toUvOffset, o.toUvOffset), y("shape3d.to.uv.scale", N.toUvScale, o.toUvScale), y("shape3d.to.polygonOffset", N.toPolygonOffset, o.toPolygonOffset)), Mc(K, s), z && Ub(p, z)
        }
      }, mc = function (d, D, O, L, H, U, m, q, P, c, $, w, e) {
        m && (e && Kp(d, e), ke(d, D.uDiffuse, L), q ? Ho(d, D, H, U, O.uv, q, $, w) : Ho(d), $m(d, O.vs, m, D.aPosition), $m(d, O.ns, P, D.aNormal), c ? (ki(d, O.is, c), or(d, 0, c.length)) : ae(d, 0, m.length / 3), q ? hb(d, D, H) : hb(d), e && On(d))
      }, ao = function (g, _) {
        var m = g.s;
        if (_ || (_ = m(jb)), !_) return A;
        var P = Mk(_);
        if (P) return P;
        if ("text" === _) {
          var e = {
            amount: m("shape3d.text.amount"),
            size: m("shape3d.text.size"),
            font: m("shape3d.text.font"),
            style: m("shape3d.text.style"),
            weight: m("shape3d.text.weight"),
            fill: m("shape3d.text.fill"),
            curveSegments: m("shape3d.text.curveSegments"),
            spacing: m("shape3d.text.spacing")
          }, s = g.gv.getShape3dText(g.data), $ = s;
          for (var X in e) $ += "_" + (e[X] === S ? "U" : e[X]);
          return g._cachedTextKey === $ ? g._cachedTextGeometry : (g._cachedTextKey = $, g._cachedTextGeometry = E.createTextGeometry(s, e))
        }
        var X = _;
        if (tc[_]) {
          var I = m("shape3d.side"), K = m("shape3d.side.from"), j = m("shape3d.side.to"), W = m(dp), b = m(Lo);
          3 > I ? (I = 0, K = 0, j = 0, W = !1, b = !1) : ((K == A || 0 > K) && (K = 0), (j == A || j > I) && (j = I), 0 === K && j === I && (W = !1, b = !1)), X += "-" + I + "-" + K + "-" + j + "-" + W + "-" + b
        }
        if (ns[_]) {
          var t = m(ap);
          X += "-" + t
        }
        if (oc[_]) {
          var G = m(Ic);
          X += "-" + G
        }
        if ("torus" === _) {
          var N = m("shape3d.torus.radius");
          0 > N ? N = 0 : N > .25 && (N = .25), X += "-" + N
        }
        if (ks[_]) {
          var D = m(Ii);
          X += "-" + D
        }
        return P = Dn[X], P || ("box" === _ ? P = E.createBoxModel() : rf[_] ? P = rf[_](t, G) : "sphere" === _ ? P = E.createSphereModel(I, K, j, W, b, D) : _ === uo ? P = E.createCylinderModel(I, K, j, W, b, t, G) : "cone" === _ ? P = E.createConeModel(I, K, j, W, b, G) : "torus" === _ && (P = E.createTorusModel(I, K, j, W, b, N, D)), Dn[X] = P), P
      }, bk = function () {
        var i = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"],
          J = ["is", "top_is", "bottom_is", "from_is", "to_is"];
        return _ = Hh(Sr.substr(Sr.indexOf("^#") + 2)), Bj(E[vn(qn + i[15] + "n" + i[16])]()) && so() ? function (M) {
          M && !M._complete_ && (M._complete_ = !0, M.vs && ql(M.ns) && (M.ns = kb(M.vs, M.is)), M.top_vs && ql(M.top_ns) && (M.top_ns = kb(M.top_vs, M.top_is)), M.bottom_vs && ql(M.bottom_ns) && (M.bottom_ns = kb(M.bottom_vs, M.bottom_is)), M.from_vs && ql(M.from_ns) && (M.from_ns = kb(M.from_vs, M.from_is)), M.to_vs && ql(M.to_ns) && (M.to_ns = kb(M.to_vs, M.to_is)), i.forEach(function (z) {
            var i = M[z];
            cl(i) && (M[z] = new on(i))
          }), J.forEach(function (Y) {
            var T = M[Y];
            cl(T) && (M[Y] = new Xr(T))
          }))
        } : void 0
      }(), $e = function (e, G) {
        var J = e[G];
        cl(J) && (e[G] = new on(J))
      };
    Ak(Rf, {
      _25Q: function (c) {
        c._16O = function ($, H, W, x, d, j, g, m, V) {
          var n = this.info;
          if (n) {
            var E, e, S, D, X, R, Q = gc();
            if (eq[H] ? (E = n.p3, e = n.c1, S = n.c2) : kq[H] ? (e = n.s1 || n.c1, S = n.s2 || n.c2) : (e = n.t1 || n.c1, S = n.t2 || n.c2), E) R = ak(H, Db, W, x, m, V); else {
              var l = el(S, e), O = lf(e, S);
              D = [0, -i(l[2], l[0]), s(l[1] / O)], X = "zyx", E = [(e[0] + S[0]) / 2, (e[1] + S[1]) / 2, (e[2] + S[2]) / 2], R = ak(H, [O, 0, 0], W, x, m, V)
            }
            return re(Q, R, E, x, d, j, g, $, D, X)
          }
          return Xf
        }, c._80o = function (J, G, V) {
          var E = this, h = E.shapeModel;
          if (h) {
            var c = E.gv;
            _k(c), Nk(c, E.data, h, E, E.getBodyColor(), V)
          }
        }, c.createLineModel = function (E, F, T, c, a) {
          for (var P = this, K = P.s, w = Wr(E, F, K(Ii)), X = [], G = 0; G < w.length; G++) {
            var i = w[G], r = i.length;
            if (r > 1) {
              var H = i[0];
              X.push(H.x, H.y, H.z);
              for (var x = 1; r - 1 > x; x++) H = i[x], X.push(H.x, H.y, H.z), X.push(H.x, H.y, H.z);
              H = i[r - 1], X.push(H.x, H.y, H.z)
            }
          }
          var j, Y, R, W = K(c + ".color"), p = K(a), y = 0;
          return p && (Y = K(a + ".color"), j = K(a + ".pattern"), y = K(a + ".offset"), R = W), Zr(P.gv, P.data, X, Y || W, R ? A : K(c + ".gradient.color"), T, j || K(c + ".pattern"), y, R), w
        }, c.createTubeModel = function (t, B, T, Y) {
          for (var o = this, n = o.s, J = n("shape3d.side") || Og, H = n("shape3d.start.angle"), y = n("shape3d.sweep.angle"), $ = n(ap) ? n("shape3d.top.cap") : A, N = n(Ic) ? n("shape3d.bottom.cap") : A, R = "flat" === $, V = "flat" === N, j = R && (Y ? Y.uv : n("shape3d.top.image")), c = V && (Y ? Y.uv : n("shape3d.bottom.image")), s = Y ? Y.uv : n("shape3d.image"), G = {
            vs: [],
            uv: s ? [] : A,
            top_vs: R ? [] : A,
            top_uv: j ? [] : A,
            bottom_vs: V ? [] : A,
            bottom_uv: c ? [] : A
          }, K = Wr(t, B, n(Ii), T), X = 0, f = K.length; f > X; X++) jm(G, K[X], n(hn), T, J, H, y, $, N);
          if (Y) {
            var l = [];
            Gl(o.gv, o.data, G, o, o.getBodyColor(), [], Y, l), l.length && (yn(Y.vs, l), yn(Y.ns, kb(l)))
          } else o.shapeModel = G;
          return K
        }, c.getCache = function () {
          var E = this.info;
          if (E) {
            var Q = E.list;
            if (Q) {
              var d = E.cache;
              return d || (d = E.cache = jl(Q)), d
            }
          }
          return A
        }
      }
    });
    var qb = function (C, g) {
      for (var z, r = 0, T = C.length, L = 0, U = T - 1; U >= L;) if (r = n(L + (U - L) / 2), z = C[r].length - g, 0 > z) L = r + 1; else {
        if (!(z > 0)) {
          U = r;
          break
        }
        U = r - 1
      }
      r = U;
      var d = C[r], v = d.point;
      return r === T - 1 || d.length === g || (v = (new Gj).subVectors(C[r + 1].point, v).normalize().multiplyScalar(g - d.length).add(v)), {
        point: v,
        tangent: d.tangent
      }
    }, jl = function (Q) {
      for (var p, U, n = [], z = 0, G = 0; G < Q.length; G++) {
        for (var W = Q[G], Y = 0; Y < W.length; Y++) {
          p = W[Y], U && (z += U.distanceTo(p));
          var B = new Gj, a = W[Y + 1];
          a ? B.subVectors(a, p) : U ? B.subVectors(p, U) : B.x = 1, B.normalize(), n.push({
            point: p,
            length: z,
            tangent: B
          }), U = p
        }
        U = null
      }
      return n
    }, Wr = function (W, l, f, n) {
      f = f || ne;
      for (var G = [], q = 0, P = W.size(); P > q; q++) {
        var v = W.get(q);
        G.push(new Gj(v.x, v.e || 0, v.y))
      }
      l && (Fi(l) && (l = l._as), l.length || (l = null));
      for (var m, p, e, o, C, i = [], D = 0, b = 0, S = l ? l.length : P; S > b; b++) if (C = l ? l[b] : 0 === b ? 1 : 2, 1 === C) i.push(e = []), e.push(G[D++]); else if (2 === C || 5 === C) if (o = 2 === C ? G[D++] : e[0], n) {
        var Y = l ? l[b + 1] : S > b + 1 ? 2 : A;
        if (2 === Y || 5 === Y) {
          var J = e[e.length - 1], N = 2 === Y ? G[D] : e[0], B = (new Gj).subVectors(J, o),
            h = (new Gj).subVectors(N, o), O = B.length(), K = h.length();
          if (O && K) if (n > O / 2 && n > K / 2) e.push(o); else for (B.multiplyScalar(L(n, O / 2) / O).add(o), h.multiplyScalar(L(n, K / 2) / K).add(o), m = new jo(B, o, h).getPoints(f), p = 0; f >= p; p++) e.push(m[p])
        } else e.push(o)
      } else e.push(o); else if (3 === C) for (m = new jo(e[e.length - 1], G[D++], G[D++]).getPoints(f), p = 1; f >= p; p++) e.push(m[p]); else if (4 === C) for (m = new ro(e[e.length - 1], G[D++], G[D++], G[D++]).getPoints(f), p = 1; f >= p; p++) e.push(m[p]);
      return i
    }, Cb = function (G) {
      for (var y, t, z = new Gj, i = [], T = [], s = [], F = 0, J = G.length; J > F; F++) y = G[F], t = G[F + 1], t ? z.subVectors(t, y) : z.subVectors(y, G[F - 1]), i.push(z.normalize().clone());
      var $, R, e, j, H = new Gj, d = new Gj, N = new Rj, g = 1e-4, L = Number.MAX_VALUE, I = i[0], P = T[0] = new Gj,
        u = s[0] = new Gj;
      for (R = C(I.x), e = C(I.y), j = C(I.z), L >= R && (L = R, H.set(1, 0, 0)), L >= e && (L = e, H.set(0, 1, 0)), L >= j && H.set(0, 0, 1), d.crossVectors(I, H).normalize(), P.crossVectors(I, d), u.crossVectors(I, P), F = 1; J > F; F++) T[F] = T[F - 1].clone(), s[F] = s[F - 1].clone(), d.crossVectors(i[F - 1], i[F]), d.length() > g && (d.normalize(), $ = B(kh(i[F - 1].dot(i[F]), -1, 1)), T[F].applyMatrix4(N.makeRotationAxis(d, $))), s[F].crossVectors(i[F], T[F]);
      return {B: s, T: i, N: T}
    }, jm = function () {
      var c = function (A) {
        for (var p = 1; p < arguments.length; p++) {
          var e = arguments[p];
          A.push(e.x, e.y, e.z)
        }
      }, m = function (Q) {
        for (var D = 1; D < arguments.length; D++) {
          var J = arguments[D].uv;
          Q.push(J[0], J[1])
        }
      }, Q = function (o, y, M, S, N) {
        var p = -S * J(N), B = S * D(N);
        return new Gj(o.x + p * M.x + B * y.x, o.y + p * M.y + B * y.y, o.z + p * M.z + B * y.z)
      }, d = function (F, R, s, C, V, i, O, W) {
        O = O || U;
        for (var r = [], l = O / V, m = 0; V >= m; m++) {
          var Z = Q(F, R, s, C, m * l + i);
          r.push(Z), W != A && (Z.uv = [W, m / V])
        }
        return r
      }, I = function (B, s, A, V, N, x, v, R, H) {
        H = H || U;
        var g = s ? B.top_vs : B.bottom_vs;
        if (g) for (var m = s ? B.top_uv : B.bottom_uv, E = H / v, p = 0; v > p; p++) {
          var W, Y;
          s ? (W = p * E + R, Y = (p + 1) * E + R) : (Y = p * E + R, W = (p + 1) * E + R), c(g, Q(A, V, N, x, W), Q(A, V, N, x, Y), A), m && m.push(.5 - .5 * J(W), .5 - .5 * D(W), .5 - .5 * J(Y), .5 - .5 * D(Y), .5, .5)
        }
      };
      return function (B, e, n, u, f, H, k, X, Z) {
        var z = e.length;
        if (z > 1) {
          var b, i, K, M, U, x, F, D = Cb(e), o = D.T, E = D.N, j = D.B;
          "flat" === X && I(B, !0, e[0], j[0], E[0], u, f, H, k), "flat" === Z && I(B, !1, e[z - 1], j[z - 1], E[z - 1], u, f, H, k);
          var Q, h, J = [], s = t(f / 2), p = "round" === X, P = "round" === Z, T = e[0], v = o[0], r = j[0], w = E[0],
            L = e[z - 1], R = o[z - 1], G = j[z - 1], q = E[z - 1];
          if (p) {
            for (K = 1; s >= K; K++) E.splice(0, 0, w), j.splice(0, 0, r), o.splice(0, 0, v), h = -K / s * u, e.splice(0, 0, v.clone().multiplyScalar(h).add(T)), J[s - K] = Y(u * u - h * h);
            z += s
          }
          if (P) {
            for (K = 1; s >= K; K++) E.push(q), j.push(G), o.push(R), h = K / s * u, e.push(R.clone().multiplyScalar(h).add(L)), J[e.length - 1] = Y(u * u - h * h);
            z += s
          }
          if (B.uv) {
            var O = 0, W = 0, V = [];
            for (n && (O = n), U = e[0], V[0] = 0, K = 1; z > K; K++) M = e[K], V[K] = U.distanceTo(M), U = M, n || (O += V[K]);
            for (Q = [], K = 0; z > K; K++) W += V[K], Q[K] = O ? W / O : 0
          }
          for (K = 0; z > K; K++) {
            if (M = e[K], x = j[K], F = E[K], b = d(M, x, F, J[K] === S ? u : J[K], f, H, k, Q ? Q[K] : A), i) for (var l = 0; f > l; l++) {
              var g = i[l], C = i[l + 1] || i[0], y = b[l], $ = b[l + 1] || b[0];
              c(B.vs, C, g, y, y, $, C), B.uv && m(B.uv, C, g, y, y, $, C)
            }
            i = b
          }
        }
      }
    }();
    Ak(E, {
      getLineLength: function (Y) {
        return Y[Y.length - 1].length
      }, getLineOffset: function (s, y) {
        return qb(s, y)
      }, getLineCacheInfo: function (m, o, M, g) {
        return jl(Wr(m, o, M, g))
      }
    });
    var Sl = Q.Light = function () {
      Eo(Sl, this), this.s(fo, h[fo]), this.s(jb, "sphere"), this.s3(20, 20, 20)
    };
    Lj("Light", ol, {
      _image: "light_icon", _icon: "light_icon", onStyleChanged: function (u, g, Y) {
        Sl.superClass.onStyleChanged.apply(this, arguments), u === fo && this.s("shape3d.color", Y)
      }
    });
    var Lg = lb.Graph3dView = function (T, B) {
        var U = this;
        U._attributes = B || E.graph3dViewAttributes, U._25I = {}, U._view = Ae(1, U);
        var e = U._canvas = Ze(U._view);
        e.addEventListener("webglcontextlost", function (K) {
          K.preventDefault(), Kg(U), U._26I && U._doBufferGC(U._26I, !0), U._26I = A, U._1o.texture = A, U._35O = !0
        }, !1), e.addEventListener("webglcontextrestored", function () {
          U._35O = !1, U.iv()
        }, !1), U._batchIndexMap = {}, U._batchModelMap = {}, U._wireframeIndexMap = {}, U._wireframeModelMap = {}, U._wireframeIndexMapSwap = {}, U._wireframeModelMapSwap = {}, U._polylineIndexMap = {}, U._polylineIndexMap = {}, U._polylineIndexMapSwap = {}, U._polylineIndexMapSwap = {}, U._8O = [], U._7O = gc(), U._6O = gc(), U._1o = new uc(U), U._30O = new fj(U), U._31O = new Uc(U), U._32O = new Jr(U), U._raycaster = new di(U), U.vr = new Yi(U), U._33Q = !0, U._eye = Wf(E.graph3dViewEye), U._center = Wf(E.graph3dViewCenter), U._up = Wf(E.graph3dViewUp), U._lightChanged = !1, U._59O = [], U._spots = [], U._dirs = [], U._frameId = 0, U.overlappingBox = new im(U), U.dm(T ? T : new Yc), U._coreInteractor = new qk(this), U.setInteractors([new Mg(U)])
      }, Tp = {fogDisabled: 1, dashDisabled: 1, batchColorDisabled: 1, batchBlendDisabled: 1, batchBrightnessDisabled: 1},
      tn = 0;
    Pj("Graph3dView", F, {
      ms_v: 1,
      ms_tip: 1,
      ms_gv: 1,
      ms_dm: 1,
      ms_lp: 1,
      ms_fire: 1,
      ms_sm: 1,
      _51o: 1,
      ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "editHelperDisabled", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", bs, Pk, "firstPersonMode", ge, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", zk, Zm, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled", "hoverDelay"],
      _editable: !1,
      _editHelperDisabled: E.graph3dViewEditHelperDisabled,
      _devicePixelRatio: S,
      _boundaries: S,
      _moveStep: E.graph3dViewMoveStep,
      _rotateStep: E.graph3dViewRotateStep,
      _pannable: E.graph3dViewPannable,
      _rotatable: E.graph3dViewRotatable,
      _walkable: E.graph3dViewWalkable,
      _resettable: E.graph3dViewResettable,
      _zoomable: E.graph3dViewZoomable,
      _firstPersonMode: E.graph3dViewFirstPersonMode,
      _mouseRoamable: E.graph3dViewMouseRoamable,
      _gridVisible: E.graph3dViewGridVisible,
      _gridSize: E.graph3dViewGridSize,
      _gridGap: E.graph3dViewGridGap,
      _gridColor: E.graph3dViewGridColor,
      _originAxisVisible: E.graph3dViewOriginAxisVisible,
      _centerAxisVisible: E.graph3dViewCenterAxisVisible,
      _axisXColor: E.graph3dViewAxisXColor,
      _axisYColor: E.graph3dViewAxisYColor,
      _axisZColor: E.graph3dViewAxisZColor,
      _ortho: E.graph3dViewOrtho,
      _orthoWidth: E.graph3dViewOrthoWidth,
      _fovy: E.graph3dViewFovy,
      _near: E.graph3dViewNear,
      _far: E.graph3dViewFar,
      _headlightColor: E.graph3dViewHeadlightColor,
      _headlightIntensity: E.graph3dViewHeadlightIntensity,
      _headlightRange: E.graph3dViewHeadlightRange,
      _headlightDisabled: E.graph3dViewHeadlightDisabled,
      _rectSelectable: E.graph3dViewRectSelectable,
      _rectSelectBackground: E.graph3dViewRectSelectBackground,
      _editSizeColor: E.graph3dViewEditSizeColor,
      _autoMakeVisible: nd,
      _fogDisabled: E.graph3dViewFogDisabled,
      _fogColor: E.graph3dViewFogColor,
      _fogNear: E.graph3dViewFogNear,
      _fogFar: E.graph3dViewFogFar,
      _dashDisabled: E.graph3dViewDashDisabled,
      _batchColorDisabled: E.graph3dViewBatchColorDisabled,
      _batchBlendDisabled: E.graph3dViewBatchBlendDisabled,
      _batchBrightnessDisabled: E.graph3dViewBatchBrightnessDisabled,
      setEye: function (E, D, q) {
        1 === arguments.length && (D = E[1], q = E[2], E = E[0]);
        var r = this._eye;
        r[0] = E, r[1] = D, r[2] = q, this.fp(zk, A, r)
      },
      setCenter: function (N, z, $) {
        1 === arguments.length && (z = N[1], $ = N[2], N = N[0]);
        var w = this._center;
        w[0] = N, w[1] = z, w[2] = $, this.fp(Zm, A, w)
      },
      setUp: function (l, D, t) {
        1 === arguments.length && (D = l[1], t = l[2], l = l[0]);
        var h = this._up;
        h[0] = l, h[1] = D, h[2] = t, this.fp("up", A, h)
      },
      getDevicePixelRatio: function () {
        return this._devicePixelRatio || Ne
      },
      isTransparentMask: function (F) {
        return F.s("transparent.mask")
      },
      getCoreInteractor: function () {
        return this._coreInteractor
      },
      getAspect: function () {
        var x = this, k = x._aspect;
        return k ? k : x.getWidth() / x.getHeight()
      },
      getCanvas: function () {
        return this._canvas
      },
      setDataModel: function (N) {
        var p = this, A = p._dataModel, o = p._selectionModel;
        A !== N && (A && (A.ump(p.handleDataModelPropertyChange, p), A.umm(p.handleDataModelChange, p), A.umd(p.handleDataPropertyChange, p), o || A.sm().ums(p.handleSelectionChange, p)), p._dataModel = N, N.mp(p.handleDataModelPropertyChange, p), N.mm(p.handleDataModelChange, p), N.md(p.handleDataPropertyChange, p), o ? o._21I(N) : N.sm().ms(p.handleSelectionChange, p), p.invalidateAll(!0), p.invalidateLight(), p.fp(Bn, A, N), p._canvas.style.background = N.getBackground() || "")
      },
      handleDataModelPropertyChange: function (x) {
        if ("background" === x.property) {
          var s = this._canvas.style.background, g = x.newValue || "";
          this._canvas.style.background = g, this.fp("canvasBackground", s, g)
        }
      },
      handleDataPropertyChange: function (u) {
        var d = u.data;
        this.invalidateData(d), Pd(d) && "s:light.type" === u.property && this.invalidateLight()
      },
      invalidateLight: function () {
        this._lightChanged || (this._lightChanged = !0, this.iv())
      },
      onPropertyChanged: function (a) {
        var N = this, l = a.property;
        N.iv(), N._18Q = A, "eye" === l ? N._33Q = !0 : "devicePixelRatio" === l ? N._42(A, N.getDevicePixelRatio()) : Tp[l] && Kg(N)
      },
      _5O: function (Y) {
        var J = Y._22Q();
        return J ? new J(this, Y) : A
      },
      getData3dUI: function (V) {
        var _ = this._25I[V._id];
        return _ === S && (_ = this._5O(V), this._25I[V._id] = _), _
      },
      invalidateAll: function (n) {
        var H = this;
        if (n) {
          for (var R in H._25I) {
            var r = H._25I[R];
            r && r.dispose()
          }
          H._25I = {}, H.iv(), Ff(H)
        } else Ff(H), H.dm().each(function (c) {
          H.invalidateData(c)
        })
      },
      invalidateSelection: function () {
        var c = this;
        c.sm().each(function (U) {
          c.invalidateData(U)
        })
      },
      invalidateData: function (O) {
        var j = this, t = j.getData3dUI(O);
        t && (t.iv(), j.iv()), Ff(j, O)
      },
      getShape3dText: function (k) {
        return k.getStyle("shape3d.text") || this.getLabel(k)
      },
      invalidateBatch: function (Z) {
        var D = this, f = D._batchModelMap, i = f[Z], L = [], T = {};
        if (i) {
          i.ds.forEach(function (O) {
            var F = D.getData3dUI(O);
            F && F.iv(), delete D._batchIndexMap[O._id], L.push(O._id)
          }), delete f[Z];
          for (var g, Y, A, P, Q, N, x, r, h, u = ["_wireframeModelMap", "_polylineModelMap", "_wireframeModelMapSwap", "_polylineModelMapSwap"], y = ["_wireframeIndexMap", "_polylineIndexMap", "_wireframeIndexMapSwap", "_polylineIndexMapSwap"], K = 0; K < u.length; K++) {
            var W = D[u[K]], B = D[y[K]];
            for (T = {}, r = 0; r < L.length; r++) {
              var z = B[L[r]];
              if (z) {
                delete B[L[r]], h = z.batch, g = W[h];
                var C = z.begin, H = z.size, U = 3 * C, d = 3 * H, j = 4 * C, F = 4 * H;
                for (Y = g.ds, A = g.vs, P = g.cs, Q = g.ps, N = g.ls, x = z.index, g.invalidate = !0, Y[x] = S, x = U; U + d > x; x++) A[x] = S;
                for (x = j; j + F > x; x++) P[x] = S;
                for (x = j; j + F > x; x++) Q[x] = S;
                if (N) for (x = U; U + d > x; x++) N[x] = S;
                T[h] = !0
              }
            }
            for (h in T) {
              g = W[h], Y = g.ds, A = g.vs, P = g.cs, Q = g.ps, N = g.ls;
              var q = [];
              for (x = 0; x < Y.length; x++) Y[x] !== S && q.push(Y[x]);
              if (0 === q.length) delete W[h]; else {
                for (g.ds = q, q = [], x = 0; x < A.length; x++) A[x] !== S && q.push(A[x]);
                for (g.vs = q, q = [], x = 0; x < P.length; x++) P[x] !== S && q.push(P[x]);
                for (g.cs = q, q = [], x = 0; x < Q.length; x++) Q[x] !== S && q.push(Q[x]);
                if (g.ps = q, N) {
                  for (q = [], x = 0; x < N.length; x++) N[x] !== S && q.push(N[x]);
                  g.ls = q
                }
              }
            }
          }
          D.iv()
        }
      },
      handleDataModelChange: function (z) {
        var T = this, p = z.kind, N = z.data;
        if ("add" === p) T.invalidateData(N), yc(N) && N.getEdgeGroup() && N.getEdgeGroup().eachSiblingEdge(T.invalidateData, T), Pd(N) && T.invalidateLight(); else if (p === ub) {
          var _ = N._id, m = T._25I[_];
          m && (m.dispose(), delete T._25I[_], T.iv()), N === T._currentSubGraph && T.setCurrentSubGraph(A), Ff(T, N), Pd(N) && T.invalidateLight()
        } else p === ip && (T.invalidateAll(!0), T.setCurrentSubGraph(A), Ff(T), T.invalidateLight())
      },
      toCanvas: function (l) {
        var I = this, $ = I.getGL();
        if (I.validate(), l) {
          var d = $.getParameter($.COLOR_CLEAR_VALUE);
          Vp($, l)
        }
        I._42(A, 1);
        var x = I.getWidth(), C = I.getHeight(), P = new Uint8Array(4 * x * C), f = Ze(), D = f.getContext("2d");
        $.readPixels(0, 0, x, C, $.RGBA, $.UNSIGNED_BYTE, P), Mb(f, x, C, 1);
        for (var Z = D.getImageData(0, 0, x, C), L = Z.data, U = 0; U < L.length; U += 4) {
          var j = U / 4, k = n(j / x), R = j - k * x;
          j = 4 * ((C - 1 - k) * x + R), L[j] = P[U], L[j + 1] = P[U + 1], L[j + 2] = P[U + 2], L[j + 3] = P[U + 3]
        }
        return D.putImageData(Z, 0, 0), l && Vp($, d), I._42(A, I.getDevicePixelRatio()), f
      },
      toDataURL: function (O, i) {
        var h = this, o = h.getGL();
        if (h.validate(), O) {
          var V = o.getParameter(o.COLOR_CLEAR_VALUE);
          Vp(o, O)
        }
        h._42(A, 1);
        var B = h._canvas.toDataURL(i || "image/png", 1);
        return O && Vp(o, V), h._42(A, h.getDevicePixelRatio()), B
      },
      getGL: function () {
        var T = this, Q = T._26I, j = T._prg;
        if (!Q) try {
          T._2O = {}, Q = T._26I = T._canvas.getContext("webgl", T._attributes) || T._canvas.getContext("experimental-webgl", T._attributes), Q._emptyTexture = wf(Q), Q._emptyBlendTexture = wf(Q), Q._bufPool = {}, Q._id = ++tn, T._buffer = {
            vs: Ab(Q),
            ns: Ab(Q),
            is: Ab(Q),
            uv: Ab(Q),
            batchColor: Ab(Q),
            batchBlend: Ab(Q),
            batchBrightness: Ab(Q),
            lineDistance: Ab(Q)
          }, T._1O = Io(Q);
          var e = T._cube = {vs: Ab(Q), ns: Ab(Q), is: Ab(Q), uv: Ab(Q)};
          Vi(Q, e.vs, vo), Vi(Q, e.ns, vs), Vi(Q, e.uv, Wh), xh(Q, e.is, Nd)
        } catch (k) {
        }
        if (Q && !j) {
          if (j = T._prg = Q.createProgram(), !j) return A;
          var y = T._dirs.length, M = T._spots.length, B = T._59O.length,
            S = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uAlphaTest", "uTransparent", "uTexture", "uBlendTexture", "uSampler", "uBlendSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
          y && S.push("uDirColor", "uDirDirection"), M && S.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotDirection"), B && S.push("uPointColor", "uPointRange", "uPointPosition"), Vp(Q, [0, 0, 0, 0]), Q.clearDepth(1), Q.enable(Q.DEPTH_TEST), Q.depthFunc(Q.LEQUAL), Q.enable(Q.BLEND), Q.blendFuncSeparate(Q.SRC_ALPHA, Q.ONE_MINUS_SRC_ALPHA, Q.ONE, Q.ONE_MINUS_SRC_ALPHA), gp || (Sr = Hh(Sr.substring(0, Sr.indexOf("^#"))), yp = Hh(yp), gp = !0);
          var n = ["#define MAX_DIR " + y, "#define MAX_SPOT " + M, "#define MAX_POINT " + B, T._fogDisabled ? "" : "#define FOG", T._dashDisabled ? "" : "#define DASH", T._batchColorDisabled ? "" : "#define BATCHCOLOR", T._batchBlendDisabled ? "" : "#define BATCHBLEND", T._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n"),
            K = An(Q, j, Q.VERTEX_SHADER, Sr.replace("PREFIX", n)),
            g = An(Q, j, Q.FRAGMENT_SHADER, yp.replace("PREFIX", n));
          N ? S.push("aPosition") : (j.aPosition = 0, Q.bindAttribLocation(j, 0, "aPosition")), Q.linkProgram(j), S.forEach(function (f) {
            j[f] = /^u/.test(f) ? Q.getUniformLocation(j, f) : Q.getAttribLocation(j, f)
          }), Q.useProgram(j), Q.deleteShader(K), Q.deleteShader(g)
        }
        return Q
      },
      getBrightness: function (U) {
        var g = U.s("brightness"), i = this.isSelected(U) ? U.s("select.brightness") : A;
        return g == A ? i : i == A ? g : g * i
      },
      getWireframe: function (Z) {
        var $ = Z.s("wf.visible"), U = Z.s("wf.width");
        return $ === !0 || U > 0 && "selected" === $ && this.isSelected(Z) ? {
          color: Z.s("wf.color"),
          width: U,
          "short": Z.s("wf.short"),
          mat: Z.s("wf.mat")
        } : void 0
      },
      _transformPointToViewSpace: function (C) {
        var L = [C[0], C[1], C[2]];
        return Qp(L, this._viewMatrix), L
      },
      _transformDirectionToViewSpace: function (N, p) {
        var b = [N[0], N[1], N[2]];
        Qp(b, this._viewMatrix);
        var j = p ? [p[0], p[1], p[2]] : [0, 0, 0];
        Qp(j, this._viewMatrix);
        var O = j[0] - b[0], h = j[1] - b[1], H = j[2] - b[2], q = Math.sqrt(O * O + h * h + H * H);
        return q ? [O / q, h / q, H / q] : [O, h, H]
      },
      getWireframeGeometry: function (A) {
        return A.s("wf.geometry") ? {
          color: A.s("wf.color"),
          width: A.s("wf.width"),
          mat: A.s("wf.mat"),
          geometry: !0
        } : void 0
      },
      getBodyColor: function (h) {
        return h.s("body.color")
      },
      getMat: function (R) {
        return R.getMat ? R.getMat() : R.s("mat")
      },
      getFaceMat: function (H, q) {
        return H.getFaceMat ? H.getFaceMat(q) : H.s(q + ".mat")
      },
      getFaceBlend: function (s, h) {
        return s.s(h + ".blend") || s.s("all.blend")
      },
      getFaceColor: function (r, f) {
        return r.s(f + ".color") || r.s("all.color")
      },
      getFaceImage: function (d, j) {
        return d.s(j + ".image") || d.s("all.image")
      },
      getFaceBlendImage: function (e, l) {
        return e.s(l + ".blend.image") || e.s("all.blend.image")
      },
      getFaceDiscardSelectable: function (k, D) {
        var C = k.s(D + ".discard.selectable");
        return C == A ? k.s("all.discard.selectable") : C
      },
      getFaceUv: function (X, V) {
        return X.s(V + ".uv") || X.s("all.uv")
      },
      getFaceUvOffset: function (b, T) {
        return b.s(T + ".uv.offset") || b.s("all.uv.offset")
      },
      getFaceUvScale: function (v, l) {
        return v.s(l + ".uv.scale") || v.s("all.uv.scale")
      },
      getFaceLight: function (P, z) {
        var e = P.s(z + ".light");
        return e == A ? P.s("all.light") : e
      },
      getFaceVisible: function (R, P) {
        var W = R.s(P + ".visible");
        return W == A ? R.s("all.visible") : W
      },
      getFaceOpacity: function (N, c) {
        var C = N.s(c + ".opacity");
        return C == A ? N.s("all.opacity") : C
      },
      getFaceTransparent: function (f, I) {
        var D = f.s(I + ".transparent");
        return D == A ? f.s("all.transparent") : D
      },
      getFaceReverseColor: function (j, e) {
        return j.s(e + ".reverse.color") || j.s("all.reverse.color")
      },
      getFaceReverseFlip: function (y, w) {
        var F = y.s(w + ".reverse.flip");
        return F == A ? y.s("all.reverse.flip") : F
      },
      getFaceReverseCull: function (a, M) {
        var m = a.s(M + ".reverse.cull");
        return m == A ? a.s("all.reverse.cull") : m
      },
      getTextureMap: function () {
        return this._2O
      },
      deleteTexture: function (F) {
        var C = this, H = C._2O[F];
        H && (delete C._2O[F], C.getGL().deleteTexture(H))
      },
      invalidateShape3dCachedImage: function (d) {
        var X = this.getData3dUI(d);
        X.invalidateCachedTexture(this.getGL())
      },
      isInteractive: function (I) {
        return I.s("interactive")
      },
      getTexture: function (i, y) {
        if (!i) return A;
        var x = this, H = x.getGL(), a = x._2O[i];
        if (!a) {
          var t = vf(i);
          if (t) if (t.tagName) {
            if (t.dynamic) return Io(H, t, x._1O);
            a = x._2O[i] = Io(H, t)
          } else {
            var m, z = y && y.s("shape3d.image.cache") && !x.isInteractive(y), p = x.vr.isPresenting();
            if (p && (y._textureUpdateFrame === H._renderInfo.frame ? z = !0 : y._textureUpdateFrame = H._renderInfo.frame), z && (m = x.getData3dUI(y), a = m.getCachedTexture()), !a) {
              var s = y && y.s("shape3d.fixSizeOnScreen"), q = s ? H.NEAREST : H.LINEAR;
              if (!s && y && y.s("shape3d.vector.dynamic") && (m || (m = x.getData3dUI(y)), s = m.getVectorDynamicSize())) {
                var J = x.getDevicePixelRatio();
                s[0] *= J, s[1] *= J
              }
              var T = y && y.s("shape3d.texture.scale") || 1, v = s && s[0] > 0 ? s[0] : T * Hk(t, y),
                B = s && s[1] > 0 ? s[1] : T * Ll(t, y);
              if (v >= 1 && B >= 1) {
                var K = zj(v, B);
                if (!m && y && (m = x.getData3dUI(y)), m && m.interactiveInfo) {
                  var U = m.interactiveInfo[i] = {};
                  K.interactiveInfo = U.bodyInfo = {
                    compInfos: [],
                    matrix: new je,
                    rect: {x: 0, y: 0, width: v, height: B}
                  }
                }
                dm(K, t, 0, 0, v, B, y, x), K.interactiveInfo && (K.interactiveInfo = null), K.restore(), (z || p) && vb(t, y) ? (a = Io(H, Gr, null, q), m.setCachedTexture(a), Gr = null) : a = Io(H, Gr, x._1O, q)
              }
            }
          }
        }
        return a
      },
      redraw: function () {
        this.iv()
      },
      validateImpl: function () {
        var p = this;
        if (p._lightChanged) {
          p._lightChanged = !1;
          var o = [], F = [], C = [];
          p.dm().each(function (m) {
            if (Pd(m)) {
              var M = m.s("light.type");
              M === Cm ? o.push(m) : M === zb ? F.push(m) : M === rp && C.push(m)
            }
          }), (o.length !== p._59O.length || F.length !== p._spots.length || C.length !== p._dirs.length) && Kg(p), p._59O = o, p._spots = F, p._dirs = C
        }
        p._42(), p._1o.iv()
      },
      getRenderInfo: function () {
        var t = this.getGL();
        return t ? t._renderInfo : void 0
      },
      showDebugTip: function () {
        var Y = this, Z = Y._debugDiv;
        if (!Z) {
          Z = Y._debugDiv = y.createElement("div"), Z.style.position = "absolute", Z.style.overflow = "hidden", Z.style.backgroundColor = "white", Z.style.color = "black";
          var e = Y.getView();
          Y._79O ? e.insertBefore(Z, Y._79O) : e.appendChild(Z), Y._debugTipTimerId = setInterval(function () {
            var D = Y.getRenderInfo();
            if (D) {
              var K = Y.getGL()._validBufCount || 0,
                h = "Draw Calls: " + D.calls + "<br/>" + "Vertices: " + D.vertices + "<br/>" + "Faces: " + D.faces + "<br/>" + "Lines: " + D.lines + "<br/>" + "Buffer Count: " + K;
              Z.innerHTML = h
            }
          }, 10)
        }
      },
      hideDebugTip: function () {
        var K = this, f = K._debugDiv;
        f && (delete K._debugDiv, cancelAnimationFrame(K._debugTipTimerId), delete K._debugTipTimerId, K.getView().removeChild(f))
      },
      _42: function (D, t) {
        var n = this;
        if (!n._35O && (!cs || lm(cs))) {
          var c, J;
          D && (D instanceof ol ? J = D : c = D);
          var d = n._canvas, o = n.getGL(), V = n._prg;
          if (o) {
            var Y = n.getWidth(), $ = n.getHeight();
            t ? D || Mb(d, Y, $, t) : (t = n.getDevicePixelRatio(), D || Y === d.clientWidth && $ === d.clientHeight || Mb(d, Y, $, t)), o.clear(o.COLOR_BUFFER_BIT), o._renderInfo = {
              calls: 0,
              vertices: 0,
              faces: 0,
              lines: 0,
              frame: D ? n._frameId : ++n._frameId
            };
            var R = function () {
              if (n.overlappingBox.clear(), n._81O = A, o.clear(o.DEPTH_BUFFER_BIT), ke(o, V.uBrightness, 1), ke(o, V.uOpacity, 1), ke(o, V.uPartOpacity, 1), o._picking = !!D, ke(o, V.uPick, !!D), ke(o, V.uTexture, !1), ke(o, V.uBlendTexture, !1), ke(o, V.uAlphaTest, h.alphaTest), ke(o, V.uTransparent, !1), ke(o, V.uFix, !1), ke(o, V.uBatchColor, !1), ke(o, V.uBatchBlend, !1), ke(o, V.uBatchBrightness, !1), ke(o, V.uPMatrix, n._projectMatrix = hr(n)), ke(o, V.uViewMatrix, nq(n, n._7O)), n._viewMatrix = Kc(n._7O), D || (wp(n, o, V), n._fogDisabled || (ke(o, V.uFogColor, n._fogColor), ke(o, V.uFogNear, n._fogNear), ke(o, V.uFogFar, n._fogFar))), xn(o, V.aPosition), xn(o, V.aNormal), nk(o, V.aUv), nk(o, V.aBatchColor), nk(o, V.aBatchBlend), nk(o, V.aBatchBrightness), nk(o, V.aLineDistance), J) {
                var G = o.getParameter(o.COLOR_CLEAR_VALUE);
                o.clearColor(0, 0, 0, 0), o.disable(o.BLEND), nk(o, V.aNormal), Vi(o, n._cube.vs, A, V.aPosition), xh(o, n._cube.is), pm(J, n, kl, 0), pm(J, n, ji, 6), pm(J, n, we, 12), pm(J, n, _d, 18), pm(J, n, rd, 24), pm(J, n, Aj, 30), xn(o, V.aNormal), Vp(o, G)
              } else if (c) {
                c.value = 2;
                var G = o.getParameter(o.COLOR_CLEAR_VALUE);
                o.clearColor(0, 0, 0, 0), o.disable(o.BLEND), n._95I(o, V, c), go(n, c), lq(n, n._polylineModelMap, c), lq(n, n._wireframeModelMap, c), ke(o, V.uTransparent, !0), n._95I(o, V, c, !0), go(n, c, !0), lq(n, n._polylineModelMap, c, !0), lq(n, n._wireframeModelMap, c, !0), ke(o, V.uTransparent, !1), o.clear(o.DEPTH_BUFFER_BIT), n._swapLineMap(), n._95I(o, V, c, !1, !0), lq(n, n._polylineModelMap, c), lq(n, n._wireframeModelMap, c), n._swapLineMap(), o.disable(o.DEPTH_TEST), n._30O._42(o, V, c), o.enable(o.DEPTH_TEST), Vp(o, G)
              } else o.disable(o.BLEND), n.drawSky(o, V), n._31O._42(o, V), n._95I(o, V), go(n), lq(n, n._polylineModelMap), lq(n, n._wireframeModelMap), o.enable(o.BLEND), ke(o, V.uTransparent, !0), o.depthMask(!1), n._95I(o, V, A, !0), go(n, A, !0), lq(n, n._polylineModelMap, A, !0), lq(n, n._wireframeModelMap, A, !0), o.depthMask(!0), ke(o, V.uTransparent, !1), o.clear(o.DEPTH_BUFFER_BIT), n._swapLineMap(), n._95I(o, V, A, !1, !0), lq(n, n._polylineModelMap), lq(n, n._wireframeModelMap), n._swapLineMap(), o.disable(o.DEPTH_TEST), o.disable(o.BLEND), n._32O._42(o, V), n._30O._42(o, V), o.enable(o.DEPTH_TEST);
              Vi(o, A), xh(o, A)
            }, _ = !1, j = Y * t, l = $ * t, K = n.vr;
            K.enable && K._42(o, j, l, R) && (_ = !0);
            var B = n.envRenderer;
            B && B.enable && B._42(o, j, l, R) && (_ = !0), _ || (o.viewport(0, 0, Y * t, $ * t), R()), n._33Q = !1, n._doBufferGC(o)
          }
        }
      },
      setBufferGCInterval: function (C) {
        this._bufferGCInterval = C
      },
      _doBufferGC: function (e, N) {
        var I, C, O = e._bufPool, h = 0, v = 0, E = e._renderInfo.frame, S = this._bufferGCInterval || 10;
        for (I in O) h++, C = O[I], C && (N || E - C._fid > S ? (e.deleteBuffer(C._buf), C._buf = null, O[I] = null) : v++);
        if (h / 2 > v && h > 128) {
          var H = {};
          for (I in O) O[I] && (H[I] = O[I]);
          e._bufPool = H
        }
        e._validBufCount = v
      },
      _swapLineMap: function () {
        var M = this;
        e = M._polylineModelMap, M._polylineModelMap = M._polylineModelMapSwap, M._polylineModelMapSwap = e, e = M._wireframeModelMap, M._wireframeModelMap = M._wireframeModelMapSwap, M._wireframeModelMapSwap = e, e = M._polylineIndexMap, M._polylineIndexMap = M._polylineIndexMapSwap, M._polylineIndexMapSwap = e, e = M._wireframeIndexMap, M._wireframeIndexMap = M._wireframeIndexMapSwap, M._wireframeIndexMapSwap = e
      },
      _updateSkyBoxPosition: function (Y) {
        if (this._skyBox && Y && "eye" === Y.property) {
          var p = Y.newValue;
          this._skyBox.p3(p[0], p[1], p[2]), this.invalidateData(this._skyBox)
        }
      },
      setSkyBox: function (U) {
        var _ = this._skyBox;
        _ && this._skyBoxStyleMap && (_.setStyleMap(this._skyBoxStyleMap), this._skyBoxStyleMap = null), this._skyBox = U, this.ump(this._updateSkyBoxPosition, this), U && (U.dm() && U.dm().remove(U), this._skyBoxStyleMap = Q.Default.clone(U.getStyleMap()), U.s({
          "shape3d.reverse.flip": !0,
          "shape3d.reverse.cull": !1,
          "all.reverse.flip": !0,
          "all.reverse.cull": !1,
          "front.reverse.flip": !0,
          "front.reverse.cull": !1,
          "back.reverse.flip": !0,
          "back.reverse.cull": !1,
          "left.reverse.flip": !0,
          "left.reverse.cull": !1,
          "right.reverse.flip": !0,
          "right.reverse.cull": !1,
          "top.reverse.flip": !0,
          "top.reverse.cull": !1,
          "bottom.reverse.flip": !0,
          "bottom.reverse.cull": !1
        }), this.mp(this._updateSkyBoxPosition, this), this._updateSkyBoxPosition({
          property: "eye",
          newValue: this.getEye()
        })), this.fp("skyBox", _, U)
      },
      drawSky: function (R, a, M) {
        var O = this, n = O._skyBox;
        if (n) {
          var b = O._headlightIntensity, t = Di(O._headlightColor), a = O._prg;
          1 !== b && (t = [t[0] * b, t[1] * b, t[2] * b]), ke(R, a.uHeadlightColor, [t[0], t[1], t[2], 1]);
          var N = O.getData3dUI(n);
          N && N._42(R, a, M, function () {
            return !0
          }), R.clear(R.DEPTH_BUFFER_BIT), ke(R, a.uHeadlightColor, [t[0], t[1], t[2], O._headlightDisabled ? 1 : 0])
        }
      },
      _95I: function (r, w, g, F, b) {
        function U(f) {
          if (!!f.s("shape3d.alwaysOnTop") == !!b && C.isVisible(f) && (!V || j)) {
            if (!g && C.isTransparentMask(f)) return;
            var m = C.getData3dUI(f);
            m && m._42(r, w, g, z)
          }
        }

        var C = this, z = function (l) {
          return F ? l : !l
        };
        C.sky && r.clear(r.DEPTH_BUFFER_BIT), C.dm().each(U)
      },
      getLogicalPoint: function (F) {
        return Gh(F, this._canvas)
      },
      isRectOverlapping: function (f) {
        var o = this.getData3dUI(f);
        return o._rectOverlapping
      },
      getHitFaceInfo: function (a) {
        a.target && (a = this.lp(a));
        var c = this.getDataInfoAt(a);
        if (c) {
          var W = this._1o.face(c.data, pq(a.x, a.y));
          if (W) return {data: c.data, face: W}
        }
        return A
      },
      unproject: function (i, k) {
        var d = this, R = d.getWidth(), B = d.getHeight(), z = i.target ? d.lp(i) : i, C = z.x - R / 2, t = z.y - B / 2,
          Z = 2 * (C / R), S = 2 * (-1 * t / B);
        k = k || 0;
        var P = gc(), m = hr(d), l = nq(d);
        fp(P, m, l), oj(P);
        var g = tl([Z, S, k, 1], P);
        return [g[0] / g[3], g[1] / g[3], g[2] / g[3]]
      },
      getDataAt: function (Y) {
        var I = this.getDataInfoAt(Y);
        return I ? I.data : A
      },
      getDataInfoAt: function (W, E) {
        return W.target && (W = this.lp(W)), this._1o.get(pq(W.x, W.y, E), !0)
      },
      getDatasInRect: function (O) {
        return this._1o.get(O)
      },
      setEditable: function (U) {
        var B = this, T = B._editable;
        B._editable = U, this.fp(xe, T, U)
      },
      isEditable: function (n) {
        var x = this;
        return x._editable ? Kf(n) ? n.s("3d.editable") ? x._editableFunc ? x._editableFunc(n) : !0 : !1 : !1 : !1
      },
      isSelectable: function (H) {
        return H.s("3d.selectable") && this.sm().isSelectable(H)
      },
      isMovable: function (b) {
        var i = this;
        return yc(b) && b.getStyle(Vm) !== vl ? !1 : b.s("3d.movable") ? i._movableFunc ? i._movableFunc(b) : !0 : !1
      },
      isSizeEditable: function (n) {
        return Kf(n) ? this._sizeEditableFunc ? this._sizeEditableFunc(n) : !0 : !1
      },
      isRotationEditable: function (g) {
        return Kf(g) && g.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(g) : !0 : !1
      },
      handleDelete: function () {
        this._editable && this.removeSelection()
      },
      zoomIn: function (S) {
        this.setZoom(ef, S)
      },
      zoomOut: function (o) {
        this.setZoom(1 / ef, o)
      },
      setZoom: function (R, t) {
        if (1 !== R) {
          var M = this;
          if (M._ortho) return M.setOrthoZoom(R, t), void 0;
          M._14o && M._14o.stop(!0);
          var q = 1 / R, f = M._eye, x = M._center, $ = x[0] + (f[0] - x[0]) * q - f[0],
            N = x[1] + (f[1] - x[1]) * q - f[1], B = x[2] + (f[2] - x[2]) * q - f[2];
          if (!(lf(f, x) < M._moveStep && 1 > q)) {
            if (t = br(t)) {
              var O = Wf(f);
              return t.action = function (e) {
                M.fi({kind: M._zooming ? "betweenZoom" : "beginZoom"}), M._zooming = 1, f[0] = O[0] + $ * e, f[1] = O[1] + N * e, f[2] = O[2] + B * e, M.fp(zk, A, f)
              }, t._37o = function () {
                delete M._14o, delete M._zooming, M.fi({kind: "endZoom"}), M.onZoomEnded()
              }, M._14o = bi(t)
            }
            f[0] += $, f[1] += N, f[2] += B, M.fp(zk, A, f)
          }
        }
      },
      setOrthoZoom: function (p, l) {
        if (1 !== p) {
          var K = this;
          K._14o && K._14o.stop(!0);
          var S = K._orthoWidth, E = S / p - S;
          if (!(S < K._moveStep && p > 1)) return (l = br(l)) ? (l.action = function (c) {
            K.fi({kind: K._zooming ? "betweenZoom" : "beginZoom"}), K._zooming = 1, K.setOrthoWidth(S + E * c)
          }, l._37o = function () {
            delete K._14o, delete K._zooming, K.fi({kind: "endZoom"}), K.onZoomEnded()
          }, K._14o = bi(l)) : (K.setOrthoWidth(S / p), void 0)
        }
      },
      getPositionInfo: function (p) {
        var Z = this, _ = Z._eye, B = Z._center, z = Z.getAspect(), O = p ? nn(el(B, _, !0), el(p, _)) : lf(_, B);
        if (Z._ortho) {
          var G = Z._orthoWidth;
          return {length: O, height: G / z, width: G}
        }
        var q = 2 * v(Z._fovy / 2) * O;
        return {length: O, height: q, width: q * z}
      },
      getCenterInfo: function () {
        var E = this;
        return E._81O || (E._81O = E.getPositionInfo()), Wf(E._81O)
      },
      rotate: function (u, P, C, j) {
        var a = this;
        if (u || P) {
          j == A && (j = a._firstPersonMode), a._88O && a._88O.stop(!0);
          var B = a._center, x = a._eye, z = a.getCenterInfo().length, q = j ? B : x, Z = j ? x : B, Q = el(q, Z),
            U = i(Q[0], Q[2]), _ = i(Y(Q[0] * Q[0] + Q[2] * Q[2]), Q[1]), K = j ? Zm : zk;
          return j && (P = -P), (C = br(C)) ? (C.action = function (l) {
            a.fi({kind: a._rotating ? "betweenRotate" : "beginRotate"}), a._rotating = 1;
            var M = U + u * l, e = _ + P * l;
            e = Uo(e), Q[0] = z * D(e) * D(M), Q[1] = z * J(e), Q[2] = z * D(e) * J(M), q[0] = Z[0] + Q[0], q[1] = Z[1] + Q[1], q[2] = Z[2] + Q[2], a.fp(K, A, q)
          }, C._37o = function () {
            delete a._88O, delete a._rotating, a.fi({kind: "endRotate"}), a.onRotateEnded()
          }, a._88O = bi(C)) : (U += u, _ += P, _ = Uo(_), Q[0] = z * D(_) * D(U), Q[1] = z * J(_), Q[2] = z * D(_) * J(U), q[0] = Z[0] + Q[0], q[1] = Z[1] + Q[1], q[2] = Z[2] + Q[2], a.fp(K, A, q), void 0)
        }
      },
      pan: function (O, w, s, Z) {
        if (O || w) {
          var q = this;
          Z == A && (Z = q._firstPersonMode), q._89O && q._89O.stop(!0);
          var d = nq(q), y = [d[0] * O, d[4] * O, d[8] * O], l = [d[1] * w, d[5] * w, d[9] * w], Q = y[0] + l[0],
            C = y[1] + l[1], R = y[2] + l[2], u = q._center, o = q._eye;
          if (Z) {
            var v = $d(q.getBoundaries(), o[0], o[2], o[0] + Q, o[2] + R, Y(Q * Q + R * R));
            Q = v[0], R = v[1]
          }
          if (s = br(s)) {
            var X = Wf(o), N = Wf(u);
            return s.action = function (K) {
              q.fi({kind: q._panning ? "betweenPan" : "beginPan"}), q._panning = 1, u[0] = N[0] + Q * K, u[1] = N[1] + C * K, u[2] = N[2] + R * K, o[0] = X[0] + Q * K, o[1] = X[1] + C * K, o[2] = X[2] + R * K, q.fp(zk, A, o), q.fp(Zm, A, u)
            }, s._37o = function () {
              delete q._89O, delete q._panning, q.fi({kind: "endPan"}), q.onPanEnded()
            }, q._89O = bi(s)
          }
          u[0] += Q, u[1] += C, u[2] += R, o[0] += Q, o[1] += C, o[2] += R, q.fp(zk, A, o), q.fp(Zm, A, u)
        }
      },
      walk: function (N, k, G) {
        if (N) {
          var W = this;
          G == A && (G = W._firstPersonMode), W._90O && W._90O.stop(!0);
          var g = W._center, z = W._eye, H = el(g, z, !0);
          if (G) {
            var m = $d(W.getBoundaries(), z[0], z[2], z[0] + H[0] * N, z[2] + H[2] * N, C(N));
            if (N = lf(m), !N) return;
            H = [m[0] / N, 0, m[1] / N]
          }
          if (k = br(k)) {
            var Z = Wf(z), D = Wf(g);
            return k.action = function (G) {
              W.fi({kind: W._walking ? "betweenWalk" : "beginWalk"}), W._walking = 1;
              var s = N * G;
              z[0] = Z[0] + H[0] * s, z[1] = Z[1] + H[1] * s, z[2] = Z[2] + H[2] * s, g[0] = D[0] + H[0] * s, g[1] = D[1] + H[1] * s, g[2] = D[2] + H[2] * s, W.fp(zk, A, z), W.fp(Zm, A, g)
            }, k._37o = function () {
              delete W._90O, delete W._walking, W.fi({kind: "endWalk"}), W.onWalkEnded()
            }, W._90O = bi(k)
          }
          z[0] += H[0] * N, z[1] += H[1] * N, z[2] += H[2] * N, g[0] += H[0] * N, g[1] += H[1] * N, g[2] += H[2] * N, W.fp(zk, A, z), W.fp(Zm, A, g)
        }
      },
      handleScroll: function (k, D) {
        k.preventDefault();
        var h = this, I = h._moveStep;
        h.isFirstPersonMode() ? h.isPannable() && h.pan(0, D > 0 ? I : -I) : h.isZoomable() && h.setZoom(0 > D ? 1 / Xc : Xc)
      },
      handlePinch: function (I, D) {
        this.isZoomable() && this.setZoom(D > I ? 1 / ng : ng)
      },
      reset: function () {
        this.setCenter(E.graph3dViewCenter), this.setEye(E.graph3dViewEye), this.setUp(E.graph3dViewUp)
      },
      moveSelection: function (k, K, n) {
        var F = this;
        F.dm().beginTransaction(), Jh(this.sm().toSelection(this.isMovable, this), k, K, n), F.dm().endTransaction()
      },
      getMoveMode: function (k, z) {
        var x = z.s("3d.move.mode");
        if (x) return x;
        var y = "88", m = "89", l = "90";
        return jr(k) || Th[y] && Th[m] && Th[l] ? "xyz" : Th[y] && Th[m] ? "xy" : Th[y] && Th[l] ? "xz" : Th[m] && Th[l] ? "yz" : Th[y] ? "x" : Th[m] ? "y" : Th[l] ? "z" : "xz"
      },
      handleTick: function () {
        var f = this, k = !1, a = f._moveStep, O = a, E = !1, d = !0, o = f._rotateStep * (d ? -1 : 1);
        if (f.isWalkable() || (O = 0), f.isPannable() || (a = 0), f.isRotatable() || (o = 0), f._32Q) {
          var b = (gb() - f._32Q) / 50;
          O *= b, a *= b, o *= b
        }
        f._31Q && (yl(f._31Q), delete f._31Q, delete f._32Q), pf() && (k = !0, f.pan(-a, 0, E, d)), Ar() && (k = !0, f.pan(a, 0, E, d)), dh() && (k = !0, jr() ? f.pan(0, a, E, d) : f.walk(O, E, d)), So() && (k = !0, jr() ? f.pan(0, -a, E, d) : f.walk(-O, E, d)), nl() && (k = !0, f.rotate(-o, 0, E, d)), $j() && (k = !0, f.rotate(o, 0, E, d)), $p() && (k = !0, f.rotate(0, -o / 2, E, d)), Mj() && (k = !0, f.rotate(0, o / 2, E, d)), k && (f._32Q = gb(), f._31Q = Rl(f.handleTick, f))
      },
      handleKeyDown: function (Z) {
        var j = this;
        !xr(Z) && Ec[Z.keyCode] ? j.handleTick() : pg(Z) ? j.selectAll() : wj(Z) ? j.handleDelete(Z) : ih(Z) && this.isResettable() && j.reset()
      },
      checkDoubleClickOnNote: function (E, K, O) {
        var P = this;
        if (O === Wd) {
          if (K.s("note.toggleable")) return K.s(Np, !K.s(Np)), P.fi({
            kind: "toggleNote",
            event: E,
            data: K,
            part: O
          }), !0
        } else if (O === qc && K.s("note2.toggleable")) return K.s(fe, !K.s(fe)), P.fi({
          kind: "toggleNote2",
          event: E,
          data: K,
          part: O
        }), !0;
        return !1
      },
      checkDoubleClickOnRotation: function (N, r, m) {
        return m === ko ? (r.setRotationX(0), !0) : m === Iq ? (r.setRotationY(0), !0) : m === Qg ? (r.setRotationZ(0), !0) : !1
      },
      onRotateEnded: function () {
      },
      onWalkEnded: function () {
      },
      getViewRatio: function (B) {
        var q = this;
        if (q.isOrtho()) return q.getWidth() / q.getOrthoWidth();
        var I = q.getCenter(), w = q.getHeight(), T = q.getEye(), O = [I[0] - T[0], I[1] - T[1], I[2] - T[2]],
          A = [B[0] - T[0], B[1] - T[1], B[2] - T[2]], l = Math.sqrt(O[0] * O[0] + O[1] * O[1] + O[2] * O[2]),
          C = 1 / Math.tan(q.getFovy() / 2);
        return w * l * C / (A[0] * O[0] + A[1] * O[1] + A[2] * O[2])
      },
      inViewSpace: function (K) {
        var X, _ = this, G = _._transformPointToViewSpace(K), m = _.getAspect(), S = _.getNear(), P = _.getFar();
        return -G[2] < S || -G[2] > P ? !1 : _.isOrtho() ? (X = _.getOrthoWidth() / 2, Math.abs(G[0]) <= X && Math.abs(G[1] * m) <= X) : (X = Math.sqrt(G[0] * G[0] + G[1] * G[1] + G[2] * G[2]) * Math.tan(_.getFovy() / 2), Math.abs(G[1] <= X) && Math.abs(G[0]) <= X * m)
      },
      toViewPosition: function (v) {
        var B = this, S = B.getWidth() / 2, P = B.getHeight() / 2, u = B._18Q;
        return u && u._wh === S / P || (u = hr(B), B._18Q = fp(u, u, nq(B)), B._18Q._wh = S / P), v = tl([v[0], v[1], v[2], 1], u), {
          x: S + S * v[0] / v[3],
          y: P - P * v[1] / v[3]
        }
      },
      getHitPosition: function (y, D, T) {
        var A = this, d = A.getWidth(), f = A.getHeight(), W = y.target ? A.lp(y) : y, B = W.x - d / 2, s = W.y - f / 2,
          Q = A.getCenterInfo(), Z = nq(A);
        D = D ? D : [0, 0, 0], T = T ? T : [0, 1, 0], B = B / d * Q.width, s = -1 * s / f * Q.height;
        var o = [Z[0] * B, Z[4] * B, Z[8] * B], V = [Z[1] * s, Z[5] * s, Z[9] * s],
          N = [o[0] + V[0], o[1] + V[1], o[2] + V[2]], i = A.getCenter(),
          h = zq(A, D, T, [N[0] + i[0], N[1] + i[1], N[2] + i[2]]);
        return h ? h : [0, 0, 0]
      },
      intersectObject: function (j, u) {
        return this._raycaster.intersectObject(j, u)
      },
      intersectObjects: function (y, X, c) {
        return this._raycaster.intersectObjects(y, X, c)
      },
      getLineLength: function (z) {
        this.validate();
        var u = this.getData3dUI(z);
        if (u && u.getCache) {
          var x = u.getCache();
          if (x) return x[x.length - 1].length
        }
        return 0
      },
      getLineOffset: function (z, q) {
        var X = this.getData3dUI(z);
        if (X && X.getCache) {
          var Q = X.getCache();
          if (Q) return qb(Q, q)
        }
        return A
      },
      isLabelVisible: function () {
        return !0
      },
      isNoteVisible: function () {
        return !0
      },
      flyTo: function () {
        function z(P, L, M) {
          B.fromArray(Sh(M, L.getMat(M)));
          var W = M.getAnchor3d();
          P.push((new $h).set(0 - W.x, 0 - W.y, 0 - W.z).applyMatrix4(B)), P.push((new $h).set(0 - W.x, 0 - W.y, 1 - W.z).applyMatrix4(B)), P.push((new $h).set(0 - W.x, 1 - W.y, 0 - W.z).applyMatrix4(B)), P.push((new $h).set(0 - W.x, 1 - W.y, 1 - W.z).applyMatrix4(B)), P.push((new $h).set(1 - W.x, 0 - W.y, 0 - W.z).applyMatrix4(B)), P.push((new $h).set(1 - W.x, 0 - W.y, 1 - W.z).applyMatrix4(B)), P.push((new $h).set(1 - W.x, 1 - W.y, 0 - W.z).applyMatrix4(B)), P.push((new $h).set(1 - W.x, 1 - W.y, 1 - W.z).applyMatrix4(B))
        }

        var w = new $h, C = new $h, O = new $h, x = new $h, B = new ej, h = new Q.Math.Quaternion, R = new Kb;
        return function (j, g, M) {
          var y = this;
          if (M !== S) g = {animation: g, ratio: M}; else {
            var B = typeof g;
            ("boolean" === B || "object" === B && g.duration) && (g = {animation: g})
          }
          g = g || {}, w.fromArray(y.getEye()), C.fromArray(y.getCenter());
          var I, N, u = [], J = g.center, c = g.distance === S;
          if (J && O.fromArray(J), j instanceof Q.Node) J || O.fromArray(j.p3()), c && (z(u, y, j), I = u.length); else {
            if (j || (j = y.dm().getDatas()), !j.length) return;
            if ((c || !J) && (u = [], j.forEach(function (k) {
              z(u, y, k)
            }), I = u.length), !J) {
              for (O.set(0, 0, 0), N = 0; I > N; N++) O.add(u[N]);
              O.multiplyScalar(1 / I)
            }
          }
          if (y.setCenter(O.x, O.y, O.z), x.subVectors(w, C), g.direction || g.worldDirection) {
            !g.worldDirection && j instanceof Q.Node ? h.setFromEuler(R.set(j.r3(), j.getRotationMode(), !0)) : h.set(0, 0, 0, 1);
            var Y = x.length();
            x.fromArray(g.worldDirection || g.direction).applyQuaternion(h).setLength(Y)
          }
          if (c) {
            for (var X, U, v, V, f, s = y.getNear(), m = 10, M = g.ratio || .8; m--;) {
              for (y._eye[0] = x.x + O.x, y._eye[1] = x.y + O.y, y._eye[2] = x.z + O.z, X = hr(y), fp(X, X, nq(y)), V = !0, f = -1 / 0, N = 0; I > N; N++) {
                if (v = u[N], U = tl([v.x, v.y, v.z, 1], X), U[3] < s && m) {
                  x.multiplyScalar(2), V = !1;
                  break
                }
                f = Math.max(f, Math.max(Math.abs(U[0]), Math.abs(U[1])) / M - U[3])
              }
              if (V) break
            }
            x.setLength(f + x.length()).add(O)
          } else x.setLength(g.distance).add(O);
          y._flyAnim && y._flyAnim.stop(!0);
          var b = br(g.animation);
          if (b) {
            y.setEye(w.x, w.y, w.z), y.setCenter(C.x, C.y, C.z);
            var T = (new $h).subVectors(x, w), W = (new $h).subVectors(O, C), p = new $h, k = new $h;
            return b.action = function (U) {
              p.copy(w).addScaledVector(T, U), k.copy(C).addScaledVector(W, U), y.setCenter(k.x, k.y, k.z), y.setEye(p.x, p.y, p.z)
            }, b._37o = function () {
              delete y._flyAnim
            }, {lastEye: w, lastCenter: C, eye: x, center: O, animation: y._flyAnim = bi(b)}
          }
          return y.setEye(x.x, x.y, x.z), {lastEye: w, lastCenter: C, eye: x, center: O}
        }
      }()
    }), lb.RenderEnv = function (S) {
      this.gv = S, this.enable = !1
    }, F.defineProperties(lb.RenderEnv.prototype, {
      debugOn: {
        get: function () {
          return this._debugOn
        }, set: function (K) {
          this._debugOn = K, this.capture && this.capture()
        }
      }
    }), F.assign(lb.RenderEnv.prototype, {
      renderEnvToCube: function (K, E, u, M) {
        var F = this, f = F.gv;
        if (!K || !E || !u) return F.enable = !1, F._42 = null, void 0;
        F.enable = !0;
        var _ = Math.floor(M / K * E), s = f.getGL(), O = F._renderTargets;
        O ? O.length < u && (O = F._renderTargets = O.concat(new Array(u - O.length))) : O = F._renderTargets = new Array(u);
        for (var n = 0; u > n; n++) O[n] ? O[n].setSize(s, M, _) : O[n] = new lb.RenderTarget(f, s, M, _);
        var q = !1;
        F.capture = function () {
          q = !0, f._42(), q = !1
        };
        var x = new $h, j = new $h, Z = new $h, U = new $h, w = (new $h).setY(0), b = 2 * Math.PI / u,
          o = K / 2 / Math.tan(Math.PI / u), t = 2 * Math.atan2(E / 2, o), r = K / E;
        F._42 = function (Y, C, k, W) {
          var $ = F._debugOn;
          if (!q && !$) return !1;
          x.copy(f.getEye()), U.copy(f.getCenter()).sub(x);
          var d = Math.atan2(U.z, U.x), z = f.getNear(), h = f.getFovy(), l = f.getAspect();
          j.copy(f.getCenter());
          for (var G, i = 0; u > i; i++) if (G = O[i], w.setZ(Math.cos(d)).setX(Math.sin(d)).multiplyScalar(o), d -= b, Z.addVectors(x, w), f.setNear(o), f.setCenter([Z.x, Z.y, Z.z]), f.setFovy(t), f.setAspect(r), $) {
            var B = Math.round(C / u);
            Y.viewport(B * i, 0, B, k), W()
          } else Gm(Y, G.frame), Y.viewport(0, 0, G.width, G.height), Y.clear(Y.COLOR_BUFFER_BIT), W(), Gm(Y, A), G.assureTexture();
          return f.setNear(z), f.setCenter([j.x, j.y, j.z]), f.setFovy(h), f.setAspect(l), !0
        }, F.capture()
      }, getTextureInfo: function (y) {
        var M = this._renderTargets;
        if (!M) return null;
        var z = this._renderTargets[y];
        return z ? {index: y, texture: z.texture, textureName: z.uuid} : null
      }
    }), F.assign(lb.Graph3dView.prototype, {
      renderEnvToCube: function (Z, q, B, w) {
        var T = this;
        T.envRenderer || (T.envRenderer = new lb.RenderEnv(T)), T.envRenderer.renderEnvToCube(Z, q, B, w)
      }
    }), lb.RenderTarget = function (D, d, k, E) {
      var a = this;
      a.uuid = Q.Math.generateUUID(), a.gv = D, a.init(D, d), a.setSize(d, k, E)
    }, F.assign(lb.RenderTarget.prototype, {
      init: function (b, F) {
        var y = this, l = y.texture = F.createTexture();
        F.activeTexture(F.TEXTURE0), F.bindTexture(F.TEXTURE_2D, l), F.texParameteri(F.TEXTURE_2D, F.TEXTURE_WRAP_S, F.CLAMP_TO_EDGE), F.texParameteri(F.TEXTURE_2D, F.TEXTURE_WRAP_T, F.CLAMP_TO_EDGE), F.texParameteri(F.TEXTURE_2D, F.TEXTURE_MIN_FILTER, F.NEAREST), F.texParameteri(F.TEXTURE_2D, F.TEXTURE_MAG_FILTER, F.NEAREST), F.bindTexture(F.TEXTURE_2D, null), y.render = F.createRenderbuffer(), y.frame = F.createFramebuffer(), b._2O[y.uuid] = l
      }, assureTexture: function () {
        var s = this, t = s.uuid, w = s.gv._2O;
        w[t] || (w[t] = s.texture)
      }, setSize: function (S, l, v) {
        var R = this;
        if (R.width !== l || R.height !== v) {
          var N = S.RGBA, b = S.TEXTURE_2D, Q = S.RENDERBUFFER, c = S.FRAMEBUFFER;
          Dm(S, R.texture), S.texImage2D(b, 0, N, l, v, 0, N, S.UNSIGNED_BYTE, A), Qi(S, S.TEXTURE_MIN_FILTER, S.LINEAR), S.bindRenderbuffer(Q, R.render), S.renderbufferStorage(Q, S.DEPTH_COMPONENT16, l, v), Gm(S, R.frame), S.framebufferTexture2D(c, S.COLOR_ATTACHMENT0, b, R.texture, 0), S.framebufferRenderbuffer(c, S.DEPTH_ATTACHMENT, Q, R.render), Dm(S, A), S.bindRenderbuffer(Q, A), Gm(S, A), R.width = l, R.height = v
        }
      }, toCanvas: function () {
        var K = this, t = K.gv.getGL();
        t.bindFramebuffer(t.FRAMEBUFFER, K.frame);
        var u = K.width, l = K.height, H = new Uint8Array(4 * u * l);
        t.readPixels(0, 0, u, l, t.RGBA, t.UNSIGNED_BYTE, H), t.bindFramebuffer(t.FRAMEBUFFER, null);
        var z = y.createElement("canvas");
        z.width = u, z.height = l;
        var w = z.getContext("2d"), $ = w.createImageData(u, l);
        return $.data.set(H), w.putImageData($, 0, 0), z
      }
    });
    var Ai = lb.Interactor = function (x) {
      this.gv = x
    };
    Pj("Interactor", F, {
      ms_listener: 1, getView: function () {
        return this.gv.getView()
      }, setUp: function () {
        this.addListeners()
      }, tearDown: function () {
        this.removeListeners()
      }
    });
    var Mg = lb.DefaultInteractor = function (s) {
      Eo(Mg, this, [s])
    };
    Pj("DefaultInteractor", Ai, {
      handle_contextmenu: function (j) {
        gm(j)
      }, handle_mousewheel: function (_) {
        this.gv.handleScroll(_, _.wheelDelta / 40)
      }, handle_DOMMouseScroll: function (v) {
        2 === v.axis && this.gv.handleScroll(v, -v.detail)
      }, handle_keydown: function (q) {
        this.gv.handleKeyDown(q)
      }, handle_mousedown: function (z) {
        this.handle_touchstart(z)
      }, handle_touchstart: function (k) {
        gm(k);
        var s = this, G = s.gv, F = Wb(k), N = G.getDataInfoAt(k), C = N ? N.data : A, p = N ? N.part : A, D = G.sm(),
          u = mj(k), T = Ro(k);
        G.setFocus(k) && (s._62O = A, s._57I = A, C ? xr(k) ? D.co(C) ? D.rs(C) : D.as(C) : D.co(C) || D.ss(C) : F && (xr(k) ? G.isRectSelectable() && (s._62O = ml) : s._57I = ab(k)), s._31Q && (yl(s._31Q), delete s._31Q, delete s._32Q), s._62O || (G.isFirstPersonMode() && (jr(k) || T > 2 ? s._62O = "pan" : G.isMouseRoamable() || Qe ? (s._62O = "roaming", s.foward = u && Wb(k), s._32Q = gb(), s._31Q = Rl(s.tick, s)) : F || (s._62O = "roaming")), s._62O || (F && u && vc[p] ? (s._62O = p, s.p3 = C.p3()) : F && u && Kf(C) && G.isSelected(C) ? G.isMovable(C) ? (s._62O = "move", s.p3 = C.p3(), s.movedata = C) : G.isInteractive(C) && (s._62O = "none") : Qe && (T > 2 ? s._62O = "pan" : 2 === T && (s.dist = Xg(k), s._62O = "pinch")))), s.point = G.lp(k), Dj(s, k), qo(k) ? G.handleDoubleClick(k, C, p) : G.handleClick(k, C, p))
      }, tick: function () {
        var f = this, p = f.gv, r = p._moveStep;
        f.point && p.isWalkable() && (f._32Q && (r *= (gb() - f._32Q) / 50), p.walk(f.foward ? r : -r), f._32Q = gb(), f._31Q = Rl(f.tick, f))
      }, handle_mouseup: function (P) {
        this.handle_touchend(P)
      }, handle_touchend: function (y) {
        var T = this._57I;
        T && (lf(T, ab(y)) <= 1 && this.gv.sm().cs(), this._57I = A)
      }, handleWindowMouseMove: function (w) {
        this.handleWindowTouchMove(w)
      }, handleWindowTouchMove: function (h) {
        var n, L, F = this, J = F.gv, k = F._62O, Z = F.point, T = J.dm(), N = J.lp(h), K = N.x - Z.x, g = N.y - Z.y,
          M = J.getWidth(), X = J.getHeight();
        if (M && X) {
          var b = -U * K / M, a = -U * g / X;
          if ("roaming" === k) F.rotate(h, b / 2, a / 2); else if (k === ko || k === Iq || k === Qg) J._86O || T.beginTransaction(), J.fi({
            kind: J._86O ? "betweenEditRotation" : "beginEditRotation",
            event: h
          }), J._86O = 1, J.sm().each(function ($) {
            if (Kf($) && J.isRotationEditable($)) {
              var V = C(b) > C(a) ? b : a;
              k === ko ? $.setRotationX($.getRotationX() + V) : k === Iq ? $.setRotationY($.getRotationY() + V) : k === Qg && $.setRotationZ($.getRotationZ() + V)
            }
          }); else if ("move" === k || vc[k]) {
            k === bm || k === Fb || k === vh ? (J._87O || T.beginTransaction(), J.fi({
              kind: J._87O ? "betweenEditScale" : "beginEditScale",
              event: h
            }), J._87O = 1) : (J._moving || T.beginTransaction(), J.fi({
              kind: J._moving ? "betweenMove" : "beginMove",
              event: h
            }), J._moving = 1);
            var O, V = F.p3, G = J.getPositionInfo(V), e = nq(J);
            O = k === qr ? "x" : k === mo ? "y" : k === $i ? "z" : k === bm ? "sx" : k === Fb ? "sy" : k === vh ? "sz" : J.getMoveMode(h, F.movedata), K = K / M * G.width, g = -1 * g / X * G.height;
            var H, w, l = [e[0] * K, e[4] * K, e[8] * K], u = [e[1] * g, e[5] * g, e[9] * g], z = l[0] + u[0],
              $ = l[1] + u[1], c = l[2] + u[2], t = [V[0] + z, V[1] + $, V[2] + c], I = el(J.getEye(), t, !0);
            if ("xyz" === O ? (H = t, J.moveSelection(z, $, c)) : "xz" === O ? (H = zq(J, V, [0, 1, 0], t), H && J.moveSelection(H[0] - V[0], 0, H[2] - V[2])) : "xy" === O ? (H = zq(J, V, [0, 0, 1], t), H && J.moveSelection(H[0] - V[0], H[1] - V[1], 0)) : "yz" === O ? (H = zq(J, V, [1, 0, 0], t), H && J.moveSelection(0, H[1] - V[1], H[2] - V[2])) : "x" === O || "sx" === O ? (I[0] = 0, H = zq(J, V, I, t), H && (w = H[0] - V[0], "x" === O ? J.moveSelection(w, 0, 0) : J.sm().each(function (F) {
              Kf(F) && J.isSizeEditable(F) && (n = F.getScaleX() + w / 100, L = n / F.getScaleX(), F.setScaleX(n), jr(h) && (F.setScaleY(F.getScaleY() * L), F.setScaleTall(F.getScaleTall() * L)))
            }))) : "y" === O || "sy" === O ? (I[1] = 0, H = zq(J, V, I, t), H && (w = H[1] - V[1], "y" === O ? J.moveSelection(0, w, 0) : J.sm().each(function (D) {
              Kf(D) && J.isSizeEditable(D) && (n = D.getScaleTall() + w / 100, L = n / D.getScaleTall(), D.setScaleTall(n), jr(h) && (D.setScaleY(D.getScaleY() * L), D.setScaleX(D.getScaleX() * L)))
            }))) : ("z" === O || "sz" === O) && (I[2] = 0, H = zq(J, V, I, t), H && (w = H[2] - V[2], "z" === O ? J.moveSelection(0, 0, w) : J.sm().each(function (r) {
              Kf(r) && J.isSizeEditable(r) && (n = r.getScaleY() + w / 100, L = n / r.getScaleY(), r.setScaleY(n), jr(h) && (r.setScaleX(r.getScaleX() * L), r.setScaleTall(r.getScaleTall() * L)))
            }))), !H) return;
            F.p3 = H
          } else if (k === ml) {
            var o = F.div;
            o || (o = F.div = Zg(), wm(F.getView(), o), o.op = Z, o.style.background = J.getRectSelectBackground()), J.fi({
              kind: J._rectSelecting ? "betweenRectSelect" : "beginRectSelect",
              event: h
            }), J._rectSelecting = 1, o.rect = Ue(o.op, N), vk(o, o.rect)
          } else if ("pinch" === k && 2 === Ro(h)) {
            J.fi({kind: J._pinching ? "betweenPinch" : "beginPinch", event: h}), J._pinching = 1;
            var w = Xg(h);
            J.handlePinch(w, F.dist), F.dist = w
          } else "pan" === k || jr(h) ? F.pan(h, K, g) : "none" === k || J.isFirstPersonMode() || (Wb(h) ? F.rotate(h, b, a) : (F.pan(h, K, 0), J.isWalkable() && (J.fi({
            kind: J._walking ? "betweenWalk" : "beginWalk",
            event: h
          }), J._walking = 1, J.walk(g / J.getHeight() * J.getCenterInfo().height))));
          F.point = N
        }
      }, pan: function ($, F, I) {
        var j = this.gv;
        if (j.isPannable()) {
          var s = j.getWidth(), S = j.getHeight();
          if (!s || !S) return;
          var U = j.getCenterInfo(), z = F / s * U.width, V = -1 * I / S * U.height;
          j.fi({kind: j._panning ? "betweenPan" : "beginPan", event: $}), j._panning = 1, j.pan(-z, -V)
        }
      }, rotate: function (M, L, D) {
        var Z = this.gv;
        Z.isRotatable() && (Z.fi({
          kind: Z._rotating ? "betweenRotate" : "beginRotate",
          event: M
        }), Z._rotating = 1, Z.rotate(L, D))
      }, handleWindowMouseUp: function (r) {
        this.handleWindowTouchEnd(r)
      }, handleWindowTouchEnd: function (l) {
        var G = this, W = G.gv, t = W.dm(), J = G.div;
        if (J) {
          var i = W.getDatasInRect(J.rect);
          if (!i.isEmpty()) {
            var B = W.sm(), O = B.toSelection();
            i.each(function ($) {
              B.co($) ? O.remove($) : O.add($)
            }), B.ss(O)
          }
          up(J)
        }
        W._moving && (delete W._moving, W.fi({
          kind: "endMove",
          event: l
        }), W.onMoveEnded(), t.endTransaction()), W._panning && (delete W._panning, W.fi({
          kind: "endPan",
          event: l
        }), W.onPanEnded()), W._rotating && (delete W._rotating, W.fi({
          kind: "endRotate",
          event: l
        }), W.onRotateEnded()), W._86O && (delete W._86O, W.fi({
          kind: "endEditRotation",
          event: l
        }), t.endTransaction()), W._87O && (delete W._87O, W.fi({
          kind: "endEditScale",
          event: l
        }), t.endTransaction()), W._pinching && (delete W._pinching, W.fi({
          kind: "endPinch",
          event: l
        }), W.onPinchEnded()), W._rectSelecting && (delete W._rectSelecting, W.fi({
          kind: "endRectSelect",
          event: l
        }), W.onRectSelectEnded()), W._walking && (delete W._walking, W.fi({
          kind: "endWalk",
          event: l
        }), W.onWalkEnded()), G.dist = G.point = G._62O = G.p3 = G.movedata = G.div = G._57I = G._32Q = G._31Q = G.foward = A
      }
    });
    var Fn = lb.MapInteractor = function (g) {
      Eo(Fn, this, [g]), this._minPhi = 0, this._maxPhi = 5 * I / 12, this._keepHorizon = !0, this._threshold = 2, this._touchScaleThreshold = .05, this._touchRotateThreshold = .03, this._touchScaleCheckAccuracy = .01
    };
    Pj("MapInteractor", Ai, {
      handle_contextmenu: function (Z) {
        gm(Z)
      }, handle_mousewheel: function (k) {
        this.gv.handleScroll(k, k.wheelDelta / 40)
      }, handle_DOMMouseScroll: function (o) {
        2 === o.axis && this.gv.handleScroll(o, -o.detail)
      }, handle_keydown: function (R) {
        this.gv.handleKeyDown(R)
      }, handle_mousedown: function (Q) {
        this.handle_touchstart(Q)
      }, handle_touchstart: function (D) {
        gm(D);
        var l = this, h = l.gv;
        if (h.setFocus(D)) {
          h.lp(D);
          var q = h.getDataInfoAt(D), j = q ? q.data : A, p = q ? q.part : A;
          if (!j || !h.isInteractive(j)) {
            var z = l.editing = {point: h.lp(D)};
            Qe ? z.touch = !0 : (z.touch = !1, z.pan = Wb(D)), Dj(l, D)
          }
          qo(D) ? h.handleDoubleClick(D, j, p) : h.handleClick(D, j, p)
        }
      }, handle_mouseup: function (P) {
        this.handle_touchend(P)
      }, handle_touchend: function () {
      }, handleWindowMouseMove: function (p) {
        this.handleWindowTouchMove(p)
      }, handleWindowTouchMove: function (c) {
        var G = this, u = G.gv, S = G.editing;
        if (S) {
          var L = u.lp(c), q = S.point, $ = L.x - q.x, K = L.y - q.y;
          if (!S.moved) {
            if (Math.abs($) < G.threshold && Math.abs(K) < G.threshold && !(c.touches && c.touches.length > 1)) return;
            S.moved = !0
          }
          if (S.point = L, S.touch) {
            var v = c.touches.length;
            if (2 !== v) G.pan(c, $, K); else {
              if (1 >= v) return;
              var Z = c.touches, t = {x: Z[0].clientX, y: Z[0].clientY}, m = {x: Z[1].clientX, y: Z[1].clientY},
                Y = {x: m.x - t.x, y: m.y - t.y}, D = S.lastCenter, V = Math.atan2(Y.y, Y.x), n = S.theta, T = 0;
              n == A ? n = S.theta = V : (T = V - n, S.thetaStarted || Math.abs(T) > G.touchRotateThreshold ? (S.thetaStarted = !0, S.theta = V) : T = 0);
              var H = I * (t.y + m.y) / 2 / u.getHeight(), R = S.phi, C = 0;
              R == A ? R = S.phi = H : (C = H - R, S.phiStarted || Math.abs(C) > G.touchRotateThreshold ? (S.phiStarted = !0, S.phi = H) : C = 0);
              var j, F = Math.sqrt(Y.x * Y.x + Y.y * Y.y), _ = S.vlen;
              if (_) {
                var z = t.x - D.x, Q = t.y - D.y, d = m.x - D.x, P = m.y - D.y, B = Math.sqrt(z * z + Q * Q),
                  x = Math.sqrt(d * d + P * P), e = _ / 2, f = G._sign2(B - e), k = G._sign2(x - e);
                0 > f * k || 0 === f && 0 === k ? (j = 1, S.vlen = F) : (j || (j = F / _), S.scaleStarted || Math.abs(j - 1) > G.touchScaleThreshold ? (S.vlen = F, S.scaleStarted = !0) : j = 1)
              } else _ = S.vlen = F, j = 1;
              1 !== j && u.setZoom(j), (C || T) && G.rotate(c, T, -C), S.lastCenter = {
                x: (m.x + t.x) / 2,
                y: (m.y + t.y) / 2
              }
            }
          } else if (S.pan) G.pan(c, $, K); else {
            var b = u.getWidth(), W = u.getHeight();
            if (!b || !W) return;
            var w = -U * $ / b, a = -U * K / W;
            G.rotate(c, w, a)
          }
        }
      }, _sign2: function (f) {
        return Math.abs(f) < this._touchScaleCheckAccuracy ? 0 : f > 0 ? 1 : -1
      }, handleWindowMouseUp: function (E) {
        this.handleWindowTouchEnd(E)
      }, handleWindowTouchEnd: function (i) {
        var D = this, u = D.editing;
        if (D.editing = null, u) {
          var W = D.gv;
          if (!u.moved && u.pan) {
            var x = W.getDataAt(i);
            x ? W.sm().setSelection([x]) : W.sm().clearSelection()
          } else W._panning = null, W._rotating = null, W.fi({kind: u.pan ? "endPan" : "endRotate", event: i})
        }
      }, pan: function (H, o, W) {
        var Q = this, Y = Q.gv;
        if (Y.isPannable()) {
          var h = Y.getWidth(), B = Y.getHeight();
          if (h && B) {
            var F = Y.getCenterInfo(), q = -o / h * F.width, d = 1 * W / B * F.height;
            Y.fi({kind: Y._panning ? "betweenPan" : "beginPan", event: H}), Y._panning = 1;
            var f = Q.keepHorizon, T = Q.editing.touch;
            if ((T && H.touches && H.touches.length > 1 || !T && jr(H)) && (f = !f), !f) return Y.pan(q, d);
            if (q || d) {
              var G = nq(Y), I = [G[0] * q, G[4] * q, G[8] * q], O = [G[1], 0, G[9]],
                j = Math.sqrt(O[0] * O[0] + O[2] * O[2]);
              j && (O = [O[0] / j * d, 0, O[2] / j * d]);
              var V = I[0] + O[0], g = I[1] + O[1], n = I[2] + O[2], E = Y._center, M = Y._eye;
              E[0] += V, E[1] += g, E[2] += n, M[0] += V, M[1] += g, M[2] += n, Y.fp(zk, A, M), Y.fp(Zm, A, E)
            }
          }
        }
      }, rotate: function (n, S, Q) {
        var N = this, h = N.gv;
        if (h.isRotatable()) {
          var E = h._center, G = h._eye, K = el(G, E), w = i(Y(K[0] * K[0] + K[2] * K[2]), K[1]), Z = w + Q;
          Z = Math.max(N.minPhi, Math.min(N.maxPhi, Z)), Q = Z - w, h.fi({
            kind: h._rotating ? "betweenRotate" : "beginRotate",
            event: n
          }), h._rotating = 1, h.rotate(S, Q)
        }
      }
    }), F.defineProperties(Fn.prototype, {
      minPhi: {
        get: function () {
          return this._minPhi
        }, set: function (D) {
          this._minPhi = D
        }
      }, maxPhi: {
        get: function () {
          return this._maxPhi
        }, set: function (u) {
          this._maxPhi = u
        }
      }, keepHorizon: {
        get: function () {
          return this._keepHorizon
        }, set: function ($) {
          this._keepHorizon = $
        }
      }, threshold: {
        get: function () {
          return this._threshold
        }, set: function (h) {
          this._threshold = h
        }
      }, touchScaleThreshold: {
        get: function () {
          return this._touchScaleThreshold
        }, set: function (p) {
          this._touchScaleThreshold = p
        }
      }, touchRotateThreshold: {
        get: function () {
          return this._touchRotateThreshold
        }, set: function (D) {
          this._touchRotateThreshold = D
        }
      }
    });
    var uc = function (m) {
      this.gv = m
    };
    Dr(uc, F, {
      _iv: !0, iv: function () {
        this._iv = !0
      }, face: function (k, r) {
        var D = this, z = D.gv.getGL();
        if (!z || !Kf(k)) return A;
        var X = r.x, b = r.width, p = r.height, h = D.height - r.y - p, J = n(b / 2), W = new Uint8Array(4 * b * p),
          V = 0;
        for (D.iv(), D.validate(k), Gm(z, D.frame), z.readPixels(X, h, b, p, z.RGBA, z.UNSIGNED_BYTE, W), Gm(z, A), D.iv(); J >= V; V++) for (var s = J - V, u = J + V, y = s; u >= y; y++) for (var t = s; u >= t; t++) if (y === s || y === u || t === s || t === u) {
          var i = Hd.m[W[4 * (y * b + t)]];
          if (i) return i
        }
      }, get: function (_, N) {
        this.validate();
        var C = this, G = C.gv.getGL();
        if (!G) return A;
        var d, P, b = _.x, Z = _.width, o = _.height, t = C.height - _.y - o, V = n(Z / 2),
          F = new Uint8Array(4 * Z * o), S = 0, Y = F.length, s = N ? A : new Oh, h = N ? A : {};
        if (Gm(G, C.frame), G.readPixels(b, t, Z, o, G.RGBA, G.UNSIGNED_BYTE, F), Gm(G, A), N) {
          for (; V >= S; S++) for (var I = V - S, v = V + S, E = I; v >= E; E++) for (var p = I; v >= p; p++) if ((E === I || E === v || p === I || p === v) && (d = C.info(F, 4 * (E * Z + p)))) return d
        } else for (; Y > S; S += 4) d = C.info(F, S), d && (P = d.data, h[P._id] || (s.add(P), h[P._id] = P));
        return s
      }, info: function (x, s) {
        return this.colorMap[(x[s] << 16) + (x[s + 1] << 8) + x[s + 2] + ((127 & x[s + 3]) << 24)]
      }, validate: function (u) {
        var f = this, o = f.gv, _ = o.getGL();
        if (_) {
          var O = o.getWidth(), n = o.getHeight(), d = _.RGBA, r = _.TEXTURE_2D, $ = _.RENDERBUFFER, E = _.FRAMEBUFFER;
          f.texture || (f.texture = Io(_), f.render = _.createRenderbuffer(), f.frame = _.createFramebuffer()), (f.width !== O || f.height !== n) && (Dm(_, f.texture), _.texImage2D(r, 0, d, O, n, 0, d, _.UNSIGNED_BYTE, A), Qi(_, _.TEXTURE_MIN_FILTER, _.LINEAR), _.bindRenderbuffer($, f.render), _.renderbufferStorage($, _.DEPTH_COMPONENT16, O, n), Gm(_, f.frame), _.framebufferTexture2D(E, _.COLOR_ATTACHMENT0, r, f.texture, 0), _.framebufferRenderbuffer(E, _.DEPTH_ATTACHMENT, $, f.render), Dm(_, A), _.bindRenderbuffer($, A), Gm(_, A), f.width = O, f.height = n), f._iv && (f._iv = !1, Gm(_, f.frame), o._42(u || (f.colorMap = {}), 1), Gm(_, A))
        }
      }
    });
    var Uc = function (h) {
      this.gv = h
    };
    Dr(Uc, F, {
      gap: 0, size: 0, _42: function ($, s) {
        var B = this, w = B.gv, x = w._gridGap, b = w._gridSize;
        if (w._gridVisible) {
          if (B.gap !== x || B.size !== b) {
            for (var l = [], R = w._gridSize / 2, P = x * R, e = 0; 2 * R + 1 > e; e++) {
              var n = 6 * e, S = 6 * (2 * R + 1) + n;
              l[n] = -P, l[n + 1] = 0, l[n + 2] = -P + e * x, l[n + 3] = P, l[n + 4] = 0, l[n + 5] = -P + e * x, l[S] = -P + e * x, l[S + 1] = 0, l[S + 2] = -P, l[S + 3] = -P + e * x, l[S + 4] = 0, l[S + 5] = P
            }
            B.vs = new on(l), B.gap = x, B.size = b
          }
          _k(w), sb($, s), Ho($), os($, s, 1, w._gridColor, w._buffer.vs, B.vs), ae($, 0, B.vs.length / 3, $.LINES), hb($), Hq($, s)
        } else B.vs = B.gap = B.size = A
      }
    });
    var Jr = function (E) {
      this.gv = E
    };
    Dr(Jr, F, {
      _42: function (s, Z) {
        var D = this.gv, G = D._buffer.vs, h = D._axisXColor, p = D._axisYColor, x = D._axisZColor,
          f = D._originAxisVisible, P = D._centerAxisVisible;
        if (f || P) {
          var r = N ? s.TRIANGLES : s.TRIANGLE_FAN, I = s.LINES;
          if (_k(D), sb(s, Z), Ho(s), f) {
            var S = D.getCenterInfo(), U = L(S.width, S.height) / 5, w = .8 * U, l = .05 * U;
            os(s, Z, 1.5, h, G, new on([0, 0, 0, U, 0, 0, w, l, 0, w, 0, l, w, -l, 0, w, 0, -l, w, l, 0, 0, 0, 0, 0, U, 0, l, w, 0, 0, w, l, -l, w, 0, 0, w, -l, l, w, 0, 0, 0, 0, 0, 0, U, l, 0, w, 0, l, w, -l, 0, w, 0, -l, w, l, 0, w])), ae(s, 0, 2, I), ae(s, 1, 6, r), os(s, Z, A, p), ae(s, 7, 2, I), ae(s, 8, 6, r), os(s, Z, A, x), ae(s, 14, 2, I), ae(s, 15, 6, r)
          }
          if (P) {
            var F = D._center, j = F[0], E = F[1], t = F[2], S = D.getPositionInfo(F);
            U = L(S.width, S.height) / 20, os(s, Z, 1.5, h, G, new on([j, E, t, j + U, E, t, j, E, t, j, E + U, t, j, E, t, j, E, t + U])), ae(s, 0, 2, I), os(s, Z, A, p), ae(s, 2, 2, I), os(s, Z, A, x), ae(s, 4, 2, I)
          }
          hb(s), Hq(s, Z)
        }
      }
    });
    var fj = function (c) {
        this.gv = c
      }, qr = "edit_tx", mo = "edit_ty", $i = "edit_tz", ko = "edit_rx", Iq = "edit_ry", Qg = "edit_rz", bm = "edit_sx",
      Fb = "edit_sy", vh = "edit_sz", vc = {};
    vc[qr] = 1, vc[mo] = 1, vc[$i] = 1, vc[ko] = 1, vc[Iq] = 1, vc[Qg] = 1, vc[bm] = 1, vc[Fb] = 1, vc[vh] = 1, Dr(fj, F, {
      _42: function (P, i, C) {
        var F = this, K = F.gv, B = K.sm().ld();
        if (K.isEditable(B) && !K.isEditHelperDisabled() && Kf(B) && (!K.isFirstPersonMode() || !K.isMouseRoamable() && !Qe)) {
          _k(K);
          var H, v, s = K.isMovable(B), t = K.isRotationEditable(B), f = K.isSizeEditable(B), d = K._axisXColor,
            X = K._axisYColor, Y = K._axisZColor, $ = K._editSizeColor, I = B.p3(), Z = lf(K.getEye(), I) / 10,
            a = Z / (C ? 5 : 10), T = .7 * Z, u = .4 * T, p = I[0], x = I[1], L = I[2];
          H = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], s && F._17O(P, i, B, C, qr, d, H, [p, x - a, L, p + T, x - a, L, p + T, x, L, p + T, x, L, p, x, L, p, x - a, L, p, x - a, L + a, p + T, x - a, L + a, p + T, x - a, L, p + T, x - a, L, p, x - a, L, p, x - a, L + a]), v = p + T, f && F._17O(P, i, B, C, bm, $, H, [v, x - a, L, v + u, x - a, L, v + u, x, L, v + u, x, L, v, x, L, v, x - a, L, v, x - a, L + a, v + u, x - a, L + a, v + u, x - a, L, v + u, x - a, L, v, x - a, L, v, x - a, L + a]), v += u, t && F._17O(P, i, B, C, ko, d, H, [v, x - a, L, v + u, x - a, L, v + u, x, L, v + u, x, L, v, x, L, v, x - a, L, v, x - a, L + a, v + u, x - a, L + a, v + u, x - a, L, v + u, x - a, L, v, x - a, L, v, x - a, L + a]), H = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], s && F._17O(P, i, B, C, mo, X, H, [p, x, L, p, x + T, L, p - a, x + T, L, p - a, x + T, L, p - a, x, L, p, x, L, p, x, L, p, x, L - a, p, x + T, L - a, p, x + T, L - a, p, x + T, L, p, x, L]), v = x + T, f && F._17O(P, i, B, C, Fb, $, H, [p, v, L, p, v + u, L, p - a, v + u, L, p - a, v + u, L, p - a, v, L, p, v, L, p, v, L, p, v, L - a, p, v + u, L - a, p, v + u, L - a, p, v + u, L, p, v, L]), v += u, t && F._17O(P, i, B, C, Iq, X, H, [p, v, L, p, v + u, L, p - a, v + u, L, p - a, v + u, L, p - a, v, L, p, v, L, p, v, L, p, v, L - a, p, v + u, L - a, p, v + u, L - a, p, v + u, L, p, v, L]), H = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], s && F._17O(P, i, B, C, $i, Y, H, [p, x, L, p, x, L + T, p, x - a, L + T, p, x - a, L + T, p, x - a, L, p, x, L, p, x - a, L, p - a, x - a, L, p - a, x - a, L + T, p - a, x - a, L + T, p, x - a, L + T, p, x - a, L]), v = L + T, f && F._17O(P, i, B, C, vh, $, H, [p, x, v, p, x, v + u, p, x - a, v + u, p, x - a, v + u, p, x - a, v, p, x, v, p, x - a, v, p - a, x - a, v, p - a, x - a, v + u, p - a, x - a, v + u, p, x - a, v + u, p, x - a, v]), v += u, t && F._17O(P, i, B, C, Qg, Y, H, [p, x, v, p, x, v + u, p, x - a, v + u, p, x - a, v + u, p, x - a, v, p, x, v, p, x - a, v, p - a, x - a, v, p - a, x - a, v + u, p - a, x - a, v + u, p, x - a, v + u, p, x - a, v])
        }
      }, _17O: function (S, B, c, J, I, P, j, l) {
        var y = this.gv._buffer;
        Ti(S, B, J, !0, c, I), Bg(S, B, A, !0, A, !0, A, !1), ke(S, B.uDiffuse, P), Vi(S, y.vs, new on(l), B.aPosition), Vi(S, y.ns, new on(j), B.aNormal), Ho(S), ae(S, 0, 12), hb(S), Mc(S, B)
      }
    });
    var di = Q.Raycaster = function (G) {
      this.gv = G
    };
    Lj("Raycaster", F, {
      intersect: function (M) {
        var k = this, Y = k.gv, U = Y.getDataAt(M);
        return U ? k.intersectObject(M, U) : null
      }, intersectObjects: function (H, q, g) {
        var V, Z, M, D, K = this, A = 1 / 0, d = H.origin || (new $h).fromArray(K.gv.getEye());
        return q.forEach(function (u) {
          g && g(u) === !1 || u.s("intersect") !== !1 && (V = K.intersectObject(H, u), V && (Z = d.distanceToSquared(V.world), A > Z && (M = u, D = V, A = Z)))
        }), {data: M, intersect: D}
      }, intersectObject: function (S, o) {
        if (S instanceof ym) return this._intersectObjectImpl(S, o);
        var Z, X, V = this, u = V.gv;
        X = u.unproject(S);
        var i = u.getEye();
        u.isOrtho() ? (Z = el(u.getCenter(), i), Z[0] += Z[0], Z[1] += Z[1], Z[2] += Z[2]) : Z = i, Z = new $h(Z);
        var x = new $h(X).sub(Z).normalize(), e = new Q.Math.Ray(Z, x);
        return V._intersectObjectImpl(e, o)
      }, _intersectObjectImpl: function () {
        function u() {
          var D = new $h;
          return D.subVectors(q, M), b.subVectors(X, M), D.cross(b).normalize(), D
        }

        function J(P, X, T, l, i, W, e) {
          return hs.barycoordFromPoint(P, X, T, l, S), i.multiplyScalar(S.x), W.multiplyScalar(S.y), e.multiplyScalar(S.z), i.add(W).add(e), i.clone()
        }

        var Y = new ej, R = new ej, f = new ym, Z = new $h, W = new $h, j = new $h, s = new $h, H = new $h, X = new $h,
          M = new $h, q = new $h, G = new Gp, P = new Gp, A = new Gp, b = new $h, V = {vs: vo, is: Nd, uv: Wh},
          S = new $h;
        return function (z, C) {
          var B = this.gv.getData3dUI(C), t = C.mat || B.mat;
          if (t) {
            Y.fromArray(t), R.getInverse(Y), f.copy(z).applyMatrix4(R);
            var p, o, $ = "body", I = B.shapeModel;
            if (I || (I = ao(B)), I || (C instanceof Q.Node && !(C instanceof Q.Shape) ? (p = !0, I = V) : (o = !0, I = [B.left, B.front, B.right, B.back, B.top, B.bottom])), !I) return console.log("Can not find shape model."), null;
            cl(I) || (I = [I]);
            var l, L, r, O, S, k, a, E, b, T, F, c, K, D, d = 1 / 0, v = ["", "top_", "bottom_"], x = !1;
            for (l = 0, L = I.length; L > l; l++) if (c = I[l]) for (r = 0, O = v.length; O > r; r++) if (K = v[r], a = c[K + "vs"], E = c[K + "is"], b = c[K + "uv"] || c[K + "tuv"], a) {
              if (D = c[K + "boundingBox"]) {
                if (!f.intersectBox(D)) continue
              } else c[K + "boundingBox"] = D = new Q.Math.Box3;
              for (S = 0, k = E ? E.length : a.length / 3; k > S; S += 3) E ? (W.fromArray(a, 3 * E[S]), j.fromArray(a, 3 * E[S + 1]), s.fromArray(a, 3 * E[S + 2])) : (W.fromArray(a, 3 * S), j.fromArray(a, 3 * (S + 1)), s.fromArray(a, 3 * (S + 2))), D.expandByPoint(W), D.expandByPoint(j), D.expandByPoint(s), T = f.intersectTriangle(W, j, s, !1, Z), T && (F = f.origin.distanceTo(T), d > F && (d = F, H.copy(T), X.copy(W), M.copy(j), q.copy(s), "" !== K ? $ = K.slice(0, -1) : p ? $ = Hm[Math.floor(S / 6)] : o && ($ = Hm[l]), b && (x = !0, E ? (G.fromArray(b, 2 * E[S]), P.fromArray(b, 2 * E[S + 1]), A.fromArray(b, 2 * E[S + 2])) : (G.fromArray(b, 2 * S), P.fromArray(b, 2 * (S + 1)), A.fromArray(b, 2 * (S + 2))))))
            }
            if (!isFinite(d)) return null;
            var N, e = H.clone().applyMatrix4(Y);
            x && (N = J(H, X, M, q, G, P, A));
            var h = u(X, M, q), i = u(X.applyMatrix4(Y), M.applyMatrix4(Y), q.applyMatrix4(Y)), y = f.direction.dot(h);
            return y > 0 && (h.multiplyScalar(-1), i.multiplyScalar(-1)), {
              world: e,
              local: H.clone(),
              worldNormal: i,
              normal: h,
              uv: N,
              part: $
            }
          }
        }
      }()
    });
    var Si = function (t, p) {
      this.gv = t, this.s = function (s, H, B) {
        return H == A && (H = B), H == A ? p.getStyle(s) : $q(H, p, t)
      }, this.data = p
    };
    Dr(Si, F, {
      I3d: !0, ms_icons: 1, _iv: !0, iv: function () {
        this._iv = !0
      }, _42: function (u, e, R, D) {
        var E = this, j = E.data;
        if (!(j instanceof Bp)) {
          var S, O, X, r, z, b, J, p = E.gv, s = j._id, y = E.s("shape3d.alwaysOnTop") ? null : E.s("batch"),
            l = p._batchIndexMap, t = p._batchModelMap, h = p.isSelectable(j), G = p.getBrightness(j),
            V = G != A && 1 !== G;
          if (E.needValidate(u)) {
            if (X = Zc(l, t, j, y), E.validate(X, y ? ok[y] || ho : A), X && (r = l[s], z = r.size = X.vs.length / 3 - r.begin, J = X.rs)) for (G = V ? G : 1, b = 0; z > b; b++) J.push(G);
            if (Kf(j)) {
              var w = p.getWireframeGeometry(j);
              if (w) ei(p, j, w); else {
                var a = p.getWireframe(j);
                a && ei(p, j, a)
              }
            }
            E.labelInfo = E.label2Info = E.noteInfo = E.note2Info = E._38o = A, E._24O(Dg, "getLabel"), E._24O(rl, "getLabel2"), E._26O(Wd, "getNote"), E._26O(qc, "getNote2"), E._15O(), E.interactiveInfo = p.isInteractive(j) ? {} : A, E._iv = !1
          }
          V && ke(u, e.uBrightness, G), ke(u, e.uAlphaTest, E.s("alphaTest")), O = Ti(u, e, R, h, j, om), O && (hl(O, l[s], t), hl(O, p._polylineIndexMap[s], p._polylineModelMap), hl(O, p._wireframeIndexMap[s], p._wireframeModelMap)), l[s] || E._80o(u, e, D), p.isLabelVisible(j) && ((S = E.labelInfo) && (Ti(u, e, R, h, j, Dg), E._28O(S, Dg, D)), (S = E.label2Info) && (Ti(u, e, R, h, j, rl), E._28O(S, rl, D))), p.isNoteVisible(j) && ((S = E.noteInfo) && (Ti(u, e, R, h, j, Wd), E._29O(S, Wd, D)), (S = E.note2Info) && (Ti(u, e, R, h, j, qc), E._29O(S, qc, D))), (S = E._38o) && E._99O(u, e, S, R, h, D), V && ke(u, e.uBrightness, 1)
        }
      }, needValidate: function () {
        return this._iv
      }, validate: function () {
      }, _16O: function () {
        return Xf
      }, _80o: function () {
      }, dispose: function () {
      }, _calcAnchorMat: function (I) {
        if (I.hasOwnProperty("_anchor") || I.hasOwnProperty("_anchorElevation")) {
          var q = I.getAnchor3d(), M = {x: q.x - .5, y: q.y - .5, z: q.z - .5}, u = gc();
          return Dc(u, [-M.x, -M.y, -M.z]), u
        }
      }, getBodyColor: function (y) {
        var B = this.data, O = this.gv.getBodyColor(B);
        return O ? O : y ? B.getStyle(y) : A
      }, _24O: function (K, G) {
        var T = this, F = T.data, c = T.gv, h = T.s, E = c[G](F);
        if (E != A) {
          var i = h(K + ".scale"), d = h(K + ".max"), Y = T[K + "Info"] = {
            label: E,
            textureScale: h(K + ".texture.scale"),
            color: c[G + "Color"](F),
            font: h(K + ".font"),
            align: h(K + ".align"),
            background: c[G + "Background"](F)
          }, v = Y.rect = ms(Y, E);
          d > 0 && d < v.width && (Y.labelWidth = v.width, v.width = d), v.x = v.y = 0, v.width *= i, v.height *= i, Y.mat = T._16O(h(K + ".autorotate"), h(K + ".position"), v, h(K + ".face"), h(K + ".t3"), h(K + ".r3"), h(K + ".rotationMode"));
          var p = v.width / 2, m = v.height / 2;
          Y.vs = new on([-p, m, 0, -p, -m, 0, p, -m, 0, p, m, 0]), v.width /= i, v.height /= i
        }
      }, _26O: function (F, t) {
        var h = this, X = h.data, S = h.gv, d = h.s, y = S[t](X);
        if (y != A) {
          var k = d(F + ".scale"), z = this[F + "Info"] = {
            note: y,
            textureScale: d(F + ".texture.scale"),
            expanded: d(F + ".expanded"),
            font: d(F + ".font"),
            color: d(F + ".color"),
            align: d(F + ".align"),
            borderWidth: d(F + ".border.width"),
            borderColor: d(F + ".border.color"),
            background: S[t + "Background"](X)
          };
          if (z.expanded) {
            var j = d(F + ".max"), O = ms(z, y);
            O.width += 6, O.height += 2, j > 0 && j < O.width && (z.labelWidth = O.width, O.width = j);
            var M = {x: -O.width / 2, y: -8 - O.height, width: O.width, height: O.height + 8}
          } else M = {x: -6, y: -18, width: 12, height: 18};
          z.mat = h._16O(d(F + ".autorotate"), d(F + ".position"), A, d(F + ".face"), d(F + ".t3"), d(F + ".r3"), d(F + ".rotationMode")), z.rect = M, 1 !== k && (M = Wf(M), M.x *= k, M.height *= k, M.y = -M.height, M.width *= k);
          var n = M.x, o = M.y, x = M.width, b = M.height;
          z.vs = new on([n, -o, 0, n, -o - b, 0, n + x, -o - b, 0, n + x, -o, 0])
        }
      }, _28O: function (f, r, p) {
        if (p(this.s(r + ".transparent"))) {
          var s = f.rect, c = f.textureScale, B = s.width * c, u = s.height * c;
          if (B >= 1 && u >= 1) {
            var l = zj(B, u);
            1 !== c && (l.translate(l, s.x, s.y), l.scale(c, c), l.translate(l, -s.x, -s.y)), xi(l, f), l.restore(), Bs(this, r, f.mat, f.vs, !0)
          }
        }
      }, _29O: function (M, e, o) {
        if (o(this.s(e + ".transparent"))) {
          var w = M.rect, q = M.textureScale, g = w.x, L = w.y, G = w.width * q, x = w.height * q;
          if (G >= 1 && x >= 1) {
            w.x = w.y = 0;
            var C = zj(G, x);
            1 !== q && C.scale(q, q), yb(C, M), C.restore(), w.x = g, w.y = L, Bs(this, e, M.mat, M.vs, !1)
          }
        }
      }, _99O: function (P, V, F, R, f, i) {
        if (F) {
          var _ = this, T = _.gv, C = _.data, Q = T._buffer, z = T._1O, O = F.icons;
          for (var S in O) {
            var L = O[S], M = F.rects[S];
            if (M && i($q(L.transparent, C, T))) {
              Ti(P, V, R, f, C, S);
              var c = $q(L.shape3d, C, T), X = c ? [c] : $q(L.names, C, T), Y = X ? X.length : 0,
                K = $q(L.textureScale, C, T) || 1, x = $q(L.light, C, T);
              x == A && (x = c ? !0 : !1), Bg(P, V, $q(L.blend, C, T), x, $q(L.opacity, C, T), $q(L.reverseFlip, C, T), $q(L.reverseColor, C, T), $q(L.reverseCull, C, T));
              for (var w = 0; Y > w; w++) {
                var r = X[w], n = M[w];
                if (lr(_, n.mat), c) Nk(T, C, ao(_, c), _); else {
                  var b = vf(r);
                  if (b) {
                    var m = n.width * K, $ = n.height * K;
                    if (m >= 1 && $ >= 1) {
                      var y = zj(m, $);
                      Jl(y, b, $q(L.stretch, C, T), 0, 0, m, $, C, T), y.restore(), Io(P, Gr, z), Ho(P, V, z, $q(L.discardSelectable, C, T), Q.uv, zs), Vi(P, Q.vs, n.vs, V.aPosition), $m(P, Q.ns, sl, V.aNormal), ki(P, Q.is, We), or(P, 0, We.length), hb(P, V, z)
                    }
                  }
                }
                Ub(T)
              }
              Mc(P, V)
            }
          }
        }
      }
    });
    var Nc = function (b, p) {
      Eo(Nc, this, [b, p])
    };
    Dr(Nc, Si, {
      _16O: function (i, v, H, y, W, K, g, s, P) {
        var x = this.data, M = x.getFinalScale3d(), R = ak(v, M, H, y, s, P);
        if (x.hasOwnProperty("_anchor") || x.hasOwnProperty("_anchorElevation")) {
          var D = x.getAnchor3d();
          R[0] -= (D.x - .5) * M[0], R[1] -= (D.y - .5) * M[1], R[2] -= (D.z - .5) * M[2]
        }
        return re(gc(), R, x.p3(), y, W, K, g, i, x.getFinalRotation3d(), x.getRotationMode())
      }, clear: function () {
        var y = this;
        y.faceMat = y.mat = y.shapeModel = y.left = y.right = y.front = y.back = y.top = y.bottom = y.csg = A
      }, needValidate: function (Z) {
        if (this._iv) return this._validateFrameId = Z._renderInfo.frame, !0;
        if (this.s("shape3d.autorotate") || this.s("shape3d.fixSizeOnScreen") || this.s("hide.overlapping.group")) {
          var b = Z._renderInfo.frame;
          if (this._validateFrameId !== b) return this._validateFrameId = b, !0
        }
        return !1
      }, validate: function (K, L) {
        var e = this, b = e.gv, M = e.data, r = ao(e);
        e._updateAutoRotation(), e._updateFixSize2d(), e._updateOverlapping(), (this.s("shape3d.autorotate") || this.s("shape3d.fixSizeOnScreen")) && (Wg(b, M, "_wireframeModelMap", "_wireframeIndexMap"), Wg(b, M, "_wireframeModelMapSwap", "_wireframeIndexMapSwap"));
        var E = Sh(M, b.getMat(M), r ? e.s("shape3d.scaleable") : !0), v = e._calcAnchorMat(M);
        if (v && fp(E, E, v), M.mat = E, e.clear(), K) {
          var Q = [];
          r ? Gl(b, M, r, e, e.getBodyColor(), [E], K, Q) : (Km(b, M, K, L, E, kl, Q, Un), Km(b, M, K, L, E, we, Q, Rr), Km(b, M, K, L, E, rd, Q, Pg), Km(b, M, K, L, E, Aj, Q, ys), Km(b, M, K, L, E, ji, Q, er), Km(b, M, K, L, E, _d, Q, as)), Q.length && (yn(K.vs, Q), yn(K.ns, kb(Q)))
        } else e.mat = E, (e.shapeModel = r) || (e._cubeUvs = null, e.vf(kl, 0), e.vf(we, 16), e.vf(ji, 8), e.vf(_d, 24), e.vf(rd, 32), e.vf(Aj, 40))
      }, _updateAutoRotation: function () {
        var L = new Kb;
        return function () {
          var R = this, j = R.data, d = R.s("shape3d.autorotate");
          if (!d) return j._dynamicRotation && delete j._dynamicRotation, void 0;
          var V, B = R.gv;
          V = "string" == typeof d ? [d.indexOf("x") < 0 ? B._eye[0] : B._center[0], d.indexOf("y") < 0 ? B._eye[1] : B._center[1], d.indexOf("z") < 0 ? B._eye[2] : B._center[2]] : B._eye;
          var q = B._center, I = j.p3(), J = Gd([I[0] + V[0] - q[0], I[1] + V[1] - q[1], I[2] + V[2] - q[2]], I, B._up),
            S = j.r3();
          L.set(0, 0, 0, j.getRotationMode(), !0).setFromRotationMatrix(J), Math.abs(S[0] - L.x) < 1e-5 && Math.abs(S[1] - L.y) < 1e-5 && Math.abs(S[2] - L.z) < 1e-5 || (j._dynamicRotation = [L.x, L.y, L.z])
        }
      }(), _updateFixSize2d: function () {
        var R = this, X = R.data, M = R.s("shape3d.fixSizeOnScreen");
        if (!M) return X._dynamicScale3d && delete X._dynamicScale3d, void 0;
        var l = R.gv;
        X.getFinalScale3d();
        var g = Sh(X, l.getMat(X)), O = Qp([0, 0, 0], g), d = l.toViewPosition(O);
        if (!isNaN(d.x) && !isNaN(d.y)) {
          var t = Qp([1, 0, 0], g), N = l.toViewPosition(t), b = Qp([0, 1, 0], g), E = l.toViewPosition(b),
            A = N.x - d.x, Y = E.y - d.y, U = X._dynamicScale3d || [1, 1, 1], s = vf(X.s("shape3d.image")),
            m = M[0] > 0 ? M[0] : s ? Hk(s, R) : 20, K = M[1] > 0 ? M[1] : s ? Ll(s, R) : 20, c = Math.abs(A / m),
            x = Math.abs(Y / K);
          Math.abs(c - 1) < .001 && Math.abs(x - 1) < .001 || (X._dynamicScale3d = [U[0] / c, U[1] / x, U[2]])
        }
      }, _updateOverlapping: function () {
        var M = this, b = M.s("hide.overlapping.group");
        if (!b) return M._rectOverlapping && (M._rectOverlapping = S), void 0;
        var $, J, B, n = M.gv, G = M.data, r = Sh(G, n.getMat(G)), T = 1 / 0, I = 1 / 0, W = -1 / 0, R = -1 / 0,
          j = G.getAnchor3d(), p = j.x, d = j.y, q = j.z;
        for ($ = 0; 8 > $; $++) {
          if (J = Qp([($ >> 2) - p, (1 & $ >> 1) - d, (1 & $) - q], r), B = n.toViewPosition(J), isNaN(B.x) || isNaN(B.y)) return;
          T = Math.min(T, B.x), W = Math.max(W, B.x), I = Math.min(I, B.y), R = Math.max(R, B.y)
        }
        var E = {x: T, y: I, w: W - T, h: R - I};
        M._rectOverlapping = n.overlappingBox.isOverlapping(b, E)
      }, getVectorDynamicSize: function () {
        var n, u = this, H = u.s("shape3d"), P = u.data;
        if ("billboard" === H || "plane" === H || (n = P._currentCubeElementId) != A) {
          var C, Y, W = u.gv, m = Sh(P, W.getMat(P)), x = function (F, R) {
            var j = W.toViewPosition(Qp(F, m)), n = W.toViewPosition(Qp(R, m)), T = j.x - n.x, g = j.y - n.y;
            return Math.min(2048, Math.sqrt(T * T + g * g))
          };
          if ("billboard" === H) C = x([-.5, 0, 0], [.5, 0, 0]), Y = x([0, -.5, 0], [0, .5, 0]); else if ("plane" === H) C = x([-.5, 0, 0], [.5, 0, 0]), Y = x([0, 0, -.5], [0, 0, .5]); else if (P._currentCubeElementId != A) {
            var T = 3 * Nd[n + 1], k = 3 * Nd[n], I = 3 * Nd[n + 2];
            C = x([vo[T], vo[T + 1], vo[T + 2]], [vo[I], vo[I + 1], vo[I + 2]]), Y = x([vo[T], vo[T + 1], vo[T + 2]], [vo[k], vo[k + 1], vo[k + 2]])
          }
          return [C, Y]
        }
      }, getCachedTexture: function () {
        var p = this, Q = p.data, U = Q._currentCubeElementId;
        return U != A ? p._cubeCachedImage ? p._cubeCachedImage[U] : null : p._shape3dCachedImage
      }, setCachedTexture: function (s) {
        var M = this, K = M.data, a = K._currentCubeElementId;
        if (a != A) {
          if (!M._cubeCachedImage) return M._cubeCachedImage = {};
          M._cubeCachedImage[a] = s
        } else M._shape3dCachedImage = s
      }, invalidateCachedTexture: function (u) {
        var y, S, e, r = this;
        if ((e = r._shape3dCachedImage) && (u.deleteTexture(e), r._shape3dCachedImage = null), S = r._cubeCachedImage) {
          for (y in S) u.deleteTexture(S[y]);
          r._cubeCachedImage = null
        }
      }, vf: function (I, G) {
        var u = this;
        if (u.gv.getFaceVisible(u.data, I)) {
          var M = Jk(u, I);
          M.mat && (u.faceMat = !0);
          var v = M.uv;
          if (v) {
            var U = u._cubeUvs;
            U || (U = u._cubeUvs = new on([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]));
            for (var Z = 0; 8 > Z; Z++) U[G + Z] = v[Z]
          }
          return M
        }
      }, _80o: function (L, V, k) {
        var M = this;
        if (M._rectOverlapping) return !0;
        var j = M.gv, P = M.data, J = j._cube, Z = M.shapeModel;
        _k(j, M.mat), Z ? Nk(j, P, Z, M, M.getBodyColor(), k) : (Vi(L, J.vs, A, V.aPosition), Vi(L, J.ns, A, V.aNormal), xh(L, J.is), M._18O(L, V, M.left, 0, k), M._18O(L, V, M.front, 6, k), M._18O(L, V, M.right, 12, k), M._18O(L, V, M.back, 18, k), M._18O(L, V, M.top, 24, k), M._18O(L, V, M.bottom, 30, k)), Ub(j), M.faceMat && (M._18O(L, V, M.left, 0, k, !0), M._18O(L, V, M.front, 6, k, !0), M._18O(L, V, M.right, 12, k, !0), M._18O(L, V, M.back, 18, k, !0), M._18O(L, V, M.top, 24, k, !0), M._18O(L, V, M.bottom, 30, k, !0))
      }, _18O: function (c, H, k, _, v, s) {
        if (k) {
          if (!v(k.transparent)) return;
          if (s && !k.mat || !s && k.mat) return;
          s && _k(this.gv, k.mat);
          var e = this, m = e.data;
          m._currentCubeElementId = _;
          var Z = e.gv, L = Z.getTexture(k.texture, m), B = k.uv, n = k.uvScale, I = k.uvOffset,
            O = k.discardSelectable;
          L ? B ? Ho(c, H, L, O, Z._buffer.uv, e._cubeUvs, I, n) : Ho(c, H, L, O, Z._cube.uv, A, I, n) : Ho(c), Bg(c, H, k.blend, k.light, k.opacity, k.reverseFlip, k.reverseColor, k.reverseCull), ke(c, H.uDiffuse, k.color), or(c, _, 6), Mc(c, H), hb(c, H, L), s && Ub(Z), m._currentCubeElementId = null
        }
      }
    });
    var _g = function (f, i) {
      Eo(_g, this, [f, i])
    };
    Dr(_g, Si, {
      _25Q: 1, validate: function (m) {
        var a = this, o = a.gv, g = a.data, f = a.s, I = f("edge.width"), W = g._40I, X = g._41I;
        if (a.shapeModel = a.info = A, W && X) {
          var J, Q, u, p, D, l, _, R, w, y, K = g.isLooped(), r = f(Vm), q = E.getEdgeType(r);
          if (q) {
            var O = q(g, ud(a, o, g, K, r), o, a._19Q);
            if (!O.points || O.points.isEmpty()) return;
            l = a.info = {}, _ = O.segments, D = O.points, R = D.size();
            for (var T = W.getElevation(), z = X.getElevation(), S = 0; R > S; S++) {
              var h = D.get(S);
              h.e == A && (h.e = T + (z - T) * S / (R - 1))
            }
            w = Bl(D.get(0)), y = Bl(D.get(R - 1));
            var t = R % 2;
            0 === t ? (l.c1 = Bl(D.get(R / 2 - 1)), l.c2 = Bl(D.get(R / 2))) : l.p3 = Bl(D.get((R - t) / 2)), l.s1 = w, l.s2 = Bl(D.get(1)), l.t1 = Bl(D.get(R - 2)), l.t2 = y
          } else {
            D = new Oh, l = a.info = {};
            var n = f("edge.offset"), k = f("edge.center"), N = f("edge.source.t3"), G = f("edge.target.t3"),
              c = W.p3(), V = X.p3();
            if (N && (c[0] += N[0], c[1] += N[1], c[2] += N[2]), G && (V[0] += G[0], V[1] += G[1], V[2] += G[2]), r === vl) {
              _ = f("edge.segments");
              var C = l.points = f(Ni) || ai;
              if (R = C.size()) {
                w = Bl(C.get(0)), y = Bl(C.get(R - 1)), !k && n && (u = el(w, c, !0), n = L(n, lf(c, w)), c = [c[0] + u[0] * n, c[1] + u[1] * n, c[2] + u[2] * n], u = el(V, y, !0), n = L(n, lf(y, V)), V = [V[0] - u[0] * n, V[1] - u[1] * n, V[2] - u[2] * n]);
                var t = R % 2;
                0 === t ? (J = Bl(C.get(R / 2 - 1)), Q = Bl(C.get(R / 2))) : l.p3 = Bl(C.get((R - t) / 2)), l.s1 = c, l.s2 = w, l.t1 = y, l.t2 = V
              } else !k && n && (u = el(V, c, !0), p = lf(c, V), n = un(n, p), c = [c[0] + u[0] * n, c[1] + u[1] * n, c[2] + u[2] * n], V = [V[0] - u[0] * n, V[1] - u[1] * n, V[2] - u[2] * n]), J = c, Q = V;
              D.add({x: c[0], y: c[2], e: c[1]}), D.addAll(C), D.add({x: V[0], y: V[2], e: V[1]})
            } else {
              var Y = ud(a, o, g, K, r);
              if (a._19Q || (Y = -Y), K) {
                var M = c[0], H = c[1], B = c[2], x = W.getTall() / 2 + Y;
                J = [M - Y, H + x, B], Q = [M + Y, H + x, B], D.add({x: M - Y, y: B, e: H}), D.add({
                  x: M - Y,
                  y: B,
                  e: H + x
                }), D.add({x: M + Y, y: B, e: H + x}), D.add({x: M + Y, y: B, e: H})
              } else {
                u = el(V, c, !0), p = lf(c, V);
                var U = {x: c[0], y: c[2]}, Z = {x: V[0], y: V[2]}, v = zf(A, U, Z, Y), e = v.x - U.x, $ = v.y - U.y;
                n = un(n, p), u[0] *= n, u[1] *= n, u[2] *= n, J = [c[0] + u[0] + e, c[1] + u[1], c[2] + u[2] + $], Q = [V[0] - u[0] + e, V[1] - u[1], V[2] - u[2] + $], k ? (D.add({
                  x: c[0],
                  y: c[2],
                  e: c[1]
                }), D.add({x: J[0], y: J[2], e: J[1]}), D.add({x: Q[0], y: Q[2], e: Q[1]}), D.add({
                  x: V[0],
                  y: V[2],
                  e: V[1]
                })) : (D.add({x: J[0], y: J[2], e: J[1]}), D.add({x: Q[0], y: Q[2], e: Q[1]}))
              }
            }
            l.c1 = J, l.c2 = Q
          }
          l.list = f(jb) === uo ? a.createTubeModel(D, _, I / 2, m) : a.createLineModel(D, _, I, "edge", "edge.dash")
        }
      }
    });
    var Eq = function (x, b) {
      Eo(Eq, this, [x, b])
    };
    Dr(Eq, Nc, {
      _80o: function (A, D, f) {
        var R = this, p = R.gv, F = R.shapeModel;
        _k(p, R.mat), F ? Nk(p, R.data, F, R, R.getBodyColor(), f) : (Kk(R, A, D, R.left, f), Kk(R, A, D, R.front, f), Kk(R, A, D, R.right, f), Kk(R, A, D, R.back, f), Kk(R, A, D, R.top, f), Kk(R, A, D, R.bottom, f)), Ub(p)
      }, validate: function (k, v) {
        var G, B, V = this, j = V.s, K = V.data, C = K.p3(), R = K._thickness / 2, i = K.isClosePath(),
          z = K.getPoints(), Z = K.getSegments(), T = j(Ii), U = k && k.uv;
        if (V.clear(), 0 > R) B = V.shapeModel = eg(z, Z, j(ap), j(Ic), T, j(hn), K.getTall(), K.getShapeElevation(), i), j(Pl) ? j("shape3d.image") || delete B.uv : (delete B.vs, delete B.ns, delete B.uv), j("shape3d.top.image") || delete B.top_uv, j("shape3d.bottom.image") || delete B.bottom_uv; else if (j(jb) === uo) G = Gq(z, Z, T, i), B = V.shapeModel = {vs: []}, j("shape3d.image") && (B.uv = [], B.sum = j(hn) || qh(G) || 1, B.len = 0), j(ap) && !i && (B.top_vs = [], j("shape3d.top.image") && (B.top_uv = [])), j(Ic) && !i && (B.bottom_vs = [], j("shape3d.bottom.image") && (B.bottom_uv = [])), V._12O(G, R); else {
          var q, p, u, D, S, d, $, r, h, b;
          if (G = Gq(z, Z, T, i), S = V.vf(ji, U, !1, v), R && (d = V.vf(_d, U, !1, v), $ = i ? A : V.vf(kl, U, !1, v), r = i ? A : V.vf(we, U, !1, v), h = V.vf(rd, U, !1, v), b = V.vf(Aj, U, !1, v)), R) {
            for (var I = 0, a = G.length; a > I; I++) G[I] = V._tryRemoveBezierPoints(G[I], R);
            V._12O(G, R)
          } else S && G.forEach(function (t) {
            if (D = t.length, D > 0) for (q = t[0], u = 1; D > u; u++) p = t[u], V.addV(S.vs, q, p), q = p
          });
          V._20Q(G), k || (S && (S.ns = kb(S.vs), $e(S, "vs"), $e(S, Nb)), R && (d && (d.ns = kb(d.vs), $e(d, "vs"), $e(d, Nb)), $ && ($.ns = kb($.vs), $e($, "vs"), $e($, Nb)), r && (r.ns = kb(r.vs), $e(r, "vs"), $e(r, Nb)), h && (h.ns = kb(h.vs), $e(h, "vs"), $e(h, Nb)), b && (b.ns = kb(b.vs), $e(b, "vs"), $e(b, Nb))))
        }
        var P = V.mat = gc();
        Dc(P, C), $f(P, K.getFinalRotation3d(), K.getRotationMode());
        var y = K.getScale3d(), F = K._dynamicScale3d;
        F && (y[0] *= F[0], y[1] *= F[1], y[2] *= F[2]), il(P, y), Dc(P, dk(C)), k && (Kr(V, P, k, B), V.clear())
      }, _20Q: function (I) {
        var n, c, J, V, L, P, g, e = this, G = e.front, K = e.back, b = e.top, D = e.bottom, O = G ? G.tuv : A,
          j = K ? K.tuv : A, s = b ? b.tuv : A, x = D ? D.tuv : A, M = 0;
        (O || j || s || x) && (n = e.s(hn) || qh(I) || 1, I.forEach(function (N) {
          if (c = N.length, c > 0) for (P = N[0], J = 1; c > J; J++) g = N[J], V = M / n, M += lf(P, g), L = M / n, e._14O(G, V, L), e._14O(K, 1 - L, 1 - V), e._14O(b, V, L), e._14O(D, V, L), P = g
        }))
      }, _14O: function (p, l, w) {
        if (p) {
          var g = p.uv, E = p.tuv;
          if (E) {
            if (g) var i = g[0] + (g[6] - g[0]) * l, D = g[1] + (g[7] - g[1]) * l, k = g[2] + (g[4] - g[2]) * l,
              L = g[3] + (g[5] - g[3]) * l, s = g[2] + (g[4] - g[2]) * w, F = g[3] + (g[5] - g[3]) * w,
              V = g[0] + (g[6] - g[0]) * w,
              Y = g[1] + (g[7] - g[1]) * w; else i = l, D = 0, k = l, L = 1, s = w, F = 1, V = w, Y = 0;
            E.push(k, L, s, F, V, Y, V, Y, i, D, k, L)
          }
        }
      }, _13O: function (a) {
        var A = a.uv, i = a.tuv;
        i && (A ? i.push(A[2], A[3], A[4], A[5], A[6], A[7], A[6], A[7], A[0], A[1], A[2], A[3]) : i.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
      }, _tryRemoveBezierPoints: function (k, e) {
        var U = k.length;
        if (4 > U) return k;
        var d, T, z, S, V, I, G = !1, $ = function (n) {
          return k[n]
        }, c = function (p) {
          return k[U - 1 - p]
        };
        for (V = 0; 1 >= V; V++) for (I = V ? c : $, T = I(0), z = I(1), d = 2; U - 1 > d; d++) if (S = I(d), !S.remove) if (S.b) {
          var N = zf(T, z, S, e);
          N.adjust ? (S.remove = !0, G = !0) : (T = z, z = S)
        } else T = z, z = S;
        if (!G) return k;
        var x = [];
        for (d = 0; U > d; d++) k[d].remove || x.push(k[d]);
        return x
      }, _12O: function (b, X) {
        var L, F, z, q, u, V = this;
        b.forEach(function (H) {
          if (u = H.length, u > 0) for (L = {
            p: H[0],
            n: !0
          }, q = 1; u > q; q++) F = H[q], z = u - 1 > q ? H[q + 1] : A, V.addPoint(L, F, z, X, H)
        })
      }, addPoint: function (O, r, w, P, H) {
        var t, v, W, a, J, u, g, e, y, m = this, N = O.p, k = O.f, S = O.b, V = m.s("shape3d.side") || Og,
          i = m.s("shape3d.start.angle"), j = m.s("shape3d.sweep.angle"), D = m.shapeModel, Z = m.data.isClosePath();
        if (O.n && (O.n = !1, k = Z && H.length > 2 ? zf(H[H.length - 2], N, r, P) : zf(A, N, r, P), S = Xd(N, k), D ? D.top_vs && m._10O(S, k, V, i, j, D.top_vs, D.top_uv) : (t = m.left) && (m.addV(t.vs, S, k), m._13O(t))), v = w ? zf(N, r, w, P) : Z && H.length > 2 ? zf(N, r, H[1], P) : zf(N, r, A, P), W = Xd(r, v), D) {
          var T, h, z = D.vs, F = D.uv, Q = D.sum;
          for (F && (T = D.len / Q, D.len += lf(N, r), h = D.len / Q), u = m._9O(S, k, V, i, j), g = m._9O(W, v, V, i, j), e = 0; V > e; e++) y = e + 1, yn(z, u[y]), yn(z, g[e]), yn(z, u[e]), yn(z, g[e]), yn(z, u[y]), yn(z, g[y]), F && (a = e / V, J = y / V, F.push(T, J, h, a, T, a, h, a, T, J, h, J));
          !w && D.bottom_vs && m._10O(W, v, V, i, j, D.bottom_vs, D.bottom_uv, !0)
        } else !w && (t = m.right) && (m.addV(t.vs, v, W), m._13O(t)), (t = m.front) && m.addV(t.vs, k, v), (t = m.back) && m.addV(t.vs, W, S), (t = m.top) && m.addH(t.vs, k, v, W, S, !0), (t = m.bottom) && m.addH(t.vs, S, W, v, k);
        O.p = r, O.f = v, O.b = W
      }, _10O: function (F, d, e, B, q, I, P, m) {
        var V, A, Z = this, N = Z.data, v = Z._9O(F, d, e, B, q), h = (F.x + d.x) / 2, K = (F.y + d.y) / 2,
          O = N.getShapeElevation(), j = 0;
        for (j = 0; e > j; j++) m ? (yn(I, v[j]), yn(I, v[j + 1])) : (yn(I, v[j + 1]), yn(I, v[j])), yn(I, [h, O, K]), P && (m ? (V = U * (j + 1) / e + B, A = U * j / e + B) : (V = U * j / e + B, A = U * (j + 1) / e + B), P.push(.5 - .5 * J(A), .5 - .5 * D(A), .5 - .5 * J(V), .5 - .5 * D(V), .5, .5))
      }, _9O: function (W, S, b, Z, L) {
        var t, l, k = this, o = k.data, M = [], H = (W.x + S.x) / 2, g = (W.y + S.y) / 2, r = o.getTall() / 2,
          C = o.getShapeElevation(), u = 0;
        for (L = L || U; b >= u; u++) t = L * u / b + Z, l = J(t), M.push([H + (W.x - H) * l, C + r * D(t), g + (W.y - g) * l]);
        return M
      }, addV: function (s, p, h) {
        var A = p.x, F = p.y, T = h.x, N = h.y, r = this.data, z = r.getShapeElevation(), Y = r.getTall() / 2;
        s.push(A, z - Y, F, T, z - Y, N, T, z + Y, N, T, z + Y, N, A, z + Y, F, A, z - Y, F)
      }, addH: function (B, T, P, O, q, C) {
        var l = this.data, m = l.getTall() / 2, A = l.getShapeElevation() + (C ? m : -m);
        B.push(T.x, A, T.y, P.x, A, P.y, O.x, A, O.y, O.x, A, O.y, q.x, A, q.y, T.x, A, T.y)
      }, vf: function (O, Z, E, H) {
        var h, F = this, D = F.gv.getFaceVisible(F.data, O);
        return (E || D) && (h = Jk(F, O, H), h.vs = [], h.tuv = D && (h.texture || Z) ? [] : A, h.visible = D), h
      }
    });
    var Ed = function (Q, C) {
      Eo(Ed, this, [Q, C])
    };
    Dr(Ed, Si, {
      _25Q: 1, validate: function (p) {
        var F = this, d = F.data, O = F.s, o = d.getPoints(), N = o.size();
        if (F.shapeModel = F.info = A, N > 1) {
          var y = F.info = {}, X = d.getSegments(), B = d.getThickness(), H = Bl(o.get(0)), J = Bl(o.get(N - 1)),
            s = N % 2;
          0 === s ? (y.c1 = Bl(o.get(N / 2 - 1)), y.c2 = Bl(o.get(N / 2))) : y.p3 = Bl(o.get((N - s) / 2)), y.s1 = H, y.s2 = Bl(o.get(1)), y.t1 = Bl(o.get(N - 2)), y.t2 = J, y.list = O(jb) === uo ? F.createTubeModel(o, X, B / 2, p) : F.createLineModel(o, X, B, "shape.border", "shape.dash")
        }
        var f = d.p3(), L = F.mat = gc();
        Dc(L, f), $f(L, d.getFinalRotation3d(), d.getRotationMode());
        var S = d.getScale3d(), C = d._dynamicScale3d;
        C && (S[0] *= C[0], S[1] *= C[1], S[2] *= C[2]), il(L, S), Dc(L, dk(f))
      }, _80o: function (O, u, q) {
        var Y = this, x = Y.shapeModel;
        if (x) {
          var o = Y.gv;
          _k(o, Y.mat), Nk(o, Y.data, x, Y, Y.getBodyColor(), q), Ub(o)
        }
      }
    });
    var Yi = Q.graph3d.VR = function (I) {
      var N = this;
      N.gv = I, N._controllers = [], N.switch = new ph(N), N._enable = !1, N._defaultCallLater = Q.Default.callLater, "undefined" != typeof r && "VRFrameData" in r && (N._frameData = new r.VRFrameData), N.measureOflength = 1, N.eyesOffset = [0, 0, 0], N._orientation = new Q.Math.Quaternion, N._lastHeadPose = [0, 0, 0], N._offsetToBeAdd = [0, 0, 0]
    };
    Dr(Yi, F, {
      ms_fire: !0, _42: function (C, O, t, W) {
        var b = this, g = b.gv;
        if (b._deviceInAction) {
          var m = b._device;
          if (m) {
            var M = b._measureOflength;
            m.depthNear = g.getNear() * M, m.depthFar = g.getFar() * M;
            var j = b._offsetToBeAdd;
            if (b.eyesOffset[0] += j[0], b.eyesOffset[1] += j[1], b.eyesOffset[2] += j[2], j[0] = 0, j[1] = 0, j[2] = 0, m.isPresenting === !1) return b._controllers.forEach(function (z) {
              z && z.update()
            }), g.iv(), !1;
            var l = b._frameData;
            m.getFrameData(l);
            var Q = l.pose.position;
            return Q && (g.setEye(b.toViewPosition(Q)), b._orientation.fromArray(l.pose.orientation)), b._controllers.forEach(function (T) {
              T && T.update()
            }), C.viewport(0, 0, O / 2, t), b._viewMatrix = b._copyViewMatrix(l.leftViewMatrix), b._projectMatrix = b._copyProjectMatrix(l.leftProjectionMatrix), W(), C.viewport(O / 2, 0, O / 2, t), b._viewMatrix = b._copyViewMatrix(l.rightViewMatrix), b._projectMatrix = b._copyProjectMatrix(l.rightProjectionMatrix), W(), b._lastViewMatrix = b._viewMatrix, b._lastProjectMatrix = b._projectMatrix, b._viewMatrix = null, b._projectMatrix = null, b.submitFrame(), !0
          }
        }
      }, onVRDisplayPresentChange: function () {
        var Q = this.isPresenting();
        this._injectGraphView(Q), this.fp("present", !Q, Q)
      }, getOrientation: function () {
        return this._orientation
      }, addController: function (E) {
        E = E || 0;
        var u = this, m = u.getController(E);
        return m ? m : (m = new Ko(u, E), u._controllers.push(m), m)
      }, getController: function (M) {
        M = M || 0;
        for (var P = this._controllers, H = 0, R = P.length; R > H; H++) if (P[H] && P[H].id === M) return P[H];
        return null
      }, removeController: function (V) {
        V = V || 0;
        for (var w = this._controllers, Y = 0, L = w.length; L > Y; Y++) if (w[Y] && w[Y].id === V) return w.splice(Y, 1), !0;
        return !1
      }, getLastHeadPose: function () {
        return this._lastHeadPose
      }, toViewPosition: function (T, p) {
        var I = this, h = I._scaleFactor, x = I._eyesOffset, F = I._lastHeadPose;
        return F[0] = T[0] * h, F[1] = T[1] * h, F[2] = T[2] * h, p ? (p[0] = F[0] + x[0], p[1] = F[1] + x[1], p[2] = F[2] + x[2], p) : [F[0] + x[0], F[1] + x[1], F[2] + x[2]]
      }, addEyesOffset: function (i, g, K) {
        var A = this._offsetToBeAdd;
        A[0] += i, A[1] += g, A[2] += K
      }, _copyViewMatrix: function (X) {
        var T = this.dup(X), S = this._scaleFactor;
        T[12] *= S, T[13] *= S, T[14] *= S;
        var m = this._eyesOffset;
        if (m && (m[0] || m[1] || m[2])) {
          var b = m[0], w = m[1], N = m[2];
          T[12] -= T[0] * b + T[4] * w + T[8] * N, T[13] -= T[1] * b + T[5] * w + T[9] * N, T[14] -= T[2] * b + T[6] * w + T[10] * N
        }
        return T
      }, shutdown: function () {
        var g = this._device;
        g && g.isPresenting && g.exitPresent()
      }, isPresenting: function () {
        var j = this._device;
        return j && j.isPresenting
      }, _copyProjectMatrix: function (I) {
        var y = this.dup(I), v = this._scaleFactor;
        return y[14] *= v, y
      }, dup: function (Y, G) {
        for (var e = Y.length, t = G || new Array(e); e--;) t[e] = Y[e];
        return t
      }, getViewMatrix: function (D) {
        var n = this._viewMatrix;
        return n ? this.dup(n, D) : void 0
      }, getProjectMatrix: function () {
        var r = this._projectMatrix;
        return r ? this.dup(r) : void 0
      }, submitFrame: function () {
        var x = this;
        if (x._enable && x._deviceInAction) {
          var m = x._device;
          m && m.isPresenting && (m.submitFrame(), x.gv.iv())
        }
      }, intersectWorld: function (D) {
        var H = this.gv;
        return H.intersectObjects(D, H.dm().getDatas())
      }, setDevice: function (s) {
        var z = this;
        z._device = s
      }, _injectGraphView: function () {
        var A, Y, F;
        return function (H) {
          var h = this.gv;
          if (!H) return A && (h.getWidth = A, h.getHeight = Y, h.getDevicePixelRatio = F), void 0;
          var E = this._device, U = E.getEyeParameters("left"), t = U.renderWidth, Z = U.renderHeight;
          A = h.getWidth, Y = h.getHeight, F = h.getDevicePixelRatio, h.getWidth = function () {
            return 2 * t
          }, h.getHeight = function () {
            return Z
          }, h.getDevicePixelRatio = function () {
            return 1
          }
        }
      }(), _injectCallLaterFunc: function (N) {
        var y = this;
        if (!N) return Rl = Q.Default.callLater = y._defaultCallLater, void 0;
        var y = this;
        Rl = Q.Default.callLater = function (D, i, z, W) {
          var d = y._device;
          return d && d.isPresenting ? W ? x(function () {
            Rl(D, i, z)
          }, W) : d.requestAnimationFrame(function () {
            y._deviceInAction = !0, D.apply(i, z), y._deviceInAction = !1
          }) : y._defaultCallLater(D, i, z, z)
        }
      }
    }), F.defineProperties(Yi.prototype, {
      enable: {
        get: function () {
          return this._enable
        }, set: function (A) {
          var i = this;
          i._enable !== A && (i._enable = A, A ? (i.switch.showButton(), i._injectCallLaterFunc(!0)) : (i.shutdown(), i.switch.hideButton(), i._injectCallLaterFunc(!1)), i.fp("enable", !A, A))
        }
      }, measureOflength: {
        get: function () {
          return this._measureOflength
        }, set: function (V) {
          this._measureOflength = V;
          var l = this._scaleFactor = 1 / V;
          this._controllers.forEach(function (P) {
            P && P._setScaleFactor(l)
          })
        }
      }, eyesOffset: {
        get: function () {
          return this._eyesOffset
        }, set: function (b) {
          this._eyesOffset = b
        }
      }, controllerModel: {
        get: function () {
          return this._controllerModel
        }, set: function (e) {
          var g;
          "object" == typeof e ? (g = e.mtl, e = e.obj) : (g = e + ".mtl", e += ".obj");
          var C = this, q = C._controllerModel;
          q && q.obj === e && q.mtl === g || (q = C._controllerModel = {
            obj: e,
            mtl: g
          }, E.loadObj(e, g, {
            finishFunc: function (r, B) {
              C._controllerModel === q && E.setShape3dModel("vrControllerModel", B)
            }
          }))
        }
      }, interactive: {
        get: function () {
          return !!this._interactive
        }, set: function (Z) {
          !!Z != !!this._interactive && (this._interactive = Z, Z && this.addController(0), this.gv.getCoreInteractor().enableVR(Z))
        }
      }
    });
    var Ko = function (l, z) {
      function A(N) {
        var p = navigator.getGamepads && navigator.getGamepads();
        if (p) for (var $ = 0, R = 0, X = p.length; X > $; $++) {
          var s = p[$];
          if (s) {
            var L = s.id;
            if ("OpenVR Gamepad" === L || "OpenVR Controller" === L || 0 === L.indexOf("Oculus Touch") || 0 === L.indexOf("Spatial Controller")) {
              if (R === N) return s;
              R++
            }
          }
        }
      }

      function G(W, u, J) {
        return Math.abs(W[0] - u[0]) < J && Math.abs(W[1] - u[1]) < J && Math.abs(W[2] - u[2]) < J ? !0 : !1
      }

      var y = this;
      y.vr = l, y.id = z;
      var M, d, r = [0, 0],
        Z = [{id: "thumbpad", pressed: !1}, {id: "trigger", pressed: !1}, {id: "grips", pressed: !1}, {
          id: "menu",
          pressed: !1
        }], q = new ol;
      q.s("shape3d", "vrControllerModel"), q.isController = !0, q.s("intersect", !1), y.getGamepad = function () {
        return d
      }, y.getButtonState = function (o) {
        Z.forEach(function (B) {
          return B.id === o ? B.pressed : void 0
        })
      }, y.getNode = function () {
        return q
      };
      var c = .003;
      y.setRotationEpsilon = function (J) {
        c = J
      };
      var $ = 5e-4, O = $;
      y.setPositionEpsilon = function (H) {
        $ = H, O = H * y.vr._scaleFactor
      }, y._setScaleFactor = function (N) {
        q.s3(N, N, N), O = $ * N
      }, y._setScaleFactor(y.vr._scaleFactor);
      var L, U = new xj, v = new ej, W = [0, 0, 0], Q = [0, 0, 0], m = new Kb, N = new $h, J = new ym;
      y.getRay = function () {
        return L ? (J.origin.fromArray(W), J.direction.copy(N), L = !1, J) : J
      }, y.update = function () {
        if (M = d, d = A(z), M != d && console.log("gamepad changed", d), !d || d.pose === S) return d = null, q.s("3d.visible", !1), void 0;
        if (E.getShape3dModel("vrControllerModel")) {
          q.dm() || l.gv.dm().add(q), q.s("3d.visible", !0);
          var Y = d.pose;
          if (null !== Y) {
            Y.position && (y.vr.toViewPosition(Y.position, W), G(q.p3(), W, O) || (L = !0, q.p3(W))), Y.orientation && (U.fromArray(Y.orientation), N.set(0, 0, -1).applyQuaternion(U).normalize(), v.makeRotationFromQuaternion(U), m.set(0, 0, 0, q.getRotationMode(), !0).setFromRotationMatrix(v), Q[0] = m.x, Q[1] = m.y, Q[2] = m.z, G(q.r3(), Q, c) || (L = !0, q.r3(Q))), L && l.fp("gamepad.pose", null, {
              position: W,
              rotation: Q,
              id: z
            });
            var o = d.axes;
            (r[0] !== o[0] || r[1] !== o[1]) && (r = [o[0], o[1]], l.fp("gamepad.axes", null, {id: z, axes: r}));
            var B, $, j, w, V = d.buttons;
            for (B = 0, $ = V.length; $ > B; B++) j = V[B], w = j.pressed, w !== Z[B].pressed && (Z[B].pressed = w, l.fp("gamepad.button." + Z[B].id, null, {
              id: z,
              _62O: w ? "down" : "up"
            }))
          }
        }
      }
    }, ph = function (G) {
      this.vr = G, this._button = null
    };
    Dr(ph, F, {
      showButton: function () {
        var v = this.assureButton();
        if (!v.parentNode) {
          var n = this.vr.gv, I = n.getView();
          n._79O ? I.insertBefore(v, n._79O) : I.appendChild(v)
        }
      }, hideButton: function () {
        var Y = this._button;
        Y && Y.parentNode && Y.parentNode.removeChild(Y)
      }, assureButton: function () {
        var n = this._button;
        return n ? n : this._button = this.createButton(this.vr.gv)
      }, createButton: function (A) {
        function c(C, y) {
          C.textContent = y && y.isPresenting ? "关闭 VR 显示" : "开启 VR 显示"
        }

        function I(P) {
          q.style.display = "", q.style.cursor = "pointer", q.style.left = "calc(50% - 50px)", q.style.width = "100px", c(q, P), q.onmouseenter = function () {
            q.style.opacity = "1.0"
          }, q.onmouseleave = function () {
            q.style.opacity = "0.5"
          }, q.onclick = function () {
            P.isPresenting ? P.exitPresent() : P.requestPresent([{source: A.getCanvas()}])
          }, A.vr.setDevice(P)
        }

        function U() {
          q.style.display = "", q.style.cursor = "auto", q.style.left = "calc(50% - 75px)", q.style.width = "150px", c(q, null), q.onmouseenter = null, q.onmouseleave = null, q.onclick = null, A.vr.setDevice(null)
        }

        function m(F) {
          F.style.position = "absolute", F.style.bottom = "20px", F.style.padding = "12px 6px", F.style.border = "1px solid #fff", F.style.borderRadius = "4px", F.style.color = "#000", F.style.font = "normal 13px sans-serif", F.style.textAlign = "center", F.style.opacity = "0.5", F.style.outline = "none", F.style.zIndex = "999"
        }

        if ("getVRDisplays" in navigator) {
          var q = this._button = y.createElement("button");
          return q.style.display = "none", m(q), r.addEventListener("vrdisplayconnect", function (n) {
            I(n.display)
          }, !1), r.addEventListener("vrdisplaydisconnect", function () {
            U()
          }, !1), r.addEventListener("vrdisplaypresentchange", function (z) {
            c(q, z.display), A.vr.onVRDisplayPresentChange()
          }, !1), navigator.getVRDisplays().then(function (N) {
            N.length > 0 ? I(N[0]) : U()
          }), q
        }
        var S = y.createElement("a");
        return S.href = "https://webvr.info", S.innerHTML = "当前不支持 webvr", S.style.left = "calc(50% - 90px)", S.style.width = "180px", S.style.textDecoration = "none", m(S), S
      }
    }), F.defineProperties(ph.prototype, {}), Ak(E, {
      accordionViewExpandIcon: nh(cp),
      accordionViewCollapseIcon: nh(cp, !0),
      accordionViewLabelColor: qp,
      accordionViewLabelFont: Co,
      accordionViewTitleBackground: ue,
      accordionViewSelectBackground: Br,
      accordionViewSelectWidth: 3,
      accordionViewSeparatorColor: S,
      splitViewDividerSize: 1,
      splitViewDividerBackground: ue,
      splitViewDragOpacity: .5,
      splitViewToggleIcon: {width: 16, height: 16, comps: [{type: Gn, rect: [2, 2, 12, 12], background: cp}]},
      propertyViewLabelColor: es,
      propertyViewLabelSelectColor: qp,
      propertyViewLabelFont: Co,
      propertyViewExpandIcon: nh(cc),
      propertyViewCollapseIcon: nh(cc, !0),
      propertyViewBackground: kn,
      propertyViewRowLineVisible: !0,
      propertyViewColumnLineVisible: !0,
      propertyViewRowLineColor: Eb,
      propertyViewColumnLineColor: Eb,
      propertyViewSelectBackground: Br,
      listViewLabelColor: es,
      listViewLabelSelectColor: qp,
      listViewLabelFont: Co,
      listViewRowLineVisible: !1,
      listViewRowLineColor: Eb,
      listViewSelectBackground: Br,
      treeViewLabelColor: es,
      treeViewLabelSelectColor: qp,
      treeViewLabelFont: Co,
      treeViewExpandIcon: nh(Nq),
      treeViewCollapseIcon: nh(Nq, !0),
      treeViewRowLineVisible: !1,
      treeViewRowLineColor: Eb,
      treeViewSelectBackground: Br,
      treeViewDoubleClickToToggle: !0,
      tableViewLabelColor: es,
      tableViewLabelSelectColor: qp,
      tableViewLabelFont: Co,
      tableViewRowLineVisible: !0,
      tableViewColumnLineVisible: !0,
      tableViewRowLineColor: Eb,
      tableViewColumnLineColor: Eb,
      tableViewSelectBackground: Br,
      treeTableViewLabelColor: es,
      treeTableViewLabelSelectColor: qp,
      treeTableViewLabelFont: Co,
      treeTableViewExpandIcon: nh(Nq),
      treeTableViewCollapseIcon: nh(Nq, !0),
      treeTableViewRowLineVisible: !0,
      treeTableViewColumnLineVisible: !0,
      treeTableViewRowLineColor: Eb,
      treeTableViewColumnLineColor: Eb,
      treeTableViewSelectBackground: Br,
      tableHeaderLabelColor: es,
      tableHeaderLabelFont: Co,
      tableHeaderColumnLineVisible: !0,
      tableHeaderColumnLineColor: yo,
      tableHeaderBackground: kn,
      tableHeaderMoveBackground: hk,
      tableHeaderInsertColor: Br,
      tableHeaderSortDescIcon: Nm(cc, !0),
      tableHeaderSortAscIcon: Nm(cc),
      tabViewTabGap: 1,
      tabViewLabelColor: qp,
      tabViewLabelFont: Co,
      tabViewTabBackground: ue,
      tabViewSelectWidth: 3,
      tabViewSelectBackground: Br,
      tabViewMoveBackground: hk,
      tabViewInsertColor: Br,
      toolbarLabelColor: es,
      toolbarLabelSelectColor: qp,
      toolbarLabelFont: Co,
      toolbarBackground: kn,
      toolbarSelectBackground: Br,
      toolbarItemGap: 8,
      toolbarSeparatorColor: rg
    }, !0);
    var Mp = {translateX: 1, sortColumn: 1}, Cq = {sortable: 1, sortOrder: 1, sortFunc: 1}, Qc = {focusData: 1},
      rj = {dataModel: 1, sortColumn: 1, sortFunc: 1, visibleFunc: 1, rootData: 1, rootVisible: 1},
      wh = {dataModel: 1, sortFunc: 1, visibleFunc: 1, categorizable: 1}, sd = function (F, R) {
        R.add(F), F.hasChildren() && F.eachChild(function (y) {
          sd(y, R)
        })
      }, Xq = function (K, $, r, C, I, B, f, Q, g, R, y) {
        var G, u = r.getValueType(R), o = r.getAlign(R);
        if (r.getEnumValues(R)) {
          var l = r.toEnumLabel($, R), q = fi || 0, t = 0, i = B, v = E.getTextSize(C, l).width;
          return G = vf(r.toEnumIcon($, R)), G && (t = B + fi / 2, "center" === o ? t += (Q - (q + v)) / 2 : "right" === o && (t = t + Q - (q + v)), Zq(K, G, t, f + g / 2, R, y), i = t + fi / 2), l != A && (G ? Po(K, l, C, I, i, f, Q - (i - B), g) : Po(K, l, C, I, B, f, Q, g, o)), void 0
        }
        return $ = r.formatValue($), $ != A ? u === kj ? (yj(K, B, f, Q, g, $), void 0) : u === mb || !u && ye($) ? (G = vf($ ? mp : Mi), Zq(K, G, B + Q / 2, f + g / 2, R, y), void 0) : (Po(K, $, C, I, B, f, Q, g, o), void 0) : void 0
      }, Nf = function (S, s) {
        var Q = s.view, t = ss(S), n = s.column || s.property;
        Q.getDataModel().beginTransaction(), s.editor = S, S.info = s, Q.setCurrentEditor(S), Q.getView().insertBefore(t, Q._79O), vk(S, s.editorRect), S.setFocus ? S.setFocus() : zi(S), S.commitValue = function (B, C) {
          S._17Q && (S = S._17Q), C || Q.setValue(s.data, n, S.getValue ? S.getValue() : S.value), S.close && S.close(), up(t)
        }, n.onEditorCreated && n.onEditorCreated(s)
      }, Go = function (d, T, z, P, c) {
        var m = gf(d, z), l = T.value, f = T.view, w = c.getValueType(T.data);
        return m.onblur = m.onchange = function () {
          f.endEditing()
        }, "input" === d ? (l = c.formatValue(l), l != A && (m.value = l), m.onkeydown = function (i) {
          Ok(i) ? f.endEditing() : Fr(i) && f.endEditing(!0)
        }, (w === qn || w === Yn) && m.addEventListener(Xp, E.numberListener, !1)) : d === ml && P.forEach(function (T) {
          var n = y.createElement("option");
          n.innerHTML = c.toEnumLabel(T), n.value = T, c.isEnumEqual(l, T) && (n.selected = !0), wm(m, n)
        }), Nf(m, T), m
      }, Tb = Q.widget = {}, fs = function (j, c, Q) {
        Dr(H + ".widget." + j, c, Q)
      };
    Ak(Rf, {
      ms_value: function (E) {
        E.getValue = function (n) {
          var u = this.getItemById(n), Q = u.element;
          return pp(Q) ? Q : Q ? Q.getValue ? Q.getValue() : Q.value : u.selected
        }, E.setValue = function (G, S) {
          var z = this.getItemById(G);
          if (z) {
            var e = z.element;
            e && !pp(e) ? e.setValue ? e.setValue(S) : e.value = S : ye(S) ? (z.selected = S, this.iv()) : (z.element = S, this.iv())
          }
        }, E.v = function (u, M) {
          var H = this;
          if (2 === arguments.length) H.setValue(u, M); else {
            if (!mk(u)) return H.getValue(u);
            for (var Z in u) H.setValue(Z, u[Z])
          }
          return H
        }
      }, _46o: function (B) {
        B._icon = A, B._accessType = A, B._valueType = A, B._editable = !1, B._batchEditable = !0, B._align = kl, B._nullable = !0, B._emptiable = !1, B.setParent = uj, B.formatValue = function (V) {
          var L = this, H = L._valueType;
          return L.getEnumValues() ? L.toEnumLabel(V) : H === mb ? !!V : V != A && H === qn ? l(V) : V
        }, B.setEnum = function (m, o, M, E, d, X, J) {
          var Q = this;
          m && !cl(m) && m.values && (E = m.editable, M = m.icons, o = m.labels, d = m.strict, X = m.maxHeight, J = m.dropDownWidth, m = m.values), Fi(m) && (m = m._as), Fi(o) && (o = o._as), Fi(M) && (M = M._as), Q._enumValues = m, Q._enumLabels = o, Q._enumIcons = M, Q._enumEditable = E, Q._enumStrict = d == A ? !0 : d, Q._enumMaxHeight = X, Q._enumDropDownWidth = J, m && m.length && Hl(m[0]) && (Q._valueType = Yn), Q.fp("enum", !1, !0)
        }, B.getEnumDropDownWidth = function () {
          return this._enumDropDownWidth
        }, B.getEnumMaxHeight = function () {
          return this._enumMaxHeight
        }, B.isEnumEditable = function () {
          return this._enumEditable
        }, B.getEnumValues = function () {
          return this._enumValues
        }, B.getEnumLabels = function () {
          return this._enumLabels
        }, B.getEnumIcons = function () {
          return this._enumIcons
        }, B.isEnumStrict = function () {
          return this._enumStrict
        }, B.isEnumEqual = function (N, L) {
          return this._enumStrict ? N === L : N == L
        }, B.toEnumLabel = function (P, n) {
          var $ = this, I = $.getEnumValues(n), y = $.getEnumLabels(n);
          if (I && y) for (var C = 0; C < I.length; C++) if ($.isEnumEqual(P, I[C])) return y[C];
          return P
        }, B.toEnumIcon = function (A, X) {
          var F = this, G = F.getEnumValues(X), o = F.getEnumIcons(X);
          if (G && o) for (var e = 0; e < G.length; e++) if (F.isEnumEqual(A, G[e])) return o[e];
          return S
        }
      }, _45o: function (S) {
        S._87o = function (e, L, d, F, v, V) {
          if (e) {
            var n = this, o = n._90I, m = Zg(1);
            n._columnLineVisible && (v -= 1), n._rowLineVisible && (V -= 1), 0 >= v || 0 >= V || (n._90I || (o = n._90I = {}), o[L] || (o[L] = new Oh), vk(m, n.tx() + d, n.ty() + F, v, V), wm(m, e), n._view.insertBefore(m, n._79O), e.onParentAdded && e.onParentAdded(m), o[L].add(m))
          }
        }, S._76o = function () {
          var C = this, K = C._90I;
          if (K) {
            for (var F in K) K[F].each(function (Q) {
              up(Q)
            });
            delete C._90I
          }
        }, S._77o = function (x) {
          var U = this;
          if (U._90I) {
            var L = U._90I[x];
            L && (L.each(function (K) {
              up(K)
            }), delete U._90I[x])
          }
        }
      }, _47o: function (N) {
        N.getValue = function (Q, F) {
          return F.getValue ? F.getValue(Q, F, this) : bf(Q, F.getAccessType(), F.getName())
        }, N.setValue = function (f, v, x) {
          if (v.isEmptiable(f) || "" !== x || (x = S), v.isNullable(f) || x != A) {
            var I = this, p = v.getName(f), E = v.getAccessType(f), O = v.getValueType(f);
            O === qn && pp(x) ? x = g(x) : O === Yn && pp(x) ? x = parseFloat(x) : O === mb && pp(x) && (x = "true" === x), I._batchEditable && v._batchEditable && I.isSelected(f) ? I.sm().each(function (f) {
              v.setValue ? v.setValue(f, v, x, I) : ll(f, E, p, x)
            }) : v.setValue ? v.setValue(f, v, x, I) : ll(f, E, p, x)
          }
        }, N.setCurrentEditor = function (j) {
          this.endEditing(), this._currentEditor = j, this.redraw()
        }, N.isEditing = function (V, U) {
          var r = this, S = r._currentEditor;
          if (!S) return !1;
          if (U) {
            var H = S.info;
            return H ? (H.column || H.property) === U && H.data === V : !1
          }
          return !0
        }, N.endEditing = function (l) {
          var W = this, x = W._currentEditor;
          x && (delete W._currentEditor, x.commitValue && x.commitValue(x.info, l), W.redraw(), W.getDataModel().endTransaction())
        }, N.beginEditing = function (P) {
          this.endEditing();
          var S = this, U = P.column || P.property;
          if (U.beginEditing) U.beginEditing(P); else {
            var b = P.data, O = P.value, R = S.getSelectBackground(b), Z = U.getEnumValues(b), m = U.getSlider(b),
              s = U.getColorPicker(b);
            if (m) {
              var r = _n(Tb.Slider, m);
              return r.setValue(O), r.getView().onblur = function () {
                S.endEditing()
              }, r.isInstant() && (r.onValueChanged = function () {
                S.setValue(b, U, r.getValue())
              }), Nf(r, P), void 0
            }
            if (s || U.getValueType(b) === kj) {
              var w = _n(Tb.ColorPicker, s);
              return w.setValue(O), w.onClosed = function () {
                S.endEditing()
              }, w.isInstant() && (w.onValueChanged = function (h, l) {
                S.setValue(b, U, l)
              }), Nf(w, P), w.open(), void 0
            }
            if (Z) {
              if (Tb.ComboBox) {
                var L = new Tb.ComboBox;
                L.setValue(O), L.setValues(Z), L.setLabels(U.getEnumLabels(b)), L.setIcons(U.getEnumIcons(b)), L.setEditable(U.isEnumEditable(b)), L.setStrict(U.isEnumStrict(b)), L.setMaxHeight(U.getEnumMaxHeight(b)), L.setDropDownWidth(U.getEnumDropDownWidth(b)), L.onClosed = function () {
                  S.endEditing()
                }, Nf(L, P), L.open()
              } else Go(ml, P, R, Z, U);
              return
            }
            var o = U.getValueType(b);
            if (o === mb || ye(O)) return S.setValue(b, U, !O), void 0;
            if (U.getItemEditor(b)) {
              var g = Ye(U.getItemEditor(b)), v = new g(b, U, S, P), l = v.getView();
              return l._17Q = v, v.setValue(O), Vf(l), Nf(l, P), v.editBeginning && v.editBeginning(), void 0
            }
            Go("input", P, R, A, U)
          }
        }
      }, _44o: function (o) {
        o.init = function (c) {
          var k = this, f = k.th = new ws(c), l = k._view = Ae(1, k);
          k.tv = k._tableView = c, wm(l, f.getView()), wm(l, c.getView()), f.mp(function (C) {
            C.property === oi && k.iv()
          }), k.iv()
        }, o.getTableView = function () {
          return this.tv
        }, o.getTableHeader = function () {
          return this.th
        }, o.getDataModel = function () {
          return this.tv.dm()
        }, o.getColumnModel = function () {
          return this.tv.getColumnModel()
        }, o.setColumns = function (X) {
          this.tv.setColumns(X)
        }, o.addColumns = function (d) {
          this.tv.addColumns(d)
        }, o.endEditing = function () {
          this.tv.endEditing()
        }, o.validateImpl = function () {
          var H = this, i = H.th, Q = $o(i), L = {x: 0, y: 0, width: H.getWidth(), height: Q};
          vk(i, L), L.y = Q, L.height = R(0, H.getHeight() - Q), vk(H.tv, L)
        }
      }, ms_vs: function (W) {
        W._41o = function () {
          return this._29I.height < this._59I
        }, W._43o = function () {
          var E = this;
          E._41o() && (E._58I || (x(function () {
            E._94O()
          }, hc), E.iv()), E._58I = new Date)
        }, W._94O = function () {
          var H = this;
          if (H._58I) {
            var h = new Date;
            h.getTime() - H._58I.getTime() >= hc ? (delete H._58I, H.iv()) : x(function () {
              H._94O()
            }, hc)
          }
        }, W._93I = function () {
          var F = this, s = F._27I;
          if (F._58I || !F._autoHideScrollBar) {
            s || wm(F._79O, s = F._27I = Zg());
            var T = F._29I, v = T.height, p = F._59I, l = F.getScrollBarSize(), a = T.width - l - 2,
              o = v * (-F.ty() / p), h = v * (v / p), m = s.style;
            p > v ? (Jm > h && (o = o + h / 2 - Jm / 2, 0 > o && (o = 0), o + Jm > v && (o = v - Jm), h = Jm), m.visibility = hh, m.background = F.getScrollBarColor(), m.borderRadius = l / 2 + Kh, vk(s, a, o, l, h)) : m.visibility = sn
          } else s && (s.style.visibility = sn)
        }
      }, ms_hs: function (o) {
        o._40o = function () {
          return this._29I.width < this._91I
        }, o._42o = function () {
          var y = this;
          y._40o() && (y._95O || (x(function () {
            y._94I()
          }, hc), y.iv()), y._95O = new Date)
        }, o._94I = function () {
          var G = this;
          if (G._95O) {
            var z = new Date;
            z.getTime() - G._95O.getTime() >= hc ? (delete G._95O, G.iv()) : x(function () {
              G._94I()
            }, hc)
          }
        }, o._92I = function () {
          var H = this, T = H._28I;
          if (H._95O || !H._autoHideScrollBar) {
            T || wm(H._79O, T = H._28I = Zg());
            var y = H._29I, D = y.width, X = H._91I, f = H.getScrollBarSize(), a = y.height - f - 2,
              W = D * (-H.tx() / X), p = D * (D / X), G = T.style;
            X > D ? (Jm > p && (W = W + p / 2 - Jm / 2, 0 > W && (W = 0), W + Jm > D && (W = D - Jm), p = Jm), G.visibility = hh, G.background = H.getScrollBarColor(), G.borderRadius = f / 2 + Kh, vk(T, W, a, p, f)) : G.visibility = sn
          } else T && (T.style.visibility = sn)
        }
      }
    }), $n(mp, se(16, 16, [{type: Kd, rect: [1, 1, 14, 14], background: Br}, {
      type: Fq,
      rect: [1, 1, 14, 14],
      width: 1,
      color: Pe
    }, {type: Mq, points: [13, 3, 7, 12, 4, 8], borderWidth: 2, borderColor: "#FFF"}])), $n(Mi, se(16, 16, {
      type: Fq,
      rect: [1, 1, 14, 14],
      width: 1,
      color: Pe
    })), $n(Gc, se(16, 16, [{
      type: hj,
      rect: [2, 2, 12, 12],
      borderWidth: 1,
      borderColor: Pe,
      background: "#FFF"
    }, {type: hj, rect: [4, 4, 8, 8], background: Br}])), $n(io, se(16, 16, {
      type: hj,
      rect: [2, 2, 12, 12],
      borderWidth: 1,
      borderColor: Pe
    })), Rf._15Q = function (o) {
      o._29I = ui, o._59I = 0, o._91I = 0, o._5o = function (A) {
        var h = this;
        h._30I = new Oh, h._rows = new Oh, h._rowMap = {}, h._31I = 0, h._14I = 0, h._view = Ae(1, h), h._canvas = Ze(h._view), wm(h._view, h._79O = Zg()), h.dm(A ? A : new Yc)
      }, o.getCheckIcon = function (A) {
        var z = this.sm(), T = z.co(A);
        return z.sg() ? vf(T ? Gc : io) : vf(T ? mp : Mi)
      }, o.checkData = function (v) {
        var o = this.sm(), E = o.co(v);
        o.sg() && E || (this._32o = 1, E ? o.rs(v) : o.as(v), delete this._32o)
      }, o.getDataAt = function (c) {
        c.target && (c = this.lp(c));
        var h = n(c.y / this._rowHeight), F = this._rows;
        return 0 > h || h >= F.size() ? A : F.get(h)
      }, o.onDataDoubleClicked = function () {
      }, o.onDataClicked = function () {
      }, o.adjustTranslateX = function () {
        return 0
      }, o.adjustTranslateY = function (Q) {
        var c = this.getHeight() - this._59I;
        return c > Q && (Q = c), Q > 0 ? 0 : l(Q)
      }, o.onPropertyChanged = function (t) {
        var D = this, T = t.property;
        rj[T] ? D.ivm() : Qc[T] || D.redraw(), T === vp ? D._42o() : T === yi && D._43o()
      }, o.getLabel = function (O) {
        return O.toLabel()
      }, o.getLabelFont = function () {
        return this._labelFont
      }, o.getLabelColor = function (I) {
        var t = this;
        if (t.isCheckMode()) {
          if (t._focusData === I) return t._labelSelectColor
        } else if (t.isSelected(I)) return t._labelSelectColor;
        return t._labelColor
      }, o.getStartRowIndex = function () {
        return this._31I
      }, o.getEndRowIndex = function () {
        return this._14I
      }, o.getRowDatas = function () {
        return this._rows
      }, o.getRowIndex = function (F) {
        return this._rowMap[F._id]
      }, o.getRowSize = function () {
        return this._rows.size()
      }, o.getViewRect = function () {
        return Wf(this._29I)
      }, o.isVisible = function (S) {
        return this._visibleFunc ? this._visibleFunc(S) : !0
      }, o.getCurrentSortFunc = function () {
        return this._sortFunc
      }, o.setDataModel = function (_) {
        var E = this, T = E._dataModel, B = E._selectionModel;
        T !== _ && (T && (T.umm(E.handleDataModelChange, E), T.umd(E.handleDataPropertyChange, E), T.umh(E.handleHierarchyChange, E), B || T.sm().ums(E.handleSelectionChange, E)), E._dataModel = _, _.mm(E.handleDataModelChange, E), _.md(E.handleDataPropertyChange, E), _.mh(E.handleHierarchyChange, E), B ? B._21I(_) : _.sm().ms(E.handleSelectionChange, E), E.fp("dataModel", T, _))
      }, o.validateModel = function () {
        var S = this;
        S._rows.clear(), S._rowMap = {}, S.buildChildren(S._dataModel._roots);
        var H = S._rows = S._rows.toList(S.isVisible, S), K = 0, O = S.getCurrentSortFunc(), Z = H.size();
        for (O && H.sort(O); Z > K; K++) S._rowMap[H.get(K)._id] = K
      }, o.buildChildren = function (W) {
        var n = this;
        W.each(function (U) {
          n._rows.add(U), n.buildChildren(U._children)
        })
      }, o.handleDataModelChange = function () {
        this.ivm()
      }, o.handleDataPropertyChange = function (t) {
        "parent" === t.property ? this.ivm() : this.invalidateData(t.data)
      }, o.handleHierarchyChange = function () {
        this.ivm()
      }, o.handleSelectionChange = function (a) {
        a.datas.each(this.invalidateData, this), this.onSelectionChanged(a)
      }, o.onSelectionChanged = function (t) {
        var c = this, m = c.sm();
        !c.isAutoMakeVisible() || 1 !== m.size() || "set" !== t.kind && "append" !== t.kind || c._32o || c.makeVisible(m.ld())
      }, o.handleBackgroundClick = function (k) {
        Wb(k) && !this.isCheckMode() && this.sm().cs()
      }, o.makeVisible = function (i) {
        i && (this._23I = i, this.iv())
      }, o.scrollToIndex = function (y) {
        var O = this, T = O._29I, d = T.height, s = O._rowHeight, t = s * y;
        y >= 0 && y < O._rows.size() && d > 0 && (t + s > T.y + d ? O.ty(-t + d - s) : t < T.y && O.ty(-t))
      }, o.autoScroll = function (l, F) {
        var A = this, Y = A._rowHeight, w = Y, V = Y / 4, v = A._29I, G = A.lp(l), W = {x: A.tx(), y: A.ty()};
        return Y > 0 && v && (G.x - v.x < w ? A.translate(V, 0) : v.x + v.width - G.x < w && A.translate(-V, 0), G.y - v.y < w ? A.translate(0, V) : v.y + v.height - G.y < w && A.translate(0, -V)), W.x = A.tx() - W.x, W.y = A.ty() - W.y, F && (F.x += W.x, F.y += W.y), W
      }, o.getTopRowOrderSelection = function () {
        var w = this.sm().getTopSelection(), e = {}, I = new Oh;
        return w.each(function (C) {
          e[C._id] = C
        }), this._rows.each(function (a) {
          e[a._id] && I.add(a)
        }), I
      }, o.getRowOrderSelection = function () {
        var i = new Oh;
        return this._rows.each(function (J) {
          this.isSelected(J) && i.add(J)
        }, this), i
      }, o.ivm = function () {
        this.invalidateModel()
      }, o.invalidateModel = function () {
        var d = this;
        d._96I || (d._96I = 1, d._32I = 1, delete d._24I), d.iv()
      }, o.redraw = function () {
        var j = this;
        j._32I || (j._32I = 1, delete j._24I, j.iv())
      }, o.invalidateData = function (P) {
        var f = this;
        z ? f.redraw() : f._32I || (f._24I || (f._24I = {}), f._24I[P._id] = P, f.iv())
      }, o.getFocusData = function () {
        return this._focusData
      }, o.setFocusDataById = function (D) {
        this.setFocusData(this.dm().getDataById(D))
      }, o.setFocusData = function (j) {
        var z = this, S = z._focusData;
        S !== j && (z._focusData = j, z.fp("focusData", S, j), S && z.invalidateData(S), j && (z.invalidateData(j), z.isAutoMakeVisible() && z.makeVisible(j)))
      }, o.drawRowBackground = function (_, g, C, b, u, V, T) {
        var e = this, x = e.isCheckMode();
        (g === e._focusData && x || C && !x) && yj(_, b, u, V, T, e.getSelectBackground(g))
      }, o.drawData = function (T, d, z) {
        var p = this, X = p._rowHeight, E = X * z, v = p._29I, j = v.x, g = v.width;
        T.save(), T.beginPath(), T.rect(j, E, g, X), T.clip(), p._87o(p.drawRow(T, d, p.isSelected(d), j, E, g, X), z, j, E, g, X), T.restore(), p._rowLineVisible && yj(T, j, E + X - 1, g, 1, p._rowLineColor)
      }, o._12I = function (h) {
        var W = this, f = W._31I, c = W._29I, B = c.x, $ = c.y, I = c.width, i = c.height;
        for (h.beginPath(), h.rect(B, $, I, i), h.clip(), h.clearRect(B, $, I, i), W._76o(), W._93db(h); f < W._14I; f++) W.drawData(h, W._rows.get(f), f);
        W._92db(h)
      }, o._13I = function (e) {
        for (var c, J = this, z = J._rowHeight, l = J._29I, V = l.x, $ = l.width, U = J._31I, w = J._30I; U < J._14I; U++) c = J._rows.get(U), J._24I[c._id] && w.add({
          data: c,
          index: U
        });
        w.isEmpty() || (e.beginPath(), w.each(function (b) {
          e.rect(V, b.index * z, $, z)
        }), e.clip(), w.each(function (u) {
          e.clearRect(V, u.index * z, $, z)
        }), w.each(function (f) {
          J._77o(f.index)
        }), J._93db(e), w.each(function (b) {
          J.drawData(e, b.data, b.index)
        }), J._92db(e), w.clear())
      }, o.validateImpl = function () {
        var Y = this, P = Y._canvas, G = Y.getWidth(), C = Y.getHeight(), O = Y._rowHeight, d = Y._32I;
        (G !== P.clientWidth || C !== P.clientHeight) && (Mb(P, G, C), d = 1);
        var N = V && !j;
        Y._96I && !N && Y.validateModel();
        var h = Y._29I, a = {x: -Y.tx(), y: -Y.ty(), width: G, height: C}, g = Y._rows.size(), e = dn(P), $ = Y._23I;
        d || Ck(a, h) || (d = 1), Y._29I = a, Y._59I = g * O, Y._31I = n(a.y / O), Y._14I = t((a.y + a.height) / O), Y._31I < 0 && (Y._31I = 0), Y._14I > g && (Y._14I = g), Y._99I && d && Y._99I(), Gf(e, Y.tx(), Y.ty(), 1), d ? Y._12I(e) : Y._24I && Y._13I(e), Y._93I(), Y._92I(), e.restore(), Y._32I = Y._24I = Y._96I = A, $ && (Y.scrollToIndex(Y.getRowIndex($)), delete Y._23I), Y.tx(Y.tx()), Y.ty(Y.ty())
      }
    }, Rf._48o = function (M) {
      M._rootVisible = !0, M._rootData = A, M._35o = function () {
        this._expandMap = {}, this._levelMap = {}
      }, M.validateModel = function () {
        var b = this, u = b._rootData;
        b._rows.clear(), b._levelMap = {}, b._rowMap = {}, b._currentLevel = 0, u ? b._rootVisible ? b.isVisible(u) && b.buildData(u) : b.buildChildren(u) : b.buildChildren(), delete b._currentLevel
      }, M.buildData = function ($) {
        var v = this, I = $._id, A = v._rows;
        v._rowMap[I] = A.size(), A.add($), v._levelMap[I] = v._currentLevel, v.isExpanded($) && (v._currentLevel++, v.buildChildren($), v._currentLevel--)
      }, M.buildChildren = function (C) {
        var X = this, T = C ? C._children : X._dataModel._roots, P = X.getCurrentSortFunc();
        P && X.isChildrenSortable(C) ? T.toList(X.isVisible, X).sort(P).each(X.buildData, X) : T.each(function (Z) {
          X.isVisible(Z) && X.buildData(Z)
        })
      }, M.getLevel = function (j) {
        return this._levelMap[j._id]
      }, M.getToggleIcon = function (d) {
        var k = this, G = k._loader, I = k._collapseIcon;
        return G && !G.isLoaded(d) ? I : d.hasChildren() ? k.isExpanded(d) ? k._expandIcon : I : A
      }, M.isCheckMode = function () {
        return this._checkMode != A
      }, M.isChildrenSortable = function () {
        return !0
      }, M.handleDataModelChange = function (a) {
        var d = this;
        a.kind === ub ? delete d._expandMap[a.data._id] : a.kind === ip && (d._expandMap = {}), d.ivm()
      }, M.toggle = function (j) {
        var i = this;
        i.isExpanded(j) ? i.collapse(j) : i.expand(j)
      }, M.isExpanded = function (E) {
        return 1 === this._expandMap[E._id]
      }, M.expand = function (m) {
        var v = this, n = v._loader;
        v.isExpanded(m) || (n && !n.isLoaded(m) && n.load(m), v._expandMap[m._id] = 1, v.ivm(), v.onExpanded(m))
      }, M.onExpanded = function () {
      }, M.collapse = function (P) {
        var Z = this;
        Z.isExpanded(P) && (delete Z._expandMap[P._id], Z.ivm(), Z.onCollapsed(P))
      }, M.onCollapsed = function () {
      }, M.expandAll = function (H) {
        if (H) this.expand(H), H.eachChild(function (D) {
          this.expandAll(D)
        }, this); else {
          var Q = this;
          Q._dataModel.each(function (a) {
            a.hasChildren() && (Q._expandMap[a._id] = 1)
          }), Q.ivm()
        }
      }, M.collapseAll = function () {
        this._expandMap = {}, this.ivm()
      }, M.makeVisible = function (G) {
        if (G) {
          var K = this;
          if (!K._rootData || G.isDescendantOf(K._rootData)) {
            for (var E = G._parent; E;) K.expand(E), E = E._parent;
            K._23I = G, K.iv()
          }
        }
      }, M.checkData = function (w) {
        var p, s = this, Z = s._checkMode, n = s.sm(), C = n.co(w);
        if (!n.sg() || !C) {
          if (s._32o = 1, Z === Cn) C ? n.rs(w) : n.as(w); else if (Z === Tg) p = new Oh(w), p.addAll(w._children); else if ("descendant" === Z) p = new Oh, sd(w, p); else if ("all" === Z && (p = new Oh, sd(w, p), !C)) for (var e = w._parent; e;) p.add(e), e = e._parent;
          p && (C ? n.rs(p) : n.as(p)), delete s._32o
        }
      }, M._97I = function (Y, E, R, B, Q, A, x) {
        var s = this, X = s._indent, V = s._levelMap[E._id], J = s.getIconWidth(E), C = vf(s.getToggleIcon(E));
        C ? (B += X * V, Zq(Y, C, B + X / 2, Q + x / 2, E, s), B += X) : B += X * (V + 1), s._checkMode && (Zq(Y, s.getCheckIcon(E), B + X / 2, Q + x / 2, E, s), B += X), s.drawIcon(Y, E, B, Q, J, x), s.drawLabel(Y, E, B + J, Q, x)
      }
    }, Rf._14Q = function (b) {
      b.getIcon = function (D) {
        return D.getIcon()
      }, b.getIconWidth = function (c) {
        return this.getIcon(c) ? this._indent : 0
      }, b.drawIcon = function (p, $, J, m, I, B) {
        if (I) {
          var S = this, w = S.getBodyColor($), N = vf(S.getIcon($), w);
          N && (B -= S.isRowLineVisible() ? 1 : 0, Jl(p, N, lc, J, m, I, B, $, S, w), Yo(p, S.getBorderColor($), J, m, I, B))
        }
      }, b.drawLabel = function (b, D, a, Z, g) {
        var z = this;
        Po(b, z.getLabel(D), z.getLabelFont(D), z.getLabelColor(D), a, Z, 0, g)
      }
    }, Rf._50o = function (c) {
      c._98I = function () {
        var n = this, L = n._39o = new Yc;
        n._60I = new Oh, L.mm(n._17o, n), L.md(n._18o, n), L.mh(n._19o, n)
      }, c.setColumns = function (v) {
        this._39o.clear(), this.addColumns(v)
      }, c.addColumns = function (i) {
        var N = this._39o;
        i.forEach(function (W) {
          if (!(W instanceof Fc)) {
            var n = Ye(W.className);
            W = _n(n ? n : Fc, W)
          }
          N.add(W)
        })
      }, c.onColumnClicked = function () {
      }, c.onCheckColumnClicked = function () {
      }, c._3Q = function (f) {
        for (var p, V = 0, M = this._60I, h = M.size(); h > V; V++) if (p = M.get(V), p.column === f) return p;
        return A
      }, c.getColumnAt = function (b) {
        var u = this._4Q(b);
        return u ? u.column : A
      }, c._4Q = function (s) {
        for (var N = this, M = s.target ? N.lp(s).x : s.x, f = N._60I, k = 0; k < f.size(); k++) {
          var h = f.get(k), o = h.startX;
          if (M >= o && M < o + h.column.getWidth()) return h
        }
        return A
      }, c.getToolTip = function (s) {
        var z = this, q = z.getDataAt(s), e = z.getColumnAt(s);
        return q && e ? e.getToolTip(q, z) : A
      }, c.adjustTranslateX = function (J) {
        var M = this.getWidth() - this._91I;
        return M > J && (J = M), J > 0 ? 0 : l(J)
      }, c._99I = function () {
        var Z = this, H = Z._29I, Y = Z._60I;
        Y.clear(), Z._91I = 0, Z._39o._roots.each(function (m) {
          if (m.isVisible()) {
            var O = Z._91I + m.getWidth();
            Z._91I <= H.x + H.width && O >= H.x && Y.add({column: m, startX: Z._91I}), Z._91I = O
          }
        })
      }, c.drawData = function (W, v, e) {
        var O = this, P = O._rowHeight, k = P * e, X = O.isSelected(v), y = O._29I, M = y.x, o = y.width;
        O.drawRowBackground(W, v, X, M, k, o, P), O._60I.each(function (A) {
          var w = A.column, $ = A.startX, B = w.getWidth();
          B > 0 && !O.isEditing(v, w) && (W.save(), W.beginPath(), W.rect($, k, B, P), W.clip(), O._87o(O.drawCell(W, v, X, w, $, k, B, P), e, $, k, B, P), O._columnLineVisible && yj(W, $ + B - 1, k, 1, P, O._columnLineColor), W.restore())
        }), O._rowLineVisible && yj(W, M, k + P - 1, o, 1, O._rowLineColor)
      }, c.drawCell = function (F, z, S, k, p, y, Y, _) {
        var T = this;
        if (k.drawCell) return k.drawCell(F, z, S, k, p, y, Y, _, T);
        var G = T.getValue(z, k);
        Xq(F, G, k, T.getLabelFont(z, k, G), T.getLabelColor(z, k, G), p, y, Y, _, z, T)
      }, c.getColumnModel = function () {
        return this._39o
      }, c._17o = function () {
        this.redraw()
      }, c._18o = function (S) {
        var v = this;
        S.data === v._sortColumn && Cq[S.property] ? v.ivm() : (v._42o(), v.redraw())
      }, c._19o = function () {
        this.redraw()
      }, c.getCurrentSortFunc = function () {
        var y = this, R = y._sortColumn;
        if (R && R.isSortable()) {
          var I = R.getSortFunc(), C = Al === R.getSortOrder() ? 1 : -1;
          return I || (I = qe), function (_, H) {
            return I.call(y, y.getValue(_, R), y.getValue(H, R), _, H) * C
          }
        }
        return y._sortFunc
      }, c.isCellEditable = function (I, s, Q) {
        return s.isEditable() && this.isEditable() ? s.isCellEditable ? s.isCellEditable(I, s, Q, this) : !0 : !1
      }, c._37O = function (y, z) {
        if (Wb(z)) for (var h = this, j = h.lp(z), J = h._60I, e = h._rowHeight, B = h._29I, g = B.x, Z = B.y, I = B.width, G = B.height, N = 0; N < J.size(); N++) {
          var m = J.get(N), P = m.startX, o = m.column, $ = o.getWidth();
          if (o !== h._31o && o !== h._4o && j.x >= P && j.x < P + $ && h.isCellEditable(y, o, z)) {
            var c = {x: P, y: h.getRowIndex(y) * e, width: $, height: e},
              X = {x: c.x + h.tx(), y: c.y + h.ty(), width: c.width, height: c.height}, u = 0, k = 0;
            return c.x < g ? u = c.x - g : c.x + c.width > g + I && (u = c.x + c.width - g - I), u && (h.tx(h.tx() - u), X.x -= u), c.y < Z ? k = c.y - Z : c.y + e > Z + G && (k = c.y + e - Z - G), k && (h.ty(h.ty() - k), X.y -= k), h.beginEditing({
              data: y,
              column: o,
              value: h.getValue(y, o),
              event: z,
              rect: c,
              editorRect: X,
              view: h
            }), void 0
          }
        }
      }
    }, Tb.BaseItemEditor = function (H, S, L, G) {
      this._data = H, this._column = S, this._master = L, this._editInfo = G
    }, fs("BaseItemEditor", F, {
      ms_ac: ["data", "column", "master", "editInfo"], editBeginning: function () {
      }, getView: function () {
      }, getValue: function () {
      }, setValue: function () {
      }
    });
    var nr = Q.Tab = function () {
      Eo(nr, this)
    };
    Lj("Tab", aj, {ms_ac: ["view", "closable", "disabled"], _icon: A, _closable: !1, _disabled: !1, setParent: uj});
    var Fc = Q.Column = function () {
      Eo(Fc, this)
    };
    Lj("Column", aj, {
      _46o: 1,
      ms_ac: ["accessType", "valueType", hh, xe, Fp, Sq, "align", kj, "sortOrder", nm, "sortable", "clickable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
      _visible: !0,
      _width: 80,
      _sortOrder: Al,
      _sortFunc: A,
      _sortable: !0,
      _clickable: !0,
      setWidth: function (A) {
        16 > A && (A = 16);
        var T = this._width;
        this._width = A, this.fp(Sq, T, A)
      },
      getToolTip: function (P, m) {
        return this.formatValue(m.getValue(P, this))
      }
    });
    var cq = Q.Property = function () {
      Eo(cq, this)
    };
    Lj("Property", aj, {
      _46o: 1,
      ms_ac: ["accessType", "valueType", xe, Fp, "categoryName", kj, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
      _categoryName: A,
      getToolTip: function (U, t, Y) {
        var J = this;
        return t ? J.formatValue(Y.getValue(U, J)) : Y.getPropertyName(J)
      }
    }), Tb.AccordionView = function () {
      var Q = this;
      Q._20o = {}, Q._21o = new Oh, Q._10o = A, Q._9o = A, Q._11o = A, Q._view = Ae(0, Q), Q.iv()
    }, fs("AccordionView", F, {
      ms_v: 1,
      ms_fire: 1,
      ms_ac: [Xi, Ym, "titleHeight", Or, Gi, "titleBackground", "selectWidth", Fj, "orientation", "separatorColor"],
      _expandIcon: E.accordionViewExpandIcon,
      _collapseIcon: E.accordionViewCollapseIcon,
      _titleHeight: _m,
      _labelColor: E.accordionViewLabelColor,
      _labelFont: E.accordionViewLabelFont,
      _titleBackground: E.accordionViewTitleBackground,
      _selectBackground: E.accordionViewSelectBackground,
      _selectWidth: E.accordionViewSelectWidth,
      _orientation: "v",
      _separatorColor: E.accordionViewSeparatorColor,
      onPropertyChanged: function () {
        this.iv()
      },
      getView: function () {
        return this._view
      },
      getTitles: function () {
        return this._21o
      },
      getCurrentTitle: function () {
        return this._10o
      },
      add: function (H, f, S, T) {
        var R = this, g = Zg();
        if (R._20o[H]) throw H + " already exists";
        g.onmousedown = gm, g.style.cursor = yg, g.addEventListener(Qe ? pi : Lk, function (X) {
          gm(X)
        }, !1), g.addEventListener(Qe ? Ao : Wi, function (D) {
          gm(D), Wb(D) && (R._10o === H ? R.collapse() : R.expand(H))
        }, !1), wm(R._view, g), R._20o[H] = {
          content: f,
          div: g,
          canvas: Ze(g),
          icon: T
        }, R._21o.add(H), S && R.expand(H), R.iv()
      },
      remove: function (B) {
        var D = this, T = D._20o[B];
        T && (up(T.div), delete D._20o[B], D._21o.remove(B), D.iv())
      },
      clear: function () {
        var Z = this;
        Z._21o.toArray().forEach(Z.remove, Z), Z._20o = {}, Z._21o.clear(), Z.iv()
      },
      isExpanded: function (h) {
        return this._10o === h
      },
      expand: function (B) {
        var e = this;
        e._20o[B] && e._10o !== B && (e._10o = B, e.onExpanded(B), e.iv())
      },
      onExpanded: function () {
      },
      collapse: function () {
        var _ = this;
        _._10o && (_.onCollapsed(_._10o), delete _._10o, _.iv())
      },
      onCollapsed: function () {
      },
      initCanvas: function (P, B, H) {
        Mb(P, B, H);
        var S = dn(P);
        return Gf(S, 0, 0, 1), S.clearRect(0, 0, B, H), S
      },
      drawTitle: function (Q, G, z, w, q) {
        var x = this, Y = vf(q.icon), _ = x.isExpanded(G), F = x._titleHeight, N = x._titleBackground,
          h = x._selectWidth, D = x._separatorColor, R = vf(_ ? x._expandIcon : x._collapseIcon), E = h + 4;
        yj(Q, 0, 0, z, w, N), _ && h && yj(Q, 0, 0, h, w, x._selectBackground), (_ || x._21o.get(x._21o.size() - 1) !== G) && yj(Q, 0, w - 1, z, 1, D ? D : Pc(N)), Y && (Zq(Q, Y, E + Hk(Y) / 2, F / 2), E += Hk(Y) + 2), Po(Q, G, x.getLabelFont(G), x.getLabelColor(G), E, 0, 0, F), R && Zq(Q, R, z - Hk(R) / 2 - 4, F / 2)
      },
      validateImpl: function () {
        var v = this, S = v._view, o = 0, c = 0, I = v.getWidth(), p = v.getHeight(), E = v._titleHeight,
          w = v._21o.size() * E, n = v._11o, V = v._9o;
        delete v._11o, delete v._9o, v._21o.each(function (r) {
          var O, P, s = v._20o[r], J = s.content, C = v._10o === r;
          hf(v) ? (vk(s.div, o, 0, E, p), O = v.initCanvas(s.canvas, E, p), Of(O, 0, p), Rq(O, -b), v.drawTitle(O, r, p, E, s), O.restore(), C ? (P = R(0, I - w), J && (v._11o = J, v._9o = ss(J), vk(J, o + E, 0, P, p)), o += E + P) : o += E) : (vk(s.div, 0, c, I, E), O = v.initCanvas(s.canvas, I, E), v.drawTitle(O, r, I, E, s), O.restore(), C ? (P = R(0, p - w), J && (v._11o = J, v._9o = ss(J), vk(J, 0, c + E, I, P)), c += E + P) : c += E)
        });
        var Z = v._9o;
        n && n !== v._11o && n.endEditing && n.endEditing(), Z && Z !== V && wm(S, Z), V && V !== Z && up(V)
      }
    }), Tb.SplitView = function (B, D, s, g) {
      var Q = this, f = Q._dividerDiv = Zg(), G = Q._60O = Ze(), w = Q._61O = Ze(), o = G.style, P = w.style;
      Q._view = Ae(1, Q), wm(Q._view, f), o.msTouchAction = Hn, o.pointerEvents = Hn, o.cursor = yg, P.msTouchAction = Hn, P.pointerEvents = Hn, P.cursor = yg, B && Q.setLeftView(B), D && Q.setRightView(D), s && Q.setOrientation(s), g != A && Q.setPosition(g), Q.setStatus(yf), new fk(Q)
    }, fs("SplitView", F, {
      ms_v: 1,
      ms_fire: 1,
      ms_ac: ["continuousLayout", "dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
      _continuousLayout: !1,
      _position: .5,
      _togglable: !0,
      _orientation: "h",
      _draggable: !0,
      _dividerSize: E.splitViewDividerSize,
      _dividerBackground: E.splitViewDividerBackground,
      _dragOpacity: E.splitViewDragOpacity,
      _toggleIcon: E.splitViewToggleIcon,
      onPropertyChanged: function () {
        this.iv()
      },
      getDividerDiv: function () {
        return this._dividerDiv
      },
      getPosition: function () {
        return this._position
      },
      setPosition: function (N, k) {
        var W = this, y = W._position;
        isNaN(N) || (k || (W._82O = 0 > N ? -1 : N > 1 ? 1 : 0), W._position = N, W.fp(zr, y, N))
      },
      getLeftView: function () {
        return this._leftView
      },
      setLeftView: function (K) {
        var j = this, u = j._leftView, A = j._view;
        if (j._leftView !== K) {
          if (u && u !== j._rightView) {
            var e = ss(u);
            e.parentNode === A && up(e)
          }
          if (j._leftView = K, K) {
            var Q = ss(K);
            Q.parentNode !== A && A.insertBefore(Q, j._dividerDiv)
          }
          j.fp("leftView", u, K)
        }
      },
      getRightView: function () {
        return this._rightView
      },
      setRightView: function (k) {
        var D = this, Z = D._rightView, x = D._view;
        if (D._rightView !== k) {
          if (Z && Z !== D._leftView) {
            var y = ss(Z);
            y.parentNode === x && up(y)
          }
          if (D._rightView = k, k) {
            var z = ss(k);
            z.parentNode !== x && x.insertBefore(z, D._dividerDiv)
          }
          D.fp("rightView", Z, k)
        }
      },
      validateImpl: function () {
        var A = this, y = A._draggable, W = A._position, G = A.getWidth(), d = A.getHeight(), D = A._dividerSize,
          f = A._dividerBackground, g = Qe ? 18 : 8, q = A._dividerDiv, o = A._82O, n = A._60O, i = A._61O,
          M = A._toggleIcon, e = A._status, V = q.style, j = null, U = Qe ? 20 : 4, J = M.comps[0];
        D >= g || 0 === D ? A._coverDiv && (up(A._coverDiv), delete A._coverDiv) : A._coverDiv || (A._coverDiv = Zg(), N && (A._coverDiv.style.background = rn), wm(q, A._coverDiv)), A._togglable ? n.parentNode || (wm(q, n), wm(q, i)) : (up(n), up(i));
        var z = A._coverDiv, K = A._leftView, p = A._rightView;
        if (hf(A)) {
          if (D > G && (D = G), e === yf) if (1 === o) var Q = L(W, G),
            B = R(0, G - D - Q); else -1 === o ? (B = L(-W, G), Q = R(0, G - D - B)) : (Q = l((G - D) * W), B = R(0, G - D - Q)); else "cl" === e ? (Q = 0, B = R(0, G - D)) : "cr" === e && (B = 0, Q = R(0, G - D));
          K && vk(K, 0, 0, Q, d), p && vk(p, Q + D, 0, B, d), vk(q, Q, 0, D, d), A._22o = Q, z && (vk(z, D / 2 - g / 2, 0, g, d), z.style.cursor = y ? kc : ""), q.style.cursor = y ? kc : "";
          var t = q.clientHeight / 2, v = q.clientWidth;
          Mb(n, v, v), vk(n, 0, t - v - U, v, v), j = dn(n), Gf(j, 0, 0, 1), J.rotation = -b, dm(j, M, 0, 0, v, v), j.restore(), Mb(i, v, v), vk(i, 0, t + U, v, v), j = dn(i), Gf(j, 0, 0, 1), J.rotation = b, dm(j, M, 0, 0, v, v), j.restore()
        } else {
          if (D > d && (D = d), e === yf) if (1 === o) var s = L(W, d),
            c = R(0, d - D - s); else -1 === o ? (c = L(-W, d), s = R(0, d - D - c)) : (s = l((d - D) * W), c = R(0, d - D - s)); else "cl" === e ? (s = 0, c = R(0, d - D)) : "cr" === e && (c = 0, s = R(0, d - D));
          K && vk(K, 0, 0, G, s), p && vk(p, 0, s + D, G, c), vk(q, 0, s, G, D), A._22o = s, z && (vk(z, 0, D / 2 - g / 2, G, g), z.style.cursor = y ? Ph : ""), V.cursor = y ? Ph : "";
          var C = q.clientWidth / 2, v = q.clientHeight;
          Mb(n, v, v), vk(n, C - v - U, 0, v, v), j = dn(n), Gf(j, 0, 0, 1), J.rotation = 0, dm(j, M, 0, 0, v, v), j.restore(), Mb(i, v, v), vk(i, C + U, 0, v, v), j = dn(i), Gf(j, 0, 0, 1), J.rotation = I, dm(j, M, 0, 0, v, v), j.restore()
        }
        V.background = f
      }
    });
    var fk = function (a) {
      this.sv = a, this.addListeners()
    };
    Dr(fk, F, {
      ms_listener: 1, getView: function () {
        return this.sv.getView()
      }, handle_touchstart: function (n) {
        var m = this, P = m.sv, l = P._dividerDiv, U = P._60O, e = P._61O, V = P._status, G = n.target;
        if (G === U) V === yf ? P.setStatus("cl") : "cr" === V && P.setStatus(yf); else if (G === e) V === yf ? P.setStatus("cr") : "cl" === V && P.setStatus(yf); else if (mj(n) && (G === l || G === P._coverDiv) && (gm(n), P.isDraggable())) {
          P.getLeftView(), P.getRightView();
          var s = m.maskDiv = Zg();
          if (s.style.left = 0, s.style.top = 0, s.style.width = P.getWidth() + "px", s.style.height = P.getHeight() + "px", P.getView().appendChild(s), !P.isContinuousLayout()) {
            var t = m.resizeDiv = Zg();
            t.style.left = l.style.left, t.style.top = l.style.top, t.style.width = l.style.width, t.style.height = l.style.height, t.style.opacity = P.getDragOpacity(), t.style.background = P.getDividerBackground(), wm(m.getView(), t)
          }
          m._lastAbsPosition = P._22o, m._86o = hf(P) ? ab(n).x : ab(n).y, Dj(m, n)
        }
      }, handleWindowTouchMove: function (F) {
        mj(F) && this.update(F, this.sv.isContinuousLayout())
      }, handleWindowTouchEnd: function (R) {
        var h = this;
        h.update(R, !0), h.sv.setStatus(yf), h.maskDiv && up(h.maskDiv), h.resizeDiv && up(h.resizeDiv), h.maskDiv = h.resizeDiv = A
      }, handle_mousedown: function (r) {
        Wb(r) && this.handle_touchstart(r)
      }, handleWindowMouseMove: function (C) {
        this.handleWindowTouchMove(C)
      }, handleWindowMouseUp: function (W) {
        this.handleWindowTouchEnd(W)
      }, update: function (g, i) {
        var z = this, E = z.sv, K = hf(E) ? E.getWidth() : E.getHeight(), w = E._dividerSize,
          F = z._lastAbsPosition - z._86o;
        hf(E) ? (F += ab(g).x, F > K - w && (F = K - w), 0 > F && (F = 0), z.resizeDiv && (z.resizeDiv.style.left = F + Kh)) : (F += ab(g).y, F > K - w && (F = K - w), 0 > F && (F = 0), z.resizeDiv && (z.resizeDiv.style.top = F + Kh)), i && K !== w && (1 === E._82O ? E.setPosition(F, 1) : -1 === E._82O ? E.setPosition(F - K + w, 1) : E.setPosition(F / (K - w), 1))
      }
    }), Tb.TabView = function () {
      var n = this, Z = n._view = Ae(1, n), F = n._91O = Zg(1), J = n._tabModel = new Yc, r = J.sm(), $ = n.invalidate;
      n._7o = new Oh, n._canvas = Ze(F), wm(Z, F), wm(Z, n._92O = Zg(1)), r.setSelectionMode(_o), r.ms(n.handleSelectionChange, n), J.mm($, n), J.md($, n), J.mh($, n), new wl(n), n.iv()
    }, fs("TabView", F, {
      ms_v: 1,
      ms_fire: 1,
      ms_tx: 1,
      ms_ty: 1,
      ms_lp: 1,
      ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", Or, Gi, "tabBackground", "selectWidth", Fj, "moveBackground", "insertColor"],
      _tabPosition: rd,
      _tabHeight: _m,
      _tabGap: E.tabViewTabGap,
      _labelColor: E.tabViewLabelColor,
      _labelFont: E.tabViewLabelFont,
      _tabBackground: E.tabViewTabBackground,
      _selectWidth: E.tabViewSelectWidth,
      _selectBackground: E.tabViewSelectBackground,
      _moveBackground: E.tabViewMoveBackground,
      _insertColor: E.tabViewInsertColor,
      _movable: !0,
      handleSelectionChange: function () {
        this._selectionChanged = !0, this.invalidate()
      },
      getContentDiv: function () {
        return this._92O
      },
      getTitleDiv: function () {
        return this._91O
      },
      getTabModel: function () {
        return this._tabModel
      },
      add: function (d, N, j) {
        var T = new nr, h = this._tabModel;
        return T.setName(d), T.setView(N), h.add(T), j && h.sm().ss(T), T
      },
      getLabel: function (u) {
        return u.toLabel()
      },
      onPropertyChanged: function () {
        this.iv()
      },
      _7Q: function (S) {
        this._23o = S, this.iv()
      },
      get: function (V) {
        var M = this, m = M._tabModel;
        if (Hl(V)) return m._roots.get(V);
        if (pp(V)) {
          var t;
          return m.each(function (A) {
            V === M.getLabel(A) && (t = A)
          }), t
        }
        return V instanceof nr ? V : A
      },
      select: function (e) {
        this._tabModel.sm().ss(this.get(e))
      },
      remove: function (e) {
        var D = this;
        if (e = D.get(e)) {
          var G = D._tabModel, S = G._roots.indexOf(e);
          D._tabModel.remove(e), D.selectByIndex(--S)
        }
      },
      getCurrentTab: function () {
        return this._8o
      },
      hideTabView: function (l, n) {
        n.parentNode === this._92O && (xk(n) ? (n.style.display = wc, n._tab_ = l) : up(n), qd())
      },
      showTabView: function (y, x) {
        xk(x) && (x.style.display = "block", x._tab_ = y), x.parentNode !== this._92O && (wm(this._92O, x), qd())
      },
      _24o: function () {
        var l, v = this, F = v._8o, z = v._9o, m = v._tabModel.sm().ld();
        m && (l = ss(m.getView())), l !== z && (z && (F.getView() && F.getView().endEditing && F.getView().endEditing(), v.hideTabView(F, z)), l && v.showTabView(m, l)), v._8o = m, v._9o = l, F !== m && v.onTabChanged(F, m)
      },
      onTabClosing: function () {
        return !0
      },
      onTabChanged: function () {
      },
      onTabClosed: function (N, V) {
        this.selectByIndex(--V)
      },
      selectByIndex: function (B) {
        var g = this, S = g._tabModel, z = S.size();
        if (z && !S.sm().ld()) {
          B == A && (B = 0), B >= z && (B = z - 1), 0 > B && (B = 0);
          for (var R = B; R >= 0; R--) {
            var O = g.get(R);
            if (!O.isDisabled()) return g.select(O), O
          }
          for (R = B + 1; z > R; R++) if (O = g.get(R), !O.isDisabled()) return g.select(O), O
        }
      },
      getTabWidth: function (d) {
        var f = 4, H = vf(d.getIcon());
        H && (f += Hk(H, d) + 4);
        var C = this.getLabel(d);
        return C && (f += gl(this.getLabelFont(d), C).width + 4), d.isClosable() && (f += 10), f
      },
      drawTab: function (f, B, q, N, R, Y, K) {
        var j, p = this, z = p._tabPosition, C = q + 4, O = p._selectWidth, U = vf(B.getIcon()), G = B.isDisabled(),
          s = p.getLabelColor(B), w = p.getLabelFont(B), x = p.getLabel(B), n = p._selectBackground,
          v = z === kl + "-vertical", k = z === we + "-vertical";
        (v || k) && (C = N + 4), G && (f.globalAlpha = Qd), yj(f, q, N, R, Y, K), B === p._8o && O && (z === rd ? yj(f, q, N + Y - O, R, O, n) : z === kl ? yj(f, q + R - O, N, O, Y, n) : z === we ? yj(f, q, N, O, Y, n) : v ? yj(f, q + R - O, N, O, Y, n) : k ? yj(f, q, N, O, Y, n) : yj(f, q, N, R, O, n));
        var W = R / 2;
        if (v && (Of(f, W, N + Y / 2), Rq(f, I), Of(f, -W, -N - Y / 2)), U) {
          var S = Ll(U, B), d = Hk(U, B);
          if (v || k) {
            var o = q + R / 2, X = C + S / 2;
            Of(f, o, X), Rq(f, b), Of(f, -o, -X), Zq(f, U, q + R / 2, C + S / 2, B, p), Of(f, o, X), Rq(f, -b), Of(f, -o, -X), C += S + 4
          } else Zq(f, U, C + d / 2, N + Y / 2, B, p), C += d + 4
        }
        return v || k ? (Of(f, R / 2, C + R / 2), Rq(f, b), Of(f, -R / 2, -C - R / 2), Po(f, x, w, s, q, C, Y, R), Of(f, R / 2, C + R / 2), Rq(f, -b), Of(f, -R / 2, -C - R / 2)) : Po(f, x, w, s, C, N, R, Y), v && (Of(f, W, N + Y / 2), Rq(f, -I), Of(f, -W, -N - Y / 2)), B.isClosable() && (j = k ? {
          x: q + R - 12,
          y: N + Y - 12,
          width: 12,
          height: 12
        } : {
          x: q + R - 12,
          y: N + 2,
          width: 12,
          height: 12
        }, this.drawCloseIcon(B, f, s, j)), G && (f.globalAlpha = 1), j
      },
      drawCloseIcon: function (x, D, k, E) {
        var o = E.x, t = E.y;
        D.strokeStyle = k, D.lineWidth = 1, D.beginPath(), D.moveTo(o + 2, t + 8), D.lineTo(o + 8, t + 2), D.moveTo(o + 8, t + 8), D.lineTo(o + 2, t + 2), D.stroke()
      },
      validateImpl: function () {
        var O = this;
        O._24o();
        var n, q = O._canvas, K = O._tabPosition, M = O._91O, m = O._92O, e = O._tabModel, L = O.getWidth(),
          g = O.getHeight(), d = O._tabHeight, D = O._7o, U = O._tabGap, v = K === rd, h = K === kl, p = K === we,
          W = K === kl + "-vertical", c = K === we + "-vertical", b = O._23o, j = 0;
        if ((h || p) && e._roots.each(function (z) {
          j = R(O.getTabWidth(z), j)
        }), v ? (vk(M, 0, 0, L, d), n = {
          x: 0,
          y: d,
          width: L,
          height: R(0, g - d)
        }) : h ? (vk(M, 0, 0, j, g), n = {
          x: j,
          y: 0,
          width: R(0, L - j),
          height: g
        }) : p ? (vk(M, L - j, 0, j, g), n = {
          x: 0,
          y: 0,
          width: R(0, L - j),
          height: g
        }) : W ? (vk(M, 0, 0, d, g), n = {
          x: d,
          y: 0,
          width: R(0, L - d),
          height: g
        }) : c ? (vk(M, L - d, 0, d, g), n = {
          x: 0,
          y: 0,
          width: R(0, L - d),
          height: g
        }) : (vk(M, 0, g - d, L, d), n = {x: 0, y: 0, width: L, height: R(0, g - d)}), vk(m, n), W || c) {
          O._9o && (n.x = 0, vk(O._8o.getView(), n)), Mb(q, d, g);
          var f = dn(q), y = 0;
          if (Gf(f, 0, O.ty(), 1), f.clearRect(0, 0, d, g), D.clear(), e._roots.each(function (t) {
            var G, z = O.getTabWidth(t);
            b && b.tab === t || (G = O.drawTab(f, t, 0, y, d, z, O._tabBackground)), D.add({
              _75o: G,
              tab: t,
              startY: y,
              endY: y + z,
              height: z
            }), y += z + U
          }), O._23Q = R(0, y - U), b) {
            var s = b.position;
            O.drawTab(f, b.tab, 0, b.startY, d, b.height, O._moveBackground), yj(f, 0, s, d, 1, O._insertColor)
          }
          if (f.restore(), O._selectionChanged) {
            O._selectionChanged = !1;
            for (var N = O.ty(), Q = 0; Q < D.size(); Q++) {
              var $ = D.get(Q);
              if ($.tab === O._8o) {
                if ($.endY + N < 0) {
                  O.ty(-$.startY);
                  break
                }
                if ($.startY + N > g) {
                  O.ty(g - $.endY);
                  break
                }
              }
            }
          }
          O.ty(O.ty())
        } else if (h || p) {
          O._9o && (n.x = 0, vk(O._8o.getView(), n)), Mb(q, j, g);
          var f = dn(q), y = 0;
          if (Gf(f, 0, O.ty(), 1), f.clearRect(0, 0, j, g), D.clear(), e._roots.each(function (c) {
            var r;
            b && b.tab === c || (r = O.drawTab(f, c, 0, y, j, d, O._tabBackground)), D.add({
              _75o: r,
              tab: c,
              startY: y,
              endY: y + d,
              height: d
            }), y += d + U
          }), O._23Q = R(0, y - U), b) {
            var s = b.position;
            O.drawTab(f, b.tab, 0, b.startY, j, b.height, O._moveBackground), yj(f, 0, s, j, 1, O._insertColor)
          }
          if (f.restore(), O._selectionChanged) {
            O._selectionChanged = !1;
            for (var N = O.ty(), Q = 0; Q < D.size(); Q++) {
              var $ = D.get(Q);
              if ($.tab === O._8o) {
                if ($.endY + N < 0) {
                  O.ty(-$.startY);
                  break
                }
                if ($.startY + N > g) {
                  O.ty(g - $.endY);
                  break
                }
              }
            }
          }
          O.ty(O.ty())
        } else {
          O._9o && (n.y = 0, vk(O._8o.getView(), n)), Mb(q, L, d);
          var f = dn(q), C = 0;
          if (Gf(f, O.tx(), 0, 1), f.clearRect(0, 0, L, d), D.clear(), e._roots.each(function (R) {
            var H, V = O.getTabWidth(R);
            b && b.tab === R || (H = O.drawTab(f, R, C, 0, V, d, O._tabBackground)), D.add({
              _75o: H,
              tab: R,
              startX: C,
              endX: C + V,
              width: V
            }), C += V + U
          }), O._64I = R(0, C - U), b) {
            var s = b.position;
            O.drawTab(f, b.tab, b.startX, 0, b.width, d, O._moveBackground), th(f, O._insertColor, s, 0, d)
          }
          if (f.restore(), O._selectionChanged) {
            O._selectionChanged = !1;
            for (var z = O.tx(), Q = 0; Q < D.size(); Q++) {
              var $ = D.get(Q);
              if ($.tab === O._8o) {
                if ($.endX + z < 0) {
                  O.tx(-$.startX);
                  break
                }
                if ($.startX + z > L) {
                  O.tx(L - $.endX);
                  break
                }
              }
            }
          }
          O.tx(O.tx())
        }
        for (var r = [], t = m.children, Q = 0; Q < t.length; Q++) {
          var J = t[Q], w = J._tab_;
          w && !e.contains(w) && r.push(J)
        }
        r.forEach(function (f) {
          m.removeChild(f)
        })
      }
    });
    var wl = function (P) {
      this.tv = P, this.addListeners()
    };
    Dr(wl, F, {
      ms_listener: 1, getView: function () {
        return this.tv._91O
      }, handle_mousewheel: function (t) {
        this.handleScroll(t, 10 * (t.wheelDelta / 40))
      }, handle_DOMMouseScroll: function (m) {
        this.handleScroll(m, 10 * -m.detail)
      }, handleScroll: function (T, S) {
        gm(T);
        var V = this.tv, l = V._tabPosition;
        !V._40o() || l !== rd && l !== Aj || V.tx(this.tv.tx() + S), !V._41o() || l !== kl && l !== we && l !== kl + "-vertical" && l !== we + "-vertical" || V.ty(this.tv.ty() + S)
      }, _8Q: function (p) {
        var R, W, Z = this.tv, i = Z._tabPosition, M = Z._7o;
        if (i === rd || i === Aj) {
          var D = Z.lp(p).x;
          for (R = 0; R < M.size(); R++) if (W = M.get(R), W.startX <= D && D <= W.endX) return W
        } else if (i === kl || i === we || i === kl + "-vertical" || i === we + "-vertical") {
          var X = Z.lp(p).y;
          for (R = 0; R < M.size(); R++) if (W = M.get(R), W.startY <= X && X <= W.endY) return W
        }
        return A
      }, isClickable: function (O) {
        var P = this.tv, e = P._tabPosition, R = this._73o = this._8Q(O);
        return !P._40o() || e !== rd && e !== Aj ? !P._41o() || e !== kl && e !== we && e !== kl + "-vertical" && e !== we + "-vertical" ? R && (!R.tab.isDisabled() || P.isMovable()) : !0 : !0
      }, handle_mousemove: function (c) {
        var a = this;
        ze ? a._74o = a._8Q(c) : a.getView().style.cursor = a.isClickable(c) ? yg : ""
      }, handle_mousedown: function (x) {
        this.handle_mousemove(x), this.handle_touchstart(x)
      }, handle_touchstart: function (k) {
        var h = this, Q = h.tv, b = Q._tabPosition;
        gm(k), Wb(k) && h.isClickable(k) && (b === rd || b === Aj ? (h.x = ab(k).x, h.lp = Q.lp(k), h.tx = Q.tx()) : (h.y = ab(k).y, h.lp = Q.lp(k), h.ty = Q.ty()), Dj(h, k))
      }, handleWindowMouseMove: function (u) {
        this.handleWindowTouchMove(u)
      }, handleWindowTouchMove: function (m) {
        var I, _ = this, J = _.tv, V = J._tabPosition, l = _._73o;
        if (V === rd || V === Aj) {
          if (I = ab(m).x - _.x, !_._25o && !_.moving && C(I) > 2 && (J._40o() && !xr(m) ? _._25o = 1 : l && J.isMovable() && (_.moving = 1)), _._25o) J.tx(_.tx + I); else if (_.moving) {
            var P = _.lp.x + I, O = J._tabGap / 2;
            J._7o.each(function (C) {
              var E = C.endX, M = P - C.startX < E - P;
              P >= C.startX && E >= P && J._7Q({
                tab: l.tab,
                startX: l.startX + I,
                width: l.width,
                front: M,
                insertTab: C.tab,
                position: M ? R(0, C.startX - O) : L(J._64I, E + O)
              })
            })
          }
        } else if (I = ab(m).y - _.y, !_._25o && !_.moving && C(I) > 2 && (J._41o() && !xr(m) ? _._25o = 1 : l && J.isMovable() && (_.moving = 1)), _._25o) J.ty(_.ty + I); else if (_.moving) {
          var v = _.lp.y + I, O = J._tabGap / 2;
          J._7o.each(function (x) {
            var s = x.endY, y = v - x.startY < s - v;
            v >= x.startY && s >= v && J._7Q({
              tab: l.tab,
              startY: l.startY + I,
              height: l.height,
              front: y,
              insertTab: x.tab,
              position: y ? R(0, x.startY - O) : L(J._23Q, s + O)
            })
          })
        }
      }, handleWindowMouseUp: function (u) {
        this.handleWindowTouchEnd(u)
      }, handleWindowTouchEnd: function () {
        var R = this, f = R.tv, z = f._tabPosition, Y = f.getTabModel(), o = Y._roots, O = R._73o;
        if (R.moving) {
          var c = f._23o;
          if (c && c.insertTab !== c.tab) {
            var u = c.tab, C = o.remove(u), M = o.indexOf(c.insertTab);
            M >= 0 && (c.front || M++, M <= o.size() && (o.add(u, M), Y._38I(u, C, M)))
          }
          f._7Q(A), delete R.moving
        } else if (!R._25o && O) {
          u = O.tab;
          var J = R._74o;
          if (!J || J.tab === u) if (!u.isDisabled() && en(O._75o, R.lp)) {
            var i = function () {
              var h = o.indexOf(u);
              Y.remove(u), f.onTabClosed(u, h)
            };
            f.onTabClosing(u, i) && i()
          } else u.isDisabled() || f._8o === u || Y.sm().ss(u)
        }
        R._25o = R._73o = R._74o = z === rd || z === Aj ? R.x = R.lp = R.tx = A : R.y = R.lp = R.ty = A
      }
    }), Tb.PropertyView = function (R) {
      var P = this;
      P._view = Ae(1, P), P._canvas = Ze(P._view), wm(P._view, P._79O = Zg()), P._rows = new Oh, P._28o = new Oh, P._26o = {}, P._26Q = {};
      var x = P._propertyModel = new Yc, b = P.ivm;
      x.mm(b, P), x.md(b, P), x.mh(b, P), P.dm(R ? R : new Yc), new Bi(P)
    }, fs("PropertyView", F, {
      ms_ac: [Or, Rp, Gi, xe, Fp, "categorizable", Je, nm, ge, Xi, Ym, xs, Xj, Te, "selectRowIndex", Fj, "background", Sm, Hc, jk, nb, zn],
      ms_v: 1,
      ms_dm: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      _45o: 1,
      _47o: 1,
      ms_tip: 1,
      _29I: ui,
      _59I: 0,
      _9I: 0,
      _selectRowIndex: -1,
      _editable: !0,
      _batchEditable: !0,
      _categorizable: !0,
      _indent: fi,
      _background: E.propertyViewBackground,
      _expandIcon: E.propertyViewExpandIcon,
      _collapseIcon: E.propertyViewCollapseIcon,
      _scrollBarColor: No,
      _scrollBarSize: Mh,
      _autoHideScrollBar: tk,
      _selectBackground: E.propertyViewSelectBackground,
      _rowHeight: Cc,
      _rowLineVisible: E.propertyViewRowLineVisible,
      _rowLineColor: E.propertyViewRowLineColor,
      _10I: .5,
      _columnLineVisible: E.propertyViewColumnLineVisible,
      _columnLineColor: E.propertyViewColumnLineColor,
      _labelColor: E.propertyViewLabelColor,
      _labelSelectColor: E.propertyViewLabelSelectColor,
      _labelFont: E.propertyViewLabelFont,
      getRows: function () {
        return this._rows
      },
      getColumnPosition: function () {
        return this._10I
      },
      setColumnPosition: function (m) {
        0 > m && (m = 0), m > 1 && (m = 1);
        var _ = this, k = _._10I;
        _._10I = m, _.fp("columnPosition", k, m)
      },
      getPropertyName: function (I) {
        return I.toLabel()
      },
      getLabelFont: function () {
        return this._labelFont
      },
      getLabelColor: function (u, Y, i) {
        return i === this._selectRowIndex ? this._labelSelectColor : this._labelColor
      },
      getPropertyFont: function () {
        return this._labelFont
      },
      getPropertyColor: function (M, t) {
        return t === this._selectRowIndex ? this._labelSelectColor : M.getColor() || this._labelColor
      },
      getCategoryFont: function () {
        return this._labelFont
      },
      getCategoryColor: function () {
        return this._labelColor
      },
      adjustTranslateX: function () {
        return 0
      },
      adjustTranslateY: function (K) {
        var m = this.getHeight() - this._59I;
        return m > K && (K = m), K > 0 ? 0 : l(K)
      },
      isExpanded: function (r) {
        if (!r) return !0;
        var v = this._26o[r];
        return v ? v.isExpanded : !(this._26Q[r] === !1)
      },
      toggle: function (P) {
        var U = this;
        U.isExpanded(P) ? U.collapse(P) : U.expand(P)
      },
      expandAll: function () {
        this.validate();
        for (var M in this._26o) this.expand(M)
      },
      expand: function (R) {
        if (R && R !== wc) {
          var a = this, W = a._26o[R];
          W && !W.isExpanded && (W.isExpanded = !0, a.onExpanded(R), a.ivm())
        }
      },
      onExpanded: function () {
      },
      collapseAll: function () {
        this.validate();
        for (var O in this._26o) this.collapse(O)
      },
      collapse: function (I) {
        if (I && I !== wc) {
          var s = this, F = s._26o[I];
          F && F.isExpanded && (F.isExpanded = !1, s.onCollapsed(I), s.ivm())
        }
      },
      onCollapsed: function () {
      },
      getCategoryName: function (X) {
        if (!this.isCategorizable()) return wc;
        var g = X.getCategoryName();
        return g ? g : wc
      },
      getPropertyModel: function () {
        return this._propertyModel
      },
      handleSelectionChange: function () {
        this.ivm()
      },
      setDataModel: function (t) {
        var g = this, C = g._dataModel;
        C !== t && (C && (C.umd(g.handlePropertyChange, g), g._selectionModel || C.sm().ums(g.handleSelectionChange, g)), g._dataModel = t, t.md(g.handlePropertyChange, g), g._selectionModel ? g._selectionModel._21I(t) : t.sm().ms(g.handleSelectionChange, g), g.fp(Bn, C, t))
      },
      isVisible: function (j) {
        return this._visibleFunc ? this._visibleFunc(j) : !0
      },
      onPropertyChanged: function (n) {
        var V = this, A = n.property;
        wh[A] ? V.ivm() : V.iv(), A === yi && V._43o()
      },
      getCurrentData: function () {
        return this._27o
      },
      updateCurrentData: function () {
        this._27o = this.sm().ld()
      },
      getRawProperties: function () {
        return this._27o ? this._propertyModel._roots : ai
      },
      handlePropertyChange: function (n) {
        this._27o === n.data && this.iv()
      },
      ivm: function () {
        this.invalidateModel()
      },
      invalidateModel: function () {
        var k = this;
        k._96I || (k.setSelectRowIndex(-1), k._96I = 1, k.iv())
      },
      redraw: function () {
        this.iv()
      },
      validateModel: function () {
        var O = this, I = O._rows, Z = O._28o, K = {}, b = new Oh, P = O._27o;
        O.updateCurrentData(), P !== O._27o && O.endEditing(), I.clear(), Z.clear(), O.getRawProperties().each(function ($) {
          if (O.isVisible($)) {
            b.add($);
            var L = O.getCategoryName($);
            K[L] || (Z.add(L, L === wc ? 0 : S), K[L] = {isExpanded: O.isExpanded(L), properties: new Oh})
          }
        }), O._sortFunc && b.sort(O._sortFunc);
        for (var p in O._26o) O._26Q[p] = O.isExpanded(p);
        O._26o = K, Z.each(function (v) {
          v !== wc && I.add(v);
          var B = K[v];
          B.isExpanded && b.each(function (w) {
            O.getCategoryName(w) === v && (B.properties.add(w), I.add({property: w, data: O._27o}))
          }, O)
        })
      },
      validateImpl: function () {
        var E = this;
        E._76o(), E._96I && (E.validateModel(), delete E._96I);
        var k = E._canvas, V = E.getWidth(), N = E.getHeight(), W = -E.ty(), $ = E._rowHeight, h = E._indent, d = V - h,
          w = E._rows, F = w.size(), x = E._9I = h + d * E._10I, P = E._59I = F * $;
        Mb(k, V, N), E._29I = {
          x: 0,
          y: W,
          width: V,
          height: N
        }, E._31I = n(W / $), E._14I = t((W + N) / $), E._31I < 0 && (E._31I = 0), E._14I > F && (E._14I = F);
        var S, l = dn(k), O = E._background;
        Gf(l, 0, -W, 1), l.beginPath(), l.rect(0, W, V, N), l.clip(), l.clearRect(0, W, V, N), E._93db(l), O && yj(l, 0, 0, h, P, O);
        for (var f = E._31I; f < E._14I; f++) {
          var D = w.get(f), W = $ * f;
          if (pp(D)) O && yj(l, h, W, d, $, O), S = vf(E.isExpanded(D) ? E._expandIcon : E._collapseIcon), S && Jl(l, S, lc, 0, W, h, $), l.save(), l.beginPath(), l.rect(h, W, d, $), l.clip(), E.drawCategoryName(l, D, f, h, W, d, $), l.restore(); else {
            var b = D.property, L = D.data, S = vf(b.getIcon()),
              Q = E._selectRowIndex === f ? E.getSelectBackground() : A;
            if (S && Jl(l, S, lc, 0, W, h, $), Q && yj(l, h, W, d, $, Q), l.save(), l.beginPath(), l.rect(h, W, x - h, $), l.clip(), E.drawPropertyName(l, b, f, h, W, x - h, $), l.restore(), !E.isEditing(L, b)) {
              var z = x + 1, R = V - x - 1;
              l.save(), l.beginPath(), l.rect(z, W, R, $), l.clip(), E._87o(E.drawPropertyValue(l, b, E.getValue(L, b), f, z, W, R, $, L), f, z, W, R, $), l.restore()
            }
          }
          E._rowLineVisible && yj(l, h, W + $ - 1, d, 1, E._rowLineColor)
        }
        E._columnLineVisible && (yj(l, x, 0, 1, P, E._columnLineColor), yj(l, V - 1, 0, 1, P)), E._92db(l), E._93I(), l.restore(), E.ty(E.ty())
      },
      drawCategoryName: function (J, $, C, m, Z, z, r) {
        Po(J, $, this.getCategoryFont($), this.getCategoryColor($), m, Z, z, r)
      },
      drawPropertyName: function (I, P, i, j, n, v, L) {
        return P.drawPropertyName ? (P.drawPropertyName(I, P, i, j, n, v, L, this), void 0) : (Po(I, this.getPropertyName(P), this.getPropertyFont(P, i), this.getPropertyColor(P, i), j, n, v, L), void 0)
      },
      drawPropertyValue: function (J, r, l, u, V, G, I, L, n) {
        return r.drawPropertyValue ? r.drawPropertyValue(J, r, l, u, V, G, I, L, n, this) : (Xq(J, l, r, this.getLabelFont(r, l, u), this.getLabelColor(r, l, u), V, G, I, L, n, this), void 0)
      },
      isPropertyEditable: function (r) {
        return r.isEditable() && this.isEditable()
      },
      setProperties: function (q) {
        this._propertyModel.clear(), this.addProperties(q)
      },
      addProperties: function (Z) {
        if (Z) {
          var l = this._propertyModel;
          Z.forEach(function (F) {
            if (!(F instanceof cq)) {
              var I = Ye(F.className);
              F = _n(I ? I : cq, F)
            }
            l.add(F)
          })
        }
      },
      getRowIndexAt: function (L) {
        var k = this, C = n(k.lp(L).y / k._rowHeight);
        return C >= 0 && C < k._rows.size() ? C : -1
      },
      getPropertyAt: function (W) {
        var T = this, y = T.getRowIndexAt(W);
        return y >= 0 ? T._rows.get(y).property : A
      },
      getToolTip: function (H) {
        var e = this, X = e.getPropertyAt(H), y = e._27o;
        return X && y ? X.getToolTip(y, e._9I < e.lp(H).x, e) : A
      }
    });
    var Bi = function (Z) {
      this.pv = Z, this.addListeners()
    };
    Dr(Bi, F, {
      ms_listener: 1, getView: function () {
        return this.pv._view
      }, setCursor: function (G) {
        this.getView().style.cursor = G
      }, clear: function () {
        var S = this;
        S._62O = S.cp = S.ty = S.p = A, S.setCursor(Cn)
      }, handle_mousedown: function (T) {
        this.handle_touchstart(T)
      }, handle_touchstart: function (V) {
        var r = this, l = r.pv;
        gm(V), l.setFocus(V) && (Wb(V) ? (r.cp = ab(V), r.ty = l.ty(), r.p = l.getColumnPosition(), r.handle_touchmove(V)) : l.setSelectRowIndex(l.getRowIndexAt(V)))
      }, handleWindowMouseUp: function () {
        this.clear()
      }, handleWindowTouchEnd: function () {
        this.clear()
      }, handle_mouseup: function (f) {
        this.handle_touchend(f)
      }, handle_touchend: function (I) {
        var i = this;
        if (i.cp && !i._62O) {
          var $ = i.pv, f = $.lp(I), G = f.x, R = f.y, P = $._indent, r = $.getRowIndexAt(I), g = $._9I;
          if (r >= 0) {
            var h = $._rowHeight, V = h * r, A = $._rows.get(r), Y = A.property;
            if (pp(A)) vf($.isExpanded(A) ? $._expandIcon : $._collapseIcon) && G >= 0 && P >= G && R >= V && V + h >= R ? $.toggle(A) : qo(I) && $.toggle(A); else if (G > g && $.isPropertyEditable(Y, I)) {
              var y = {x: g + 1, y: V, width: $.getWidth() - g - 1, height: h},
                t = {x: y.x + $.tx(), y: y.y + $.ty(), width: y.width, height: y.height}, C = 0, _ = $._29I;
              y.y < _.y ? C = y.y - _.y : y.y + h > _.y + _.height && (C = y.y + h - _.y - _.height), C && ($.ty($.ty() - C), t.y -= C), $.beginEditing({
                data: A.data,
                property: Y,
                value: $.getValue(A.data, Y),
                event: I,
                rect: y,
                editorRect: t,
                view: $
              })
            }
          }
          $.setSelectRowIndex(r)
        }
        i.clear()
      }, handleWindowMouseMove: function (U) {
        this.handleWindowTouchMove(U)
      }, handleWindowTouchMove: function (O) {
        var U = this, s = U.pv, o = U.ty, u = U.cp, M = ab(O), S = U._62O;
        if ("p" === S) s.setTranslateY(o + M.y - u.y); else if ("c" === S) {
          var j = s.getWidth() - s._indent;
          if (j > 16) {
            var l = U.p - (u.x - M.x) / j, g = 16 / j;
            g > l && (l = g), l > 1 - g && (l = 1 - g), s.setColumnPosition(l)
          }
        } else "s" === S && s.setTranslateY(o + (u.y - M.y) * s._59I / s._29I.height)
      }, handle_mousemove: function (C) {
        this.handle_touchmove(C)
      }, handle_touchmove: function (x) {
        if (!ze && Wb(x)) {
          var o = this, O = o.pv, g = C(O.lp(x).x - O._9I) <= (Qe ? 8 : 3);
          o.cp ? o._62O || (g ? (o._62O = "c", Dj(o)) : C(ab(x).y - o.cp.y) >= 2 && (o._62O = o.isV(x) ? "s" : "p", Dj(o))) : (g ? o.setCursor(kc) : o.setCursor(Cn), o.isV(x) && O._43o())
        }
      }, isV: function (s) {
        var o = this.pv, k = o._29I;
        return o._41o() && k.x + k.width - o.lp(s).x < Oe
      }, handle_mousewheel: function (m) {
        this.handleScroll(m, m.wheelDelta / 40)
      }, handle_DOMMouseScroll: function (X) {
        2 === X.axis && this.handleScroll(X, -X.detail)
      }, handleScroll: function (v, J) {
        var j = this.pv;
        gm(v), j.endEditing(), j.translate(0, J * j.getRowHeight())
      }, handle_keydown: function (a) {
        var p = this.pv, S = p._rows.size(), X = p._selectRowIndex + ($p(a) ? -1 : 1);
        ($p(a) || Mj(a)) && (0 > X && (X = 0), X >= S && (X = S - 1), p.setSelectRowIndex(X))
      }
    }), Tb.ListView = function (R) {
      this._5o(R), new dg(this)
    }, fs("ListView", F, {
      ms_ac: [Or, Rp, Gi, Sm, Je, Hc, jk, nm, ge, xs, Xj, Te, Pk, Fj],
      ms_v: 1,
      ms_bnb: 1,
      ms_tip: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      _15Q: 1,
      _14Q: 1,
      ms_dm: 1,
      _45o: 1,
      _checkMode: !1,
      _indent: fi,
      _rowHeight: Cc,
      _rowLineVisible: E.listViewRowLineVisible,
      _rowLineColor: E.listViewRowLineColor,
      _scrollBarColor: No,
      _scrollBarSize: Mh,
      _autoMakeVisible: nd,
      _autoHideScrollBar: tk,
      _selectBackground: E.listViewSelectBackground,
      _labelColor: E.listViewLabelColor,
      _labelSelectColor: E.listViewLabelSelectColor,
      _labelFont: E.listViewLabelFont,
      isCheckMode: function () {
        return this._checkMode
      },
      setCheckMode: function (K) {
        var P = this, w = P._checkMode;
        P._checkMode = K, P.fp(sq, w, K)
      },
      drawRow: function (n, h, m, Y, L, u, C) {
        var w = this, t = 0, J = w._indent, b = w.getIconWidth(h);
        w.drawRowBackground(n, h, m, Y, L, u, C), w._checkMode && (Zq(n, vf(w.getCheckIcon(h)), t + J / 2, L + C / 2, h, w), t += J), w.drawIcon(n, h, t, L, b, C), w.drawLabel(n, h, t + b, L, C)
      }
    });
    var dg = function (Y) {
      this.list = Y, this._lastSelectDataTime = gb(), this.addListeners()
    };
    Dr(dg, F, {
      ms_listener: 1, getView: function () {
        return this.list._view
      }, clear: function (I) {
        var s = this, u = s.list;
        I && "d" === s._62O && !s.dragCancel && u.handleDragAndDrop(I, "end"), u.draggingData && (u.draggingData = null, u.redraw()), s.dragCancel = s._62O = s._isV = s._isH = s.cp = s.tx = s.ty = A
      }, handle_mousedown: function (K) {
        this.handle_touchstart(K)
      }, handle_touchstart: function (Z) {
        var e = this, v = e.list;
        if (gm(Z), v.setFocus(Z)) {
          var Y = v.getDataAt(Z);
          e.cp = ab(Z), e.tx = v.tx(), e.ty = v.ty(), Wb(Z) ? Y && v.handleDragAndDrop && !e.isV(Z) && !e.isH(Z) && (v.draggingData = Y, v.redraw(), v.handleDragAndDrop(Z, "prepare")) : (Y && e._33o(Z, Y), e.clear(Z))
        }
      }, handleWindowMouseUp: function (Z) {
        this.clear(Z)
      }, handleWindowTouchEnd: function (k) {
        this.clear(k)
      }, handle_mouseup: function (V) {
        this.handle_touchend(V)
      }, handle_touchend: function (m) {
        var u = this, C = u.list;
        if (!u._isV && !u._isH && u.cp && !u._62O) {
          var j = C.getDataAt(m);
          j ? (C.isCheckMode() ? u._34o(m, j) : u._33o(m, j), qo(m) ? C.onDataDoubleClicked(j, m) : C.onDataClicked(j, m)) : C.handleBackgroundClick(m)
        }
        u.clear(m)
      }, handleWindowMouseMove: function (_) {
        this.handleWindowTouchMove(_)
      }, handleWindowTouchMove: function (G) {
        var k = this, h = k.list, K = k._62O, Y = k.tx, a = k.ty, F = k.cp, I = ab(G), U = h._29I;
        "p" === K ? h.setTranslate(Y + I.x - F.x, a + I.y - F.y) : "v" === K ? h.ty(a + (F.y - I.y) * h._59I / U.height) : "h" === K ? h.tx(Y + (F.x - I.x) * h._91I / U.width) : "d" === K && (k.dragCancel || h.handleDragAndDrop(G, "between"))
      }, handle_mousemove: function (R) {
        this.handle_touchmove(R)
      }, handle_touchmove: function (i) {
        if (!ze && Wb(i)) {
          var D = this, a = D.list;
          if (D._isV = D.isV(i), D._isH = D.isH(i), D.cp) {
            if (!D._62O) {
              if (lf(ab(i), D.cp) < 2) return;
              D._isV ? D._62O = "v" : D._isH ? D._62O = "h" : a.draggingData && !this.dragCancel ? (D._62O = "d", a.handleDragAndDrop(i, "begin")) : D._62O = "p", D._62O && "d" !== D._62O && a.draggingData && (a.draggingData = null, a.redraw()), Dj(D)
            }
          } else D._isV && a._43o(), D._isH && a._42o()
        }
      }, isV: function (j) {
        var r = this.list, x = r._29I;
        return r._41o() && x.x + x.width - r.lp(j).x < Oe
      }, isH: function (V) {
        var K = this.list, l = K._29I;
        return K._40o() && l.y + l.height - K.lp(V).y < Oe
      }, handle_mousewheel: function (m) {
        this.handleScroll(m, m.wheelDelta / 40, m.wheelDelta !== m.wheelDeltaX)
      }, handle_DOMMouseScroll: function (N) {
        this.handleScroll(N, -N.detail, 1)
      }, handleScroll: function (Y, R, d) {
        var M = this.list;
        gm(Y), M.endEditing && M.endEditing(), d && M._41o() ? M.translate(0, R * M.getRowHeight()) : M._40o() && M.translate(10 * R, 0)
      }, handle_keydown: function (d) {
        if (!E.isInput(d.target)) {
          var K, w = this.list, S = w.sm(), F = w._rows, H = F.size();
          if (pg(d)) w.selectAll(); else if (wj(d)) w.handleDelete && w.handleDelete(d); else if (Fr(d)) "d" !== this._62O || this.dragCancel || (w.handleDragAndDrop(d, "cancel"), this.dragCancel = !0); else if (ih(d)) w.isCheckMode() && (K = w.getFocusData(), K && w.checkData(K)); else if ($p(d) || Mj(d)) {
            var x = w.isCheckMode();
            if (K = x ? w.getFocusData() : S.ld()) {
              var e = w.getRowIndex(K);
              e >= 0 && ($p(d) ? 0 !== e && (K = F.get(e - 1), x ? w.setFocusData(K) : S.ss(K)) : e !== H - 1 && (K = F.get(e + 1), x ? w.setFocusData(K) : S.ss(K)))
            } else H > 0 && (K = F.get(0), x ? w.setFocusData(K) : S.ss(K))
          }
        }
      }, _34o: function (F, w) {
        var g = this.list, L = g.lp(F).x;
        return L >= 0 && L <= g._indent ? (g.checkData(w), void 0) : (g.setFocusData(w), void 0)
      }, _33o: function (c, l) {
        var a = this.list, s = a.sm(), L = s.ld();
        if (xr(c)) a.isSelected(l) ? s.rs(l) : s.as(l); else if (jr(c)) if (L) for (var q = a.getRowIndex(L), n = a.getRowIndex(l); q !== n;) q += n > q ? 1 : -1, s.as(a._rows.get(q)); else s.ss(l); else if (Wb(c)) {
          var A = gb();
          if (s.contains(l)) {
            var t = A - this._lastSelectDataTime;
            a.handleDataDoubleSelect && t > 500 && 1500 > t && a.handleDataDoubleSelect(c, l)
          }
          s.ss(l), this._lastSelectDataTime = A
        } else s.contains(l) || s.ss(l)
      }
    }), Tb.TreeView = function (D) {
      var y = this;
      y._35o(), y._5o(D), new De(y)
    }, fs("TreeView", F, {
      ms_ac: [Or, Rp, Gi, "rootVisible", sq, "rootData", nm, ge, xs, Xj, Te, Je, Sm, Hc, jk, Xi, Ym, Pk, Fj, "loader", "doubleClickToToggle"],
      ms_v: 1,
      ms_bnb: 1,
      ms_tip: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      _15Q: 1,
      ms_dm: 1,
      _48o: 1,
      _14Q: 1,
      _45o: 1,
      _checkMode: A,
      _indent: fi,
      _rowHeight: Cc,
      _rowLineVisible: E.treeViewRowLineVisible,
      _rowLineColor: E.treeViewRowLineColor,
      _scrollBarColor: No,
      _scrollBarSize: Mh,
      _autoHideScrollBar: tk,
      _expandIcon: E.treeViewExpandIcon,
      _collapseIcon: E.treeViewCollapseIcon,
      _autoMakeVisible: nd,
      _selectBackground: E.treeViewSelectBackground,
      _labelColor: E.treeViewLabelColor,
      _labelSelectColor: E.treeViewLabelSelectColor,
      _labelFont: E.treeViewLabelFont,
      _doubleClickToToggle: E.treeViewDoubleClickToToggle,
      drawRow: function (F, f, $, X, M, c, p) {
        var A = this;
        A.drawRowBackground(F, f, $, X, M, c, p), A._97I(F, f, $, 0, M, c, p)
      },
      isOnToggleIcon: function (w) {
        var Z = this.getDataAt(w);
        if (Z) {
          var i = this.getIndent(), p = this.lp(w).x;
          if (vf(this.getToggleIcon(Z))) {
            var h = i * this.getLevel(Z);
            if (p >= h && h + i >= p) return !0
          }
        }
        return !1
      }
    });
    var De = function (T) {
      Eo(De, this, [T])
    };
    Dr(De, dg, {
      toggle: function (x, C, F, q) {
        var y = this.list, e = y.lp(x).x;
        if (vf(y.getToggleIcon(C))) {
          var i = F * q;
          if (e >= i && i + F >= e) return y.toggle(C), !0
        }
        return y.isDoubleClickToToggle() && qo(x) ? (y.toggle(C), !0) : !1
      }, _34o: function (O, M) {
        var o = this.list, m = o.lp(O).x, T = o._levelMap[M._id], N = o._indent, $ = N * (T + 1);
        return m >= $ && $ + N >= m ? (o.checkData(M), void 0) : (this.toggle(O, M, N, T) || o.setFocusData(M), void 0)
      }, _33o: function (z, a) {
        var n = this, R = n.list;
        n.toggle(z, a, R._indent, R.getLevel(a)) || De.superClass._33o.call(n, z, a)
      }, handle_keydown: function (l) {
        if (nl(l) || $j(l)) {
          var B = this.list, e = B._rows, V = B.isCheckMode(), k = B.sm(), t = V ? B.getFocusData() : k.ld();
          t ? t.hasChildren() && (nl(l) ? B.collapse(t) : B.expand(t)) : e.size() > 0 && (t = e.get(0), V ? B.setFocusData(t) : k.ss(t))
        } else De.superClass.handle_keydown.call(this, l)
      }
    });
    var Ld = Tb.TableView = function (Z) {
      this._98I(), this._5o(Z), new _h(this)
    };
    fs("TableView", F, {
      ms_ac: [Or, Rp, Gi, "sortMode", xe, Fp, Sm, Hc, jk, nb, zn, "sortColumn", nm, ge, xs, Xj, Te, Pk, Fj],
      ms_v: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      _15Q: 1,
      ms_dm: 1,
      ms_tip: 1,
      _50o: 1,
      _45o: 1,
      _47o: 1,
      _sortMode: lj,
      _editable: !0,
      _batchEditable: !1,
      _rowHeight: Cc,
      _rowLineVisible: E.tableViewRowLineVisible,
      _rowLineColor: E.tableViewRowLineColor,
      _columnLineVisible: E.tableViewColumnLineVisible,
      _columnLineColor: E.tableViewColumnLineColor,
      _scrollBarColor: No,
      _scrollBarSize: Mh,
      _autoHideScrollBar: tk,
      _autoMakeVisible: nd,
      _selectBackground: E.tableViewSelectBackground,
      _labelColor: E.tableViewLabelColor,
      _labelSelectColor: E.tableViewLabelSelectColor,
      _labelFont: E.tableViewLabelFont,
      getCheckColumn: function () {
        var R = this;
        if (!R._31o) {
          var X = R._31o = new Fc;
          X.setEditable(!0), X.setWidth(40), X.getValue = R.getCheckColumValue, X.drawCell = R.drawCheckColumnCell
        }
        return R._31o
      },
      isCheckMode: function () {
        return this._39o.contains(this._31o)
      },
      setCheckMode: function (e) {
        var j = this, z = j._39o, w = j.getCheckColumn();
        e !== j.isCheckMode() && (e ? z.add(w, 0) : z.remove(w), j.fp(sq, !e, e))
      },
      getCheckColumValue: function (u, k, v) {
        return v.isSelected(u)
      },
      drawCheckColumnCell: function (F, C, c, U, Z, X, p, x, v) {
        Zq(F, v.getCheckIcon(C), Z + p / 2, X + x / 2, C, v)
      }
    });
    var _h = function (f) {
      Eo(_h, this, [f])
    };
    Dr(_h, dg, {
      _34o: function (G, T) {
        var B = this.list, V = B._31o;
        if (B.isCellEditable(T, V, G)) {
          var I = B._3Q(V), c = B.lp(G).x;
          if (I && c >= I.startX && c < I.startX + V.getWidth()) return B.checkData(T), void 0
        }
        B._37O(T, G), B.setFocusData(T)
      }, _33o: function (G, A) {
        this.list._37O(A, G), _h.superClass._33o.apply(this, arguments)
      }
    });
    var Mn = Tb.TreeTableView = function (T) {
      var J = this, S = J._4o = new Fc;
      J._35o(), J._98I(), J._5o(T), S.setDisplayName("Name"), S.setEditable(!0), S.setWidth(180), S.drawCell = Hr, S.getValue = vg, J._39o.add(S), new Cd(J)
    }, Hr = function (p, X, L, j, $, m, J, x, W) {
      W._97I(p, X, L, $, m, J, x)
    }, vg = function (j, H, f) {
      return f.getLabel(j)
    };
    fs("TreeTableView", F, {
      ms_ac: [Or, Rp, Gi, "sortMode", xe, Fp, Je, sq, "rootData", "rootVisible", nm, ge, "sortColumn", Xi, Ym, xs, Xj, Te, Pk, jk, Sm, Hc, nb, zn, Fj, "loader"],
      ms_v: 1,
      ms_bnb: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      _15Q: 1,
      ms_dm: 1,
      ms_tip: 1,
      _50o: 1,
      _48o: 1,
      _14Q: 1,
      _45o: 1,
      _47o: 1,
      _sortMode: lj,
      _checkMode: A,
      _editable: !0,
      _batchEditable: !1,
      _indent: fi,
      _rowHeight: Cc,
      _rowLineVisible: E.treeTableViewRowLineVisible,
      _rowLineColor: E.treeTableViewRowLineColor,
      _columnLineVisible: E.treeTableViewColumnLineVisible,
      _columnLineColor: E.treeTableViewColumnLineColor,
      _expandIcon: E.treeTableViewExpandIcon,
      _collapseIcon: E.treeTableViewCollapseIcon,
      _scrollBarColor: No,
      _scrollBarSize: Mh,
      _autoHideScrollBar: tk,
      _autoMakeVisible: nd,
      _selectBackground: E.treeTableViewSelectBackground,
      _labelColor: E.treeTableViewLabelColor,
      _labelSelectColor: E.treeTableViewLabelSelectColor,
      _labelFont: E.treeTableViewLabelFont,
      getTreeColumn: function () {
        return this._4o
      }
    });
    var Cd = function (U) {
      Eo(Cd, this, [U])
    };
    Dr(Cd, dg, {
      _34o: function (i, H) {
        var q = this.list, d = q._4o, e = q._3Q(d), $ = q.lp(i).x;
        if (e) {
          var Y = q._indent, R = e.startX + Y * q.getLevel(H);
          if (vf(q.getToggleIcon(H)) && $ >= R && R + Y >= $) return q.toggle(H), void 0;
          if (q.isCellEditable(H, d) && (R += Y, $ >= R && R + Y >= $)) return q.checkData(H), void 0
        }
        q._37O(H, i), q.setFocusData(H)
      }, _33o: function (o, I) {
        var c = this.list, w = c.lp(o).x;
        if (vf(c.getToggleIcon(I))) {
          var R = c._3Q(c._4o);
          if (R) {
            var L = c._indent, j = R.startX + L * c.getLevel(I);
            if (w >= j && j + L >= w) return c.toggle(I), void 0
          }
        }
        c._37O(I, o), Cd.superClass._33o.apply(this, arguments)
      }
    });
    var ws = Tb.TableHeader = function (d) {
      var P = this, l = P._view = Ae(1, P), n = P._39o = d.getColumnModel(), f = P.iv;
      P.tv = P._tableView = d, P._60I = new Oh, P._canvas = Ze(l), l.style.background = E.tableHeaderBackground || "", l.style.height = Am + Kh, n.mm(f, P), n.md(f, P), n.mh(f, P), d.mp(function (s) {
        Mp[s.property] && P.iv()
      }, P), new vq(P), P.iv()
    };
    fs("TableHeader", F, {
      ms_v: 1,
      ms_lp: 1,
      ms_fire: 1,
      ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", Or, Gi, Je, "moveBackground", "insertColor", nb, zn, "resizable", "movable"],
      _checkIcon: Mi,
      _movable: !0,
      _resizable: !0,
      _labelColor: E.tableHeaderLabelColor,
      _labelFont: E.tableHeaderLabelFont,
      _columnLineColor: E.tableHeaderColumnLineColor,
      _columnLineVisible: E.tableHeaderColumnLineVisible,
      _sortDescIcon: E.tableHeaderSortDescIcon,
      _sortAscIcon: E.tableHeaderSortAscIcon,
      _moveBackground: E.tableHeaderMoveBackground,
      _insertColor: E.tableHeaderInsertColor,
      _indent: fi,
      getCheckIcon: function () {
        return this._checkIcon
      },
      getTableView: function () {
        return this.tv
      },
      getLabel: function (Z) {
        return Z.toLabel()
      },
      getLabelFont: function () {
        return this._labelFont
      },
      getLabelColor: function (R) {
        return R.getColor() || this._labelColor
      },
      getLabelAlign: function (B) {
        return B._align
      },
      onPropertyChanged: function () {
        this.iv()
      },
      _5Q: function (q) {
        this._61I = q, this.iv()
      },
      getLogicalPoint: function (Z) {
        return Gh(Z, this._canvas, this.tv.tx())
      },
      validateImpl: function () {
        var r = this, J = r._canvas, y = r.getWidth(), T = r.getHeight(), X = r.tv, P = r._60I, v = r._61I, s = -X.tx(),
          E = 0;
        (y !== J.clientWidth || T !== J.clientHeight) && Mb(J, y, T), P.clear(), r._39o._roots.each(function (G) {
          if (G.isVisible()) {
            var m = E + G.getWidth();
            s + y >= E && m >= s && P.add({column: G, startX: E}), E = m
          }
        });
        var K = dn(J);
        if (Gf(K, -s, 0, 1), K.beginPath(), K.rect(s, 0, y, T), K.clip(), K.clearRect(s, 0, y, T), P.each(function (B) {
          var P = B.column, h = B.startX, x = P.getWidth();
          x > 0 && (K.save(), K.beginPath(), K.rect(h, 0, x, T), K.clip(), v && v.column === P || r.drawColumn(K, P, h, 0, x, T), r._columnLineVisible && yj(K, h + x - 1, 0, 1, T, r._columnLineColor), K.restore())
        }), v) {
          var H = v.column, E = v.startX, f = v.position, W = H.getWidth();
          K.save(), K.beginPath(), K.rect(E, 0, W, T), K.clip(), K.fillStyle = r._moveBackground, K.fill(), r.drawColumn(K, H, E, 0, W, T), K.restore(), th(K, r._insertColor, f, 0, T)
        }
        K.restore()
      },
      _6Q: function (q) {
        var U = this.tv;
        return U._31o === q && U.sm().getSelectionMode() === xd
      },
      drawColumn: function (b, x, c, h, t, g) {
        var o = this, N = o.tv, n = vf(x.getIcon()), u = o.getLabelAlign(x);
        if (o._6Q(x)) {
          var j = vf(o._checkIcon);
          Zq(b, j, c + t / 2, h + g / 2, x, o)
        } else {
          var r = o.getLabel(x), y = o.getLabelFont(x), E = o.getLabelColor(x), w = gl(y, r).width,
            Z = n ? o._indent : 0;
          u === kl ? (n && Jl(b, n, lc, c, h, Z, g), Po(b, r, y, E, c + Z, h, t, g, kl)) : u === we ? (n && Jl(b, n, lc, c + t - w - Z, h, Z, g), Po(b, r, y, E, c, h, t, g, we)) : (n && Jl(b, n, lc, c + (t - w - Z) / 2, h, Z, g), Po(b, r, y, E, c + (t - w + Z) / 2, h, 0, g, kl))
        }
        if (x.isSortable() && N.getSortColumn() === x && (n = vf(x.getSortOrder() === Al ? o._sortAscIcon : o._sortDescIcon))) {
          var B = Hk(n, x) / 2 + 2;
          Zq(b, n, u === we ? c + B : c + t - B, h + g / 2, x, N)
        }
      }
    });
    var vq = function (s) {
      var m = this;
      m.th = s, m.tv = s._tableView, m.addListeners()
    };
    Dr(vq, F, {
      ms_listener: 1, getView: function () {
        return this.th.getView()
      }, setCursor: function (c) {
        this.getView().style.cursor = c
      }, handle_mousemove: function (W) {
        if (!ze) {
          var o = this;
          delete o._29o, o.setCursor(Cn);
          for (var e = o.th, D = e._60I, S = e.lp(W).x, $ = D.size() - 1; $ >= 0; $--) {
            var n = D.get($), u = n.column, d = n.startX + u.getWidth();
            if (e.isResizable() && C(d - S) <= (Qe ? 10 : 3)) return o._29o = n, o.setCursor(kc), void 0;
            S > n.startX && d > S && (o._29o = n), (u.isClickable() || u.isSortable() || e.isMovable() || o.tv.getCheckColumn && u === o.tv.getCheckColumn()) && S > n.startX && d > S && o.setCursor(yg)
          }
        }
      }, handle_mousedown: function (l) {
        this.handle_touchstart(l)
      }, handle_touchstart: function (m) {
        var U = this;
        gm(m), U.tv.endEditing(), U.handle_mousemove(m), U._29o && (U.x = ab(m).x, U.lx = U.th.lp(m).x, U.w = U._29o.column.getWidth(), Dj(U, m))
      }, handleWindowMouseMove: function (z) {
        this.handleWindowTouchMove(z)
      }, handleWindowTouchMove: function (p) {
        var I = this, L = I.th, W = I.getView().style.cursor, X = I._29o, a = ab(p).x - I.x;
        if (I.resizing || I.moving || (W === kc ? I.resizing = 1 : L.isMovable() && W === yg && C(a) > 2 && (I.moving = 1)), I.resizing) X.column.setWidth(I.w + a); else if (I.moving) {
          var t = I.lx + a;
          L._60I.each(function ($) {
            var G = $.startX, n = G + $.column.getWidth();
            if (t >= G && n >= t) {
              var d = {column: X.column, startX: X.startX + a, front: n - t > t - G, insertColumn: $.column};
              d.position = d.front ? G : n, L._5Q(d)
            }
          })
        }
      }, _16Q: function (R, Z) {
        var q = this, b = q.tv, d = q.th, n = d._checkIcon;
        if (d._6Q(R)) {
          var Y = vf(n), v = q.lx, a = R.getWidth(), M = Hk(Y, R);
          if (v >= Z + a / 2 - M && Z + a / 2 + M >= v) {
            d.setCheckIcon(n === mp ? Mi : mp);
            var J = b.sm(), W = b._rows;
            return n === mp ? J.rs(W) : J.ss(W), b.onCheckColumnClicked(R), !0
          }
        }
        return !1
      }, handleWindowMouseUp: function (h) {
        this.handleWindowTouchEnd(h)
      }, handleWindowTouchEnd: function (E) {
        var l = this, s = l.tv, T = l.th, c = l._29o;
        if (l.moving) {
          var G = T._61I;
          if (G && G.insertColumn !== G.column) {
            var H = G.column, R = s.getColumnModel()._roots, M = R.remove(H), I = R.indexOf(G.insertColumn);
            I >= 0 && (G.front || I++, I <= R.size() && (R.add(H, I), s.getColumnModel()._38I(H, M, I)))
          }
          T._5Q(A), delete l.moving
        } else if (!l.resizing && c) {
          H = c.column;
          var K = T.lp(E).x, m = c.startX, S = !0;
          if (T.onColumnClicked) {
            var X = T.onColumnClicked(H, E, m);
            X === !1 && (S = !1)
          }
          if (S && K >= m && K <= m + H.getWidth() && !l._16Q(H, m)) {
            if (H.isSortable()) {
              var k = s.getSortMode(), h = H.getSortOrder();
              k === lj ? s.getSortColumn() === H ? (h === mr && s.setSortColumn(A), H.setSortOrder(h === Al ? mr : Al)) : s.setSortColumn(H) : "bistate" === k && (s.getSortColumn() === H ? H.setSortOrder(h === Al ? mr : Al) : s.setSortColumn(H))
            }
            s.onColumnClicked(H, E, m)
          }
        }
        l._29o = l.resizing = l.x = l.lx = l.w = A
      }
    }), Tb.TablePane = function (l) {
      this.init(new Ld(l))
    }, fs("TablePane", F, {ms_v: 1, _44o: 1}), Tb.TreeTablePane = function (H) {
      this.init(new Mn(H))
    }, fs("TreeTablePane", F, {ms_v: 1, _44o: 1}), Tb.Toolbar = function (M) {
      var F = this, A = F._view = Ae(1, F), H = A.style;
      H.background = E.toolbarBackground || "", H.height = _m + Kh, F._canvas = Ze(A), F._30o = new Oh, F._90I = new Oh, F.setItems(M || []), A.handleGroupSelectedChanged = function (H) {
        if (H.isSelected()) {
          var b = H.getGroupId();
          null != b && F._items.forEach(function (n) {
            var t = n.element;
            t && t !== H && t.setSelected && t.getGroupId && t.getGroupId() === b && t.setSelected(!1)
          })
        }
      }, new Vb(F)
    }, fs("Toolbar", F, {
      ms_v: 1,
      ms_fire: 1,
      ms_tx: 1,
      ms_lp: 1,
      ms_tip: 1,
      ms_value: 1,
      ms_ac: [Cl, Or, Gi, Rp, Fj, "itemGap", "separatorColor", "currentItem", "stickToRight"],
      _labelColor: E.toolbarLabelColor,
      _labelSelectColor: E.toolbarLabelSelectColor,
      _labelFont: E.toolbarLabelFont,
      _selectBackground: E.toolbarSelectBackground,
      _itemGap: E.toolbarItemGap,
      _separatorColor: E.toolbarSeparatorColor,
      _stickToRight: !1,
      getSumWidth: function () {
        return this._64I
      },
      getToolTip: function (Y) {
        var o = this.getItemInfoAt(Y);
        return o ? o.item.toolTip : A
      },
      getLabelColor: function (x) {
        return x && x.selected && x.type !== mp && x.type !== Tn ? this._labelSelectColor : this._labelColor
      },
      onPropertyChanged: function (Q) {
        this.iv(), Q.property === Cl && this._items.forEach(function (j) {
          Kq(j)
        })
      },
      redraw: function () {
        this.iv()
      },
      addItem: function (v, o) {
        var s = this._items;
        o == A ? s.push(v) : s.splice(o, 0, v), this.fp(Cl, A, s)
      },
      removeItem: function (X) {
        if (X) for (var m = this._items, K = 0; K < m.length; K++) X === m[K] && (m.splice(K, 1), this.fp(Cl, A, m))
      },
      removeItemById: function (j) {
        if (j != A) for (var d = this._items, $ = 0; $ < d.length; $++) if (j === d[$].id) {
          var u = d.splice($, 1)[0];
          return this.fp(Cl, A, d), u
        }
      },
      getItemById: function (e) {
        if (e != A) for (var D = this._items, r = 0; r < D.length; r++) {
          var Q = D[r];
          if (e === Q.id) return Q
        }
      },
      setItemVisible: function ($, m) {
        var y = this.getItemById($);
        y && (y.visible = m)
      },
      getItemInfos: function () {
        return this._30o
      },
      getItemInfoAt: function (g) {
        var O = this, Z = 0, t = O._30o, z = O.lp(g), Y = z.x, K = z.y;
        if (K >= 0 && K <= O.getHeight()) for (; Z < t.size(); Z++) {
          var e = t.get(Z);
          if (e.startX <= Y && Y <= e.endX) return e
        }
        return A
      },
      drawItem: function (g, K, f, V, B) {
        if (K.visible === !1) return 0;
        if (En(K.visible) && !K.visible()) return 0;
        var h = this, E = K.disabled;
        E && (g.globalAlpha = Qd);
        var H = h.drawItemImpl(g, K, f, V, B), L = h._itemGap;
        return E && (g.globalAlpha = 1), this._currentItem !== K || "separator" === K || K.separator === !0 || K.unfocusable || Yo(g, h._separatorColor, f - L / 2, 0, H + L, V), H
      },
      drawItemImpl: function (x, H, C, a, l) {
        var B = this, s = B._view, p = B._itemGap, Y = a / 2, R = H.type, P = H.element, G = H.label;
        pp(P) && (G = P, P = A);
        var f, h = B.getLabelFont(H), F = B.getLabelColor(H), $ = H.selected, z = vf(H.icon), y = Hk(z, H), Z = 0,
          J = y + (G ? gl(h, G).width : 0);
        if ("separator" === H || H.separator === !0) return th(x, B._separatorColor, C, a / 4, Y), 1;
        if (P) {
          z && Zq(x, z, C + y / 2, Y, H, B), Po(x, G, h, F, C + y, 0, 0, a);
          var o = ss(P);
          l || B._90I.add(o), o.parentNode !== s && wm(s, o), P.iv && P.iv(), P.validate && P.validate();
          var c = o.getBoundingClientRect(), b = c.width, T = o.style;
          return Vf(o), T.left = B.tx() + C + J + Kh, T.top = (a - c.height) / 2 + Kh, J + b
        }
        return R === Tn ? f = vf($ ? Gc : io) : R === mp && (f = vf($ ? mp : Mi)), f ? (Z = Hk(f, H), Zq(x, f, C + Z / 2, Y, H, B), C += Z, J += Z) : $ && yj(x, C - p / 2, 0, J + p, a, B.getSelectBackground(H)), z && Zq(x, z, C + y / 2, Y, H, B), Po(x, G, h, F, C + y, 0, 0, a), J
      },
      validateImpl: function () {
        var k = this, O = k._canvas, e = k.getWidth(), K = k.getHeight(), m = k._30o, U = k._items;
        Mb(O, e, K);
        var S = dn(O), P = k._itemGap, u = P / 2;
        Gf(S, k.tx(), 0, 1), S.clearRect(0, 0, e, K);
        var N = k._90I;
        k._90I = new Oh, m.clear(), U.forEach(function (s) {
          var n = k.drawItem(S, s, u, K);
          m.add({item: s, startX: u, endX: u + n, width: n}), n && (u += n + P)
        }), N.each(function (h) {
          k._90I.contains(h) || up(h)
        });
        var G = k._64I;
        k._64I = R(0, u), S.restore(), k._stickToRight ? (k._65O = 0, S = dn(O), u = e - k._64I + P, Gf(S, 0, 0, 1), S.clearRect(0, 0, e, K), m.clear(), U.forEach(function (j) {
          var D = k.drawItem(S, j, u, K, !0);
          m.add({item: j, startX: u, endX: u + D, width: D}), D && (u += D + P)
        }), S.restore()) : k.tx(k.tx()), G !== k._64I && k.onSumWidthChanged(G, k._64I)
      },
      onSumWidthChanged: function () {
      },
      handleClick: function (C, m) {
        var G = this, v = C.type, c = C.action, f = C.groupId, w = C.selected;
        C.disabled || (f != A ? w || (C.selected = !0, this._items.forEach(function (c) {
          c.groupId === f && C !== c && (c.selected = !1)
        }), c && C.action(C, G, m)) : v === mp || "toggle" === v ? (C.selected = !w, c && C.action(C, G, m)) : c && C.action(C, G, m)), qd(), G.iv()
      }
    });
    var Vb = function (V) {
      this.tb = V, this.addListeners()
    };
    Dr(Vb, F, {
      ms_listener: 1, getView: function () {
        return this.tb._view
      }, handle_mousewheel: function (g) {
        this.handleScroll(g, 10 * (g.wheelDelta / 40))
      }, handle_DOMMouseScroll: function (X) {
        this.handleScroll(X, 10 * -X.detail)
      }, handleScroll: function (L, Z) {
        gm(L);
        var o = this.tb;
        o.isScrollable() && !o._stickToRight && (o.tx(o.tx() + Z), Sk())
      }, handle_mousemove: function (K) {
        var q = this;
        ze || q.setItem(K)
      }, handle_mouseout: function (P) {
        var f = this;
        P.target === f.getView() ? f.tb.setCurrentItem(A) : f.handle_mousemove(P)
      }, handle_mousedown: function (R) {
        this.handle_mousemove(R), this.handle_touchstart(R)
      }, handle_touchstart: function (u) {
        var e = this, T = e.tb, F = u.target;
        Wb(u) && (F === e.getView() || F === T._canvas) && (gm(u), T.setFocus(u) && (this.setItem(u, !0), (T.isScrollable() || e.info && !e.info.item.disabled) && (e.x = ab(u).x, e.tx = T.tx(), Dj(e, u))))
      }, handleWindowMouseMove: function (o) {
        this.handleWindowTouchMove(o)
      }, handleWindowTouchMove: function (Z) {
        var _ = this, g = _.tb;
        if (!g._stickToRight) {
          var U = ab(Z).x - _.x;
          !_._25o && C(U) > 2 && g.isScrollable() && (_._25o = 1), _._25o && g.tx(_.tx + U)
        }
      }, handleWindowMouseUp: function ($) {
        this.handleWindowTouchEnd($)
      }, handleWindowTouchEnd: function (X) {
        var H = this, Q = H.tb, f = H.info, c = H.tb.getItemInfoAt(X);
        if (!H._25o && f) {
          var Y = f.item;
          c && c.item === Y && Q.handleClick(Y, X)
        }
        H._25o = H.x = H.tx = A, H.setItem()
      }, setItem: function (Y, Z) {
        var b = this, K = b.tb, l = b.info = Y ? K.getItemInfoAt(Y) : A, U = l ? l.item : A;
        K.setCurrentItem(U), Z && U && En(U.onDown) && U.onDown(Y)
      }
    }), Tb.BorderPane = function () {
      this._view = Ae(1, this), this.iv()
    }, fs("BorderPane", F, {
      ms_v: 1,
      ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
      ms_fire: 1,
      getLeftView: function () {
        return this._leftView
      },
      setLeftView: function (Z, n) {
        this._12o("leftView", Z), n != A && this.setLeftWidth(n)
      },
      getRightView: function () {
        return this._rightView
      },
      setRightView: function (k, c) {
        this._12o("rightView", k), c != A && this.setRightWidth(c)
      },
      getTopView: function () {
        return this._topView
      },
      setTopView: function (N, $) {
        this._12o("topView", N), $ != A && this.setTopHeight($)
      },
      getBottomView: function () {
        return this._bottomView
      },
      setBottomView: function (M, U) {
        this._12o("bottomView", M), U != A && this.setBottomHeight(U)
      },
      getCenterView: function () {
        return this._centerView
      },
      setCenterView: function (d) {
        this._12o("centerView", d)
      },
      _12o: function (J, H) {
        var C = this, N = "_" + J, X = C._view, M = C[N];
        M !== H && (M && (M.getView ? up(M.getView()) : up(M)), C[N] = H, H && (H.getView ? wm(X, H.getView(), 1) : wm(X, H, 1)), C.fp(J, M, H))
      },
      onPropertyChanged: function () {
        this.iv()
      },
      validateImpl: function () {
        var t = this, e = t._topView, f = t._bottomView, C = t._leftView, H = t._rightView, i = t._centerView,
          h = t.getWidth(), Q = t.getHeight(), o = 0, v = 0, r = h, M = Q, j = 0, y = 0, Y = 0, P = 0;
        e && (j = t._topHeight == A ? $o(e) : t._topHeight, v = j), f && (y = t._bottomHeight == A ? $o(f) : t._bottomHeight, M = Q - y), C && (Y = t._leftWidth == A ? cb(C) : t._leftWidth, o = Y), H && (P = t._rightWidth == A ? cb(H) : t._rightWidth, r = h - P);
        var V = R(0, r - o), I = R(0, M - v);
        e && vk(e, 0, 0, h, j), f && vk(f, 0, M, h, y), C && vk(C, 0, v, Y, I), H && vk(H, r, v, P, I), i && vk(i, o, v, V, I)
      }
    })
  }
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object);