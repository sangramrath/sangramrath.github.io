import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
  Azure,
  AWS,
  GCP,
  WordPress,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Cloud Computing',
      skills: [
        Azure({
          level: 5,
          description:
            '',
        }),
        AWS({
          level: 4,
          description: '',
        }),
        GCP({
          level: 4,
          description: '',
        }),
      ],
    },
    {
      title: 'Web',
      skills: [WordPress(), astro()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:hi', name: 'Hindi' },
        { icon: 'circle-flags:us', name: 'English' },
        { icon: 'circle-flags:hi', name: 'Odiya' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
