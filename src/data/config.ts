import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Sangram Rath - Cloud Architect & Technology Advisor',
    description:
      '',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'I hereby DO NOT give consent for my personal data to be processed for any purposes.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
