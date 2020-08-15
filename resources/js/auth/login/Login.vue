<template>
  <div>
    <div class="form mt-2">
      <slot>
        <div class="form-group row">
          <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
          <div class="col-md-6">
            <input type="text" v-model="login.email" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
          <div class="col-md-6">
            <input type="password" v-model="login.password" class="form-control" />
          </div>
        </div>
        <div class="form-group row mb-0">
          <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-primary" @click.prevent="onLogin">Login</button>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {}
    };
  },
  methods: {
    onLogin() {
      alert("test Tombol " + Object.values(this.login));
    }
  }
};
</script>
