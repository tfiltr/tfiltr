import {createRouter} from './context';
import {z} from 'zod';

export const serviceRouter = createRouter()
  .query('getAll', {
    input: z
    .object({
      // serviceType
      // location and radius
      // overall rating
      // parent service
    }).nullable(),
    async resolve({input, ctx}) {
      const {data, error} = await ctx.supabase.from('Service').select('*');
      // TODO: apply filter object
      if (error && !data) {
        throw error;
      }
      return data;
    }
  })
  .mutation('new', {
    input: z
      .object({
        name: z.string().min(3),
        description: z.string().min(15, 'description must have a minimum length of 15 characters'),
      }),
    async resolve({ input, ctx }) {

      console.log('test');
      const  { error } = await ctx.supabase.from('Service').insert([
        {
          name: input.name,
          description: input.description,
          updated_at: new Date().toISOString()
        }
      ]);

      if (error) {
        throw error;
      }
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      const {data:example} = await ctx.supabase.from('example').select('*');
      return example;
    },
  });
