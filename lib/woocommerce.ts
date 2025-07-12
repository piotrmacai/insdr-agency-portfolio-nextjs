import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const wooApi = new WooCommerceRestApi({
  url: process.env.WC_API_URL!,
  consumerKey: process.env.WC_API_KEY!,
  consumerSecret: process.env.WC_API_SECRET!,
  version: "wc/v3",
});