/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssgradients-prefixes
 */
window.Modernizr = function (Z, Y, X) {
    function F(b) {
        R.cssText = b
    }

    function E(d, c) {
        return F(O.join(d + ";") + (c || ""))
    }

    function D(d, c) {
        return typeof d === c
    }

    function C(d, c) {
        return !!~("" + d).indexOf(c)
    }

    function B(g, c, j) {
        for (var i in g) {
            var h = c[g[i]];
            if (h !== X) {
                return j === !1 ? g[i] : D(h, "function") ? h.bind(j || c) : h
            }
        }
        return !1
    }
    var W = "2.8.3",
        V = {},
        U = Y.documentElement,
        T = "modernizr",
        S = Y.createElement(T),
        R = S.style,
        Q, P = {}.toString,
        O = " -webkit- -moz- -o- -ms- ".split(" "),
        N = {},
        M = {},
        L = {},
        K = [],
        J = K.slice,
        I, H = {}.hasOwnProperty,
        G;
    !D(H, "undefined") && !D(H.call, "undefined") ? G = function (d, c) {
        return H.call(d, c)
    } : G = function (d, c) {
        return c in d && D(d.constructor.prototype[c], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (a) {
        var h = this;
        if (typeof h != "function") {
            throw new TypeError
        }
        var g = J.call(arguments, 1),
            f = function () {
                if (this instanceof f) {
                    var b = function () { };
                    b.prototype = h.prototype;
                    var d = new b,
                        c = h.apply(d, g.concat(J.call(arguments)));
                    return Object(c) === c ? c : d
                }
                return h.apply(a, g.concat(J.call(arguments)))
            };
        return f
    }), N.cssgradients = function () {
        var e = "background-image:",
            d = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            f = "linear-gradient(left top,#9f9, white);";
        return F((e + "-webkit- ".split(" ").join(d + e) + O.join(f + e)).slice(0, -e.length)), C(R.backgroundImage,
            "gradient")
    };
    for (var A in N) {
        G(N, A) && (I = A.toLowerCase(), V[I] = N[A](), K.push((V[I] ? "" : "no-") + I))
    }
    return V.addTest = function (e, c) {
        if (typeof e == "object") {
            for (var f in e) {
                G(e, f) && V.addTest(f, e[f])
            }
        } else {
            e = e.toLowerCase();
            if (V[e] !== X) {
                return V
            }
            c = typeof c == "function" ? c() : c, typeof enableClasses != "undefined" && enableClasses && (U.className +=
                " " + (c ? "" : "no-") + e), V[e] = c
        }
        return V
    }, F(""), S = Q = null, V._version = W, V._prefixes = O, V
}(this, this.document);
/**
 * jQuery Gradientify plugin 1.0.0
 *
 * Provides animating CSS gradients.
 * Based on http://opticalcortex.com/animating-css-gradients/ by Mike Byrne.
 *
 * @author  Codefog <http://codefog.pl>
 * @author  Kamil Kuzminski <kamil.kuzminski@codefog.pl>
 * @license MIT License
 * @see     http://opticalcortex.com/animating-css-gradients/
 */
(function (e, c, a, g) {
    var d = "gradientify",
        f = {
            angle: "0deg",
            fps: 60,
            gradients: {},
            transition_time: 8
        };

    function b(i, h) {
        this.element = i;
        this.settings = e.extend({}, f, h);
        this._defaults = f;
        this._name = d;
        this.init()
    }
    e.extend(b.prototype, {
        init: function () {
            if (!Modernizr.cssgradients) {
                return
            }
            this.currentIndex = 0;
            this.nextIndex = 1;
            this.steps_count = 0;
            this.steps_total = Math.round(this.settings.transition_time * this.settings.fps);
            this.rgb_steps = {
                start: [0, 0, 0],
                stop: [0, 0, 0]
            };
            this.rgb_values = {
                start: [0, 0, 0],
                stop: [0, 0, 0]
            };
            this.prefixes = ["-webkit-", "-moz-", "-o-", "-ms-", ""];
            this.color1 = null;
            this.color2 = null;
            this.calculateSteps();
            setInterval(function () {
                this.updateGradient.apply(this)
            }.bind(this), Math.round(1000 / this.settings.fps))
        },
        setNext: function (h) {
            return (h + 1 < this.settings.gradients.length) ? h + 1 : 0
        },
        calculateStepSize: function (i, h) {
            return (i - h) / this.steps_total
        },
        calculateSteps: function () {
            for (var j in this.rgb_values) {
                if (this.rgb_values.hasOwnProperty(j)) {
                    for (var h = 0; h < 3; h++) {
                        this.rgb_values[j][h] = this.settings.gradients[this.currentIndex][j][h];
                        this.rgb_steps[j][h] = this.calculateStepSize(this.settings.gradients[this.nextIndex]
                        [j][h], this.rgb_values[j][h])
                    }
                }
            }
        },
        updateGradient: function () {
            var k;
            for (var j in this.rgb_values) {
                if (this.rgb_values.hasOwnProperty(j)) {
                    for (k = 0; k < 3; k++) {
                        this.rgb_values[j][k] += this.rgb_steps[j][k]
                    }
                }
            }
            var l = "rgb(" + (this.rgb_values.start[0] | 0) + "," + (this.rgb_values.start[1] | 0) +
                "," + (this.rgb_values.start[2] | 0) + ")";
            var h = "rgb(" + (this.rgb_values.stop[0] | 0) + "," + (this.rgb_values.stop[1] | 0) + "," +
                (this.rgb_values.stop[2] | 0) + ")";
            if (l != this.color1 || h != this.color2) {
                this.color1 = l;
                this.color2 = h;
                e(this.element).css("background-image",
                    "-webkit-gradient(linear, left bottom, right top, from(" + this.color1 +
                    "), to(" + this.color2 + "))");
                for (k = 0; k < 4; k++) {
                    e(this.element).css("background-image", this.prefixes[k] + "linear-gradient(" +
                        this.settings.angle + ", " + this.color1 + ", " + this.color2 + ")")
                }
            }
            this.steps_count++;
            if (this.steps_count > this.steps_total) {
                this.steps_count = 0;
                this.currentIndex = this.setNext(this.currentIndex);
                this.nextIndex = this.setNext(this.nextIndex);
                this.calculateSteps()
            }
        }
    });
    e.fn[d] = function (h) {
        return this.each(function () {
            if (!e.data(this, "plugin_" + d)) {
                e.data(this, "plugin_" + d, new b(this, h))
            }
        })
    }
})(jQuery, window, document);