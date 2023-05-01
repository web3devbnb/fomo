"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1117], {
        77164: function(n, e, t) {
            var i = t(85893),
                r = (t(67294), t(5081));
            e.Z = function(n) {
                var e = n.children,
                    t = n.size,
                    o = void 0 === t ? "large" : t;
                return (0, i.jsx)(r.W, {
                    large: "large" === o,
                    children: e
                })
            }
        },
        5081: function(n, e, t) {
            t.d(e, {
                W: function() {
                    return a
                }
            });
            var i = t(7297),
                r = t(25432);

            function o() {
                var n = (0, i.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    max-width: 100%;\n    width: 100%;\n    padding: 0 20px;\n    margin: ", " auto;\n\n    .large-section-title,\n    .section-title {\n        margin-bottom: 25px;\n    }\n\n    ", " {\n        padding: 0;\n        max-width: ", ";\n    }\n\n    ", " {\n        max-width: ", ";\n    }\n"]);
                return o = function() {
                    return n
                }, n
            }
            var a = t(53918).ZP.div.withConfig({
                componentId: "sc-6a4159d5-0"
            })(o(), (function(n) {
                return n.large ? "96px" : "100px"
            }), r.Z.abovePhone, (function(n) {
                return n.large ? "650px" : "550px"
            }), r.Z.aboveTablet, (function(n) {
                return n.large ? "900px" : "650px"
            }))
        },
        31117: function(n, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return k
                }
            });
            var i = t(26042),
                r = t(69396),
                o = t(85893),
                a = t(67294),
                c = t(90169),
                l = t(24739),
                d = t(77164),
                p = t(25675),
                s = t.n(p),
                u = t(7297),
                x = t(53918);

            function g() {
                var n = (0, u.Z)(["\n    display: flex;\n    align-items: center;\n\n    flex-direction: column;\n    text-align: center;\n"]);
                return g = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, u.Z)(["\n    width: 80px;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    margin-bottom: 20px;\n\n    span {\n        top: 12px;\n        left: 12px;\n    }\n\n    &::before {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: url('/assets/bg/icon-bow.svg') center no-repeat;\n        background-size: contain;\n    }\n"]);
                return f = function() {
                    return n
                }, n
            }
            var h = x.ZP.div.withConfig({
                    componentId: "sc-8320bbbc-0"
                })(g()),
                m = x.ZP.div.withConfig({
                    componentId: "sc-8320bbbc-1"
                })(f()),
                b = function(n) {
                    var e = n.title,
                        t = n.description,
                        a = n.icon;
                    return (0, o.jsxs)(h, {
                        children: [(0, o.jsx)(m, {
                            children: (0, o.jsx)(s(), (0, r.Z)((0, i.Z)({}, a), {
                                width: 32,
                                height: 32,
                                layout: "fixed"
                            }))
                        }), (0, o.jsx)(l.Z, {
                            type: "sectionName",
                            color: "white",
                            children: e
                        }), (0, o.jsx)(l.Z, {
                            type: "content",
                            color: "white",
                            children: t
                        })]
                    })
                },
                v = t(25432);

            function Z() {
                var n = (0, u.Z)(["\n    margin: 100px 0 150px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n    overflow: hidden;\n    position: relative;\n    border-radius: 30px;\n\n    --margin-desktop: 100px;\n    --margin-tablet: 20px;\n\n    background: linear-gradient(180deg, #1b1b4940 0%, rgba(27, 27, 73, 0) 100%);\n\n    ", " {\n        margin-left: var(--margin-tablet);\n        margin-right: var(--margin-tablet);\n    }\n\n    ", " {\n        margin: 100px 0 164px;\n        margin-left: var(--margin-desktop);\n        margin-right: var(--margin-desktop);\n    }\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, u.Z)(["\n    display: grid;\n    justify-content: space-around;\n    list-style-type: none;\n    padding: 0 30px;\n    width: 100%;\n    max-width: 1200px;\n    gap: 60px 45px;\n\n    ", " {\n        grid-template-columns: repeat(3, minmax(200px, 280px));\n    }\n\n    ", " {\n        gap: 60px 75px;\n    }\n"]);
                return w = function() {
                    return n
                }, n
            }
            var y = x.ZP.div.withConfig({
                    componentId: "sc-319a03a-0"
                })(Z(), v.Z.abovePhone, v.Z.aboveTablet),
                j = x.ZP.div.withConfig({
                    componentId: "sc-319a03a-1"
                })(w(), v.Z.abovePhone, v.Z.aboveTablet),
                k = function(n) {
                    var e = n.data;
                    return (0, o.jsxs)(y, {
                        id: e.sectionId,
                        children: [(0, o.jsxs)(d.Z, {
                            size: "small",
                            children: [(0, o.jsx)(l.Z, {
                                type: "sectionName",
                                color: "pink",
                                children: e.sectionTitle
                            }), (0, o.jsx)(l.Z, {
                                type: "sectionTitle",
                                children: e.sectionName
                            }), (0, o.jsx)(l.Z, {
                                type: "content",
                                children: e.description
                            })]
                        }), (0, o.jsx)(j, {
                            children: e.blocks.map((function(n, e) {
                                return (0, a.createElement)(b, (0, r.Z)((0, i.Z)({}, n), {
                                    icon: (0, c.n)(n.icon),
                                    key: "icon_tile_".concat(e)
                                }))
                            }))
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=1117.e24f3202880f1661.js.map