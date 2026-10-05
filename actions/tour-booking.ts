"use server";

import { Resend } from "resend";
import { TourFormSchema } from "@/types/tour";
import { FieldValues } from "react-hook-form";
import TourEmailTemplate from "@/emails/tour-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const BookTour = async (values: FieldValues) => {
  const validatedFields = TourFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid fields",
    };
  }

  const {
    name,
    email,
    age,
    contact,
    count,
    date,
    gender,
    nationality,
    notes,
    travellerType,
    total,
    title,
    pickupLocation,
  } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "consejo Travel and Tours <consejotravelandtours@gmail.com>",
      to: [email],
      cc: ["consejotravelandtours@gmail.com"],
      replyTo: email,
      subject: title!,
      react: TourEmailTemplate({
        name,
        email,
        age,
        contact,
        count,
        date,
        gender,
        nationality,
        notes,
        travellerType,
        total,
        title,
        pickupLocation,
      }),
    });

    if (error) {
      return { success: false, message: "Internal server error" };
    }

    return {
      success: true,
      message: "Booked successfully, Check your email",
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
