import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Sangram Rath',
  role: 'Cloud Architect & Technology Advisor',
  details: [
    { label: 'Phone', value: '', url: 'tel:' },
    { label: 'Email', value: 'sangram.rath@gmail.com', url: 'mailto:sangram.rath@gmail.com' },
    { label: 'From', value: 'Bhubaneswar, India' },
    { label: 'Salary range', value: '' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '' },
    { label: 'Email', value: 'sangram.rath@gmail.com' },
    { label: 'LinkedIn', value: '/in/sangramrath', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/sangramrath', url: 'https://github.com' },
    { label: 'Website', value: 'sangramrath.com', url: '/', fullRow: true },
  ],
  description:
    'I am an experienced Technology professional with over 19 years experience across diverse domains and technologies. I have spoken at various conferences and published a book. I have trained thousands on emerging technologies since 2013 and have also been a Microsoft Certified Trainer (MCT). Outside of technology, I am passionate about Arts, love travelling and food.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '#',
    downloadedFileName: 'CV-Sangram_Rath.pdf',
  },
  links: [github({ url: 'https://github.com/sangramrath' }), linkedin({ url: 'https://linkedin.com/in/sangramrath' }), twitter({ url: 'https://twitter.com/mr_sangramrath' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
