import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as ShieldOff, c as Link2, i as Sparkles, l as ArrowRight, n as User, o as Search, r as Trash2, s as MessageSquare, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQs9qpoT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var char_olivia_default = "/assets/char-olivia-CNMUT0FA.jpg";
var char_byakuya_default = "/assets/char-byakuya-QtQE9T6W.jpg";
var char_maya_default = "/assets/char-maya-DaN56EBD.jpg";
var char_luna_default = "/assets/char-luna-Bbq81TVR.jpg";
var char_kai_default = "/assets/char-kai-CRJbly1q.jpg";
var char_rin_default = "/assets/char-rin-By9qigPI.jpg";
var APP_URL = "https://app.motus-research.xyz";
var BOTS = [
	{
		name: "Olivia Halford",
		desc: "The girl next door who knows too much.",
		metric: "27.7M",
		img: char_olivia_default
	},
	{
		name: "Byakuya Togami Girl",
		desc: "Cold heir. Sharper than you think.",
		metric: "32.7M",
		img: char_byakuya_default
	},
	{
		name: "Maya — Bully",
		desc: "Popular. Cruel. Impossible to ignore.",
		metric: "18.4M",
		img: char_maya_default
	},
	{
		name: "Luna Vex",
		desc: "Cyberpunk thief with violet eyes.",
		metric: "9.2M",
		img: char_luna_default
	},
	{
		name: "Kai Mercer",
		desc: "Ex-soldier turned rogue operator.",
		metric: "14.1M",
		img: char_kai_default
	},
	{
		name: "Rin Akiyama",
		desc: "Bright outside. Storm underneath.",
		metric: "22.0M",
		img: char_rin_default
	}
];
var CHATS = [
	{
		name: "Bully popular girl (Maya)",
		snippet: "Don't act like you didn't see me in the hall…",
		when: "Today",
		img: char_maya_default
	},
	{
		name: "Olivia Halford",
		snippet: "Stay. Just five more minutes.",
		when: "Today",
		img: char_olivia_default
	},
	{
		name: "Luna Vex",
		snippet: "The vault's offline. We move at 3.",
		when: "Yesterday",
		img: char_luna_default
	},
	{
		name: "Kai Mercer",
		snippet: "I told you not to call this number.",
		when: "2d",
		img: char_kai_default
	}
];
function Landing() {
	const [tab, setTab] = (0, import_react.useState)("Browse");
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && window.location.hash) window.history.replaceState(null, "", window.location.pathname + window.location.search);
		window.scrollTo({
			top: 0,
			behavior: "auto"
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-x-hidden bg-black text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[700px] grid-bg opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[oklch(0.55_0.22_295/0.25)] blur-[140px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950/70 p-1 backdrop-blur sm:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								className: "rounded-full px-3 py-2 text-xs text-zinc-400 transition hover:text-white sm:px-4 sm:text-sm",
								children: "Features"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#app",
								className: "rounded-full px-3 py-2 text-xs text-zinc-400 transition hover:text-white sm:px-4 sm:text-sm",
								children: "App"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pricing",
								className: "rounded-full px-3 py-2 text-xs text-zinc-400 transition hover:text-white sm:px-4 sm:text-sm",
								children: "Pricing"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: APP_URL,
						className: "group relative inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/70 px-4 py-2 text-sm font-medium text-white transition glow-border btn-press circuit-border",
						children: ["Sign in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-14 text-center md:pb-24 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/70 px-3 py-1.5 text-xs text-zinc-400 animate-fade",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.28_300)] animate-pulse-glow" }), "motus-research // v0.9 unfiltered build"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						"data-text": "Unfiltered. Unrestricted. Your bots, liberated.",
						className: "text-glitch font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[88px] animate-rise",
						style: { animationDelay: "0.05s" },
						children: [
							"Unfiltered. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-zinc-500",
								children: "Unrestricted."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Your bots, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shimmer-text",
								children: "liberated"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg animate-rise",
						style: { animationDelay: "0.2s" },
						children: "The raw power of Chai's AI engine, entirely stripped of filters. Bring your own bots or discover community favorites instantly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-10 max-w-2xl animate-rise",
						style: { animationDelay: "0.35s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotImport, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldOff, { className: "h-3.5 w-3.5" }), " No guardrails"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }), " <120ms inference"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-3.5 w-3.5" }), " Instant Chai sync"]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "app",
				className: "relative z-10 mx-auto max-w-7xl px-4 pb-24 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/60 shadow-[0_0_120px_-30px_oklch(0.55_0.22_295/0.5)] backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-b border-neutral-900 px-4 py-3 md:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { small: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 rounded-full border border-neutral-800 bg-black/60 p-1",
								children: [
									"Browse",
									"My Bots",
									"My chats"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setTab(t),
									className: `relative rounded-full px-3 py-1.5 text-xs font-medium transition md:px-4 md:text-sm ${tab === t ? "bg-gradient-to-b from-[oklch(0.32_0.15_295)] to-[oklch(0.18_0.08_290)] text-white glow-ring" : "text-zinc-400 hover:text-white"}`,
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Profile",
								className: "grid h-9 w-9 place-items-center rounded-full border border-neutral-800 bg-neutral-950 text-zinc-300 transition hover:text-white glow-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-6 md:px-8 md:py-8",
						children: [
							tab === "Browse" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowsePane, {}),
							tab === "My Bots" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyBotsPane, {}),
							tab === "My chats" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyChatsPane, {})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "relative z-10 mx-auto max-w-6xl px-6 pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs uppercase tracking-[0.2em] text-[oklch(0.7_0.28_300)]",
						children: "// why motus"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-bold tracking-tight md:text-5xl",
						children: "Built for those who want more."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldOff, { className: "h-5 w-5" }),
							title: "100% Unfiltered",
							body: "Deep, unrestricted logic paths. No blocks, no guardrails, pure freedom."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-5 w-5" }),
							title: "Instant Chai Sync",
							body: "Drop any bot link or unique identifier to instantly map characters, descriptions, and logic into Motus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" }),
							title: "Zero Latency",
							body: "High-performance inference engine built for real-time, instantaneous text generation."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 border-t border-neutral-900",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { small: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" motus-research"
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-white",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-white",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-white",
								children: "Discord"
							})
						]
					})]
				})
			})
		]
	});
}
function Logo({ small = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `relative grid place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.7_0.28_300)] to-[oklch(0.4_0.2_280)] shadow-[0_0_24px_-2px_oklch(0.65_0.25_295/0.6)] ${small ? "h-7 w-7" : "h-9 w-9"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: small ? "h-3.5 w-3.5 text-white" : "h-4 w-4 text-white" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: `font-display font-bold tracking-tight ${small ? "text-sm" : "text-base"}`,
			children: [
				"motus",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[oklch(0.7_0.28_300)]",
					children: "."
				}),
				"research"
			]
		})]
	});
}
function BotImport() {
	const [val, setVal] = (0, import_react.useState)("");
	const href = val.trim() ? `${APP_URL}/import?bot=${encodeURIComponent(val.trim())}` : APP_URL;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		action: APP_URL,
		onSubmit: (e) => {
			e.preventDefault();
			window.location.href = href;
		},
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px rounded-2xl bg-gradient-to-r from-[oklch(0.65_0.25_295/0.5)] via-transparent to-[oklch(0.65_0.25_295/0.5)] opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100 group-hover:opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-stretch gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-2 backdrop-blur transition focus-within:border-[oklch(0.65_0.25_295/0.7)] focus-within:shadow-[0_0_0_4px_oklch(0.65_0.25_295/0.15)] sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 items-center gap-2 px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-4 w-4 text-zinc-500 transition group-focus-within:text-[oklch(0.75_0.25_300)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: val,
					onChange: (e) => setVal(e.target.value),
					placeholder: "Paste Chai Bot Link or ID",
					className: "w-full bg-transparent py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href,
				className: "group/btn inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-[oklch(0.7_0.28_300)] to-[oklch(0.5_0.22_285)] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-6px_oklch(0.65_0.25_295/0.8)] btn-press",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 transition group-hover/btn:rotate-12" }),
					"Launch Bot",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 -translate-x-1 opacity-0 transition group-hover/btn:translate-x-0 group-hover/btn:opacity-100" })
				]
			})]
		})]
	});
}
function BrowsePane() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-wrap items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
			children: "Browse"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-zinc-500",
			children: "Discover characters from Chai."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden items-center gap-2 rounded-full border border-neutral-800 bg-black/60 px-3 py-1.5 text-xs text-zinc-400 sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3.5 w-3.5" }), " Search bots"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "rounded-full border border-neutral-800 bg-black/60 px-3 py-1.5 text-xs text-zinc-300",
				children: [BOTS.length * 3 + 1, " bots"]
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4",
		children: BOTS.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `${APP_URL}/bot/${encodeURIComponent(b.name)}`,
			style: { animationDelay: `${i * 60}ms` },
			className: "group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 card-lift circuit-border animate-rise",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: b.img,
					alt: b.name,
					width: 512,
					height: 768,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.08]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 scanline" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-3 top-3 transition duration-500 group-hover:-translate-y-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3 w-3" }),
							" ",
							b.metric
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-3 md:p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "truncate text-sm font-bold text-white transition duration-500 group-hover:translate-y-[-2px] md:text-base",
							children: b.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 line-clamp-2 text-xs text-zinc-400",
							children: b.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center gap-1 text-[11px] font-medium text-[oklch(0.75_0.25_300)] opacity-0 transition duration-500 group-hover:opacity-100",
							children: ["Chat now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})
					]
				})
			]
		}, b.name))
	})] });
}
function MyBotsPane() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
			children: "My Bots"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-zinc-500",
			children: "Your imported and custom characters."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `${APP_URL}/create`,
			className: "flex aspect-[3/2] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/40 text-zinc-400 transition card-lift circuit-border hover:text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 place-items-center rounded-full border border-neutral-800 bg-black",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: "Create new bot"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-zinc-600",
					children: "Or paste a Chai link above"
				})
			]
		}), BOTS.slice(0, 5).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `${APP_URL}/bot/${encodeURIComponent(b.name)}`,
			className: "group flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-3 card-lift circuit-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: b.img,
					alt: "",
					width: 56,
					height: 56,
					loading: "lazy",
					className: "h-14 w-14 rounded-xl object-cover transition duration-500 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-semibold",
						children: b.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-zinc-500",
						children: b.desc
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-neutral-800 text-zinc-400 transition group-hover:border-[oklch(0.65_0.25_295/0.6)] group-hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })
				})
			]
		}, b.name))]
	})] });
}
function MyChatsPane() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
			children: "My chats"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-zinc-500",
			children: "Continue your saved conversations."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-neutral-900 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/50",
		children: CHATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `${APP_URL}/chat/${encodeURIComponent(c.name)}`,
			className: "group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 py-3 transition duration-300 hover:bg-[oklch(0.65_0.25_295/0.06)] hover:pl-5 md:px-5 md:py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: c.img,
					alt: "",
					width: 48,
					height: 48,
					loading: "lazy",
					className: "h-12 w-12 shrink-0 rounded-xl object-cover transition duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_-4px_oklch(0.65_0.25_295/0.7)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold text-white",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-xs text-zinc-600 md:inline",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-xs text-zinc-500 md:inline",
								children: c.when
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-zinc-500 md:text-sm",
						children: c.snippet
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden rounded-full border border-neutral-800 bg-black/60 px-2 py-0.5 text-[10px] text-zinc-400 md:inline",
						children: c.when
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Delete",
						onClick: (e) => {
							e.preventDefault();
						},
						className: "grid h-9 w-9 place-items-center rounded-lg border border-transparent text-zinc-500 transition hover:rotate-6 hover:border-[oklch(0.6_0.24_25/0.5)] hover:text-[oklch(0.75_0.22_25)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					})]
				})
			]
		}, c.name))
	})] });
}
function Feature({ icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 card-lift circuit-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[oklch(0.55_0.22_295/0.25)] blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-black text-[oklch(0.75_0.25_300)] transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:shadow-[0_0_24px_-4px_oklch(0.65_0.25_295/0.7)]",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-bold tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-zinc-400",
				children: body
			})
		]
	});
}
//#endregion
export { Landing as component };
