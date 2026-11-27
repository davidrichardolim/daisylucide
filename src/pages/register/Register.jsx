import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import registerSchema from "./schemas/register-schemas";

const register = () => {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(registerSchema)
  })

  return (
    <div className="flex w-full items-center justify-center">
      <div className="card card-border card-md bg-blue-300 min-w-md">
        <div className="card-body">
          <h2 className="card-title">Selamat Datang</h2>
          <p>Silahkan lengkapi form di bawah ini</p>

          <form onSubmit={handleSubmit(console.log)} className="space-y-1">
            <label className="floating-label">
              <span>Full Name</span>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="input input-md"
                {...register('name')}
              />
            </label>
            <label className="floating-label">
              <span>Your Email</span>
              <input
                type="email"
                placeholder="Masukkan Email Anda"
                className="input input-md"
                {...register('email')}
              />
            </label>
            <label className="floating-label">
              <span>Password</span>
              <input
                type="password"
                placeholder="Masukkan Password Anda"
                className="input input-md"
                {...register('password')}
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Buat Akun Anda Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
