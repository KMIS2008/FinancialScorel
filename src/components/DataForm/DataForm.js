import {Form, Error, Input, Label, Button} from "./DataForm.styled";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string(),
});

export const DataForm=()=>{
    const navigate=useNavigate();
    // const dispatch=useDispatch();

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
  
  const { register, handleSubmit, 
    // setValue, 
    formState: { errors },reset} = useForm({
      resolver: yupResolver(SignupSchema),
    });
  
    const onSubmit = async (data, e) => {
      e.preventDefault();
      try {
          // await dispatch(getProductsFilter(data));
          handleNavigate();
          reset();
      } catch (errors) {
          alert(errors.message)
      }
  };
      const [searchValue, setSearchValue] = useState("");
  
      const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    
    return(
     <Form onSubmit={handleSubmit(onSubmit)}>

<Label htmlFor="nameCompany">Name company</Label>
  <Input
    id="nameCompany"
    name='name'
    type='text'
    value={searchValue}
    onChange={handleInputChange}
    placeholder="Name company"
    {...register('name')}
  />
{errors.category && <Error>{errors.category.message}</Error>}

<Button type="submit" >
    Send Info
</Button>
    </Form>
)
}