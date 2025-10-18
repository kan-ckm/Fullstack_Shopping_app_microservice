import { IsEmail, IsNotEmpty, IsString } from "class-validator";
// có thể mở rộng đê thêm các thuộc tính khác đc gửi từ client
export class AuthDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    hash: string;
}