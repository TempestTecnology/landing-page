/**
 * Abre o diálogo de impressão para o usuário "Salvar como PDF".
 *
 * O layout impresso é um documento próprio de cada página, visível só sob
 * `@media print` (`portfolio.css`). O navegador usa o `document.title` como
 * nome padrão do arquivo, então o título é trocado durante a impressão e
 * restaurado no `afterprint`.
 *
 * Args:
 *     fileName (string): Nome sugerido para o PDF, sem extensão.
 */
export function printAsPdf(fileName: string): void {
  const previousTitle: string = document.title;
  document.title = fileName;
  window.addEventListener(
    "afterprint",
    () => {
      document.title = previousTitle;
    },
    { once: true },
  );
  window.print();
}
