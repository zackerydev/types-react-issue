# Types React Issue Reproduction

This repo reproduces an issue with `@types/react` and how TypeScript resolves its typings in a mono repo setting.

Pull down this repo and run:

```bash
pnpm i
pnpm run -r build
```

Branches `fixed` and `fixed-tsconfig` demonstrate fixed dependency trees.
