<template>
  <div>
    <h2>Edit Biodata</h2>
    <div class="form form-group">
      <router-link to="/biodata">
        <i class="fas fa-undo"></i>
      </router-link>
      <div class="form-group">
        <label for="nama" class="control-label">Nama</label>
        <input id="nama" type="text" name="nama" class="form-control" v-model="biodata.nama" />
        <div class="text-danger" v-if="errors && errors.nama">
          <span class="pl-2">{{ errors.nama[0] }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="hoby" class="control-label">Hoby</label>
        <input id="hoby" type="text" class="form-control" v-model="biodata.hoby" />
        <div class="text-danger" v-if="errors && errors.hoby">
          <span class="pl-2">{{ errors.hoby[0] }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="alamat" class="control-label">Alamat</label>
        <textarea id="alamat" cols="30" rows="10" class="form-control" v-model="biodata.alamat"></textarea>
        <div class="text-danger" v-if="errors && errors.alamat">
          <span class="pl-2">{{ errors.alamat[0] }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="website" class="control-label">Website</label>
        <input id="website" type="text" class="form-control" v-model="biodata.website" />
        <div class="text-danger" v-if="errors && errors.website">
          <span class="pl-2">{{ errors.website[0] }}</span>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block" @click.prevent="updateBiodata">Update</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      biodata: [],
      errors: {}
    };
  },
  mounted() {
    let id = this.$route.params.id;
    axios.get("/api/biodata/" + id).then(resp => {
      this.biodata = resp.data;
    });
  },

  methods: {
    updateBiodata() {
      this.errors;
      axios
        .put("/api/biodata/" + this.$route.params.id, this.biodata)
        .then(response => {
          this.$router.replace({ path: "/biodata" });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
