import { createRouter } from './context';
import { z } from 'zod';

const atLeastOneDefined = (obj: Record<string | number | symbol, unknown>) =>
  Object.values(obj).some(v => v !== undefined);

export const serviceRouter = createRouter()
  // Get All Services
  .query('getAll', {
    input: z.object({
      filter: z
        .object({
          placeId: z.string().array().optional(),
          serviceType: z.array(z.string()).or(z.string()).optional(),
          overallRating: z.object({
            min: z.number().min(0).optional(),
            max: z.number().max(10).optional()
          }).refine(r => atLeastOneDefined(r)).optional()
        })
        .partial()
        .refine(
          ({ placeId, serviceType, overallRating }) =>
            (placeId && !serviceType && !overallRating) || (!placeId && (serviceType || overallRating))
        )
        .optional(),
      limit: z.number().max(1000).default(100),
      offset: z.number().default(0),
    }),
    async resolve({ input, ctx }) {
      const query = ctx.supabase.from('Service').select('*');
      if (input.filter) {
        if (input.filter.placeId) {
          query.in('placeId', input.filter.placeId);
        } else if (input.filter.serviceType) {
          throw new Error('the `serviceType` filter in not currently implemented');
        } else if (input.filter.overallRating) {
          throw new Error('the `overallRating` filter in not currently implemented');
        }
      }

      query.range(input.offset, input.limit);

      const { data, error } = await query;

      if (error || !data) throw error;
      return data;
    }
  })

  // Get Service by ...
  .query('getBy', {
    input: z.object({
      placeId: z.string(),
    })
      .partial()
      .refine(input => atLeastOneDefined(input)),
    async resolve({ input, ctx }) {
      const query = ctx.supabase.from('Service').select('*');

      if (input.placeId) {
        query.eq('placeId', input.placeId);
      }

      query.maybeSingle();

      const { data, error } = await query;

      if (error) throw error;
      return data[0];
    }
  })

  // Add a new Service
  .mutation('new', {
    input: z
      .object({
        placeId: z.string(),
        description: z.string().min(15, 'description must have a minimum length of 15 characters'),
      }),
    async resolve({ input, ctx }) {
      const { error } = await ctx.supabase.from('Service').insert([
        {
          placeId: input.placeId,
          description: input.description,
          updated_at: new Date().toISOString()
        }
      ]);

      if (error) {
        throw error;
      }
    },
  });
