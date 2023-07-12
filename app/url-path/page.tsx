import { Metadata } from "next";

/**
 * @property metadata controla a tag meta do html
 * @param title titulo da pagina no html
 * @param description descrição breve da pagina
 */
export const metadata: Metadata = {
  title: "URL-PATH",
  description: "This is a simple description about the current page",
};

/**
 * @property Para fazer uma nova rota, dentro do folder App utilizamos novos folders que representam * o url-path
 * @returns Uma função que NECESSITA ser export default para renderizar um componente na rota especificada
 */

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}
