import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import css from './FormBook.module.css';

const FormBook = () => {
  const [bookingData, setBookingData] = useState();
  useEffect(() => {
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  }, [bookingData]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    setBookingData(data);
    toast(
      'Your data has been sent successfully. Our manager will contact you shortly'
    );
    reset();
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formTitleWrap}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.formTitleText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formInputs}>
          <input
            {...register('firstName', { required: true, maxLength: 20 })}
            placeholder="Name"
            className={css.formInput}
          />
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
            className={css.formInput}
          />
          <input
            type="date"
            {...register('dateBook', { required: true })}
            placeholder="Booking date"
            className={css.formInput}
          />
          <textarea
            {...register('comment')}
            placeholder="Comment"
            rows={10}
            className={css.formTexrarea}
          ></textarea>
        </div>

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormBook;
