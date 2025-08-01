<script setup lang="ts">
import type { NuxtError } from '#app';

type Props = {
  error: NuxtError;
};

const { error } = defineProps<Props>();
</script>

<template>
  <div class="flex h-svh flex-col items-center justify-center">
    <h3 class="text-error text-5xl font-bold">{{ error.statusCode }}</h3>
    <ULink to="/">Go back</ULink>
  </div>
</template>
