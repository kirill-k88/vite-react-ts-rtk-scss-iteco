import { FC } from 'react';

import styles from './FilterForm.module.scss';
import { Field, Form, Formik } from 'formik';
import { filterFormSchema } from './model/filterFormSchema';
import Arrows from '../../images/Arrows.png';

export const FilterForm: FC = () => {
  return (
    <section className={styles.filterForm}>
      <Formik
        initialValues={{
          from: null,
          to: null,
          loadingDate: null,
          act: null
        }}
        validationSchema={filterFormSchema}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={styles.filterForm__form}>
            <div className={styles.filterForm__lineContainer}>
              <h2 className={styles.filterForm__header}>Поиск грузов</h2>
              <Field
                name="act"
                placeholder="№ заказа"
                type="uuid"
                className={styles.filterForm__actField}
              />
              {errors.act && touched.act && (
                <div className={styles.filterForm__actField}>{errors.act}</div>
              )}
            </div>
            <div className={styles.filterForm__lineContainer}>
              <div className={styles.filterForm__cityContainer}>
                <Field
                  name="from"
                  placeholder="Москва"
                  type="text"
                  className={styles.filterForm__cityField}
                />
                {errors.from && touched.from && <div>{errors.from}</div>}

                <Field
                  name="to"
                  placeholder="Ярославль"
                  type="text"
                  className={styles.filterForm__cityField}
                />
                {errors.to && touched.to && <div>{errors.to}</div>}

                <img src={Arrows} className={styles.filterForm__arrows} />
              </div>

              <Field
                name="loadingDate"
                type="date"
                placeholder="Дата погрузки"
                className={styles.filterForm__dataField}
              />
              {errors.loadingDate && touched.loadingDate && <div>{errors.loadingDate}</div>}
            </div>
            <div className={styles.filterForm__btnsContainer}>
              <button type="button" disabled={isSubmitting} className={styles.filterForm__resetBtn}>
                Сбросить фильтры
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.filterForm__submitBtn}
              >
                ПОИСК
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
