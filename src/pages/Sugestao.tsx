import { useForm } from "react-hook-form";

const Sugestao = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const enviar = (dados: any) => {
    console.log(dados);
    alert("Sugestão enviada!");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm text-left">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">Sugerir Receita</h2>
      <form onSubmit={handleSubmit(enviar)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nome da Receita</label>
          <input {...register("nome", { required: true })} className="w-full p-2 border rounded-md" />
          {errors.nome && <span className="text-red-500 text-xs">Obrigatório</span>}
        </div>
        <div>
          <label className="block text-sm font-medium">Seu E-mail</label>
          <input type="email" {...register("email", { required: true })} className="w-full p-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-md font-bold">Enviar</button>
      </form>
    </div>
  );
};

export default Sugestao;