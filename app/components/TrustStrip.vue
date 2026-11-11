<script setup lang="ts">
import { trustIcons } from '~/data/shared'

// Warp's logo band: a ruled strip of quiet grey marks — here the three agent apps RigOne runs —
// then the four facts you can check, one per column.
const c = useContent()
const agents = [
  { name: 'Claude Code', icon: 'i-simple-icons-claude' },
  { name: 'Codex', icon: 'i-simple-icons-openai' },
  { name: 'OpenCode', icon: 'i-simple-icons-opencode' },
]
</script>

<template>
  <div class="trust">
    <div class="wrap">
      <div class="trust__logos">
        <span class="trust__label">{{ c.hero.audience }}</span>
        <ul class="trust__agents" :aria-label="c.hero.badgeAgents">
          <li v-for="a in agents" :key="a.name" class="trust__agent">
            <UIcon :name="a.icon" class="trust__logo" />
            {{ a.name }}
          </li>
        </ul>
      </div>
      <ul class="trust__facts" :aria-label="c.trust.aria">
        <li v-for="(label, i) in c.trust.items" :key="i" class="trust__fact">
          <UIcon :name="trustIcons[i]!" class="trust__icon" />
          <span>{{ label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.trust {
  border-top: 1px solid var(--border);

  &__logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px 40px;
    padding: 32px 0;
  }

  &__label {
    max-width: 22em;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 12.5px;
  }

  &__agents {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 48px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__agent {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--text-muted);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  &__logo {
    width: 22px;
    height: 22px;
  }

  &__facts {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--border);
    list-style: none;

    @include below(lg) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include below(xs) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__fact {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 18px 16px 18px 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 12.5px;
    line-height: 1.5;
  }

  &__icon {
    flex: none;
    width: 15px;
    height: 15px;
    margin-top: 2px;
    color: var(--accent-text);
  }
}
</style>
