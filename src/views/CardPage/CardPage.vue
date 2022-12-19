<template>
  <div>
    <div class="d-flex py-4">
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        dark
        class="text-none text-weight-bold mt-2 mr-8"
        right
        @click="toggleCardModal({ show: true, type: 'add' })"
      >
        <span>Add card</span>
      </v-btn>
    </div>
    <v-row>
      <v-col
        cols="4"
        class="card-column"
        id="box-droppable"
        @drop="drop"
        @dragover="allowDrop"
      >
        <h3 class="px-4">Column 1</h3>
        <div
          v-for="(item, i) in cardItem1"
          :key="i"
          draggable="true"
          @dragstart="drag"
          :id="`card${i}`"
        >
          <card-component
            :index="i"
            :actDetail="{ index: i, column: 'cardItem1' }"
            :cardDetail="item"
            @deleteItem="deleteItem"
          ></card-component>
        </div>
      </v-col>
      <v-col
        cols="4"
        class="card-column"
        id="box-droppable"
        @drop="drop"
        @dragover="allowDrop"
      >
        <h3 class="px-4">Column 2</h3>
        <div
          v-for="(item, i) in cardItem2"
          :key="i"
          draggable="true"
          @dragstart="drag"
          :id="`card1${i}`"
        >
          <card-component
            :index="i"
            :actDetail="{ index: i, column: 'cardItem2' }"
            :cardDetail="item"
            @deleteItem="deleteItem"
          ></card-component>
        </div>
      </v-col>
      <v-col
        cols="4"
        class="card-column"
        id="box-droppable"
        @drop="drop"
        @dragover="allowDrop"
      >
        <h3 class="px-4">Column 3</h3>
        <div
          v-for="(item, i) in cardItem3"
          :key="i"
          draggable="true"
          @dragstart="drag"
          :id="`card2${i}`"
        >
          <card-component
            v-for="(item, i) in cardItem3"
            :key="i"
            :actDetail="{ index: i, column: 'cardItem3' }"
            :cardDetail="item"
            @deleteItem="deleteItem"
          ></card-component>
        </div>
      </v-col>
    </v-row>
    <card-modal @addData="addData" @editData="editData"></card-modal>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CardPage",
  components: {
    CardComponent: () => import("@/components/CardDetail/CardComponent"),
    CardModal: () => import("@/components/CardDetail/CardModal"),
  },
  data() {
    return {
      cardItem1: [
        {
          title: "50 Shades of Grey",
          description:
            "Fifty Shades is a British-American film trilogy series based on the Fifty Shades trilogy by English author E. L. James. It is distributed by Universal Studios and stars Dakota Johnson and Jamie Dornan as the lead roles Anastasia Steele and Christian Grey,",
        },
        {
          title: "Rich Dad, Poor Dad",
          description:
            "Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence. ",
        },
      ],
      cardItem2: [
        {
          title: "50 Shades of Grey",
          description:
            "Fifty Shades is a British-American film trilogy series based on the Fifty Shades trilogy by English author E. L. James. It is distributed by Universal Studios and stars Dakota Johnson and Jamie Dornan as the lead roles Anastasia Steele and Christian Grey,",
        },
        {
          title: "Rich Dad, Poor Dad",
          description:
            "Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence. ",
        },
      ],
      cardItem3: [
        {
          title: "50 Shades of Grey",
          description:
            "Fifty Shades is a British-American film trilogy series based on the Fifty Shades trilogy by English author E. L. James. It is distributed by Universal Studios and stars Dakota Johnson and Jamie Dornan as the lead roles Anastasia Steele and Christian Grey,",
        },
        {
          title: "Rich Dad, Poor Dad",
          description:
            "Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence. ",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    ...mapActions({
      toggleCardModal: "card/toggleCardModal",
    }),
    addData(obj) {
      const { title, description, column } = obj;
      this[column].push({ title: title, description: description });
      this.toggleCardModal({ show: false });
    },
    editData(obj) {
      const { title, description, index, curColumn, prevColumn } = obj;
      if (curColumn == prevColumn) {
        this[curColumn][index].title = title;
        this[curColumn][index].description = description;
      } else {
        this[prevColumn].splice(index, 1);
        this[curColumn].push({ title: title, description: description });
      }
      this.toggleCardModal({ show: false });
    },
    deleteItem(obj) {
      const { index, column } = obj;
      this[column].splice(index, 1);
    },

    // Drag and drop methods
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      let data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    },
  },
  mounted() {},
  created() {},
  beforeDestroy() {},
};
</script>
<style scoped>
.card-column {
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
}
#draggable-container {
  width: 50%;
  min-height: 300px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
#box-droppable {
  width: 50%;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>
