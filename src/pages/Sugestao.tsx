import { useForm } from "react-hook-form";

interface SugestaoFormData {
  nome: string;
  email: string;
}

const Sugestao = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SugestaoFormData>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const enviar = (_dados: SugestaoFormData) => {
    alert("Sugestão enviada!");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm text-left">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">Sugerir Receita</h2>
      <form onSubmit={handleSubmit(enviar)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nome da Receita</label>
          <input {...register("nome", { required: true, maxLength: 100 })} className="w-full p-2 border rounded-md" />
          {errors.nome?.type === "required" && <span className="text-red-500 text-xs">Obrigatório</span>}
          {errors.nome?.type === "maxLength" && <span className="text-red-500 text-xs">Máximo de 100 caracteres</span>}
        </div>
        <div>
          <label className="block text-sm font-medium">Seu E-mail</label>
          <input type="email" {...register("email", { required: true, maxLength: 254, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} className="w-full p-2 border rounded-md" />
          {errors.email?.type === "required" && <span className="text-red-500 text-xs">Obrigatório</span>}
          {errors.email?.type === "pattern" && <span className="text-red-500 text-xs">E-mail inválido</span>}
          {errors.email?.type === "maxLength" && <span className="text-red-500 text-xs">Máximo de 254 caracteres</span>}
        </div>
        <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-md font-bold">Enviar</button>
      </form>
    </div>
  );
};

export default Sugestao;
