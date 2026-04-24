import { useForm } from "react-hook-form";

interface FormLogin {
  email: string;
  senha: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormLogin>();

  const fazerLogin = (dados: FormLogin) => {
    console.log("Tentativa de login com:", dados);
    alert(`Bem-vindo(a)! Login realizado com o email: ${dados.email}`);
    reset();
  };

  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm text-left">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">
          Acesse sua conta
        </h2>
        <p className="text-gray-500">
          Entre para salvar suas receitas favoritas.
        </p>
      </div>

      <form onSubmit={handleSubmit(fazerLogin)} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            E-mail
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
            Senha
          </label>
          <input
            type="password"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
            placeholder="••••••••"
          />
          {errors.senha && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.senha.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-bold transition-colors shadow-md"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
