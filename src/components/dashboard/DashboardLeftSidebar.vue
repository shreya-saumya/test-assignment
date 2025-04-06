<template>
  <q-drawer show-if-above :width="340" class="bg-secondary text-white q-pa-xl">
    <img src="/assets/common/aspire-logo.svg" alt="aspire logo" />

    <p class="text-grey-6 q-mt-md">
      Trusted way of banking for 3000+ SMEs and startups in Singapore
    </p>

    <q-list>
      <q-item
        v-for="(item, index) in SIDEBAR_ITEMS"
        :to="item.to"
        :key="index"
        class="q-my-lg no-padding"
        exact
      >
        <q-item-section>
          <div class="flex no-wrap">
            <img
              :src="item.to === route.path ? item.activeIconSrc : item.iconSrc"
              :alt="item.alt"
            />
            <span class="q-ml-md">{{ item.name }} </span>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { SIDEBAR_ITEMS } from 'src/components/dashboard/constants/dashboardConstants';

const route = useRoute();
</script>
