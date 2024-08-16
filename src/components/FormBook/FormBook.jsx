import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import css from './FormBook.module.css';
import clsx from 'clsx';

const schema = yup.object().shape({
  name: yup.string().required().max(10),
  email: yup.string().email().required(),
  bookingDate: yup.string().required(),
  comment: yup.string().notRequired(),
});

const FormBook = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const datePickerRef = useRef(null);

  const onSubmit = data => {
    console.log(data);
    toast(
      'Your data has been sent successfully. Our manager will contact you shortly'
    );
    reset();
  };

  const today = new Date();

  return (
    <div className={css.formContainer}>
      <div className={css.formTitleWrap}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.formTitleText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        {/* Поле для ім'я */}
        <div className={css.formInputs}>
          <input
            id="name"
            {...register('name')}
            placeholder="Name"
            className={clsx(css.formInput, {
              [css.error]: errors.name,
            })}
          />
          <p className={css.errorMessage}>{errors.name?.message}</p>
        </div>

        {/* Поле для email */}
        <div>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="Email"
            className={clsx(css.formInput, {
              [css.error]: errors.name,
            })}
          />
          <p className={css.errorMessage}>{errors.email?.message}</p>
        </div>

        {/* Поле для дати */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* <label htmlFor="bookingDate">Booking Date:</label> */}
          <Controller
            control={control}
            name="bookingDate"
            render={({ field }) => (
              <DatePicker
                placeholderText="Booking date"
                onChange={date => field.onChange(date)}
                selected={field.value}
                dateFormat="dd/MM/yyyy"
                // className="custom-input"
                className={css.formInput}
                minDate={today}
                ref={datePickerRef}
              />
            )}
          />
          <FaCalendarAlt
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={() => datePickerRef.current.setFocus()}
          />
        </div>

        {/* Поле для коментаря */}
        <div>
          <textarea
            id="comment"
            {...register('comment')}
            placeholder="Comment"
            rows={10}
            className={css.formTexrarea}
          />
          {errors.comment && <p>{errors.comment.message}</p>}
        </div>

        <button type="submit" className="btn red">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormBook;
