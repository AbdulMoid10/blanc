"use strict";
(self.__cfswpl__ = self.__cfswpl__ || []).push([
    [887], {
        9887: (e, t, n) => {
            n.r(t), n.d(t, {
                Controls: () => Mn,
                default: () => An
            });
            n(7698);
            var a = n(1040),
                r = n(4500),
                i = n(2547),
                o = n(5043),
                l = n(328),
                s = n(6993),
                c = n(628);
            const u = () => {
                const {
                    videoRef: e
                } = (0, a.dT)(), [t, n] = (0, i.useState)("WebKitPlaybackTargetAvailabilityEvent" in window);
                return (0, i.useEffect)((() => {
                    const t = (0, s.Z)(e.current),
                        a = e => {
                            n(void 0 !== window.WebKitPlaybackTargetAvailabilityEvent && e instanceof window.WebKitPlaybackTargetAvailabilityEvent && "available" === e.availability)
                        };
                    return t.addEventListener("webkitplaybacktargetavailabilitychanged", a), () => {
                        t.removeEventListener("webkitplaybacktargetavailabilitychanged", a)
                    }
                }), [e]), t ? i.createElement(o.B, {
                    onClick: () => {
                        (0, s.Z)(e.current).webkitShowPlaybackTargetPicker()
                    }
                }, i.createElement(l.J, {
                    type: "airplay"
                }), i.createElement(c.T, null, "Airplay")) : null
            };
            var d, m, p, f, v = n(658),
                h = n(5429);

            function b(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const g = (0, r.iv)(d || (d = b(["\n  border-radius: 50%;\n  background: hsl(0 0% 0% / 0.3);\n"]))),
                E = (0, r.iv)(m || (m = b(["\n  --glow-color: var(--primary-color);\n  display: block;\n  /* normalize across UA styles */\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  color: var(--primary-color);\n  cursor: pointer;\n"]))),
                y = (0, r.iv)(p || (p = b(["\n  display: block;\n  /* Visually balance the icon within the circle */\n  transform: translateX(3%);\n  height: min(25vh, 12em);\n"]))),
                w = (0, r.iv)(f || (f = b(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

            function x({
                onClick: e
            }) {
                const {
                    setPaused: t,
                    autoPlay: n,
                    playbackStarted: r,
                    playbackFailed: o,
                    src: s
                } = (0, a.dT)(), {
                    error: u
                } = (0, h.py)(), [d, m] = (0, i.useState)(!1);
                return (0, i.useEffect)((() => {
                    m(!1)
                }), [s]), d || u || r || n && !o ? null : i.createElement("div", {
                    className: w,
                    onClick: n => {
                        m(!0), t(!1), e && e(n)
                    }
                }, i.createElement("div", {
                    className: g
                }, i.createElement(v.j, {
                    glowSize: ".25em",
                    className: E
                }, i.createElement(l.J, {
                    className: y,
                    type: "play"
                }), i.createElement(c.T, null, "Play Video"))))
            }
            var k = n(6114),
                N = (n(798), n(5913)),
                S = n(4860),
                T = n(6299);
            const O = (0, i.createContext)({
                    controlsVisible: !0,
                    showControls: () => {},
                    hideControls: () => {}
                }),
                P = ({
                    children: e
                }) => {
                    const t = (0, i.useRef)(-1),
                        [n, a] = (0, i.useState)({
                            intentType: "hide"
                        }),
                        [r, o] = (0, i.useState)("show" === n.intentType);
                    (0, i.useEffect)((() => {
                        var e;
                        "hide" === n.intentType ? o(!1) : (o(!0), null !== (e = n.options) && void 0 !== e && e.hideAfter && (t.current = window.setTimeout((() => {
                            o(!1)
                        }), n.options.hideAfter)));
                        return () => {
                            clearTimeout(t.current)
                        }
                    }), [n]);
                    const l = (0, i.useCallback)((e => {
                            a({
                                intentType: "show",
                                options: e
                            })
                        }), []),
                        s = {
                            controlsVisible: r,
                            showControls: l,
                            hideControls: (0, i.useCallback)((() => {
                                a({
                                    intentType: "hide"
                                })
                            }), [])
                        };
                    return i.createElement(O.Provider, {
                        value: s
                    }, e)
                };

            function C() {
                return (0, i.useContext)(O)
            }
            var j, L, M, A, D;

            function I(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const R = (0, r.iv)(j || (j = I(["\n  color: white;\n  background: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  overflow-y: auto;\n  max-height: calc(100vh - ", "em);\n"])), T.G),
                z = (0, r.iv)(L || (L = I(["\n  position: relative;\n"]))),
                F = (0, r.iv)(M || (M = I(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n"]))),
                _ = (0, r.iv)(A || (A = I(["\n  // necessary to achieve selector specificity that will\n  // take precedence over the default lib styles\n  &[data-reach-menu-items] {\n    // overriding default styles from @reach/menu-button\n    background: transparent;\n    border: none;\n    padding: 0;\n    font-size: 0.8em;\n  }\n"]))),
                B = () => {
                    const {
                        showControls: e,
                        controlsVisible: t
                    } = C();
                    return (0, i.useEffect)((() => (e(), () => {
                        e({
                            hideAfter: 3e3
                        })
                    })), [t]), null
                };

            function U({
                options: e,
                onSelect: t,
                selected: n,
                buttonText: a,
                buttonClassName: l
            }) {
                return i.createElement(k.v2, null, (({
                    isExpanded: s
                }) => i.createElement("div", {
                    className: z,
                    onKeyDown: S.Fx
                }, s && i.createElement("div", {
                    className: F
                }, i.createElement(B, null)), i.createElement(k.j2, {
                    className: (0, N.A)(o.Q, l),
                    as: v.j
                }, a), i.createElement(k.YI, {
                    className: R
                }, i.createElement(k.sd, {
                    className: _
                }, e.map((e => {
                    return i.createElement(k.sN, {
                        key: JSON.stringify(e),
                        className: (a = e.value === n, (0, r.iv)(D || (D = I(["\n  &[data-reach-menu-item] {\n    position: relative;\n    font-size: inherit;\n    background: ", ";\n    color: ", ';\n    transition: background 0.1s ease, color 0.1s ease;\n\n    // This is the selector for items that are "hovered" or\n    // selected with the keyboard before activation\n    &[data-selected] {\n      background: rgba(255, 255, 255, 0.2);\n      color: white;\n    }\n  }\n'])), a ? "white" : "inherit", a ? "black" : "inherit")),
                        children: e.label,
                        onSelect: () => {
                            t(e.value)
                        }
                    });
                    var a
                })))))))
            }
            var Y, K = n(2835),
                V = n(7395);
            const J = (0, r.iv)(Y || (W = ["\n  padding: 0.25rem;\n  width: auto;\n"], X || (X = W.slice(0)), Y = Object.freeze(Object.defineProperties(W, {
                raw: {
                    value: Object.freeze(X)
                }
            }))));
            var W, X;
            const H = () => {
                const {
                    fullscreenContainerRef: e
                } = (0, a.dT)(), t = (0, K.OK)(), [n, r] = (0, V.q2)(), [o, s] = (0, i.useState)(n), u = null === t || void 0 === t ? void 0 : t.tt.find((e => e.textLanguage.toLowerCase() === (null === n || void 0 === n ? void 0 : n.toLowerCase())));
                return (0, S.x6)({
                    keyName: "C"
                }, (() => {
                    null !== t && 0 !== t.tt.length && (null === n ? r(null !== o && void 0 !== o ? o : t.tt[0].textLanguage) : (s(n), r(null)))
                }), {
                    target: e
                }), null === t || t.tt.length < 1 ? null : i.createElement(U, {
                    buttonClassName: J,
                    selected: n,
                    options: [...t.tt.map((({
                        label: e,
                        textLanguage: n
                    }) => ({
                        value: n,
                        label: 1 === t.tt.length && void 0 === e ? "CC on" : e
                    }))), {
                        label: "CC off",
                        value: null
                    }],
                    onSelect: e => {
                        r(e)
                    },
                    buttonText: null !== u && void 0 !== u && u.label ? i.createElement(i.Fragment, null, i.createElement(l.J, {
                        style: {
                            padding: ".25rem"
                        },
                        type: "captionsEnabled"
                    }), i.createElement(c.T, null, "Captions Enabled")) : i.createElement(i.Fragment, null, i.createElement(l.J, {
                        style: {
                            padding: ".35rem"
                        },
                        type: "captionsDisabled"
                    }), i.createElement(c.T, null, "Captions Disabled"))
                })
            };
            var Z, q = n(6186),
                Q = n.n(q),
                G = n(751);
            const $ = (0, r.iv)(Z || (Z = function(e, t) {
                    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }(["\n  padding: 0.85em;\n"]))),
                ee = [{
                    value: "REPORT_PLAYBACK_ISSUE",
                    label: "Report playback issue"
                }, {
                    value: "COPY_VIDEO_ID",
                    label: "Copy Video ID"
                }, {
                    value: "COPY_PLAYBACK_ID",
                    label: "Copy Playback ID"
                }, {
                    value: "COPY_ID_AND_REPORT_ABUSE",
                    label: "Copy ID and Report Abuse"
                }],
                te = ({}) => {
                    const {
                        playerVersion: e,
                        videoId: t,
                        impressionId: n
                    } = (0, G.A)();
                    return i.createElement(U, {
                        options: ee,
                        onSelect: a => {
                            switch (a) {
                                case "REPORT_PLAYBACK_ISSUE":
                                    window.open("https://playback-report.videodelivery.net/?v=".concat(t, "&vers=").concat(e, "&i=").concat(n), "Playback Report");
                                    break;
                                case "COPY_VIDEO_ID":
                                    Q()(t);
                                    break;
                                case "COPY_PLAYBACK_ID":
                                    Q()(n);
                                    break;
                                case "COPY_ID_AND_REPORT_ABUSE":
                                    Q()(t), window.open("https://abuse.cloudflare.com/?videoID=".concat(t, "&playbackID=").concat(n), "Abuse Form");
                                    break;
                                default:
                                    return a
                            }
                        },
                        buttonClassName: $,
                        buttonText: i.createElement("span", null, i.createElement(c.T, null, "Extra options"), i.createElement(l.J, {
                            type: "gear"
                        }))
                    })
                },
                ne = () => {
                    const {
                        fullscreenEnabled: e,
                        fullscreenActive: t,
                        toggleFullscreen: n
                    } = (0, a.dT)();
                    return e ? i.createElement(o.B, {
                        onClick: n
                    }, i.createElement(l.J, {
                        type: t ? "exitFullscreen" : "enterFullscreen"
                    }), i.createElement(c.T, null, t ? "Exit Fullscreen" : "Enable Fullscreen")) : null
                };
            var ae, re, ie, oe, le, se = n(862),
                ce = n(844);

            function ue(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const de = 800,
                me = (0, r.F4)(ae || (ae = ue(["\n  0% {\n    /* We're not changing the translate, but it needs to be present in\n       the animation because we're changing the scale, and transform\n       can only have one value assigned at a time. */\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translate(-50%, -50%) scale(.8);\n    opacity: 0;\n  }\n"]))),
                pe = (0, r.iv)(re || (re = ue(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  height: 7em;\n  width: 7em;\n  padding: 1.5em;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  animation: ", "\n    ", "s ease\n    ", "s forwards;\n"])), me, .8 - .2, .2),
                fe = (0, r.iv)(oe || (oe = ue(["\n  font-size: 1em;\n"]))),
                ve = (0, r.iv)(le || (le = ue(["\n  margin-top: 0.5em;\n"]))),
                he = {
                    play: "play",
                    pause: "pause",
                    muted: "volumeMuted",
                    unmuted: "volumeHigh"
                },
                be = ({
                    indication: e
                }) => {
                    return i.createElement("div", {
                        className: pe
                    }, i.createElement(l.J, {
                        className: (t = "play" === e.type, (0, r.iv)(ie || (ie = ue(["\n  margin-left: ", ";\n"])), t ? "0.125em" : 0)),
                        type: he[e.type]
                    }), i.createElement("span", {
                        "aria-label": e.type
                    }));
                    var t
                },
                ge = ({
                    indication: e
                }) => {
                    const {
                        volume: t
                    } = e;
                    return i.createElement("div", {
                        className: pe
                    }, i.createElement(se.eU, {
                        className: fe,
                        volume: t,
                        muted: !1
                    }), i.createElement("span", {
                        className: ve
                    }, Math.round(100 * t), "%"))
                },
                Ee = ({
                    indication: e
                }) => {
                    const {
                        type: t,
                        skipSeconds: n
                    } = e;
                    return i.createElement("div", {
                        className: pe
                    }, i.createElement(l.J, {
                        className: fe,
                        type: t
                    }), i.createElement("span", {
                        className: ve
                    }, n, "s"))
                },
                ye = ({
                    indication: e
                }) => {
                    const {
                        type: t,
                        playbackRate: n
                    } = e;
                    return i.createElement("div", {
                        className: pe
                    }, i.createElement(l.J, {
                        className: fe,
                        type: t
                    }), i.createElement("span", {
                        className: ve
                    }, n, "x"))
                },
                we = {
                    play: be,
                    pause: be,
                    muted: be,
                    unmuted: be,
                    volumeUp: ge,
                    volumeDown: ge,
                    skipForward: Ee,
                    skipBackward: Ee,
                    fastForward: ye,
                    fastBackward: ye
                },
                xe = () => {
                    const e = (0, ce.iu)(de);
                    if (!e) return null;
                    const t = we[e.type];
                    return i.createElement(t, {
                        key: JSON.stringify(e),
                        indication: e
                    })
                };
            var ke, Ne = n(3061);
            n(8323), n(8467);
            const Se = (0, r.iv)(ke || (ke = function(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n\n  svg {\n    height: 1em;\n    width: auto;\n    align-self: center;\n  }\n"])));
            const Te = () => {
                const e = function() {
                    const [e, t] = (0, i.useState)(0), {
                        resourceUrl: n
                    } = (0, G.A)(), a = (0, i.useRef)(-1);
                    return (0, i.useEffect)((() => {
                        const e = new AbortController,
                            r = () => e.abort(),
                            i = () => {
                                clearTimeout(a.current), a.current = window.setTimeout(r, 5e3), fetch(n + "/views", {
                                    signal: e.signal
                                }).then((e => e.json())).then((({
                                    liveViewers: e
                                }) => t(e))).finally((() => clearTimeout(a.current)))
                            },
                            o = setInterval(i, 1e4);
                        return i(), () => {
                            clearInterval(o), r()
                        }
                    }), [n]), e
                }();
                return e < 1 ? null : i.createElement("div", {
                    className: Se
                }, i.createElement(l.J, {
                    type: "eye"
                }), (t = e) < 1e3 ? t.toString() : t < 1e6 ? (t / 1e3).toFixed(1) + "K" : t < 1e9 ? (t / 1e6).toFixed(1) + "M" : (t / 1e9).toFixed(1) + "B", " ", i.createElement(c.T, null, "viewers"));
                var t
            };
            var Oe, Pe;

            function Ce(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const je = (0, r.iv)(Oe || (Oe = Ce(["\n  display: flex;\n  gap: 0.75rem;\n  align-items: baseline;\n"]))),
                Le = (0, r.iv)(Pe || (Pe = Ce(["\n  display: flex;\n  align-items: center;\n\n  &:before {\n    content: ' ';\n    background: red;\n    height: 0.75rem;\n    width: 0.75rem;\n    margin-right: 0.5rem;\n    border-radius: 100%;\n  }\n"]))),
                Me = () => {
                    const e = "false" === new URLSearchParams(location.search).get("liveViewerCount");
                    return i.createElement("div", {
                        className: je
                    }, i.createElement("div", {
                        className: Le
                    }, "LIVE"), !e && i.createElement(Te, null))
                };
            var Ae;
            const De = (0, r.iv)(Ae || (Ae = function(e, t) {
                    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }(["\n  height: 1em;\n"]))),
                Ie = ({
                    className: e
                }) => {
                    const t = (0, K.OK)();
                    if (!t || !t.nft) return null;
                    const {
                        contract: n,
                        token: a
                    } = t.nft, r = "https://etherscan.io/token/".concat(n, "?a=").concat(a);
                    return i.createElement("a", {
                        className: (0, N.A)((0, v.N)(), De, e),
                        href: r,
                        target: "_blank",
                        rel: "noopener"
                    }, i.createElement(l.J, {
                        type: "nft",
                        preserveAspectRatio: "xMinYMin meet"
                    }), i.createElement(c.T, null, "View NFT"))
                },
                Re = () => {
                    const {
                        videoRef: e
                    } = (0, a.dT)(), [t, n] = (0, i.useState)(!1);
                    return (0, i.useEffect)((() => {
                        const t = (0, s.Z)(e.current),
                            a = () => {
                                n(!0)
                            },
                            r = () => {
                                n(!1)
                            };
                        return t.addEventListener("enterpictureinpicture", a), t.addEventListener("leavepictureinpicture", r), () => {
                            t.removeEventListener("enterpictureinpicture", a), t.removeEventListener("leavepictureinpicture", r)
                        }
                    }), [e]), document.pictureInPictureEnabled ? i.createElement(o.B, {
                        onClick: () => {
                            if (t) document.exitPictureInPicture();
                            else {
                                (0, s.Z)(e.current).requestPictureInPicture()
                            }
                        }
                    }, i.createElement(l.J, {
                        type: t ? "exitPictureInPicture" : "enterPictureInPicture"
                    }), i.createElement(c.T, null, t ? "Exit Picture in Picture" : "Enable Picture in Picture")) : null
                },
                ze = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2],
                Fe = () => {
                    const {
                        playbackRate: e,
                        fullscreenContainerRef: t,
                        setPlaybackRate: n
                    } = (0, a.dT)(), r = (0, ce.DY)();
                    return (0, S.x6)({
                        keyName: ">",
                        shiftKey: !0
                    }, (() => {
                        const t = (e => {
                            const t = ze.indexOf(e);
                            return ze[Math.min(ze.length - 1, t + 1)]
                        })(e);
                        n(t), r({
                            type: "fastForward",
                            timestamp: Date.now(),
                            playbackRate: t
                        })
                    }), {
                        target: t
                    }), (0, S.x6)({
                        keyName: "<",
                        shiftKey: !0
                    }, (() => {
                        const t = (e => {
                            const t = ze.indexOf(e);
                            return ze[Math.max(0, t - 1)]
                        })(e);
                        n(t), r({
                            type: "fastBackward",
                            timestamp: Date.now(),
                            playbackRate: t
                        })
                    }), {
                        target: t
                    }), i.createElement(U, {
                        selected: e,
                        options: ze.map((e => ({
                            label: "".concat(e, "x"),
                            value: e
                        }))),
                        onSelect: n,
                        buttonText: i.createElement("span", null, i.createElement(c.T, null, "Playback rate: "), "".concat(e, "x"))
                    })
                };
            var _e;
            const Be = (0, r.iv)(_e || (_e = function(e, t) {
                    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }(["\n  flex-shrink: 0;\n  padding-left: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-variant-numeric: tabular-nums;\n"]))),
                Ue = e => Math.floor(e / 60 % 60),
                Ye = e => Math.floor(e / 60 / 60),
                Ke = (e, t, n) => [n > 0 && Math.floor(Ye(e)).toString().padStart(n.toString().length, "0"), Math.floor(Ue(e)).toString().padStart(n > 0 ? 2 : t.toString().length, "0"), Math.floor((e => e % 60)(e)).toString().padStart(2, "0")].filter(Boolean).join(":"),
                Ve = () => {
                    const {
                        currentTime: e,
                        duration: t
                    } = (0, a.dT)(), n = isNaN(t) ? 0 : t, r = isNaN(e) ? 0 : e;
                    return i.createElement("div", {
                        className: Be
                    }, Ke(r, Ue(n), Ye(n)), " ", "/", " ", Ke(n, Ue(n), Ye(n)))
                };
            var Je = n(7624);
            const We = () => {
                const {
                    selectedBitrate: e,
                    bitrateOptions: t,
                    setSelectedBitrate: n
                } = (0, a.dT)();
                return 0 === t.length ? null : i.createElement(U, {
                    selected: e,
                    onSelect: e => n(e),
                    options: [...t.map((e => ({
                        label: e.height.toString(),
                        value: e
                    }))), {
                        value: "auto",
                        label: "auto"
                    }],
                    buttonText: i.createElement("span", null, i.createElement(c.T, null, "Video quality: "), "string" === typeof e ? e : e.height.toString())
                })
            };
            var Xe;
            const He = (0, r.iv)(Xe || (Xe = function(e, t) {
                    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]))),
                Ze = ({
                    children: e,
                    className: t,
                    transform: n
                }) => i.createElement("div", {
                    className: (0, N.A)(He, t),
                    style: {
                        transform: n
                    }
                }, e);

            function qe(e) {
                return Math.min(1, Math.max(0, e))
            }

            function Qe() {
                const [e, t] = (0, i.useState)(window.matchMedia("(hover: hover)").matches ? "mouse" : "touch");
                return (0, i.useEffect)((() => {
                    const n = n => {
                        e !== n.pointerType && t(n.pointerType)
                    };
                    return window.addEventListener("pointerdown", n, !0), window.addEventListener("pointermove", n, !0), () => {
                        window.removeEventListener("pointerdown", n, !0), window.removeEventListener("pointermove", n, !0)
                    }
                }), [e]), e
            }
            n(4073), n(8950), n(2383), n(2327), n(7922), n(5141), n(9855), n(9125), n(1054), n(2143), n(2880), n(9693), n(3637), n(361), n(3201), n(3876);

            function Ge() {
                return Ge = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, Ge.apply(this, arguments)
            }
            const $e = new Set,
                et = ({
                    sources: e,
                    onLoad: t,
                    ...n
                }) => {
                    const a = (0, i.useMemo)((() => e.reduce(((e, t, n) => $e.has(t) ? n : e), 0)), e),
                        [r, o] = (0, i.useState)(a);
                    return (0, i.useEffect)((() => {
                        o(a)
                    }), [a]), i.createElement("img", Ge({
                        src: e[r],
                        onLoad: n => {
                            $e.add(n.currentTarget.src);
                            const a = r + 1;
                            a < e.length && o(a), t && t(n)
                        }
                    }, n))
                };
            var tt, nt, at;

            function rt(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const it = [108],
                ot = (e = 0) => (0, r.iv)(tt || (tt = rt(['\n    /* \n       Important that the height here resolves to a whole\n       pixel value because the container is going to hold\n       a spritesheet and translate it within based on the\n       height and image index. If this value renders with\n       sub-pixel values, it can lead to an inaccurate\n       translation calculation and cause a bad "scrolling"\n    */\n    --height: 7rem;\n\n    @media (max-height: 280px) {\n      --height: 5rem;\n    }\n\n    @media (max-height: 180px) {\n      --height: 3rem;\n    }\n\n    @media (max-height: 150px) {\n      --height: 2rem;\n    }\n\n    height: var(--height);\n    width: calc(var(--height) * ', ");\n    overflow: hidden;\n    position: relative;\n    box-sizing: content-box;\n    border: 0.15em solid white;\n    background: white;\n    // layered shadows to look more realistic\n    // https://tobiasahlin.com/blog/layered-smooth-box-shadows/\n    // https://shadows.brumm.af/\n    box-shadow: 0 0px 28.8px rgba(0, 0, 0, 0.042),\n      0 0px 34.1px rgba(0, 0, 0, 0.061), 0 0px 36.4px rgba(0, 0, 0, 0.075),\n      0 0px 38.4px rgba(0, 0, 0, 0.089), 0 0px 42.6px rgba(0, 0, 0, 0.108),\n      0 0px 61px rgba(0, 0, 0, 0.15);\n\n    margin-bottom: 1rem;\n    opacity: ", ";\n  "])), e, e ? 1 : 0),
                lt = (0, r.iv)(nt || (nt = rt(["\n  background: black;\n  width: 100%;\n  display: block;\n"]))),
                st = (0, r.iv)(at || (at = rt(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgb(0 0 0 / 0.3);\n\n  p {\n    margin: 0;\n  }\n"]))),
                ct = {};
            const ut = {},
                dt = ({
                    time: e,
                    debug: t
                }) => {
                    const {
                        resourceUrl: n
                    } = (0, G.A)(), {
                        duration: r
                    } = (0, a.dT)(), [o, l] = function() {
                        const {
                            videoId: e
                        } = (0, G.A)(), [t, n] = (0, i.useState)(!!ct[e]);
                        return (0, i.useEffect)((() => {
                            n(!!ct[e])
                        }), [e]), [t, (0, i.useCallback)((t => {
                            ct[e] = t, n(t)
                        }), [e])]
                    }(), {
                        secondsInSpriteSheet: s,
                        imagesPerSheet: c
                    } = (({
                        duration: e,
                        idealImagesPerSheet: t,
                        idealSheetCount: n,
                        maxSecondsInSpriteSheet: a
                    }) => {
                        const r = e / n;
                        if (r <= a) return {
                            secondsInSpriteSheet: r,
                            imagesPerSheet: t
                        };
                        const i = t * n,
                            o = Math.ceil(e / a);
                        return {
                            secondsInSpriteSheet: a,
                            imagesPerSheet: Math.ceil(i / o)
                        }
                    })({
                        duration: r,
                        idealImagesPerSheet: 60,
                        idealSheetCount: 6,
                        maxSecondsInSpriteSheet: 600
                    }), {
                        spriteIndex: u,
                        sheetIndex: d,
                        imageIndex: m
                    } = (({
                        secondsInSpriteSheet: e,
                        imagesPerSheet: t,
                        time: n,
                        duration: a
                    }) => {
                        const r = e / t,
                            i = Math.min(Math.ceil(n / r), Math.floor(a / r - 1e-6));
                        return {
                            spriteIndex: i,
                            sheetIndex: Math.floor(i / t),
                            imageIndex: i % t
                        }
                    })({
                        secondsInSpriteSheet: s,
                        imagesPerSheet: c,
                        time: e,
                        duration: r
                    }), p = it.map((e => mt({
                        resourceUrl: n,
                        height: e,
                        imageCount: c,
                        duration: s,
                        time: d * s
                    }))), [f, v] = (0, i.useState)(), h = f ? ut[f] : void 0;
                    return (0, i.useEffect)((() => {
                        v([...p].reverse().find((e => void 0 !== ut[e])))
                    }), p), o ? null : i.createElement("div", {
                        className: ot(h)
                    }, i.createElement(Ze, {
                        transform: "translateY(-".concat(100 * m, "%)")
                    }, i.createElement(et, {
                        key: (void 0 === ut[p[0]]).toString(),
                        className: lt,
                        sources: p,
                        alt: "Preview of video at ".concat(Math.round(e), " seconds}"),
                        onError: () => l(!0),
                        onLoad: ({
                            currentTarget: {
                                naturalWidth: e,
                                src: t
                            }
                        }) => {
                            ut[t] = e / it[p.indexOf(t)], v(t)
                        }
                    })), t && i.createElement("div", {
                        className: st
                    }, i.createElement("p", null, "time: ", e.toFixed(2)), i.createElement("p", null, "spriteIndex: ", u), i.createElement("p", null, "sheet: ", d), i.createElement("p", null, "image: ", m)))
                },
                mt = ({
                    resourceUrl: e,
                    time: t,
                    duration: n,
                    height: a,
                    imageCount: r
                }) => {
                    const i = new URLSearchParams({
                        time: "".concat(t.toFixed(3), "s"),
                        duration: "".concat(n.toFixed(3), "s"),
                        height: a.toString(),
                        imageCount: r.toString()
                    });
                    return "".concat(e, "/thumbnails/thumbnail.jpg?").concat(i)
                };

            function pt(e) {
                const t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return [t && "".concat(t, " minutes"), "".concat(n, " seconds")].filter(Boolean).join(" and ")
            }
            var ft, vt, ht, bt, gt, Et, yt, wt, xt, kt, Nt, St;

            function Tt() {
                return Tt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, Tt.apply(this, arguments)
            }

            function Ot(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const Pt = (0, r.iv)(ft || (ft = Ot(["\n  position: relative;\n  height: 1em;\n  flex: auto;\n  display: flex;\n  touch-action: none;\n  user-select: none;\n"]))),
                Ct = (0, r.iv)(vt || (vt = Ot(["\n  position: absolute;\n  height: 200%;\n  transform: translateY(-50%);\n  width: 100%;\n  top: 50%;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n"]))),
                jt = (0, r.iv)(bt || (bt = Ot(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n\n  :hover > div:first-child {\n    transform: scaleY(1);\n  }\n"]))),
                Lt = (0, r.iv)(gt || (gt = Ot(["\n  position: relative;\n  width: 100%;\n  height: 0.4em;\n  background: rgba(255, 255, 255, 0.2);\n  transform: scaleY(0.6);\n  transition: transform 0.3s ease;\n  outline-offset: 1px !important;\n  /* \n    the focus ring expands as the transform sled \n    children move outside the container's box.  \n    Setting overflow: hidden prevents this.\n   */\n  overflow: hidden;\n"]))),
                Mt = (0, r.iv)(Et || (Et = Ot(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background: #eee;\n  left: 0;\n  right: 0;\n  width: 100%;\n  transform-origin: left;\n  transition: opacity 0.5s ease;\n"]))),
                At = (0, r.iv)(yt || (yt = Ot(["\n  z-index: 1;\n"]))),
                Dt = (0, r.iv)(wt || (wt = Ot(["\n  width: 3px;\n  height: 100%;\n  transform: translateX(-50%);\n  background: #fff;\n  opacity: 0.7;\n"]))),
                It = (0, r.iv)(xt || (xt = Ot(["\n  position: absolute;\n  top: 0;\n  height: 100%;\n  left: 0;\n  width: 100%;\n  background: var(--primary-color, white);\n  transform: scaleX(0);\n  transform-origin: 0 0;\n"]))),
                Rt = (0, r.iv)(kt || (kt = Ot(["\n  position: absolute;\n  z-index: 1;\n  width: 1px;\n  top: 0;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n"]))),
                zt = (0, r.iv)(Nt || (Nt = Ot(["\n  transform: translateX(-50%);\n  position: absolute;\n  left: 0;\n  bottom: 1.5em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),
                Ft = (0, r.iv)(St || (St = Ot(["\n  // layered shadows to look more realistic\n  // https://tobiasahlin.com/blog/layered-smooth-box-shadows/\n  // https://shadows.brumm.af/\n  text-shadow: 0 0.1px 2.4px rgba(0, 0, 0, 0.042),\n    0 0.3px 3.2px rgba(0, 0, 0, 0.061), 0 0.5px 3.6px rgba(0, 0, 0, 0.075),\n    0 0.9px 4px rgba(0, 0, 0, 0.089), 0 1.7px 4.7px rgba(0, 0, 0, 0.108),\n    0 4px 7px rgba(0, 0, 0, 0.15);\n\n  font-variant-numeric: tabular-nums;\n"])));

            function _t(e, t, n) {
                const a = n / 2;
                return Math.min(Math.max(t * e, a), t)
            }

            function Bt(e, t) {
                const {
                    seek: n,
                    duration: r
                } = (0, a.dT)();
                (0, S.x6)({
                    keyName: e.toString()
                }, (() => n(e / 10 * r)), {
                    target: t
                })
            }
            const Ut = 10;
            const Yt = ({}) => {
                var e;
                const {
                    duration: t,
                    seek: n,
                    bufferedTimeRanges: o,
                    paused: l,
                    setPaused: s,
                    videoRef: c
                } = (0, a.dT)();
                ! function() {
                    const {
                        fullscreenContainerRef: e,
                        duration: t,
                        currentTime: n,
                        seek: r
                    } = (0, a.dT)(), i = (0, ce.DY)(), o = (0, ce.iu)(de);
                    Bt(0, e), Bt(1, e), Bt(2, e), Bt(3, e), Bt(4, e), Bt(5, e), Bt(6, e), Bt(7, e), Bt(8, e), Bt(9, e);
                    const l = () => {
                            r(Math.min(t, n + Ut));
                            const e = o && "skipForward" === o.type ? Ut + o.skipSeconds : Ut;
                            i({
                                type: "skipForward",
                                skipSeconds: e,
                                timestamp: Date.now()
                            })
                        },
                        s = () => {
                            r(Math.max(0, n - Ut));
                            const e = o && "skipBackward" === o.type ? Ut + o.skipSeconds : Ut;
                            i({
                                type: "skipBackward",
                                skipSeconds: e,
                                timestamp: Date.now()
                            })
                        };
                    (0, S.x6)({
                        keyName: "ArrowRight"
                    }, l, {
                        target: e
                    }), (0, S.x6)({
                        keyName: "l"
                    }, l, {
                        target: e
                    }), (0, S.x6)({
                        keyName: "ArrowLeft"
                    }, s, {
                        target: e
                    }), (0, S.x6)({
                        keyName: "j"
                    }, s, {
                        target: e
                    })
                }();
                const {
                    flags: u
                } = null !== (e = (0, K.OK)()) && void 0 !== e ? e : {}, [d, m] = (0, i.useState)(0), p = function(e) {
                    var t, n;
                    const [a, r] = (0, i.useState)(null !== (t = null === (n = e.current) || void 0 === n ? void 0 : n.currentTime) && void 0 !== t ? t : 0), o = (0, i.useRef)(-1);
                    return (0, i.useEffect)((() => (function t() {
                        o.current = requestAnimationFrame((() => {
                            e.current && r(e.current.currentTime), t()
                        }))
                    }(), () => {
                        cancelAnimationFrame(o.current)
                    })), [e]), a
                }(c), f = function({
                    hideAfter: e = 3e3
                } = {}) {
                    const {
                        showControls: t
                    } = C(), [n, a] = (0, i.useState)(!1), r = (0, i.useCallback)((e => {
                        a(!0), t(), e.stopPropagation()
                    }), [t]), o = (0, i.useCallback)((n => {
                        a(!1), t({
                            hideAfter: e
                        }), n.stopPropagation()
                    }), [t]);
                    return e => ({
                        onMouseMove: (0, i.useCallback)((t => {
                            e.onMouseMove && e.onMouseMove(t), n && t.stopPropagation()
                        }), [e.onMouseMove]),
                        onMouseDown: (0, i.useCallback)((t => {
                            e.onMouseDown && e.onMouseDown(t), r(t)
                        }), [e.onMouseDown]),
                        onMouseUp: (0, i.useCallback)((t => {
                            e.onMouseUp && e.onMouseUp(t), o(t)
                        }), [e.onMouseUp]),
                        onTouchStart: (0, i.useCallback)((t => {
                            e.onTouchStart && e.onTouchStart(t), r(t)
                        }), [e.onTouchStart]),
                        onTouchEnd: (0, i.useCallback)((t => {
                            e.onTouchEnd && e.onTouchEnd(t), o(t)
                        }), [e.onTouchEnd])
                    })
                }(), v = (0, i.useRef)(null), h = (0, i.useRef)(null), b = (0, i.useRef)(null), g = (0, i.useCallback)((({
                    clientX: e,
                    currentTarget: n
                }) => {
                    const {
                        left: a,
                        right: r
                    } = n.getBoundingClientRect(), i = (e - a) / (r - a);
                    m(Math.min(t, Math.max(0, i * t)))
                }), [t]), E = function(e) {
                    const t = Qe(),
                        [n, a] = (0, i.useState)(!1);
                    return (0, i.useEffect)((() => {
                        const n = e.current;
                        if ("mouse" !== t || !n) return void a(!1);
                        const r = () => {
                                a(!0)
                            },
                            i = () => {
                                a(!1)
                            },
                            o = () => {
                                a(!1)
                            };
                        return n.addEventListener("mouseenter", r), n.addEventListener("mouseleave", i), window.addEventListener("blur", o, !0), () => {
                            n.removeEventListener("mouseenter", r), n.removeEventListener("mouseleave", i), window.removeEventListener("blur", o, !0)
                        }
                    }), [t, n]), n
                }(h), y = function(e, t) {
                    const [n, a] = (0, i.useState)(!1), r = (0, i.useRef)(e);
                    return (0, i.useLayoutEffect)((() => {
                        r.current = e
                    }), [e]), (0, i.useEffect)((() => {
                        const e = t.current;
                        if (!e) return;
                        const n = () => {
                                a(!1), e.removeEventListener("pointermove", l), e.removeEventListener("pointerup", s), window.removeEventListener("selectstart", i, !0)
                            },
                            i = e => {
                                e.preventDefault()
                            },
                            o = t => {
                                a(!0), r.current(qe(t.offsetX / e.offsetWidth)), e.addEventListener("pointermove", l), e.addEventListener("pointerup", s), e.setPointerCapture(t.pointerId), window.addEventListener("selectstart", i, !0)
                            },
                            l = ({
                                offsetX: t
                            }) => {
                                r.current(qe(t / e.offsetWidth))
                            },
                            s = t => {
                                n(), e.releasePointerCapture(t.pointerId)
                            };
                        return e.addEventListener("pointerdown", o), e.addEventListener("lostpointercapture", n), () => {
                            e.removeEventListener("pointerdown", o), e.removeEventListener("pointermove", l), e.removeEventListener("pointerup", s), e.removeEventListener("lostpointercapture", n), window.removeEventListener("selectstart", i, !0)
                        }
                    }), [t]), n
                }((e => m(e * t)), h), w = function(e, t) {
                    return Math.floor(1e4 * e / t) / 100
                }(y ? d : p, t), x = E || y, k = Qe();
                return i.createElement("div", {
                    className: Pt,
                    ref: v
                }, x && t > 0 && i.createElement(Ze, {
                    transform: b.current && v.current ? "translate3d(".concat(_t(d / t, v.current.offsetWidth, b.current.offsetWidth), "px, 0, 0)") : void 0
                }, i.createElement("div", {
                    className: zt,
                    ref: b
                }, i.createElement(dt, {
                    time: d
                }), i.createElement("span", {
                    className: Ft
                }, Ke(d, Ue(t), Ye(t))))), i.createElement("div", {
                    className: jt
                }, i.createElement("div", {
                    className: Lt,
                    tabIndex: 0,
                    "aria-label": "seek slider",
                    role: "slider",
                    "aria-valuemin": 0,
                    "aria-valuemax": t,
                    "aria-valuetext": "".concat(pt(p), " of ").concat(pt(t)),
                    "aria-valuenow": p
                }, o.map((({
                    start: e,
                    end: n
                }) => i.createElement("div", {
                    key: e,
                    className: Mt,
                    style: {
                        opacity: p < .1 && l ? 0 : .35,
                        transform: "translate3d(".concat(e / t * 100, "%, 0, 0)\n                scale3d(").concat((n - e) / t, ", 1, 1)")
                    }
                }))), x && i.createElement(Ze, {
                    className: At,
                    transform: "translate3d(".concat(100 * d / t, "%, 0, 0)")
                }, i.createElement("div", {
                    className: Dt,
                    "data-tick": !0,
                    style: {
                        background: d < p ? "#000" : "#fff"
                    }
                })), i.createElement("div", {
                    className: It,
                    style: {
                        transform: "scale3d(".concat(w / 100, ", 1, 1)")
                    }
                }), i.createElement(Ze, {
                    transform: "translate3d(".concat(w, "%, 0, 0)")
                }, i.createElement("div", {
                    className: Rt,
                    style: {
                        opacity: null !== d ? 0 : 1
                    }
                }))), i.createElement(Ze, {
                    transform: "translate3d(".concat(w, "%, 0, 0)")
                }, i.createElement("div", {
                    className: (N = x || "mouse" !== k, (0, r.iv)(ht || (ht = Ot(["\n  position: absolute;\n  left: 0;\n  transform-origin: left center;\n  transform: scale(", ") translateX(-50%);\n  opacity: ", ";\n  height: 1em;\n  width: 1em;\n  border-radius: 100%;\n  background: var(--primary-color, white);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n"])), N ? 1 : 0, N ? 1 : 0)),
                    "data-thumb": !0
                })), i.createElement("div", Tt({
                    role: "slider",
                    className: Ct,
                    ref: h,
                    onPointerDown: () => {
                        s(!0)
                    },
                    onPointerUp: () => {
                        n(d), s(!1)
                    }
                }, f({
                    onMouseMove: g
                })))));
                var N
            };
            var Kt = n(2778);
            const Vt = ({
                to: e,
                className: t,
                children: n
            }) => e ? i.createElement("a", {
                className: t,
                href: e,
                target: "_top"
            }, n) : i.createElement(i.Fragment, null, n);
            var Jt, Wt;

            function Xt() {
                return Xt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, Xt.apply(this, arguments)
            }

            function Ht(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const Zt = (0, r.iv)(Jt || (Jt = Ht(["\n  display: inline-block;\n  margin: 0;\n  font-weight: 500;\n  font-size: 1.5rem;\n  text-shadow: 0 0.1px 2.4px rgba(0, 0, 0, 0.042),\n    0 0.3px 3.2px rgba(0, 0, 0, 0.061), 0 0.5px 3.6px rgba(0, 0, 0, 0.075),\n    0 0.9px 4px rgba(0, 0, 0, 0.089), 0 1.7px 4.7px rgba(0, 0, 0, 0.108),\n    0 4px 7px rgba(0, 0, 0, 0.15);\n\n  @media (max-width: 500px) {\n    font-size: 1.2rem;\n  }\n"]))),
                qt = (0, r.iv)(Wt || (Wt = Ht(["\n  color: white;\n  text-decoration: none;\n"]))),
                Qt = ({
                    className: e,
                    link: t,
                    children: n,
                    ...a
                }) => i.createElement(Vt, {
                    className: (0, N.A)(qt, (0, v.N)()),
                    to: t
                }, i.createElement("h1", Xt({
                    className: (0, N.A)(Zt, e)
                }, a), n));
            var Gt, $t;

            function en(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const tn = (0, r.iv)(Gt || (Gt = en(["\n  display: block;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 100%;\n"]))),
                nn = (0, r.iv)($t || ($t = en(["\n  img {\n    box-shadow: 0px 0px 8px hsl(0 0% 0% / 50%), 0px 0px 16px hsl(0 0% 0% / 50%);\n\n    transition: box-shadow 0.25s ease;\n\n    :hover {\n      box-shadow: 0px 0px 8px hsl(0 0% 100% / 50%),\n        0px 0px 16px hsl(0 0% 100% / 50%);\n    }\n  }\n"]))),
                an = ({
                    src: e,
                    link: t
                }) => i.createElement(Vt, {
                    className: nn,
                    to: t
                }, i.createElement("img", {
                    className: tn,
                    src: e,
                    alt: "Channel Logo"
                }));
            var rn, on, ln, sn, cn, un, dn, mn, pn, fn, vn;

            function hn(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            const bn = (0, i.lazy)((() => Promise.all([n.e(523), n.e(825)]).then(n.bind(n, 4825)))),
                gn = (0, r.iv)(rn || (rn = hn(["\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 0.5em;\n"]))),
                En = (0, r.iv)(on || (on = hn(["\n  flex: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),
                yn = (0, r.iv)(ln || (ln = hn(["\n  flex: auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  user-select: none;\n"]))),
                wn = (0, r.iv)(sn || (sn = hn(["\n  flex: auto;\n"]))),
                xn = (0, r.iv)(cn || (cn = hn(["\n  justify-content: flex-end;\n"]))),
                kn = (0, r.iv)(un || (un = hn(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  z-index: 1;\n  user-select: none;\n\n  &:focus {\n    outline: none;\n  }\n"]))),
                Nn = (0, r.iv)(dn || (dn = hn(["\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-inline-start: auto;\n"]))),
                Sn = (0, r.iv)(mn || (mn = hn(["\n  transition: opacity 0.25s ease;\n"]))),
                Tn = (0, r.iv)(pn || (pn = hn(["\n  opacity: 1;\n"]))),
                On = (0, r.iv)(fn || (fn = hn(["\n  opacity: 0;\n"]))),
                Pn = (0, r.iv)(vn || (vn = hn(["\n  * {\n    cursor: none;\n  }\n"])));

            function Cn() {
                const {
                    paused: e,
                    setPaused: t
                } = (0, a.dT)(), n = (0, ce.DY)();
                return () => {
                    t(!e), n({
                        type: e ? "play" : "pause",
                        timestamp: Date.now()
                    })
                }
            }

            function jn() {
                const e = function() {
                        const [e, t] = (0, i.useState)(!1), {
                            videoRef: n
                        } = (0, a.dT)();
                        return (0, i.useEffect)((() => {
                            const e = (0, s.Z)(n.current),
                                a = () => {
                                    t(!0)
                                },
                                r = () => {
                                    t(!1)
                                };
                            return e.addEventListener("ended", a), e.addEventListener("play", r), () => {
                                e.removeEventListener("ended", a), e.removeEventListener("play", r)
                            }
                        }), [n]), e
                    }(),
                    {
                        showControls: t
                    } = C();
                (0, i.useEffect)((() => {
                    e && t({
                        hideAfter: 5e3
                    })
                }), [e])
            }

            function Ln(e) {
                const {
                    muted: t,
                    setMuted: n,
                    toggleFullscreen: r,
                    volume: o
                } = (0, a.dT)(), l = function() {
                    const {
                        selectedBitrate: e,
                        setSelectedBitrate: t,
                        bitrateOptions: n
                    } = (0, a.dT)(), r = (0, i.useMemo)((() => n.sort(((e, t) => t.height - e.height))), [n]);
                    if (0 === r.length) return () => {};
                    const o = ["auto", ...r],
                        l = o[(o.indexOf(e) + 1) % o.length];
                    return () => {
                        t(l)
                    }
                }();
                (0, S.x6)({
                    keyName: "Q"
                }, l, {
                    target: e
                }), (0, S.x6)({
                    keyName: "M"
                }, (() => {
                    n(!t), p(t ? {
                        type: "volumeUp",
                        volume: o,
                        timestamp: Date.now()
                    } : {
                        type: "muted",
                        timestamp: Date.now()
                    })
                }), {
                    target: e
                }), (0, S.x6)({
                    keyName: "Enter",
                    modKey: !0
                }, r, {
                    target: e
                }), (0, S.x6)({
                    keyName: "f"
                }, r, {
                    target: e
                });
                const s = Cn();
                (0, S.x6)({
                    keyName: "k"
                }, s, {
                    target: e
                }), (0, S.x6)({
                    keyName: " "
                }, (e => {
                    e.target instanceof HTMLButtonElement || s()
                }), {
                    target: e
                });
                const {
                    seek: c,
                    duration: u,
                    currentTime: d,
                    isLive: m
                } = (0, a.dT)(), p = (0, ce.DY)(), f = (0, ce.iu)(de), v = () => {}, h = m ? v : () => {
                    c(Math.min(u, d + Ut));
                    const e = f && "skipForward" === f.type ? Ut + f.skipSeconds : Ut;
                    p({
                        type: "skipForward",
                        skipSeconds: e,
                        timestamp: Date.now()
                    })
                }, b = m ? v : () => {
                    c(Math.max(0, d - Ut));
                    const e = f && "skipBackward" === f.type ? Ut + f.skipSeconds : Ut;
                    p({
                        type: "skipBackward",
                        skipSeconds: e,
                        timestamp: Date.now()
                    })
                }, g = (0, i.useRef)(null);
                (0, Ne.dx)("touchstart", b, {
                    target: g,
                    delay: 400
                });
                const E = (0, i.useRef)(null);
                return (0, Ne.dx)("touchstart", h, {
                    target: E,
                    delay: 400
                }), {
                    skipAhead: h,
                    skipAheadRef: E,
                    skipBack: b,
                    skipBackRef: g
                }
            }
            const Mn = ({
                    details: e
                }) => {
                    var t, n, r, o, l, s, c, d, m, p, f, v;
                    const {
                        isLive: h,
                        paused: b,
                        fullscreenActive: g,
                        playbackStarted: E
                    } = (0, a.dT)(), y = (0, i.useRef)(null), w = (0, i.useRef)(null), {
                        title: k,
                        logo: T,
                        shareLink: O,
                        channelLink: P
                    } = e, {
                        hideControls: j,
                        showControls: L,
                        controlsVisible: M
                    } = C();
                    jn();
                    const A = (0, K.OK)(),
                        D = Cn(),
                        {
                            skipAheadRef: I,
                            skipBackRef: R
                        } = Ln(y),
                        z = (0, Ne.D9)(g);
                    (0, i.useEffect)((() => {
                        y.current && z !== g && y.current.focus()
                    }), [g, z]);
                    const F = {
                            [Sn]: !0,
                            [On]: !M,
                            [Tn]: M
                        },
                        _ = k || T || O || P || (null === A || void 0 === A || null === (t = A.publicDetails) || void 0 === t ? void 0 : t.title) || (null === A || void 0 === A || null === (n = A.publicDetails) || void 0 === n ? void 0 : n.logo) || (null === A || void 0 === A || null === (r = A.publicDetails) || void 0 === r ? void 0 : r.channelLink) || (null === A || void 0 === A || null === (o = A.publicDetails) || void 0 === o ? void 0 : o.shareLink) || (null === A || void 0 === A ? void 0 : A.nft);
                    return i.createElement(i.Fragment, null, i.createElement("div", {
                        ref: y,
                        className: (0, N.A)(kn, {
                            [Pn]: !M && E
                        }),
                        onKeyDown: (0, S.TU)([{
                            keyName: "ArrowDown"
                        }, {
                            keyName: "ArrowUp"
                        }, {
                            keyName: "ArrowLeft"
                        }, {
                            keyName: "ArrowRight"
                        }], [({
                            target: e
                        }) => e instanceof HTMLInputElement, ({
                            target: e
                        }) => e instanceof HTMLTextAreaElement, ({
                            target: e
                        }) => e instanceof HTMLSelectElement]),
                        onMouseMove: () => {
                            L({
                                hideAfter: 1500
                            })
                        },
                        onFocus: () => {
                            L({
                                hideAfter: 3e3
                            })
                        },
                        onMouseOut: e => {
                            y.current && e.relatedTarget instanceof Node && y.current.contains(e.relatedTarget) || j()
                        },
                        tabIndex: -1
                    }, i.createElement(x, {
                        onClick: () => {
                            y.current && y.current.focus()
                        }
                    }), _ && i.createElement("div", {
                        className: (0, N.A)(Kt.cT, F)
                    }, (T || (null === A || void 0 === A || null === (l = A.publicDetails) || void 0 === l ? void 0 : l.logo)) && i.createElement(an, {
                        link: P || (null === A || void 0 === A || null === (s = A.publicDetails) || void 0 === s ? void 0 : s.channelLink),
                        src: T || (null === A || void 0 === A || null === (c = A.publicDetails) || void 0 === c ? void 0 : c.logo) || ""
                    }), (k || (null === A || void 0 === A || null === (d = A.publicDetails) || void 0 === d ? void 0 : d.title)) && i.createElement(Qt, {
                        link: P || (null === A || void 0 === A || null === (m = A.publicDetails) || void 0 === m ? void 0 : m.channelLink)
                    }, k || (null === A || void 0 === A || null === (p = A.publicDetails) || void 0 === p ? void 0 : p.title)), i.createElement("div", {
                        className: Nn
                    }, i.createElement(Ie, null), (O || (null === A || void 0 === A || null === (f = A.publicDetails) || void 0 === f ? void 0 : f.shareLink)) && i.createElement(bn, {
                        link: O || (null === A || void 0 === A || null === (v = A.publicDetails) || void 0 === v ? void 0 : v.shareLink)
                    }))), i.createElement("div", {
                        ref: w,
                        className: (0, N.A)(En, F),
                        onTouchEnd: e => {
                            M ? j() : L({
                                hideAfter: 4e3
                            }), e.preventDefault()
                        },
                        onClick: () => {
                            L({
                                hideAfter: 3e3
                            }), b && j(), D()
                        }
                    }, i.createElement("div", {
                        ref: R,
                        className: yn
                    }), i.createElement("div", {
                        ref: I,
                        className: yn
                    })), i.createElement("div", {
                        className: (0, N.A)(Kt.ec, F),
                        onMouseMove: e => {
                            e.stopPropagation(), L({
                                hideAfter: 3e3
                            })
                        },
                        onMouseOut: e => {
                            y.current && e.relatedTarget instanceof Node && !y.current.contains(e.relatedTarget) && j()
                        }
                    }, i.createElement("div", {
                        className: (0, N.A)(gn, Kt.mb, xn)
                    }, !h && i.createElement(Yt, null), h ? i.createElement(Me, null) : i.createElement(Ve, null)), i.createElement("div", {
                        className: (0, N.A)(Kt.FI, Kt.mb)
                    }, i.createElement(Je.I, null), i.createElement(se.ff, {
                        controlsRef: y
                    }), i.createElement("div", {
                        className: wn
                    }), i.createElement(H, null), !h && i.createElement(Fe, null), i.createElement(We, null), i.createElement(u, null), i.createElement(te, null), i.createElement(Re, null), i.createElement(ne, null)))), i.createElement(xe, null))
                },
                An = e => i.createElement(ce.UN, null, i.createElement(P, null, i.createElement(Mn, e)))
        }
    }
]);