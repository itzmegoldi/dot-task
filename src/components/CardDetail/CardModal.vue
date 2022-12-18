<template>
  <div>
    <v-dialog
      v-model="show"
      width="420"
      persistence
      :fullscreen="$vuetify.breakpoint.xsOnly"
      scrollable
    >
      <v-card>
        <v-card-title class="primary white--text">
          <span>{{ headingText }}</span>
          <v-spacer></v-spacer>
          <v-btn text @click="toggleCardModal({ show: false })">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text
          v-if="loading"
          class="d-flex justify-center pt-10"
          style="min-height: 50vh"
        >
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-card-text>
        <v-card-text class="pt-5" v-else>
          <v-form lazy-validation ref="cardForm">
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field
                  v-model="cardData.title"
                  @keypress="isAlphabet($event)"
                  :rules="[rules.required]"
                  label="Title"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="cardData.description"
                  maxlength="25"
                  :rules="[rules.required]"
                  label="Description"
                  outlined
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  v-model="column"
                  :items="columnList"
                  :rules="[rules.required]"
                  item-text="name"
                  item-value="value"
                  label="Select Column"
                  outlined
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn
            dark
            color="primary"
            class="text-none"
            @click="submitForm"
            :loading="formLoading"
          >
            <span>{{ btnText }}</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CardModal",
  data() {
    return {
      rules: { required: (v) => !!v || "This field is required." },
      loading: false,
      formLoading: false,
      cardData: {
        title: "",
        description: "",
      },
      column: "",
      columnList: [
        { name: "column 1", value: "cardItem1" },
        { name: "column 2", value: "cardItem2" },
        { name: "column 3", value: "cardItem3" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getShow: "card/getShow",
    }),
    show: {
      get() {
        return this.getShow;
      },
      set(value) {
        return this.toggleCardModal({ show: value });
      },
    },
    type() {
      return this.$store.state.card.cardModal.type;
    },
    item() {
      return this.$store.state.card.cardModal.item;
    },
    btnText() {
      switch (this.type) {
        case "add":
          return "Add Card";
        case "edit":
          return "Save";
        default:
          return "Add Card";
      }
    },
    headingText() {
      switch (this.type) {
        case "add":
          return "Add New Card";
        case "edit":
          return "Update Card";
        default:
          return "Add New Card";
      }
    },
  },
  watch: {
    show(value) {
      if (value) {
        this.openModal();
      } else {
        this.closeModal();
      }
    },
  },
  methods: {
    ...mapActions({
      toggleCardModal: "card/toggleCardModal",
    }),
    isAlphabet: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode == 32
      ) {
        return true;
      } else {
        evt.preventDefault();
      }
    },
    openModal() {
      if (this.type === "edit") {
        this.loading = true;
        this.cardData = {
          title: this.item.title,
          description: this.item.description,
        };
        this.column = this.$store.state.card.cardModal.column;
        setTimeout(() => {
          this.loading = false;
        }, 250);
      }
    },
    closeModal() {
      this.loading = false;
      this.formLoading = false;
      this.cardData = {
        title: "",
        description: "",
      };
      this.column = "";
      this.$refs.cardForm.reset();
    },
    submitForm() {
      if (this.$refs.cardForm.validate()) {
        this.formLoading = true;
        if (this.type === "add") {
          this.$emit("addData", { ...this.cardData, column: this.column });
        } else {
          this.$emit("editData", {
            ...this.cardData,
            curColumn: this.column,
            prevColumn: this.$store.state.card.cardModal.column,
            index: this.$store.state.card.cardModal.index,
          });
        }
        this.formLoading = false;
      }
    },
  },
  mounted() {},
};
</script>
