"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4130], {
        30334: function(n, t, e) {
            e.d(t, {
                e: function() {
                    return c
                }
            });
            var i = e(7297),
                o = e(53918),
                r = e(25432);

            function a() {
                var n = (0, i.Z)(["\n    position: absolute;\n    top: -75px;\n\n    ", " {\n        top: -150px;\n    }\n"]);
                return a = function() {
                    return n
                }, n
            }
            var c = o.ZP.div.withConfig({
                componentId: "sc-22a734df-0"
            })(a(), r.Z.aboveTablet)
        },
        77164: function(n, t, e) {
            var i = e(85893),
                o = (e(67294), e(5081));
            t.Z = function(n) {
                var t = n.children,
                    e = n.size,
                    r = void 0 === e ? "large" : e;
                return (0, i.jsx)(o.W, {
                    large: "large" === r,
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
            var i = e(7297),
                o = e(25432);

            function r() {
                var n = (0, i.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    max-width: 100%;\n    width: 100%;\n    padding: 0 20px;\n    margin: ", " auto;\n\n    .large-section-title,\n    .section-title {\n        margin-bottom: 25px;\n    }\n\n    ", " {\n        padding: 0;\n        max-width: ", ";\n    }\n\n    ", " {\n        max-width: ", ";\n    }\n"]);
                return r = function() {
                    return n
                }, n
            }
            var a = e(53918).ZP.div.withConfig({
                componentId: "sc-6a4159d5-0"
            })(r(), (function(n) {
                return n.large ? "96px" : "100px"
            }), o.Z.abovePhone, (function(n) {
                return n.large ? "650px" : "550px"
            }), o.Z.aboveTablet, (function(n) {
                return n.large ? "900px" : "650px"
            }))
        },
        69828: function(n, t, e) {
            var i = e(26042),
                o = e(69396),
                r = e(85893),
                a = (e(67294), e(25675)),
                c = e.n(a),
                s = e(24739),
                d = e(42329);
            t.Z = function(n) {
                var t = n.title,
                    e = n.subtitle,
                    a = n.description,
                    p = n.icon,
                    u = n.imageBefore;
                return (0, r.jsx)(d.W2, {
                    children: (0, r.jsxs)(d.sg, {
                        children: [p && (0, r.jsx)(d.qk, {
                            children: (0, r.jsx)(c(), (0, o.Z)((0, i.Z)({}, p), {
                                width: 32,
                                height: 32,
                                layout: "fixed"
                            }))
                        }), u && (0, r.jsx)(d.X5, {
                            children: (0, r.jsx)(c(), (0, o.Z)((0, i.Z)({}, u), {
                                layout: "fill",
                                objectFit: "contain",
                                objectPosition: "left"
                            }))
                        }), (0, r.jsx)(s.Z, {
                            type: "sectionName",
                            color: "white",
                            children: t
                        }), e && (0, r.jsx)(s.Z, {
                            type: "content",
                            color: "purple",
                            bold: !0,
                            children: e
                        }), (0, r.jsx)(s.Z, {
                            type: "content",
                            children: a
                        })]
                    })
                })
            }
        },
        42329: function(n, t, e) {
            e.d(t, {
                W2: function() {
                    return p
                },
                X5: function() {
                    return f
                },
                qk: function() {
                    return l
                },
                sg: function() {
                    return u
                }
            });
            var i = e(7297),
                o = e(25432),
                r = e(53918);

            function a() {
                var n = (0, i.Z)(["\n    display: flex;\n    flex-direction: row;\n\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    background: rgba(87, 78, 160, 0.15);\n    border-radius: 24px;\n    padding: 30px;\n\n    p {\n        opacity: 0.85;\n\n        &.feature {\n            background: url('/assets/icons/list-circle.svg') no-repeat left center;\n            padding-left: 16px;\n        }\n    }\n\n    ", " {\n        padding: 60px;\n    }\n"]);
                return a = function() {
                    return n
                }, n
            }

            function c() {
                var n = (0, i.Z)(["\n    display: flex;\n    flex-direction: column;\n"]);
                return c = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, i.Z)(["\n    display: flex;\n    margin-right: 15px;\n    margin-bottom: 10px;\n"]);
                return s = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, i.Z)(["\n    position: absolute;\n    height: 100px;\n    width: 100%;\n    top: 0;\n    left: 30px;\n    transform: translateY(-50%);\n\n    ", " {\n        height: 150px;\n        left: 60px;\n    }\n"]);
                return d = function() {
                    return n
                }, n
            }
            var p = r.ZP.div.withConfig({
                    componentId: "sc-7c84fbaf-0"
                })(a(), o.Z.aboveDesktop),
                u = r.ZP.div.withConfig({
                    componentId: "sc-7c84fbaf-1"
                })(c()),
                l = r.ZP.div.withConfig({
                    componentId: "sc-7c84fbaf-2"
                })(s()),
                f = r.ZP.div.withConfig({
                    componentId: "sc-7c84fbaf-3"
                })(d(), o.Z.aboveDesktop)
        },
        24130: function(n, t, e) {
            e.r(t), e.d(t, {
                default: function() {
                    return y
                }
            });
            var i = e(26042),
                o = e(69396),
                r = e(85893),
                a = e(90169),
                c = e(30334),
                s = e(24739),
                d = e(77164),
                p = e(69828),
                u = e(7297),
                l = e(25432),
                f = e(53918),
                g = e(5081),
                x = e(42329);

            function h() {
                var n = (0, u.Z)(["\n    margin: 0 0 150px 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    &::before {\n        content: '';\n        position: absolute;\n        right: 0;\n        background: url('/assets/bg/dome-bg-mobile.svg') no-repeat center;\n        width: 100vw;\n        background-size: contain;\n        aspect-ratio: 375 / 1467;\n        z-index: -1;\n    }\n\n    &::after {\n        content: '';\n        position: absolute;\n        right: 0;\n        background: url('/assets/bg/dome-lines-mobile.svg') no-repeat center;\n        height: 110%;\n        aspect-ratio: 193 / 808;\n        background-size: contain;\n        z-index: -1;\n    }\n\n    ", " {\n        padding: 0 50px;\n\n        &::after {\n            height: 750px;\n        }\n\n        &::before {\n            background: url('/assets/bg/dome-bg.svg') no-repeat center;\n            aspect-ratio: 1440 / 1143;\n            background-size: contain;\n        }\n    }\n\n    ", " {\n        padding: 0 100px;\n        margin: 160px 0 55px;\n\n        &::after {\n            height: 1300px;\n            background: url('/assets/bg/dome-lines.svg') no-repeat center;\n            aspect-ratio: 420 / 1259;\n        }\n    }\n"]);
                return h = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, u.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    ", " {\n        align-items: flex-start;\n        text-align: left;\n\n        ", " {\n            margin-top: 50px;\n            margin-bottom: 20px;\n        }\n    }\n\n    ", " {\n        flex-direction: row;\n        justify-content: flex-start;\n        margin-bottom: 50px;\n\n        ", " {\n            max-width: 500px;\n            margin: 0;\n        }\n    }\n"]);
                return b = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, u.Z)(["\n    width: 200px;\n    height: 200px;\n    position: relative;\n    margin-right: auto;\n    margin-bottom: 20px;\n\n    ", " {\n        margin: 0;\n        margin-left: 50px;\n        width: 250px;\n        height: 250px;\n    }\n\n    ", " {\n        margin-left: 100px;\n        width: 300px;\n        height: 300px;\n    }\n\n    &::after {\n        width: 100%;\n        height: 100%;\n        content: '';\n        position: absolute;\n        background: url('/assets/bg/sphere.svg') center no-repeat;\n        background-size: contain;\n        z-index: 2;\n        left: -30px;\n\n        ", " {\n            left: unset;\n            top: 75px;\n        }\n    }\n"]);
                return m = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, u.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, max-content));\n    grid-gap: 50px;\n    width: 100%;\n    padding: 0 20px;\n\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    ", " {\n        grid-gap: 25px;\n        padding: 0;\n        justify-content: space-between;\n    }\n\n    ", " {\n        padding: 30px;\n        margin: 0;\n        background: rgba(0, 3, 27, 0.2);\n        backdrop-filter: blur(10px);\n\n        p {\n            padding-left: 0;\n            background: none;\n            font-size: 14px;\n        }\n\n        .section-name {\n            font-size: 18px;\n        }\n    }\n"]);
                return v = function() {
                    return n
                }, n
            }
            var Z = f.ZP.div.withConfig({
                    componentId: "sc-416c73d5-0"
                })(h(), l.Z.abovePhone, l.Z.aboveTablet),
                w = f.ZP.div.withConfig({
                    componentId: "sc-416c73d5-1"
                })(b(), g.W, l.Z.phone, l.Z.abovePhone, g.W),
                j = f.ZP.div.withConfig({
                    componentId: "sc-416c73d5-2"
                })(m(), l.Z.abovePhone, l.Z.aboveTablet, l.Z.aboveTablet),
                k = f.ZP.div.withConfig({
                    componentId: "sc-416c73d5-3"
                })(v(), l.Z.aboveTablet, x.W2),
                y = function(n) {
                    var t = n.data,
                        e = t.sectionId,
                        u = t.sectionName,
                        l = t.sectionTitle,
                        f = t.description,
                        g = t.blocks;
                    return (0, r.jsxs)(Z, {
                        children: [(0, r.jsx)(c.e, {
                            id: e
                        }), (0, r.jsxs)(w, {
                            children: [(0, r.jsxs)(d.Z, {
                                children: [(0, r.jsx)(s.Z, {
                                    type: "sectionName",
                                    color: "pink",
                                    children: u
                                }), (0, r.jsx)(s.Z, {
                                    type: "sectionTitle",
                                    children: l
                                }), (0, r.jsx)(s.Z, {
                                    type: "content",
                                    children: f
                                })]
                            }), (0, r.jsx)(j, {})]
                        }), (0, r.jsx)(k, {
                            children: g.map((function(n, t) {
                                return (0, r.jsx)(p.Z, (0, o.Z)((0, i.Z)({}, n), {
                                    icon: (0, a.n)(n.icon)
                                }), "hero_block_".concat(t))
                            }))
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=4130.7a11fb0c40e85a7d.js.map