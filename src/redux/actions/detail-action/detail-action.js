import { nftDetailApi } from "../../api/detail-api/detail-api"

export const nftDetailAction = (collectible_id) => {
    return async () => {
      try {
        let result = await nftDetailApi(collectible_id)
        if (result.data) {
          return result.data.data
        }
      } catch (err) {
        return err
      }
    }
   
  }
  
