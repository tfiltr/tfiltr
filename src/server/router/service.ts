import {createRouter} from './context';
import {z} from 'zod';

export const serviceRouter = createRouter()
  .mutation('new', {
    input: z
      .object({
        name: z.string().min(3),
        description: z.string().min(15, 'description must have a minimum length of 15 characters'),
      }),
    async resolve({ input, ctx }) {

      console.log('test');
      const  { data, error } = await ctx.supabase.from('Service').insert([
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
      const {data:example} = await ctx.supabase
        .from('ReportAnswers')
        .select('ReportQuestions:report_question ( type )')
        .eq('id', 1);
      return example;
    },
  });
