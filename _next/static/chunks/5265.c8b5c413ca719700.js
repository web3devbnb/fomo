(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5265], {
        20640: function(n, e, t) {
            "use strict";
            var o = t(11742),
                r = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            n.exports = function(n, e) {
                var t, i, a, c, l, s, p = !1;
                e || (e = {}), t = e.debug || !1;
                try {
                    if (a = o(), c = document.createRange(), l = document.getSelection(), (s = document.createElement("span")).textContent = n, s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", (function(o) {
                            if (o.stopPropagation(), e.format)
                                if (o.preventDefault(), "undefined" === typeof o.clipboardData) {
                                    t && console.warn("unable to use e.clipboardData"), t && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var i = r[e.format] || r.default;
                                    window.clipboardData.setData(i, n)
                                } else o.clipboardData.clearData(), o.clipboardData.setData(e.format, n);
                            e.onCopy && (o.preventDefault(), e.onCopy(o.clipboardData))
                        })), document.body.appendChild(s), c.selectNodeContents(s), l.addRange(c), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    p = !0
                } catch (u) {
                    t && console.error("unable to copy using execCommand: ", u), t && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(e.format || "text", n), e.onCopy && e.onCopy(window.clipboardData), p = !0
                    } catch (u) {
                        t && console.error("unable to copy using clipboardData: ", u), t && console.error("falling back to prompt"), i = function(n) {
                            var e = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                            return n.replace(/#{\s*key\s*}/g, e)
                        }("message" in e ? e.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, n)
                    }
                } finally {
                    l && ("function" == typeof l.removeRange ? l.removeRange(c) : l.removeAllRanges()), s && document.body.removeChild(s), a()
                }
                return p
            }
        },
        25265: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return P
                }
            });
            var o = t(85893),
                r = t(67294),
                i = t(72132),
                a = t(74855),
                c = t(24739),
                l = t(7297),
                s = t(53918),
                p = t(90777),
                u = t(25432);

            function d() {
                var n = (0, l.Z)(["\n    width: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    position: absolute;\n    left: 8px;\n    top: 0;\n    bottom: 0;\n    height: 100%;\n\n    z-index: 3;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, l.Z)(["\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    background: transparent;\n    padding: 0;\n    height: 100%;\n    writing-mode: vertical-rl;\n    outline: none;\n    border: 0;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n\n    ", " {\n        writing-mode: vertical-rl;\n        margin: 0;\n    }\n\n    &::before {\n        content: '';\n        display: inline-block;\n        height: 28px;\n        width: 28px;\n        background: url('/assets/icons/logo.png') no-repeat center;\n        background-size: contain;\n        margin-bottom: 10px;\n    }\n\n    &::after {\n        width: 16px;\n        height: 16px;\n        content: '';\n        background: url('/assets/icons/arrow-right.svg') no-repeat center;\n        margin-top: 10px;\n        transition: all 0.5s ease-in-out;\n        background-size: contain;\n    }\n\n    &:hover {\n        &::after {\n            filter: brightness(1);\n        }\n    }\n"]);
                return f = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, l.Z)(["\n    &.open {\n        transform: translate3d(0, 0, 0);\n    }\n\n    &.closed {\n        transform: translate3d(calc(100% - 40px), 0, 0);\n\n        ", "::after {\n            transform: rotate(-180deg);\n        }\n    }\n\n    ", " {\n        &.open {\n            transform: translate3d(0, 0, 0);\n        }\n\n        &.closed {\n            transform: translate3d(calc(100% - 40px), 0, 0);\n        }\n    }\n\n    transition: all 0.5s ease-in-out;\n\n    z-index: 1000;\n\n    position: fixed;\n    bottom: 30px;\n    right: 0;\n    margin-top: 10px;\n    width: 520px;\n    max-width: calc(100vw - 60px);\n\n    ", " {\n        bottom: 80px;\n    }\n\n    ", " {\n        bottom: 10%;\n    }\n"]);
                return b = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, l.Z)(["\n    display: flex;\n    align-items: center;\n    background: linear-gradient(\n            123.54deg,\n            rgba(63, 89, 240, 0.2) 0.22%,\n            rgba(0, 3, 27, 0.2) 76.24%\n        ),\n        #000000;\n    border-radius: 24px 0 0 24px;\n    flex-direction: row;\n    justify-content: flex-start;\n    margin: 0;\n    padding: 16px;\n    position: relative;\n\n    &:after {\n        position: absolute;\n        content: '';\n        display: block;\n        height: 100%;\n        width: 366px;\n        max-width: 100%;\n        top: 0;\n        right: 0;\n        background-size: cover;\n        background: url('/assets/bg/tokenInfo.svg') no-repeat right center;\n        background-size: contain;\n    }\n"]);
                return g = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, l.Z)(["\n    flex-direction: column;\n    padding-left: 60px;\n    width: 100%;\n    z-index: 2;\n"]);
                return y = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, l.Z)(["\n    position: relative;\n    margin-bottom: 10px;\n    max-width: 100%;\n"]);
                return m = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, l.Z)(["\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    ", " {\n        display: inline-block;\n        max-width: calc(100% - 17px);\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    &::after {\n        content: '';\n        display: inline-flex;\n        width: 15px;\n        height: 15px;\n        background: url('/assets/icons/copy.svg') no-repeat center;\n        background-size: contain;\n        margin-left: 5px;\n    }\n"]);
                return h = function() {
                    return n
                }, n
            }
            var x = s.ZP.div.withConfig({
                    componentId: "sc-e6ee5414-0"
                })(d()),
                v = s.ZP.button.withConfig({
                    componentId: "sc-e6ee5414-1"
                })(f(), p.q),
                w = s.ZP.div.withConfig({
                    componentId: "sc-e6ee5414-2"
                })(b(), v, u.Z.aboveTablet, u.Z.abovePhone, u.Z.aboveTablet),
                C = s.ZP.div.withConfig({
                    componentId: "sc-e6ee5414-3"
                })(g()),
                j = s.ZP.div.withConfig({
                    componentId: "sc-e6ee5414-4"
                })(y()),
                k = s.ZP.div.withConfig({
                    componentId: "sc-e6ee5414-5"
                })(m()),
                O = s.ZP.div.withConfig({
                    componentId: "sc-e6ee5414-6"
                })(h(), p.q),
                P = function(n) {
                    var e = n.sectionTitle,
                        t = n.nameLabel,
                        l = n.nameValue,
                        s = n.addressValue,
                        p = n.addressLabel,
                        u = n.decimalLabel,
                        d = n.decimalValue,
                        f = n.copySuccessMsg,
                        b = (0, r.useState)(!1),
                        g = b[0],
                        y = b[1],
                        m = (0, r.useCallback)((function() {
                            i.Am.success(f, {
                                position: "top-center",
                                autoClose: 2500,
                                hideProgressBar: !1,
                                closeOnClick: !0,
                                pauseOnHover: !0,
                                draggable: !0,
                                progress: void 0
                            })
                        }), []);
                    return (0, o.jsx)(w, {
                        className: g ? "open" : "closed",
                        children: (0, o.jsxs)(C, {
                            children: [(0, o.jsx)(x, {
                                children: (0, o.jsx)(v, {
                                    onClick: function() {
                                        return y((function(n) {
                                            return !n
                                        }))
                                    },
                                    children: (0, o.jsx)(c.Z, {
                                        type: "content",
                                        bold: !0,
                                        color: "pink",
                                        children: e
                                    })
                                })
                            }), (0, o.jsxs)(j, {
                                children: [(0, o.jsx)(k, {
                                    children: (0, o.jsx)(c.Z, {
                                        type: "sectionName",
                                        bold: !0,
                                        children: e
                                    })
                                }), (0, o.jsxs)(k, {
                                    children: [(0, o.jsx)(c.Z, {
                                        type: "content",
                                        color: "pink",
                                        noMarginBottom: !0,
                                        children: l
                                    }), (0, o.jsx)(c.Z, {
                                        type: "content",
                                        noMarginTop: !0,
                                        children: t
                                    })]
                                }), (0, o.jsxs)(k, {
                                    children: [(0, o.jsx)(a.CopyToClipboard, {
                                        text: s,
                                        onCopy: m,
                                        children: (0, o.jsx)(O, {
                                            children: (0, o.jsx)(c.Z, {
                                                type: "content",
                                                color: "pink",
                                                noMarginBottom: !0,
                                                noMarginTop: !0,
                                                children: s
                                            })
                                        })
                                    }), (0, o.jsx)(c.Z, {
                                        type: "content",
                                        noMarginTop: !0,
                                        children: p
                                    })]
                                }), (0, o.jsxs)(k, {
                                    children: [(0, o.jsx)(c.Z, {
                                        type: "content",
                                        color: "pink",
                                        noMarginBottom: !0,
                                        children: d
                                    }), (0, o.jsx)(c.Z, {
                                        type: "content",
                                        noMarginTop: !0,
                                        noMarginBottom: !0,
                                        children: u
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        74300: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CopyToClipboard = void 0;
            var o = i(t(67294)),
                r = i(t(20640));

            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function a(n) {
                return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(n) {
                    return typeof n
                } : function(n) {
                    return n && "function" === typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                }, a(n)
            }

            function c(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function l(n, e) {
                if (null == n) return {};
                var t, o, r = function(n, e) {
                    if (null == n) return {};
                    var t, o, r = {},
                        i = Object.keys(n);
                    for (o = 0; o < i.length; o++) t = i[o], e.indexOf(t) >= 0 || (r[t] = n[t]);
                    return r
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    for (o = 0; o < i.length; o++) t = i[o], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (r[t] = n[t])
                }
                return r
            }

            function s(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var o = e[t];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
                }
            }

            function u(n, e) {
                return !e || "object" !== a(e) && "function" !== typeof e ? f(n) : e
            }

            function d(n) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                }, d(n)
            }

            function f(n) {
                if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return n
            }

            function b(n, e) {
                return b = Object.setPrototypeOf || function(n, e) {
                    return n.__proto__ = e, n
                }, b(n, e)
            }

            function g(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            var y = function(n) {
                function e() {
                    var n, t;
                    s(this, e);
                    for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c];
                    return g(f(t = u(this, (n = d(e)).call.apply(n, [this].concat(a)))), "onClick", (function(n) {
                        var e = t.props,
                            i = e.text,
                            a = e.onCopy,
                            c = e.children,
                            l = e.options,
                            s = o.default.Children.only(c),
                            p = (0, r.default)(i, l);
                        a && a(i, p), s && s.props && "function" === typeof s.props.onClick && s.props.onClick(n)
                    })), t
                }
                var t, i, a;
                return function(n, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    n.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: n,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && b(n, e)
                }(e, n), t = e, i = [{
                    key: "render",
                    value: function() {
                        var n = this.props,
                            e = (n.text, n.onCopy, n.options, n.children),
                            t = l(n, ["text", "onCopy", "options", "children"]),
                            r = o.default.Children.only(e);
                        return o.default.cloneElement(r, function(n) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? c(t, !0).forEach((function(e) {
                                    g(n, e, t[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : c(t).forEach((function(e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                                }))
                            }
                            return n
                        }({}, t, {
                            onClick: this.onClick
                        }))
                    }
                }], i && p(t.prototype, i), a && p(t, a), e
            }(o.default.PureComponent);
            e.CopyToClipboard = y, g(y, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        74855: function(n, e, t) {
            "use strict";
            var o = t(74300).CopyToClipboard;
            o.CopyToClipboard = o, n.exports = o
        },
        11742: function(n) {
            n.exports = function() {
                var n = document.getSelection();
                if (!n.rangeCount) return function() {};
                for (var e = document.activeElement, t = [], o = 0; o < n.rangeCount; o++) t.push(n.getRangeAt(o));
                switch (e.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        e.blur();
                        break;
                    default:
                        e = null
                }
                return n.removeAllRanges(),
                    function() {
                        "Caret" === n.type && n.removeAllRanges(), n.rangeCount || t.forEach((function(e) {
                            n.addRange(e)
                        })), e && e.focus()
                    }
            }
        }
    }
]);
//# sourceMappingURL=5265.c8b5c413ca719700.js.map