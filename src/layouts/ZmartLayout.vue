<template>
  <q-layout view="lHh LpR lFf" style="background-color: #f1f1f1">
    <q-header class="tw-bg-white tw-text-blue-800">
      <q-toolbar class="tw-my-3 tw-px-5 justify-between">
        <div class="tw-flex">
          <q-btn
            dense
            flat
            icon="menu"
            @click="toggleLeftDrawer"
            class="tw-bg-white tw-p-2"
          />
          <q-input
            dense
            borderless
            class="
              md
              tw-bg-white tw-text-black tw-text-xs tw-px-5 tw-mx-5 tw-rounded
            "
            placeholder="Search something..."
          >
            <template v-slot:append>
              <q-icon name="search" class="tw-text-blue-800" />
            </template>
          </q-input>
        </div>

        <div class="tw-space-x-2 flex">
          <q-btn dense flat icon="o_notifications" class="tw-bg-white tw-p-2">
            <q-menu class="no-shadow" anchor="bottom right" self="top right">
              <q-list bordered separator style="min-width: 150px">
                
                <q-item clickable v-ripple class="tw-py-3">
                  <q-item-section avatar>
                    <q-icon color="negative" text-color="white" name="gpp_bad" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label><strong>Your account was Suspended!</strong></q-item-label>
                    <q-item-label caption>October 2, 2021</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="tw-py-3">
                  <q-item-section avatar>
                    <q-icon color="primary" text-color="white" name="folder" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label><strong>File was an uploaded successfully!</strong></q-item-label>
                    <q-item-label caption>July 27, 2020</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-menu>
          </q-btn>

          <div class="tw-flex tw-items-center">
            <q-btn dense flat class="tw-bg-white tw-py-2 tw-px-3 tw-font-bold md:tw-hidden">AF</q-btn>
            <q-btn flat no-caps class="tw-flex tw-flex-col md">
              <div class="tw-mr-3 ">Azriel Faturrachman</div>
              <q-icon name="expand_more" size="18px"/>
            </q-btn>

            <q-menu anchor="bottom right" self="top right">
              <q-list flat style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>
          
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :width="260">
      <div class="tw-mx-4 tw-font-light">
        <div class="tw-uppercase text-center tw-text-xl tw-my-10">
          <span class="tw-font-bold">Smart</span> Board
        </div>
        <q-list class="tw-space-y-2 text-indigo-10 tw-text-sm">
          <!-- <BasicLink v-for="basic in link.basic" :key="basic" v-bind="basic" />     
          <ExpansionLink v-for="expan in link.expansion" :key="expan.title" v-bind="expan" /> -->

          <q-item clickable to="/" class="text-indigo-10">
            <div class="tw-flex tw-items-center tw-gap-4">
              <q-icon avatar name="o_home" size="1.6rem" />
              <q-item-label class="tw-no-underline">Dashboard</q-item-label>
            </div>
          </q-item>

          <q-expansion-item icon="o_dashboard" label="Components">
            <q-list class="tw-mx-4">
              <ul class="tw-list-none tw-space-y-3 tw-text-xs">
                <li>
                  <router-link to="/alert" class="tw-no-underline">Alert</router-link>
                </li>
                <li>
                  <router-link to="/button" class="tw-no-underline">Button</router-link>
                </li>
              </ul>
            </q-list>
          </q-expansion-item>

          <q-expansion-item icon="o_feed" label="Forms">
            <q-list class="tw-mx-4">
              <ul class="tw-list-none tw-space-y-3 tw-text-xs">
                <li>
                  <router-link to="/forms/input" class="tw-no-underline">Input</router-link>
                </li>
                <li>
                  <router-link to="/forms/select" class="tw-no-underline">Select</router-link>
                </li>
                <li>
                  <router-link to="/forms/radio" class="tw-no-underline">Radio</router-link>
                </li>
                <li>
                  <router-link to="/forms/checkbox" class="tw-no-underline">Checkbox</router-link>
                </li>
                <li>
                  <router-link to="/forms/form" class="tw-no-underline">Form</router-link>
                </li>
              </ul>
            </q-list>
          </q-expansion-item>

          <q-item clickable to="/tables" class="text-indigo-10">
            <div class="tw-flex tw-items-center tw-gap-4">
              <q-icon avatar name="o_table_view" size="1.6rem" />
              <q-item-label class="tw-no-underline">Tables</q-item-label>
            </div>
          </q-item>

          <!-- <q-item clickable>
            <div class="tw-flex tw-items-center tw-gap-4">
              <q-icon avatar name="pie_chart" size="1.6rem" />
              <q-item-label>Charts</q-item-label>
            </div>
          </q-item>

          <q-item clickable to="/auth" class="text-indigo-10">
            <div class="tw-flex tw-items-center tw-gap-4">
              <q-icon avatar name="o_manage_accounts" size="1.6rem" />
              <q-item-label class="tw-text-indigo-800 tw-no-underline">Auth</q-item-label>
            </div>
          </q-item> -->

        </q-list>
      </div>
    </q-drawer>

    <q-page-container class="tw-mx-5">
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

const linkMenus = [
  {
    basic: [
      {
        title: 'Dashboard',
        icon: 'home',
        link: '/dashboard',
        size: '1.6rem'
      },
    ],
    expansion: [
      {
        title: 'Alert',
        link: '/alert'
      }
    ]
  }
]

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
    links: linkMenus,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
.tag {
  color: #e879f9;
}
.q-item__section--avatar {
  min-width: 0px;
}

.q-item__section--side {
  color: none;
  font-size: 8px !important;
}
</style>