import { reactOnPostApi } from "../../api";

export const reactOnPostAction = (data) => {
    return async () => {
      try {
        const result = await reactOnPostApi(data);
        if (result) {
          return result;
        } else {
          return false;
        }
      } catch (error) {
        return error;
      }
    };
  };