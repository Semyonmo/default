export default angular
    .module('app.blocks.exception', [])
    .config(exceptionConfig);

/* @ngInject */
function exceptionConfig($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

/* @ngInject */
function extendExceptionHandler($delegate, logger) {
    return function (exception, cause) {
        $delegate(exception, cause);

        var errorData = {
            exception: exception,
            cause: cause
        };

        logger.error(exception);
        ///**
        // * Здесь можно добавить ошибку в сервисную коллекцию,
        // * добавить ошибки в $rootScope, логировать ошибки на удаленный сервер
        // * или записывать их локально. Или просто бросить ошибку дальше.
        // * throw exception;
        // */
        //toastr.error(exception.msg, errorData);
    };
}