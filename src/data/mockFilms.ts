import { FilmSubmission, JudgeProfile } from '../types/festival';

export const INITIAL_JUDGES: JudgeProfile[] = [
  {
    id: 'jury-official',
    name: 'Festival Jury',
    nameAr: 'لجنة تحكيم الأفلام الوثائقية',
    title: 'Documentary Film Adjudicator',
    titleAr: 'محكم الأفلام الوثائقية',
    institution: 'Al Mamoura Film Festival',
    avatarSeed: 'Jury',
    role: 'jury_member',
  },
];

// No demo data — films are fetched live from Bunny Stream via environment variables / configuration
export const INITIAL_FILMS: FilmSubmission[] = [];

export const CATEGORY_LABELS: Record<string, { en: string; ar: string }> = {
  all: { en: 'All Documentaries', ar: 'جميع الأفلام الوثائقية' },
  documentary: { en: 'Documentary', ar: 'الوثائقي' },
};
