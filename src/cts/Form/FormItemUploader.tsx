/**
 * @Date 2020-06-30 16:14:51
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
// lib
import { Form, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// components & widget
import toast from "cts/toast";
// style
// config
// import { INPUT_REQUIRED_RULE } from "project/validRules";
// script & methods & public
import logUtils from "utils/logUtils";
// state
import { userState } from "state/global";
// controller
import { getUploadFileUrlService } from "biz/file/service";
// interface && type
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";
import { ResFileUpload } from "biz/file/api";
// 其它
import { beforeUpload, createFormFileList } from "biz/file/logic";
import { isOkRes } from "public/http/api";
import { INPUT_REQUIRED_RULE } from "project/validRules";

export function normFileInForm(e: UploadChangeParam) {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
}

function FormItemUploader(props: {
  name: string;
  label: string;
  limit?: number;
  required?: boolean;
  defaultValue?: string;
}) {
  const { name, label, limit, defaultValue, required = true } = props;

  const mLimit = limit || 1;
  const [list, setList] = useState<UploadFile[]>([]);
  const [doing, setDoing] = useState(false);

  // 同步图片状态
  useEffect(() => {
    if (defaultValue) {
      setList(createFormFileList(defaultValue));
    } else {
      setList([]);
    }
    return () => {
      //
    };
  }, [defaultValue]);

  const triggerChange = (info: UploadChangeParam) => {
    logUtils.info("triggerChange", info);

    let newList = [...info.fileList];
    const { status } = info.file;

    if (status) {
      if (status === "uploading") {
        setDoing(true);
      } else {
        setDoing(false);
      }
      if (status === "removed") {
        //
      }
      if (status === "done" && info.file.response) {
        const res: ResFileUpload = info.file.response;
        if (isOkRes(res)) {
          toast.success("上传成功");
        } else {
          newList = newList.map((el) => {
            if (el.uid === info.file.uid) {
              return {
                ...el,
                status: "error",
              };
            }
            return el;
          });
          toast.error("上传失败");
        }
      }
      if (info.file.status === "error") {
        toast.error("上传失败");
      }
    }
    setList(newList);
  };

  return (
    <Form.Item
      name={name}
      label={label}
      getValueFromEvent={normFileInForm}
      rules={required ? [INPUT_REQUIRED_RULE] : []}
      required={required}
    >
      <Upload
        name="file"
        listType="picture-card"
        defaultFileList={[]}
        action={getUploadFileUrlService()}
        accept=".png,.jpg,.jpeg"
        fileList={list}
        className="picture-uploader"
        headers={{
          authorization: userState.getToken(),
        }}
        disabled={doing}
        onChange={triggerChange}
        beforeUpload={beforeUpload}
      >
        {list.length < mLimit && (
          <div>
            <PlusOutlined />
            <h6 className="mt-5">上传图片</h6>
          </div>
        )}
      </Upload>
    </Form.Item>
  );
}

export default FormItemUploader;
