import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input';
import { FormValues } from './Form.structure';
import { useNavigate } from "react-router-dom";


  const schema = Yup.object({
     name: Yup.string().required("Preencha o nome"),
     surName: Yup.string().required("Preencha o sobrenome"),
  });
const Form = () => {
  const { register, handleSubmit, formState: { errors } } =
    useForm<FormValues>({ resolver: yupResolver(schema) })
    const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log(data);

     navigate('/displayform', { state: { data: data } })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="h-screen w-screen bg-gray-400 p-20
         flex flex-col items-center justify-center gap-20"
      >   
          <Input label='nome' register={register('name')} error={errors.name?.message} />
  
        <Input label='sobrenome' register={register('surName')} error={errors.surName?.message} />

        <button
          className="rounded-lg bg-gray-800 flex p-2 text-gray-200
          justify-between items-center relative"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;