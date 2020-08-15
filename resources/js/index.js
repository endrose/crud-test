import VueRouter from "vue-router";
import IndexCrud from "./crud/CrudIndex";
import CreateCrud from "./crud/CrudCreate";
import EditCrud from "./crud/CrudEdit";
import IndexCompany from "./company/Index";
import CreateCompany from "./company/Create";
import EditCompany from "./company/Edit";
import IndexBiodata from "./biodata/Index";
import CreateBiodata from "./biodata/Create";
import EditBiodata from "./biodata/Edit";
import CrudVuex from "./crudvuex/Index";
import CreateVuex from "./crudvuex/Create";
import EditVuex from "./crudvuex/Edit";
import IndexRegister from "./auth/register/Register";
import IndexLogin from "./auth/login/Login";
import IndexUsers from "./auth/user/Index";

const routes = [{
        path: "/crud",
        components: {
            indexCrud: IndexCrud
        }
    },
    {
        path: "/crud/create",
        component: CreateCrud,
        name: "createCrud"
    },
    {
        path: "/crud/edit/:id/",
        component: EditCrud,
        name: "editCrud"
    },
    {
        path: "/company",
        components: {
            indexCompany: IndexCompany
        }
    },
    {
        path: "/company/create",
        component: CreateCompany,
        name: "createCompany"
    },
    {
        path: "/company/edit/:id/",
        component: EditCompany,
        name: "editCompany"
    },
    {
        path: "/biodata",
        components: {
            indexBiodata: IndexBiodata
        }
    },
    {
        path: "/biodata/create",
        component: CreateBiodata,
        name: "createBiodata"
    },
    {
        path: "/biodata/edit/:id/",
        component: EditBiodata,
        name: "editBiodata"
    },
    {
        path: "/crudvuex",
        components: {
            crudVuex: CrudVuex
        }
    }, {
        path: '/crudvuex/create',
        component: CreateVuex,
        name: 'createVuex'
    }, {
        path: '/crudvuex/edit/:id/',
        component: EditVuex,
        name: 'editVuex'
    },
    {
        path: "/register",
        components: {
            indexRegister: IndexRegister
        }
    },
    {
        path: '/login',
        components: {
            indexLogin: IndexLogin
        }
    },
    {
        path: '/users',
        components: {
            indexUsers: IndexUsers
        }
    }
];

const router = new VueRouter({
    routes,
    mode: "history",

});

export default router;
