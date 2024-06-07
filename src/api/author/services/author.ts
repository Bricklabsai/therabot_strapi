
/**
 * author service
 */

const { createCoreService } = require('@strapi/strapi').factories;
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::author.author');
