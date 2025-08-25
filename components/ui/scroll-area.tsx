import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
        ref={ref}
        type="always"               // всегда показывать скроллбар
        className={cn("relative", className)}
        {...props}
    >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
    </ScrollAreaPrimitive.Viewport>

    {/* Вертикальный скроллбар */}
    <ScrollBar orientation="vertical" />
    {/* Горизонтальный — если нужен, раскомментируй: */}
    {/* <ScrollBar orientation="horizontal" /> */}

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.Scrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
            // размеры «дорожки»
            "flex select-none touch-none !right-[-24]",                      // внутренние отступы = «зазор» вокруг ползунка
            "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[10px]",
            "data-[orientation=horizontal]:h-[8px] data-[orientation=horizontal]:w-full",
            // стили «дорожки»
            "bg-[#E5E5E5] rounded-full",                                // серая дорожка
            className
        )}
        {...props}
    >
      {/* «ползунок» */}
      <ScrollAreaPrimitive.Thumb
          className={cn(
              "relative flex-1 rounded-full",
              "bg-[#e60000]",                                           // красный ползунок
              "hover:bg-[#cc0000]",                                     // ховер по желанию
              // чтобы на очень маленькой области его можно было схватить
              "before:absolute before:content-[''] before:inset-0 before:min-h-[20px] before:min-w-[20px]"
          )}
      />
    </ScrollAreaPrimitive.Scrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName

export { ScrollArea, ScrollBar }
