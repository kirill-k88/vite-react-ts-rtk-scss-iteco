import { type FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';

import { filterFormSchema } from './model/filterFormSchema';
import Arrows from '../../images/Arrows.png';
import { getError } from './functions/functions';
import { setFilter, resetFilter } from '../../store/slices/filterSlice';
import type { IFilter } from '../../types/types';
import styles from './FilterForm.module.scss';

export const FilterForm: FC = () => {
  const dispatch = useDispatch();
  const [fieldDateType, setFieldDateType] = useState('text');

  const submitHandle = (values: IFilter, setSubmitting: (isSubmitting: boolean) => void) => {
    dispatch(setFilter({ filter: values }));
    setSubmitting(false);
  };

  const resetHandle = (reset: () => void, setSubmitting: (isSubmitting: boolean) => void) => {
    dispatch(resetFilter());
    setSubmitting(false);
    reset();
  };

  return (
    <section className={styles.filterForm}>
      <Formik<IFilter>
        initialValues={{
          from: '',
          to: '',
          loadingDate: '',
          act: ''
        }}
        validationSchema={filterFormSchema}
        onSubmit={(values, formikHelpers) => submitHandle(values, formikHelpers.setSubmitting)}>
        {({
          errors,
          touched,
          isSubmitting,
          setFieldValue,
          values,
          setFieldTouched,
          resetForm,
          setSubmitting
        }) => (
          <Form className={styles.filterForm__form}>
            <div className={styles.filterForm__lineContainer}>
              <h2 className={styles.filterForm__header}>Поиск грузов</h2>
              <Field
                name="act"
                placeholder="№ заказа"
                type="uuid"
                className={styles.filterForm__actField}
              />
            </div>
            <div className={styles.filterForm__lineContainer}>
              <div className={styles.filterForm__cityContainer}>
                <Field
                  name="from"
                  placeholder="Откуда"
                  type="text"
                  className={styles.filterForm__cityField}
                />

                <Field
                  name="to"
                  placeholder="Куда"
                  type="text"
                  className={styles.filterForm__cityField}
                />

                <img
                  src={Arrows}
                  className={styles.filterForm__arrows}
                  onClick={() => {
                    const from = values.from;
                    const to = values.to;

                    setFieldValue('from', to);
                    setFieldTouched('from', false);
                    setFieldValue('to', from);
                    setFieldTouched('to', false);
                  }}
                />
              </div>

              <Field
                name="loadingDate"
                type={fieldDateType}
                placeholder="Дата погрузки"
                className={styles.filterForm__dataField}
                onFocus={() => {
                  setFieldDateType('date');
                }}
                onBlur={() => {
                  setFieldDateType('text');
                }}
              />
            </div>
            <div
              className={classNames(
                styles.filterForm__lineContainer,
                styles.filterForm__lineContainer_btn
              )}>
              {(errors.to && touched.to) ||
              (errors.from && touched.from) ||
              (errors.act && touched.act) ||
              (errors.loadingDate && touched.loadingDate) ? (
                <span className={styles.filterForm__error}>{getError(errors, touched)}</span>
              ) : (
                <span />
              )}
              <div className={styles.filterForm__btnsContainer}>
                <button
                  type="button"
                  disabled={isSubmitting}
                  className={styles.filterForm__resetBtn}
                  onClick={() => resetHandle(resetForm, setSubmitting)}>
                  Сбросить фильтры
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.filterForm__submitBtn}>
                  ПОИСК
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
