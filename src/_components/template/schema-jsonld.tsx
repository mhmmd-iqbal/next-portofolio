import { PERSON_JSON_LD } from '@/src/_components/template/template-config';

export default function SchemaJsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }} />
  );
}
