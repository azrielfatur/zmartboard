<template>
    <div class="tw-flex tw-gap-20">
        <div class="tw-max-w-2xl tw-w-full">
            <div class="tw-text-3xl tw-font-medium tw-my-5">Tables</div>
            <p class="tw-font-light tw-text-gray-400 tw-text-xs">
                Utilities for setting the button an element
            </p>

            <div class="tw-space-y-5 tw-my-5">
                <div class="tw-bg-white tw-rounded">
                    <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                        <div class="tw-font-medium">Basic</div>
                        <div class="tw-my-5 tw-space-y-5">
                            <q-table
                                title="Users"
                                :rows="rows"
                                :columns="columns"
                                row-key="name"
                            />
                        </div>
                    </div>
                </div>

                <div class="tw-bg-white tw-rounded">
                    <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                        <div class="tw-font-medium">Bordered</div>
                        <div class="tw-my-5 tw-space-y-5">
                            <q-table
                                flat
                                bordered
                                title="Users"
                                :rows="rows"
                                :columns="columns"
                                row-key="name"
                            />
                        </div>
                    </div>
                </div>

                <div class="tw-bg-white tw-rounded">
                    <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                        <div class="tw-font-medium">Multiple Selection</div>
                        <div class="tw-my-5 tw-space-y-5">
                            <q-table
                                flat
                                bordered
                                title="Users"
                                :rows="rows"
                                :columns="columns"
                                selection="multiple"
                                v-model:selected="selected"
                                row-key="name"
                            >
                            </q-table>
                        </div>
                    </div>
                </div>

                <div class="tw-bg-white tw-rounded">
                    <div class="md:tw-p-5 tw-p-4 tw-pb-1">
                        <div class="tw-font-medium">Search Filtering</div>
                        <div class="tw-my-5 tw-space-y-5">
                            <q-table
                                flat
                                bordered
                                title="Users"
                                :rows="rows"
                                :columns="columns"
                                :filter="filter"
                                row-key="name"
                            >
                                <template v-slot:top-right>
                                    <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                                    <template v-slot:append>
                                        <q-icon name="search" />
                                    </template>
                                    </q-input>
                                </template>
                            </q-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

const columns = [
    {
        name: 'id',
        required: true,
        label: 'ID',
        field: row => row.id
    },
    {name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true},
    {name: 'username', align: 'left', label: 'Username', field: 'username', sortable: true},
    {name: 'email', align: 'left', label: 'Email', field: 'email', sortable: true},
    {name: 'status', align: 'left', label: 'Status', field: 'status', sortable: true},
]

const rows = [
    {
        id: 'A911',
        name: 'Jaka Subhan',
        username: 'jaka.subhan',
        email: 'jaka.subhan@gmail.com',
        status: 'Active'
    },
    {
        id: 'A923',
        name: 'Rakha Aldiansyah',
        username: 'raka.aldi',
        email: 'raka.aldi@gmail.com',
        status: 'Active'
    },
    {
        id: 'A954',
        name: 'Firmah Juliari',
        username: 'firman.juliari',
        email: 'firman.juliari@gmail.com',
        status: 'Inactive'
    },
    {
        id: 'A912',
        name: 'Sofyan Hidayat',
        username: 'sofyan.hidayat',
        email: 'sofyan.hidayat@gmail.com',
        status: 'Active'
    },
    {
        id: 'A942',
        name: 'Hilal Permada',
        username: 'hilal.permada',
        email: 'hilal.permada@gmail.com',
        status: 'Active'
    },
    {
        id: 'A998',
        name: 'Radit Galih Sutomo',
        username: 'radit.galih',
        email: 'radit.galih@gmail.com',
        status: 'Inactive'
    }
]

export default {
    setup() {
        return {
            selected: ref([]),
            filter: ref(''),
            columns,
            rows
        }
    }
}
</script>