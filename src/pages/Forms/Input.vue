<template>
    <div class="tw-flex tw-gap-20">
        <div class="tw-max-w-2xl tw-w-full">
            <div class="tw-text-3xl tw-font-medium tw-my-5">Input Text</div>
            <p class="tw-font-light tw-text-gray-400 tw-text-xs">
                Utilities for setting the input an element
            </p>

            <div class="tw-space-y-5">
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