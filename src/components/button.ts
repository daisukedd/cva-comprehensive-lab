import { cva, type VariantProps } from "class-variance-authority";

export const button = cva(
    "font-medium rounded transition-colors", // base
    {
        variants: {
            color: {
                blue: "bg-blue-600 text-white",
                red: "bg-red-600  text-white",
                gray: "bg-gray-200 text-gray-800",
                green: "bg-green-600"
            },
            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-6 py-3 text-lg",
            },
        },
        defaultVariants: {
            color: "blue",
            size: "md",
        },
    }
);

export type ButtonProps = VariantProps<typeof button>;