<template>
  <div>
    <div class="form-group">
      <label for="nama">Nama</label>
      <input id="nama" type="text" class="form-control" v-model="biodata.nama" />
    </div>
    <div class="form-group">
      <label for="hoby">Hoby</label>
      <input id="hoby" type="text" class="form-control" v-model="biodata.hoby" />
    </div>
    <div class="form-group">
      <label for="alamat">Alamat</label>
      <textarea id="alamat" class="form-control" v-model="biodata.alamat" cols="30" rows="10"></textarea>
    </div>
    <div class="form-group">
      <label for="website">Website</label>
      <input id="website" type="text" class="form-control" v-model="biodata.website" />
    </div>
    <div class="form-group">
      <button class="btn btn-success btn-block" @click.prevent="saveBiodata ">Save</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Create",

  data() {
    return {
      biodata: {
        nama: "",
        hoby: "",
        alamat: "",
        website: ""
      }
    };
  },
  methods: {
    ...mapActions(["addBiodata"]),
    saveBiodata() {
      this.addBiodata(this.biodata);
      this.$router.push("/crudvuex");
    }
  }
};
</script>
