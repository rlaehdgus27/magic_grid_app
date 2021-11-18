import produce from "immer";

const initailState = {
  imgs: [],
  createModal: false,
  previewPath: null,
  //
  st_listLoading: false,
  st_listDone: false,
  st_listError: null,
  //
  st_imgUploadLoading: false,
  st_imgUploadDone: false,
  st_imgUploadError: null,
};

export const IMG_LIST_REQUEST = "IMG_LIST_REQUEST";
export const IMG_LIST_SUCCESS = "IMG_LIST_SUCCESS";
export const IMG_LIST_FAILURE = "IMG_LIST_FAILURE";

export const IMG_UPLOAD_REQUEST = "IMG_UPLOAD_REQUEST";
export const IMG_UPLOAD_SUCCESS = "IMG_UPLOAD_SUCCESS";
export const IMG_UPLOAD_FAILURE = "IMG_UPLOAD_FAILURE";

export const CREATE_MODAL_TOGGLE = "CREATE_MODAL_TOGGLE";

const reducer = (state = initailState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case IMG_LIST_REQUEST:
        draft.st_listLoading = true;
        draft.st_listDone = false;
        draft.st_listError = null;
        break;

      case IMG_LIST_SUCCESS:
        draft.st_listLoading = false;
        draft.st_listDone = true;
        draft.st_listError = null;
        draft.imgs = action.data;
        break;

      case IMG_LIST_FAILURE:
        draft.st_listLoading = false;
        draft.st_listDone = false;
        draft.st_listError = action.data;
        break;

      //////////////////////////////////////////

      case IMG_UPLOAD_REQUEST:
        draft.st_imgUploadLoading = true;
        draft.st_imgUploadDone = false;
        draft.st_imgUploadError = null;
        break;

      case IMG_UPLOAD_SUCCESS:
        draft.st_imgUploadLoading = false;
        draft.st_imgUploadDone = true;
        draft.st_imgUploadError = null;
        draft.previewPath = action.data;
        break;

      case IMG_UPLOAD_FAILURE:
        draft.st_imgUploadLoading = false;
        draft.st_imgUploadDone = false;
        draft.st_imgUploadError = action.data;
        break;

      //////////////////////////////////////////

      case CREATE_MODAL_TOGGLE:
        draft.createModal = !draft.createModal;
        break;

      //////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
