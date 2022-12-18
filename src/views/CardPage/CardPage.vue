<template>
  <div>
    <v-row>
      <v-col cols="4">
        <div class="card-column">
          <card-component
            v-for="(item, i) in cardItem1"
            v-bind:keys="item.id"
            :cardDetail="item"
          ></card-component>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="card-column"></div>
      </v-col>
      <v-col cols="4" class="card-column">
        <div class="card-column"></div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "CardPage",
  components: {
    CardComponent: () => import("@/components/CardDetail/CardComponent"),
  },
  data() {
    return {
      cardItem1: [
        {
          id: 1,
          title: "50 Shades of Grey",
          description:
            "Fifty Shades is a British-American film trilogy series based on the Fifty Shades trilogy by English author E. L. James. It is distributed by Universal Studios and stars Dakota Johnson and Jamie Dornan as the lead roles Anastasia Steele and Christian Grey,",
        },
        {
          id: 1,
          title: "50 Shades of Darker",
          description:
            "Fifty Shades is a British-American film trilogy series based on the Fifty Shades trilogy by English author E. L. James. It is distributed by Universal Studios and stars Dakota Johnson and Jamie Dornan as the lead roles Anastasia Steele and Christian Grey,",
        },
        {
          id: 1,
          title: "Rich Dad, Poor Dad",
          description:
            "Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence. ",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {},
  created() {},
  beforeDestroy() {},
};
</script>
<style scoped>
.card-column {
  max-height: 100vh;
  min-height: 32.5vh;
  overflow-y: auto;
}
</style>
