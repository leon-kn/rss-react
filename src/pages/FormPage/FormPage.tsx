import { SubmitHandler, useForm } from 'react-hook-form';
import FormCard from 'src/components/FormCard/FormCard';
import Modal from 'src/components/Modal';
import styles from './FormPage.module.css';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { addFormItem, setModal } from 'src/store/reducers/FormSlice';

interface FormData {
  name: string;
  birthday: string;
  country: string;
  gender: string;
  avatar: File[];
  permission: boolean;
}

const FormPage = () => {
  const dispatch = useAppDispatch();
  const { formItems, isPopupOpen } = useAppSelector((state) => state.formReducer);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const avatarData = data.avatar[0];
    const avatar = URL.createObjectURL(avatarData);
    const card = {
      name: data.name,
      birthday: data.birthday,
      country: data.country,
      gender: data.gender,
      avatar: avatar,
      permission: true,
    };
    dispatch(addFormItem(card));
    dispatch(setModal(true));
    reset();
    setTimeout(() => {
      dispatch(setModal(false));
    }, 2000);
  };

  return (
    <div className={styles.container}>
      {isPopupOpen && <Modal />}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            type="text"
            {...register('name', {
              required: 'The name is required field',
              minLength: {
                value: 4,
                message: 'The name should consist of more than 3 letters',
              },
              maxLength: {
                value: 12,
                message: 'The name should consist of less than 12 letters',
              },
              pattern: {
                value: /^[A-Z]/,
                message: 'First letter should be capitalize',
              },
            })}
          />
        </label>
        <div style={{ color: 'red' }}>{errors?.name?.message}</div>
        <label>
          Birthday:
          <input
            type="date"
            {...register('birthday', {
              required: 'The birthday is required field',
              pattern: {
                value:
                  /(190[7-9]|19[1-9][0-9]|200[0-7])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
                message: 'Date should be between 1907 and 2007',
              },
            })}
          />
        </label>
        <div style={{ color: 'red' }}>{errors?.birthday?.message?.toString()}</div>
        <label>
          Country:
          <select
            {...register('country', {
              required: 'You must choose a country',
            })}
          >
            <option value="" hidden>
              Choose your country
            </option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
          </select>
        </label>
        <div style={{ color: 'red' }}>{errors?.country?.message?.toString()}</div>
        <label>
          I consent to my personal data:
          <input
            type="checkbox"
            {...register('permission', {
              required: 'You must consent to the personal data',
            })}
          />
        </label>
        <div style={{ color: 'red' }}>{errors?.permission?.message?.toString()}</div>
        <legend>
          <span>Specify your gender:</span>
          <label>
            Male
            <input
              type="radio"
              {...register('gender', {
                required: 'You must specify your gender',
              })}
              value="male"
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              {...register('gender', {
                required: 'You must specify your gender',
              })}
              value="female"
            />
          </label>
        </legend>
        <div style={{ color: 'red' }}>{errors?.gender?.message?.toString()}</div>
        <label>
          Add your avatar:
          <input
            type="file"
            {...register('avatar', {
              required: 'You have to add a file',
            })}
          />
        </label>
        <div style={{ color: 'red' }}>{errors?.avatar?.message?.toString()}</div>
        <button>Submit</button>
      </form>
      <div className={styles.cards}>
        {formItems.map((card, index) => (
          <FormCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
