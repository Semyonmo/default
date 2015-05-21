import 'angular';

import config from './blocks.config.js';
import logger from './blocks.logger.js';
import exception from './blocks.exception.js';

export default angular.module('app.blocks', [
    //Module
    config.name,

    //Blocks
    logger.name, exception.name
]);