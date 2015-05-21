export default angular
    .module('app.blocks.logger',[])
    .factory('logger',logger);

/* @ngInject */
function logger($log) {
    "use strict";

    return {
        info: info,
        log: log,
        error: error,
        warn: warn,
        debug: debug
    };

    function info(text) {
        $log.info(text);
    }

    function log(text){
        $log.log(text);
    }

    function error(text) {
        $log.error(text);
    }

    function warn(text) {
        $log.warn(text);
    }

    function debug(text) {
        $log.debug(text);
    }
}