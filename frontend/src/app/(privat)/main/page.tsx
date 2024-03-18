"use client";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

const Main = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/main/lab1");
  }, [router]);

  return <></>;
};

export default Main;
