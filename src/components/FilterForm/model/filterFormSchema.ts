import * as Yup from 'yup';

const VALIDATION_FIELD_FROM_MSG = `Поле 'Откуда' должно содержать от 2 до 40 символов`;
const VALIDATION_FIELD_TO_MSG = `Поле 'Куда' должно содержать от 2 до 40 символов`;
const VALIDATION_FIELD_ACT_MSG = `Поле '№ заказа' должно содержать uuid от 5 до 8 символов`;

export const filterFormSchema = Yup.object().shape({
  from: Yup.string().min(2, VALIDATION_FIELD_FROM_MSG).max(20, VALIDATION_FIELD_FROM_MSG),
  to: Yup.string().min(2, VALIDATION_FIELD_TO_MSG).max(20, VALIDATION_FIELD_TO_MSG),
  act: Yup.string().min(8, VALIDATION_FIELD_ACT_MSG).uuid(VALIDATION_FIELD_ACT_MSG)
});
