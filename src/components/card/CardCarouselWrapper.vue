<template>
  <q-carousel
    v-model="store.selectedCardIndex"
    navigation
    :swipeable="$q.screen.lt.md"
    animated
    class="bg-transparent"
    height="320px"
    transition-next="slide-left"
    transition-prev="slide-right"
    control-color="primary"
  >
    <q-carousel-slide
      v-for="(item, index) in store.cardsList"
      :key="index"
      class="no-padding"
      :name="index"
    >
      <label class="justify-end items-end flex text-primary q-mb-xs">
        <span
          class="flex cursor-pointer"
          data-cy="card-carousel-wrapper-show-card-number-btn"
          @click="showCardNumber(index)"
        >
          <img src="/assets/common/remove_red_eye.svg" alt="show card number" />
          <label class="show-number cursor-pointer text-weight-bold q-ml-xs">{{
            store?.cardsList[index]?.isMasked ? 'Show card number' : 'Hide card number'
          }}</label>
        </span>
      </label>
      <VisaCard :card="item" />
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import VisaCard from './VisaCard.vue';
import { useCardsStore } from 'src/stores/useCardsStore';

const store = useCardsStore();
const showCardNumber = (index: number) => {
  if (!store.cardsList[index]) return;

  store.cardsList[index].isMasked = !store.cardsList[index].isMasked;
};
</script>

<style scoped>
.show-number {
  font-size: 12px;
}
</style>
