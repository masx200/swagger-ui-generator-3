window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: new URL("./openapi.json", location.href).href,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    validatorUrl: "https://validator.swagger.io/validator",
    queryConfigEnabled: true,
    supportedSubmitMethods: ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace', 'mkcol', 'propfind', 'proppatch', 'copy', 'move', 'lock', 'unlock', 'version-control', 'report', 'checkout', 'checkin', 'uncheckout', 'mkworkspace', 'update', 'label', 'merge', 'bind', 'unbind', 'orderpatch', 'acl'],

  });

  //</editor-fold>
};
