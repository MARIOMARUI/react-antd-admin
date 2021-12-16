/**
 * @Date 2021-06-21 17:44:34
 * @Remark
 */

// lib
import axios, { AxiosError, AxiosResponse } from "axios";
// config
import { HTTP_SETTING } from "config/setting";
// script & methods & public
import logUtils from "utils/logUtils";
import timeUtils from "utils/timeUtils";
// state
// http
import { createApiUrl } from "public/http/core";
import { bag } from "public/http/api";
// service
// api
import { API_FILE_UPLOAD, ResFileUpload } from "./api";
// interface && type && class
import { BLANK_RESPONSE, ERROR_CODE_MAP } from "public/http/model";
import { RcFile } from "antd/lib/upload";
// 其它

// 上传地址
export function getUploadFileUrlService() {
  const path = createApiUrl(API_FILE_UPLOAD);
  return path;
}

/**
 * 自定义上传
 * https://www.cnblogs.com/cjh1111/p/7017295.html
 */
export async function uploadFileService(
  file: RcFile | undefined,
  onUploadProgress?: (progressEvent: any) => void,
) {
  const url = getUploadFileUrlService();
  // 创建form对象
  const param: FormData = new FormData();
  // 创建返回
  const data: BagData<MinioFile> = bag([]);
  if (!file) {
    data.fail.push({
      result: 998,
      message: ERROR_CODE_MAP[998],
    });
    return data;
  }
  // 通过append向form对象添加数据,默认文件名file
  param.append("file", file, file.name);

  const newInstance = axios.create({
    timeout: HTTP_SETTING.TIMEOUT_LONG,
    onUploadProgress: (progressEvent) => {
      if (onUploadProgress) {
        onUploadProgress(progressEvent);
      }
    },
  });
  // 请求实例
  return newInstance
    .post(getUploadFileUrlService(), param, {
      headers: {
        // 添加请求头,表单格式
        "Content-Type": "multipart/form-data",
        authorization: "",
      },
    })
    .then((res: AxiosResponse<ResFileUpload>) => {
      // 打印结果
      logUtils.info(`method: UPLOAD || url: ${url}`, "res");
      logUtils.log(res.data);
      data.payload = {
        name: file.name,
        uploadTime: timeUtils.format(new Date(), 1),
        url: res.data.data.fileName2Uri[0],
      };
      return data;
    })
    .catch((error: AxiosError) => {
      const res: AxiosResponse<null> = error.response || BLANK_RESPONSE;
      // 打印结果
      logUtils.info(`method: UPLOAD || url: ${url}`, "res");
      logUtils.log(res.data);
      data.err.push({
        result: res.status,
        message: ERROR_CODE_MAP[res.status],
      });
      return data;
    });
}
