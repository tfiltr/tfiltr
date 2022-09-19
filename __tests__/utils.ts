import { trpc } from 'src/utils/trpc';
import { vi } from 'vitest';

type MockUseQueryReturn = {
    data?: never | never[],
    error?: Error,
}
export const mockUseQuery = ({data, error}: MockUseQueryReturn) => {
    const returnObj = {
        data, error,
        isError: !!error && !data,
        isLoading: !data && !error
    };
    vi.spyOn(trpc,'useQuery').mockReturnValue(returnObj as never);
};

export const mockUseMutation = () => {
    const mutate = vi.fn().mockImplementation(data=> console.log(data));
    const mutateAsync = vi.fn();
    vi.spyOn(trpc, 'useMutation').mockReturnValue({mutate, mutateAsync} as never);
    return {mutate, mutateAsync};
}