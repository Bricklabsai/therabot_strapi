module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        if (ctx.request.url === "/") {
          ctx.redirect("/admin");
        } else {
          await next();
        }
      };
};