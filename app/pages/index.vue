<script setup lang="ts">
import { features, honest, site, steps } from '~/data/site'

const { t } = useI18n()
</script>

<template>
  <div>
    <UPageHero
      class="mono-grid"
      :ui="{ title: 'text-4xl sm:text-7xl text-balance wrap-break-word', description: 'text-balance' }"
    >
      <template #headline>
        <div class="flex flex-col items-center gap-8">
          <div class="hero-mark enter">
            <RigMark class="size-20 sm:size-24" />
          </div>
          <UBadge
            :label="t('hero.badge')"
            color="neutral"
            variant="outline"
            class="enter rounded-full font-mono px-3"
            style="--enter-delay: 120ms"
          />
        </div>
      </template>

      <template #title>
        <span
          class="enter block"
          style="--enter-delay: 200ms"
        >{{ t('hero.title1') }}</span>
        <span
          class="enter block text-muted font-light"
          style="--enter-delay: 300ms"
        >{{ t('hero.title2') }}</span>
      </template>

      <template #description>
        <span
          class="enter block"
          style="--enter-delay: 420ms"
        >{{ t('hero.description') }}</span>
      </template>

      <template #links>
        <div class="flex w-full flex-col items-center gap-4">
          <div
            class="enter flex flex-wrap justify-center gap-3"
            style="--enter-delay: 540ms"
          >
            <UButton
              :label="t('hero.cta')"
              :to="site.download"
              target="_blank"
              icon="i-lucide-download"
              size="xl"
              class="nudge"
            />
            <UButton
              label="GitHub"
              :to="site.github"
              target="_blank"
              icon="i-simple-icons-github"
              size="xl"
              color="neutral"
              variant="outline"
            />
          </div>
          <p
            class="enter text-sm text-dimmed font-mono"
            style="--enter-delay: 620ms"
          >
            {{ t('hero.note') }}
          </p>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      id="features"
      :title="t('features.title')"
      :description="t('features.description')"
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal
          v-for="(feature, i) in features"
          :key="feature.key"
          :delay="i * 90"
        >
          <UPageFeature
            :icon="feature.icon"
            :title="t(`features.items.${feature.key}.title`)"
            :description="t(`features.items.${feature.key}.description`)"
          />
        </Reveal>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="how"
      :title="t('how.title')"
      :description="t('how.description')"
    >
      <div class="grid gap-8 sm:grid-cols-3">
        <Reveal
          v-for="(step, i) in steps"
          :key="step"
          :delay="i * 110"
        >
          <div class="flex flex-col gap-3">
            <span class="font-mono text-sm text-dimmed">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="text-lg font-semibold text-highlighted">
              {{ t(`how.steps.${step}.title`) }}
            </h3>
            <p class="text-muted">
              {{ t(`how.steps.${step}.description`) }}
            </p>
          </div>
        </Reveal>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="honest"
      :title="t('honest.title')"
      :description="t('honest.description')"
    >
      <div class="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        <Reveal
          v-for="(rule, i) in honest"
          :key="rule"
          :delay="i * 80"
        >
          <p class="flex gap-3 text-muted">
            <UIcon
              name="i-lucide-check"
              class="mt-1 size-4 shrink-0 text-highlighted"
            />
            <span><b class="text-highlighted font-semibold">{{ t(`honest.items.${rule}.title`) }}</b>
              {{ t(`honest.items.${rule}.description`) }}</span>
          </p>
        </Reveal>
      </div>
    </UPageSection>

    <UPageSection id="download">
      <Reveal>
        <UPageCTA
          :title="t('cta.title')"
          :description="t('cta.description')"
          variant="subtle"
          :links="[
            { label: t('cta.download'), to: site.download, target: '_blank', icon: 'i-lucide-download' },
            { label: t('cta.source'), to: site.github, target: '_blank', icon: 'i-simple-icons-github', color: 'neutral', variant: 'outline' }
          ]"
        />
      </Reveal>
    </UPageSection>
  </div>
</template>
