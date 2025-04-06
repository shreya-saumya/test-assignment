<template>
  <q-dialog
    data-cy="new-card-dialog"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue')"
    persistent
  >
    <q-card class="new-card q-pa-sm">
      <q-card-section>
        <div class="text-h6">Add card</div>
        <q-input
          data-cy="new-card-input"
          color="grey"
          class="q-mt-md"
          outlined
          label="Enter card holder's name"
          v-model="name"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" no-caps @click="emit('update:modelValue', false)" />
        <q-btn
          unelevated
          data-cy="new-card-add-button"
          @click="handleNewCard"
          label="Add"
          color="accent"
          no-caps
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCardsStore } from 'src/stores/useCardsStore';

defineProps<{
  modelValue: boolean;
}>();

const name = ref('');
const emit = defineEmits(['update:modelValue']);

const store = useCardsStore();

const handleNewCard = () => {
  try {
    store.addNewCard(name.value);
    emit('update:modelValue', false);
  } catch (e) {
    alert(e);
  }
};
</script>

<style scoped>
.new-card {
  min-width: 18rem;
}
</style>
