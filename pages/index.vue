<template>
  <div class="col-12">
    <h3>Products</h3>

    <div class="continer mt-5 mb-5">
      <v-row>
        <v-col cols="auto" sm="12" md="3" lg="3">
          <v-text-field
            v-model="id"
            placeholder="Product ID"
            :loading="loading"
            outlined
            dense
          >
          </v-text-field>
        </v-col>

        <v-col cols="auto" sm="12" md="3" lg="3">
          <v-select
            v-model="selectCountry"
            placeholder="Countries"
            :items="countries"
            item-text="name"
            item-value="iso_code"
            :loading="loading"
            outlined
            dense
            :menu-props="{ bottom: true, offsetY: true }"
          >
          </v-select>
        </v-col>

        <v-col>
          <v-btn class="secondary" @click="handleReset">Reset</v-btn>
          <v-btn class="primary" @click="handleFilters">Search</v-btn>
        </v-col>
      </v-row>
    </div>

    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
      :loading="loading"
    >
      <template #[`item.destination`]="{ item }">
        <span v-if="item && item.destination && item.destination.amount">
          {{ item.destination.amount }}
        </span>
      </template>
      <template #[`item.source`]="{ item }">
        <span v-if="item && item.source && item.source.unit">
          {{ item.source.unit }}
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      valid: false,
      loading: false,
      products: [],
      countries: [],
      selectCountry: undefined,
      id: undefined,
      headers: [
        {
          text: 'id',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        {
          text: 'destination',
          align: 'center',
          sortable: false,
          value: 'destination',
        },
        {
          text: 'source',
          align: 'center',
          sortable: false,
          value: 'source',
        },
        {
          text: 'name',
          align: 'center',
          sortable: false,
          value: 'name',
        },
        {
          text: 'description',
          align: 'center',
          sortable: false,
          value: 'description',
        },
      ],
    }
  },

  mounted() {
    Promise.all([this.getAllProductsData(), this.getCountriesData()])
  },

  methods: {
    async handleReset() {
      this.id = undefined
      this.selectCountry = undefined
      await this.getAllProductsData()
    },
    async handleFilters() {
      if (this.id !== undefined && !!this.id) {
        await this.getProductsById()
      } else {
        this.searchByFilters()
      }
    },

    async searchByFilters() {
      try {
        this.loading = true
        const filter = {
          operator_id: this.selectOperator,
          country_iso_code: this.selectCountry,
        }
        this.products = (
          await this.$api.ProductsService.getProducts(1, 100, filter)
        ).data
        this.loading = false
      } catch (error) {
        this.$toasted.error(error.response.data.errors[0].message)
      }
    },

    async getProductsById() {
      try {
        this.loading = true
        this.products = [
          (await this.$api.ProductsService.getProductsById(this.id)).data,
        ]
        this.loading = false
      } catch (error) {
        this.$toasted.error(error.response.data.errors[0].message)
      }
    },
    async getAllProductsData() {
      try {
        this.loading = true
        this.products = (
          await this.$api.ProductsService.getProducts(1, 100)
        ).data
        this.loading = false
      } catch (error) {
        this.$toasted.error(error.response.data.errors[0].message)
      }
    },

    async getCountriesData() {
      try {
        this.loading = true
        this.countries = (await this.$api.FiltersService.getCountries()).data
        this.loading = false
      } catch (error) {
        this.$toasted.error(error.response.data.errors[0].message)
      }
    },
  },
}
</script>
