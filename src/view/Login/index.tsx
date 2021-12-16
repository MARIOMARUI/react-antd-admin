/**
 * @Date 2021-06-11 11:00:59
 * @Remark
 */

// react
import React, { useState, useEffect } from "react";
// lib
import { Redirect } from "react-router";
import moment from "moment";
import { Layout, Card, Form, Button, Input } from "antd";
import { UserOutlined, LockOutlined, PictureOutlined } from "@ant-design/icons";
// components & widget
// style
import "./style.less";
// config
import { ROUTE_PREFIX } from "project/config";
import { APP_SETTING } from "config/setting";
import { APP_VERSION } from "config/env";
import { NAME_LENGTH_RULE, PWD_LENGTH_RULE } from "project/validRules";
import { REQUIRED_RULE } from "utils/validator";
// script & methods & public
import timeUtils from "utils/timeUtils";
// store
import { observer } from "mobx-react";
import { userState } from "state/global";
// controller
import { userLogin } from "./controller";
import { getCodeService } from "biz/auth/service";
// interface && type && class
// 其它

const createCopyright = () => {
  const begin = timeUtils.format(new Date(), 3);
  const end = timeUtils.format(moment(begin).add(10, "y"), 3);

  return `Copyright © ${begin} - ${end}`;
};

function Login() {
  const MainPath = `/${ROUTE_PREFIX}`;

  const account = userState.getAccount();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const getCode = () => {
    setCode(getCodeService());
  };

  useEffect(() => {
    getCode();
    return () => {
      //
    };
  }, []);

  // 根据状态自动重定向
  if (userState.isLogin()) {
    return <Redirect to={MainPath} />;
  }

  return (
    <Layout className="login-view">
      <Card
        bordered
        style={{
          width: "310px",
          cursor: "auto",
        }}
        hoverable
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "22px",
            height: "50px",
            lineHeight: "50px",
            marginBottom: 0,
          }}
        >
          {APP_SETTING.APP_NAME}
        </h1>
        <h4
          style={{
            textAlign: "center",
            height: "30px",
            lineHeight: "30px",
            marginBottom: 30,
          }}
        >
          {APP_VERSION}
        </h4>
        <Form
          name="loginForm"
          size="large"
          onFinish={(values) => {
            const { username, password, vc } = values;
            userLogin(
              {
                username,
                password,
                code: vc,
              },
              setLoading,
              getCode,
            );
          }}
        >
          <Form.Item
            name="username"
            initialValue={"admin" || account.loginName}
            rules={[REQUIRED_RULE("请填写账户名"), NAME_LENGTH_RULE]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={`账户名, ${NAME_LENGTH_RULE.message}`}
              maxLength={NAME_LENGTH_RULE.max}
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="password"
            initialValue="ztxt1234"
            rules={[REQUIRED_RULE("请填写密码"), PWD_LENGTH_RULE]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={`输入密码, ${PWD_LENGTH_RULE.message}`}
              maxLength={PWD_LENGTH_RULE.max}
              allowClear
            />
          </Form.Item>
          <Form.Item
            style={{
              marginBottom: "5px",
            }}
          >
            <Form.Item
              name="vc"
              style={{ display: "inline-block", width: "60%" }}
              rules={[
                REQUIRED_RULE("填写验证码"),
                {
                  len: 4,
                  message: "验证码为4位",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<PictureOutlined />}
                placeholder="4位验证码"
                maxLength={4}
                allowClear
              />
            </Form.Item>
            <div
              style={{
                display: "inline-block",
                width: "38%",
                height: "36px",
                marginLeft: "2%",
              }}
            >
              <button
                type="button"
                onClick={getCode}
                style={{
                  border: "none",
                  background: "none",
                  padding: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <img
                  alt="验证码"
                  src={code}
                  className="img-res"
                  onError={() => {
                    setCode("");
                  }}
                />
              </button>
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        <h6
          style={{
            textAlign: "center",
            fontSize: "12px",
            height: "20px",
            lineHeight: "20px",
            color: "#cccccc",
            margin: 0,
          }}
        >
          <span>{createCopyright()}</span>
        </h6>
      </Card>
    </Layout>
  );
}

export default observer(Login);
