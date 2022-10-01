import { fileURLToPath } from 'url'
import { expect, it, describe, beforeEach } from 'vitest'
import { JoplinNoteHandler } from '../JoplinNoteHandler'
import * as path from 'path'
import { remove, mkdirp } from '@liuli-util/fs-extra'

describe('测试 JoplinNoteHandler', () => {
  const tempPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp')
  beforeEach(async () => {
    await remove(tempPath)
    await mkdirp(tempPath)
  })
  it('基本示例', async () => {
    const text = `# test

1. one
2. two
`
    const md = JoplinNoteHandler.md
    expect(md.stringify(md.parse(text))).toBe(text)
  })
})
