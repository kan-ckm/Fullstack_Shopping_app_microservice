"use client"

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ControllerRenderProps } from "react-hook-form"

//  Interface mở rộng cho phép nhận cả hai kiểu:
// - {...field} (trải props từ RHF)
// - hoặc field={field} (truyền trực tiếp object field)
interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
    field?: ControllerRenderProps<any, any> // field là tùy chọn, không bắt buộc
}

// forwardRef giúp component này tương thích với React Hook Form (ref forwarding)
export const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
    ({ className, field, ...props }, ref) => {
        // Trạng thái ẩn/hiện mật khẩu
        const [show, setShow] = React.useState(false)

        //  Nếu có truyền prop field => dùng nó, còn không thì dùng props bình thường
        const inputProps = field ? field : props

        return (
            <div className="relative">
                {/*  Input gốc của Shadcn/UI */}
                <Input
                    ref={ref}
                    //  Chuyển đổi type giữa "text" và "password"
                    type={show ? "text" : "password"}
                    className={`pr-10 ${className ?? ""}`}
                    {...inputProps} // Trải props (dù là field hay input thông thường)
                />

                {/*  Nút ẩn/hiện mật khẩu */}
                <button
                    type="button"
                    onClick={() => setShow((p) => !p)}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                >
                    {show ? (
                        <EyeOff className="h-5 w-5" />
                    ) : (
                        <Eye className="h-5 w-5" />
                    )}
                </button>
            </div>
        )
    }
)

InputPassword.displayName = "InputPassword"
