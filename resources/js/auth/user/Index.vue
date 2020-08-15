<template>
  <v-app>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-data-table :headers="headers" :items="allUser" class="elevation-1">
            <template v-slot:items="allUser">
              <td class="text-xs-right">{{ allUser.nama }}</td>
              <td class="text-xs-right">{{ allUser.email }}</td>
              <td class="text-xs-right">{{ allUser.created_at | frmNow }}</td>
            </template>
            <template v-slot:no-data>No data available ...</template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import moment from "moment";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Users",

  computed: {
    ...mapGetters(["allUser", "headers", "items"])
  },

  created() {
    this.initialize();
  },

  methods: {
    ...mapActions(["fetchUser"]),
    initialize() {
      this.fetchUser();
    },

    deleteItem(item) {
      const index = this.allUser.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.allUser.splice(index, 1);
    }
  }
};
</script>
