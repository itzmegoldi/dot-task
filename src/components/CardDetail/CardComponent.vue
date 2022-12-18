<template>
  <div class="pa-4">
    <v-card class="elevation-4">
      <v-card-title>
        <span>{{ cardDetail.title }}</span>
        <v-spacer></v-spacer>
        <v-btn class="btn-class" text @click="editItem">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn class="btn-class" text @click="deleteItem">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        {{ cardDetail.description }}
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    cardDetail: {
      type: Object,
      required: true,
    },
    actDetail: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      toggleCardModal: "card/toggleCardModal",
    }),
    deleteItem() {
      this.$emit("deleteItem", this.actDetail);
    },
    editItem() {
      this.toggleCardModal({
        show: true,
        type: "edit",
        ...this.actDetail,
        item: this.cardDetail,
      });
    },
  },
};
</script>
<style scoped>
.btn-class {
  min-width: 0px !important;
}
</style>
