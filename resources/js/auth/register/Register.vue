<template>
    <div>
        <div class="form form-group">
            <div class="form-group">
                <label for="nama" class="control-label">Name</label>
                <input
                    type="text"
                    v-model="register.name"
                    name="nama"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label for="hoby" class="control-label">Email</label>
                <input
                    type="email"
                    v-model="register.email"
                    name="email"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label for="password" class="control-label">Password</label>
                <input
                    type="password"
                    v-model="register.password"
                    name="password"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <button
                    class="btn btn-success btn-block"
                    @click.prevent="saveRegister"
                >
                    Register
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "Register",
    data() {
        return {
            register: {
                name: "",
                email: "",
                password: ""
            }
        };
    },
    computed: {},
    methods: {
        ...mapActions(["addRegister"]),
        saveRegister() {
            this.addRegister(this.register);
            this.$router.push({ path: "/" });
        }
    }
};
</script>
