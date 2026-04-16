import { useForm } from "react-hook-form";

interface FormSugestao {
  nome: string;
  email: string;
  receita: string;
}

const Sugestao = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSugestao>();

  const enviar = (dados: FormSugestao) => {
    console.log("Dados do formulário:", dados);
    alert("Obrigado! Sua sugestão foi enviada com sucesso.");
    reset();
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm text-left">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">
        Sugerir Receita
      </h2>
      <p className="text-gray-500 mb-8">
        Tem uma receita de família? Compartilhe com a gente!
      </p>

      <form onSubmit={handleSubmit(enviar)} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Nome da Receita *
          </label>
          <input
            {...register("nome", {
              required: "O nome da receita é obrigatório",
            })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
            placeholder="Ex: Torta de Maçã da Vovó"
          />
          {errors.nome && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.nome.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Seu E-mail *
          </label>
          <input
            type="email"
            {...register("email", { required: "O e-mail é obrigatório" })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
            placeholder="seu@email.com"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Modo de Preparo
          </label>
          <textarea
            {...register("receita")}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
            placeholder="Descreva os ingredientes e o passo a passo..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-bold transition-colors shadow-md"
        >
          Enviar Sugestão
        </button>
      </form>
    </div>
  );
};

export default Sugestao;
