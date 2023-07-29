import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  Date: { input: any; output: any; }
  Guid: { input: any; output: any; }
};

export type AppMutation = {
  __typename?: 'AppMutation';
  createEmployee?: Maybe<EmployeeType>;
  createEmployeeInCache?: Maybe<UnSavedEmployee>;
  deleteEmployee?: Maybe<Scalars['String']['output']>;
  resetEmployeeInCache?: Maybe<UnSavedEmployee>;
  updateEmployee?: Maybe<EmployeeType>;
};


export type AppMutationCreateEmployeeArgs = {
  employee: EmployeeInputType;
};


export type AppMutationCreateEmployeeInCacheArgs = {
  employee: EmployeeInputType;
};


export type AppMutationDeleteEmployeeArgs = {
  empId: Scalars['String']['input'];
};


export type AppMutationUpdateEmployeeArgs = {
  empId: Scalars['String']['input'];
  employee: EmployeeInputType;
};

export type AppQuery = {
  __typename?: 'AppQuery';
  departments?: Maybe<Array<Maybe<DepartmentType>>>;
  employee?: Maybe<EmployeeType>;
  employees?: Maybe<Array<Maybe<EmployeeType>>>;
  unSavedEmployee: UnSavedEmployee;
};


export type AppQueryEmployeeArgs = {
  empId: Scalars['ID']['input'];
};

export type DepartmentType = {
  __typename?: 'DepartmentType';
  departmentType?: Maybe<TypeOfDepartment>;
  /** Dept Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Dept Id */
  id?: Maybe<Scalars['Guid']['output']>;
};

export type EmployeeInputType = {
  age: Scalars['Int']['input'];
  departmentId: TypeOfDepartment;
  dob: Scalars['Date']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type EmployeeType = {
  __typename?: 'EmployeeType';
  /** Employee Age */
  age?: Maybe<Scalars['Int']['output']>;
  /** DepartmentId */
  departmentId?: Maybe<TypeOfDepartment>;
  /** Employee Dob */
  dob?: Maybe<Scalars['Date']['output']>;
  /** Employee Id */
  id?: Maybe<Scalars['Guid']['output']>;
  /** Employee Active */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** Employee Name */
  name?: Maybe<Scalars['String']['output']>;
};

export enum TypeOfDepartment {
  Finance = 'FINANCE',
  It = 'IT',
  Marketing = 'MARKETING',
  Operations = 'OPERATIONS'
}

export type UnSavedEmployee = {
  __typename?: 'UnSavedEmployee';
  employee: EmployeeType;
  id?: Maybe<Scalars['Guid']['output']>;
};

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'AppQuery', employees?: Array<{ __typename?: 'EmployeeType', id?: any | null, name?: string | null, age?: number | null, dob?: any | null, isActive?: boolean | null, departmentId?: TypeOfDepartment | null } | null> | null };

export type CreateEmployeeMutationVariables = Exact<{
  employee: EmployeeInputType;
}>;


export type CreateEmployeeMutation = { __typename?: 'AppMutation', createEmployee?: { __typename?: 'EmployeeType', id?: any | null, name?: string | null, age?: number | null, dob?: any | null, isActive?: boolean | null, departmentId?: TypeOfDepartment | null } | null };

export type EmployeeFragment = { __typename?: 'EmployeeType', id?: any | null, name?: string | null, age?: number | null, dob?: any | null, isActive?: boolean | null, departmentId?: TypeOfDepartment | null };

export type UnSavedEmpFragment = { __typename?: 'UnSavedEmployee', employee: { __typename?: 'EmployeeType', id?: any | null, name?: string | null, age?: number | null, dob?: any | null, isActive?: boolean | null, departmentId?: TypeOfDepartment | null } };

export type UnSavedEmployeeQueryVariables = Exact<{ [key: string]: never; }>;


export type UnSavedEmployeeQuery = { __typename?: 'AppQuery', unSavedEmployee: { __typename?: 'UnSavedEmployee', id?: any | null, employee: { __typename?: 'EmployeeType', id?: any | null, name?: string | null, age?: number | null, dob?: any | null, isActive?: boolean | null, departmentId?: TypeOfDepartment | null } } };

export type CreateEmployeeInCacheMutationVariables = Exact<{
  employee: EmployeeInputType;
}>;


export type CreateEmployeeInCacheMutation = { __typename?: 'AppMutation', createEmployeeInCache?: { __typename?: 'UnSavedEmployee', id?: any | null, employee: { __typename?: 'EmployeeType', id?: any | null, name?: string | null, age?: number | null, dob?: any | null, isActive?: boolean | null, departmentId?: TypeOfDepartment | null } } | null };

export const EmployeeFragmentDoc = gql`
    fragment Employee on EmployeeType {
  id
  name
  age
  dob
  isActive
  departmentId
}
    `;
export const UnSavedEmpFragmentDoc = gql`
    fragment UnSavedEmp on UnSavedEmployee {
  employee {
    ...Employee
  }
}
    ${EmployeeFragmentDoc}`;
export const GetEmployeesDocument = gql`
    query GetEmployees {
  employees {
    ...Employee
  }
}
    ${EmployeeFragmentDoc}`;

/**
 * __useGetEmployeesQuery__
 *
 * To run a query within a React component, call `useGetEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEmployeesQuery(baseOptions?: Apollo.QueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
      }
export function useGetEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
        }
export type GetEmployeesQueryHookResult = ReturnType<typeof useGetEmployeesQuery>;
export type GetEmployeesLazyQueryHookResult = ReturnType<typeof useGetEmployeesLazyQuery>;
export type GetEmployeesQueryResult = Apollo.QueryResult<GetEmployeesQuery, GetEmployeesQueryVariables>;
export const CreateEmployeeDocument = gql`
    mutation CreateEmployee($employee: EmployeeInputType!) {
  createEmployee(employee: $employee) {
    ...Employee
  }
}
    ${EmployeeFragmentDoc}`;
export type CreateEmployeeMutationFn = Apollo.MutationFunction<CreateEmployeeMutation, CreateEmployeeMutationVariables>;

/**
 * __useCreateEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeMutation, { data, loading, error }] = useCreateEmployeeMutation({
 *   variables: {
 *      employee: // value for 'employee'
 *   },
 * });
 */
export function useCreateEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmployeeMutation, CreateEmployeeMutationVariables>(CreateEmployeeDocument, options);
      }
export type CreateEmployeeMutationHookResult = ReturnType<typeof useCreateEmployeeMutation>;
export type CreateEmployeeMutationResult = Apollo.MutationResult<CreateEmployeeMutation>;
export type CreateEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const UnSavedEmployeeDocument = gql`
    query UnSavedEmployee {
  unSavedEmployee @client {
    id
    employee {
      ...Employee
    }
  }
}
    ${EmployeeFragmentDoc}`;

/**
 * __useUnSavedEmployeeQuery__
 *
 * To run a query within a React component, call `useUnSavedEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnSavedEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnSavedEmployeeQuery({
 *   variables: {
 *   },
 * });
 */
export function useUnSavedEmployeeQuery(baseOptions?: Apollo.QueryHookOptions<UnSavedEmployeeQuery, UnSavedEmployeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UnSavedEmployeeQuery, UnSavedEmployeeQueryVariables>(UnSavedEmployeeDocument, options);
      }
export function useUnSavedEmployeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UnSavedEmployeeQuery, UnSavedEmployeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UnSavedEmployeeQuery, UnSavedEmployeeQueryVariables>(UnSavedEmployeeDocument, options);
        }
export type UnSavedEmployeeQueryHookResult = ReturnType<typeof useUnSavedEmployeeQuery>;
export type UnSavedEmployeeLazyQueryHookResult = ReturnType<typeof useUnSavedEmployeeLazyQuery>;
export type UnSavedEmployeeQueryResult = Apollo.QueryResult<UnSavedEmployeeQuery, UnSavedEmployeeQueryVariables>;
export const CreateEmployeeInCacheDocument = gql`
    mutation CreateEmployeeInCache($employee: EmployeeInputType!) {
  createEmployeeInCache(employee: $employee) @client {
    id
    employee {
      ...Employee
    }
  }
}
    ${EmployeeFragmentDoc}`;
export type CreateEmployeeInCacheMutationFn = Apollo.MutationFunction<CreateEmployeeInCacheMutation, CreateEmployeeInCacheMutationVariables>;

/**
 * __useCreateEmployeeInCacheMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeInCacheMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeInCacheMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeInCacheMutation, { data, loading, error }] = useCreateEmployeeInCacheMutation({
 *   variables: {
 *      employee: // value for 'employee'
 *   },
 * });
 */
export function useCreateEmployeeInCacheMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmployeeInCacheMutation, CreateEmployeeInCacheMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmployeeInCacheMutation, CreateEmployeeInCacheMutationVariables>(CreateEmployeeInCacheDocument, options);
      }
export type CreateEmployeeInCacheMutationHookResult = ReturnType<typeof useCreateEmployeeInCacheMutation>;
export type CreateEmployeeInCacheMutationResult = Apollo.MutationResult<CreateEmployeeInCacheMutation>;
export type CreateEmployeeInCacheMutationOptions = Apollo.BaseMutationOptions<CreateEmployeeInCacheMutation, CreateEmployeeInCacheMutationVariables>;