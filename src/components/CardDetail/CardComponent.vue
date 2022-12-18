<template>
  <div>
    <v-card>
      <v-card-title>
        {{ cardDetail.title }}
      </v-card-title>
      <v-card-text>
        {{ cardDetail.description }}
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    cardDetail: {
      type: Object,
      required: true,
    },
  },
};
</script>
