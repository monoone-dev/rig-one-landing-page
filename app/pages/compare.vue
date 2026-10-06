<script setup lang="ts">
const c = useContent()

usePageSeo({
  path: '/compare',
  meta: () => c.value.meta.compare,
  schema: () => [{
    '@type': 'FAQPage',
    'mainEntity': c.value.faq.items.map(f => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': stripTags(f.answer) },
    })),
  }],
})
</script>

<template>
  <main id="main">
    <CompetitionSection :level="1" />
    <FaqSection />
    <CtaSection />
  </main>
</template>
