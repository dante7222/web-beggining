!function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) {
            return e[t]
        }.bind(null, r));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 4)
}([function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = function (e, t) {
                    var n = e[1] || "", o = e[3];
                    if (!o) return n;
                    if (t && "function" == typeof btoa) {
                        var r = (a = o, c = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(s, " */")),
                            i = o.sources.map((function (e) {
                                return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e, " */")
                            }));
                        return [n].concat(i).concat([r]).join("\n")
                    }
                    var a, c, s;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
            })).join("")
        }, t.i = function (e, n, o) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var r = {};
            if (o) for (var i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (r[a] = !0)
            }
            for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                o && r[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s))
            }
        }, t
    }
}, function (e, t, n) {
    var o = n(2), r = n(3);
    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, ""]]);
    var i = {insert: "head", singleton: !1};
    o(r, i);
    e.exports = r.locals || {}
}, function (e, t, n) {
    "use strict";
    var o, r = function () {
        return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o
    }, i = function () {
        var e = {};
        return function (t) {
            if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                    n = n.contentDocument.head
                } catch (e) {
                    n = null
                }
                e[t] = n
            }
            return e[t]
        }
    }(), a = [];

    function c(e) {
        for (var t = -1, n = 0; n < a.length; n++) if (a[n].identifier === e) {
            t = n;
            break
        }
        return t
    }

    function s(e, t) {
        for (var n = {}, o = [], r = 0; r < e.length; r++) {
            var i = e[r], s = t.base ? i[0] + t.base : i[0], u = n[s] || 0, l = "".concat(s, " ").concat(u);
            n[s] = u + 1;
            var f = c(l), d = {css: i[1], media: i[2], sourceMap: i[3]};
            -1 !== f ? (a[f].references++, a[f].updater(d)) : a.push({
                identifier: l,
                updater: y(d, t),
                references: 1
            }), o.push(l)
        }
        return o
    }

    function u(e) {
        var t = document.createElement("style"), o = e.attributes || {};
        if (void 0 === o.nonce) {
            var r = n.nc;
            r && (o.nonce = r)
        }
        if (Object.keys(o).forEach((function (e) {
            t.setAttribute(e, o[e])
        })), "function" == typeof e.insert) e.insert(t); else {
            var a = i(e.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(t)
        }
        return t
    }

    var l, f = (l = [], function (e, t) {
        return l[e] = t, l.filter(Boolean).join("\n")
    });

    function d(e, t, n, o) {
        var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
        if (e.styleSheet) e.styleSheet.cssText = f(t, r); else {
            var i = document.createTextNode(r), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }

    function p(e, t, n) {
        var o = n.css, r = n.media, i = n.sourceMap;
        if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = o; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o))
        }
    }

    var v = null, m = 0;

    function y(e, t) {
        var n, o, r;
        if (t.singleton) {
            var i = m++;
            n = v || (v = u(t)), o = d.bind(null, n, i, !1), r = d.bind(null, n, i, !0)
        } else n = u(t), o = p.bind(null, n, t), r = function () {
            !function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(n)
        };
        return o(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                o(e = t)
            } else r()
        }
    }

    e.exports = function (e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
        var n = s(e = e || [], t);
        return function (e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var o = 0; o < n.length; o++) {
                    var r = c(n[o]);
                    a[r].references--
                }
                for (var i = s(e, t), u = 0; u < n.length; u++) {
                    var l = c(n[u]);
                    0 === a[l].references && (a[l].updater(), a.splice(l, 1))
                }
                n = i
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0), r = n.n(o)()(!1);
    r.push([e.i, "#app {\n    position: relative;\n}\n\n.content {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 200px;\n}\n\n.sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 200px;\n    z-index: 100;\n    padding: 10px;\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    overflow-y: auto;\n}\n", ""]), t.default = r
}, function (e, t, n) {
    "use strict";
    n.r(t);
    n(1);
    var o = n.p + "68e434f49c8321bce39938139567d048.jpg";
    console.log(o);
    const r = [{
        type: "title",
        value: "Test Title",
        options: {tag: "h2", styles: "background: darkred; color: black; text-align:center;"}
    }, {
        type: "text",
        value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error expedita hic itaque\n                    maiores minus nulla numquam perferendis placeat sapiente!",
        options: {styles: "background: darkblue; color: yellow; text-align:center;"}
    }, {type: "textColumns", value: ["1 text", "2 text", "3 text"], options: {styles: "padding: 1rem;"}}, {
        type: "img",
        value: o,
        options: {
            styles: "padding:2 rem 0; display:flex; justify-content: center;",
            alt: "my image",
            imageStyles: "width:500px; height:auto;"
        }
    }];

    function i(e, t) {
        return `<div class="row" style="${t}">${e}</div>`
    }

    function a(e, t) {
        return `<div class="col-sm" style="${t}">${e}</div>`
    }

    const c = {
        title: function (e) {
            const t = e.options.tag;
            return i(a(`\n        <${t}>${e.value}</${t}>      \n    `), e.options.styles)
        }, text: function (e) {
            return i(a(`\n          <p>${e.value}</p>\n    `), e.options.styles)
        }, textColumns: function (e) {
            return i(e.value.map(e => a(e)).join(""), e.options.styles)
        }, img: function (e) {
            const {alt: t, styles: n, imageStyles: o} = e.options;
            return i(`<img src="${e.value}" alt="${t}" style="${o}">`, n)
        }
    }, s = document.querySelector("#site");
    r.forEach(e => {
        const t = c[e.type];
        if (null !== t) {
            const n = t(e);
            s.insertAdjacentHTML("beforeend", n)
        }
    })
}]);
