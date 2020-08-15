<template>
  <div>
    <h2>Edit Biodata</h2>
    <div class="form form-group">
      <router-link to="/biodata">
        <i class="fas fa-undo"></i>
      </router-link>

      <div class="form-group">
        <label for="nama" class="control-label">Nama</label>
        <input type="text" id="nama" name="nama" class="form-control" v-model="biodata.nama" />
        <div class="text-danger" v-if="errors && errors.nama">
          <span>{{ errors.nama[0] }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="hoby" class="control-label">Hoby</label>
        <input type="text" id="hoby" name="hoby" class="form-control" v-model="biodata.hoby" />
        <div class="text-danger" v-if="errors && errors.hoby">
          <span>{{ errors.hoby[0] }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="alamat" class="control-label">Alamat</label>
        <textarea id="alamat" cols="30" rows="10" class="form-control" v-model="biodata.alamat"></textarea>
        <div class="text-danger" v-if="errors && errors.alamat">
          <span>{{ errors.alamat[0] }}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="website" class="control-label">Website</label>
        <input id="website" type="text" class="form-control" v-model="biodata.website" />
        <div class="text-danger" v-if="errors && errors.website">
          <span>{{ errors.website[0] }}</span>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-success btn-block" @click.prevent="saveBiodata">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      biodata: {},
      errors: []
    };
  },

  methods: {
    saveBiodata() {
      this.errors;
      axios
        .post("/api/biodata", this.biodata)
        .then(response => {
          this.biodata = response.data;
          this.$router.push("/biodata");
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            console.log(error.response.data.errors);
          }
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
