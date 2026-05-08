import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
    "font-medium rounded transition-colors", // base
    {
        variants: {
            color: {
                blue: "bg-blue-600 text-white",
                red: "bg-red-600  text-white",
                gray: "bg-gray-200 text-gray-800",
                gren: "bg-green-600"
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

type ButtonProps = VariantProps<typeof button>;

function showButton(label: string, props: ButtonProps) {
    const classes = button(props);
    console.log(`[${label}]`);
    console.log(`  classes: ${classes}`);
    console.log();
}

console.log("CVA — Class Variance Authority\n");

showButton("default (without props)", {});
showButton("blue big", { color: "blue", size: "lg" });
showButton("red small", { color: "red", size: "sm" });
showButton("gray medium", { color: "gray", size: "md" });