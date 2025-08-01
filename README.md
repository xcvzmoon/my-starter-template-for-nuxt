# My Nuxt Starter Template

> Run `bunx gitpick xcvzmoon/xcvz-template <project>` to use this template

## Dependencies

| Package      | Version |
| ------------ | ------- |
| TypeScript   | 5.6.3   |
| Vue          | 3.5.17  |
| Nuxt         | 4.0.2   |
| Tailwind CSS | 4.1.11  |
| Nuxt UI      | 3.3.0   |

## Scripts

```bash
bun install
bun run dev
bun run format #prettier
bun run lint #oxlint
```

> Always run `bun run lint` to catch erroneous or useless code, especially before submitting a pull request. If you use `ci.yaml`, it runs lint, so the build will not pass if oxlint reports any errors.

This template uses vite's experimental rolldown for faster build

```json
// package.json
{
  "overrides": {
    "vite": "npm:rolldown-vite@latest"
  }
}
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  vite: {
    experimental: {
      enableNativePlugin: true,
    },
  },
});
```
