import { FormikErrors, FormikTouched } from 'formik';

interface IValues {
  from: string;
  to: string;
  act: string;
  loadingDate: string;
}

export const getError = (errors: FormikErrors<IValues>, touched: FormikTouched<IValues>) => {
  if (errors.to && touched.to) return errors.to;
  if (errors.from && touched.from) return errors.from;
  if (errors.act && touched.act) return errors.act;
  if (errors.loadingDate && touched.loadingDate) return errors.loadingDate;
};
