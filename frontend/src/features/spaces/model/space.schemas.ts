import z from "zod";

export const createSpaceValidate = z.object({
  title: z.string().min(5, 'Минимальная длина 5').max(20, 'Максимальная длина 20'),
  description: z.string().min(15, 'Минимальная длина 15').max(100, 'Максимальная длина 100'),
  capacity: z.number().min(1).max(10000),
  rating: z.number().min(1).max(10),
  pricePerHour: z.number().min(1).max(24),
  zoneType: z.literal(['open-space', 'meeting-room', 'private-office']),
});

export type CreateSpaceType = z.infer<typeof createSpaceValidate>;
