/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
  // watchPaths: [require.resolve("shared-ui-package-name")],
  serverModuleFormat: "cjs",
  future: {
    v2_errorBoundary: true,
    unstable_dev: true,
    v2_meta: true,
    v2_routeConvention: true,
    v2_normalizeFormMethod: true,
  },
};
