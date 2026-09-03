import { useState, useEffect } from "react";
import type { BlogItem } from "./types/common";

const useFetch = (url: string) => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data: BlogItem[]) => {
        setTimeout(() => {
          setBlogs(data);
          setLoading(false);
        }, 1000);
      })
      .catch((err: unknown) => {
        setLoading(false);
        setError(err instanceof Error ? err.message : String(err));
      });
  }, []);

  return { blogs, loading, error };
};

export default useFetch;
