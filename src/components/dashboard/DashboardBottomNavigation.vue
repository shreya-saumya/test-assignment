<template>
  <q-footer class="default-card text-primary bg-white">
    <q-tabs
      class="text-grey"
      active-color="primary"
      indicator-color="transparent"
      align="justify"
      narrow-indicator
    >
      <q-route-tab
        class="q-px-xs"
        v-for="(item, index) in SIDEBAR_ITEMS"
        :to="item.to"
        :key="index"
        no-caps
        exact
      >
        <div>
          <img
            :src="item.to === route.path ? item.activeIconSrc : item.mobileIconSrc"
            :alt="item.alt"
          />
        </div>
        <div>
          {{ item.name }}
        </div>
      </q-route-tab>
    </q-tabs>
  </q-footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { SIDEBAR_ITEMS } from 'src/components/dashboard/constants/dashboardConstants';

const route = useRoute();
</script>
