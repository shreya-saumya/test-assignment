<template>
  <q-card>
    <q-card-section
      class="transaction-list row"
      v-for="(transaction, index) in transactions"
      :key="index"
    >
      <div class="col-shrink">
        <q-avatar class="avatar" :style="{ backgroundColor: transaction.bgColor }">
          <img alt="transaction type" class="icon" :src="transaction.iconSrc" />
        </q-avatar>
      </div>
      <div class="col q-pl-md">
        <q-item-label class="text-weight-bold">{{ transaction.name }}</q-item-label>
        <q-item-label class="text-grey-6 text-caption">{{
          date.formatDate(transaction.date, 'DD MMMM YYYY')
        }}</q-item-label>
        <div class="flex items-center q-mt-sm no-wrap">
          <img
            class="rounded-borders q-pa-xs bg-accent"
            src="/assets/common/business-and-finance.svg"
            alt="refund"
          />
          <span class="q-ml-xs text-caption text-accent text-weight-bold">{{
            transaction.description
          }}</span>
        </div>
      </div>
      <div class="col-shrink">
        <div
          class="text-weight-bold"
          :class="{
            'text-primary': transaction.type === 'credit',
            negative: transaction.type === 'debit',
          }"
        >
          {{ transaction.type === 'credit' ? '+' : '-' }} S$ {{ transaction.amount }}
          <img class="q-ml-sm" src="/assets/common/nexticon.svg" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { date } from 'quasar';
import type { Transaction } from 'src/components/transactions/types/TransactionTypes';
import { TRANSACTIONS_LIST } from 'src/components/transactions/constants/transactionConstants';

// should be a response from API call but for now constant
const transactions = ref<Transaction[]>(TRANSACTIONS_LIST);
</script>

<style lang="scss" scoped>
.icon {
  width: 16px !important;
  /* height: 15.2px !important; */
  color: #606060;
}

.negative {
  color: black;
}

.transaction-list {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid $grey-3;
}
</style>
