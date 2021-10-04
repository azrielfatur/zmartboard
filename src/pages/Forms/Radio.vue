<template>
    <div class="tw-flex tw-gap-20">
        <div class="tw-max-w-2xl tw-w-full">
            <div class="tw-text-3xl tw-font-medium tw-my-5">Radio</div>
            <p class="tw-font-light tw-text-gray-400 tw-text-xs">
                Utilities for setting the radio an element
            </p>

            <div class="tw-space-y-5">
                <div class="tw-bg-white tw-rounded">
                    <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                        <div class="tw-font-medium">Basic</div>
                        <div class="tw-my-5">
                            <q-radio v-model="brand" val="apple" label="Apple" />
                            <q-radio v-model="brand" val="asus" label="Asus" />
                            <q-radio v-model="brand" val="google" label="Google" />
                            <q-radio v-model="brand" val="huawei" label="Huawei" />
                            <q-radio v-model="brand" val="lenovo" label="Lenovo" />
                            <p>Your selected is : <strong class="tw-capitalize">{{ brand }}</strong></p>
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
            brand: ref('apple'),
        }
    }
}
</script>