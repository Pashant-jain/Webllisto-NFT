
import { createItemApi } from "../../api/craete-api";

export const createItemAction = (data) => {
    return async () => {
      try {
        const result = await createItemApi(data)
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
  
