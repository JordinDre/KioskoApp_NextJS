import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import { formatearDinero } from "../helpers";
import useKiosko from "../hooks/useKiosko";

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useKiosko();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  
  return (
    <Layout pagina="Total y Confirmación de Pedido">
      <h1 className="text-4xl font-black">Total y Confirmación de Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuacion</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl cursor-pointer"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full mt-3 lg:w-1/3 p-2 rounded-md border-4"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar:{" "}
            <span className="font-bold">{formatearDinero(total)}</span>{" "}
          </p>
        </div>
        <div className="mt-6">
          <input
            type="submit"
            value="Confirmar Pedido"
            disabled={comprobarPedido()}
            className={`${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            } 
            w-full text-center lg:w-auto px-5 py-2 rounded-md uppercase font-bold text-white`}
          />
        </div>
      </form>
    </Layout>
  );
}
