!function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {i: r, l: !1, exports: {}};
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
            return t[e]
        }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n.p + "68e434f49c8321bce39938139567d048.jpg";

    function o(t, e) {
        return `<div class="row" style="${e}">${t}</div>`
    }

    function s(t, e) {
        return `<div class="col-sm" style="${e}">${t}</div>`
    }

    class i {
        constructor(t, e) {
            this.value = t, this.options = e
        }

        toHTML() {
            throw new Error("Метод toHTML должен быть реализован!")
        }
    }

    const l = [new class extends i {
            constructor(t, e) {
                super(t, e)
            }

            toHTML() {
                const {tag: t, styles: e} = this.options;
                return o(s(`\n      <${t}>${this.value}</${t}>\n    `), e)
            }
        }("Single page", {
            tag: "h2",
            styles: "background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;"
        }), new class extends i {
            constructor(t, e) {
                super(t, e)
            }

            toHTML() {
                const {alt: t, styles: e, imageStyles: n} = this.options;
                return o(`<img src="${this.value}" alt="${t}" style="${n}" />`, e)
            }
        }(r, {
            styles: "padding: 2rem 0;display: flex;justify-content: center;",
            alt: "my image",
            imageStyles: "width: 500px; height: auto;"
        }), new class extends i {
            constructor(t, e) {
                super(t, e)
            }

            toHTML() {
                return o(this.value.map(t => s(t)).join(""), this.options.styles)
            }
        }(["First column", "Second column", "Third column"], {styles: "padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;"}), new class extends i {
            constructor(t, e) {
                super(t, e)
            }

            toHTML() {
                return o(s(`\n      <p style="margin-bottom: 0;">${this.value}</p>\n    `), this.options.styles)
            }
        }("just new block", {styles: "background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;"})],
        u = document.querySelector("#site");
    l.forEach(t => {
        u.insertAdjacentHTML("beforeend", t.toHTML())
    })
}]);
