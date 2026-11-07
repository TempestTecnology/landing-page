import type { JSX } from "react";
import { Card, Container, Timeline, type TimelineItem } from "tempest-react-sdk";

import { Reveal, SectionHeading } from "@/components";
import type { CareerItem } from "@/core";

/**
 * Converte um item de carreira no formato do `Timeline` do SDK.
 *
 * Item em andamento ganha marcador `primary`; encerrado, `neutral`.
 *
 * Args:
 *     item (CareerItem): Experiência ou formação.
 *
 * Returns:
 *     O item da linha do tempo.
 */
function toTimelineItem(item: CareerItem): TimelineItem {
  return {
    id: item.id,
    title: (
      <>
        <strong>{item.role}</strong>
        <span className="career__org"> · {item.organization}</span>
      </>
    ),
    description: item.description,
    meta: item.period,
    marker: item.current ? "primary" : "neutral",
  };
}

/**
 * Props do {@link CareerTimeline}.
 *
 * Attributes:
 *     id (string): `id` da seção, alvo da âncora no menu.
 *     eyebrow (string): Rótulo acima do título.
 *     title (string): Título da seção.
 *     items (CareerItem[]): Itens, do mais recente ao mais antigo.
 *     tint (boolean): Fundo azul-claro, para alternar com a seção vizinha.
 */
interface CareerTimelineProps {
  id: string;
  eyebrow: string;
  title: string;
  items: CareerItem[];
  tint?: boolean;
}

/**
 * Seção com linha do tempo de carreira — experiência ou formação.
 *
 * Usa a classe `about__timeline`, que corrige a cor do marcador do
 * `Timeline` do SDK (ver `About`).
 *
 * Args:
 *     props (CareerTimelineProps): Âncora, textos e itens.
 *
 * Returns:
 *     A seção da linha do tempo.
 */
export function CareerTimeline({
  id,
  eyebrow,
  title,
  items,
  tint = false,
}: CareerTimelineProps): JSX.Element {
  return (
    <section
      id={id}
      className={["section", tint && "section--tint"].filter(Boolean).join(" ")}
      aria-labelledby={`${id}-title`}
    >
      <Container size="lg">
        <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} />
        <Reveal delay={100}>
          <Card elevation="raised" className="about__timeline career">
            <Timeline items={items.map(toTimelineItem)} />
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
