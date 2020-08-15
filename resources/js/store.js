import axios from "axios";

const state = {
    biodata: [],
    biodataNew: [],
    register: [],
    user: [],
    headers: [{
            text: "Nama",
            value: "name"
        },
        {
            text: "Email",
            value: "email"
        },
        {
            text: "Created_at",
            value: "created_at"
        },

    ]
};
const getters = {
    allBiodata: state => state.biodata,
    biodataNew: state => state.biodataNew,
    countBiodata: state => state.biodata.length,
    //REGISTER
    allRegister: state => state.register,
    allUser: state => state.user,
    // USER
    headers: state => state.headers,
    items: state => state.items
};
const mutations = {
    setBiodatas(state, biodata) {
        state.biodata = biodata;
    },
    setBiodataId(state, biodataNew) {
        state.biodataNew = biodataNew;
    },
    setRegister(state, register) {
        state.register.unshift(register);
    },
    setUsers(state, user) {
        state.user = user;
    },
    newBiodata(state, biodata) {
        state.biodata.unshift(biodata);
    },
    removeBiodata(state, id) {
        state.biodata = state.biodata.filter(item => item.id !== id);
    },
    updateBiodata(state, updBiodata) {
        const index = state.biodata.findIndex(
            biodata => biodata.id === updBiodata.id
        );
        if (index !== -1) {
            state.biodata.splice(index, 1, updBiodata);
        }
    }
};
const actions = {
    async fetchBiodata({
        commit
    }) {
        const response = await axios.get("/api/biodata");
        console.log(response.data);
        commit("setBiodatas", response.data);
    },
    async fetchBiodataId({
        commit
    }, biodata) {
        const response = await axios.get(`/api/biodata/${biodata}`);
        console.log(response.data);
        commit("setBiodataId", response.data);
    },
    async fetchUser({
        commit
    }) {
        const response = await axios.get("/api/users");
        console.log("Data datanya nih ", response.data);
        commit("setUsers", response.data);
    },
    async addBiodata({
        commit
    }, biodata) {
        const response = await axios.post("/api/biodata", biodata);
        console.log(response.data);
        commit("newBiodata", biodata);
    },
    async deleteBiodata({
        commit
    }, id) {
        await axios.delete(`/api/biodata/${id}`);
        commit("removeBiodata", id);
    },
    async filterBiodata({
        commit
    }, e) {
        // Get selected nuber
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );
        const response = await axios.get(`/api/biodata?limit=${limit}`);
        commit("setBiodatas", response.data);
        console.log(response.data);
    },
    async updateBiodata({
        commit
    }, updBiodata) {
        const response = await axios.put(
            `/api/biodata/${updBiodata.id}`,
            updBiodata
        );
        commit("updateBiodata", response.data);
    },
    // USERS
    async addRegister({
        commit
    }, user) {
        const response = await axios.post("/api/register", user);
        console.log(response.data);
        commit("setRegister", response.data);
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};
