<template>
<div class="tw-pb-5">
    <div class="tw-text-3xl tw-font-medium tw-my-5">Input Text</div>
    <p class="tw-font-light tw-text-gray-400 tw-text-xs">
        Utilities for setting the input an element
    </p>

    <div class="md:tw-flex tw-gap-10">
        <div class="md:tw-w-9/12 tw-space-y-5">

            <div class="tw-bg-white tw-rounded">
                <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                    <div class="tw-font-medium">Basic</div>
                    <div class="tw-my-5 tw-max-w-xs tw-space-y-5">
                        <q-input v-model="text" label="Standard" />

                        <q-input filled v-model="text" label="Filled" />

                        <q-input outlined v-model="text" label="Outlined" />

                        <q-input borderless v-model="text" label="Borderless" />
                    </div>
                </div>
            </div>

            <div class="tw-bg-white tw-rounded">
                <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                    <div class="tw-font-medium">Mini Size</div>
                    <div class="tw-my-5 tw-max-w-xs tw-space-y-5">
                        <q-input dense v-model="text" label="Standard" />

                        <q-input dense filled v-model="text" label="Filled" />

                        <q-input dense outlined v-model="text" label="Outlined" />

                        <q-input dense borderless v-model="text" label="Borderless" />
                    </div>
                </div>
            </div>
            
        </div>

        <div class="md:tw-w-3/12 md">
            <div class="tw-uppercase tw-font-light tw-text-sm">
                On This Page
            </div>
            <div class="tw-mt-4">
                <p class="tw-font-light q-ma-none">Basic</p>
                <p class="tw-font-light q-ma-none">Mini Size</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        return {
            text: ref(''),
        }
    }
}
</script>