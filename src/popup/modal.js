import CloseIcon from './close-icon'
export default {
  name: 'vu-modal',
  componentName: 'vu-modal',
  props: {
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    isScroll: {
      type: Boolean,
      default: false
    },
    escapable: {
      type: Boolean,
      default: false
    },
    dismissable: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    isTop: {
      type: Boolean,
      default: false
    },
    isBottom: {
      type: Boolean,
      default: false
    },
    isLeft: {
      type: Boolean,
      default: false
    },
    isRight: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    bodyPadding: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    if(this.$el.focus) {
      this.$el.focus()
    }
  },
  computed: {
    propsData() {
      return (this.$parent.$vnode.data.props && this.$parent.$vnode.data.props.vModal) ? this.$parent.$vnode.data.props.vModal : this.$props
    }
  },
  render(h) {
    const { dismissable, title, isScroll, fullscreen, isTop, isBottom, isLeft, isRight, center, className, bodyPadding } = this.propsData

    const closeBtn = dismissable 
      ? h('div', {
            class: 'vu-modal__close-btn',
            on: {
              click: () => {this.$modals.dismiss()}
            }
        }, [h(CloseIcon)])
      : null

    const headerContent = this.$slots.header 
      ? this.$slots.header
      : title 
        ? h('span', {class: ['vu-modal__cmp-header-title']}, title)
        : null

    const header = headerContent 
      ? h('div', { 
          class: ['vu-modal__cmp-header']
        }, [ headerContent ]) 
      : null

    const body = h('div', { 
      class: ['vu-modal__cmp-body'], 
      style: {
        overflowY: isScroll ? 'auto' : null,
        padding: bodyPadding ? bodyPadding : 0
      }
      }, [ this.$slots.default ])

    const footer = this.$slots.footer 
      ? h('div', { 
          class: ['vu-modal__cmp-footer']
        }, [ this.$slots.footer ]) 
      : null

    let style = {}

    return h('div', { 
      style,
      attrs: { tabindex: -1},
      class: ['vu-modal__cmp', {
          'vu-modal__cmp--is-fullscreen': fullscreen,
          'vu-modal__cmp--is-center': center,
          'vu-modal__cmp--is-top': isTop && !isScroll && !center,
          'vu-modal__cmp--is-bottom': isBottom && !isScroll && !center,
          'vu-modal__cmp--is-left': isLeft,
          'vu-modal__cmp--is-right': isRight
        }, 
        isScroll && fullscreen && 'vu-modal__cmp--is-scroll-fullscreen',
        isScroll && !fullscreen && 'vu-modal__cmp--is-scroll',
        className 
      ],
      // on: {click: (event) => {event.stopPropagation()}}
    }, [
      closeBtn,
      header,
      body,
      footer
    ])
  }
};
