<template>
<div class="tw-pb-5">
    <div class="tw-text-3xl tw-font-medium tw-my-5">Radio</div>
    <p class="tw-font-light tw-text-gray-400 tw-text-xs">
        Utilities for setting the button an element
    </p>
    
    <div class="md:tw-flex tw-gap-10">
        <div class="md:tw-w-9/12 tw-space-y-5">
            <div class="tw-space-y-5">
                <div class="tw-bg-white tw-rounded">
                    <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                        <div class="tw-font-medium">Basic</div>
                        <div class="tw-my-5 q-gutter-sm">
                            <q-radio dense v-model="brand" val="apple" label="Apple" />
                            <q-radio dense v-model="brand" val="asus" label="Asus" />
                            <q-radio dense v-model="brand" val="google" label="Google" />
                            <q-radio dense v-model="brand" val="huawei" label="Huawei" />
                            <q-radio dense v-model="brand" val="lenovo" label="Lenovo" />
                        </div>
                            <p>Your selected is : <strong class="tw-capitalize">{{ brand }}</strong></p>
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