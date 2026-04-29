import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'API is running 🚀' })
})

app.get('/api/hello', (c) => {
  return c.json({ msg: 'Hello from server' })
})

export default {
  port: 3001,
  fetch: app.fetch,
}