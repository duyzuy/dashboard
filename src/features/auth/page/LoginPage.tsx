import React from "react";
import { Form, Input } from "antd";
import CustomButton from "../../../components/Button";
import { login, logout } from "../authSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router";
import { App } from "antd";
import "./style.scss";
export const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.auth.errors);

  const navigate = useNavigate();
  const onFinish = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const data = await dispatch(
      login({
        email,
        password,
      })
    ).unwrap();
    if (!data.errors) {
      navigate("/admin/dashboard");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-page">
      <div className="inner-page">
        <div className="page-header">
          <h1 className="center">Login</h1>
        </div>
        <div className="form-wrapper">
          <Form
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="current-password"
            layout="vertical"
            size="large"
          >
            <Form.Item
              label="email"
              name="email"
              rules={[{ required: true, message: "Vui lòng nhập email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <CustomButton type="primary" htmlType="submit" block={true}>
                Đăng nhập
              </CustomButton>
            </Form.Item>
          </Form>
          <p className="center forgot">Quên mật khẩu?</p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
