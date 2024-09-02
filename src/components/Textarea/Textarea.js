import React from 'react';
import { useForm } from 'react-hook-form';
import {Form, Label, CommentTextArea, SubmitButton} from './Textarea.styled'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SignupSchema = Yup.object().shape({
    comment: Yup.string()
      .max(500, 'Коментар не може перевищувати 500 символів'), 
  });

export const Textarea=()=>{
    const { register, handleSubmit, formState: { errors } } =  useForm({
        resolver: yupResolver(SignupSchema),
      });

  const onSubmit = (data) => {
    // Обробка даних форми, наприклад, надсилання на сервер
    console.log(data);
  };
    return( 
    <Form onSubmit={handleSubmit(onSubmit)}>
  
    <Label htmlFor="comment">Коментар:</Label>
    <CommentTextArea
      id="comment"
      {...register('comment', { required: false, maxLength: 500 })} // Валідація: обов'язкове поле, максимум 500 символів
      placeholder="Напишіть ваш коментар"
    ></CommentTextArea>

    {errors.comment && errors.comment.type === 'maxLength' && (
      <p>Коментар не може перевищувати 500 символів</p>
    )}

    <SubmitButton type="submit">Надіслати</SubmitButton>
  </Form>
  )
}