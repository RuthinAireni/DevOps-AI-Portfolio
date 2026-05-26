 Safe fallback for PORT (only used in dev, not required in build)
const PORT = process.env.PORT ? Number(process.env.PORT) : 5173

export default defineConfig({
  plugins: [react()],

  server: {
    port: PORT,
    host: true
  },

  preview: {
    port: PORT
  }
{

