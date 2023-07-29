import React, { } from 'react';

import './EmployeeCreator.css';
import { ApolloError, useApolloClient } from '@apollo/client';
import { FormInstance, message } from 'antd';
import moment from 'moment';
import { EmployeeForm } from '../EmployeeForm';
import { setInitialUnsavedEmployeeState } from '../../apolloClient';
import { EmployeeInputType, useCreateEmployeeInCacheMutation, useCreateEmployeeMutation, useUnSavedEmployeeQuery } from '../../gql/apolloGenerated';

export interface EmployeeCreatorProps {
  prop?: string;
}

export function EmployeeCreator({ prop = 'default value' }: EmployeeCreatorProps) {

  const apolloClient = useApolloClient();

  const [messageApi, contextHolder] = message.useMessage();
  const formRef = React.useRef<FormInstance>(null);

  const createMutationOptions = {
    onCompleted: (): void => {
      messageApi.info('Employee created');
    },
    onError: (error: ApolloError): void => {
      messageApi.error('Error while Employee creation' + error.message);
    },
  };

  //const { data: UnSavedEmployee } = useUnSavedEmployeeQuery();
  const [createEmployeeInCache, { data: createdEmployeeInCache, loading: createLoadingCache, error: errorInCache }] = useCreateEmployeeInCacheMutation();
  //const [createEmployee, { data: createdEmployee, loading: createLoading, error }] = useCreateEmployeeMutation(createMutationOptions);

  const onFinish = (values: EmployeeInputType) => {
    console.log(values)
    values.dob = moment(values.dob).format('YYYY-MM-DD');
    //createEmployee({ variables: { employee: values } })
    createEmployeeInCache({
      variables: {
        employee: values
      }
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  React.useEffect(() => {
    // clean up unsaved employee
    return (): void => {
      setInitialUnsavedEmployeeState(apolloClient);
    };
  }, [apolloClient]);

  return (
    <>
      {contextHolder}
      <EmployeeForm formRef={formRef} onFinish={onFinish} onFinishFailed={onFinishFailed} createLoading={createLoadingCache} ></EmployeeForm >
    </>);
}

