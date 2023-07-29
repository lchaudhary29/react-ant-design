import { TypeOfDepartment } from "./gql/apolloGenerated";

export const DEPARTMENTS = {
  [TypeOfDepartment.Finance]: "Finance",
  [TypeOfDepartment.It]: "It",
  [TypeOfDepartment.Marketing]: "Marketing",
  [TypeOfDepartment.Operations]: "Operations",
} as const;
