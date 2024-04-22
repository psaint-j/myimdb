"use client"
import { SWRConfig, SWRConfiguration } from 'swr';

const fetcher = (url: string): Promise<any> => {
  return fetch(`/api/v1?url=${encodeURIComponent(url)}`)
    .then((res) => {
      if (!res.ok) {
        return res.json().then(() => {
          const error = new Error("Error fetching data");
          throw error;
        });
      }
      return res.json();
    });
};


const SWRProvider = ({ children }: any) => {
  const swrConfig: SWRConfiguration = { fetcher };

  return (
    <SWRConfig value={swrConfig}>
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;