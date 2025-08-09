import * as Yup from 'yup';

export const loginSchema = Yup.object({
    username: Yup.string()
        .email('*Email inválido')
        .required('*El email es obligatorio'),
    password: Yup.string()
        .required('*El password es obligatorio'),
});

export const registerSchema = Yup.object({
    name: Yup.string()
        .required('*El nombre es obligatorio'),
    lastName: Yup.string()
        .required('*El apellido es obligatorio'),
    username: Yup.string()
        .email('*Email inválido')
        .required('*El email es obligatorio'),
    password: Yup.string()
        .required('*El password es obligatorio'),
});

export const taskSchema = Yup.object({
    title: Yup.string()
        .required('*Este campo es obligatorio.'),
    dueDate: Yup.string()
        .required('*Este campo es obligatorio.')
        .test('is-valid-date', 'Fecha inválida', (value) => {
            return !isNaN(new Date(value).getTime());
        })
        .test('is-future', 'La fecha debe ser futura', (value) => {
            return new Date(value) > new Date();
        }),
    priority: Yup.string()
        .required('*Este campo es obligatorio.'),
    status: Yup.string()
        .required('*Este campo es obligatorio.'),
});

export const categorySchema = Yup.object({
    name: Yup.string()
    .required('*Este campo es obligatorio.')
    .max(20,'*Máximo 20 caracteres.'),
})
