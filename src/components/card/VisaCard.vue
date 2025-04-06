<template>
  <q-card
    :class="props.card.isFrozen ? 'bg-blue-grey' : 'bg-primary'"
    class="text-bold text-white q-pa-md no-shadow"
  >
    <q-card-section>
      <div class="flex justify-end">
        <img src="/assets/common/aspire-logo-white.svg" alt="Aspire Logo" />
      </div>

      <div data-cy="visa-card-name" class="text-h5 q-mt-md text-bold">{{ props.card.name }}</div>

      <div class="q-mt-lg q-mb-sm flex items-center">
        <template v-if="props.card.isMasked">
          <span class="text-h4 text-bold" data-cy="visa-card-hidden-num-1"> •••• </span>
          <span class="text-h4 text-bold q-ml-lg" data-cy="visa-card-hidden-num-2">••••</span>
          <span class="text-h4 text-bold q-ml-lg" data-cy="visa-card-hidden-num-3">••••</span>
          <span class="text-h6 q-ml-lg" data-cy="visa-card-show-num-1">{{
            props.card.number.slice(-4)
          }}</span>
        </template>

        <template v-else>
          <span
            v-for="(item, index) in unMaskedCard"
            :key="index"
            class="text-h6 text-bold q-mr-lg"
            data-cy="visa-card-show-number"
            >{{ item }}</span
          >
        </template>
      </div>

      <div class="flex items-center no-wrap">
        <span data-cy="visa-card-validity"
          >Thru:
          {{ props.card.isMasked ? '••/••' : date.formatDate(props.card.validity, 'MM/YY') }}</span
        >
        <span data-cy="visa-card-cvv" class="q-ml-lg"
          >CVV: {{ props.card.isMasked ? '***' : props.card.cvv }}</span
        >
      </div>

      <div class="flex justify-end">
        <img src="/assets/common/visa-logo.svg" alt="VISA" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { date } from 'quasar';
import type { Card } from 'src/components/card/types/CardTypes';
import { computed } from 'vue';
const props = defineProps<{
  card: Card;
}>();

const unMaskedCard = computed(() => {
  const result = [];
  for (let i = 0; i < 16; i += 4) {
    result.push(props.card.number.slice(i, i + 4));
  }
  return result;
});
</script>
