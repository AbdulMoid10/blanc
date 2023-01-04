(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [255], {
        7576: function(e, l, s) {
            "use strict";
            var t = s(5893),
                a = (s(7294), s(6010)),
                i = function(e) {
                    var l = e.children,
                        s = e.light,
                        i = e.className,
                        r = void 0 === i ? "" : i,
                        n = e.title,
                        c = e.subtitle,
                        o = e.dense,
                        d = e.containerClass,
                        x = void 0 === d ? "px-12 m-auto xl:px-0 max-w-6xl" : d;
                    return (0, t.jsx)("section", {
                        className: (0, a.Z)("relative overflow-hidden", o ? "py-10 lg:py-16" : "py-20 lg:py-32", s ? "bg-background-light text-background" : "bg-background text-white", r),
                        children: (0, t.jsxs)("div", {
                            className: x,
                            children: [n && (0, t.jsx)("p", {
                                className: (0, a.Z)("z-10", s ? "section-title-light" : "section-title"),
                                children: n
                            }), c && (0, t.jsx)("p", {
                                className: "z-10 max-w-lg m-auto mt-3 text-lg font-normal text-center",
                                children: c
                            }), l]
                        })
                    })
                };
            l.Z = i, i.defaultProps = {
                light: void 0,
                className: void 0,
                title: void 0,
                subtitle: void 0,
                dense: !1,
                containerClass: void 0
            }
        },
        1255: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return w
                }
            });
            var t = s(5893),
                a = s(5988),
                i = s(7294),
                r = s(3801),
                n = s(6010),
                c = s(9008),
                o = s(1664),
                d = s(6066),
                x = s(1049),
                m = s(487),
                f = s(6471),
                h = s(7576),
                u = s(8242),
                p = s(6519);

            function j(e, l, s) {
                return l in e ? Object.defineProperty(e, l, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[l] = s, e
            }

            function g(e) {
                for (var l = 1; l < arguments.length; l++) {
                    var s = null != arguments[l] ? arguments[l] : {},
                        t = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    })))), t.forEach((function(l) {
                        j(e, l, s[l])
                    }))
                }
                return e
            }
            var b = {
                infinite: !0,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !0
            };

            function w() {
                var e = (0, u.T_)().translate,
                    l = (0, i.useState)(""),
                    s = l[0],
                    j = l[1],
                    w = (0, i.useState)(0),
                    v = w[0],
                    y = w[1],
                    N = [{
                        name: e("upload_video"),
                        description: e("upload_video_desc"),
                        src: "/gifs/download.gif"
                    }, {
                        name: e("applying_magic"),
                        description: e("applying_magic_desc"),
                        src: "/gifs/magic.gif"
                    }, {
                        name: e("get_adapted_video_today"),
                        description: e("get_adapted_video_today_desc"),
                        src: "/gifs/complete.gif"
                    }],
                    _ = (0, i.useMemo)((function() {
                        return (0, t.jsx)("iframe", {
                            title: "Welcome to Blanc",
                            src: "https://iframe.videodelivery.net/b8035d2717f368d2228d17ace1ac13ad?poster=https%3A%2F%2Fvideodelivery.net%2Fb8035d2717f368d2228d17ace1ac13ad%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
                            className: "border-none absolute top-0 left-0 h-full w-full",
                            allow: "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",
                            allowFullScreen: !0
                        })
                    }), []);
                return i.useEffect((function() {
                    var e = setInterval((function() {
                        y((function(e) {
                            return e < 2 ? e + 1 : 0
                        }))
                    }), 5e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }), []), (0, t.jsxs)("div", {
                    className: "relative",
                    children: [(0, t.jsxs)(c.default, {
                        children: [(0, t.jsx)("title", {
                            children: "Blanc"
                        }), (0, t.jsx)("meta", {
                            name: "description",
                            content: "Generated by create next app"
                        }), (0, t.jsx)("link", {
                            rel: "icon",
                            href: "/favicon_2.ico"
                        })]
                    }), (0, t.jsx)(f.Z, {}), (0, t.jsxs)("main", {
                        children: [(0, t.jsxs)(h.Z, {
                            light: !0,
                            containerClass: "px-4 sm:px-12 m-auto xl:px-0 sm:max-w-7xl",
                            className: "relative pt-28 sm:pt-32 overflow-hidden lg:pt-28 xl:pt-60 h-100",
                            children: [(0, t.jsx)("div", {
                                className: "absolute top-0 left-0 z-0 hidden w-full pointer-events-none lg:flex",
                                children: (0, t.jsx)("img", {
                                    src: "/images/pricing-circles.svg",
                                    className: "object-cover w-full",
                                    alt: "pricing"
                                })
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col lg:flex-row justify-start items-center",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex flex-col items-start mb-4 lg:mb-0 space-y-6 lg:space-y-10 lg:w-1/2",
                                    children: [(0, t.jsxs)("h1", {
                                        className: "w-full text-3xl font-bold text-center lg:text-left lg:text-4xl xl:text-6xl text-white",
                                        children: [(0, t.jsx)("span", {
                                            className: "text-black",
                                            children: e("h1_black")
                                        }), (0, t.jsx)("br", {}), (0, t.jsx)("div", {
                                            className: "lg:mt-4"
                                        }), (0, t.jsx)("span", {
                                            className: "text-primary ml-1",
                                            children: e("h1_orange")
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "space-y-4 text-md lg:text-xl max-w-lg text-center lg:text-left",
                                        children: [(0, t.jsx)("p", {
                                            children: e("desc_1")
                                        }), (0, t.jsx)("p", {
                                            children: e("desc_2")
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "flex lg:hidden w-full justify-center h-full",
                                        children: (0, t.jsx)("div", {
                                            className: "flex-1 aspect-w-5 aspect-h-3",
                                            children: _
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "inline-flex items-center justify-center lg:justify-start space-x-6 w-full",
                                        children: [(0, t.jsx)(o.default, {
                                            href: "https://profile.useblanc.com/users/signup/",
                                            children: (0, t.jsx)("a", {
                                                className: "w-1/2 lg:w-1/4",
                                                children: (0, t.jsx)(x.Z, {
                                                    children: e("start_now_btn")
                                                })
                                            })
                                        }), (0, t.jsx)(o.default, {
                                            href: "mailto:hello@useblanc.com",
                                            children: (0, t.jsx)("a", {
                                                className: "w-1/2 lg:w-1/4",
                                                children: (0, t.jsx)(x.Z, {
                                                    variant: "secondary",
                                                    children: e("contact_sales_btn")
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "hidden lg:flex w-full justify-center lg:w-1/2 h-full lg:pl-12 pt-4 lg:pt-0",
                                    children: (0, t.jsx)("div", {
                                        className: "flex-1 lg:aspect-w-8 lg:aspect-h-4 aspect-h-6 pt-2",
                                        children: _
                                    })
                                })]
                            })]
                        }), (0, t.jsxs)(h.Z, {
                            containerClass: "px-4 sm:px-12 m-auto xl:px-0 sm:max-w-7xl",
                            className: "relative overflow-hidden h-100",
                            children: [(0, t.jsx)("div", {
                                className: "absolute left-0 hidden w-full h-full pointer-events-none top-0 lg:flex",
                                children: (0, t.jsx)("img", {
                                    src: "/images/how-to-circles.svg",
                                    className: "object-cover w-full h-full object-position-b-90",
                                    alt: "circle design visual"
                                })
                            }), (0, t.jsx)("div", {
                                className: "absolute left-0 w-full h-full pointer-events-none top-1/3 lg:hidden",
                                children: (0, t.jsx)("img", {
                                    src: "/images/how-to-circles-mobile.svg",
                                    className: "object-cover w-full",
                                    alt: "circle design visual"
                                })
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col justify-center",
                                children: [(0, t.jsx)("h2", {
                                    className: "text-3xl lg:text-5xl text-white font-bold justify-center w-full flex",
                                    children: e("how_it_works")
                                }), (0, t.jsxs)("p", {
                                    className: "flex w-full justify-center text-lg text-gray-400 pt-2 pb-10 text-center sm:text-left",
                                    children: [" ", e("how_it_works_subtitle")]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "flex sm:hidden",
                                children: (0, t.jsx)("ol", {
                                    className: "overflow-x-scroll overflow-y-hidden flex scrollbar scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thumb-primary scrollbar-track-gray-100 pb-4",
                                    children: N.map((function(e, l) {
                                        return (0, t.jsx)("li", {
                                            className: "relative p-4 min-w-full",
                                            children: (0, t.jsxs)("div", {
                                                className: "bg-gray-800 p-4 justify-between flex flex-col flex-1 h-full",
                                                children: [(0, t.jsx)("div", {
                                                    className: "w-full object-cover flex justify-center mb-4",
                                                    children: (0, t.jsx)("img", {
                                                        src: e.src,
                                                        className: "object-cover w-full",
                                                        alt: e.name
                                                    })
                                                }), (0, t.jsxs)("div", {
                                                    className: "relative flex flex-col items-start group flex-1",
                                                    "aria-current": "step",
                                                    children: [(0, t.jsxs)("div", {
                                                        className: "inline-flex items-center",
                                                        "aria-hidden": "true",
                                                        children: [(0, t.jsx)("span", {
                                                            className: (0, n.Z)("relative z-10 w-6 h-6 px-2 flex items-center justify-center border-gray-600 border-1 font-bold rounded-full", 0 === l ? "bg-primary text-white" : "bg-gray-600 text-gray-500"),
                                                            children: l + 1
                                                        }), (0, t.jsx)("div", {
                                                            className: "ml-3 min-w-0 flex flex-col",
                                                            children: (0, t.jsx)("span", {
                                                                className: "font-bold tracking-wide uppercase text-white",
                                                                children: e.name
                                                            })
                                                        })]
                                                    }), (0, t.jsx)("span", {
                                                        className: "text-sm text-gray-400 mt-2 pb-4",
                                                        children: e.description
                                                    })]
                                                })]
                                            })
                                        }, e.name)
                                    }))
                                })
                            }), (0, t.jsxs)("div", {
                                className: "hidden sm:flex flex-col sm:flex-row justify-center sm:justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "flex flex-col items-center w-1/2",
                                    children: (0, t.jsx)("ol", {
                                        className: "overflow-hidden",
                                        children: N.map((function(e, l) {
                                            return (0, t.jsxs)("li", {
                                                className: (0, n.Z)(l !== N.length - 1 ? "pb-10" : "", "relative"),
                                                children: [l !== N.length - 1 && (0, t.jsx)("div", {
                                                    className: "-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-600",
                                                    "aria-hidden": "true"
                                                }), (0, t.jsxs)("div", {
                                                    className: "relative flex items-start group",
                                                    "aria-current": "step",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "h-9 flex items-center",
                                                        "aria-hidden": "true",
                                                        children: (0, t.jsx)("span", {
                                                            className: (0, n.Z)("relative z-10 w-8 h-8 flex items-center justify-center border-gray-600 border-1 font-bold rounded-full", v === l ? "bg-primary text-white" : "bg-gray-600 text-gray-500"),
                                                            children: l + 1
                                                        })
                                                    }), (0, t.jsxs)("span", {
                                                        className: "ml-4 min-w-0 flex flex-col",
                                                        children: [(0, t.jsx)("span", {
                                                            className: (0, n.Z)("font-bold tracking-wide uppercase  text-xl", v === l ? "text-white" : "text-gray-500"),
                                                            children: e.name
                                                        }), (0, t.jsx)("span", {
                                                            className: "text-sm text-gray-400",
                                                            children: e.description
                                                        })]
                                                    })]
                                                })]
                                            }, e.name)
                                        }))
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "flex justify-center items-center w-1/2 h-full",
                                    children: N.map((function(e, l) {
                                        return (0, t.jsx)("div", {
                                            className: (0, n.Z)("w-full object-cover flex justify-center mb-4 h-full max-h-80 transition-all ease-in-out duration-500", l === v ? "" : "hidden"),
                                            children: (0, t.jsx)("img", {
                                                src: e.src,
                                                className: "rounded-xl object-contain",
                                                alt: e.name
                                            }, e.name)
                                        }, e.name)
                                    }))
                                })]
                            })]
                        }), (0, t.jsx)(h.Z, {
                            light: !0,
                            containerClass: "px-4 sm:px-12 m-auto xl:px-0 sm:max-w-7xl",
                            className: "relative overflow-hidden h-100",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-col justify-center text-center text-3xl sm:text-5xl font-bold",
                                children: [(0, t.jsx)("h2", {
                                    children: e("we_helped_1")
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row sm:inline-flex items-center justify-center",
                                    children: [(0, t.jsx)("span", {
                                        className: "text-primary",
                                        children: e("we_helped_2")
                                    }), (0, t.jsxs)("div", {
                                        className: "inline-flex",
                                        children: [(0, t.jsx)("span", {
                                            className: "mx-2",
                                            children: e("and")
                                        }), (0, t.jsx)("span", {
                                            className: "text-primary",
                                            children: e("we_helped_3")
                                        })]
                                    })]
                                })]
                            })
                        }), (0, t.jsx)(h.Z, {
                            containerClass: "px-4 sm:px-12 m-auto xl:px-0 sm:max-w-7xl",
                            className: "relative overflow-hidden h-100",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-col justify-center items-center space-y-8",
                                children: [(0, t.jsxs)("h2", {
                                    className: "text-center text-3xl lg:text-4xl font-bold",
                                    children: [e("total_number_of_minutes_text"), ":"]
                                }), (0, t.jsx)("div", {
                                    className: "rounded-full border-primary border-2",
                                    children: (0, t.jsx)("div", {
                                        className: "rounded-full border-8 border-transparent",
                                        children: (0, t.jsxs)("div", {
                                            className: "bg-primary text-white border-8 border-background rounded-full h-40 w-40 flex flex-col justify-center items-center",
                                            children: [(0, t.jsx)("span", {
                                                className: "text-3xl font-bold",
                                                children: "30.1k"
                                            }), (0, t.jsx)("span", {
                                                className: "text-xl ",
                                                children: e("minutes")
                                            })]
                                        })
                                    })
                                })]
                            })
                        }), (0, t.jsxs)(h.Z, {
                            light: !0,
                            containerClass: "px-4 sm:px-12 m-auto xl:px-0 sm:max-w-7xl",
                            className: "relative overflow-hidden h-100",
                            children: [" ", (0, t.jsx)("div", {
                                className: "flex flex-col justify-center items-center space-y-8",
                                children: (0, t.jsxs)("h2", {
                                    className: "flex flex-col sm:block max-w-xs px-4 sm:px-0 sm:max-w-6xl text-center text-3xl lg:text-5xl font-bold",
                                    children: [(0, t.jsx)("span", {
                                        children: e("weve_helped_section_text_1")
                                    }), (0, t.jsx)("span", {
                                        className: "text-primary mx-2",
                                        children: e("weve_helped_section_text_2")
                                    }), (0, t.jsx)("span", {
                                        children: e("weve_helped_section_text_3")
                                    })]
                                })
                            }), (0, t.jsxs)("div", {
                                id: "home-slider",
                                className: "jsx-ffee047132a51956 mx-auto max-w-6xl",
                                children: [(0, t.jsxs)(d.Z, g({}, b, {
                                    children: [(0, t.jsx)(p.default, {
                                        name: "TJ Walker",
                                        website: "http://www.tjwalker.com/",
                                        facebook: "https://www.facebook.com/tjwalker",
                                        youtube: "https://www.youtube.com/user/MediaTraining",
                                        description: "Blanc helped me make my online courses available and accessible to millions of students who won't have otherwise been able to understand me. Thank you Blanc!",
                                        image: "/images/TJ Walker.jpeg"
                                    }), (0, t.jsx)(p.default, {
                                        name: "Phil Ebiner",
                                        website: "http://www.videoschool.com",
                                        twitter: "https://mobile.twitter.com/philebiner",
                                        youtube: "https://www.youtube.com/user/VideoSchoolOnline",
                                        description: "Blanc allows me to easily make my online courses accessible to more people around the world. I've had a great experience working with the team who are responsive and helpful during the entire process.",
                                        image: "/images/Phil Ebiner.jpeg"
                                    }), (0, t.jsx)(p.default, {
                                        name: "IamKRIS",
                                        website: "https://www.tiktok.com/@iamkris",
                                        description: "Thanks Blanc! These guys are helping me reach Spanish, German and Chinese audiences, and become a truly international blogger.",
                                        image: "/images/kris.png"
                                    })]
                                })), (0, t.jsx)(a.default, {
                                    id: "ffee047132a51956",
                                    children: "#home-slider .slick-dots li {margin:0}\n#home-slider .slick-dots li button::before {font-size:9px}\n#home-slider .slick-dots li button::before {color:rgba(0, 0, 0, 0.4)}\n#home-slider .slick-dots li button:hover::before, #home-slider .slick-dots li button:focus::before {color:#ff9363}\n#home-slider .slick-dots li.slick-active button::before {color:#e06337}\n#home-slider .slick-prev {margin-left:-10px}\n#home-slider .slick-prev::before, #home-slider .slick-next::before {font-size:32px;\ncolor:#333333}\n#home-slider .slick-prev:hover::before, #home-slider .slick-next:hover::before {color:#e06337}\n@media (max-width:640px) {#home-slider .slick-prev, #home-slider .slick-next {display:none!important}}"
                                })]
                            })]
                        }), (0, t.jsxs)(h.Z, {
                            dense: !0,
                            containerClass: "px-4 sm:px-12 m-auto xl:px-0 sm:max-w-7xl",
                            className: "relative overflow-hidden h-100",
                            children: [" ", (0, t.jsxs)("div", {
                                className: "flex flex-col sm:inline-flex justify-center items-center w-full",
                                children: [(0, t.jsxs)("div", {
                                    className: "inline-flex w-full justify-center sm:flex text-3xl lg:text-5xl font-bold ",
                                    children: [(0, t.jsxs)("span", {
                                        children: [e("try"), " "]
                                    }), (0, t.jsx)("span", {
                                        className: "text-primary mx-2",
                                        children: "useblanc.com"
                                    }), (0, t.jsx)("span", {
                                        className: "hidden sm:block",
                                        children: e("today")
                                    })]
                                }), (0, t.jsx)("span", {
                                    className: "sm:hidden",
                                    children: e("today")
                                }), (0, t.jsx)("div", {
                                    className: "text-sm sm:text-lg font-normal text-gray-300 mt-4",
                                    children: e("reach_international_customers")
                                })]
                            }), (0, t.jsx)("div", {
                                className: "sm:max-w-lg sm:mx-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "flex w-full sm:inline-flex sm:justify-center sm:items-center sm:max-w-full sm:mx-auto flex-col sm:flex-row",
                                    children: [(0, t.jsxs)("div", {
                                        className: "relative flex-grow focus-within:z-10 mt-8 sm:w-2/3",
                                        children: [(0, t.jsx)("div", {
                                            className: "absolute inset-y-0 z-10 flex items-center left-0 pr-2",
                                            role: "button",
                                            children: (0, t.jsx)(r.bV6, {
                                                className: "w-4 h-4 ml-4 text-gray-400 sm:mt-3"
                                            })
                                        }), (0, t.jsxs)("form", {
                                            children: [(0, t.jsx)("label", {
                                                htmlFor: "tryBlanc",
                                                className: "sr-only",
                                                children: e("try_for_free_btn")
                                            }), (0, t.jsx)("input", {
                                                id: "tryBlanc",
                                                tabIndex: 0,
                                                className: "flex w-full border-gray-300 pl-10 items-center py-3 sm:mt-2 rounded-sm sm:rounded-r-none bg-gray-800 sm:h-full",
                                                placeholder: "example@gmail.com",
                                                required: !0,
                                                "aria-required": !0,
                                                onChange: function(e) {
                                                    var l = e.target.value;
                                                    return j(l)
                                                }
                                            })]
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "sm:w-1/3",
                                        children: (0, t.jsx)(o.default, {
                                            href: "https://profile.useblanc.com/users/signup?email=".concat(encodeURI(s)),
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)(x.Z, {
                                                    tabIndex: 0,
                                                    className: "w-full px-16 sm:px-0 py-3 mt-5 text-sm font-bold text-white transition-colors rounded-md lg:mt-10 lg:text-base lg:font-normal bg-primary sm:rounded-l-none focus:ring-2 focus:ring-white",
                                                    children: e("try_for_free_btn")
                                                })
                                            })
                                        })
                                    })]
                                })
                            })]
                        })]
                    }), (0, t.jsx)(m.Z, {})]
                })
            }
        },
        7884: function(e, l, s) {
            "use strict";
            l.default = c;
            var t, a = (t = s(7294)) && t.__esModule ? t : {
                    default: t
                },
                i = s(8122),
                r = s(9035);
            var n = a.default.useInsertionEffect || a.default.useLayoutEffect;

            function c(e) {
                var l = (0, i.useStyleRegistry)();
                return l ? "undefined" === typeof window ? (l.add(e), null) : (n((function() {
                    return l.add(e),
                        function() {
                            l.remove(e)
                        }
                }), [e.id, String(e.dynamic)]), null) : null
            }
            c.dynamic = function(e) {
                return e.map((function(e) {
                    var l = e[0],
                        s = e[1];
                    return (0, r.computeId)(l, s)
                })).join(" ")
            }
        },
        5988: function(e, l, s) {
            e.exports = s(7884)
        }
    }
]);