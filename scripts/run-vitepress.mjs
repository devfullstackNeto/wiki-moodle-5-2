import { spawn } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const command = process.argv[2]
const mode = process.argv[3]

if (!['dev', 'build', 'preview'].includes(command) || !['public', 'editorial'].includes(mode)) {
  console.error('Uso: node scripts/run-vitepress.mjs <dev|build|preview> <public|editorial>')
  process.exit(2)
}

const vitepress = path.join(projectRoot, 'node_modules', 'vitepress', 'bin', 'vitepress.js')
const args = [vitepress, command, 'docs']
if (command !== 'build') args.push('--host', '127.0.0.1')

const child = spawn(process.execPath, args, {
  cwd: projectRoot,
  env: {
    ...process.env,
    VITEPRESS_EDITORIAL_MODE: mode === 'editorial' ? 'true' : 'false'
  },
  stdio: 'inherit'
})

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal))
}

child.on('error', (error) => {
  console.error(error)
  process.exit(1)
})

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  else process.exit(code ?? 1)
})
