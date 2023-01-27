import { PutOnSaleApi } from "../../api";


export const putOnSaleAction = (data) => {
    return async () => {
      try {
        const result = await PutOnSaleApi(data)
        if (result.data) {
            return result.data;
          } else {
            return false;
          }
        } catch (error) {
          return error;
        }
    }
  }
  
