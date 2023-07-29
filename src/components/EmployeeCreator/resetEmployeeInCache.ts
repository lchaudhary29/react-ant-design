import { DataProxy } from "@apollo/client";
import { getUnSavedEmployeeCacheId } from "./createEmployeeInCache";
import { EmployeeFragmentDoc } from "../../gql/apolloGenerated";

export function resetEmployeeInCache(
  _: object,
  {
    client,
  }: {
    client: DataProxy;
  }
): void {
  const cacheId = getUnSavedEmployeeCacheId();
  const fragmentOptions = {
    fragment: EmployeeFragmentDoc,
    fragmentName: "Employee",
    id: cacheId,
  };

  client.writeFragment({
    ...fragmentOptions,
    data: {
      __typename: "UnsavedInvestment",
      employee: {},
    },
  });
}
