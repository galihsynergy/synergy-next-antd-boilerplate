"use client";

import AppButton from "@/components/Reusable/AppButton";
import OSXFileUploader from "@/components/Reusable/FileUploader/OSXFileUploader";
import {
  OSXDatePicker,
  OSXInput,
  OSXSelect,
} from "@/components/Reusable/Input/OSXInput";
import PhoneInputWithLabel from "@/components/Reusable/PhoneInput/PhoneInputLabel";
import { Col, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";

const ExampleOfForm = () => {
  const [form] = useForm();
  return (
    <div>
      <h1>Example of Form</h1>
      <Form
        layout="vertical"
        disabled={false}
        form={form}
        onFinish={async () => {
          form.resetFields();
        }}
      >
        <Row gutter={[16, 0]}>
          <Col md={24} xs={24}>
            <Form.Item
              rules={[{ required: true, message: "Please input your file" }]}
              name={"documents"}
              label="Documents"
              className="my-[8px]"
            >
              <OSXFileUploader
                maxSize={2}
                uploadOnChange={async () => {}}
                hint="CSV, XLS or XLSX max: (2.0MB)"
                uploadProps={{
                  maxCount: 1,
                  accept: ".csv,.xlsx",
                }}
                form={form}
                formName="file"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
              name={"fullName"}
              label="Full Name"
              className="my-[8px]"
            >
              <OSXInput placeholder="Full Name" shadow customSize="md" />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your common name",
                },
              ]}
              name={"commonName"}
              label="Common Name"
              className="my-[8px]"
            >
              <OSXInput placeholder="Common Name" shadow customSize="md" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col md={12} xs={24}>
            <Form.Item name={"gender"} label="Gender" className="my-[8px]">
              <OSXSelect
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                ]}
                placeholder="Gender"
                shadow
                customSize="md"
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item
              rules={[
                { required: true, message: "Please enter your SFA code" },
              ]}
              name={"sfaCode"}
              label="SFA Code"
              className="my-[8px]"
            >
              <OSXInput
                maxLength={10}
                placeholder="SFA Code"
                shadow
                customSize="md"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              name={"mobilePersonal"}
              label="Phone Number"
              className="my-[8px]"
            >
              <PhoneInputWithLabel
                formInputProp={{
                  name: "mobilePersonal",
                }}
                phoneInputProp={{
                  height: "44px",
                  className: "custom-input-phone-ams",
                }}
                showLabel={false}
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item
              rules={[
                { required: true, message: "Please enter your email" },
                {
                  type: "email",
                  message: "Please input a valid email address",
                },
              ]}
              name={"synergyEmail"}
              label="Email"
              className="my-[8px]"
            >
              <OSXInput placeholder="Email" shadow customSize="md" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              rules={[{ required: true, message: "Please enter your branch" }]}
              name={"branchId"}
              label="Branch"
              className="my-[8px]"
            >
              <OSXSelect
                showSearch
                filterOption={(input, option) => {
                  return (
                    (option?.label as string)
                      ?.toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  );
                }}
                options={[]}
                placeholder="Branch"
                shadow
                customSize="md"
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item
              rules={[{ required: true, message: "Please enter your unit" }]}
              name={"unitId"}
              label="Unit"
              className="my-[8px]"
            >
              <OSXSelect
                showSearch
                filterOption={(input, option) => {
                  return (
                    (option?.label as string)
                      ?.toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  );
                }}
                options={[]}
                placeholder="Unit"
                shadow
                customSize="md"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              name={"managementAppointmentId"}
              label="Management Appointment"
              className="my-[8px]"
            >
              <OSXSelect
                showSearch
                filterOption={(input, option) => {
                  return (
                    (option?.label as string)
                      ?.toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  );
                }}
                options={[]}
                placeholder="Management Appointment"
                shadow
                customSize="md"
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item
              rules={[
                { required: true, message: "Please enter your designation" },
              ]}
              name={"designationId"}
              label="Designation Appointment"
              className="my-[8px]"
            >
              <OSXSelect
                showSearch
                filterOption={(input, option) => {
                  return (
                    (option?.label as string)
                      ?.toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  );
                }}
                options={[]}
                placeholder="Designation Appointment"
                shadow
                customSize="md"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              name={"producerStatus"}
              label="Producer Status"
              className="my-[8px]"
            >
              <OSXSelect
                options={[]}
                placeholder="Producer Status"
                shadow
                customSize="md"
              />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              name={"rookieEndDate"}
              label="Rookie End Date"
              className="my-[8px]"
            >
              <OSXDatePicker
                placeholder="Rookie End Date"
                shadow
                customSize="md"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"space-between"} align={"middle"} className="mt-[32px]">
          <Col></Col>
          <Col className="gap-[12px] flex ml-auto">
            <AppButton onClick={() => ({})} btn_type="secondary-gray">
              {"Cancel"}
            </AppButton>
            <AppButton loading={false} btn_type="primary" htmlType="submit">
              {"Save Changes"}
            </AppButton>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ExampleOfForm;
