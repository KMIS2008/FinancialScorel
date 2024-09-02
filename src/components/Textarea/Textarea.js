import React from 'react';
import { useForm } from 'react-hook-form';
import {Form, Label, CommentTextArea, SubmitButton} from './Textarea.styled'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addFinancial } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

const SignupSchema = Yup.object().shape({
    comment: Yup.string()
      .max(500, 'Коментар не може перевищувати 500 символів'), 
  });

export const Textarea=({ liquidityRatios, isFinancialStrength, isIndicatorsOfProfitability, isIndicatorsAssetEfficiency, isOtherIndicatorsProfitability })=>{
    const dispatch=useDispatch();

    const { register, handleSubmit, formState: { errors } } =  useForm({
        resolver: yupResolver(SignupSchema),
      });

  const onSubmit = (data) => {
     const _id=nanoid();
     const indicators = {_id, 
                         ...data, 
                         ...liquidityRatios, 
                         ...isFinancialStrength,
                         ...isIndicatorsOfProfitability,
                         ...isIndicatorsAssetEfficiency, 
                         ...isOtherIndicatorsProfitability
                        }
      dispatch(addFinancial(indicators))
  };
    return( 
    <Form onSubmit={handleSubmit(onSubmit)}>
  
    <Label htmlFor="comment">Коментар:</Label>
    <CommentTextArea
      id="comment"
      {...register('comment', { required: false, maxLength: 500 })}
      placeholder="Напишіть ваш коментар"
    ></CommentTextArea>

    {errors.comment && errors.comment.type === 'maxLength' && (
      <p>Коментар не може перевищувати 500 символів</p>
    )}

    <SubmitButton type="submit">Надіслати</SubmitButton>
  </Form>
  )
}