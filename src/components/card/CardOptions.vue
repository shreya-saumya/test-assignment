<template>
  <q-card class="card no-shadow row justify-center">
    <q-card-section class="row justify-center items-center no-wrap">
      <q-btn flat no-caps dense class="wrapper" @click="toggleFreeze(store.selectedCardIndex)">
        <img src="/assets/common/freeze-card.svg" class="logo" alt="freeze-card" />
        <div class="label">
          {{ store.cardsList[store.selectedCardIndex]?.isFrozen ? 'Unfreeze Card' : 'Freeze card' }}
        </div>
      </q-btn>

      <q-btn flat no-caps dense class="wrapper">
        <img src="/assets/common/set-spend-limit.svg" class="logo" alt="spend limit" />
        <div class="label">Set spend limit</div>
      </q-btn>
      <q-btn flat no-caps dense class="wrapper">
        <img src="/assets/common/gpay.svg" class="logo" alt="gpay" />
        <div class="label">Add to GPay</div>
      </q-btn>
      <q-btn flat no-caps dense class="wrapper">
        <img src="/assets/common/replace-card.svg" class="logo" alt="replace card" />
        <div class="label">Replace Card</div>
      </q-btn>
      <q-btn flat no-caps dense class="wrapper">
        <img src="/assets/common/deactivate-card.svg" class="logo" alt="reactivate card" />
        <div class="label">Cancel card</div>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useCardsStore } from 'src/stores/useCardsStore';

const store = useCardsStore();

const toggleFreeze = (index: number) => {
  if (!store.cardsList[index]) {
    return;
  }

  store.cardsList[index].isFrozen = !store.cardsList[index].isFrozen;
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .card {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.card {
  background: #edf3ff;
  display: flex;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.label {
  max-width: 100%;
  white-space: normal;
  word-break: break-word;
  text-align: center;
  font-size: 13px;
  padding: 2px 4px;
}
</style>
