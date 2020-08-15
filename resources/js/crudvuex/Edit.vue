<template>
  <div>
    <div class="form">
      <router-link :to="{path:'/crudvuex'}">
        <i class="fas fa-undo-alt"></i>
      </router-link>
      <div class="form-group">
        <label for="nama">Nama</label>
        <input id="nama" type="text" class="form-control" v-model="biodataNew.nama" />
      </div>
      <div class="form-group">
        <label for="hoby">Hoby</label>
        <input id="hoby" type="text" class="form-control" v-model="biodataNew.hoby" />
      </div>
      <div class="form-group">
        <label for="alamat">Alamat</label>
        <textarea id="alamat" class="form-control" v-model="biodataNew.alamat" cols="30" rows="10"></textarea>
      </div>
      <div class="form-group">
        <label for="website">Website</label>
        <input id="website" type="text" class="form-control" v-model="biodataNew.website" />
      </div>
      <div class="form-group">
        <button class="btn btn-info btn-block" @click.prevent="onUpdate(biodataNew)">Update</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Edit",
  methods: {
    ...mapActions(["fetchBiodata", "fetchBiodataId", "updateBiodata"]),
    onUpdate(biodataNew) {
      const upBiodata = {
        id: biodataNew.id,
        nama: biodataNew.nama,
        hoby: biodataNew.hoby,
        alamat: biodataNew.alamat,
        website: biodataNew.website
      };
      this.updateBiodata(upBiodata);
      this.$router.replace({ path: "/crudvuex" });
    }
  },
  computed: {
    ...mapGetters(["allBiodata", "biodataNew"])
  },
  created() {
    let id = this.$route.params.id;

    this.fetchBiodataId(id);
  }
};
</script>
