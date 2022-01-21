import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { TodosContext } from '../../context/TodosContext';
import { v4 as uuidv4 } from 'uuid';
import { FormInputs } from '../../types';

const schema = yup
  .object({
    title: yup.string().required(),
  })
  .required();

const AddForm = () => {
  const { handleCreate } = useContext(TodosContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (handleCreate) {
      handleCreate({
        id: uuidv4(),
        title: data.title,
        status: 'created',
        date: new Date(),
      });
      setValue('title', '');
    }
  };

  return (
    <>
      <Typography align='center' variant='h5' component='p' gutterBottom>
        Create Todo
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='title'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              error={Boolean(errors?.title)}
              helperText={errors?.title?.message}
              fullWidth
              size='small'
              id='title'
              label='Title'
              {...field}
            />
          )}
        />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 2, mb: 2 }}>
          Create
        </Button>
      </form>
    </>
  );
};

export default AddForm;
