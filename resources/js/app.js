require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Vuex from "vuex";
import Moment from "moment";

// import IndexCrud from "./crud/CrudIndex";
// import CreateCrud from "./crud/CrudCreate";
// import EditCrud from "./crud/CrudEdit";
// import IndexCompany from "./company/Index";
// import CreateCompany from "./company/Create";
// import EditCompany from "./company/Edit";
// import IndexBiodata from "./biodata/Index";
// import CreateBiodata from "./biodata/Create";
// import EditBiodata from "./biodata/Edit";
import router from "./index";
import storeDefination from "./store";
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Vuex);
// Moments
Vue.filter("frmNow", value => Moment(value).fromNow());



// const routes = [{
//         path: "/crud",
//         components: {
//             indexCrud: IndexCrud
//         }
//     },
//     {
//         path: "/crud/create",
//         component: CreateCrud,
//         name: "createCrud"
//     },
//     {
//         path: "/crud/edit/:id/",
//         component: EditCrud,
//         name: "editCrud"
//     },
//     {
//         path: "/company",
//         components: {
//             indexCompany: IndexCompany
//         }
//     },
//     {
//         path: "/company/create",
//         component: CreateCompany,
//         name: "createCompany"
//     },
//     {
//         path: "/company/edit/:id/",
//         component: EditCompany,
//         name: "editCompany"
//     },
//     {
//         path: "/biodata",
//         components: {
//             indexBiodata: IndexBiodata
//         }
//     },
//     {
//         path: "/biodata/create",
//         component: CreateBiodata,
//         name: "createBiodata"
//     },
//     {
//         path: '/biodata/edit/:id/',
//         component: EditBiodata,
//         name: 'editBiodata'
//     }

// ];

// const router = new VueRouter({
//     routes,
//     mode: "history"
// });

const store = new Vuex.Store(storeDefination);

const app = new Vue({
    el: "#app",
    router,
    store,
    vuetify: new Vuetify(),

});
