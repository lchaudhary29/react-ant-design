
import './EmployeeList.css';

import { Button, Checkbox, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeType, useGetEmployeesQuery } from '../../gql/apolloGenerated';

export interface EmployeeListProps {
  prop?: string;
}

export function EmployeeList({ prop = 'default value' }: EmployeeListProps) {
  let navigate = useNavigate();
  const [employees, setEmployees] = useState<Array<EmployeeType> | undefined>([]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Dob',
      dataIndex: 'dob',
      key: 'dob',
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (text: any, record: EmployeeType) => (
        <Checkbox checked={record.isActive as boolean} ></Checkbox>
      ),
    },
    {
      title: 'Department',
      dataIndex: 'departmentId',
      key: 'departmentId',
    },
    {
      title: 'Update',
      key: 'key',
      dataIndex: 'key',
      render: (text: any, record: any) => (
        <Button htmlType='button' onClick={() => navigate('/update/' + record.key)} style={{ minWidth: '75px' }}>
          {record.name}
        </Button>
      ),
    },
  ];

  const { data: employeeList, loading } = useGetEmployeesQuery();

  useEffect(() => {
    if (employeeList) {
      const employees = employeeList?.employees?.map((employee) => ({
        key: employee?.id,
        name: employee?.name,
        age: employee?.age,
        dob: employee?.dob,
        isActive: employee?.isActive,
        departmentId: employee?.departmentId
      } as EmployeeType));
      setEmployees(employees);
    }

  }, [employeeList])


  return <>
    <Table dataSource={employees} columns={columns} loading={loading} />;
  </>
}
