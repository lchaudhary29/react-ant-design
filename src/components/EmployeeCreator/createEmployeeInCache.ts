import { DataProxy } from "@apollo/client";
import {
  AppMutationCreateEmployeeInCacheArgs,
  UnSavedEmpFragment,
  UnSavedEmpFragmentDoc,
} from "../../gql/apolloGenerated";

import { UNSAVED_EMPLOYEE_ID } from "../../apolloClient";

export const EmployeeId = "2496a3cc-3774-4a85-8277-e9e8fa6eb810";
export function getUnSavedEmployeeCacheId(): string {
  return `UnSavedEmployee:${UNSAVED_EMPLOYEE_ID}`;
}

export function createEmployeeInCache(
  _: object,
  args: AppMutationCreateEmployeeInCacheArgs,
  {
    client,
  }: {
    client: DataProxy;
  }
): void | null {
  const cacheId = getUnSavedEmployeeCacheId();
  const fragmentOptions = {
    fragment: UnSavedEmpFragmentDoc,
    fragmentName: "UnSavedEmp",
    id: cacheId,
  };

  const fragmentData = client.readFragment<UnSavedEmpFragment>(fragmentOptions);

  const createEmployee = { ...fragmentData?.employee, ...args.employee };

  client.writeFragment({
    ...fragmentOptions,
    data: {
      __typename: "UnSavedEmployee",
      employee: createEmployee,
    },
  });
}
