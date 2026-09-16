import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('App includes assignment copy', () => {
  const app = readFileSync('src/App.jsx', 'utf8')
  assert.match(app, /DevOps Training/)
  assert.match(app, /CI\/CD Deployment Successful/)
  assert.match(app, /id="version"/)
})

test('version module is defined', () => {
  const versionFile = readFileSync('src/version.js', 'utf8')
  assert.match(versionFile, /APP_VERSION/)
})
