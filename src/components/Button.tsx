import {ButtonHTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>{
    children: React.ReactNode;
    pending?: boolean;
}

const buttonVariants =cva("rounded-md font-medium text-white shadow", {
      variants: {
          variant: {
              primary: "bg-sky-500 hover:bg-sky-700",
              secondary: "bg-orange-500 hover:bg-orange-700",
              danger: "bg-red-500 hover:bg-red-700",
          },
          size:{
              sm: "text-sm px-4 py-2",
              md: "text-base px-6 py-4",
              lg: "text-xl px-8 py-10",

          },
      },
    defaultVariants: {
          variant: "primary",
          size: "md",
    }
});

const Button = ({
                    children,
                    className,
                    variant,
                    size,
                    pending,
                    ...props
}: ButtonProps) => {
    return (
        // <button className={twMerge("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all", className)}
        //         {...props}>
        //     { children }
        // </button>
        <button className={
          cn(buttonVariants({ variant, size, className }),{
          "bg-slate-900": pending,
          })}
        {...props}
        >
            {children}
        </button>
    )
}

export default Button;