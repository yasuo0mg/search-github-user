import { useCallback, useState } from "react";

interface Items {
  avatar_url: string;
  html_url: string;
  login: string;
}

type DataType = {
  total_count: number;
  incomplete_results: boolean;
  items: Items[];
};

export const useFetchUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataType>({
    total_count: 0,
    incomplete_results: true,
    items: [],
  });

  const extractPartialMatchedData = useCallback(
    (query: string, items: Items[]): Items[] => {
      const result: Items[] = [];

      items.map((item) => {
        // queryとusername(login)が部分一致してるものだけを抽出する
        if (item.login.includes(query)) {
          result.push(item);
        }
      });

      return result;
    },
    []
  );

  const fetchUsers = useCallback(
    async (query: string) => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.github.com/search/users?q=${query}+type:user`
        );
        const json: DataType = await res.json();
        setData({
          total_count: json.total_count,
          incomplete_results: json.incomplete_results,
          items: extractPartialMatchedData(query, json.items),
        });
        setIsLoading(false);
      } catch (e) {
        console.error();
      }
    },
    [extractPartialMatchedData]
  );

  return { data, isLoading, fetchUsers };
};
