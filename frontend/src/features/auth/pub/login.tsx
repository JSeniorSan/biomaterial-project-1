"use client";

import { Card, CardContent } from "@/shared/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthBtnPanelControl from "../_ui/auth-btn-panel-control";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/redux-hooks";
import { RootState } from "@/entities/store";
import { login } from "@/entities/store/auth/auth-thunk";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isAuth, loading } = useSelector((state: RootState) => state.auth);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(login(values));
  }

  useEffect(() => {
    if (isAuth) {
      router.replace("/lab_1");
    }
  }, [isAuth]);

  return (
    <figure>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <Card className="bg-[#756C83] dark:bg-[#BDB79A]">
            <Card className="z-10 -translate-x-2 -translate-y-2 shadow-md border-none">
              <CardContent>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="pt-4">
                      <FormLabel className="font-bold">Логин</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="username..."
                          {...field}
                          className="bg-[var(--input-bg)]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="pt-4">
                      <FormLabel className="font-bold">Пароль</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Пароль..."
                          {...field}
                          className="bg-[var(--input-bg)]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </Card>
          <AuthBtnPanelControl loading={loading} />
        </form>
      </Form>
    </figure>
  );
};

export default Login;
