(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5472], {
        81556: function(t, e, r) {
            "use strict";
            r.d(e, {
                Sg: function() {
                    return h
                },
                zt: function() {
                    return l
                }
            });
            var i = r(2593),
                n = r(6881),
                o = r(1581);
            var s = function(t, e, r, i) {
                return new(r || (r = Promise))((function(n, o) {
                    function s(t) {
                        try {
                            h(i.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            h(i.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function h(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    h((i = i.apply(t, e || [])).next())
                }))
            };
            const a = new o.Logger("abstract-provider/5.7.0");
            class h extends n.Description {
                static isForkEvent(t) {
                    return !(!t || !t._isForkEvent)
                }
            }
            class l {
                constructor() {
                    a.checkAbstract(new.target, l), (0, n.defineReadOnly)(this, "_isProvider", !0)
                }
                getFeeData() {
                    return s(this, void 0, void 0, (function*() {
                        const {
                            block: t,
                            gasPrice: e
                        } = yield(0, n.resolveProperties)({
                            block: this.getBlock("latest"),
                            gasPrice: this.getGasPrice().catch((t => null))
                        });
                        let r = null,
                            o = null,
                            s = null;
                        return t && t.baseFeePerGas && (r = t.baseFeePerGas, s = i.O$.from("1500000000"), o = t.baseFeePerGas.mul(2).add(s)), {
                            lastBaseFeePerGas: r,
                            maxFeePerGas: o,
                            maxPriorityFeePerGas: s,
                            gasPrice: e
                        }
                    }))
                }
                addListener(t, e) {
                    return this.on(t, e)
                }
                removeListener(t, e) {
                    return this.off(t, e)
                }
                static isProvider(t) {
                    return !(!t || !t._isProvider)
                }
            }
        },
        48088: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return l
                },
                b: function() {
                    return u
                }
            });
            var i = r(6881),
                n = r(1581);
            var o = function(t, e, r, i) {
                return new(r || (r = Promise))((function(n, o) {
                    function s(t) {
                        try {
                            h(i.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            h(i.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function h(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    h((i = i.apply(t, e || [])).next())
                }))
            };
            const s = new n.Logger("abstract-signer/5.7.0"),
                a = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                h = [n.Logger.errors.INSUFFICIENT_FUNDS, n.Logger.errors.NONCE_EXPIRED, n.Logger.errors.REPLACEMENT_UNDERPRICED];
            class l {
                constructor() {
                    s.checkAbstract(new.target, l), (0, i.defineReadOnly)(this, "_isSigner", !0)
                }
                getBalance(t) {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
                    }))
                }
                getTransactionCount(t) {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
                    }))
                }
                estimateGas(t) {
                    return o(this, void 0, void 0, (function*() {
                        this._checkProvider("estimateGas");
                        const e = yield(0, i.resolveProperties)(this.checkTransaction(t));
                        return yield this.provider.estimateGas(e)
                    }))
                }
                call(t, e) {
                    return o(this, void 0, void 0, (function*() {
                        this._checkProvider("call");
                        const r = yield(0, i.resolveProperties)(this.checkTransaction(t));
                        return yield this.provider.call(r, e)
                    }))
                }
                sendTransaction(t) {
                    return o(this, void 0, void 0, (function*() {
                        this._checkProvider("sendTransaction");
                        const e = yield this.populateTransaction(t), r = yield this.signTransaction(e);
                        return yield this.provider.sendTransaction(r)
                    }))
                }
                getChainId() {
                    return o(this, void 0, void 0, (function*() {
                        this._checkProvider("getChainId");
                        return (yield this.provider.getNetwork()).chainId
                    }))
                }
                getGasPrice() {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                    }))
                }
                getFeeData() {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                    }))
                }
                resolveName(t) {
                    return o(this, void 0, void 0, (function*() {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
                    }))
                }
                checkTransaction(t) {
                    for (const r in t) - 1 === a.indexOf(r) && s.throwArgumentError("invalid transaction key: " + r, "transaction", t);
                    const e = (0, i.shallowCopy)(t);
                    return null == e.from ? e.from = this.getAddress() : e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then((e => (e[0].toLowerCase() !== e[1].toLowerCase() && s.throwArgumentError("from address mismatch", "transaction", t), e[0]))), e
                }
                populateTransaction(t) {
                    return o(this, void 0, void 0, (function*() {
                        const e = yield(0, i.resolveProperties)(this.checkTransaction(t));
                        null != e.to && (e.to = Promise.resolve(e.to).then((t => o(this, void 0, void 0, (function*() {
                            if (null == t) return null;
                            const e = yield this.resolveName(t);
                            return null == e && s.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                        })))), e.to.catch((t => {})));
                        const r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
                        if (null == e.gasPrice || 2 !== e.type && !r ? 0 !== e.type && 1 !== e.type || !r || s.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t) : s.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t), 2 !== e.type && null != e.type || null == e.maxFeePerGas || null == e.maxPriorityFeePerGas)
                            if (0 === e.type || 1 === e.type) null == e.gasPrice && (e.gasPrice = this.getGasPrice());
                            else {
                                const t = yield this.getFeeData();
                                if (null == e.type)
                                    if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                                        if (e.type = 2, null != e.gasPrice) {
                                            const t = e.gasPrice;
                                            delete e.gasPrice, e.maxFeePerGas = t, e.maxPriorityFeePerGas = t
                                        } else null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                                else null != t.gasPrice ? (r && s.throwError("network does not support EIP-1559", n.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }), null == e.gasPrice && (e.gasPrice = t.gasPrice), e.type = 0) : s.throwError("failed to get consistent fee data", n.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                });
                                else 2 === e.type && (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                            }
                        else e.type = 2;
                        return null == e.nonce && (e.nonce = this.getTransactionCount("pending")), null == e.gasLimit && (e.gasLimit = this.estimateGas(e).catch((t => {
                            if (h.indexOf(t.code) >= 0) throw t;
                            return s.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", n.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                                error: t,
                                tx: e
                            })
                        }))), null == e.chainId ? e.chainId = this.getChainId() : e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then((e => (0 !== e[1] && e[0] !== e[1] && s.throwArgumentError("chainId address mismatch", "transaction", t), e[0]))), yield(0, i.resolveProperties)(e)
                    }))
                }
                _checkProvider(t) {
                    this.provider || s.throwError("missing provider", n.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: t || "_checkProvider"
                    })
                }
                static isSigner(t) {
                    return !(!t || !t._isSigner)
                }
            }
            class u extends l {
                constructor(t, e) {
                    super(), (0, i.defineReadOnly)(this, "address", t), (0, i.defineReadOnly)(this, "provider", e || null)
                }
                getAddress() {
                    return Promise.resolve(this.address)
                }
                _fail(t, e) {
                    return Promise.resolve().then((() => {
                        s.throwError(t, n.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: e
                        })
                    }))
                }
                signMessage(t) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage")
                }
                signTransaction(t) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction")
                }
                _signTypedData(t, e, r) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData")
                }
                connect(t) {
                    return new u(this.address, t)
                }
            }
        },
        19485: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                getAddress: function() {
                    return f
                },
                getContractAddress: function() {
                    return v
                },
                getCreate2Address: function() {
                    return g
                },
                getIcapAddress: function() {
                    return m
                },
                isAddress: function() {
                    return p
                }
            });
            var i = r(16441),
                n = r(2593),
                o = r(38197),
                s = r(59052);
            const a = new(r(1581).Logger)("address/5.7.0");

            function h(t) {
                (0, i.isHexString)(t, 20) || a.throwArgumentError("invalid address", "address", t);
                const e = (t = t.toLowerCase()).substring(2).split(""),
                    r = new Uint8Array(40);
                for (let i = 0; i < 40; i++) r[i] = e[i].charCodeAt(0);
                const n = (0, i.arrayify)((0, o.keccak256)(r));
                for (let i = 0; i < 40; i += 2) n[i >> 1] >> 4 >= 8 && (e[i] = e[i].toUpperCase()), (15 & n[i >> 1]) >= 8 && (e[i + 1] = e[i + 1].toUpperCase());
                return "0x" + e.join("")
            }
            const l = {};
            for (let y = 0; y < 10; y++) l[String(y)] = String(y);
            for (let y = 0; y < 26; y++) l[String.fromCharCode(65 + y)] = String(10 + y);
            const u = Math.floor((c = 9007199254740991, Math.log10 ? Math.log10(c) : Math.log(c) / Math.LN10));
            var c;

            function d(t) {
                let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map((t => l[t])).join("");
                for (; e.length >= u;) {
                    let t = e.substring(0, u);
                    e = parseInt(t, 10) % 97 + e.substring(t.length)
                }
                let r = String(98 - parseInt(e, 10) % 97);
                for (; r.length < 2;) r = "0" + r;
                return r
            }

            function f(t) {
                let e = null;
                if ("string" !== typeof t && a.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = h(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && a.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (t.substring(2, 4) !== d(t) && a.throwArgumentError("bad icap checksum", "address", t), e = (0, n.g$)(t.substring(4)); e.length < 40;) e = "0" + e;
                    e = h("0x" + e)
                } else a.throwArgumentError("invalid address", "address", t);
                return e
            }

            function p(t) {
                try {
                    return f(t), !0
                } catch (e) {}
                return !1
            }

            function m(t) {
                let e = (0, n.t2)(f(t).substring(2)).toUpperCase();
                for (; e.length < 30;) e = "0" + e;
                return "XE" + d("XE00" + e) + e
            }

            function v(t) {
                let e = null;
                try {
                    e = f(t.from)
                } catch (h) {
                    a.throwArgumentError("missing from address", "transaction", t)
                }
                const r = (0, i.stripZeros)((0, i.arrayify)(n.O$.from(t.nonce).toHexString()));
                return f((0, i.hexDataSlice)((0, o.keccak256)((0, s.encode)([e, r])), 12))
            }

            function g(t, e, r) {
                return 32 !== (0, i.hexDataLength)(e) && a.throwArgumentError("salt must be 32 bytes", "salt", e), 32 !== (0, i.hexDataLength)(r) && a.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), f((0, i.hexDataSlice)((0, o.keccak256)((0, i.concat)(["0xff", f(t), e, r])), 12))
            }
        },
        59567: function(t, e, r) {
            "use strict";
            r.d(e, {
                J: function() {
                    return n
                },
                c: function() {
                    return o
                }
            });
            var i = r(16441);

            function n(t) {
                t = atob(t);
                const e = [];
                for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
                return (0, i.arrayify)(e)
            }

            function o(t) {
                t = (0, i.arrayify)(t);
                let e = "";
                for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                return btoa(e)
            }
        },
        57727: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                Base32: function() {
                    return s
                },
                Base58: function() {
                    return a
                },
                BaseX: function() {
                    return o
                }
            });
            var i = r(16441),
                n = r(6881);
            class o {
                constructor(t) {
                    (0, n.defineReadOnly)(this, "alphabet", t), (0, n.defineReadOnly)(this, "base", t.length), (0, n.defineReadOnly)(this, "_alphabetMap", {}), (0, n.defineReadOnly)(this, "_leader", t.charAt(0));
                    for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e
                }
                encode(t) {
                    let e = (0, i.arrayify)(t);
                    if (0 === e.length) return "";
                    let r = [0];
                    for (let i = 0; i < e.length; ++i) {
                        let t = e[i];
                        for (let e = 0; e < r.length; ++e) t += r[e] << 8, r[e] = t % this.base, t = t / this.base | 0;
                        for (; t > 0;) r.push(t % this.base), t = t / this.base | 0
                    }
                    let n = "";
                    for (let i = 0; 0 === e[i] && i < e.length - 1; ++i) n += this._leader;
                    for (let i = r.length - 1; i >= 0; --i) n += this.alphabet[r[i]];
                    return n
                }
                decode(t) {
                    if ("string" !== typeof t) throw new TypeError("Expected String");
                    let e = [];
                    if (0 === t.length) return new Uint8Array(e);
                    e.push(0);
                    for (let r = 0; r < t.length; r++) {
                        let i = this._alphabetMap[t[r]];
                        if (void 0 === i) throw new Error("Non-base" + this.base + " character");
                        let n = i;
                        for (let t = 0; t < e.length; ++t) n += e[t] * this.base, e[t] = 255 & n, n >>= 8;
                        for (; n > 0;) e.push(255 & n), n >>= 8
                    }
                    for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r) e.push(0);
                    return (0, i.arrayify)(new Uint8Array(e.reverse()))
                }
            }
            const s = new o("abcdefghijklmnopqrstuvwxyz234567"),
                a = new o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        48794: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return i
                }
            });
            const i = "bignumber/5.7.0"
        },
        2593: function(t, e, r) {
            "use strict";
            r.d(e, {
                O$: function() {
                    return p
                },
                Zm: function() {
                    return d
                },
                g$: function() {
                    return w
                },
                t2: function() {
                    return b
                }
            });
            var i = r(83877),
                n = r.n(i),
                o = r(16441),
                s = r(1581),
                a = r(48794),
                h = n().BN;
            const l = new s.Logger(a.i),
                u = {},
                c = 9007199254740991;

            function d(t) {
                return null != t && (p.isBigNumber(t) || "number" === typeof t && t % 1 === 0 || "string" === typeof t && !!t.match(/^-?[0-9]+$/) || (0, o.isHexString)(t) || "bigint" === typeof t || (0, o.isBytes)(t))
            }
            let f = !1;
            class p {
                constructor(t, e) {
                    t !== u && l.throwError("cannot call constructor directly; use BigNumber.from", s.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return v(g(this).fromTwos(t))
                }
                toTwos(t) {
                    return v(g(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? p.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return v(g(this).add(g(t)))
                }
                sub(t) {
                    return v(g(this).sub(g(t)))
                }
                div(t) {
                    return p.from(t).isZero() && y("division-by-zero", "div"), v(g(this).div(g(t)))
                }
                mul(t) {
                    return v(g(this).mul(g(t)))
                }
                mod(t) {
                    const e = g(t);
                    return e.isNeg() && y("division-by-zero", "mod"), v(g(this).umod(e))
                }
                pow(t) {
                    const e = g(t);
                    return e.isNeg() && y("negative-power", "pow"), v(g(this).pow(e))
                }
                and(t) {
                    const e = g(t);
                    return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "and"), v(g(this).and(e))
                }
                or(t) {
                    const e = g(t);
                    return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "or"), v(g(this).or(e))
                }
                xor(t) {
                    const e = g(t);
                    return (this.isNegative() || e.isNeg()) && y("unbound-bitwise-result", "xor"), v(g(this).xor(e))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && y("negative-width", "mask"), v(g(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && y("negative-width", "shl"), v(g(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && y("negative-width", "shr"), v(g(this).shrn(t))
                }
                eq(t) {
                    return g(this).eq(g(t))
                }
                lt(t) {
                    return g(this).lt(g(t))
                }
                lte(t) {
                    return g(this).lte(g(t))
                }
                gt(t) {
                    return g(this).gt(g(t))
                }
                gte(t) {
                    return g(this).gte(g(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return g(this).isZero()
                }
                toNumber() {
                    try {
                        return g(this).toNumber()
                    } catch (t) {
                        y("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return l.throwError("this platform does not support BigInt", s.Logger.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? f || (f = !0, l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.Logger.errors.UNEXPECTED_ARGUMENT, {}) : l.throwError("BigNumber.toString does not accept parameters", s.Logger.errors.UNEXPECTED_ARGUMENT, {})), g(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof p) return t;
                    if ("string" === typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new p(u, m(t)) : t.match(/^-?[0-9]+$/) ? new p(u, m(new h(t))) : l.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" === typeof t) return t % 1 && y("underflow", "BigNumber.from", t), (t >= c || t <= -c) && y("overflow", "BigNumber.from", t), p.from(String(t));
                    const e = t;
                    if ("bigint" === typeof e) return p.from(e.toString());
                    if ((0, o.isBytes)(e)) return p.from((0, o.hexlify)(e));
                    if (e)
                        if (e.toHexString) {
                            const t = e.toHexString();
                            if ("string" === typeof t) return p.from(t)
                        } else {
                            let t = e._hex;
                            if (null == t && "BigNumber" === e.type && (t = e.hex), "string" === typeof t && ((0, o.isHexString)(t) || "-" === t[0] && (0, o.isHexString)(t.substring(1)))) return p.from(t)
                        }
                    return l.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function m(t) {
                if ("string" !== typeof t) return m(t.toString(16));
                if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && l.throwArgumentError("invalid hex", "value", t), "0x00" === (t = m(t)) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function v(t) {
                return p.from(m(t))
            }

            function g(t) {
                const e = p.from(t).toHexString();
                return "-" === e[0] ? new h("-" + e.substring(3), 16) : new h(e.substring(2), 16)
            }

            function y(t, e, r) {
                const i = {
                    fault: t,
                    operation: e
                };
                return null != r && (i.value = r), l.throwError(t, s.Logger.errors.NUMERIC_FAULT, i)
            }

            function w(t) {
                return new h(t, 36).toString(16)
            }

            function b(t) {
                return new h(t, 16).toString(36)
            }
        },
        83877: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function i(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function n(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                var s;
                "object" === typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    s = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : r(88677).Buffer
                } catch (T) {}

                function a(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void i(!1, "Invalid character in " + t)
                }

                function h(t, e, r) {
                    var i = a(t, r);
                    return r - 1 >= e && (i |= a(t, r - 1) << 4), i
                }

                function l(t, e, r, n) {
                    for (var o = 0, s = 0, a = Math.min(t.length, r), h = e; h < a; h++) {
                        var l = t.charCodeAt(h) - 48;
                        o *= n, s = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l, i(l >= 0 && s < n, "Invalid character"), o += s
                    }
                    return o
                }

                function u(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, o.min = function(t, e) {
                        return t.cmp(e) < 0 ? t : e
                    }, o.prototype._init = function(t, e, r) {
                        if ("number" === typeof t) return this._initNumber(t, e, r);
                        if ("object" === typeof t) return this._initArray(t, e, r);
                        "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, r) : (this._parseBase(t, e, n), "le" === r && this._initArray(this.toArray(), e, r)))
                    }, o.prototype._initNumber = function(t, e, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                    }, o.prototype._initArray = function(t, e, r) {
                        if (i("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var o, s, a = 0;
                        if ("be" === r)
                            for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                        else if ("le" === r)
                            for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                        return this._strip()
                    }, o.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var n, o = 0,
                            s = 0;
                        if ("be" === r)
                            for (i = t.length - 1; i >= e; i -= 2) n = h(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        else
                            for (i = (t.length - e) % 2 === 0 ? e + 1 : e; i < t.length; i += 2) n = h(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        this._strip()
                    }, o.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                        i--, n = n / e | 0;
                        for (var o = t.length - r, s = o % i, a = Math.min(o, o - s) + r, h = 0, u = r; u < a; u += i) h = l(t, u, u + i, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== s) {
                            var c = 1;
                            for (h = l(t, u, t.length, e), u = 0; u < s; u++) c *= e;
                            this.imuln(c), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                        }
                        this._strip()
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype._move = function(t) {
                        u(t, this)
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" !== typeof Symbol && "function" === typeof Symbol.for) try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c
                } catch (T) {
                    o.prototype.inspect = c
                } else o.prototype.inspect = c;

                function c() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                o.prototype.toString = function(t, e) {
                    var r;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                            var a = this.words[s],
                                h = (16777215 & (a << n | o)).toString(16);
                            o = a >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), r = 0 !== o || s !== this.length - 1 ? d[6 - h.length] + h + r : h + r
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var l = f[t],
                            u = p[t];
                        r = "";
                        var c = this.clone();
                        for (c.negative = 0; !c.isZero();) {
                            var m = c.modrn(u).toString(t);
                            r = (c = c.idivn(u)).isZero() ? m + r : d[l - m.length] + m + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    i(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, s && (o.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(s, t, e)
                }), o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                };

                function m(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var i = t.length + e.length | 0;
                    r.length = i, i = i - 1 | 0;
                    var n = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = n * o,
                        a = 67108863 & s,
                        h = s / 67108864 | 0;
                    r.words[0] = a;
                    for (var l = 1; l < i; l++) {
                        for (var u = h >>> 26, c = 67108863 & h, d = Math.min(l, e.length - 1), f = Math.max(0, l - t.length + 1); f <= d; f++) {
                            var p = l - f | 0;
                            u += (s = (n = 0 | t.words[p]) * (o = 0 | e.words[f]) + c) / 67108864 | 0, c = 67108863 & s
                        }
                        r.words[l] = 0 | c, h = 0 | u
                    }
                    return 0 !== h ? r.words[l] = 0 | h : r.length--, r._strip()
                }
                o.prototype.toArrayLike = function(t, e, r) {
                    this._strip();
                    var n = this.byteLength(),
                        o = r || Math.max(1, n);
                    i(n <= o, "byte array longer than desired length"), i(o > 0, "Requested array length <= 0");
                    var s = function(t, e) {
                        return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                    }(t, o);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, n), s
                }, o.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var s = this.words[n] << o | i;
                        t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = i; r < t.length;) t[r++] = 0
                }, o.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var s = this.words[n] << o | i;
                        t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = i; r >= 0;) t[r--] = 0
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 0 === (8191 & e) && (r += 13, e >>>= 13), 0 === (127 & e) && (r += 7, e >>>= 7), 0 === (15 & e) && (r += 4, e >>>= 4), 0 === (3 & e) && (r += 2, e >>>= 2), 0 === (1 & e) && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, o.prototype.ior = function(t) {
                    return i(0 === (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, o.prototype.iand = function(t) {
                    return i(0 === (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                        for (; i < e.length; i++) this.words[i] = e.words[i];
                    return this.length = e.length, this._strip()
                }, o.prototype.ixor = function(t) {
                    return i(0 === (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    i("number" === typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                    return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this._strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    i("number" === typeof t && t >= 0);
                    var r = t / 26 | 0,
                        n = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << n : this.words[r] & ~(1 << n), this._strip()
                }, o.prototype.iadd = function(t) {
                    var e, r, i;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                    for (var n = 0, o = 0; o < i.length; o++) e = (0 | r.words[o]) + (0 | i.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                    for (; 0 !== n && o < r.length; o++) e = (0 | r.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e = this.iadd(t);
                        return t.negative = 1, e._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var r, i, n = this.cmp(t);
                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    n > 0 ? (r = this, i = t) : (r = t, i = this);
                    for (var o = 0, s = 0; s < i.length; s++) o = (e = (0 | r.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    if (0 === o && s < r.length && r !== this)
                        for (; s < r.length; s++) this.words[s] = r.words[s];
                    return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this._strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var v = function(t, e, r) {
                    var i, n, o, s = t.words,
                        a = e.words,
                        h = r.words,
                        l = 0,
                        u = 0 | s[0],
                        c = 8191 & u,
                        d = u >>> 13,
                        f = 0 | s[1],
                        p = 8191 & f,
                        m = f >>> 13,
                        v = 0 | s[2],
                        g = 8191 & v,
                        y = v >>> 13,
                        w = 0 | s[3],
                        b = 8191 & w,
                        A = w >>> 13,
                        M = 0 | s[4],
                        E = 8191 & M,
                        k = M >>> 13,
                        x = 0 | s[5],
                        C = 8191 & x,
                        _ = x >>> 13,
                        T = 0 | s[6],
                        I = 8191 & T,
                        P = T >>> 13,
                        S = 0 | s[7],
                        N = 8191 & S,
                        L = S >>> 13,
                        O = 0 | s[8],
                        R = 8191 & O,
                        B = O >>> 13,
                        D = 0 | s[9],
                        z = 8191 & D,
                        F = D >>> 13,
                        U = 0 | a[0],
                        q = 8191 & U,
                        H = U >>> 13,
                        j = 0 | a[1],
                        G = 8191 & j,
                        K = j >>> 13,
                        V = 0 | a[2],
                        J = 8191 & V,
                        Q = V >>> 13,
                        Z = 0 | a[3],
                        Y = 8191 & Z,
                        W = Z >>> 13,
                        X = 0 | a[4],
                        $ = 8191 & X,
                        tt = X >>> 13,
                        et = 0 | a[5],
                        rt = 8191 & et,
                        it = et >>> 13,
                        nt = 0 | a[6],
                        ot = 8191 & nt,
                        st = nt >>> 13,
                        at = 0 | a[7],
                        ht = 8191 & at,
                        lt = at >>> 13,
                        ut = 0 | a[8],
                        ct = 8191 & ut,
                        dt = ut >>> 13,
                        ft = 0 | a[9],
                        pt = 8191 & ft,
                        mt = ft >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var vt = (l + (i = Math.imul(c, q)) | 0) + ((8191 & (n = (n = Math.imul(c, H)) + Math.imul(d, q) | 0)) << 13) | 0;
                    l = ((o = Math.imul(d, H)) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, i = Math.imul(p, q), n = (n = Math.imul(p, H)) + Math.imul(m, q) | 0, o = Math.imul(m, H);
                    var gt = (l + (i = i + Math.imul(c, G) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, K) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, K) | 0) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, i = Math.imul(g, q), n = (n = Math.imul(g, H)) + Math.imul(y, q) | 0, o = Math.imul(y, H), i = i + Math.imul(p, G) | 0, n = (n = n + Math.imul(p, K) | 0) + Math.imul(m, G) | 0, o = o + Math.imul(m, K) | 0;
                    var yt = (l + (i = i + Math.imul(c, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, Q) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, Q) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, i = Math.imul(b, q), n = (n = Math.imul(b, H)) + Math.imul(A, q) | 0, o = Math.imul(A, H), i = i + Math.imul(g, G) | 0, n = (n = n + Math.imul(g, K) | 0) + Math.imul(y, G) | 0, o = o + Math.imul(y, K) | 0, i = i + Math.imul(p, J) | 0, n = (n = n + Math.imul(p, Q) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, Q) | 0;
                    var wt = (l + (i = i + Math.imul(c, Y) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, W) | 0) + Math.imul(d, Y) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, W) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, i = Math.imul(E, q), n = (n = Math.imul(E, H)) + Math.imul(k, q) | 0, o = Math.imul(k, H), i = i + Math.imul(b, G) | 0, n = (n = n + Math.imul(b, K) | 0) + Math.imul(A, G) | 0, o = o + Math.imul(A, K) | 0, i = i + Math.imul(g, J) | 0, n = (n = n + Math.imul(g, Q) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, Q) | 0, i = i + Math.imul(p, Y) | 0, n = (n = n + Math.imul(p, W) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, W) | 0;
                    var bt = (l + (i = i + Math.imul(c, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, tt) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, tt) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, i = Math.imul(C, q), n = (n = Math.imul(C, H)) + Math.imul(_, q) | 0, o = Math.imul(_, H), i = i + Math.imul(E, G) | 0, n = (n = n + Math.imul(E, K) | 0) + Math.imul(k, G) | 0, o = o + Math.imul(k, K) | 0, i = i + Math.imul(b, J) | 0, n = (n = n + Math.imul(b, Q) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, Q) | 0, i = i + Math.imul(g, Y) | 0, n = (n = n + Math.imul(g, W) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, W) | 0, i = i + Math.imul(p, $) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, tt) | 0;
                    var At = (l + (i = i + Math.imul(c, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, it) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, it) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, i = Math.imul(I, q), n = (n = Math.imul(I, H)) + Math.imul(P, q) | 0, o = Math.imul(P, H), i = i + Math.imul(C, G) | 0, n = (n = n + Math.imul(C, K) | 0) + Math.imul(_, G) | 0, o = o + Math.imul(_, K) | 0, i = i + Math.imul(E, J) | 0, n = (n = n + Math.imul(E, Q) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, Q) | 0, i = i + Math.imul(b, Y) | 0, n = (n = n + Math.imul(b, W) | 0) + Math.imul(A, Y) | 0, o = o + Math.imul(A, W) | 0, i = i + Math.imul(g, $) | 0, n = (n = n + Math.imul(g, tt) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, tt) | 0, i = i + Math.imul(p, rt) | 0, n = (n = n + Math.imul(p, it) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, it) | 0;
                    var Mt = (l + (i = i + Math.imul(c, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, st) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, i = Math.imul(N, q), n = (n = Math.imul(N, H)) + Math.imul(L, q) | 0, o = Math.imul(L, H), i = i + Math.imul(I, G) | 0, n = (n = n + Math.imul(I, K) | 0) + Math.imul(P, G) | 0, o = o + Math.imul(P, K) | 0, i = i + Math.imul(C, J) | 0, n = (n = n + Math.imul(C, Q) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, Q) | 0, i = i + Math.imul(E, Y) | 0, n = (n = n + Math.imul(E, W) | 0) + Math.imul(k, Y) | 0, o = o + Math.imul(k, W) | 0, i = i + Math.imul(b, $) | 0, n = (n = n + Math.imul(b, tt) | 0) + Math.imul(A, $) | 0, o = o + Math.imul(A, tt) | 0, i = i + Math.imul(g, rt) | 0, n = (n = n + Math.imul(g, it) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, it) | 0, i = i + Math.imul(p, ot) | 0, n = (n = n + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
                    var Et = (l + (i = i + Math.imul(c, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, lt) | 0) + Math.imul(d, ht) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, lt) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, i = Math.imul(R, q), n = (n = Math.imul(R, H)) + Math.imul(B, q) | 0, o = Math.imul(B, H), i = i + Math.imul(N, G) | 0, n = (n = n + Math.imul(N, K) | 0) + Math.imul(L, G) | 0, o = o + Math.imul(L, K) | 0, i = i + Math.imul(I, J) | 0, n = (n = n + Math.imul(I, Q) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, Q) | 0, i = i + Math.imul(C, Y) | 0, n = (n = n + Math.imul(C, W) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, W) | 0, i = i + Math.imul(E, $) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, tt) | 0, i = i + Math.imul(b, rt) | 0, n = (n = n + Math.imul(b, it) | 0) + Math.imul(A, rt) | 0, o = o + Math.imul(A, it) | 0, i = i + Math.imul(g, ot) | 0, n = (n = n + Math.imul(g, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, i = i + Math.imul(p, ht) | 0, n = (n = n + Math.imul(p, lt) | 0) + Math.imul(m, ht) | 0, o = o + Math.imul(m, lt) | 0;
                    var kt = (l + (i = i + Math.imul(c, ct) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, dt) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, dt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, i = Math.imul(z, q), n = (n = Math.imul(z, H)) + Math.imul(F, q) | 0, o = Math.imul(F, H), i = i + Math.imul(R, G) | 0, n = (n = n + Math.imul(R, K) | 0) + Math.imul(B, G) | 0, o = o + Math.imul(B, K) | 0, i = i + Math.imul(N, J) | 0, n = (n = n + Math.imul(N, Q) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, Q) | 0, i = i + Math.imul(I, Y) | 0, n = (n = n + Math.imul(I, W) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, W) | 0, i = i + Math.imul(C, $) | 0, n = (n = n + Math.imul(C, tt) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, tt) | 0, i = i + Math.imul(E, rt) | 0, n = (n = n + Math.imul(E, it) | 0) + Math.imul(k, rt) | 0, o = o + Math.imul(k, it) | 0, i = i + Math.imul(b, ot) | 0, n = (n = n + Math.imul(b, st) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, i = i + Math.imul(g, ht) | 0, n = (n = n + Math.imul(g, lt) | 0) + Math.imul(y, ht) | 0, o = o + Math.imul(y, lt) | 0, i = i + Math.imul(p, ct) | 0, n = (n = n + Math.imul(p, dt) | 0) + Math.imul(m, ct) | 0, o = o + Math.imul(m, dt) | 0;
                    var xt = (l + (i = i + Math.imul(c, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, mt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, mt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, i = Math.imul(z, G), n = (n = Math.imul(z, K)) + Math.imul(F, G) | 0, o = Math.imul(F, K), i = i + Math.imul(R, J) | 0, n = (n = n + Math.imul(R, Q) | 0) + Math.imul(B, J) | 0, o = o + Math.imul(B, Q) | 0, i = i + Math.imul(N, Y) | 0, n = (n = n + Math.imul(N, W) | 0) + Math.imul(L, Y) | 0, o = o + Math.imul(L, W) | 0, i = i + Math.imul(I, $) | 0, n = (n = n + Math.imul(I, tt) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, tt) | 0, i = i + Math.imul(C, rt) | 0, n = (n = n + Math.imul(C, it) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, it) | 0, i = i + Math.imul(E, ot) | 0, n = (n = n + Math.imul(E, st) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, st) | 0, i = i + Math.imul(b, ht) | 0, n = (n = n + Math.imul(b, lt) | 0) + Math.imul(A, ht) | 0, o = o + Math.imul(A, lt) | 0, i = i + Math.imul(g, ct) | 0, n = (n = n + Math.imul(g, dt) | 0) + Math.imul(y, ct) | 0, o = o + Math.imul(y, dt) | 0;
                    var Ct = (l + (i = i + Math.imul(p, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(m, mt) | 0) + (n >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, i = Math.imul(z, J), n = (n = Math.imul(z, Q)) + Math.imul(F, J) | 0, o = Math.imul(F, Q), i = i + Math.imul(R, Y) | 0, n = (n = n + Math.imul(R, W) | 0) + Math.imul(B, Y) | 0, o = o + Math.imul(B, W) | 0, i = i + Math.imul(N, $) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, tt) | 0, i = i + Math.imul(I, rt) | 0, n = (n = n + Math.imul(I, it) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, it) | 0, i = i + Math.imul(C, ot) | 0, n = (n = n + Math.imul(C, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, i = i + Math.imul(E, ht) | 0, n = (n = n + Math.imul(E, lt) | 0) + Math.imul(k, ht) | 0, o = o + Math.imul(k, lt) | 0, i = i + Math.imul(b, ct) | 0, n = (n = n + Math.imul(b, dt) | 0) + Math.imul(A, ct) | 0, o = o + Math.imul(A, dt) | 0;
                    var _t = (l + (i = i + Math.imul(g, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(y, mt) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, i = Math.imul(z, Y), n = (n = Math.imul(z, W)) + Math.imul(F, Y) | 0, o = Math.imul(F, W), i = i + Math.imul(R, $) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, tt) | 0, i = i + Math.imul(N, rt) | 0, n = (n = n + Math.imul(N, it) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, it) | 0, i = i + Math.imul(I, ot) | 0, n = (n = n + Math.imul(I, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, i = i + Math.imul(C, ht) | 0, n = (n = n + Math.imul(C, lt) | 0) + Math.imul(_, ht) | 0, o = o + Math.imul(_, lt) | 0, i = i + Math.imul(E, ct) | 0, n = (n = n + Math.imul(E, dt) | 0) + Math.imul(k, ct) | 0, o = o + Math.imul(k, dt) | 0;
                    var Tt = (l + (i = i + Math.imul(b, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(b, mt) | 0) + Math.imul(A, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(A, mt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, i = Math.imul(z, $), n = (n = Math.imul(z, tt)) + Math.imul(F, $) | 0, o = Math.imul(F, tt), i = i + Math.imul(R, rt) | 0, n = (n = n + Math.imul(R, it) | 0) + Math.imul(B, rt) | 0, o = o + Math.imul(B, it) | 0, i = i + Math.imul(N, ot) | 0, n = (n = n + Math.imul(N, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, i = i + Math.imul(I, ht) | 0, n = (n = n + Math.imul(I, lt) | 0) + Math.imul(P, ht) | 0, o = o + Math.imul(P, lt) | 0, i = i + Math.imul(C, ct) | 0, n = (n = n + Math.imul(C, dt) | 0) + Math.imul(_, ct) | 0, o = o + Math.imul(_, dt) | 0;
                    var It = (l + (i = i + Math.imul(E, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, mt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(k, mt) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, i = Math.imul(z, rt), n = (n = Math.imul(z, it)) + Math.imul(F, rt) | 0, o = Math.imul(F, it), i = i + Math.imul(R, ot) | 0, n = (n = n + Math.imul(R, st) | 0) + Math.imul(B, ot) | 0, o = o + Math.imul(B, st) | 0, i = i + Math.imul(N, ht) | 0, n = (n = n + Math.imul(N, lt) | 0) + Math.imul(L, ht) | 0, o = o + Math.imul(L, lt) | 0, i = i + Math.imul(I, ct) | 0, n = (n = n + Math.imul(I, dt) | 0) + Math.imul(P, ct) | 0, o = o + Math.imul(P, dt) | 0;
                    var Pt = (l + (i = i + Math.imul(C, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(C, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(_, mt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, i = Math.imul(z, ot), n = (n = Math.imul(z, st)) + Math.imul(F, ot) | 0, o = Math.imul(F, st), i = i + Math.imul(R, ht) | 0, n = (n = n + Math.imul(R, lt) | 0) + Math.imul(B, ht) | 0, o = o + Math.imul(B, lt) | 0, i = i + Math.imul(N, ct) | 0, n = (n = n + Math.imul(N, dt) | 0) + Math.imul(L, ct) | 0, o = o + Math.imul(L, dt) | 0;
                    var St = (l + (i = i + Math.imul(I, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(I, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(P, mt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, i = Math.imul(z, ht), n = (n = Math.imul(z, lt)) + Math.imul(F, ht) | 0, o = Math.imul(F, lt), i = i + Math.imul(R, ct) | 0, n = (n = n + Math.imul(R, dt) | 0) + Math.imul(B, ct) | 0, o = o + Math.imul(B, dt) | 0;
                    var Nt = (l + (i = i + Math.imul(N, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(N, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(L, mt) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, i = Math.imul(z, ct), n = (n = Math.imul(z, dt)) + Math.imul(F, ct) | 0, o = Math.imul(F, dt);
                    var Lt = (l + (i = i + Math.imul(R, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, mt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(B, mt) | 0) + (n >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863;
                    var Ot = (l + (i = Math.imul(z, pt)) | 0) + ((8191 & (n = (n = Math.imul(z, mt)) + Math.imul(F, pt) | 0)) << 13) | 0;
                    return l = ((o = Math.imul(F, mt)) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, h[0] = vt, h[1] = gt, h[2] = yt, h[3] = wt, h[4] = bt, h[5] = At, h[6] = Mt, h[7] = Et, h[8] = kt, h[9] = xt, h[10] = Ct, h[11] = _t, h[12] = Tt, h[13] = It, h[14] = Pt, h[15] = St, h[16] = Nt, h[17] = Lt, h[18] = Ot, 0 !== l && (h[19] = l, r.length++), r
                };

                function g(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                        var s = n;
                        n = 0;
                        for (var a = 67108863 & i, h = Math.min(o, e.length - 1), l = Math.max(0, o - t.length + 1); l <= h; l++) {
                            var u = o - l,
                                c = (0 | t.words[u]) * (0 | e.words[l]),
                                d = 67108863 & c;
                            a = 67108863 & (d = d + a | 0), n += (s = (s = s + (c / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, s &= 67108863
                        }
                        r.words[o] = a, i = s, s = n
                    }
                    return 0 !== i ? r.words[o] = i : r.length--, r._strip()
                }

                function y(t, e, r) {
                    return g(t, e, r)
                }

                function w(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (v = m), o.prototype.mulTo = function(t, e) {
                    var r = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? v(this, t, e) : r < 63 ? m(this, t, e) : r < 1024 ? g(this, t, e) : y(this, t, e)
                }, w.prototype.makeRBT = function(t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, r, t);
                    return e
                }, w.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var i = 0, n = 0; n < e; n++) i |= (1 & t) << e - n - 1, t >>= 1;
                    return i
                }, w.prototype.permute = function(t, e, r, i, n, o) {
                    for (var s = 0; s < o; s++) i[s] = e[t[s]], n[s] = r[t[s]]
                }, w.prototype.transform = function(t, e, r, i, n, o) {
                    this.permute(o, t, e, r, i, n);
                    for (var s = 1; s < n; s <<= 1)
                        for (var a = s << 1, h = Math.cos(2 * Math.PI / a), l = Math.sin(2 * Math.PI / a), u = 0; u < n; u += a)
                            for (var c = h, d = l, f = 0; f < s; f++) {
                                var p = r[u + f],
                                    m = i[u + f],
                                    v = r[u + f + s],
                                    g = i[u + f + s],
                                    y = c * v - d * g;
                                g = c * g + d * v, v = y, r[u + f] = p + v, i[u + f] = m + g, r[u + f + s] = p - v, i[u + f + s] = m - g, f !== a && (y = h * c - l * d, d = h * d + l * c, c = y)
                            }
                }, w.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        i = 1 & r,
                        n = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) n++;
                    return 1 << n + 1 + i
                }, w.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var i = 0; i < r / 2; i++) {
                            var n = t[i];
                            t[i] = t[r - i - 1], t[r - i - 1] = n, n = e[i], e[i] = -e[r - i - 1], e[r - i - 1] = -n
                        }
                }, w.prototype.normalize13b = function(t, e) {
                    for (var r = 0, i = 0; i < e / 2; i++) {
                        var n = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
                        t[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                    }
                    return t
                }, w.prototype.convert13b = function(t, e, r, n) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < n; ++s) r[s] = 0;
                    i(0 === o), i(0 === (-8192 & o))
                }, w.prototype.stub = function(t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, w.prototype.mulp = function(t, e, r) {
                    var i = 2 * this.guessLen13b(t.length, e.length),
                        n = this.makeRBT(i),
                        o = this.stub(i),
                        s = new Array(i),
                        a = new Array(i),
                        h = new Array(i),
                        l = new Array(i),
                        u = new Array(i),
                        c = new Array(i),
                        d = r.words;
                    d.length = i, this.convert13b(t.words, t.length, s, i), this.convert13b(e.words, e.length, l, i), this.transform(s, o, a, h, i, n), this.transform(l, o, u, c, i, n);
                    for (var f = 0; f < i; f++) {
                        var p = a[f] * u[f] - h[f] * c[f];
                        h[f] = a[f] * c[f] + h[f] * u[f], a[f] = p
                    }
                    return this.conjugate(a, h, i), this.transform(a, h, d, o, i, n), this.conjugate(d, o, i), this.normalize13b(d, i), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), y(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), i("number" === typeof t), i(t < 67108864);
                    for (var r = 0, n = 0; n < this.length; n++) {
                        var o = (0 | this.words[n]) * t,
                            s = (67108863 & o) + (67108863 & r);
                        r >>= 26, r += o / 67108864 | 0, r += s >>> 26, this.words[n] = 67108863 & s
                    }
                    return 0 !== r && (this.words[n] = r, this.length++), e ? this.ineg() : this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var i = r / 26 | 0,
                                n = r % 26;
                            e[r] = t.words[i] >>> n & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                    if (++i < e.length)
                        for (var n = r.sqr(); i < e.length; i++, n = n.sqr()) 0 !== e[i] && (r = r.mul(n));
                    return r
                }, o.prototype.iushln = function(t) {
                    i("number" === typeof t && t >= 0);
                    var e, r = t % 26,
                        n = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var a = this.words[e] & o,
                                h = (0 | this.words[e]) - a << r;
                            this.words[e] = h | s, s = a >>> 26 - r
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== n) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                        for (e = 0; e < n; e++) this.words[e] = 0;
                        this.length += n
                    }
                    return this._strip()
                }, o.prototype.ishln = function(t) {
                    return i(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    var n;
                    i("number" === typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26,
                        s = Math.min((t - o) / 26, this.length),
                        a = 67108863 ^ 67108863 >>> o << o,
                        h = r;
                    if (n -= s, n = Math.max(0, n), h) {
                        for (var l = 0; l < s; l++) h.words[l] = this.words[l];
                        h.length = s
                    }
                    if (0 === s);
                    else if (this.length > s)
                        for (this.length -= s, l = 0; l < this.length; l++) this.words[l] = this.words[l + s];
                    else this.words[0] = 0, this.length = 1;
                    var u = 0;
                    for (l = this.length - 1; l >= 0 && (0 !== u || l >= n); l--) {
                        var c = 0 | this.words[l];
                        this.words[l] = u << 26 - o | c >>> o, u = c & a
                    }
                    return h && 0 !== u && (h.words[h.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return i(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    i("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26,
                        n = 1 << e;
                    return !(this.length <= r) && !!(this.words[r] & n)
                }, o.prototype.imaskn = function(t) {
                    i("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    if (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var n = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= n
                    }
                    return this._strip()
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return i("number" === typeof t), i(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (i("number" === typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var n, o, s = t.length + r;
                    this._expand(s);
                    var a = 0;
                    for (n = 0; n < t.length; n++) {
                        o = (0 | this.words[n + r]) + a;
                        var h = (0 | t.words[n]) * e;
                        a = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[n + r] = 67108863 & o
                    }
                    for (; n < this.length - r; n++) a = (o = (0 | this.words[n + r]) + a) >> 26, this.words[n + r] = 67108863 & o;
                    if (0 === a) return this._strip();
                    for (i(-1 === a), a = 0, n = 0; n < this.length; n++) a = (o = -(0 | this.words[n]) + a) >> 26, this.words[n] = 67108863 & o;
                    return this.negative = 1, this._strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r = (this.length, t.length),
                        i = this.clone(),
                        n = t,
                        s = 0 | n.words[n.length - 1];
                    0 !== (r = 26 - this._countBits(s)) && (n = n.ushln(r), i.iushln(r), s = 0 | n.words[n.length - 1]);
                    var a, h = i.length - n.length;
                    if ("mod" !== e) {
                        (a = new o(null)).length = h + 1, a.words = new Array(a.length);
                        for (var l = 0; l < a.length; l++) a.words[l] = 0
                    }
                    var u = i.clone()._ishlnsubmul(n, 1, h);
                    0 === u.negative && (i = u, a && (a.words[h] = 1));
                    for (var c = h - 1; c >= 0; c--) {
                        var d = 67108864 * (0 | i.words[n.length + c]) + (0 | i.words[n.length + c - 1]);
                        for (d = Math.min(d / s | 0, 67108863), i._ishlnsubmul(n, d, c); 0 !== i.negative;) d--, i.negative = 0, i._ishlnsubmul(n, 1, c), i.isZero() || (i.negative ^= 1);
                        a && (a.words[c] = d)
                    }
                    return a && a._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                        div: a || null,
                        mod: i
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    return i(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (n = a.div.neg()), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                        div: n,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (n = a.div.neg()), {
                        div: n,
                        mod: a.mod
                    }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                        div: a.div,
                        mod: s
                    }) : t.length > this.length || this.cmp(t) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e);
                    var n, s, a
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        i = t.ushrn(1),
                        n = t.andln(1),
                        o = r.cmp(i);
                    return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (r * n + (0 | this.words[o])) % t;
                    return e ? -n : n
                }, o.prototype.modn = function(t) {
                    return this.modrn(t)
                }, o.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = 0, n = this.length - 1; n >= 0; n--) {
                        var o = (0 | this.words[n]) + 67108864 * r;
                        this.words[n] = o / t | 0, r = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var n = new o(1), s = new o(0), a = new o(0), h = new o(1), l = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++l;
                    for (var u = r.clone(), c = e.clone(); !e.isZero();) {
                        for (var d = 0, f = 1; 0 === (e.words[0] & f) && d < 26; ++d, f <<= 1);
                        if (d > 0)
                            for (e.iushrn(d); d-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(u), s.isub(c)), n.iushrn(1), s.iushrn(1);
                        for (var p = 0, m = 1; 0 === (r.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(a.isOdd() || h.isOdd()) && (a.iadd(u), h.isub(c)), a.iushrn(1), h.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), n.isub(a), s.isub(h)) : (r.isub(e), a.isub(n), h.isub(s))
                    }
                    return {
                        a: a,
                        b: h,
                        gcd: r.iushln(l)
                    }
                }, o.prototype._invmp = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var n, s = new o(1), a = new o(0), h = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var l = 0, u = 1; 0 === (e.words[0] & u) && l < 26; ++l, u <<= 1);
                        if (l > 0)
                            for (e.iushrn(l); l-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
                        for (var c = 0, d = 1; 0 === (r.words[0] & d) && c < 26; ++c, d <<= 1);
                        if (c > 0)
                            for (r.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(h), a.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
                    }
                    return (n = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && n.iadd(t), n
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var n = e.cmp(r);
                        if (n < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === n || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(i)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    i("number" === typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        n = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                    for (var o = n, s = r; 0 !== o && s < this.length; s++) {
                        var a = 0 | this.words[s];
                        o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), i(t <= 67108863, "Number is too big");
                        var n = 0 | this.words[0];
                        e = n === t ? 0 : n < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = 0 | this.words[r],
                            n = 0 | t.words[r];
                        if (i !== n) {
                            i < n ? e = -1 : i > n && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return this.cmpn(t) <= 0
                }, o.prototype.lte = function(t) {
                    return this.cmp(t) <= 0
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new C(t)
                }, o.prototype.toRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var b = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function A(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function M() {
                    A.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function E() {
                    A.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function k() {
                    A.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function x() {
                    A.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function C(t) {
                    if ("string" === typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function _(t) {
                    C.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                A.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, A.prototype.ireduce = function(t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var i = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, A.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, A.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, n(M, A), M.prototype.split = function(t, e) {
                    for (var r = 4194303, i = Math.min(t.length, 9), n = 0; n < i; n++) e.words[n] = t.words[n];
                    if (e.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
                        var s = 0 | t.words[n];
                        t.words[n - 10] = (s & r) << 4 | o >>> 22, o = s
                    }
                    o >>>= 22, t.words[n - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, M.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = 0 | t.words[r];
                        e += 977 * i, t.words[r] = 67108863 & e, e = 64 * i + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, n(E, A), n(k, A), n(x, A), x.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = 19 * (0 | t.words[r]) + e,
                            n = 67108863 & i;
                        i >>>= 26, t.words[r] = n, e = i
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    if (b[t]) return b[t];
                    var e;
                    if ("k256" === t) e = new M;
                    else if ("p224" === t) e = new E;
                    else if ("p192" === t) e = new k;
                    else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new x
                    }
                    return b[t] = e, e
                }, C.prototype._verify1 = function(t) {
                    i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
                }, C.prototype._verify2 = function(t, e) {
                    i(0 === (t.negative | e.negative), "red works only with positives"), i(t.red && t.red === e.red, "red works only with red numbers")
                }, C.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)), t)
                }, C.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, C.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, C.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, C.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, C.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, C.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, C.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, C.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, C.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, C.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, C.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (i(e % 2 === 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
                    i(!n.isZero());
                    var a = new o(1).toRed(this),
                        h = a.redNeg(),
                        l = this.m.subn(1).iushrn(1),
                        u = this.m.bitLength();
                    for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, l).cmp(h);) u.redIAdd(h);
                    for (var c = this.pow(u, n), d = this.pow(t, n.addn(1).iushrn(1)), f = this.pow(t, n), p = s; 0 !== f.cmp(a);) {
                        for (var m = f, v = 0; 0 !== m.cmp(a); v++) m = m.redSqr();
                        i(v < p);
                        var g = this.pow(c, new o(1).iushln(p - v - 1));
                        d = d.redMul(g), c = g.redSqr(), f = f.redMul(c), p = v
                    }
                    return d
                }, C.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, C.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
                    var n = r[0],
                        s = 0,
                        a = 0,
                        h = e.bitLength() % 26;
                    for (0 === h && (h = 26), i = e.length - 1; i >= 0; i--) {
                        for (var l = e.words[i], u = h - 1; u >= 0; u--) {
                            var c = l >> u & 1;
                            n !== r[0] && (n = this.sqr(n)), 0 !== c || 0 !== s ? (s <<= 1, s |= c, (4 === ++a || 0 === i && 0 === u) && (n = this.mul(n, r[s]), a = 0, s = 0)) : a = 0
                        }
                        h = 26
                    }
                    return n
                }, C.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, C.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new _(t)
                }, n(_, C), _.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, _.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, _.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        o = n;
                    return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                }, _.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        s = n;
                    return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                }, _.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        16441: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                arrayify: function() {
                    return l
                },
                concat: function() {
                    return u
                },
                hexConcat: function() {
                    return y
                },
                hexDataLength: function() {
                    return v
                },
                hexDataSlice: function() {
                    return g
                },
                hexStripZeros: function() {
                    return b
                },
                hexValue: function() {
                    return w
                },
                hexZeroPad: function() {
                    return A
                },
                hexlify: function() {
                    return m
                },
                isBytes: function() {
                    return h
                },
                isBytesLike: function() {
                    return s
                },
                isHexString: function() {
                    return f
                },
                joinSignature: function() {
                    return E
                },
                splitSignature: function() {
                    return M
                },
                stripZeros: function() {
                    return c
                },
                zeroPad: function() {
                    return d
                }
            });
            const i = new(r(1581).Logger)("bytes/5.7.0");

            function n(t) {
                return !!t.toHexString
            }

            function o(t) {
                return t.slice || (t.slice = function() {
                    const e = Array.prototype.slice.call(arguments);
                    return o(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }

            function s(t) {
                return f(t) && !(t.length % 2) || h(t)
            }

            function a(t) {
                return "number" === typeof t && t == t && t % 1 === 0
            }

            function h(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" === typeof t) return !1;
                if (!a(t.length) || t.length < 0) return !1;
                for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    if (!a(r) || r < 0 || r >= 256) return !1
                }
                return !0
            }

            function l(t, e) {
                if (e || (e = {}), "number" === typeof t) {
                    i.checkSafeUint53(t, "invalid arrayify value");
                    const e = [];
                    for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === e.length && e.push(0), o(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), n(t) && (t = t.toHexString()), f(t)) {
                    let r = t.substring(2);
                    r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : i.throwArgumentError("hex data is odd-length", "value", t));
                    const n = [];
                    for (let t = 0; t < r.length; t += 2) n.push(parseInt(r.substring(t, t + 2), 16));
                    return o(new Uint8Array(n))
                }
                return h(t) ? o(new Uint8Array(t)) : i.throwArgumentError("invalid arrayify value", "value", t)
            }

            function u(t) {
                const e = t.map((t => l(t))),
                    r = e.reduce(((t, e) => t + e.length), 0),
                    i = new Uint8Array(r);
                return e.reduce(((t, e) => (i.set(e, t), t + e.length)), 0), o(i)
            }

            function c(t) {
                let e = l(t);
                if (0 === e.length) return e;
                let r = 0;
                for (; r < e.length && 0 === e[r];) r++;
                return r && (e = e.slice(r)), e
            }

            function d(t, e) {
                (t = l(t)).length > e && i.throwArgumentError("value out of range", "value", arguments[0]);
                const r = new Uint8Array(e);
                return r.set(t, e - t.length), o(r)
            }

            function f(t, e) {
                return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
            }
            const p = "0123456789abcdef";

            function m(t, e) {
                if (e || (e = {}), "number" === typeof t) {
                    i.checkSafeUint53(t, "invalid hexlify value");
                    let e = "";
                    for (; t;) e = p[15 & t] + e, t = Math.floor(t / 16);
                    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
                }
                if ("bigint" === typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
                if (e.allowMissingPrefix && "string" === typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), n(t)) return t.toHexString();
                if (f(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : i.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (h(t)) {
                    let e = "0x";
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        e += p[(240 & i) >> 4] + p[15 & i]
                    }
                    return e
                }
                return i.throwArgumentError("invalid hexlify value", "value", t)
            }

            function v(t) {
                if ("string" !== typeof t) t = m(t);
                else if (!f(t) || t.length % 2) return null;
                return (t.length - 2) / 2
            }

            function g(t, e, r) {
                return "string" !== typeof t ? t = m(t) : (!f(t) || t.length % 2) && i.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
            }

            function y(t) {
                let e = "0x";
                return t.forEach((t => {
                    e += m(t).substring(2)
                })), e
            }

            function w(t) {
                const e = b(m(t, {
                    hexPad: "left"
                }));
                return "0x" === e ? "0x0" : e
            }

            function b(t) {
                "string" !== typeof t && (t = m(t)), f(t) || i.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
                let e = 0;
                for (; e < t.length && "0" === t[e];) e++;
                return "0x" + t.substring(e)
            }

            function A(t, e) {
                for ("string" !== typeof t ? t = m(t) : f(t) || i.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && i.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
                return t
            }

            function M(t) {
                const e = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (s(t)) {
                    let r = l(t);
                    64 === r.length ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = m(r.slice(0, 32)), e.s = m(r.slice(32, 64))) : 65 === r.length ? (e.r = m(r.slice(0, 32)), e.s = m(r.slice(32, 64)), e.v = r[64]) : i.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : i.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = m(r.slice(32, 64))
                } else {
                    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
                        const r = d(l(e._vs), 32);
                        e._vs = m(r);
                        const n = r[0] >= 128 ? 1 : 0;
                        null == e.recoveryParam ? e.recoveryParam = n : e.recoveryParam !== n && i.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
                        const o = m(r);
                        null == e.s ? e.s = o : e.s !== o && i.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == e.recoveryParam) null == e.v ? i.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                    else if (null == e.v) e.v = 27 + e.recoveryParam;
                    else {
                        const r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                        e.recoveryParam !== r && i.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != e.r && f(e.r) ? e.r = A(e.r, 32) : i.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && f(e.s) ? e.s = A(e.s, 32) : i.throwArgumentError("signature missing or invalid s", "signature", t);
                    const r = l(e.s);
                    r[0] >= 128 && i.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
                    const n = m(r);
                    e._vs && (f(e._vs) || i.throwArgumentError("signature invalid _vs", "signature", t), e._vs = A(e._vs, 32)), null == e._vs ? e._vs = n : e._vs !== n && i.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
            }

            function E(t) {
                return m(u([(t = M(t)).r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
            }
        },
        9279: function(t, e, r) {
            "use strict";
            r.d(e, {
                d: function() {
                    return i
                }
            });
            const i = "0x0000000000000000000000000000000000000000"
        },
        21046: function(t, e, r) {
            "use strict";
            r.d(e, {
                Bz: function() {
                    return a
                },
                _Y: function() {
                    return o
                },
                fh: function() {
                    return s
                },
                tL: function() {
                    return n
                }
            });
            var i = r(2593);
            const n = i.O$.from(-1),
                o = i.O$.from(0),
                s = i.O$.from(1),
                a = i.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        },
        57218: function(t, e, r) {
            "use strict";
            r.d(e, {
                R: function() {
                    return i
                }
            });
            const i = "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        35644: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return i
                }
            });
            const i = "hash/5.7.0"
        },
        32046: function(t, e, r) {
            "use strict";
            r.d(e, {
                id: function() {
                    return o
                }
            });
            var i = r(38197),
                n = r(29251);

            function o(t) {
                return (0, i.keccak256)((0, n.Y0)(t))
            }
        },
        27586: function(t, e, r) {
            "use strict";
            r.d(e, {
                Kn: function() {
                    return O
                },
                w3: function() {
                    return S
                },
                r1: function() {
                    return N
                },
                VM: function() {
                    return L
                }
            });
            var i = r(16441),
                n = r(29251),
                o = r(38197),
                s = r(1581),
                a = r(35644);

            function h(t, e) {
                null == e && (e = 1);
                const r = [],
                    i = r.forEach,
                    n = function(t, e) {
                        i.call(t, (function(t) {
                            e > 0 && Array.isArray(t) ? n(t, e - 1) : r.push(t)
                        }))
                    };
                return n(t, e), r
            }

            function l(t) {
                return function(t) {
                    let e = 0;
                    return () => t[e++]
                }(function(t) {
                    let e = 0;

                    function r() {
                        return t[e++] << 8 | t[e++]
                    }
                    let i = r(),
                        n = 1,
                        o = [0, 1];
                    for (let b = 1; b < i; b++) o.push(n += r());
                    let s = r(),
                        a = e;
                    e += s;
                    let h = 0,
                        l = 0;

                    function u() {
                        return 0 == h && (l = l << 8 | t[e++], h = 8), l >> --h & 1
                    }
                    const c = Math.pow(2, 31),
                        d = c >>> 1,
                        f = d >> 1,
                        p = c - 1;
                    let m = 0;
                    for (let b = 0; b < 31; b++) m = m << 1 | u();
                    let v = [],
                        g = 0,
                        y = c;
                    for (;;) {
                        let t = Math.floor(((m - g + 1) * n - 1) / y),
                            e = 0,
                            r = i;
                        for (; r - e > 1;) {
                            let i = e + r >>> 1;
                            t < o[i] ? r = i : e = i
                        }
                        if (0 == e) break;
                        v.push(e);
                        let s = g + Math.floor(y * o[e] / n),
                            a = g + Math.floor(y * o[e + 1] / n) - 1;
                        for (; 0 == ((s ^ a) & d);) m = m << 1 & p | u(), s = s << 1 & p, a = a << 1 & p | 1;
                        for (; s & ~a & f;) m = m & d | m << 1 & p >>> 1 | u(), s = s << 1 ^ d, a = (a ^ d) << 1 | d | 1;
                        g = s, y = 1 + a - s
                    }
                    let w = i - 4;
                    return v.map((e => {
                        switch (e - w) {
                            case 3:
                                return w + 65792 + (t[a++] << 16 | t[a++] << 8 | t[a++]);
                            case 2:
                                return w + 256 + (t[a++] << 8 | t[a++]);
                            case 1:
                                return w + t[a++];
                            default:
                                return e - 1
                        }
                    }))
                }(t))
            }

            function u(t) {
                return 1 & t ? ~t >> 1 : t >> 1
            }

            function c(t, e) {
                let r = Array(t);
                for (let i = 0, n = -1; i < t; i++) r[i] = n += 1 + e();
                return r
            }

            function d(t, e) {
                let r = Array(t);
                for (let i = 0, n = 0; i < t; i++) r[i] = n += u(e());
                return r
            }

            function f(t, e) {
                let r = c(t(), t),
                    i = t(),
                    n = c(i, t),
                    o = function(t, e) {
                        let r = Array(t);
                        for (let i = 0; i < t; i++) r[i] = 1 + e();
                        return r
                    }(i, t);
                for (let s = 0; s < i; s++)
                    for (let t = 0; t < o[s]; t++) r.push(n[s] + t);
                return e ? r.map((t => e[t])) : r
            }

            function p(t, e, r) {
                let i = Array(t).fill(void 0).map((() => []));
                for (let n = 0; n < e; n++) d(t, r).forEach(((t, e) => i[e].push(t)));
                return i
            }

            function m(t, e) {
                let r = 1 + e(),
                    i = e(),
                    n = function(t) {
                        let e = [];
                        for (;;) {
                            let r = t();
                            if (0 == r) break;
                            e.push(r)
                        }
                        return e
                    }(e);
                return h(p(n.length, 1 + t, e).map(((t, e) => {
                    const o = t[0],
                        s = t.slice(1);
                    return Array(n[e]).fill(void 0).map(((t, e) => {
                        let n = e * i;
                        return [o + e * r, s.map((t => t + n))]
                    }))
                })))
            }

            function v(t, e) {
                return p(1 + e(), 1 + t, e).map((t => [t[0], t.slice(1)]))
            }
            const g = l((0, r(59567).J)("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")),
                y = new Set(f(g)),
                w = new Set(f(g)),
                b = function(t) {
                    let e = [];
                    for (;;) {
                        let r = t();
                        if (0 == r) break;
                        e.push(m(r, t))
                    }
                    for (;;) {
                        let r = t() - 1;
                        if (r < 0) break;
                        e.push(v(r, t))
                    }
                    return function(t) {
                        const e = {};
                        for (let r = 0; r < t.length; r++) {
                            const i = t[r];
                            e[i[0]] = i[1]
                        }
                        return e
                    }(h(e))
                }(g),
                A = function(t) {
                    let e = f(t).sort(((t, e) => t - e));
                    return function r() {
                        let i = [];
                        for (;;) {
                            let n = f(t, e);
                            if (0 == n.length) break;
                            i.push({
                                set: new Set(n),
                                node: r()
                            })
                        }
                        i.sort(((t, e) => e.set.size - t.set.size));
                        let n = t(),
                            o = n % 3;
                        n = n / 3 | 0;
                        let s = !!(1 & n);
                        return n >>= 1, {
                            branches: i,
                            valid: o,
                            fe0f: s,
                            save: 1 == n,
                            check: 2 == n
                        }
                    }()
                }(g);

            function M(t) {
                return (0, n.XL)(t)
            }

            function E(t) {
                return t.filter((t => 65039 != t))
            }

            function k(t) {
                for (let r of t.split(".")) {
                    let t = M(r);
                    try {
                        for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
                            if (95 !== t[e]) throw new Error("underscore only allowed at start");
                        if (t.length >= 4 && t.every((t => t < 128)) && 45 === t[2] && 45 === t[3]) throw new Error("invalid label extension")
                    } catch (e) {
                        throw new Error(`Invalid label "${r}": ${e.message}`)
                    }
                }
                return t
            }

            function x(t) {
                return k(function(t, e) {
                    let r = M(t).reverse(),
                        i = [];
                    for (; r.length;) {
                        let t = C(r);
                        if (t) {
                            i.push(...e(t));
                            continue
                        }
                        let n = r.pop();
                        if (y.has(n)) {
                            i.push(n);
                            continue
                        }
                        if (w.has(n)) continue;
                        let o = b[n];
                        if (!o) throw new Error(`Disallowed codepoint: 0x${n.toString(16).toUpperCase()}`);
                        i.push(...o)
                    }
                    return k((n = String.fromCodePoint(...i), n.normalize("NFC")));
                    var n
                }(t, E))
            }

            function C(t, e) {
                var r;
                let i, n, o = A,
                    s = [],
                    a = t.length;
                for (e && (e.length = 0); a;) {
                    let h = t[--a];
                    if (o = null === (r = o.branches.find((t => t.set.has(h)))) || void 0 === r ? void 0 : r.node, !o) break;
                    if (o.save) n = h;
                    else if (o.check && h === n) break;
                    s.push(h), o.fe0f && (s.push(65039), a > 0 && 65039 == t[a - 1] && a--), o.valid && (i = s.slice(), 2 == o.valid && i.splice(1, 1), e && e.push(...t.slice(a).reverse()), t.length = a)
                }
                return i
            }
            const _ = new s.Logger(a.i),
                T = new Uint8Array(32);

            function I(t) {
                if (0 === t.length) throw new Error("invalid ENS name; empty component");
                return t
            }

            function P(t) {
                const e = (0, n.Y0)(x(t)),
                    r = [];
                if (0 === t.length) return r;
                let i = 0;
                for (let n = 0; n < e.length; n++) {
                    46 === e[n] && (r.push(I(e.slice(i, n))), i = n + 1)
                }
                if (i >= e.length) throw new Error("invalid ENS name; empty component");
                return r.push(I(e.slice(i))), r
            }

            function S(t) {
                return P(t).map((t => (0, n.ZN)(t))).join(".")
            }

            function N(t) {
                try {
                    return 0 !== P(t).length
                } catch (e) {}
                return !1
            }

            function L(t) {
                "string" !== typeof t && _.throwArgumentError("invalid ENS name; not a string", "name", t);
                let e = T;
                const r = P(t);
                for (; r.length;) e = (0, o.keccak256)((0, i.concat)([e, (0, o.keccak256)(r.pop())]));
                return (0, i.hexlify)(e)
            }

            function O(t) {
                return (0, i.hexlify)((0, i.concat)(P(t).map((t => {
                    if (t.length > 63) throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
                    const e = new Uint8Array(t.length + 1);
                    return e.set(t, 1), e[0] = e.length - 1, e
                })))) + "00"
            }
            T.fill(0)
        },
        67827: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return C
                }
            });
            var i = r(19485),
                n = r(2593),
                o = r(16441),
                s = r(38197),
                a = r(6881),
                h = r(1581),
                l = r(35644),
                u = r(32046),
                c = function(t, e, r, i) {
                    return new(r || (r = Promise))((function(n, o) {
                        function s(t) {
                            try {
                                h(i.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                h(i.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function h(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        h((i = i.apply(t, e || [])).next())
                    }))
                };
            const d = new h.Logger(l.i),
                f = new Uint8Array(32);
            f.fill(0);
            const p = n.O$.from(-1),
                m = n.O$.from(0),
                v = n.O$.from(1),
                g = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            const y = (0, o.hexZeroPad)(v.toHexString(), 32),
                w = (0, o.hexZeroPad)(m.toHexString(), 32),
                b = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                A = ["name", "version", "chainId", "verifyingContract", "salt"];

            function M(t) {
                return function(e) {
                    return "string" !== typeof e && d.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
                }
            }
            const E = {
                name: M("name"),
                version: M("version"),
                chainId: function(t) {
                    try {
                        return n.O$.from(t).toString()
                    } catch (e) {}
                    return d.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t)
                },
                verifyingContract: function(t) {
                    try {
                        return (0, i.getAddress)(t).toLowerCase()
                    } catch (e) {}
                    return d.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t)
                },
                salt: function(t) {
                    try {
                        const e = (0, o.arrayify)(t);
                        if (32 !== e.length) throw new Error("bad length");
                        return (0, o.hexlify)(e)
                    } catch (e) {}
                    return d.throwArgumentError('invalid domain value "salt"', "domain.salt", t)
                }
            };

            function k(t) {
                {
                    const e = t.match(/^(u?)int(\d*)$/);
                    if (e) {
                        const r = "" === e[1],
                            i = parseInt(e[2] || "256");
                        (i % 8 !== 0 || i > 256 || e[2] && e[2] !== String(i)) && d.throwArgumentError("invalid numeric width", "type", t);
                        const s = g.mask(r ? i - 1 : i),
                            a = r ? s.add(v).mul(p) : m;
                        return function(e) {
                            const r = n.O$.from(e);
                            return (r.lt(a) || r.gt(s)) && d.throwArgumentError(`value out-of-bounds for ${t}`, "value", e), (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32)
                        }
                    }
                } {
                    const e = t.match(/^bytes(\d+)$/);
                    if (e) {
                        const r = parseInt(e[1]);
                        return (0 === r || r > 32 || e[1] !== String(r)) && d.throwArgumentError("invalid bytes width", "type", t),
                            function(e) {
                                return (0, o.arrayify)(e).length !== r && d.throwArgumentError(`invalid length for ${t}`, "value", e),
                                    function(t) {
                                        const e = (0, o.arrayify)(t),
                                            r = e.length % 32;
                                        return r ? (0, o.hexConcat)([e, f.slice(r)]) : (0, o.hexlify)(e)
                                    }(e)
                            }
                    }
                }
                switch (t) {
                    case "address":
                        return function(t) {
                            return (0, o.hexZeroPad)((0, i.getAddress)(t), 32)
                        };
                    case "bool":
                        return function(t) {
                            return t ? y : w
                        };
                    case "bytes":
                        return function(t) {
                            return (0, s.keccak256)(t)
                        };
                    case "string":
                        return function(t) {
                            return (0, u.id)(t)
                        }
                }
                return null
            }

            function x(t, e) {
                return `${t}(${e.map((({name:t,type:e})=>e+" "+t)).join(",")})`
            }
            class C {
                constructor(t) {
                    (0, a.defineReadOnly)(this, "types", Object.freeze((0, a.deepCopy)(t))), (0, a.defineReadOnly)(this, "_encoderCache", {}), (0, a.defineReadOnly)(this, "_types", {});
                    const e = {},
                        r = {},
                        i = {};
                    Object.keys(t).forEach((t => {
                        e[t] = {}, r[t] = [], i[t] = {}
                    }));
                    for (const o in t) {
                        const i = {};
                        t[o].forEach((n => {
                            i[n.name] && d.throwArgumentError(`duplicate variable name ${JSON.stringify(n.name)} in ${JSON.stringify(o)}`, "types", t), i[n.name] = !0;
                            const s = n.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            s === o && d.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", t);
                            k(s) || (r[s] || d.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", t), r[s].push(o), e[o][s] = !0)
                        }))
                    }
                    const n = Object.keys(r).filter((t => 0 === r[t].length));
                    0 === n.length ? d.throwArgumentError("missing primary type", "types", t) : n.length > 1 && d.throwArgumentError(`ambiguous primary types or unused types: ${n.map((t=>JSON.stringify(t))).join(", ")}`, "types", t), (0, a.defineReadOnly)(this, "primaryType", n[0]),
                        function n(o, s) {
                            s[o] && d.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", t), s[o] = !0, Object.keys(e[o]).forEach((t => {
                                r[t] && (n(t, s), Object.keys(s).forEach((e => {
                                    i[e][t] = !0
                                })))
                            })), delete s[o]
                        }(this.primaryType, {});
                    for (const o in i) {
                        const e = Object.keys(i[o]);
                        e.sort(), this._types[o] = x(o, t[o]) + e.map((e => x(e, t[e]))).join("")
                    }
                }
                getEncoder(t) {
                    let e = this._encoderCache[t];
                    return e || (e = this._encoderCache[t] = this._getEncoder(t)), e
                }
                _getEncoder(t) {
                    {
                        const e = k(t);
                        if (e) return e
                    }
                    const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (e) {
                        const t = e[1],
                            r = this.getEncoder(t),
                            i = parseInt(e[3]);
                        return e => {
                            i >= 0 && e.length !== i && d.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
                            let n = e.map(r);
                            return this._types[t] && (n = n.map(s.keccak256)), (0, s.keccak256)((0, o.hexConcat)(n))
                        }
                    }
                    const r = this.types[t];
                    if (r) {
                        const e = (0, u.id)(this._types[t]);
                        return t => {
                            const i = r.map((({
                                name: e,
                                type: r
                            }) => {
                                const i = this.getEncoder(r)(t[e]);
                                return this._types[r] ? (0, s.keccak256)(i) : i
                            }));
                            return i.unshift(e), (0, o.hexConcat)(i)
                        }
                    }
                    return d.throwArgumentError(`unknown type: ${t}`, "type", t)
                }
                encodeType(t) {
                    const e = this._types[t];
                    return e || d.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), e
                }
                encodeData(t, e) {
                    return this.getEncoder(t)(e)
                }
                hashStruct(t, e) {
                    return (0, s.keccak256)(this.encodeData(t, e))
                }
                encode(t) {
                    return this.encodeData(this.primaryType, t)
                }
                hash(t) {
                    return this.hashStruct(this.primaryType, t)
                }
                _visit(t, e, r) {
                    if (k(t)) return r(t, e);
                    const i = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (i) {
                        const t = i[1],
                            n = parseInt(i[3]);
                        return n >= 0 && e.length !== n && d.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e), e.map((e => this._visit(t, e, r)))
                    }
                    const n = this.types[t];
                    return n ? n.reduce(((t, {
                        name: i,
                        type: n
                    }) => (t[i] = this._visit(n, e[i], r), t)), {}) : d.throwArgumentError(`unknown type: ${t}`, "type", t)
                }
                visit(t, e) {
                    return this._visit(this.primaryType, t, e)
                }
                static from(t) {
                    return new C(t)
                }
                static getPrimaryType(t) {
                    return C.from(t).primaryType
                }
                static hashStruct(t, e, r) {
                    return C.from(e).hashStruct(t, r)
                }
                static hashDomain(t) {
                    const e = [];
                    for (const r in t) {
                        const i = b[r];
                        i || d.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t), e.push({
                            name: r,
                            type: i
                        })
                    }
                    return e.sort(((t, e) => A.indexOf(t.name) - A.indexOf(e.name))), C.hashStruct("EIP712Domain", {
                        EIP712Domain: e
                    }, t)
                }
                static encode(t, e, r) {
                    return (0, o.hexConcat)(["0x1901", C.hashDomain(t), C.from(e).hash(r)])
                }
                static hash(t, e, r) {
                    return (0, s.keccak256)(C.encode(t, e, r))
                }
                static resolveNames(t, e, r, i) {
                    return c(this, void 0, void 0, (function*() {
                        t = (0, a.shallowCopy)(t);
                        const n = {};
                        t.verifyingContract && !(0, o.isHexString)(t.verifyingContract, 20) && (n[t.verifyingContract] = "0x");
                        const s = C.from(e);
                        s.visit(r, ((t, e) => ("address" !== t || (0, o.isHexString)(e, 20) || (n[e] = "0x"), e)));
                        for (const t in n) n[t] = yield i(t);
                        return t.verifyingContract && n[t.verifyingContract] && (t.verifyingContract = n[t.verifyingContract]), r = s.visit(r, ((t, e) => "address" === t && n[e] ? n[e] : e)), {
                            domain: t,
                            value: r
                        }
                    }))
                }
                static getPayload(t, e, r) {
                    C.hashDomain(t);
                    const i = {},
                        s = [];
                    A.forEach((e => {
                        const r = t[e];
                        null != r && (i[e] = E[e](r), s.push({
                            name: e,
                            type: b[e]
                        }))
                    }));
                    const h = C.from(e),
                        l = (0, a.shallowCopy)(e);
                    return l.EIP712Domain ? d.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", e) : l.EIP712Domain = s, h.encode(r), {
                        types: l,
                        domain: i,
                        primaryType: h.primaryType,
                        message: h.visit(r, ((t, e) => {
                            if (t.match(/^bytes(\d*)/)) return (0, o.hexlify)((0, o.arrayify)(e));
                            if (t.match(/^u?int/)) return n.O$.from(e).toString();
                            switch (t) {
                                case "address":
                                    return e.toLowerCase();
                                case "bool":
                                    return !!e;
                                case "string":
                                    return "string" !== typeof e && d.throwArgumentError("invalid string", "value", e), e
                            }
                            return d.throwArgumentError("unsupported type", "type", t)
                        }))
                    }
                }
            }
        },
        38197: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                keccak256: function() {
                    return s
                }
            });
            var i = r(91094),
                n = r.n(i),
                o = r(16441);

            function s(t) {
                return "0x" + n().keccak_256((0, o.arrayify)(t))
            }
        },
        1581: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                ErrorCode: function() {
                    return u
                },
                LogLevel: function() {
                    return l
                },
                Logger: function() {
                    return d
                }
            });
            let i = !1,
                n = !1;
            const o = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let s = o.default,
                a = null;
            const h = function() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e => {
                            try {
                                if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
                            } catch (r) {
                                t.push(e)
                            }
                        })), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }();
            var l, u;
            ! function(t) {
                t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
            }(l || (l = {})),
            function(t) {
                t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED"
            }(u || (u = {}));
            const c = "0123456789abcdef";
            class d {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, e) {
                    const r = t.toLowerCase();
                    null == o[r] && this.throwArgumentError("invalid log level name", "logLevel", t), s > o[r] || console.log.apply(console, e)
                }
                debug(...t) {
                    this._log(d.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(d.levels.INFO, t)
                }
                warn(...t) {
                    this._log(d.levels.WARNING, t)
                }
                makeError(t, e, r) {
                    if (n) return this.makeError("censored error", e, {});
                    e || (e = d.errors.UNKNOWN_ERROR), r || (r = {});
                    const i = [];
                    Object.keys(r).forEach((t => {
                        const e = r[t];
                        try {
                            if (e instanceof Uint8Array) {
                                let r = "";
                                for (let t = 0; t < e.length; t++) r += c[e[t] >> 4], r += c[15 & e[t]];
                                i.push(t + "=Uint8Array(0x" + r + ")")
                            } else i.push(t + "=" + JSON.stringify(e))
                        } catch (a) {
                            i.push(t + "=" + JSON.stringify(r[t].toString()))
                        }
                    })), i.push(`code=${e}`), i.push(`version=${this.version}`);
                    const o = t;
                    let s = "";
                    switch (e) {
                        case u.NUMERIC_FAULT:
                            {
                                s = "NUMERIC_FAULT";
                                const e = t;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        s += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        s += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        s += "-unbound-result"
                                }
                                break
                            }
                        case u.CALL_EXCEPTION:
                        case u.INSUFFICIENT_FUNDS:
                        case u.MISSING_NEW:
                        case u.NONCE_EXPIRED:
                        case u.REPLACEMENT_UNDERPRICED:
                        case u.TRANSACTION_REPLACED:
                        case u.UNPREDICTABLE_GAS_LIMIT:
                            s = e
                    }
                    s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), i.length && (t += " (" + i.join(", ") + ")");
                    const a = new Error(t);
                    return a.reason = o, a.code = e, Object.keys(r).forEach((function(t) {
                        a[t] = r[t]
                    })), a
                }
                throwError(t, e, r) {
                    throw this.makeError(t, e, r)
                }
                throwArgumentError(t, e, r) {
                    return this.throwError(t, d.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: r
                    })
                }
                assert(t, e, r, i) {
                    t || this.throwError(e, r, i)
                }
                assertArgument(t, e, r, i) {
                    t || this.throwArgumentError(e, r, i)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", d.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: h
                    })
                }
                checkSafeUint53(t, e) {
                    "number" === typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, d.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(e, d.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, e, r) {
                    r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, d.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    }), t > e && this.throwError("too many arguments" + r, d.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    })
                }
                checkNew(t, e) {
                    t !== Object && null != t || this.throwError("missing new", d.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(t, e) {
                    t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", d.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", d.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return a || (a = new d("logger/5.7.0")), a
                }
                static setCensorship(t, e) {
                    if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", d.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), i) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", d.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    n = !!t, i = !!e
                }
                static setLogLevel(t) {
                    const e = o[t.toLowerCase()];
                    null != e ? s = e : d.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new d(t)
                }
            }
            d.errors = u, d.levels = l
        },
        45710: function(t, e, r) {
            "use strict";
            r.d(e, {
                H: function() {
                    return u
                }
            });
            const i = new(r(1581).Logger)("networks/5.7.1");

            function n(t) {
                const e = function(e, r) {
                    null == r && (r = {});
                    const i = [];
                    if (e.InfuraProvider && "-" !== r.infura) try {
                        i.push(new e.InfuraProvider(t, r.infura))
                    } catch (n) {}
                    if (e.EtherscanProvider && "-" !== r.etherscan) try {
                        i.push(new e.EtherscanProvider(t, r.etherscan))
                    } catch (n) {}
                    if (e.AlchemyProvider && "-" !== r.alchemy) try {
                        i.push(new e.AlchemyProvider(t, r.alchemy))
                    } catch (n) {}
                    if (e.PocketProvider && "-" !== r.pocket) {
                        const o = ["goerli", "ropsten", "rinkeby", "sepolia"];
                        try {
                            const n = new e.PocketProvider(t, r.pocket);
                            n.network && -1 === o.indexOf(n.network.name) && i.push(n)
                        } catch (n) {}
                    }
                    if (e.CloudflareProvider && "-" !== r.cloudflare) try {
                        i.push(new e.CloudflareProvider(t))
                    } catch (n) {}
                    if (e.AnkrProvider && "-" !== r.ankr) try {
                        const n = ["ropsten"],
                            o = new e.AnkrProvider(t, r.ankr);
                        o.network && -1 === n.indexOf(o.network.name) && i.push(o)
                    } catch (n) {}
                    if (0 === i.length) return null;
                    if (e.FallbackProvider) {
                        let n = 1;
                        return null != r.quorum ? n = r.quorum : "homestead" === t && (n = 2), new e.FallbackProvider(i, n)
                    }
                    return i[0]
                };
                return e.renetwork = function(t) {
                    return n(t)
                }, e
            }

            function o(t, e) {
                const r = function(r, i) {
                    return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null
                };
                return r.renetwork = function(e) {
                    return o(t, e)
                }, r
            }
            const s = {
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead",
                    _defaultProvider: n("homestead")
                },
                a = {
                    chainId: 3,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "ropsten",
                    _defaultProvider: n("ropsten")
                },
                h = {
                    chainId: 63,
                    name: "classicMordor",
                    _defaultProvider: o("https://www.ethercluster.com/mordor", "classicMordor")
                },
                l = {
                    unspecified: {
                        chainId: 0,
                        name: "unspecified"
                    },
                    homestead: s,
                    mainnet: s,
                    morden: {
                        chainId: 2,
                        name: "morden"
                    },
                    ropsten: a,
                    testnet: a,
                    rinkeby: {
                        chainId: 4,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "rinkeby",
                        _defaultProvider: n("rinkeby")
                    },
                    kovan: {
                        chainId: 42,
                        name: "kovan",
                        _defaultProvider: n("kovan")
                    },
                    goerli: {
                        chainId: 5,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "goerli",
                        _defaultProvider: n("goerli")
                    },
                    kintsugi: {
                        chainId: 1337702,
                        name: "kintsugi"
                    },
                    sepolia: {
                        chainId: 11155111,
                        name: "sepolia",
                        _defaultProvider: n("sepolia")
                    },
                    classic: {
                        chainId: 61,
                        name: "classic",
                        _defaultProvider: o("https://www.ethercluster.com/etc", "classic")
                    },
                    classicMorden: {
                        chainId: 62,
                        name: "classicMorden"
                    },
                    classicMordor: h,
                    classicTestnet: h,
                    classicKotti: {
                        chainId: 6,
                        name: "classicKotti",
                        _defaultProvider: o("https://www.ethercluster.com/kotti", "classicKotti")
                    },
                    xdai: {
                        chainId: 100,
                        name: "xdai"
                    },
                    matic: {
                        chainId: 137,
                        name: "matic",
                        _defaultProvider: n("matic")
                    },
                    maticmum: {
                        chainId: 80001,
                        name: "maticmum"
                    },
                    optimism: {
                        chainId: 10,
                        name: "optimism",
                        _defaultProvider: n("optimism")
                    },
                    "optimism-kovan": {
                        chainId: 69,
                        name: "optimism-kovan"
                    },
                    "optimism-goerli": {
                        chainId: 420,
                        name: "optimism-goerli"
                    },
                    arbitrum: {
                        chainId: 42161,
                        name: "arbitrum"
                    },
                    "arbitrum-rinkeby": {
                        chainId: 421611,
                        name: "arbitrum-rinkeby"
                    },
                    "arbitrum-goerli": {
                        chainId: 421613,
                        name: "arbitrum-goerli"
                    },
                    bnb: {
                        chainId: 56,
                        name: "bnb"
                    },
                    bnbt: {
                        chainId: 97,
                        name: "bnbt"
                    }
                };

            function u(t) {
                if (null == t) return null;
                if ("number" === typeof t) {
                    for (const e in l) {
                        const r = l[e];
                        if (r.chainId === t) return {
                            name: r.name,
                            chainId: r.chainId,
                            ensAddress: r.ensAddress || null,
                            _defaultProvider: r._defaultProvider || null
                        }
                    }
                    return {
                        chainId: t,
                        name: "unknown"
                    }
                }
                if ("string" === typeof t) {
                    const e = l[t];
                    return null == e ? null : {
                        name: e.name,
                        chainId: e.chainId,
                        ensAddress: e.ensAddress,
                        _defaultProvider: e._defaultProvider || null
                    }
                }
                const e = l[t.name];
                if (!e) return "number" !== typeof t.chainId && i.throwArgumentError("invalid network chainId", "network", t), t;
                0 !== t.chainId && t.chainId !== e.chainId && i.throwArgumentError("network chainId mismatch", "network", t);
                let r = t._defaultProvider || null;
                var n;
                return null == r && e._defaultProvider && (r = (n = e._defaultProvider) && "function" === typeof n.renetwork ? e._defaultProvider.renetwork(t) : e._defaultProvider), {
                    name: t.name,
                    chainId: e.chainId,
                    ensAddress: t.ensAddress || e.ensAddress || null,
                    _defaultProvider: r
                }
            }
        },
        6881: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                Description: function() {
                    return m
                },
                checkProperties: function() {
                    return l
                },
                deepCopy: function() {
                    return p
                },
                defineReadOnly: function() {
                    return s
                },
                getStatic: function() {
                    return a
                },
                resolveProperties: function() {
                    return h
                },
                shallowCopy: function() {
                    return u
                }
            });
            var i = r(1581);
            var n = function(t, e, r, i) {
                return new(r || (r = Promise))((function(n, o) {
                    function s(t) {
                        try {
                            h(i.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            h(i.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function h(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    h((i = i.apply(t, e || [])).next())
                }))
            };
            const o = new i.Logger("properties/5.7.0");

            function s(t, e, r) {
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }

            function a(t, e) {
                for (let r = 0; r < 32; r++) {
                    if (t[e]) return t[e];
                    if (!t.prototype || "object" !== typeof t.prototype) break;
                    t = Object.getPrototypeOf(t.prototype).constructor
                }
                return null
            }

            function h(t) {
                return n(this, void 0, void 0, (function*() {
                    const e = Object.keys(t).map((e => {
                        const r = t[e];
                        return Promise.resolve(r).then((t => ({
                            key: e,
                            value: t
                        })))
                    }));
                    return (yield Promise.all(e)).reduce(((t, e) => (t[e.key] = e.value, t)), {})
                }))
            }

            function l(t, e) {
                t && "object" === typeof t || o.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach((r => {
                    e[r] || o.throwArgumentError("invalid object key - " + r, "transaction:" + r, t)
                }))
            }

            function u(t) {
                const e = {};
                for (const r in t) e[r] = t[r];
                return e
            }
            const c = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function d(t) {
                if (void 0 === t || null === t || c[typeof t]) return !0;
                if (Array.isArray(t) || "object" === typeof t) {
                    if (!Object.isFrozen(t)) return !1;
                    const r = Object.keys(t);
                    for (let i = 0; i < r.length; i++) {
                        let n = null;
                        try {
                            n = t[r[i]]
                        } catch (e) {
                            continue
                        }
                        if (!d(n)) return !1
                    }
                    return !0
                }
                return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function f(t) {
                if (d(t)) return t;
                if (Array.isArray(t)) return Object.freeze(t.map((t => p(t))));
                if ("object" === typeof t) {
                    const e = {};
                    for (const r in t) {
                        const i = t[r];
                        void 0 !== i && s(e, r, p(i))
                    }
                    return e
                }
                return o.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
            }

            function p(t) {
                return f(t)
            }
            class m {
                constructor(t) {
                    for (const e in t) this[e] = p(t[e])
                }
            }
        },
        34216: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return i
                }
            });
            const i = "providers/5.7.2"
        },
        97013: function(t, e, r) {
            "use strict";
            r.d(e, {
                H2: function() {
                    return U
                },
                Zk: function() {
                    return j
                }
            });
            var i = r(81556),
                n = r(59567),
                o = r(57727),
                s = r(2593),
                a = r(16441),
                h = r(57218),
                l = r(27586),
                u = r(45710),
                c = r(6881),
                d = r(2006),
                f = r(29251),
                p = r(37707),
                m = r(92882),
                v = r.n(m),
                g = r(1581),
                y = r(34216),
                w = r(30032),
                b = function(t, e, r, i) {
                    return new(r || (r = Promise))((function(n, o) {
                        function s(t) {
                            try {
                                h(i.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                h(i.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function h(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        h((i = i.apply(t, e || [])).next())
                    }))
                };
            const A = new g.Logger(y.i);

            function M(t) {
                return null == t ? "null" : (32 !== (0, a.hexDataLength)(t) && A.throwArgumentError("invalid topic", "topic", t), t.toLowerCase())
            }

            function E(t) {
                for (t = t.slice(); t.length > 0 && null == t[t.length - 1];) t.pop();
                return t.map((t => {
                    if (Array.isArray(t)) {
                        const e = {};
                        t.forEach((t => {
                            e[M(t)] = !0
                        }));
                        const r = Object.keys(e);
                        return r.sort(), r.join("|")
                    }
                    return M(t)
                })).join("&")
            }

            function k(t) {
                if ("string" === typeof t) {
                    if (t = t.toLowerCase(), 32 === (0, a.hexDataLength)(t)) return "tx:" + t;
                    if (-1 === t.indexOf(":")) return t
                } else {
                    if (Array.isArray(t)) return "filter:*:" + E(t);
                    if (i.Sg.isForkEvent(t)) throw A.warn("not implemented"), new Error("not implemented");
                    if (t && "object" === typeof t) return "filter:" + (t.address || "*") + ":" + E(t.topics || [])
                }
                throw new Error("invalid event - " + t)
            }

            function x() {
                return (new Date).getTime()
            }

            function C(t) {
                return new Promise((e => {
                    setTimeout(e, t)
                }))
            }
            const _ = ["block", "network", "pending", "poll"];
            class T {
                constructor(t, e, r) {
                    (0, c.defineReadOnly)(this, "tag", t), (0, c.defineReadOnly)(this, "listener", e), (0, c.defineReadOnly)(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter
                    }
                    return this.tag
                }
                get type() {
                    return this.tag.split(":")[0]
                }
                get hash() {
                    const t = this.tag.split(":");
                    return "tx" !== t[0] ? null : t[1]
                }
                get filter() {
                    const t = this.tag.split(":");
                    if ("filter" !== t[0]) return null;
                    const e = t[1],
                        r = "" === (i = t[2]) ? [] : i.split(/&/g).map((t => {
                            if ("" === t) return [];
                            const e = t.split("|").map((t => "null" === t ? null : t));
                            return 1 === e.length ? e[0] : e
                        }));
                    var i;
                    const n = {};
                    return r.length > 0 && (n.topics = r), e && "*" !== e && (n.address = e), n
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || _.indexOf(this.tag) >= 0
                }
            }
            const I = {
                0: {
                    symbol: "btc",
                    p2pkh: 0,
                    p2sh: 5,
                    prefix: "bc"
                },
                2: {
                    symbol: "ltc",
                    p2pkh: 48,
                    p2sh: 50,
                    prefix: "ltc"
                },
                3: {
                    symbol: "doge",
                    p2pkh: 30,
                    p2sh: 22
                },
                60: {
                    symbol: "eth",
                    ilk: "eth"
                },
                61: {
                    symbol: "etc",
                    ilk: "eth"
                },
                700: {
                    symbol: "xdai",
                    ilk: "eth"
                }
            };

            function P(t) {
                return (0, a.hexZeroPad)(s.O$.from(t).toHexString(), 32)
            }

            function S(t) {
                return o.Base58.encode((0, a.concat)([t, (0, a.hexDataSlice)((0, d.JQ)((0, d.JQ)(t)), 0, 4)]))
            }
            const N = new RegExp("^(ipfs)://(.*)$", "i"),
                L = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), N, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

            function O(t, e) {
                try {
                    return (0, f.ZN)(R(t, e))
                } catch (r) {}
                return null
            }

            function R(t, e) {
                if ("0x" === t) return null;
                const r = s.O$.from((0, a.hexDataSlice)(t, e, e + 32)).toNumber(),
                    i = s.O$.from((0, a.hexDataSlice)(t, r, r + 32)).toNumber();
                return (0, a.hexDataSlice)(t, r + 32, r + 32 + i)
            }

            function B(t) {
                return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : A.throwArgumentError("unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
            }

            function D(t) {
                const e = (0, a.arrayify)(t);
                if (e.length > 32) throw new Error("internal; should not happen");
                const r = new Uint8Array(32);
                return r.set(e, 32 - e.length), r
            }

            function z(t) {
                if (t.length % 32 === 0) return t;
                const e = new Uint8Array(32 * Math.ceil(t.length / 32));
                return e.set(t), e
            }

            function F(t) {
                const e = [];
                let r = 0;
                for (let i = 0; i < t.length; i++) e.push(null), r += 32;
                for (let i = 0; i < t.length; i++) {
                    const n = (0, a.arrayify)(t[i]);
                    e[i] = D(r), e.push(D(n.length)), e.push(z(n)), r += 32 + 32 * Math.ceil(n.length / 32)
                }
                return (0, a.hexConcat)(e)
            }
            class U {
                constructor(t, e, r, i) {
                    (0, c.defineReadOnly)(this, "provider", t), (0, c.defineReadOnly)(this, "name", r), (0, c.defineReadOnly)(this, "address", t.formatter.address(e)), (0, c.defineReadOnly)(this, "_resolvedAddress", i)
                }
                supportsWildcard() {
                    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                        to: this.address,
                        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                    }).then((t => s.O$.from(t).eq(1))).catch((t => {
                        if (t.code === g.Logger.errors.CALL_EXCEPTION) return !1;
                        throw this._supportsEip2544 = null, t
                    }))), this._supportsEip2544
                }
                _fetch(t, e) {
                    return b(this, void 0, void 0, (function*() {
                        const r = {
                            to: this.address,
                            ccipReadEnabled: !0,
                            data: (0, a.hexConcat)([t, (0, l.VM)(this.name), e || "0x"])
                        };
                        let i = !1;
                        (yield this.supportsWildcard()) && (i = !0, r.data = (0, a.hexConcat)(["0x9061b923", F([(0, l.Kn)(this.name), r.data])]));
                        try {
                            let t = yield this.provider.call(r);
                            return (0, a.arrayify)(t).length % 32 === 4 && A.throwError("resolver threw error", g.Logger.errors.CALL_EXCEPTION, {
                                transaction: r,
                                data: t
                            }), i && (t = R(t, 0)), t
                        } catch (n) {
                            if (n.code === g.Logger.errors.CALL_EXCEPTION) return null;
                            throw n
                        }
                    }))
                }
                _fetchBytes(t, e) {
                    return b(this, void 0, void 0, (function*() {
                        const r = yield this._fetch(t, e);
                        return null != r ? R(r, 0) : null
                    }))
                }
                _getAddress(t, e) {
                    const r = I[String(t)];
                    if (null == r && A.throwError(`unsupported coin type: ${t}`, g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`
                        }), "eth" === r.ilk) return this.provider.formatter.address(e);
                    const i = (0, a.arrayify)(e);
                    if (null != r.p2pkh) {
                        const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (t) {
                            const e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return S((0, a.concat)([
                                [r.p2pkh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.p2sh) {
                        const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (t) {
                            const e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return S((0, a.concat)([
                                [r.p2sh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.prefix) {
                        const t = i[1];
                        let e = i[0];
                        if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1, e >= 0 && i.length === 2 + t && t >= 1 && t <= 75) {
                            const t = v().toWords(i.slice(2));
                            return t.unshift(e), v().encode(r.prefix, t)
                        }
                    }
                    return null
                }
                getAddress(t) {
                    return b(this, void 0, void 0, (function*() {
                        if (null == t && (t = 60), 60 === t) try {
                            const t = yield this._fetch("0x3b3b57de");
                            return "0x" === t || t === h.R ? null : this.provider.formatter.callAddress(t)
                        } catch (i) {
                            if (i.code === g.Logger.errors.CALL_EXCEPTION) return null;
                            throw i
                        }
                        const e = yield this._fetchBytes("0xf1cb7e06", P(t));
                        if (null == e || "0x" === e) return null;
                        const r = this._getAddress(t, e);
                        return null == r && A.throwError("invalid or unsupported coin data", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`,
                            coinType: t,
                            data: e
                        }), r
                    }))
                }
                getAvatar() {
                    return b(this, void 0, void 0, (function*() {
                        const t = [{
                            type: "name",
                            content: this.name
                        }];
                        try {
                            const e = yield this.getText("avatar");
                            if (null == e) return null;
                            for (let r = 0; r < L.length; r++) {
                                const i = e.match(L[r]);
                                if (null == i) continue;
                                const n = i[1].toLowerCase();
                                switch (n) {
                                    case "https":
                                        return t.push({
                                            type: "url",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "data":
                                        return t.push({
                                            type: "data",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "ipfs":
                                        return t.push({
                                            type: "ipfs",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: B(e)
                                        };
                                    case "erc721":
                                    case "erc1155":
                                        {
                                            const r = "erc721" === n ? "0xc87b56dd" : "0x0e89341c";t.push({
                                                type: n,
                                                content: e
                                            });
                                            const o = this._resolvedAddress || (yield this.getAddress()),
                                                h = (i[2] || "").split("/");
                                            if (2 !== h.length) return null;
                                            const l = yield this.provider.formatter.address(h[0]), u = (0, a.hexZeroPad)(s.O$.from(h[1]).toHexString(), 32);
                                            if ("erc721" === n) {
                                                const e = this.provider.formatter.callAddress(yield this.provider.call({
                                                    to: l,
                                                    data: (0, a.hexConcat)(["0x6352211e", u])
                                                }));
                                                if (o !== e) return null;
                                                t.push({
                                                    type: "owner",
                                                    content: e
                                                })
                                            } else if ("erc1155" === n) {
                                                const e = s.O$.from(yield this.provider.call({
                                                    to: l,
                                                    data: (0, a.hexConcat)(["0x00fdd58e", (0, a.hexZeroPad)(o, 32), u])
                                                }));
                                                if (e.isZero()) return null;
                                                t.push({
                                                    type: "balance",
                                                    content: e.toString()
                                                })
                                            }
                                            const c = {
                                                to: this.provider.formatter.address(h[0]),
                                                data: (0, a.hexConcat)([r, u])
                                            };
                                            let d = O(yield this.provider.call(c), 0);
                                            if (null == d) return null;t.push({
                                                type: "metadata-url-base",
                                                content: d
                                            }),
                                            "erc1155" === n && (d = d.replace("{id}", u.substring(2)), t.push({
                                                type: "metadata-url-expanded",
                                                content: d
                                            })),
                                            d.match(/^ipfs:/i) && (d = B(d)),
                                            t.push({
                                                type: "metadata-url",
                                                content: d
                                            });
                                            const f = yield(0, p.fetchJson)(d);
                                            if (!f) return null;t.push({
                                                type: "metadata",
                                                content: JSON.stringify(f)
                                            });
                                            let m = f.image;
                                            if ("string" !== typeof m) return null;
                                            if (m.match(/^(https:\/\/|data:)/i));
                                            else {
                                                if (null == m.match(N)) return null;
                                                t.push({
                                                    type: "url-ipfs",
                                                    content: m
                                                }), m = B(m)
                                            }
                                            return t.push({
                                                type: "url",
                                                content: m
                                            }),
                                            {
                                                linkage: t,
                                                url: m
                                            }
                                        }
                                }
                            }
                        } catch (e) {}
                        return null
                    }))
                }
                getContentHash() {
                    return b(this, void 0, void 0, (function*() {
                        const t = yield this._fetchBytes("0xbc1c58d1");
                        if (null == t || "0x" === t) return null;
                        const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (e) {
                            const t = parseInt(e[3], 16);
                            if (e[4].length === 2 * t) return "ipfs://" + o.Base58.encode("0x" + e[1])
                        }
                        const r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (r) {
                            const t = parseInt(r[3], 16);
                            if (r[4].length === 2 * t) return "ipns://" + o.Base58.encode("0x" + r[1])
                        }
                        const i = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        if (i && 64 === i[1].length) return "bzz://" + i[1];
                        const s = t.match(/^0x90b2c605([0-9a-f]*)$/);
                        if (s && 68 === s[1].length) {
                            const t = {
                                "=": "",
                                "+": "-",
                                "/": "_"
                            };
                            return "sia://" + (0, n.c)("0x" + s[1]).replace(/[=+\/]/g, (e => t[e]))
                        }
                        return A.throwError("invalid or unsupported content hash data", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "getContentHash()",
                            data: t
                        })
                    }))
                }
                getText(t) {
                    return b(this, void 0, void 0, (function*() {
                        let e = (0, f.Y0)(t);
                        e = (0, a.concat)([P(64), P(e.length), e]), e.length % 32 !== 0 && (e = (0, a.concat)([e, (0, a.hexZeroPad)("0x", 32 - t.length % 32)]));
                        const r = yield this._fetchBytes("0x59d1d43c", (0, a.hexlify)(e));
                        return null == r || "0x" === r ? null : (0, f.ZN)(r)
                    }))
                }
            }
            let q = null,
                H = 1;
            class j extends i.zt {
                constructor(t) {
                    if (super(), this._events = [], this._emitted = {
                            block: -2
                        }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), (0, c.defineReadOnly)(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), t instanceof Promise) this._networkPromise = t, t.catch((t => {})), this._ready().catch((t => {}));
                    else {
                        const e = (0, c.getStatic)(new.target, "getNetwork")(t);
                        e ? ((0, c.defineReadOnly)(this, "_network", e), this.emit("network", e, null)) : A.throwArgumentError("invalid network", "network", t)
                    }
                    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
                }
                _ready() {
                    return b(this, void 0, void 0, (function*() {
                        if (null == this._network) {
                            let e = null;
                            if (this._networkPromise) try {
                                e = yield this._networkPromise
                            } catch (t) {}
                            null == e && (e = yield this.detectNetwork()), e || A.throwError("no network detected", g.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = e : (0, c.defineReadOnly)(this, "_network", e), this.emit("network", e, null))
                        }
                        return this._network
                    }))
                }
                get ready() {
                    return (0, p.poll)((() => this._ready().then((t => t), (t => {
                        if (t.code !== g.Logger.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t
                    }))))
                }
                static getFormatter() {
                    return null == q && (q = new w.Mb), q
                }
                static getNetwork(t) {
                    return (0, u.H)(null == t ? "homestead" : t)
                }
                ccipReadFetch(t, e, r) {
                    return b(this, void 0, void 0, (function*() {
                        if (this.disableCcipRead || 0 === r.length) return null;
                        const i = t.to.toLowerCase(),
                            n = e.toLowerCase(),
                            o = [];
                        for (let t = 0; t < r.length; t++) {
                            const e = r[t],
                                s = e.replace("{sender}", i).replace("{data}", n),
                                a = e.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                    data: n,
                                    sender: i
                                }),
                                h = yield(0, p.fetchJson)({
                                    url: s,
                                    errorPassThrough: !0
                                }, a, ((t, e) => (t.status = e.statusCode, t)));
                            if (h.data) return h.data;
                            const l = h.message || "unknown error";
                            if (h.status >= 400 && h.status < 500) return A.throwError(`response not found during CCIP fetch: ${l}`, g.Logger.errors.SERVER_ERROR, {
                                url: e,
                                errorMessage: l
                            });
                            o.push(l)
                        }
                        return A.throwError(`error encountered during CCIP fetch: ${o.map((t=>JSON.stringify(t))).join(", ")}`, g.Logger.errors.SERVER_ERROR, {
                            urls: r,
                            errorMessages: o
                        })
                    }))
                }
                _getInternalBlockNumber(t) {
                    return b(this, void 0, void 0, (function*() {
                        if (yield this._ready(), t > 0)
                            for (; this._internalBlockNumber;) {
                                const e = this._internalBlockNumber;
                                try {
                                    const r = yield e;
                                    if (x() - r.respTime <= t) return r.blockNumber;
                                    break
                                } catch (i) {
                                    if (this._internalBlockNumber === e) break
                                }
                            }
                        const e = x(),
                            r = (0, c.resolveProperties)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then((t => null), (t => t))
                            }).then((({
                                blockNumber: t,
                                networkError: i
                            }) => {
                                if (i) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), i;
                                const n = x();
                                return (t = s.O$.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, this._setFastBlockNumber(t), {
                                    blockNumber: t,
                                    reqTime: e,
                                    respTime: n
                                }
                            }));
                        return this._internalBlockNumber = r, r.catch((t => {
                            this._internalBlockNumber === r && (this._internalBlockNumber = null)
                        })), (yield r).blockNumber
                    }))
                }
                poll() {
                    return b(this, void 0, void 0, (function*() {
                        const t = H++,
                            e = [];
                        let r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                        } catch (i) {
                            return void this.emit("error", i)
                        }
                        if (this._setFastBlockNumber(r), this.emit("poll", t, r), r !== this._lastBlockNumber) {
                            if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) A.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", A.makeError("network block skew detected", g.Logger.errors.NETWORK_ERROR, {
                                blockNumber: r,
                                event: "blockSkew",
                                previousBlockNumber: this._emitted.block
                            })), this.emit("block", r);
                            else
                                for (let t = this._emitted.block + 1; t <= r; t++) this.emit("block", t);
                            this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach((t => {
                                if ("block" === t) return;
                                const e = this._emitted[t];
                                "pending" !== e && r - e > 12 && delete this._emitted[t]
                            }))), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach((t => {
                                switch (t.type) {
                                    case "tx":
                                        {
                                            const r = t.hash;
                                            let i = this.getTransactionReceipt(r).then((t => t && null != t.blockNumber ? (this._emitted["t:" + r] = t.blockNumber, this.emit(r, t), null) : null)).catch((t => {
                                                this.emit("error", t)
                                            }));e.push(i);
                                            break
                                        }
                                    case "filter":
                                        if (!t._inflight) {
                                            t._inflight = !0, -2 === t._lastBlockNumber && (t._lastBlockNumber = r - 1);
                                            const i = t.filter;
                                            i.fromBlock = t._lastBlockNumber + 1, i.toBlock = r;
                                            const n = i.toBlock - this._maxFilterBlockRange;
                                            n > i.fromBlock && (i.fromBlock = n), i.fromBlock < 0 && (i.fromBlock = 0);
                                            const o = this.getLogs(i).then((e => {
                                                t._inflight = !1, 0 !== e.length && e.forEach((e => {
                                                    e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber), this._emitted["b:" + e.blockHash] = e.blockNumber, this._emitted["t:" + e.transactionHash] = e.blockNumber, this.emit(i, e)
                                                }))
                                            })).catch((e => {
                                                this.emit("error", e), t._inflight = !1
                                            }));
                                            e.push(o)
                                        }
                                }
                            })), this._lastBlockNumber = r, Promise.all(e).then((() => {
                                this.emit("didPoll", t)
                            })).catch((t => {
                                this.emit("error", t)
                            }))
                        } else this.emit("didPoll", t)
                    }))
                }
                resetEventsBlock(t) {
                    this._lastBlockNumber = t - 1, this.polling && this.poll()
                }
                get network() {
                    return this._network
                }
                detectNetwork() {
                    return b(this, void 0, void 0, (function*() {
                        return A.throwError("provider does not support network detection", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "provider.detectNetwork"
                        })
                    }))
                }
                getNetwork() {
                    return b(this, void 0, void 0, (function*() {
                        const t = yield this._ready(), e = yield this.detectNetwork();
                        if (t.chainId !== e.chainId) {
                            if (this.anyNetwork) return this._network = e, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", e, t), yield C(0), this._network;
                            const r = A.makeError("underlying network changed", g.Logger.errors.NETWORK_ERROR, {
                                event: "changed",
                                network: t,
                                detectedNetwork: e
                            });
                            throw this.emit("error", r), r
                        }
                        return t
                    }))
                }
                get blockNumber() {
                    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((t => {
                        this._setFastBlockNumber(t)
                    }), (t => {})), null != this._fastBlockNumber ? this._fastBlockNumber : -1
                }
                get polling() {
                    return null != this._poller
                }
                set polling(t) {
                    t && !this._poller ? (this._poller = setInterval((() => {
                        this.poll()
                    }), this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout((() => {
                        this.poll(), this._bootstrapPoll = setTimeout((() => {
                            this._poller || this.poll(), this._bootstrapPoll = null
                        }), this.pollingInterval)
                    }), 0))) : !t && this._poller && (clearInterval(this._poller), this._poller = null)
                }
                get pollingInterval() {
                    return this._pollingInterval
                }
                set pollingInterval(t) {
                    if ("number" !== typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval");
                    this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval((() => {
                        this.poll()
                    }), this._pollingInterval))
                }
                _getFastBlockNumber() {
                    const t = x();
                    return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then((t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber)))), this._fastBlockNumberPromise
                }
                _setFastBlockNumber(t) {
                    null != this._fastBlockNumber && t < this._fastBlockNumber || (this._fastQueryDate = x(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)))
                }
                waitForTransaction(t, e, r) {
                    return b(this, void 0, void 0, (function*() {
                        return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
                    }))
                }
                _waitForTransaction(t, e, r, i) {
                    return b(this, void 0, void 0, (function*() {
                        const n = yield this.getTransactionReceipt(t);
                        return (n ? n.confirmations : 0) >= e ? n : new Promise(((n, o) => {
                            const s = [];
                            let a = !1;
                            const h = function() {
                                    return !!a || (a = !0, s.forEach((t => {
                                        t()
                                    })), !1)
                                },
                                l = t => {
                                    t.confirmations < e || h() || n(t)
                                };
                            if (this.on(t, l), s.push((() => {
                                    this.removeListener(t, l)
                                })), i) {
                                let r = i.startBlock,
                                    n = null;
                                const l = s => b(this, void 0, void 0, (function*() {
                                    a || (yield C(1e3), this.getTransactionCount(i.from).then((u => b(this, void 0, void 0, (function*() {
                                        if (!a) {
                                            if (u <= i.nonce) r = s;
                                            else {
                                                {
                                                    const e = yield this.getTransaction(t);
                                                    if (e && null != e.blockNumber) return
                                                }
                                                for (null == n && (n = r - 3, n < i.startBlock && (n = i.startBlock)); n <= s;) {
                                                    if (a) return;
                                                    const r = yield this.getBlockWithTransactions(n);
                                                    for (let n = 0; n < r.transactions.length; n++) {
                                                        const s = r.transactions[n];
                                                        if (s.hash === t) return;
                                                        if (s.from === i.from && s.nonce === i.nonce) {
                                                            if (a) return;
                                                            const r = yield this.waitForTransaction(s.hash, e);
                                                            if (h()) return;
                                                            let n = "replaced";
                                                            return s.data === i.data && s.to === i.to && s.value.eq(i.value) ? n = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (n = "cancelled"), void o(A.makeError("transaction was replaced", g.Logger.errors.TRANSACTION_REPLACED, {
                                                                cancelled: "replaced" === n || "cancelled" === n,
                                                                reason: n,
                                                                replacement: this._wrapTransaction(s),
                                                                hash: t,
                                                                receipt: r
                                                            }))
                                                        }
                                                    }
                                                    n++
                                                }
                                            }
                                            a || this.once("block", l)
                                        }
                                    }))), (t => {
                                        a || this.once("block", l)
                                    })))
                                }));
                                if (a) return;
                                this.once("block", l), s.push((() => {
                                    this.removeListener("block", l)
                                }))
                            }
                            if ("number" === typeof r && r > 0) {
                                const t = setTimeout((() => {
                                    h() || o(A.makeError("timeout exceeded", g.Logger.errors.TIMEOUT, {
                                        timeout: r
                                    }))
                                }), r);
                                t.unref && t.unref(), s.push((() => {
                                    clearTimeout(t)
                                }))
                            }
                        }))
                    }))
                }
                getBlockNumber() {
                    return b(this, void 0, void 0, (function*() {
                        return this._getInternalBlockNumber(0)
                    }))
                }
                getGasPrice() {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield this.perform("getGasPrice", {});
                        try {
                            return s.O$.from(t)
                        } catch (e) {
                            return A.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getGasPrice",
                                result: t,
                                error: e
                            })
                        }
                    }))
                }
                getBalance(t, e) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield(0, c.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), i = yield this.perform("getBalance", r);
                        try {
                            return s.O$.from(i)
                        } catch (n) {
                            return A.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getBalance",
                                params: r,
                                result: i,
                                error: n
                            })
                        }
                    }))
                }
                getTransactionCount(t, e) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield(0, c.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), i = yield this.perform("getTransactionCount", r);
                        try {
                            return s.O$.from(i).toNumber()
                        } catch (n) {
                            return A.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getTransactionCount",
                                params: r,
                                result: i,
                                error: n
                            })
                        }
                    }))
                }
                getCode(t, e) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield(0, c.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), i = yield this.perform("getCode", r);
                        try {
                            return (0, a.hexlify)(i)
                        } catch (n) {
                            return A.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getCode",
                                params: r,
                                result: i,
                                error: n
                            })
                        }
                    }))
                }
                getStorageAt(t, e, r) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const i = yield(0, c.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(r),
                            position: Promise.resolve(e).then((t => (0, a.hexValue)(t)))
                        }), n = yield this.perform("getStorageAt", i);
                        try {
                            return (0, a.hexlify)(n)
                        } catch (o) {
                            return A.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "getStorageAt",
                                params: i,
                                result: n,
                                error: o
                            })
                        }
                    }))
                }
                _wrapTransaction(t, e, r) {
                    if (null != e && 32 !== (0, a.hexDataLength)(e)) throw new Error("invalid response - sendTransaction");
                    const i = t;
                    return null != e && t.hash !== e && A.throwError("Transaction hash mismatch from Provider.sendTransaction.", g.Logger.errors.UNKNOWN_ERROR, {
                        expectedHash: t.hash,
                        returnedHash: e
                    }), i.wait = (e, i) => b(this, void 0, void 0, (function*() {
                        let n;
                        null == e && (e = 1), null == i && (i = 0), 0 !== e && null != r && (n = {
                            data: t.data,
                            from: t.from,
                            nonce: t.nonce,
                            to: t.to,
                            value: t.value,
                            startBlock: r
                        });
                        const o = yield this._waitForTransaction(t.hash, e, i, n);
                        return null == o && 0 === e ? null : (this._emitted["t:" + t.hash] = o.blockNumber, 0 === o.status && A.throwError("transaction failed", g.Logger.errors.CALL_EXCEPTION, {
                            transactionHash: t.hash,
                            transaction: t,
                            receipt: o
                        }), o)
                    })), i
                }
                sendTransaction(t) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield Promise.resolve(t).then((t => (0, a.hexlify)(t))), r = this.formatter.transaction(t);
                        null == r.confirmations && (r.confirmations = 0);
                        const i = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            const t = yield this.perform("sendTransaction", {
                                signedTransaction: e
                            });
                            return this._wrapTransaction(r, t, i)
                        } catch (n) {
                            throw n.transaction = r, n.transactionHash = r.hash, n
                        }
                    }))
                }
                _getTransactionRequest(t) {
                    return b(this, void 0, void 0, (function*() {
                        const e = yield t, r = {};
                        return ["from", "to"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? this._getAddress(t) : null)))
                        })), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? s.O$.from(t) : null)))
                        })), ["type"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => null != t ? t : null)))
                        })), e.accessList && (r.accessList = this.formatter.accessList(e.accessList)), ["data"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? (0, a.hexlify)(t) : null)))
                        })), this.formatter.transactionRequest(yield(0, c.resolveProperties)(r))
                    }))
                }
                _getFilter(t) {
                    return b(this, void 0, void 0, (function*() {
                        t = yield t;
                        const e = {};
                        return null != t.address && (e.address = this._getAddress(t.address)), ["blockHash", "topics"].forEach((r => {
                            null != t[r] && (e[r] = t[r])
                        })), ["fromBlock", "toBlock"].forEach((r => {
                            null != t[r] && (e[r] = this._getBlockTag(t[r]))
                        })), this.formatter.filter(yield(0, c.resolveProperties)(e))
                    }))
                }
                _call(t, e, r) {
                    return b(this, void 0, void 0, (function*() {
                        r >= 10 && A.throwError("CCIP read exceeded maximum redirections", g.Logger.errors.SERVER_ERROR, {
                            redirects: r,
                            transaction: t
                        });
                        const i = t.to,
                            n = yield this.perform("call", {
                                transaction: t,
                                blockTag: e
                            });
                        if (r >= 0 && "latest" === e && null != i && "0x556f1830" === n.substring(0, 10) && (0, a.hexDataLength)(n) % 32 === 4) try {
                            const o = (0, a.hexDataSlice)(n, 4),
                                h = (0, a.hexDataSlice)(o, 0, 32);
                            s.O$.from(h).eq(i) || A.throwError("CCIP Read sender did not match", g.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: n
                            });
                            const l = [],
                                u = s.O$.from((0, a.hexDataSlice)(o, 32, 64)).toNumber(),
                                c = s.O$.from((0, a.hexDataSlice)(o, u, u + 32)).toNumber(),
                                d = (0, a.hexDataSlice)(o, u + 32);
                            for (let e = 0; e < c; e++) {
                                const r = O(d, 32 * e);
                                null == r && A.throwError("CCIP Read contained corrupt URL string", g.Logger.errors.CALL_EXCEPTION, {
                                    name: "OffchainLookup",
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    transaction: t,
                                    data: n
                                }), l.push(r)
                            }
                            const f = R(o, 64);
                            s.O$.from((0, a.hexDataSlice)(o, 100, 128)).isZero() || A.throwError("CCIP Read callback selector included junk", g.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: n
                            });
                            const p = (0, a.hexDataSlice)(o, 96, 100),
                                m = R(o, 128),
                                v = yield this.ccipReadFetch(t, f, l);
                            null == v && A.throwError("CCIP Read disabled or provided no URLs", g.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: n
                            });
                            const y = {
                                to: i,
                                data: (0, a.hexConcat)([p, F([v, m])])
                            };
                            return this._call(y, e, r + 1)
                        } catch (o) {
                            if (o.code === g.Logger.errors.SERVER_ERROR) throw o
                        }
                        try {
                            return (0, a.hexlify)(n)
                        } catch (o) {
                            return A.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "call",
                                params: {
                                    transaction: t,
                                    blockTag: e
                                },
                                result: n,
                                error: o
                            })
                        }
                    }))
                }
                call(t, e) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield(0, c.resolveProperties)({
                            transaction: this._getTransactionRequest(t),
                            blockTag: this._getBlockTag(e),
                            ccipReadEnabled: Promise.resolve(t.ccipReadEnabled)
                        });
                        return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                    }))
                }
                estimateGas(t) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield(0, c.resolveProperties)({
                            transaction: this._getTransactionRequest(t)
                        }), r = yield this.perform("estimateGas", e);
                        try {
                            return s.O$.from(r)
                        } catch (i) {
                            return A.throwError("bad result from backend", g.Logger.errors.SERVER_ERROR, {
                                method: "estimateGas",
                                params: e,
                                result: r,
                                error: i
                            })
                        }
                    }))
                }
                _getAddress(t) {
                    return b(this, void 0, void 0, (function*() {
                        "string" !== typeof(t = yield t) && A.throwArgumentError("invalid address or ENS name", "name", t);
                        const e = yield this.resolveName(t);
                        return null == e && A.throwError("ENS name not configured", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `resolveName(${JSON.stringify(t)})`
                        }), e
                    }))
                }
                _getBlock(t, e) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        let r = -128;
                        const i = {
                            includeTransactions: !!e
                        };
                        if ((0, a.isHexString)(t, 32)) i.blockHash = t;
                        else try {
                            i.blockTag = yield this._getBlockTag(t), (0, a.isHexString)(i.blockTag) && (r = parseInt(i.blockTag.substring(2), 16))
                        } catch (n) {
                            A.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                        }
                        return (0, p.poll)((() => b(this, void 0, void 0, (function*() {
                            const t = yield this.perform("getBlock", i);
                            if (null == t) return null != i.blockHash && null == this._emitted["b:" + i.blockHash] || null != i.blockTag && r > this._emitted.block ? null : void 0;
                            if (e) {
                                let e = null;
                                for (let i = 0; i < t.transactions.length; i++) {
                                    const r = t.transactions[i];
                                    if (null == r.blockNumber) r.confirmations = 0;
                                    else if (null == r.confirmations) {
                                        null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                        let t = e - r.blockNumber + 1;
                                        t <= 0 && (t = 1), r.confirmations = t
                                    }
                                }
                                const r = this.formatter.blockWithTransactions(t);
                                return r.transactions = r.transactions.map((t => this._wrapTransaction(t))), r
                            }
                            return this.formatter.block(t)
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getBlock(t) {
                    return this._getBlock(t, !1)
                }
                getBlockWithTransactions(t) {
                    return this._getBlock(t, !0)
                }
                getTransaction(t) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        const e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return (0, p.poll)((() => b(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransaction", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            const i = this.formatter.transactionResponse(r);
                            if (null == i.blockNumber) i.confirmations = 0;
                            else if (null == i.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1;
                                t <= 0 && (t = 1), i.confirmations = t
                            }
                            return this._wrapTransaction(i)
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getTransactionReceipt(t) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        const e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return (0, p.poll)((() => b(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransactionReceipt", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            if (null == r.blockHash) return;
                            const i = this.formatter.receipt(r);
                            if (null == i.blockNumber) i.confirmations = 0;
                            else if (null == i.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1;
                                t <= 0 && (t = 1), i.confirmations = t
                            }
                            return i
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getLogs(t) {
                    return b(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield(0, c.resolveProperties)({
                            filter: this._getFilter(t)
                        }), r = yield this.perform("getLogs", e);
                        return r.forEach((t => {
                            null == t.removed && (t.removed = !1)
                        })), w.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                    }))
                }
                getEtherPrice() {
                    return b(this, void 0, void 0, (function*() {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {})
                    }))
                }
                _getBlockTag(t) {
                    return b(this, void 0, void 0, (function*() {
                        if ("number" === typeof(t = yield t) && t < 0) {
                            t % 1 && A.throwArgumentError("invalid BlockTag", "blockTag", t);
                            let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return e += t, e < 0 && (e = 0), this.formatter.blockTag(e)
                        }
                        return this.formatter.blockTag(t)
                    }))
                }
                getResolver(t) {
                    return b(this, void 0, void 0, (function*() {
                        let e = t;
                        for (;;) {
                            if ("" === e || "." === e) return null;
                            if ("eth" !== t && "eth" === e) return null;
                            const r = yield this._getResolver(e, "getResolver");
                            if (null != r) {
                                const i = new U(this, r, t);
                                return e === t || (yield i.supportsWildcard()) ? i : null
                            }
                            e = e.split(".").slice(1).join(".")
                        }
                    }))
                }
                _getResolver(t, e) {
                    return b(this, void 0, void 0, (function*() {
                        null == e && (e = "ENS");
                        const r = yield this.getNetwork();
                        r.ensAddress || A.throwError("network does not support ENS", g.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: e,
                            network: r.name
                        });
                        try {
                            const e = yield this.call({
                                to: r.ensAddress,
                                data: "0x0178b8bf" + (0, l.VM)(t).substring(2)
                            });
                            return this.formatter.callAddress(e)
                        } catch (i) {}
                        return null
                    }))
                }
                resolveName(t) {
                    return b(this, void 0, void 0, (function*() {
                        t = yield t;
                        try {
                            return Promise.resolve(this.formatter.address(t))
                        } catch (r) {
                            if ((0, a.isHexString)(t)) throw r
                        }
                        "string" !== typeof t && A.throwArgumentError("invalid ENS name", "name", t);
                        const e = yield this.getResolver(t);
                        return e ? yield e.getAddress(): null
                    }))
                }
                lookupAddress(t) {
                    return b(this, void 0, void 0, (function*() {
                        t = yield t;
                        const e = (t = this.formatter.address(t)).substring(2).toLowerCase() + ".addr.reverse",
                            r = yield this._getResolver(e, "lookupAddress");
                        if (null == r) return null;
                        const i = O(yield this.call({
                            to: r,
                            data: "0x691f3431" + (0, l.VM)(e).substring(2)
                        }), 0);
                        return (yield this.resolveName(i)) != t ? null : i
                    }))
                }
                getAvatar(t) {
                    return b(this, void 0, void 0, (function*() {
                        let e = null;
                        if ((0, a.isHexString)(t)) {
                            const r = this.formatter.address(t).substring(2).toLowerCase() + ".addr.reverse",
                                n = yield this._getResolver(r, "getAvatar");
                            if (!n) return null;
                            e = new U(this, n, r);
                            try {
                                const t = yield e.getAvatar();
                                if (t) return t.url
                            } catch (i) {
                                if (i.code !== g.Logger.errors.CALL_EXCEPTION) throw i
                            }
                            try {
                                const t = O(yield this.call({
                                    to: n,
                                    data: "0x691f3431" + (0, l.VM)(r).substring(2)
                                }), 0);
                                e = yield this.getResolver(t)
                            } catch (i) {
                                if (i.code !== g.Logger.errors.CALL_EXCEPTION) throw i;
                                return null
                            }
                        } else if (e = yield this.getResolver(t), !e) return null;
                        const r = yield e.getAvatar();
                        return null == r ? null : r.url
                    }))
                }
                perform(t, e) {
                    return A.throwError(t + " not implemented", g.Logger.errors.NOT_IMPLEMENTED, {
                        operation: t
                    })
                }
                _startEvent(t) {
                    this.polling = this._events.filter((t => t.pollable())).length > 0
                }
                _stopEvent(t) {
                    this.polling = this._events.filter((t => t.pollable())).length > 0
                }
                _addEventListener(t, e, r) {
                    const i = new T(k(t), e, r);
                    return this._events.push(i), this._startEvent(i), this
                }
                on(t, e) {
                    return this._addEventListener(t, e, !1)
                }
                once(t, e) {
                    return this._addEventListener(t, e, !0)
                }
                emit(t, ...e) {
                    let r = !1,
                        i = [],
                        n = k(t);
                    return this._events = this._events.filter((t => t.tag !== n || (setTimeout((() => {
                        t.listener.apply(this, e)
                    }), 0), r = !0, !t.once || (i.push(t), !1)))), i.forEach((t => {
                        this._stopEvent(t)
                    })), r
                }
                listenerCount(t) {
                    if (!t) return this._events.length;
                    let e = k(t);
                    return this._events.filter((t => t.tag === e)).length
                }
                listeners(t) {
                    if (null == t) return this._events.map((t => t.listener));
                    let e = k(t);
                    return this._events.filter((t => t.tag === e)).map((t => t.listener))
                }
                off(t, e) {
                    if (null == e) return this.removeAllListeners(t);
                    const r = [];
                    let i = !1,
                        n = k(t);
                    return this._events = this._events.filter((t => t.tag !== n || t.listener != e || (!!i || (i = !0, r.push(t), !1)))), r.forEach((t => {
                        this._stopEvent(t)
                    })), this
                }
                removeAllListeners(t) {
                    let e = [];
                    if (null == t) e = this._events, this._events = [];
                    else {
                        const r = k(t);
                        this._events = this._events.filter((t => t.tag !== r || (e.push(t), !1)))
                    }
                    return e.forEach((t => {
                        this._stopEvent(t)
                    })), this
                }
            }
        },
        30032: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ed: function() {
                    return f
                },
                Gp: function() {
                    return p
                },
                Mb: function() {
                    return d
                },
                vh: function() {
                    return v
                }
            });
            var i = r(19485),
                n = r(2593),
                o = r(16441),
                s = r(9279),
                a = r(6881),
                h = r(83875),
                l = r(1581),
                u = r(34216);
            const c = new l.Logger(u.i);
            class d {
                constructor() {
                    this.formats = this.getDefaultFormats()
                }
                getDefaultFormats() {
                    const t = {},
                        e = this.address.bind(this),
                        r = this.bigNumber.bind(this),
                        i = this.blockTag.bind(this),
                        n = this.data.bind(this),
                        o = this.hash.bind(this),
                        s = this.hex.bind(this),
                        h = this.number.bind(this),
                        l = this.type.bind(this);
                    return t.transaction = {
                        hash: o,
                        type: l,
                        accessList: d.allowNull(this.accessList.bind(this), null),
                        blockHash: d.allowNull(o, null),
                        blockNumber: d.allowNull(h, null),
                        transactionIndex: d.allowNull(h, null),
                        confirmations: d.allowNull(h, null),
                        from: e,
                        gasPrice: d.allowNull(r),
                        maxPriorityFeePerGas: d.allowNull(r),
                        maxFeePerGas: d.allowNull(r),
                        gasLimit: r,
                        to: d.allowNull(e, null),
                        value: r,
                        nonce: h,
                        data: n,
                        r: d.allowNull(this.uint256),
                        s: d.allowNull(this.uint256),
                        v: d.allowNull(h),
                        creates: d.allowNull(e, null),
                        raw: d.allowNull(n)
                    }, t.transactionRequest = {
                        from: d.allowNull(e),
                        nonce: d.allowNull(h),
                        gasLimit: d.allowNull(r),
                        gasPrice: d.allowNull(r),
                        maxPriorityFeePerGas: d.allowNull(r),
                        maxFeePerGas: d.allowNull(r),
                        to: d.allowNull(e),
                        value: d.allowNull(r),
                        data: d.allowNull((t => this.data(t, !0))),
                        type: d.allowNull(h),
                        accessList: d.allowNull(this.accessList.bind(this), null)
                    }, t.receiptLog = {
                        transactionIndex: h,
                        blockNumber: h,
                        transactionHash: o,
                        address: e,
                        topics: d.arrayOf(o),
                        data: n,
                        logIndex: h,
                        blockHash: o
                    }, t.receipt = {
                        to: d.allowNull(this.address, null),
                        from: d.allowNull(this.address, null),
                        contractAddress: d.allowNull(e, null),
                        transactionIndex: h,
                        root: d.allowNull(s),
                        gasUsed: r,
                        logsBloom: d.allowNull(n),
                        blockHash: o,
                        transactionHash: o,
                        logs: d.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: h,
                        confirmations: d.allowNull(h, null),
                        cumulativeGasUsed: r,
                        effectiveGasPrice: d.allowNull(r),
                        status: d.allowNull(h),
                        type: l
                    }, t.block = {
                        hash: d.allowNull(o),
                        parentHash: o,
                        number: h,
                        timestamp: h,
                        nonce: d.allowNull(s),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: r,
                        gasUsed: r,
                        miner: d.allowNull(e),
                        extraData: n,
                        transactions: d.allowNull(d.arrayOf(o)),
                        baseFeePerGas: d.allowNull(r)
                    }, t.blockWithTransactions = (0, a.shallowCopy)(t.block), t.blockWithTransactions.transactions = d.allowNull(d.arrayOf(this.transactionResponse.bind(this))), t.filter = {
                        fromBlock: d.allowNull(i, void 0),
                        toBlock: d.allowNull(i, void 0),
                        blockHash: d.allowNull(o, void 0),
                        address: d.allowNull(e, void 0),
                        topics: d.allowNull(this.topics.bind(this), void 0)
                    }, t.filterLog = {
                        blockNumber: d.allowNull(h),
                        blockHash: d.allowNull(o),
                        transactionIndex: h,
                        removed: d.allowNull(this.boolean.bind(this)),
                        address: e,
                        data: d.allowFalsish(n, "0x"),
                        topics: d.arrayOf(o),
                        transactionHash: o,
                        logIndex: h
                    }, t
                }
                accessList(t) {
                    return (0, h.accessListify)(t || [])
                }
                number(t) {
                    return "0x" === t ? 0 : n.O$.from(t).toNumber()
                }
                type(t) {
                    return "0x" === t || null == t ? 0 : n.O$.from(t).toNumber()
                }
                bigNumber(t) {
                    return n.O$.from(t)
                }
                boolean(t) {
                    if ("boolean" === typeof t) return t;
                    if ("string" === typeof t) {
                        if ("true" === (t = t.toLowerCase())) return !0;
                        if ("false" === t) return !1
                    }
                    throw new Error("invalid boolean - " + t)
                }
                hex(t, e) {
                    return "string" === typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), (0, o.isHexString)(t)) ? t.toLowerCase() : c.throwArgumentError("invalid hash", "value", t)
                }
                data(t, e) {
                    const r = this.hex(t, e);
                    if (r.length % 2 !== 0) throw new Error("invalid data; odd-length - " + t);
                    return r
                }
                address(t) {
                    return (0, i.getAddress)(t)
                }
                callAddress(t) {
                    if (!(0, o.isHexString)(t, 32)) return null;
                    const e = (0, i.getAddress)((0, o.hexDataSlice)(t, 12));
                    return e === s.d ? null : e
                }
                contractAddress(t) {
                    return (0, i.getContractAddress)(t)
                }
                blockTag(t) {
                    if (null == t) return "latest";
                    if ("earliest" === t) return "0x0";
                    switch (t) {
                        case "earliest":
                            return "0x0";
                        case "latest":
                        case "pending":
                        case "safe":
                        case "finalized":
                            return t
                    }
                    if ("number" === typeof t || (0, o.isHexString)(t)) return (0, o.hexValue)(t);
                    throw new Error("invalid blockTag")
                }
                hash(t, e) {
                    const r = this.hex(t, e);
                    return 32 !== (0, o.hexDataLength)(r) ? c.throwArgumentError("invalid hash", "value", t) : r
                }
                difficulty(t) {
                    if (null == t) return null;
                    const e = n.O$.from(t);
                    try {
                        return e.toNumber()
                    } catch (r) {}
                    return null
                }
                uint256(t) {
                    if (!(0, o.isHexString)(t)) throw new Error("invalid uint256");
                    return (0, o.hexZeroPad)(t, 32)
                }
                _block(t, e) {
                    null != t.author && null == t.miner && (t.miner = t.author);
                    const r = null != t._difficulty ? t._difficulty : t.difficulty,
                        i = d.check(e, t);
                    return i._difficulty = null == r ? null : n.O$.from(r), i
                }
                block(t) {
                    return this._block(t, this.formats.block)
                }
                blockWithTransactions(t) {
                    return this._block(t, this.formats.blockWithTransactions)
                }
                transactionRequest(t) {
                    return d.check(this.formats.transactionRequest, t)
                }
                transactionResponse(t) {
                    null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && n.O$.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), 1 !== t.type && 2 !== t.type || null != t.accessList || (t.accessList = []);
                    const e = d.check(this.formats.transaction, t);
                    if (null != t.chainId) {
                        let r = t.chainId;
                        (0, o.isHexString)(r) && (r = n.O$.from(r).toNumber()), e.chainId = r
                    } else {
                        let r = t.networkId;
                        null == r && null == e.v && (r = t.chainId), (0, o.isHexString)(r) && (r = n.O$.from(r).toNumber()), "number" !== typeof r && null != e.v && (r = (e.v - 35) / 2, r < 0 && (r = 0), r = parseInt(r)), "number" !== typeof r && (r = 0), e.chainId = r
                    }
                    return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e
                }
                transaction(t) {
                    return (0, h.parse)(t)
                }
                receiptLog(t) {
                    return d.check(this.formats.receiptLog, t)
                }
                receipt(t) {
                    const e = d.check(this.formats.receipt, t);
                    if (null != e.root)
                        if (e.root.length <= 4) {
                            const t = n.O$.from(e.root).toNumber();
                            0 === t || 1 === t ? (null != e.status && e.status !== t && c.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: e.root,
                                status: e.status
                            }), e.status = t, delete e.root) : c.throwArgumentError("invalid alt-root-status", "value.root", e.root)
                        } else 66 !== e.root.length && c.throwArgumentError("invalid root hash", "value.root", e.root);
                    return null != e.status && (e.byzantium = !0), e
                }
                topics(t) {
                    return Array.isArray(t) ? t.map((t => this.topics(t))) : null != t ? this.hash(t, !0) : null
                }
                filter(t) {
                    return d.check(this.formats.filter, t)
                }
                filterLog(t) {
                    return d.check(this.formats.filterLog, t)
                }
                static check(t, e) {
                    const r = {};
                    for (const n in t) try {
                        const i = t[n](e[n]);
                        void 0 !== i && (r[n] = i)
                    } catch (i) {
                        throw i.checkKey = n, i.checkValue = e[n], i
                    }
                    return r
                }
                static allowNull(t, e) {
                    return function(r) {
                        return null == r ? e : t(r)
                    }
                }
                static allowFalsish(t, e) {
                    return function(r) {
                        return r ? t(r) : e
                    }
                }
                static arrayOf(t) {
                    return function(e) {
                        if (!Array.isArray(e)) throw new Error("not an array");
                        const r = [];
                        return e.forEach((function(e) {
                            r.push(t(e))
                        })), r
                    }
                }
            }

            function f(t) {
                return t && "function" === typeof t.isCommunityResource
            }

            function p(t) {
                return f(t) && t.isCommunityResource()
            }
            let m = !1;

            function v() {
                m || (m = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
            }
        },
        82169: function(t, e, r) {
            "use strict";
            r.d(e, {
                C: function() {
                    return E
                },
                r: function() {
                    return C
                }
            });
            var i = r(48088),
                n = r(2593),
                o = r(16441),
                s = r(67827),
                a = r(6881),
                h = r(29251),
                l = r(83875),
                u = r(37707),
                c = r(1581),
                d = r(34216),
                f = r(97013),
                p = function(t, e, r, i) {
                    return new(r || (r = Promise))((function(n, o) {
                        function s(t) {
                            try {
                                h(i.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                h(i.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function h(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        h((i = i.apply(t, e || [])).next())
                    }))
                };
            const m = new c.Logger(d.i),
                v = ["call", "estimateGas"];

            function g(t, e) {
                if (null == t) return null;
                if ("string" === typeof t.message && t.message.match("reverted")) {
                    const r = (0, o.isHexString)(t.data) ? t.data : null;
                    if (!e || r) return {
                        message: t.message,
                        data: r
                    }
                }
                if ("object" === typeof t) {
                    for (const r in t) {
                        const i = g(t[r], e);
                        if (i) return i
                    }
                    return null
                }
                if ("string" === typeof t) try {
                    return g(JSON.parse(t), e)
                } catch (r) {}
                return null
            }

            function y(t, e, r) {
                const i = r.transaction || r.signedTransaction;
                if ("call" === t) {
                    const t = g(e, !0);
                    if (t) return t.data;
                    m.throwError("missing revert data in call exception; Transaction reverted without a reason string", c.Logger.errors.CALL_EXCEPTION, {
                        data: "0x",
                        transaction: i,
                        error: e
                    })
                }
                if ("estimateGas" === t) {
                    let r = g(e.body, !1);
                    null == r && (r = g(e, !1)), r && m.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", c.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                        reason: r.message,
                        method: t,
                        transaction: i,
                        error: e
                    })
                }
                let n = e.message;
                throw e.code === c.Logger.errors.SERVER_ERROR && e.error && "string" === typeof e.error.message ? n = e.error.message : "string" === typeof e.body ? n = e.body : "string" === typeof e.responseText && (n = e.responseText), n = (n || "").toLowerCase(), n.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && m.throwError("insufficient funds for intrinsic transaction cost", c.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: e,
                    method: t,
                    transaction: i
                }), n.match(/nonce (is )?too low/i) && m.throwError("nonce has already been used", c.Logger.errors.NONCE_EXPIRED, {
                    error: e,
                    method: t,
                    transaction: i
                }), n.match(/replacement transaction underpriced|transaction gas price.*too low/i) && m.throwError("replacement fee too low", c.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: e,
                    method: t,
                    transaction: i
                }), n.match(/only replay-protected/i) && m.throwError("legacy pre-eip-155 transactions not supported", c.Logger.errors.UNSUPPORTED_OPERATION, {
                    error: e,
                    method: t,
                    transaction: i
                }), v.indexOf(t) >= 0 && n.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && m.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", c.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: e,
                    method: t,
                    transaction: i
                }), e
            }

            function w(t) {
                return new Promise((function(e) {
                    setTimeout(e, t)
                }))
            }

            function b(t) {
                if (t.error) {
                    const e = new Error(t.error.message);
                    throw e.code = t.error.code, e.data = t.error.data, e
                }
                return t.result
            }

            function A(t) {
                return t ? t.toLowerCase() : t
            }
            const M = {};
            class E extends i.E {
                constructor(t, e, r) {
                    if (super(), t !== M) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                    (0, a.defineReadOnly)(this, "provider", e), null == r && (r = 0), "string" === typeof r ? ((0, a.defineReadOnly)(this, "_address", this.provider.formatter.address(r)), (0, a.defineReadOnly)(this, "_index", null)) : "number" === typeof r ? ((0, a.defineReadOnly)(this, "_index", r), (0, a.defineReadOnly)(this, "_address", null)) : m.throwArgumentError("invalid address or index", "addressOrIndex", r)
                }
                connect(t) {
                    return m.throwError("cannot alter JSON-RPC Signer connection", c.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "connect"
                    })
                }
                connectUnchecked() {
                    return new k(M, this.provider, this._address || this._index)
                }
                getAddress() {
                    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((t => (t.length <= this._index && m.throwError("unknown account #" + this._index, c.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress"
                    }), this.provider.formatter.address(t[this._index]))))
                }
                sendUncheckedTransaction(t) {
                    t = (0, a.shallowCopy)(t);
                    const e = this.getAddress().then((t => (t && (t = t.toLowerCase()), t)));
                    if (null == t.gasLimit) {
                        const r = (0, a.shallowCopy)(t);
                        r.from = e, t.gasLimit = this.provider.estimateGas(r)
                    }
                    return null != t.to && (t.to = Promise.resolve(t.to).then((t => p(this, void 0, void 0, (function*() {
                        if (null == t) return null;
                        const e = yield this.provider.resolveName(t);
                        return null == e && m.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                    }))))), (0, a.resolveProperties)({
                        tx: (0, a.resolveProperties)(t),
                        sender: e
                    }).then((({
                        tx: e,
                        sender: r
                    }) => {
                        null != e.from ? e.from.toLowerCase() !== r && m.throwArgumentError("from address mismatch", "transaction", t) : e.from = r;
                        const i = this.provider.constructor.hexlifyTransaction(e, {
                            from: !0
                        });
                        return this.provider.send("eth_sendTransaction", [i]).then((t => t), (t => ("string" === typeof t.message && t.message.match(/user denied/i) && m.throwError("user rejected transaction", c.Logger.errors.ACTION_REJECTED, {
                            action: "sendTransaction",
                            transaction: e
                        }), y("sendTransaction", t, i))))
                    }))
                }
                signTransaction(t) {
                    return m.throwError("signing transactions is unsupported", c.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "signTransaction"
                    })
                }
                sendTransaction(t) {
                    return p(this, void 0, void 0, (function*() {
                        const e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(t);
                        try {
                            return yield(0, u.poll)((() => p(this, void 0, void 0, (function*() {
                                const t = yield this.provider.getTransaction(r);
                                if (null !== t) return this.provider._wrapTransaction(t, r, e)
                            }))), {
                                oncePoll: this.provider
                            })
                        } catch (i) {
                            throw i.transactionHash = r, i
                        }
                    }))
                }
                signMessage(t) {
                    return p(this, void 0, void 0, (function*() {
                        const e = "string" === typeof t ? (0, h.Y0)(t) : t,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("personal_sign", [(0, o.hexlify)(e), r.toLowerCase()])
                        } catch (i) {
                            throw "string" === typeof i.message && i.message.match(/user denied/i) && m.throwError("user rejected signing", c.Logger.errors.ACTION_REJECTED, {
                                action: "signMessage",
                                from: r,
                                messageData: t
                            }), i
                        }
                    }))
                }
                _legacySignMessage(t) {
                    return p(this, void 0, void 0, (function*() {
                        const e = "string" === typeof t ? (0, h.Y0)(t) : t,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_sign", [r.toLowerCase(), (0, o.hexlify)(e)])
                        } catch (i) {
                            throw "string" === typeof i.message && i.message.match(/user denied/i) && m.throwError("user rejected signing", c.Logger.errors.ACTION_REJECTED, {
                                action: "_legacySignMessage",
                                from: r,
                                messageData: t
                            }), i
                        }
                    }))
                }
                _signTypedData(t, e, r) {
                    return p(this, void 0, void 0, (function*() {
                        const i = yield s.E.resolveNames(t, e, r, (t => this.provider.resolveName(t))), n = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_signTypedData_v4", [n.toLowerCase(), JSON.stringify(s.E.getPayload(i.domain, e, i.value))])
                        } catch (o) {
                            throw "string" === typeof o.message && o.message.match(/user denied/i) && m.throwError("user rejected signing", c.Logger.errors.ACTION_REJECTED, {
                                action: "_signTypedData",
                                from: n,
                                messageData: {
                                    domain: i.domain,
                                    types: e,
                                    value: i.value
                                }
                            }), o
                        }
                    }))
                }
                unlock(t) {
                    return p(this, void 0, void 0, (function*() {
                        const e = this.provider,
                            r = yield this.getAddress();
                        return e.send("personal_unlockAccount", [r.toLowerCase(), t, null])
                    }))
                }
            }
            class k extends E {
                sendTransaction(t) {
                    return this.sendUncheckedTransaction(t).then((t => ({
                        hash: t,
                        nonce: null,
                        gasLimit: null,
                        gasPrice: null,
                        data: null,
                        value: null,
                        chainId: null,
                        confirmations: 0,
                        from: null,
                        wait: e => this.provider.waitForTransaction(t, e)
                    })))
                }
            }
            const x = {
                chainId: !0,
                data: !0,
                gasLimit: !0,
                gasPrice: !0,
                nonce: !0,
                to: !0,
                value: !0,
                type: !0,
                accessList: !0,
                maxFeePerGas: !0,
                maxPriorityFeePerGas: !0
            };
            class C extends f.Zk {
                constructor(t, e) {
                    let r = e;
                    null == r && (r = new Promise(((t, e) => {
                        setTimeout((() => {
                            this.detectNetwork().then((e => {
                                t(e)
                            }), (t => {
                                e(t)
                            }))
                        }), 0)
                    }))), super(r), t || (t = (0, a.getStatic)(this.constructor, "defaultUrl")()), "string" === typeof t ? (0, a.defineReadOnly)(this, "connection", Object.freeze({
                        url: t
                    })) : (0, a.defineReadOnly)(this, "connection", Object.freeze((0, a.shallowCopy)(t))), this._nextId = 42
                }
                get _cache() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
                }
                static defaultUrl() {
                    return "http://localhost:8545"
                }
                detectNetwork() {
                    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout((() => {
                        this._cache.detectNetwork = null
                    }), 0)), this._cache.detectNetwork
                }
                _uncachedDetectNetwork() {
                    return p(this, void 0, void 0, (function*() {
                        yield w(0);
                        let t = null;
                        try {
                            t = yield this.send("eth_chainId", [])
                        } catch (e) {
                            try {
                                t = yield this.send("net_version", [])
                            } catch (e) {}
                        }
                        if (null != t) {
                            const r = (0, a.getStatic)(this.constructor, "getNetwork");
                            try {
                                return r(n.O$.from(t).toNumber())
                            } catch (e) {
                                return m.throwError("could not detect network", c.Logger.errors.NETWORK_ERROR, {
                                    chainId: t,
                                    event: "invalidNetwork",
                                    serverError: e
                                })
                            }
                        }
                        return m.throwError("could not detect network", c.Logger.errors.NETWORK_ERROR, {
                            event: "noNetwork"
                        })
                    }))
                }
                getSigner(t) {
                    return new E(M, this, t)
                }
                getUncheckedSigner(t) {
                    return this.getSigner(t).connectUnchecked()
                }
                listAccounts() {
                    return this.send("eth_accounts", []).then((t => t.map((t => this.formatter.address(t)))))
                }
                send(t, e) {
                    const r = {
                        method: t,
                        params: e,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "request",
                        request: (0, a.deepCopy)(r),
                        provider: this
                    });
                    const i = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
                    if (i && this._cache[t]) return this._cache[t];
                    const n = (0, u.fetchJson)(this.connection, JSON.stringify(r), b).then((t => (this.emit("debug", {
                        action: "response",
                        request: r,
                        response: t,
                        provider: this
                    }), t)), (t => {
                        throw this.emit("debug", {
                            action: "response",
                            error: t,
                            request: r,
                            provider: this
                        }), t
                    }));
                    return i && (this._cache[t] = n, setTimeout((() => {
                        this._cache[t] = null
                    }), 0)), n
                }
                prepareRequest(t, e) {
                    switch (t) {
                        case "getBlockNumber":
                            return ["eth_blockNumber", []];
                        case "getGasPrice":
                            return ["eth_gasPrice", []];
                        case "getBalance":
                            return ["eth_getBalance", [A(e.address), e.blockTag]];
                        case "getTransactionCount":
                            return ["eth_getTransactionCount", [A(e.address), e.blockTag]];
                        case "getCode":
                            return ["eth_getCode", [A(e.address), e.blockTag]];
                        case "getStorageAt":
                            return ["eth_getStorageAt", [A(e.address), (0, o.hexZeroPad)(e.position, 32), e.blockTag]];
                        case "sendTransaction":
                            return ["eth_sendRawTransaction", [e.signedTransaction]];
                        case "getBlock":
                            return e.blockTag ? ["eth_getBlockByNumber", [e.blockTag, !!e.includeTransactions]] : e.blockHash ? ["eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]] : null;
                        case "getTransaction":
                            return ["eth_getTransactionByHash", [e.transactionHash]];
                        case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [e.transactionHash]];
                        case "call":
                            return ["eth_call", [(0, a.getStatic)(this.constructor, "hexlifyTransaction")(e.transaction, {
                                from: !0
                            }), e.blockTag]];
                        case "estimateGas":
                            return ["eth_estimateGas", [(0, a.getStatic)(this.constructor, "hexlifyTransaction")(e.transaction, {
                                from: !0
                            })]];
                        case "getLogs":
                            return e.filter && null != e.filter.address && (e.filter.address = A(e.filter.address)), ["eth_getLogs", [e.filter]]
                    }
                    return null
                }
                perform(t, e) {
                    return p(this, void 0, void 0, (function*() {
                        if ("call" === t || "estimateGas" === t) {
                            const t = e.transaction;
                            if (t && null != t.type && n.O$.from(t.type).isZero() && null == t.maxFeePerGas && null == t.maxPriorityFeePerGas) {
                                const r = yield this.getFeeData();
                                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((e = (0, a.shallowCopy)(e)).transaction = (0, a.shallowCopy)(t), delete e.transaction.type)
                            }
                        }
                        const r = this.prepareRequest(t, e);
                        null == r && m.throwError(t + " not implemented", c.Logger.errors.NOT_IMPLEMENTED, {
                            operation: t
                        });
                        try {
                            return yield this.send(r[0], r[1])
                        } catch (i) {
                            return y(t, i, e)
                        }
                    }))
                }
                _startEvent(t) {
                    "pending" === t.tag && this._startPending(), super._startEvent(t)
                }
                _startPending() {
                    if (null != this._pendingFilter) return;
                    const t = this,
                        e = this.send("eth_newPendingTransactionFilter", []);
                    this._pendingFilter = e, e.then((function(r) {
                        return function i() {
                            t.send("eth_getFilterChanges", [r]).then((function(r) {
                                if (t._pendingFilter != e) return null;
                                let i = Promise.resolve();
                                return r.forEach((function(e) {
                                    t._emitted["t:" + e.toLowerCase()] = "pending", i = i.then((function() {
                                        return t.getTransaction(e).then((function(e) {
                                            return t.emit("pending", e), null
                                        }))
                                    }))
                                })), i.then((function() {
                                    return w(1e3)
                                }))
                            })).then((function() {
                                if (t._pendingFilter == e) return setTimeout((function() {
                                    i()
                                }), 0), null;
                                t.send("eth_uninstallFilter", [r])
                            })).catch((t => {}))
                        }(), r
                    })).catch((t => {}))
                }
                _stopEvent(t) {
                    "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(t)
                }
                static hexlifyTransaction(t, e) {
                    const r = (0, a.shallowCopy)(x);
                    if (e)
                        for (const n in e) e[n] && (r[n] = !0);
                    (0, a.checkProperties)(t, r);
                    const i = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((function(e) {
                        if (null == t[e]) return;
                        const r = (0, o.hexValue)(n.O$.from(t[e]));
                        "gasLimit" === e && (e = "gas"), i[e] = r
                    })), ["from", "to", "data"].forEach((function(e) {
                        null != t[e] && (i[e] = (0, o.hexlify)(t[e]))
                    })), t.accessList && (i.accessList = (0, l.accessListify)(t.accessList)), i
                }
            }
        },
        241: function(t, e, r) {
            "use strict";
            r.d(e, {
                Q: function() {
                    return u
                }
            });
            var i = r(6881),
                n = r(1581),
                o = r(34216),
                s = r(82169);
            const a = new n.Logger(o.i);
            let h = 1;

            function l(t, e) {
                const r = "Web3LegacyFetcher";
                return function(t, n) {
                    const o = {
                        method: t,
                        params: n,
                        id: h++,
                        jsonrpc: "2.0"
                    };
                    return new Promise(((t, n) => {
                        this.emit("debug", {
                            action: "request",
                            fetcher: r,
                            request: (0, i.deepCopy)(o),
                            provider: this
                        }), e(o, ((e, i) => {
                            if (e) return this.emit("debug", {
                                action: "response",
                                fetcher: r,
                                error: e,
                                request: o,
                                provider: this
                            }), n(e);
                            if (this.emit("debug", {
                                    action: "response",
                                    fetcher: r,
                                    request: o,
                                    response: i,
                                    provider: this
                                }), i.error) {
                                const t = new Error(i.error.message);
                                return t.code = i.error.code, t.data = i.error.data, n(t)
                            }
                            t(i.result)
                        }))
                    }))
                }
            }
            class u extends s.r {
                constructor(t, e) {
                    null == t && a.throwArgumentError("missing provider", "provider", t);
                    let r = null,
                        n = null,
                        o = null;
                    "function" === typeof t ? (r = "unknown:", n = t) : (r = t.host || t.path || "", !r && t.isMetaMask && (r = "metamask"), o = t, t.request ? ("" === r && (r = "eip-1193:"), n = function(t) {
                        return function(e, r) {
                            null == r && (r = []);
                            const n = {
                                method: e,
                                params: r
                            };
                            return this.emit("debug", {
                                action: "request",
                                fetcher: "Eip1193Fetcher",
                                request: (0, i.deepCopy)(n),
                                provider: this
                            }), t.request(n).then((t => (this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: n,
                                response: t,
                                provider: this
                            }), t)), (t => {
                                throw this.emit("debug", {
                                    action: "response",
                                    fetcher: "Eip1193Fetcher",
                                    request: n,
                                    error: t,
                                    provider: this
                                }), t
                            }))
                        }
                    }(t)) : t.sendAsync ? n = l(0, t.sendAsync.bind(t)) : t.send ? n = l(0, t.send.bind(t)) : a.throwArgumentError("unsupported provider", "provider", t), r || (r = "unknown:")), super(r, e), (0, i.defineReadOnly)(this, "jsonRpcFetchFunc", n), (0, i.defineReadOnly)(this, "provider", o)
                }
                send(t, e) {
                    return this.jsonRpcFetchFunc(t, e)
                }
            }
        },
        59052: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                decode: function() {
                    return d
                },
                encode: function() {
                    return l
                }
            });
            var i = r(16441),
                n = r(1581);
            const o = new n.Logger("rlp/5.7.0");

            function s(t) {
                const e = [];
                for (; t;) e.unshift(255 & t), t >>= 8;
                return e
            }

            function a(t, e, r) {
                let i = 0;
                for (let n = 0; n < r; n++) i = 256 * i + t[e + n];
                return i
            }

            function h(t) {
                if (Array.isArray(t)) {
                    let e = [];
                    if (t.forEach((function(t) {
                            e = e.concat(h(t))
                        })), e.length <= 55) return e.unshift(192 + e.length), e;
                    const r = s(e.length);
                    return r.unshift(247 + r.length), r.concat(e)
                }(0, i.isBytesLike)(t) || o.throwArgumentError("RLP object must be BytesLike", "object", t);
                const e = Array.prototype.slice.call((0, i.arrayify)(t));
                if (1 === e.length && e[0] <= 127) return e;
                if (e.length <= 55) return e.unshift(128 + e.length), e;
                const r = s(e.length);
                return r.unshift(183 + r.length), r.concat(e)
            }

            function l(t) {
                return (0, i.hexlify)(h(t))
            }

            function u(t, e, r, i) {
                const s = [];
                for (; r < e + 1 + i;) {
                    const a = c(t, r);
                    s.push(a.result), (r += a.consumed) > e + 1 + i && o.throwError("child data too short", n.Logger.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + i,
                    result: s
                }
            }

            function c(t, e) {
                if (0 === t.length && o.throwError("data too short", n.Logger.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
                    const r = t[e] - 247;
                    e + 1 + r > t.length && o.throwError("data short segment too short", n.Logger.errors.BUFFER_OVERRUN, {});
                    const i = a(t, e + 1, r);
                    return e + 1 + r + i > t.length && o.throwError("data long segment too short", n.Logger.errors.BUFFER_OVERRUN, {}), u(t, e, e + 1 + r, r + i)
                }
                if (t[e] >= 192) {
                    const r = t[e] - 192;
                    return e + 1 + r > t.length && o.throwError("data array too short", n.Logger.errors.BUFFER_OVERRUN, {}), u(t, e, e + 1, r)
                }
                if (t[e] >= 184) {
                    const r = t[e] - 183;
                    e + 1 + r > t.length && o.throwError("data array too short", n.Logger.errors.BUFFER_OVERRUN, {});
                    const s = a(t, e + 1, r);
                    e + 1 + r + s > t.length && o.throwError("data array too short", n.Logger.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + r + s,
                        result: (0, i.hexlify)(t.slice(e + 1 + r, e + 1 + r + s))
                    }
                }
                if (t[e] >= 128) {
                    const r = t[e] - 128;
                    e + 1 + r > t.length && o.throwError("data too short", n.Logger.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + r,
                        result: (0, i.hexlify)(t.slice(e + 1, e + 1 + r))
                    }
                }
                return {
                    consumed: 1,
                    result: (0, i.hexlify)(t[e])
                }
            }

            function d(t) {
                const e = (0, i.arrayify)(t),
                    r = c(e, 0);
                return r.consumed !== e.length && o.throwArgumentError("invalid rlp data", "data", t), r.result
            }
        },
        2006: function(t, e, r) {
            "use strict";
            r.d(e, {
                Gy: function() {
                    return d
                },
                bP: function() {
                    return l
                },
                JQ: function() {
                    return u
                },
                o: function() {
                    return c
                }
            });
            var i = r(33715),
                n = r.n(i),
                o = r(16441),
                s = r(21261),
                a = r(1581);
            const h = new a.Logger("sha2/5.7.0");

            function l(t) {
                return "0x" + n().ripemd160().update((0, o.arrayify)(t)).digest("hex")
            }

            function u(t) {
                return "0x" + n().sha256().update((0, o.arrayify)(t)).digest("hex")
            }

            function c(t) {
                return "0x" + n().sha512().update((0, o.arrayify)(t)).digest("hex")
            }

            function d(t, e, r) {
                return s.p[t] || h.throwError("unsupported algorithm " + t, a.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "hmac",
                    algorithm: t
                }), "0x" + n().hmac(n()[t], (0, o.arrayify)(e)).update((0, o.arrayify)(r)).digest("hex")
            }
        },
        21261: function(t, e, r) {
            "use strict";
            var i;
            r.d(e, {
                    p: function() {
                        return i
                    }
                }),
                function(t) {
                    t.sha256 = "sha256", t.sha512 = "sha512"
                }(i || (i = {}))
        },
        67669: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                SigningKey: function() {
                    return Q
                },
                computePublicKey: function() {
                    return Y
                },
                recoverPublicKey: function() {
                    return Z
                }
            });
            var i = r(42500),
                n = r.n(i),
                o = r(33715),
                s = r.n(o);
            "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self && self;

            function a(t, e, r) {
                return r = {
                    path: e,
                    exports: {},
                    require: function(t, e) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }((void 0 === e || null === e) && r.path)
                    }
                }, t(r, r.exports), r.exports
            }
            var h = l;

            function l(t, e) {
                if (!t) throw new Error(e || "Assertion failed")
            }
            l.equal = function(t, e, r) {
                if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
            };
            var u = a((function(t, e) {
                    var r = e;

                    function i(t) {
                        return 1 === t.length ? "0" + t : t
                    }

                    function n(t) {
                        for (var e = "", r = 0; r < t.length; r++) e += i(t[r].toString(16));
                        return e
                    }
                    r.toArray = function(t, e) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var r = [];
                        if ("string" !== typeof t) {
                            for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                            return r
                        }
                        if ("hex" === e) {
                            (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (t = "0" + t);
                            for (i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                        } else
                            for (i = 0; i < t.length; i++) {
                                var n = t.charCodeAt(i),
                                    o = n >> 8,
                                    s = 255 & n;
                                o ? r.push(o, s) : r.push(s)
                            }
                        return r
                    }, r.zero2 = i, r.toHex = n, r.encode = function(t, e) {
                        return "hex" === e ? n(t) : t
                    }
                })),
                c = a((function(t, e) {
                    var r = e;
                    r.assert = h, r.toArray = u.toArray, r.zero2 = u.zero2, r.toHex = u.toHex, r.encode = u.encode, r.getNAF = function(t, e, r) {
                        var i = new Array(Math.max(t.bitLength(), r) + 1);
                        i.fill(0);
                        for (var n = 1 << e + 1, o = t.clone(), s = 0; s < i.length; s++) {
                            var a, h = o.andln(n - 1);
                            o.isOdd() ? (a = h > (n >> 1) - 1 ? (n >> 1) - h : h, o.isubn(a)) : a = 0, i[s] = a, o.iushrn(1)
                        }
                        return i
                    }, r.getJSF = function(t, e) {
                        var r = [
                            [],
                            []
                        ];
                        t = t.clone(), e = e.clone();
                        for (var i, n = 0, o = 0; t.cmpn(-n) > 0 || e.cmpn(-o) > 0;) {
                            var s, a, h = t.andln(3) + n & 3,
                                l = e.andln(3) + o & 3;
                            3 === h && (h = -1), 3 === l && (l = -1), s = 0 === (1 & h) ? 0 : 3 !== (i = t.andln(7) + n & 7) && 5 !== i || 2 !== l ? h : -h, r[0].push(s), a = 0 === (1 & l) ? 0 : 3 !== (i = e.andln(7) + o & 7) && 5 !== i || 2 !== h ? l : -l, r[1].push(a), 2 * n === s + 1 && (n = 1 - n), 2 * o === a + 1 && (o = 1 - o), t.iushrn(1), e.iushrn(1)
                        }
                        return r
                    }, r.cachedProperty = function(t, e, r) {
                        var i = "_" + e;
                        t.prototype[e] = function() {
                            return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
                        }
                    }, r.parseBytes = function(t) {
                        return "string" === typeof t ? r.toArray(t, "hex") : t
                    }, r.intFromLE = function(t) {
                        return new(n())(t, "hex", "le")
                    }
                })),
                d = c.getNAF,
                f = c.getJSF,
                p = c.assert;

            function m(t, e) {
                this.type = t, this.p = new(n())(e.p, 16), this.red = e.prime ? n().red(e.prime) : n().mont(this.p), this.zero = new(n())(0).toRed(this.red), this.one = new(n())(1).toRed(this.red), this.two = new(n())(2).toRed(this.red), this.n = e.n && new(n())(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }
            var v = m;

            function g(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            m.prototype.point = function() {
                throw new Error("Not implemented")
            }, m.prototype.validate = function() {
                throw new Error("Not implemented")
            }, m.prototype._fixedNafMul = function(t, e) {
                p(t.precomputed);
                var r = t._getDoubles(),
                    i = d(e, 1, this._bitLength),
                    n = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
                n /= 3;
                var o, s, a = [];
                for (o = 0; o < i.length; o += r.step) {
                    s = 0;
                    for (var h = o + r.step - 1; h >= o; h--) s = (s << 1) + i[h];
                    a.push(s)
                }
                for (var l = this.jpoint(null, null, null), u = this.jpoint(null, null, null), c = n; c > 0; c--) {
                    for (o = 0; o < a.length; o++)(s = a[o]) === c ? u = u.mixedAdd(r.points[o]) : s === -c && (u = u.mixedAdd(r.points[o].neg()));
                    l = l.add(u)
                }
                return l.toP()
            }, m.prototype._wnafMul = function(t, e) {
                var r = 4,
                    i = t._getNAFPoints(r);
                r = i.wnd;
                for (var n = i.points, o = d(e, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                    for (var h = 0; a >= 0 && 0 === o[a]; a--) h++;
                    if (a >= 0 && h++, s = s.dblp(h), a < 0) break;
                    var l = o[a];
                    p(0 !== l), s = "affine" === t.type ? l > 0 ? s.mixedAdd(n[l - 1 >> 1]) : s.mixedAdd(n[-l - 1 >> 1].neg()) : l > 0 ? s.add(n[l - 1 >> 1]) : s.add(n[-l - 1 >> 1].neg())
                }
                return "affine" === t.type ? s.toP() : s
            }, m.prototype._wnafMulAdd = function(t, e, r, i, n) {
                var o, s, a, h = this._wnafT1,
                    l = this._wnafT2,
                    u = this._wnafT3,
                    c = 0;
                for (o = 0; o < i; o++) {
                    var p = (a = e[o])._getNAFPoints(t);
                    h[o] = p.wnd, l[o] = p.points
                }
                for (o = i - 1; o >= 1; o -= 2) {
                    var m = o - 1,
                        v = o;
                    if (1 === h[m] && 1 === h[v]) {
                        var g = [e[m], null, null, e[v]];
                        0 === e[m].y.cmp(e[v].y) ? (g[1] = e[m].add(e[v]), g[2] = e[m].toJ().mixedAdd(e[v].neg())) : 0 === e[m].y.cmp(e[v].y.redNeg()) ? (g[1] = e[m].toJ().mixedAdd(e[v]), g[2] = e[m].add(e[v].neg())) : (g[1] = e[m].toJ().mixedAdd(e[v]), g[2] = e[m].toJ().mixedAdd(e[v].neg()));
                        var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            w = f(r[m], r[v]);
                        for (c = Math.max(w[0].length, c), u[m] = new Array(c), u[v] = new Array(c), s = 0; s < c; s++) {
                            var b = 0 | w[0][s],
                                A = 0 | w[1][s];
                            u[m][s] = y[3 * (b + 1) + (A + 1)], u[v][s] = 0, l[m] = g
                        }
                    } else u[m] = d(r[m], h[m], this._bitLength), u[v] = d(r[v], h[v], this._bitLength), c = Math.max(u[m].length, c), c = Math.max(u[v].length, c)
                }
                var M = this.jpoint(null, null, null),
                    E = this._wnafT4;
                for (o = c; o >= 0; o--) {
                    for (var k = 0; o >= 0;) {
                        var x = !0;
                        for (s = 0; s < i; s++) E[s] = 0 | u[s][o], 0 !== E[s] && (x = !1);
                        if (!x) break;
                        k++, o--
                    }
                    if (o >= 0 && k++, M = M.dblp(k), o < 0) break;
                    for (s = 0; s < i; s++) {
                        var C = E[s];
                        0 !== C && (C > 0 ? a = l[s][C - 1 >> 1] : C < 0 && (a = l[s][-C - 1 >> 1].neg()), M = "affine" === a.type ? M.mixedAdd(a) : M.add(a))
                    }
                }
                for (o = 0; o < i; o++) l[o] = null;
                return n ? M : M.toP()
            }, m.BasePoint = g, g.prototype.eq = function() {
                throw new Error("Not implemented")
            }, g.prototype.validate = function() {
                return this.curve.validate(this)
            }, m.prototype.decodePoint = function(t, e) {
                t = c.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 === 2 * r) return 6 === t[0] ? p(t[t.length - 1] % 2 === 0) : 7 === t[0] && p(t[t.length - 1] % 2 === 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw new Error("Unknown point format")
            }, g.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, g.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, g.prototype.encode = function(t, e) {
                return c.encode(this._encode(e), t)
            }, g.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, g.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, g.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], i = this, n = 0; n < e; n += t) {
                    for (var o = 0; o < t; o++) i = i.dbl();
                    r.push(i)
                }
                return {
                    step: t,
                    points: r
                }
            }, g.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) e[n] = e[n - 1].add(i);
                return {
                    wnd: t,
                    points: e
                }
            }, g.prototype._getBeta = function() {
                return null
            }, g.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            };
            var y = a((function(t) {
                    "function" === typeof Object.create ? t.exports = function(t, e) {
                        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : t.exports = function(t, e) {
                        if (e) {
                            t.super_ = e;
                            var r = function() {};
                            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                        }
                    }
                })),
                w = c.assert;

            function b(t) {
                v.call(this, "short", t), this.a = new(n())(t.a, 16).toRed(this.red), this.b = new(n())(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }
            y(b, v);
            var A = b;

            function M(t, e, r, i) {
                v.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new(n())(e, 16), this.y = new(n())(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function E(t, e, r, i) {
                v.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new(n())(0)) : (this.x = new(n())(e, 16), this.y = new(n())(r, 16), this.z = new(n())(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            b.prototype._getEndomorphism = function(t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var e, r;
                    if (t.beta) e = new(n())(t.beta, 16).toRed(this.red);
                    else {
                        var i = this._getEndoRoots(this.p);
                        e = (e = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new(n())(t.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], w(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return {
                        beta: e,
                        lambda: r,
                        basis: t.basis ? t.basis.map((function(t) {
                            return {
                                a: new(n())(t.a, 16),
                                b: new(n())(t.b, 16)
                            }
                        })) : this._getEndoBasis(r)
                    }
                }
            }, b.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : n().mont(t),
                    r = new(n())(2).toRed(e).redInvm(),
                    i = r.redNeg(),
                    o = new(n())(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [i.redAdd(o).fromRed(), i.redSub(o).fromRed()]
            }, b.prototype._getEndoBasis = function(t) {
                for (var e, r, i, o, s, a, h, l, u, c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t, f = this.n.clone(), p = new(n())(1), m = new(n())(0), v = new(n())(0), g = new(n())(1), y = 0; 0 !== d.cmpn(0);) {
                    var w = f.div(d);
                    l = f.sub(w.mul(d)), u = v.sub(w.mul(p));
                    var b = g.sub(w.mul(m));
                    if (!i && l.cmp(c) < 0) e = h.neg(), r = p, i = l.neg(), o = u;
                    else if (i && 2 === ++y) break;
                    h = l, f = d, d = l, v = p, p = u, g = m, m = b
                }
                s = l.neg(), a = u;
                var A = i.sqr().add(o.sqr());
                return s.sqr().add(a.sqr()).cmp(A) >= 0 && (s = e, a = r), i.negative && (i = i.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
                    a: i,
                    b: o
                }, {
                    a: s,
                    b: a
                }]
            }, b.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    r = e[0],
                    i = e[1],
                    n = i.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n),
                    s = n.mul(r.a),
                    a = o.mul(i.a),
                    h = n.mul(r.b),
                    l = o.mul(i.b);
                return {
                    k1: t.sub(s).sub(a),
                    k2: h.add(l).neg()
                }
            }, b.prototype.pointFromX = function(t, e) {
                (t = new(n())(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    i = r.redSqrt();
                if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                var o = i.fromRed().isOdd();
                return (e && !o || !e && o) && (i = i.redNeg()), this.point(t, i)
            }, b.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    r = t.y,
                    i = this.a.redMul(e),
                    n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
                return 0 === r.redSqr().redISub(n).cmpn(0)
            }, b.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var i = this._endoWnafT1, n = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var s = this._endoSplit(e[o]),
                        a = t[o],
                        h = a._getBeta();
                    s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), h = h.neg(!0)), i[2 * o] = a, i[2 * o + 1] = h, n[2 * o] = s.k1, n[2 * o + 1] = s.k2
                }
                for (var l = this._wnafMulAdd(1, i, n, 2 * o, r), u = 0; u < 2 * o; u++) i[u] = null, n[u] = null;
                return l
            }, y(M, v.BasePoint), b.prototype.point = function(t, e, r) {
                return new M(this, t, e, r)
            }, b.prototype.pointFromJSON = function(t, e) {
                return M.fromJSON(this, t, e)
            }, M.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve,
                            i = function(t) {
                                return r.point(t.x.redMul(r.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(i)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(i)
                            }
                        }
                    }
                    return e
                }
            }, M.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, M.fromJSON = function(t, e, r) {
                "string" === typeof e && (e = JSON.parse(e));
                var i = t.point(e[0], e[1], r);
                if (!e[2]) return i;

                function n(e) {
                    return t.point(e[0], e[1], r)
                }
                var o = e[2];
                return i.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [i].concat(o.doubles.points.map(n))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [i].concat(o.naf.points.map(n))
                    }
                }, i
            }, M.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, M.prototype.isInfinity = function() {
                return this.inf
            }, M.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t)) return this.curve.point(null, null);
                if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x),
                    i = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, i)
            }, M.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    r = this.x.redSqr(),
                    i = t.redInvm(),
                    n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
                    o = n.redSqr().redISub(this.x.redAdd(this.x)),
                    s = n.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, M.prototype.getX = function() {
                return this.x.fromRed()
            }, M.prototype.getY = function() {
                return this.y.fromRed()
            }, M.prototype.mul = function(t) {
                return t = new(n())(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, M.prototype.mulAdd = function(t, e, r) {
                var i = [this, e],
                    n = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
            }, M.prototype.jmulAdd = function(t, e, r) {
                var i = [this, e],
                    n = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
            }, M.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, M.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed,
                        i = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(i)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(i)
                        }
                    }
                }
                return e
            }, M.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, y(E, v.BasePoint), b.prototype.jpoint = function(t, e, r) {
                return new E(this, t, e, r)
            }, E.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    i = this.y.redMul(e).redMul(t);
                return this.curve.point(r, i)
            }, E.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, E.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    i = this.x.redMul(e),
                    n = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)),
                    s = t.y.redMul(r.redMul(this.z)),
                    a = i.redSub(n),
                    h = o.redSub(s);
                if (0 === a.cmpn(0)) return 0 !== h.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var l = a.redSqr(),
                    u = l.redMul(a),
                    c = i.redMul(l),
                    d = h.redSqr().redIAdd(u).redISub(c).redISub(c),
                    f = h.redMul(c.redISub(d)).redISub(o.redMul(u)),
                    p = this.z.redMul(t.z).redMul(a);
                return this.curve.jpoint(d, f, p)
            }, E.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    r = this.x,
                    i = t.x.redMul(e),
                    n = this.y,
                    o = t.y.redMul(e).redMul(this.z),
                    s = r.redSub(i),
                    a = n.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var h = s.redSqr(),
                    l = h.redMul(s),
                    u = r.redMul(h),
                    c = a.redSqr().redIAdd(l).redISub(u).redISub(u),
                    d = a.redMul(u.redISub(c)).redISub(n.redMul(l)),
                    f = this.z.redMul(s);
                return this.curve.jpoint(c, d, f)
            }, E.prototype.dblp = function(t) {
                if (0 === t) return this;
                if (this.isInfinity()) return this;
                if (!t) return this.dbl();
                var e;
                if (this.curve.zeroA || this.curve.threeA) {
                    var r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var i = this.curve.a,
                    n = this.curve.tinv,
                    o = this.x,
                    s = this.y,
                    a = this.z,
                    h = a.redSqr().redSqr(),
                    l = s.redAdd(s);
                for (e = 0; e < t; e++) {
                    var u = o.redSqr(),
                        c = l.redSqr(),
                        d = c.redSqr(),
                        f = u.redAdd(u).redIAdd(u).redIAdd(i.redMul(h)),
                        p = o.redMul(c),
                        m = f.redSqr().redISub(p.redAdd(p)),
                        v = p.redISub(m),
                        g = f.redMul(v);
                    g = g.redIAdd(g).redISub(d);
                    var y = l.redMul(a);
                    e + 1 < t && (h = h.redMul(d)), o = m, a = y, l = g
                }
                return this.curve.jpoint(o, l.redMul(n), a)
            }, E.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, E.prototype._zeroDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    s = s.redIAdd(s);
                    var a = i.redAdd(i).redIAdd(i),
                        h = a.redSqr().redISub(s).redISub(s),
                        l = o.redIAdd(o);
                    l = (l = l.redIAdd(l)).redIAdd(l), t = h, e = a.redMul(s.redISub(h)).redISub(l), r = this.y.redAdd(this.y)
                } else {
                    var u = this.x.redSqr(),
                        c = this.y.redSqr(),
                        d = c.redSqr(),
                        f = this.x.redAdd(c).redSqr().redISub(u).redISub(d);
                    f = f.redIAdd(f);
                    var p = u.redAdd(u).redIAdd(u),
                        m = p.redSqr(),
                        v = d.redIAdd(d);
                    v = (v = v.redIAdd(v)).redIAdd(v), t = m.redISub(f).redISub(f), e = p.redMul(f.redISub(t)).redISub(v), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, E.prototype._threeDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    s = s.redIAdd(s);
                    var a = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                        h = a.redSqr().redISub(s).redISub(s);
                    t = h;
                    var l = o.redIAdd(o);
                    l = (l = l.redIAdd(l)).redIAdd(l), e = a.redMul(s.redISub(h)).redISub(l), r = this.y.redAdd(this.y)
                } else {
                    var u = this.z.redSqr(),
                        c = this.y.redSqr(),
                        d = this.x.redMul(c),
                        f = this.x.redSub(u).redMul(this.x.redAdd(u));
                    f = f.redAdd(f).redIAdd(f);
                    var p = d.redIAdd(d),
                        m = (p = p.redIAdd(p)).redAdd(p);
                    t = f.redSqr().redISub(m), r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(u);
                    var v = c.redSqr();
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v), e = f.redMul(p.redISub(t)).redISub(v)
                }
                return this.curve.jpoint(t, e, r)
            }, E.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    i = this.z,
                    n = i.redSqr().redSqr(),
                    o = e.redSqr(),
                    s = r.redSqr(),
                    a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
                    h = e.redAdd(e),
                    l = (h = h.redIAdd(h)).redMul(s),
                    u = a.redSqr().redISub(l.redAdd(l)),
                    c = l.redISub(u),
                    d = s.redSqr();
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var f = a.redMul(c).redISub(d),
                    p = r.redAdd(r).redMul(i);
                return this.curve.jpoint(u, f, p)
            }, E.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    i = e.redSqr(),
                    n = t.redAdd(t).redIAdd(t),
                    o = n.redSqr(),
                    s = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
                    a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                    h = i.redIAdd(i);
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var l = n.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(h),
                    u = e.redMul(l);
                u = (u = u.redIAdd(u)).redIAdd(u);
                var c = this.x.redMul(a).redISub(u);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var d = this.y.redMul(l.redMul(h.redISub(l)).redISub(s.redMul(a)));
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var f = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
                return this.curve.jpoint(c, d, f)
            }, E.prototype.mul = function(t, e) {
                return t = new(n())(t, e), this.curve._wnafMul(this, t)
            }, E.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var i = e.redMul(this.z),
                    n = r.redMul(t.z);
                return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0)
            }, E.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var i = t.clone(), n = this.curve.redN.redMul(e);;) {
                    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
                }
            }, E.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, E.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var k = a((function(t, e) {
                    var r = e;
                    r.base = v, r.short = A, r.mont = null, r.edwards = null
                })),
                x = a((function(t, e) {
                    var r, i = e,
                        n = c.assert;

                    function o(t) {
                        "short" === t.type ? this.curve = new k.short(t) : "edwards" === t.type ? this.curve = new k.edwards(t) : this.curve = new k.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function a(t, e) {
                        Object.defineProperty(i, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var r = new o(e);
                                return Object.defineProperty(i, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r
                                }), r
                            }
                        })
                    }
                    i.PresetCurve = o, a("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), a("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), a("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), a("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: s().sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), a("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: s().sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), a("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["9"]
                    }), a("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        r = null.crash()
                    } catch (h) {
                        r = void 0
                    }
                    a("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: s().sha256,
                        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                        basis: [{
                            a: "3086d221a7d46bcde86c90e49284eb15",
                            b: "-e4437ed6010e88286f547fa90abfe4c3"
                        }, {
                            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                            b: "3086d221a7d46bcde86c90e49284eb15"
                        }],
                        gRed: !1,
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                    })
                }));

            function C(t) {
                if (!(this instanceof C)) return new C(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = u.toArray(t.entropy, t.entropyEnc || "hex"),
                    r = u.toArray(t.nonce, t.nonceEnc || "hex"),
                    i = u.toArray(t.pers, t.persEnc || "hex");
                h(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, i)
            }
            var _ = C;
            C.prototype._init = function(t, e, r) {
                var i = t.concat(e).concat(r);
                this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
                this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
            }, C.prototype._hmac = function() {
                return new(s().hmac)(this.hash, this.K)
            }, C.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, C.prototype.reseed = function(t, e, r, i) {
                "string" !== typeof e && (i = r, r = e, e = null), t = u.toArray(t, e), r = u.toArray(r, i), h(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, C.prototype.generate = function(t, e, r, i) {
                if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                "string" !== typeof e && (i = r, r = e, e = null), r && (r = u.toArray(r, i || "hex"), this._update(r));
                for (var n = []; n.length < t;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
                var o = n.slice(0, t);
                return this._update(r), this._reseed++, u.encode(o, e)
            };
            var T = c.assert;

            function I(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            var P = I;
            I.fromPublic = function(t, e, r) {
                return e instanceof I ? e : new I(t, {
                    pub: e,
                    pubEnc: r
                })
            }, I.fromPrivate = function(t, e, r) {
                return e instanceof I ? e : new I(t, {
                    priv: e,
                    privEnc: r
                })
            }, I.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, I.prototype.getPublic = function(t, e) {
                return "string" === typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
            }, I.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, I.prototype._importPrivate = function(t, e) {
                this.priv = new(n())(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, I.prototype._importPublic = function(t, e) {
                if (t.x || t.y) return "mont" === this.ec.curve.type ? T(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || T(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                this.pub = this.ec.curve.decodePoint(t, e)
            }, I.prototype.derive = function(t) {
                return t.validate() || T(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, I.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, I.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, I.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var S = c.assert;

            function N(t, e) {
                if (t instanceof N) return t;
                this._importDER(t, e) || (S(t.r && t.s, "Signature without r or s"), this.r = new(n())(t.r, 16), this.s = new(n())(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }
            var L = N;

            function O() {
                this.place = 0
            }

            function R(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var i = 15 & r;
                if (0 === i || i > 4) return !1;
                for (var n = 0, o = 0, s = e.place; o < i; o++, s++) n <<= 8, n |= t[s], n >>>= 0;
                return !(n <= 127) && (e.place = s, n)
            }

            function B(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function D(t, e) {
                if (e < 128) t.push(e);
                else {
                    var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                    for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                    t.push(e)
                }
            }
            N.prototype._importDER = function(t, e) {
                t = c.toArray(t, e);
                var r = new O;
                if (48 !== t[r.place++]) return !1;
                var i = R(t, r);
                if (!1 === i) return !1;
                if (i + r.place !== t.length) return !1;
                if (2 !== t[r.place++]) return !1;
                var o = R(t, r);
                if (!1 === o) return !1;
                var s = t.slice(r.place, o + r.place);
                if (r.place += o, 2 !== t[r.place++]) return !1;
                var a = R(t, r);
                if (!1 === a) return !1;
                if (t.length !== a + r.place) return !1;
                var h = t.slice(r.place, a + r.place);
                if (0 === s[0]) {
                    if (!(128 & s[1])) return !1;
                    s = s.slice(1)
                }
                if (0 === h[0]) {
                    if (!(128 & h[1])) return !1;
                    h = h.slice(1)
                }
                return this.r = new(n())(s), this.s = new(n())(h), this.recoveryParam = null, !0
            }, N.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = B(e), r = B(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var i = [2];
                D(i, e.length), (i = i.concat(e)).push(2), D(i, r.length);
                var n = i.concat(r),
                    o = [48];
                return D(o, n.length), o = o.concat(n), c.encode(o, t)
            };
            var z = function() {
                    throw new Error("unsupported")
                },
                F = c.assert;

            function U(t) {
                if (!(this instanceof U)) return new U(t);
                "string" === typeof t && (F(Object.prototype.hasOwnProperty.call(x, t), "Unknown curve " + t), t = x[t]), t instanceof x.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            var q = U;
            U.prototype.keyPair = function(t) {
                return new P(this, t)
            }, U.prototype.keyFromPrivate = function(t, e) {
                return P.fromPrivate(this, t, e)
            }, U.prototype.keyFromPublic = function(t, e) {
                return P.fromPublic(this, t, e)
            }, U.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new _({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || z(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), i = this.n.sub(new(n())(2));;) {
                    var o = new(n())(e.generate(r));
                    if (!(o.cmp(i) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                }
            }, U.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }, U.prototype.sign = function(t, e, r, i) {
                "object" === typeof r && (i = r, r = null), i || (i = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new(n())(t, 16));
                for (var o = this.n.byteLength(), s = e.getPrivate().toArray("be", o), a = t.toArray("be", o), h = new _({
                        hash: this.hash,
                        entropy: s,
                        nonce: a,
                        pers: i.pers,
                        persEnc: i.persEnc || "utf8"
                    }), l = this.n.sub(new(n())(1)), u = 0;; u++) {
                    var c = i.k ? i.k(u) : new(n())(h.generate(this.n.byteLength()));
                    if (!((c = this._truncateToN(c, !0)).cmpn(1) <= 0 || c.cmp(l) >= 0)) {
                        var d = this.g.mul(c);
                        if (!d.isInfinity()) {
                            var f = d.getX(),
                                p = f.umod(this.n);
                            if (0 !== p.cmpn(0)) {
                                var m = c.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t));
                                if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                    var v = (d.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(p) ? 2 : 0);
                                    return i.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), v ^= 1), new L({
                                        r: p,
                                        s: m,
                                        recoveryParam: v
                                    })
                                }
                            }
                        }
                    }
                }
            }, U.prototype.verify = function(t, e, r, i) {
                t = this._truncateToN(new(n())(t, 16)), r = this.keyFromPublic(r, i);
                var o = (e = new L(e, "hex")).r,
                    s = e.s;
                if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                var a, h = s.invm(this.n),
                    l = h.mul(t).umod(this.n),
                    u = h.mul(o).umod(this.n);
                return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(l, r.getPublic(), u)).isInfinity() && a.eqXToP(o) : !(a = this.g.mulAdd(l, r.getPublic(), u)).isInfinity() && 0 === a.getX().umod(this.n).cmp(o)
            }, U.prototype.recoverPubKey = function(t, e, r, i) {
                F((3 & r) === r, "The recovery param is more than two bits"), e = new L(e, i);
                var o = this.n,
                    s = new(n())(t),
                    a = e.r,
                    h = e.s,
                    l = 1 & r,
                    u = r >> 1;
                if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate");
                a = u ? this.curve.pointFromX(a.add(this.curve.n), l) : this.curve.pointFromX(a, l);
                var c = e.r.invm(o),
                    d = o.sub(s).mul(c).umod(o),
                    f = h.mul(c).umod(o);
                return this.g.mulAdd(d, a, f)
            }, U.prototype.getKeyRecoveryParam = function(t, e, r, i) {
                if (null !== (e = new L(e, i)).recoveryParam) return e.recoveryParam;
                for (var n = 0; n < 4; n++) {
                    var o;
                    try {
                        o = this.recoverPubKey(t, e, n)
                    } catch (t) {
                        continue
                    }
                    if (o.eq(r)) return n
                }
                throw new Error("Unable to find valid recovery factor")
            };
            var H = a((function(t, e) {
                    var r = e;
                    r.version = "6.5.4", r.utils = c, r.rand = function() {
                        throw new Error("unsupported")
                    }, r.curve = k, r.curves = x, r.ec = q, r.eddsa = null
                })).ec,
                j = r(16441),
                G = r(6881);
            const K = new(r(1581).Logger)("signing-key/5.7.0");
            let V = null;

            function J() {
                return V || (V = new H("secp256k1")), V
            }
            class Q {
                constructor(t) {
                    (0, G.defineReadOnly)(this, "curve", "secp256k1"), (0, G.defineReadOnly)(this, "privateKey", (0, j.hexlify)(t)), 32 !== (0, j.hexDataLength)(this.privateKey) && K.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    const e = J().keyFromPrivate((0, j.arrayify)(this.privateKey));
                    (0, G.defineReadOnly)(this, "publicKey", "0x" + e.getPublic(!1, "hex")), (0, G.defineReadOnly)(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), (0, G.defineReadOnly)(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    const e = J().keyFromPublic((0, j.arrayify)(this.publicKey)),
                        r = J().keyFromPublic((0, j.arrayify)(t));
                    return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    const e = J().keyFromPrivate((0, j.arrayify)(this.privateKey)),
                        r = (0, j.arrayify)(t);
                    32 !== r.length && K.throwArgumentError("bad digest length", "digest", t);
                    const i = e.sign(r, {
                        canonical: !0
                    });
                    return (0, j.splitSignature)({
                        recoveryParam: i.recoveryParam,
                        r: (0, j.hexZeroPad)("0x" + i.r.toString(16), 32),
                        s: (0, j.hexZeroPad)("0x" + i.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    const e = J().keyFromPrivate((0, j.arrayify)(this.privateKey)),
                        r = J().keyFromPublic((0, j.arrayify)(Y(t)));
                    return (0, j.hexZeroPad)("0x" + e.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !(!t || !t._isSigningKey)
                }
            }

            function Z(t, e) {
                const r = (0, j.splitSignature)(e),
                    i = {
                        r: (0, j.arrayify)(r.r),
                        s: (0, j.arrayify)(r.s)
                    };
                return "0x" + J().recoverPubKey((0, j.arrayify)(t), i, r.recoveryParam).encode("hex", !1)
            }

            function Y(t, e) {
                const r = (0, j.arrayify)(t);
                if (32 === r.length) {
                    const t = new Q(r);
                    return e ? "0x" + J().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === r.length ? e ? (0, j.hexlify)(r) : "0x" + J().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + J().keyFromPublic(r).getPublic(!0, "hex") : (0, j.hexlify)(r) : K.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
        },
        42500: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function i(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }

                function n(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                var s;
                "object" === typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    s = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : r(62808).Buffer
                } catch (T) {}

                function a(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void i(!1, "Invalid character in " + t)
                }

                function h(t, e, r) {
                    var i = a(t, r);
                    return r - 1 >= e && (i |= a(t, r - 1) << 4), i
                }

                function l(t, e, r, n) {
                    for (var o = 0, s = 0, a = Math.min(t.length, r), h = e; h < a; h++) {
                        var l = t.charCodeAt(h) - 48;
                        o *= n, s = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l, i(l >= 0 && s < n, "Invalid character"), o += s
                    }
                    return o
                }

                function u(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, o.min = function(t, e) {
                        return t.cmp(e) < 0 ? t : e
                    }, o.prototype._init = function(t, e, r) {
                        if ("number" === typeof t) return this._initNumber(t, e, r);
                        if ("object" === typeof t) return this._initArray(t, e, r);
                        "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, r) : (this._parseBase(t, e, n), "le" === r && this._initArray(this.toArray(), e, r)))
                    }, o.prototype._initNumber = function(t, e, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                    }, o.prototype._initArray = function(t, e, r) {
                        if (i("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var o, s, a = 0;
                        if ("be" === r)
                            for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                        else if ("le" === r)
                            for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                        return this._strip()
                    }, o.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var n, o = 0,
                            s = 0;
                        if ("be" === r)
                            for (i = t.length - 1; i >= e; i -= 2) n = h(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        else
                            for (i = (t.length - e) % 2 === 0 ? e + 1 : e; i < t.length; i += 2) n = h(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        this._strip()
                    }, o.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                        i--, n = n / e | 0;
                        for (var o = t.length - r, s = o % i, a = Math.min(o, o - s) + r, h = 0, u = r; u < a; u += i) h = l(t, u, u + i, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== s) {
                            var c = 1;
                            for (h = l(t, u, t.length, e), u = 0; u < s; u++) c *= e;
                            this.imuln(c), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                        }
                        this._strip()
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype._move = function(t) {
                        u(t, this)
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" !== typeof Symbol && "function" === typeof Symbol.for) try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c
                } catch (T) {
                    o.prototype.inspect = c
                } else o.prototype.inspect = c;

                function c() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                o.prototype.toString = function(t, e) {
                    var r;
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                            var a = this.words[s],
                                h = (16777215 & (a << n | o)).toString(16);
                            o = a >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), r = 0 !== o || s !== this.length - 1 ? d[6 - h.length] + h + r : h + r
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var l = f[t],
                            u = p[t];
                        r = "";
                        var c = this.clone();
                        for (c.negative = 0; !c.isZero();) {
                            var m = c.modrn(u).toString(t);
                            r = (c = c.idivn(u)).isZero() ? m + r : d[l - m.length] + m + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    i(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, s && (o.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(s, t, e)
                }), o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                };

                function m(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var i = t.length + e.length | 0;
                    r.length = i, i = i - 1 | 0;
                    var n = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = n * o,
                        a = 67108863 & s,
                        h = s / 67108864 | 0;
                    r.words[0] = a;
                    for (var l = 1; l < i; l++) {
                        for (var u = h >>> 26, c = 67108863 & h, d = Math.min(l, e.length - 1), f = Math.max(0, l - t.length + 1); f <= d; f++) {
                            var p = l - f | 0;
                            u += (s = (n = 0 | t.words[p]) * (o = 0 | e.words[f]) + c) / 67108864 | 0, c = 67108863 & s
                        }
                        r.words[l] = 0 | c, h = 0 | u
                    }
                    return 0 !== h ? r.words[l] = 0 | h : r.length--, r._strip()
                }
                o.prototype.toArrayLike = function(t, e, r) {
                    this._strip();
                    var n = this.byteLength(),
                        o = r || Math.max(1, n);
                    i(n <= o, "byte array longer than desired length"), i(o > 0, "Requested array length <= 0");
                    var s = function(t, e) {
                        return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                    }(t, o);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, n), s
                }, o.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var s = this.words[n] << o | i;
                        t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = i; r < t.length;) t[r++] = 0
                }, o.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var s = this.words[n] << o | i;
                        t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = i; r >= 0;) t[r--] = 0
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 0 === (8191 & e) && (r += 13, e >>>= 13), 0 === (127 & e) && (r += 7, e >>>= 7), 0 === (15 & e) && (r += 4, e >>>= 4), 0 === (3 & e) && (r += 2, e >>>= 2), 0 === (1 & e) && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return 26 * (this.length - 1) + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, o.prototype.ior = function(t) {
                    return i(0 === (this.negative | t.negative)), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, o.prototype.iand = function(t) {
                    return i(0 === (this.negative | t.negative)), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                        for (; i < e.length; i++) this.words[i] = e.words[i];
                    return this.length = e.length, this._strip()
                }, o.prototype.ixor = function(t) {
                    return i(0 === (this.negative | t.negative)), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    i("number" === typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                    return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this._strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    i("number" === typeof t && t >= 0);
                    var r = t / 26 | 0,
                        n = t % 26;
                    return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << n : this.words[r] & ~(1 << n), this._strip()
                }, o.prototype.iadd = function(t) {
                    var e, r, i;
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                    for (var n = 0, o = 0; o < i.length; o++) e = (0 | r.words[o]) + (0 | i.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                    for (; 0 !== n && o < r.length; o++) e = (0 | r.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e = this.iadd(t);
                        return t.negative = 1, e._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var r, i, n = this.cmp(t);
                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    n > 0 ? (r = this, i = t) : (r = t, i = this);
                    for (var o = 0, s = 0; s < i.length; s++) o = (e = (0 | r.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                    if (0 === o && s < r.length && r !== this)
                        for (; s < r.length; s++) this.words[s] = r.words[s];
                    return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this._strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var v = function(t, e, r) {
                    var i, n, o, s = t.words,
                        a = e.words,
                        h = r.words,
                        l = 0,
                        u = 0 | s[0],
                        c = 8191 & u,
                        d = u >>> 13,
                        f = 0 | s[1],
                        p = 8191 & f,
                        m = f >>> 13,
                        v = 0 | s[2],
                        g = 8191 & v,
                        y = v >>> 13,
                        w = 0 | s[3],
                        b = 8191 & w,
                        A = w >>> 13,
                        M = 0 | s[4],
                        E = 8191 & M,
                        k = M >>> 13,
                        x = 0 | s[5],
                        C = 8191 & x,
                        _ = x >>> 13,
                        T = 0 | s[6],
                        I = 8191 & T,
                        P = T >>> 13,
                        S = 0 | s[7],
                        N = 8191 & S,
                        L = S >>> 13,
                        O = 0 | s[8],
                        R = 8191 & O,
                        B = O >>> 13,
                        D = 0 | s[9],
                        z = 8191 & D,
                        F = D >>> 13,
                        U = 0 | a[0],
                        q = 8191 & U,
                        H = U >>> 13,
                        j = 0 | a[1],
                        G = 8191 & j,
                        K = j >>> 13,
                        V = 0 | a[2],
                        J = 8191 & V,
                        Q = V >>> 13,
                        Z = 0 | a[3],
                        Y = 8191 & Z,
                        W = Z >>> 13,
                        X = 0 | a[4],
                        $ = 8191 & X,
                        tt = X >>> 13,
                        et = 0 | a[5],
                        rt = 8191 & et,
                        it = et >>> 13,
                        nt = 0 | a[6],
                        ot = 8191 & nt,
                        st = nt >>> 13,
                        at = 0 | a[7],
                        ht = 8191 & at,
                        lt = at >>> 13,
                        ut = 0 | a[8],
                        ct = 8191 & ut,
                        dt = ut >>> 13,
                        ft = 0 | a[9],
                        pt = 8191 & ft,
                        mt = ft >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var vt = (l + (i = Math.imul(c, q)) | 0) + ((8191 & (n = (n = Math.imul(c, H)) + Math.imul(d, q) | 0)) << 13) | 0;
                    l = ((o = Math.imul(d, H)) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, i = Math.imul(p, q), n = (n = Math.imul(p, H)) + Math.imul(m, q) | 0, o = Math.imul(m, H);
                    var gt = (l + (i = i + Math.imul(c, G) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, K) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, K) | 0) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, i = Math.imul(g, q), n = (n = Math.imul(g, H)) + Math.imul(y, q) | 0, o = Math.imul(y, H), i = i + Math.imul(p, G) | 0, n = (n = n + Math.imul(p, K) | 0) + Math.imul(m, G) | 0, o = o + Math.imul(m, K) | 0;
                    var yt = (l + (i = i + Math.imul(c, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, Q) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, Q) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, i = Math.imul(b, q), n = (n = Math.imul(b, H)) + Math.imul(A, q) | 0, o = Math.imul(A, H), i = i + Math.imul(g, G) | 0, n = (n = n + Math.imul(g, K) | 0) + Math.imul(y, G) | 0, o = o + Math.imul(y, K) | 0, i = i + Math.imul(p, J) | 0, n = (n = n + Math.imul(p, Q) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, Q) | 0;
                    var wt = (l + (i = i + Math.imul(c, Y) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, W) | 0) + Math.imul(d, Y) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, W) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, i = Math.imul(E, q), n = (n = Math.imul(E, H)) + Math.imul(k, q) | 0, o = Math.imul(k, H), i = i + Math.imul(b, G) | 0, n = (n = n + Math.imul(b, K) | 0) + Math.imul(A, G) | 0, o = o + Math.imul(A, K) | 0, i = i + Math.imul(g, J) | 0, n = (n = n + Math.imul(g, Q) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, Q) | 0, i = i + Math.imul(p, Y) | 0, n = (n = n + Math.imul(p, W) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, W) | 0;
                    var bt = (l + (i = i + Math.imul(c, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, tt) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, tt) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, i = Math.imul(C, q), n = (n = Math.imul(C, H)) + Math.imul(_, q) | 0, o = Math.imul(_, H), i = i + Math.imul(E, G) | 0, n = (n = n + Math.imul(E, K) | 0) + Math.imul(k, G) | 0, o = o + Math.imul(k, K) | 0, i = i + Math.imul(b, J) | 0, n = (n = n + Math.imul(b, Q) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, Q) | 0, i = i + Math.imul(g, Y) | 0, n = (n = n + Math.imul(g, W) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, W) | 0, i = i + Math.imul(p, $) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, tt) | 0;
                    var At = (l + (i = i + Math.imul(c, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, it) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, it) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, i = Math.imul(I, q), n = (n = Math.imul(I, H)) + Math.imul(P, q) | 0, o = Math.imul(P, H), i = i + Math.imul(C, G) | 0, n = (n = n + Math.imul(C, K) | 0) + Math.imul(_, G) | 0, o = o + Math.imul(_, K) | 0, i = i + Math.imul(E, J) | 0, n = (n = n + Math.imul(E, Q) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, Q) | 0, i = i + Math.imul(b, Y) | 0, n = (n = n + Math.imul(b, W) | 0) + Math.imul(A, Y) | 0, o = o + Math.imul(A, W) | 0, i = i + Math.imul(g, $) | 0, n = (n = n + Math.imul(g, tt) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, tt) | 0, i = i + Math.imul(p, rt) | 0, n = (n = n + Math.imul(p, it) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, it) | 0;
                    var Mt = (l + (i = i + Math.imul(c, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, st) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, i = Math.imul(N, q), n = (n = Math.imul(N, H)) + Math.imul(L, q) | 0, o = Math.imul(L, H), i = i + Math.imul(I, G) | 0, n = (n = n + Math.imul(I, K) | 0) + Math.imul(P, G) | 0, o = o + Math.imul(P, K) | 0, i = i + Math.imul(C, J) | 0, n = (n = n + Math.imul(C, Q) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, Q) | 0, i = i + Math.imul(E, Y) | 0, n = (n = n + Math.imul(E, W) | 0) + Math.imul(k, Y) | 0, o = o + Math.imul(k, W) | 0, i = i + Math.imul(b, $) | 0, n = (n = n + Math.imul(b, tt) | 0) + Math.imul(A, $) | 0, o = o + Math.imul(A, tt) | 0, i = i + Math.imul(g, rt) | 0, n = (n = n + Math.imul(g, it) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, it) | 0, i = i + Math.imul(p, ot) | 0, n = (n = n + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
                    var Et = (l + (i = i + Math.imul(c, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, lt) | 0) + Math.imul(d, ht) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, lt) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, i = Math.imul(R, q), n = (n = Math.imul(R, H)) + Math.imul(B, q) | 0, o = Math.imul(B, H), i = i + Math.imul(N, G) | 0, n = (n = n + Math.imul(N, K) | 0) + Math.imul(L, G) | 0, o = o + Math.imul(L, K) | 0, i = i + Math.imul(I, J) | 0, n = (n = n + Math.imul(I, Q) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, Q) | 0, i = i + Math.imul(C, Y) | 0, n = (n = n + Math.imul(C, W) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, W) | 0, i = i + Math.imul(E, $) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, tt) | 0, i = i + Math.imul(b, rt) | 0, n = (n = n + Math.imul(b, it) | 0) + Math.imul(A, rt) | 0, o = o + Math.imul(A, it) | 0, i = i + Math.imul(g, ot) | 0, n = (n = n + Math.imul(g, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, i = i + Math.imul(p, ht) | 0, n = (n = n + Math.imul(p, lt) | 0) + Math.imul(m, ht) | 0, o = o + Math.imul(m, lt) | 0;
                    var kt = (l + (i = i + Math.imul(c, ct) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, dt) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, dt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, i = Math.imul(z, q), n = (n = Math.imul(z, H)) + Math.imul(F, q) | 0, o = Math.imul(F, H), i = i + Math.imul(R, G) | 0, n = (n = n + Math.imul(R, K) | 0) + Math.imul(B, G) | 0, o = o + Math.imul(B, K) | 0, i = i + Math.imul(N, J) | 0, n = (n = n + Math.imul(N, Q) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, Q) | 0, i = i + Math.imul(I, Y) | 0, n = (n = n + Math.imul(I, W) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, W) | 0, i = i + Math.imul(C, $) | 0, n = (n = n + Math.imul(C, tt) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, tt) | 0, i = i + Math.imul(E, rt) | 0, n = (n = n + Math.imul(E, it) | 0) + Math.imul(k, rt) | 0, o = o + Math.imul(k, it) | 0, i = i + Math.imul(b, ot) | 0, n = (n = n + Math.imul(b, st) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, i = i + Math.imul(g, ht) | 0, n = (n = n + Math.imul(g, lt) | 0) + Math.imul(y, ht) | 0, o = o + Math.imul(y, lt) | 0, i = i + Math.imul(p, ct) | 0, n = (n = n + Math.imul(p, dt) | 0) + Math.imul(m, ct) | 0, o = o + Math.imul(m, dt) | 0;
                    var xt = (l + (i = i + Math.imul(c, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, mt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, mt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, i = Math.imul(z, G), n = (n = Math.imul(z, K)) + Math.imul(F, G) | 0, o = Math.imul(F, K), i = i + Math.imul(R, J) | 0, n = (n = n + Math.imul(R, Q) | 0) + Math.imul(B, J) | 0, o = o + Math.imul(B, Q) | 0, i = i + Math.imul(N, Y) | 0, n = (n = n + Math.imul(N, W) | 0) + Math.imul(L, Y) | 0, o = o + Math.imul(L, W) | 0, i = i + Math.imul(I, $) | 0, n = (n = n + Math.imul(I, tt) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, tt) | 0, i = i + Math.imul(C, rt) | 0, n = (n = n + Math.imul(C, it) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, it) | 0, i = i + Math.imul(E, ot) | 0, n = (n = n + Math.imul(E, st) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, st) | 0, i = i + Math.imul(b, ht) | 0, n = (n = n + Math.imul(b, lt) | 0) + Math.imul(A, ht) | 0, o = o + Math.imul(A, lt) | 0, i = i + Math.imul(g, ct) | 0, n = (n = n + Math.imul(g, dt) | 0) + Math.imul(y, ct) | 0, o = o + Math.imul(y, dt) | 0;
                    var Ct = (l + (i = i + Math.imul(p, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(m, mt) | 0) + (n >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, i = Math.imul(z, J), n = (n = Math.imul(z, Q)) + Math.imul(F, J) | 0, o = Math.imul(F, Q), i = i + Math.imul(R, Y) | 0, n = (n = n + Math.imul(R, W) | 0) + Math.imul(B, Y) | 0, o = o + Math.imul(B, W) | 0, i = i + Math.imul(N, $) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, tt) | 0, i = i + Math.imul(I, rt) | 0, n = (n = n + Math.imul(I, it) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, it) | 0, i = i + Math.imul(C, ot) | 0, n = (n = n + Math.imul(C, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, i = i + Math.imul(E, ht) | 0, n = (n = n + Math.imul(E, lt) | 0) + Math.imul(k, ht) | 0, o = o + Math.imul(k, lt) | 0, i = i + Math.imul(b, ct) | 0, n = (n = n + Math.imul(b, dt) | 0) + Math.imul(A, ct) | 0, o = o + Math.imul(A, dt) | 0;
                    var _t = (l + (i = i + Math.imul(g, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(y, mt) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, i = Math.imul(z, Y), n = (n = Math.imul(z, W)) + Math.imul(F, Y) | 0, o = Math.imul(F, W), i = i + Math.imul(R, $) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, tt) | 0, i = i + Math.imul(N, rt) | 0, n = (n = n + Math.imul(N, it) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, it) | 0, i = i + Math.imul(I, ot) | 0, n = (n = n + Math.imul(I, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, i = i + Math.imul(C, ht) | 0, n = (n = n + Math.imul(C, lt) | 0) + Math.imul(_, ht) | 0, o = o + Math.imul(_, lt) | 0, i = i + Math.imul(E, ct) | 0, n = (n = n + Math.imul(E, dt) | 0) + Math.imul(k, ct) | 0, o = o + Math.imul(k, dt) | 0;
                    var Tt = (l + (i = i + Math.imul(b, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(b, mt) | 0) + Math.imul(A, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(A, mt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, i = Math.imul(z, $), n = (n = Math.imul(z, tt)) + Math.imul(F, $) | 0, o = Math.imul(F, tt), i = i + Math.imul(R, rt) | 0, n = (n = n + Math.imul(R, it) | 0) + Math.imul(B, rt) | 0, o = o + Math.imul(B, it) | 0, i = i + Math.imul(N, ot) | 0, n = (n = n + Math.imul(N, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, i = i + Math.imul(I, ht) | 0, n = (n = n + Math.imul(I, lt) | 0) + Math.imul(P, ht) | 0, o = o + Math.imul(P, lt) | 0, i = i + Math.imul(C, ct) | 0, n = (n = n + Math.imul(C, dt) | 0) + Math.imul(_, ct) | 0, o = o + Math.imul(_, dt) | 0;
                    var It = (l + (i = i + Math.imul(E, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, mt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(k, mt) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, i = Math.imul(z, rt), n = (n = Math.imul(z, it)) + Math.imul(F, rt) | 0, o = Math.imul(F, it), i = i + Math.imul(R, ot) | 0, n = (n = n + Math.imul(R, st) | 0) + Math.imul(B, ot) | 0, o = o + Math.imul(B, st) | 0, i = i + Math.imul(N, ht) | 0, n = (n = n + Math.imul(N, lt) | 0) + Math.imul(L, ht) | 0, o = o + Math.imul(L, lt) | 0, i = i + Math.imul(I, ct) | 0, n = (n = n + Math.imul(I, dt) | 0) + Math.imul(P, ct) | 0, o = o + Math.imul(P, dt) | 0;
                    var Pt = (l + (i = i + Math.imul(C, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(C, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(_, mt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, i = Math.imul(z, ot), n = (n = Math.imul(z, st)) + Math.imul(F, ot) | 0, o = Math.imul(F, st), i = i + Math.imul(R, ht) | 0, n = (n = n + Math.imul(R, lt) | 0) + Math.imul(B, ht) | 0, o = o + Math.imul(B, lt) | 0, i = i + Math.imul(N, ct) | 0, n = (n = n + Math.imul(N, dt) | 0) + Math.imul(L, ct) | 0, o = o + Math.imul(L, dt) | 0;
                    var St = (l + (i = i + Math.imul(I, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(I, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(P, mt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, i = Math.imul(z, ht), n = (n = Math.imul(z, lt)) + Math.imul(F, ht) | 0, o = Math.imul(F, lt), i = i + Math.imul(R, ct) | 0, n = (n = n + Math.imul(R, dt) | 0) + Math.imul(B, ct) | 0, o = o + Math.imul(B, dt) | 0;
                    var Nt = (l + (i = i + Math.imul(N, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(N, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(L, mt) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, i = Math.imul(z, ct), n = (n = Math.imul(z, dt)) + Math.imul(F, ct) | 0, o = Math.imul(F, dt);
                    var Lt = (l + (i = i + Math.imul(R, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, mt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(B, mt) | 0) + (n >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863;
                    var Ot = (l + (i = Math.imul(z, pt)) | 0) + ((8191 & (n = (n = Math.imul(z, mt)) + Math.imul(F, pt) | 0)) << 13) | 0;
                    return l = ((o = Math.imul(F, mt)) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, h[0] = vt, h[1] = gt, h[2] = yt, h[3] = wt, h[4] = bt, h[5] = At, h[6] = Mt, h[7] = Et, h[8] = kt, h[9] = xt, h[10] = Ct, h[11] = _t, h[12] = Tt, h[13] = It, h[14] = Pt, h[15] = St, h[16] = Nt, h[17] = Lt, h[18] = Ot, 0 !== l && (h[19] = l, r.length++), r
                };

                function g(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                        var s = n;
                        n = 0;
                        for (var a = 67108863 & i, h = Math.min(o, e.length - 1), l = Math.max(0, o - t.length + 1); l <= h; l++) {
                            var u = o - l,
                                c = (0 | t.words[u]) * (0 | e.words[l]),
                                d = 67108863 & c;
                            a = 67108863 & (d = d + a | 0), n += (s = (s = s + (c / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, s &= 67108863
                        }
                        r.words[o] = a, i = s, s = n
                    }
                    return 0 !== i ? r.words[o] = i : r.length--, r._strip()
                }

                function y(t, e, r) {
                    return g(t, e, r)
                }

                function w(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (v = m), o.prototype.mulTo = function(t, e) {
                    var r = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? v(this, t, e) : r < 63 ? m(this, t, e) : r < 1024 ? g(this, t, e) : y(this, t, e)
                }, w.prototype.makeRBT = function(t) {
                    for (var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, r, t);
                    return e
                }, w.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var i = 0, n = 0; n < e; n++) i |= (1 & t) << e - n - 1, t >>= 1;
                    return i
                }, w.prototype.permute = function(t, e, r, i, n, o) {
                    for (var s = 0; s < o; s++) i[s] = e[t[s]], n[s] = r[t[s]]
                }, w.prototype.transform = function(t, e, r, i, n, o) {
                    this.permute(o, t, e, r, i, n);
                    for (var s = 1; s < n; s <<= 1)
                        for (var a = s << 1, h = Math.cos(2 * Math.PI / a), l = Math.sin(2 * Math.PI / a), u = 0; u < n; u += a)
                            for (var c = h, d = l, f = 0; f < s; f++) {
                                var p = r[u + f],
                                    m = i[u + f],
                                    v = r[u + f + s],
                                    g = i[u + f + s],
                                    y = c * v - d * g;
                                g = c * g + d * v, v = y, r[u + f] = p + v, i[u + f] = m + g, r[u + f + s] = p - v, i[u + f + s] = m - g, f !== a && (y = h * c - l * d, d = h * d + l * c, c = y)
                            }
                }, w.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        i = 1 & r,
                        n = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) n++;
                    return 1 << n + 1 + i
                }, w.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var i = 0; i < r / 2; i++) {
                            var n = t[i];
                            t[i] = t[r - i - 1], t[r - i - 1] = n, n = e[i], e[i] = -e[r - i - 1], e[r - i - 1] = -n
                        }
                }, w.prototype.normalize13b = function(t, e) {
                    for (var r = 0, i = 0; i < e / 2; i++) {
                        var n = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
                        t[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                    }
                    return t
                }, w.prototype.convert13b = function(t, e, r, n) {
                    for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                    for (s = 2 * e; s < n; ++s) r[s] = 0;
                    i(0 === o), i(0 === (-8192 & o))
                }, w.prototype.stub = function(t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, w.prototype.mulp = function(t, e, r) {
                    var i = 2 * this.guessLen13b(t.length, e.length),
                        n = this.makeRBT(i),
                        o = this.stub(i),
                        s = new Array(i),
                        a = new Array(i),
                        h = new Array(i),
                        l = new Array(i),
                        u = new Array(i),
                        c = new Array(i),
                        d = r.words;
                    d.length = i, this.convert13b(t.words, t.length, s, i), this.convert13b(e.words, e.length, l, i), this.transform(s, o, a, h, i, n), this.transform(l, o, u, c, i, n);
                    for (var f = 0; f < i; f++) {
                        var p = a[f] * u[f] - h[f] * c[f];
                        h[f] = a[f] * c[f] + h[f] * u[f], a[f] = p
                    }
                    return this.conjugate(a, h, i), this.transform(a, h, d, o, i, n), this.conjugate(d, o, i), this.normalize13b(d, i), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = new Array(this.length + t.length), y(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), i("number" === typeof t), i(t < 67108864);
                    for (var r = 0, n = 0; n < this.length; n++) {
                        var o = (0 | this.words[n]) * t,
                            s = (67108863 & o) + (67108863 & r);
                        r >>= 26, r += o / 67108864 | 0, r += s >>> 26, this.words[n] = 67108863 & s
                    }
                    return 0 !== r && (this.words[n] = r, this.length++), e ? this.ineg() : this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var i = r / 26 | 0,
                                n = r % 26;
                            e[r] = t.words[i] >>> n & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                    if (++i < e.length)
                        for (var n = r.sqr(); i < e.length; i++, n = n.sqr()) 0 !== e[i] && (r = r.mul(n));
                    return r
                }, o.prototype.iushln = function(t) {
                    i("number" === typeof t && t >= 0);
                    var e, r = t % 26,
                        n = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var s = 0;
                        for (e = 0; e < this.length; e++) {
                            var a = this.words[e] & o,
                                h = (0 | this.words[e]) - a << r;
                            this.words[e] = h | s, s = a >>> 26 - r
                        }
                        s && (this.words[e] = s, this.length++)
                    }
                    if (0 !== n) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                        for (e = 0; e < n; e++) this.words[e] = 0;
                        this.length += n
                    }
                    return this._strip()
                }, o.prototype.ishln = function(t) {
                    return i(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    var n;
                    i("number" === typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                    var o = t % 26,
                        s = Math.min((t - o) / 26, this.length),
                        a = 67108863 ^ 67108863 >>> o << o,
                        h = r;
                    if (n -= s, n = Math.max(0, n), h) {
                        for (var l = 0; l < s; l++) h.words[l] = this.words[l];
                        h.length = s
                    }
                    if (0 === s);
                    else if (this.length > s)
                        for (this.length -= s, l = 0; l < this.length; l++) this.words[l] = this.words[l + s];
                    else this.words[0] = 0, this.length = 1;
                    var u = 0;
                    for (l = this.length - 1; l >= 0 && (0 !== u || l >= n); l--) {
                        var c = 0 | this.words[l];
                        this.words[l] = u << 26 - o | c >>> o, u = c & a
                    }
                    return h && 0 !== u && (h.words[h.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return i(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    i("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26,
                        n = 1 << e;
                    return !(this.length <= r) && !!(this.words[r] & n)
                }, o.prototype.imaskn = function(t) {
                    i("number" === typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    if (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                        var n = 67108863 ^ 67108863 >>> e << e;
                        this.words[this.length - 1] &= n
                    }
                    return this._strip()
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return i("number" === typeof t), i(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (i("number" === typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var n, o, s = t.length + r;
                    this._expand(s);
                    var a = 0;
                    for (n = 0; n < t.length; n++) {
                        o = (0 | this.words[n + r]) + a;
                        var h = (0 | t.words[n]) * e;
                        a = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[n + r] = 67108863 & o
                    }
                    for (; n < this.length - r; n++) a = (o = (0 | this.words[n + r]) + a) >> 26, this.words[n + r] = 67108863 & o;
                    if (0 === a) return this._strip();
                    for (i(-1 === a), a = 0, n = 0; n < this.length; n++) a = (o = -(0 | this.words[n]) + a) >> 26, this.words[n] = 67108863 & o;
                    return this.negative = 1, this._strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r = (this.length, t.length),
                        i = this.clone(),
                        n = t,
                        s = 0 | n.words[n.length - 1];
                    0 !== (r = 26 - this._countBits(s)) && (n = n.ushln(r), i.iushln(r), s = 0 | n.words[n.length - 1]);
                    var a, h = i.length - n.length;
                    if ("mod" !== e) {
                        (a = new o(null)).length = h + 1, a.words = new Array(a.length);
                        for (var l = 0; l < a.length; l++) a.words[l] = 0
                    }
                    var u = i.clone()._ishlnsubmul(n, 1, h);
                    0 === u.negative && (i = u, a && (a.words[h] = 1));
                    for (var c = h - 1; c >= 0; c--) {
                        var d = 67108864 * (0 | i.words[n.length + c]) + (0 | i.words[n.length + c - 1]);
                        for (d = Math.min(d / s | 0, 67108863), i._ishlnsubmul(n, d, c); 0 !== i.negative;) d--, i.negative = 0, i._ishlnsubmul(n, 1, c), i.isZero() || (i.negative ^= 1);
                        a && (a.words[c] = d)
                    }
                    return a && a._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                        div: a || null,
                        mod: i
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    return i(!t.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (n = a.div.neg()), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                        div: n,
                        mod: s
                    }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (n = a.div.neg()), {
                        div: n,
                        mod: a.mod
                    }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                        div: a.div,
                        mod: s
                    }) : t.length > this.length || this.cmp(t) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e);
                    var n, s, a
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        i = t.ushrn(1),
                        n = t.andln(1),
                        o = r.cmp(i);
                    return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (r * n + (0 | this.words[o])) % t;
                    return e ? -n : n
                }, o.prototype.modn = function(t) {
                    return this.modrn(t)
                }, o.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = 0, n = this.length - 1; n >= 0; n--) {
                        var o = (0 | this.words[n]) + 67108864 * r;
                        this.words[n] = o / t | 0, r = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var n = new o(1), s = new o(0), a = new o(0), h = new o(1), l = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++l;
                    for (var u = r.clone(), c = e.clone(); !e.isZero();) {
                        for (var d = 0, f = 1; 0 === (e.words[0] & f) && d < 26; ++d, f <<= 1);
                        if (d > 0)
                            for (e.iushrn(d); d-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(u), s.isub(c)), n.iushrn(1), s.iushrn(1);
                        for (var p = 0, m = 1; 0 === (r.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(a.isOdd() || h.isOdd()) && (a.iadd(u), h.isub(c)), a.iushrn(1), h.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), n.isub(a), s.isub(h)) : (r.isub(e), a.isub(n), h.isub(s))
                    }
                    return {
                        a: a,
                        b: h,
                        gcd: r.iushln(l)
                    }
                }, o.prototype._invmp = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var n, s = new o(1), a = new o(0), h = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var l = 0, u = 1; 0 === (e.words[0] & u) && l < 26; ++l, u <<= 1);
                        if (l > 0)
                            for (e.iushrn(l); l-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
                        for (var c = 0, d = 1; 0 === (r.words[0] & d) && c < 26; ++c, d <<= 1);
                        if (c > 0)
                            for (r.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(h), a.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
                    }
                    return (n = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && n.iadd(t), n
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var n = e.cmp(r);
                        if (n < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === n || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(i)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    i("number" === typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        n = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                    for (var o = n, s = r; 0 !== o && s < this.length; s++) {
                        var a = 0 | this.words[s];
                        o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                    }
                    return 0 !== o && (this.words[s] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), i(t <= 67108863, "Number is too big");
                        var n = 0 | this.words[0];
                        e = n === t ? 0 : n < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = 0 | this.words[r],
                            n = 0 | t.words[r];
                        if (i !== n) {
                            i < n ? e = -1 : i > n && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return this.cmpn(t) <= 0
                }, o.prototype.lte = function(t) {
                    return this.cmp(t) <= 0
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new C(t)
                }, o.prototype.toRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var b = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function A(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function M() {
                    A.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function E() {
                    A.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function k() {
                    A.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function x() {
                    A.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function C(t) {
                    if ("string" === typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function _(t) {
                    C.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                A.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = new Array(Math.ceil(this.n / 13)), t
                }, A.prototype.ireduce = function(t) {
                    var e, r = t;
                    do {
                        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (e > this.n);
                    var i = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, A.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, A.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, n(M, A), M.prototype.split = function(t, e) {
                    for (var r = 4194303, i = Math.min(t.length, 9), n = 0; n < i; n++) e.words[n] = t.words[n];
                    if (e.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                    var o = t.words[9];
                    for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
                        var s = 0 | t.words[n];
                        t.words[n - 10] = (s & r) << 4 | o >>> 22, o = s
                    }
                    o >>>= 22, t.words[n - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, M.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = 0 | t.words[r];
                        e += 977 * i, t.words[r] = 67108863 & e, e = 64 * i + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, n(E, A), n(k, A), n(x, A), x.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = 19 * (0 | t.words[r]) + e,
                            n = 67108863 & i;
                        i >>>= 26, t.words[r] = n, e = i
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    if (b[t]) return b[t];
                    var e;
                    if ("k256" === t) e = new M;
                    else if ("p224" === t) e = new E;
                    else if ("p192" === t) e = new k;
                    else {
                        if ("p25519" !== t) throw new Error("Unknown prime " + t);
                        e = new x
                    }
                    return b[t] = e, e
                }, C.prototype._verify1 = function(t) {
                    i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
                }, C.prototype._verify2 = function(t, e) {
                    i(0 === (t.negative | e.negative), "red works only with positives"), i(t.red && t.red === e.red, "red works only with red numbers")
                }, C.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)), t)
                }, C.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, C.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, C.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, C.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, C.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, C.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, C.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, C.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, C.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, C.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, C.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (i(e % 2 === 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
                    i(!n.isZero());
                    var a = new o(1).toRed(this),
                        h = a.redNeg(),
                        l = this.m.subn(1).iushrn(1),
                        u = this.m.bitLength();
                    for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, l).cmp(h);) u.redIAdd(h);
                    for (var c = this.pow(u, n), d = this.pow(t, n.addn(1).iushrn(1)), f = this.pow(t, n), p = s; 0 !== f.cmp(a);) {
                        for (var m = f, v = 0; 0 !== m.cmp(a); v++) m = m.redSqr();
                        i(v < p);
                        var g = this.pow(c, new o(1).iushln(p - v - 1));
                        d = d.redMul(g), c = g.redSqr(), f = f.redMul(c), p = v
                    }
                    return d
                }, C.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, C.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
                    var n = r[0],
                        s = 0,
                        a = 0,
                        h = e.bitLength() % 26;
                    for (0 === h && (h = 26), i = e.length - 1; i >= 0; i--) {
                        for (var l = e.words[i], u = h - 1; u >= 0; u--) {
                            var c = l >> u & 1;
                            n !== r[0] && (n = this.sqr(n)), 0 !== c || 0 !== s ? (s <<= 1, s |= c, (4 === ++a || 0 === i && 0 === u) && (n = this.mul(n, r[s]), a = 0, s = 0)) : a = 0
                        }
                        h = 26
                    }
                    return n
                }, C.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, C.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new _(t)
                }, n(_, C), _.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, _.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, _.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        o = n;
                    return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                }, _.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        s = n;
                    return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                }, _.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        29251: function(t, e, r) {
            "use strict";
            r.d(e, {
                Uj: function() {
                    return o
                },
                te: function() {
                    return h
                },
                Uw: function() {
                    return s
                },
                U$: function() {
                    return d
                },
                uu: function() {
                    return f
                },
                Y0: function() {
                    return u
                },
                XL: function() {
                    return m
                },
                ZN: function() {
                    return p
                }
            });
            var i = r(16441);
            const n = new(r(1581).Logger)("strings/5.7.0");
            var o, s;

            function a(t, e, r, i, n) {
                if (t === s.BAD_PREFIX || t === s.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let i = e + 1; i < r.length && r[i] >> 6 === 2; i++) t++;
                    return t
                }
                return t === s.OVERRUN ? r.length - e - 1 : 0
            }! function(t) {
                t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD"
            }(o || (o = {})),
            function(t) {
                t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation"
            }(s || (s = {}));
            const h = Object.freeze({
                error: function(t, e, r, i, o) {
                    return n.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
                },
                ignore: a,
                replace: function(t, e, r, i, n) {
                    return t === s.OVERLONG ? (i.push(n), 0) : (i.push(65533), a(t, e, r))
                }
            });

            function l(t, e) {
                null == e && (e = h.error), t = (0, i.arrayify)(t);
                const r = [];
                let n = 0;
                for (; n < t.length;) {
                    const i = t[n++];
                    if (i >> 7 === 0) {
                        r.push(i);
                        continue
                    }
                    let o = null,
                        a = null;
                    if (192 === (224 & i)) o = 1, a = 127;
                    else if (224 === (240 & i)) o = 2, a = 2047;
                    else {
                        if (240 !== (248 & i)) {
                            n += e(128 === (192 & i) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX, n - 1, t, r);
                            continue
                        }
                        o = 3, a = 65535
                    }
                    if (n - 1 + o >= t.length) {
                        n += e(s.OVERRUN, n - 1, t, r);
                        continue
                    }
                    let h = i & (1 << 8 - o - 1) - 1;
                    for (let l = 0; l < o; l++) {
                        let i = t[n];
                        if (128 != (192 & i)) {
                            n += e(s.MISSING_CONTINUE, n, t, r), h = null;
                            break
                        }
                        h = h << 6 | 63 & i, n++
                    }
                    null !== h && (h > 1114111 ? n += e(s.OUT_OF_RANGE, n - 1 - o, t, r, h) : h >= 55296 && h <= 57343 ? n += e(s.UTF16_SURROGATE, n - 1 - o, t, r, h) : h <= a ? n += e(s.OVERLONG, n - 1 - o, t, r, h) : r.push(h))
                }
                return r
            }

            function u(t, e = o.current) {
                e != o.current && (n.checkNormalize(), t = t.normalize(e));
                let r = [];
                for (let i = 0; i < t.length; i++) {
                    const e = t.charCodeAt(i);
                    if (e < 128) r.push(e);
                    else if (e < 2048) r.push(e >> 6 | 192), r.push(63 & e | 128);
                    else if (55296 == (64512 & e)) {
                        i++;
                        const n = t.charCodeAt(i);
                        if (i >= t.length || 56320 !== (64512 & n)) throw new Error("invalid utf-8 string");
                        const o = 65536 + ((1023 & e) << 10) + (1023 & n);
                        r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                    } else r.push(e >> 12 | 224), r.push(e >> 6 & 63 | 128), r.push(63 & e | 128)
                }
                return (0, i.arrayify)(r)
            }

            function c(t) {
                const e = "0000" + t.toString(16);
                return "\\u" + e.substring(e.length - 4)
            }

            function d(t, e) {
                return '"' + l(t, e).map((t => {
                    if (t < 256) {
                        switch (t) {
                            case 8:
                                return "\\b";
                            case 9:
                                return "\\t";
                            case 10:
                                return "\\n";
                            case 13:
                                return "\\r";
                            case 34:
                                return '\\"';
                            case 92:
                                return "\\\\"
                        }
                        if (t >= 32 && t < 127) return String.fromCharCode(t)
                    }
                    return t <= 65535 ? c(t) : c(55296 + ((t -= 65536) >> 10 & 1023)) + c(56320 + (1023 & t))
                })).join("") + '"'
            }

            function f(t) {
                return t.map((t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t))))).join("")
            }

            function p(t, e) {
                return f(l(t, e))
            }

            function m(t, e = o.current) {
                return l(u(t, e))
            }
        },
        83875: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                TransactionTypes: function() {
                    return f
                },
                accessListify: function() {
                    return M
                },
                computeAddress: function() {
                    return y
                },
                parse: function() {
                    return T
                },
                recoverAddress: function() {
                    return w
                },
                serialize: function() {
                    return C
                }
            });
            var i = r(19485),
                n = r(2593),
                o = r(16441),
                s = r(21046),
                a = r(38197),
                h = r(6881),
                l = r(59052),
                u = r(67669),
                c = r(1581);
            const d = new c.Logger("transactions/5.7.0");
            var f;

            function p(t) {
                return "0x" === t ? null : (0, i.getAddress)(t)
            }

            function m(t) {
                return "0x" === t ? s._Y : n.O$.from(t)
            }! function(t) {
                t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559"
            }(f || (f = {}));
            const v = [{
                    name: "nonce",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasPrice",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasLimit",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "to",
                    length: 20
                }, {
                    name: "value",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "data"
                }],
                g = {
                    chainId: !0,
                    data: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    type: !0,
                    value: !0
                };

            function y(t) {
                const e = (0, u.computePublicKey)(t);
                return (0, i.getAddress)((0, o.hexDataSlice)((0, a.keccak256)((0, o.hexDataSlice)(e, 1)), 12))
            }

            function w(t, e) {
                return y((0, u.recoverPublicKey)((0, o.arrayify)(t), e))
            }

            function b(t, e) {
                const r = (0, o.stripZeros)(n.O$.from(t).toHexString());
                return r.length > 32 && d.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r
            }

            function A(t, e) {
                return {
                    address: (0, i.getAddress)(t),
                    storageKeys: (e || []).map(((e, r) => (32 !== (0, o.hexDataLength)(e) && d.throwArgumentError("invalid access list storageKey", `accessList[${t}:${r}]`, e), e.toLowerCase())))
                }
            }

            function M(t) {
                if (Array.isArray(t)) return t.map(((t, e) => Array.isArray(t) ? (t.length > 2 && d.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${e}]`, t), A(t[0], t[1])) : A(t.address, t.storageKeys)));
                const e = Object.keys(t).map((e => {
                    const r = t[e].reduce(((t, e) => (t[e] = !0, t)), {});
                    return A(e, Object.keys(r).sort())
                }));
                return e.sort(((t, e) => t.address.localeCompare(e.address))), e
            }

            function E(t) {
                return M(t).map((t => [t.address, t.storageKeys]))
            }

            function k(t, e) {
                if (null != t.gasPrice) {
                    const e = n.O$.from(t.gasPrice),
                        r = n.O$.from(t.maxFeePerGas || 0);
                    e.eq(r) || d.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                        gasPrice: e,
                        maxFeePerGas: r
                    })
                }
                const r = [b(t.chainId || 0, "chainId"), b(t.nonce || 0, "nonce"), b(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), b(t.maxFeePerGas || 0, "maxFeePerGas"), b(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, i.getAddress)(t.to) : "0x", b(t.value || 0, "value"), t.data || "0x", E(t.accessList || [])];
                if (e) {
                    const t = (0, o.splitSignature)(e);
                    r.push(b(t.recoveryParam, "recoveryParam")), r.push((0, o.stripZeros)(t.r)), r.push((0, o.stripZeros)(t.s))
                }
                return (0, o.hexConcat)(["0x02", l.encode(r)])
            }

            function x(t, e) {
                const r = [b(t.chainId || 0, "chainId"), b(t.nonce || 0, "nonce"), b(t.gasPrice || 0, "gasPrice"), b(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, i.getAddress)(t.to) : "0x", b(t.value || 0, "value"), t.data || "0x", E(t.accessList || [])];
                if (e) {
                    const t = (0, o.splitSignature)(e);
                    r.push(b(t.recoveryParam, "recoveryParam")), r.push((0, o.stripZeros)(t.r)), r.push((0, o.stripZeros)(t.s))
                }
                return (0, o.hexConcat)(["0x01", l.encode(r)])
            }

            function C(t, e) {
                if (null == t.type || 0 === t.type) return null != t.accessList && d.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", t),
                    function(t, e) {
                        (0, h.checkProperties)(t, g);
                        const r = [];
                        v.forEach((function(e) {
                            let i = t[e.name] || [];
                            const n = {};
                            e.numeric && (n.hexPad = "left"), i = (0, o.arrayify)((0, o.hexlify)(i, n)), e.length && i.length !== e.length && i.length > 0 && d.throwArgumentError("invalid length for " + e.name, "transaction:" + e.name, i), e.maxLength && (i = (0, o.stripZeros)(i), i.length > e.maxLength && d.throwArgumentError("invalid length for " + e.name, "transaction:" + e.name, i)), r.push((0, o.hexlify)(i))
                        }));
                        let i = 0;
                        if (null != t.chainId ? (i = t.chainId, "number" !== typeof i && d.throwArgumentError("invalid transaction.chainId", "transaction", t)) : e && !(0, o.isBytesLike)(e) && e.v > 28 && (i = Math.floor((e.v - 35) / 2)), 0 !== i && (r.push((0, o.hexlify)(i)), r.push("0x"), r.push("0x")), !e) return l.encode(r);
                        const n = (0, o.splitSignature)(e);
                        let s = 27 + n.recoveryParam;
                        return 0 !== i ? (r.pop(), r.pop(), r.pop(), s += 2 * i + 8, n.v > 28 && n.v !== s && d.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e)) : n.v !== s && d.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e), r.push((0, o.hexlify)(s)), r.push((0, o.stripZeros)((0, o.arrayify)(n.r))), r.push((0, o.stripZeros)((0, o.arrayify)(n.s))), l.encode(r)
                    }(t, e);
                switch (t.type) {
                    case 1:
                        return x(t, e);
                    case 2:
                        return k(t, e)
                }
                return d.throwError(`unsupported transaction type: ${t.type}`, c.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "serializeTransaction",
                    transactionType: t.type
                })
            }

            function _(t, e, r) {
                try {
                    const r = m(e[0]).toNumber();
                    if (0 !== r && 1 !== r) throw new Error("bad recid");
                    t.v = r
                } catch (i) {
                    d.throwArgumentError("invalid v for transaction type: 1", "v", e[0])
                }
                t.r = (0, o.hexZeroPad)(e[1], 32), t.s = (0, o.hexZeroPad)(e[2], 32);
                try {
                    const e = (0, a.keccak256)(r(t));
                    t.from = w(e, {
                        r: t.r,
                        s: t.s,
                        recoveryParam: t.v
                    })
                } catch (i) {}
            }

            function T(t) {
                const e = (0, o.arrayify)(t);
                if (e[0] > 127) return function(t) {
                    const e = l.decode(t);
                    9 !== e.length && 6 !== e.length && d.throwArgumentError("invalid raw transaction", "rawTransaction", t);
                    const r = {
                        nonce: m(e[0]).toNumber(),
                        gasPrice: m(e[1]),
                        gasLimit: m(e[2]),
                        to: p(e[3]),
                        value: m(e[4]),
                        data: e[5],
                        chainId: 0
                    };
                    if (6 === e.length) return r;
                    try {
                        r.v = n.O$.from(e[6]).toNumber()
                    } catch (i) {
                        return r
                    }
                    if (r.r = (0, o.hexZeroPad)(e[7], 32), r.s = (0, o.hexZeroPad)(e[8], 32), n.O$.from(r.r).isZero() && n.O$.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
                    else {
                        r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
                        let n = r.v - 27;
                        const s = e.slice(0, 6);
                        0 !== r.chainId && (s.push((0, o.hexlify)(r.chainId)), s.push("0x"), s.push("0x"), n -= 2 * r.chainId + 8);
                        const h = (0, a.keccak256)(l.encode(s));
                        try {
                            r.from = w(h, {
                                r: (0, o.hexlify)(r.r),
                                s: (0, o.hexlify)(r.s),
                                recoveryParam: n
                            })
                        } catch (i) {}
                        r.hash = (0, a.keccak256)(t)
                    }
                    return r.type = null, r
                }(e);
                switch (e[0]) {
                    case 1:
                        return function(t) {
                            const e = l.decode(t.slice(1));
                            8 !== e.length && 11 !== e.length && d.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, o.hexlify)(t));
                            const r = {
                                type: 1,
                                chainId: m(e[0]).toNumber(),
                                nonce: m(e[1]).toNumber(),
                                gasPrice: m(e[2]),
                                gasLimit: m(e[3]),
                                to: p(e[4]),
                                value: m(e[5]),
                                data: e[6],
                                accessList: M(e[7])
                            };
                            return 8 === e.length || (r.hash = (0, a.keccak256)(t), _(r, e.slice(8), x)), r
                        }(e);
                    case 2:
                        return function(t) {
                            const e = l.decode(t.slice(1));
                            9 !== e.length && 12 !== e.length && d.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, o.hexlify)(t));
                            const r = m(e[2]),
                                i = m(e[3]),
                                n = {
                                    type: 2,
                                    chainId: m(e[0]).toNumber(),
                                    nonce: m(e[1]).toNumber(),
                                    maxPriorityFeePerGas: r,
                                    maxFeePerGas: i,
                                    gasPrice: null,
                                    gasLimit: m(e[4]),
                                    to: p(e[5]),
                                    value: m(e[6]),
                                    data: e[7],
                                    accessList: M(e[8])
                                };
                            return 9 === e.length || (n.hash = (0, a.keccak256)(t), _(n, e.slice(9), k)), n
                        }(e)
                }
                return d.throwError(`unsupported transaction type: ${e[0]}`, c.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "parseTransaction",
                    transactionType: e[0]
                })
            }
        },
        37707: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                _fetchData: function() {
                    return p
                },
                fetchJson: function() {
                    return m
                },
                poll: function() {
                    return v
                }
            });
            var i = r(59567),
                n = r(16441),
                o = r(6881),
                s = r(29251),
                a = r(1581);
            var h = function(t, e, r, i) {
                return new(r || (r = Promise))((function(n, o) {
                    function s(t) {
                        try {
                            h(i.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            h(i.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function h(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    h((i = i.apply(t, e || [])).next())
                }))
            };

            function l(t, e) {
                return h(this, void 0, void 0, (function*() {
                    null == e && (e = {});
                    const r = {
                        method: e.method || "GET",
                        headers: e.headers || {},
                        body: e.body || void 0
                    };
                    if (!0 !== e.skipFetchSetup && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), null != e.fetchOptions) {
                        const t = e.fetchOptions;
                        t.mode && (r.mode = t.mode), t.cache && (r.cache = t.cache), t.credentials && (r.credentials = t.credentials), t.redirect && (r.redirect = t.redirect), t.referrer && (r.referrer = t.referrer)
                    }
                    const i = yield fetch(t, r), o = yield i.arrayBuffer(), s = {};
                    return i.headers.forEach ? i.headers.forEach(((t, e) => {
                        s[e.toLowerCase()] = t
                    })) : i.headers.keys().forEach((t => {
                        s[t.toLowerCase()] = i.headers.get(t)
                    })), {
                        headers: s,
                        statusCode: i.status,
                        statusMessage: i.statusText,
                        body: (0, n.arrayify)(new Uint8Array(o))
                    }
                }))
            }
            var u = function(t, e, r, i) {
                return new(r || (r = Promise))((function(n, o) {
                    function s(t) {
                        try {
                            h(i.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            h(i.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function h(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    h((i = i.apply(t, e || [])).next())
                }))
            };
            const c = new a.Logger("web/5.7.1");

            function d(t) {
                return new Promise((e => {
                    setTimeout(e, t)
                }))
            }

            function f(t, e) {
                if (null == t) return null;
                if ("string" === typeof t) return t;
                if ((0, n.isBytesLike)(t)) {
                    if (e && ("text" === e.split("/")[0] || "application/json" === e.split(";")[0].trim())) try {
                        return (0, s.ZN)(t)
                    } catch (r) {}
                    return (0, n.hexlify)(t)
                }
                return t
            }

            function p(t, e, r) {
                const n = "object" === typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
                c.assertArgument(n > 0 && n % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", n);
                const h = "object" === typeof t ? t.throttleCallback : null,
                    p = "object" === typeof t && "number" === typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100;
                c.assertArgument(p > 0 && p % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", p);
                const m = "object" === typeof t && !!t.errorPassThrough,
                    v = {};
                let g = null;
                const y = {
                    method: "GET"
                };
                let w = !1,
                    b = 12e4;
                if ("string" === typeof t) g = t;
                else if ("object" === typeof t) {
                    if (null != t && null != t.url || c.throwArgumentError("missing URL", "connection.url", t), g = t.url, "number" === typeof t.timeout && t.timeout > 0 && (b = t.timeout), t.headers)
                        for (const e in t.headers) v[e.toLowerCase()] = {
                            key: e,
                            value: String(t.headers[e])
                        }, ["if-none-match", "if-modified-since"].indexOf(e.toLowerCase()) >= 0 && (w = !0);
                    if (y.allowGzip = !!t.allowGzip, null != t.user && null != t.password) {
                        "https:" !== g.substring(0, 6) && !0 !== t.allowInsecureAuthentication && c.throwError("basic authentication requires a secure https url", a.Logger.errors.INVALID_ARGUMENT, {
                            argument: "url",
                            url: g,
                            user: t.user,
                            password: "[REDACTED]"
                        });
                        const e = t.user + ":" + t.password;
                        v.authorization = {
                            key: "Authorization",
                            value: "Basic " + (0, i.c)((0, s.Y0)(e))
                        }
                    }
                    null != t.skipFetchSetup && (y.skipFetchSetup = !!t.skipFetchSetup), null != t.fetchOptions && (y.fetchOptions = (0, o.shallowCopy)(t.fetchOptions))
                }
                const A = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                    M = g ? g.match(A) : null;
                if (M) try {
                    const t = {
                        statusCode: 200,
                        statusMessage: "OK",
                        headers: {
                            "content-type": M[1] || "text/plain"
                        },
                        body: M[2] ? (0, i.J)(M[3]) : (E = M[3], (0, s.Y0)(E.replace(/%([0-9a-f][0-9a-f])/gi, ((t, e) => String.fromCharCode(parseInt(e, 16))))))
                    };
                    let e = t.body;
                    return r && (e = r(t.body, t)), Promise.resolve(e)
                } catch (_) {
                    c.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                        body: f(M[1], M[2]),
                        error: _,
                        requestBody: null,
                        requestMethod: "GET",
                        url: g
                    })
                }
                var E;
                e && (y.method = "POST", y.body = e, null == v["content-type"] && (v["content-type"] = {
                    key: "Content-Type",
                    value: "application/octet-stream"
                }), null == v["content-length"] && (v["content-length"] = {
                    key: "Content-Length",
                    value: String(e.length)
                }));
                const k = {};
                Object.keys(v).forEach((t => {
                    const e = v[t];
                    k[e.key] = e.value
                })), y.headers = k;
                const x = function() {
                        let t = null;
                        return {
                            promise: new Promise((function(e, r) {
                                b && (t = setTimeout((() => {
                                    null != t && (t = null, r(c.makeError("timeout", a.Logger.errors.TIMEOUT, {
                                        requestBody: f(y.body, k["content-type"]),
                                        requestMethod: y.method,
                                        timeout: b,
                                        url: g
                                    })))
                                }), b))
                            })),
                            cancel: function() {
                                null != t && (clearTimeout(t), t = null)
                            }
                        }
                    }(),
                    C = function() {
                        return u(this, void 0, void 0, (function*() {
                            for (let t = 0; t < n; t++) {
                                let e = null;
                                try {
                                    if (e = yield l(g, y), t < n)
                                        if (301 === e.statusCode || 302 === e.statusCode) {
                                            const t = e.headers.location || "";
                                            if ("GET" === y.method && t.match(/^https:/)) {
                                                g = e.headers.location;
                                                continue
                                            }
                                        } else if (429 === e.statusCode) {
                                        let r = !0;
                                        if (h && (r = yield h(t, g)), r) {
                                            let r = 0;
                                            const i = e.headers["retry-after"];
                                            r = "string" === typeof i && i.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(i) : p * parseInt(String(Math.random() * Math.pow(2, t))), yield d(r);
                                            continue
                                        }
                                    }
                                } catch (_) {
                                    e = _.response, null == e && (x.cancel(), c.throwError("missing response", a.Logger.errors.SERVER_ERROR, {
                                        requestBody: f(y.body, k["content-type"]),
                                        requestMethod: y.method,
                                        serverError: _,
                                        url: g
                                    }))
                                }
                                let i = e.body;
                                if (w && 304 === e.statusCode ? i = null : !m && (e.statusCode < 200 || e.statusCode >= 300) && (x.cancel(), c.throwError("bad response", a.Logger.errors.SERVER_ERROR, {
                                        status: e.statusCode,
                                        headers: e.headers,
                                        body: f(i, e.headers ? e.headers["content-type"] : null),
                                        requestBody: f(y.body, k["content-type"]),
                                        requestMethod: y.method,
                                        url: g
                                    })), r) try {
                                    const t = yield r(i, e);
                                    return x.cancel(), t
                                } catch (_) {
                                    if (_.throttleRetry && t < n) {
                                        let e = !0;
                                        if (h && (e = yield h(t, g)), e) {
                                            const e = p * parseInt(String(Math.random() * Math.pow(2, t)));
                                            yield d(e);
                                            continue
                                        }
                                    }
                                    x.cancel(), c.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                                        body: f(i, e.headers ? e.headers["content-type"] : null),
                                        error: _,
                                        requestBody: f(y.body, k["content-type"]),
                                        requestMethod: y.method,
                                        url: g
                                    })
                                }
                                return x.cancel(), i
                            }
                            return c.throwError("failed response", a.Logger.errors.SERVER_ERROR, {
                                requestBody: f(y.body, k["content-type"]),
                                requestMethod: y.method,
                                url: g
                            })
                        }))
                    }();
                return Promise.race([x.promise, C])
            }

            function m(t, e, r) {
                let i = null;
                if (null != e) {
                    i = (0, s.Y0)(e);
                    const r = "string" === typeof t ? {
                        url: t
                    } : (0, o.shallowCopy)(t);
                    if (r.headers) {
                        0 !== Object.keys(r.headers).filter((t => "content-type" === t.toLowerCase())).length || (r.headers = (0, o.shallowCopy)(r.headers), r.headers["content-type"] = "application/json")
                    } else r.headers = {
                        "content-type": "application/json"
                    };
                    t = r
                }
                return p(t, i, ((t, e) => {
                    let i = null;
                    if (null != t) try {
                        i = JSON.parse((0, s.ZN)(t))
                    } catch (n) {
                        c.throwError("invalid JSON", a.Logger.errors.SERVER_ERROR, {
                            body: t,
                            error: n
                        })
                    }
                    return r && (i = r(i, e)), i
                }))
            }

            function v(t, e) {
                return e || (e = {}), null == (e = (0, o.shallowCopy)(e)).floor && (e.floor = 0), null == e.ceiling && (e.ceiling = 1e4), null == e.interval && (e.interval = 250), new Promise((function(r, i) {
                    let n = null,
                        o = !1;
                    const s = () => !o && (o = !0, n && clearTimeout(n), !0);
                    e.timeout && (n = setTimeout((() => {
                        s() && i(new Error("timeout"))
                    }), e.timeout));
                    const a = e.retryLimit;
                    let h = 0;
                    ! function n() {
                        return t().then((function(t) {
                            if (void 0 !== t) s() && r(t);
                            else if (e.oncePoll) e.oncePoll.once("poll", n);
                            else if (e.onceBlock) e.onceBlock.once("block", n);
                            else if (!o) {
                                if (h++, h > a) return void(s() && i(new Error("retry limit reached")));
                                let t = e.interval * parseInt(String(Math.random() * Math.pow(2, h)));
                                t < e.floor && (t = e.floor), t > e.ceiling && (t = e.ceiling), setTimeout(n, t)
                            }
                            return null
                        }), (function(t) {
                            s() && i(t)
                        }))
                    }()
                }))
            }
        },
        92003: function(t) {
            "use strict";
            t.exports = function({
                mustBeMetaMask: t = !1,
                silent: e = !1,
                timeout: r = 3e3
            } = {}) {
                ! function() {
                    if ("boolean" !== typeof t) throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");
                    if ("boolean" !== typeof e) throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");
                    if ("number" !== typeof r) throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")
                }();
                let i = !1;
                return new Promise((n => {
                    function o() {
                        if (i) return;
                        i = !0, window.removeEventListener("ethereum#initialized", o);
                        const {
                            ethereum: r
                        } = window;
                        if (!r || t && !r.isMetaMask) {
                            const i = t && r ? "Non-MetaMask window.ethereum detected." : "Unable to detect window.ethereum.";
                            !e && console.error("@metamask/detect-provider:", i), n(null)
                        } else n(r)
                    }
                    window.ethereum ? o() : (window.addEventListener("ethereum#initialized", o, {
                        once: !0
                    }), setTimeout((() => {
                        o()
                    }), r))
                }))
            }
        },
        75296: function(t, e, r) {
            "use strict";
            r.d(e, {
                $9: function() {
                    return i
                },
                pe: function() {
                    return n
                }
            });
            r(85893), r(67294), r(9257), r(34155);

            function i(t) {
                return void 0 === t && (t = "_self"), "_" === t[0] ? t : "_" + t
            }

            function n(t) {
                return "_blank" === i(t) ? {
                    rel: "nofollow noopener noreferrer"
                } : {}
            }
        },
        64105: function(t, e, r) {
            "use strict";
            r.d(e, {
                B: function() {
                    return It
                }
            });
            const i = {
                    chainId: 1337,
                    chainName: "Localhost",
                    isTestChain: !0,
                    isLocalChain: !0,
                    multicallAddress: "",
                    rpcUrl: "http://localhost:8545",
                    getExplorerAddressLink: () => "",
                    getExplorerTransactionLink: () => ""
                },
                n = {
                    chainId: 31337,
                    chainName: "Hardhat",
                    isTestChain: !0,
                    isLocalChain: !0,
                    multicallAddress: "",
                    rpcUrl: "http://localhost:8545",
                    getExplorerAddressLink: () => "",
                    getExplorerTransactionLink: () => ""
                };
            var o = r(40232);
            const s = {
                    name: "Avalanche",
                    symbol: "AVAX",
                    decimals: 18
                },
                a = "https://snowtrace.io",
                h = {
                    chainId: 43114,
                    chainName: "Avalanche",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3",
                    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
                    nativeCurrency: s,
                    blockExplorerUrl: a,
                    getExplorerAddressLink: (0, o.s)(a),
                    getExplorerTransactionLink: (0, o.K)(a)
                },
                l = "https://testnet.snowtrace.io",
                u = {
                    chainId: 43113,
                    chainName: "Avalanche Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xccc75e78Dce6A20bCCa3a30deB23Cb4D23df993a",
                    rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
                    nativeCurrency: s,
                    blockExplorerUrl: l,
                    getExplorerAddressLink: (0, o.s)(l),
                    getExplorerTransactionLink: (0, o.K)(l)
                };
            const c = "https://testnet.arbiscan.io",
                d = {
                    chainId: 421611,
                    chainName: "Arbitrum Rinkeby",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xd27BEFd29F8Da4E187fDAEf663aEDF7742f9F47F",
                    rpcUrl: "https://rinkeby.arbitrum.io/rpc",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: c,
                    getExplorerAddressLink: (0, o.s)(c),
                    getExplorerTransactionLink: (0, o.K)(c)
                },
                f = "https://goerli-rollup-explorer.arbitrum.io",
                p = {
                    chainId: 421613,
                    chainName: "Arbitrum Goerli",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x108B25170319f38DbED14cA9716C54E5D1FF4623",
                    rpcUrl: "https://goerli-rollup.arbitrum.io/rpc",
                    nativeCurrency: {
                        name: "AGOR",
                        symbol: "AGOR",
                        decimals: 18
                    },
                    blockExplorerUrl: f,
                    getExplorerAddressLink: (0, o.s)(f),
                    getExplorerTransactionLink: (0, o.K)(f)
                },
                m = "https://arbiscan.io",
                v = {
                    chainId: 42161,
                    chainName: "Arbitrum One",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x8a0bd1773139C6609e861B9ab68082587a3cD581",
                    multicall2Address: "0x80c7dd17b01855a6d2347444a0fcc36136a314de",
                    rpcUrl: "https://arb1.arbitrum.io/rpc",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: m,
                    getExplorerAddressLink: (0, o.s)(m),
                    getExplorerTransactionLink: (0, o.K)(m)
                };
            const g = "https://aurorascan.dev",
                y = {
                    chainId: 1313161554,
                    chainName: "Aurora",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x32b50c286DEFd2932a0247b8bb940b78c063F16c",
                    multicall2Address: "0xace58a26b8Db90498eF0330fDC9C2655db0C45E2",
                    rpcUrl: "https://mainnet.aurora.dev",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: g,
                    getExplorerAddressLink: (0, o.s)(g),
                    getExplorerTransactionLink: (0, o.K)(g)
                },
                w = "https://testnet.aurorascan.dev",
                b = {
                    chainId: 1313161555,
                    chainName: "Aurora Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x755E730F28A31079711aB588e3568e70A40F3564",
                    rpcUrl: "https://testnet.aurora.dev",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: w,
                    getExplorerAddressLink: (0, o.s)(w),
                    getExplorerTransactionLink: (0, o.K)(w)
                };
            var A = r(7979),
                M = r(34641);
            const E = "https://cronoscan.com",
                k = {
                    chainId: 25,
                    chainName: "Cronos",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x0fA4d452693F2f45D28c4EC4d20b236C4010dA74",
                    rpcUrl: "https://evm.cronos.org",
                    nativeCurrency: {
                        name: "CRO",
                        symbol: "CRO",
                        decimals: 18
                    },
                    blockExplorerUrl: E,
                    getExplorerAddressLink: (0, o.s)(E),
                    getExplorerTransactionLink: (0, o.K)(E)
                },
                x = "https://testnet.cronoscan.com",
                C = {
                    chainId: 338,
                    chainName: "Cronos Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x6a8c1ba309136D78245f1F0a14790239b71a9577",
                    rpcUrl: "https://cronos-testnet-3.crypto.org:8545",
                    nativeCurrency: {
                        name: "TCRO",
                        symbol: "TCRO",
                        decimals: 18
                    },
                    blockExplorerUrl: x,
                    getExplorerAddressLink: (0, o.s)(x),
                    getExplorerTransactionLink: (0, o.K)(x)
                };
            const _ = "https://ftmscan.com",
                T = {
                    chainId: 250,
                    chainName: "Fantom",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0xdc85396592f0F466224390771C861EE3957a3ff4",
                    rpcUrl: "https://rpc.ftm.tools",
                    nativeCurrency: {
                        name: "Fantom",
                        symbol: "FTM",
                        decimals: 18
                    },
                    getExplorerAddressLink: (0, o.s)(_),
                    getExplorerTransactionLink: (0, o.K)(_)
                },
                I = "https://testnet.ftmscan.com",
                P = {
                    chainId: 4002,
                    chainName: "Fantom Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xA01917aF773b703717C25C483a619e9218343531",
                    rpcUrl: "https://rpc.testnet.fantom.network",
                    nativeCurrency: {
                        name: "Fantom",
                        symbol: "FTM",
                        decimals: 18
                    },
                    blockExplorerUrl: I,
                    getExplorerAddressLink: (0, o.s)(I),
                    getExplorerTransactionLink: (0, o.K)(I)
                };
            const S = "https://blockscout.com/poa/xdai",
                N = {
                    chainId: 100,
                    chainName: "xDai",
                    isTestChain: !1,
                    isLocalChain: !1,
                    rpcUrl: "https://rpc.gnosischain.com",
                    multicallAddress: "0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a",
                    nativeCurrency: {
                        name: "xDAI",
                        symbol: "xDAI",
                        decimals: 18
                    },
                    blockExplorerUrl: S,
                    getExplorerAddressLink: (0, o.s)(S),
                    getExplorerTransactionLink: (0, o.K)(S)
                },
                L = Object.assign(Object.assign({}, N), {
                    chainName: "Gnosis"
                });
            const O = "https://blockscout.com/poa/xdai",
                R = {
                    chainId: 16666e5,
                    chainName: "Harmony",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0xFE4980f62D708c2A84D3929859Ea226340759320",
                    rpcUrl: "https://api.harmony.one",
                    nativeCurrency: {
                        name: "ONE",
                        symbol: "ONE",
                        decimals: 18
                    },
                    blockExplorerUrl: O,
                    getExplorerAddressLink: (0, o.s)(O),
                    getExplorerTransactionLink: (0, o.K)(O)
                };
            const B = "https://stardust-explorer.metis.io",
                D = {
                    chainId: 588,
                    chainName: "Stardust",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xaF9D4DC0698d8FD9f41387ecb08D9976079B8086",
                    rpcUrl: "https://stardust.metis.io/?owner=588",
                    nativeCurrency: {
                        name: "METIS",
                        symbol: "METIS",
                        decimals: 18
                    },
                    blockExplorerUrl: B,
                    getExplorerAddressLink: (0, o.s)(B),
                    getExplorerTransactionLink: (0, o.K)(B)
                },
                z = "https://andromeda-explorer.metis.io",
                F = {
                    chainId: 1088,
                    chainName: "Andromeda",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x1a2AFb22B8A90A77a93e80ceA61f89D04e05b796",
                    rpcUrl: "https://andromeda.metis.io/?owner=1088",
                    nativeCurrency: {
                        name: "METIS",
                        symbol: "METIS",
                        decimals: 18
                    },
                    blockExplorerUrl: z,
                    getExplorerAddressLink: (0, o.s)(z),
                    getExplorerTransactionLink: (0, o.K)(z)
                };
            const U = "https://moonriver.moonscan.io",
                q = {
                    chainId: 1285,
                    chainName: "Moonriver",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0xa9177F8d98DAaB74C24715Ba0A81b73654710523",
                    rpcUrl: "https://rpc.api.moonriver.moonbeam.network",
                    nativeCurrency: {
                        name: "MOVR",
                        symbol: "MOVR",
                        decimals: 18
                    },
                    blockExplorerUrl: U,
                    getExplorerAddressLink: (0, o.s)(U),
                    getExplorerTransactionLink: (0, o.K)(U)
                },
                H = "https://moonbase.moonscan.io",
                j = {
                    chainId: 1287,
                    chainName: "Moonbase Alpha",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x4E2cfca20580747AdBA58cd677A998f8B261Fc21",
                    rpcUrl: "https://rpc.api.moonbase.moonbeam.network",
                    nativeCurrency: {
                        name: "DEV",
                        symbol: "DEV",
                        decimals: 18
                    },
                    blockExplorerUrl: H,
                    getExplorerAddressLink: (0, o.s)(H),
                    getExplorerTransactionLink: (0, o.K)(H)
                };
            const G = "https://moonscan.io",
                K = {
                    chainId: 1284,
                    chainName: "Moonbeam",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x47152C4dCE75C77Bc9E52F5AAa2a20117971C365",
                    rpcUrl: "https://rpc.api.moonbeam.network",
                    nativeCurrency: {
                        name: "GLMR",
                        symbol: "GLMR",
                        decimals: 18
                    },
                    blockExplorerUrl: G,
                    getExplorerAddressLink: (0, o.s)(G),
                    getExplorerTransactionLink: (0, o.K)(G)
                };
            const V = "https://explorer.palm.io",
                J = {
                    chainId: 11297108109,
                    chainName: "Palm",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x99a73dfE34578348fb81BD078201C0BA84E9c840",
                    rpcUrl: "https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b",
                    nativeCurrency: {
                        name: "PALM",
                        symbol: "PALM",
                        decimals: 18
                    },
                    blockExplorerUrl: V,
                    getExplorerAddressLink: (0, o.s)(V),
                    getExplorerTransactionLink: (0, o.K)(V)
                },
                Q = "https://explorer.palm-uat.xyz",
                Z = {
                    chainId: 11297108099,
                    chainName: "Palm Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x99a73dfE34578348fb81BD078201C0BA84E9c840",
                    rpcUrl: "https://palm-testnet.public.blastapi.io",
                    nativeCurrency: {
                        name: "PALM",
                        symbol: "PALM",
                        decimals: 18
                    },
                    blockExplorerUrl: Q,
                    getExplorerAddressLink: (0, o.s)(Q),
                    getExplorerTransactionLink: (0, o.K)(Q)
                };
            const Y = "https://polygonscan.com",
                W = {
                    chainId: 137,
                    chainName: "Polygon",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507",
                    rpcUrl: "https://polygon-rpc.com",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    blockExplorerUrl: Y,
                    getExplorerAddressLink: (0, o.s)(Y),
                    getExplorerTransactionLink: (0, o.K)(Y)
                },
                X = "https://mumbai.polygonscan.com",
                $ = {
                    chainId: 80001,
                    chainName: "Mumbai",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc",
                    rpcUrl: "https://rpc-mumbai.maticvigil.com",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    blockExplorerUrl: X,
                    getExplorerAddressLink: (0, o.s)(X),
                    getExplorerTransactionLink: (0, o.K)(X)
                };
            const tt = "https://explorer.emerald.oasis.dev",
                et = {
                    chainId: 42262,
                    chainName: "Oasis Emerald",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0xA1513CE1a147BB84E04cD61d877d598C018a460F",
                    rpcUrl: "https://emerald.oasis.dev",
                    nativeCurrency: {
                        name: "ROSE",
                        symbol: "ROSE",
                        decimals: 18
                    },
                    blockExplorerUrl: tt,
                    getExplorerAddressLink: (0, o.s)(tt),
                    getExplorerTransactionLink: (0, o.K)(tt)
                },
                rt = "https://testnet.explorer.emerald.oasis.dev",
                it = {
                    chainId: 42261,
                    chainName: "Oasis Emerald Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xB2929229096d2ee6850c4d3906ef2d1f1330cdc7",
                    rpcUrl: "https://testnet.emerald.oasis.dev",
                    nativeCurrency: {
                        name: "ROSE",
                        symbol: "ROSE",
                        decimals: 18
                    },
                    blockExplorerUrl: rt,
                    getExplorerAddressLink: (0, o.s)(rt),
                    getExplorerTransactionLink: (0, o.K)(rt)
                },
                nt = "https://explorer.sapphire.oasis.dev";
            (0, o.s)(nt), (0, o.K)(nt);
            const ot = "https://songbird-explorer.flare.network",
                st = {
                    chainId: 19,
                    chainName: "Songbird",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x60351436cf80A31EA6C3B261C784d3C127dBD6f1",
                    rpcUrl: "https://songbird.towolabs.com/rpc",
                    nativeCurrency: {
                        name: "SGB",
                        symbol: "SGB",
                        decimals: 18
                    },
                    blockExplorerUrl: ot,
                    getExplorerAddressLink: (0, o.s)(ot),
                    getExplorerTransactionLink: (0, o.K)(ot)
                },
                at = "https://explorer.thetatoken.org",
                ht = {
                    chainId: 361,
                    chainName: "Theta",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0xe2ec58a54f3ab2714eddbae87533793011f1e14e",
                    rpcUrl: "https://eth-rpc-api.thetatoken.org/rpc",
                    nativeCurrency: {
                        name: "TFUEL",
                        symbol: "TFUEL",
                        decimals: 18
                    },
                    blockExplorerUrl: at,
                    getExplorerAddressLink: (0, o.s)(at),
                    getExplorerTransactionLink: (0, o.K)(at)
                },
                lt = "https://testnet-explorer.thetatoken.org",
                ut = {
                    chainId: 365,
                    chainName: "Theta Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xf822bf2e728e264c58d7618022addd9cbc780350",
                    rpcUrl: "https://eth-rpc-api-testnet.thetatoken.org/rpc",
                    nativeCurrency: {
                        name: "TFUEL",
                        symbol: "TFUEL",
                        decimals: 18
                    },
                    blockExplorerUrl: lt,
                    getExplorerAddressLink: (0, o.s)(lt),
                    getExplorerTransactionLink: (0, o.K)(lt)
                };
            const ct = "https://viewblock.io/thundercore",
                dt = {
                    chainId: 108,
                    chainName: "ThunderCore",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x3017086DeEf56679e267F67F66c4415109b7A97f",
                    multicall2Address: "0xd1dC5CF410b227dFEeFEe8D3c1C9DB4FBE66d362",
                    rpcUrl: "https://mainnet-rpc.thundercore.com",
                    nativeCurrency: {
                        name: "TT",
                        symbol: "TT",
                        decimals: 18
                    },
                    blockExplorerUrl: ct,
                    getExplorerAddressLink: (0, o.s)(ct),
                    getExplorerTransactionLink: (0, o.K)(ct)
                },
                ft = "https://explorer-testnet.thundercore.com",
                pt = {
                    chainId: 18,
                    chainName: "ThunderCore Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x7818a6A0fFe134b2aF30850DCE7c86A52eC6AC4F",
                    multicall2Address: "0x02C5503dd793cC457a1CE50d2d31a749cb5e9cB5",
                    rpcUrl: "https://testnet-rpc.thundercore.com",
                    nativeCurrency: {
                        name: "TST",
                        symbol: "TST",
                        decimals: 18
                    },
                    blockExplorerUrl: ft,
                    getExplorerAddressLink: (0, o.s)(ft),
                    getExplorerTransactionLink: (0, o.K)(ft)
                };
            const mt = "https://kovan-optimistic.etherscan.io",
                vt = {
                    chainId: 69,
                    chainName: "Optimism Kovan",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xE71bf4622578c7d1526A88CD3060f03030E99a04",
                    rpcUrl: "https://kovan.optimism.io",
                    nativeCurrency: {
                        name: "Kovan Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: mt,
                    getExplorerAddressLink: (0, o.s)(mt),
                    getExplorerTransactionLink: (0, o.K)(mt)
                },
                gt = "https://blockscout.com/optimism/goerli",
                yt = {
                    chainId: 420,
                    chainName: "Optimism Goerli",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xC8315CC7DCDF57476a8a1D184505845d52711024",
                    rpcUrl: "https://goerli.optimism.io",
                    nativeCurrency: {
                        name: "Goerli Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: gt,
                    getExplorerAddressLink: (0, o.s)(gt),
                    getExplorerTransactionLink: (0, o.K)(gt)
                },
                wt = "https://optimistic.etherscan.io",
                bt = {
                    chainId: 10,
                    chainName: "Optimism",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x35A6Cdb2C9AD4a45112df4a04147EB07dFA01aB7",
                    rpcUrl: "https://mainnet.optimism.io",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: wt,
                    getExplorerAddressLink: (0, o.s)(wt),
                    getExplorerTransactionLink: (0, o.K)(wt)
                };
            const At = "https://evmexplorer.velas.com",
                Mt = {
                    chainId: 106,
                    chainName: "Velas",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x55c77eEba2b891c7f940cE4C3d9Fcd6915c12082",
                    multicall2Address: "0x324f25e6eEB13D45DF559B7326d631e34Fd5ceDF",
                    rpcUrl: "https://evmexplorer.velas.com/rpc",
                    nativeCurrency: {
                        name: "VLX",
                        symbol: "VLX",
                        decimals: 18
                    },
                    getExplorerAddressLink: (0, o.s)(At),
                    getExplorerTransactionLink: (0, o.K)(At)
                },
                Et = "https://evmexplorer.testnet.velas.com",
                kt = {
                    chainId: 111,
                    chainName: "Velas Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x649DEa474f0Ca0FDb276098d1A4c8BA62b4abC83",
                    multicall2Address: "0x65f4f071505912dbC9dCCF3a51542374a43D6a5A",
                    rpcUrl: "https://api.testnet.velas.com",
                    nativeCurrency: {
                        name: "VLX",
                        symbol: "VLX",
                        decimals: 18
                    },
                    blockExplorerUrl: Et,
                    getExplorerAddressLink: (0, o.s)(Et),
                    getExplorerTransactionLink: (0, o.K)(Et)
                };
            const xt = "https://zksync2-testnet.zkscan.io",
                Ct = {
                    chainId: 280,
                    chainName: "zkSync testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x5014a961801de9a52548068bDac853CE337221e7",
                    multicall2Address: "0x32Caf123F6f574035f51532E597125062C0Aa8EE",
                    rpcUrl: "https://zksync2-testnet.zksync.dev",
                    nativeCurrency: {
                        name: "ETH",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: xt,
                    getExplorerAddressLink: (0, o.s)(xt),
                    getExplorerTransactionLink: (0, o.K)(xt)
                },
                _t = "https://testnet.redditspace.com",
                Tt = {
                    chainId: 5391184,
                    chainName: "Arbitrum Reddit Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x722db82dea58c880d03b87885053f206f1b37136",
                    multicall2Address: "0xd4d664d419a6a845c98cc366ae1c4b24592bd5ce",
                    rpcUrl: "https://testnet.redditspace.com/rpc",
                    nativeCurrency: {
                        name: "Reddit",
                        symbol: "Reddit",
                        decimals: 18
                    },
                    blockExplorerUrl: _t,
                    getExplorerAddressLink: (0, o.s)(_t),
                    getExplorerTransactionLink: (0, o.K)(_t)
                };
            const It = [i, n, h, u, v, d, p, y, b, A.ny, A.eL, A.ZR, A.Du, A.UY, M.Su, M.r4, k, C, T, P, L, R, F, D, q, j, K, J, Z, W, $, et, it, A.m4, st, ht, ut, dt, pt, yt, vt, bt, Mt, kt, Ct, Tt];
            var Pt;
            ! function(t) {
                t[t.Mainnet = 1] = "Mainnet", t[t.Ropsten = 3] = "Ropsten", t[t.Rinkeby = 4] = "Rinkeby", t[t.Goerli = 5] = "Goerli", t[t.Sepolia = 11155111] = "Sepolia", t[t.ThunderCoreTestnet = 18] = "ThunderCoreTestnet", t[t.Cronos = 25] = "Cronos", t[t.CronosTestnet = 338] = "CronosTestnet", t[t.Kovan = 42] = "Kovan", t[t.BSC = 56] = "BSC", t[t.BSCTestnet = 97] = "BSCTestnet", t[t.xDai = 100] = "xDai", t[t.Gnosis = 100] = "Gnosis", t[t.ThunderCore = 108] = "ThunderCore", t[t.Polygon = 137] = "Polygon", t[t.Theta = 361] = "Theta", t[t.ThetaTestnet = 365] = "ThetaTestnet", t[t.Moonriver = 1285] = "Moonriver", t[t.Moonbeam = 1284] = "Moonbeam", t[t.Mumbai = 80001] = "Mumbai", t[t.Harmony = 16666e5] = "Harmony", t[t.Palm = 11297108109] = "Palm", t[t.PalmTestnet = 11297108099] = "PalmTestnet", t[t.Localhost = 1337] = "Localhost", t[t.Hardhat = 31337] = "Hardhat", t[t.Fantom = 250] = "Fantom", t[t.FantomTestnet = 4002] = "FantomTestnet", t[t.Avalanche = 43114] = "Avalanche", t[t.AvalancheTestnet = 43113] = "AvalancheTestnet", t[t.Songbird = 19] = "Songbird", t[t.MoonbaseAlpha = 1287] = "MoonbaseAlpha", t[t.OasisEmerald = 42262] = "OasisEmerald", t[t.OasisEmeraldTestnet = 42261] = "OasisEmeraldTestnet", t[t.Stardust = 588] = "Stardust", t[t.Andromeda = 1088] = "Andromeda", t[t.OptimismGoerli = 420] = "OptimismGoerli", t[t.OptimismKovan = 69] = "OptimismKovan", t[t.Optimism = 10] = "Optimism", t[t.Arbitrum = 42161] = "Arbitrum", t[t.ArbitrumRinkeby = 421611] = "ArbitrumRinkeby", t[t.ArbitrumGoerli = 421613] = "ArbitrumGoerli", t[t.Aurora = 1313161554] = "Aurora", t[t.AuroraTestnet = 1313161555] = "AuroraTestnet", t[t.Velas = 106] = "Velas", t[t.VelasTestnet = 111] = "VelasTestnet", t[t.ZkSyncTestnet = 280] = "ZkSyncTestnet", t[t.ArbitrumRedditTestnet = 5391184] = "ArbitrumRedditTestnet"
            }(Pt || (Pt = {}))
        },
        83778: function(t, e, r) {
            "use strict";
            r.d(e, {
                xz: function() {
                    return n
                }
            });
            var i = r(64105);
            const n = t => i.B.find((e => e.chainId === t))
        },
        40232: function(t, e, r) {
            "use strict";
            r.d(e, {
                K: function() {
                    return n
                },
                s: function() {
                    return i
                }
            });
            const i = t => e => `${t}/address/${e}`,
                n = t => e => `${t}/tx/${e}`
        },
        30816: function(t, e, r) {
            "use strict";
            r.d(e, {
                j: function() {
                    return i
                }
            });
            class i {
                constructor() {
                    this._listeners = new Set, this._effects = new Set
                }
                emit(t) {
                    for (const e of Array.from(this._listeners)) this._trigger(e, t)
                }
                on(t) {
                    return this._listeners.add(t), 1 === this.listenerCount() && this._runEffects(), () => this.off(t)
                }
                off(t) {
                    this._listeners.delete(t), 0 === this.listenerCount() && this._cleanupEffects()
                }
                listenerCount() {
                    return this._listeners.size
                }
                addEffect(t) {
                    const e = {
                        effect: t,
                        cleanup: void 0
                    };
                    if (this.listenerCount() > 0) {
                        const t = e.effect();
                        "function" === typeof t && (e.cleanup = t)
                    }
                    return this._effects.add(e), () => {
                        var t;
                        null === (t = e.cleanup) || void 0 === t || t.call(e), this._effects.delete(e)
                    }
                }
                async _trigger(t, e) {
                    try {
                        await n(), t(e)
                    } catch (r) {
                        ! function(t) {
                            setTimeout((() => {
                                throw t
                            }))
                        }(r)
                    }
                }
                _runEffects() {
                    for (const t of Array.from(this._effects)) {
                        const e = t.effect();
                        "function" === typeof e && (t.cleanup = e)
                    }
                }
                _cleanupEffects() {
                    var t;
                    for (const e of Array.from(this._effects)) null === (t = e.cleanup) || void 0 === t || t.call(e), e.cleanup = void 0
                }
            }
            const n = () => new Promise((t => setTimeout(t)))
        },
        93098: function(t, e, r) {
            "use strict";
            r.d(e, {
                O: function() {
                    return c
                }
            });
            var i = r(67294),
                n = r(10979),
                o = r(76052),
                s = r(50558),
                a = r(57864),
                h = r(93942),
                l = r(48375),
                u = r(13033);

            function c() {
                const t = (0, h.x)(),
                    e = (0, n.Kz)(),
                    {
                        connector: r
                    } = (0, a.Bk)(),
                    [c, d] = (0, i.useState)(),
                    f = (0, o.z)(),
                    p = (0, u.t)();
                (0, i.useEffect)((() => {
                    if (!f) return;
                    const i = t && e[t];
                    if (i) {
                        const e = (0, s.t)(i, t, (({
                            blockNumber: t
                        }) => {
                            p() && d(t)
                        }), f);
                        return () => e()
                    }
                    if (!r) return;
                    const n = r.newBlock.on((t => {
                        p() && d(t)
                    }));
                    return () => n()
                }), [f, e, r, t]);
                return (0, l.N)(c, 100)
            }
        },
        93942: function(t, e, r) {
            "use strict";
            r.d(e, {
                x: function() {
                    return s
                }
            });
            var i = r(57864),
                n = r(75405),
                o = r(67294);

            function s(t = {}) {
                var e, r, s;
                const {
                    connector: a
                } = (0, i.Bk)(), {
                    readOnlyChainId: h
                } = (0, n.Z)(), [l, u] = (0, o.useState)();
                return (0, o.useEffect)((() => {
                    if (u(null === a || void 0 === a ? void 0 : a.chainId), a) return a.updated.on((({
                        chainId: t
                    }) => {
                        u(t)
                    }))
                }), [a]), null !== (s = null !== (r = null === (e = null === t || void 0 === t ? void 0 : t.queryParams) || void 0 === e ? void 0 : e.chainId) && void 0 !== r ? r : l) && void 0 !== s ? s : h
            }
        },
        75405: function(t, e, r) {
            "use strict";
            r.d(e, {
                F: function() {
                    return h
                },
                Z: function() {
                    return a
                }
            });
            var i = r(67294),
                n = r(83778),
                o = r(21143);
            const s = t => ((null === t || void 0 === t ? void 0 : t.networks) && 0 !== (null === t || void 0 === t ? void 0 : t.networks.length) || console.warn("No networks or supportedChain configured"), t);

            function a() {
                var t;
                const {
                    config: e
                } = (0, i.useContext)(o.E);
                if (e.supportedChains) {
                    console.warn("supportedChain is deprecated, please pass networks instead");
                    const r = null === (t = e.supportedChains) || void 0 === t ? void 0 : t.map((t => (0, n.xz)(t)));
                    return s(Object.assign(Object.assign({}, e), {
                        networks: r
                    }))
                }
                return s(e)
            }

            function h() {
                const {
                    updateConfig: t
                } = (0, i.useContext)(o.E);
                return t
            }
        },
        48375: function(t, e, r) {
            "use strict";
            r.d(e, {
                N: function() {
                    return n
                }
            });
            var i = r(67294);

            function n(t, e) {
                const [r, n] = (0, i.useState)(t);
                return (0, i.useEffect)((() => {
                    const r = setTimeout((() => {
                        n(t)
                    }), e);
                    return () => {
                        clearTimeout(r)
                    }
                }), [t, e]), r
            }
        },
        13033: function(t, e, r) {
            "use strict";
            r.d(e, {
                t: function() {
                    return n
                }
            });
            var i = r(67294);

            function n() {
                const t = (0, i.useRef)(!1);
                return (0, i.useEffect)((() => (t.current = !0, () => {
                    t.current = !1
                })), []), (0, i.useCallback)((() => t.current), [])
            }
        },
        66006: function(t, e, r) {
            "use strict";
            r.d(e, {
                _: function() {
                    return a
                }
            });
            var i = r(67294);
            class n {
                constructor() {
                    this.data = {}, this.length = 0
                }
                clear() {
                    this.data = {}, this.length = 0
                }
                getItem(t) {
                    return this.data[t] || null
                }
                key(t) {
                    return Object.keys(this.data)[t] || null
                }
                removeItem(t) {
                    this.data[t] && (delete this.data[t], this.length--)
                }
                setItem(t, e) {
                    this.data[t] || this.length++, this.data[t] = e
                }
            }
            var o = r(75405);

            function s(t, e) {
                const r = e.getItem(t);
                if (null !== r) try {
                    return JSON.parse(r)
                } catch (i) {}
            }

            function a(t) {
                const {
                    localStorageOverride: e = ("undefined" !== typeof window ? window.localStorage : new n)
                } = (0, o.Z)(), [r, a] = (0, i.useState)((() => s(t, e)));
                return (0, i.useEffect)((() => {
                    a(s(t, e))
                }), [t]), (0, i.useEffect)((() => {
                    ! function(t, e, r) {
                        if (void 0 !== e) {
                            const i = JSON.stringify(e);
                            return r.setItem(t, i), JSON.parse(i)
                        }
                        r.removeItem(t)
                    }(t, r, e)
                }), [r]), [r, a, () => s(t, e)]
            }
        },
        34641: function(t, e, r) {
            "use strict";
            r.d(e, {
                Su: function() {
                    return o
                },
                r4: function() {
                    return a
                }
            });
            var i = r(40232);
            const n = "https://bscscan.com",
                o = {
                    chainId: 56,
                    chainName: "Smart Chain",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0x41263cba59eb80dc200f3e2544eda4ed6a90e76c",
                    multicall2Address: "0xc50f4c1e81c873b2204d7eff7069ffec6fbe136d",
                    rpcUrl: "https://bsc-dataseed1.binance.org",
                    nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18
                    },
                    blockExplorerUrl: n,
                    getExplorerAddressLink: (0, i.s)(n),
                    getExplorerTransactionLink: (0, i.K)(n)
                },
                s = "https://testnet.bscscan.com",
                a = {
                    chainId: 97,
                    chainName: "Smart Chain Testnet",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C",
                    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
                    nativeCurrency: {
                        name: "tBNB",
                        symbol: "tBNB",
                        decimals: 18
                    },
                    blockExplorerUrl: s,
                    getExplorerAddressLink: (0, i.s)(s),
                    getExplorerTransactionLink: (0, i.K)(s)
                }
        },
        7979: function(t, e, r) {
            "use strict";
            r.d(e, {
                Du: function() {
                    return f
                },
                UY: function() {
                    return p
                },
                ZR: function() {
                    return d
                },
                eL: function() {
                    return c
                },
                m4: function() {
                    return m
                },
                ny: function() {
                    return u
                }
            });
            var i = r(40232);
            const n = "https://etherscan.io",
                o = "https://ropsten.etherscan.io",
                s = "https://rinkeby.etherscan.io",
                a = "https://goerli.etherscan.io",
                h = "https://kovan.etherscan.io",
                l = "https://sepolia.etherscan.io",
                u = {
                    chainId: 1,
                    chainName: "Mainnet",
                    isTestChain: !1,
                    isLocalChain: !1,
                    multicallAddress: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
                    multicall2Address: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    blockExplorerUrl: n,
                    getExplorerAddressLink: (0, i.s)(n),
                    getExplorerTransactionLink: (0, i.K)(n)
                },
                c = {
                    chainId: 3,
                    chainName: "Ropsten",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x53c43764255c17bd724f74c4ef150724ac50a3ed",
                    multicall2Address: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
                    nativeCurrency: {
                        name: "Ropsten Ether",
                        symbol: "RopstenETH",
                        decimals: 18
                    },
                    blockExplorerUrl: o,
                    getExplorerAddressLink: (0, i.s)(o),
                    getExplorerTransactionLink: (0, i.K)(o)
                },
                d = {
                    chainId: 4,
                    chainName: "Rinkeby",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821",
                    multicall2Address: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
                    blockExplorerUrl: s,
                    nativeCurrency: {
                        name: "Rinkeby Ether",
                        symbol: "RinkebyETH",
                        decimals: 18
                    },
                    getExplorerAddressLink: (0, i.s)(s),
                    getExplorerTransactionLink: (0, i.K)(s)
                },
                f = {
                    chainId: 5,
                    chainName: "Goerli",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e",
                    multicall2Address: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
                    blockExplorerUrl: a,
                    nativeCurrency: {
                        name: "Goerli Ether",
                        symbol: "GoerliETH",
                        decimals: 18
                    },
                    getExplorerAddressLink: (0, i.s)(a),
                    getExplorerTransactionLink: (0, i.K)(a)
                },
                p = {
                    chainId: 42,
                    chainName: "Kovan",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a",
                    multicall2Address: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
                    blockExplorerUrl: h,
                    nativeCurrency: {
                        name: "Kovan Ether",
                        symbol: "KovanETH",
                        decimals: 18
                    },
                    getExplorerAddressLink: (0, i.s)(h),
                    getExplorerTransactionLink: (0, i.K)(h)
                },
                m = {
                    chainId: 11155111,
                    chainName: "Sepolia",
                    isTestChain: !0,
                    isLocalChain: !1,
                    multicallAddress: "0x6a19Dbfc67233760E0fF235b29158bE45Cc53765",
                    multicall2Address: "0xeFd9FF5a8cea47Cd6a6B1b2c3f21aC9475265A21",
                    rpcUrl: "https://rpc.sepolia.org",
                    blockExplorerUrl: l,
                    nativeCurrency: {
                        name: "Sepolia Ether",
                        symbol: "SepoliaETH",
                        decimals: 18
                    },
                    getExplorerAddressLink: (0, i.s)(l),
                    getExplorerTransactionLink: (0, i.K)(l)
                }
        },
        39055: function(t, e, r) {
            "use strict";
            r.d(e, {
                g: function() {
                    return o
                }
            });
            var i = r(64105),
                n = r(84601);
            const o = {
                pollingInterval: 15e3,
                supportedChains: void 0,
                networks: i.B,
                notifications: {
                    checkInterval: 500,
                    expirationPeriod: 5e3
                },
                localStorage: {
                    transactionPath: "transactions"
                },
                autoConnect: !0,
                multicallVersion: 1,
                connectors: {
                    metamask: new n.J
                }
            }
        },
        50558: function(t, e, r) {
            "use strict";

            function i(t, e, r, i) {
                if (t && void 0 !== e && i) {
                    const i = t => r({
                        chainId: e,
                        blockNumber: t
                    });
                    return t.on("block", i), t.getBlockNumber().then((t => i(t)), (t => {
                        console.error(t)
                    })), () => {
                        t.off("block", i)
                    }
                }
                return () => {}
            }
            r.d(e, {
                t: function() {
                    return i
                }
            })
        },
        21143: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return o
                }
            });
            var i = r(67294),
                n = r(39055);
            const o = (0, i.createContext)({
                config: n.g,
                updateConfig: () => {}
            })
        },
        57864: function(t, e, r) {
            "use strict";
            r.d(e, {
                br: function() {
                    return w
                },
                Bk: function() {
                    return b
                }
            });
            var i = r(85893),
                n = r(81556),
                o = r(241),
                s = r(67294),
                a = r(75405),
                h = r(66006),
                l = r(64105);
            var u = r(30816);
            const c = t => ({
                chainId: `0x${t.chainId.toString(16)}`,
                chainName: t.chainName,
                rpcUrls: [t.rpcUrl],
                blockExplorerUrls: t.blockExplorerUrl ? [t.blockExplorerUrl] : void 0,
                nativeCurrency: t.nativeCurrency
            });
            var d = r(39055),
                f = r(84601);
            class p {
                constructor(t, e = d.g) {
                    this.connector = t, this.updated = new u.j, this.newBlock = new u.j, this.active = !1, this.accounts = [], this.errors = [], this._config = Object.assign({}, e), t.update.on((({
                        chainId: t,
                        accounts: e
                    }) => {
                        this.chainId = t, this.accounts = e, this.emitUpdate()
                    }))
                }
                emitUpdate() {
                    this.updated.emit({
                        active: this.active,
                        chainId: this.chainId,
                        accounts: this.accounts,
                        blockNumber: this.blockNumber,
                        errors: this.errors
                    })
                }
                updateConfig(t) {
                    this._config = Object.assign(Object.assign({}, this._config), t)
                }
                getProvider() {
                    return this.connector.provider
                }
                async activate(t = (t => t.activate())) {
                    await t(this.connector);
                    const e = this.getProvider();
                    if (!e) throw new Error("Failed to activate connector");
                    this.clearSubscriptions = function(t, e, r) {
                        const i = t.provider.provider;
                        if (null === i || void 0 === i ? void 0 : i.on) {
                            const n = () => {
                                t.activate()
                            };
                            i.on("connect", n), i.on("disconnect", r);
                            const o = t => {
                                e({
                                    chainId: parseInt(t)
                                })
                            };
                            i.on("chainChanged", o);
                            const s = t => {
                                e({
                                    accounts: t
                                })
                            };
                            return i.on("accountsChanged", s), () => {
                                i.removeListener("connect", n), i.removeListener("disconnect", r), i.removeListener("chainChanged", o), i.removeListener("accountsChanged", s)
                            }
                        }
                        return () => {}
                    }(this.connector, (({
                        chainId: t,
                        accounts: e
                    }) => {
                        void 0 !== t && (this.chainId = t), void 0 !== e && (this.accounts = e), this.emitUpdate()
                    }), (() => {
                        this.connector instanceof f.J && this._config.noMetamaskDeactivate || this.deactivate()
                    })), this.blockNumber = await e.getBlockNumber(), this.newBlock.emit(this.blockNumber), this.removeBlockEffect = this.newBlock.addEffect((() => {
                        const t = t => {
                            this.blockNumber = t, this.newBlock.emit(t), this.emitUpdate()
                        };
                        return e.on("block", t), () => {
                            e.off("block", t)
                        }
                    })), this.emitUpdate()
                }
                async deactivate() {
                    var t, e;
                    this.active = !1, null === (t = this.removeBlockEffect) || void 0 === t || t.call(this), null === (e = this.clearSubscriptions) || void 0 === e || e.call(this), await this.connector.deactivate(), this.chainId = void 0, this.accounts = [], this.blockNumber = void 0, this.errors = [], this.emitUpdate()
                }
                async switchNetwork(t) {
                    var e;
                    const r = this.getProvider();
                    if (function(t, e) {
                            for (const r of Object.getOwnPropertyNames(t))
                                if (typeof t[r] !== e[r]) throw new Error(`Expected "${r}" to be of type "${e[r]}", got "${t[r]}" instead.`)
                        }({
                            chainId: t
                        }, {
                            chainId: "number"
                        }), !r) throw new Error("Connector not initialized");
                    try {
                        await r.send("wallet_switchEthereumChain", [{
                            chainId: `0x${t.toString(16)}`
                        }])
                    } catch (i) {
                        const n = 4902;
                        if (i.code !== n) throw i; {
                            const i = (null !== (e = this._config.networks) && void 0 !== e ? e : l.B).find((e => e.chainId === t));
                            if (!i) throw new Error(`ChainId "${t}" not found in config.networks. See https://usedapp-docs.netlify.app/docs/Guides/Transactions/Switching%20Networks`);
                            if (!i.rpcUrl) throw new Error(`ChainId "${t}" does not have RPC url configured by default. See https://usedapp-docs.netlify.app/docs/Guides/Transactions/Switching%20Networks`);
                            await r.send("wallet_addEthereumChain", [c(i)])
                        }
                    }
                }
                reportError(t) {
                    this.errors.push(t), this.emitUpdate()
                }
            }
            class m {
                constructor(t) {
                    this.name = "Injected", this.update = new u.j, this.provider = n.zt.isProvider(t) ? t : new o.Q(t)
                }
                async connectEagerly() {
                    if (this.provider) try {
                        const t = await this.provider.send("eth_chainId", []),
                            e = await this.provider.send("eth_accounts", []);
                        this.update.emit({
                            chainId: parseInt(t),
                            accounts: e
                        })
                    } catch (t) {
                        console.debug(t)
                    }
                }
                async activate() {
                    if (!this.provider) throw new Error("Could not activate connector");
                    try {
                        const t = await this.provider.send("eth_chainId", []),
                            e = await this.provider.send("eth_accounts", []);
                        this.update.emit({
                            chainId: parseInt(t),
                            accounts: e
                        })
                    } catch (t) {
                        throw console.log(t), new Error("Could not activate connector")
                    }
                }
                async deactivate() {
                    this.provider = void 0
                }
            }
            const v = n.zt,
                g = o.Q,
                y = (0, s.createContext)({
                    connector: void 0,
                    activate: async () => {},
                    deactivate: () => {},
                    activateBrowserWallet: () => {},
                    reportError: () => {},
                    isLoading: !1
                });

            function w({
                children: t
            }) {
                const [e, r] = (0, s.useState)(), [n, o] = (0, s.useState)(!1), l = (0, a.Z)(), {
                    connectors: u,
                    autoConnect: c
                } = l, [d, f] = (0, h._)("usedapp:autoConnectTag"), w = (0, s.useCallback)((async (t, {
                    silently: e,
                    onSuccess: i
                } = {
                    silently: !1
                }) => {
                    let n;
                    if ("activate" in t) n = new p(t, l);
                    else {
                        const e = v.isProvider(t) ? t : new g(t);
                        n = new p(new m(e), l)
                    }
                    o(!0);
                    try {
                        e ? await n.activate((t => t.connectEagerly())) : await n.activate(), r(n), o(!1), null === i || void 0 === i || i()
                    } catch (s) {
                        n.reportError(s)
                    } finally {
                        o(!1)
                    }
                }), [r, o]), b = (0, s.useCallback)((async t => {
                    t && "function" !== typeof t.preventDefault || (t = {
                        type: "metamask"
                    });
                    const {
                        type: e
                    } = t;
                    if (!u[e]) throw new Error(`Connector ${e} is not configured`);
                    await w(u[e], {
                        onSuccess: () => {
                            f(e)
                        }
                    })
                }), [w, f, u]);
                return (0, s.useEffect)((() => {
                    c && d && u[d] && w(u[d], {
                        silently: !0
                    })
                }), []), (0, s.useEffect)((() => {
                    null === e || void 0 === e || e.updateConfig(l)
                }), [e, l]), (0, i.jsx)(y.Provider, Object.assign({
                    value: {
                        connector: e,
                        deactivate: async () => {
                            f(void 0), o(!0), await (null === e || void 0 === e ? void 0 : e.deactivate()), r(void 0), o(!1)
                        },
                        reportError: t => {
                            null === e || void 0 === e || e.reportError(t)
                        },
                        activate: w,
                        activateBrowserWallet: b,
                        isLoading: n
                    }
                }, {
                    children: t
                }))
            }
            const b = () => (0, s.useContext)(y)
        },
        84601: function(t, e, r) {
            "use strict";
            r.d(e, {
                J: function() {
                    return h
                }
            });
            var i = r(241),
                n = r(92003),
                o = r.n(n),
                s = r(30816);
            const a = "https://metamask.io/download.html";
            class h {
                constructor() {
                    this.name = "Metamask", this.update = new s.j
                }
                async init() {
                    if (this.provider) return;
                    const t = await async function() {
                        var t;
                        if (!window.ethereum) return void window.open(a);
                        const e = null !== (t = ((null === window || void 0 === window ? void 0 : window.ethereum).providers || []).find((t => {
                            var e;
                            return null !== (e = t.isMetaMask) && void 0 !== e && e
                        }))) && void 0 !== t ? t : await o()();
                        return e ? new i.Q(e, "any") : void console.log(`Metamask is not installed - you can get it under ${a}`)
                    }();
                    t && (this.provider = t)
                }
                async connectEagerly() {
                    if (await this.init(), this.provider) try {
                        const t = await this.provider.send("eth_chainId", []),
                            e = await this.provider.send("eth_accounts", []);
                        this.update.emit({
                            chainId: parseInt(t),
                            accounts: e
                        })
                    } catch (t) {
                        console.debug(t)
                    }
                }
                async activate() {
                    if (await this.init(), !this.provider) throw new Error("Could not activate connector");
                    try {
                        const t = await this.provider.send("eth_chainId", []),
                            e = await this.provider.send("eth_requestAccounts", []);
                        this.update.emit({
                            chainId: parseInt(t),
                            accounts: e
                        })
                    } catch (t) {
                        throw console.log(t), new Error("Could not activate connector")
                    }
                }
                async deactivate() {
                    this.provider = void 0
                }
            }
        },
        10979: function(t, e, r) {
            "use strict";
            r.d(e, {
                FK: function() {
                    return n
                },
                KU: function() {
                    return a
                },
                Kz: function() {
                    return o
                },
                sT: function() {
                    return s
                }
            });
            var i = r(67294);
            const n = (0, i.createContext)({
                providers: {},
                updateNetworkState: () => {},
                networkStates: {}
            });

            function o() {
                return (0, i.useContext)(n).providers
            }

            function s() {
                return (0, i.useContext)(n).updateNetworkState
            }

            function a() {
                return (0, i.useContext)(n).networkStates
            }
        },
        76052: function(t, e, r) {
            "use strict";
            r.d(e, {
                H: function() {
                    return n
                },
                z: function() {
                    return o
                }
            });
            var i = r(67294);
            const n = (0, i.createContext)(!0);

            function o() {
                return (0, i.useContext)(n)
            }
        },
        92882: function(t) {
            "use strict";
            for (var e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, i = 0; i < e.length; i++) {
                var n = e.charAt(i);
                if (void 0 !== r[n]) throw new TypeError(n + " is ambiguous");
                r[n] = i
            }

            function o(t) {
                var e = t >> 25;
                return (33554431 & t) << 5 ^ 996825010 & -(e >> 0 & 1) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1)
            }

            function s(t) {
                for (var e = 1, r = 0; r < t.length; ++r) {
                    var i = t.charCodeAt(r);
                    if (i < 33 || i > 126) return "Invalid prefix (" + t + ")";
                    e = o(e) ^ i >> 5
                }
                for (e = o(e), r = 0; r < t.length; ++r) {
                    var n = t.charCodeAt(r);
                    e = o(e) ^ 31 & n
                }
                return e
            }

            function a(t, e) {
                if (e = e || 90, t.length < 8) return t + " too short";
                if (t.length > e) return "Exceeds length limit";
                var i = t.toLowerCase(),
                    n = t.toUpperCase();
                if (t !== i && t !== n) return "Mixed-case string " + t;
                var a = (t = i).lastIndexOf("1");
                if (-1 === a) return "No separator character for " + t;
                if (0 === a) return "Missing prefix for " + t;
                var h = t.slice(0, a),
                    l = t.slice(a + 1);
                if (l.length < 6) return "Data too short";
                var u = s(h);
                if ("string" === typeof u) return u;
                for (var c = [], d = 0; d < l.length; ++d) {
                    var f = l.charAt(d),
                        p = r[f];
                    if (void 0 === p) return "Unknown character " + f;
                    u = o(u) ^ p, d + 6 >= l.length || c.push(p)
                }
                return 1 !== u ? "Invalid checksum for " + t : {
                    prefix: h,
                    words: c
                }
            }

            function h(t, e, r, i) {
                for (var n = 0, o = 0, s = (1 << r) - 1, a = [], h = 0; h < t.length; ++h)
                    for (n = n << e | t[h], o += e; o >= r;) o -= r, a.push(n >> o & s);
                if (i) o > 0 && a.push(n << r - o & s);
                else {
                    if (o >= e) return "Excess padding";
                    if (n << r - o & s) return "Non-zero padding"
                }
                return a
            }
            t.exports = {
                decodeUnsafe: function() {
                    var t = a.apply(null, arguments);
                    if ("object" === typeof t) return t
                },
                decode: function(t) {
                    var e = a.apply(null, arguments);
                    if ("object" === typeof e) return e;
                    throw new Error(e)
                },
                encode: function(t, r, i) {
                    if (i = i || 90, t.length + 7 + r.length > i) throw new TypeError("Exceeds length limit");
                    var n = s(t = t.toLowerCase());
                    if ("string" === typeof n) throw new Error(n);
                    for (var a = t + "1", h = 0; h < r.length; ++h) {
                        var l = r[h];
                        if (l >> 5 !== 0) throw new Error("Non 5-bit word");
                        n = o(n) ^ l, a += e.charAt(l)
                    }
                    for (h = 0; h < 6; ++h) n = o(n);
                    for (n ^= 1, h = 0; h < 6; ++h) {
                        a += e.charAt(n >> 5 * (5 - h) & 31)
                    }
                    return a
                },
                toWordsUnsafe: function(t) {
                    var e = h(t, 8, 5, !0);
                    if (Array.isArray(e)) return e
                },
                toWords: function(t) {
                    var e = h(t, 8, 5, !0);
                    if (Array.isArray(e)) return e;
                    throw new Error(e)
                },
                fromWordsUnsafe: function(t) {
                    var e = h(t, 5, 8, !1);
                    if (Array.isArray(e)) return e
                },
                fromWords: function(t) {
                    var e = h(t, 5, 8, !1);
                    if (Array.isArray(e)) return e;
                    throw new Error(e)
                }
            }
        },
        94184: function(t, e) {
            var r;
            ! function() {
                "use strict";
                var i = {}.hasOwnProperty;

                function n() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var r = arguments[e];
                        if (r) {
                            var o = typeof r;
                            if ("string" === o || "number" === o) t.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var s = n.apply(null, r);
                                    s && t.push(s)
                                }
                            } else if ("object" === o)
                                if (r.toString === Object.prototype.toString)
                                    for (var a in r) i.call(r, a) && r[a] && t.push(a);
                                else t.push(r.toString())
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (n.default = n, t.exports = n) : void 0 === (r = function() {
                    return n
                }.apply(e, [])) || (t.exports = r)
            }()
        },
        86010: function(t, e, r) {
            "use strict";

            function i(t) {
                var e, r, n = "";
                if ("string" === typeof t || "number" === typeof t) n += t;
                else if ("object" === typeof t)
                    if (Array.isArray(t))
                        for (e = 0; e < t.length; e++) t[e] && (r = i(t[e])) && (n && (n += " "), n += r);
                    else
                        for (e in t) t[e] && (n && (n += " "), n += e);
                return n
            }

            function n() {
                for (var t, e, r = 0, n = ""; r < arguments.length;)(t = arguments[r++]) && (e = i(t)) && (n && (n += " "), n += e);
                return n
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        38252: function(t) {
            "use strict";
            t.exports = function t(e, r) {
                if (e === r) return !0;
                if (e && r && "object" == typeof e && "object" == typeof r) {
                    if (e.constructor !== r.constructor) return !1;
                    var i, n, o;
                    if (Array.isArray(e)) {
                        if ((i = e.length) != r.length) return !1;
                        for (n = i; 0 !== n--;)
                            if (!t(e[n], r[n])) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
                    if ((i = (o = Object.keys(e)).length) !== Object.keys(r).length) return !1;
                    for (n = i; 0 !== n--;)
                        if (!Object.prototype.hasOwnProperty.call(r, o[n])) return !1;
                    for (n = i; 0 !== n--;) {
                        var s = o[n];
                        if (("_owner" !== s || !e.$$typeof) && !t(e[s], r[s])) return !1
                    }
                    return !0
                }
                return e !== e && r !== r
            }
        },
        33715: function(t, e, r) {
            var i = e;
            i.utils = r(26436), i.common = r(95772), i.sha = r(89041), i.ripemd = r(12949), i.hmac = r(52344), i.sha1 = i.sha.sha1, i.sha256 = i.sha.sha256, i.sha224 = i.sha.sha224, i.sha384 = i.sha.sha384, i.sha512 = i.sha.sha512, i.ripemd160 = i.ripemd.ripemd160
        },
        95772: function(t, e, r) {
            "use strict";
            var i = r(26436),
                n = r(79746);

            function o() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            e.BlockHash = o, o.prototype.update = function(t, e) {
                if (t = i.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = i.join32(t, 0, t.length - r, this.endian);
                    for (var n = 0; n < t.length; n += this._delta32) this._update(t, n, n + this._delta32)
                }
                return this
            }, o.prototype.digest = function(t) {
                return this.update(this._pad()), n(null === this.pending), this._digest(t)
            }, o.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - (t + this.padLength) % e,
                    i = new Array(r + this.padLength);
                i[0] = 128;
                for (var n = 1; n < r; n++) i[n] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) i[n++] = 0;
                    i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = t >>> 24 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 8 & 255, i[n++] = 255 & t
                } else
                    for (i[n++] = 255 & t, i[n++] = t >>> 8 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, o = 8; o < this.padLength; o++) i[n++] = 0;
                return i
            }
        },
        52344: function(t, e, r) {
            "use strict";
            var i = r(26436),
                n = r(79746);

            function o(t, e, r) {
                if (!(this instanceof o)) return new o(t, e, r);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(i.toArray(e, r))
            }
            t.exports = o, o.prototype._init = function(t) {
                t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), n(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++) t.push(0);
                for (e = 0; e < t.length; e++) t[e] ^= 54;
                for (this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++) t[e] ^= 106;
                this.outer = (new this.Hash).update(t)
            }, o.prototype.update = function(t, e) {
                return this.inner.update(t, e), this
            }, o.prototype.digest = function(t) {
                return this.outer.update(this.inner.digest()), this.outer.digest(t)
            }
        },
        12949: function(t, e, r) {
            "use strict";
            var i = r(26436),
                n = r(95772),
                o = i.rotl32,
                s = i.sum32,
                a = i.sum32_3,
                h = i.sum32_4,
                l = n.BlockHash;

            function u() {
                if (!(this instanceof u)) return new u;
                l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function c(t, e, r, i) {
                return t <= 15 ? e ^ r ^ i : t <= 31 ? e & r | ~e & i : t <= 47 ? (e | ~r) ^ i : t <= 63 ? e & i | r & ~i : e ^ (r | ~i)
            }

            function d(t) {
                return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
            }

            function f(t) {
                return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
            }
            i.inherits(u, l), e.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function(t, e) {
                for (var r = this.h[0], i = this.h[1], n = this.h[2], l = this.h[3], u = this.h[4], y = r, w = i, b = n, A = l, M = u, E = 0; E < 80; E++) {
                    var k = s(o(h(r, c(E, i, n, l), t[p[E] + e], d(E)), v[E]), u);
                    r = u, u = l, l = o(n, 10), n = i, i = k, k = s(o(h(y, c(79 - E, w, b, A), t[m[E] + e], f(E)), g[E]), M), y = M, M = A, A = o(b, 10), b = w, w = k
                }
                k = a(this.h[1], n, A), this.h[1] = a(this.h[2], l, M), this.h[2] = a(this.h[3], u, y), this.h[3] = a(this.h[4], r, w), this.h[4] = a(this.h[0], i, b), this.h[0] = k
            }, u.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h, "little") : i.split32(this.h, "little")
            };
            var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                m = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                v = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        },
        89041: function(t, e, r) {
            "use strict";
            e.sha1 = r(84761), e.sha224 = r(10799), e.sha256 = r(89344), e.sha384 = r(80772), e.sha512 = r(45900)
        },
        84761: function(t, e, r) {
            "use strict";
            var i = r(26436),
                n = r(95772),
                o = r(37038),
                s = i.rotl32,
                a = i.sum32,
                h = i.sum32_5,
                l = o.ft_1,
                u = n.BlockHash,
                c = [1518500249, 1859775393, 2400959708, 3395469782];

            function d() {
                if (!(this instanceof d)) return new d;
                u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
            }
            i.inherits(d, u), t.exports = d, d.blockSize = 512, d.outSize = 160, d.hmacStrength = 80, d.padLength = 64, d.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = s(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                var n = this.h[0],
                    o = this.h[1],
                    u = this.h[2],
                    d = this.h[3],
                    f = this.h[4];
                for (i = 0; i < r.length; i++) {
                    var p = ~~(i / 20),
                        m = h(s(n, 5), l(p, o, u, d), f, r[i], c[p]);
                    f = d, d = u, u = s(o, 30), o = n, n = m
                }
                this.h[0] = a(this.h[0], n), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], u), this.h[3] = a(this.h[3], d), this.h[4] = a(this.h[4], f)
            }, d.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }
        },
        10799: function(t, e, r) {
            "use strict";
            var i = r(26436),
                n = r(89344);

            function o() {
                if (!(this instanceof o)) return new o;
                n.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            i.inherits(o, n), t.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h.slice(0, 7), "big") : i.split32(this.h.slice(0, 7), "big")
            }
        },
        89344: function(t, e, r) {
            "use strict";
            var i = r(26436),
                n = r(95772),
                o = r(37038),
                s = r(79746),
                a = i.sum32,
                h = i.sum32_4,
                l = i.sum32_5,
                u = o.ch32,
                c = o.maj32,
                d = o.s0_256,
                f = o.s1_256,
                p = o.g0_256,
                m = o.g1_256,
                v = n.BlockHash,
                g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function y() {
                if (!(this instanceof y)) return new y;
                v.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = g, this.W = new Array(64)
            }
            i.inherits(y, v), t.exports = y, y.blockSize = 512, y.outSize = 256, y.hmacStrength = 192, y.padLength = 64, y.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = h(m(r[i - 2]), r[i - 7], p(r[i - 15]), r[i - 16]);
                var n = this.h[0],
                    o = this.h[1],
                    v = this.h[2],
                    g = this.h[3],
                    y = this.h[4],
                    w = this.h[5],
                    b = this.h[6],
                    A = this.h[7];
                for (s(this.k.length === r.length), i = 0; i < r.length; i++) {
                    var M = l(A, f(y), u(y, w, b), this.k[i], r[i]),
                        E = a(d(n), c(n, o, v));
                    A = b, b = w, w = y, y = a(g, M), g = v, v = o, o = n, n = a(M, E)
                }
                this.h[0] = a(this.h[0], n), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], v), this.h[3] = a(this.h[3], g), this.h[4] = a(this.h[4], y), this.h[5] = a(this.h[5], w), this.h[6] = a(this.h[6], b), this.h[7] = a(this.h[7], A)
            }, y.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }
        },
        80772: function(t, e, r) {
            "use strict";
            var i = r(26436),
                n = r(45900);

            function o() {
                if (!(this instanceof o)) return new o;
                n.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            i.inherits(o, n), t.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h.slice(0, 12), "big") : i.split32(this.h.slice(0, 12), "big")
            }
        },
        45900: function(t, e, r) {
            "use strict";
            var i = r(26436),
                n = r(95772),
                o = r(79746),
                s = i.rotr64_hi,
                a = i.rotr64_lo,
                h = i.shr64_hi,
                l = i.shr64_lo,
                u = i.sum64,
                c = i.sum64_hi,
                d = i.sum64_lo,
                f = i.sum64_4_hi,
                p = i.sum64_4_lo,
                m = i.sum64_5_hi,
                v = i.sum64_5_lo,
                g = n.BlockHash,
                y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function w() {
                if (!(this instanceof w)) return new w;
                g.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = y, this.W = new Array(160)
            }

            function b(t, e, r, i, n) {
                var o = t & r ^ ~t & n;
                return o < 0 && (o += 4294967296), o
            }

            function A(t, e, r, i, n, o) {
                var s = e & i ^ ~e & o;
                return s < 0 && (s += 4294967296), s
            }

            function M(t, e, r, i, n) {
                var o = t & r ^ t & n ^ r & n;
                return o < 0 && (o += 4294967296), o
            }

            function E(t, e, r, i, n, o) {
                var s = e & i ^ e & o ^ i & o;
                return s < 0 && (s += 4294967296), s
            }

            function k(t, e) {
                var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function x(t, e) {
                var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
                return r < 0 && (r += 4294967296), r
            }

            function C(t, e) {
                var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
                return r < 0 && (r += 4294967296), r
            }

            function _(t, e) {
                var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
                return r < 0 && (r += 4294967296), r
            }

            function T(t, e) {
                var r = s(t, e, 1) ^ s(t, e, 8) ^ h(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function I(t, e) {
                var r = a(t, e, 1) ^ a(t, e, 8) ^ l(t, e, 7);
                return r < 0 && (r += 4294967296), r
            }

            function P(t, e) {
                var r = s(t, e, 19) ^ s(e, t, 29) ^ h(t, e, 6);
                return r < 0 && (r += 4294967296), r
            }

            function S(t, e) {
                var r = a(t, e, 19) ^ a(e, t, 29) ^ l(t, e, 6);
                return r < 0 && (r += 4294967296), r
            }
            i.inherits(w, g), t.exports = w, w.blockSize = 1024, w.outSize = 512, w.hmacStrength = 192, w.padLength = 128, w.prototype._prepareBlock = function(t, e) {
                for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
                for (; i < r.length; i += 2) {
                    var n = P(r[i - 4], r[i - 3]),
                        o = S(r[i - 4], r[i - 3]),
                        s = r[i - 14],
                        a = r[i - 13],
                        h = T(r[i - 30], r[i - 29]),
                        l = I(r[i - 30], r[i - 29]),
                        u = r[i - 32],
                        c = r[i - 31];
                    r[i] = f(n, o, s, a, h, l, u, c), r[i + 1] = p(n, o, s, a, h, l, u, c)
                }
            }, w.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var r = this.W,
                    i = this.h[0],
                    n = this.h[1],
                    s = this.h[2],
                    a = this.h[3],
                    h = this.h[4],
                    l = this.h[5],
                    f = this.h[6],
                    p = this.h[7],
                    g = this.h[8],
                    y = this.h[9],
                    w = this.h[10],
                    T = this.h[11],
                    I = this.h[12],
                    P = this.h[13],
                    S = this.h[14],
                    N = this.h[15];
                o(this.k.length === r.length);
                for (var L = 0; L < r.length; L += 2) {
                    var O = S,
                        R = N,
                        B = C(g, y),
                        D = _(g, y),
                        z = b(g, y, w, T, I),
                        F = A(g, y, w, T, I, P),
                        U = this.k[L],
                        q = this.k[L + 1],
                        H = r[L],
                        j = r[L + 1],
                        G = m(O, R, B, D, z, F, U, q, H, j),
                        K = v(O, R, B, D, z, F, U, q, H, j);
                    O = k(i, n), R = x(i, n), B = M(i, n, s, a, h), D = E(i, n, s, a, h, l);
                    var V = c(O, R, B, D),
                        J = d(O, R, B, D);
                    S = I, N = P, I = w, P = T, w = g, T = y, g = c(f, p, G, K), y = d(p, p, G, K), f = h, p = l, h = s, l = a, s = i, a = n, i = c(G, K, V, J), n = d(G, K, V, J)
                }
                u(this.h, 0, i, n), u(this.h, 2, s, a), u(this.h, 4, h, l), u(this.h, 6, f, p), u(this.h, 8, g, y), u(this.h, 10, w, T), u(this.h, 12, I, P), u(this.h, 14, S, N)
            }, w.prototype._digest = function(t) {
                return "hex" === t ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
            }
        },
        37038: function(t, e, r) {
            "use strict";
            var i = r(26436).rotr32;

            function n(t, e, r) {
                return t & e ^ ~t & r
            }

            function o(t, e, r) {
                return t & e ^ t & r ^ e & r
            }

            function s(t, e, r) {
                return t ^ e ^ r
            }
            e.ft_1 = function(t, e, r, i) {
                return 0 === t ? n(e, r, i) : 1 === t || 3 === t ? s(e, r, i) : 2 === t ? o(e, r, i) : void 0
            }, e.ch32 = n, e.maj32 = o, e.p32 = s, e.s0_256 = function(t) {
                return i(t, 2) ^ i(t, 13) ^ i(t, 22)
            }, e.s1_256 = function(t) {
                return i(t, 6) ^ i(t, 11) ^ i(t, 25)
            }, e.g0_256 = function(t) {
                return i(t, 7) ^ i(t, 18) ^ t >>> 3
            }, e.g1_256 = function(t) {
                return i(t, 17) ^ i(t, 19) ^ t >>> 10
            }
        },
        26436: function(t, e, r) {
            "use strict";
            var i = r(79746),
                n = r(35717);

            function o(t, e) {
                return 55296 === (64512 & t.charCodeAt(e)) && (!(e < 0 || e + 1 >= t.length) && 56320 === (64512 & t.charCodeAt(e + 1)))
            }

            function s(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }

            function a(t) {
                return 1 === t.length ? "0" + t : t
            }

            function h(t) {
                return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
            }
            e.inherits = n, e.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" === typeof t)
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                    } else
                        for (var i = 0, n = 0; n < t.length; n++) {
                            var s = t.charCodeAt(n);
                            s < 128 ? r[i++] = s : s < 2048 ? (r[i++] = s >> 6 | 192, r[i++] = 63 & s | 128) : o(t, n) ? (s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n)), r[i++] = s >> 18 | 240, r[i++] = s >> 12 & 63 | 128, r[i++] = s >> 6 & 63 | 128, r[i++] = 63 & s | 128) : (r[i++] = s >> 12 | 224, r[i++] = s >> 6 & 63 | 128, r[i++] = 63 & s | 128)
                        } else
                            for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
                return r
            }, e.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += a(t[r].toString(16));
                return e
            }, e.htonl = s, e.toHex32 = function(t, e) {
                for (var r = "", i = 0; i < t.length; i++) {
                    var n = t[i];
                    "little" === e && (n = s(n)), r += h(n.toString(16))
                }
                return r
            }, e.zero2 = a, e.zero8 = h, e.join32 = function(t, e, r, n) {
                var o = r - e;
                i(o % 4 === 0);
                for (var s = new Array(o / 4), a = 0, h = e; a < s.length; a++, h += 4) {
                    var l;
                    l = "big" === n ? t[h] << 24 | t[h + 1] << 16 | t[h + 2] << 8 | t[h + 3] : t[h + 3] << 24 | t[h + 2] << 16 | t[h + 1] << 8 | t[h], s[a] = l >>> 0
                }
                return s
            }, e.split32 = function(t, e) {
                for (var r = new Array(4 * t.length), i = 0, n = 0; i < t.length; i++, n += 4) {
                    var o = t[i];
                    "big" === e ? (r[n] = o >>> 24, r[n + 1] = o >>> 16 & 255, r[n + 2] = o >>> 8 & 255, r[n + 3] = 255 & o) : (r[n + 3] = o >>> 24, r[n + 2] = o >>> 16 & 255, r[n + 1] = o >>> 8 & 255, r[n] = 255 & o)
                }
                return r
            }, e.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            }, e.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            }, e.sum32 = function(t, e) {
                return t + e >>> 0
            }, e.sum32_3 = function(t, e, r) {
                return t + e + r >>> 0
            }, e.sum32_4 = function(t, e, r, i) {
                return t + e + r + i >>> 0
            }, e.sum32_5 = function(t, e, r, i, n) {
                return t + e + r + i + n >>> 0
            }, e.sum64 = function(t, e, r, i) {
                var n = t[e],
                    o = i + t[e + 1] >>> 0,
                    s = (o < i ? 1 : 0) + r + n;
                t[e] = s >>> 0, t[e + 1] = o
            }, e.sum64_hi = function(t, e, r, i) {
                return (e + i >>> 0 < e ? 1 : 0) + t + r >>> 0
            }, e.sum64_lo = function(t, e, r, i) {
                return e + i >>> 0
            }, e.sum64_4_hi = function(t, e, r, i, n, o, s, a) {
                var h = 0,
                    l = e;
                return h += (l = l + i >>> 0) < e ? 1 : 0, h += (l = l + o >>> 0) < o ? 1 : 0, t + r + n + s + (h += (l = l + a >>> 0) < a ? 1 : 0) >>> 0
            }, e.sum64_4_lo = function(t, e, r, i, n, o, s, a) {
                return e + i + o + a >>> 0
            }, e.sum64_5_hi = function(t, e, r, i, n, o, s, a, h, l) {
                var u = 0,
                    c = e;
                return u += (c = c + i >>> 0) < e ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, u += (c = c + a >>> 0) < a ? 1 : 0, t + r + n + s + h + (u += (c = c + l >>> 0) < l ? 1 : 0) >>> 0
            }, e.sum64_5_lo = function(t, e, r, i, n, o, s, a, h, l) {
                return e + i + o + a + l >>> 0
            }, e.rotr64_hi = function(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, e.rotr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, e.shr64_hi = function(t, e, r) {
                return t >>> r
            }, e.shr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }
        },
        35717: function(t) {
            "function" === typeof Object.create ? t.exports = function(t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : t.exports = function(t, e) {
                if (e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }
            }
        },
        91094: function(t, e, r) {
            var i, n = r(34155);
            ! function() {
                "use strict";
                var o = "input is invalid type",
                    s = "object" === typeof window,
                    a = s ? window : {};
                a.JS_SHA3_NO_WINDOW && (s = !1);
                var h = !s && "object" === typeof self;
                !a.JS_SHA3_NO_NODE_JS && "object" === typeof n && n.versions && n.versions.node ? a = r.g : h && (a = self);
                var l = !a.JS_SHA3_NO_COMMON_JS && t.exports,
                    u = r.amdO,
                    c = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
                    d = "0123456789abcdef".split(""),
                    f = [4, 1024, 262144, 67108864],
                    p = [0, 8, 16, 24],
                    m = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    v = [224, 256, 384, 512],
                    g = [128, 256],
                    y = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    w = {
                        128: 168,
                        256: 136
                    };
                !a.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), !c || !a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                    return "object" === typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var b = function(t, e, r) {
                        return function(i) {
                            return new R(t, e, t).update(i)[r]()
                        }
                    }, A = function(t, e, r) {
                        return function(i, n) {
                            return new R(t, e, n).update(i)[r]()
                        }
                    }, M = function(t, e, r) {
                        return function(e, i, n, o) {
                            return _["cshake" + t].update(e, i, n, o)[r]()
                        }
                    }, E = function(t, e, r) {
                        return function(e, i, n, o) {
                            return _["kmac" + t].update(e, i, n, o)[r]()
                        }
                    }, k = function(t, e, r, i) {
                        for (var n = 0; n < y.length; ++n) {
                            var o = y[n];
                            t[o] = e(r, i, o)
                        }
                        return t
                    }, x = function(t, e) {
                        var r = b(t, e, "hex");
                        return r.create = function() {
                            return new R(t, e, t)
                        }, r.update = function(t) {
                            return r.create().update(t)
                        }, k(r, b, t, e)
                    }, C = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: v,
                        createMethod: x
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: v,
                        createMethod: x
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: g,
                        createMethod: function(t, e) {
                            var r = A(t, e, "hex");
                            return r.create = function(r) {
                                return new R(t, e, r)
                            }, r.update = function(t, e) {
                                return r.create(e).update(t)
                            }, k(r, A, t, e)
                        }
                    }, {
                        name: "cshake",
                        padding: f,
                        bits: g,
                        createMethod: function(t, e) {
                            var r = w[t],
                                i = M(t, 0, "hex");
                            return i.create = function(i, n, o) {
                                return n || o ? new R(t, e, i).bytepad([n, o], r) : _["shake" + t].create(i)
                            }, i.update = function(t, e, r, n) {
                                return i.create(e, r, n).update(t)
                            }, k(i, M, t, e)
                        }
                    }, {
                        name: "kmac",
                        padding: f,
                        bits: g,
                        createMethod: function(t, e) {
                            var r = w[t],
                                i = E(t, 0, "hex");
                            return i.create = function(i, n, o) {
                                return new B(t, e, n).bytepad(["KMAC", o], r).bytepad([i], r)
                            }, i.update = function(t, e, r, n) {
                                return i.create(t, r, n).update(e)
                            }, k(i, E, t, e)
                        }
                    }], _ = {}, T = [], I = 0; I < C.length; ++I)
                    for (var P = C[I], S = P.bits, N = 0; N < S.length; ++N) {
                        var L = P.name + "_" + S[N];
                        if (T.push(L), _[L] = P.createMethod(S[N], P.padding), "sha3" !== P.name) {
                            var O = P.name + S[N];
                            T.push(O), _[O] = _[L]
                        }
                    }

                function R(t, e, r) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var i = 0; i < 50; ++i) this.s[i] = 0
                }

                function B(t, e, r) {
                    R.call(this, t, e, r)
                }
                R.prototype.update = function(t) {
                    if (this.finalized) throw new Error("finalize already called");
                    var e, r = typeof t;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(o);
                        if (null === t) throw new Error(o);
                        if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                        else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) throw new Error(o);
                        e = !0
                    }
                    for (var i, n, s = this.blocks, a = this.byteCount, h = t.length, l = this.blockCount, u = 0, d = this.s; u < h;) {
                        if (this.reset)
                            for (this.reset = !1, s[0] = this.block, i = 1; i < l + 1; ++i) s[i] = 0;
                        if (e)
                            for (i = this.start; u < h && i < a; ++u) s[i >> 2] |= t[u] << p[3 & i++];
                        else
                            for (i = this.start; u < h && i < a; ++u)(n = t.charCodeAt(u)) < 128 ? s[i >> 2] |= n << p[3 & i++] : n < 2048 ? (s[i >> 2] |= (192 | n >> 6) << p[3 & i++], s[i >> 2] |= (128 | 63 & n) << p[3 & i++]) : n < 55296 || n >= 57344 ? (s[i >> 2] |= (224 | n >> 12) << p[3 & i++], s[i >> 2] |= (128 | n >> 6 & 63) << p[3 & i++], s[i >> 2] |= (128 | 63 & n) << p[3 & i++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++u)), s[i >> 2] |= (240 | n >> 18) << p[3 & i++], s[i >> 2] |= (128 | n >> 12 & 63) << p[3 & i++], s[i >> 2] |= (128 | n >> 6 & 63) << p[3 & i++], s[i >> 2] |= (128 | 63 & n) << p[3 & i++]);
                        if (this.lastByteIndex = i, i >= a) {
                            for (this.start = i - a, this.block = s[l], i = 0; i < l; ++i) d[i] ^= s[i];
                            D(d), this.reset = !0
                        } else this.start = i
                    }
                    return this
                }, R.prototype.encode = function(t, e) {
                    var r = 255 & t,
                        i = 1,
                        n = [r];
                    for (r = 255 & (t >>= 8); r > 0;) n.unshift(r), r = 255 & (t >>= 8), ++i;
                    return e ? n.push(i) : n.unshift(i), this.update(n), n.length
                }, R.prototype.encodeString = function(t) {
                    var e, r = typeof t;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(o);
                        if (null === t) throw new Error(o);
                        if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                        else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) throw new Error(o);
                        e = !0
                    }
                    var i = 0,
                        n = t.length;
                    if (e) i = n;
                    else
                        for (var s = 0; s < t.length; ++s) {
                            var a = t.charCodeAt(s);
                            a < 128 ? i += 1 : a < 2048 ? i += 2 : a < 55296 || a >= 57344 ? i += 3 : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++s)), i += 4)
                        }
                    return i += this.encode(8 * i), this.update(t), i
                }, R.prototype.bytepad = function(t, e) {
                    for (var r = this.encode(e), i = 0; i < t.length; ++i) r += this.encodeString(t[i]);
                    var n = e - r % e,
                        o = [];
                    return o.length = n, this.update(o), this
                }, R.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex,
                            r = this.blockCount,
                            i = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                            for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                        for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) i[e] ^= t[e];
                        D(i)
                    }
                }, R.prototype.toString = R.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, r = this.s, i = this.outputBlocks, n = this.extraBytes, o = 0, s = 0, a = ""; s < i;) {
                        for (o = 0; o < e && s < i; ++o, ++s) t = r[o], a += d[t >> 4 & 15] + d[15 & t] + d[t >> 12 & 15] + d[t >> 8 & 15] + d[t >> 20 & 15] + d[t >> 16 & 15] + d[t >> 28 & 15] + d[t >> 24 & 15];
                        s % e === 0 && (D(r), o = 0)
                    }
                    return n && (t = r[o], a += d[t >> 4 & 15] + d[15 & t], n > 1 && (a += d[t >> 12 & 15] + d[t >> 8 & 15]), n > 2 && (a += d[t >> 20 & 15] + d[t >> 16 & 15])), a
                }, R.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, e = this.blockCount,
                        r = this.s,
                        i = this.outputBlocks,
                        n = this.extraBytes,
                        o = 0,
                        s = 0,
                        a = this.outputBits >> 3;
                    t = n ? new ArrayBuffer(i + 1 << 2) : new ArrayBuffer(a);
                    for (var h = new Uint32Array(t); s < i;) {
                        for (o = 0; o < e && s < i; ++o, ++s) h[s] = r[o];
                        s % e === 0 && D(r)
                    }
                    return n && (h[o] = r[o], t = t.slice(0, a)), t
                }, R.prototype.buffer = R.prototype.arrayBuffer, R.prototype.digest = R.prototype.array = function() {
                    this.finalize();
                    for (var t, e, r = this.blockCount, i = this.s, n = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, h = []; a < n;) {
                        for (s = 0; s < r && a < n; ++s, ++a) t = a << 2, e = i[s], h[t] = 255 & e, h[t + 1] = e >> 8 & 255, h[t + 2] = e >> 16 & 255, h[t + 3] = e >> 24 & 255;
                        a % r === 0 && D(i)
                    }
                    return o && (t = a << 2, e = i[s], h[t] = 255 & e, o > 1 && (h[t + 1] = e >> 8 & 255), o > 2 && (h[t + 2] = e >> 16 & 255)), h
                }, B.prototype = new R, B.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), R.prototype.finalize.call(this)
                };
                var D = function(t) {
                    var e, r, i, n, o, s, a, h, l, u, c, d, f, p, v, g, y, w, b, A, M, E, k, x, C, _, T, I, P, S, N, L, O, R, B, D, z, F, U, q, H, j, G, K, V, J, Q, Z, Y, W, X, $, tt, et, rt, it, nt, ot, st, at, ht, lt, ut;
                    for (i = 0; i < 48; i += 2) n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], l = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], u = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (s << 1 | a >>> 31), r = (f = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | s >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = n ^ (h << 1 | l >>> 31), r = o ^ (l << 1 | h >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = s ^ (u << 1 | c >>> 31), r = a ^ (c << 1 | u >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = h ^ (d << 1 | f >>> 31), r = l ^ (f << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = u ^ (n << 1 | o >>> 31), r = c ^ (o << 1 | n >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, p = t[0], v = t[1], J = t[11] << 4 | t[10] >>> 28, Q = t[10] << 4 | t[11] >>> 28, I = t[20] << 3 | t[21] >>> 29, P = t[21] << 3 | t[20] >>> 29, at = t[31] << 9 | t[30] >>> 23, ht = t[30] << 9 | t[31] >>> 23, j = t[40] << 18 | t[41] >>> 14, G = t[41] << 18 | t[40] >>> 14, R = t[2] << 1 | t[3] >>> 31, B = t[3] << 1 | t[2] >>> 31, g = t[13] << 12 | t[12] >>> 20, y = t[12] << 12 | t[13] >>> 20, Z = t[22] << 10 | t[23] >>> 22, Y = t[23] << 10 | t[22] >>> 22, S = t[33] << 13 | t[32] >>> 19, N = t[32] << 13 | t[33] >>> 19, lt = t[42] << 2 | t[43] >>> 30, ut = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, D = t[14] << 6 | t[15] >>> 26, z = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, W = t[34] << 15 | t[35] >>> 17, X = t[35] << 15 | t[34] >>> 17, L = t[45] << 29 | t[44] >>> 3, O = t[44] << 29 | t[45] >>> 3, x = t[6] << 28 | t[7] >>> 4, C = t[7] << 28 | t[6] >>> 4, it = t[17] << 23 | t[16] >>> 9, nt = t[16] << 23 | t[17] >>> 9, F = t[26] << 25 | t[27] >>> 7, U = t[27] << 25 | t[26] >>> 7, A = t[36] << 21 | t[37] >>> 11, M = t[37] << 21 | t[36] >>> 11, $ = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, K = t[8] << 27 | t[9] >>> 5, V = t[9] << 27 | t[8] >>> 5, _ = t[18] << 20 | t[19] >>> 12, T = t[19] << 20 | t[18] >>> 12, ot = t[29] << 7 | t[28] >>> 25, st = t[28] << 7 | t[29] >>> 25, q = t[38] << 8 | t[39] >>> 24, H = t[39] << 8 | t[38] >>> 24, E = t[48] << 14 | t[49] >>> 18, k = t[49] << 14 | t[48] >>> 18, t[0] = p ^ ~g & w, t[1] = v ^ ~y & b, t[10] = x ^ ~_ & I, t[11] = C ^ ~T & P, t[20] = R ^ ~D & F, t[21] = B ^ ~z & U, t[30] = K ^ ~J & Z, t[31] = V ^ ~Q & Y, t[40] = et ^ ~it & ot, t[41] = rt ^ ~nt & st, t[2] = g ^ ~w & A, t[3] = y ^ ~b & M, t[12] = _ ^ ~I & S, t[13] = T ^ ~P & N, t[22] = D ^ ~F & q, t[23] = z ^ ~U & H, t[32] = J ^ ~Z & W, t[33] = Q ^ ~Y & X, t[42] = it ^ ~ot & at, t[43] = nt ^ ~st & ht, t[4] = w ^ ~A & E, t[5] = b ^ ~M & k, t[14] = I ^ ~S & L, t[15] = P ^ ~N & O, t[24] = F ^ ~q & j, t[25] = U ^ ~H & G, t[34] = Z ^ ~W & $, t[35] = Y ^ ~X & tt, t[44] = ot ^ ~at & lt, t[45] = st ^ ~ht & ut, t[6] = A ^ ~E & p, t[7] = M ^ ~k & v, t[16] = S ^ ~L & x, t[17] = N ^ ~O & C, t[26] = q ^ ~j & R, t[27] = H ^ ~G & B, t[36] = W ^ ~$ & K, t[37] = X ^ ~tt & V, t[46] = at ^ ~lt & et, t[47] = ht ^ ~ut & rt, t[8] = E ^ ~p & g, t[9] = k ^ ~v & y, t[18] = L ^ ~x & _, t[19] = O ^ ~C & T, t[28] = j ^ ~R & D, t[29] = G ^ ~B & z, t[38] = $ ^ ~K & J, t[39] = tt ^ ~V & Q, t[48] = lt ^ ~et & it, t[49] = ut ^ ~rt & nt, t[0] ^= m[i], t[1] ^= m[i + 1]
                };
                if (l) t.exports = _;
                else {
                    for (I = 0; I < T.length; ++I) a[T[I]] = _[T[I]];
                    u && (void 0 === (i = function() {
                        return _
                    }.call(e, r, e, t)) || (t.exports = i))
                }
            }()
        },
        79746: function(t) {
            function e(t, e) {
                if (!t) throw new Error(e || "Assertion failed")
            }
            t.exports = e, e.equal = function(t, e, r) {
                if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
            }
        },
        71210: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getDomainLocale = function(t, e, i, n) {
                var o = r(78875).normalizeLocalePath,
                    s = r(38748).detectDomainLocale,
                    a = e || o(t, i).detectedLocale,
                    h = s(n, void 0, a);
                if (h) {
                    var l = "http".concat(h.http ? "" : "s", "://"),
                        u = a === h.defaultLocale ? "" : "/".concat(a);
                    return "".concat(l).concat(h.domain).concat("").concat(u).concat(t)
                }
                return !1
            };
            ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        48418: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(94941).Z;
            r(45753).default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(92648).Z,
                o = r(17273).Z,
                s = n(r(67294)),
                a = r(76273),
                h = r(22725),
                l = r(63462),
                u = r(21018),
                c = r(57190),
                d = r(71210),
                f = r(98684),
                p = "undefined" !== typeof s.default.useTransition,
                m = {};

            function v(t, e, r, i) {
                if (t && a.isLocalURL(e)) {
                    t.prefetch(e, r, i).catch((function(t) {
                        0
                    }));
                    var n = i && "undefined" !== typeof i.locale ? i.locale : t && t.locale;
                    m[e + "%" + r + (n ? "%" + n : "")] = !0
                }
            }
            var g = s.default.forwardRef((function(t, e) {
                var r, n = t.href,
                    g = t.as,
                    y = t.children,
                    w = t.prefetch,
                    b = t.passHref,
                    A = t.replace,
                    M = t.soft,
                    E = t.shallow,
                    k = t.scroll,
                    x = t.locale,
                    C = t.onClick,
                    _ = t.onMouseEnter,
                    T = t.onTouchStart,
                    I = t.legacyBehavior,
                    P = void 0 === I ? !0 !== Boolean(!1) : I,
                    S = o(t, ["href", "as", "children", "prefetch", "passHref", "replace", "soft", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                r = y, !P || "string" !== typeof r && "number" !== typeof r || (r = s.default.createElement("a", null, r));
                var N = !1 !== w,
                    L = i(p ? s.default.useTransition() : [], 2)[1],
                    O = s.default.useContext(l.RouterContext),
                    R = s.default.useContext(u.AppRouterContext);
                R && (O = R);
                var B, D = s.default.useMemo((function() {
                        var t = i(a.resolveHref(O, n, !0), 2),
                            e = t[0],
                            r = t[1];
                        return {
                            href: e,
                            as: g ? a.resolveHref(O, g) : r || e
                        }
                    }), [O, n, g]),
                    z = D.href,
                    F = D.as,
                    U = s.default.useRef(z),
                    q = s.default.useRef(F);
                P && (B = s.default.Children.only(r));
                var H = P ? B && "object" === typeof B && B.ref : e,
                    j = i(c.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    G = j[0],
                    K = j[1],
                    V = j[2],
                    J = s.default.useCallback((function(t) {
                        q.current === F && U.current === z || (V(), q.current = F, U.current = z), G(t), H && ("function" === typeof H ? H(t) : "object" === typeof H && (H.current = t))
                    }), [F, H, z, V, G]);
                s.default.useEffect((function() {
                    var t = K && N && a.isLocalURL(z),
                        e = "undefined" !== typeof x ? x : O && O.locale,
                        r = m[z + "%" + F + (e ? "%" + e : "")];
                    t && !r && v(O, z, F, {
                        locale: e
                    })
                }), [F, z, K, x, N, O]);
                var Q = {
                    ref: J,
                    onClick: function(t) {
                        P || "function" !== typeof C || C(t), P && B.props && "function" === typeof B.props.onClick && B.props.onClick(t), t.defaultPrevented || function(t, e, r, i, n, o, s, h, l, u) {
                            if ("A" !== t.currentTarget.nodeName.toUpperCase() || ! function(t) {
                                    var e = t.currentTarget.target;
                                    return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                }(t) && a.isLocalURL(r)) {
                                t.preventDefault();
                                var c = function() {
                                    "softPush" in e && "softReplace" in e ? e[o ? n ? "softReplace" : "softPush" : n ? "replace" : "push"](r) : e[n ? "replace" : "push"](r, i, {
                                        shallow: s,
                                        locale: l,
                                        scroll: h
                                    })
                                };
                                u ? u(c) : c()
                            }
                        }(t, O, z, F, A, M, E, k, x, R ? L : void 0)
                    },
                    onMouseEnter: function(t) {
                        P || "function" !== typeof _ || _(t), P && B.props && "function" === typeof B.props.onMouseEnter && B.props.onMouseEnter(t), a.isLocalURL(z) && v(O, z, F, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(t) {
                        P || "function" !== typeof T || T(t), P && B.props && "function" === typeof B.props.onTouchStart && B.props.onTouchStart(t), a.isLocalURL(z) && v(O, z, F, {
                            priority: !0
                        })
                    }
                };
                if (!P || b || "a" === B.type && !("href" in B.props)) {
                    var Z = "undefined" !== typeof x ? x : O && O.locale,
                        Y = O && O.isLocaleDomain && d.getDomainLocale(F, Z, O.locales, O.domainLocales);
                    Q.href = Y || f.addBasePath(h.addLocale(F, Z, O && O.defaultLocale))
                }
                return P ? s.default.cloneElement(B, Q) : s.default.createElement("a", Object.assign({}, S, Q), r)
            }));
            e.default = g, ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        78875: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.normalizeLocalePath = void 0;
            e.normalizeLocalePath = function(t, e) {
                return r(94317).normalizeLocalePath(t, e)
            }, ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        57190: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(94941).Z;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useIntersection = function(t) {
                var e = t.rootRef,
                    r = t.rootMargin,
                    l = t.disabled || !s,
                    u = n.useRef(),
                    c = i(n.useState(!1), 2),
                    d = c[0],
                    f = c[1],
                    p = i(n.useState(null), 2),
                    m = p[0],
                    v = p[1];
                n.useEffect((function() {
                    if (s) {
                        if (u.current && (u.current(), u.current = void 0), l || d) return;
                        return m && m.tagName && (u.current = function(t, e, r) {
                                var i = function(t) {
                                        var e, r = {
                                                root: t.root || null,
                                                margin: t.rootMargin || ""
                                            },
                                            i = h.find((function(t) {
                                                return t.root === r.root && t.margin === r.margin
                                            }));
                                        if (i && (e = a.get(i))) return e;
                                        var n = new Map,
                                            o = new IntersectionObserver((function(t) {
                                                t.forEach((function(t) {
                                                    var e = n.get(t.target),
                                                        r = t.isIntersecting || t.intersectionRatio > 0;
                                                    e && r && e(r)
                                                }))
                                            }), t);
                                        return e = {
                                            id: r,
                                            observer: o,
                                            elements: n
                                        }, h.push(r), a.set(r, e), e
                                    }(r),
                                    n = i.id,
                                    o = i.observer,
                                    s = i.elements;
                                return s.set(t, e), o.observe(t),
                                    function() {
                                        if (s.delete(t), o.unobserve(t), 0 === s.size) {
                                            o.disconnect(), a.delete(n);
                                            var e = h.findIndex((function(t) {
                                                return t.root === n.root && t.margin === n.margin
                                            }));
                                            e > -1 && h.splice(e, 1)
                                        }
                                    }
                            }(m, (function(t) {
                                return t && f(t)
                            }), {
                                root: null == e ? void 0 : e.current,
                                rootMargin: r
                            })),
                            function() {
                                null == u.current || u.current(), u.current = void 0
                            }
                    }
                    if (!d) {
                        var t = o.requestIdleCallback((function() {
                            return f(!0)
                        }));
                        return function() {
                            return o.cancelIdleCallback(t)
                        }
                    }
                }), [m, l, r, e, d]);
                var g = n.useCallback((function() {
                    f(!1)
                }), []);
                return [v, d, g]
            };
            var n = r(67294),
                o = r(9311),
                s = "function" === typeof IntersectionObserver;
            var a = new Map,
                h = [];
            ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && "undefined" === typeof e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        21018: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GlobalLayoutRouterContext = e.LayoutRouterContext = e.AppRouterContext = void 0;
            var i = (0, r(92648).Z)(r(67294)),
                n = i.default.createContext(null);
            e.AppRouterContext = n;
            var o = i.default.createContext(null);
            e.LayoutRouterContext = o;
            var s = i.default.createContext(null);
            e.GlobalLayoutRouterContext = s
        },
        9008: function(t, e, r) {
            t.exports = r(5443)
        },
        41664: function(t, e, r) {
            t.exports = r(48418)
        },
        56421: function(t, e, r) {
            "use strict";
            var i, n = r(96425),
                o = (i = n) && i.__esModule ? i : {
                    default: i
                };
            var s = {
                tags: function(t) {
                    var e = t.id,
                        r = t.events,
                        i = t.dataLayer,
                        n = t.dataLayerName,
                        s = t.preview,
                        a = "&gtm_auth=" + t.auth,
                        h = "&gtm_preview=" + s;
                    return e || (0, o.default)("GTM Id is required"), {
                        iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + e + a + h + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
                        script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(r).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + a + h + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + n + "','" + e + "');",
                        dataLayerVar: this.dataLayer(i, n)
                    }
                },
                dataLayer: function(t, e) {
                    return "\n      window." + e + " = window." + e + " || [];\n      window." + e + ".push(" + JSON.stringify(t) + ")"
                }
            };
            t.exports = s
        },
        58676: function(t, e, r) {
            "use strict";
            var i, n = r(56421),
                o = (i = n) && i.__esModule ? i : {
                    default: i
                };
            var s = {
                dataScript: function(t) {
                    var e = document.createElement("script");
                    return e.innerHTML = t, e
                },
                gtm: function(t) {
                    var e = o.default.tags(t);
                    return {
                        noScript: function() {
                            var t = document.createElement("noscript");
                            return t.innerHTML = e.iframe, t
                        },
                        script: function() {
                            var t = document.createElement("script");
                            return t.innerHTML = e.script, t
                        },
                        dataScript: this.dataScript(e.dataLayerVar)
                    }
                },
                initialize: function(t) {
                    var e = t.gtmId,
                        r = t.events,
                        i = void 0 === r ? {} : r,
                        n = t.dataLayer,
                        o = t.dataLayerName,
                        s = void 0 === o ? "dataLayer" : o,
                        a = t.auth,
                        h = void 0 === a ? "" : a,
                        l = t.preview,
                        u = void 0 === l ? "" : l,
                        c = this.gtm({
                            id: e,
                            events: i,
                            dataLayer: n || void 0,
                            dataLayerName: s,
                            auth: h,
                            preview: u
                        });
                    n && document.head.appendChild(c.dataScript), document.head.insertBefore(c.script(), document.head.childNodes[0]), document.body.insertBefore(c.noScript(), document.body.childNodes[0])
                },
                dataLayer: function(t) {
                    var e = t.dataLayer,
                        r = t.dataLayerName,
                        i = void 0 === r ? "dataLayer" : r;
                    if (window[i]) return window[i].push(e);
                    var n = o.default.dataLayer(e, i),
                        s = this.dataScript(n);
                    document.head.insertBefore(s, document.head.childNodes[0])
                }
            };
            t.exports = s
        },
        1785: function(t, e, r) {
            "use strict";
            var i, n = r(58676),
                o = (i = n) && i.__esModule ? i : {
                    default: i
                };
            t.exports = o.default
        },
        96425: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t) {
                console.warn("[react-gtm]", t)
            }
        },
        72132: function(t, e, r) {
            "use strict";
            r.d(e, {
                Am: function() {
                    return G
                },
                Ix: function() {
                    return N
                }
            });
            var i = r(67294),
                n = r(86010),
                o = r(73935);

            function s() {
                return s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                    }
                    return t
                }, s.apply(this, arguments)
            }

            function a(t, e) {
                if (null == t) return {};
                var r, i, n = {},
                    o = Object.keys(t);
                for (i = 0; i < o.length; i++) r = o[i], e.indexOf(r) >= 0 || (n[r] = t[r]);
                return n
            }

            function h(t) {
                return "number" === typeof t && !isNaN(t)
            }

            function l(t) {
                return "boolean" === typeof t
            }

            function u(t) {
                return "string" === typeof t
            }

            function c(t) {
                return "function" === typeof t
            }

            function d(t) {
                return u(t) || c(t) ? t : null
            }

            function f(t) {
                return 0 === t || t
            }
            var p = !("undefined" === typeof window || !window.document || !window.document.createElement);

            function m(t) {
                return (0, i.isValidElement)(t) || u(t) || c(t) || h(t)
            }
            var v = {
                    TOP_LEFT: "top-left",
                    TOP_RIGHT: "top-right",
                    TOP_CENTER: "top-center",
                    BOTTOM_LEFT: "bottom-left",
                    BOTTOM_RIGHT: "bottom-right",
                    BOTTOM_CENTER: "bottom-center"
                },
                g = {
                    INFO: "info",
                    SUCCESS: "success",
                    WARNING: "warning",
                    ERROR: "error",
                    DEFAULT: "default"
                };

            function y(t) {
                var e = t.enter,
                    r = t.exit,
                    n = t.appendPosition,
                    o = void 0 !== n && n,
                    s = t.collapse,
                    a = void 0 === s || s,
                    h = t.collapseDuration,
                    l = void 0 === h ? 300 : h;
                return function(t) {
                    var n = t.children,
                        s = t.position,
                        h = t.preventExitTransition,
                        u = t.done,
                        c = t.nodeRef,
                        d = t.isIn,
                        f = o ? e + "--" + s : e,
                        p = o ? r + "--" + s : r,
                        m = (0, i.useRef)(),
                        v = (0, i.useRef)(0);

                    function g(t) {
                        if (t.target === c.current) {
                            var e = c.current;
                            e.dispatchEvent(new Event("d")), e.removeEventListener("animationend", g), e.removeEventListener("animationcancel", g), 0 === v.current && (e.className = m.current)
                        }
                    }

                    function y() {
                        var t = c.current;
                        t.removeEventListener("animationend", y), a ? function(t, e, r) {
                            void 0 === r && (r = 300);
                            var i = t.scrollHeight,
                                n = t.style;
                            requestAnimationFrame((function() {
                                n.minHeight = "initial", n.height = i + "px", n.transition = "all " + r + "ms", requestAnimationFrame((function() {
                                    n.height = "0", n.padding = "0", n.margin = "0", setTimeout(e, r)
                                }))
                            }))
                        }(t, u, l) : u()
                    }
                    return (0, i.useLayoutEffect)((function() {
                        ! function() {
                            var t = c.current;
                            m.current = t.className, t.className += " " + f, t.addEventListener("animationend", g), t.addEventListener("animationcancel", g)
                        }()
                    }), []), (0, i.useEffect)((function() {
                        d || (h ? y() : function() {
                            v.current = 1;
                            var t = c.current;
                            t.className += " " + p, t.addEventListener("animationend", y)
                        }())
                    }), [d]), i.createElement(i.Fragment, null, n)
                }
            }
            var w = {
                    list: new Map,
                    emitQueue: new Map,
                    on: function(t, e) {
                        return this.list.has(t) || this.list.set(t, []), this.list.get(t).push(e), this
                    },
                    off: function(t, e) {
                        if (e) {
                            var r = this.list.get(t).filter((function(t) {
                                return t !== e
                            }));
                            return this.list.set(t, r), this
                        }
                        return this.list.delete(t), this
                    },
                    cancelEmit: function(t) {
                        var e = this.emitQueue.get(t);
                        return e && (e.forEach(clearTimeout), this.emitQueue.delete(t)), this
                    },
                    emit: function(t) {
                        for (var e = this, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
                        this.list.has(t) && this.list.get(t).forEach((function(r) {
                            var n = setTimeout((function() {
                                r.apply(void 0, i)
                            }), 0);
                            e.emitQueue.has(t) || e.emitQueue.set(t, []), e.emitQueue.get(t).push(n)
                        }))
                    }
                },
                b = ["delay", "staleId"];

            function A(t) {
                var e = (0, i.useReducer)((function(t) {
                        return t + 1
                    }), 0)[1],
                    r = (0, i.useState)([]),
                    n = r[0],
                    o = r[1],
                    s = (0, i.useRef)(null),
                    p = (0, i.useRef)(new Map).current,
                    v = function(t) {
                        return -1 !== n.indexOf(t)
                    },
                    g = (0, i.useRef)({
                        toastKey: 1,
                        displayedToast: 0,
                        count: 0,
                        queue: [],
                        props: t,
                        containerId: null,
                        isToastActive: v,
                        getToast: function(t) {
                            return p.get(t)
                        }
                    }).current;

                function y(t) {
                    var e = t.containerId;
                    !g.props.limit || e && g.containerId !== e || (g.count -= g.queue.length, g.queue = [])
                }

                function A(t) {
                    o((function(e) {
                        return f(t) ? e.filter((function(e) {
                            return e !== t
                        })) : []
                    }))
                }

                function M() {
                    var t = g.queue.shift();
                    k(t.toastContent, t.toastProps, t.staleId)
                }

                function E(t, r) {
                    var n = r.delay,
                        o = r.staleId,
                        v = a(r, b);
                    if (m(t) && ! function(t) {
                            return !s.current || g.props.enableMultiContainer && t.containerId !== g.props.containerId || p.has(t.toastId) && null == t.updateId
                        }(v)) {
                        var y = v.toastId,
                            w = v.updateId,
                            E = v.data,
                            x = g.props,
                            C = function() {
                                return A(y)
                            },
                            _ = null == w;
                        _ && g.count++;
                        var T, I, P = {
                            toastId: y,
                            updateId: w,
                            isLoading: v.isLoading,
                            theme: v.theme || x.theme,
                            icon: null != v.icon ? v.icon : x.icon,
                            isIn: !1,
                            key: v.key || g.toastKey++,
                            type: v.type,
                            closeToast: C,
                            closeButton: v.closeButton,
                            rtl: x.rtl,
                            position: v.position || x.position,
                            transition: v.transition || x.transition,
                            className: d(v.className || x.toastClassName),
                            bodyClassName: d(v.bodyClassName || x.bodyClassName),
                            style: v.style || x.toastStyle,
                            bodyStyle: v.bodyStyle || x.bodyStyle,
                            onClick: v.onClick || x.onClick,
                            pauseOnHover: l(v.pauseOnHover) ? v.pauseOnHover : x.pauseOnHover,
                            pauseOnFocusLoss: l(v.pauseOnFocusLoss) ? v.pauseOnFocusLoss : x.pauseOnFocusLoss,
                            draggable: l(v.draggable) ? v.draggable : x.draggable,
                            draggablePercent: v.draggablePercent || x.draggablePercent,
                            draggableDirection: v.draggableDirection || x.draggableDirection,
                            closeOnClick: l(v.closeOnClick) ? v.closeOnClick : x.closeOnClick,
                            progressClassName: d(v.progressClassName || x.progressClassName),
                            progressStyle: v.progressStyle || x.progressStyle,
                            autoClose: !v.isLoading && (T = v.autoClose, I = x.autoClose, !1 === T || h(T) && T > 0 ? T : I),
                            hideProgressBar: l(v.hideProgressBar) ? v.hideProgressBar : x.hideProgressBar,
                            progress: v.progress,
                            role: v.role || x.role,
                            deleteToast: function() {
                                p.delete(y);
                                var t = g.queue.length;
                                if (g.count = f(y) ? g.count - 1 : g.count - g.displayedToast, g.count < 0 && (g.count = 0), t > 0) {
                                    var r = f(y) ? 1 : g.props.limit;
                                    if (1 === t || 1 === r) g.displayedToast++, M();
                                    else {
                                        var i = r > t ? t : r;
                                        g.displayedToast = i;
                                        for (var n = 0; n < i; n++) M()
                                    }
                                } else e()
                            }
                        };
                        c(v.onOpen) && (P.onOpen = v.onOpen), c(v.onClose) && (P.onClose = v.onClose), P.closeButton = x.closeButton, !1 === v.closeButton || m(v.closeButton) ? P.closeButton = v.closeButton : !0 === v.closeButton && (P.closeButton = !m(x.closeButton) || x.closeButton);
                        var S = t;
                        (0, i.isValidElement)(t) && !u(t.type) ? S = (0, i.cloneElement)(t, {
                            closeToast: C,
                            toastProps: P,
                            data: E
                        }) : c(t) && (S = t({
                            closeToast: C,
                            toastProps: P,
                            data: E
                        })), x.limit && x.limit > 0 && g.count > x.limit && _ ? g.queue.push({
                            toastContent: S,
                            toastProps: P,
                            staleId: o
                        }) : h(n) && n > 0 ? setTimeout((function() {
                            k(S, P, o)
                        }), n) : k(S, P, o)
                    }
                }

                function k(t, e, r) {
                    var i = e.toastId;
                    r && p.delete(r), p.set(i, {
                        content: t,
                        props: e
                    }), o((function(t) {
                        return [].concat(t, [i]).filter((function(t) {
                            return t !== r
                        }))
                    }))
                }
                return (0, i.useEffect)((function() {
                    return g.containerId = t.containerId, w.cancelEmit(3).on(0, E).on(1, (function(t) {
                            return s.current && A(t)
                        })).on(5, y).emit(2, g),
                        function() {
                            return w.emit(3, g)
                        }
                }), []), (0, i.useEffect)((function() {
                    g.isToastActive = v, g.displayedToast = n.length, w.emit(4, n.length, t.containerId)
                }), [n]), (0, i.useEffect)((function() {
                    g.props = t
                })), {
                    getToastToRender: function(e) {
                        var r = new Map,
                            i = Array.from(p.values());
                        return t.newestOnTop && i.reverse(), i.forEach((function(t) {
                            var e = t.props.position;
                            r.has(e) || r.set(e, []), r.get(e).push(t)
                        })), Array.from(r, (function(t) {
                            return e(t[0], t[1])
                        }))
                    },
                    containerRef: s,
                    isToastActive: v
                }
            }

            function M(t) {
                return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
            }

            function E(t) {
                return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY
            }

            function k(t) {
                var e = (0, i.useState)(!1),
                    r = e[0],
                    n = e[1],
                    o = (0, i.useState)(!1),
                    s = o[0],
                    a = o[1],
                    h = (0, i.useRef)(null),
                    l = (0, i.useRef)({
                        start: 0,
                        x: 0,
                        y: 0,
                        delta: 0,
                        removalDistance: 0,
                        canCloseOnClick: !0,
                        canDrag: !1,
                        boundingRect: null,
                        didMove: !1
                    }).current,
                    u = (0, i.useRef)(t),
                    d = t.autoClose,
                    f = t.pauseOnHover,
                    p = t.closeToast,
                    m = t.onClick,
                    v = t.closeOnClick;

                function g(e) {
                    if (t.draggable) {
                        l.didMove = !1, document.addEventListener("mousemove", A), document.addEventListener("mouseup", k), document.addEventListener("touchmove", A), document.addEventListener("touchend", k);
                        var r = h.current;
                        l.canCloseOnClick = !0, l.canDrag = !0, l.boundingRect = r.getBoundingClientRect(), r.style.transition = "", l.x = M(e.nativeEvent), l.y = E(e.nativeEvent), "x" === t.draggableDirection ? (l.start = l.x, l.removalDistance = r.offsetWidth * (t.draggablePercent / 100)) : (l.start = l.y, l.removalDistance = r.offsetHeight * (80 === t.draggablePercent ? 1.5 * t.draggablePercent : t.draggablePercent / 100))
                    }
                }

                function y() {
                    if (l.boundingRect) {
                        var e = l.boundingRect,
                            r = e.top,
                            i = e.bottom,
                            n = e.left,
                            o = e.right;
                        t.pauseOnHover && l.x >= n && l.x <= o && l.y >= r && l.y <= i ? b() : w()
                    }
                }

                function w() {
                    n(!0)
                }

                function b() {
                    n(!1)
                }

                function A(e) {
                    var i = h.current;
                    l.canDrag && i && (l.didMove = !0, r && b(), l.x = M(e), l.y = E(e), "x" === t.draggableDirection ? l.delta = l.x - l.start : l.delta = l.y - l.start, l.start !== l.x && (l.canCloseOnClick = !1), i.style.transform = "translate" + t.draggableDirection + "(" + l.delta + "px)", i.style.opacity = "" + (1 - Math.abs(l.delta / l.removalDistance)))
                }

                function k() {
                    document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", k), document.removeEventListener("touchmove", A), document.removeEventListener("touchend", k);
                    var e = h.current;
                    if (l.canDrag && l.didMove && e) {
                        if (l.canDrag = !1, Math.abs(l.delta) > l.removalDistance) return a(!0), void t.closeToast();
                        e.style.transition = "transform 0.2s, opacity 0.2s", e.style.transform = "translate" + t.draggableDirection + "(0)", e.style.opacity = "1"
                    }
                }(0, i.useEffect)((function() {
                    u.current = t
                })), (0, i.useEffect)((function() {
                    return h.current && h.current.addEventListener("d", w, {
                            once: !0
                        }), c(t.onOpen) && t.onOpen((0, i.isValidElement)(t.children) && t.children.props),
                        function() {
                            var t = u.current;
                            c(t.onClose) && t.onClose((0, i.isValidElement)(t.children) && t.children.props)
                        }
                }), []), (0, i.useEffect)((function() {
                    return t.pauseOnFocusLoss && function() {
                            document.hasFocus() || b();
                            window.addEventListener("focus", w), window.addEventListener("blur", b)
                        }(),
                        function() {
                            t.pauseOnFocusLoss && (window.removeEventListener("focus", w), window.removeEventListener("blur", b))
                        }
                }), [t.pauseOnFocusLoss]);
                var x = {
                    onMouseDown: g,
                    onTouchStart: g,
                    onMouseUp: y,
                    onTouchEnd: y
                };
                return d && f && (x.onMouseEnter = b, x.onMouseLeave = w), v && (x.onClick = function(t) {
                    m && m(t), l.canCloseOnClick && p()
                }), {
                    playToast: w,
                    pauseToast: b,
                    isRunning: r,
                    preventExitTransition: s,
                    toastRef: h,
                    eventHandlers: x
                }
            }

            function x(t) {
                var e = t.closeToast,
                    r = t.theme,
                    n = t.ariaLabel,
                    o = void 0 === n ? "close" : n;
                return (0, i.createElement)("button", {
                    className: "Toastify__close-button Toastify__close-button--" + r,
                    type: "button",
                    onClick: function(t) {
                        t.stopPropagation(), e(t)
                    },
                    "aria-label": o
                }, (0, i.createElement)("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 14 16"
                }, (0, i.createElement)("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
                })))
            }

            function C(t) {
                var e, r, o = t.delay,
                    a = t.isRunning,
                    h = t.closeToast,
                    l = t.type,
                    u = t.hide,
                    d = t.className,
                    f = t.style,
                    p = t.controlledProgress,
                    m = t.progress,
                    v = t.rtl,
                    g = t.isIn,
                    y = t.theme,
                    w = s({}, f, {
                        animationDuration: o + "ms",
                        animationPlayState: a ? "running" : "paused",
                        opacity: u ? 0 : 1
                    });
                p && (w.transform = "scaleX(" + m + ")");
                var b = (0, n.Z)("Toastify__progress-bar", p ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--" + y, "Toastify__progress-bar--" + l, ((e = {})["Toastify__progress-bar--rtl"] = v, e)),
                    A = c(d) ? d({
                        rtl: v,
                        type: l,
                        defaultClassName: b
                    }) : (0, n.Z)(b, d),
                    M = ((r = {})[p && m >= 1 ? "onTransitionEnd" : "onAnimationEnd"] = p && m < 1 ? null : function() {
                        g && h()
                    }, r);
                return (0, i.createElement)("div", Object.assign({
                    role: "progressbar",
                    "aria-hidden": u ? "true" : "false",
                    "aria-label": "notification timer",
                    className: A,
                    style: w
                }, M))
            }
            C.defaultProps = {
                type: g.DEFAULT,
                hide: !1
            };
            var _ = ["theme", "type"],
                T = function(t) {
                    var e = t.theme,
                        r = t.type,
                        n = a(t, _);
                    return (0, i.createElement)("svg", Object.assign({
                        viewBox: "0 0 24 24",
                        width: "100%",
                        height: "100%",
                        fill: "colored" === e ? "currentColor" : "var(--toastify-icon-color-" + r + ")"
                    }, n))
                };
            var I = {
                    info: function(t) {
                        return (0, i.createElement)(T, Object.assign({}, t), (0, i.createElement)("path", {
                            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
                        }))
                    },
                    warning: function(t) {
                        return (0, i.createElement)(T, Object.assign({}, t), (0, i.createElement)("path", {
                            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
                        }))
                    },
                    success: function(t) {
                        return (0, i.createElement)(T, Object.assign({}, t), (0, i.createElement)("path", {
                            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
                        }))
                    },
                    error: function(t) {
                        return (0, i.createElement)(T, Object.assign({}, t), (0, i.createElement)("path", {
                            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
                        }))
                    },
                    spinner: function() {
                        return (0, i.createElement)("div", {
                            className: "Toastify__spinner"
                        })
                    }
                },
                P = function(t) {
                    var e, r, o = k(t),
                        s = o.isRunning,
                        a = o.preventExitTransition,
                        h = o.toastRef,
                        l = o.eventHandlers,
                        d = t.closeButton,
                        f = t.children,
                        p = t.autoClose,
                        m = t.onClick,
                        v = t.type,
                        g = t.hideProgressBar,
                        y = t.closeToast,
                        w = t.transition,
                        b = t.position,
                        A = t.className,
                        M = t.style,
                        E = t.bodyClassName,
                        x = t.bodyStyle,
                        _ = t.progressClassName,
                        T = t.progressStyle,
                        P = t.updateId,
                        S = t.role,
                        N = t.progress,
                        L = t.rtl,
                        O = t.toastId,
                        R = t.deleteToast,
                        B = t.isIn,
                        D = t.isLoading,
                        z = t.icon,
                        F = t.theme,
                        U = (0, n.Z)("Toastify__toast", "Toastify__toast-theme--" + F, "Toastify__toast--" + v, ((e = {})["Toastify__toast--rtl"] = L, e)),
                        q = c(A) ? A({
                            rtl: L,
                            position: b,
                            type: v,
                            defaultClassName: U
                        }) : (0, n.Z)(U, A),
                        H = !!N,
                        j = I[v],
                        G = {
                            theme: F,
                            type: v
                        },
                        K = j && j(G);
                    return !1 === z ? K = void 0 : c(z) ? K = z(G) : (0, i.isValidElement)(z) ? K = (0, i.cloneElement)(z, G) : u(z) ? K = z : D && (K = I.spinner()), (0, i.createElement)(w, {
                        isIn: B,
                        done: R,
                        position: b,
                        preventExitTransition: a,
                        nodeRef: h
                    }, (0, i.createElement)("div", Object.assign({
                        id: O,
                        onClick: m,
                        className: q
                    }, l, {
                        style: M,
                        ref: h
                    }), (0, i.createElement)("div", Object.assign({}, B && {
                        role: S
                    }, {
                        className: c(E) ? E({
                            type: v
                        }) : (0, n.Z)("Toastify__toast-body", E),
                        style: x
                    }), K && (0, i.createElement)("div", {
                        className: (0, n.Z)("Toastify__toast-icon", (r = {}, r["Toastify--animate-icon Toastify__zoom-enter"] = !D, r))
                    }, K), (0, i.createElement)("div", null, f)), function(t) {
                        if (t) {
                            var e = {
                                closeToast: y,
                                type: v,
                                theme: F
                            };
                            return c(t) ? t(e) : (0, i.isValidElement)(t) ? (0, i.cloneElement)(t, e) : void 0
                        }
                    }(d), (p || H) && (0, i.createElement)(C, Object.assign({}, P && !H ? {
                        key: "pb-" + P
                    } : {}, {
                        rtl: L,
                        theme: F,
                        delay: p,
                        isRunning: s,
                        isIn: B,
                        closeToast: y,
                        hide: g,
                        type: v,
                        style: T,
                        className: _,
                        controlledProgress: H,
                        progress: N
                    }))))
                },
                S = y({
                    enter: "Toastify--animate Toastify__bounce-enter",
                    exit: "Toastify--animate Toastify__bounce-exit",
                    appendPosition: !0
                }),
                N = function(t) {
                    var e = A(t),
                        r = e.getToastToRender,
                        o = e.containerRef,
                        a = e.isToastActive,
                        h = t.className,
                        l = t.style,
                        u = t.rtl,
                        f = t.containerId;

                    function p(t) {
                        var e, r = (0, n.Z)("Toastify__toast-container", "Toastify__toast-container--" + t, ((e = {})["Toastify__toast-container--rtl"] = u, e));
                        return c(h) ? h({
                            position: t,
                            rtl: u,
                            defaultClassName: r
                        }) : (0, n.Z)(r, d(h))
                    }
                    return (0, i.createElement)("div", {
                        ref: o,
                        className: "Toastify",
                        id: f
                    }, r((function(t, e) {
                        var r = e.length ? s({}, l) : s({}, l, {
                            pointerEvents: "none"
                        });
                        return (0, i.createElement)("div", {
                            className: p(t),
                            style: r,
                            key: "container-" + t
                        }, e.map((function(t) {
                            var e = t.content,
                                r = t.props;
                            return (0, i.createElement)(P, Object.assign({}, r, {
                                isIn: a(r.toastId),
                                key: "toast-" + r.key,
                                closeButton: !0 === r.closeButton ? x : r.closeButton
                            }), e)
                        })))
                    })))
                };
            N.defaultProps = {
                position: v.TOP_RIGHT,
                transition: S,
                rtl: !1,
                autoClose: 5e3,
                hideProgressBar: !1,
                closeButton: x,
                pauseOnHover: !0,
                pauseOnFocusLoss: !0,
                closeOnClick: !0,
                newestOnTop: !1,
                draggable: !0,
                draggablePercent: 80,
                draggableDirection: "x",
                role: "alert",
                theme: "light"
            };
            var L, O, R, B = new Map,
                D = [],
                z = !1;

            function F() {
                return Math.random().toString(36).substring(2, 9)
            }

            function U(t) {
                return t && (u(t.toastId) || h(t.toastId)) ? t.toastId : F()
            }

            function q(t, e) {
                return B.size > 0 ? w.emit(0, t, e) : (D.push({
                    content: t,
                    options: e
                }), z && p && (z = !1, O = document.createElement("div"), document.body.appendChild(O), (0, o.render)((0, i.createElement)(N, Object.assign({}, R)), O))), e.toastId
            }

            function H(t, e) {
                return s({}, e, {
                    type: e && e.type || t,
                    toastId: U(e)
                })
            }

            function j(t) {
                return function(e, r) {
                    return q(e, H(t, r))
                }
            }

            function G(t, e) {
                return q(t, H(g.DEFAULT, e))
            }
            G.loading = function(t, e) {
                return q(t, H(g.DEFAULT, s({
                    isLoading: !0,
                    autoClose: !1,
                    closeOnClick: !1,
                    closeButton: !1,
                    draggable: !1
                }, e)))
            }, G.promise = function(t, e, r) {
                var i, n = e.pending,
                    o = e.error,
                    a = e.success;
                n && (i = u(n) ? G.loading(n, r) : G.loading(n.render, s({}, r, n)));
                var h = {
                        isLoading: null,
                        autoClose: null,
                        closeOnClick: null,
                        closeButton: null,
                        draggable: null
                    },
                    l = function(t, e, n) {
                        if (null != e) {
                            var o = s({
                                    type: t
                                }, h, r, {
                                    data: n
                                }),
                                a = u(e) ? {
                                    render: e
                                } : e;
                            return i ? G.update(i, s({}, o, a)) : G(a.render, s({}, o, a)), n
                        }
                        G.dismiss(i)
                    },
                    d = c(t) ? t() : t;
                return d.then((function(t) {
                    return l("success", a, t)
                })).catch((function(t) {
                    return l("error", o, t)
                })), d
            }, G.success = j(g.SUCCESS), G.info = j(g.INFO), G.error = j(g.ERROR), G.warning = j(g.WARNING), G.warn = G.warning, G.dark = function(t, e) {
                return q(t, H(g.DEFAULT, s({
                    theme: "dark"
                }, e)))
            }, G.dismiss = function(t) {
                return w.emit(1, t)
            }, G.clearWaitingQueue = function(t) {
                return void 0 === t && (t = {}), w.emit(5, t)
            }, G.isActive = function(t) {
                var e = !1;
                return B.forEach((function(r) {
                    r.isToastActive && r.isToastActive(t) && (e = !0)
                })), e
            }, G.update = function(t, e) {
                void 0 === e && (e = {}), setTimeout((function() {
                    var r = function(t, e) {
                        var r = e.containerId,
                            i = B.get(r || L);
                        return i ? i.getToast(t) : null
                    }(t, e);
                    if (r) {
                        var i = r.props,
                            n = r.content,
                            o = s({}, i, e, {
                                toastId: e.toastId || t,
                                updateId: F()
                            });
                        o.toastId !== t && (o.staleId = t);
                        var a = o.render || n;
                        delete o.render, q(a, o)
                    }
                }), 0)
            }, G.done = function(t) {
                G.update(t, {
                    progress: 1
                })
            }, G.onChange = function(t) {
                return c(t) && w.on(4, t),
                    function() {
                        c(t) && w.off(4, t)
                    }
            }, G.configure = function(t) {
                void 0 === t && (t = {}), z = !0, R = t
            }, G.POSITION = v, G.TYPE = g, w.on(2, (function(t) {
                L = t.containerId || t, B.set(L, t), D.forEach((function(t) {
                    w.emit(0, t.content, t.options)
                })), D = []
            })).on(3, (function(t) {
                B.delete(t.containerId || t), 0 === B.size && w.off(0).off(1).off(5), p && O && document.body.removeChild(O)
            }))
        },
        80871: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return xr
                }
            });
            var i, n = r(67294),
                o = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                s = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            class a {
                constructor() {
                    i.set(this, void 0), o(this, i, new Map, "f")
                }
                addEventListener(t, e) {
                    var r;
                    this.removeEventListener(t, e), s(this, i, "f").get(t) || s(this, i, "f").set(t, []), null === (r = s(this, i, "f").get(t)) || void 0 === r || r.push(e)
                }
                dispatchEvent(t, e) {
                    var r;
                    null === (r = s(this, i, "f").get(t)) || void 0 === r || r.forEach((t => t(e)))
                }
                hasEventListener(t) {
                    return !!s(this, i, "f").get(t)
                }
                removeAllEventListeners(t) {
                    t ? s(this, i, "f").delete(t) : o(this, i, new Map, "f")
                }
                removeEventListener(t, e) {
                    const r = s(this, i, "f").get(t);
                    if (!r) return;
                    const n = r.length,
                        o = r.indexOf(e);
                    o < 0 || (1 === n ? s(this, i, "f").delete(t) : r.splice(o, 1))
                }
            }

            function h() {
                return "undefined" === typeof window || !window || "undefined" === typeof window.document || !window.document
            }

            function l(t, e) {
                return t === e || e instanceof Array && e.indexOf(t) > -1
            }

            function u(t, e, r = !0) {
                const i = void 0 !== e && r ? e % t.length : function(t) {
                    return Math.floor(Math.random() * t.length)
                }(t);
                return t[i]
            }

            function c(t, ...e) {
                for (const r of e) {
                    if (void 0 === r || null === r) continue;
                    if ("object" !== typeof r) {
                        t = r;
                        continue
                    }
                    const e = Array.isArray(r);
                    !e || "object" === typeof t && t && Array.isArray(t) ? e || "object" === typeof t && t && !Array.isArray(t) || (t = {}) : t = [];
                    for (const i in r) {
                        if ("__proto__" === i) continue;
                        const e = r[i],
                            n = "object" === typeof e,
                            o = t;
                        o[i] = n && Array.isArray(e) ? e.map((t => c(o[i], t))) : c(o[i], e)
                    }
                }
                return t
            }
            i = new WeakMap;
            class d {
                constructor(t, e) {
                    if ("number" !== typeof t && t) this.x = t.x, this.y = t.y;
                    else {
                        if (void 0 === t || void 0 === e) throw new Error("tsParticles - Vector not initialized correctly");
                        this.x = t, this.y = e
                    }
                }
                static get origin() {
                    return d.create(0, 0)
                }
                get angle() {
                    return Math.atan2(this.y, this.x)
                }
                set angle(t) {
                    this.updateFromAngle(t, this.length)
                }
                get length() {
                    return Math.sqrt(this.getLengthSq())
                }
                set length(t) {
                    this.updateFromAngle(this.angle, t)
                }
                static clone(t) {
                    return d.create(t.x, t.y)
                }
                static create(t, e) {
                    return new d(t, e)
                }
                add(t) {
                    return d.create(this.x + t.x, this.y + t.y)
                }
                addTo(t) {
                    this.x += t.x, this.y += t.y
                }
                copy() {
                    return d.clone(this)
                }
                distanceTo(t) {
                    return this.sub(t).length
                }
                distanceToSq(t) {
                    return this.sub(t).getLengthSq()
                }
                div(t) {
                    return d.create(this.x / t, this.y / t)
                }
                divTo(t) {
                    this.x /= t, this.y /= t
                }
                getLengthSq() {
                    return this.x ** 2 + this.y ** 2
                }
                manhattanDistanceTo(t) {
                    return Math.abs(t.x - this.x) + Math.abs(t.y - this.y)
                }
                mult(t) {
                    return d.create(this.x * t, this.y * t)
                }
                multTo(t) {
                    this.x *= t, this.y *= t
                }
                rotate(t) {
                    return d.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t))
                }
                setTo(t) {
                    this.x = t.x, this.y = t.y
                }
                sub(t) {
                    return d.create(this.x - t.x, this.y - t.y)
                }
                subFrom(t) {
                    this.x -= t.x, this.y -= t.y
                }
                updateFromAngle(t, e) {
                    this.x = Math.cos(t) * e, this.y = Math.sin(t) * e
                }
            }

            function f(t) {
                const e = v(t);
                let r = m(t);
                return e === r && (r = 0), Math.random() * (e - r) + r
            }

            function p(t) {
                return "number" === typeof t ? t : f(t)
            }

            function m(t) {
                return "number" === typeof t ? t : t.min
            }

            function v(t) {
                return "number" === typeof t ? t : t.max
            }

            function g(t, e) {
                if (t === e || void 0 === e && "number" === typeof t) return t;
                const r = m(t),
                    i = v(t);
                return void 0 !== e ? {
                    min: Math.min(r, e),
                    max: Math.max(i, e)
                } : g(r, i)
            }

            function y(t) {
                const e = t.random,
                    {
                        enable: r,
                        minimumValue: i
                    } = "boolean" === typeof e ? {
                        enable: e,
                        minimumValue: 0
                    } : e;
                return p(r ? g(t.value, i) : t.value)
            }

            function w(t, e) {
                return function(t, e) {
                    const r = t.x - e.x,
                        i = t.y - e.y;
                    return {
                        dx: r,
                        dy: i,
                        distance: Math.sqrt(r * r + i * i)
                    }
                }(t, e).distance
            }

            function b(t) {
                var e, r;
                return void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== (null === (r = t.position) || void 0 === r ? void 0 : r.y) ? {
                    x: t.position.x * t.size.width / 100,
                    y: t.position.y * t.size.height / 100
                } : void 0
            }

            function A(t) {
                var e, r, i, n;
                return {
                    x: null !== (r = null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== r ? r : Math.random() * t.size.width,
                    y: null !== (n = null === (i = t.position) || void 0 === i ? void 0 : i.y) && void 0 !== n ? n : Math.random() * t.size.height
                }
            }
            const M = "generated",
                E = "touchend",
                k = "mousemove",
                x = "mouseleave";

            function C(t, e, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function _(t) {
                if (t.startsWith("rgb")) {
                    const e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return e ? {
                        a: e.length > 4 ? parseFloat(e[5]) : 1,
                        b: parseInt(e[3], 10),
                        g: parseInt(e[2], 10),
                        r: parseInt(e[1], 10)
                    } : void 0
                }
                if (t.startsWith("hsl")) {
                    const e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return e ? function(t) {
                        const e = N(t);
                        return {
                            a: t.a,
                            b: e.b,
                            g: e.g,
                            r: e.r
                        }
                    }({
                        a: e.length > 4 ? parseFloat(e[5]) : 1,
                        h: parseInt(e[1], 10),
                        l: parseInt(e[3], 10),
                        s: parseInt(e[2], 10)
                    }) : void 0
                }
                if (t.startsWith("hsv")) {
                    const r = /hsva?\(\s*(\d+)\xb0\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                    return r ? (e = {
                        a: r.length > 4 ? parseFloat(r[5]) : 1,
                        h: parseInt(r[1], 10),
                        s: parseInt(r[2], 10),
                        v: parseInt(r[3], 10)
                    }, Object.assign({
                        a: e.a
                    }, L(e))) : void 0
                } {
                    const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
                        r = t.replace(e, ((t, e, r, i, n) => e + e + r + r + i + i + (void 0 !== n ? n + n : ""))),
                        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(r);
                    return i ? {
                        a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                        b: parseInt(i[3], 16),
                        g: parseInt(i[2], 16),
                        r: parseInt(i[1], 16)
                    } : void 0
                }
                var e
            }

            function T(t, e, r = !0) {
                var i, n, o;
                if (void 0 === t) return;
                const s = "string" === typeof t ? {
                    value: t
                } : t;
                if ("string" === typeof s.value) return I(s.value, e, r);
                if (s.value instanceof Array) return T({
                    value: u(s.value, e, r)
                });
                const a = s.value,
                    h = null !== (i = a.rgb) && void 0 !== i ? i : s.value;
                if (void 0 !== h.r) return {
                    r: p(h.r),
                    g: p(h.g),
                    b: p(h.b)
                };
                const l = null !== (n = a.hsl) && void 0 !== n ? n : s.value;
                if (void 0 !== l.h && void 0 !== l.l) return N({
                    h: p(l.h),
                    l: p(l.l),
                    s: p(l.s)
                });
                const c = null !== (o = a.hsv) && void 0 !== o ? o : s.value;
                if (void 0 !== c.h && void 0 !== c.v) {
                    return L({
                        h: p(c.h),
                        s: p(c.s),
                        v: p(c.v)
                    })
                }
            }

            function I(t, e, r = !0) {
                var i, n, o;
                if (void 0 === t) return;
                const s = "string" === typeof t ? {
                    value: t
                } : t;
                if ("string" === typeof s.value) return "random" === s.value ? O() : function(t) {
                    return _(t)
                }(s.value);
                if (s.value instanceof Array) return I({
                    value: u(s.value, e, r)
                });
                const a = s.value,
                    h = null !== (i = a.rgb) && void 0 !== i ? i : s.value;
                if (void 0 !== h.r) return h;
                const l = null !== (n = a.hsl) && void 0 !== n ? n : s.value;
                if (void 0 !== l.h && void 0 !== l.l) return N(l);
                const c = null !== (o = a.hsv) && void 0 !== o ? o : s.value;
                return void 0 !== c.h && void 0 !== c.v ? L(c) : void 0
            }

            function P(t, e, r = !0) {
                const i = T(t, e, r);
                return void 0 !== i ? S(i) : void 0
            }

            function S(t) {
                const e = t.r / 255,
                    r = t.g / 255,
                    i = t.b / 255,
                    n = Math.max(e, r, i),
                    o = Math.min(e, r, i),
                    s = {
                        h: 0,
                        l: (n + o) / 2,
                        s: 0
                    };
                return n !== o && (s.s = s.l < .5 ? (n - o) / (n + o) : (n - o) / (2 - n - o), s.h = e === n ? (r - i) / (n - o) : s.h = r === n ? 2 + (i - e) / (n - o) : 4 + (e - r) / (n - o)), s.l *= 100, s.s *= 100, s.h *= 60, s.h < 0 && (s.h += 360), s.h >= 360 && (s.h -= 360), s
            }

            function N(t) {
                const e = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    r = {
                        h: t.h / 360,
                        l: t.l / 100,
                        s: t.s / 100
                    };
                if (r.s) {
                    const t = r.l < .5 ? r.l * (1 + r.s) : r.l + r.s - r.l * r.s,
                        i = 2 * r.l - t;
                    e.r = C(i, t, r.h + 1 / 3), e.g = C(i, t, r.h), e.b = C(i, t, r.h - 1 / 3)
                } else e.b = r.l, e.g = r.l, e.r = r.l;
                return e.r = Math.floor(255 * e.r), e.g = Math.floor(255 * e.g), e.b = Math.floor(255 * e.b), e
            }

            function L(t) {
                const e = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    r = t.h / 60,
                    i = t.s / 100,
                    n = t.v / 100,
                    o = n * i,
                    s = o * (1 - Math.abs(r % 2 - 1));
                let a;
                if (r >= 0 && r <= 1 ? a = {
                        r: o,
                        g: s,
                        b: 0
                    } : r > 1 && r <= 2 ? a = {
                        r: s,
                        g: o,
                        b: 0
                    } : r > 2 && r <= 3 ? a = {
                        r: 0,
                        g: o,
                        b: s
                    } : r > 3 && r <= 4 ? a = {
                        r: 0,
                        g: s,
                        b: o
                    } : r > 4 && r <= 5 ? a = {
                        r: s,
                        g: 0,
                        b: o
                    } : r > 5 && r <= 6 && (a = {
                        r: o,
                        g: 0,
                        b: s
                    }), a) {
                    const t = n - o;
                    e.r = Math.floor(255 * (a.r + t)), e.g = Math.floor(255 * (a.g + t)), e.b = Math.floor(255 * (a.b + t))
                }
                return e
            }

            function O(t) {
                const e = null !== t && void 0 !== t ? t : 0;
                return {
                    b: Math.floor(f(g(e, 256))),
                    g: Math.floor(f(g(e, 256))),
                    r: Math.floor(f(g(e, 256)))
                }
            }

            function R(t, e) {
                return `rgba(${t.r}, ${t.g}, ${t.b}, ${null!==e&&void 0!==e?e:1})`
            }

            function B(t, e) {
                return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null!==e&&void 0!==e?e:1})`
            }

            function D(t) {
                return void 0 !== t ? {
                    h: t.h.value,
                    s: t.s.value,
                    l: t.l.value
                } : void 0
            }

            function z(t, e) {
                t.clearRect(0, 0, e.width, e.height)
            }
            var F, U = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                q = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };

            function H(t, e, r) {
                var i;
                const n = e[r];
                void 0 !== n && (t[r] = (null !== (i = t[r]) && void 0 !== i ? i : 1) * n)
            }
            class j {
                constructor(t) {
                    this.container = t, F.set(this, void 0), this.size = {
                        height: 0,
                        width: 0
                    }, U(this, F, null, "f"), this.generatedCanvas = !1
                }
                clear() {
                    const t = this.container.actualOptions,
                        e = t.particles.move.trail;
                    t.backgroundMask.enable ? this.paint() : e.enable && e.length > 0 && this.trailFillColor ? this.paintBase(R(this.trailFillColor, 1 / e.length)) : this.draw((t => {
                        z(t, this.size)
                    }))
                }
                destroy() {
                    var t;
                    this.generatedCanvas ? null === (t = this.element) || void 0 === t || t.remove() : this.resetOriginalStyle(), this.draw((t => {
                        z(t, this.size)
                    }))
                }
                draw(t) {
                    if (q(this, F, "f")) return t(q(this, F, "f"))
                }
                drawParticle(t, e) {
                    var r, i, n, o, s, a;
                    if (t.spawning || t.destroyed) return;
                    const h = t.getRadius();
                    if (h <= 0) return;
                    const l = t.getFillColor(),
                        u = null !== (r = t.getStrokeColor()) && void 0 !== r ? r : l;
                    if (!l && !u) return;
                    let [c, d] = this.getPluginParticleColors(t);
                    c && d || (c || (c = l || void 0), d || (d = u || void 0));
                    const f = this.container.actualOptions,
                        p = t.options.zIndex,
                        m = (1 - t.zIndexFactor) ** p.opacityRate,
                        v = null !== (o = null !== (i = t.bubble.opacity) && void 0 !== i ? i : null === (n = t.opacity) || void 0 === n ? void 0 : n.value) && void 0 !== o ? o : 1,
                        g = null !== (a = null === (s = t.stroke) || void 0 === s ? void 0 : s.opacity) && void 0 !== a ? a : v,
                        y = v * m,
                        w = g * m,
                        b = {
                            fill: c ? B(c, y) : void 0
                        };
                    b.stroke = d ? B(d, w) : b.fill, this.draw((r => {
                        const i = {},
                            n = (1 - t.zIndexFactor) ** p.sizeRate,
                            o = this.container;
                        for (const e of o.particles.updaters) {
                            if (e.beforeDraw && e.beforeDraw(t), e.getColorStyles) {
                                const {
                                    fill: i,
                                    stroke: n
                                } = e.getColorStyles(t, r, h, y);
                                i && (b.fill = i), n && (b.stroke = n)
                            }
                            if (e.getTransformValues) {
                                const r = e.getTransformValues(t);
                                for (const t in r) H(i, r, t)
                            }
                        }! function(t, e, r, i, n, o, s, a, h, l, u) {
                            var c, d, f, p, m, v, g, y, w, b, A, M;
                            const E = r.getPosition();
                            e.save(), void 0 !== u.a || void 0 !== u.b || void 0 !== u.c || void 0 !== u.d ? e.setTransform(null !== (c = u.a) && void 0 !== c ? c : 1, null !== (d = u.b) && void 0 !== d ? d : 0, null !== (f = u.c) && void 0 !== f ? f : 0, null !== (p = u.d) && void 0 !== p ? p : 1, E.x, E.y) : e.translate(E.x, E.y), e.beginPath();
                            const k = (null !== (v = null === (m = r.rotate) || void 0 === m ? void 0 : m.value) && void 0 !== v ? v : 0) + (r.options.rotate.path ? r.velocity.angle : 0);
                            0 !== k && e.rotate(k), o && (e.globalCompositeOperation = s);
                            const x = r.shadowColor;
                            l.enable && x && (e.shadowBlur = l.blur, e.shadowColor = R(x), e.shadowOffsetX = l.offset.x, e.shadowOffsetY = l.offset.y), n.fill && (e.fillStyle = n.fill);
                            const C = r.stroke;
                            e.lineWidth = null !== (g = r.strokeWidth) && void 0 !== g ? g : 0, n.stroke && (e.strokeStyle = n.stroke),
                                function(t, e, r, i, n, o) {
                                    if (!r.shape) return;
                                    const s = t.drawers.get(r.shape);
                                    s && s.draw(e, r, i, n, o, t.retina.pixelRatio)
                                }(t, e, r, a, h, i), (null !== (y = null === C || void 0 === C ? void 0 : C.width) && void 0 !== y ? y : 0) > 0 && e.stroke(), r.close && e.closePath(), r.fill && e.fill(), e.restore(), e.save(), void 0 !== u.a || void 0 !== u.b || void 0 !== u.c || void 0 !== u.d ? e.setTransform(null !== (w = u.a) && void 0 !== w ? w : 1, null !== (b = u.b) && void 0 !== b ? b : 0, null !== (A = u.c) && void 0 !== A ? A : 0, null !== (M = u.d) && void 0 !== M ? M : 1, E.x, E.y) : e.translate(E.x, E.y), 0 !== k && e.rotate(k), o && (e.globalCompositeOperation = s),
                                function(t, e, r, i, n, o) {
                                    if (!r.shape) return;
                                    const s = t.drawers.get(r.shape);
                                    (null === s || void 0 === s ? void 0 : s.afterEffect) && s.afterEffect(e, r, i, n, o, t.retina.pixelRatio)
                                }(t, e, r, a, h, i), e.restore()
                        }(o, r, t, e, b, f.backgroundMask.enable, f.backgroundMask.composite, h * n, y, t.options.shadow, i);
                        for (const e of o.particles.updaters) e.afterDraw && e.afterDraw(t)
                    }))
                }
                drawParticlePlugin(t, e, r) {
                    this.draw((i => {
                        ! function(t, e, r, i) {
                            e.drawParticle && (t.save(), e.drawParticle(t, r, i), t.restore())
                        }(i, t, e, r)
                    }))
                }
                drawPlugin(t, e) {
                    this.draw((r => {
                        ! function(t, e, r) {
                            e.draw && (t.save(), e.draw(t, r), t.restore())
                        }(r, t, e)
                    }))
                }
                init() {
                    this.resize(), this.initStyle(), this.initCover(), this.initTrail(), this.initBackground(), this.paint()
                }
                initBackground() {
                    const t = this.container.actualOptions.background,
                        e = this.element,
                        r = null === e || void 0 === e ? void 0 : e.style;
                    if (r) {
                        if (t.color) {
                            const e = T(t.color);
                            r.backgroundColor = e ? R(e, t.opacity) : ""
                        } else r.backgroundColor = "";
                        r.backgroundImage = t.image || "", r.backgroundPosition = t.position || "", r.backgroundRepeat = t.repeat || "", r.backgroundSize = t.size || ""
                    }
                }
                loadCanvas(t) {
                    var e;
                    this.generatedCanvas && (null === (e = this.element) || void 0 === e || e.remove()), this.generatedCanvas = t.dataset && M in t.dataset ? "true" === t.dataset.generated : this.generatedCanvas, this.element = t, this.originalStyle = c({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, U(this, F, this.element.getContext("2d"), "f"), this.container.retina.init(), this.initBackground()
                }
                paint() {
                    const t = this.container.actualOptions;
                    this.draw((e => {
                        t.backgroundMask.enable && t.backgroundMask.cover ? (z(e, this.size), this.paintBase(this.coverColorStyle)) : this.paintBase()
                    }))
                }
                resize() {
                    if (!this.element) return;
                    const t = this.container,
                        e = t.retina.pixelRatio,
                        r = t.canvas.size,
                        i = this.element.offsetWidth * e,
                        n = this.element.offsetHeight * e;
                    if (n === r.height && i === r.width && n === this.element.height && i === this.element.width) return;
                    const o = Object.assign({}, r);
                    this.element.width = r.width = this.element.offsetWidth * e, this.element.height = r.height = this.element.offsetHeight * e, this.container.started && (this.resizeFactor = {
                        width: r.width / o.width,
                        height: r.height / o.height
                    })
                }
                async windowResize() {
                    if (!this.element) return;
                    this.resize();
                    const t = this.container,
                        e = t.updateActualOptions();
                    t.particles.setDensity();
                    for (const [, r] of t.plugins) void 0 !== r.resize && r.resize();
                    e && await t.refresh()
                }
                getPluginParticleColors(t) {
                    let e, r;
                    for (const [, i] of this.container.plugins)
                        if (!e && i.particleFillColor && (e = P(i.particleFillColor(t))), !r && i.particleStrokeColor && (r = P(i.particleStrokeColor(t))), e && r) break;
                    return [e, r]
                }
                initCover() {
                    const t = this.container.actualOptions.backgroundMask.cover,
                        e = T(t.color);
                    if (e) {
                        const r = {
                            r: e.r,
                            g: e.g,
                            b: e.b,
                            a: t.opacity
                        };
                        this.coverColorStyle = R(r, r.a)
                    }
                }
                initStyle() {
                    const t = this.element,
                        e = this.container.actualOptions;
                    if (t) {
                        e.fullScreen.enable ? (this.originalStyle = c({}, t.style), t.style.setProperty("position", "fixed", "important"), t.style.setProperty("z-index", e.fullScreen.zIndex.toString(10), "important"), t.style.setProperty("top", "0", "important"), t.style.setProperty("left", "0", "important"), t.style.setProperty("width", "100%", "important"), t.style.setProperty("height", "100%", "important")) : this.resetOriginalStyle();
                        for (const r in e.style) {
                            if (!r || !e.style) continue;
                            const i = e.style[r];
                            i && t.style.setProperty(r, i, "important")
                        }
                    }
                }
                initTrail() {
                    const t = this.container.actualOptions,
                        e = T(t.particles.move.trail.fillColor);
                    if (e) {
                        const r = t.particles.move.trail;
                        this.trailFillColor = {
                            r: e.r,
                            g: e.g,
                            b: e.b,
                            a: 1 / r.length
                        }
                    }
                }
                paintBase(t) {
                    this.draw((e => {
                        ! function(t, e, r) {
                            t.save(), t.fillStyle = null !== r && void 0 !== r ? r : "rgba(0,0,0,0)", t.fillRect(0, 0, e.width, e.height), t.restore()
                        }(e, this.size, t)
                    }))
                }
                resetOriginalStyle() {
                    const t = this.element,
                        e = this.originalStyle;
                    t && e && (t.style.position = e.position, t.style.zIndex = e.zIndex, t.style.top = e.top, t.style.left = e.left, t.style.width = e.width, t.style.height = e.height)
                }
            }

            function G(t, e, r, i, n) {
                if (i) {
                    let i = {
                        passive: !0
                    };
                    "boolean" === typeof n ? i.capture = n : void 0 !== n && (i = n), t.addEventListener(e, r, i)
                } else {
                    const i = n;
                    t.removeEventListener(e, r, i)
                }
            }
            F = new WeakMap;
            class K {
                constructor(t) {
                    this.container = t, this.canPush = !0, this.mouseMoveHandler = t => this.mouseTouchMove(t), this.touchStartHandler = t => this.mouseTouchMove(t), this.touchMoveHandler = t => this.mouseTouchMove(t), this.touchEndHandler = () => this.mouseTouchFinish(), this.mouseLeaveHandler = () => this.mouseTouchFinish(), this.touchCancelHandler = () => this.mouseTouchFinish(), this.touchEndClickHandler = t => this.mouseTouchClick(t), this.mouseUpHandler = t => this.mouseTouchClick(t), this.mouseDownHandler = () => this.mouseDown(), this.visibilityChangeHandler = () => this.handleVisibilityChange(), this.themeChangeHandler = t => this.handleThemeChange(t), this.oldThemeChangeHandler = t => this.handleThemeChange(t), this.resizeHandler = () => this.handleWindowResize()
                }
                addListeners() {
                    this.manageListeners(!0)
                }
                removeListeners() {
                    this.manageListeners(!1)
                }
                doMouseTouchClick(t) {
                    const e = this.container,
                        r = e.actualOptions;
                    if (this.canPush) {
                        const t = e.interactivity.mouse.position;
                        if (!t) return;
                        e.interactivity.mouse.clickPosition = {
                            x: t.x,
                            y: t.y
                        }, e.interactivity.mouse.clickTime = (new Date).getTime();
                        const i = r.interactivity.events.onClick;
                        if (i.mode instanceof Array)
                            for (const e of i.mode) this.handleClickMode(e);
                        else this.handleClickMode(i.mode)
                    }
                    "touchend" === t.type && setTimeout((() => this.mouseTouchFinish()), 500)
                }
                handleClickMode(t) {
                    this.container.handleClickMode(t)
                }
                handleThemeChange(t) {
                    const e = t.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme,
                        r = this.container.options.themes.find((t => t.name === e));
                    r && r.default.auto && this.container.loadTheme(e)
                }
                handleVisibilityChange() {
                    const t = this.container,
                        e = t.actualOptions;
                    this.mouseTouchFinish(), e.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw(!0)))
                }
                handleWindowResize() {
                    this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout((async () => {
                        var t;
                        return null === (t = this.container.canvas) || void 0 === t ? void 0 : t.windowResize()
                    }), 500)
                }
                manageListeners(t) {
                    var e;
                    const r = this.container,
                        i = r.actualOptions,
                        n = i.interactivity.detectsOn;
                    let o = x;
                    if ("window" === n) r.interactivity.element = window, o = "mouseout";
                    else if ("parent" === n && r.canvas.element) {
                        const t = r.canvas.element;
                        r.interactivity.element = null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode
                    } else r.interactivity.element = r.canvas.element;
                    const s = !h() && "undefined" !== typeof matchMedia && matchMedia("(prefers-color-scheme: dark)");
                    s && (void 0 !== s.addEventListener ? G(s, "change", this.themeChangeHandler, t) : void 0 !== s.addListener && (t ? s.addListener(this.oldThemeChangeHandler) : s.removeListener(this.oldThemeChangeHandler)));
                    const a = r.interactivity.element;
                    if (!a) return;
                    const l = a;
                    (i.interactivity.events.onHover.enable || i.interactivity.events.onClick.enable) && (G(a, k, this.mouseMoveHandler, t), G(a, "touchstart", this.touchStartHandler, t), G(a, "touchmove", this.touchMoveHandler, t), i.interactivity.events.onClick.enable ? (G(a, E, this.touchEndClickHandler, t), G(a, "mouseup", this.mouseUpHandler, t), G(a, "mousedown", this.mouseDownHandler, t)) : G(a, E, this.touchEndHandler, t), G(a, o, this.mouseLeaveHandler, t), G(a, "touchcancel", this.touchCancelHandler, t)), r.canvas.element && (r.canvas.element.style.pointerEvents = l === r.canvas.element ? "initial" : "none"), i.interactivity.events.resize && ("undefined" !== typeof ResizeObserver ? this.resizeObserver && !t ? (r.canvas.element && this.resizeObserver.unobserve(r.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver) : !this.resizeObserver && t && r.canvas.element && (this.resizeObserver = new ResizeObserver((t => {
                        t.find((t => t.target === r.canvas.element)) && this.handleWindowResize()
                    })), this.resizeObserver.observe(r.canvas.element)) : G(window, "resize", this.resizeHandler, t)), document && G(document, "visibilitychange", this.visibilityChangeHandler, t, !1)
                }
                mouseDown() {
                    const t = this.container.interactivity;
                    if (t) {
                        const e = t.mouse;
                        e.clicking = !0, e.downPosition = e.position
                    }
                }
                mouseTouchClick(t) {
                    const e = this.container,
                        r = e.actualOptions,
                        i = e.interactivity.mouse;
                    i.inside = !0;
                    let n = !1;
                    const o = i.position;
                    if (o && r.interactivity.events.onClick.enable) {
                        for (const [, t] of e.plugins)
                            if (t.clickPositionValid && (n = t.clickPositionValid(o), n)) break;
                        n || this.doMouseTouchClick(t), i.clicking = !1
                    }
                }
                mouseTouchFinish() {
                    const t = this.container.interactivity;
                    if (!t) return;
                    const e = t.mouse;
                    delete e.position, delete e.clickPosition, delete e.downPosition, t.status = x, e.inside = !1, e.clicking = !1
                }
                mouseTouchMove(t) {
                    var e, r, i, n, o, s, a;
                    const h = this.container,
                        l = h.actualOptions;
                    if (!(null === (e = h.interactivity) || void 0 === e ? void 0 : e.element)) return;
                    let u;
                    h.interactivity.mouse.inside = !0;
                    const c = h.canvas.element;
                    if (t.type.startsWith("mouse")) {
                        this.canPush = !0;
                        const e = t;
                        if (h.interactivity.element === window) {
                            if (c) {
                                const t = c.getBoundingClientRect();
                                u = {
                                    x: e.clientX - t.left,
                                    y: e.clientY - t.top
                                }
                            }
                        } else if ("parent" === l.interactivity.detectsOn) {
                            const t = e.target,
                                n = e.currentTarget,
                                o = h.canvas.element;
                            if (t && n && o) {
                                const r = t.getBoundingClientRect(),
                                    i = n.getBoundingClientRect(),
                                    s = o.getBoundingClientRect();
                                u = {
                                    x: e.offsetX + 2 * r.left - (i.left + s.left),
                                    y: e.offsetY + 2 * r.top - (i.top + s.top)
                                }
                            } else u = {
                                x: null !== (r = e.offsetX) && void 0 !== r ? r : e.clientX,
                                y: null !== (i = e.offsetY) && void 0 !== i ? i : e.clientY
                            }
                        } else e.target === h.canvas.element && (u = {
                            x: null !== (n = e.offsetX) && void 0 !== n ? n : e.clientX,
                            y: null !== (o = e.offsetY) && void 0 !== o ? o : e.clientY
                        })
                    } else {
                        this.canPush = "touchmove" !== t.type;
                        const e = t,
                            r = e.touches[e.touches.length - 1],
                            i = null === c || void 0 === c ? void 0 : c.getBoundingClientRect();
                        u = {
                            x: r.clientX - (null !== (s = null === i || void 0 === i ? void 0 : i.left) && void 0 !== s ? s : 0),
                            y: r.clientY - (null !== (a = null === i || void 0 === i ? void 0 : i.top) && void 0 !== a ? a : 0)
                        }
                    }
                    const d = h.retina.pixelRatio;
                    u && (u.x *= d, u.y *= d), h.interactivity.mouse.position = u, h.interactivity.status = k
                }
            }
            class V {
                constructor(t) {
                    this.container = t
                }
                async nextFrame(t) {
                    var e;
                    try {
                        const r = this.container;
                        if (void 0 !== r.lastFrameTime && t < r.lastFrameTime + 1e3 / r.fpsLimit) return void r.draw(!1);
                        null !== (e = r.lastFrameTime) && void 0 !== e || (r.lastFrameTime = t);
                        const i = t - r.lastFrameTime,
                            n = {
                                value: i,
                                factor: 60 * i / 1e3
                            };
                        if (r.lifeTime += n.value, r.lastFrameTime = t, i > 1e3) return void r.draw(!1);
                        if (await r.particles.draw(n), r.duration > 0 && r.lifeTime > r.duration) return void r.destroy();
                        r.getAnimationStatus() && r.draw(!1)
                    } catch (r) {
                        console.error("tsParticles error in animation loop", r)
                    }
                }
            }
            class J {
                constructor() {
                    this.value = ""
                }
                static create(t, e) {
                    const r = new J;
                    return r.load(t), void 0 !== e && ("string" === typeof e || e instanceof Array ? r.load({
                        value: e
                    }) : r.load(e)), r
                }
                load(t) {
                    void 0 !== (null === t || void 0 === t ? void 0 : t.value) && (this.value = t.value)
                }
            }
            class Q {
                constructor() {
                    this.color = new J, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = J.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.position && (this.position = t.position), void 0 !== t.repeat && (this.repeat = t.repeat), void 0 !== t.size && (this.size = t.size), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class Z {
                constructor() {
                    this.color = new J, this.color.value = "#fff", this.opacity = 1
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = J.create(this.color, t.color)), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class Y {
                constructor() {
                    this.composite = "destination-out", this.cover = new Z, this.enable = !1
                }
                load(t) {
                    if (t) {
                        if (void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover) {
                            const e = t.cover,
                                r = "string" === typeof t.cover ? {
                                    color: t.cover
                                } : t.cover;
                            this.cover.load(void 0 !== e.color ? e : {
                                color: r
                            })
                        }
                        void 0 !== t.enable && (this.enable = t.enable)
                    }
                }
            }
            class W {
                constructor() {
                    this.enable = !0, this.zIndex = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex))
                }
            }
            class X {
                constructor() {
                    this.enable = !1, this.mode = []
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode))
                }
            }
            class $ {
                constructor() {
                    this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle"
                }
                get el() {
                    return this.elementId
                }
                set el(t) {
                    this.elementId = t
                }
                get elementId() {
                    return this.ids
                }
                set elementId(t) {
                    this.ids = t
                }
                get ids() {
                    return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
                }
                set ids(t) {
                    this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}`
                }
                load(t) {
                    var e, r;
                    if (!t) return;
                    const i = null !== (r = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) && void 0 !== r ? r : t.el;
                    void 0 !== i && (this.ids = i), void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type)
                }
            }
            class tt {
                constructor() {
                    this.enable = !1, this.force = 2, this.smooth = 10
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth))
                }
            }
            class et {
                constructor() {
                    this.enable = !1, this.mode = [], this.parallax = new tt
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax))
                }
            }
            class rt {
                constructor() {
                    this.onClick = new X, this.onDiv = new $, this.onHover = new et, this.resize = !0
                }
                get onclick() {
                    return this.onClick
                }
                set onclick(t) {
                    this.onClick = t
                }
                get ondiv() {
                    return this.onDiv
                }
                set ondiv(t) {
                    this.onDiv = t
                }
                get onhover() {
                    return this.onHover
                }
                set onhover(t) {
                    this.onHover = t
                }
                load(t) {
                    var e, r, i;
                    if (!t) return;
                    this.onClick.load(null !== (e = t.onClick) && void 0 !== e ? e : t.onclick);
                    const n = null !== (r = t.onDiv) && void 0 !== r ? r : t.ondiv;
                    void 0 !== n && (n instanceof Array ? this.onDiv = n.map((t => {
                        const e = new $;
                        return e.load(t), e
                    })) : (this.onDiv = new $, this.onDiv.load(n))), this.onHover.load(null !== (i = t.onHover) && void 0 !== i ? i : t.onhover), void 0 !== t.resize && (this.resize = t.resize)
                }
            }
            class it {
                constructor() {
                    this.distance = 200, this.duration = .4, this.easing = "ease-out-quad", this.factor = 1, this.maxSpeed = 50, this.speed = 1
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed), void 0 !== t.speed && (this.speed = t.speed))
                }
            }
            class nt {
                constructor() {
                    this.distance = 200
                }
                load(t) {
                    t && void 0 !== t.distance && (this.distance = t.distance)
                }
            }
            class ot {
                constructor() {
                    this.distance = 200, this.duration = .4, this.mix = !1
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.mix && (this.mix = t.mix), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.color && (t.color instanceof Array ? this.color = t.color.map((t => J.create(void 0, t))) : (this.color instanceof Array && (this.color = new J), this.color = J.create(this.color, t.color))), void 0 !== t.size && (this.size = t.size))
                }
            }
            class st extends ot {
                constructor() {
                    super(), this.selectors = []
                }
                get ids() {
                    return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
                }
                set ids(t) {
                    this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}`
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
                }
            }
            class at extends ot {
                load(t) {
                    super.load(t), t && (t.divs instanceof Array ? this.divs = t.divs.map((t => {
                        const e = new st;
                        return e.load(t), e
                    })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new st), this.divs.load(t.divs)))
                }
            }
            class ht {
                constructor() {
                    this.opacity = .5
                }
                load(t) {
                    t && void 0 !== t.opacity && (this.opacity = t.opacity)
                }
            }
            class lt {
                constructor() {
                    this.distance = 80, this.links = new ht, this.radius = 60
                }
                get lineLinked() {
                    return this.links
                }
                set lineLinked(t) {
                    this.links = t
                }
                get line_linked() {
                    return this.links
                }
                set line_linked(t) {
                    this.links = t
                }
                load(t) {
                    var e, r;
                    t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (r = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== r ? r : t.line_linked), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
            class ut {
                constructor() {
                    this.blink = !1, this.consent = !1, this.opacity = 1
                }
                load(t) {
                    t && (void 0 !== t.blink && (this.blink = t.blink), void 0 !== t.color && (this.color = J.create(this.color, t.color)), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class ct {
                constructor() {
                    this.distance = 100, this.links = new ut
                }
                get lineLinked() {
                    return this.links
                }
                set lineLinked(t) {
                    this.links = t
                }
                get line_linked() {
                    return this.links
                }
                set line_linked(t) {
                    this.links = t
                }
                load(t) {
                    var e, r;
                    t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (r = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== r ? r : t.line_linked))
                }
            }
            class dt {
                constructor() {
                    this.start = new J, this.stop = new J, this.start.value = "#ffffff", this.stop.value = "#000000"
                }
                load(t) {
                    t && (this.start = J.create(this.start, t.start), this.stop = J.create(this.stop, t.stop))
                }
            }
            class ft {
                constructor() {
                    this.gradient = new dt, this.radius = 1e3
                }
                load(t) {
                    t && (this.gradient.load(t.gradient), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
            class pt {
                constructor() {
                    this.color = new J, this.color.value = "#000000", this.length = 2e3
                }
                load(t) {
                    t && (this.color = J.create(this.color, t.color), void 0 !== t.length && (this.length = t.length))
                }
            }
            class mt {
                constructor() {
                    this.area = new ft, this.shadow = new pt
                }
                load(t) {
                    t && (this.area.load(t.area), this.shadow.load(t.shadow))
                }
            }
            class vt {
                constructor() {
                    this.default = !0, this.groups = [], this.quantity = 4
                }
                get particles_nb() {
                    return this.quantity
                }
                set particles_nb(t) {
                    this.quantity = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    void 0 !== t.default && (this.default = t.default), void 0 !== t.groups && (this.groups = t.groups.map((t => t))), this.groups.length || (this.default = !0);
                    const r = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
                    void 0 !== r && (this.quantity = r)
                }
            }
            class gt {
                constructor() {
                    this.quantity = 2
                }
                get particles_nb() {
                    return this.quantity
                }
                set particles_nb(t) {
                    this.quantity = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    const r = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
                    void 0 !== r && (this.quantity = r)
                }
            }
            class yt {
                constructor() {
                    this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = "ease-out-quad"
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
                }
            }
            class wt extends yt {
                constructor() {
                    super(), this.selectors = []
                }
                get ids() {
                    return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
                }
                set ids(t) {
                    this.selectors = t instanceof Array ? t.map((() => `#${t}`)) : `#${t}`
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
                }
            }
            class bt extends yt {
                load(t) {
                    super.load(t), t && (t.divs instanceof Array ? this.divs = t.divs.map((t => {
                        const e = new wt;
                        return e.load(t), e
                    })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new wt), this.divs.load(t.divs)))
                }
            }
            class At {
                constructor() {
                    this.factor = 3, this.radius = 200
                }
                get active() {
                    return !1
                }
                set active(t) {}
                load(t) {
                    t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
            class Mt {
                constructor() {
                    this.delay = 1, this.pauseOnStop = !1, this.quantity = 1
                }
                load(t) {
                    t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.quantity && (this.quantity = t.quantity), void 0 !== t.particles && (this.particles = c({}, t.particles)), void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop))
                }
            }
            class Et {
                constructor() {
                    this.attract = new it, this.bounce = new nt, this.bubble = new at, this.connect = new lt, this.grab = new ct, this.light = new mt, this.push = new vt, this.remove = new gt, this.repulse = new bt, this.slow = new At, this.trail = new Mt
                }
                load(t) {
                    t && (this.attract.load(t.attract), this.bubble.load(t.bubble), this.connect.load(t.connect), this.grab.load(t.grab), this.light.load(t.light), this.push.load(t.push), this.remove.load(t.remove), this.repulse.load(t.repulse), this.slow.load(t.slow), this.trail.load(t.trail))
                }
            }
            class kt {
                constructor() {
                    this.detectsOn = "window", this.events = new rt, this.modes = new Et
                }
                get detect_on() {
                    return this.detectsOn
                }
                set detect_on(t) {
                    this.detectsOn = t
                }
                load(t) {
                    var e, r, i;
                    if (!t) return;
                    const n = null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on;
                    void 0 !== n && (this.detectsOn = n), this.events.load(t.events), this.modes.load(t.modes), !0 === (null === (i = null === (r = t.modes) || void 0 === r ? void 0 : r.slow) || void 0 === i ? void 0 : i.active) && (this.events.onHover.mode instanceof Array ? this.events.onHover.mode.indexOf("slow") < 0 && this.events.onHover.mode.push("slow") : "slow" !== this.events.onHover.mode && (this.events.onHover.mode = [this.events.onHover.mode, "slow"]))
                }
            }
            class xt {
                load(t) {
                    var e, r;
                    t && (void 0 !== t.position && (this.position = {
                        x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
                        y: null !== (r = t.position.y) && void 0 !== r ? r : 50
                    }), void 0 !== t.options && (this.options = c({}, t.options)))
                }
            }
            class Ct {
                constructor() {
                    this.factor = 4, this.value = !0
                }
                load(t) {
                    t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.value && (this.value = t.value))
                }
            }
            class _t {
                constructor() {
                    this.disable = !1, this.reduce = new Ct
                }
                load(t) {
                    t && (void 0 !== t.disable && (this.disable = t.disable), this.reduce.load(t.reduce))
                }
            }
            class Tt {
                constructor() {
                    this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas"
                }
                load(t) {
                    t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.mode && ("screen" === t.mode ? this.mode = "screen" : this.mode = "canvas"), void 0 !== t.options && (this.options = c({}, t.options)))
                }
            }
            class It {
                constructor() {
                    this.auto = !1, this.mode = "any", this.value = !1
                }
                load(t) {
                    t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value))
                }
            }
            class Pt {
                constructor() {
                    this.name = "", this.default = new It
                }
                load(t) {
                    t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = c({}, t.options)))
                }
            }
            class St {
                constructor() {
                    this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.decay = 0, this.sync = !0
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = g(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (this.offset = g(t.offset)), void 0 !== t.speed && (this.speed = g(t.speed)), void 0 !== t.decay && (this.decay = g(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class Nt {
                constructor() {
                    this.h = new St, this.s = new St, this.l = new St
                }
                load(t) {
                    t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
                }
            }
            class Lt extends J {
                constructor() {
                    super(), this.animation = new Nt
                }
                static create(t, e) {
                    const r = new Lt;
                    return r.load(t), void 0 !== e && ("string" === typeof e || e instanceof Array ? r.load({
                        value: e
                    }) : r.load(e)), r
                }
                load(t) {
                    if (super.load(t), !t) return;
                    const e = t.animation;
                    void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation))
                }
            }
            class Ot {
                constructor() {
                    this.count = 0, this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1, this.startValue = "random"
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = g(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = g(t.speed)), void 0 !== t.sync && (this.sync = t.sync), void 0 !== t.startValue && (this.startValue = t.startValue))
                }
            }
            class Rt {
                constructor() {
                    this.value = 0, this.animation = new Ot
                }
                load(t) {
                    t && (this.animation.load(t.animation), void 0 !== t.value && (this.value = g(t.value)))
                }
            }
            class Bt {
                constructor() {
                    this.stop = 0, this.value = new Lt
                }
                load(t) {
                    t && (void 0 !== t.stop && (this.stop = t.stop), this.value = Lt.create(this.value, t.value), void 0 !== t.opacity && (this.opacity = new Rt, "number" === typeof t.opacity ? this.opacity.value = t.opacity : this.opacity.load(t.opacity)))
                }
            }
            class Dt {
                constructor() {
                    this.count = 0, this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = g(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = g(t.speed)), void 0 !== t.decay && (this.decay = g(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class zt {
                constructor() {
                    this.value = 0, this.animation = new Dt, this.direction = "clockwise"
                }
                load(t) {
                    t && (this.animation.load(t.animation), void 0 !== t.value && (this.value = t.value), void 0 !== t.direction && (this.direction = t.direction))
                }
            }
            class Ft {
                constructor() {
                    this.angle = new zt, this.colors = [], this.type = "random"
                }
                load(t) {
                    t && (this.angle.load(t.angle), void 0 !== t.colors && (this.colors = t.colors.map((t => {
                        const e = new Bt;
                        return e.load(t), e
                    }))), void 0 !== t.type && (this.type = t.type))
                }
            }
            class Ut {
                constructor() {
                    this.enable = !0, this.retries = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries))
                }
            }
            class qt {
                constructor() {
                    this.enable = !1, this.minimumValue = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue))
                }
            }
            class Ht {
                constructor() {
                    this.random = new qt, this.value = 0
                }
                load(t) {
                    t && ("boolean" === typeof t.random ? this.random.enable = t.random : this.random.load(t.random), void 0 !== t.value && (this.value = g(t.value, this.random.enable ? this.random.minimumValue : void 0)))
                }
            }
            class jt extends Ht {
                constructor() {
                    super(), this.random.minimumValue = .1, this.value = 1
                }
            }
            class Gt {
                constructor() {
                    this.horizontal = new jt, this.vertical = new jt
                }
                load(t) {
                    t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
                }
            }
            class Kt {
                constructor() {
                    this.bounce = new Gt, this.enable = !1, this.mode = "bounce", this.overlap = new Ut
                }
                load(t) {
                    t && (this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap))
                }
            }
            class Vt extends Ht {
                constructor() {
                    super(), this.value = 3
                }
            }
            class Jt extends Ht {
                constructor() {
                    super(), this.value = {
                        min: 4,
                        max: 9
                    }
                }
            }
            class Qt {
                constructor() {
                    this.count = 1, this.factor = new Vt, this.rate = new Jt, this.sizeOffset = !0
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), this.factor.load(t.factor), this.rate.load(t.rate), void 0 !== t.particles && (t.particles instanceof Array ? this.particles = t.particles.map((t => c({}, t))) : this.particles = c({}, t.particles)), void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset))
                }
            }
            class Zt {
                constructor() {
                    this.mode = "none", this.split = new Qt
                }
                load(t) {
                    t && (void 0 !== t.mode && (this.mode = t.mode), this.split.load(t.split))
                }
            }
            class Yt {
                constructor() {
                    this.blur = 5, this.color = new J, this.color.value = "#000", this.enable = !1
                }
                load(t) {
                    t && (void 0 !== t.blur && (this.blur = t.blur), this.color = J.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable))
                }
            }
            class Wt {
                constructor() {
                    this.enable = !1, this.frequency = 1
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = J.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class Xt {
                constructor() {
                    this.blink = !1, this.color = new J, this.color.value = "#fff", this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new Yt, this.triangles = new Wt, this.width = 1, this.warp = !1
                }
                load(t) {
                    t && (void 0 !== t.id && (this.id = t.id), void 0 !== t.blink && (this.blink = t.blink), this.color = J.create(this.color, t.color), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity), this.shadow.load(t.shadow), this.triangles.load(t.triangles), void 0 !== t.width && (this.width = t.width), void 0 !== t.warp && (this.warp = t.warp))
                }
            }
            class $t {
                constructor() {
                    this.offset = 0, this.value = 90
                }
                load(t) {
                    t && (void 0 !== t.offset && (this.offset = g(t.offset)), void 0 !== t.value && (this.value = g(t.value)))
                }
            }
            class te {
                constructor() {
                    this.distance = 200, this.enable = !1, this.rotate = {
                        x: 3e3,
                        y: 3e3
                    }
                }
                get rotateX() {
                    return this.rotate.x
                }
                set rotateX(t) {
                    this.rotate.x = t
                }
                get rotateY() {
                    return this.rotate.y
                }
                set rotateY(t) {
                    this.rotate.y = t
                }
                load(t) {
                    var e, r, i, n;
                    if (!t) return;
                    void 0 !== t.distance && (this.distance = g(t.distance)), void 0 !== t.enable && (this.enable = t.enable);
                    const o = null !== (r = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) && void 0 !== r ? r : t.rotateX;
                    void 0 !== o && (this.rotate.x = o);
                    const s = null !== (n = null === (i = t.rotate) || void 0 === i ? void 0 : i.y) && void 0 !== n ? n : t.rotateY;
                    void 0 !== s && (this.rotate.y = s)
                }
            }
            class ee {
                constructor() {
                    this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
                }
                load(t) {
                    t && (void 0 !== t.acceleration && (this.acceleration = g(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.inverse && (this.inverse = t.inverse), void 0 !== t.maxSpeed && (this.maxSpeed = g(t.maxSpeed)))
                }
            }
            class re extends Ht {
                constructor() {
                    super()
                }
            }
            class ie {
                constructor() {
                    this.clamp = !0, this.delay = new re, this.enable = !1, this.options = {}
                }
                load(t) {
                    t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), this.generator = t.generator, t.options && (this.options = c(this.options, t.options)))
                }
            }
            class ne {
                constructor() {
                    this.enable = !1, this.length = 10, this.fillColor = new J, this.fillColor.value = "#000000"
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), this.fillColor = J.create(this.fillColor, t.fillColor), void 0 !== t.length && (this.length = t.length))
                }
            }
            class oe {
                constructor() {
                    this.default = "out"
                }
                load(t) {
                    var e, r, i, n;
                    t && (void 0 !== t.default && (this.default = t.default), this.bottom = null !== (e = t.bottom) && void 0 !== e ? e : t.default, this.left = null !== (r = t.left) && void 0 !== r ? r : t.default, this.right = null !== (i = t.right) && void 0 !== i ? i : t.default, this.top = null !== (n = t.top) && void 0 !== n ? n : t.default)
                }
            }
            class se {
                constructor() {
                    this.acceleration = 0, this.enable = !1
                }
                load(t) {
                    t && (void 0 !== t.acceleration && (this.acceleration = g(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), this.position = t.position ? c({}, t.position) : void 0)
                }
            }
            class ae {
                constructor() {
                    this.angle = new $t, this.attract = new te, this.center = {
                        x: 50,
                        y: 50,
                        radius: 0
                    }, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new ee, this.path = new ie, this.outModes = new oe, this.random = !1, this.size = !1, this.speed = 2, this.spin = new se, this.straight = !1, this.trail = new ne, this.vibrate = !1, this.warp = !1
                }
                get bounce() {
                    return this.collisions
                }
                set bounce(t) {
                    this.collisions = t
                }
                get collisions() {
                    return !1
                }
                set collisions(t) {}
                get noise() {
                    return this.path
                }
                set noise(t) {
                    this.path = t
                }
                get outMode() {
                    return this.outModes.default
                }
                set outMode(t) {
                    this.outModes.default = t
                }
                get out_mode() {
                    return this.outMode
                }
                set out_mode(t) {
                    this.outMode = t
                }
                load(t) {
                    var e, r, i;
                    if (!t) return;
                    void 0 !== t.angle && ("number" === typeof t.angle ? this.angle.value = t.angle : this.angle.load(t.angle)), this.attract.load(t.attract), this.center = c(this.center, t.center), void 0 !== t.decay && (this.decay = t.decay), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.distance && (this.distance = "number" === typeof t.distance ? {
                        horizontal: t.distance,
                        vertical: t.distance
                    } : c({}, t.distance)), void 0 !== t.drift && (this.drift = g(t.drift)), void 0 !== t.enable && (this.enable = t.enable), this.gravity.load(t.gravity);
                    const n = null !== (e = t.outMode) && void 0 !== e ? e : t.out_mode;
                    void 0 === t.outModes && void 0 === n || ("string" === typeof t.outModes || void 0 === t.outModes && void 0 !== n ? this.outModes.load({
                        default: null !== (r = t.outModes) && void 0 !== r ? r : n
                    }) : this.outModes.load(t.outModes)), this.path.load(null !== (i = t.path) && void 0 !== i ? i : t.noise), void 0 !== t.random && (this.random = t.random), void 0 !== t.size && (this.size = t.size), void 0 !== t.speed && (this.speed = g(t.speed)), this.spin.load(t.spin), void 0 !== t.straight && (this.straight = t.straight), this.trail.load(t.trail), void 0 !== t.vibrate && (this.vibrate = t.vibrate), void 0 !== t.warp && (this.warp = t.warp)
                }
            }
            class he {
                constructor() {
                    this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.sync = !1
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = g(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = g(t.speed)), void 0 !== t.decay && (this.decay = g(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class le extends he {
                constructor() {
                    super(), this.destroy = "none", this.enable = !1, this.speed = 2, this.startValue = "random", this.sync = !1
                }
                get opacity_min() {
                    return this.minimumValue
                }
                set opacity_min(t) {
                    this.minimumValue = t
                }
                load(t) {
                    var e;
                    t && (super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable), this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.opacity_min, void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class ue extends Ht {
                constructor() {
                    super(), this.animation = new le, this.random.minimumValue = .1, this.value = 1
                }
                get anim() {
                    return this.animation
                }
                set anim(t) {
                    this.animation = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    super.load(t);
                    const r = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                    void 0 !== r && (this.animation.load(r), this.value = g(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
                }
            }
            class ce {
                constructor() {
                    this.enable = !1, this.area = 800, this.factor = 1e3
                }
                get value_area() {
                    return this.area
                }
                set value_area(t) {
                    this.area = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    void 0 !== t.enable && (this.enable = t.enable);
                    const r = null !== (e = t.area) && void 0 !== e ? e : t.value_area;
                    void 0 !== r && (this.area = r), void 0 !== t.factor && (this.factor = t.factor)
                }
            }
            class de {
                constructor() {
                    this.density = new ce, this.limit = 0, this.value = 100
                }
                get max() {
                    return this.limit
                }
                set max(t) {
                    this.limit = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    this.density.load(t.density);
                    const r = null !== (e = t.limit) && void 0 !== e ? e : t.max;
                    void 0 !== r && (this.limit = r), void 0 !== t.value && (this.value = t.value)
                }
            }
            class fe extends Ht {
                constructor() {
                    super(), this.enabled = !1, this.distance = 1, this.duration = 1, this.factor = 1, this.speed = 1
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.enabled && (this.enabled = t.enabled), void 0 !== t.distance && (this.distance = g(t.distance)), void 0 !== t.duration && (this.duration = g(t.duration)), void 0 !== t.factor && (this.factor = g(t.factor)), void 0 !== t.speed && (this.speed = g(t.speed)))
                }
            }
            class pe {
                constructor() {
                    this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = g(t.speed)), void 0 !== t.decay && (this.decay = g(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class me extends Ht {
                constructor() {
                    super(), this.animation = new pe, this.direction = "clockwise", this.path = !1, this.value = 0
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path))
                }
            }
            class ve {
                constructor() {
                    this.blur = 0, this.color = new J, this.enable = !1, this.offset = {
                        x: 0,
                        y: 0
                    }, this.color.value = "#000"
                }
                load(t) {
                    t && (void 0 !== t.blur && (this.blur = t.blur), this.color = J.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)))
                }
            }
            class ge {
                constructor() {
                    this.options = {}, this.type = "circle"
                }
                get character() {
                    var t;
                    return null !== (t = this.options.character) && void 0 !== t ? t : this.options.char
                }
                set character(t) {
                    this.options.character = t, this.options.char = t
                }
                get custom() {
                    return this.options
                }
                set custom(t) {
                    this.options = t
                }
                get image() {
                    var t;
                    return null !== (t = this.options.image) && void 0 !== t ? t : this.options.images
                }
                set image(t) {
                    this.options.image = t, this.options.images = t
                }
                get images() {
                    return this.image
                }
                set images(t) {
                    this.image = t
                }
                get polygon() {
                    var t;
                    return null !== (t = this.options.polygon) && void 0 !== t ? t : this.options.star
                }
                set polygon(t) {
                    this.options.polygon = t, this.options.star = t
                }
                get stroke() {
                    return []
                }
                set stroke(t) {}
                load(t) {
                    var e, r, i;
                    if (!t) return;
                    const n = null !== (e = t.options) && void 0 !== e ? e : t.custom;
                    if (void 0 !== n)
                        for (const o in n) {
                            const t = n[o];
                            t && (this.options[o] = c(null !== (r = this.options[o]) && void 0 !== r ? r : {}, t))
                        }
                    this.loadShape(t.character, "character", "char", !0), this.loadShape(t.polygon, "polygon", "star", !1), this.loadShape(null !== (i = t.image) && void 0 !== i ? i : t.images, "image", "images", !0), void 0 !== t.type && (this.type = t.type)
                }
                loadShape(t, e, r, i) {
                    var n, o, s, a;
                    void 0 !== t && (t instanceof Array ? (this.options[e] instanceof Array || (this.options[e] = [], this.options[r] && !i || (this.options[r] = [])), this.options[e] = c(null !== (n = this.options[e]) && void 0 !== n ? n : [], t), this.options[r] && !i || (this.options[r] = c(null !== (o = this.options[r]) && void 0 !== o ? o : [], t))) : (this.options[e] instanceof Array && (this.options[e] = {}, this.options[r] && !i || (this.options[r] = {})), this.options[e] = c(null !== (s = this.options[e]) && void 0 !== s ? s : {}, t), this.options[r] && !i || (this.options[r] = c(null !== (a = this.options[r]) && void 0 !== a ? a : {}, t))))
                }
            }
            class ye extends he {
                constructor() {
                    super(), this.destroy = "none", this.enable = !1, this.speed = 5, this.startValue = "random", this.sync = !1
                }
                get size_min() {
                    return this.minimumValue
                }
                set size_min(t) {
                    this.minimumValue = t
                }
                load(t) {
                    var e;
                    super.load(t), t && (void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable), this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min, void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class we extends Ht {
                constructor() {
                    super(), this.animation = new ye, this.random.minimumValue = 1, this.value = 3
                }
                get anim() {
                    return this.animation
                }
                set anim(t) {
                    this.animation = t
                }
                load(t) {
                    var e;
                    if (super.load(t), !t) return;
                    const r = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                    void 0 !== r && (this.animation.load(r), this.value = g(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
                }
            }
            class be {
                constructor() {
                    this.width = 0
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = Lt.create(this.color, t.color)), void 0 !== t.width && (this.width = t.width), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class Ae extends Ht {
                constructor() {
                    super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate))
                }
            }
            var Me, Ee, ke = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                xe = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            class Ce {
                constructor(t, e) {
                    Me.set(this, void 0), Ee.set(this, void 0), ke(this, Ee, t, "f"), ke(this, Me, e, "f"), this.bounce = new Gt, this.collisions = new Kt, this.color = new Lt, this.color.value = "#fff", this.destroy = new Zt, this.gradient = [], this.groups = {}, this.links = new Xt, this.move = new ae, this.number = new de, this.opacity = new ue, this.reduceDuplicates = !1, this.repulse = new fe, this.rotate = new me, this.shadow = new ve, this.shape = new ge, this.size = new we, this.stroke = new be, this.zIndex = new Ae
                }
                get lineLinked() {
                    return this.links
                }
                set lineLinked(t) {
                    this.links = t
                }
                get line_linked() {
                    return this.links
                }
                set line_linked(t) {
                    this.links = t
                }
                load(t) {
                    var e, r, i, n, o, s, a, h;
                    if (!t) return;
                    this.bounce.load(t.bounce), this.color.load(Lt.create(this.color, t.color)), this.destroy.load(t.destroy);
                    const l = null !== (r = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== r ? r : t.line_linked;
                    if (void 0 !== l && this.links.load(l), void 0 !== t.groups)
                        for (const p in t.groups) {
                            const e = t.groups[p];
                            void 0 !== e && (this.groups[p] = c(null !== (i = this.groups[p]) && void 0 !== i ? i : {}, e))
                        }
                    this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates), this.repulse.load(t.repulse), this.rotate.load(t.rotate), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.zIndex.load(t.zIndex);
                    const u = null !== (o = null === (n = t.move) || void 0 === n ? void 0 : n.collisions) && void 0 !== o ? o : null === (s = t.move) || void 0 === s ? void 0 : s.bounce;
                    void 0 !== u && (this.collisions.enable = u), this.collisions.load(t.collisions), void 0 !== t.interactivity && (this.interactivity = c({}, t.interactivity));
                    const d = null !== (a = t.stroke) && void 0 !== a ? a : null === (h = t.shape) || void 0 === h ? void 0 : h.stroke;
                    d && (d instanceof Array ? this.stroke = d.map((t => {
                        const e = new be;
                        return e.load(t), e
                    })) : (this.stroke instanceof Array && (this.stroke = new be), this.stroke.load(d)));
                    const f = t.gradient;
                    if (f && (f instanceof Array ? this.gradient = f.map((t => {
                            const e = new Ft;
                            return e.load(t), e
                        })) : (this.gradient instanceof Array && (this.gradient = new Ft), this.gradient.load(f))), xe(this, Me, "f")) {
                        const e = xe(this, Ee, "f").plugins.updaters.get(xe(this, Me, "f"));
                        if (e)
                            for (const r of e) r.loadOptions && r.loadOptions(this, t)
                    }
                }
            }

            function _e(t, ...e) {
                for (const r of e) t.load(r)
            }

            function Te(t, e, ...r) {
                const i = new Ce(t, e);
                return _e(i, ...r), i
            }
            Me = new WeakMap, Ee = new WeakMap;
            var Ie, Pe, Se, Ne, Le = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                Oe = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            class Re {
                constructor(t, e) {
                    Ie.add(this), Pe.set(this, void 0), Se.set(this, void 0), Le(this, Se, t, "f"), Le(this, Pe, e, "f"), this.autoPlay = !0, this.background = new Q, this.backgroundMask = new Y, this.fullScreen = new W, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new kt, this.manualParticles = [], this.motion = new _t, this.particles = Te(Oe(this, Se, "f"), Oe(this, Pe, "f")), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.style = {}, this.themes = [], this.zLayers = 100
                }
                get backgroundMode() {
                    return this.fullScreen
                }
                set backgroundMode(t) {
                    this.fullScreen.load(t)
                }
                get fps_limit() {
                    return this.fpsLimit
                }
                set fps_limit(t) {
                    this.fpsLimit = t
                }
                get retina_detect() {
                    return this.detectRetina
                }
                set retina_detect(t) {
                    this.detectRetina = t
                }
                load(t) {
                    var e, r, i, n, o;
                    if (!t) return;
                    if (void 0 !== t.preset)
                        if (t.preset instanceof Array)
                            for (const l of t.preset) this.importPreset(l);
                        else this.importPreset(t.preset);
                    void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
                    const s = null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect;
                    void 0 !== s && (this.detectRetina = s), void 0 !== t.duration && (this.duration = t.duration);
                    const a = null !== (r = t.fpsLimit) && void 0 !== r ? r : t.fps_limit;
                    void 0 !== a && (this.fpsLimit = a), void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur), void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), void 0 !== t.zLayers && (this.zLayers = t.zLayers), this.background.load(t.background);
                    const h = null !== (i = t.fullScreen) && void 0 !== i ? i : t.backgroundMode;
                    if ("boolean" === typeof h ? this.fullScreen.enable = h : this.fullScreen.load(h), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), void 0 !== t.manualParticles && (this.manualParticles = t.manualParticles.map((t => {
                            const e = new xt;
                            return e.load(t), e
                        }))), this.motion.load(t.motion), this.particles.load(t.particles), this.style = c(this.style, t.style), Oe(this, Se, "f").plugins.loadOptions(this, t), void 0 !== t.responsive)
                        for (const l of t.responsive) {
                            const t = new Tt;
                            t.load(l), this.responsive.push(t)
                        }
                    if (this.responsive.sort(((t, e) => t.maxWidth - e.maxWidth)), void 0 !== t.themes)
                        for (const l of t.themes) {
                            const t = new Pt;
                            t.load(l), this.themes.push(t)
                        }
                    this.defaultDarkTheme = null === (n = Oe(this, Ie, "m", Ne).call(this, "dark")) || void 0 === n ? void 0 : n.name, this.defaultLightTheme = null === (o = Oe(this, Ie, "m", Ne).call(this, "light")) || void 0 === o ? void 0 : o.name
                }
                setResponsive(t, e, r) {
                    this.load(r);
                    const i = this.responsive.find((r => "screen" === r.mode && screen ? r.maxWidth * e > screen.availWidth : r.maxWidth * e > t));
                    return this.load(null === i || void 0 === i ? void 0 : i.options), null === i || void 0 === i ? void 0 : i.maxWidth
                }
                setTheme(t) {
                    if (t) {
                        const e = this.themes.find((e => e.name === t));
                        e && this.load(e.options)
                    } else {
                        const t = "undefined" !== typeof matchMedia && matchMedia("(prefers-color-scheme: dark)"),
                            e = t && t.matches,
                            r = Oe(this, Ie, "m", Ne).call(this, e ? "dark" : "light");
                        r && this.load(r.options)
                    }
                }
                importPreset(t) {
                    this.load(Oe(this, Se, "f").plugins.getPreset(t))
                }
            }
            Pe = new WeakMap, Se = new WeakMap, Ie = new WeakSet, Ne = function(t) {
                var e;
                return null !== (e = this.themes.find((e => e.default.value && e.default.mode === t))) && void 0 !== e ? e : this.themes.find((t => t.default.value && "any" === t.default.mode))
            };
            var Be, De = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                ze = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            class Fe {
                constructor(t, e) {
                    this.container = e, Be.set(this, void 0), De(this, Be, t, "f"), this.externalInteractors = [], this.particleInteractors = []
                }
                async externalInteract(t) {
                    for (const e of this.externalInteractors) e.isEnabled() && await e.interact(t)
                }
                handleClickMode(t) {
                    for (const e of this.externalInteractors) e.handleClickMode && e.handleClickMode(t)
                }
                init() {
                    const t = ze(this, Be, "f").plugins.getInteractors(this.container, !0);
                    this.externalInteractors = [], this.particleInteractors = [];
                    for (const e of t) {
                        switch (e.type) {
                            case 0:
                                this.externalInteractors.push(e);
                                break;
                            case 1:
                                this.particleInteractors.push(e)
                        }
                        e.init()
                    }
                }
                async particlesInteract(t, e) {
                    for (const r of this.externalInteractors) r.clear(t);
                    for (const r of this.particleInteractors) r.isEnabled(t) && await r.interact(t, e)
                }
                async reset(t) {
                    for (const e of this.externalInteractors) e.isEnabled() && await e.reset(t);
                    for (const e of this.particleInteractors) e.isEnabled(t) && await e.reset(t)
                }
            }
            Be = new WeakMap;
            class Ue extends d {
                constructor(t, e, r) {
                    if (super(t, e), "number" !== typeof t && t) this.z = t.z;
                    else {
                        if (void 0 === r) throw new Error("tsParticles - Vector not initialized correctly");
                        this.z = r
                    }
                }
                static get origin() {
                    return Ue.create(0, 0, 0)
                }
                static clone(t) {
                    return Ue.create(t.x, t.y, t.z)
                }
                static create(t, e, r) {
                    return new Ue(t, e, r)
                }
                add(t) {
                    return t instanceof Ue ? Ue.create(this.x + t.x, this.y + t.y, this.z + t.z) : super.add(t)
                }
                addTo(t) {
                    super.addTo(t), t instanceof Ue && (this.z += t.z)
                }
                copy() {
                    return Ue.clone(this)
                }
                div(t) {
                    return Ue.create(this.x / t, this.y / t, this.z / t)
                }
                divTo(t) {
                    super.divTo(t), this.z /= t
                }
                mult(t) {
                    return Ue.create(this.x * t, this.y * t, this.z * t)
                }
                multTo(t) {
                    super.multTo(t), this.z *= t
                }
                setTo(t) {
                    super.setTo(t);
                    const e = t;
                    void 0 !== e.z && (this.z = e.z)
                }
                sub(t) {
                    return t instanceof Ue ? Ue.create(this.x - t.x, this.y - t.y, this.z - t.z) : super.sub(t)
                }
                subFrom(t) {
                    super.subFrom(t), t instanceof Ue && (this.z -= t.z)
                }
            }
            var qe, He = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                je = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            const Ge = t => {
                (l(t.outMode, t.checkModes) || l(t.outMode, t.checkModes)) && (t.coord > t.maxCoord - 2 * t.radius ? t.setCb(-t.radius) : t.coord < 2 * t.radius && t.setCb(t.radius))
            };
            class Ke {
                constructor(t, e, r, i, n, o) {
                    var s, a, h, l, c, g;
                    this.id = e, this.container = r, this.group = o, qe.set(this, void 0), He(this, qe, t, "f"), this.fill = !0, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.splitCount = 0, this.misplaced = !1, this.retina = {
                        maxDistance: {}
                    }, this.outType = "normal", this.ignoresResizeRatio = !0;
                    const w = r.retina.pixelRatio,
                        b = r.actualOptions,
                        A = Te(je(this, qe, "f"), r, b.particles),
                        M = A.shape.type,
                        E = A.reduceDuplicates;
                    if (this.shape = M instanceof Array ? u(M, this.id, E) : M, null === n || void 0 === n ? void 0 : n.shape) {
                        if (n.shape.type) {
                            const t = n.shape.type;
                            this.shape = t instanceof Array ? u(t, this.id, E) : t
                        }
                        const t = new ge;
                        t.load(n.shape), this.shape && (this.shapeData = this.loadShapeData(t, E))
                    } else this.shapeData = this.loadShapeData(A.shape, E);
                    A.load(n), A.load(null === (s = this.shapeData) || void 0 === s ? void 0 : s.particles), this.interactivity = new kt, this.interactivity.load(r.actualOptions.interactivity), this.interactivity.load(A.interactivity), this.fill = null !== (h = null === (a = this.shapeData) || void 0 === a ? void 0 : a.fill) && void 0 !== h ? h : this.fill, this.close = null !== (c = null === (l = this.shapeData) || void 0 === l ? void 0 : l.close) && void 0 !== c ? c : this.close, this.options = A, this.pathDelay = 1e3 * y(this.options.move.path.delay);
                    const k = p(this.options.zIndex.value);
                    r.retina.initParticle(this);
                    const x = this.options.size,
                        C = x.value,
                        _ = x.animation;
                    if (this.size = {
                            enable: x.animation.enable,
                            value: p(x.value) * r.retina.pixelRatio,
                            max: v(C) * w,
                            min: m(C) * w,
                            loops: 0,
                            maxLoops: p(x.animation.count)
                        }, _.enable) {
                        switch (this.size.status = 0, this.size.decay = 1 - p(_.decay), _.startValue) {
                            case "min":
                                this.size.value = this.size.min, this.size.status = 0;
                                break;
                            case "random":
                                this.size.value = f(this.size) * w, this.size.status = Math.random() >= .5 ? 0 : 1;
                                break;
                            default:
                                this.size.value = this.size.max, this.size.status = 1
                        }
                        this.size.velocity = (null !== (g = this.retina.sizeAnimationSpeed) && void 0 !== g ? g : r.retina.sizeAnimationSpeed) / 100 * r.retina.reduceFactor, _.sync || (this.size.velocity *= Math.random())
                    }
                    var I, P, S;
                    this.bubble = {
                        inRange: !1
                    }, this.position = this.calcPosition(r, i, (I = k, P = 0, S = r.zLayers, Math.min(Math.max(I, P), S))), this.initialPosition = this.position.copy();
                    const N = r.canvas.size,
                        L = this.options.move.center;
                    switch (this.moveCenter = {
                        x: N.width * L.x / 100,
                        y: N.height * L.y / 100,
                        radius: this.options.move.center.radius
                    }, this.direction = function(t, e, r) {
                        if ("number" === typeof t) return t * Math.PI / 180;
                        switch (t) {
                            case "top":
                                return -Math.PI / 2;
                            case "top-right":
                                return -Math.PI / 4;
                            case "right":
                                return 0;
                            case "bottom-right":
                                return Math.PI / 4;
                            case "bottom":
                                return Math.PI / 2;
                            case "bottom-left":
                                return 3 * Math.PI / 4;
                            case "left":
                                return Math.PI;
                            case "top-left":
                                return -3 * Math.PI / 4;
                            case "inside":
                                return Math.atan2(r.y - e.y, r.x - e.x);
                            case "outside":
                                return Math.atan2(e.y - r.y, e.x - r.x);
                            default:
                                return Math.random() * Math.PI * 2
                        }
                    }(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
                        case "inside":
                            this.outType = "inside";
                            break;
                        case "outside":
                            this.outType = "outside"
                    }
                    this.initialVelocity = this.calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - p(this.options.move.decay), this.offset = d.origin;
                    const O = r.particles;
                    O.needsSort = O.needsSort || O.lastZIndex < this.position.z, O.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / r.zLayers, this.sides = 24;
                    let R = r.drawers.get(this.shape);
                    R || (R = je(this, qe, "f").plugins.getShapeDrawer(this.shape), R && r.drawers.set(this.shape, R)), (null === R || void 0 === R ? void 0 : R.loadShape) && (null === R || void 0 === R || R.loadShape(this));
                    const B = null === R || void 0 === R ? void 0 : R.getSidesCount;
                    B && (this.sides = B(this)), this.spawning = !1, this.shadowColor = T(this.options.shadow.color);
                    for (const u of r.particles.updaters) u.init && u.init(this);
                    for (const u of r.particles.movers) u.init && u.init(this);
                    R && R.particleInit && R.particleInit(r, this);
                    for (const [, u] of r.plugins) u.particleCreated && u.particleCreated(this)
                }
                destroy(t) {
                    if (this.unbreakable || this.destroyed) return;
                    this.destroyed = !0, this.bubble.inRange = !1;
                    for (const [, e] of this.container.plugins) e.particleDestroyed && e.particleDestroyed(this, t);
                    if (t) return;
                    "split" === this.options.destroy.mode && this.split()
                }
                draw(t) {
                    const e = this.container;
                    for (const [, r] of e.plugins) e.canvas.drawParticlePlugin(r, this, t);
                    e.canvas.drawParticle(this, t)
                }
                getFillColor() {
                    var t, e;
                    const r = null !== (t = this.bubble.color) && void 0 !== t ? t : D(this.color);
                    if (r && this.roll && (this.backColor || this.roll.alter)) {
                        const t = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                            i = this.roll.horizontal ? Math.PI / 2 : 0;
                        if (Math.floor(((null !== (e = this.roll.angle) && void 0 !== e ? e : 0) + i) / (Math.PI / t)) % 2) {
                            if (this.backColor) return this.backColor;
                            if (this.roll.alter) return function(t, e, r) {
                                return {
                                    h: t.h,
                                    s: t.s,
                                    l: t.l + ("darken" === e ? -1 : 1) * r
                                }
                            }(r, this.roll.alter.type, this.roll.alter.value)
                        }
                    }
                    return r
                }
                getMass() {
                    return this.getRadius() ** 2 * Math.PI / 2
                }
                getPosition() {
                    return {
                        x: this.position.x + this.offset.x,
                        y: this.position.y + this.offset.y,
                        z: this.position.z
                    }
                }
                getRadius() {
                    var t;
                    return null !== (t = this.bubble.radius) && void 0 !== t ? t : this.size.value
                }
                getStrokeColor() {
                    var t, e;
                    return null !== (e = null !== (t = this.bubble.color) && void 0 !== t ? t : D(this.strokeColor)) && void 0 !== e ? e : this.getFillColor()
                }
                isInsideCanvas() {
                    const t = this.getRadius(),
                        e = this.container.canvas.size;
                    return this.position.x >= -t && this.position.y >= -t && this.position.y <= e.height + t && this.position.x <= e.width + t
                }
                isVisible() {
                    return !this.destroyed && !this.spawning && this.isInsideCanvas()
                }
                reset() {
                    this.opacity && (this.opacity.loops = 0), this.size.loops = 0
                }
                calcPosition(t, e, r, i = 0) {
                    var n, o, s, a;
                    for (const [, p] of t.plugins) {
                        const t = void 0 !== p.particlePosition ? p.particlePosition(e, this) : void 0;
                        if (void 0 !== t) return Ue.create(t.x, t.y, r)
                    }
                    const h = A({
                            size: t.canvas.size,
                            position: e
                        }),
                        l = Ue.create(h.x, h.y, r),
                        u = this.getRadius(),
                        c = this.options.move.outModes,
                        d = e => {
                            Ge({
                                outMode: e,
                                checkModes: ["bounce", "bounce-horizontal"],
                                coord: l.x,
                                maxCoord: t.canvas.size.width,
                                setCb: t => l.x += t,
                                radius: u
                            })
                        },
                        f = e => {
                            Ge({
                                outMode: e,
                                checkModes: ["bounce", "bounce-vertical"],
                                coord: l.y,
                                maxCoord: t.canvas.size.height,
                                setCb: t => l.y += t,
                                radius: u
                            })
                        };
                    return d(null !== (n = c.left) && void 0 !== n ? n : c.default), d(null !== (o = c.right) && void 0 !== o ? o : c.default), f(null !== (s = c.top) && void 0 !== s ? s : c.default), f(null !== (a = c.bottom) && void 0 !== a ? a : c.default), this.checkOverlap(l, i) ? this.calcPosition(t, void 0, r, i + 1) : l
                }
                calculateVelocity() {
                    const t = function(t) {
                            const e = d.origin;
                            return e.length = 1, e.angle = t, e
                        }(this.direction).copy(),
                        e = this.options.move;
                    if ("inside" === e.direction || "outside" === e.direction) return t;
                    const r = Math.PI / 180 * p(e.angle.value),
                        i = Math.PI / 180 * p(e.angle.offset),
                        n = {
                            left: i - r / 2,
                            right: i + r / 2
                        };
                    return e.straight || (t.angle += f(g(n.left, n.right))), e.random && "number" === typeof e.speed && (t.length *= Math.random()), t
                }
                checkOverlap(t, e = 0) {
                    const r = this.options.collisions,
                        i = this.getRadius();
                    if (!r.enable) return !1;
                    const n = r.overlap;
                    if (n.enable) return !1;
                    const o = n.retries;
                    if (o >= 0 && e > o) throw new Error("Particle is overlapping and can't be placed");
                    let s = !1;
                    for (const a of this.container.particles.array)
                        if (w(t, a.position) < i + a.getRadius()) {
                            s = !0;
                            break
                        }
                    return s
                }
                loadShapeData(t, e) {
                    const r = t.options[this.shape];
                    if (r) return c({}, r instanceof Array ? u(r, this.id, e) : r)
                }
                split() {
                    const t = this.options.destroy.split;
                    if (t.count >= 0 && this.splitCount++ > t.count) return;
                    const e = y(t.rate),
                        r = t.particles instanceof Array ? u(t.particles) : t.particles;
                    for (let i = 0; i < e; i++) this.container.particles.addSplitParticle(this, r)
                }
            }
            qe = new WeakMap;
            class Ve {
                constructor(t, e) {
                    this.position = t, this.particle = e
                }
            }
            class Je {
                constructor(t, e) {
                    this.position = {
                        x: t,
                        y: e
                    }
                }
            }
            class Qe extends Je {
                constructor(t, e, r) {
                    super(t, e), this.radius = r
                }
                contains(t) {
                    return w(t, this.position) <= this.radius
                }
                intersects(t) {
                    const e = t,
                        r = t,
                        i = this.position,
                        n = t.position,
                        o = Math.abs(n.x - i.x),
                        s = Math.abs(n.y - i.y),
                        a = this.radius;
                    if (void 0 !== r.radius) {
                        return a + r.radius > Math.sqrt(o * o + s + s)
                    }
                    if (void 0 !== e.size) {
                        const t = e.size.width,
                            r = e.size.height,
                            i = Math.pow(o - t, 2) + Math.pow(s - r, 2);
                        return !(o > a + t || s > a + r) && (o <= t || s <= r || i <= a * a)
                    }
                    return !1
                }
            }
            class Ze extends Je {
                constructor(t, e, r, i) {
                    super(t, e), this.size = {
                        height: i,
                        width: r
                    }
                }
                contains(t) {
                    const e = this.size.width,
                        r = this.size.height,
                        i = this.position;
                    return t.x >= i.x && t.x <= i.x + e && t.y >= i.y && t.y <= i.y + r
                }
                intersects(t) {
                    const e = t,
                        r = t,
                        i = this.size.width,
                        n = this.size.height,
                        o = this.position,
                        s = t.position;
                    if (void 0 !== r.radius) return r.intersects(this);
                    if (!e.size) return !1;
                    const a = e.size,
                        h = a.width,
                        l = a.height;
                    return s.x < o.x + i && s.x + h > o.x && s.y < o.y + n && s.y + l > o.y
                }
            }
            class Ye extends Qe {
                constructor(t, e, r, i) {
                    super(t, e, r), this.canvasSize = i, this.canvasSize = Object.assign({}, i)
                }
                contains(t) {
                    if (super.contains(t)) return !0;
                    const e = {
                        x: t.x - this.canvasSize.width,
                        y: t.y
                    };
                    if (super.contains(e)) return !0;
                    const r = {
                        x: t.x - this.canvasSize.width,
                        y: t.y - this.canvasSize.height
                    };
                    if (super.contains(r)) return !0;
                    const i = {
                        x: t.x,
                        y: t.y - this.canvasSize.height
                    };
                    return super.contains(i)
                }
                intersects(t) {
                    if (super.intersects(t)) return !0;
                    const e = t,
                        r = t,
                        i = {
                            x: t.position.x - this.canvasSize.width,
                            y: t.position.y - this.canvasSize.height
                        };
                    if (void 0 !== r.radius) {
                        const t = new Qe(i.x, i.y, 2 * r.radius);
                        return super.intersects(t)
                    }
                    if (void 0 !== e.size) {
                        const t = new Ze(i.x, i.y, 2 * e.size.width, 2 * e.size.height);
                        return super.intersects(t)
                    }
                    return !1
                }
            }
            class We {
                constructor(t, e) {
                    this.rectangle = t, this.capacity = e, this.points = [], this.divided = !1
                }
                insert(t) {
                    var e, r, i, n, o;
                    return !!this.rectangle.contains(t.position) && (this.points.length < this.capacity ? (this.points.push(t), !0) : (this.divided || this.subdivide(), null !== (o = (null === (e = this.northEast) || void 0 === e ? void 0 : e.insert(t)) || (null === (r = this.northWest) || void 0 === r ? void 0 : r.insert(t)) || (null === (i = this.southEast) || void 0 === i ? void 0 : i.insert(t)) || (null === (n = this.southWest) || void 0 === n ? void 0 : n.insert(t))) && void 0 !== o && o))
                }
                query(t, e, r) {
                    var i, n, o, s;
                    const a = null !== r && void 0 !== r ? r : [];
                    if (!t.intersects(this.rectangle)) return [];
                    for (const h of this.points) !t.contains(h.position) && w(t.position, h.position) > h.particle.getRadius() && (!e || e(h.particle)) || a.push(h.particle);
                    return this.divided && (null === (i = this.northEast) || void 0 === i || i.query(t, e, a), null === (n = this.northWest) || void 0 === n || n.query(t, e, a), null === (o = this.southEast) || void 0 === o || o.query(t, e, a), null === (s = this.southWest) || void 0 === s || s.query(t, e, a)), a
                }
                queryCircle(t, e, r) {
                    return this.query(new Qe(t.x, t.y, e), r)
                }
                queryCircleWarp(t, e, r, i) {
                    const n = r,
                        o = r;
                    return this.query(new Ye(t.x, t.y, e, void 0 !== n.canvas ? n.canvas.size : o), i)
                }
                queryRectangle(t, e, r) {
                    return this.query(new Ze(t.x, t.y, e.width, e.height), r)
                }
                subdivide() {
                    const t = this.rectangle.position.x,
                        e = this.rectangle.position.y,
                        r = this.rectangle.size.width,
                        i = this.rectangle.size.height,
                        n = this.capacity;
                    this.northEast = new We(new Ze(t, e, r / 2, i / 2), n), this.northWest = new We(new Ze(t + r / 2, e, r / 2, i / 2), n), this.southEast = new We(new Ze(t, e + i / 2, r / 2, i / 2), n), this.southWest = new We(new Ze(t + r / 2, e + i / 2, r / 2, i / 2), n), this.divided = !0
                }
            }
            var Xe, $e = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                tr = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            class er {
                constructor(t, e) {
                    this.container = e, Xe.set(this, void 0), $e(this, Xe, t, "f"), this.nextId = 0, this.array = [], this.zArray = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this.freqs = {
                        links: new Map,
                        triangles: new Map
                    }, this.interactionManager = new Fe(tr(this, Xe, "f"), e);
                    const r = this.container.canvas.size;
                    this.quadTree = new We(new Ze(-r.width / 4, -r.height / 4, 3 * r.width / 2, 3 * r.height / 2), 4), this.movers = tr(this, Xe, "f").plugins.getMovers(e, !0), this.updaters = tr(this, Xe, "f").plugins.getUpdaters(e, !0)
                }
                get count() {
                    return this.array.length
                }
                addManualParticles() {
                    const t = this.container,
                        e = t.actualOptions;
                    for (const r of e.manualParticles) this.addParticle(b({
                        size: t.canvas.size,
                        position: r.position
                    }), r.options)
                }
                addParticle(t, e, r) {
                    const i = this.container,
                        n = i.actualOptions.particles.number.limit * i.density;
                    if (n > 0) {
                        const t = this.count + 1 - n;
                        t > 0 && this.removeQuantity(t)
                    }
                    return this.pushParticle(t, e, r)
                }
                addSplitParticle(t, e) {
                    const r = t.options.destroy.split,
                        i = Te(tr(this, Xe, "f"), this.container, t.options),
                        n = y(r.factor);
                    i.color.load({
                        value: {
                            hsl: t.getFillColor()
                        }
                    }), "number" === typeof i.size.value ? i.size.value /= n : (i.size.value.min /= n, i.size.value.max /= n), i.load(e);
                    const o = r.sizeOffset ? g(-t.size.value, t.size.value) : 0,
                        s = {
                            x: t.position.x + f(o),
                            y: t.position.y + f(o)
                        };
                    return this.pushParticle(s, i, t.group, (e => !(e.size.value < .5) && (e.velocity.length = f(g(t.velocity.length, e.velocity.length)), e.splitCount = t.splitCount + 1, e.unbreakable = !0, setTimeout((() => {
                        e.unbreakable = !1
                    }), 500), !0)))
                }
                clear() {
                    this.array = [], this.zArray = []
                }
                destroy() {
                    this.array = [], this.zArray = [], this.movers = [], this.updaters = []
                }
                async draw(t) {
                    const e = this.container,
                        r = this.container.canvas.size;
                    this.quadTree = new We(new Ze(-r.width / 4, -r.height / 4, 3 * r.width / 2, 3 * r.height / 2), 4), e.canvas.clear(), await this.update(t), this.needsSort && (this.zArray.sort(((t, e) => e.position.z - t.position.z || t.id - e.id)), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = !1);
                    for (const [, i] of e.plugins) e.canvas.drawPlugin(i, t);
                    for (const i of this.zArray) i.draw(t)
                }
                getLinkFrequency(t, e) {
                    const r = g(t.id, e.id),
                        i = `${m(r)}_${v(r)}`;
                    let n = this.freqs.links.get(i);
                    return void 0 === n && (n = Math.random(), this.freqs.links.set(i, n)), n
                }
                getTriangleFrequency(t, e, r) {
                    let [i, n, o] = [t.id, e.id, r.id];
                    i > n && ([n, i] = [i, n]), n > o && ([o, n] = [n, o]), i > o && ([o, i] = [i, o]);
                    const s = `${i}_${n}_${o}`;
                    let a = this.freqs.triangles.get(s);
                    return void 0 === a && (a = Math.random(), this.freqs.triangles.set(s, a)), a
                }
                handleClickMode(t) {
                    this.interactionManager.handleClickMode(t)
                }
                init() {
                    var t;
                    const e = this.container,
                        r = e.actualOptions;
                    this.lastZIndex = 0, this.needsSort = !1, this.freqs.links = new Map, this.freqs.triangles = new Map;
                    let i = !1;
                    this.updaters = tr(this, Xe, "f").plugins.getUpdaters(e, !0), this.interactionManager.init();
                    for (const [, n] of e.plugins)
                        if (void 0 !== n.particlesInitialization && (i = n.particlesInitialization()), i) break;
                    if (this.addManualParticles(), !i) {
                        for (const e in r.particles.groups) {
                            const i = r.particles.groups[e];
                            for (let n = this.count, o = 0; o < (null === (t = i.number) || void 0 === t ? void 0 : t.value) && n < r.particles.number.value; n++, o++) this.addParticle(void 0, i, e)
                        }
                        for (let t = this.count; t < r.particles.number.value; t++) this.addParticle()
                    }
                    this.interactionManager.init(), e.pathGenerator.init(e)
                }
                push(t, e, r, i) {
                    this.pushing = !0;
                    for (let n = 0; n < t; n++) this.addParticle(null === e || void 0 === e ? void 0 : e.position, r, i);
                    this.pushing = !1
                }
                async redraw() {
                    this.clear(), this.init(), await this.draw({
                        value: 0,
                        factor: 0
                    })
                }
                remove(t, e, r) {
                    this.removeAt(this.array.indexOf(t), void 0, e, r)
                }
                removeAt(t, e = 1, r, i) {
                    if (!(t >= 0 && t <= this.count)) return;
                    let n = 0;
                    for (let o = t; n < e && o < this.count; o++) {
                        const t = this.array[o];
                        if (!t || t.group !== r) continue;
                        t.destroy(i), this.array.splice(o--, 1);
                        const e = this.zArray.indexOf(t);
                        this.zArray.splice(e, 1), n++, tr(this, Xe, "f").dispatchEvent("particleRemoved", {
                            container: this.container,
                            data: {
                                particle: t
                            }
                        })
                    }
                }
                removeQuantity(t, e) {
                    this.removeAt(0, t, e)
                }
                setDensity() {
                    const t = this.container.actualOptions;
                    for (const e in t.particles.groups) this.applyDensity(t.particles.groups[e], 0, e);
                    this.applyDensity(t.particles, t.manualParticles.length)
                }
                async update(t) {
                    const e = this.container,
                        r = [];
                    e.pathGenerator.update();
                    for (const [, i] of e.plugins) i.update && i.update(t);
                    for (const i of this.array) {
                        const n = e.canvas.resizeFactor;
                        n && !i.ignoresResizeRatio && (i.position.x *= n.width, i.position.y *= n.height), i.ignoresResizeRatio = !1, await this.interactionManager.reset(i);
                        for (const [, e] of this.container.plugins) {
                            if (i.destroyed) break;
                            e.particleUpdate && e.particleUpdate(i, t)
                        }
                        for (const e of this.movers) e.isEnabled(i) && e.move(i, t);
                        i.destroyed ? r.push(i) : this.quadTree.insert(new Ve(i.getPosition(), i))
                    }
                    for (const i of r) this.remove(i);
                    await this.interactionManager.externalInteract(t);
                    for (const i of e.particles.array) {
                        for (const e of this.updaters) e.update(i, t);
                        i.destroyed || i.spawning || await this.interactionManager.particlesInteract(i, t)
                    }
                    delete e.canvas.resizeFactor
                }
                applyDensity(t, e, r) {
                    var i;
                    if (!(null === (i = t.number.density) || void 0 === i ? void 0 : i.enable)) return;
                    const n = t.number,
                        o = this.initDensityFactor(n.density),
                        s = n.value,
                        a = n.limit > 0 ? n.limit : s,
                        h = Math.min(s, a) * o + e,
                        l = Math.min(this.count, this.array.filter((t => t.group === r)).length);
                    this.limit = n.limit * o, l < h ? this.push(Math.abs(h - l), void 0, t, r) : l > h && this.removeQuantity(l - h, r)
                }
                initDensityFactor(t) {
                    const e = this.container;
                    if (!e.canvas.element || !t.enable) return 1;
                    const r = e.canvas.element,
                        i = e.retina.pixelRatio;
                    return r.width * r.height / (t.factor * i ** 2 * t.area)
                }
                pushParticle(t, e, r, i) {
                    try {
                        const n = new Ke(tr(this, Xe, "f"), this.nextId, this.container, t, e, r);
                        let o = !0;
                        if (i && (o = i(n)), !o) return;
                        return this.array.push(n), this.zArray.push(n), this.nextId++, tr(this, Xe, "f").dispatchEvent("particleAdded", {
                            container: this.container,
                            data: {
                                particle: n
                            }
                        }), n
                    } catch (n) {
                        return void console.warn(`error adding particle: ${n}`)
                    }
                }
            }
            Xe = new WeakMap;
            class rr {
                constructor(t) {
                    this.container = t
                }
                init() {
                    const t = this.container,
                        e = t.actualOptions;
                    this.pixelRatio = !e.detectRetina || h() ? 1 : window.devicePixelRatio;
                    const r = this.container.actualOptions.motion;
                    if (r && (r.disable || r.reduce.value))
                        if (h() || "undefined" === typeof matchMedia || !matchMedia) this.reduceFactor = 1;
                        else {
                            const e = matchMedia("(prefers-reduced-motion: reduce)");
                            if (e) {
                                this.handleMotionChange(e);
                                const r = () => {
                                    this.handleMotionChange(e), t.refresh().catch((() => {}))
                                };
                                void 0 !== e.addEventListener ? e.addEventListener("change", r) : void 0 !== e.addListener && e.addListener(r)
                            }
                        }
                    else this.reduceFactor = 1;
                    const i = this.pixelRatio;
                    if (t.canvas.element) {
                        const e = t.canvas.element;
                        t.canvas.size.width = e.offsetWidth * i, t.canvas.size.height = e.offsetHeight * i
                    }
                    const n = e.particles;
                    this.attractDistance = p(n.move.attract.distance) * i, this.linksDistance = n.links.distance * i, this.linksWidth = n.links.width * i, this.sizeAnimationSpeed = p(n.size.animation.speed) * i, this.maxSpeed = p(n.move.gravity.maxSpeed) * i;
                    const o = e.interactivity.modes;
                    this.connectModeDistance = o.connect.distance * i, this.connectModeRadius = o.connect.radius * i, this.grabModeDistance = o.grab.distance * i, this.repulseModeDistance = o.repulse.distance * i, this.bounceModeDistance = o.bounce.distance * i, this.attractModeDistance = o.attract.distance * i, this.slowModeRadius = o.slow.radius * i, this.bubbleModeDistance = o.bubble.distance * i, o.bubble.size && (this.bubbleModeSize = o.bubble.size * i)
                }
                initParticle(t) {
                    const e = t.options,
                        r = this.pixelRatio,
                        i = e.move.distance,
                        n = t.retina;
                    n.attractDistance = p(e.move.attract.distance) * r, n.linksDistance = e.links.distance * r, n.linksWidth = e.links.width * r, n.moveDrift = p(e.move.drift) * r, n.moveSpeed = p(e.move.speed) * r, n.sizeAnimationSpeed = p(e.size.animation.speed) * r;
                    const o = n.maxDistance;
                    o.horizontal = void 0 !== i.horizontal ? i.horizontal * r : void 0, o.vertical = void 0 !== i.vertical ? i.vertical * r : void 0, n.maxSpeed = p(e.move.gravity.maxSpeed) * r
                }
                handleMotionChange(t) {
                    const e = this.container.actualOptions;
                    if (t.matches) {
                        const t = e.motion;
                        this.reduceFactor = t.disable ? 0 : t.reduce.value ? 1 / t.reduce.factor : 1
                    } else this.reduceFactor = 1
                }
            }
            var ir, nr = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                or = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };

            function sr(t, e, ...r) {
                const i = new Re(t, e);
                return _e(i, ...r), i
            }
            class ar {
                constructor(t, e, r) {
                    this.id = e, ir.set(this, void 0), nr(this, ir, t, "f"), this.fpsLimit = 120, this.duration = 0, this.lifeTime = 0, this.firstStart = !0, this.started = !1, this.destroyed = !1, this.paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = r, this._initialSourceOptions = r, this.retina = new rr(this), this.canvas = new j(this), this.particles = new er(or(this, ir, "f"), this), this.drawer = new V(this), this.pathGenerator = {
                        generate: t => {
                            const e = t.velocity.copy();
                            return e.angle += e.length * Math.PI / 180, e
                        },
                        init: () => {},
                        update: () => {}
                    }, this.interactivity = {
                        mouse: {
                            clicking: !1,
                            inside: !1
                        }
                    }, this.plugins = new Map, this.drawers = new Map, this.density = 1, this._options = sr(or(this, ir, "f"), this), this.actualOptions = sr(or(this, ir, "f"), this), this.eventListeners = new K(this), "undefined" !== typeof IntersectionObserver && IntersectionObserver && (this.intersectionObserver = new IntersectionObserver((t => this.intersectionManager(t)))), or(this, ir, "f").dispatchEvent("containerBuilt", {
                        container: this
                    })
                }
                get options() {
                    return this._options
                }
                get sourceOptions() {
                    return this._sourceOptions
                }
                addClickHandler(t) {
                    const e = this.interactivity.element;
                    if (!e) return;
                    const r = (e, r, i) => {
                        if (this.destroyed) return;
                        const n = this.retina.pixelRatio,
                            o = {
                                x: r.x * n,
                                y: r.y * n
                            },
                            s = this.particles.quadTree.queryCircle(o, i * n);
                        t(e, s)
                    };
                    let i = !1,
                        n = !1;
                    e.addEventListener("click", (t => {
                        if (this.destroyed) return;
                        const e = t,
                            i = {
                                x: e.offsetX || e.clientX,
                                y: e.offsetY || e.clientY
                            };
                        r(t, i, 1)
                    })), e.addEventListener("touchstart", (() => {
                        this.destroyed || (i = !0, n = !1)
                    })), e.addEventListener("touchmove", (() => {
                        this.destroyed || (n = !0)
                    })), e.addEventListener("touchend", (t => {
                        var e, o, s;
                        if (!this.destroyed) {
                            if (i && !n) {
                                const i = t;
                                let n = i.touches[i.touches.length - 1];
                                if (!n && (n = i.changedTouches[i.changedTouches.length - 1], !n)) return;
                                const a = null === (e = this.canvas.element) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                                    h = {
                                        x: n.clientX - (null !== (o = null === a || void 0 === a ? void 0 : a.left) && void 0 !== o ? o : 0),
                                        y: n.clientY - (null !== (s = null === a || void 0 === a ? void 0 : a.top) && void 0 !== s ? s : 0)
                                    };
                                r(t, h, Math.max(n.radiusX, n.radiusY))
                            }
                            i = !1, n = !1
                        }
                    })), e.addEventListener("touchcancel", (() => {
                        this.destroyed || (i = !1, n = !1)
                    }))
                }
                destroy() {
                    this.stop(), this.particles.destroy(), this.canvas.destroy();
                    for (const [, t] of this.drawers) t.destroy && t.destroy(this);
                    for (const t of this.drawers.keys()) this.drawers.delete(t);
                    this.destroyed = !0, or(this, ir, "f").dispatchEvent("containerDestroyed", {
                        container: this
                    })
                }
                draw(t) {
                    let e = t;
                    this.drawAnimationFrame = (h() ? t => setTimeout(t) : t => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(t))((async t => {
                        e && (this.lastFrameTime = void 0, e = !1), await this.drawer.nextFrame(t)
                    }))
                }
                exportConfiguration() {
                    return JSON.stringify(this.actualOptions, void 0, 2)
                }
                exportImage(t, e, r) {
                    var i;
                    return null === (i = this.canvas.element) || void 0 === i ? void 0 : i.toBlob(t, null !== e && void 0 !== e ? e : "image/png", r)
                }
                exportImg(t) {
                    this.exportImage(t)
                }
                getAnimationStatus() {
                    return !this.paused && !this.pageHidden
                }
                handleClickMode(t) {
                    this.particles.handleClickMode(t);
                    for (const [, e] of this.plugins) e.handleClickMode && e.handleClickMode(t)
                }
                async init() {
                    const t = or(this, ir, "f").plugins.getSupportedShapes();
                    for (const i of t) {
                        const t = or(this, ir, "f").plugins.getShapeDrawer(i);
                        t && this.drawers.set(i, t)
                    }
                    this._options = sr(or(this, ir, "f"), this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = sr(or(this, ir, "f"), this, this._options), this.retina.init(), this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this.duration = p(this.actualOptions.duration), this.lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
                    const e = or(this, ir, "f").plugins.getAvailablePlugins(this);
                    for (const [i, n] of e) this.plugins.set(i, n);
                    for (const [, i] of this.drawers) i.init && await i.init(this);
                    for (const [, i] of this.plugins) i.init ? i.init(this.actualOptions) : void 0 !== i.initAsync && await i.initAsync(this.actualOptions);
                    const r = this.actualOptions.particles.move.path;
                    r.generator && this.setPath(or(this, ir, "f").plugins.getPathGenerator(r.generator)), or(this, ir, "f").dispatchEvent("containerInit", {
                        container: this
                    }), this.particles.init(), this.particles.setDensity();
                    for (const [, i] of this.plugins) void 0 !== i.particlesSetup && i.particlesSetup();
                    or(this, ir, "f").dispatchEvent("particlesSetup", {
                        container: this
                    })
                }
                async loadTheme(t) {
                    this.currentTheme = t, await this.refresh()
                }
                pause() {
                    if (void 0 !== this.drawAnimationFrame && ((h() ? t => clearTimeout(t) : t => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(t))(this.drawAnimationFrame), delete this.drawAnimationFrame), !this.paused) {
                        for (const [, t] of this.plugins) t.pause && t.pause();
                        this.pageHidden || (this.paused = !0), or(this, ir, "f").dispatchEvent("containerPaused", {
                            container: this
                        })
                    }
                }
                play(t) {
                    const e = this.paused || t;
                    if (!this.firstStart || this.actualOptions.autoPlay) {
                        if (this.paused && (this.paused = !1), e)
                            for (const [, t] of this.plugins) t.play && t.play();
                        or(this, ir, "f").dispatchEvent("containerPlay", {
                            container: this
                        }), this.draw(e || !1)
                    } else this.firstStart = !1
                }
                refresh() {
                    return this.stop(), this.start()
                }
                reset() {
                    return this._options = sr(or(this, ir, "f"), this), this.refresh()
                }
                setNoise(t, e, r) {
                    this.setPath(t, e, r)
                }
                setPath(t, e, r) {
                    var i, n, o;
                    if (t)
                        if ("function" === typeof t) this.pathGenerator.generate = t, e && (this.pathGenerator.init = e), r && (this.pathGenerator.update = r);
                        else {
                            const e = this.pathGenerator;
                            this.pathGenerator = t, (i = this.pathGenerator).generate || (i.generate = e.generate), (n = this.pathGenerator).init || (n.init = e.init), (o = this.pathGenerator).update || (o.update = e.update)
                        }
                }
                async start() {
                    if (!this.started) {
                        await this.init(), this.started = !0, this.eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
                        for (const [, t] of this.plugins) void 0 !== t.startAsync ? await t.startAsync() : void 0 !== t.start && t.start();
                        or(this, ir, "f").dispatchEvent("containerStarted", {
                            container: this
                        }), this.play()
                    }
                }
                stop() {
                    if (this.started) {
                        this.firstStart = !0, this.started = !1, this.eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.clear(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.unobserve(this.interactivity.element);
                        for (const [, t] of this.plugins) t.stop && t.stop();
                        for (const t of this.plugins.keys()) this.plugins.delete(t);
                        or(this, ir, "f").plugins.destroy(this), delete this.particles.grabLineColor, this._sourceOptions = this._options, or(this, ir, "f").dispatchEvent("containerStopped", {
                            container: this
                        })
                    }
                }
                updateActualOptions() {
                    this.actualOptions.responsive = [];
                    const t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                    return this.actualOptions.setTheme(this.currentTheme), this.responsiveMaxWidth != t && (this.responsiveMaxWidth = t, !0)
                }
                intersectionManager(t) {
                    if (this.actualOptions.pauseOnOutsideViewport)
                        for (const e of t) e.target === this.interactivity.element && (e.isIntersecting ? this.play() : this.pause())
                }
            }
            ir = new WeakMap;
            var hr, lr = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                ur = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            async function cr(t, e) {
                const r = t instanceof Array ? u(t, e) : t;
                if (!r) return;
                const i = await fetch(r);
                return i.ok ? i.json() : (n = i.status, console.error(`Error tsParticles - fetch status: ${n}`), void console.error("Error tsParticles - File config not found"));
                var n
            }
            class dr {
                constructor(t) {
                    hr.set(this, void 0), lr(this, hr, t, "f")
                }
                load(t, e, r) {
                    const i = {
                        index: r,
                        remote: !1
                    };
                    return "string" === typeof t ? i.tagId = t : i.options = t, "number" === typeof e ? i.index = e : i.options = null !== e && void 0 !== e ? e : i.options, this.loadOptions(i)
                }
                async loadJSON(t, e, r) {
                    let i, n;
                    return "number" === typeof e || void 0 === e ? i = t : (n = t, i = e), this.loadRemoteOptions({
                        tagId: n,
                        url: i,
                        index: r,
                        remote: !0
                    })
                }
                async loadOptions(t) {
                    var e, r, i;
                    const n = null !== (e = t.tagId) && void 0 !== e ? e : `tsparticles${Math.floor(1e4*Math.random())}`,
                        {
                            index: o,
                            url: s,
                            remote: a
                        } = t,
                        h = a ? await cr(s, o) : t.options;
                    let l = null !== (r = t.element) && void 0 !== r ? r : document.getElementById(n);
                    l || (l = document.createElement("div"), l.id = n, null === (i = document.querySelector("body")) || void 0 === i || i.append(l));
                    const c = h instanceof Array ? u(h, o) : h,
                        d = ur(this, hr, "f").dom(),
                        f = d.findIndex((t => t.id === n));
                    if (f >= 0) {
                        const t = ur(this, hr, "f").domItem(f);
                        t && !t.destroyed && (t.destroy(), d.splice(f, 1))
                    }
                    let p;
                    if ("canvas" === l.tagName.toLowerCase()) p = l, p.dataset.generated = "false";
                    else {
                        const t = l.getElementsByTagName("canvas");
                        t.length ? (p = t[0], p.dataset.generated = "false") : (p = document.createElement("canvas"), p.dataset.generated = "true", l.appendChild(p))
                    }
                    p.style.width || (p.style.width = "100%"), p.style.height || (p.style.height = "100%");
                    const m = new ar(ur(this, hr, "f"), n, c);
                    return f >= 0 ? d.splice(f, 0, m) : d.push(m), m.canvas.loadCanvas(p), await m.start(), m
                }
                async loadRemoteOptions(t) {
                    return this.loadOptions(t)
                }
                async set(t, e, r, i) {
                    const n = {
                        index: i,
                        remote: !1
                    };
                    return "string" === typeof t ? n.tagId = t : n.element = t, e instanceof HTMLElement ? n.element = e : n.options = e, "number" === typeof r ? n.index = r : n.options = null !== r && void 0 !== r ? r : n.options, this.loadOptions(n)
                }
                async setJSON(t, e, r, i) {
                    let n, o, s, a;
                    return t instanceof HTMLElement ? (a = t, n = e, s = r) : (o = t, a = e, n = r, s = i), this.loadRemoteOptions({
                        tagId: o,
                        url: n,
                        index: s,
                        element: a,
                        remote: !0
                    })
                }
            }
            hr = new WeakMap;
            var fr, pr = function(t, e, r, i, n) {
                if ("m" === i) throw new TypeError("Private method is not writable");
                if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
            };
            class mr {
                constructor(t) {
                    fr.set(this, void 0), pr(this, fr, t, "f"), this.plugins = [], this.interactorsInitializers = new Map, this.moversInitializers = new Map, this.updatersInitializers = new Map, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map
                }
                addInteractor(t, e) {
                    this.interactorsInitializers.set(t, e)
                }
                addParticleMover(t, e) {
                    this.moversInitializers.set(t, e)
                }
                addParticleUpdater(t, e) {
                    this.updatersInitializers.set(t, e)
                }
                addPathGenerator(t, e) {
                    this.getPathGenerator(t) || this.pathGenerators.set(t, e)
                }
                addPlugin(t) {
                    this.getPlugin(t.id) || this.plugins.push(t)
                }
                addPreset(t, e, r = !1) {
                    !r && this.getPreset(t) || this.presets.set(t, e)
                }
                addShapeDrawer(t, e) {
                    this.getShapeDrawer(t) || this.drawers.set(t, e)
                }
                destroy(t) {
                    this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t)
                }
                getAvailablePlugins(t) {
                    const e = new Map;
                    for (const r of this.plugins) r.needsPlugin(t.actualOptions) && e.set(r.id, r.getPlugin(t));
                    return e
                }
                getInteractors(t, e = !1) {
                    let r = this.interactors.get(t);
                    return r && !e || (r = [...this.interactorsInitializers.values()].map((e => e(t))), this.interactors.set(t, r)), r
                }
                getMovers(t, e = !1) {
                    let r = this.movers.get(t);
                    return r && !e || (r = [...this.moversInitializers.values()].map((e => e(t))), this.movers.set(t, r)), r
                }
                getPathGenerator(t) {
                    return this.pathGenerators.get(t)
                }
                getPlugin(t) {
                    return this.plugins.find((e => e.id === t))
                }
                getPreset(t) {
                    return this.presets.get(t)
                }
                getShapeDrawer(t) {
                    return this.drawers.get(t)
                }
                getSupportedShapes() {
                    return this.drawers.keys()
                }
                getUpdaters(t, e = !1) {
                    let r = this.updaters.get(t);
                    return r && !e || (r = [...this.updatersInitializers.values()].map((e => e(t))), this.updaters.set(t, r)), r
                }
                loadOptions(t, e) {
                    for (const r of this.plugins) r.loadOptions(t, e)
                }
                loadParticlesOptions(t, e, ...r) {
                    const i = this.updaters.get(t);
                    if (i)
                        for (const n of i) n.loadOptions && n.loadOptions(e, ...r)
                }
            }
            fr = new WeakMap;
            var vr, gr, yr = function(t, e, r, i, n) {
                    if ("m" === i) throw new TypeError("Private method is not writable");
                    if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(t, r) : n ? n.value = r : e.set(t, r), r
                },
                wr = function(t, e, r, i) {
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
                };
            vr = new WeakMap, gr = new WeakMap;
            const br = new class {
                constructor() {
                    vr.set(this, void 0), gr.set(this, void 0), this.domArray = [], this.eventDispatcher = new a, yr(this, vr, !1, "f"), yr(this, gr, new dr(this), "f"), this.plugins = new mr(this)
                }
                addEventListener(t, e) {
                    this.eventDispatcher.addEventListener(t, e)
                }
                async addInteractor(t, e) {
                    this.plugins.addInteractor(t, e), await this.refresh()
                }
                async addMover(t, e) {
                    this.plugins.addParticleMover(t, e), await this.refresh()
                }
                async addParticleUpdater(t, e) {
                    this.plugins.addParticleUpdater(t, e), await this.refresh()
                }
                async addPathGenerator(t, e) {
                    this.plugins.addPathGenerator(t, e), await this.refresh()
                }
                async addPlugin(t) {
                    this.plugins.addPlugin(t), await this.refresh()
                }
                async addPreset(t, e, r = !1) {
                    this.plugins.addPreset(t, e, r), await this.refresh()
                }
                async addShape(t, e, r, i, n) {
                    let o;
                    o = "function" === typeof e ? {
                        afterEffect: i,
                        destroy: n,
                        draw: e,
                        init: r
                    } : e, this.plugins.addShapeDrawer(t, o), await this.refresh()
                }
                dispatchEvent(t, e) {
                    this.eventDispatcher.dispatchEvent(t, e)
                }
                dom() {
                    return this.domArray
                }
                domItem(t) {
                    const e = this.dom(),
                        r = e[t];
                    if (r && !r.destroyed) return r;
                    e.splice(t, 1)
                }
                init() {
                    wr(this, vr, "f") || yr(this, vr, !0, "f")
                }
                async load(t, e) {
                    return wr(this, gr, "f").load(t, e)
                }
                async loadFromArray(t, e, r) {
                    return wr(this, gr, "f").load(t, e, r)
                }
                async loadJSON(t, e, r) {
                    return wr(this, gr, "f").loadJSON(t, e, r)
                }
                async refresh() {
                    for (const t of this.dom()) await t.refresh()
                }
                removeEventListener(t, e) {
                    this.eventDispatcher.removeEventListener(t, e)
                }
                async set(t, e, r) {
                    return wr(this, gr, "f").set(t, e, r)
                }
                async setJSON(t, e, r, i) {
                    return wr(this, gr, "f").setJSON(t, e, r, i)
                }
                setOnClickHandler(t) {
                    const e = this.dom();
                    if (!e.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
                    for (const r of e) r.addClickHandler(t)
                }
            };
            br.init();
            var Ar = r(38252),
                Mr = r.n(Ar);
            const Er = "tsparticles";
            class kr extends n.Component {
                constructor(t) {
                    super(t), this.state = {
                        init: !1,
                        library: void 0
                    }
                }
                destroy() {
                    this.state.library && (this.state.library.destroy(), this.setState({
                        library: void 0
                    }))
                }
                shouldComponentUpdate(t) {
                    return !Mr()(t, this.props)
                }
                componentDidUpdate() {
                    this.refresh()
                }
                forceUpdate() {
                    this.refresh().then((() => {
                        super.forceUpdate()
                    }))
                }
                componentDidMount() {
                    (async () => {
                        this.props.init && await this.props.init(br), this.setState({
                            init: !0
                        }, (async () => {
                            await this.loadParticles()
                        }))
                    })()
                }
                componentWillUnmount() {
                    this.destroy()
                }
                render() {
                    const {
                        width: t,
                        height: e,
                        className: r,
                        canvasClassName: i,
                        id: o
                    } = this.props;
                    return n.createElement("div", {
                        className: r,
                        id: o
                    }, n.createElement("canvas", {
                        className: i,
                        style: Object.assign(Object.assign({}, this.props.style), {
                            width: t,
                            height: e
                        })
                    }))
                }
                async refresh() {
                    this.destroy(), await this.loadParticles()
                }
                async loadParticles() {
                    var t, e, r;
                    if (!this.state.init) return;
                    const i = null !== (e = null !== (t = this.props.id) && void 0 !== t ? t : kr.defaultProps.id) && void 0 !== e ? e : Er,
                        n = this.props.url ? await br.loadJSON(i, this.props.url) : await br.load(i, null !== (r = this.props.params) && void 0 !== r ? r : this.props.options);
                    await (async t => {
                        this.props.container && (this.props.container.current = t), this.setState({
                            library: t
                        }), this.props.loaded && await this.props.loaded(t)
                    })(n)
                }
            }
            kr.defaultProps = {
                width: "100%",
                height: "100%",
                options: {},
                style: {},
                url: void 0,
                id: Er
            };
            var xr = kr
        },
        47568: function(t, e, r) {
            "use strict";

            function i(t, e, r, i, n, o, s) {
                try {
                    var a = t[o](s),
                        h = a.value
                } catch (l) {
                    return void r(l)
                }
                a.done ? e(h) : Promise.resolve(h).then(i, n)
            }

            function n(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var s = t.apply(e, r);

                        function a(t) {
                            i(s, n, o, a, h, "next", t)
                        }

                        function h(t) {
                            i(s, n, o, a, h, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        69396: function(t, e, r) {
            "use strict";

            function i(t, e) {
                return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        e && (i = i.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, i)
                    }
                    return r
                }(Object(e)).forEach((function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                })), t
            }
            r.d(e, {
                Z: function() {
                    return i
                }
            })
        },
        99534: function(t, e, r) {
            "use strict";

            function i(t, e) {
                if (null == t) return {};
                var r, i, n = function(t, e) {
                    if (null == t) return {};
                    var r, i, n = {},
                        o = Object.keys(t);
                    for (i = 0; i < o.length; i++) r = o[i], e.indexOf(r) >= 0 || (n[r] = t[r]);
                    return n
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < o.length; i++) r = o[i], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
                }
                return n
            }
            r.d(e, {
                Z: function() {
                    return i
                }
            })
        },
        828: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return o
                }
            });
            var i = r(13375);
            var n = r(91566);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || (0, i.Z)(t, e) || (0, n.Z)(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        82222: function(t, e, r) {
            "use strict";

            function i(t) {
                return t && t.constructor === Symbol ? "symbol" : typeof t
            }
            r.d(e, {
                Z: function() {
                    return i
                }
            })
        }
    }
]);
//# sourceMappingURL=5472-208ac865dd42a017.js.map