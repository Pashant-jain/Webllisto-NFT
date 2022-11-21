import axios from 'axios'

const APP_URL = process.env.REACT_APP_API_BASE_URL

export const galleryNftApi = async (category) => {
  const xhr = await axios.request({
    method: 'get',
    url: `${APP_URL}/v1.5/explore/list/get`,
    params: {
        page_size: 20,
        page_number: 1,
        // network_id: network_id,
        // collection_address: collection_address,
        category: category,
        // sort: sort,
        // sale_type: saletype,
        // wallet_address: walletAddress ? walletAddress : '',
        // search: search,
      },
  })
  return xhr
}
