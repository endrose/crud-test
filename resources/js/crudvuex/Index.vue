<template>
  <div>
    <router-link :to="{ name: 'createVuex' }" class="btn btn-success">Add Biodata</router-link>
    <table class="table table-striped table-responsive">
      <thead>
        <th>Nama</th>
        <th>Hoby</th>
        <th>Alamat</th>
        <th>Website</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="(data, index) in allBiodata" :key="'biodata' + index">
          <td>{{ data.nama }}</td>
          <td>{{ data.hoby }}</td>
          <td>{{ data.alamat }}</td>
          <td>{{ data.website }}</td>
          <td>
            <a class="btn btn-danger" @click.prevent="removeBiodata(data.id)">
              <i class="fas fa-trash-alt"></i> Delete
            </a>
            <router-link :to="{ name: 'editVuex', params: { id: data.id } }" class="btn btn-info">
              <i class="fas fa-edit"></i> Edit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Total :
      <span class="text-danger">{{ biodataFromGetters }}</span>
    </p>Filter Biodata :
    <select @change="filterBiodata($event)">
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Index",
  computed: {
    ...mapGetters(["allBiodata"]),
    biodataFromGetters() {
      return this.$store.getters.countBiodata;
    }
  },
  methods: {
    ...mapActions([
      "fetchBiodata",
      "deleteBiodata",
      "addBiodata",
      "filterBiodata"
    ]),
    filterBiodataGet() {
      this.filterBiodata;
    },
    removeBiodata(id) {
      if (confirm("Do you want really delete it ?")) {
        this.deleteBiodata(id);
      } else {
        alert("You not delete this data!");
      }
    }
  },
  created() {
    this.fetchBiodata();
  }
};
</script>
<style scoped>
.load {
  text-align: center;
}
</style>
