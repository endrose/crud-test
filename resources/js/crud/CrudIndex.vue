<template>
  <div>
    <h1>Crud Index</h1>
    <router-link :to="{name:'createCrud'}" class="btn btn-success btn-xs">Create CRUD</router-link>
    <div class="mt-2 panel panel-default">
      <div class="panel-heading"></div>
      <div class="panel-body">
        <table v-if="loading" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(company, index) in companies" :key="'company'+index">
              <td>{{ company.name }}</td>
              <td>{{ company.email }}</td>
              <td>{{ company.address }}</td>
              <td>{{ company.website }}</td>
              <td>
                <router-link
                  :to="{name:'editCrud', params:{id:company.id}}"
                  class="btn btn-primary btn-xs"
                >Edit</router-link>
                <a
                  @click.prevent="deleteForm(company.id,index)"
                  class="btn btn-danger btn-xs"
                >Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>Loading ...</div>
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
  created() {
    this.loading = false;
    axios
      .get("/api/crud")
      .then(response => {
        this.companies = response.data;
        console.log(this.companies);
        this.loading = true;
      })
      .catch(function(error) {
        alert(`Could not load company ${error.response.data.errors}`);
      });
  },
  methods: {
    deleteForm(id, index) {
      if (confirm("Do you want really delete it ?")) {
        axios
          .delete("/api/crud/" + id)
          .then(response => {
            this.companies.splice(index, 1);
          })
          .catch(error => {
            alert(`Could not delete ${error.response.data.errors}`);
          });
        console.log(id, index);
      }
    }
  }
};
</script>

<style>
</style>
