<template>
  <q-page
    :class="{
      'mobile-padding': tab === 'My debit cards',
    }"
  >
    <q-card flat class="border-radius-inherit">
      <q-card-section
        :class="{
          'q-pa-xl': $q.screen.gt.sm,
          'no-padding': $q.screen.lt.md,
        }"
      >
        <!--  START: Cards Page Header   -->
        <div
          :class="{
            'fixed-top text-white bg-secondary q-pa-md': $q.screen.lt.md,
          }"
        >
          <!-- Mobile Logo Right side      -->
          <router-link to="/" v-if="$q.screen.lt.md" class="flex items-end justify-end">
            <img alt="logo" src="/assets/common/mini-logo.svg" />
          </router-link>

          <div>Available Balance</div>

          <div class="flex no-wrap justify-between">
            <div class="flex no-wrap items-center">
              <q-badge color="primary">S$ </q-badge>
              <span class="text-h5 q-ml-sm text-weight-bold">3,000</span>
            </div>

            <!-- todo: make generic button for desktop & mobile screen  -->
            <q-btn
              data-cy="cards-page-new-card-button"
              :color="$q.screen.gt.sm ? 'accent' : 'transparent'"
              unelevated
              no-caps
              @click="openNewCardModal = !openNewCardModal"
            >
              <div class="flex no-wrap items-center">
                <img
                  :src="
                    $q.screen.gt.sm
                      ? '/assets/common/circle-add.svg'
                      : '/assets/common/circle-add-tertiary.svg'
                  "
                  alt="add"
                />
                <span
                  :class="{
                    'text-tertiary': $q.screen.lt.md,
                  }"
                  class="q-ml-sm"
                  >New Card</span
                >
              </div>
            </q-btn>
          </div>

          <q-tabs
            dense
            class="q-mt-md"
            align="left"
            v-model="tab"
            content-class="text-grey-6"
            :active-color="$q.screen.gt.sm ? 'dark' : 'white'"
            active-class="text-dark"
            indicator-color="tertiary"
          >
            <q-tab
              v-for="(item, index) in CARDS_PAGE_TABS"
              :key="index"
              :name="item"
              :label="item"
              no-caps
              class="no-padding q-mr-md"
            />
          </q-tabs>
          <card-carousel-wrapper v-if="$q.screen.lt.md && tab === 'My debit cards'" />
        </div>
        <!--  END: Cards Page Header    -->

        <!-- START: Tabs pages-->
        <q-card class="q-mt-md default-card border-radius-inherit" :flat="$q.screen.lt.md">
          <q-card-section :class="$q.screen.lt.md ? 'no-padding' : 'q-pa-lg'">
            <q-tab-panels v-model="tab" animated class="border-radius-inherit">
              <q-tab-panel name="My debit cards" class="no-padding rounded-borders">
                <my-debit-cards-page />
              </q-tab-panel>

              <q-tab-panel name="All company cards" class="no-padding">
                <all-company-cards-page />
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
        </q-card>
        <!-- END: Tabs pages-->
      </q-card-section>
    </q-card>
  </q-page>
  <!--  add new card component-->
  <add-new-card-dialog v-if="openNewCardModal" v-model="openNewCardModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CARDS_PAGE_TABS } from 'src/components/card/constants/cardConstants';
import MyDebitCardsPage from 'src/pages/cards/my-debit-cards/MyDebitCardsPage.vue';
import AllCompanyCardsPage from 'src/pages/cards/all-company-cards/AllCompanyCardsPage.vue';
import AddNewCardDialog from 'src/components/card/AddNewCardDialog.vue';
import CardCarouselWrapper from 'src/components/card/CardCarouselWrapper.vue';

const tab = ref('My debit cards');
const openNewCardModal = ref(false);
</script>

<style lang="scss" scoped>
:deep(.q-tabs__content--align-justify .q-tab) {
  flex: none;
}

/* should be handle for other routes in mobile*/
@media (max-width: 1023px) {
  .mobile-padding {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding-top: 27rem;
  }
}
</style>
