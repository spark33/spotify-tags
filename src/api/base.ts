import axios, { AxiosError, AxiosResponse } from 'axios';

const handleError = (err: AxiosError) => {
    if (err && err.response) {
        const axiosError = err as AxiosError;
        return axiosError.response;
    }
};

export const axiosGet = async (url: string, headers: Record<string, unknown> = {}, params: Record<string, unknown> = {}) => {
    try {
        const response: AxiosResponse = await axios.get(url, { headers, params });
        return response.data;
    } catch (err) {
        handleError(err);
        return err;
    }
};