import { z } from 'zod';

export const cardSchema = z.object({
  number: z
    .string({ required_error: 'O número do cartão é obrigatório.' })
    .min(19, 'O número do cartão deve ter 16 dígitos.'),
  name: z
    .string({ required_error: 'O nome do titular é obrigatório.' })
    .min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  expiry: z
    .string({ required_error: 'A data de vencimento é obrigatória.' })
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Formato inválido. Use MM/AA.')
    .refine(
      val => {
        const [month, year] = val.split('/');
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;

        const cardYear = parseInt(year, 10);
        const cardMonth = parseInt(month, 10);

        if (cardYear < currentYear) return false;
        if (cardYear === currentYear && cardMonth < currentMonth) return false;

        return true;
      },
      {
        message: 'Cartão com data de vencimento expirada.',
      },
    ),
  cvv: z
    .string({ required_error: 'O CVV é obrigatório.' })
    .min(3, 'O CVV deve ter 3 ou 4 dígitos.')
    .max(4, 'O CVV deve ter 3 ou 4 dígitos.'),
});

export type CardFormData = z.infer<typeof cardSchema>;
