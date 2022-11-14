import { galleryNftApi } from "../../api/gallery-api"


export const galleryNftAction = () => {
  return async () => {
    try {
      let result = await galleryNftApi()
      if (result.data) {
        return result.data.data
      }
    } catch (err) {
      return err
    }
  }
}
