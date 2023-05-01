(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8150], {
        12150: function(n, t, e) {
            "use strict";
            var r, o, i = e(67294);

            function a() {
                return a = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, a.apply(this, arguments)
            }
            t.Z = function(n) {
                return i.createElement("svg", a({
                    width: 947,
                    height: 939,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), r || (r = i.createElement("path", {
                    opacity: .1,
                    d: "M503.336 17.166a57.3 57.3 0 0 1 21.823-13.84c49.06-17.151 127.323 31.532 253.775 157.885 126.093 125.995 189.498 218.173 161.544 261.562-29.3 45.489-96.86 47.26-184.471 56.629-79.542 8.497-169.69 18.137-213.878 62.291-44.188 44.153-53.826 134.221-62.33 213.701-9.376 87.601-17.435 163.248-65.701 180.263-48.721 17.179-126.675-31.339-252.768-157.344C34.888 651.97-13.843 573.767 3.33 524.736c16.961-48.393 92.425-56.929 179.803-66.782 78.845-8.875 168.209-18.941 212.222-62.91 44.014-43.97 54.107-133.283 62.96-212.066 8.165-72.163 15.391-136.196 45.021-165.813Z",
                    fill: "url(#bow-fill_svg__a)"
                })), o || (o = i.createElement("defs", null, i.createElement("linearGradient", {
                    id: "bow-fill_svg__a",
                    x1: 780.442,
                    y1: 162.709,
                    x2: 163.328,
                    y2: 780.306,
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#D84594"
                }), i.createElement("stop", {
                    offset: 1,
                    stopColor: "#574EA0"
                })))))
            }
        },
        60818: function(n, t, e) {
            "use strict";
            var r, o = e(67294);

            function i() {
                return i = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, i.apply(this, arguments)
            }
            t.Z = function(n) {
                return o.createElement("svg", i({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), r || (r = o.createElement("path", {
                    d: "M12.208 10.563 1.462 0 0 1.437 10.746 12 0 22.563 1.462 24l10.746-10.563 10.33 10.154L24 22.154 13.67 12 24 1.846 22.538.41l-10.33 10.154Z",
                    fill: "#fff"
                })))
            }
        },
        65102: function(n, t, e) {
            "use strict";
            e.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = e(26042),
                o = e(69396),
                i = e(99534),
                a = e(82222),
                c = {
                    statusCode: 500,
                    error: "Error",
                    message: "Unknown error"
                },
                s = function(n) {
                    switch ("undefined" === typeof n ? "undefined" : (0, a.Z)(n)) {
                        case "string":
                            return (0, o.Z)((0, r.Z)({}, c), {
                                message: n
                            });
                        case "object":
                            var t, e, i, s, u;
                            return (0, r.Z)((0, o.Z)((0, r.Z)({}, c, (null === (t = n) || void 0 === t ? void 0 : t.message) || n), {
                                message: (null === (e = n) || void 0 === e || null === (i = e.message) || void 0 === i ? void 0 : i.message) || (null === (s = n) || void 0 === s ? void 0 : s.message)
                            }), (null === (u = n) || void 0 === u ? void 0 : u.statusCode) && {
                                statusCode: n.statusCode
                            });
                        default:
                            return c
                    }
                },
                u = e(81138),
                l = e(828),
                d = e(92910),
                f = function(n, t) {
                    return /https?:/.test(t) ? t : [(n || "https://everdome.io/api").replace(/\/$/, ""), t.replace(/^\//, "")].join("/")
                },
                p = function(n, t) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = new URL(f(n, v(t, r)));
                    return e && Object.entries(e).forEach((function(n) {
                        var t = (0, l.Z)(n, 2),
                            e = t[0],
                            r = t[1];
                        void 0 !== r && o.searchParams.append(e, r.toString())
                    })), o.href
                },
                v = function(n, t) {
                    return n.replace(/:(\w+)/g, (function(n, e) {
                        var r;
                        return (0, d.O)(t, e) && (null === (r = t[e]) || void 0 === r ? void 0 : r.toString()) || ""
                    }))
                };

            function h() {
                var n = function(n) {
                    return function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = e.headers,
                            c = (e.method, e.queryParams),
                            l = e.bindParams,
                            d = e.data,
                            f = e.body,
                            v = e.baseUrl,
                            h = (0, i.Z)(e, ["headers", "method", "queryParams", "bindParams", "data", "body", "baseUrl"]),
                            g = d ? JSON.stringify(d) : f || void 0;
                        return fetch(p(v, t, c, l), (0, o.Z)((0, r.Z)({}, h, g ? {
                            body: g
                        } : {}), {
                            method: n,
                            redirect: "follow",
                            headers: (0, r.Z)({
                                "Content-Type": "application/json"
                            }, a)
                        })).then((function(n) {
                            return new Promise((function(t, e) {
                                n.text().then((function(r) {
                                    try {
                                        var o = (0, u.Z)(r, !0);
                                        n.ok ? t(o) : e(s(o))
                                    } catch (i) {
                                        e(s(i))
                                    }
                                }))
                            }))
                        }))
                    }
                };
                return {
                    apiGet: n("GET"),
                    apiPost: n("POST"),
                    apiPut: n("PUT"),
                    apiPatch: n("PATCH"),
                    apiDelete: n("DELETE"),
                    fakeGet: function(n, t) {
                        return console.log("Fake fetch data:", n), new Promise((function(n) {
                            return setTimeout((function() {
                                return n(t)
                            }), 1e3)
                        }))
                    }
                }
            }
        },
        39049: function(n, t, e) {
            "use strict";
            e.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = e(85893),
                o = (e(67294), e(41664)),
                i = e.n(o),
                a = e(7297);

            function c() {
                var n = (0, a.Z)(["\n    transition: color ease-in-out 0.15s;\n    color: #d84594;\n    text-decoration: underline;\n\n    &:hover {\n        color: #852b65;\n    }\n"]);
                return c = function() {
                    return n
                }, n
            }
            var s = e(53918).ZP.a.withConfig({
                    componentId: "sc-93c57c2e-0"
                })(c()),
                u = function(n) {
                    var t = n.className,
                        e = n.href,
                        o = n.children,
                        a = n.target,
                        c = void 0 === a ? "_self" : a;
                    return (0, r.jsx)(i(), {
                        href: e,
                        passHref: !0,
                        children: (0, r.jsx)(s, {
                            className: t,
                            target: c,
                            rel: "noreferrer",
                            children: o
                        })
                    })
                }
        },
        16939: function(n, t, e) {
            "use strict";
            e.d(t, {
                If: function() {
                    return o
                }
            });
            var r = e(85893),
                o = (e(67294), function(n) {
                    var t = n.condition,
                        e = n.children;
                    return t ? (0, r.jsx)(r.Fragment, {
                        children: e
                    }) : null
                })
        },
        24739: function(n, t, e) {
            "use strict";
            var r, o, i = e(26042),
                a = e(69396),
                c = e(99534),
                s = e(85893),
                u = e(94184),
                l = e.n(u),
                d = (e(67294), e(90777));
            ! function(n) {
                n.sectionName = "h2", n.sectionTitle = "h3", n.largeSectionTitle = "h3", n.content = "p"
            }(r || (r = {})),
            function(n) {
                n.sectionName = "section-name", n.sectionTitle = "section-title", n.largeSectionTitle = "large-section-title", n.content = ""
            }(o || (o = {}));
            t.Z = function(n) {
                var t = n.type,
                    e = n.children,
                    u = n.color,
                    f = void 0 === u ? "white" : u,
                    p = n.noMarginBottom,
                    v = void 0 !== p && p,
                    h = n.noMarginTop,
                    g = void 0 !== h && h,
                    m = n.className,
                    x = void 0 === m ? "" : m,
                    b = n.underline,
                    w = void 0 !== b && b,
                    Z = n.inline,
                    j = void 0 !== Z && Z,
                    y = n.bold,
                    C = void 0 !== y && y,
                    P = n.opacity,
                    E = void 0 === P ? 1 : P,
                    k = n.semiBold,
                    _ = n.marginLeft,
                    T = n.onClick,
                    O = void 0 === T ? function() {} : T,
                    I = (0, c.Z)(n, ["type", "children", "color", "noMarginBottom", "noMarginTop", "className", "underline", "inline", "bold", "opacity", "semiBold", "marginLeft", "onClick"]);
                return (0, s.jsx)(d.q, (0, a.Z)((0, i.Z)({
                    as: r[t],
                    className: l()(o[t], x, "gradient" === f && "gradient"),
                    onClick: O,
                    color: f,
                    noMarginBottom: v,
                    noMarginTop: g,
                    underline: w,
                    inline: j,
                    bold: C,
                    opacity: E,
                    marginLeft: _,
                    semiBold: k
                }, I), {
                    children: e
                }))
            }
        },
        90777: function(n, t, e) {
            "use strict";
            e.d(t, {
                q: function() {
                    return x
                }
            });
            var r = e(7297),
                o = e(53918);

            function i() {
                var n = (0, r.Z)(["\n            font-weight: 400;\n        "]);
                return i = function() {
                    return n
                }, n
            }

            function a() {
                var n = (0, r.Z)(["\n            font-weight: bold;\n        "]);
                return a = function() {
                    return n
                }, n
            }

            function c() {
                var n = (0, r.Z)(["\n            display: inline;\n        "]);
                return c = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, r.Z)(["\n            margin-top: 0;\n        "]);
                return s = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, r.Z)(["\n            margin-bottom: 0;\n        "]);
                return u = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, r.Z)(["\n            margin-left: ", "px;\n        "]);
                return l = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, r.Z)(["\n                    color: var(--pink);\n\n                    &::after {\n                        background-color: var(--pink);\n                    }\n                "]);
                return d = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, r.Z)(["\n                    .white {\n                        color: var(--font-color);\n\n                        &::after {\n                            background-color: var(--font-color);\n                        }\n                    }\n                "]);
                return f = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, r.Z)(["\n                    color: var(--light-purple);\n\n                    &::after {\n                        background-color: var(--font-color);\n                    }\n                "]);
                return p = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, r.Z)(["\n                    color: var(--light-blue);\n                "]);
                return v = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, r.Z)(["\n                    color: ", ";\n                "]);
                return h = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, r.Z)(["\n            position: relative;\n            &::after {\n                content: '';\n                color: inherit;\n                height: 1px;\n                width: 120%;\n\n                margin-top: 2px;\n            }\n        "]);
                return g = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, r.Z)(["\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", ";\n\n    ", "\n\n    opacity: ", ";\n"]);
                return m = function() {
                    return n
                }, n
            }
            var x = o.ZP.div.withConfig({
                componentId: "sc-ba39f3e1-0"
            })(m(), (function(n) {
                return n.semiBold && (0, o.iv)(i())
            }), (function(n) {
                return n.bold && (0, o.iv)(a())
            }), (function(n) {
                return n.inline && (0, o.iv)(c())
            }), (function(n) {
                return n.noMarginTop && (0, o.iv)(s())
            }), (function(n) {
                return n.noMarginBottom && (0, o.iv)(u())
            }), (function(n) {
                var t = n.marginLeft;
                return t && (0, o.iv)(l(), t)
            }), (function(n) {
                var t = n.color;
                switch (t) {
                    case "pink":
                        return (0, o.iv)(d());
                    case "white":
                        return (0, o.iv)(f());
                    case "purple":
                        return (0, o.iv)(p());
                    case "lightBlue":
                        return (0, o.iv)(v());
                    default:
                        return (0, o.iv)(h(), t)
                }
            }), (function(n) {
                return n.underline && (0, o.iv)(g())
            }), (function(n) {
                return n.opacity
            }))
        },
        46719: function(n, t, e) {
            "use strict";
            e.d(t, {
                Z: function() {
                    return ge
                }
            });
            var r = e(26042),
                o = e(85893),
                i = e(67294),
                a = e(1785),
                c = e.n(a),
                s = e(72132),
                u = e(69396),
                l = e(41664),
                d = e.n(l),
                f = e(39049),
                p = e(24739),
                v = e(90169),
                h = e(7297),
                g = e(25432),
                m = e(53918),
                x = e(90777);

            function b() {
                var n = (0, h.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin-top: auto;\n\n    & > p {\n        margin-top: 32px;\n        opacity: 0.7;\n        font-weight: 300;\n        font-size: 16px;\n        margin-bottom: 5px;\n    }\n"]);
                return b = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, h.Z)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    margin: 75px 0 134px;\n\n    ", " {\n        margin: 134px 0;\n    }\n\n    img {\n        margin: 30px 40px;\n    }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, h.Z)(["\n    width: 100%;\n    max-width: 200px;\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, h.Z)(["\n    text-align: center;\n    white-space: pre-line;\n    margin: 24px 0 32px;\n"]);
                return j = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, h.Z)(["\n    margin: 0 0 4px;\n    font-size: 16px;\n"]);
                return y = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, h.Z)(["\n    margin-top: 24px;\n    width: 100%;\n    padding: 10px 12px;\n    background: rgba(13, 3, 32, 0.3);\n"]);
                return C = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, h.Z)(["\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    max-width: 1224px;\n    margin: 0 auto;\n\n    ", " {\n        flex-direction: row;\n    }\n"]);
                return P = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, h.Z)(["\n    margin: 0;\n    font-size: 14px;\n    padding: 16px 0 4px;\n    text-align: center;\n\n    ", " {\n        text-align: left;\n        padding: 4px 16px 4px 0;\n        margin-right: auto;\n    }\n"]);
                return E = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, h.Z)(["\n    font-size: 14px;\n    text-decoration: none;\n    padding: 4px 0;\n\n    &:first-of-type {\n        margin: 0 32px;\n    }\n\n    &:hover {\n        text-decoration: underline;\n    }\n"]);
                return k = function() {
                    return n
                }, n
            }
            var _, T = m.ZP.div.withConfig({
                    componentId: "sc-f7c62c94-0"
                })(b()),
                O = m.ZP.div.withConfig({
                    componentId: "sc-f7c62c94-1"
                })(w(), g.Z.aboveTablet),
                I = m.ZP.img.withConfig({
                    componentId: "sc-f7c62c94-2"
                })(Z()),
                z = m.ZP.div.withConfig({
                    componentId: "sc-f7c62c94-3"
                })(j()),
                M = (0, m.ZP)(x.q).withConfig({
                    componentId: "sc-f7c62c94-4"
                })(y()),
                D = m.ZP.div.withConfig({
                    componentId: "sc-f7c62c94-5"
                })(C()),
                N = m.ZP.div.withConfig({
                    componentId: "sc-f7c62c94-6"
                })(P(), g.Z.aboveTablet),
                L = m.ZP.p.withConfig({
                    componentId: "sc-f7c62c94-7"
                })(E(), g.Z.aboveTablet),
                S = m.ZP.a.withConfig({
                    componentId: "sc-f7c62c94-8"
                })(k()),
                B = function(n) {
                    var t = n.logo,
                        e = n.copyrightText,
                        a = n.links,
                        c = n.logos,
                        s = n.companyName,
                        l = n.address;
                    return (0, o.jsxs)(T, {
                        children: [c && (0, o.jsx)(O, {
                            children: (0, v.A)(c).map((function(n) {
                                return (0, i.createElement)("img", (0, u.Z)((0, r.Z)({}, n), {
                                    key: n.src
                                }))
                            }))
                        }), (0, o.jsx)(f.Z, {
                            href: "/",
                            children: (0, o.jsx)(I, (0, r.Z)({}, (0, v.n)(t)))
                        }), (0, o.jsxs)(z, {
                            children: [(0, o.jsx)(M, {
                                type: "content",
                                bold: !0,
                                children: s
                            }), (0, o.jsx)(p.Z, {
                                type: "content",
                                noMarginBottom: !0,
                                noMarginTop: !0,
                                children: l
                            })]
                        }), (0, o.jsx)(D, {
                            children: (0, o.jsxs)(N, {
                                children: [(0, o.jsx)(L, {
                                    children: e.replace("{{year}}", String((new Date).getFullYear()))
                                }), a && a.map((function(n) {
                                    var t = n.text,
                                        e = n.url,
                                        r = n.page;
                                    return (0, o.jsx)(d(), {
                                        href: e || r.data.attributes.slug || "#",
                                        passHref: !0,
                                        children: (0, o.jsx)(S, {
                                            children: t
                                        })
                                    }, t)
                                }))]
                            })
                        })]
                    })
                },
                H = e(94184),
                A = e.n(H),
                G = e(44740);

            function U() {
                return U = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, U.apply(this, arguments)
            }
            var V = function(n) {
                    return i.createElement("svg", U({
                        width: 24,
                        height: 24,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n), _ || (_ = i.createElement("path", {
                        fill: "#fff",
                        d: "M0 5h24v1H0zM0 11h24v1H0zM0 17h24v1H0z"
                    })))
                },
                R = e(60818),
                W = e(99534),
                F = e(75296);

            function $(n) {
                var t, e, r;
                return (null === n || void 0 === n || null === (t = n.page) || void 0 === t || null === (e = t.data) || void 0 === e || null === (r = e.attributes) || void 0 === r ? void 0 : r.slug) ? function(n, t) {
                    var e = [t, "homepage" === n ? "" : n].filter((function(n) {
                        return !!n
                    })).join("/");
                    return "/".concat(e)
                }(n.page.data.attributes.slug) : (null === n || void 0 === n ? void 0 : n.url) ? n.url : "#"
            }

            function Y() {
                var n = (0, h.Z)(["\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    font-weight: 300;\n    font-size: 22px;\n    white-space: nowrap;\n\n    ", " {\n        font-size: 16px;\n        font-weight: 400;\n    }\n    a {\n        text-decoration: none;\n    }\n    ", " {\n        margin: 28px 0px;\n    }\n"]);
                return Y = function() {
                    return n
                }, n
            }
            var q = m.ZP.div.withConfig({
                    componentId: "sc-e303b46c-0"
                })(Y(), g.Z.aboveTablet, g.Z.tablet),
                X = function(n) {
                    var t = n.link,
                        e = (0, i.useMemo)((function() {
                            return function(n) {
                                var t = (0, F.$9)((null === n || void 0 === n ? void 0 : n.target) || ""),
                                    e = {
                                        href: $(n),
                                        target: t
                                    };
                                return "_blank" === t && (e = (0, r.Z)({}, e, (0, F.pe)(t))), e
                            }(t)
                        }), [t]),
                        a = e.href,
                        c = (0, W.Z)(e, ["href"]);
                    return (0, o.jsx)(q, {
                        children: (0, o.jsx)(d(), (0, u.Z)((0, r.Z)({
                            href: a,
                            passHref: !0
                        }, c), {
                            children: (0, o.jsx)("a", (0, u.Z)((0, r.Z)({}, c), {
                                children: t.text
                            }))
                        }))
                    })
                };

            function K() {
                var n = (0, h.Z)(["\n    position: fixed;\n    z-index: 10;\n    top: 0;\n    width: 100%;\n    height: 80px;\n    background: linear-gradient(\n            180deg,\n            #000000 4px,\n            rgba(0, 0, 0, 0.744048) 32px,\n            rgba(0, 0, 0, 0) 80px\n        )\n        no-repeat;\n\n    ", " {\n        &.open {\n            overflow-y: auto;\n            height: 100vh;\n        }\n    }\n"]);
                return K = function() {
                    return n
                }, n
            }

            function J() {
                var n = (0, h.Z)(["\n    max-width: 1224px;\n    min-height: 100%;\n    margin: 0 auto;\n    display: flex;\n    position: relative;\n    padding: 16px 16px;\n\n    ", " {\n        box-sizing: content-box;\n        align-items: center;\n        justify-content: space-between;\n        padding: 16px 50px;\n        max-width: 100%;\n    }\n\n    ", " {\n        padding: 16px 100px;\n    }\n\n    ", " {\n        flex-direction: column;\n        pointer-events: none;\n\n        &::before {\n            content: '';\n            position: absolute;\n            z-index: -1;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            background: linear-gradient(224deg, #00031b 16%, #4e0138 86%);\n            background-repeat: no-repeat;\n            transform: translateY(-100%);\n            transition: transform ease-in-out 0.3s;\n        }\n\n        &.open {\n            pointer-events: all;\n            &::before {\n                transition-delay: 0.3s;\n                transform: translateY(0);\n            }\n        }\n    }\n"]);
                return J = function() {
                    return n
                }, n
            }

            function Q() {
                var n = (0, h.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    pointer-events: all;\n\n    img {\n        height: 48px;\n        max-height: 100%;\n        max-width: 100%;\n    }\n\n    ", " {\n        padding-right: 20px;\n\n        img {\n            height: 64px;\n        }\n    }\n"]);
                return Q = function() {
                    return n
                }, n
            }

            function nn() {
                var n = (0, h.Z)(["\n    background: none;\n    appearance: none;\n    padding: 0;\n    outline: 0;\n    border: 0;\n    width: 24px;\n    height: 24px;\n    display: block;\n    cursor: pointer;\n    margin-left: 20px;\n\n    ", " {\n        display: none;\n    }\n"]);
                return nn = function() {
                    return n
                }, n
            }

            function tn() {
                var n = (0, h.Z)(["\n    display: flex;\n\n    ", " {\n        flex-grow: 1;\n        flex-direction: column;\n        width: 100%;\n        padding: 20px 4px 40px;\n        transform: translateX(-100%);\n        transition: transform ease-in-out 0.2s;\n\n        &.open {\n            transition-delay: 0.3s;\n            transform: translateX(0);\n        }\n    }\n\n    ", " {\n        align-items: center;\n        flex-grow: 1;\n        justify-content: flex-end;\n        gap: 32px;\n    }\n"]);
                return tn = function() {
                    return n
                }, n
            }

            function en() {
                var n = (0, h.Z)(["\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    font-weight: 300;\n    font-size: 22px;\n    white-space: nowrap;\n    ", " {\n        font-size: 16px;\n        font-weight: 400;\n    }\n"]);
                return en = function() {
                    return n
                }, n
            }

            function rn() {
                var n = (0, h.Z)(["\n    padding: 0;\n    margin: 0;\n    flex-direction: column;\n    position: relative;\n    top: 14px;\n    left: 30px;\n    a {\n        display: block;\n    }\n\n    ", " {\n        display: flex;\n\n        a {\n            margin: 20px 0;\n        }\n        a {\n            margin: 0;\n        }\n    }\n\n    ", " {\n        position: absolute;\n        top: 20px;\n        padding-top: 15px;\n        background-clip: content-box;\n        display: none;\n        left: 50%;\n        transform: translateX(-50%);\n\n        &::after {\n            content: '';\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            border-radius: 20px;\n            background-color: black;\n            z-index: -1;\n        }\n\n        a {\n            margin: 10px 8px 0 8px;\n            padding: 15px;\n            border-radius: 16px;\n\n            &:first-child {\n                margin-bottom: 0;\n            }\n\n            &:hover {\n                background-color: rgba(216, 69, 148, 0.5);\n            }\n        }\n    }\n"]);
                return rn = function() {
                    return n
                }, n
            }

            function on() {
                var n = (0, h.Z)(["\n    padding: 0;\n    position: relative;\n\n    > ", " {\n        pointer-events: none;\n    }\n\n    ", " {\n        &:hover {\n            ", " {\n                display: flex;\n            }\n        }\n    }\n"]);
                return on = function() {
                    return n
                }, n
            }
            var an, cn = m.ZP.header.withConfig({
                    componentId: "sc-b935f6d8-0"
                })(K(), g.Z.tablet),
                sn = m.ZP.div.withConfig({
                    componentId: "sc-b935f6d8-1"
                })(J(), g.Z.aboveTablet, g.Z.aboveDesktop, g.Z.tablet),
                un = m.ZP.div.withConfig({
                    componentId: "sc-b935f6d8-2"
                })(Q(), g.Z.aboveTablet),
                ln = m.ZP.button.withConfig({
                    componentId: "sc-b935f6d8-3"
                })(nn(), g.Z.aboveTablet),
                dn = m.ZP.nav.withConfig({
                    componentId: "sc-b935f6d8-4"
                })(tn(), g.Z.tablet, g.Z.aboveTablet),
                fn = m.ZP.a.withConfig({
                    componentId: "sc-b935f6d8-5"
                })(en(), g.Z.aboveTablet),
                pn = m.ZP.ul.withConfig({
                    componentId: "sc-b935f6d8-6"
                })(rn(), g.Z.tablet, g.Z.aboveTablet),
                vn = m.ZP.ul.withConfig({
                    componentId: "sc-b935f6d8-7"
                })(on(), fn, g.Z.aboveTablet, pn),
                hn = i.memo(X),
                gn = function(n) {
                    var t = n.children;
                    return (0, o.jsx)(o.Fragment, {
                        children: t.map((function(n) {
                            return (0, o.jsx)(hn, {
                                link: n
                            }, n.text)
                        }))
                    })
                },
                mn = function(n) {
                    var t = n.children,
                        e = n.text;
                    return (0, o.jsxs)(vn, {
                        children: [(0, o.jsx)(fn, {
                            children: e
                        }), (0, o.jsx)(pn, {
                            children: (0, o.jsx)(gn, {
                                children: t
                            })
                        })]
                    })
                },
                xn = i.memo(X),
                bn = i.memo(mn),
                wn = function(n) {
                    var t = n.link;
                    return t.childrenLinks && t.childrenLinks.length > 0 ? (0, o.jsx)(bn, {
                        text: t.text,
                        children: t.childrenLinks
                    }, t.text) : (0, o.jsx)(xn, {
                        link: t
                    }, t.text)
                },
                Zn = function(n) {
                    var t = n.links;
                    return (0, o.jsx)(o.Fragment, {
                        children: t.map((function(n) {
                            return (0, o.jsx)(wn, {
                                link: n
                            }, n.text)
                        }))
                    })
                },
                jn = function(n) {
                    var t = n.logo,
                        e = n.links,
                        a = (0, i.useState)(!1),
                        c = a[0],
                        s = a[1];
                    return (0, o.jsx)(cn, {
                        className: A()(c && "open"),
                        children: (0, o.jsxs)(sn, {
                            className: A()(c && "open"),
                            onClick: function(n) {
                                var t, e, r;
                                return ("A" === (null === (t = n.target) || void 0 === t ? void 0 : t.tagName) || "A" === (null === (r = null === (e = n.target) || void 0 === e ? void 0 : e.parentNode) || void 0 === r ? void 0 : r.tagName)) && s(!1)
                            },
                            children: [(0, o.jsxs)(un, {
                                children: [(0, o.jsx)(f.Z, {
                                    href: G.Z.Homepage,
                                    children: t && (0, o.jsx)("img", (0, r.Z)({}, (0, v.n)(t)))
                                }), (0, o.jsx)(ln, {
                                    onClick: function() {
                                        return s((function(n) {
                                            return !n
                                        }))
                                    },
                                    children: c ? (0, o.jsx)(R.Z, {}) : (0, o.jsx)(V, {})
                                })]
                            }), (0, o.jsx)(dn, {
                                className: A()(c && "open"),
                                children: (0, o.jsx)(Zn, {
                                    links: e
                                })
                            })]
                        })
                    })
                },
                yn = e(29815);

            function Cn() {
                return Cn = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, Cn.apply(this, arguments)
            }
            var Pn, En, kn = function(n) {
                return i.createElement("svg", Cn({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 71 55",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), an || (an = i.createElement("path", {
                    d: "M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z",
                    fill: "currentColor"
                })))
            };

            function _n() {
                return _n = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, _n.apply(this, arguments)
            }
            var Tn, On, In = function(n) {
                return i.createElement("svg", _n({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Pn || (Pn = i.createElement("g", {
                    clipPath: "url(#logo-telegram_svg__a)"
                }, i.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.384 22.779a1.19 1.19 0 0 0 1.107.145 1.16 1.16 0 0 0 .724-.84C21.084 18 23.192 7.663 23.983 3.948a.78.78 0 0 0-.26-.758.8.8 0 0 0-.797-.14C18.733 4.602 5.82 9.447.542 11.4a.827.827 0 0 0-.542.799c.012.354.25.66.593.764 2.367.708 5.474 1.693 5.474 1.693s1.452 4.385 2.209 6.615c.095.28.314.5.603.576a.866.866 0 0 0 .81-.207l3.097-2.923s3.572 2.619 5.598 4.062Zm-11.01-8.677 1.679 5.538.373-3.507L19.61 6.947a.277.277 0 0 0 .033-.377.284.284 0 0 0-.376-.064L7.374 14.102Z",
                    fill: "currentColor"
                }))), En || (En = i.createElement("defs", null, i.createElement("clipPath", {
                    id: "logo-telegram_svg__a"
                }, i.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h24v24H0z"
                })))))
            };

            function zn() {
                return zn = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, zn.apply(this, arguments)
            }
            var Mn, Dn, Nn = function(n) {
                return i.createElement("svg", zn({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Tn || (Tn = i.createElement("g", {
                    fill: "currentColor",
                    clipPath: "url(#logo-telegram-news_svg__a)"
                }, i.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.235 16.415c.273.19.625.236.94.12a.97.97 0 0 0 .614-.697c.737-3.39 2.525-11.968 3.196-15.051a.64.64 0 0 0-.22-.63.691.691 0 0 0-.676-.115C19.53 1.33 8.576 5.35 4.098 6.972a.686.686 0 0 0-.46.662.69.69 0 0 0 .503.635c2.008.587 4.644 1.405 4.644 1.405s1.232 3.639 1.874 5.49a.737.737 0 0 0 1.2.306l2.627-2.426s3.03 2.173 4.75 3.371Zm-9.34-7.201 1.424 4.596.316-2.91 8.641-7.624a.227.227 0 0 0 .028-.313.245.245 0 0 0-.319-.053L9.895 9.214Z"
                }), i.createElement("path", {
                    d: "M0 23.86h1.325v-3.044c.217-.29.51-.476.87-.476.445 0 .776.308.776.803v2.717h1.325v-3.044c0-1.083-.823-1.671-1.694-1.671-.587 0-1.003.224-1.296.514v-.365H0v4.566ZM7.489 24c.927 0 1.476-.243 1.901-.514v-1.13c-.605.393-1.135.561-1.76.561-.577 0-1.163-.346-1.192-.971h3.274c.01-.075.02-.27.02-.383 0-1.41-.834-2.418-2.3-2.418-1.325 0-2.375.962-2.375 2.4C5.057 23.121 6.155 24 7.489 24Zm-1.022-2.932c.028-.41.388-.84.965-.84.634 0 .937.41.965.84h-1.93ZM11.369 23.86l1.636.01.852-2.914.87 2.904 1.628.01 1.325-4.576H16.24l-.756 3.128-.966-3.128h-1.315l-.974 3.128-.757-3.128h-1.457l1.353 4.566ZM19.817 24c1.286 0 2.015-.635 2.015-1.531 0-.794-.464-1.223-1.41-1.4l-.51-.103c-.266-.056-.417-.168-.417-.327 0-.206.18-.355.596-.355.492 0 1.07.15 1.523.355v-1.186a3.91 3.91 0 0 0-1.514-.308c-1.258 0-1.901.672-1.901 1.494 0 .878.586 1.251 1.296 1.382l.53.102c.303.056.426.187.426.355 0 .243-.218.374-.616.374-.444 0-1.088-.16-1.627-.42v1.25c.398.15.975.318 1.609.318Z"
                }))), On || (On = i.createElement("defs", null, i.createElement("clipPath", {
                    id: "logo-telegram-news_svg__a"
                }, i.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h24v24H0z"
                })))))
            };

            function Ln() {
                return Ln = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, Ln.apply(this, arguments)
            }
            var Sn, Bn, Hn = function(n) {
                return i.createElement("svg", Ln({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Mn || (Mn = i.createElement("g", {
                    clipPath: "url(#logo-twitter_svg__a)"
                }, i.createElement("path", {
                    d: "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557Z",
                    fill: "currentColor"
                }))), Dn || (Dn = i.createElement("defs", null, i.createElement("clipPath", {
                    id: "logo-twitter_svg__a"
                }, i.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h24v24H0z"
                })))))
            };

            function An() {
                return An = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, An.apply(this, arguments)
            }
            var Gn, Un = function(n) {
                return i.createElement("svg", An({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Sn || (Sn = i.createElement("g", {
                    clipPath: "url(#logo-linkedin_svg__a)"
                }, i.createElement("path", {
                    d: "M4.98 3.609c0 1.44-1.11 2.608-2.48 2.608C1.13 6.217.02 5.05.02 3.61.02 2.169 1.13 1 2.5 1c1.37 0 2.48 1.169 2.48 2.609ZM5 8.304H0V25h5V8.304Zm7.982 0H8.014V25h4.969v-8.764c0-4.873 6.029-5.272 6.029 0V25H24V14.428c0-8.222-8.922-7.923-11.018-3.875V8.304Z",
                    fill: "currentColor"
                }))), Bn || (Bn = i.createElement("defs", null, i.createElement("clipPath", {
                    id: "logo-linkedin_svg__a"
                }, i.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h24v24H0z"
                })))))
            };

            function Vn() {
                return Vn = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, Vn.apply(this, arguments)
            }
            var Rn, Wn, Fn = function(n) {
                return i.createElement("svg", Vn({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Gn || (Gn = i.createElement("path", {
                    d: "M12 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228-.218.56-.478.96-.898 1.38-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.053-1.805-.249-2.228-.413a3.718 3.718 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.053-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07ZM12 0C8.74 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 0 0-2.126 1.384A5.882 5.882 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12c0 3.26.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.88 5.88 0 0 0 4.14 23.37c.763.297 1.635.5 2.912.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.059 2.15-.261 2.912-.558a5.88 5.88 0 0 0 2.126-1.384 5.883 5.883 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.277-.261-2.15-.558-2.912a5.883 5.883 0 0 0-1.384-2.126A5.882 5.882 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
                    fill: "currentColor"
                })))
            };

            function $n() {
                return $n = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, $n.apply(this, arguments)
            }
            var Yn, qn = function(n) {
                return i.createElement("svg", $n({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Rn || (Rn = i.createElement("g", {
                    clipPath: "url(#logo-youtube_svg__a)"
                }, i.createElement("path", {
                    d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816ZM9 16V8l8 3.993L9 16Z",
                    fill: "currentColor"
                }))), Wn || (Wn = i.createElement("defs", null, i.createElement("clipPath", {
                    id: "logo-youtube_svg__a"
                }, i.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h24v24H0z"
                })))))
            };

            function Xn() {
                return Xn = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, Xn.apply(this, arguments)
            }
            var Kn = function(n) {
                return i.createElement("svg", Xn({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Yn || (Yn = i.createElement("path", {
                    d: "M16.464 1c-1.941 0-3.535 1.605-3.535 3.559 0 .477.099.937.27 1.355L7.957 9.422a3.503 3.503 0 0 0-2.42-.98C3.594 8.441 2 10.045 2 12c0 1.954 1.594 3.559 3.536 3.559.943 0 1.794-.378 2.43-.991l5.234 3.518c-.175.42-.271.875-.271 1.355 0 1.954 1.594 3.559 3.535 3.559C18.406 23 20 21.395 20 19.441c0-1.954-1.594-3.559-3.536-3.559a3.48 3.48 0 0 0-2.059.688l-5.454-3.66a3.51 3.51 0 0 0 0-1.83l5.434-3.65a3.476 3.476 0 0 0 2.08.688c1.94 0 3.535-1.605 3.535-3.56C20 2.606 18.406 1 16.464 1Zm0 1.941c.9 0 1.607.713 1.607 1.618 0 .905-.708 1.617-1.607 1.617a1.598 1.598 0 0 1-1.607-1.617c0-.905.708-1.618 1.607-1.618ZM5.536 10.382c.899 0 1.607.713 1.607 1.618 0 .905-.708 1.618-1.607 1.618A1.598 1.598 0 0 1 3.929 12c0-.905.708-1.618 1.607-1.618Zm10.928 7.441c.9 0 1.607.713 1.607 1.618 0 .905-.708 1.618-1.607 1.618a1.598 1.598 0 0 1-1.607-1.618c0-.905.708-1.617 1.607-1.617Z",
                    fill: "#EE4492"
                })))
            };

            function Jn() {
                var n = (0, h.Z)(["\n    display: flex;\n    flex-direction: column-reverse;\n    position: fixed;\n    right: 10px;\n    z-index: 10;\n    bottom: 265px;\n\n    ", " {\n        bottom: 320px;\n    }\n\n    ", " {\n        bottom: calc(10% + 250px);\n    }\n\n    a {\n        cursor: pointer;\n        margin-bottom: 15px;\n        opacity: ", ";\n        pointer-events: ", ";\n        color: #ee4492;\n        transition: opacity 0.2s 0.15s ease-in-out, color 0.3s ease-in-out;\n\n        ", " {\n            opacity: 1;\n            pointer-events: all;\n            color: rgba(238, 68, 146, 0.5);\n\n            &:hover {\n                color: #ee4492;\n            }\n        }\n    }\n\n    button {\n        background: none;\n        padding: 0;\n        margin: 0;\n        border: 0;\n        margin-bottom: 20px;\n        transform: ", ";\n        transition: transform 0.2s ease-in-out;\n\n        ", " {\n            display: none;\n        }\n    }\n"]);
                return Jn = function() {
                    return n
                }, n
            }
            var Qn, nt, tt = m.ZP.div.withConfig({
                    componentId: "sc-8933ded9-0"
                })(Jn(), g.Z.abovePhone, g.Z.aboveTablet, (function(n) {
                    return n.expand ? 1 : 0
                }), (function(n) {
                    return n.expand ? "all" : "none"
                }), g.Z.aboveTablet, (function(n) {
                    return n.expand ? "rotate(180deg)" : "none"
                }), g.Z.aboveTablet),
                et = [{
                    url: "https://discord.gg/everdome",
                    icon: (0, o.jsx)(kn, {})
                }, {
                    url: "https://t.me/everdome",
                    icon: (0, o.jsx)(In, {})
                }, {
                    url: "https://t.me/everdome_io_news",
                    icon: (0, o.jsx)(Nn, {})
                }, {
                    url: "https://twitter.com/Everdome_io",
                    icon: (0, o.jsx)(Hn, {})
                }, {
                    url: "https://www.linkedin.com/company/everdome-io",
                    icon: (0, o.jsx)(Un, {})
                }, {
                    url: "https://www.instagram.com/everdome.ig",
                    icon: (0, o.jsx)(Fn, {})
                }, {
                    url: "https://www.youtube.com/@EverdomeYT",
                    icon: (0, o.jsx)(qn, {})
                }],
                rt = function() {
                    var n = (0, i.useState)(!1),
                        t = n[0],
                        e = n[1];
                    return (0, o.jsxs)(tt, {
                        expand: t,
                        children: [(0, o.jsx)("button", {
                            onClick: function() {
                                return e(!t)
                            },
                            children: (0, o.jsx)(Kn, {})
                        }), (0, yn.Z)(et).reverse().map((function(n) {
                            var t = n.url,
                                e = n.icon;
                            return (0, o.jsx)("a", {
                                href: t,
                                target: "_blank",
                                rel: "noreferrer",
                                children: e
                            }, t)
                        }))]
                    })
                },
                ot = e(77994),
                it = e(48882),
                at = e(46768),
                ct = e(60370);

            function st() {
                return st = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }, st.apply(this, arguments)
            }
            var ut = function(n) {
                return i.createElement("svg", st({
                    viewBox: "0 0 100 100",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Qn || (Qn = i.createElement("path", {
                    d: "M98.804 43.486v-.001c.402-1.137.356-2.514-.133-4.134-.488-1.62-1.42-3.488-2.797-5.611-2.754-4.247-7.298-9.524-13.666-15.893l-.053.053.053-.053C75.818 11.461 70.52 6.904 66.254 4.14c-2.133-1.382-4.011-2.317-5.64-2.808-1.63-.491-3.017-.539-4.163-.138-2.177.761-3.48 3.178-4.361 6.437-.883 3.265-1.35 7.407-1.83 11.661-.492 4.376-1.017 9.038-2.06 13.246-1.044 4.21-2.602 7.956-5.154 10.509-2.553 2.552-6.3 4.11-10.509 5.154-4.208 1.043-8.87 1.568-13.245 2.061l.008.075-.008-.075c-4.25.48-8.392.948-11.658 1.831-3.26.882-5.679 2.185-6.44 4.358-.4 1.146-.353 2.533.138 4.163.49 1.63 1.426 3.507 2.808 5.64 2.764 4.265 7.322 9.562 13.709 15.948 6.367 6.369 11.644 10.912 15.89 13.667 2.123 1.378 3.991 2.31 5.611 2.8 1.62.49 2.997.537 4.134.138 2.163-.763 3.448-3.19 4.31-6.46.861-3.274 1.305-7.426 1.761-11.688v-.003c.472-4.414.976-9.117 2.005-13.36 1.03-4.243 2.582-8.017 5.147-10.58 2.565-2.563 6.338-4.115 10.581-5.144 4.235-1.027 8.927-1.531 13.335-2.005l.023-.002.09-.01c3.597-.39 7.113-.77 10.084-1.402 2.992-.636 5.447-1.53 6.875-2.959a4.548 4.548 0 0 0 1.11-1.708Z",
                    stroke: "url(#bow_svg__a)",
                    vectorEffect: "non-scaling-stroke",
                    strokeWidth: 3
                })), nt || (nt = i.createElement("defs", null, i.createElement("linearGradient", {
                    id: "bow_svg__a",
                    x1: 82.184,
                    y1: 17.78,
                    x2: 17.777,
                    y2: 82.186,
                    gradientUnits: "userSpaceOnUse"
                }, i.createElement("stop", {
                    stopColor: "#574EA0"
                }), i.createElement("stop", {
                    offset: 1,
                    stopColor: "#D84594"
                })))))
            };

            function lt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    z-index: -1;\n"]);
                return lt = function() {
                    return n
                }, n
            }

            function dt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    z-index: -1;\n    --size: 500px;\n    width: var(--size);\n    height: var(--size);\n\n    ", " {\n        --size: 1900px;\n    }\n"]);
                return dt = function() {
                    return n
                }, n
            }

            function ft() {
                var n = (0, h.Z)(["\n    left: -250px;\n    bottom: -210px;\n    transform: rotate(120deg);\n\n    ", " {\n        left: -780px;\n        bottom: -1200px;\n    }\n"]);
                return ft = function() {
                    return n
                }, n
            }

            function pt() {
                var n = (0, h.Z)(["\n    left: -250px;\n    bottom: -200px;\n    transform: rotate(-75deg);\n\n    ", " {\n        left: -680px;\n        bottom: -1160px;\n    }\n"]);
                return pt = function() {
                    return n
                }, n
            }

            function vt() {
                var n = (0, h.Z)(["\n    right: -250px;\n    bottom: -350px;\n    transform: rotate(150deg);\n\n    ", " {\n        left: 25%;\n        bottom: -1600px;\n    }\n\n    ", " {\n        left: 35%;\n    }\n"]);
                return vt = function() {
                    return n
                }, n
            }
            var ht = m.ZP.div.withConfig({
                    componentId: "sc-4cf4c045-0"
                })(lt()),
                gt = (0, m.ZP)(ut).withConfig({
                    componentId: "sc-4cf4c045-1"
                })(dt(), g.Z.aboveTablet),
                mt = (0, m.ZP)(gt).withConfig({
                    componentId: "sc-4cf4c045-2"
                })(ft(), g.Z.aboveTablet),
                xt = (0, m.ZP)(gt).withConfig({
                    componentId: "sc-4cf4c045-3"
                })(pt(), g.Z.aboveTablet),
                bt = (0, m.ZP)(gt).withConfig({
                    componentId: "sc-4cf4c045-4"
                })(vt(), g.Z.aboveTablet, g.Z.aboveBigDesktop),
                wt = function() {
                    return (0, o.jsxs)(ht, {
                        children: [(0, o.jsx)(mt, {}), (0, o.jsx)(xt, {}), (0, o.jsx)(bt, {})]
                    })
                },
                Zt = e(12150);

            function jt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    z-index: -1;\n"]);
                return jt = function() {
                    return n
                }, n
            }

            function yt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    z-index: -1;\n    --size: 500px;\n    width: var(--size);\n    height: var(--size);\n\n    ", " {\n        --size: 1900px;\n    }\n"]);
                return yt = function() {
                    return n
                }, n
            }

            function Ct() {
                var n = (0, h.Z)(["\n    left: -250px;\n    bottom: -410px;\n    transform: rotate(120deg);\n    z-index: 1;\n\n    ", " {\n        left: -780px;\n        bottom: -1650px;\n    }\n"]);
                return Ct = function() {
                    return n
                }, n
            }

            function Pt() {
                var n = (0, h.Z)(["\n    left: -250px;\n    bottom: -400px;\n    transform: rotate(-75deg);\n    z-index: 2;\n\n    ", " {\n        left: -660px;\n        bottom: -1620px;\n    }\n"]);
                return Pt = function() {
                    return n
                }, n
            }

            function Et() {
                var n = (0, h.Z)(["\n    position: absolute;\n    top: -290px;\n    left: -440px;\n"]);
                return Et = function() {
                    return n
                }, n
            }

            function kt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    bottom: -260px;\n    right: -460px;\n"]);
                return kt = function() {
                    return n
                }, n
            }
            var _t = m.ZP.div.withConfig({
                    componentId: "sc-5d74106a-0"
                })(jt()),
                Tt = (0, m.ZP)(ut).withConfig({
                    componentId: "sc-5d74106a-1"
                })(yt(), g.Z.aboveTablet),
                Ot = (0, m.ZP)(Tt).withConfig({
                    componentId: "sc-5d74106a-2"
                })(Ct(), g.Z.aboveTablet),
                It = (0, m.ZP)(Tt).withConfig({
                    componentId: "sc-5d74106a-3"
                })(Pt(), g.Z.aboveTablet),
                zt = (0, m.ZP)(Zt.Z).withConfig({
                    componentId: "sc-5d74106a-4"
                })(Et()),
                Mt = (0, m.ZP)(Zt.Z).withConfig({
                    componentId: "sc-5d74106a-5"
                })(kt()),
                Dt = function() {
                    return (0, o.jsxs)(_t, {
                        children: [(0, o.jsx)(zt, {}), (0, o.jsx)(Ot, {}), (0, o.jsx)(It, {}), (0, o.jsx)(Mt, {}), (0, o.jsx)(Mt, {})]
                    })
                },
                Nt = e(80871);

            function Lt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    z-index: -1;\n"]);
                return Lt = function() {
                    return n
                }, n
            }

            function St() {
                var n = (0, h.Z)(["\n    background: radial-gradient(\n        68.83% 68.83% at 34.39% 0%,\n        rgba(255, 0, 153, 0.9) 0%,\n        rgba(164, 132, 255, 0.5) 55.5%,\n        rgba(72, 5, 139, 0) 100%\n    );\n    opacity: 0.2;\n    position: absolute;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: -1;\n"]);
                return St = function() {
                    return n
                }, n
            }

            function Bt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: -1;\n\n    div {\n        height: 300px;\n        width: 100vw;\n        position: absolute;\n        top: 0;\n        overflow: hidden;\n\n        ", " {\n            height: 500px;\n        }\n    }\n\n    canvas {\n        position: relative !important;\n        z-index: 2;\n    }\n"]);
                return Bt = function() {
                    return n
                }, n
            }
            var Ht = m.ZP.div.withConfig({
                    componentId: "sc-dd3f248c-0"
                })(Lt()),
                At = m.ZP.div.withConfig({
                    componentId: "sc-dd3f248c-1"
                })(St()),
                Gt = m.ZP.div.withConfig({
                    componentId: "sc-dd3f248c-2"
                })(Bt(), g.Z.aboveTablet),
                Ut = function() {
                    return (0, o.jsxs)(Ht, {
                        children: [(0, o.jsx)(At, {}), (0, o.jsx)(Gt, {
                            children: (0, o.jsx)(Nt.Z, {
                                options: {
                                    fullScreen: !1,
                                    particles: {
                                        number: {
                                            value: 5e3,
                                            density: {
                                                enable: !0,
                                                value_area: 789.1476416322727
                                            }
                                        },
                                        color: {
                                            value: ["#ffffff", "#625376", "#195A79", "#0D103C", "#226672"]
                                        },
                                        shape: {
                                            type: "circle",
                                            stroke: {
                                                width: 0,
                                                color: "#000000"
                                            },
                                            polygon: {
                                                nb_sides: 5
                                            }
                                        },
                                        opacity: {
                                            value: .2,
                                            random: !0,
                                            anim: {
                                                enable: !0,
                                                speed: .2,
                                                opacity_min: 0,
                                                sync: !1
                                            }
                                        },
                                        size: {
                                            value: 2,
                                            random: !0,
                                            anim: {
                                                enable: !0,
                                                speed: 2,
                                                size_min: 0,
                                                sync: !1
                                            }
                                        },
                                        line_linked: {
                                            enable: !1,
                                            distance: 150,
                                            color: "#ffffff",
                                            opacity: .4,
                                            width: 1
                                        },
                                        move: {
                                            enable: !0,
                                            speed: .2,
                                            direction: "none",
                                            random: !0,
                                            straight: !1,
                                            out_mode: "out",
                                            bounce: !1,
                                            attract: {
                                                enable: !1,
                                                rotateX: 600,
                                                rotateY: 1200
                                            }
                                        }
                                    },
                                    interactivity: {
                                        detect_on: "canvas",
                                        events: {
                                            onhover: {
                                                enable: !0,
                                                mode: "bubble"
                                            },
                                            onclick: {
                                                enable: !0,
                                                mode: "push"
                                            },
                                            resize: !0
                                        },
                                        modes: {
                                            grab: {
                                                distance: 400,
                                                line_linked: {
                                                    opacity: 1
                                                }
                                            },
                                            bubble: {
                                                distance: 83.91608391608392,
                                                size: 1,
                                                duration: 3,
                                                opacity: 1
                                            },
                                            repulse: {
                                                distance: 200,
                                                duration: .4
                                            },
                                            push: {
                                                particles_nb: 4
                                            },
                                            remove: {
                                                particles_nb: 2
                                            }
                                        }
                                    },
                                    retina_detect: !0
                                }
                            })
                        }), (0, o.jsx)(mt, {}), (0, o.jsx)(xt, {}), (0, o.jsx)(bt, {})]
                    })
                };

            function Vt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    z-index: -1;\n"]);
                return Vt = function() {
                    return n
                }, n
            }

            function Rt() {
                var n = (0, h.Z)(["\n    width: 1920px;\n    height: 536px;\n    position: absolute;\n\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n\n    z-index: -1;\n    background: url('/assets/icons/news-wave.svg') no-repeat top center;\n    background-size: contain;\n"]);
                return Rt = function() {
                    return n
                }, n
            }

            function Wt() {
                var n = (0, h.Z)(["\n    position: absolute;\n    z-index: -1;\n    --size: 500px;\n    width: var(--size);\n    height: var(--size);\n\n    ", " {\n        --size: 1900px;\n    }\n"]);
                return Wt = function() {
                    return n
                }, n
            }

            function Ft() {
                var n = (0, h.Z)(["\n    left: -250px;\n    bottom: -210px;\n    transform: rotate(120deg);\n\n    ", " {\n        left: -780px;\n        bottom: -1200px;\n    }\n"]);
                return Ft = function() {
                    return n
                }, n
            }

            function $t() {
                var n = (0, h.Z)(["\n    left: -250px;\n    bottom: -200px;\n    transform: rotate(-75deg);\n\n    ", " {\n        left: -680px;\n        bottom: -1160px;\n    }\n"]);
                return $t = function() {
                    return n
                }, n
            }

            function Yt() {
                var n = (0, h.Z)(["\n    right: -250px;\n    bottom: -350px;\n    transform: rotate(150deg);\n\n    ", " {\n        left: 25%;\n        bottom: -1600px;\n    }\n\n    ", " {\n        left: 35%;\n    }\n"]);
                return Yt = function() {
                    return n
                }, n
            }
            var qt = m.ZP.div.withConfig({
                    componentId: "sc-db1369a9-0"
                })(Vt()),
                Xt = m.ZP.div.withConfig({
                    componentId: "sc-db1369a9-1"
                })(Rt()),
                Kt = (0, m.ZP)(ut).withConfig({
                    componentId: "sc-db1369a9-2"
                })(Wt(), g.Z.aboveTablet),
                Jt = (0, m.ZP)(Kt).withConfig({
                    componentId: "sc-db1369a9-3"
                })(Ft(), g.Z.aboveTablet),
                Qt = (0, m.ZP)(Kt).withConfig({
                    componentId: "sc-db1369a9-4"
                })($t(), g.Z.aboveTablet),
                ne = (0, m.ZP)(Kt).withConfig({
                    componentId: "sc-db1369a9-5"
                })(Yt(), g.Z.aboveTablet, g.Z.aboveBigDesktop),
                te = function() {
                    return (0, o.jsxs)(qt, {
                        children: [(0, o.jsx)(Xt, {}), (0, o.jsx)(Jt, {}), (0, o.jsx)(Qt, {}), (0, o.jsx)(ne, {})]
                    })
                };

            function ee() {
                var n = (0, h.Z)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    overflow: hidden;\n"]);
                return ee = function() {
                    return n
                }, n
            }
            var re = m.ZP.div.withConfig({
                    componentId: "sc-b0828f1d-0"
                })(ee()),
                oe = function() {
                    return (0, o.jsxs)(re, {
                        children: [(0, o.jsx)(mt, {}), (0, o.jsx)(xt, {}), (0, o.jsx)(bt, {})]
                    })
                },
                ie = function(n) {
                    switch (n.type) {
                        case ct.$D.homepage:
                            return (0, o.jsx)(wt, {});
                        case ct.$D.team:
                            return (0, o.jsx)(Dt, {});
                        case ct.$D.stars:
                            return (0, o.jsx)(Ut, {});
                        case ct.$D.news:
                            return (0, o.jsx)(te, {});
                        case ct.$D.nft:
                            return (0, o.jsx)(oe, {});
                        default:
                            return null
                    }
                },
                ae = e(9008),
                ce = e.n(ae),
                se = e(9257),
                ue = e(16939),
                le = "/_next/static/media/poster.0f4e0589.png",
                de = function(n) {
                    var t = n.seo,
                        e = (0, se.$G)("common").t,
                        r = (0, i.useMemo)((function() {
                            var n, r = function(n) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                                return t && t[n] ? t[n] : e
                            };
                            return {
                                pageTitle: r("title", e("appName")),
                                pageDescription: r("description", e("appName")),
                                pagePoster: (null === (n = (0, v.n)(r("poster"))) || void 0 === n ? void 0 : n.src) || "".concat("https://everdome.io/api".replace("/api", "")).concat(le)
                            }
                        }), [t]),
                        a = r.pageTitle,
                        c = r.pageDescription,
                        s = r.pagePoster;
                    return (0, o.jsxs)(ce(), {
                        children: [(0, o.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, o.jsx)("title", {
                            children: a
                        }), (0, o.jsx)("meta", {
                            name: "referrer",
                            content: "origin"
                        }), (0, o.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width,initial-scale=1"
                        }), (0, o.jsxs)(ue.If, {
                            condition: c,
                            children: [(0, o.jsx)("meta", {
                                name: "description",
                                content: c
                            }), (0, o.jsx)("meta", {
                                property: "og:description",
                                content: c
                            })]
                        }), (0, o.jsx)("meta", {
                            property: "og:title",
                            content: a
                        }), (0, o.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, o.jsx)("meta", {
                            property: "og:image",
                            content: s
                        }), (0, o.jsx)("meta", {
                            name: "apple-mobile-web-app-status-bar-style",
                            content: "black-translucent"
                        }), (0, o.jsx)("meta", {
                            name: "theme-color",
                            content: "#000000"
                        }), (0, o.jsxs)(ue.If, {
                            condition: "G-N5BVDZ2E9D",
                            children: [(0, o.jsx)("script", {
                                async: !0,
                                src: "https://www.googletagmanager.com/gtag/js?id=".concat("G-N5BVDZ2E9D")
                            }), (0, o.jsx)("script", {
                                dangerouslySetInnerHTML: {
                                    __html: "\n                    window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '".concat("G-N5BVDZ2E9D", "');\n                    ")
                                }
                            })]
                        })]
                    })
                };

            function fe() {
                var n = (0, h.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    max-width: 100%;\n    min-height: 100vh;\n    position: relative;\n\n    ", " {\n        overflow: hidden;\n    }\n"]);
                return fe = function() {
                    return n
                }, n
            }

            function pe() {
                var n = (0, h.Z)(["\n    #staking-modal.open ~ & {\n        filter: brightness(0.1);\n        pointer-events: none;\n    }\n"]);
                return pe = function() {
                    return n
                }, n
            }
            var ve = m.ZP.div.withConfig({
                    componentId: "sc-7dd06286-0"
                })(fe(), g.Z.tablet),
                he = m.ZP.div.withConfig({
                    componentId: "sc-7dd06286-1"
                })(pe()),
                ge = function(n) {
                    var t = n.background,
                        e = n.menu,
                        a = n.footer,
                        u = n.seo,
                        l = n.children;
                    return (0, i.useEffect)((function() {
                        c().initialize({
                            gtmId: "G-N5BVDZ2E9D",
                            dataLayer: [
                                ["js", new Date],
                                ["config", "G-N5BVDZ2E9D"]
                            ]
                        })
                    }), []), (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(de, {
                            seo: u
                        }), (0, o.jsx)(ve, {
                            children: (0, o.jsx)(at.e, {
                                children: (0, o.jsxs)(ot.G, {
                                    children: [e && (0, o.jsx)(jn, (0, r.Z)({}, e.data.attributes)), (0, o.jsx)(rt, {}), (0, o.jsx)("div", {
                                        id: it.D.STAKE_MODAL
                                    }), (0, o.jsx)("div", {
                                        id: it.D.SWITCH_NETWORK
                                    }), (0, o.jsx)("div", {
                                        id: it.D.CONNECT_WALLET
                                    }), (0, o.jsx)(he, {
                                        children: l && l
                                    }), a && (0, o.jsx)(B, (0, r.Z)({}, a.data.attributes)), (0, o.jsx)(s.Ix, {
                                        position: "top-center",
                                        autoClose: 5e3,
                                        hideProgressBar: !1,
                                        newestOnTop: !1,
                                        closeOnClick: !0,
                                        rtl: !1,
                                        pauseOnFocusLoss: !0,
                                        draggable: !0,
                                        pauseOnHover: !0,
                                        theme: "dark"
                                    }), (0, o.jsx)(ie, {
                                        type: t
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        25432: function(n, t) {
            "use strict";
            var e = function(n) {
                    return "@media only screen and (max-width: ".concat(n, "px)")
                },
                r = function(n) {
                    return "@media only screen and (min-width: ".concat(n + 1, "px)")
                },
                o = {
                    desktopM: e(1400),
                    desktopM2: e(1400),
                    tablet: e(1088),
                    phone: e(768),
                    phoneS: e(576),
                    abovePhoneS: r(576),
                    abovePhone: r(768),
                    aboveTablet: r(1088),
                    aboveDesktop: r(1400),
                    aboveBigDesktop: r(1700)
                };
            t.Z = o
        },
        48882: function(n, t, e) {
            "use strict";
            var r;
            e.d(t, {
                    D: function() {
                        return r
                    }
                }),
                function(n) {
                    n.CONNECT_WALLET = "connect-wallet-modal", n.SWITCH_NETWORK = "switch-network", n.STAKE_MODAL = "staking-modal"
                }(r || (r = {}))
        },
        16121: function(n, t, e) {
            "use strict";
            var r;
            e.d(t, {
                    M: function() {
                        return r
                    }
                }),
                function(n) {
                    n.Leaderboard = "/leaderboard", n.NFT_GENESIS = "/nft/genesis", n.DOME_USD_PRICE = "/v2/price/dome"
                }(r || (r = {}))
        },
        44740: function(n, t, e) {
            "use strict";
            var r;
            e.d(t, {
                    Z: function() {
                        return r
                    }
                }),
                function(n) {
                    n.Homepage = "/", n.Dome = "/dome", n.DomeEstate = "/dome-estate", n.Gateway = "/gateway", n.Tokenomics = "/tokenomics", n.Team = "/team", n.Whitepaper = "/whitepaper", n.Terms = "/terms", n.PrivacyPolicy = "/privacy-policy", n.NewsList = "/news", n.News = "/news/[slug]", n.Error404 = "/404-not-found"
                }(r || (r = {}))
        },
        60370: function(n, t, e) {
            "use strict";
            var r, o, i, a, c, s, u;
            e.d(t, {
                    $D: function() {
                        return u
                    },
                    fL: function() {
                        return s
                    },
                    tP: function() {
                        return i
                    },
                    zU: function() {
                        return c
                    }
                }),
                function(n) {
                    n.blank = "blank", n.parent = "parent", n.self = "self", n.top = "top"
                }(r || (r = {})),
                function(n) {
                    n.blank = "blank", n.parent = "parent", n.self = "self", n.top = "top"
                }(o || (o = {})),
                function(n) {
                    n.icon = "icon", n.label = "label"
                }(i || (i = {})),
                function(n) {
                    n.done = "done", n.progress = "progress"
                }(a || (a = {})),
                function(n) {
                    n.presale = "presale", n.vesting = "vesting"
                }(c || (c = {})),
                function(n) {
                    n.hero = "hero", n.private = "private", n.tenset = "tenset"
                }(s || (s = {})),
                function(n) {
                    n.gradient = "gradient", n.homepage = "homepage", n.news = "news", n.nft = "nft", n.stars = "stars", n.team = "team"
                }(u || (u = {}))
        },
        46768: function(n, t, e) {
            "use strict";
            e.d(t, {
                e: function() {
                    return v
                },
                b: function() {
                    return h
                }
            });
            var r = e(85893),
                o = e(67294),
                i = e(47568),
                a = e(34051),
                c = e.n(a),
                s = e(93098),
                u = e(65102),
                l = e(16121);
            var d = e(6343),
                f = function() {
                    var n = (0, o.useState)(void 0),
                        t = n[0],
                        e = n[1],
                        r = (0, s.O)(),
                        a = function() {
                            var n = (0, u.Z)().apiGet;
                            return function() {
                                return n(l.M.DOME_USD_PRICE, {
                                    baseUrl: "https://api.everdome.io"
                                })
                            }
                        }();
                    return (0, o.useEffect)((function() {
                        function n() {
                            return (n = (0, i.Z)(c().mark((function n() {
                                var t;
                                return c().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, a();
                                        case 3:
                                            t = n.sent, e(parseFloat(t.usd)), n.next = 10;
                                            break;
                                        case 7:
                                            n.prev = 7, n.t0 = n.catch(0), (0, d.UW)(n.t0.message);
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 7]
                                ])
                            })))).apply(this, arguments)
                        }! function() {
                            n.apply(this, arguments)
                        }()
                    }), [a, r]), t
                },
                p = (0, o.createContext)({
                    domePrice: void 0
                }),
                v = function(n) {
                    var t = n.children,
                        e = f();
                    return (0, r.jsx)(p.Provider, {
                        value: {
                            domePrice: e
                        },
                        children: t
                    })
                },
                h = function() {
                    return (0, o.useContext)(p)
                }
        },
        77994: function(n, t, e) {
            "use strict";
            e.d(t, {
                G: function() {
                    return a
                },
                T: function() {
                    return c
                }
            });
            var r = e(85893),
                o = e(67294),
                i = (0, o.createContext)({
                    content: void 0,
                    setContent: function() {}
                }),
                a = function(n) {
                    var t = n.children,
                        e = (0, o.useState)(void 0),
                        a = e[0],
                        c = e[1];
                    return (0, r.jsx)(i.Provider, {
                        value: {
                            content: a,
                            setContent: c
                        },
                        children: t
                    })
                },
                c = function() {
                    return (0, o.useContext)(i)
                }
        },
        6343: function(n, t, e) {
            "use strict";
            e.d(t, {
                UW: function() {
                    return a
                },
                ZP: function() {
                    return i
                }
            });
            var r = e(26042),
                o = e(72132);

            function i(n) {
                if (n.includes('"message":')) {
                    var t = JSON.parse(n);
                    if (null === t || void 0 === t ? void 0 : t.message) return t.message
                }
                switch (n) {
                    case "execution reverted: no-tokens-left-to-buy":
                        return "You bought max amount of tokens";
                    case "execution reverted: too-little-tokens-holded":
                        return "It appears you've sold HERO during the holding period, which has removed your address from the whitelist.";
                    case "execution reverted: no-funds-end":
                        return "You cannot send transaction without BNB";
                    case "execution reverted: Vesting started":
                    case "execution reverted: ico-ended":
                        return "Presale finished, because vesting has already started";
                    case "execution reverted: BEP20: transfer amount exceeds allowance":
                        return "You cannot stake without approval";
                    case "execution reverted: already-minted":
                        return "Already claimed";
                    case "execution reverted: too-late":
                        return "The time is over";
                    case "execution reverted: proof-incorrect":
                        return "Provided data is incorrect";
                    case "execution reverted: too-early":
                        return "Not started";
                    default:
                        return 'Something went wrong: "'.concat(n, '"')
                }
            }

            function a(n, t) {
                o.Am.error(n, (0, r.Z)({
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: !1,
                    closeOnClick: !0,
                    pauseOnHover: !0,
                    draggable: !0,
                    progress: void 0
                }, t && {
                    toastId: t
                }))
            }
        },
        90169: function(n, t, e) {
            "use strict";
            e.d(t, {
                A: function() {
                    return o
                },
                n: function() {
                    return r
                }
            });
            var r = function(n) {
                    var t, e, r;
                    return {
                        src: (null === n || void 0 === n || null === (t = n.data) || void 0 === t ? void 0 : t.attributes.url) || "",
                        alt: (null === n || void 0 === n || null === (e = n.data) || void 0 === e || null === (r = e.attributes) || void 0 === r ? void 0 : r.alternativeText) || ""
                    }
                },
                o = function(n) {
                    var t = n.data;
                    return null === t || void 0 === t ? void 0 : t.map((function(n) {
                        var t = n.attributes;
                        return {
                            src: (null === t || void 0 === t ? void 0 : t.url) || "",
                            alt: (null === t || void 0 === t ? void 0 : t.alternativeText) || ""
                        }
                    }))
                }
        },
        92910: function(n, t, e) {
            "use strict";
            e.d(t, {
                O: function() {
                    return r
                }
            });
            var r = function(n, t) {
                return Object.prototype.hasOwnProperty.call(n, t)
            }
        },
        81138: function(n, t, e) {
            "use strict";

            function r(n, t) {
                try {
                    return JSON.parse(n)
                } catch (e) {
                    return t ? n : {}
                }
            }
            e.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        88677: function() {},
        62808: function() {}
    }
]);
//# sourceMappingURL=8150-b9e8068b4cfbff49.js.map