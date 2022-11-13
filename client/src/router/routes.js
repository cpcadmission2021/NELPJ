const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },

  // // Always leave this as last one,
  // // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }

  //--------------------------------Visitor routes---------------------------------
  {
    path: "/",
    name: "Template",
    component: () => import("../components/visitor/VisitorsTemplate.vue"),
    // component: () => import("../components/Template.vue"),
    meta: {
      visitorOnly: true,
      requiresAuth: false,
    },
    children: [
      {
        path: "",
        name: "Homepage",
        component: () => import("../components/visitor/VisitorHomepage.vue"),
      },
      {
        path: "testimonials",
        name: "Testimonials",
        component: () =>
          import("../components/visitor/VisitorTestimonials.vue"),
      },
      {
        path: "prayers",
        name: "Prayers",
        component: () => import("../components/visitor/VisitorPrayers.vue"),
      },
      {
        path: "bePartOfUs",
        name: "Be part of us",
        component: () => import("../components/visitor/BePartOfUs.vue"),
      },
      {
        path: "aboutUs",
        name: "About us",
        component: () => import("../components/AboutUs.vue"),
      },
      {
        path: "materials",
        name: "NELPJ Materials",
        component: () => import("../components/visitor/VisitorMaterials.vue"),
      },
      {
        path: "UserLogin",
        name: "UserLogin",
        component: () => import("../components/visitor/UserLogin.vue"),
      },
    ],
  }, //End of Visitor routes

  //--------------------------------Members routes---------------------------------
  {
    path: "/member",
    name: "member",
    component: () => import("../components/members/MemberTemplate.vue"),
    meta: {
      memberOnly: true,
      permission: "member",
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "Profile",
        component: () => import("../components/members/MemberProfile.vue"),
      },
      {
        path: "events",
        name: "Events",
        component: () => import("../components/members/Events.vue"),
      },
      {
        path: "activities",
        name: "Activities",
        component: () => import("../components/members/Activities.vue"),
      },
      {
        path: "aboutUs",
        name: "AboutUs",
        component: () => import("../components/AboutUs.vue"),
      },
      {
        path: "materials",
        name: "Materials",
        component: () => import("../components/members/Materials.vue"),
      },
      {
        path: "sponsorships",
        name: "Sponsorships",
        component: () => import("../components/members/Sponsorships.vue"),
      },
      {
        path: "messages",
        name: "messages",
        component: () => import("../components/members/Messages.vue"),
      },
    ],
  }, //End of member routes

  //--------------------------------Admin routes---------------------------------
  {
    path: "/admin",
    name: "home",
    component: () => import("../components/admin/AdminTemplate.vue"),
    meta: {
      adminOnly: true,
      permission: "admin",
      requiresAuth: true,
    },
    children: [
      {
        path: "/admin",
        name: "Dashboard",
        component: () => import("../components/admin/AdminDashboard.vue"),
      },
      {
        path: "events",
        name: "events",
        component: () => import("../components/admin/AdminEvents.vue"),
      },
      {
        path: "activities",
        name: "activities",
        component: () => import("../components/admin/AdminActivities.vue"),
      },
      {
        path: "fndsInfo",
        name: "foundationsInfo",
        component: () => import("../components/admin/FndsInfo.vue"),
      },
      {
        path: "materials",
        name: "materials",
        component: () => import("../components/admin/AdminMaterials.vue"),
      },
      {
        path: "sponsorships",
        name: "sponsorships",
        component: () => import("../components/admin/AdminSponsorships.vue"),
      },
      {
        path: "members",
        name: "members",
        component: () => import("../components/admin/AdminMembers.vue"),
      },
    ],
  }, //End of admin routes
  //Error 404
  {
    path: "/:catchAll(.*)*",
    component: () => import("../components/generals/ErrorNotFound.vue"),
  },
];

export default routes;
