!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
} (this, (function() {
    "use strict";
    var e, t;
    function n() {
        return e.apply(null, arguments)
    }
    function s(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function r(e) {
        return void 0 === e
    }
    function a(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function o(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function u(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s
    }
    function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function h(e, t) {
        for (var n in t) l(t, n) && (e[n] = t[n]);
        return l(t, "toString") && (e.toString = t.toString),
        l(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function d(e, t, n, s) {
        return Ot(e, t, n, s, !0).utc()
    }
    function c(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
        e._pf
    }
    function f(e) {
        if (null == e._isValid) {
            var n = c(e),
            s = t.call(n.parsedDateParts, (function(e) {
                return null != e
            })),
            i = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && s);
            if (e._strict && (i = i && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
            e._isValid = i
        }
        return e._isValid
    }
    function m(e) {
        var t = d(NaN);
        return null != e ? h(c(t), e) : c(t).userInvalidated = !0,
        t
    }
    t = Array.prototype.some ? Array.prototype.some: function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return ! 0;
        return ! 1
    };
    var _ = n.momentProperties = [];
    function y(e, t) {
        var n, s, i;
        if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = c(t)), r(t._locale) || (e._locale = t._locale), 0 < _.length) for (n = 0; n < _.length; n++) r(i = t[s = _[n]]) || (e[s] = i);
        return e
    }
    var p = !1;
    function g(e) {
        y(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === p && (p = !0, n.updateOffset(this), p = !1)
    }
    function v(e) {
        return e instanceof g || null != e && null != e._isAMomentObject
    }
    function w(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function M(e) {
        var t = +e,
        n = 0;
        return 0 !== t && isFinite(t) && (n = w(t)),
        n
    }
    function S(e, t, n) {
        var s, i = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        a = 0;
        for (s = 0; s < i; s++)(n && e[s] !== t[s] || !n && M(e[s]) !== M(t[s])) && a++;
        return a + r
    }
    function D(e) { ! 1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function k(e, t) {
        var s = !0;
        return h((function() {
            if (null != n.deprecationHandler && n.deprecationHandler(null, e), s) {
                for (var i, r = [], a = 0; a < arguments.length; a++) {
                    if (i = "", "object" == typeof arguments[a]) {
                        for (var o in i += "\n[" + a + "] ",
                        arguments[0]) i += o + ": " + arguments[0][o] + ", ";
                        i = i.slice(0, -2)
                    } else i = arguments[a];
                    r.push(i)
                }
                D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack),
                s = !1
            }
            return t.apply(this, arguments)
        }), t)
    }
    var Y, O = {};
    function b(e, t) {
        null != n.deprecationHandler && n.deprecationHandler(e, t),
        O[e] || (D(t), O[e] = !0)
    }
    function T(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function x(e, t) {
        var n, s = h({},
        e);
        for (n in t) l(t, n) && (i(e[n]) && i(t[n]) ? (s[n] = {},
        h(s[n], e[n]), h(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e) l(e, n) && !l(t, n) && i(e[n]) && (s[n] = h({},
        s[n]));
        return s
    }
    function P(e) {
        null != e && this.set(e)
    }
    n.suppressDeprecationWarnings = !1,
    n.deprecationHandler = null,
    Y = Object.keys ? Object.keys: function(e) {
        var t, n = [];
        for (t in e) l(e, t) && n.push(t);
        return n
    };
    var W = {};
    function C(e, t) {
        var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e
    }
    function H(e) {
        return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
    }
    function F(e) {
        var t, n, s = {};
        for (n in e) l(e, n) && (t = H(n)) && (s[t] = e[n]);
        return s
    }
    var z = {};
    function R(e, t) {
        z[e] = t
    }
    function U(e, t, n) {
        var s = "" + Math.abs(e),
        i = t - s.length;
        return (0 <= e ? n ? "+": "": "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }
    var j = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    L = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    N = {},
    V = {};
    function G(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
            return this[s]()
        }),
        e && (V[e] = i),
        t && (V[t[0]] = function() {
            return U(i.apply(this, arguments), t[1], t[2])
        }),
        n && (V[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        })
    }
    function A(e, t) {
        return e.isValid() ? (t = E(t, e.localeData()), N[t] = N[t] ||
        function(e) {
            var t, n, s, i = e.match(j);
            for (t = 0, n = i.length; t < n; t++) V[i[t]] ? i[t] = V[i[t]] : i[t] = (s = i[t]).match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
            return function(t) {
                var s, r = "";
                for (s = 0; s < n; s++) r += T(i[s]) ? i[s].call(t, e) : i[s];
                return r
            }
        } (t), N[t](e)) : e.localeData().invalidDate()
    }
    function E(e, t) {
        var n = 5;
        function s(e) {
            return t.longDateFormat(e) || e
        }
        for (L.lastIndex = 0; 0 <= n && L.test(e);) e = e.replace(L, s),
        L.lastIndex = 0,
        n -= 1;
        return e
    }
    var I = /\d/,
    Z = /\d\d/,
    $ = /\d{3}/,
    q = /\d{4}/,
    J = /[+-]?\d{6}/,
    B = /\d\d?/,
    Q = /\d\d\d\d?/,
    X = /\d\d\d\d\d\d?/,
    K = /\d{1,3}/,
    ee = /\d{1,4}/,
    te = /[+-]?\d{1,6}/,
    ne = /\d+/,
    se = /[+-]?\d+/,
    ie = /Z|[+-]\d\d:?\d\d/gi,
    re = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    oe = {};
    function ue(e, t, n) {
        oe[e] = T(t) ? t: function(e, s) {
            return e && n ? n: t
        }
    }
    function le(e, t) {
        return l(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, s, i) {
            return t || n || s || i
        }))))
    }
    function he(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var de = {};
    function ce(e, t) {
        var n, s = t;
        for ("string" == typeof e && (e = [e]), a(t) && (s = function(e, n) {
            n[t] = M(e)
        }), n = 0; n < e.length; n++) de[e[n]] = s
    }
    function fe(e, t) {
        ce(e, (function(e, n, s, i) {
            s._w = s._w || {},
            t(e, s._w, s, i)
        }))
    }
    var me = 0,
    _e = 1,
    ye = 2,
    pe = 3,
    ge = 4,
    ve = 5,
    we = 6,
    Me = 7,
    Se = 8;
    function De(e) {
        return ke(e) ? 366 : 365
    }
    function ke(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    G("Y", 0, 0, (function() {
        var e = this.year();
        return e <= 9999 ? "" + e: "+" + e
    })),
    G(0, ["YY", 2], 0, (function() {
        return this.year() % 100
    })),
    G(0, ["YYYY", 4], 0, "year"),
    G(0, ["YYYYY", 5], 0, "year"),
    G(0, ["YYYYYY", 6, !0], 0, "year"),
    C("year", "y"),
    R("year", 1),
    ue("Y", se),
    ue("YY", B, Z),
    ue("YYYY", ee, q),
    ue("YYYYY", te, J),
    ue("YYYYYY", te, J),
    ce(["YYYYY", "YYYYYY"], me),
    ce("YYYY", (function(e, t) {
        t[me] = 2 === e.length ? n.parseTwoDigitYear(e) : M(e)
    })),
    ce("YY", (function(e, t) {
        t[me] = n.parseTwoDigitYear(e)
    })),
    ce("Y", (function(e, t) {
        t[me] = parseInt(e, 10)
    })),
    n.parseTwoDigitYear = function(e) {
        return M(e) + (68 < M(e) ? 1900 : 2e3)
    };
    var Ye, Oe = be("FullYear", !0);
    function be(e, t) {
        return function(s) {
            return null != s ? (xe(this, e, s), n.updateOffset(this, t), this) : Te(this, e)
        }
    }
    function Te(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC": "") + t]() : NaN
    }
    function xe(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC": "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC": "") + t](n))
    }
    function Pe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = (t % 12 + 12) % 12;
        return e += (t - n) / 12,
        1 === n ? ke(e) ? 29 : 28 : 31 - n % 7 % 2
    }
    Ye = Array.prototype.indexOf ? Array.prototype.indexOf: function(e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return - 1
    },
    G("M", ["MM", 2], "Mo", (function() {
        return this.month() + 1
    })),
    G("MMM", 0, 0, (function(e) {
        return this.localeData().monthsShort(this, e)
    })),
    G("MMMM", 0, 0, (function(e) {
        return this.localeData().months(this, e)
    })),
    C("month", "M"),
    R("month", 8),
    ue("M", B),
    ue("MM", B, Z),
    ue("MMM", (function(e, t) {
        return t.monthsShortRegex(e)
    })),
    ue("MMMM", (function(e, t) {
        return t.monthsRegex(e)
    })),
    ce(["M", "MM"], (function(e, t) {
        t[_e] = M(e) - 1
    })),
    ce(["MMM", "MMMM"], (function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[_e] = i: c(n).invalidMonth = e
    }));
    var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    He = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function Fe(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = M(t);
        else if (!a(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), Pe(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC": "") + "Month"](t, n),
        e
    }
    function ze(e) {
        return null != e ? (Fe(this, e), n.updateOffset(this, !0), this) : Te(this, "Month")
    }
    var Re = ae,
    Ue = ae;
    function je() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s = [],
        i = [],
        r = [];
        for (t = 0; t < 12; t++) n = d([2e3, t]),
        s.push(this.monthsShort(n, "")),
        i.push(this.months(n, "")),
        r.push(this.months(n, "")),
        r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = he(s[t]),
        i[t] = he(i[t]);
        for (t = 0; t < 24; t++) r[t] = he(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"),
        this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }
    function Le(e) {
        var t;
        if (e < 100 && 0 <= e) {
            var n = Array.prototype.slice.call(arguments);
            n[0] = e + 400,
            t = new Date(Date.UTC.apply(null, n)),
            isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
        } else t = new Date(Date.UTC.apply(null, arguments));
        return t
    }
    function Ne(e, t, n) {
        var s = 7 + t - n;
        return - (7 + Le(e, 0, s).getUTCDay() - t) % 7 + s - 1
    }
    function Ve(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ne(e, s, i);
        return a = o <= 0 ? De(r = e - 1) + o: o > De(e) ? (r = e + 1, o - De(e)) : (r = e, o),
        {
            year: r,
            dayOfYear: a
        }
    }
    function Ge(e, t, n) {
        var s, i, r = Ne(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a),
        {
            week: s,
            year: i
        }
    }
    function Ae(e, t, n) {
        var s = Ne(e, t, n),
        i = Ne(e + 1, t, n);
        return (De(e) - s + i) / 7
    }
    function Ee(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    G("w", ["ww", 2], "wo", "week"),
    G("W", ["WW", 2], "Wo", "isoWeek"),
    C("week", "w"),
    C("isoWeek", "W"),
    R("week", 5),
    R("isoWeek", 5),
    ue("w", B),
    ue("ww", B, Z),
    ue("W", B),
    ue("WW", B, Z),
    fe(["w", "ww", "W", "WW"], (function(e, t, n, s) {
        t[s.substr(0, 1)] = M(e)
    })),
    G("d", 0, "do", "day"),
    G("dd", 0, 0, (function(e) {
        return this.localeData().weekdaysMin(this, e)
    })),
    G("ddd", 0, 0, (function(e) {
        return this.localeData().weekdaysShort(this, e)
    })),
    G("dddd", 0, 0, (function(e) {
        return this.localeData().weekdays(this, e)
    })),
    G("e", 0, 0, "weekday"),
    G("E", 0, 0, "isoWeekday"),
    C("day", "d"),
    C("weekday", "e"),
    C("isoWeekday", "E"),
    R("day", 11),
    R("weekday", 11),
    R("isoWeekday", 11),
    ue("d", B),
    ue("e", B),
    ue("E", B),
    ue("dd", (function(e, t) {
        return t.weekdaysMinRegex(e)
    })),
    ue("ddd", (function(e, t) {
        return t.weekdaysShortRegex(e)
    })),
    ue("dddd", (function(e, t) {
        return t.weekdaysRegex(e)
    })),
    fe(["dd", "ddd", "dddd"], (function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i: c(n).invalidWeekday = e
    })),
    fe(["d", "e", "E"], (function(e, t, n, s) {
        t[s] = M(e)
    }));
    var Ie = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    qe = ae,
    Je = ae,
    Be = ae;
    function Qe() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s, i, r, a = [],
        o = [],
        u = [],
        l = [];
        for (t = 0; t < 7; t++) n = d([2e3, 1]).day(t),
        s = this.weekdaysMin(n, ""),
        i = this.weekdaysShort(n, ""),
        r = this.weekdays(n, ""),
        a.push(s),
        o.push(i),
        u.push(r),
        l.push(s),
        l.push(i),
        l.push(r);
        for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = he(o[t]),
        u[t] = he(u[t]),
        l[t] = he(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }
    function Xe() {
        return this.hours() % 12 || 12
    }
    function Ke(e, t) {
        G(e, 0, 0, (function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        }))
    }
    function et(e, t) {
        return t._meridiemParse
    }
    G("H", ["HH", 2], 0, "hour"),
    G("h", ["hh", 2], 0, Xe),
    G("k", ["kk", 2], 0, (function() {
        return this.hours() || 24
    })),
    G("hmm", 0, 0, (function() {
        return "" + Xe.apply(this) + U(this.minutes(), 2)
    })),
    G("hmmss", 0, 0, (function() {
        return "" + Xe.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
    })),
    G("Hmm", 0, 0, (function() {
        return "" + this.hours() + U(this.minutes(), 2)
    })),
    G("Hmmss", 0, 0, (function() {
        return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
    })),
    Ke("a", !0),
    Ke("A", !1),
    C("hour", "h"),
    R("hour", 13),
    ue("a", et),
    ue("A", et),
    ue("H", B),
    ue("h", B),
    ue("k", B),
    ue("HH", B, Z),
    ue("hh", B, Z),
    ue("kk", B, Z),
    ue("hmm", Q),
    ue("hmmss", X),
    ue("Hmm", Q),
    ue("Hmmss", X),
    ce(["H", "HH"], pe),
    ce(["k", "kk"], (function(e, t, n) {
        var s = M(e);
        t[pe] = 24 === s ? 0 : s
    })),
    ce(["a", "A"], (function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    })),
    ce(["h", "hh"], (function(e, t, n) {
        t[pe] = M(e),
        c(n).bigHour = !0
    })),
    ce("hmm", (function(e, t, n) {
        var s = e.length - 2;
        t[pe] = M(e.substr(0, s)),
        t[ge] = M(e.substr(s)),
        c(n).bigHour = !0
    })),
    ce("hmmss", (function(e, t, n) {
        var s = e.length - 4,
        i = e.length - 2;
        t[pe] = M(e.substr(0, s)),
        t[ge] = M(e.substr(s, 2)),
        t[ve] = M(e.substr(i)),
        c(n).bigHour = !0
    })),
    ce("Hmm", (function(e, t, n) {
        var s = e.length - 2;
        t[pe] = M(e.substr(0, s)),
        t[ge] = M(e.substr(s))
    })),
    ce("Hmmss", (function(e, t, n) {
        var s = e.length - 4,
        i = e.length - 2;
        t[pe] = M(e.substr(0, s)),
        t[ge] = M(e.substr(s, 2)),
        t[ve] = M(e.substr(i))
    }));
    var tt, nt = be("Hours", !0),
    st = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Ce,
        monthsShort: He,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: Ie,
        weekdaysMin: $e,
        weekdaysShort: Ze,
        meridiemParse: /[ap]\.?m?\.?/i
    },
    it = {},
    rt = {};
    function at(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function ot(e) {
        var t = null;
        if (!it[e] && "undefined" != typeof module && module && module.exports) try {
            t = tt._abbr,
            require("./locale/" + e),
            ut(t)
        } catch(e) {}
        return it[e]
    }
    function ut(e, t) {
        var n;
        return e && ((n = r(t) ? ht(e) : lt(e, t)) ? tt = n: "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        tt._abbr
    }
    function lt(e, t) {
        if (null === t) return delete it[e],
        null;
        var n, s = st;
        if (t.abbr = e, null != it[e]) b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
        s = it[e]._config;
        else if (null != t.parentLocale) if (null != it[t.parentLocale]) s = it[t.parentLocale]._config;
        else {
            if (null == (n = ot(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []),
            rt[t.parentLocale].push({
                name: e,
                config: t
            }),
            null;
            s = n._config
        }
        return it[e] = new P(x(s, t)),
        rt[e] && rt[e].forEach((function(e) {
            lt(e.name, e.config)
        })),
        ut(e),
        it[e]
    }
    function ht(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return tt;
        if (!s(e)) {
            if (t = ot(e)) return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, s, i, r = 0; r < e.length;) {
                for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t;) {
                    if (s = ot(i.slice(0, t).join("-"))) return s;
                    if (n && n.length >= t && S(i, n, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return tt
        } (e)
    }
    function dt(e) {
        var t, n = e._a;
        return n && -2 === c(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e: n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye: n[pe] < 0 || 24 < n[pe] || 24 === n[pe] && (0 !== n[ge] || 0 !== n[ve] || 0 !== n[we]) ? pe: n[ge] < 0 || 59 < n[ge] ? ge: n[ve] < 0 || 59 < n[ve] ? ve: n[we] < 0 || 999 < n[we] ? we: -1, c(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), c(e)._overflowWeeks && -1 === t && (t = Me), c(e)._overflowWeekday && -1 === t && (t = Se), c(e).overflow = t),
        e
    }
    function ct(e, t, n) {
        return null != e ? e: null != t ? t: n
    }
    function ft(e) {
        var t, s, i, r, a, o = [];
        if (!e._d) {
            var u, l;
            for (u = e, l = new Date(n.now()), i = u._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], e._w && null == e._a[ye] && null == e._a[_e] &&
            function(e) {
                var t, n, s, i, r, a, o, u;
                if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1,
                a = 4,
                n = ct(t.GG, e._a[me], Ge(bt(), 1, 4).year),
                s = ct(t.W, 1),
                ((i = ct(t.E, 1)) < 1 || 7 < i) && (u = !0);
                else {
                    r = e._locale._week.dow,
                    a = e._locale._week.doy;
                    var l = Ge(bt(), r, a);
                    n = ct(t.gg, e._a[me], l.year),
                    s = ct(t.w, l.week),
                    null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r
                }
                s < 1 || s > Ae(n, r, a) ? c(e)._overflowWeeks = !0 : null != u ? c(e)._overflowWeekday = !0 : (o = Ve(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear)
            } (e), null != e._dayOfYear && (a = ct(e._a[me], i[me]), (e._dayOfYear > De(a) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), s = Le(a, 0, e._dayOfYear), e._a[_e] = s.getUTCMonth(), e._a[ye] = s.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = i[t];
            for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[pe] && 0 === e._a[ge] && 0 === e._a[ve] && 0 === e._a[we] && (e._nextDay = !0, e._a[pe] = 0),
            e._d = (e._useUTC ? Le: function(e, t, n, s, i, r, a) {
                var o;
                return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a),
                o
            }).apply(null, o),
            r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[pe] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0)
        }
    }
    var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    _t = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    yt = /Z|[+-]\d\d(?::?\d\d)?/,
    pt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
    gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
    vt = /^\/?Date\((\-?\d+)/i;
    function wt(e) {
        var t, n, s, i, r, a, o = e._i,
        u = mt.exec(o) || _t.exec(o);
        if (u) {
            for (c(e).iso = !0, t = 0, n = pt.length; t < n; t++) if (pt[t][1].exec(u[1])) {
                i = pt[t][0],
                s = !1 !== pt[t][2];
                break
            }
            if (null == i) return void(e._isValid = !1);
            if (u[3]) {
                for (t = 0, n = gt.length; t < n; t++) if (gt[t][1].exec(u[3])) {
                    r = (u[2] || " ") + gt[t][0];
                    break
                }
                if (null == r) return void(e._isValid = !1)
            }
            if (!s && null != r) return void(e._isValid = !1);
            if (u[4]) {
                if (!yt.exec(u[4])) return void(e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""),
            kt(e)
        } else e._isValid = !1
    }
    var Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    var St = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function Dt(e) {
        var t, n, s, i = Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (i) {
            var r = function(e, t, n, s, i, r) {
                var a = [function(e) {
                    var t = parseInt(e, 10);
                    return t <= 49 ? 2e3 + t: t <= 999 ? 1900 + t: t
                } (e), He.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
                return r && a.push(parseInt(r, 10)),
                a
            } (i[4], i[3], i[2], i[5], i[6], i[7]);
            if (n = r, s = e, (t = i[1]) && Ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (c(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
            e._a = r,
            e._tzm = function(e, t, n) {
                if (e) return St[e];
                if (t) return 0;
                var s = parseInt(n, 10),
                i = s % 100;
                return (s - i) / 100 * 60 + i
            } (i[8], i[9], i[10]),
            e._d = Le.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            c(e).rfc2822 = !0
        } else e._isValid = !1
    }
    function kt(e) {
        if (e._f !== n.ISO_8601) if (e._f !== n.RFC_2822) {
            e._a = [],
            c(e).empty = !0;
            var t, s, i, r, a, o, u, h, d = "" + e._i,
            f = d.length,
            m = 0;
            for (i = E(e._f, e._locale).match(j) || [], t = 0; t < i.length; t++) r = i[t],
            (s = (d.match(le(r, e)) || [])[0]) && (0 < (a = d.substr(0, d.indexOf(s))).length && c(e).unusedInput.push(a), d = d.slice(d.indexOf(s) + s.length), m += s.length),
            V[r] ? (s ? c(e).empty = !1 : c(e).unusedTokens.push(r), o = r, h = e, null != (u = s) && l(de, o) && de[o](u, h._a, h, o)) : e._strict && !s && c(e).unusedTokens.push(r);
            c(e).charsLeftOver = f - m,
            0 < d.length && c(e).unusedInput.push(d),
            e._a[pe] <= 12 && !0 === c(e).bigHour && 0 < e._a[pe] && (c(e).bigHour = void 0),
            c(e).parsedDateParts = e._a.slice(0),
            c(e).meridiem = e._meridiem,
            e._a[pe] = function(e, t, n) {
                var s;
                return null == n ? t: null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t)
            } (e._locale, e._a[pe], e._meridiem),
            ft(e),
            dt(e)
        } else Dt(e);
        else wt(e)
    }
    function Yt(e) {
        var t, l, d, _, p = e._i,
        w = e._f;
        return e._locale = e._locale || ht(e._l),
        null === p || void 0 === w && "" === p ? m({
            nullInput: !0
        }) : ("string" == typeof p && (e._i = p = e._locale.preparse(p)), v(p) ? new g(dt(p)) : (o(p) ? e._d = p: s(w) ?
        function(e) {
            var t, n, s, i, r;
            if (0 === e._f.length) return c(e).invalidFormat = !0,
            e._d = new Date(NaN);
            for (i = 0; i < e._f.length; i++) r = 0,
            t = y({},
            e),
            null != e._useUTC && (t._useUTC = e._useUTC),
            t._f = e._f[i],
            kt(t),
            f(t) && (r += c(t).charsLeftOver, r += 10 * c(t).unusedTokens.length, c(t).score = r, (null == s || r < s) && (s = r, n = t));
            h(e, n || t)
        } (e) : w ? kt(e) : r(l = (t = e)._i) ? t._d = new Date(n.now()) : o(l) ? t._d = new Date(l.valueOf()) : "string" == typeof l ? (d = t, null === (_ = vt.exec(d._i)) ? (wt(d), !1 === d._isValid && (delete d._isValid, Dt(d), !1 === d._isValid && (delete d._isValid, n.createFromInputFallback(d)))) : d._d = new Date( + _[1])) : s(l) ? (t._a = u(l.slice(0), (function(e) {
            return parseInt(e, 10)
        })), ft(t)) : i(l) ?
        function(e) {
            if (!e._d) {
                var t = F(e._i);
                e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                    return e && parseInt(e, 10)
                })),
                ft(e)
            }
        } (t) : a(l) ? t._d = new Date(l) : n.createFromInputFallback(t), f(e) || (e._d = null), e))
    }
    function Ot(e, t, n, r, a) {
        var o, u = {};
        return ! 0 !== n && !1 !== n || (r = n, n = void 0),
        (i(e) &&
        function(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (e.hasOwnProperty(t)) return ! 1;
            return ! 0
        } (e) || s(e) && 0 === e.length) && (e = void 0),
        u._isAMomentObject = !0,
        u._useUTC = u._isUTC = a,
        u._l = n,
        u._i = e,
        u._f = t,
        u._strict = r,
        (o = new g(dt(Yt(u))))._nextDay && (o.add(1, "d"), o._nextDay = void 0),
        o
    }
    function bt(e, t, n, s) {
        return Ot(e, t, n, s, !1)
    }
    n.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC": ""))
    })),
    n.ISO_8601 = function() {},
    n.RFC_2822 = function() {};
    var Tt = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var e = bt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this: e: m()
    })),
    xt = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var e = bt.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this: e: m()
    }));
    function Pt(e, t) {
        var n, i;
        if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return bt();
        for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
    }
    var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function Ct(e) {
        var t = F(e),
        n = t.year || 0,
        s = t.quarter || 0,
        i = t.month || 0,
        r = t.week || t.isoWeek || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        h = t.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e) if ( - 1 === Ye.call(Wt, t) || null != e[t] && isNaN(e[t])) return ! 1;
            for (var n = !1,
            s = 0; s < Wt.length; ++s) if (e[Wt[s]]) {
                if (n) return ! 1;
                parseFloat(e[Wt[s]]) !== M(e[Wt[s]]) && (n = !0)
            }
            return ! 0
        } (t),
        this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60,
        this._days = +a + 7 * r,
        this._months = +i + 3 * s + 12 * n,
        this._data = {},
        this._locale = ht(),
        this._bubble()
    }
    function Ht(e) {
        return e instanceof Ct
    }
    function Ft(e) {
        return e < 0 ? -1 * Math.round( - 1 * e) : Math.round(e)
    }
    function zt(e, t) {
        G(e, 0, 0, (function() {
            var e = this.utcOffset(),
            n = "+";
            return e < 0 && (e = -e, n = "-"),
            n + U(~~ (e / 60), 2) + t + U(~~e % 60, 2)
        }))
    }
    zt("Z", ":"),
    zt("ZZ", ""),
    ue("Z", re),
    ue("ZZ", re),
    ce(["Z", "ZZ"], (function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Ut(re, e)
    }));
    var Rt = /([\+\-]|\d\d)/gi;
    function Ut(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var s = ((n[n.length - 1] || []) + "").match(Rt) || ["-", 0, 0],
        i = 60 * s[1] + M(s[2]);
        return 0 === i ? 0 : "+" === s[0] ? i: -i
    }
    function jt(e, t) {
        var s, i;
        return t._isUTC ? (s = t.clone(), i = (v(e) || o(e) ? e.valueOf() : bt(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + i), n.updateOffset(s, !1), s) : bt(e).local()
    }
    function Lt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function Nt() {
        return !! this.isValid() && this._isUTC && 0 === this._offset
    }
    n.updateOffset = function() {};
    var Vt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Gt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function At(e, t) {
        var n, s, i, r = e,
        o = null;
        return Ht(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        }: a(e) ? (r = {},
        t ? r[t] = e: r.milliseconds = e) : (o = Vt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
            y: 0,
            d: M(o[ye]) * n,
            h: M(o[pe]) * n,
            m: M(o[ge]) * n,
            s: M(o[ve]) * n,
            ms: M(Ft(1e3 * o[we])) * n
        }) : (o = Gt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
            y: Et(o[2], n),
            M: Et(o[3], n),
            w: Et(o[4], n),
            d: Et(o[5], n),
            h: Et(o[6], n),
            m: Et(o[7], n),
            s: Et(o[8], n)
        }) : null == r ? r = {}: "object" == typeof r && ("from" in r || "to" in r) && (i = function(e, t) {
            var n;
            return e.isValid() && t.isValid() ? (t = jt(t, e), e.isBefore(t) ? n = It(e, t) : ((n = It(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        } (bt(r.from), bt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months),
        s = new Ct(r),
        Ht(e) && l(e, "_locale") && (s._locale = e._locale),
        s
    }
    function Et(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function It(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function Zt(e, t) {
        return function(n, s) {
            var i;
            return null === s || isNaN( + s) || (b(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = s, s = i),
            $t(this, At(n = "string" == typeof n ? +n: n, s), e),
            this
        }
    }
    function $t(e, t, s, i) {
        var r = t._milliseconds,
        a = Ft(t._days),
        o = Ft(t._months);
        e.isValid() && (i = null == i || i, o && Fe(e, Te(e, "Month") + o * s), a && xe(e, "Date", Te(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), i && n.updateOffset(e, a || o))
    }
    At.fn = Ct.prototype,
    At.invalid = function() {
        return At(NaN)
    };
    var qt = Zt(1, "add"),
    Jt = Zt( - 1, "subtract");
    function Bt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        s = e.clone().add(n, "months");
        return - (n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
    }
    function Qt(e) {
        var t;
        return void 0 === e ? this._locale._abbr: (null != (t = ht(e)) && (this._locale = t), this)
    }
    n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xt = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    }));
    function Kt() {
        return this._locale
    }
    var en = 126227808e5;
    function tn(e, t) {
        return (e % t + t) % t
    }
    function nn(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400, t, n) - en: new Date(e, t, n).valueOf()
    }
    function sn(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en: Date.UTC(e, t, n)
    }
    function rn(e, t) {
        G(0, [e, e.length], 0, t)
    }
    function an(e, t, n, s, i) {
        var r;
        return null == e ? Ge(this, s, i).year: ((r = Ae(e, s, i)) < t && (t = r),
        function(e, t, n, s, i) {
            var r = Ve(e, t, n, s, i),
            a = Le(r.year, 0, r.dayOfYear);
            return this.year(a.getUTCFullYear()),
            this.month(a.getUTCMonth()),
            this.date(a.getUTCDate()),
            this
        }.call(this, e, t, n, s, i))
    }
    G(0, ["gg", 2], 0, (function() {
        return this.weekYear() % 100
    })),
    G(0, ["GG", 2], 0, (function() {
        return this.isoWeekYear() % 100
    })),
    rn("gggg", "weekYear"),
    rn("ggggg", "weekYear"),
    rn("GGGG", "isoWeekYear"),
    rn("GGGGG", "isoWeekYear"),
    C("weekYear", "gg"),
    C("isoWeekYear", "GG"),
    R("weekYear", 1),
    R("isoWeekYear", 1),
    ue("G", se),
    ue("g", se),
    ue("GG", B, Z),
    ue("gg", B, Z),
    ue("GGGG", ee, q),
    ue("gggg", ee, q),
    ue("GGGGG", te, J),
    ue("ggggg", te, J),
    fe(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, s) {
        t[s.substr(0, 2)] = M(e)
    })),
    fe(["gg", "GG"], (function(e, t, s, i) {
        t[i] = n.parseTwoDigitYear(e)
    })),
    G("Q", 0, "Qo", "quarter"),
    C("quarter", "Q"),
    R("quarter", 7),
    ue("Q", I),
    ce("Q", (function(e, t) {
        t[_e] = 3 * (M(e) - 1)
    })),
    G("D", ["DD", 2], "Do", "date"),
    C("date", "D"),
    R("date", 9),
    ue("D", B),
    ue("DD", B, Z),
    ue("Do", (function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse: t._dayOfMonthOrdinalParseLenient
    })),
    ce(["D", "DD"], ye),
    ce("Do", (function(e, t) {
        t[ye] = M(e.match(B)[0])
    }));
    var on = be("Date", !0);
    G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    C("dayOfYear", "DDD"),
    R("dayOfYear", 4),
    ue("DDD", K),
    ue("DDDD", $),
    ce(["DDD", "DDDD"], (function(e, t, n) {
        n._dayOfYear = M(e)
    })),
    G("m", ["mm", 2], 0, "minute"),
    C("minute", "m"),
    R("minute", 14),
    ue("m", B),
    ue("mm", B, Z),
    ce(["m", "mm"], ge);
    var un = be("Minutes", !1);
    G("s", ["ss", 2], 0, "second"),
    C("second", "s"),
    R("second", 15),
    ue("s", B),
    ue("ss", B, Z),
    ce(["s", "ss"], ve);
    var ln, hn = be("Seconds", !1);
    for (G("S", 0, 0, (function() {
        return~~ (this.millisecond() / 100)
    })), G(0, ["SS", 2], 0, (function() {
        return~~ (this.millisecond() / 10)
    })), G(0, ["SSS", 3], 0, "millisecond"), G(0, ["SSSS", 4], 0, (function() {
        return 10 * this.millisecond()
    })), G(0, ["SSSSS", 5], 0, (function() {
        return 100 * this.millisecond()
    })), G(0, ["SSSSSS", 6], 0, (function() {
        return 1e3 * this.millisecond()
    })), G(0, ["SSSSSSS", 7], 0, (function() {
        return 1e4 * this.millisecond()
    })), G(0, ["SSSSSSSS", 8], 0, (function() {
        return 1e5 * this.millisecond()
    })), G(0, ["SSSSSSSSS", 9], 0, (function() {
        return 1e6 * this.millisecond()
    })), C("millisecond", "ms"), R("millisecond", 16), ue("S", K, I), ue("SS", K, Z), ue("SSS", K, $), ln = "SSSS"; ln.length <= 9; ln += "S") ue(ln, ne);
    function dn(e, t) {
        t[we] = M(1e3 * ("0." + e))
    }
    for (ln = "S"; ln.length <= 9; ln += "S") ce(ln, dn);
    var cn = be("Milliseconds", !1);
    G("z", 0, 0, "zoneAbbr"),
    G("zz", 0, 0, "zoneName");
    var fn = g.prototype;
    function mn(e) {
        return e
    }
    fn.add = qt,
    fn.calendar = function(e, t) {
        var s = e || bt(),
        i = jt(s, this).startOf("day"),
        r = n.calendarFormat(this, i) || "sameElse",
        a = t && (T(t[r]) ? t[r].call(this, s) : t[r]);
        return this.format(a || this.localeData().calendar(r, this, bt(s)))
    },
    fn.clone = function() {
        return new g(this)
    },
    fn.diff = function(e, t, n) {
        var s, i, r;
        if (!this.isValid()) return NaN;
        if (! (s = jt(e, this)).isValid()) return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = H(t)) {
        case "year":
            r = Bt(this, s) / 12;
            break;
        case "month":
            r = Bt(this, s);
            break;
        case "quarter":
            r = Bt(this, s) / 3;
            break;
        case "second":
            r = (this - s) / 1e3;
            break;
        case "minute":
            r = (this - s) / 6e4;
            break;
        case "hour":
            r = (this - s) / 36e5;
            break;
        case "day":
            r = (this - s - i) / 864e5;
            break;
        case "week":
            r = (this - s - i) / 6048e5;
            break;
        default:
            r = this - s
        }
        return n ? r: w(r)
    },
    fn.endOf = function(e) {
        var t;
        if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
        var s = this._isUTC ? sn: nn;
        switch (e) {
        case "year":
            t = s(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            t = s(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            t = s(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            t = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            t = s(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            t = this._d.valueOf(),
            t += 36e5 - tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
            break;
        case "minute":
            t = this._d.valueOf(),
            t += 6e4 - tn(t, 6e4) - 1;
            break;
        case "second":
            t = this._d.valueOf(),
            t += 1e3 - tn(t, 1e3) - 1
        }
        return this._d.setTime(t),
        n.updateOffset(this, !0),
        this
    },
    fn.format = function(e) {
        e || (e = this.isUtc() ? n.defaultFormatUtc: n.defaultFormat);
        var t = A(this, e);
        return this.localeData().postformat(t)
    },
    fn.from = function(e, t) {
        return this.isValid() && (v(e) && e.isValid() || bt(e).isValid()) ? At({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    },
    fn.fromNow = function(e) {
        return this.from(bt(), e)
    },
    fn.to = function(e, t) {
        return this.isValid() && (v(e) && e.isValid() || bt(e).isValid()) ? At({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    },
    fn.toNow = function(e) {
        return this.to(bt(), e)
    },
    fn.get = function(e) {
        return T(this[e = H(e)]) ? this[e]() : this
    },
    fn.invalidAt = function() {
        return c(this).overflow
    },
    fn.isAfter = function(e, t) {
        var n = v(e) ? e: bt(e);
        return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    },
    fn.isBefore = function(e, t) {
        var n = v(e) ? e: bt(e);
        return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    },
    fn.isBetween = function(e, t, n, s) {
        var i = v(e) ? e: bt(e),
        r = v(t) ? t: bt(t);
        return !! (this.isValid() && i.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
    },
    fn.isSame = function(e, t) {
        var n, s = v(e) ? e: bt(e);
        return ! (!this.isValid() || !s.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    },
    fn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    },
    fn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    },
    fn.isValid = function() {
        return f(this)
    },
    fn.lang = Xt,
    fn.locale = Qt,
    fn.localeData = Kt,
    fn.max = xt,
    fn.min = Tt,
    fn.parsingFlags = function() {
        return h({},
        c(this))
    },
    fn.set = function(e, t) {
        if ("object" == typeof e) for (var n = function(e) {
            var t = [];
            for (var n in e) t.push({
                unit: n,
                priority: z[n]
            });
            return t.sort((function(e, t) {
                return e.priority - t.priority
            })),
            t
        } (e = F(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]);
        else if (T(this[e = H(e)])) return this[e](t);
        return this
    },
    fn.startOf = function(e) {
        var t;
        if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
        var s = this._isUTC ? sn: nn;
        switch (e) {
        case "year":
            t = s(this.year(), 0, 1);
            break;
        case "quarter":
            t = s(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            t = s(this.year(), this.month(), 1);
            break;
        case "week":
            t = s(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            t = s(this.year(), this.month(), this.date());
            break;
        case "hour":
            t = this._d.valueOf(),
            t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
            break;
        case "minute":
            t = this._d.valueOf(),
            t -= tn(t, 6e4);
            break;
        case "second":
            t = this._d.valueOf(),
            t -= tn(t, 1e3)
        }
        return this._d.setTime(t),
        n.updateOffset(this, !0),
        this
    },
    fn.subtract = Jt,
    fn.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    },
    fn.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    },
    fn.toDate = function() {
        return new Date(this.valueOf())
    },
    fn.toISOString = function(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
        n = t ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    },
    fn.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
        t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc": "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY": "YYYYYY",
        i = t + '[")]';
        return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
    },
    fn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    },
    fn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    },
    fn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    },
    fn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    },
    fn.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    },
    fn.year = Oe,
    fn.isLeapYear = function() {
        return ke(this.year())
    },
    fn.weekYear = function(e) {
        return an.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    },
    fn.isoWeekYear = function(e) {
        return an.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    },
    fn.quarter = fn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    },
    fn.month = ze,
    fn.daysInMonth = function() {
        return Pe(this.year(), this.month())
    },
    fn.week = fn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t: this.add(7 * (e - t), "d")
    },
    fn.isoWeek = fn.isoWeeks = function(e) {
        var t = Ge(this, 1, 4).week;
        return null == e ? t: this.add(7 * (e - t), "d")
    },
    fn.weeksInYear = function() {
        var e = this.localeData()._week;
        return Ae(this.year(), e.dow, e.doy)
    },
    fn.isoWeeksInYear = function() {
        return Ae(this.year(), 1, 4)
    },
    fn.date = on,
    fn.day = fn.days = function(e) {
        if (!this.isValid()) return null != e ? this: NaN;
        var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t: isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t: null: parseInt(t, 10), this.add(e - s, "d")) : s
    },
    fn.weekday = function(e) {
        if (!this.isValid()) return null != e ? this: NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t: this.add(e - t, "d")
    },
    fn.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this: NaN;
        if (null == e) return this.day() || 7;
        var t, n, s = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null: t);
        return this.day(this.day() % 7 ? s: s - 7)
    },
    fn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t: this.add(e - t, "d")
    },
    fn.hour = fn.hours = nt,
    fn.minute = fn.minutes = un,
    fn.second = fn.seconds = hn,
    fn.millisecond = fn.milliseconds = cn,
    fn.utcOffset = function(e, t, s) {
        var i, r = this._offset || 0;
        if (!this.isValid()) return null != e ? this: NaN;
        if (null == e) return this._isUTC ? r: Lt(this);
        if ("string" == typeof e) {
            if (null === (e = Ut(re, e))) return this
        } else Math.abs(e) < 16 && !s && (e *= 60);
        return ! this._isUTC && t && (i = Lt(this)),
        this._offset = e,
        this._isUTC = !0,
        null != i && this.add(i, "m"),
        r !== e && (!t || this._changeInProgress ? $t(this, At(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)),
        this
    },
    fn.utc = function(e) {
        return this.utcOffset(0, e)
    },
    fn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Lt(this), "m")),
        this
    },
    fn.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Ut(ie, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    },
    fn.hasAlignedHourOffset = function(e) {
        return !! this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    },
    fn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    },
    fn.isLocal = function() {
        return !! this.isValid() && !this._isUTC
    },
    fn.isUtcOffset = function() {
        return !! this.isValid() && this._isUTC
    },
    fn.isUtc = Nt,
    fn.isUTC = Nt,
    fn.zoneAbbr = function() {
        return this._isUTC ? "UTC": ""
    },
    fn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time": ""
    },
    fn.dates = k("dates accessor is deprecated. Use date instead.", on),
    fn.months = k("months accessor is deprecated. Use month instead", ze),
    fn.years = k("years accessor is deprecated. Use year instead", Oe),
    fn.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    })),
    fn.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
        if (!r(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (y(e, this), (e = Yt(e))._a) {
            var t = e._isUTC ? d(e._a) : bt(e._a);
            this._isDSTShifted = this.isValid() && 0 < S(e._a, t.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }));
    var _n = P.prototype;
    function yn(e, t, n, s) {
        var i = ht(),
        r = d().set(s, t);
        return i[n](r, e)
    }
    function pn(e, t, n) {
        if (a(e) && (t = e, e = void 0), e = e || "", null != t) return yn(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++) i[s] = yn(e, s, n, "month");
        return i
    }
    function gn(e, t, n, s) {
        "boolean" == typeof e ? a(t) && (n = t, t = void 0) : (t = e, e = !1, a(n = t) && (n = t, t = void 0)),
        t = t || "";
        var i, r = ht(),
        o = e ? r._week.dow: 0;
        if (null != n) return yn(t, (n + o) % 7, s, "day");
        var u = [];
        for (i = 0; i < 7; i++) u[i] = yn(t, (i + o) % 7, s, "day");
        return u
    }
    _n.calendar = function(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return T(s) ? s.call(t, n) : s
    },
    _n.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t: (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, (function(e) {
            return e.slice(1)
        })), this._longDateFormat[e])
    },
    _n.invalidDate = function() {
        return this._invalidDate
    },
    _n.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    },
    _n.preparse = mn,
    _n.postformat = mn,
    _n.relativeTime = function(e, t, n, s) {
        var i = this._relativeTime[n];
        return T(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    },
    _n.pastFuture = function(e, t) {
        var n = this._relativeTime[0 < e ? "future": "past"];
        return T(n) ? n(t) : n.replace(/%s/i, t)
    },
    _n.set = function(e) {
        var t, n;
        for (n in e) T(t = e[n]) ? this[n] = t: this["_" + n] = t;
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    },
    _n.months = function(e, t) {
        return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format": "standalone"][e.month()] : s(this._months) ? this._months: this._months.standalone
    },
    _n.monthsShort = function(e, t) {
        return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format": "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort: this._monthsShort.standalone
    },
    _n.monthsParse = function(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact) return function(e, t, n) {
            var s, i, r, a = e.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = d([2e3, s]),
            this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
            this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: null: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: null: "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: null: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
            if (i = d([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s
        }
    },
    _n.monthsRegex = function(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || je.call(this), e ? this._monthsStrictRegex: this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Ue), this._monthsStrictRegex && e ? this._monthsStrictRegex: this._monthsRegex)
    },
    _n.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || je.call(this), e ? this._monthsShortStrictRegex: this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Re), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex: this._monthsShortRegex)
    },
    _n.week = function(e) {
        return Ge(e, this._week.dow, this._week.doy).week
    },
    _n.firstDayOfYear = function() {
        return this._week.doy
    },
    _n.firstDayOfWeek = function() {
        return this._week.dow
    },
    _n.weekdays = function(e, t) {
        var n = s(this._weekdays) ? this._weekdays: this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format": "standalone"];
        return ! 0 === e ? Ee(n, this._week.dow) : e ? n[e.day()] : n
    },
    _n.weekdaysMin = function(e) {
        return ! 0 === e ? Ee(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    },
    _n.weekdaysShort = function(e) {
        return ! 0 === e ? Ee(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    },
    _n.weekdaysParse = function(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact) return function(e, t, n) {
            var s, i, r, a = e.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = d([2e3, 1]).day(s),
            this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
            this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
            this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: null: "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: null: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (i = d([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s
        }
    },
    _n.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex: this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex: this._weekdaysRegex)
    },
    _n.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Je), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex)
    },
    _n.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex)
    },
    _n.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    },
    _n.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm": "PM": n ? "am": "AM"
    },
    ut("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === M(e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
        }
    }),
    n.lang = k("moment.lang is deprecated. Use moment.locale instead.", ut),
    n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ht);
    var vn = Math.abs;
    function wn(e, t, n, s) {
        var i = At(t, n);
        return e._milliseconds += s * i._milliseconds,
        e._days += s * i._days,
        e._months += s * i._months,
        e._bubble()
    }
    function Mn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function Sn(e) {
        return 4800 * e / 146097
    }
    function Dn(e) {
        return 146097 * e / 4800
    }
    function kn(e) {
        return function() {
            return this.as(e)
        }
    }
    var Yn = kn("ms"),
    On = kn("s"),
    bn = kn("m"),
    Tn = kn("h"),
    xn = kn("d"),
    Pn = kn("w"),
    Wn = kn("M"),
    Cn = kn("Q"),
    Hn = kn("y");
    function Fn(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var zn = Fn("milliseconds"),
    Rn = Fn("seconds"),
    Un = Fn("minutes"),
    jn = Fn("hours"),
    Ln = Fn("days"),
    Nn = Fn("months"),
    Vn = Fn("years"),
    Gn = Math.round,
    An = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    },
    En = Math.abs;
    function In(e) {
        return (0 < e) - (e < 0) || +e
    }
    function Zn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n = En(this._milliseconds) / 1e3,
        s = En(this._days),
        i = En(this._months);
        t = w((e = w(n / 60)) / 60),
        n %= 60,
        e %= 60;
        var r = w(i / 12),
        a = i %= 12,
        o = s,
        u = t,
        l = e,
        h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        d = this.asSeconds();
        if (!d) return "P0D";
        var c = d < 0 ? "-": "",
        f = In(this._months) !== In(d) ? "-": "",
        m = In(this._days) !== In(d) ? "-": "",
        _ = In(this._milliseconds) !== In(d) ? "-": "";
        return c + "P" + (r ? f + r + "Y": "") + (a ? f + a + "M": "") + (o ? m + o + "D": "") + (u || l || h ? "T": "") + (u ? _ + u + "H": "") + (l ? _ + l + "M": "") + (h ? _ + h + "S": "")
    }
    var $n = Ct.prototype;
    return $n.isValid = function() {
        return this._isValid
    },
    $n.abs = function() {
        var e = this._data;
        return this._milliseconds = vn(this._milliseconds),
        this._days = vn(this._days),
        this._months = vn(this._months),
        e.milliseconds = vn(e.milliseconds),
        e.seconds = vn(e.seconds),
        e.minutes = vn(e.minutes),
        e.hours = vn(e.hours),
        e.months = vn(e.months),
        e.years = vn(e.years),
        this
    },
    $n.add = function(e, t) {
        return wn(this, e, t, 1)
    },
    $n.subtract = function(e, t) {
        return wn(this, e, t, -1)
    },
    $n.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = H(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + Sn(t), e) {
        case "month":
            return n;
        case "quarter":
            return n / 3;
        case "year":
            return n / 12
        } else switch (t = this._days + Math.round(Dn(this._months)), e) {
        case "week":
            return t / 7 + s / 6048e5;
        case "day":
            return t + s / 864e5;
        case "hour":
            return 24 * t + s / 36e5;
        case "minute":
            return 1440 * t + s / 6e4;
        case "second":
            return 86400 * t + s / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + s;
        default:
            throw new Error("Unknown unit " + e)
        }
    },
    $n.asMilliseconds = Yn,
    $n.asSeconds = On,
    $n.asMinutes = bn,
    $n.asHours = Tn,
    $n.asDays = xn,
    $n.asWeeks = Pn,
    $n.asMonths = Wn,
    $n.asQuarters = Cn,
    $n.asYears = Hn,
    $n.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12) : NaN
    },
    $n._bubble = function() {
        var e, t, n, s, i, r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
        return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * Mn(Dn(o) + a), o = a = 0),
        u.milliseconds = r % 1e3,
        e = w(r / 1e3),
        u.seconds = e % 60,
        t = w(e / 60),
        u.minutes = t % 60,
        n = w(t / 60),
        u.hours = n % 24,
        o += i = w(Sn(a += w(n / 24))),
        a -= Mn(Dn(i)),
        s = w(o / 12),
        o %= 12,
        u.days = a,
        u.months = o,
        u.years = s,
        this
    },
    $n.clone = function() {
        return At(this)
    },
    $n.get = function(e) {
        return e = H(e),
        this.isValid() ? this[e + "s"]() : NaN
    },
    $n.milliseconds = zn,
    $n.seconds = Rn,
    $n.minutes = Un,
    $n.hours = jn,
    $n.days = Ln,
    $n.weeks = function() {
        return w(this.days() / 7)
    },
    $n.months = Nn,
    $n.years = Vn,
    $n.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, n, s, i, r, a, o, u, l, h, d = this.localeData(),
        c = (t = !e, n = d, s = At(this).abs(), i = Gn(s.as("s")), r = Gn(s.as("m")), a = Gn(s.as("h")), o = Gn(s.as("d")), u = Gn(s.as("M")), l = Gn(s.as("y")), (h = i <= An.ss && ["s", i] || i < An.s && ["ss", i] || r <= 1 && ["m"] || r < An.m && ["mm", r] || a <= 1 && ["h"] || a < An.h && ["hh", a] || o <= 1 && ["d"] || o < An.d && ["dd", o] || u <= 1 && ["M"] || u < An.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l])[2] = t, h[3] = 0 < +this, h[4] = n,
        function(e, t, n, s, i) {
            return i.relativeTime(t || 1, !!n, e, s)
        }.apply(null, h));
        return e && (c = d.pastFuture( + this, c)),
        d.postformat(c)
    },
    $n.toISOString = Zn,
    $n.toString = Zn,
    $n.toJSON = Zn,
    $n.locale = Qt,
    $n.localeData = Kt,
    $n.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Zn),
    $n.lang = Xt,
    G("X", 0, 0, "unix"),
    G("x", 0, 0, "valueOf"),
    ue("x", se),
    ue("X", /[+-]?\d+(\.\d{1,3})?/),
    ce("X", (function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    })),
    ce("x", (function(e, t, n) {
        n._d = new Date(M(e))
    })),
    n.version = "2.24.0",
    e = bt,
    n.fn = fn,
    n.min = function() {
        return Pt("isBefore", [].slice.call(arguments, 0))
    },
    n.max = function() {
        return Pt("isAfter", [].slice.call(arguments, 0))
    },
    n.now = function() {
        return Date.now ? Date.now() : +new Date
    },
    n.utc = d,
    n.unix = function(e) {
        return bt(1e3 * e)
    },
    n.months = function(e, t) {
        return pn(e, t, "months")
    },
    n.isDate = o,
    n.locale = ut,
    n.invalid = m,
    n.duration = At,
    n.isMoment = v,
    n.weekdays = function(e, t, n) {
        return gn(e, t, n, "weekdays")
    },
    n.parseZone = function() {
        return bt.apply(null, arguments).parseZone()
    },
    n.localeData = ht,
    n.isDuration = Ht,
    n.monthsShort = function(e, t) {
        return pn(e, t, "monthsShort")
    },
    n.weekdaysMin = function(e, t, n) {
        return gn(e, t, n, "weekdaysMin")
    },
    n.defineLocale = lt,
    n.updateLocale = function(e, t) {
        if (null != t) {
            var n, s, i = st;
            null != (s = ot(e)) && (i = s._config),
            (n = new P(t = x(i, t))).parentLocale = it[e],
            it[e] = n,
            ut(e)
        } else null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale: null != it[e] && delete it[e]);
        return it[e]
    },
    n.locales = function() {
        return Y(it)
    },
    n.weekdaysShort = function(e, t, n) {
        return gn(e, t, n, "weekdaysShort")
    },
    n.normalizeUnits = H,
    n.relativeTimeRounding = function(e) {
        return void 0 === e ? Gn: "function" == typeof e && (Gn = e, !0)
    },
    n.relativeTimeThreshold = function(e, t) {
        return void 0 !== An[e] && (void 0 === t ? An[e] : (An[e] = t, "s" === e && (An.ss = t - 1), !0))
    },
    n.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse": n < -1 ? "lastWeek": n < 0 ? "lastDay": n < 1 ? "sameDay": n < 2 ? "nextDay": n < 7 ? "nextWeek": "sameElse"
    },
    n.prototype = fn,
    n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    },
    n
})),
function(e, t) {
    "use strict";
    "object" == typeof module && module.exports ? module.exports = t(require("moment")) : "function" == typeof define && define.amd ? define(["moment"], t) : t(e.moment)
} (this, (function(e) {
    "use strict";
    var t, n = {},
    s = {},
    i = {},
    r = {};
    e && "string" == typeof e.version || Y("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
    var a = e.version.split("."),
    o = +a[0],
    u = +a[1];
    function l(e) {
        return 96 < e ? e - 87 : 64 < e ? e - 29 : e - 48
    }
    function h(e) {
        var t = 0,
        n = e.split("."),
        s = n[0],
        i = n[1] || "",
        r = 1,
        a = 0,
        o = 1;
        for (45 === e.charCodeAt(0) && (o = -(t = 1)); t < s.length; t++) a = 60 * a + l(s.charCodeAt(t));
        for (t = 0; t < i.length; t++) r /= 60,
        a += l(i.charCodeAt(t)) * r;
        return a * o
    }
    function d(e) {
        for (var t = 0; t < e.length; t++) e[t] = h(e[t])
    }
    function c(e, t) {
        var n, s = [];
        for (n = 0; n < t.length; n++) s[n] = e[t[n]];
        return s
    }
    function f(e) {
        var t = e.split("|"),
        n = t[2].split(" "),
        s = t[3].split(""),
        i = t[4].split(" ");
        return d(n),
        d(s),
        d(i),
        function(e, t) {
            for (var n = 0; n < t; n++) e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
            e[t - 1] = 1 / 0
        } (i, s.length),
        {
            name: t[0],
            abbrs: c(t[1].split(" "), s),
            offsets: c(n, s),
            untils: i,
            population: 0 | t[5]
        }
    }
    function m(e) {
        e && this._set(f(e))
    }
    function _(e) {
        var t = e.toTimeString(),
        n = t.match(/\([a-z ]+\)/i);
        "GMT" === (n = n && n[0] ? (n = n[0].match(/[A-Z]/g)) ? n.join("") : void 0 : (n = t.match(/[A-Z]{3,5}/g)) ? n[0] : void 0) && (n = void 0),
        this.at = +e,
        this.abbr = n,
        this.offset = e.getTimezoneOffset()
    }
    function y(e) {
        this.zone = e,
        this.offsetScore = 0,
        this.abbrScore = 0
    }
    function p(e, t) {
        for (var n, s; s = 6e4 * ((t.at - e.at) / 12e4 | 0);)(n = new _(new Date(e.at + s))).offset === e.offset ? e = n: t = n;
        return e
    }
    function g(e, t) {
        return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore: e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore: t.zone.population - e.zone.population
    }
    function v(e, t) {
        var n, s;
        for (d(t), n = 0; n < t.length; n++) s = t[n],
        r[s] = r[s] || {},
        r[s][e] = !0
    }
    function w(e) {
        return (e || "").toLowerCase().replace(/\//g, "_")
    }
    function M(e) {
        var t, s, r, a;
        for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) a = w(s = (r = e[t].split("|"))[0]),
        n[a] = e[t],
        i[a] = s,
        v(a, r[2].split(" "))
    }
    function S(e, t) {
        e = w(e);
        var r, a = n[e];
        return a instanceof m ? a: "string" == typeof a ? (a = new m(a), n[e] = a) : s[e] && t !== S && (r = S(s[e], S)) ? ((a = n[e] = new m)._set(r), a.name = i[e], a) : null
    }
    function D(e) {
        var t, n, r, a;
        for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) r = w((n = e[t].split("|"))[0]),
        a = w(n[1]),
        s[r] = a,
        i[r] = n[0],
        s[a] = r,
        i[a] = n[1]
    }
    function k(e) {
        var t = "X" === e._f || "x" === e._f;
        return ! (!e._a || void 0 !== e._tzm || t)
    }
    function Y(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e)
    }
    function O(t) {
        var n = Array.prototype.slice.call(arguments, 0, -1),
        s = arguments[arguments.length - 1],
        i = S(s),
        r = e.utc.apply(null, n);
        return i && !e.isMoment(t) && k(r) && r.add(i.parse(r), "minutes"),
        r.tz(s),
        r
    } (o < 2 || 2 == o && u < 6) && Y("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"),
    m.prototype = {
        _set: function(e) {
            this.name = e.name,
            this.abbrs = e.abbrs,
            this.untils = e.untils,
            this.offsets = e.offsets,
            this.population = e.population
        },
        _index: function(e) {
            var t, n = +e,
            s = this.untils;
            for (t = 0; t < s.length; t++) if (n < s[t]) return t
        },
        parse: function(e) {
            var t, n, s, i, r = +e,
            a = this.offsets,
            o = this.untils,
            u = o.length - 1;
            for (i = 0; i < u; i++) if (t = a[i], n = a[i + 1], s = a[i ? i - 1 : i], t < n && O.moveAmbiguousForward ? t = n: s < t && O.moveInvalidForward && (t = s), r < o[i] - 6e4 * t) return a[i];
            return a[u]
        },
        abbr: function(e) {
            return this.abbrs[this._index(e)]
        },
        offset: function(e) {
            return Y("zone.offset has been deprecated in favor of zone.utcOffset"),
            this.offsets[this._index(e)]
        },
        utcOffset: function(e) {
            return this.offsets[this._index(e)]
        }
    },
    y.prototype.scoreOffsetAt = function(e) {
        this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset),
        this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
    },
    O.version = "0.5.25",
    O.dataVersion = "",
    O._zones = n,
    O._links = s,
    O._names = i,
    O.add = M,
    O.link = D,
    O.load = function(e) {
        M(e.zones),
        D(e.links),
        O.dataVersion = e.version
    },
    O.zone = S,
    O.zoneExists = function C(e) {
        return C.didShowError || (C.didShowError = !0, Y("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")),
        !!S(e)
    },
    O.guess = function(e) {
        return t && !e || (t = function() {
            try {
                var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (e && 3 < e.length) {
                    var t = i[w(e)];
                    if (t) return t;
                    Y("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
                }
            } catch(e) {}
            var n, s, a, o = function() {
                var e, t, n, s = (new Date).getFullYear() - 2,
                i = new _(new Date(s, 0, 1)),
                r = [i];
                for (n = 1; n < 48; n++)(t = new _(new Date(s, n, 1))).offset !== i.offset && (e = p(i, t), r.push(e), r.push(new _(new Date(e.at + 6e4)))),
                i = t;
                for (n = 0; n < 4; n++) r.push(new _(new Date(s + n, 0, 1))),
                r.push(new _(new Date(s + n, 6, 1)));
                return r
            } (),
            u = o.length,
            l = function(e) {
                var t, n, s, a = e.length,
                o = {},
                u = [];
                for (t = 0; t < a; t++) for (n in s = r[e[t].offset] || {}) s.hasOwnProperty(n) && (o[n] = !0);
                for (t in o) o.hasOwnProperty(t) && u.push(i[t]);
                return u
            } (o),
            h = [];
            for (s = 0; s < l.length; s++) {
                for (n = new y(S(l[s]), u), a = 0; a < u; a++) n.scoreOffsetAt(o[a]);
                h.push(n)
            }
            return h.sort(g),
            0 < h.length ? h[0].zone.name: void 0
        } ()),
        t
    },
    O.names = function() {
        var e, t = [];
        for (e in i) i.hasOwnProperty(e) && (n[e] || n[s[e]]) && i[e] && t.push(i[e]);
        return t.sort()
    },
    O.Zone = m,
    O.unpack = f,
    O.unpackBase60 = h,
    O.needsOffset = k,
    O.moveInvalidForward = !0,
    O.moveAmbiguousForward = !1;
    var b, T = e.fn;
    function x(e) {
        return function() {
            return this._z ? this._z.abbr(this) : e.call(this)
        }
    }
    function P(e) {
        return function() {
            return this._z = null,
            e.apply(this, arguments)
        }
    }
    e.tz = O,
    e.defaultZone = null,
    e.updateOffset = function(t, n) {
        var s, i = e.defaultZone;
        if (void 0 === t._z && (i && k(t) && !t._isUTC && (t._d = e.utc(t._a)._d, t.utc().add(i.parse(t), "minutes")), t._z = i), t._z) if (s = t._z.utcOffset(t), Math.abs(s) < 16 && (s /= 60), void 0 !== t.utcOffset) {
            var r = t._z;
            t.utcOffset( - s, n),
            t._z = r
        } else t.zone(s, n)
    },
    T.tz = function(t, n) {
        if (t) {
            if ("string" != typeof t) throw new Error("Time zone name must be a string, got " + t + " [" + typeof t + "]");
            return this._z = S(t),
            this._z ? e.updateOffset(this, n) : Y("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."),
            this
        }
        if (this._z) return this._z.name
    },
    T.zoneName = x(T.zoneName),
    T.zoneAbbr = x(T.zoneAbbr),
    T.utc = P(T.utc),
    T.local = P(T.local),
    T.utcOffset = (b = T.utcOffset,
    function() {
        return 0 < arguments.length && (this._z = null),
        b.apply(this, arguments)
    }),
    e.tz.setDefault = function(t) {
        return (o < 2 || 2 == o && u < 9) && Y("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."),
        e.defaultZone = t ? S(t) : null,
        e
    };
    var W = e.momentProperties;
    return "[object Array]" === Object.prototype.toString.call(W) ? (W.push("_z"), W.push("_a")) : W && (W._z = null),
    e
})),
function(e) {
    var t = e("#js_timestamp_now"),
    n = e("#js_timestamp"),
    s = e("#js_timestamp_o"),
    i = e("#js_timestamp_unit"),
    r = e("#js_timestamp_unit_o"),
    a = e("#js_datetime_o"),
    o = e("#js_timer_stop"),
    u = e("#js_timer_start"),
    l = +new Date,
    h = Math.round(l / 1e3);
    "ms" !== window.localStorage.js_timestamp_unit ? n.val(h) : n.val(l),
    a.val(moment(l).format("YYYY-MM-DD HH:mm:ss"));
    var d = function() {
        var e = +new Date;
        "ms" !== window.localStorage.js_timestamp_unit && (e = Math.round(e / 1e3)),
        t.text(e)
    },
    c = setInterval(d, 1e3);
    t.on("click", (function(t) {
        t.preventDefault(),
        n.val(e(this).text())
    })),
    u.hide(),
    o.show(),
    o.on("click", (function(e) {
        o.hide(),
        e.preventDefault(),
        c && clearInterval(c),
        u.show()
    })),
    u.on("click", (function(e) {
        e.preventDefault(),
        u.hide(),
        c && clearInterval(c),
        c = setInterval(d, 1e3),
        o.show()
    })),
    e("#js_convert_timestamp").on("click", (function(t) {
        t.preventDefault();
        var s = n.val();
        if (s = s.replace(/^\s+|\s+$/, ""), /^-?\d+$/.test(s)) {
            s *= 1,
            "s" === i.val() && (s *= 1e3);
            var r = moment(s).format("YYYY-MM-DD HH:mm:ss");
            e("#js_datetime").val(r)
        } else alert("时间戳格式不正确")
    })),
    e("#js_convert_datetime").on("click", (function(e) {
        e.preventDefault();
        var t = moment(a.val(), "YYYY-MM-DD HH:mm:ss");
        "ms" == r.val() ? s.val(1e3 * t.unix()) : s.val(t.unix())
    })),
    i.on("change", (function(e) {
        e.preventDefault(),
        window.localStorage.js_timestamp_unit = i.val()
    })),
    r.on("change", (function(e) {
        e.preventDefault(),
        window.localStorage.js_timestamp_unit_o = r.val()
    })),
    window.localStorage.js_timestamp_unit && i.val(window.localStorage.js_timestamp_unit),
    window.localStorage.js_timestamp_unit_o && r.val(window.localStorage.js_timestamp_unit_o)
} (jQuery); 