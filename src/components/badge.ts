import { cva, type VariantProps } from "class-variance-authority";

export const badge = cva(
    "inline-flex items-center rounded",
    {
        variants: {
            color: {
                blue: "bg-blue-600 text-white",
                red: "bg-red-600  text-white",
                green: "bg-green-600 text-white",
            },
            size: {
                sm: "px-2 py-1 text-xs",
                md: "px-3 py-1.5 text-sm",
                lg: "px-4 py-2 text-base",
            },
        },
        defaultVariants: {
            color: "red",
            size: "sm",
        },
    }
);

export type BadgeProps = VariantProps<typeof badge>;

