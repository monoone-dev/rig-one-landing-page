// Nuxt UI colours; the exact tokens are bridged from app/assets/scss/_tokens.scss. The overrides
// give the controls Airy's shape: pill buttons, a white outline button with a hairline, a deeper
// violet on hover and white menus.
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'violet',
      neutral: 'stone',
    },
    button: {
      slots: { base: 'rounded-full' },
      compoundVariants: [
        { color: 'primary', variant: 'solid', class: 'hover:bg-(--accent-hover) active:bg-(--accent-hover)' },
        { color: 'neutral', variant: 'outline', class: 'bg-(--surface-raised) ring-(--border-strong) shadow-(--shadow-sm) hover:bg-(--surface-hover) active:bg-(--surface-hover)' },
        { color: 'neutral', variant: 'ghost', class: 'text-(--text-soft) hover:bg-(--surface-hover) active:bg-(--surface-hover)' },
      ],
    },
    dropdownMenu: {
      slots: { content: 'bg-(--surface-raised) p-1.5' },
    },
  },
})
