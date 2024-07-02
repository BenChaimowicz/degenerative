import ky from 'ky';

export const getQuote = async (): Promise<TDegen> => {
    try {
        const URL = `${import.meta.env.VITE_SERVER_URL}/degen`
        const degenRequest = await ky.get(URL).json<TDegen[]>();
        console.log("🚀 ~ getQuote ~ degenRequest:", degenRequest);
        return degenRequest[0];
    } catch (error) {
        console.error(error);
        return {id: 0, createdAt: new Date(), tag: 'Error', text: 'Error'};
    }
}


export type TDegen = { id: number, text: string, tag: string, createdAt: Date };