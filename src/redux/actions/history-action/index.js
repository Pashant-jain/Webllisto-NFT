import { nftHistoryApi } from "../../api"

export const nftHistoryAction = (collectible_id) => {
    return async () => {
      try {
        let result = await nftHistoryApi(collectible_id)
        if (result.data) {
          return result.data.data
        }
      } catch (err) {
        return err
      }
    }
   
  }
  
