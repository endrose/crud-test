<template>
  <div>
    <div class="panel panel-default">
      <div class="panel panel-heading"></div>
      <div class="panel pabel-body">
        <a>
          <router-link :to="{name:'createCompany'}" class="btn btn-success btn-xs">Create CRUD</router-link>
        </a>

        <table v-if="loading" class="mt-2 table table-striped table-borderless table-responsive">
          <thead class="table table-info">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(company, index) in companies" :key="'company' + index">
              <td>{{ company.name }}</td>
              <td>{{ company.email }}</td>
              <td>{{ company.address }}</td>
              <td>{{ company.website }}</td>
              <td>
                <router-link
                  :to="{ name:'editCompany', params:{id:company.id}}"
                  class="btn btn-secondary btn-xs"
                >Edit</router-link>
                <a
                  @click.prevent="deleteCompany(company.id , index)"
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
    this.getCompany();
  },

  methods: {
    getCompany() {
      this.loading = false;
      axios
        .get("/api/company")
        .then(resp => {
          this.companies = resp.data;
          this.loading = true;
        })
        .catch(error => {
          alert(error.resp.data.errors);
        });
    },
    deleteCompany(id, index) {
      if (confirm(`Do you want really delete this ${id}`)) {
        axios
          .delete("/api/company/" + id)
          .then(resp => {
            this.companies.splice(index, 1);
          })
          .catch(error => {
            alert(error.data.errors);
          });
      } else {
        alert("You not delete this data!");
      }
    }
  }
};
</script>
