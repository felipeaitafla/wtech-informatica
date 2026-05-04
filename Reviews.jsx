// Reviews.jsx — avaliações do Google (Slider)

const PLACE_ID = 'ChIJNw9-Uu3xXpMR4tEZ6f31_Lw';
const REVIEWS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJNw9-Uu3xXpMR4tEZ6f31_Lw';
const TEXT_THRESHOLD = 180;
const GAP = 16;

const StarSVG = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? '#fbbc04' : '#d1d5db'} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const GoogleIconSVG = () => (
  <svg className="rv-google-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const VerifiedSVG = () => (
  <svg className="rv-verified-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
  </svg>
);

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = React.useState(false);
  const isLong = review.text && review.text.length > TEXT_THRESHOLD;

  const initials = review.author_name
    ? review.author_name.split(' ').map(n => n[0]).slice(0, 2).join('')
    : '?';

  return (
    <article className="rv-card">
      <div className="rv-card-header">
        <div className="rv-avatar">
          {review.profile_photo_url
            ? <img src={review.profile_photo_url} alt={review.author_name} referrerPolicy="no-referrer" />
            : initials}
        </div>
        <div className="rv-meta">
          <div className="rv-author">{review.author_name}</div>
          <div className="rv-date">{review.relative_time_description}</div>
        </div>
        <GoogleIconSVG />
      </div>
      <div className="rv-stars-row">
        <div className="rv-stars">
          {[1,2,3,4,5].map(n => <StarSVG key={n} filled={n <= review.rating} />)}
        </div>
        <VerifiedSVG />
      </div>
      {review.text ? (
        <div className="rv-text-wrap">
          <p className={`rv-text${isLong && !expanded ? ' rv-text--clamped' : ''}`}>
            {review.text}
          </p>
          {isLong && (
            <button className="rv-read-more" onClick={() => setExpanded(e => !e)}>
              {expanded ? 'Ler menos' : 'Ler mais'}
            </button>
          )}
        </div>
      ) : null}
    </article>
  );
};

const Reviews = () => {
  const [place, setPlace] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const trackRef = React.useRef(null);

  React.useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  React.useEffect(() => {
    const tryLoad = () => {
      if (!window.google?.maps?.places) { setTimeout(tryLoad, 300); return; }
      const div = document.createElement('div');
      const svc = new window.google.maps.places.PlacesService(div);
      svc.getDetails(
        { placeId: PLACE_ID, fields: ['rating', 'user_ratings_total', 'reviews'] },
        (result, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) setPlace(result);
          else setError(true);
        }
      );
    };
    tryLoad();
  }, []);

  const visibleCount = windowWidth <= 900 ? 1 : 3;
  const reviews     = (place?.reviews || []).filter(r => r.rating === 5).slice(0, 3);
  const maxIndex    = Math.max(0, reviews.length - visibleCount);

  React.useEffect(() => {
    setCurrentIndex(i => Math.min(i, maxIndex));
  }, [maxIndex]);

  React.useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;

    const cardW = track.children[0].getBoundingClientRect().width;
    const step = cardW + GAP;
    const safeIndex = Math.min(currentIndex, maxIndex);
    track.style.transform = `translateX(-${safeIndex * step}px)`;
  }, [currentIndex, windowWidth, reviews.length, maxIndex, visibleCount]);

  if (error || (!place && !error)) return null;

  const ratingLabel = place.rating >= 4.5 ? 'EXCELENTE' : place.rating >= 4 ? 'MUITO BOM' : 'BOM';

  return (
    <section className="wt-section wt-reviews" data-screen-label="Reviews">
      <div className="wt-container">

        {/* Heading — full width, centered, above the grid */}
        <header className="rv-heading">
          <h2>O que nossos clientes dizem.</h2>
          <p>Avaliações reais de quem já confiou no nosso serviço.</p>
        </header>

        {/* Grid: summary panel (left) | slider (right) */}
        <div className="rv-flex">

          <div className="rv-summary-panel">
            <div className="rv-summary-label">{ratingLabel}</div>
            <div className="rv-summary-stars">
              {[1,2,3,4,5].map(n => <StarSVG key={n} filled={n <= Math.round(place.rating)} />)}
            </div>
            <div className="rv-summary-count">
              Baseado em <strong>{place.user_ratings_total}</strong> avaliações
            </div>
            <div className="rv-google-logo">
              <span style={{color:'#4285F4'}}>G</span>
              <span style={{color:'#EA4335'}}>o</span>
              <span style={{color:'#FBBC04'}}>o</span>
              <span style={{color:'#4285F4'}}>g</span>
              <span style={{color:'#34A853'}}>l</span>
              <span style={{color:'#EA4335'}}>e</span>
            </div>
          </div>

          <div className="rv-slider-outer">
            <button
              className="rv-arrow rv-arrow--prev"
              aria-label="Anterior"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="rv-clip">
              <div className="rv-track" ref={trackRef}>
                {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
              </div>
            </div>

            <button
              className="rv-arrow rv-arrow--next"
              aria-label="Próximo"
              disabled={currentIndex >= maxIndex}
              onClick={() => setCurrentIndex(i => Math.min(i + 1, maxIndex))}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

        </div>

        {/* CTA — full section width, centered */}
        <div className="rv-cta">
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="wt-btn wt-btn--primary"
          >
            Clique e Comprove
            <Icon name="arrowUpRight" size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

window.Reviews = Reviews;
