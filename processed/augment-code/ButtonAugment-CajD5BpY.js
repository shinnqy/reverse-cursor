import {
  S as G,
  i as H,
  s as I,
  a as z,
  B as Z,
  C as _,
  g as J,
  Z as K,
  u as d,
  t as m,
  D as F,
  E as A,
  _ as M,
  j as O,
  N as g,
  A as h,
  $ as D,
  c as f,
  a0 as E,
  e as p,
  f as N,
  q as b,
  r as w,
  h as v,
  V as x,
  W as C,
  X as y,
  Y as k,
  a1 as P,
} from "./SpinnerAugment-DI4IM-MA.js"
import { B as Q } from "./BaseButton-C5Me6mfC.js"
const iconRightProps = (a) => ({}),
  iconLeftProps = (a) => ({}),
  iconLeftSlotProps = (a) => ({}),
  iconRightSlotProps = (a) => ({})
function IconLeftComponent(ctx) {
  let container, isInitialized
  const iconLeftSlot = ctx[10].iconLeft,
    iconComponent = x(iconLeftSlot, ctx, ctx[20], iconRightSlotProps)
  return {
    c() {
      ;(container = h("div")), iconComponent && iconComponent.c(), f(container, "class", "c-button--icon svelte-ddrvrw")
    },
    m(target, anchor) {
      p(target, container, anchor), iconComponent && iconComponent.m(container, null), (isInitialized = !0)
    },
    p(newCtx, dirty) {
      iconComponent &&
        iconComponent.p &&
        (!isInitialized || 1048576 & dirty) &&
        C(iconComponent, iconLeftSlot, newCtx, newCtx[20], isInitialized ? k(iconLeftSlot, newCtx[20], dirty, iconLeftSlotProps) : y(newCtx[20]), iconRightSlotProps)
    },
    i(intro) {
      isInitialized || (d(iconComponent, intro), (isInitialized = !0))
    },
    o(outro) {
      m(iconComponent, outro), (isInitialized = !1)
    },
    d(detaching) {
      detaching && v(container), iconComponent && iconComponent.d(detaching)
    },
  }
}
function TextComponent(ctx) {
  let container, textComponent, isInitialized
  return (
    (textComponent = new P({
      props: {
        size: ctx[0],
        weight: ctx[1] === "ghost" ? "regular" : "medium",
        $$slots: { default: [TextSlotComponent] },
        $$scope: { ctx: ctx },
      },
    })),
    {
      c() {
        ;(container = h("div")),
          Z(textComponent.$$.fragment),
          f(container, "class", "c-button--text svelte-ddrvrw")
      },
      m(target, anchor) {
        p(target, container, anchor), _(textComponent, container, null), (isInitialized = !0)
      },
      p(newCtx, dirty) {
        const props = {}
        1 & dirty && (props.size = newCtx[0]),
          2 & dirty && (props.weight = newCtx[1] === "ghost" ? "regular" : "medium"),
          1048576 & dirty && (props.$$scope = { dirty: dirty, ctx: newCtx }),
          textComponent.$set(props)
      },
      i(intro) {
        isInitialized || (d(textComponent.$$.fragment, intro), (isInitialized = !0))
      },
      o(outro) {
        m(textComponent.$$.fragment, outro), (isInitialized = !1)
      },
      d(detaching) {
        detaching && v(container), F(textComponent)
      },
    }
  )
}
function TextSlotComponent(ctx) {
  let isInitialized
  const defaultSlot = ctx[10].default,
    slotContent = x(defaultSlot, ctx, ctx[20], null)
  return {
    c() {
      slotContent && slotContent.c()
    },
    m(target, anchor) {
      slotContent && slotContent.m(target, anchor), (isInitialized = !0)
    },
    p(newCtx, dirty) {
      slotContent &&
        slotContent.p &&
        (!isInitialized || 1048576 & dirty) &&
        C(slotContent, defaultSlot, newCtx, newCtx[20], isInitialized ? k(defaultSlot, newCtx[20], dirty, null) : y(newCtx[20]), null)
    },
    i(intro) {
      isInitialized || (d(slotContent, intro), (isInitialized = !0))
    },
    o(outro) {
      m(slotContent, outro), (isInitialized = !1)
    },
    d(detaching) {
      slotContent && slotContent.d(detaching)
    },
  }
}
function IconRightComponent(ctx) {
  let container, isInitialized
  const iconRightSlot = ctx[10].iconRight,
    iconComponent = x(iconRightSlot, ctx, ctx[20], iconLeftProps)
  return {
    c() {
      ;(container = h("div")), iconComponent && iconComponent.c(), f(container, "class", "c-button--icon svelte-ddrvrw")
    },
    m(target, anchor) {
      p(target, container, anchor), iconComponent && iconComponent.m(container, null), (isInitialized = !0)
    },
    p(newCtx, dirty) {
      iconComponent &&
        iconComponent.p &&
        (!isInitialized || 1048576 & dirty) &&
        C(iconComponent, iconRightSlot, newCtx, newCtx[20], isInitialized ? k(iconRightSlot, newCtx[20], dirty, iconRightProps) : y(newCtx[20]), iconLeftProps)
    },
    i(intro) {
      isInitialized || (d(iconComponent, intro), (isInitialized = !0))
    },
    o(outro) {
      m(iconComponent, outro), (isInitialized = !1)
    },
    d(detaching) {
      detaching && v(container), iconComponent && iconComponent.d(detaching)
    },
  }
}
function ButtonContent(ctx) {
  let container,
    leftIconSpace,
    textSpace,
    rightIconSpace,
    isInitialized,
    hasLeftIcon = ctx[9].iconLeft && IconLeftComponent(ctx),
    hasDefaultSlot = ctx[9].default && TextComponent(ctx),
    hasRightIcon = ctx[9].iconRight && IconRightComponent(ctx)
  return {
    c() {
      ;(container = h("div")),
        hasLeftIcon && hasLeftIcon.c(),
        (leftIconSpace = D()),
        hasDefaultSlot && hasDefaultSlot.c(),
        (textSpace = D()),
        hasRightIcon && hasRightIcon.c(),
        f(
          container,
          "class",
          (rightIconSpace =
            E(`c-button--content c-button--size-${ctx[0]}`) + " svelte-ddrvrw"),
        )
    },
    m(target, anchor) {
      p(target, container, anchor),
        hasLeftIcon && hasLeftIcon.m(container, null),
        N(container, leftIconSpace),
        hasDefaultSlot && hasDefaultSlot.m(container, null),
        N(container, textSpace),
        hasRightIcon && hasRightIcon.m(container, null),
        (isInitialized = !0)
    },
    p(newCtx, dirty) {
      newCtx[9].iconLeft
        ? hasLeftIcon
          ? (hasLeftIcon.p(newCtx, dirty), 512 & dirty && d(hasLeftIcon, 1))
          : ((hasLeftIcon = IconLeftComponent(newCtx)), hasLeftIcon.c(), d(hasLeftIcon, 1), hasLeftIcon.m(container, leftIconSpace))
        : hasLeftIcon &&
          (b(),
          m(hasLeftIcon, 1, 1, () => {
            hasLeftIcon = null
          }),
          w()),
        newCtx[9].default
          ? hasDefaultSlot
            ? (hasDefaultSlot.p(newCtx, dirty), 512 & dirty && d(hasDefaultSlot, 1))
            : ((hasDefaultSlot = TextComponent(newCtx)), hasDefaultSlot.c(), d(hasDefaultSlot, 1), hasDefaultSlot.m(container, textSpace))
          : hasDefaultSlot &&
            (b(),
            m(hasDefaultSlot, 1, 1, () => {
              hasDefaultSlot = null
            }),
            w()),
        newCtx[9].iconRight
          ? hasRightIcon
            ? (hasRightIcon.p(newCtx, dirty), 512 & dirty && d(hasRightIcon, 1))
            : ((hasRightIcon = IconRightComponent(newCtx)), hasRightIcon.c(), d(hasRightIcon, 1), hasRightIcon.m(container, null))
          : hasRightIcon &&
            (b(),
            m(hasRightIcon, 1, 1, () => {
              hasRightIcon = null
            }),
            w()),
        (!isInitialized ||
          (1 & dirty &&
            rightIconSpace !==
              (rightIconSpace =
                E(`c-button--content c-button--size-${newCtx[0]}`) +
                " svelte-ddrvrw"))) &&
          f(container, "class", rightIconSpace)
    },
    i(intro) {
      isInitialized || (d(hasLeftIcon), d(hasDefaultSlot), d(hasRightIcon), (isInitialized = !0))
    },
    o(outro) {
      m(hasLeftIcon), m(hasDefaultSlot), m(hasRightIcon), (isInitialized = !1)
    },
    d(detaching) {
      detaching && v(container), hasLeftIcon && hasLeftIcon.d(), hasDefaultSlot && hasDefaultSlot.d(), hasRightIcon && hasRightIcon.d()
    },
  }
}
function createButton(ctx) {
  let buttonComponent, isInitialized
  const buttonProps = [
    { size: ctx[0] },
    { variant: ctx[1] },
    { color: ctx[2] },
    { highContrast: ctx[3] },
    { disabled: ctx[4] },
    { loading: ctx[6] },
    { alignment: ctx[7] },
    { radius: ctx[5] },
    ctx[8],
  ]
  let componentProps = { $$slots: { default: [ButtonContent] }, $$scope: { ctx: ctx } }
  for (let i = 0; i < buttonProps.length; i += 1) componentProps = z(componentProps, buttonProps[i])
  return (
    (buttonComponent = new Q({ props: componentProps })),
    buttonComponent.$on("click", ctx[11]),
    buttonComponent.$on("keyup", ctx[12]),
    buttonComponent.$on("keydown", ctx[13]),
    buttonComponent.$on("mousedown", ctx[14]),
    buttonComponent.$on("mouseover", ctx[15]),
    buttonComponent.$on("focus", ctx[16]),
    buttonComponent.$on("mouseleave", ctx[17]),
    buttonComponent.$on("blur", ctx[18]),
    buttonComponent.$on("contextmenu", ctx[19]),
    {
      c() {
        Z(buttonComponent.$$.fragment)
      },
      m(target, anchor) {
        _(buttonComponent, target, anchor), (isInitialized = !0)
      },
      p(newCtx, [dirty]) {
        const updatedProps =
          511 & dirty
            ? J(buttonProps, [
                1 & dirty && { size: newCtx[0] },
                2 & dirty && { variant: newCtx[1] },
                4 & dirty && { color: newCtx[2] },
                8 & dirty && { highContrast: newCtx[3] },
                16 & dirty && { disabled: newCtx[4] },
                64 & dirty && { loading: newCtx[6] },
                128 & dirty && { alignment: newCtx[7] },
                32 & dirty && { radius: newCtx[5] },
                256 & dirty && K(newCtx[8]),
              ])
            : {}
        1049091 & dirty && (updatedProps.$$scope = { dirty: dirty, ctx: newCtx }), buttonComponent.$set(updatedProps)
      },
      i(intro) {
        isInitialized || (d(buttonComponent.$$.fragment, intro), (isInitialized = !0))
      },
      o(outro) {
        m(buttonComponent.$$.fragment, outro), (isInitialized = !1)
      },
      d(detaching) {
        F(buttonComponent, detaching)
      },
    }
  )
}
function initButton(ctx, props, setState) {
  const excludedProps = [
    "size",
    "variant",
    "color",
    "highContrast",
    "disabled",
    "radius",
    "loading",
    "alignment",
  ]
  let restProps = A(props, excludedProps),
    { $$slots: slots = {}, $$scope: scope } = props
  const availableSlots = M(slots)
  let { size: buttonSize = 2 } = props,
    { variant: buttonVariant = "solid" } = props,
    { color: buttonColor = "accent" } = props,
    { highContrast: isHighContrast = !1 } = props,
    { disabled: isDisabled = !1 } = props,
    { radius: buttonRadius = "medium" } = props,
    { loading: isLoading = !1 } = props,
    { alignment: buttonAlignment = "center" } = props
  return (
    (ctx.$$set = (newProps) => {
      ;(props = z(z({}, props), O(newProps))),
        setState(8, (restProps = A(props, excludedProps))),
        "size" in newProps && setState(0, (buttonSize = newProps.size)),
        "variant" in newProps && setState(1, (buttonVariant = newProps.variant)),
        "color" in newProps && setState(2, (buttonColor = newProps.color)),
        "highContrast" in newProps && setState(3, (isHighContrast = newProps.highContrast)),
        "disabled" in newProps && setState(4, (isDisabled = newProps.disabled)),
        "radius" in newProps && setState(5, (buttonRadius = newProps.radius)),
        "loading" in newProps && setState(6, (isLoading = newProps.loading)),
        "alignment" in newProps && setState(7, (buttonAlignment = newProps.alignment)),
        "$$scope" in newProps && setState(20, (scope = newProps.$$scope))
    }),
    [
      buttonSize,
      buttonVariant,
      buttonColor,
      isHighContrast,
      isDisabled,
      buttonRadius,
      isLoading,
      buttonAlignment,
      restProps,
      availableSlots,
      slots,
      function (event) {
        g.call(this, ctx, event)
      },
      function (event) {
        g.call(this, ctx, event)
      },
      function (event) {
        g.call(this, ctx, event)
      },
      function (event) {
        g.call(this, ctx, event)
      },
      function (event) {
        g.call(this, ctx, event)
      },
      function (event) {
        g.call(this, ctx, event)
      },
      function (event) {
        g.call(this, ctx, event)
      },
      function (event) {
        g.call(this, ctx, event)
      },
      function (event) {
        g.call(this, ctx, event)
      },
      scope,
    ]
  )
}
class Button extends G {
  constructor(props) {
    super(),
      H(this, props, initButton, createButton, I, {
        size: 0,
        variant: 1,
        color: 2,
        highContrast: 3,
        disabled: 4,
        radius: 5,
        loading: 6,
        alignment: 7,
      })
  }
}
export { Button as B }
