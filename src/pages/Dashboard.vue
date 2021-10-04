<template>
  <div class="tw-pb-5">
    <div class="tw-text-3xl tw-font-medium tw-my-5">Dashboard</div>
    <div class="tw-space-y-2">
      <div class="md:tw-grid lg:tw-grid-cols-4 tw-grid-cols-2 tw tw-gap-2 md:tw-space-y-0 tw-space-y-2">
        <div class="tw-bg-white tw-p-5 tw-flex tw-items-center">
          <q-icon
            name="o_business_center"
            size="38px"
            class="tw-bg-green-50 tw-text-green-600 tw-rounded-full tw-p-2"
          />
          <div class="tw-flex tw-flex-col tw-mx-4">
            <span class="tw-text-2xl tw-font-extrabold">128</span>
            <span class="tw-text-xs tw-text-gray-400 tw-font-light"
              >Total Projects</span
            >
          </div>
        </div>

        <div class="tw-bg-white tw-p-5 tw-flex tw-items-center">
          <q-icon
            name="o_group"
            size="38px"
            class="tw-bg-red-50 tw-text-red-600 tw-rounded-full tw-p-2"
          />
          <div class="tw-flex tw-flex-col tw-mx-4">
            <span class="tw-text-2xl tw-font-extrabold">76</span>
            <span class="tw-text-xs tw-text-gray-400 tw-font-light"
              >Total Clients</span
            >
          </div>
        </div>

        <div class="tw-bg-white tw-p-5 tw-flex tw-items-center">
          <q-icon
            name="o_inventory"
            size="38px"
            class="tw-bg-blue-50 tw-text-blue-600 tw-rounded-full tw-p-2"
          />
          <div class="tw-flex tw-flex-col tw-mx-4">
            <span class="tw-text-2xl tw-font-extrabold">103</span>
            <span class="tw-text-xs tw-text-gray-400 tw-font-light"
              >Total Finished</span
            >
          </div>
        </div>

        <div class="tw-bg-white tw-p-5 tw-flex tw-items-center">
          <q-icon
            name="o_account_balance_wallet"
            size="38px"
            class="tw-bg-yellow-50 tw-text-yellow-600 tw-rounded-full tw-p-2"
          />
          <div class="tw-flex tw-flex-col tw-mx-4">
            <span class="tw-text-2xl tw-font-extrabold">$ 4.092</span>
            <span class="tw-text-xs tw-text-gray-400 tw-font-light"
              >Earn this Months</span
            >
          </div>
        </div>
      </div>

      <div class="md:tw-grid md:tw-grid-cols-2 tw-gap-2 md:tw-space-y-0 tw-space-y-2">
        <div class="tw-bg-white tw-pt-5 tw-pl-2 tw-pr-5">
          <apexchart
            type="line"
            height="250"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
        <div class="tw-bg-white tw-pt-5 tw-pl-2 tw-pr-5">
          <apexchart
            type="donut"
            height="250"
            :options="donutChartOptions"
            :series="donutSeries"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    return {
      series: [
        {
          name: "Tasks",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 28],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Tasks this Week",
          align: "left",
        },
        markers: {
          strokeColors: '#ffffff',
          strokeWidth: 2,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        },
      },
      donutSeries: [
          44, 55, 41, 17, 15
      ],
      donutChartOptions: {
        fill: {
          colors: ['#5C7AEA', '#80ED99', '#FFB830', '#FF2442', '#6F69AC']
        },
        labels: ['Apples', 'Oranges', 'Berries', 'Grapes', 'Pear'],
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: "donut",
        },
        legend: {
          offsetY: 50,
          offsetX: 10,
        },
        title: {
          text: "Data this Week",
        },
      },
    };
  },
};
</script>

<style>
.q-item__section--avatar {
  min-width: 0px;
}

.q-item__section--side {
  color: none;
  font-size: 8px !important;
}
</style>