<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading"></div>
      <div class="panel-body">
        <div class="col-md-12">
          <div class="form-group">
            <label for="name" class="control-label">Name</label>
            <input type="text" class="form-control" v-model="companies.name" />
          </div>
          <div class="form-group">
            <label for="email" class="control-label">Email</label>
            <input type="email" class="form-control" v-model="companies.email" />
          </div>
          <div class="form-group">
            <label for="address" class="control-label">Address</label>
            <textarea class="form-control" cols="30" rows="10" v-model="companies.address"></textarea>
          </div>
          <div class="form-group">
            <label for="website" class="control-label">Website</label>
            <input type="text" class="form-control" v-model="companies.website" />
          </div>
          <div class="form-group">
            <button class="btn btn-success btn-xs" @click="updateForm">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      companies: []
    };
  },
  mounted() {
    axios.get("/api/company/" + this.$route.params.id).then(resp => {
      this.companies = resp.data;
    });
  },
  methods: {
    updateForm() {
      axios
        .patch("/api/company/" + this.$route.params.id, this.companies)
        .then(res => {
          this.$router.replace({ path: "/company" });
        })
        .catch(err => {
          alert(err.data.response.errors);
        });
    }
  }
};
</script>
