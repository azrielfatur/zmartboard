<template>
  <div class="tw-flex tw-gap-20">
    <div class="tw-max-w-2xl tw-w-full">
      <div class="tw-text-3xl tw-font-medium tw-my-5">Alerts</div>
      <p class="tw-font-light tw-text-gray-400 tw-text-xs">
        Utilities for setting the maximum width of an element
      </p>

      <div class="tw-space-y-5">
        <div class="tw-bg-white tw-rounded">
          <div class="md:tw-p-5 tw-p-4 tw-pb-1">
            <div class="tw-font-medium">Basic</div>
            <div
              class="
                tw-bg-blue-800
                text-white
                tw-rounded tw-font-light tw-px-6 tw-py-4 tw-my-5
              "
            >
              This is a blue Alert!
            </div>
          </div>
        </div>

        <div class="tw-bg-white tw-rounded" id="#icon">
          <div class="md:tw-p-5 tw-p-4 tw-pb-1">
            <div class="tw-font-medium">Icon</div>
            <div
              class="
                tw-bg-red-600
                text-white
                tw-rounded tw-font-light tw-space-x-3 tw-px-6 tw-py-4 tw-my-5
              "
            >
              <q-icon name="warning" size="18px" />
              This is a red Alert!
            </div>
          </div>
        </div>

        <div class="tw-bg-white tw-rounded">
          <div class="md:tw-p-5 tw-p-4 tw-pb-1">
            <div class="tw-font-medium">Dismissing</div>
            <div
              v-show="visible"
              class="
                tw-flex tw-justify-between tw-relative tw-bg-yellow-500
                text-white
                tw-rounded tw-font-light tw-space-x-3 tw-px-6 tw-py-4 tw-my-5
              "
            >
              <div><strong>Warning!</strong> This is a yellow Alert!</div>
              <q-btn
                flat
                dense
                round
                @click="visible = false"
                icon="close"
                size="8px"
              />
            </div>
            <div v-show="!visible" class="md:tw-py-5">
              <q-btn
                flat
                color="indigo-8"
                @click="visible = true"
                class="full-width tw-py-3"
                >Reset</q-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md">
      <div class="tw-uppercase tw-font-light tw-text-sm tw-mt-16">
        On This Page
      </div>
      <div class="tw-mt-4">
        <p class="tw-font-light q-ma-none">Example</p>
        <p class="tw-font-light q-ma-none tw-ml-4">Basic</p>
        <p class="tw-font-light q-ma-none tw-ml-4">Icon</p>
        <p class="tw-font-light q-ma-none tw-ml-4">Dismissing</p>
      </div>
    </div>
  </div>

  <!-- <router-view /> -->
</template>

<script>
export default {
  setup() {
    return {
      visible: true,
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