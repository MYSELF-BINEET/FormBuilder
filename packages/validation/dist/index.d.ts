import { z } from 'zod';
export declare const registerSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    cPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    cPassword: string;
}, {
    name: string;
    email: string;
    password: string;
    cPassword: string;
}>, {
    name: string;
    email: string;
    password: string;
    cPassword: string;
}, {
    name: string;
    email: string;
    password: string;
    cPassword: string;
}>;
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const resetPasswordSchema: z.ZodEffects<z.ZodObject<{
    newPassword: z.ZodString;
    cNewPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    newPassword: string;
    cNewPassword: string;
}, {
    newPassword: string;
    cNewPassword: string;
}>, {
    newPassword: string;
    cNewPassword: string;
}, {
    newPassword: string;
    cNewPassword: string;
}>;
export declare const changePasswordSchema: z.ZodEffects<z.ZodObject<{
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
    cNewPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    newPassword: string;
    cNewPassword: string;
    oldPassword: string;
}, {
    newPassword: string;
    cNewPassword: string;
    oldPassword: string;
}>, {
    newPassword: string;
    cNewPassword: string;
    oldPassword: string;
}, {
    newPassword: string;
    cNewPassword: string;
    oldPassword: string;
}>;
export declare const userProfileSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
}>;
