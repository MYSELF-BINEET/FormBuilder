"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileSchema = exports.changePasswordSchema = exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
const password = zod_1.z
    .string({ required_error: 'Please provide a password' })
    .regex(new RegExp('.*[A-Z].*'), 'Must contain a uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'Must contain a lowercase character')
    .regex(new RegExp('.*\\d.*'), 'Must contain a number')
    .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), 'Must contain a special character')
    .min(8, 'Password must be at least 8 characters');
exports.registerSchema = zod_1.z
    .object({
    name: zod_1.z
        .string({ required_error: 'Please tell us your name' })
        .trim()
        .min(1, 'Please tell us your name')
        .max(30),
    email: zod_1.z
        .string({ required_error: 'Please provide your email' })
        .email('Please enter a valid email'),
    password,
    cPassword: zod_1.z.string({ required_error: 'Please confirm your password' }),
})
    .refine(({ password, cPassword }) => password === cPassword, {
    path: ['cPassword'],
    message: 'Password and Confirm password must match',
});
exports.forgotPasswordSchema = zod_1.z.object({
    email: zod_1.z
        .string({ required_error: 'Please provide your email' })
        .email('Please enter a valid email'),
});
exports.resetPasswordSchema = zod_1.z
    .object({
    newPassword: password,
    cNewPassword: zod_1.z.string({
        required_error: 'Please confirm your new password',
    }),
})
    .refine(({ newPassword, cNewPassword }) => newPassword === cNewPassword, {
    path: ['cNewPassword'],
    message: 'New password and Confirm password must match',
});
exports.changePasswordSchema = zod_1.z
    .object({
    oldPassword: zod_1.z.string({ required_error: 'Please provide old password' }),
    newPassword: password,
    cNewPassword: zod_1.z.string({
        required_error: 'Please confirm your new password',
    }),
})
    .refine(({ newPassword, cNewPassword }) => newPassword === cNewPassword, {
    path: ['cNewPassword'],
    message: 'New password and Confirm password must match',
});
exports.userProfileSchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: 'Please tell us your name' })
        .trim()
        .min(1, 'Please tell us your name')
        .max(30)
        .optional(),
    email: zod_1.z
        .string({ required_error: 'Please provide your email' })
        .email('Please enter a valid email')
        .optional(),
});
