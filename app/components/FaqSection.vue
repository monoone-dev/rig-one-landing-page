<script setup lang="ts">
import { site } from '~/data/site'

const c = useContent()
const localePath = useLocalePath()
const { asset } = useSiteUrl()
const items = computed(() => c.value.faq.items.map((f, i) => ({ label: f.question, content: f.answer, value: `faq-${i}` })))
const lead = computed(() => fill(c.value.faq.leadHtml, { docs: asset(localePath('/docs')), issues: site.links.issues }))
</script>

<template>
  <section id="faq" class="section section--tinted" aria-labelledby="faq-title">
    <div class="wrap faq">
      <SectionHead id="faq-title" :eyebrow="c.faq.eyebrow" :title="c.faq.title">
        <!-- eslint-disable-next-line vue/no-v-html -- our own copy, see i18n/content -->
        <span v-html="lead" />
      </SectionHead>
      <UAccordion
        v-reveal
        :items="items"
        type="multiple"
        :unmount-on-hide="false"
        :ui="{ trigger: 'text-base font-semibold text-highlighted py-4', body: 'text-[15px] text-toned pb-5' }"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  max-width: 780px;

  :deep(.section-head a) {
    color: var(--accent-text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
