import * as yup from 'yup';
import { AppError } from '../../common/errors';

export const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email(AppError.InvalidEmail)
        .required(AppError.RequiredField),
    password: yup
        .string()
        .min(8, AppError.MinLength)
        .required(AppError.RequiredField),
});

export const RegisterSchema = yup.object().shape({
    email: yup
        .string()
        .email(AppError.InvalidEmail)
        .required(AppError.RequiredField),
    password: yup
        .string()
        .min(8, AppError.MinLength)
        .required(AppError.RequiredField),
    repeatPassword: yup
        .string()
        .min(8, AppError.MinLength)
        .required(AppError.RequiredField),
    name: yup.string().required(AppError.RequiredField),
    username: yup.string().required(AppError.RequiredField),
});
