<script setup lang="ts">
// RigOne symbol: one ribbon folded twice, three planes. Geometry is the same drawing the
// application ships (docs/branding/rig-one-mark.svg in monoone-dev/rig-one), scaled from the
// 1024 icon canvas onto the 24 grid — the mark on this page and the mark in the Dock cannot
// drift apart. Inlined so the gradient ids stay unique on a page that uses the mark twice.
// `tile: false` drops the dark app-icon tile and leaves the folded ribbon alone.
const props = withDefaults(defineProps<{ tile?: boolean }>(), { tile: true })

const id = useId()
const paint = (name: string) => `url(#${id}-${name})`
const viewBox = computed(() => (props.tile ? '0 0 24 24' : '3.9 3.2 16.2 17.6'))
</script>

<template>
  <svg
    :viewBox="viewBox"
    class="block"
    role="img"
    aria-label="RigOne"
  >
    <defs>
      <linearGradient
        :id="`${id}-tile`"
        x1="0"
        y1="0"
        x2="0.6"
        y2="1"
      >
        <stop stop-color="#34343a" />
        <stop
          offset=".52"
          stop-color="#232328"
        />
        <stop
          offset="1"
          stop-color="#131317"
        />
      </linearGradient>
      <linearGradient
        :id="`${id}-shaded`"
        x1="0.1"
        y1="0"
        x2="0.9"
        y2="1"
      >
        <stop stop-color="#d3d8e2" />
        <stop
          offset=".46"
          stop-color="#9aa2b0"
        />
        <stop
          offset="1"
          stop-color="#434b57"
        />
      </linearGradient>
      <linearGradient
        :id="`${id}-lit`"
        x1="0.05"
        y1="0"
        x2="0.95"
        y2="1"
      >
        <stop stop-color="#f6f7fa" />
        <stop
          offset=".6"
          stop-color="#dfe3ea"
        />
        <stop
          offset="1"
          stop-color="#c4cad5"
        />
      </linearGradient>
      <linearGradient
        :id="`${id}-foot`"
        x1="0.1"
        y1="0"
        x2="0.9"
        y2="1"
      >
        <stop stop-color="#cfd4dd" />
        <stop
          offset=".55"
          stop-color="#a8aeba"
        />
        <stop
          offset="1"
          stop-color="#7f8694"
        />
      </linearGradient>
    </defs>

    <rect
      v-if="tile"
      width="24"
      height="24"
      rx="5.44"
      ry="5.44"
      :fill="paint('tile')"
    />

    <g
      stroke-width="0.94"
      stroke-linejoin="round"
    >
      <path
        d="M4.90 8.67 L6.82 7.08 L10.29 16.13 L5.18 18.59 Z"
        :fill="paint('shaded')"
        :stroke="paint('shaded')"
      />
      <path
        d="M6.82 7.08 L13.71 4.15 L18.63 8.18 L14.23 11.67 Z"
        :fill="paint('lit')"
        :stroke="paint('lit')"
      />
      <path
        d="M14.23 11.67 L18.77 15.21 L17.58 19.95 L12.98 17.25 Z"
        :fill="paint('foot')"
        :stroke="paint('foot')"
      />
    </g>

    <rect
      v-if="tile"
      x="0.4"
      y="0.4"
      width="23.2"
      height="23.2"
      rx="5.1"
      ry="5.1"
      fill="none"
      stroke="#ffffff"
      stroke-opacity=".1"
      stroke-width="0.8"
    />
  </svg>
</template>
