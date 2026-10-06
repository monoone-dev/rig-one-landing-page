<script setup lang="ts">
// A drawing of the Run screen, built in HTML so it stays sharp, follows light/dark mode and needs
// no screenshot. The app itself is in English, so the drawing is too; screen readers get one label.
defineProps<{ label: string }>()

const steps = [
  { name: 'Reproduce', meta: 'first step', state: 'done' },
  { name: 'Fix', meta: 'after Reproduce', state: 'running' },
  { name: 'Write the test', meta: 'after Reproduce', state: 'running' },
  { name: 'Tests pass', meta: 'check · after 2 steps', state: 'waiting' },
  { name: 'Second opinion', meta: 'Codex · after Tests pass', state: 'waiting' },
] as const

const stream = [
  { who: 'Scout', vendor: 'Claude Code', text: 'The failure is in the date parser: it drops the time zone.' },
  { who: 'Builder', vendor: 'Codex', text: 'Changing parseDate to keep the offset. Two files.' },
  { who: 'Needle', vendor: 'Claude Code', text: 'Adding a test for a non-UTC timestamp.' },
] as const
</script>

<template>
  <figure class="mock" role="img" :aria-label="label">
    <div class="mock__bar" aria-hidden="true">
      <span class="mock__lights"><i /><i /><i /></span>
      <span class="mock__title">Ship a feature</span>
      <span class="mock__meta">5 steps · 3 at once · spend at most $20</span>
    </div>
    <div class="mock__body" aria-hidden="true">
      <ol class="mock__plan">
        <li v-for="step in steps" :key="step.name" class="mock__step" :class="`is-${step.state}`">
          <span class="mock__step-name">{{ step.name }}</span>
          <span class="mock__state">{{ step.state }}</span>
          <span class="mock__step-meta">{{ step.meta }}</span>
        </li>
      </ol>
      <div class="mock__stream">
        <p v-for="line in stream" :key="line.who" class="mock__line">
          <b>{{ line.who }}</b> <span class="mock__vendor">{{ line.vendor }}</span>
          <span class="mock__text">{{ line.text }}</span>
        </p>
        <div class="mock__ask">
          <span class="mock__ask-label">Builder asks</span>
          Keep the old behaviour behind a flag, or change it everywhere?
        </div>
        <div class="mock__command">
          <span class="mock__prompt">❯</span> /run · /ask an agent · /history
        </div>
      </div>
    </div>
  </figure>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as *;

.mock {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--border);
  border-radius: var(--round-xl);
  background: var(--surface-raised);
  box-shadow: var(--shadow-lg);
  font-size: 13px;
  line-height: 1.45;

  &__bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-subtle);
    background: var(--surface-sunken);
  }

  &__lights {
    display: flex;
    gap: 6px;

    i {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--border);
    }
  }

  &__title {
    color: var(--text-primary);
    font-weight: 650;
  }

  &__meta {
    margin-left: auto;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
    white-space: nowrap;

    @include below(xs) {
      display: none;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.25fr);

    @include below(xs) {
      grid-template-columns: 1fr;
    }
  }

  &__plan {
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 14px;
    border-right: 1px solid var(--border-subtle);
    list-style: none;

    @include below(xs) {
      border-right: 0;
      border-bottom: 1px solid var(--border-subtle);
    }
  }

  &__step {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2px 8px;
    padding: 9px 11px;
    border: 1px solid var(--border-subtle);
    border-radius: var(--round-sm);
    background: var(--surface-base);

    &.is-running {
      border-color: var(--accent-ring);
      background: var(--accent-soft);
    }
  }

  &__step-name {
    overflow: hidden;
    color: var(--text-primary);
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__step-meta {
    grid-column: 1 / -1;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__state {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
    }

    .is-done & {
      color: var(--safe-text);
    }

    .is-running & {
      color: var(--accent-text);

      &::before {
        animation: pulse 1.6s ease-in-out infinite;
      }
    }
  }

  &__stream {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    padding: 14px 16px;
  }

  &__line {
    color: var(--text-secondary);

    b {
      color: var(--text-primary);
      font-weight: 650;
    }
  }

  &__vendor {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;
  }

  &__text {
    display: block;
  }

  &__ask {
    padding: 10px 12px;
    border: 1px dashed var(--accent-ring);
    border-radius: var(--round-sm);
    background: var(--accent-soft);
    color: var(--text-primary);
  }

  &__ask-label {
    display: block;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__command {
    margin-top: auto;
    padding: 9px 12px;
    overflow: hidden;
    border: 1px solid var(--border-subtle);
    border-left: 2px solid var(--accent);
    border-radius: var(--round-sm);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__prompt {
    color: var(--accent-text);
  }
}

@keyframes pulse {
  50% {
    opacity: 0.25;
  }
}
</style>
