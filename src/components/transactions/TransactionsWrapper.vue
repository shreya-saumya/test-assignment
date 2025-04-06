<template>
  <q-card flat class="default-card">
    <q-card-section class="no-padding bg-info">
      <q-expansion-item
        default-opened
        bordered
        label="Recent Transactions"
        icon="img:/assets/common/transactions-left-right-arrow.svg"
        expand-icon="img:/assets/common/down-arrow.svg"
        expanded-icon="img:/assets/common/up-arrow.svg"
        header-class="q-pa-md text-secondary"
        class="borders"
      >
        <transactions-list />
        <q-btn
          class="view-transactions-button full-width q-pa-md"
          color="green-1"
          no-caps
          flat
          unelevated
          label="View all card transactions"
          text-color="primary"
        ></q-btn>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import TransactionsList from 'src/components/transactions/TransactionsList.vue';
</script>

<style lang="scss" scoped>
.view-transactions-button {
  background: #edfff5;
}
</style>
