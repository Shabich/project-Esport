<template>
  <q-list>
    <q-item
      v-for="(item, index) in list"
      :key="index"
      clickable
      v-ripple
      style="width: 80vw"
    >
      <q-item-section v-for="key in Object.keys(item)" :key="key">
        <q-item-section v-if="triggerFields.includes(key)" avatar>
          <q-avatar>
            <img :src="item[key]"/>

          </q-avatar>
        </q-item-section>
        <q-item-section v-else>
          <q-item-label class="text-white">{{ item[key] }}</q-item-label>
        </q-item-section>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
export default {
  name: 'ListComponent',
  props: {
    list: {
      type: Array,
      required: true,
    },
    triggerFields: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.hoverable {
  transition: transform 0.3s;
}
.hoverable:hover {
  transform: scale(1.01);
  box-shadow: 0 0 50px rgba(122, 235, 255, 0.5);
}
</style>
