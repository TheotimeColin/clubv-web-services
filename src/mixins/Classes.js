export default {
  computed: {
    classes () {
      return this.modifiers.map((modifier) => {
        if (modifier.name) {
          return modifier.active ? `${this.$options.name}--${modifier.name}` : ''
        } else {
          return `${this.$options.name}--${modifier}`
        }
      })
    }
  }
}