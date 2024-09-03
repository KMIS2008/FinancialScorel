import {Form, Error, Input, Label, Button, ContainerFlex, ContainerColumn} from "./DataForm.styled";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { addData } from "redux/operations";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const SignupSchema = Yup.object().shape({
  name: Yup.string(),
});

export const DataForm=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleNavigate=()=>{
        navigate('/financial-analisis')
    }
  
  const { register, handleSubmit, formState: { errors },reset} = useForm({
      resolver: yupResolver(SignupSchema),
    });
  
    const onSubmit = async (data, e) => {
      e.preventDefault();
      try {
        const _id=nanoid();
        const newData={...data, _id}
          await dispatch(addData(newData));
          handleNavigate();
          reset();
      } catch (errors) {
          alert(errors.message)
      }
  };

  
    return(
     <Form onSubmit={handleSubmit(onSubmit)}>

<Label htmlFor="nameCompany">Назва компанії</Label>
  <Input
    id="nameCompany"
    name='nameCompany'
    type='text'
    placeholder="Name company"
    {...register('nameCompany')}
  />
   {errors.name && <Error>{errors.name.message}</Error>}

<ContainerFlex>
    <ContainerColumn>
      <Label htmlFor="currentAssets">Поточні активи</Label>
      <Input
       id="currentAssets"
       name='currentAssets'
       type='text'
       placeholder="Current Assets(balance 1195)"
       {...register('currentAssets')}
     />
       {errors.currentAssets && <Error>{errors.currentAssets.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="currentLiabilities">Поточні зобов’язання</Label>
       <Input
       id="currentLiabilities"
       name='currentLiabilities'
       type='text'
       placeholder="Current Liabilities (balance 1695)"
       {...register('currentLiabilities')}
    />
      {errors.currentLiabilities && <Error>{errors.currentLiabilities.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="stocks">Поточні активи</Label>
      <Input
       id="stocks"
       name='stocks'
       type='text'
       placeholder="Stocks(balance 1100)"
       {...register('stocks')}
     />
       {errors.stocks && <Error>{errors.stocks.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="money">Грошові кошти</Label>
       <Input
       id="money"
       name='money'
       type='text'
       placeholder="Money (balance 1165)"
       {...register('money')}
    />
      {errors.CurrentLiabilities && <Error>{errors.CurrentLiabilities.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="equity">Власний капітал</Label>
      <Input
       id="equity"
       name='equity'
       type='text'
       placeholder="Equity(balance 1495)"
       {...register('equity')}
     />
       {errors.equity && <Error>{errors.equity.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="totalAssets">Загальні активи</Label>
       <Input
       id="totalAssets"
       name='totalAssets'
       type='text'
       placeholder="Total assets (balance 100)"
       {...register('totalAssets')}
    />
      {errors.totalAssets && <Error>{errors.totalAssets.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="liabilities">Зобов’язання</Label>
      <Input
       id="liabilities"
       name='liabilities'
       type='text'
       placeholder="Liabilities(balance 1595+1695)"
       {...register('liabilities')}
     />
       {errors.liabilities && <Error>{errors.liabilities.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="longTermLiabilities">Довгострокові зобов’язання</Label>
       <Input
       id="longTermLiabilities"
       name='longTermLiabilities'
       type='text'
       placeholder="Long-term Liabilities (balance 1595)"
       {...register('longTermLiabilities')}
    />
      {errors.longTermLiabilities && <Error>{errors.longTermLiabilities.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="netProfit">Чистий прибуток</Label>
      <Input
       id="netProfit"
       name='netProfit'
       type='text'
       placeholder="Net profit(fin 2350)"
       {...register('netProfit')}
     />
       {errors.netProfit && <Error>{errors.netProfit.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="revenue">Чистий дохід від реалізації</Label>
       <Input
       id="revenue"
       name='revenue'
       type='text'
       placeholder="Revenue (fin 2000)"
       {...register('revenue')}
    />
      {errors.revenue && <Error>{errors.revenue.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="cost">Собівартість реалізованих товарів</Label>
      <Input
       id="cost"
       name='cost'
       type='text'
       placeholder="Сost(fin 2050)"
       {...register('cost')}
     />
       {errors.cost && <Error>{errors.cost.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="stocksFirst">Запаси на початку періода</Label>
       <Input
       id="stocksFirst"
       name='stocksFirst'
       type='text'
       placeholder="Stocks First (balance 1100)"
       {...register('stocksFirst')}
    />
      {errors.stocksFirst && <Error>{errors.stocksFirst.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="stocksFinish">Запаси на кінець періода</Label>
      <Input
       id="stocksFinish"
       name='stocksFinish'
       type='text'
       placeholder="stocksFinish(balance 1100)"
       {...register('stocksFinish')}
     />
       {errors.stocksFinish && <Error>{errors.stocksFinish.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="accountsReceivableFist">Дебіторська заборгованість на початок періоду</Label>
       <Input
       id="accountsReceivableFist"
       name='accountsReceivableFist'
       type='text'
       placeholder="Accounts receivable first(balance 1125)"
       {...register('accountsReceivableFist')}
    />
      {errors.accountsReceivableFist && <Error>{errors.accountsReceivableFist.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="accountsReceivableFinish">Дебіторська заборгованість на кінець періода</Label>
      <Input
       id="accountsReceivableFinish"
       name='accountsReceivableFinish'
       type='text'
       placeholder="Accounts receivable finish(balance 1125)"
       {...register('accountsReceivableFinish')}
     />
       {errors.accountsReceivableFinish && <Error>{errors.accountsReceivableFinish.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="longTermFinancialInvestments">Довгострокові фінансові інвестиції</Label>
       <Input
       id="longTermFinancialInvestments"
       name='longTermFinancialInvestments'
       type='text'
       placeholder="long-term financial investments (balance 1030+1035)"
       {...register('longTermFinancialInvestments')}
    />
      {errors.longTermFinancialInvestments && <Error>{errors.longTermFinancialInvestments.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="currentFinancialInvestments">Поточні фінансові інвестиції</Label>
      <Input
       id="currentFinancialInvestments"
       name='currentFinancialInvestments'
       type='text'
       placeholder="Current financial investments(balance 1160)"
       {...register('currentFinancialInvestments')}
     />
       {errors.currentFinancialInvestments && <Error>{errors.currentFinancialInvestments.message}</Error>}     
    </ContainerColumn>

   <ContainerColumn>
       <Label htmlFor="operatingProfit">Операційний прибуток</Label>
       <Input
       id="operatingProfit"
       name='operatingProfit'
       type='text'
       placeholder="Operating Profit (fin 2190+2195)"
       {...register('operatingProfit')}
    />
      {errors.operatingProfit && <Error>{errors.operatingProfit.message}</Error>}
    </ContainerColumn>

    <ContainerColumn>
      <Label htmlFor="interestExpenses">Витрати на відсотки</Label>
      <Input
       id="interestExpenses"
       name='interestExpenses'
       type='text'
       placeholder="Interest expenses(money 3360)"
       {...register('interestExpenses')}
     />
       {errors.interestExpenses && <Error>{errors.interestExpenses.message}</Error>}     
    </ContainerColumn>
</ContainerFlex>

<Button type="submit" >
    Send Info
</Button>
    </Form>
)
}