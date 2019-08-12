import createApp from './create-app'

export default (ssrData) => {
  const { app } = createApp(ssrData)

  return app
}
