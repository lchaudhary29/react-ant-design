import {
  EmployeeId,
  createEmployeeInCache,
} from "./components/EmployeeCreator/createEmployeeInCache";
import { resetEmployeeInCache } from "./components/EmployeeCreator/resetEmployeeInCache";
import {
  TypeOfDepartment,
  UnSavedEmployeeDocument,
} from "./gql/apolloGenerated";
import { ApolloClient, DataProxy, InMemoryCache } from "@apollo/client";
import { EmployeeFragment } from "./gql/apolloGenerated";
import { v4 as uuidv4 } from "uuid";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
  resolvers: {
    Mutation: {
      createEmployeeInCache,
      resetEmployeeInCache,
    },
  },
});

export const UNSAVED_EMPLOYEE_ID = "UNSAVED_EMPLOYEE_ID";
setInitialUnsavedEmployeeState(apolloClient);

apolloClient.onResetStore(() => resetCache());

export function resetCache(): Promise<void> {
  setInitialUnsavedEmployeeState(apolloClient);

  return Promise.resolve();
}

export function setInitialUnsavedEmployeeState(
  apolloClient: DataProxy,
  employee: EmployeeFragment = {
    __typename: "EmployeeType",
    id: null,
    name: null,
    age: null,
    departmentId: TypeOfDepartment.Finance,
    dob: null,
    isActive: false,
  }
): void {
  apolloClient.writeQuery({
    data: {
      unSavedEmployee: {
        __typename: "UnSavedEmployee",
        id: UNSAVED_EMPLOYEE_ID,
        employee: {
          __typename: "EmployeeType",
          id: EmployeeId,
          name: null,
          age: null,
          departmentId: TypeOfDepartment.Finance,
          dob: null,
          isActive: false,
        },
      },
    },
    query: UnSavedEmployeeDocument,
  });
}
