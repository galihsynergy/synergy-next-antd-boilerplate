import { Form, FormItemProps } from "antd";
import PhoneInput from "antd-phone-input";
import { PhoneInputProps } from "antd-phone-input/types";

interface PhoneInputWithLabelProp {
  label?: string;
  formInputProp?: FormItemProps;
  phoneInputProp?: PhoneInputProps;
  showLabel?: boolean;
}
export default function PhoneInputWithLabel({
  label = "Phone Number",
  formInputProp,
  phoneInputProp,
  showLabel = true,
}: PhoneInputWithLabelProp) {
  return (
    <div>
      {showLabel && (
        <p className="text-sm font-medium text-utility-gray-700 pb-md">
          {label}
        </p>
      )}
      <Form.Item className="my-0" {...formInputProp}>
        <PhoneInput
          country="sg"
          preferredCountries={["SG"]}
          size="large"
          enableSearch
          disableParentheses
          {...phoneInputProp}
        />
      </Form.Item>
    </div>
  );
}
