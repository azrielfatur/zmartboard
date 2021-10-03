<template>
    <div class="tw-flex tw-gap-20">
        <div class="tw-max-w-2xl tw-w-full">
            <div class="tw-text-3xl tw-font-medium tw-my-5">Selects</div>
            <p class="tw-font-light tw-text-gray-400 tw-text-xs">
                Utilities for setting the button an element
            </p>

            <div class="tw-space-y-5">
                <div class="tw-bg-white tw-rounded">
                    <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                        <div class="tw-font-medium">Basic</div>
                        <div class="tw-my-5 tw-max-w-xs tw-space-y-5">
                            <q-select v-model="selected" :options="options" label="Standard" />
                            <q-select filled v-model="selected" :options="options" label="Filled" />
                            <q-select outlined v-model="selected" :options="options" label="Outlined" />
                            <q-select borderless v-model="selected" :options="options" label="Borderless" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

const options = ['Apple', 'Asus', 'Google', 'Huawei', 'Lenovo']

export default {
    setup() {
        return {
            selected: ref(''),
            options: options
        }
    }
}
</script>