import type { DropdownMenuItem } from '@nuxt/ui'

const modes = [
  { value: 'light', icon: 'i-lucide-sun' },
  { value: 'dark', icon: 'i-lucide-moon' },
  { value: 'system', icon: 'i-lucide-monitor' },
] as const

// Light / dark / system items shared by the theme button (desktop) and the phone menu.
// "System" (the default) follows the OS setting.
export function useThemeMenu() {
  const colorMode = useColorMode()
  const c = useContent()

  const items = computed<DropdownMenuItem[]>(() =>
    modes.map(m => ({
      label: c.value.theme[m.value],
      icon: m.icon,
      type: 'checkbox' as const,
      checked: colorMode.preference === m.value,
      onSelect: () => { colorMode.preference = m.value },
    })),
  )

  const icon = computed(() => modes.find(m => m.value === colorMode.preference)?.icon ?? 'i-lucide-monitor')

  return { items, icon }
}
