<template>
<div class="tw-pb-5">
    <div class="tw-text-3xl tw-font-medium tw-my-5">Forms</div>
    <p class="tw-font-light tw-text-gray-400 tw-text-xs">
        Utilities for setting the form an element
    </p>

    <div class="md:tw-flex tw-gap-10">
        <div class="md:tw-w-9/12 tw-space-y-5">

            <div class="tw-space-y-5 tw-my-5">
                <div class="tw-bg-white tw-rounded">
                    <div class="tw-p-5 tw-pb-1">
                        <div class="tw-font-medium">Basic</div>
                        
                        <q-form @submit="onSubmit">
                            <div class="tw-my-5 md:tw-grid md:tw-grid-cols-2 tw-gap-5">
                                <q-input
                                    filled
                                    v-model="fullname" label="Fullname *"
                                    :rules="[
                                        val => val && val.length > 0 || 'Please type Your fullname',
                                        val => val.length <= 24 || 'Please use maximum 24 characters'
                                    ]"
                                />

                                <q-input
                                    filled
                                    type="number" v-model="age" label="Your Age *"
                                    :rules="[
                                        val => val !== null && val !== null || 'Please type Your age',
                                        val => val > 0 && val < 100 || 'Please type Your real age'
                                    ]"
                                />
                            </div>
                            <q-toggle v-model="toggle" label="I accept the license and terms" />
                            <div class="tw-mt-5 tw-mb-5">
                                <q-btn type="submit" color="primary">Submit</q-btn>
                            </div>
                        </q-form>

                    </div>
                </div>

                <div class="tw-bg-white tw-rounded">
                    <div class="tw-p-5 tw-pb-1">
                        <div class="tw-font-medium">Detail Informations</div>
                        
                        <q-form>
                            <div class="tw-my-5 md:tw-grid md:tw-grid-cols-2 tw-gap-x-5">
                                <q-input
                                    v-model="firstname" label="First Name"
                                    :rules="[
                                        val => val && val.length > 0 || 'Please type Your firstname',
                                        val => val.length <= 24 || 'Please use maximum 24 characters'
                                    ]"
                                />

                                <q-input
                                    v-model="lastname" label="Last Name"
                                    :rules="[
                                        val => val && val.length > 0 || 'Please type Your lastname',
                                        val => val.length <= 24 || 'Please use maximum 24 characters'
                                    ]"
                                />

                                <q-input
                                    v-model="username" label="Username"
                                    :rules="[
                                        val => val && val.length > 0 || 'Please type Your username',
                                        val => val.length <= 24 || 'Please use maximum 24 characters'
                                    ]"
                                />

                                <q-input
                                    v-model="email" label="Email"
                                    :rules="[
                                        val => val && val.length > 0 || 'Please type Your email',
                                        val => val.length <= 24 || 'Please use maximum 24 characters'
                                    ]"
                                />

                                <q-select v-model="country" :options="countryOptions" label="Country" />

                                <div class="tw-grid tw-grid-cols-2 tw-gap-x-5 tw-mb-5">
                                    <q-select v-model="state" :options="stateOptions" label="State" />
                                    <q-select v-model="city" :options="cityOptions" label="City" />
                                </div>

                                <q-input
                                    v-model="phone_number" label="Phone Number"
                                    :rules="[
                                        val => val && val.length > 0 || 'Please type Your phone number',
                                        val => val.length <= 14 || 'Please use maximum 24 characters'
                                    ]"
                                />

                                <q-input
                                    v-model="code" label="Referal Code"
                                />

                            </div>
                            <div class="flex justify-between tw-mt-10 tw-mb-5">
                                <q-btn flat dense color="secondary" class="tw-text-xs">Reset all</q-btn>
                                <q-btn type="submit" color="primary">Submit</q-btn>
                            </div>
                        </q-form>

                    </div>
                </div>

                <div class="tw-bg-white tw-rounded">
                    <div class="tw-p-5 tw-pb-1">
                        <div class="tw-font-medium">Checkout</div>

                        <q-form>
                            <div class="tw-my-5">
                                <q-select outlined v-model="payment" :options="paymentOptions" label="Select Payment" />

                                <div class="md:tw-grid md:tw-grid-cols-2 tw-my-3 q-gutter-sm tw-gap-x-5 tw-gap-y-3">
                                    <q-input outlined v-model="card_name" label="Card Name" />

                                    <q-input outlined v-model="card_number" label="Card Number" mask="#### #### #### ####" fill-mask="_">
                                        <template v-slot:prepend>
                                            <q-icon name="payment" />
                                        </template>
                                    </q-input>

                                    <q-input
                                        outlined
                                        v-model="date"
                                        label="Date"
                                        mask="## /##"
                                        fill-mask
                                    />
                                    <q-input
                                        type="password"
                                        outlined
                                        v-model="cvv"
                                        label="Cvv"
                                        fill-mask
                                    />
                                </div>

                                <div class="tw-mt-5">
                                    <q-btn type="submit" color="primary" class="full-width">Add Payment</q-btn>
                                </div>
                            </div>
                        </q-form>
                        
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
                <p class="tw-font-light q-ma-none">Detail Informations</p>
                <p class="tw-font-light q-ma-none">Checkout</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
const countryOptions = ['Indonesia', 'Malaysia', 'Singapore', 'Thailand']
const stateOptions = ['Jawa Barat', 'Papua', 'DKI Jakarta', 'Banten']
const cityOptions = ['Bekasi', 'Sorong', 'Jakarta', 'Tanggerang']

const paymentOptions = ['Bank Card', 'Visa', 'PayPal' ,'Google Pay', 'Apple Pay']
export default {
    setup() {
        return {
            countryOptions: countryOptions,
            stateOptions: stateOptions,
            cityOptions: cityOptions,
            paymentOptions : paymentOptions,

            fullname: ref(null),
            age: ref(null),
            toggle: ref(false),

            firstname: ref(null),
            lastname: ref(null),
            username: ref(null),
            country: ref(null),
            email: ref(null),
            state: ref(null),
            city: ref(null),
            phone_number: ref(null),
            code: ref(null),
            
            payment: ref(null),
            card_name: ref(null),
            card_number: ref(null),
            date: ref(null),
            cvv: ref(null),
        }
    },
    methods: {
        onSubmit() {
            if(this.toggle != true) {
                this.$q.notify({
                    color: 'negative',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'You need to accept the license and terms first'
                })
            } else {
                this.$q.notify({
                    color: 'positive',
                    textColor: 'white',
                    icon: 'check',
                    message: 'Congratulations! Your information is valid '
                })
            }
        }
    }
}
</script>

<style scoped>
.toggle-outline {
      border: 1px solid #6D8299
}
</style>