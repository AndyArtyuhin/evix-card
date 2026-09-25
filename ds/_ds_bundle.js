/* @ds-bundle: {"format":4,"namespace":"PaperTerminalDesignSystem_791a9e","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"LogoStrip","sourcePath":"components/marketing/LogoStrip.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CliPanel","sourcePath":"components/surfaces/CliPanel.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"13499048a0dc","components/actions/TextLink.jsx":"256857bec849","components/marketing/LogoStrip.jsx":"355d8e4d0252","components/navigation/TopNav.jsx":"6bc709ef851e","components/surfaces/Card.jsx":"267543f05588","components/surfaces/CliPanel.jsx":"9feb7da901d4","components/surfaces/FeatureCard.jsx":"da97b6dd3079","components/typography/Eyebrow.jsx":"70ae62c0fd40","prototypes/outcomes/app.jsx":"e31e5abf4fb8","prototypes/outcomes/screens.jsx":"155dc250ce88","prototypes/outcomes/sheets.jsx":"fdb16ff396fd","prototypes/outcomes/sim.jsx":"b08c9b49767a","prototypes/outcomes/tweaks-panel.jsx":"d259e3a86f73","prototypes/outcomes/ui.jsx":"627ea6696978","ui_kits/marketing/Home.jsx":"96eeeb58b7f8","ui_kits/marketing/SignUp.jsx":"f10e1e3357b1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PaperTerminalDesignSystem_791a9e = window.PaperTerminalDesignSystem_791a9e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 32,
    fontSize: 14,
    px: 12
  },
  md: {
    height: 40,
    fontSize: 14,
    px: 12
  },
  lg: {
    height: 48,
    fontSize: 16,
    px: 16
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  onClick,
  leading,
  trailing,
  children,
  style,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const pill = variant === 'pill' || variant === 'pill-light';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: pill ? size === 'sm' ? 28 : 32 : s.height,
    padding: `0 ${variant === 'secondary' ? size === 'sm' ? 12 : 20 : s.px}px`,
    borderRadius: pill ? 'var(--radius-pills)' : 'var(--radius-buttons)',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    fontFeatureSettings: 'var(--font-features)',
    fontSize: s.fontSize,
    fontWeight: 400,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'background var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    transform: press && !disabled ? 'scale(0.98)' : 'none',
    outline: 'none',
    boxSizing: 'border-box'
  };
  const v = {
    primary: {
      background: hover ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)',
      color: 'var(--action-primary-fg)'
    },
    secondary: {
      background: hover ? 'var(--action-secondary-bg-hover)' : 'transparent',
      color: hover ? 'var(--fg-1)' : 'var(--action-secondary-fg)',
      boxShadow: 'var(--shadow-ring)'
    },
    pill: {
      background: hover ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)',
      color: 'var(--action-primary-fg)'
    },
    'pill-light': {
      background: hover ? 'var(--color-paper-white)' : 'var(--color-pure-white)',
      color: 'var(--fg-1)',
      boxShadow: 'var(--shadow-ring)'
    }
  }[variant] || {};
  const dis = disabled ? {
    background: variant === 'primary' || variant === 'pill' ? 'var(--color-hairline)' : 'transparent',
    color: 'var(--fg-disabled)',
    boxShadow: 'var(--shadow-ring)'
  } : {};
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...v,
      ...dis,
      ...style
    }
  }, rest), leading, children, trailing);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href = '#',
  muted = false,
  size = 14,
  underline = 'hover',
  mono = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const deco = underline === 'always' || underline === 'hover' && hover;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontFeatureSettings: 'var(--font-features)',
      fontSize: size,
      lineHeight: 1.43,
      color: muted && !hover ? 'var(--fg-2)' : 'var(--fg-1)',
      textDecoration: deco ? 'underline' : 'none',
      textUnderlineOffset: 3,
      textDecorationThickness: 1,
      transition: 'color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoStrip.jsx
try { (() => {
function LogoStrip({
  names = [],
  label,
  gap = 32,
  size = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: gap,
      rowGap: 16
    }
  }, names.map((n, i) => typeof n === 'string' ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 500,
      letterSpacing: '-0.03em',
      color: 'var(--color-slate)',
      whiteSpace: 'nowrap'
    }
  }, n) : /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      filter: 'grayscale(1)',
      opacity: 0.6
    }
  }, n))));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  brand = 'Brand',
  brandHref = '#',
  items = [],
  actions,
  active,
  onNavigate,
  sticky = true,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 50,
      height: 'var(--nav-height)',
      background: 'rgba(250,250,250,0.8)',
      backdropFilter: 'blur(var(--blur-nav))',
      WebkitBackdropFilter: 'blur(var(--blur-nav))',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      height: '100%',
      padding: '0 var(--page-gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: brandHref,
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate('home');
    } : undefined,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: 'var(--fg-1)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flex: 1,
      minWidth: 0,
      overflow: 'hidden'
    }
  }, items.map(it => {
    const k = it.key || it.label;
    const on = active === k;
    return /*#__PURE__*/React.createElement("a", {
      key: k,
      href: it.href || '#',
      onClick: onNavigate ? e => {
        e.preventDefault();
        onNavigate(k);
      } : undefined,
      onMouseEnter: () => setHover(k),
      onMouseLeave: () => setHover(null),
      style: {
        fontSize: 14,
        lineHeight: 1,
        padding: '8px 10px',
        borderRadius: 'var(--radius-full)',
        color: on || hover === k ? 'var(--fg-1)' : 'var(--fg-2)',
        background: hover === k ? 'rgba(0,0,0,0.05)' : 'transparent',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'background var(--duration-fast) var(--ease-standard)'
      }
    }, it.label);
  })), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, actions)));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'bordered',
  padding = 16,
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const inv = variant === 'inverted';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: inv ? 'var(--surface-inverted-surface)' : 'var(--surface-card-surface)',
      color: inv ? 'var(--fg-inverse)' : 'var(--fg-1)',
      borderRadius: 'var(--radius-cards)',
      padding,
      boxShadow: inv ? 'none' : hover ? 'rgba(0,0,0,0.16) 0px 0px 0px 1px, rgb(250,250,250) 0px 0px 0px 2px' : 'var(--shadow-card)',
      transition: 'box-shadow var(--duration-fast) var(--ease-standard)',
      boxSizing: 'border-box',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CliPanel.jsx
try { (() => {
function CliPanel({
  lines = [],
  prompt = '$',
  title,
  inset = false,
  style
}) {
  const mark = t => t === 'cmd' ? {
    ch: prompt,
    color: 'var(--fg-1)'
  } : t === 'ok' ? {
    ch: '✓',
    color: 'var(--fg-accent)'
  } : t === 'err' ? {
    ch: '✕',
    color: 'var(--fg-1)'
  } : {
    ch: '',
    color: 'var(--fg-3)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: inset ? 'var(--surface-page-canvas)' : 'var(--surface-card-surface)',
      boxShadow: 'var(--shadow-ring)',
      borderRadius: 'var(--radius-cards)',
      fontFamily: 'var(--font-mono)',
      fontFeatureSettings: 'var(--font-features)',
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--fg-1)',
      overflow: 'hidden',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px',
      boxShadow: 'inset 0 -1px 0 var(--border-hairline)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column'
    }
  }, lines.map((l, i) => {
    const m = mark(l.type);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '16px 1fr',
        columnGap: 8,
        color: l.type === 'out' ? 'var(--fg-3)' : l.type === 'ok' ? 'var(--fg-accent)' : 'var(--fg-1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: m.color
      }
    }, m.ch), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
      }
    }, l.text));
  })));
}
Object.assign(__ds_scope, { CliPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CliPanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function FeatureCard({
  eyebrow,
  title,
  description,
  children,
  inverted = false,
  href,
  style
}) {
  const body = /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: inverted ? 'inverted' : 'bordered',
    padding: 24,
    interactive: !!href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      height: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-eyebrow)',
      lineHeight: 'var(--leading-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: inverted ? 'var(--color-smoke)' : 'var(--fg-3)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-heading)',
      lineHeight: 'var(--leading-heading)',
      letterSpacing: 'var(--tracking-heading)',
      fontWeight: 400,
      color: inverted ? 'var(--fg-inverse)' : 'var(--fg-1)',
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.5,
      color: inverted ? 'var(--color-ash)' : 'var(--fg-2)',
      textWrap: 'pretty'
    }
  }, description)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, children));
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'block'
    }
  }, body) : body;
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'default',
  size = 11,
  as = 'div',
  style
}) {
  const Tag = as;
  const color = {
    default: 'var(--fg-1)',
    muted: 'var(--fg-3)',
    accent: 'var(--fg-accent)',
    inverse: 'var(--fg-inverse)'
  }[tone] || 'var(--fg-1)';
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontFeatureSettings: 'var(--font-features)',
      fontSize: size,
      fontWeight: size <= 8 ? 600 : 400,
      lineHeight: 'var(--leading-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// prototypes/outcomes/app.jsx
try { (() => {
(() => {
  const {
    PTC,
    ptMono,
    PtSim,
    PtStartView,
    PtProjectView,
    PtResultView,
    PtNeedsCard,
    PtActivitySheet,
    PtChangesView,
    PtPreviewSheet,
    PtFeedbackSheet,
    PtEyebrow,
    PtButton,
    PtMark
  } = window;
  const {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakSelect,
    TweakButton
  } = window;
  const DEFAULT_GOAL = 'Redesign the checkout flow from Figma and implement it';
  const PT_TWEAKS = /*EDITMODE-BEGIN*/{
    "speed": "1×",
    "checkin": "None",
    "card": "Inverted"
  } /*EDITMODE-END*/;
  function titleFor(g) {
    if (/checkout/i.test(g)) return 'Redesign checkout';
    const w = g.trim().split(/\s+/).slice(0, 3).join(' ');
    return w || 'Untitled';
  }
  function OutcomesApp() {
    const [tw, setTweak] = useTweaks(PT_TWEAKS);
    const [sim, setSim] = React.useState(PtSim.initial);
    const [tab, setTab] = React.useState('work');
    const [route, setRoute] = React.useState('home');
    const [goal, setGoal] = React.useState(DEFAULT_GOAL);
    const [title, setTitle] = React.useState('Redesign checkout');
    const [sheet, setSheet] = React.useState(null);
    const [toast, setToast] = React.useState(null);
    const [recent, setRecent] = React.useState(null);
    const [scale, setScale] = React.useState(1);
    const scroller = React.useRef(null);
    const speed = {
      '1×': 1,
      '2×': 2,
      '4×': 4
    }[tw.speed] || 1;
    React.useEffect(() => {
      const id = setInterval(() => setSim(s => PtSim.advance(s, 0.1 * speed, tw.checkin)), 100);
      return () => clearInterval(id);
    }, [speed, tw.checkin]);
    React.useEffect(() => {
      const f = () => setScale(Math.min(1, (window.innerHeight - 40) / 844, (window.innerWidth - 24) / 390));
      f();
      window.addEventListener('resize', f);
      return () => window.removeEventListener('resize', f);
    }, []);
    React.useEffect(() => {
      if (scroller.current) scroller.current.scrollTop = 0;
    }, [tab, route]);
    React.useEffect(() => {
      if (sim.phase === 'result' && route === 'project') setRoute('project');
    }, [sim.phase]);
    const showToast = m => {
      setToast(m);
      setTimeout(() => setToast(null), 2600);
    };
    const vm = PtSim.derive(sim);
    const needs = PtSim.needsFor(sim);
    const decide = (v, delegated) => {
      const ns = PtSim.decide(sim, v);
      setSim(ns);
      const d = ns.decisions[ns.decisions.length - 1];
      setRecent({
        label: (delegated ? 'AI chose: ' : '') + (sim.phase === 'decide' ? d.detail : d.label)
      });
      setTimeout(() => setRecent(null), 4200);
    };
    const start = () => {
      if (sim.stage !== 'idle') {
        showToast('One project at a time in this prototype.');
        return;
      }
      setTitle(titleFor(goal));
      setSim({
        ...PtSim.initial,
        stage: 'run'
      });
      setRoute('project');
    };
    const jump = to => {
      setSim(PtSim.jump(to));
      setSheet(null);
      setTab('work');
      setRoute(to === 'Start' ? 'home' : 'project');
      if (to === 'Start') setGoal(DEFAULT_GOAL);
    };
    let body;
    if (tab === 'work') {
      if (route === 'home' || sim.stage === 'idle') body = /*#__PURE__*/React.createElement(PtStartView, {
        goal: goal,
        setGoal: setGoal,
        onStart: start,
        sim: sim,
        vm: vm,
        title: title,
        onOpenProject: () => setRoute('project')
      });else if (route === 'changes') body = /*#__PURE__*/React.createElement(PtChangesView, {
        choice: sim.choice,
        onBack: () => setRoute('project'),
        onActivity: () => setSheet('activity-deep'),
        onPreview: () => setSheet('preview')
      });else if (sim.phase === 'result') body = /*#__PURE__*/React.createElement(PtResultView, {
        choice: sim.choice,
        title: title,
        onBack: () => setRoute('home'),
        onReview: () => setRoute('changes'),
        onPreview: () => setSheet('preview'),
        onFeedback: () => setSheet('feedback'),
        onFollowUp: () => {
          setGoal('Follow-up: add express pay to the new checkout');
          setRoute('home');
          showToast('Draft ready. Edit and start when you want.');
        }
      });else body = /*#__PURE__*/React.createElement(PtProjectView, {
        vm: vm,
        sim: sim,
        title: title,
        needs: needs,
        cardVariant: tw.card,
        onDecide: decide,
        onBack: () => setRoute('home'),
        onActivity: () => setSheet('activity'),
        recent: recent
      });
    } else if (tab === 'needs') {
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '24px 20px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }
      }, /*#__PURE__*/React.createElement("h1", {
        style: {
          margin: 0,
          fontSize: 34,
          lineHeight: 1.05,
          letterSpacing: '-0.05em',
          fontWeight: 450,
          color: PTC.fg1
        }
      }, "Needs you"), needs ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 15,
          color: PTC.fg2
        }
      }, title), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: PTC.fg3
        }
      }, vm.minutes, " min in")), /*#__PURE__*/React.createElement(PtNeedsCard, {
        key: needs.kind,
        needs: needs,
        variant: tw.card,
        onDecide: v => {
          decide(v);
          setTab('work');
          setRoute('project');
        },
        onDelegate: () => {
          decide(needs.actions[0].value, true);
          setTab('work');
          setRoute('project');
        }
      })) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          paddingTop: 24
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 18,
          color: PTC.fg1,
          letterSpacing: '-0.02em'
        }
      }, "Nothing needs you right now."), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 15,
          lineHeight: 1.5,
          color: PTC.fg2
        }
      }, "You'll only be asked when a decision changes the outcome.")));
    } else {
      const rows = [...(sim.stage === 'done' ? [[title, 'Just now', true]] : []), ['Migrate billing emails to new templates', '2 days ago'], ['Fix flaky payment tests', 'Last week'], ['Add dark mode to settings', 'Aug 28']];
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '24px 20px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20
        }
      }, /*#__PURE__*/React.createElement("h1", {
        style: {
          margin: 0,
          fontSize: 34,
          lineHeight: 1.05,
          letterSpacing: '-0.05em',
          fontWeight: 450,
          color: PTC.fg1
        }
      }, "History"), /*#__PURE__*/React.createElement("div", null, rows.map(([l, d, live]) => /*#__PURE__*/React.createElement("button", {
        key: l,
        onClick: live ? () => {
          setTab('work');
          setRoute('project');
        } : undefined,
        style: {
          all: 'unset',
          cursor: live ? 'pointer' : 'default',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          width: '100%',
          boxSizing: 'border-box',
          padding: '14px 0',
          boxShadow: 'inset 0 -1px 0 ' + PTC.line
        }
      }, /*#__PURE__*/React.createElement(PtMark, {
        status: "done"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontSize: 15,
          color: live ? PTC.fg1 : PTC.fg2
        }
      }, l), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          color: PTC.fg3
        }
      }, d)))));
    }
    const tabs = [['work', 'Work'], ['needs', 'Needs you'], ['history', 'History']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        background: /embed/.test(location.search) ? 'transparent' : '#e8e8e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height: 844,
        flex: 'none',
        transform: 'scale(' + scale + ')',
        borderRadius: 48,
        background: PTC.bg,
        boxShadow: '0 0 0 10px #1c1c1c, 0 0 0 11px #2a2a2a',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-sans)',
        fontFeatureSettings: 'var(--font-features)',
        color: PTC.fg1,
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 50,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        fontSize: 15,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 110,
        height: 30,
        borderRadius: 20,
        background: '#000',
        position: 'absolute',
        left: 140,
        top: 10
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: PTC.fg3
      }
    }, "5G")), /*#__PURE__*/React.createElement("div", {
      ref: scroller,
      style: {
        flex: 1,
        overflowY: 'auto',
        scrollbarWidth: 'none'
      }
    }, body), /*#__PURE__*/React.createElement("nav", {
      style: {
        flex: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        boxShadow: 'inset 0 1px 0 ' + PTC.line,
        paddingBottom: 22,
        background: PTC.bg
      }
    }, tabs.map(([k, l]) => {
      const on = tab === k;
      const badge = k === 'needs' && needs;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        onClick: () => {
          setTab(k);
          if (k === 'work' && sim.stage === 'idle') setRoute('home');
        },
        style: {
          all: 'unset',
          cursor: 'pointer',
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          fontSize: 13,
          color: on ? PTC.fg1 : PTC.fg3,
          transition: 'color 150ms'
        }
      }, l, badge && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 6,
          height: 6,
          borderRadius: 6,
          background: PTC.fg1,
          animation: 'ptRing 1.8s ease-out infinite'
        }
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 8,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 134,
        height: 5,
        borderRadius: 5,
        background: PTC.fg2,
        zIndex: 60
      }
    }), toast && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 96,
        zIndex: 50,
        padding: '12px 14px',
        borderRadius: 8,
        background: PTC.s2,
        boxShadow: 'inset 0 0 0 1px ' + PTC.line2,
        fontSize: 14,
        color: PTC.fg1,
        animation: 'ptFadeUp 300ms'
      }
    }, toast), (sheet === 'activity' || sheet === 'activity-deep') && /*#__PURE__*/React.createElement(PtActivitySheet, {
      vm: vm,
      startDeep: sheet === 'activity-deep',
      onClose: () => setSheet(null)
    }), sheet === 'preview' && /*#__PURE__*/React.createElement(PtPreviewSheet, {
      choice: sim.choice,
      onClose: () => setSheet(null)
    }), sheet === 'feedback' && /*#__PURE__*/React.createElement(PtFeedbackSheet, {
      onClose: () => setSheet(null),
      onSend: () => {
        setSheet(null);
        showToast('Sent. A revision will start from this result.');
      }
    })), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
      label: "Simulation"
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "Speed",
      value: tw.speed,
      options: ['1×', '2×', '4×'],
      onChange: v => setTweak('speed', v)
    }), /*#__PURE__*/React.createElement(TweakSelect, {
      label: "Check-in during build",
      value: tw.checkin,
      options: ['None', 'Permission', 'High-impact'],
      onChange: v => setTweak('checkin', v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Needs you card"
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "Treatment",
      value: tw.card,
      options: ['Inverted', 'Outlined'],
      onChange: v => setTweak('card', v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Jump to"
    }), ['Start', 'Working', 'Needs you', 'Implementing', 'Result'].map(s => /*#__PURE__*/React.createElement(TweakButton, {
      key: s,
      label: s,
      onClick: () => jump(s)
    }))));
  }
  window.OutcomesApp = OutcomesApp;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/outcomes/app.jsx", error: String((e && e.message) || e) }); }

// prototypes/outcomes/screens.jsx
try { (() => {
(() => {
  const {
    PTC,
    ptMono,
    PtEyebrow,
    PtMark,
    PtButton,
    PtBack,
    PtRow
  } = window;
  function PtStartView({
    goal,
    setGoal,
    onStart,
    sim,
    vm,
    title,
    onOpenProject
  }) {
    const running = sim.stage !== 'idle';
    const [focus, setFocus] = React.useState(false);
    const status = !running ? null : sim.phase === 'result' ? 'Done' : sim.phase === 'decide' || sim.phase === 'checkin' ? 'Needs you' : vm.phase.label;
    const chip = l => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 32,
        padding: '0 12px',
        borderRadius: 9999,
        boxShadow: 'inset 0 0 0 1px ' + PTC.line2,
        fontSize: 13,
        color: PTC.fg1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: PTC.green,
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, "\u2713"), l);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 20px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 34,
        lineHeight: 1.05,
        letterSpacing: '-0.05em',
        fontWeight: 450,
        color: PTC.fg1,
        textWrap: 'balance'
      }
    }, "What do you want to get done?"), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 8,
        background: PTC.s1,
        boxShadow: 'inset 0 0 0 1px ' + (focus ? PTC.fg3 : PTC.line),
        transition: 'box-shadow 160ms',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      value: goal,
      onChange: e => setGoal(e.target.value),
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      rows: 3,
      placeholder: "Describe the outcome",
      style: {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        resize: 'none',
        color: PTC.fg1,
        fontFamily: 'var(--font-sans)',
        fontSize: 19,
        lineHeight: 1.35,
        letterSpacing: '-0.02em',
        padding: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(PtEyebrow, null, "Connected context"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, ['Figma', 'GitHub'].map(chip), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        height: 32,
        padding: '0 12px',
        borderRadius: 9999,
        fontSize: 13,
        color: PTC.fg3,
        boxShadow: 'inset 0 0 0 1px ' + PTC.line
      }
    }, "+ Add")))), /*#__PURE__*/React.createElement(PtButton, {
      full: true,
      onClick: onStart,
      disabled: !goal.trim()
    }, "Start")), running && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PtEyebrow, null, "Active"), /*#__PURE__*/React.createElement("button", {
      onClick: onOpenProject,
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        padding: 16,
        borderRadius: 8,
        background: PTC.s1,
        boxShadow: 'inset 0 0 0 1px ' + (status === 'Needs you' ? PTC.fg2 : PTC.line)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: PTC.fg1
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        color: PTC.fg3
      }
    }, "\u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PtMark, {
      status: status === 'Done' ? 'done' : 'active'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...ptMono,
        color: status === 'Needs you' ? PTC.fg1 : PTC.fg2
      }
    }, status)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(PtEyebrow, {
      style: {
        marginBottom: 6
      }
    }, "Recent"), [['Migrate billing emails to new templates', '2 days ago'], ['Fix flaky payment tests', 'Last week']].map(([l, d]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '12px 0',
        boxShadow: 'inset 0 -1px 0 ' + PTC.line
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: PTC.fg2
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: PTC.fg3,
        whiteSpace: 'nowrap'
      }
    }, d)))));
  }
  function PtNeedsCard({
    needs,
    variant = 'Inverted',
    onDecide,
    onDelegate,
    compact
  }) {
    const inv = variant === 'Inverted';
    const c = inv ? {
      bg: PTC.paper,
      fg: PTC.ink,
      fg2: '#4d4d4d',
      fg3: '#666',
      line: 'rgba(0,0,0,0.1)',
      btn: 'ink',
      btn2: 'inkOutline',
      ghost: 'inkGhost'
    } : {
      bg: PTC.s1,
      fg: PTC.fg1,
      fg2: PTC.fg2,
      fg3: PTC.fg3,
      line: PTC.line2,
      btn: 'primary',
      btn2: 'secondary',
      ghost: 'ghost'
    };
    const [deciding, setDeciding] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const delegate = () => {
      setDeciding(true);
      setTimeout(() => onDelegate(), 1100);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 10,
        background: c.bg,
        boxShadow: inv ? 'none' : 'inset 0 0 0 1px ' + PTC.fg2,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        animation: 'ptFadeUp 480ms cubic-bezier(0.2,0,0,1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 9,
        background: c.fg,
        animation: 'ptPulse 1.6s ease-in-out infinite'
      }
    }), /*#__PURE__*/React.createElement(PtEyebrow, {
      color: c.fg
    }, "Needs you")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        lineHeight: 1.1,
        letterSpacing: '-0.04em',
        fontWeight: 450,
        color: c.fg,
        textWrap: 'balance'
      }
    }, needs.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.5,
        color: c.fg2,
        textWrap: 'pretty'
      }
    }, needs.why), needs.evidence && /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      style: {
        all: 'unset',
        cursor: 'pointer',
        ...ptMono,
        color: c.fg3
      }
    }, open ? '−' : '+', " What this is based on"), open && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        lineHeight: 1.5,
        color: c.fg3,
        animation: 'ptFade 200ms'
      }
    }, needs.evidence)), needs.options && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, needs.options.map(o => /*#__PURE__*/React.createElement("div", {
      key: o.key,
      style: {
        borderRadius: 6,
        boxShadow: 'inset 0 0 0 1px ' + c.line,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(PtEyebrow, {
      color: c.fg3
    }, "Option ", o.key), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        letterSpacing: '-0.02em',
        color: c.fg
      }
    }, o.title), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, o.points.map(p => /*#__PURE__*/React.createElement("li", {
      key: p,
      style: {
        fontSize: 14,
        lineHeight: 1.45,
        color: c.fg2,
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: c.fg3
      }
    }, "\u2013"), p)))))), deciding ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: 44,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: c.fg2,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(PtMark, {
      status: "active",
      onLight: inv
    }), "Weighing both against the brief\u2026") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
      }
    }, needs.actions.map((a, i) => /*#__PURE__*/React.createElement(PtButton, {
      key: a.value,
      kind: i === 0 ? c.btn : c.btn2,
      full: true,
      onClick: () => onDecide(a.value)
    }, a.label))), needs.delegate && /*#__PURE__*/React.createElement(PtButton, {
      kind: c.ghost,
      onClick: delegate,
      style: {
        alignSelf: 'center',
        fontSize: 14
      }
    }, "Ask AI to decide")));
  }
  function PtSection({
    label,
    items,
    collapsible
  }) {
    const [all, setAll] = React.useState(false);
    if (!items.length) return null;
    const hidden = collapsible && !all && items.length > 4 ? items.length - 3 : 0;
    const shown = hidden ? items.slice(-3) : items;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement(PtEyebrow, {
      style: {
        marginBottom: 6
      }
    }, label), hidden > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: () => setAll(true),
      style: {
        all: 'unset',
        cursor: 'pointer',
        fontSize: 13,
        color: PTC.fg3,
        minHeight: 30,
        paddingLeft: 28
      }
    }, "+ ", hidden, " earlier"), shown.map(i => /*#__PURE__*/React.createElement(PtRow, {
      key: i.id,
      status: i.status,
      label: i.label,
      detail: i.detail,
      muted: i.status !== 'active'
    })));
  }
  function PtProjectView({
    vm,
    sim,
    title,
    needs,
    cardVariant,
    onDecide,
    onBack,
    onActivity,
    recent
  }) {
    const waiting = !!needs;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 20px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(PtBack, {
      label: "Work",
      onClick: onBack
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 34,
        lineHeight: 1.05,
        letterSpacing: '-0.05em',
        fontWeight: 450,
        color: PTC.fg1
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 14,
        color: PTC.fg2
      }
    }, waiting ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 9,
        boxShadow: '0 0 0 1.5px ' + PTC.fg1,
        margin: '0 4px'
      }
    }) : /*#__PURE__*/React.createElement(PtMark, {
      status: "active"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: PTC.fg1
      }
    }, waiting ? 'Waiting on you' : 'Working'), /*#__PURE__*/React.createElement("span", {
      style: {
        color: PTC.fg3
      }
    }, "\xB7 Started ", vm.minutes, " min ago"))), recent && /*#__PURE__*/React.createElement("div", {
      key: recent.label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 14px',
        borderRadius: 6,
        background: 'rgba(92,195,122,0.08)',
        animation: 'ptFadeUp 400ms cubic-bezier(0.2,0,0,1)'
      }
    }, /*#__PURE__*/React.createElement(PtMark, {
      status: "done"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: PTC.fg1
      }
    }, recent.label)), /*#__PURE__*/React.createElement("div", {
      key: vm.phase.key,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        animation: 'ptFadeUp 500ms cubic-bezier(0.2,0,0,1)'
      }
    }, /*#__PURE__*/React.createElement(PtEyebrow, {
      color: PTC.fg1
    }, vm.phase.label), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 20,
        lineHeight: 1.35,
        letterSpacing: '-0.025em',
        color: PTC.fg2,
        textWrap: 'pretty'
      }
    }, vm.phase.desc)), needs && /*#__PURE__*/React.createElement(PtNeedsCard, {
      key: needs.kind,
      needs: needs,
      variant: cardVariant,
      onDecide: onDecide,
      onDelegate: () => onDecide(needs.actions[0].value, true)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        opacity: waiting ? 0.45 : 1,
        transition: 'opacity 300ms'
      }
    }, /*#__PURE__*/React.createElement(PtSection, {
      label: "Completed",
      items: vm.completed,
      collapsible: true
    }), !waiting && /*#__PURE__*/React.createElement(PtSection, {
      label: "Working",
      items: vm.working
    }), /*#__PURE__*/React.createElement(PtSection, {
      label: "Next",
      items: vm.next
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        paddingTop: 16,
        boxShadow: 'inset 0 1px 0 ' + PTC.line
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: PTC.fg3
      }
    }, vm.counts.done, " tasks completed", vm.counts.active && !waiting ? ' · ' + vm.counts.active + ' in progress' : ''), /*#__PURE__*/React.createElement(PtButton, {
      kind: "ghost",
      size: 40,
      onClick: onActivity,
      style: {
        fontSize: 14
      }
    }, "View activity")));
  }
  function PtCheckoutMock({
    choice = 'A',
    large
  }) {
    const f = large ? 1 : 0.92;
    const field = (label, value, w) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        flex: w || 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10 * f,
        letterSpacing: '0.071em',
        textTransform: 'uppercase',
        color: '#666'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 34 * f,
        borderRadius: 6,
        boxShadow: 'inset 0 0 0 1px #ebebeb',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        fontSize: 13 * f,
        color: '#171717',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, value));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fafafa',
        borderRadius: 6,
        padding: 14 * f,
        display: 'flex',
        flexDirection: 'column',
        gap: 12 * f,
        fontFamily: 'var(--font-sans)',
        color: '#171717'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17 * f,
        letterSpacing: '-0.03em',
        fontWeight: 500
      }
    }, "Checkout"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10 * f,
        letterSpacing: '0.071em',
        color: '#666'
      }
    }, choice === 'B' ? 'ONE STEP' : 'STEP 1 OF 2')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13 * f,
        color: '#4d4d4d',
        paddingBottom: 10 * f,
        boxShadow: 'inset 0 -1px 0 #ebebeb'
      }
    }, /*#__PURE__*/React.createElement("span", null, "2 items"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#171717'
      }
    }, "$128.00")), field('Email', 'alex@studio.co'), field('Shipping address', '14 Hudson St, New York, NY'), choice === 'B' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, field('Card', '•••• •••• •••• 4242', 2), field('Expiry', '08/28')), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 40 * f,
        borderRadius: 6,
        background: '#171717',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14 * f
      }
    }, "Pay $128.00")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, [['Standard · 3–5 days', 'Free', true], ['Express · 1 day', '$12', false]].map(([l, p, on]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        height: 34 * f,
        padding: '0 10px',
        borderRadius: 6,
        background: '#fff',
        boxShadow: 'inset 0 0 0 1px ' + (on ? '#171717' : '#ebebeb'),
        fontSize: 13 * f
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 9,
        boxShadow: 'inset 0 0 0 ' + (on ? 3 : 1) + 'px #171717'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#4d4d4d'
      }
    }, p)))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 40 * f,
        borderRadius: 6,
        background: '#171717',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14 * f
      }
    }, "Continue to payment")));
  }
  function PtResultView({
    choice,
    title,
    onBack,
    onReview,
    onPreview,
    onFeedback,
    onFollowUp
  }) {
    const r = window.PtSim.RESULTS[choice || 'A'];
    const rows = [['Figma', r.screens + ' screens updated'], ['Code', r.files + ' files changed'], ['Tests', r.checks + ' checks passed'], ['Visual QA', 'Passed']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 20px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
        animation: 'ptFade 600ms ease-out'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(PtBack, {
      label: "Work",
      onClick: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PtMark, {
      status: "done"
    }), /*#__PURE__*/React.createElement(PtEyebrow, {
      color: PTC.green
    }, "Done")), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 34,
        lineHeight: 1.05,
        letterSpacing: '-0.05em',
        fontWeight: 450,
        color: PTC.fg1,
        textWrap: 'balance',
        animation: 'ptFadeUp 600ms cubic-bezier(0.2,0,0,1)'
      }
    }, "Checkout redesigned and implemented.")), /*#__PURE__*/React.createElement("button", {
      onClick: onPreview,
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'block',
        borderRadius: 8,
        padding: 6,
        background: PTC.s2,
        boxShadow: 'inset 0 0 0 1px ' + PTC.line,
        animation: 'ptFadeUp 700ms cubic-bezier(0.2,0,0,1)'
      }
    }, /*#__PURE__*/React.createElement(PtCheckoutMock, {
      choice: choice
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '13px 0',
        boxShadow: i ? 'inset 0 1px 0 ' + PTC.line : 'none',
        animation: 'ptFadeUp ' + (600 + i * 120) + 'ms cubic-bezier(0.2,0,0,1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: PTC.fg2
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: PTC.fg1,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, v, /*#__PURE__*/React.createElement(PtMark, {
      status: "done"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PtButton, {
      full: true,
      onClick: onReview
    }, "Review result"), /*#__PURE__*/React.createElement(PtButton, {
      full: true,
      kind: "secondary",
      onClick: onPreview
    }, "Open preview"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 24,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(PtButton, {
      kind: "ghost",
      onClick: onFeedback,
      style: {
        fontSize: 14
      }
    }, "Give feedback"), /*#__PURE__*/React.createElement(PtButton, {
      kind: "ghost",
      onClick: onFollowUp,
      style: {
        fontSize: 14
      }
    }, "Create follow-up"))));
  }
  Object.assign(window, {
    PtStartView,
    PtNeedsCard,
    PtProjectView,
    PtResultView,
    PtCheckoutMock
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/outcomes/screens.jsx", error: String((e && e.message) || e) }); }

// prototypes/outcomes/sheets.jsx
try { (() => {
(() => {
  const {
    PTC,
    ptMono,
    PtEyebrow,
    PtMark,
    PtButton,
    PtBack,
    PtSheet
  } = window;
  function PtActivitySheet({
    vm,
    onClose,
    startDeep
  }) {
    const [deep, setDeep] = React.useState(!!startDeep);
    const [open, setOpen] = React.useState(null);
    const s = vm.stats;
    const stat = (n, l) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 24,
        letterSpacing: '-0.04em',
        color: PTC.fg1,
        fontVariantNumeric: 'tabular-nums'
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        ...ptMono,
        fontSize: 10,
        color: PTC.fg3
      }
    }, l));
    return /*#__PURE__*/React.createElement(PtSheet, {
      onClose: onClose
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px 8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        letterSpacing: '-0.03em',
        color: PTC.fg1
      }
    }, "Activity"), /*#__PURE__*/React.createElement(PtButton, {
      kind: "ghost",
      size: 40,
      onClick: onClose,
      style: {
        fontSize: 14
      }
    }, "Close")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        scrollbarWidth: 'none',
        padding: '4px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, deep && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 12,
        padding: '14px 0',
        boxShadow: 'inset 0 -1px 0 ' + PTC.line + ', inset 0 1px 0 ' + PTC.line,
        animation: 'ptFadeUp 300ms'
      }
    }, s.agentsActive ? stat(s.agentsActive, 'agents working') : stat(s.agentsUsed, 'agents used'), stat(s.tools, 'tool calls'), stat(s.approaches, 'approaches explored')), vm.items.filter(i => i.status !== 'next').concat(vm.items.filter(i => i.status === 'next').slice(0, 1)).map(it => /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 34
      }
    }, /*#__PURE__*/React.createElement(PtMark, {
      status: it.status
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 15,
        color: PTC.fg1
      }
    }, it.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: PTC.fg3
      }
    }, it.tasks.filter(t => t.status === 'done').length, "/", it.tasks.length)), it.tasks.map((t, i) => {
      const last = i === it.tasks.length - 1;
      const ex = deep && open === t.id;
      return /*#__PURE__*/React.createElement("div", {
        key: t.id
      }, /*#__PURE__*/React.createElement("button", {
        onClick: deep ? () => setOpen(ex ? null : t.id) : undefined,
        style: {
          all: 'unset',
          cursor: deep ? 'pointer' : 'default',
          display: 'grid',
          gridTemplateColumns: '28px 1fr 16px',
          alignItems: 'center',
          width: '100%',
          minHeight: 32,
          boxSizing: 'border-box'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: PTC.fg4,
          paddingLeft: 6
        }
      }, last ? '└' : '├'), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14,
          color: t.status === 'next' ? PTC.fg3 : PTC.fg2
        }
      }, t.label), deep && /*#__PURE__*/React.createElement("span", {
        style: {
          ...ptMono,
          fontSize: 10,
          color: PTC.fg3
        }
      }, t.agent, t.toolsShown ? ' · ' + t.toolsShown + ' calls' : '')), /*#__PURE__*/React.createElement(PtMark, {
        status: t.status
      })), ex && /*#__PURE__*/React.createElement("div", {
        style: {
          margin: '2px 0 8px 28px',
          padding: '10px 12px',
          borderRadius: 6,
          background: PTC.bg,
          boxShadow: 'inset 0 0 0 1px ' + PTC.line,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          animation: 'ptFade 200ms'
        }
      }, t.tools.slice(0, t.toolsShown).map((l, j) => /*#__PURE__*/React.createElement("div", {
        key: j,
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          lineHeight: 1.6,
          color: PTC.fg2,
          display: 'flex',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: PTC.fg4
        }
      }, "$"), l)), !t.toolsShown && /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: PTC.fg3
        }
      }, "Not started")));
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 20px 28px',
        boxShadow: 'inset 0 1px 0 ' + PTC.line
      }
    }, /*#__PURE__*/React.createElement(PtButton, {
      kind: "secondary",
      full: true,
      onClick: () => {
        setDeep(!deep);
        setOpen(null);
      },
      style: {
        fontSize: 14
      }
    }, deep ? 'Hide orchestration' : 'Show orchestration')));
  }
  function PtChangesView({
    choice,
    onBack,
    onActivity,
    onPreview
  }) {
    const r = window.PtSim.RESULTS[choice || 'A'];
    const [openK, setOpenK] = React.useState(null);
    const frames = ['Cart', 'Contact', 'Shipping', 'Payment', 'Review', 'Confirmation', 'Errors', 'Empty cart', 'Mobile · Cart', 'Mobile · Details', 'Mobile · Payment', 'Mobile · Confirmation', 'Express pay', 'Saved cards'].slice(0, r.screens).map(x => ['Checkout / ' + x, '']);
    const files = [['src/checkout/CheckoutPage.tsx', '+142 −208'], ['src/checkout/steps/ContactStep.tsx', '+64 −31'], ['src/checkout/steps/PaymentStep.tsx', '+88 −52'], ['src/checkout/OrderSummary.tsx', '+27 −40'], ['src/checkout/useCheckout.ts', '+51 −19'], ['src/components/PaymentField.tsx', '+33 −12'], ['src/components/AddressForm.tsx', '+18 −24'], ['src/checkout/steps/ShippingStep.tsx', '+0 −96'], ['src/checkout/analytics.ts', '+12 −4'], ['tests/checkout.spec.ts', '+74 −22']];
    const tests = [['Unit · checkout', '17 passed'], ['E2E · checkout.spec', '6 passed'], ['Accessibility · axe', '0 violations'], ['Visual · 12 states', 'matched']];
    const group = (k, title, summary, rows, mono) => {
      const all = openK === k;
      const shown = all ? rows : rows.slice(0, 4);
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 6
        }
      }, /*#__PURE__*/React.createElement(PtEyebrow, {
        color: PTC.fg1
      }, title), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          color: PTC.fg3
        }
      }, summary)), shown.map(([a, b]) => /*#__PURE__*/React.createElement("div", {
        key: a,
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          padding: '10px 0',
          boxShadow: 'inset 0 -1px 0 ' + PTC.line,
          animation: 'ptFade 200ms'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
          fontSize: mono ? 12 : 14,
          color: PTC.fg2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, a), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: b.startsWith('+') || b.includes('passed') || b.includes('0 v') || b === 'matched' ? PTC.green : PTC.fg3,
          whiteSpace: 'nowrap'
        }
      }, b))), rows.length > 4 && /*#__PURE__*/React.createElement("button", {
        onClick: () => setOpenK(all ? null : k),
        style: {
          all: 'unset',
          cursor: 'pointer',
          fontSize: 13,
          color: PTC.fg3,
          padding: '10px 0'
        }
      }, all ? 'Show less' : 'Show all ' + (k === 'code' ? r.files : rows.length)));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 20px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
        animation: 'ptFade 300ms'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(PtBack, {
      label: "Result",
      onClick: onBack
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 34,
        lineHeight: 1.05,
        letterSpacing: '-0.05em',
        fontWeight: 450,
        color: PTC.fg1
      }
    }, "Changes"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.5,
        color: PTC.fg2
      }
    }, choice === 'B' ? 'One-step checkout' : 'Simplified checkout', ": shipping merged into details, payment on its own step", choice === 'B' ? ' merged in as well' : '', ".")), group('figma', 'Figma', r.screens + ' screens updated', frames), group('code', 'Code', r.files + ' files changed', files, true), group('tests', 'Tests', r.checks + ' checks passed', tests), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(PtButton, {
      full: true,
      kind: "secondary",
      onClick: onPreview
    }, "Open preview"), /*#__PURE__*/React.createElement(PtButton, {
      kind: "ghost",
      onClick: onActivity,
      style: {
        alignSelf: 'center',
        fontSize: 14
      }
    }, "How this was made")));
  }
  function PtPreviewSheet({
    choice,
    onClose
  }) {
    return /*#__PURE__*/React.createElement(PtSheet, {
      onClose: onClose,
      height: "92%"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: PTC.fg1
      }
    }, "Preview"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: PTC.fg3
      }
    }, "checkout-redesign.preview.app")), /*#__PURE__*/React.createElement(PtButton, {
      kind: "ghost",
      size: 40,
      onClick: onClose,
      style: {
        fontSize: 14
      }
    }, "Close")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        scrollbarWidth: 'none',
        padding: '8px 20px 28px'
      }
    }, /*#__PURE__*/React.createElement(window.PtCheckoutMock, {
      choice: choice,
      large: true
    })));
  }
  function PtFeedbackSheet({
    onClose,
    onSend
  }) {
    const [v, setV] = React.useState('');
    return /*#__PURE__*/React.createElement(PtSheet, {
      onClose: onClose,
      height: "auto"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 20px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        letterSpacing: '-0.03em',
        color: PTC.fg1
      }
    }, "Give feedback"), /*#__PURE__*/React.createElement("textarea", {
      autoFocus: true,
      value: v,
      onChange: e => setV(e.target.value),
      rows: 4,
      placeholder: "What should change?",
      style: {
        background: PTC.bg,
        border: 'none',
        boxShadow: 'inset 0 0 0 1px ' + PTC.line2,
        borderRadius: 8,
        padding: 14,
        color: PTC.fg1,
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        lineHeight: 1.4,
        resize: 'none',
        outline: 'none'
      }
    }), /*#__PURE__*/React.createElement(PtButton, {
      full: true,
      disabled: !v.trim(),
      onClick: () => onSend(v)
    }, "Send")));
  }
  Object.assign(window, {
    PtActivitySheet,
    PtChangesView,
    PtPreviewSheet,
    PtFeedbackSheet
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/outcomes/sheets.jsx", error: String((e && e.message) || e) }); }

// prototypes/outcomes/sim.jsx
try { (() => {
(() => {
  const T = (label, agent, tools) => ({
    label,
    agent,
    tools
  });
  const PRE = [{
    id: 'understand',
    label: 'Understand current product',
    start: 0,
    end: 3.6,
    tasks: [T('Map current checkout flow', 'UX analysis', ['browser.open("/cart")', 'browser.click("Checkout")', 'flow recorded: 4 steps, 11 fields']), T('Read funnel analytics', 'UX analysis', ['analytics.query("checkout_funnel", "30d")', 'drop-off at shipping step: 38%']), T('Collect open issues', 'Codebase analysis', ['github.search_issues("label:checkout")', '7 open issues'])]
  }, {
    id: 'figma',
    label: 'Analyze Figma',
    start: 0.6,
    end: 5,
    tasks: [T('Read checkout frames', 'Design-system analysis', ['figma.get_file("Checkout v3")', 'figma.get_nodes(12 frames)']), T('Extract layout and tokens', 'Design-system analysis', ['figma.get_styles()', 'figma.get_variables("color, spacing")']), T('Diff against production', 'Visual QA', ['browser.screenshot("/checkout")', '23 differences found'])]
  }, {
    id: 'components',
    label: 'Inspect existing components',
    start: 1.8,
    end: 6.6,
    tasks: [T('Scan checkout code', 'Codebase analysis', ['github.get_tree("src/checkout")', 'read CheckoutPage.tsx', 'read useCheckout.ts']), T('Design-system audit', 'Design-system analysis', ['grep "PaymentField": 15 usages', '9 components mapped to Figma'])]
  }, {
    id: 'explore',
    label: 'Explore alternative flows',
    start: 5.4,
    end: 13,
    tasks: [T('UX analysis', 'UX analysis', ['score current flow', 'draft 3 approaches']), T('Competitor research', 'Competitor research', ['browser.open(3 checkout flows)', 'summarize patterns']), T('Alternative approaches', 'UX analysis', ['approach A: 2 steps', 'approach B: 1 step', 'approach C: express only, rejected'])]
  }, {
    id: 'feasibility',
    label: 'Check technical feasibility',
    start: 6.4,
    end: 13.6,
    tasks: [T('Payment API constraints', 'Frontend feasibility', ['read api/payments.ts', 'order must exist before payment intent']), T('Technical validation', 'Critical review', ['A: no backend change', 'B: needs 2 new endpoints'])]
  }];
  const POST = [{
    id: 'figmaUpdate',
    label: 'Update Figma',
    start: 0.3,
    end: 6,
    tasks: [T('Apply direction to frames', 'Implementation', ['figma.update_nodes(12 frames)', 'figma.create_variant("PaymentField/compact")']), T('Update component variants', 'Design-system analysis', ['figma.publish_library()'])]
  }, {
    id: 'frontend',
    label: 'Build frontend',
    start: 0.8,
    end: 9,
    tasks: [T('Implement layout', 'Implementation', ['edit CheckoutPage.tsx', 'edit steps/ContactStep.tsx', 'edit OrderSummary.tsx']), T('Wire payment form', 'Implementation', ['edit steps/PaymentStep.tsx', 'edit useCheckout.ts']), T('Update shared components', 'Implementation', ['edit components/PaymentField.tsx', 'edit components/AddressForm.tsx'])]
  }, {
    id: 'tests',
    label: 'Run tests',
    start: 5.8,
    end: 11,
    tasks: [T('Unit tests', 'Testing', ['terminal: pnpm test checkout', '17 passed']), T('End-to-end checkout', 'Testing', ['terminal: pnpm e2e checkout.spec', '6 passed'])]
  }, {
    id: 'qa',
    label: 'Visual QA',
    start: 8.6,
    end: 13,
    tasks: [T('Compare build with Figma', 'Visual QA', ['browser.screenshot(12 states)', '2 minor differences, fixed']), T('Responsive check', 'Visual QA', ['viewports 375 / 768 / 1280'])]
  }, {
    id: 'review',
    label: 'Critical review',
    start: 9.6,
    end: 14,
    tasks: [T('Accessibility review', 'Critical review', ['axe: 0 violations', 'keyboard path checked']), T('Code review', 'Critical review', ['review diff: 18 files', '1 suggestion applied'])]
  }];
  const DECIDE_AT = 14,
    RESULT_AT = 14.8,
    CHECKIN_AT = 3;
  const OPTIONS = {
    A: {
      key: 'A',
      title: 'Simplify the current checkout',
      points: ['Smaller implementation scope', 'Works with current backend', 'Faster to ship']
    },
    B: {
      key: 'B',
      title: 'One-step checkout',
      points: ['More ambitious UX', 'Requires backend changes', 'Larger implementation scope']
    }
  };
  const RESULTS = {
    A: {
      screens: 12,
      files: 18,
      checks: 23
    },
    B: {
      screens: 14,
      files: 26,
      checks: 31
    }
  };
  function build(items, t) {
    return items.map(it => {
      const n = it.tasks.length,
        d = it.end - it.start;
      const tasks = it.tasks.map((tk, i) => {
        const s = it.start + d * (i / n) * 0.55,
          e = it.start + d * ((i + 1) / n);
        const st = t >= e ? 'done' : t >= s ? 'active' : 'next';
        const p = st === 'done' ? 1 : st === 'active' ? (t - s) / (e - s) : 0;
        return {
          ...tk,
          id: it.id + i,
          status: st,
          toolsShown: st === 'done' ? tk.tools.length : st === 'active' ? Math.min(tk.tools.length, 1 + Math.floor(p * tk.tools.length)) : 0
        };
      });
      return {
        ...it,
        status: t >= it.end ? 'done' : t >= it.start ? 'active' : 'next',
        tasks
      };
    });
  }
  const initial = {
    stage: 'idle',
    phase: 'pre',
    t: 0,
    u: 0,
    choice: null,
    checkinDone: false,
    decisions: [],
    decidedAt: 0
  };
  function advance(s, dt, checkin) {
    if (s.stage !== 'run') return s;
    if (s.phase === 'pre') {
      const t = s.t + dt;
      return t >= DECIDE_AT ? {
        ...s,
        t: DECIDE_AT,
        phase: 'decide'
      } : {
        ...s,
        t
      };
    }
    if (s.phase === 'post') {
      const u = s.u + dt;
      if (checkin && checkin !== 'None' && !s.checkinDone && u >= CHECKIN_AT) return {
        ...s,
        u: CHECKIN_AT,
        phase: 'checkin',
        checkinKind: checkin
      };
      if (u >= RESULT_AT) return {
        ...s,
        u: RESULT_AT,
        phase: 'result',
        stage: 'done'
      };
      return {
        ...s,
        u
      };
    }
    return s;
  }
  function derive(s) {
    const postOn = ['post', 'checkin', 'result'].includes(s.phase);
    const pre = build(PRE, s.t),
      post = build(POST, postOn ? s.u : -1);
    const items = postOn ? [...pre, ...post] : pre;
    const tasks = items.flatMap(i => i.tasks);
    const decisions = s.decisions.map((d, i) => ({
      id: 'dec' + i,
      label: d.label,
      detail: d.detail,
      status: 'done',
      decision: true
    }));
    const completed = [...pre.filter(i => i.status === 'done'), ...decisions, ...post.filter(i => postOn && i.status === 'done')];
    const paused = s.phase === 'decide' || s.phase === 'checkin';
    const working = items.filter(i => i.status === 'active');
    const next = postOn ? post.filter(i => i.status === 'next') : [...pre.filter(i => i.status === 'next'), {
      id: 'impl',
      label: 'Implementation',
      status: 'next'
    }, {
      id: 'vqa',
      label: 'Visual QA',
      status: 'next'
    }];
    const active = tasks.filter(x => x.status === 'active');
    const used = new Set(tasks.filter(x => x.status !== 'next').map(x => x.agent));
    const alt = pre[3].tasks[2];
    let phase;
    if (s.phase === 'pre') phase = s.t < 5.4 ? {
      key: 'u',
      label: 'Understanding',
      desc: 'Reading the current checkout, the Figma file and the components it is built from.'
    } : {
      key: 'e',
      label: 'Exploring',
      desc: 'Analyzing the current flow, comparing approaches and checking technical constraints.'
    };else if (s.phase === 'decide') phase = {
      key: 'd',
      label: 'Needs you',
      desc: 'Exploration is done. One decision shapes everything that follows.'
    };else if (s.phase === 'checkin') phase = {
      key: 'c',
      label: 'Needs you',
      desc: 'Implementation is paused at one step until you answer.'
    };else if (s.phase === 'post' && s.u < 8.6) phase = {
      key: 'i',
      label: 'Implementing',
      desc: s.choice === 'B' ? 'Building the one-step checkout and the backend changes it needs.' : 'Simplifying the current checkout on your existing components and backend.'
    };else if (s.phase === 'post') phase = {
      key: 'v',
      label: 'Verifying',
      desc: 'Running tests and comparing the build against the updated Figma screens.'
    };else phase = {
      key: 'r',
      label: 'Done',
      desc: ''
    };
    return {
      items,
      completed,
      working,
      next,
      paused,
      phase,
      counts: {
        done: tasks.filter(x => x.status === 'done').length,
        active: active.length
      },
      minutes: Math.max(1, Math.round((s.t + s.u) * 0.9)),
      stats: {
        agentsActive: new Set(active.map(x => x.agent)).size,
        agentsUsed: used.size,
        tools: tasks.reduce((a, x) => a + x.toolsShown, 0),
        approaches: alt.toolsShown
      }
    };
  }
  function needsFor(s) {
    if (s.phase === 'decide') return {
      kind: 'direction',
      title: 'We found two viable directions.',
      why: 'Both satisfy the brief but optimize for different outcomes: shipping sooner, or a bigger bet on conversion. That trade-off is a product call.',
      evidence: 'Based on UX analysis, 3 competitor flows and a review of the payment API.',
      options: [OPTIONS.A, OPTIONS.B],
      actions: [{
        label: 'Choose A',
        value: 'A'
      }, {
        label: 'Choose B',
        value: 'B'
      }],
      delegate: true
    };
    if (s.phase === 'checkin' && s.checkinKind === 'Permission') return {
      kind: 'permission',
      title: 'Figma edit access is required to continue.',
      why: 'Applying the chosen direction means editing 12 frames in “Checkout v3”. Without access the file will drift from the build.',
      actions: [{
        label: 'Grant access',
        value: 'grant'
      }, {
        label: 'Skip Figma',
        value: 'skip'
      }]
    };
    if (s.phase === 'checkin') return {
      kind: 'impact',
      title: 'This component is used on 14 other screens.',
      why: 'The new design changes PaymentField. Updating it everywhere also restyles cart, subscriptions and account billing.',
      actions: [{
        label: 'Update all',
        value: 'all'
      }, {
        label: 'Checkout only',
        value: 'variant'
      }],
      delegate: true
    };
    return null;
  }
  function decide(s, value) {
    if (s.phase === 'decide') {
      const o = OPTIONS[value];
      return {
        ...s,
        phase: 'post',
        choice: value,
        decidedAt: Date.now(),
        decisions: [...s.decisions, {
          label: 'Direction selected',
          detail: o.title
        }]
      };
    }
    const map = {
      grant: ['Figma access granted', 'Edit rights on Checkout v3'],
      skip: ['Figma updates skipped', 'Code only'],
      all: ['Component updated everywhere', '15 screens'],
      variant: ['Checkout-only variant', 'PaymentField/compact']
    };
    const m = map[value];
    return {
      ...s,
      phase: 'post',
      checkinDone: true,
      decidedAt: Date.now(),
      decisions: [...s.decisions, {
        label: m[0],
        detail: m[1]
      }]
    };
  }
  function jump(to) {
    const dA = {
      label: 'Direction selected',
      detail: OPTIONS.A.title
    };
    if (to === 'Start') return {
      ...initial
    };
    if (to === 'Working') return {
      ...initial,
      stage: 'run',
      t: 7
    };
    if (to === 'Needs you') return {
      ...initial,
      stage: 'run',
      t: DECIDE_AT,
      phase: 'decide'
    };
    if (to === 'Implementing') return {
      ...initial,
      stage: 'run',
      t: DECIDE_AT,
      phase: 'post',
      u: 4,
      choice: 'A',
      checkinDone: true,
      decisions: [dA]
    };
    return {
      ...initial,
      stage: 'done',
      t: DECIDE_AT,
      phase: 'result',
      u: RESULT_AT,
      choice: 'A',
      checkinDone: true,
      decisions: [dA]
    };
  }
  window.PtSim = {
    PRE,
    POST,
    OPTIONS,
    RESULTS,
    initial,
    advance,
    derive,
    needsFor,
    decide,
    jump,
    DECIDE_AT
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/outcomes/sim.jsx", error: String((e && e.message) || e) }); }

// prototypes/outcomes/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/outcomes/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// prototypes/outcomes/ui.jsx
try { (() => {
(() => {
  const PTC = {
    bg: '#0a0a0a',
    s1: '#111111',
    s2: '#1a1a1a',
    line: 'rgba(255,255,255,0.08)',
    line2: 'rgba(255,255,255,0.14)',
    fg1: '#ededed',
    fg2: '#a1a1a1',
    fg3: '#737373',
    fg4: '#454545',
    green: '#5cc37a',
    paper: '#fafafa',
    ink: '#171717'
  };
  const ptMono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    lineHeight: 1.5,
    letterSpacing: '0.071em',
    textTransform: 'uppercase'
  };
  function PtEyebrow({
    children,
    color,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...ptMono,
        color: color || PTC.fg3,
        ...style
      }
    }, children);
  }
  function PtMark({
    status,
    onLight
  }) {
    if (status === 'done') return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        flex: 'none',
        display: 'inline-flex',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        lineHeight: 1,
        color: onLight ? '#297a3a' : PTC.green
      }
    }, "\u2713");
    const c = onLight ? PTC.ink : PTC.fg1;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: status === 'active' ? {
        width: 7,
        height: 7,
        borderRadius: 9,
        background: c,
        animation: 'ptPulse 1.6s ease-in-out infinite'
      } : {
        width: 7,
        height: 7,
        borderRadius: 9,
        boxShadow: 'inset 0 0 0 1px ' + PTC.fg4
      }
    }));
  }
  const KINDS = {
    primary: [{
      background: PTC.fg1,
      color: PTC.bg
    }, {
      background: '#ffffff'
    }],
    secondary: [{
      background: 'transparent',
      color: PTC.fg1,
      boxShadow: 'inset 0 0 0 1px ' + PTC.line2
    }, {
      background: 'rgba(255,255,255,0.06)'
    }],
    ghost: [{
      background: 'transparent',
      color: PTC.fg2
    }, {
      color: PTC.fg1
    }],
    ink: [{
      background: PTC.ink,
      color: '#fff'
    }, {
      background: '#383838'
    }],
    inkOutline: [{
      background: 'transparent',
      color: PTC.ink,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.14)'
    }, {
      background: 'rgba(0,0,0,0.05)'
    }],
    inkGhost: [{
      background: 'transparent',
      color: '#4d4d4d'
    }, {
      color: PTC.ink
    }]
  };
  function PtButton({
    kind = 'primary',
    full,
    children,
    onClick,
    disabled,
    style,
    size = 44
  }) {
    const [h, setH] = React.useState(false);
    const [p, setP] = React.useState(false);
    const k = KINDS[kind];
    return /*#__PURE__*/React.createElement("button", {
      disabled: disabled,
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => {
        setH(false);
        setP(false);
      },
      onMouseDown: () => setP(true),
      onMouseUp: () => setP(false),
      style: {
        height: size,
        padding: kind.includes('host') || kind === 'ghost' || kind === 'inkGhost' ? '0 4px' : '0 16px',
        width: full ? '100%' : undefined,
        border: 'none',
        borderRadius: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: 450,
        letterSpacing: '-0.01em',
        cursor: disabled ? 'default' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        whiteSpace: 'nowrap',
        transition: 'background 120ms, color 120ms, transform 120ms, opacity 120ms',
        transform: p && !disabled ? 'scale(0.98)' : 'none',
        opacity: disabled ? 0.35 : 1,
        ...k[0],
        ...(h && !disabled ? k[1] : {}),
        ...style
      }
    }, children);
  }
  function PtBack({
    label,
    onClick
  }) {
    return /*#__PURE__*/React.createElement(PtButton, {
      kind: "ghost",
      size: 40,
      onClick: onClick,
      style: {
        alignSelf: 'flex-start',
        marginLeft: -4,
        fontSize: 14
      }
    }, "\u2190 ", label);
  }
  function PtSheet({
    onClose,
    children,
    height = '88%'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        animation: 'ptFade 200ms ease-out'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height,
        background: PTC.s1,
        borderRadius: '14px 14px 0 0',
        boxShadow: 'inset 0 1px 0 ' + PTC.line2,
        display: 'flex',
        flexDirection: 'column',
        animation: 'ptSheetUp 320ms cubic-bezier(0.2,0,0,1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 4,
        borderRadius: 4,
        background: PTC.fg4,
        margin: '8px auto 0',
        flex: 'none'
      }
    }), children));
  }
  function PtRow({
    status,
    label,
    detail,
    muted,
    right,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 34,
        animation: 'ptFadeUp 420ms cubic-bezier(0.2,0,0,1)',
        ...style
      }
    }, /*#__PURE__*/React.createElement(PtMark, {
      status: status
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        lineHeight: 1.35,
        color: muted ? PTC.fg2 : PTC.fg1
      }
    }, label), detail && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: PTC.fg3
      }
    }, detail)), right);
  }
  Object.assign(window, {
    PTC,
    ptMono,
    PtEyebrow,
    PtMark,
    PtButton,
    PtBack,
    PtSheet,
    PtRow
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/outcomes/ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Home.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  LogoStrip,
  FeatureCard,
  CliPanel,
  Card,
  TextLink
} = window.PaperTerminalDesignSystem_791a9e;
const wrap = {
  maxWidth: 'var(--page-max-width)',
  margin: '0 auto',
  padding: '0 var(--page-gutter)',
  boxSizing: 'border-box'
};
function Hero({
  onSignUp
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 96,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)',
      gap: 48,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-display)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 450,
      textWrap: 'balance'
    }
  }, "Build and deploy on the platform for the web."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onSignUp
  }, "Start deploying"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Talk to sales"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      paddingBottom: 8
    }
  }, ['For coding agents', 'To ship apps and agents', 'On one global network'].map(t => /*#__PURE__*/React.createElement(Eyebrow, {
    key: t
  }, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--fg-2)'
    }
  }, "Framework-native infrastructure with previews, observability and edge compute built in.")));
}
function Agents() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, "Build agents"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--text-heading-lg)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-heading-lg)',
      fontWeight: 450
    }
  }, "Agents that ship themselves."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--fg-2)',
      maxWidth: 460
    }
  }, "Run long-lived workloads with streaming, retries and durable state. Deploy from the same repo as your frontend."), /*#__PURE__*/React.createElement(TextLink, {
    underline: "always"
  }, "Read the agent guide \u2192")), /*#__PURE__*/React.createElement(CliPanel, {
    title: "Terminal",
    lines: [{
      type: 'cmd',
      text: 'deploy --prod'
    }, {
      type: 'out',
      text: 'Detected framework: Next.js'
    }, {
      type: 'out',
      text: 'Building 142 routes…'
    }, {
      type: 'ok',
      text: 'Build completed in 11s'
    }, {
      type: 'ok',
      text: 'Assigned to production'
    }, {
      type: 'out',
      text: 'https://acme-agents.example.app'
    }]
  }));
}
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "Previews",
    title: "Every push gets a URL.",
    description: "Review changes in the environment they will ship to."
  }, /*#__PURE__*/React.createElement(CliPanel, {
    inset: true,
    lines: [{
      type: 'cmd',
      text: 'git push origin feat/nav'
    }, {
      type: 'ok',
      text: 'Preview ready'
    }]
  })), /*#__PURE__*/React.createElement(FeatureCard, {
    inverted: true,
    eyebrow: "Identity",
    title: "One account for every agent.",
    description: "Scoped credentials, rotated automatically."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 6,
      background: '#262626',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: 8,
    tone: "inverse",
    style: {
      opacity: .6
    }
  }, "Agent ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: '#fff'
    }
  }, "agt_7f3c\u2026e21a"))), /*#__PURE__*/React.createElement(FeatureCard, {
    eyebrow: "Observability",
    title: "See every request.",
    description: "Logs, traces and web vitals in one timeline."
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 12,
    style: {
      background: 'var(--surface-page-canvas)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, [['GET', '/api/chat', '200', '84ms'], ['POST', '/api/run', '200', '212ms'], ['GET', '/', '304', '12ms']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr 36px 48px',
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-accent)'
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, r[3]))))));
}
function Footer() {
  const cols = {
    Products: ['Previews', 'Functions', 'Observability'],
    Resources: ['Docs', 'Guides', 'Changelog'],
    Company: ['About', 'Careers', 'Contact']
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      ...wrap,
      paddingBottom: 64,
      display: 'grid',
      gridTemplateColumns: '2fr repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, "Paper Terminal"), Object.entries(cols).map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, h), ls.map(l => /*#__PURE__*/React.createElement(TextLink, {
    key: l,
    muted: true
  }, l)))));
}
function Home({
  onSignUp
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 112
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    onSignUp: onSignUp
  }), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(LogoStrip, {
    names: ['Northwind', 'Halcyon', 'Oberon', 'Mesa Labs', 'Kestrel', 'Arbor', 'Lumen']
  })), /*#__PURE__*/React.createElement(Agents, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SignUp.jsx
try { (() => {
function SignUp({
  onBack
}) {
  const {
    Button,
    Eyebrow,
    Card,
    TextLink,
    CliPanel
  } = window.PaperTerminalDesignSystem_791a9e;
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const input = {
    height: 40,
    padding: '0 12px',
    borderRadius: 6,
    border: 'none',
    boxShadow: 'var(--shadow-ring)',
    background: 'var(--surface-input)',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--fg-1)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 400,
      margin: '0 auto',
      padding: '96px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, "Create account"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 1.1,
      fontWeight: 450
    }
  }, "Start deploying for free.")), done ? /*#__PURE__*/React.createElement(CliPanel, {
    lines: [{
      type: 'cmd',
      text: 'signup ' + email
    }, {
      type: 'ok',
      text: 'Check your inbox to continue'
    }]
  }) : /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      width: '100%'
    }
  }, "Continue with GitHub"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.071em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  }), "or", /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    style: input,
    placeholder: "Email address",
    value: email,
    onChange: e => setEmail(e.target.value),
    onFocus: e => e.target.style.boxShadow = '0 0 0 1px #171717',
    onBlur: e => e.target.style.boxShadow = 'var(--shadow-ring)'
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: '100%'
    },
    disabled: !email.includes('@'),
    onClick: () => setDone(true)
  }, "Continue with email")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, "Already have an account? ", /*#__PURE__*/React.createElement(TextLink, {
    size: 14,
    underline: "always",
    onClick: e => {
      e.preventDefault();
      onBack();
    }
  }, "Back to home")));
}
window.SignUp = SignUp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SignUp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CliPanel = __ds_scope.CliPanel;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

})();
