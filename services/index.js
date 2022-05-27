import Products from '~/services/api/products'


export default (context) => {
  return {
    contactUsApi: Products(context.$axios),
  }
}
