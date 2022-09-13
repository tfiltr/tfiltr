import type {NextPage} from 'next';
import {trpc} from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.getAll"]);

  const { mutate } = trpc.useMutation(["service.new"]);

  const onClick = () => {
    mutate({
      name: "tesjnt",
      description: "test njnkof new Mutation, to supabase"
    })
  }

  return (
    <main>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full flex-col">
          {hello.data ? <p>{hello.data.map(r => r.name).join(', ')}</p> : <p>Loading..</p>}
          <button onClick={onClick} >Test</button>
        </div>
    </main>
  );
};

export default Home;
