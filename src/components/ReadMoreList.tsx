import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type ReadMoreItem = {
  title: string;
  body: string;
};

export function ReadMoreList({ items, idPrefix }: { items: ReadMoreItem[]; idPrefix: string }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={item.title}
          value={`${idPrefix}-${i}`}
          className="border-b border-ink/10"
        >
          <AccordionTrigger className="py-5 text-left font-heading text-lg font-semibold tracking-tight text-ink hover:no-underline sm:text-xl">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl pb-6 text-base leading-relaxed text-slate">
            {item.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
