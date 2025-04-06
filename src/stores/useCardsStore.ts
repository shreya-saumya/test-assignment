import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';
import { CARDS_LIST } from 'src/components/card/constants/cardConstants';
import type { Card } from 'src/components/card/types/CardTypes';
import { createRandomCardDetails } from 'src/helpers/cardHelpers';

export const useCardsStore = defineStore('useCardsStore', () => {
  const cardsList = ref<Card[]>([]);
  const selectedCardIndex = ref(0);

  // creating 200ms timeout to mock api call
  const getMyDebitCards = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        cardsList.value = CARDS_LIST;
        resolve(true);
      }, 200);
    });
  };

  const addNewCard = (name: Card['name']) => {
    if (!name.trim().length) {
      throw new Error('Card holder name cannot be empty');
    }

    // search if name already exists
    const index = cardsList.value.findIndex(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (index > -1) {
      throw new Error('Card holder name must be unique');
    }

    // cardHelpers
    const newUser = createRandomCardDetails(name);
    cardsList.value.unshift(newUser);
    selectedCardIndex.value = 0;
  };

  return {
    cardsList,
    addNewCard,
    getMyDebitCards,
    selectedCardIndex,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCardsStore, import.meta.hot));
}
