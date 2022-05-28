import Products from '~/services/api/products'
import Filters from '~/services/api/filters'

export default (context) => {
  return {
    ProductsService: Products(context.$axios),
    FiltersService: Filters(context.$axios),
  }
}
