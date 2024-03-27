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

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthBtnPanelControl from "../_ui/auth-btn-panel-control";

const formSchema = z.object({
  login: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <Card className="bg-[#756C83] dark:bg-[#BDB79A]">
            <Card className="z-10 -translate-x-2 -translate-y-2 shadow-md border-none">
              <CardContent>
                <FormField
                  control={form.control}
                  name="login"
                  render={({ field }) => (
                    <FormItem className="pt-4">
                      <FormLabel className="font-bold">Логин</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Логин..."
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
          <AuthBtnPanelControl />
        </form>
      </Form>
    </div>
  );
};

export default Login;
