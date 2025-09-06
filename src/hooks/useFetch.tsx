import { useEffect,useState } from "react";
import axios from "axios";

export function useFetch<T>(url: string){
  const [data,setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch(err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unkown error occured");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[url])
  return {data,loading,error}
}