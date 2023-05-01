"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7650], {
        77164: function(n, t, e) {
            var r = e(85893),
                o = (e(67294), e(5081));
            t.Z = function(n) {
                var t = n.children,
                    e = n.size,
                    i = void 0 === e ? "large" : e;
                return (0, r.jsx)(o.W, {
                    large: "large" === i,
                    children: t
                })
            }
        },
        5081: function(n, t, e) {
            e.d(t, {
                W: function() {
                    return a
                }
            });
            var r = e(7297),
                o = e(25432);

            function i() {
                var n = (0, r.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    max-width: 100%;\n    width: 100%;\n    padding: 0 20px;\n    margin: ", " auto;\n\n    .large-section-title,\n    .section-title {\n        margin-bottom: 25px;\n    }\n\n    ", " {\n        padding: 0;\n        max-width: ", ";\n    }\n\n    ", " {\n        max-width: ", ";\n    }\n"]);
                return i = function() {
                    return n
                }, n
            }
            var a = e(53918).ZP.div.withConfig({
                componentId: "sc-6a4159d5-0"
            })(i(), (function(n) {
                return n.large ? "96px" : "100px"
            }), o.Z.abovePhone, (function(n) {
                return n.large ? "650px" : "550px"
            }), o.Z.aboveTablet, (function(n) {
                return n.large ? "900px" : "650px"
            }))
        },
        67650: function(n, t, e) {
            e.r(t), e.d(t, {
                default: function() {
                    return kn
                },
                useHorizontalScroll: function() {
                    return jn
                }
            });
            var r = e(26042),
                o = e(85893),
                i = e(67294),
                a = e(9257),
                c = e(24739),
                u = e(77164),
                s = function() {
                    var n = (0, i.useState)(0),
                        t = n[0],
                        e = n[1],
                        r = (0, i.useState)(0),
                        o = r[0],
                        a = r[1];
                    return (0, i.useEffect)((function() {
                        new ResizeObserver((function(n) {
                            e(n[0].target.clientHeight), a(n[0].target.clientWidth)
                        })).observe(document.body)
                    }), []), {
                        height: t,
                        width: o
                    }
                },
                l = e(7297),
                f = e(25432),
                d = e(38432),
                p = e(53918);
            var v;

            function m() {
                return m = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, m.apply(this, arguments)
            }
            var h = function(n) {
                return i.createElement("svg", m({
                    width: 21,
                    height: 38,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), v || (v = i.createElement("path", {
                    d: "M20 1 2 19l18 18",
                    stroke: "#D84594",
                    strokeWidth: 2
                })))
            };

            function g() {
                var n = (0, l.Z)(["\n    position: relative;\n    ", ";\n    margin-bottom: 80px !important;\n\n    &::before {\n        content: '';\n        position: absolute;\n        width: 100%;\n        background-size: contain;\n        aspect-ratio: 1440 / 1183;\n        z-index: -1;\n        top: -200px;\n    }\n\n    & > div:first-child {\n        margin-bottom: 50px;\n    }\n"]);
                return g = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, l.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    margin: 0 auto;\n    justify-content: center;\n    text-align: center;\n\n    ", " {\n        padding: 0 15px;\n        gap: 15px;\n    }\n\n    ", " {\n        gap: 60px;\n    }\n\n    ", " {\n        gap: 100px;\n    }\n\n    .section-name {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-weight: lighter;\n        cursor: pointer;\n\n        b {\n            font-weight: 500;\n        }\n    }\n"]);
                return x = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, l.Z)(["\n    margin-top: 40px;\n    width: 100%;\n    position: relative;\n\n    .slick-track {\n        display: flex;\n    }\n\n    .slick-slide {\n        & > div {\n            padding: 0 8vw;\n        }\n    }\n"]);
                return b = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, l.Z)(["\n    z-index: 2;\n    position: absolute;\n    top: 50%;\n    --fromEdge: max(calc(25vw - 250px), 16px);\n\n    path {\n        stroke: ", ";\n    }\n\n    cursor: ", ";\n\n    ", " {\n        display: none !important;\n    }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, l.Z)(["\n    transform: translateY(-50%);\n    left: var(--fromEdge);\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, l.Z)(["\n    right: var(--fromEdge);\n    transform: translateY(-50%) scale(-1, -1);\n"]);
                return E = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, l.Z)(["\n    width: 100%;\n    height: 520px;\n"]);
                return O = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, l.Z)(["\n    /* width: ", "; */\n    width: 100%;\n    overflow: scroll;\n    height: 520px;\n    position: relative;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n"]);
                return y = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, l.Z)(["\n                  bottom: 0;\n              "]);
                return j = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, l.Z)(["\n                  top: 0;\n              "]);
                return k = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, l.Z)(["\n    z-index: 2;\n    width: 183px;\n    padding: 20px;\n    position: absolute;\n    left: ", ";\n    border-radius: 5px;\n    transition: 0.3s;\n\n    ", "\n    &:hover {\n        background: rgba(255, 255, 255, 0.1);\n    }\n"]);
                return C = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, l.Z)(["\n                left: ", ";\n            "]);
                return P = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, l.Z)(["\n                left: ", ";\n            "]);
                return I = function() {
                    return n
                }, n
            }

            function _() {
                var n = (0, l.Z)(["\n                left: ", ";\n            "]);
                return _ = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, l.Z)(["\n    position: absolute;\n    width: ", ";\n    height: ", ";\n    top: 50%;\n    left: ", ";\n    transform: translateY(-50%);\n\n    ", "\n"]);
                return A = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, l.Z)(["\n    width: ", ";\n    height: ", ";\n    background: #00031b;\n    border: ", " solid\n        ", ";\n    box-shadow: 0 0 6px ", ";\n    position: relative;\n    border-radius: 50%;\n\n    &::after {\n        content: '';\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        border-radius: 50%;\n        z-index: 2;\n        background: ", ";\n    }\n"]);
                return L = function() {
                    return n
                }, n
            }

            function M() {
                var n = (0, l.Z)(["\n    position: absolute;\n    left: ", ";\n    top: calc(50% - 10.5px);\n    transform: translateY(-100%);\n    display: ", ";\n"]);
                return M = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, l.Z)(["\n    position: absolute;\n    left: ", ";\n    top: calc(50% + 10.5px);\n    transform: ", ";\n    display: ", ";\n"]);
                return S = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, l.Z)(["\n                  transform: translateY(-100%) rotate3d(0, 1, 0, 180deg); ;\n              "]);
                return z = function() {
                    return n
                }, n
            }

            function T() {
                var n = (0, l.Z)(["\n                  transform: translateY(-100%);\n              "]);
                return T = function() {
                    return n
                }, n
            }

            function Y() {
                var n = (0, l.Z)(["\n    position: absolute;\n    left: ", ";\n    top: calc(50% - 10.5px);\n\n    ", "\n"]);
                return Y = function() {
                    return n
                }, n
            }

            function F() {
                var n = (0, l.Z)(["\n                  transform: rotate(180deg) rotate3d(0, 1, 0, 180deg); ;\n              "]);
                return F = function() {
                    return n
                }, n
            }

            function U() {
                var n = (0, l.Z)(["\n                  transform: rotate(180deg);\n              "]);
                return U = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, l.Z)(["\n    position: absolute;\n    left: ", ";\n    top: calc(50% + 10.5px);\n    ", "\n"]);
                return W = function() {
                    return n
                }, n
            }

            function D() {
                var n = (0, l.Z)(["\n    position: absolute;\n    width: ", ";\n    top: 50%;\n    transform: translateY(-50%);\n    height: 8px;\n    background: linear-gradient(88.2deg, #d84594 42.72%, #574ea0 45.28%);\n    opacity: 0.1;\n"]);
                return D = function() {
                    return n
                }, n
            }

            function G() {
                var n = (0, l.Z)(["\n    width: 100%;\n    position: absolute;\n    height: 200px;\n    overflow: scroll;\n    background-color: rgba(255, 255, 0, 0.1);\n    top: 160px;\n"]);
                return G = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, l.Z)(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: scroll;\n"]);
                return N = function() {
                    return n
                }, n
            }

            function H() {
                var n = (0, l.Z)(["\n    width: 100%;\n    height: 200px;\n    position: absolute;\n    top: ", ";\n    bottom: ", ";\n"]);
                return H = function() {
                    return n
                }, n
            }

            function B() {
                var n = (0, l.Z)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 106px;\n    gap: 20px;\n"]);
                return B = function() {
                    return n
                }, n
            }

            function R() {
                var n = (0, l.Z)(["\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    cursor: pointer;\n    background: ", ";\n"]);
                return R = function() {
                    return n
                }, n
            }
            var X, $, q = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-0"
                })(g(), d.Z),
                J = (p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-1"
                })(x(), f.Z.phoneS, f.Z.abovePhoneS, f.Z.aboveDesktop), p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-2"
                })(b()), (0, p.ZP)(h).withConfig({
                    componentId: "sc-72bad3d-3"
                })(w(), (function(n) {
                    return n.disabled && "gray"
                }), (function(n) {
                    return n.disabled ? "default" : "pointer"
                }), f.Z.tablet)),
                K = ((0, p.ZP)(J).withConfig({
                    componentId: "sc-72bad3d-4"
                })(Z()), (0, p.ZP)(J).withConfig({
                    componentId: "sc-72bad3d-5"
                })(E()), p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-6"
                })(O()), p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-7"
                })(y(), (function(n) {
                    var t = n.width;
                    return t && "".concat(t, "px")
                }))),
                Q = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-8"
                })(C(), (function(n) {
                    var t = n.numberOfElement;
                    return "".concat(187 * t + 16 * t + 8, "px")
                }), (function(n) {
                    return n.isOdd ? (0, p.iv)(j()) : (0, p.iv)(k())
                })),
                V = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-9"
                })(A(), (function(n) {
                    var t = n.lastActive;
                    return "".concat(t ? 22 : 16, "px")
                }), (function(n) {
                    var t = n.lastActive;
                    return "".concat(t ? 22 : 16, "px")
                }), (function(n) {
                    var t = n.numberOfElement;
                    return "".concat(187 * t + 16 * t + 20, "px")
                }), (function(n) {
                    var t = n.numberOfElement,
                        e = n.indexOfLastActive;
                    return t < e && (0, p.iv)(P(), (function(n) {
                        var t = n.numberOfElement;
                        return "".concat(187 * t + 16 * t + 20, "px")
                    })), t === e + 1 ? (0, p.iv)(I(), (function(n) {
                        var t = n.numberOfElement;
                        return "".concat(187 * t + 16 * t + 20 + 6, "px")
                    })) : t === e ? (0, p.iv)(_(), (function(n) {
                        var t = n.numberOfElement;
                        return "".concat(187 * t + 16 * t + 20 - 6, "px")
                    })) : void 0
                })),
                nn = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-10"
                })(L(), (function(n) {
                    var t = n.lastActive;
                    return "".concat(t ? 22 : 16, "px")
                }), (function(n) {
                    var t = n.lastActive;
                    return "".concat(t ? 22 : 16, "px")
                }), (function(n) {
                    var t = n.lastActive;
                    return "".concat(t ? 3 : 2, "px")
                }), (function(n) {
                    return n.isOdd ? "#EE4492" : "#414fa2"
                }), (function(n) {
                    return n.isOdd ? "#6F4D9E" : "#0839e7"
                }), (function(n) {
                    return n.isOdd ? "#EE4492" : "#414fa2"
                })),
                tn = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-11"
                })(M(), (function(n) {
                    var t = n.numberOfElement;
                    return "".concat(187 * t + 16 * t + 20 + 8, "px")
                }), (function(n) {
                    return n.numberOfElement === n.indexOfLastActive ? "none" : "block"
                })),
                en = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-12"
                })(S(), (function(n) {
                    var t = n.numberOfElement;
                    return "".concat(187 * t + 16 * t + 20 + 6, "px")
                }), (function(n) {
                    return n.numberOfElement < n.indexOfLastActive ? "rotate(180deg) translateX(-4px)" : "rotate(180deg) translateX(-6px)"
                }), (function(n) {
                    return n.numberOfElement === n.indexOfLastActive ? "none" : "block"
                })),
                rn = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-13"
                })(Y(), (function(n) {
                    var t = n.numberOfElement;
                    return "".concat(187 * t + 16 * t + 20 + 4, "px")
                }), (function(n) {
                    return n.numberOfElement % 2 === 0 ? (0, p.iv)(z()) : (0, p.iv)(T())
                })),
                on = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-14"
                })(W(), (function(n) {
                    var t = n.numberOfElement;
                    return "".concat(187 * t + 16 * t + 20 + 6, "px")
                }), (function(n) {
                    return n.numberOfElement % 2 === 0 ? (0, p.iv)(F()) : (0, p.iv)(U())
                })),
                an = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-15"
                })(D(), (function(n) {
                    var t = n.width;
                    return "".concat(t, "px")
                })),
                cn = (p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-16"
                })(G()), p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-17"
                })(N()), p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-18"
                })(H(), (function(n) {
                    return n.top && "200px"
                }), (function(n) {
                    return n.bottom && "75px"
                }))),
                un = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-19"
                })(B()),
                sn = p.ZP.div.withConfig({
                    componentId: "sc-72bad3d-20"
                })(R(), (function(n) {
                    return n.active ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)"
                }));

            function ln() {
                return ln = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, ln.apply(this, arguments)
            }
            var fn, dn, pn = function(n) {
                return i.createElement("svg", ln({
                    width: 211,
                    height: 93,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), X || (X = i.createElement("path", {
                    d: "M209.904 92C202.652 40.561 158.65 1 105.452 1S8.252 40.561 1 92",
                    stroke: "url(#big-eclipse_svg__a)",
                    strokeLinecap: "round"
                })), $ || ($ = i.createElement("defs", null, i.createElement("linearGradient", {
                    id: "big-eclipse_svg__a",
                    x1: 210.952,
                    y1: 38.457,
                    x2: -7.487,
                    y2: 38.56,
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#414FA2",
                    stopOpacity: .22
                }), i.createElement("stop", {
                    offset: 1,
                    stopColor: "#EE4492"
                })))))
            };

            function vn() {
                return vn = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, vn.apply(this, arguments)
            }
            var mn, hn, gn = function(n) {
                return i.createElement("svg", vn({
                    width: 201,
                    height: 72,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), fn || (fn = i.createElement("path", {
                    d: "M199.876 71.5C185.346 30.417 146.311 1 100.438 1 54.565 1 15.53 30.417 1 71.5",
                    stroke: "url(#small-eclipse_svg__a)",
                    strokeLinecap: "round"
                })), dn || (dn = i.createElement("defs", null, i.createElement("linearGradient", {
                    id: "small-eclipse_svg__a",
                    x1: 205.938,
                    y1: 75.913,
                    x2: -12.501,
                    y2: 75.965,
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#414FA2"
                }), i.createElement("stop", {
                    offset: 1,
                    stopColor: "#EE4492",
                    stopOpacity: 0
                })))))
            };

            function xn() {
                return xn = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, xn.apply(this, arguments)
            }
            var bn, wn, Zn = function(n) {
                return i.createElement("svg", xn({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), mn || (mn = i.createElement("circle", {
                    opacity: .3,
                    cx: 12,
                    cy: 12,
                    r: 12,
                    fill: "#EE4492"
                })), hn || (hn = i.createElement("path", {
                    d: "M8 11.667 11.2 15l4.8-5",
                    stroke: "#EE4492",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                })))
            };

            function En() {
                return En = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, En.apply(this, arguments)
            }
            var On = function(n) {
                    return i.createElement("svg", En({
                        width: 22,
                        height: 22,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), bn || (bn = i.createElement("circle", {
                        cx: 11,
                        cy: 11,
                        r: 10,
                        stroke: "url(#progressIcon_svg__a)",
                        strokeWidth: 2,
                        strokeDasharray: "2 4"
                    })), wn || (wn = i.createElement("defs", null, i.createElement("linearGradient", {
                        id: "progressIcon_svg__a",
                        x1: 22,
                        y1: 7.774,
                        x2: -.776,
                        y2: 7.779,
                        gradientUnits: "userSpaceOnUse"
                    }, i.createElement("stop", {
                        stopColor: "#414FA2"
                    }), i.createElement("stop", {
                        offset: 1,
                        stopColor: "#EE4492"
                    })))))
                },
                yn = function(n) {
                    var t = n.currentIndex,
                        e = n.indexOfLastActiveElement,
                        r = n.title,
                        a = n.container,
                        u = n.roadmapScrollPosition,
                        s = n.type,
                        l = (0, i.useMemo)((function() {
                            return t % 2 !== 0
                        }), []),
                        f = (0, i.useMemo)((function() {
                            return e === t
                        }), []),
                        d = (0, i.useMemo)((function() {
                            return t < e
                        }), []),
                        p = (0, i.useMemo)((function() {
                            return t > e
                        }), []),
                        v = (0, i.useMemo)((function() {
                            return 187 * t + 16 * t + 8 - u
                        }), [t, u]),
                        m = (0, i.useCallback)((function() {
                            var n;
                            null === a || void 0 === a || null === (n = a.current) || void 0 === n || n.scrollTo({
                                left: v,
                                behavior: "smooth"
                            })
                        }), [v]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)(Q, {
                            numberOfElement: t,
                            isOdd: Boolean(l),
                            onClick: function() {
                                return m()
                            },
                            children: [(0, o.jsx)(c.Z, {
                                color: "white",
                                bold: !0,
                                type: "content",
                                children: "done" === s ? (0, o.jsx)(Zn, {}) : (0, o.jsx)(On, {})
                            }), (0, o.jsx)(c.Z, {
                                color: "rgba(255, 255,255, 0.6)",
                                type: "content",
                                children: (0, o.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: r
                                    }
                                })
                            })]
                        }), (0, o.jsx)(V, {
                            lastActive: f,
                            indexOfLastActive: e,
                            numberOfElement: t,
                            children: (0, o.jsx)(nn, {
                                lastActive: f,
                                isOdd: Boolean(l)
                            })
                        }), (!l && d || p && l) && (0, o.jsx)(tn, {
                            numberOfElement: t,
                            indexOfLastActive: e,
                            children: (0, o.jsx)(gn, {})
                        }), (l && d || p && !l) && (0, o.jsx)(en, {
                            numberOfElement: t,
                            indexOfLastActive: e,
                            children: (0, o.jsx)(gn, {})
                        }), f && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(rn, {
                                numberOfElement: t,
                                indexOfLastActive: e,
                                children: (0, o.jsx)(pn, {})
                            }), (0, o.jsx)(on, {
                                numberOfElement: t,
                                indexOfLastActive: e,
                                children: (0, o.jsx)(pn, {})
                            })]
                        })]
                    })
                };

            function jn() {
                var n = (0, i.useRef)(null);
                return (0, i.useEffect)((function() {
                    var t = n.current;
                    if (t) {
                        var e = function(n) {
                            0 !== n.deltaY && (n.preventDefault(), t.scrollTo({
                                left: t.scrollLeft + n.deltaY
                            }))
                        };
                        return t.addEventListener("wheel", e),
                            function() {
                                return t.removeEventListener("wheel", e)
                            }
                    }
                }), []), n
            }
            var kn = function(n) {
                var t = n.data,
                    e = t.blocks,
                    l = t.sectionName,
                    f = t.sectionTitle,
                    d = (0, a.$G)("common").t,
                    p = s().width,
                    v = (0, i.useMemo)((function() {
                        var n = [];
                        return e.map((function(t) {
                            return n.push(t.blocks)
                        })), n
                    }), [e]),
                    m = (0, i.useMemo)((function() {
                        var n = [];
                        return v.map((function(t) {
                            return t.map((function(t) {
                                return n.push(t)
                            }))
                        })), n
                    }), [e]),
                    h = (0, i.useMemo)((function() {
                        return p > 1e3 ? p * (550 / p) : p < 500 ? p * (10 / p) : p * (100 / p)
                    }), [p]),
                    g = (0, i.useMemo)((function() {
                        var n = 0;
                        return m.map((function(t, e) {
                            "done" === t.type && "done" !== m[e + 1].type && (n = e)
                        })), n
                    }), [m]),
                    x = jn(),
                    b = (0, i.useMemo)((function() {
                        var n = [],
                            t = [];
                        return m.map((function(t, e) {
                            return n.push(187 * e + 16 * e + 8)
                        })), n.map((function(n) {
                            n > p * t.length && t.push(n)
                        })), t
                    }), [m, p]),
                    w = (0, i.useState)(0),
                    Z = w[0],
                    E = w[1];
                return (0, o.jsxs)(q, {
                    children: [(0, o.jsxs)(u.Z, {
                        size: "small",
                        children: [(0, o.jsx)(c.Z, {
                            color: "pink",
                            type: "sectionName",
                            children: l
                        }), (0, o.jsx)(c.Z, {
                            color: "white",
                            type: "sectionTitle",
                            children: f
                        }), (0, o.jsx)(c.Z, {
                            color: "white",
                            type: "content",
                            children: d("roadmapText")
                        })]
                    }), (0, o.jsxs)(K, {
                        ref: x,
                        width: 207 * m.length,
                        children: [m.map((function(n, t) {
                            return (0, o.jsx)(yn, (0, r.Z)({
                                currentIndex: t,
                                indexOfLastActiveElement: g,
                                roadmapScrollPosition: h,
                                container: x
                            }, n), t)
                        })), (0, o.jsx)(an, {
                            width: 207 * m.length
                        })]
                    }), (0, o.jsx)(un, {
                        children: b.map((function(n, t) {
                            return t >= 10 ? null : (0, o.jsx)(sn, {
                                active: t === Z,
                                onClick: function() {
                                    var e;
                                    E(t), null === (e = x.current) || void 0 === e || e.scrollTo({
                                        left: n,
                                        behavior: "smooth"
                                    })
                                }
                            })
                        }))
                    }), (0, o.jsx)(cn, {
                        top: !0
                    }), (0, o.jsx)(cn, {
                        bottom: !0
                    })]
                })
            }
        },
        38432: function(n, t, e) {
            var r = e(7297),
                o = e(53918),
                i = e(25432);

            function a() {
                var n = (0, r.Z)(["\n    margin: 100px 0 150px 0;\n    ", " {\n        margin: 100px 0 200px 0;\n    }\n"]);
                return a = function() {
                    return n
                }, n
            }
            var c = (0, o.iv)(a(), i.Z.aboveTablet);
            t.Z = c
        }
    }
]);
//# sourceMappingURL=7650.bf12822a4be4c22d.js.map