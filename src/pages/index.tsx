import type {NextPage} from 'next';
import {trpc} from 'src/utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['service.getAll']);

  const { mutate } = trpc.useMutation(['report.newQuestions']);

  const onClick = () => {
    const p = mutate([{question: {type: 'text', question: 'test'}, serviceType: 1}]);
    console.debug(p);
  };

  return (
    <main>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full flex-col">
          <button onClick={onClick} >Test</button>
        </div>
    </main>
  );
};

export default Home;
