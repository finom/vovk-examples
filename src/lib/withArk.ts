import { type } from 'arktype';
import { createStandardValidation } from 'vovk';

export const withArk = createStandardValidation({
  toJSONSchema: (model: type) =>
    model.toJsonSchema({
      fallback: {
        proto: (ctx) =>
          ctx.proto === File
            ? {
                type: 'string',
                format: 'binary',
              }
            : ctx.base,
        default: (ctx) => ctx.base,
      },
    }),
});