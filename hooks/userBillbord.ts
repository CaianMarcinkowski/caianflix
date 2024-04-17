import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useBillboard = () => {
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidadeOnFocus: false,
        revalidadeOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading,
    }

}

export default useBillboard;