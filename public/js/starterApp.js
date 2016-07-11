// Include the dependency upon ngMaterial - important !!
angular
  .module('MyApp', ['ngMaterial'])
  .run(function($log) {
    $log.debug("MyApp is ready!");
  });
