const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const bundlePath = path.join(__dirname, './dist/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundlePath)

renderer.renderToString({
  config: {
    component: 'Grid',
    scopedSlots: {
      left: {
        component: 'SomeComponent',
        props: {
          value: 'SomeComponent Value'
        }
      },
      right: {
        component: 'SomeComponent',
        props: {
          value: 'Another Value'
        }
      }
    }
  }
})
  .then(html => console.log(html))
