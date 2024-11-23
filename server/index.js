// const express = require('express')
// const request = require('request')
// const cors = require('cors')
// const app = express()
// const { createProxyMiddleware } = require('http-proxy-middleware')

// // const corsOptions = {
// //   origin: 'http://localhost:3000',
// //   credentials: true, //access-control-allow-credentials:true
// //   preflightContinue: true,
// //   optionSuccessStatus: 200,
// // }
// // Enable CORS for all routes
// app.use(
//   cors({
//     origin: 'http://localhost:3000', // Allow only your front-end origin
//     methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed HTTP methods
//     allowedHeaders: 'Content-Type,Authorization', // Allowed headers
//     credentials: true, // If you need cookies or credentials
//   }),
// )
// // Handle preflight requests
// // app.options('*', (req, res) => {
// //   res.sendStatus(200) // Respond to preflight with OK status
// // })
// app.options('*', cors())

// // app.get('/cors', (req, res) => {
// //   res.set('Access-Control-Allow-Origin', '*')
// //   res.send({ msg: 'This has CORS enabled 🎈' })
// // })
// // Proxy route to forward requests to the API
// app.use('/api', (req, res) => {
//   const apiUrl = `https://api-sandbox.uphold.com${req.url}`
//   req.pipe(request(apiUrl)).pipe(res)
// })
// // Proxy configuration

// // Proxy configuration
// // app.use(
// //   '/api',
// //   createProxyMiddleware({
// //     target: 'https://api-sandbox.uphold.com',
// //     changeOrigin: true,
// //     pathRewrite: {
// //       '^/api': '', // Remove '/api' from the start of the path
// //     },
// //     logLevel: 'debug', // Debug logging for troubleshooting
// //   }),
// // )

// // Start the server
// const PORT = 5000
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`)
// })

// // const express = require('express')
// // const cors = require('cors')
// // const { createProxyMiddleware } = require('http-proxy-middleware')

// // const app = express()

// // // Enable CORS for all routes
// // app.use(cors())

// // // Proxy configuration
// // app.use(
// //   '/api',
// //   createProxyMiddleware({
// //     target: 'https://api-sandbox.uphold.com',
// //     changeOrigin: true,
// //     onProxyReq: (proxyReq, req, res) => {
// //       // You can add custom headers if needed
// //       proxyReq.setHeader('X-Requested-With', 'XMLHttpRequest').pipe(res)
// //     },
// //     logLevel: 'debug',
// //   }),
// // )

// // const PORT = 5000

// // app.listen(PORT, () => {
// //   console.log(`Proxy server running at http://localhost:${PORT}`)
// // })

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0'
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080

var cors_proxy = require('cors-anywhere')
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    // requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port)
  })
