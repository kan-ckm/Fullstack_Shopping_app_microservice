import z from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: [string, ...string[]];
    colors: [string, ...string[]];
    images: Record<string, string>;
}
export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
    quantity: number,
    selectedSize: string,
    selectedColor: string,
}

export type CartItemsType = CartItemType[]

export const shippingFormSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.email({ message: "Invalid email format!" }).min(1, { message: 'Email is required!' }),
    phone: z.string().min(7, "Phone number must be betwen7 and 10 digits!")
        .max(10, "Phone number must be betwen7 and 10 digits!")
        .regex(/^\d+$/, "Phone number must contain only numbers!"),
    address: z.string().min(1, "Address is require!"),
    city: z.string().min(1, "City is require!"),

});
export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
export const paymentFormSchema = z.object({
    cardHolder: z.string().min(1, "Card holer is required!"),
    cardNumber: z.string().min(16, "Card number is required!").max(16, "Card number is required!"),
    expirationDate:
        z.string()
            .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expirtation date must be in MM/YY format"),
    cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!")


});
export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;


export type CartStoreStateType = {
    cart: CartItemsType;
    hasHydrate: boolean
}
export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void;
    removeFromCart: (product: CartItemType) => void;
    clearCart: () => void;
}