<script setup lang="ts">
import { version } from '~~/package.json';
</script>

<template>
  <div class="grid h-[inherit] place-items-center">
    <div class="flex items-center gap-2">
      <UBadge :label="`v${version}`" />
      <h1>@xcvzmoon/xcvz-template</h1>
    </div>
  </div>
</template>
