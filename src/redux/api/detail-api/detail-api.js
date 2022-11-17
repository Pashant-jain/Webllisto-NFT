import axios from 'axios'

const APP_URL = process.env.REACT_APP_API_BASE_URL

export const nftDetailApi = async (collectible_id) => {
    const xhr = await axios.request({
      method: 'get',
      url: `${APP_URL}/v1.6/collectible/nft/single/page/get`,
      params: {
        collectible_id : collectible_id.id
        },
    })
    return xhr
  }