/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
    // Query by slug
    async findOne(ctx) {

        const { id } = ctx.params;
        let slug = id;
        ctx.params['slug'] = slug;
        const entity = await strapi.db.query('api::product.product').findOne({
            where: { slug }, populate: true,
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
}));
