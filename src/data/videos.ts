// First successful production publication containing both files. Evidence and
// ffprobe duration measurements are recorded in docs/seo-readiness.md.
const published = '2026-10-22T15:30:54Z';
export const videos = {
  'kitchen-table': {
    name: 'Kitchen Table',
    description: 'A No on Measure PFD campaign video discussing the proposed Pasadena parcel tax at the kitchen table.',
    content: '/videos/kitchen-table.mp4', thumbnail: '/videos/kitchen-table-poster.webp',
    published, duration: 'PT30.016S',
  },
  'bill-paparian': {
    name: 'Bill Paparian on Measure PFD',
    description: 'Former Pasadena Mayor Bill Paparian explains his opposition to Measure PFD in a campaign video.',
    content: '/videos/bill-paparian.mp4', thumbnail: '/videos/bill-paparian-poster.webp',
    published, duration: 'PT30.016S',
  },
} as const;
export type VideoId = keyof typeof videos;
