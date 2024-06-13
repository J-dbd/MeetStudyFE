"use client";
import { useState, useEffect } from "react";
import getTokenByClient from "@/util/getTokenByClient";
import { getUserInfoFromToken } from "@/util/getUserInfo";
/**
 *
 * @param requiredFields
 * @returns [myData, error, loading]
 */
const useFetchUserInfo = <T>(requiredFields: string[] | string) => {
  const [myData, setMyData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const token = getTokenByClient();
        console.log(
          "useGetUserInfo에서 데이터를 호출합니다: apiUrl, requiredFields, token",
          requiredFields,
          token
        );
        const data = await getUserInfoFromToken(token, requiredFields);
        setMyData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("알 수 없는 에러가 발생했습니다."));
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  //console.log("[useFetch.ts] data?", data);

  return [myData, error, loading] as const;
};

export default useFetchUserInfo;
