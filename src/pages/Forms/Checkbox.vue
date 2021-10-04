<template>
    <div class="tw-flex tw-gap-20">
        <div class="tw-max-w-2xl tw-w-full">
            <div class="tw-text-3xl tw-font-medium tw-my-5">Checkbox</div>
            <p class="tw-font-light tw-text-gray-400 tw-text-xs">
                Utilities for setting the checkbox an element
            </p>

            <div class="tw-space-y-5">
                <div class="tw-bg-white tw-rounded">
                    <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                        <div class="tw-font-medium">Basic</div>
                        <div class="tw-my-5">
                            <q-checkbox dense v-model="brand" label="Do you agree with the terms and Codition?" />
                        </div>
                            <p>Your selected is : <strong class="tw-capitalize">{{ brand ? 'Yes' : 'No' }}</strong></p>
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
            brand: ref(false),
        }
    }
}
</script>