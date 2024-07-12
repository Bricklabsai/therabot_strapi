
/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
    // Query by slug
    async findOne(ctx) {

        const { id } = ctx.params;
        let slug = id;
        ctx.params['slug'] = slug;
        const entity = await strapi.db.query('api::post.post').findOne({
            where: { slug }, populate: true,
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
})

);