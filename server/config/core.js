export const prefix = false

export default {
  env: process.env.NODE_ENV || 'develop',
  port: process.env.PORT || 9394,
  debug: process.env.DEBUG || true,
  secret: process.env.SECRET,
  prefix: '/v1'
}
