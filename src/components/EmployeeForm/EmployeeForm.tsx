import React from 'react';

import './EmployeeForm.css';

import { EmployeeInputType } from '../../gql/apolloGenerated';
import { Button, Checkbox, DatePicker, Form, FormInstance, Input, Select } from 'antd';
import { DEPARTMENTS } from '../../constants';

export interface EmployeeFormProps {
  formRef: React.RefObject<FormInstance<any>>,
  onFinish: (values: EmployeeInputType) => void,
  onFinishFailed: (errorInfo: any) => void,
  createLoading: boolean
}

export const NAME = "name";
export const AGE = "age";
export const DOB = "dob";
export const IS_ACTIVE = "isActive";
export const DEPARTMENT_ID = "departmentId";

export function getAge(dateString: string) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function EmployeeForm({ formRef, onFinish, onFinishFailed, createLoading }: EmployeeFormProps) {

  function onChangeHandler(value: any | null, dateString: string): void {
    const age = getAge(dateString);
    formRef.current?.setFieldsValue({ age: age ? age : null });
  }

  return <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    style={{ maxWidth: 600 }}
    ref={formRef}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  // autoComplete="off"
  >
    <Form.Item label="Name" name={NAME}>
      <Input />
    </Form.Item>
    <Form.Item label="Age" name={AGE}>
      <Input disabled={true} />
    </Form.Item>
    <Form.Item label="DOB" name={DOB}>
      <DatePicker onChange={onChangeHandler} />
    </Form.Item>
    <Form.Item name={IS_ACTIVE} valuePropName="checked" wrapperCol={{ offset: 3, span: 16 }}>
      <Checkbox>Active</Checkbox>
    </Form.Item>
    <Form.Item label="Department" name={DEPARTMENT_ID}>
      <Select
        allowClear
      >
        {Object.keys(DEPARTMENTS).map((value, index) => (
          <Select.Option key={index} value={value}>
            {DEPARTMENTS[value as keyof typeof DEPARTMENTS]}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
      <Button shape="round" htmlType="submit" loading={createLoading}>Submit</Button>
    </Form.Item>
  </Form>;
}
