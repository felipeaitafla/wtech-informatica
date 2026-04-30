// Icon.jsx — Lucide-style outline icons

const ICON_PATHS = {
  whatsapp: <g transform="scale(0.3582)" fill="currentColor" stroke="none"><path d="M56.5516 9.68048C53.5013 6.60044 49.8686 4.15827 45.865 2.49631C41.8615 0.834344 37.5672 -0.0141817 33.2324 0.000179286C15.0693 0.000179286 0.266126 14.8034 0.266126 32.9664C0.266126 38.7879 1.79634 44.4431 4.65719 49.4329L0 66.5315L17.4645 61.9408C22.288 64.5688 27.7103 65.9659 33.2324 65.9659C51.3954 65.9659 66.1986 51.1627 66.1986 32.9997C66.1986 24.1843 62.7723 15.9012 56.5516 9.68048ZM33.2324 60.3773C28.3091 60.3773 23.4855 59.0467 19.2608 56.5518L18.2628 55.953L7.88396 58.6808L10.645 48.568L9.97969 47.5368C7.24375 43.1692 5.7913 38.1202 5.78822 32.9664C5.78822 17.8638 18.0965 5.55554 33.1991 5.55554C40.5175 5.55554 47.4035 8.41639 52.5597 13.6058C55.1132 16.1469 57.1368 19.1696 58.513 22.4988C59.8892 25.828 60.5907 29.3973 60.5767 32.9997C60.6433 48.1023 48.335 60.3773 33.2324 60.3773ZM48.2684 39.8857C47.4368 39.4865 43.3784 37.4906 42.6466 37.1912C41.8814 36.925 41.3492 36.792 40.7837 37.5904C40.2182 38.422 38.6547 40.2849 38.189 40.8171C37.7232 41.3826 37.2243 41.4492 36.3926 41.0167C35.561 40.6175 32.8997 39.7194 29.7727 36.925C27.3111 34.7295 25.6811 32.035 25.1821 31.2034C24.7164 30.3717 25.1156 29.9393 25.548 29.5068C25.9139 29.1409 26.3797 28.5421 26.7788 28.0764C27.178 27.6107 27.3444 27.2447 27.6105 26.7125C27.8766 26.147 27.7435 25.6813 27.5439 25.2821C27.3444 24.8829 25.6811 20.8245 25.0158 19.1612C24.3504 17.5644 23.6519 17.764 23.1529 17.7308H21.5561C20.9906 17.7308 20.1257 17.9304 19.3606 18.762C18.6288 19.5936 16.4998 21.5896 16.4998 25.648C16.4998 29.7064 19.4604 33.6317 19.8596 34.164C20.2588 34.7295 25.6811 43.0459 33.931 46.6053C35.8936 47.4703 37.4238 47.9692 38.6214 48.3352C40.5841 48.9672 42.3804 48.8674 43.8108 48.6678C45.4076 48.435 48.7009 46.6719 49.3662 44.7425C50.0648 42.8131 50.0648 41.183 49.8319 40.8171C49.5991 40.4512 49.1001 40.2849 48.2684 39.8857Z" /></g>,
  cpu: <g><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></g>,
  laptop: <g><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M2 17h20M9 21h6" /></g>,
  hardDrive: <g><rect x="2" y="6" width="20" height="4" rx="1" /><rect x="2" y="14" width="20" height="4" rx="1" /><circle cx="6" cy="8" r="0.5" fill="currentColor" /><circle cx="6" cy="16" r="0.5" fill="currentColor" /></g>,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  thermometer: <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />,
  hinge: <g><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 12h18" /><circle cx="8" cy="12" r="1.5" /><circle cx="16" cy="12" r="1.5" /></g>,
  gamepad: <g><line x1="6" y1="11" x2="10" y2="11" /><line x1="8" y1="9" x2="8" y2="13" /><line x1="15" y1="12" x2="15.01" y2="12" /><line x1="18" y1="10" x2="18.01" y2="10" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z" /></g>,
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  circuit: <g><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 7v2a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v2M7 13h2M15 17h2" /><circle cx="7" cy="7" r="1" fill="currentColor" /><circle cx="17" cy="13" r="1" fill="currentColor" /></g>,
  alertCircle: <g><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></g>,
  headset: <g><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" /></g>,
  monitor: <g><rect x="3" y="3" width="18" height="14" rx="1" /><path d="M8 21h8M12 17v4" /></g>,
  server: <g><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><circle cx="7" cy="7" r="0.6" fill="currentColor" /><circle cx="7" cy="17" r="0.6" fill="currentColor" /></g>,
  arrowRight: <g><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></g>,
  arrowLeft: <g><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></g>,
  arrowUpRight: <g><line x1="7" y1="17" x2="17" y2="7" /><polyline points="8 7 17 7 17 16" /></g>,
  check: <polyline points="20 6 9 17 4 12" />,
  phone: <path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  mapPin: <g><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></g>,
  clock: <g><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></g>,
  instagram: <g><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></g>,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  mail: <g><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></g>,
  play: <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none" />,
  navigation: <polygon points="3 11 22 2 13 21 11 13 3 11" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  search: <g><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></g>,
  layers: <g><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></g>,
  truck: <g><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></g>,
};

const Icon = ({ name, size = 24, stroke = 1.6, className = '', accent = false, mute = false, onDark = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`wt-icon ${accent ? 'wt-icon--accent' : ''} ${mute ? 'wt-icon--mute' : ''} ${onDark ? 'wt-icon--on-dark' : ''} ${className}`}
    aria-hidden="true"
  >
    {ICON_PATHS[name] || null}
  </svg>
);

window.Icon = Icon;
