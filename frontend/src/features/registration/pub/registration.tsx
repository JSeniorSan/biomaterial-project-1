"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationModel } from "../model/registration-model";
import BtnControlPanel from "../_ui/btn-control-panel";

const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "В поле должно быть как минимум 2 символа",
  }),
  second_name: z.string().min(2, {
    message: "В поле должно быть как минимум 2 символа",
  }),
  group: z.string().min(2, {
    message: "В поле должно быть как минимум 2 символа",
  }),
  email: z.string().min(2, {
    message: "В поле должно быть как минимум 2 символа",
  }),
  password: z.string().min(2, {
    message: "В поле должно быть как минимум 2 символа",
  }),
});
const Registration = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      second_name: "",
      group: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 md:border-2 md:p-5 md:w-96 md:bg-[#756C83] md:bg-opacity-40 md:rounded-2xl backdrop-blur-md md:shadow-md">
        {registrationModel.map((model) => {
          return (
            <FormField
              key={model.name}
              control={form.control}
              name={model.name}
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormLabel className="text-[#1B2B1B] font-bold dark:text-[#F3ECC8]">
                    {model.lable}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={model.placeholder}
                      {...field}
                      className="bg-[#FBFBFB] h-11 backdrop-blur-md bg-opacity-80"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <BtnControlPanel />
      </form>
    </Form>
  );
};

export default Registration;
