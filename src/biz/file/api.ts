/**
 * @Date 2021年6月21日
 * @Remark
 */

// API -------------------------------------------------------------

export const API_FILE_UPLOAD: Api = {
  title: "文件上传",
  path: "file_upload/upload",
  method: "UPLOAD",
  prefix: "li_dian",
  remark: "文件上传",
};

// req
// 参数名file

// res
export interface ResFileUpload extends Res {
  data: {
    fileName2Uri: string[];
  };
}
