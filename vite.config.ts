import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/shortcut-input/',
  }

  if (command === 'build' && process.env.BUILD_TYPE === 'lib') {
    return {
      ...config,
      build: {
        lib: {
          entry: 'src/index.ts',
          name: 'ShortcutInput',
          fileName: (format) => `shortcut-input.${format}.js`
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        }
      }
    }
  }

  // Default/demo site build configuration
  return {
    ...config,
    build: {
      outDir: 'dist/demo',
    }
  }
}) 