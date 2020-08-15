<template>
  <div>
    <h2>CREATE</h2>

    <div class="form-group">
      <router-link to="/" class="btn btn-primary btn-xs">Back</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="form-group">
          <label for class="control-label">Name</label>
          <input type="text" v-model="companies.name" class="form-control" />
        </div>
        <div class="form-group">
          <label for class="control-label">Email</label>
          <input type="email" v-model="companies.email" class="form-control" />
        </div>
        <div class="form-group">
          <label for class="control-label">Address</label>
          <input type="text" v-model="companies.address" class="form-control" />
        </div>
        <div class="form-group">
          <label for class="control-label">Website</label>
          <input type="text" v-model="companies.website" class="form-control" />
        </div>
        <div class="form-group">
          <button class="btn btn-success btn-xs" @click.prevent="saveForm">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      companies: {
        name: "",
        email: "",
        address: "",
        website: ""
      },
      loading: false
    };
  },
  methods: {
    saveForm() {
      this.loading = false;
      let newCompany = this.companies;
      axios
        .post("/api/crud", newCompany)
        .then(response => {
          this.$router.push({ path: "/" });
        })
        .catch(error => {
          alert("Count not create company!");
        });
    }
  }
};
</script>
