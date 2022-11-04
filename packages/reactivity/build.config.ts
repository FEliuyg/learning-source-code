import { defineBuildConfig } from "unbuild";

defineBuildConfig({
  entries: ["./src"],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
