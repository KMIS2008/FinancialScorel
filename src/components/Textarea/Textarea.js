import React from 'react';
import { useForm } from 'react-hook-form';
import {Form, Label, CommentTextArea, SubmitButton} from './Textarea.styled'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addFinancial } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {selectIdData} from '../../redux/data/selects';

const SignupSchema = Yup.object().shape({
    comment: Yup.string()
      .max(500, 'Коментар не може перевищувати 500 символів'), 
  });

export const Textarea=()=>{
    const dispatch=useDispatch();
    const financials=useSelector(selectIdData);
    const lastFinancial = financials?.[financials.length - 1] || {};

    const filteredFinancial = {
      nameCompany: lastFinancial.nameCompany,
      currentAssets: lastFinancial.currentAssets,
      currentLiabilities: lastFinancial.currentLiabilities,
      stocks: lastFinancial.stocks,
      money: lastFinancial.money,
      equity: lastFinancial.equity,
      totalAssets: lastFinancial.totalAssets,
      liabilities: lastFinancial.liabilities,
      longTermLiabilities: lastFinancial.longTermLiabilities,
      netProfit: lastFinancial.netProfit,
      revenue: lastFinancial.revenue,
      cost: lastFinancial.cost,
      stocksFirst: lastFinancial.stocksFirst,
      stocksFinish: lastFinancial.stocksFinish,
      accountsReceivableFist: lastFinancial.accountsReceivableFist,
      accountsReceivableFinish: lastFinancial.accountsReceivableFinish,
      longTermFinancialInvestments: lastFinancial.longTermFinancialInvestments,
      currentFinancialInvestments: lastFinancial.currentFinancialInvestments,
      interestExpenses: lastFinancial.interestExpenses,
      operatingProfit: lastFinancial.operatingProfit,
    };
    
    

    const { register, handleSubmit, formState: { errors }, reset } =  useForm({
        resolver: yupResolver(SignupSchema),
      });

  const onSubmit = (data) => {
console.log(data)
     const indicators = {
                          ...data,
                         ...filteredFinancial,
                         
                        };
                        console.log(indicators)
      dispatch(addFinancial(indicators));
      reset();
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

    <SubmitButton type="submit">Зберегти</SubmitButton>
  </Form>
  )
}