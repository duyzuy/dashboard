import { Button as AntButton } from "antd";

const Button: React.FC<{
  children?: string;
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
  icon?: React.ReactNode;
  loading?: boolean;
  shape?: "default" | "circle" | "round";
  size?: "large" | "middle" | "small";
  target?: string;
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  onClick?: () => void;
}> = ({
  children,
  block,
  danger,
  disabled,
  ghost,
  href,
  htmlType,
  icon,
  loading,
  shape,
  size,
  target,
  type,
  onClick,
}) => {
  return (
    <AntButton
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      href={href}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      shape={shape}
      size={size}
      target={target}
      type={type}
      onClick={onClick}
    >
      {children}
    </AntButton>
  );
};
export default Button;
