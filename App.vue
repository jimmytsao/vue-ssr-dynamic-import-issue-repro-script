<script>
/* Works if not dynamically importing */
// import Grid from './components/Grid'
// import SomeComponent from './components/SomeComponent'

export default {
  components: {
    /* Works if not dynamically importing */
    // Grid,
    // SomeComponent

    Grid: () => import('./components/Grid'),
    SomeComponent: () => import('./components/SomeComponent')
  },
  props: {
    config: { type: Object, default: () => ({}) }
  },
  render (createElement) {
    const create = (config) => {
      const { component, ...dataObject } = config

      if (dataObject.scopedSlots) {
        const keys = Object.keys(dataObject.scopedSlots)

        dataObject.scopedSlots = keys.reduce((slots, key) => {
          const value = dataObject.scopedSlots[key]
          slots[key] = () => [create(value, key)]
          return slots
        }, {})
      }
      return createElement(
        component,
        dataObject
      )
    }

    return create(this.config)
  }
}
</script>
