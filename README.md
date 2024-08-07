# Next.js + AMP + Tailwind + PurgeCSS 

## How to Develop

```bash
# Development
yarn dev # localhost:3000

# Build
yarn build # Generates out/


```


## How it works.

- Build `style/bundle.css` by `postcss-cli`
  - See `postcss.config.js`
  - `purgecss` watches `pages/*` and `components/*`
- `pages/_document.tsx` includes it as raw.

## Why

- Next.js amp mode is great.
- AMP custom style has css size limit.
- Tailwind is big.

So I need to purge unused css.

## Reference

https://dev.to/geekplux/how-to-use-tailwindcss-with-amp-in-a-next-js-project-1f97

## LICENSE

MIT
#
