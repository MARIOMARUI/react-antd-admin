/**
 * @Date 2020-06-30 16:24:21
 * @Remark
 */

// axios
// lib
import { v4 as uuidv4 } from "uuid";
// config
import { UPLOAD_SETTING } from "project/config";
// script
import toast from "cts/toast";
// http
import { isOkRes } from "public/http/api";
// interface && type
import { ResFileUpload } from "./api";
import { RcFile } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
// 其它

export function checkFileSize(size: number) {
  return size / 1024 / 1024 < UPLOAD_SETTING.IMAGE_SIZE;
}

export function beforeUpload(file: RcFile) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    toast.warn("请选择jpg/jpeg/png格式文件上传");
    return false;
  }
  const isLt = checkFileSize(file.size);
  if (!isLt) {
    toast.warn(`图片必须小于${UPLOAD_SETTING.IMAGE_SIZE}MB`);
    return false;
  }
  return true;
}

export function getUriArrFromUoloadFile(list?: UploadFile[]) {
  if (!list) {
    return [];
  }
  const result: string[] = [];
  list.forEach((el) => {
    if (el.status === "done" && el.response) {
      const res: ResFileUpload = el.response;
      if (isOkRes(res)) {
        const [first] = res.data.fileName2Uri;
        if (first) {
          result.push(first);
        }
      }
    }
    // 已经上传的
    if (!el.originFileObj && el.url) {
      result.push(el.url);
    }
  });
  return result;
}

export function createFormFileList(file?: string | string[]): UploadFile[] {
  let fileList: string[] = [];
  if (file) {
    if (typeof file === "string" && file.trim() !== "") {
      fileList.push(file);
    }
    if (Array.isArray(file)) {
      fileList = file;
    }
  }

  const result = fileList.map((el) => {
    const info: UploadFile = {
      uid: uuidv4(),
      name: el,
      status: "done",
      url: el,
    };
    return info;
  });

  return result;
}
