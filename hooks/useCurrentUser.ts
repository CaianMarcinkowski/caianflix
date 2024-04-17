import useSWR from "swr";

import fetcher from '@/lib/fetcher';
import { FcElectricalThreshold } from "react-icons/fc";

const userCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

export default userCurrentUser;