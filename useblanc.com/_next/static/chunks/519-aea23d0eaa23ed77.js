"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [519], {
        1049: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return x
                }
            });
            var n = r(5893),
                s = (r(7294), r(6010));

            function l(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function i(e, t) {
                if (null == e) return {};
                var r, n, s = function(e, t) {
                    if (null == e) return {};
                    var r, n, s = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                }
                return s
            }
            var a = function(e) {
                var t = e.className,
                    r = i(e, ["className"]);
                return (0, n.jsxs)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        })))), n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    className: (0, s.Z)(t, "animate-spin -ml-1 mr-3 h-5 w-5 text-white"),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, r, {
                    children: [(0, n.jsx)("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }), (0, n.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })]
                }))
            };

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function o(e, t) {
                if (null == e) return {};
                var r, n, s = function(e, t) {
                    if (null == e) return {};
                    var r, n, s = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                }
                return s
            }
            var m = "hover:border hover:border-2 hover:border-green-light hover:text-white hover:bg-green",
                x = function(e) {
                    var t = e.children,
                        r = e.type,
                        l = e.loading,
                        i = e.variant,
                        x = void 0 === i ? "default" : i,
                        u = o(e, ["children", "type", "loading", "variant"]),
                        d = {
                            none: "",
                            default: "py-3 px-5 sm:px-12 sm:py-3 font-semibold bg-primary text-white hover:bg-transparent ".concat(m),
                            secondary: "bg-transparent px-2 py-3 sm:px-9 sm:py-3 border border-1 border-green-light text-green font-semibold ".concat(m)
                        };
                    return (0, n.jsxs)("button", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            })))), n.forEach((function(t) {
                                c(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, u, {
                        type: r || "button",
                        className: (0, s.Z)(d[x], "none" !== x ? "flex space-x-0.5 text-base font-normal transition-colors rounded-md  w-full max-w-495px lg:w-max" : "", u.className),
                        children: [(0, n.jsx)(a, {
                            className: (0, s.Z)(!l && "hidden")
                        }), (0, n.jsx)("span", {
                            className: "w-full",
                            children: t
                        })]
                    }))
                }
        },
        6519: function(e, t, r) {
            r.r(t);
            var n = r(5893),
                s = r(7294),
                l = r(3801),
                i = r(6486),
                a = r(1049),
                c = r(8242);
            t.default = function(e) {
                var t = e.name,
                    r = e.website,
                    o = void 0 === r ? "" : r,
                    m = e.facebook,
                    x = void 0 === m ? "" : m,
                    u = e.youtube,
                    d = void 0 === u ? "" : u,
                    f = e.twitter,
                    h = void 0 === f ? "" : f,
                    g = e.description,
                    p = void 0 === g ? "" : g,
                    b = e.image,
                    j = void 0 === b ? "" : b,
                    v = (0, c.T_)().translate,
                    w = (0, s.useState)(!1),
                    y = w[0],
                    N = w[1];
                return (0, n.jsx)("div", {
                    className: "pt-32 pb-4 lg:pt-24 lg:pb-6 mx-4",
                    children: (0, n.jsx)("div", {
                        className: "pb-2 sm:pb-16 min-h-405px sm:min-h-full bg-background rounded-xl lg:pb-0 lg:z-10 lg:relative",
                        children: (0, n.jsxs)("div", {
                            className: "min-h-405px flex justify-between flex-col sm:h-full sm:w-full lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8",
                            children: [(0, n.jsx)("div", {
                                className: "relative sm:-mt-12 sm:ml-3 -top-20 sm:top-0",
                                children: (0, n.jsx)("div", {
                                    className: "mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:pb-20 lg:pl-0 lg:pt-0 lg:h-full",
                                    children: (0, n.jsx)("div", {
                                        className: "aspect-w-10 aspect-h-6 rounded-xl shadow-xl focus:sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full",
                                        children: (0, n.jsx)("img", {
                                            className: "object-cover lg:h-full lg:w-full rounded-xl",
                                            src: j,
                                            alt: ""
                                        })
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: "mt-2 lg:m-0 lg:col-span-2 lg:pl-8",
                                children: (0, n.jsx)("div", {
                                    className: "mx-auto max-w-md px-4 sm:max-w-2 xl sm:px-6 lg:px-0 pb-4 lg:pb-10 lg:pt-16 lg:max-w-none",
                                    children: (0, n.jsx)("blockquote", {
                                        children: (0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("p", {
                                                className: "-mt-24 sm:mt-6 text-base sm:text-2xl font-medium text-white",
                                                children: (0, i.truncate)(p, {
                                                    length: y ? p.length : 150
                                                })
                                            }), p.length > 150 && (0, n.jsx)(a.Z, {
                                                variant: "none",
                                                className: "text-base text-primary",
                                                onClick: function() {
                                                    return N(!y)
                                                },
                                                children: v(y ? "collapse" : "view_more")
                                            }), (0, n.jsxs)("footer", {
                                                className: "hidden sm:flex sm:w-full justify-between mt-24",
                                                children: [(0, n.jsxs)("p", {
                                                    className: "text-base font-medium text-gray-400",
                                                    children: [" ", "- ", t]
                                                }), (0, n.jsxs)("div", {
                                                    className: "flex items-center space-x",
                                                    children: [x && (0, n.jsx)("a", {
                                                        href: x,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: (0, n.jsx)("div", {
                                                            className: "flex items-center justify-center mx-2 cursor-pointer",
                                                            children: (0, n.jsx)("img", {
                                                                alt: "facebook",
                                                                src: "/icons/facebook.svg",
                                                                width: "24",
                                                                height: "24"
                                                            })
                                                        })
                                                    }), o && (0, n.jsx)("a", {
                                                        href: o,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: (0, n.jsx)("div", {
                                                            className: "flex items-center justify-center mx-2 cursor-pointer",
                                                            children: (0, n.jsx)(l.I_0, {
                                                                className: "w-7 h-7 text-white"
                                                            })
                                                        })
                                                    }), h && (0, n.jsx)("a", {
                                                        href: h,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: (0, n.jsx)("div", {
                                                            className: "flex items-center justify-center mx-2 cursor-pointer",
                                                            children: (0, n.jsx)("img", {
                                                                alt: "twitter",
                                                                src: "/icons/twitter-outlined.svg",
                                                                width: "24",
                                                                height: "24"
                                                            })
                                                        })
                                                    }), d && (0, n.jsx)("a", {
                                                        href: d,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: (0, n.jsx)("div", {
                                                            className: "flex items-center justify-center mx-2 cursor-pointer",
                                                            children: (0, n.jsx)("img", {
                                                                alt: "youtube",
                                                                src: "/icons/youtube-outlined.svg",
                                                                width: "24",
                                                                height: "24"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }), (0, n.jsxs)("footer", {
                                className: "flex sm:hidden sm:w-full justify-between mt-12 p-4",
                                children: [(0, n.jsxs)("p", {
                                    className: "text-base font-medium text-gray-400",
                                    children: [" - ", t]
                                }), (0, n.jsxs)("div", {
                                    className: "flex items-center space-x",
                                    children: [x && (0, n.jsx)("a", {
                                        href: x,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, n.jsx)("div", {
                                            className: "flex items-center justify-center mx-2 cursor-pointer",
                                            children: (0, n.jsx)("img", {
                                                alt: "facebook",
                                                src: "/icons/facebook.svg",
                                                width: "24",
                                                height: "24"
                                            })
                                        })
                                    }), o && (0, n.jsx)("a", {
                                        href: o,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, n.jsx)("div", {
                                            className: "flex items-center justify-center mx-2 cursor-pointer",
                                            children: (0, n.jsx)(l.I_0, {
                                                className: "w-7 h-7 text-white"
                                            })
                                        })
                                    }), h && (0, n.jsx)("a", {
                                        href: h,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, n.jsx)("div", {
                                            className: "flex items-center justify-center mx-2 cursor-pointer",
                                            children: (0, n.jsx)("img", {
                                                alt: "twitter",
                                                src: "/icons/twitter-outlined.svg",
                                                width: "24",
                                                height: "24"
                                            })
                                        })
                                    }), d && (0, n.jsx)("a", {
                                        href: d,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, n.jsx)("div", {
                                            className: "flex items-center justify-center mx-2 cursor-pointer",
                                            children: (0, n.jsx)("img", {
                                                alt: "youtube",
                                                src: "/icons/youtube-outlined.svg",
                                                width: "24",
                                                height: "24"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        }
    }
]);