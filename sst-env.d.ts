/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    MyDatabase: {
      clusterArn: string
      database: string
      secretArn: string
      type: "sst.aws.Postgres"
    }
    MyWeb: {
      type: "sst.aws.SolidStart"
      url: string
    }
  }
}
export {}