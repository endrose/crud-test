<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <router-link :to="{ name: 'createBiodata' }" class="mt-2 mb-2 btn btn-success btn-xs">
              <i class="far fa-plus-square"></i> Create Biodata
            </router-link>
            <table class="table table-responsive">
              <thead>
                <th>Nama</th>
                <th>Hoby</th>
                <th>Alamat</th>
                <th>Website</th>
                <th>CreateAt</th>
                <th>Action</th>
              </thead>
              <tbody v-for="(biodata, index) in biodatas" :key="'biodata' + index">
                <tr>
                  <td>{{ biodata.nama }}</td>
                  <td>{{ biodata.hoby }}</td>
                  <td>{{ biodata.alamat }}</td>
                  <td>{{ biodata.website }}</td>
                  <td>{{ biodata.created_at | fromNow }}</td>
                  <td>
                    <a
                      @click.prevent="deleteBiodata(biodata.id, index)"
                      class="btn btn-danger btn-xs"
                    >
                      <i class="fas fa-trash">Trash</i>
                    </a>
                    <router-link
                      class="btn btn-info btn-xs"
                      :to="{name:'editBiodata', params:{id:biodata.id}}"
                    >
                      <i class="fas fa-edit">Edit</i>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Moment from "moment";
export default {
  data() {
    return {
      biodatas: []
    };
  },
  methods: {
    deleteBiodata(id, index) {
      if (confirm("Do you really want delete!")) {
        axios
          .delete("/api/biodata/" + id)
          .then(resp => {
            this.biodatas.splice(index, 1);
          })
          .catch(error => {
            error.resp.data.errors;
          });
      }
    }
  },
  mounted() {
    axios.get("/api/biodata").then(resp => {
      this.biodatas = resp.data;

      console.log(this.biodatas);
    });
  }
};
</script>
