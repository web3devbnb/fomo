"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9329], {
        89161: function(n, t, i) {
            i.d(t, {
                Z: function() {
                    return v
                }
            });
            var r = i(85893),
                e = i(67294),
                a = i(46004),
                o = i(7297),
                c = i(53918);

            function u() {
                var n = (0, o.Z)(["\n    &:first-child {\n        // Start mid way to hide first entry and and alternate with second car\n        animation-delay: calc((var(--animationDuration) / 2) * -1);\n    }\n\n    &:last-child {\n        animation-delay: 0;\n    }\n"]);
                return u = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, o.Z)(["\n    @keyframes slideRight {\n        0% {\n            transform: translate3d(0%, 0, 0);\n        }\n        100% {\n            transform: translate3d(200%, 0, 0);\n        }\n    }\n\n    @keyframes slideLeft {\n        0% {\n            transform: translate3d(0, 0, 0);\n        }\n        100% {\n            transform: translate3d(-200%, 0, 0);\n        }\n    }\n\n    position: absolute;\n    height: 100%;\n    display: flex;\n    will-change: transform;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, o.Z)(["\n                  ", " {\n                      left: 100%;\n                      animation: slideLeft var(--animationDuration) linear both\n                          infinite;\n                      ", ";\n                  }\n              "]);
                return f = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, o.Z)(["\n                  ", " {\n                      right: 100%;\n                      animation: slideRight var(--animationDuration) linear both\n                          infinite;\n                      ", ";\n                  }\n              "]);
                return s = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, o.Z)(["\n    width: 100%;\n    position: relative;\n    --animationDuration: ", ";\n\n    ", "\n\n    &:hover {\n        * {\n            animation-play-state: paused !important;\n        }\n    }\n"]);
                return l = function() {
                    return n
                }, n
            }
            var p = (0, c.iv)(u()),
                h = c.ZP.div.withConfig({
                    componentId: "sc-ebced3d0-0"
                })(d()),
                m = c.ZP.div.withConfig({
                    componentId: "sc-ebced3d0-1"
                })(l(), (function(n) {
                    var t = n.animationDuration;
                    return "".concat(2 * t, "ms")
                }), (function(n) {
                    return "left" === n.direction ? (0, c.iv)(f(), h, p) : (0, c.iv)(s(), h, p)
                })),
                x = function(n) {
                    var t = n.children,
                        i = n.direction,
                        o = n.pixelsPerSecond,
                        c = (0, e.useRef)(null),
                        u = (0, e.useState)(0),
                        d = u[0],
                        f = u[1],
                        s = (0, e.useMemo)((function() {
                            return (0, r.jsxs)(r.Fragment, {
                                children: [t, t, t, t, t, t]
                            })
                        }), [t]);
                    return (0, a.Z)((function() {
                        c.current && f(Math.round(c.current.offsetWidth / o * 1e3))
                    }), [o, s]), (0, r.jsxs)(m, {
                        direction: i,
                        animationDuration: d,
                        children: [(0, r.jsx)(h, {
                            ref: c,
                            children: s
                        }), (0, r.jsx)(h, {
                            children: s
                        })]
                    })
                },
                v = (0, e.memo)(x)
        },
        79329: function(n, t, i) {
            i.r(t), i.d(t, {
                default: function() {
                    return g
                }
            });
            var r = i(26042),
                e = i(85893),
                a = (i(67294), i(90169)),
                o = i(39049),
                c = i(89161),
                u = i(7297),
                d = i(53918),
                f = i(25432),
                s = i(38432);

            function l() {
                var n = (0, u.Z)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    row-gap: 35px;\n    column-gap: 25px;\n    z-index: 2;\n"]);
                return l = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, u.Z)(["\n    ", ";\n\n    margin-bottom: 36px !important;\n\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    gap: 80px;\n\n    padding: 0 10px;\n\n    ", " {\n        &:nth-child(1) {\n            height: 45.5px;\n        }\n    }\n\n    ", " {\n        padding: 0 50px;\n    }\n\n    ", " {\n        padding: 0 100px;\n    }\n"]);
                return p = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, u.Z)(["\n    height: 45.5px;\n    display: flex;\n    align-items: center;\n    gap: 204px;\n    margin-right: 204px;\n    ", " {\n        gap: 96px;\n        margin-right: 96px;\n    }\n"]);
                return h = function() {
                    return n
                }, n
            }
            var m = d.ZP.div.withConfig({
                    componentId: "sc-d9105cf9-0"
                })(l()),
                x = d.ZP.div.withConfig({
                    componentId: "sc-d9105cf9-1"
                })(p(), s.Z, m, f.Z.aboveTablet, f.Z.aboveDesktop),
                v = d.ZP.div.withConfig({
                    componentId: "sc-d9105cf9-2"
                })(h(), f.Z.tablet),
                g = function(n) {
                    var t = n.partners,
                        i = n.bottomLogo;
                    return (0, e.jsxs)(x, {
                        children: [(0, e.jsx)(m, {
                            children: (0, e.jsx)(c.Z, {
                                direction: "left",
                                pixelsPerSecond: 50,
                                children: (0, e.jsx)(v, {
                                    children: t && t.map((function(n, t) {
                                        var i = n.url,
                                            c = n.icon,
                                            u = n.target;
                                        return i ? (0, e.jsx)(o.Z, {
                                            href: i || "",
                                            target: u,
                                            children: c && (0, e.jsx)("img", (0, r.Z)({}, (0, a.n)(c)))
                                        }, i) : (0, e.jsx)("div", {
                                            children: c && (0, e.jsx)("img", (0, r.Z)({}, (0, a.n)(c)))
                                        }, t)
                                    }))
                                })
                            })
                        }), (0, e.jsx)(m, {
                            children: i && (0, e.jsx)(o.Z, {
                                href: i.url || "",
                                target: i.target || "_blank",
                                children: i.icon && (0, e.jsx)("img", (0, r.Z)({}, (0, a.n)(i.icon)))
                            })
                        })]
                    })
                }
        },
        38432: function(n, t, i) {
            var r = i(7297),
                e = i(53918),
                a = i(25432);

            function o() {
                var n = (0, r.Z)(["\n    margin: 100px 0 150px 0;\n    ", " {\n        margin: 100px 0 200px 0;\n    }\n"]);
                return o = function() {
                    return n
                }, n
            }
            var c = (0, e.iv)(o(), a.Z.aboveTablet);
            t.Z = c
        },
        46004: function(n, t, i) {
            var r = i(67294).useLayoutEffect;
            t.Z = r
        }
    }
]);
//# sourceMappingURL=9329.1aa3e6c103f7cba6.js.map