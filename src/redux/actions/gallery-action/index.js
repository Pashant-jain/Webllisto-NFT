import { galleryNftApi } from "../../api"


export const galleryNftAction = ( category) => {
  return async () => {
    try {
      let result = await galleryNftApi(category)
      if (result.data) {
        return result.data.data
      } 
    } catch (err) {
      return err
    }
  }
}
