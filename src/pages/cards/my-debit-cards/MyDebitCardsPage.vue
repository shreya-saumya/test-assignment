<template>
  <div class="row">
    <div :class="$q.screen.gt.sm ? 'col-7 q-pr-xl' : 'col-12'">
      <div class="custom-carousel" v-if="$q.screen.gt.sm">
        <card-carousel-wrapper />
      </div>
      <div class="custom-carousel">
        <card-options />
      </div>
    </div>
    <div :class="$q.screen.gt.sm ? 'col-5' : 'col-12 q-pa-md'">
      <card-details-wrapper />
      <transactions-wrapper class="q-mt-lg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TransactionsWrapper from 'src/components/transactions/TransactionsWrapper.vue';
import CardDetailsWrapper from 'src/components/card/CardDetailsWrapper.vue';
import CardCarouselWrapper from 'src/components/card/CardCarouselWrapper.vue';
import { useCardsStore } from 'src/stores/useCardsStore';
import CardOptions from 'src/components/card/CardOptions.vue';

const store = useCardsStore();

const init = async () => {
  await store.getMyDebitCards();
};

void init();
</script>

<style scoped>
.custom-carousel {
  /*max-width: 25.875rem;*/
  width: 100%;
}
</style>
