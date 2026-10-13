import { FilmSubmission, JudgeProfile } from '../types/festival';

export const INITIAL_JUDGES: JudgeProfile[] = [
  {
    id: 'jury-official',
    name: 'Festival Jury',
    nameAr: 'لجنة تحكيم أفلام الرسوم المتحركة',
    title: 'Animation Film Adjudicator',
    titleAr: 'محكم أفلام الرسوم المتحركة',
    institution: 'Al Mamoura Film Festival',
    avatarSeed: 'Jury',
    role: 'jury_member',
  },
];

// No demo data — films are fetched live from Bunny Stream via environment variables / configuration
export const INITIAL_FILMS: FilmSubmission[] = [];

export const CATEGORY_LABELS: Record<string, { en: string; ar: string }> = {
  all: { en: 'All Animation Films', ar: 'جميع أفلام الرسوم المتحركة' },
  animation: { en: 'Animation', ar: 'الرسوم المتحركة' },
};
