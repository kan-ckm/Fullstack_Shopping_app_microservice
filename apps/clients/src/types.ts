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
// Register form schema
export const registerFormSchema = z.object({
    name: z.string().min(1, "Name is required!").max(100, "Name is too long!"),
    email: z.string().email({ message: "Invalid email format!" }).min(1, { message: 'Email is required!' }),
    password: z.string()
        .min(8, "Password must be at least 8 characters!")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter!")
        .regex(/[a-z]/, "Must contain at least one lowercase letter!")
        .regex(/[0-9]/, "Must contain at least one number!")
        .regex(/[^A-Za-z0-9]/, "Must contain at least one special character!"),
    confirmPassword: z.string().min(1, "Confirm password is required!"),
    role: z.enum(['user', 'admin']).default('user')
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
})
export type RegisterFormInputs = z.infer<typeof registerFormSchema>;
// Login form schema
export const loginFormSchema = z.object({
    email: z.string().email({ message: "Invalid email format!" }).min(1, { message: 'Email is required!' }),
    password: z.string().min(1, "Password is required!")
})

export type LoginFormInputs = z.infer<typeof loginFormSchema>;

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
