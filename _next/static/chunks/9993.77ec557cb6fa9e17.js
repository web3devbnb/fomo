"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9993], {
        30334: function(n, t, i) {
            i.d(t, {
                e: function() {
                    return a
                }
            });
            var e = i(7297),
                o = i(53918),
                r = i(25432);

            function c() {
                var n = (0, e.Z)(["\n    position: absolute;\n    top: -75px;\n\n    ", " {\n        top: -150px;\n    }\n"]);
                return c = function() {
                    return n
                }, n
            }
            var a = o.ZP.div.withConfig({
                componentId: "sc-22a734df-0"
            })(c(), r.Z.aboveTablet)
        },
        59993: function(n, t, i) {
            i.r(t), i.d(t, {
                default: function() {
                    return T
                }
            });
            var e = i(26042),
                o = i(85893),
                r = i(67294),
                c = i(25675),
                a = i.n(c),
                d = i(90169),
                u = i(30334),
                l = i(7297),
                p = i(25432),
                s = i(53918);

            function x() {
                var n = (0, l.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 100%;\n    background: rgba(255, 255, 255, 0.08);\n    border-radius: 8px;\n    padding: 10px 15px 10px 25px;\n    position: relative;\n    overflow: hidden;\n    gap: 15px;\n\n    ", " {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n\n    &::before {\n        content: '';\n        height: 100%;\n        width: 4px;\n        position: absolute;\n        left: 0;\n        top: 0;\n        background-color: ", ";\n    }\n"]);
                return x = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, l.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    ", " {\n        &:nth-child(2) {\n            text-align: right;\n        }\n    }\n"]);
                return f = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, l.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]);
                return h = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, l.Z)(["\n    padding: 0;\n    margin: 0;\n    letter-spacing: 0.06em;\n    font-size: ", ";\n    color: ", ";\n    margin-right: ", ";\n    font-weight: ", ";\n    opacity: ", ";\n"]);
                return g = function() {
                    return n
                }, n
            }
            var b = s.ZP.div.withConfig({
                    componentId: "sc-b38533d0-0"
                })(x(), p.Z.abovePhoneS, (function(n) {
                    return n.color
                })),
                m = s.ZP.div.withConfig({
                    componentId: "sc-b38533d0-1"
                })(f(), p.Z.abovePhoneS),
                v = s.ZP.div.withConfig({
                    componentId: "sc-b38533d0-2"
                })(h()),
                w = s.ZP.p.withConfig({
                    componentId: "sc-b38533d0-3"
                })(g(), (function(n) {
                    var t = n.size;
                    return "".concat(t, "px")
                }), (function(n) {
                    return n.color || "white"
                }), (function(n) {
                    var t = n.marginRight;
                    return t ? "".concat(t, "px") : "0px"
                }), (function(n) {
                    return n.bold ? "bold" : "lighter"
                }), (function(n) {
                    return n.opacity || 1
                })),
                Z = function(n) {
                    var t = n.color,
                        i = n.coloredText,
                        e = n.whiteText,
                        r = n.description,
                        c = n.tokenName,
                        a = n.tokenValue;
                    return (0, o.jsxs)(b, {
                        color: t,
                        children: [(0, o.jsxs)(m, {
                            children: [(0, o.jsxs)(v, {
                                children: [(0, o.jsx)(w, {
                                    size: 14,
                                    color: t,
                                    marginRight: 10,
                                    bold: !0,
                                    children: i
                                }), (0, o.jsx)(w, {
                                    size: 14,
                                    bold: !0,
                                    children: e
                                })]
                            }), (0, o.jsx)(w, {
                                size: 12,
                                opacity: .6,
                                children: r
                            })]
                        }), (0, o.jsxs)(m, {
                            children: [(0, o.jsx)(w, {
                                size: 12,
                                opacity: .6,
                                bold: !0,
                                children: c
                            }), (0, o.jsx)(w, {
                                size: 12,
                                opacity: .6,
                                children: a
                            })]
                        })]
                    })
                },
                j = i(24739);

            function y() {
                var n = (0, l.Z)(["\n    // -70px on mobile because Chamber has translateY -220px\n    margin: -70px 0 150px 0;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgba(255, 255, 255, 0.06);\n    gap: 70px;\n    padding: 60px 16px;\n\n    ", " {\n        flex-direction: row;\n        width: calc(100% - 30px);\n        border-radius: 24px 0px 0px 24px;\n        margin: 100px 0 162px 0;\n        margin-left: auto;\n        padding: 60px;\n        align-items: center;\n    }\n"]);
                return y = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, l.Z)(["\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    gap: ", ";\n"]);
                return k = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, l.Z)(["\n    width: 100%;\n    height: 100%;\n    max-width: 700px;\n    margin: 40px auto 0 auto;\n    padding: 0 30px;\n\n    ", " {\n        max-width: 500px;\n    }\n\n    ", " {\n        max-width: unset;\n        width: calc(100% + 80px);\n        margin-left: -40px;\n    }\n\n    ", " {\n        padding: 0;\n    }\n"]);
                return C = function() {
                    return n
                }, n
            }
            var P = s.ZP.div.withConfig({
                    componentId: "sc-7b2548cc-0"
                })(y(), p.Z.aboveTablet),
                I = s.ZP.div.withConfig({
                    componentId: "sc-7b2548cc-1"
                })(k(), (function(n) {
                    var t = n.gap;
                    return t ? "".concat(t, "px") : "initial"
                })),
                z = s.ZP.div.withConfig({
                    componentId: "sc-7b2548cc-2"
                })(C(), p.Z.tablet, p.Z.phoneS, p.Z.abovePhone),
                T = function(n) {
                    var t = n.sectionId,
                        i = n.sectionName,
                        c = n.sectionTitle,
                        l = n.description,
                        p = n.image,
                        s = n.blocks,
                        x = (0, r.useMemo)((function() {
                            return (0, d.n)(p)
                        }), []),
                        f = x.src,
                        h = x.alt;
                    return (0, o.jsxs)(P, {
                        children: [(0, o.jsx)(u.e, {
                            id: t
                        }), (0, o.jsxs)(I, {
                            children: [(0, o.jsx)(j.Z, {
                                type: "sectionName",
                                color: "pink",
                                children: i
                            }), (0, o.jsx)(j.Z, {
                                type: "sectionTitle",
                                children: c
                            }), (0, o.jsx)(j.Z, {
                                type: "content",
                                children: l
                            }), (0, o.jsx)(z, {
                                children: (0, o.jsx)(a(), {
                                    src: f,
                                    alt: h,
                                    width: 564,
                                    height: 503,
                                    layout: "responsive"
                                })
                            })]
                        }), (0, o.jsx)(I, {
                            gap: 20,
                            children: s.map((function(n, t) {
                                return (0, o.jsx)(Z, (0, e.Z)({}, n), t)
                            }))
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=9993.77ec557cb6fa9e17.js.map