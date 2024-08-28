import {Form, Error, Input, Label, Button, ContainerFlex, ContainerColumn} from "./DataForm.styled";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { addData } from "redux/operations";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const SignupSchema = Yup.object().shape({
  name: Yup.string(),
});

export const DataForm=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleNavigate=()=>{
        navigate('/liquidity-analysis')
    }

    // const customStyles = {
    //   placeholder: (provided) => ({
    //     ...provided,
    //     color: '#1D1E2166', 
    //   }),
    //   control: (provided, state) => ({
    //     ...provided,
    //     height: '44px',
    //     padding: '0 0 0 20px',
    //     marginBottom: '10px',
    //     borderRadius: '60px',
    //     border: state.isFocused ? '1px solid #59B17A' : '1px solid #1D1E2133',
    //     '&:hover': {
    //       border: '1px solid #59B17A',
    //     },
    //   }),
     
    //   option: (provided, state) => ({
    //     ...provided,
    //     border: 'none',
    //     padding: '0 20px',
  
    //     fontFamily: 'Inter',
    //     fontSize: '12px',
    //     fontWeight: '400',
    //     lineHeight: '1.5',
    //     letterSpacing: '-0.03em',
    //     color: state.isSelected ? '#fff' : '#1D1E21',
    //     backgroundColor: state.isSelected ? '#59B17A' : '#fff',
    //   }),
  
    //   indicatorSeparator: (provided) => ({
    //       display: 'none',
    //     }),
    // };
  
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
        //   setSearchValue(""); 
      } catch (errors) {
          alert(errors.message)
      }
  };
    //   const [searchValue, setSearchValue] = useState("");

    //   const handleInputChange = (e) => {
    //     setSearchValue(e.target.value);
    // };

    
    return(
     <Form onSubmit={handleSubmit(onSubmit)}>

<Label htmlFor="nameCompany">Name company</Label>
  <Input
    id="nameCompany"
    name='nameCompany'
    type='text'
    // value={searchValue}
    // onChange={handleInputChange}
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
</ContainerFlex>

<ContainerFlex>
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
</ContainerFlex>

<ContainerFlex>
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
       placeholder="Total assets (balance 1900)"
       {...register('totalAssets')}
    />
      {errors.totalAssets && <Error>{errors.totalAssets.message}</Error>}
    </ContainerColumn>
</ContainerFlex>

<Button type="submit" >
    Send Info
</Button>
    </Form>
)
}