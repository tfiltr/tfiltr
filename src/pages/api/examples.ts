// src/pages/api/examples.ts
import type {NextApiRequest, NextApiResponse} from 'next';
import {supabase} from 'src/server/db/client';

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const {data} = await supabase.from('example').select('*');
  res.status(200).json(data);
};

export default examples;
