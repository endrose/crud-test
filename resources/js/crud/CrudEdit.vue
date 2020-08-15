<template>
  <div>
    <h2>EDIT</h2>
    <div class="form-group">
      <router-link to="/" class="btn btn-primary btn-xs">Back</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8 col">
        <div class="form-group">
          <label for class="control-label">Name</label>
          <input type="text" v-model="companies.name" class="form-control form-group" />
        </div>
        <div class="form-group">
          <label for class="control-label">Email</label>
          <input type="email" v-model="companies.email" class="form-control form-group" />
        </div>
        <div class="form-group">
          <label for class="control-label">Address</label>
          <input type="text" v-model="companies.address" class="form-control form-group" />
        </div>
        <div class="form-group">
          <label for class="control-label">Website</label>
          <input type="text" v-model="companies.website" class="form-control form-group" />
        </div>
        <div class="form-group">
          <button class="btn btn-success btn-xs" @click.prevent="editForm">Update</button>
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
  mounted() {
    axios.get("/api/crud/" + this.$route.params.id).then(response => {
      this.companies = response.data;
    });
  },
  methods: {
    editForm() {
      this.loading = false;
      let newCompany = this.companies;
      let id = this.$route.params.id;
      axios
        .patch("/api/crud/" + id, newCompany)
        .then(response => {
          this.$router.replace({ path: "/" });
        })
        .catch(error => {
          alert("Count not create company!");
        });
    }
  }
};
</script>
