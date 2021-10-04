<template>
    <div class="tw-flex tw-gap-20">
        <div class="tw-max-w-2xl tw-w-full">
            <div class="tw-text-3xl tw-font-medium tw-my-5">Modal</div>
            <p class="tw-font-light tw-text-gray-400 tw-text-xs">
                Utilities for setting the button an element
            </p>

            <div class="tw-bg-white tw-rounded">
                <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                    <div class="tw-font-medium">Basic</div>
                    <div class="tw-my-5 tw-space-x-2">
                        <q-btn color="primary" @click="alert">Alert</q-btn>
                        <q-btn color="primary" @click="confirm">Confirm</q-btn>
                        <q-btn color="primary" @click="input">Input</q-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup(){
        return {
            
        }
    },
    methods: {
        alert() {
            this.$q.dialog({
                title: 'Alert',
                message: 'Some Message'
            })
        },
        confirm() {
            this.$q.dialog({
                title: 'Confirm',
                message: 'Are you sure?',
                cancel: true
            })
        },
        input() {
            this.$q.dialog({
                title: 'Input',
                message: 'What is your name?',
                cancel: true,
                prompt: {
                    model: '',
                    type: 'text'
                },
            })
        }
    }
}
</script>