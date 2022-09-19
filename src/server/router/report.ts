import {createRouter} from 'src/server/router/context';
import {z} from 'zod';

export const reportRouter = createRouter()
  .mutation('newAnswers', {
    input: z.array(z.object({
      reportQuestion: z.number(),
      report: z.string().uuid(),
      response: z.array(z.string()).or(z.string())
    })),
    async resolve ({input, ctx}) {
      const {data, error} = await ctx.supabase
        .from('ReportAnswers')
        .insert(input.map((answer) => ({
          ...answer,
          response: Array.isArray(answer.response) ? answer.response : [answer.response],
        })))
        .select();

      if (error) {
        throw error;
      }

      return data;
    }
  })
  .mutation('newQuestions', {
    input: z.array(z.object({
      question: z.object({
        question: z.string(),
        subheading: z.string().nullish(),
        type: z.string(),
        responseOptions: z.array(z.string()).nullish(),
      }),
      serviceType: z.number(),
    })),
    async resolve ({input, ctx}) {
      const {data, error} = await ctx.supabase
        .from('ReportQuestions')
        .insert(input.map((question) => ({...question.question})))
        .select();

      if (error) {
        throw error;
      }

      const {error: joinError} = await ctx.supabase
        .from('ReportQuestionServiceType')
        .insert(data.map((newQuestion, index) => ({
          reportQuestion: newQuestion.id,
          serviceType: input[index].serviceType,
        })));

      if (joinError) {
        throw joinError;
      }

      return data;
    }
  })
  .mutation('newReport', {
    input: z.object({
      title: z.string(),
      score: z.number(),
      summary: z.string(),
      service: z.string().uuid(),
    }),
    async resolve({input, ctx}) {
      const {data, error} = await ctx.supabase
        .from('Reports')
        .insert(input)
        .select();

      if (error) {
        throw error;
      }

      return data;
    },
  });
