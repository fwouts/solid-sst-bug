/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "solid-sst",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const db = new sst.aws.Postgres("MyDatabase");
    new sst.aws.SolidStart("MyWeb", { link: [db] });
  },
});
