import { FormEvent } from "react";

/**
 *
 * @description Componentes que possuem interação com o cliente devem usar a notação 'use client'
 */

export function Component() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Enviar</button>
      </form>
    </div>
  );
}
