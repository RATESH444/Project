// src/assets/dummyStyles.js
// Updated with Ocean Teal & Gold theme
export const bannerStyles = {
  container: "relative overflow-hidden h-[640px] sm:h-[760px] md:h-screen",

  imageContainer: "absolute inset-0 z-0 w-full h-full",
  image: "w-full h-full object-cover",


  overlay: "absolute inset-0 bg-gradient-to-b from-teal-900/40 via-teal-800/20 to-teal-900/70 md:bg-transparent",


  content: "relative z-10 flex items-center justify-start h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
  contentInner: "max-w-2xl mt-10 md:mt-0",
  title: "text-4xl sm:text-5xl md:text-7xl font-bold text-teal-50 mb-4 leading-tight drop-shadow-lg",
  description: "text-sm sm:text-base md:text-lg text-teal-100 mb-6 max-w-lg",

  ratingGenreContainer: "flex flex-wrap items-center gap-4 font-[pacifico] mb-6",
  ratingContainer: "flex items-center mr-2",
  starsContainer: "flex",
  star: "h-4 w-4 sm:h-5 sm:w-5 text-amber-400 drop-shadow-md",
  ratingText: "ml-2 text-teal-50 text-sm sm:text-base font-semibold",
  genreText: "text-teal-200 text-xs sm:text-sm",

  // Buttons
  buttonsContainer: "flex flex-wrap gap-3 font-[pacifico]",
  bookButton: "bg-gradient-to-r from-teal-500 to-cyan-600 cursor-pointer hover:from-teal-600 hover:to-cyan-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base border border-teal-400/30",
  infoButton: "bg-white/15 hover:bg-white/25 text-teal-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center transition-all duration-300 border border-teal-300/40 text-sm sm:text-base hover:shadow-lg",

  icon: "h-4 w-4 sm:h-5 sm:w-5 mr-2",

  // Custom fonts & responsive tweaks
  customCSS: `
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');

    @media (max-width: 420px) {
      .max-w-2xl { max-width: 92%; }
      h1 { font-size: 1.6rem; }
      p { font-size: 0.9rem; }
    }
  `
};

export const navbarStyles = {
  // Main nav container
  nav: {
    base: "fixed left-4 right-4 top-6 z-50 transition-all duration-300",
    scrolled: "py-3 bg-slate-900/85 backdrop-blur-sm shadow-xl rounded-3xl",
    notScrolled: "py-4 bg-slate-900 backdrop-blur-sm rounded-full"
  },

  // Layout
  container: "max-w-7xl mx-auto px-4 md:px-1 lg:px-1 xl:px-8 flex items-center justify-between",
  
  // Logo section
  logoContainer: "flex items-center gap-3 z-20 flex-shrink-0",
  logoIconContainer: "bg-slate-900 p-3 md:p-3 xl:p-3 lg:p-3 rounded-full border border-cyan-500",
  logoIcon: "h-4 w-4 md:h-2 md:w-2 lg:h-4 lg:w-4 xl:w-4 xl:h-4 text-cyan-400",
  logoText: "text-lg md:text-sm xl:text-lg lg:tex-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 font-[pacifico]",

  // Desktop navigation
  desktopNav: "hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10 items-center bg-slate-900/70 backdrop-blur-md rounded-full px-3 py-2 gap-2 shadow-inner",
  desktopNavItems: "flex gap-2 items-center",
  desktopNavItem: "relative group",
  desktopNavLink: {
    base: "nav-pill-btn flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all",
    active: "active text-white",
    inactive: "text-gray-300"
  },
  desktopNavIcon: "h-5 w-5",

  // Right section
  rightSection: "flex items-center gap-4 z-20",

  // Tablet navigation
  tabletNav: "hidden md:flex lg:hidden items-center gap-2",
  tabletNavLink: {
    base: "nav-pill-btn flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
    active: "active bg-blue-900/30 text-white shadow-lg",
    inactive: "text-gray-300 hover:bg-blue-900/30"
  },
  tabletNavIcon: "h-4 w-4",
  tabletNavText: "text-xs font-semibold",

  // Auth section
  authSection: "flex items-center gap-2",
  desktopAuth: "hidden md:block",
  logoutButton: "flex items-center gap-2 md:px-1.5 px-4 lg:px-4 xl:px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-white text-sm font-semibold border border-cyan-500/20",
  loginButton: "flex items-center gap-2 px-4 py-2 md:px-1.5 lg:px-4 xl:px-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-semibold border border-cyan-500/20",
  authIcon: "h-4 w-4",

  // Mobile menu
  mobileMenuToggle: "md:hidden",
  mobileMenuButton: "p-2 rounded-full bg-slate-900/60 text-gray-200 hover:text-cyan-400",
  mobileMenuIcon: "h-6 w-6",
  mobileMenuPanel: "md:hidden absolute left-4 right-4 top-full mt-6 bg-slate-900 backdrop-blur-md rounded-2xl p-4 shadow-xl",
  mobileMenuItems: "flex flex-col gap-2",
  mobileNavLink: {
    base: "flex items-center gap-3 px-4 py-3 rounded-xl",
    active: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
    inactive: "text-gray-300 hover:bg-blue-900/30"
  },
  mobileNavIcon: "h-5 w-5",
  mobileNavText: "font-medium",

  // Mobile auth
  mobileAuthSection: "pt-2 border-t border-gray-800 mt-1",
  mobileLogoutButton: "w-full mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white flex items-center justify-center gap-2",
  mobileLoginButton: "w-full mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center gap-2",
  mobileAuthIcon: "h-5 w-5"
};

// CSS styles for the style jsx block - Updated for Dark Blue + Soft Cyan
export const navbarCSS = `
  .pill-border {
    position: absolute;
    inset: -2px;
    border-radius: 9999px;
    pointer-events: none;
    background: linear-gradient(90deg, rgba(6,182,212,0.14), rgba(34,197,94,0.06));
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.28s ease;
  }

  .group:hover .pill-border,
  .nav-pill-btn.active + .pill-border,
  .nav-pill-btn.active ~ .pill-border {
    transform: scaleX(1);
  }

  .pill-underline {
    height: 2px;
    width: 40%;
    border-radius: 9999px;
    margin-top: 4px;
    background: linear-gradient(90deg, #67e8f9, #0ea5e9);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.28s ease;
  }

  .nav-pill-btn:hover .pill-underline,
  .nav-pill-btn.active .pill-underline {
    transform: scaleX(1);
  }

  @media (max-width: 767px) {
    nav {
      left: 8px;
      right: 8px;
      top: 8px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    nav {
      left: 12px;
      right: 12px;
      top: 12px;
      border-radius: 20px !important;
      padding: 8px 0 !important;
    }
  }

  @media (min-width: 1024px) {
    .nav-pill-btn:hover {
      transform: translateY(-2px);
    }

    .nav-pill-btn.active {
      transform: translateY(-2px);
    }
  }
`;


// Add these to your existing assets/dummyStyles.js
export const bookingsPageStyles = {
  // Layout and container styles
  pageContainer: "min-h-screen bg-black p-6 sm:p-8 text-gray-100",
  mainContainer: "max-w-7xl pt-30 mx-auto",
  
  // Header
  header: "mb-6 flex items-center justify-between",
  title: "text-3xl md:text-4xl font-extrabold text-violet-400",
  subtitle: "text-sm text-gray-400",
  
  // Loading and error states
  loading: "py-12 text-center text-gray-400",
  error: "py-3 text-center text-violet-300",
  noBookings:
    "col-span-full text-center text-gray-400 py-8 border border-violet-800 rounded-lg",
  
  // Grid layout
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  
  // Booking card
  bookingCard:
    "bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4 border border-violet-800 shadow-xl",
  cardContent: "flex flex-col lg:flex-row items-start gap-4",
  posterContainer:
    "w-full lg:w-24 h-44 lg:h-36 flex-shrink-0 overflow-hidden rounded-md border border-violet-700",
  poster: "w-full h-full object-cover",
  cardInfo: "flex-1 w-full",
  cardHeader: "flex items-start justify-between gap-3",
  movieTitle: "text-lg font-bold text-violet-300 flex items-center gap-2",
  movieIcon: "w-5 h-5",
  bookingId: "text-xs text-gray-400 mt-1",
  bookingIdText: "font-mono text-xs text-gray-200",
  category: "text-xs text-gray-400 text-right",
  
  // Movie details
  details:
    "mt-3 text-sm text-gray-300 flex flex-col sm:flex-row sm:items-center sm:gap-4",
  timeContainer: "flex items-center gap-2",
  timeIcon: "w-4 h-4 text-violet-300",
  locationContainer: "flex items-center gap-2 mt-2 sm:mt-0",
  locationIcon: "w-4 h-4 text-violet-300",
  locationText: "text-sm",
  durationLabel: "mt-3 text-xs text-gray-400",
  duration: "mt-1 text-sm text-gray-200",
  
  // Summary section
  summary: "mt-4 flex items-center justify-between gap-4",
  seatsLabel: "text-sm text-gray-400",
  total: "text-sm text-gray-300 font-semibold",
  
  // Expanded details
  expandedDetails:
    "mt-4 border-t border-violet-900/40 pt-3 text-sm text-gray-300 space-y-3 transition-all duration-200 ease-in-out",
  expandedOpen: "max-h-[1200px] opacity-100",
  expandedClosed: "max-h-0 opacity-0 overflow-hidden",
  seatsSection: "",
  seatsLabelExpanded: "text-sm text-gray-400",
  seatsContainer: "mt-2 flex flex-wrap gap-2",
  seatItem:
    "px-3 py-1 rounded-md bg-black/40 border border-violet-800 flex items-center gap-2 text-sm",
  seatId: "font-semibold",
  seatType: "text-xs px-2 py-0.5 rounded",
  seatTypeRecliner: "bg-violet-700 text-white",
  seatTypeStandard: "bg-gray-800 text-gray-200",
  
  // Pricing breakdown
  pricing: "space-y-2",
  subtotal: "flex items-center justify-between text-gray-300",
  finalTotal:
    "flex items-center justify-between font-semibold text-gray-100 text-lg",
  
  // QR section
  qrSection: "flex items-center gap-4",
  qrLabel: "flex items-center gap-2 text-sm text-gray-400",
  qrIcon: "w-4 h-4",
  qrImage:
    "w-28 h-28 object-contain rounded-md bg-white p-1 cursor-pointer",
  qrUnavailable:
    "w-28 h-28 bg-gray-800 rounded-md flex items-center justify-center text-xs text-gray-500",
  
  // Toggle button
  toggleButton: "mt-4 flex items-center gap-3",
  detailsButton:
    "inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-violet-700 bg-black/30 hover:bg-black/40 transition",
  chevron: "w-4 h-4 transform transition-transform duration-200",
  chevronOpen: "rotate-180",
  chevronClosed: "rotate-0",
  
  // Modal
  modalOverlay: "fixed inset-0 z-50 flex items-center justify-center p-4",
  modalBackdrop: "absolute inset-0 bg-black/70",
  modalContent:
    "relative max-w-md w-full bg-gray-900 rounded-2xl p-6 border border-violet-800 shadow-2xl text-gray-100",
  modalHeader: "flex items-start justify-between gap-4",
  modalTitle: "text-xl font-bold text-violet-300",
  modalBookingId: "text-sm text-gray-300",
  modalIdText: "font-mono text-sm",
  modalDetails: "mt-2 text-sm text-gray-300",
  modalCloseButton:
    "inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/30 border border-gray-700",
  modalCloseIcon: "w-4 h-4",
};


// Helper functions for formatting
export const formatTime = (d) =>
  d
    ? new Date(d).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : "Time unavailable";

export const formatDuration = (mins) => {
  const h = Math.floor((mins || 0) / 60);
  const m = (mins || 0) % 60;
  return `${h}h ${m}m`;
};
// Add to src/assets/dummyStyles.js - Dark Blue + Soft Cyan theme (Black BG preserved)
// Add to src/assets/dummyStyles.js - Dark Blue + Soft Cyan (Reduced border shine)
export const contactStyles = {
  // Page container styles - BLACK BG PRESERVED
  pageContainer: "min-h-screen pt-15 bg-black text-white py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
  
  // Background elements
  bgGradient: "absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-blue-900/20 to-transparent",
  bgBlob1: "absolute top-40 right-10 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-xl",
  bgBlob2: "absolute bottom-20 left-8 w-24 h-24 bg-blue-700/10 rounded-full filter blur-xl",
  
  // Film strip effects
  filmStripTop: "absolute top-0 left-0 w-full h-4 flex gap-8",
  filmStripBottom: "absolute bottom-0 left-0 w-full h-4 flex gap-8",
  filmStripSegment: "w-8 h-4 bg-gray-800",
  
  // Content container
  contentContainer: "max-w-6xl pt-20 mx-auto relative z-10",
  
  // Header styles
  headerContainer: "text-center font-[pacifico] mb-12",
  headerTitle: "text-4xl md:text-6xl font-bold",
  headerTitleRed: "text-cyan-400",
  headerTitleWhite: "text-white",
  headerSubtitle: "text-xl text-gray-300 max-w-3xl mx-auto mt-4",
  
  // Grid layout
  gridContainer: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  
  // Card styles - REDUCED SHINE
  cardRelative: "relative",
  cardGradient: "absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-md opacity-30",  // Reduced opacity
  cardContainer: "relative bg-gray-800 rounded-2xl p-6 shadow-2xl border border-cyan-500/20",  // Reduced from /30 to /20
  cardBadge: "absolute -top-3 left-6 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center",
  cardIcon: "h-4 w-4 mr-1",
  
  // Form styles
  formTitle: "text-2xl font-bold mb-6 font-[pacifico] text-cyan-400 flex items-center pt-2",
  formTitleIcon: "mr-3",
  form: "space-y-5",
  formGrid: "grid grid-cols-1 md:grid-cols-2 gap-5",
  
  // Input styles
  inputGroup: "block text-sm font-medium text-gray-300 mb-2",
  input: "w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500/70 focus:border-transparent transition-all duration-300",  // Reduced focus ring
  textarea: "w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500/70 focus:border-transparent transition-all duration-300",
  select: "w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500/70 focus:border-transparent transition-all duration-300",
  
  // Button styles
  submitButton: "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-full font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer hover:to-blue-700 group",
  buttonIcon: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform",
  
  // Contact info styles
  contactInfo: "space-y-5",
  contactItem: "flex items-start group",
  contactIconContainer: "bg-cyan-500 p-2 rounded-full mr-4 transition-transform",
  contactIcon: "h-5 w-5",
  contactText: "text-lg font-semibold mb-1",
  contactDetail: "text-gray-300",
  contactSubDetail: "text-sm text-cyan-400 mt-1",
  
  // Emergency card styles - REDUCED SHINE
  emergencyCardGradient: "absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl blur-lg opacity-30",  // Reduced opacity
  emergencyCard: "relative bg-gray-800 rounded-2xl p-5 shadow-2xl border border-blue-500/20",  // Reduced from /30 to /20
  emergencyTitle: "text-lg font-bold mb-3 text-blue-400 flex items-center",
  emergencyIcon: "h-5 w-5 mr-2",
  emergencyText: "text-gray-300 text-sm mb-3",
  emergencyHotline: "bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full",
  emergencyNote: "ml-3 text-xs text-blue-400"
};



// ... previous navbar styles ...

export const moviesPageStyles = {
  // Layout
  container:
    "min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-black text-white",
  
  // Categories section
  categoriesSection: "pt-12 px-4",
  categoriesContainer: "container mx-auto",
  categoriesFlex: "flex flex-wrap gap-4 justify-center",
  categoryButton: {
    base: "px-6 py-3 rounded-full cursor-pointer transition-all duration-300",
    active:
      "bg-cyan-600 text-white shadow-lg shadow-cyan-500/30",
    inactive:
      "bg-gray-800 text-gray-300 hover:bg-gray-700"
  },

  // Movies grid section
  moviesSection: "py-8 px-4 pb-20",
  moviesContainer: "container mx-auto",
  moviesGrid:
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6",
  
  // Movie card
  movieCard: "group relative cursor-pointer",
  movieImageContainer:
    "overflow-hidden rounded-xl aspect-[2/3]",
  movieImage:
    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
  movieInfo: "mt-3 font-[pacifico]",
  movieTitle: "font-medium text-center truncate",
  movieCategory: "flex justify-center mt-1",
  movieCategoryText:
    "text-xs text-gray-400 capitalize",

  // Empty state
  emptyState:
    "col-span-full text-center text-gray-400 py-12",

  // Show more button
  showMoreContainer: "mt-8 flex justify-center",
  showMoreButton:
    "px-6 py-3 cursor-pointer rounded-full text-white border border-white/10 bg-gradient-to-b from-cyan-500 to-blue-600 transition hover:from-cyan-600 hover:to-blue-700"
};


// Add to src/assets/dummyStyles.js
export const footerStyles = {
  // Main container
  footer: "relative bg-slate-950 text-white overflow-hidden border-t border-cyan-800",
  
  // Animated border
  animatedBorder:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse",
  
  // Background elements
  bgContainer: "absolute inset-0 opacity-5 pointer-events-none",
  bgGlow1:
    "absolute -top-12 -left-12 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse",
  bgGlow2:
    "absolute -right-16 -bottom-16 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-700 rounded-full filter blur-3xl",
  
  // Floating icons
  floatingIconsContainer:
    "absolute inset-0 opacity-10 pointer-events-none hidden md:block",
  floatingIcon: "absolute text-cyan-500",
  
  // Main content
  mainContainer:
    "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16",
  gridContainer:
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 mb-12 md:mb-16",
  
  // Brand section
  brandContainer: "lg:col-span-1",
  brandLogoContainer: "flex items-center mb-4 sm:mb-6",
  logoGlow:
    "absolute -inset-1 sm:-inset-2 bg-cyan-500 rounded-full blur opacity-75 animate-pulse",
  logoContainer:
    "relative bg-slate-950 p-2 sm:p-3 rounded-full border border-cyan-500",
  logoIcon: "h-7 w-7 sm:h-8 sm:w-8 text-cyan-400",
  brandTitle:
    "ml-3 sm:ml-4 text-2xl sm:text-3xl font-bold text-cyan-400",
  brandTitleWhite: "text-white",
  brandDescription:
    "text-gray-400 mb-6 sm:mb-8 font-light text-sm sm:text-base leading-relaxed",
  
  socialContainer: "flex space-x-3 sm:space-x-5",
  socialLink:
    "text-gray-400 p-2 sm:p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:text-cyan-400 border border-gray-800 hover:border-cyan-500",
  socialIcon: "h-4 w-4 sm:h-5 sm:w-5",
  
  // Section headers
  sectionHeader:
    "text-lg sm:text-xl font-bold mb-6 sm:mb-8 flex items-center text-cyan-400",
  sectionDot:
    "w-2.5 h-2.5 bg-cyan-500 rounded-full mr-3 animate-pulse",
  
  // Links
  linksList: "space-y-3 sm:space-y-4",
  linkItem:
    "text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group transform hover:translate-x-2 text-sm sm:text-base",
  linkDot:
    "w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block",
  
  // Contact info
  contactList: "space-y-4 sm:space-y-5 text-sm sm:text-base",
  contactItem: "flex items-start",
  contactIconContainer:
    "bg-slate-950 p-2 rounded-lg mr-3 border border-cyan-500",
  contactIcon: "h-4 w-4 sm:h-5 sm:w-5 text-cyan-400",
  contactText: "text-gray-400",
  
  // Divider
  divider:
    "relative h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8 sm:mb-10",
  dividerIconContainer:
    "absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-950 p-1.5 sm:p-2 rounded-full border border-cyan-500",
  dividerIcon: "h-5 w-5 sm:h-6 sm:w-6 text-cyan-400",
  
  // Bottom bar
  bottomBar:
    "flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0",
  designedBy: "text-sm flex items-center",
  designedByText:
    "text-gray-500 mr-2 text-xs sm:text-sm",
  designedByLink:
    "text-gray-500 font-medium hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm",
  policyLinks:
    "flex space-x-4 sm:space-x-6 text-xs sm:text-sm",
  policyLink:
    "text-gray-500 hover:text-cyan-400 transition-colors duration-300",
  
  // Scroll to top button
  scrollTopButton:
    "fixed bottom-4 sm:bottom-6 right-4 sm:right-6 cursor-pointer bg-cyan-700 hover:bg-cyan-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 z-20 group border border-cyan-500",
  scrollTopIcon: "h-5 w-5 sm:h-6 sm:w-6",
  
  // Custom CSS
  customCSS: `
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-18px) rotate(8deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
    .animate-float {
      will-change: transform;
    }
  `
};


// ... previous navbar and moviesPage styles ...

export const moviesStyles = {
  // Main container
  container: "px-4 py-8 sm:py-12 max-w-6xl mx-auto",
  
  // Title
  title: "text-3xl sm:text-4xl md:text-5xl text-center mb-8",
  
  // Grid layout
  grid: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6",
  
  // Movie article
  movieArticle: "flex flex-col items-center group",
  
  // Movie link
  movieLink: "w-full block rounded-2xl overflow-hidden transform transition-transform duration-300 ",
  
  // Movie image
  movieImage: "w-full rounded-2xl object-cover h-70 sm:h-56 md:h-64 lg:h-56 xl:h-70",
  
  // Movie info container
  movieInfo: "mt-3 text-center w-full px-1",
  
  // Title container
  titleContainer: "flex items-center justify-center gap-2",
  
  // Tickets icon
  ticketsIcon: "h-4 w-4 text-blue-600",
  
  // Movie title
  movieTitle: "text-base sm:text-lg font-medium truncate",
  
  // Category container
  categoryContainer: "mt-1 font-[pacifico]",
  
  // Category text
  categoryText: "text-xs sm:text-sm text-gray-400 capitalize"
};


// Add to src/assets/dummyStyles.js
export const loginStyles = {
  // Page container
  pageContainer:
    "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-black p-4 relative overflow-hidden",
  
  // Back button
  backButtonContainer: "mb-4 sm:mb-6 xl:mb-2 md:mb-0",
  backButton:
    "inline-flex xl:-ml-100 md:-ml-30 items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2",
  backButtonIcon:
    "mr-2 transform group-hover:-translate-x-1 transition-transform",
  backButtonText:
    "font-medium text-sm sm:text-base",
  
  // Card styles
  cardContainer:
    "relative md:mt-10 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 animate-border",
  cardHeader:
    "relative h-2 bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-700",
  cardContent:
    "px-6 sm:px-8 py-8 sm:py-10",
  
  // Header section
  headerContainer:
    "text-center mb-6 sm:mb-8",
  headerIconContainer:
    "flex justify-center items-center mb-3 sm:mb-4",
  headerIcon:
    "text-cyan-500 mr-2",
  headerTitle:
    "text-3xl sm:text-4xl font-bold text-white font-cinema leading-tight",
  headerSubtitle:
    "text-cyan-200 mt-1 sm:mt-2 font-medium text-sm sm:text-base",
  
  // Form styles
  formContainer:
    "space-y-4 sm:space-y-6",
  inputGroup:
    "mb-4 sm:mb-6",
  label:
    "block text-cyan-100 text-sm font-bold mb-2 font-cinema",
  inputContainer:
    "relative",
  input:
    "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/60 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-200 border border-gray-700 placeholder-gray-500",
  inputWithIcon:
    "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/60 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-200 border border-gray-700 pr-10",
  inputIcon:
    "absolute right-3 top-2.5 sm:top-3",
  passwordToggle:
    "absolute inset-y-0 right-0 px-2 sm:px-3 flex items-center focus:outline-none",
  passwordToggleIcon:
    "text-cyan-300",
  
  // Submit button
  submitButton:
    "w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 rounded-full hover:opacity-90 transition-all cursor-pointer duration-300 transform focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 shadow-lg shadow-cyan-900/30",
  submitButtonDisabled:
    "opacity-80 cursor-not-allowed",
  loadingSpinner:
    "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2",
  buttonContent:
    "flex items-center justify-center",
  buttonIcon:
    "mr-2",
  buttonText:
    "font-cinema text-sm sm:text-base",
  
  // Footer link
  footerContainer:
    "text-center mt-6 sm:mt-8",
  footerText:
    "text-gray-400 text-sm sm:text-base",
  footerLink:
    "text-cyan-400 hover:text-cyan-300 font-medium transition duration-200 underline hover:no-underline",
  
  // Custom CSS
  customCSS: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    @keyframes borderAnimation {
      0% {
        box-shadow: 0 0 0 1px #06b6d4, 0 0 20px 2px rgba(6, 182, 212, 0.3);
      }
      50% {
        box-shadow: 0 0 0 2px #06b6d4, 0 0 30px 4px rgba(6, 182, 212, 0.5);
      }
      100% {
        box-shadow: 0 0 0 1px #06b6d4, 0 0 20px 2px rgba(6, 182, 212, 0.3);
      }
    }

    .animate-border {
      animation: borderAnimation 3s infinite ease-in-out;
    }

    .font-cinema {
      font-family: 'Bebas Neue', cursive;
      letter-spacing: 1px;
    }

    @media (max-width: 420px) {
      .absolute.top-0 > div, .absolute.bottom-0 > div {
        width: 3rem;
        height: 3rem;
      }
    }
  `
};


// ... previous styles ...




// Add to src/assets/dummyStyles.js
export const releasesStyles = {
  // Page container
  pageContainer:
    "min-h-screen pt-28 md:pt-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6 pb-10",

  // Header section
  headerContainer: "text-center mb-12",
  headerTitle:
    "font-bold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 font-[pacifico]",
  headerSubtitle: "mt-4 text-xl text-gray-300",

  // Movie grid
  movieGrid:
    "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto",

  // Movie card
  movieCard:
    "group relative transition-all duration-500 hover:z-10 hover:scale-[1.03]",
  imageContainer:
    "relative overflow-hidden rounded-xl shadow-lg",
  movieImage:
    "w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110",

  // Movie info
  movieInfo: "mt-3 font-[pacifico] text-center",
  movieTitle: "font-semibold text-lg truncate",
  movieCategory: "text-sm text-gray-400 mt-1",
};

// Add to src/assets/dummyStyles.js
export const seatSelectorStyles = {
  // Page container
  pageContainer:
    "min-h-screen bg-gradient-to-b from-black to-slate-900 text-white py-8 px-4",

  // Main container
  mainContainer: "max-w-6xl mx-auto",

  // Header
  headerContainer: "flex items-center mb-8 gap-4",
  backButton:
    "inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-all px-4 py-3 rounded-xl hover:bg-cyan-900/20",
  backButtonIcon: "size-6",
  titleContainer: "flex-1 text-center",
  movieTitle:
    "text-4xl md:text-6xl py-1 font-bold tracking-wider mb-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent",
  showtimeText:
    "text-sm text-gray-500 mt-1 flex items-center justify-center gap-2",

  // Screen
  screenContainer: "mb-8",
  screen:
    "mx-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-2xl shadow-2xl text-center p-6 relative",
  screenText: "text-lg font-semibold text-cyan-200 tracking-widest",
  screenSubtext: "text-xs text-cyan-300 mt-2",

  // Main content
  mainContent:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-3xl p-8 border border-cyan-700/10 shadow-2xl",
  sectionHeader: "flex justify-center mb-6",
  sectionTitleContainer: "text-center",
  sectionTitle:
    "text-2xl bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent font-bold mb-2 flex items-center justify-center gap-2",
  titleDivider:
    "w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto",

  // Seat grid
  seatGridContainer: "flex flex-col items-center gap-6",
  rowContainer: "w-full max-w-4xl flex flex-col items-center",
  rowHeader: "w-full flex items-center justify-center mb-3",
  rowLabel: "w-12 mx-2 text-lg font-bold text-cyan-400 text-center",
  rowType:
    "w-20 px-5 text-sm font-semibold text-gray-400 capitalize text-center",

  // Seat buttons
  seatGrid: "seat-grid",
  seatButton:
    "seat-btn flex items-center justify-center text-sm font-semibold cursor-pointer transition-transform duration-200 transform hover:scale-105",
  seatButtonBooked:
    "opacity-40 cursor-not-allowed bg-slate-800 text-slate-500",

  seatButtonSelectedStandard:
    "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-2xl",
  seatButtonSelectedRecliner:
    "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-2xl",

  seatButtonAvailableStandard:
    "bg-slate-800 text-slate-200",
  seatButtonAvailableRecliner:
    "bg-emerald-900 text-emerald-200",

  seatContent: "flex flex-col items-center justify-center",
  seatIcon: "seat-icon",
  seatNumber: "text-xs mt-0.5 font-bold seat-num",

  // Booking summary
  summaryGrid:
    "mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
  summaryContainer:
    "lg:col-span-2 bg-black/30 p-6 rounded-2xl",
  summaryTitle:
    "text-lg font-bold mb-4 flex items-center gap-2",
  summaryItem:
    "flex justify-between items-center p-3 bg-black/40 rounded-xl",
  summaryLabel: "text-gray-300",
  summaryValue:
    "font-bold text-cyan-300 text-lg",

  // Selected seats
  selectedSeatsContainer:
    "p-3 bg-black/30 cursor-pointer rounded-xl",
  selectedSeatsLabel:
    "text-sm text-gray-400 mb-2",
  selectedSeatsList:
    "flex flex-wrap gap-2",
  selectedSeatBadge:
    "px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300",

  // Total amount
  totalContainer:
    "p-3 bg-gradient-to-r from-cyan-900/20 to-transparent rounded-xl",
  totalLabel:
    "text-gray-300 font-semibold",
  totalValue:
    "font-bold text-cyan-400 text-2xl",

  // Empty state
  emptyState:
    "text-center py-6 text-gray-500",
  emptyStateTitle:
    "text-lg mb-1",
  emptyStateSubtitle:
    "text-sm",

  // Action buttons
  actionButtons:
    "flex gap-3 mt-4",
  clearButton:
    "flex-1 px-4 py-3 rounded-full cursor-pointer bg-slate-800 text-gray-300 hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
  confirmButton:
    "flex-1 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:from-cyan-700 hover:to-blue-700 transition-all transform cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",

  // Pricing info
  pricingContainer:
    "bg-black/30 p-6 rounded-2xl",
  pricingTitle:
    "text-lg font-bold mb-4 flex items-center gap-2",
  pricingItem:
    "p-3 rounded-xl bg-black/40",
  pricingRow:
    "flex justify-between",
  pricingLabel:
    "text-sm text-gray-300",
  pricingValueStandard:
    "font-bold text-cyan-400",
  pricingValueRecliner:
    "font-bold text-emerald-400",
  pricingNote:
    "text-xs text-gray-500",

  // Custom CSS (UNCHANGED)
  customCSS: `/* same as your original */`
};


// ... previous styles ...

export const signUpStyles = {
  // Main container
  container:
    "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-black to-slate-900 p-4 relative overflow-hidden",

  // Background elements
  particlesContainer: "absolute inset-0 z-0",
  particle: "absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-float",
  gradientOrbs: "absolute inset-0 z-0 opacity-10",
  orb1:
    "absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl animate-pulse",
  orb2:
    "absolute bottom-1/3 right-1/4 w-56 h-56 bg-cyan-600 rounded-full filter blur-3xl animate-pulse delay-1000",

  // Main content
  mainContent: "relative mt-10 w-full max-w-2xl z-10",

  // Back button
  backButton:
    "absolute -top-10 -left-1 xl:-left-90 lg:-left-40 cursor-pointer flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 group mb-4",
  backIcon: "group-hover:-translate-x-1 transition-transform",
  backText: "ml-2 text-sm font-medium font-cinema",

  // Card
  card:
    "relative bg-gray-900/80 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-gray-700 animate-border",
  cardHeader:
    "relative h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600",
  cardContent: "px-8 py-8",

  // Header
  header: "text-center mb-8",
  headerFlex: "flex justify-center items-center mb-3",
  headerIcon: "text-cyan-400 mr-2",
  headerTitle: "text-3xl font-bold text-white font-cinema",
  headerSubtitle: "text-cyan-200 text-sm mt-1 font-medium",

  // Form
  form: "space-y-6",
  formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  // Form fields
  field: "block text-cyan-100 text-sm font-bold mb-2 font-cinema",
  inputContainer: "relative",
  input: {
    base:
      "w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 border pl-12",
    error: "border-red-500 focus:ring-red-500",
    normal: "border-gray-600 focus:ring-cyan-400",
  },
  inputWithIcon: "pl-12",
  inputWithToggle: "pl-12 pr-12",
  inputIcon: "absolute left-4 top-3.5 text-cyan-400",
  errorText: "text-red-400 text-xs mt-1",

  // Password toggle
  passwordToggle: "absolute right-4 top-3.5",
  toggleIcon: "text-cyan-300",

  // Submit button
  submitContainer: "pt-4",
  submitButton: {
    base:
      "w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-4 rounded-full hover:opacity-90 transition-all duration-300 transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 shadow-lg shadow-cyan-900/30 text-base",
    loading: "opacity-80 cursor-not-allowed",
  },
  loadingSpinner:
    "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2",
  submitContent: "flex items-center justify-center",
  submitIcon: "mr-2",

  // Login link
  loginContainer: "mt-6 text-center",
  loginText: "text-gray-400 text-sm",
  loginLink:
    "text-cyan-400 hover:text-cyan-300 font-medium transition duration-200 underline hover:no-underline",
};

// CSS styles for the SignUp component
export const signUpCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  
  @keyframes borderAnimation {
    0% {
      box-shadow: 0 0 0 1px #06b6d4, 0 0 15px 3px rgba(6, 182, 212, 0.3);
    }
    50% {
      box-shadow: 0 0 0 2px #06b6d4, 0 0 25px 5px rgba(6, 182, 212, 0.4);
    }
    100% {
      box-shadow: 0 0 0 1px #06b6d4, 0 0 15px 3px rgba(6, 182, 212, 0.3);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
      opacity: 0.1;
    }
  }
  
  .animate-border {
    animation: borderAnimation 3s infinite ease-in-out;
  }

  .animate-float {
    animation: float linear infinite;
  }
  
  .font-cinema {
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 1px;
  }
  
  /* Custom date picker styling */
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.6) sepia(1) saturate(4) hue-rotate(190deg);
    cursor: pointer;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #1f2937;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #06b6d4, #2563eb);
    border-radius: 3px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .grid-cols-2 {
      grid-template-columns: 1fr;
    }
  }
`;


// ... previous styles ...

export const trailersStyles = {
  // Main container
  container:
    "min-h-screen bg-gradient-to-b from-slate-100 to-slate-300 text-gray-900",
  main: "pt-20 pb-12",

  // Layout
  layout: "grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-6",

  // Left side - Trailers List
  leftSide: "w-full",
  leftCard: "bg-white rounded-xl shadow-lg p-5",

  leftTitle: "text-2xl font-semibold mb-4 flex items-center gap-2",
  titleIcon: "text-cyan-600",

  // Carousel controls
  carouselControls: "flex items-center justify-between mb-3",
  controlButtons: "flex gap-2",
  controlButton:
    "p-2 rounded-full bg-slate-100 hover:bg-cyan-100 text-cyan-600",
  trailerCount: "text-sm text-gray-500",

  // Carousel
  carousel: "flex overflow-x-auto space-x-3 pb-3 scrollbar-hide",
  carouselItem: {
    base: "flex-none rounded-lg overflow-hidden relative cursor-pointer",
    active: "ring-2 ring-cyan-600",
    inactive: "hover:ring-1 hover:ring-cyan-400",
  },
  carouselImage: "w-full h-full object-cover",
  carouselOverlay:
    "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-2 flex flex-col justify-end",
  carouselTitle: "text-white text-sm font-semibold",
  carouselGenre: "text-xs text-gray-300",

  // Trending
  trendingSection: "mt-6",
  trendingTitle: "font-bold text-lg mb-2",
  trendingItem:
    "flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-50 cursor-pointer",
  trendingImage: "w-14 h-14 rounded-md overflow-hidden",
  trendingImageSrc: "w-full h-full object-cover",
  trendingItemTitle: "text-sm font-medium",
  trendingItemGenre: "text-xs text-gray-500",

  // Right side - Featured Trailer
  rightSide: "w-full",
  rightCard: "bg-white rounded-xl shadow-lg overflow-hidden h-fit",

  // Video Player
  videoContainer: "relative",
  videoWrapper: "aspect-video",
  videoIframe: "w-full h-full",
  closeButton: "absolute top-3 right-3",
  closeButtonInner: "bg-white p-2 rounded-full",

  // Thumbnail state
  thumbnailContainer: "relative aspect-video bg-slate-900",
  thumbnailImage: "w-full h-full object-cover",
  playButtonContainer: "absolute inset-0 flex items-center justify-center",
  playButton: "bg-cyan-600 hover:bg-cyan-700 p-4 rounded-full",

  // Trailer Info
  trailerInfo: "p-5",
  infoHeader:
    "flex flex-col md:flex-row md:items-center justify-between gap-3",
  trailerTitle: "text-2xl font-bold",
  trailerMeta: "flex gap-4 text-sm text-gray-600",
  metaItem: "flex items-center gap-1",
  metaIcon: "text-cyan-600",

  // Genre tags
  genreContainer: "mt-4 flex flex-wrap gap-2",
  genreTag:
    "px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs",

  // Description
  description: "mt-4 text-gray-700",

  // Credits
  credits: "mt-6",
  creditsTitle: "text-xl font-bold mb-3",
  creditsGrid: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
  creditItem: "flex flex-col items-center text-center",
  creditImage: "w-14 h-14 rounded-full overflow-hidden",
  creditImageSrc: "w-full h-full object-cover",
  creditName: "mt-1 text-sm font-medium",
  creditRole: "text-xs text-gray-500 capitalize",
};

export const trailersCSS = `
  /* Hide scrollbar */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  /* Responsive carousel card size */
  [data-id] {
    width: 200px;
    min-width: 200px;
    height: 112px;
  }

  @media (min-width: 1024px) {
    [data-id] {
      width: 220px;
      min-width: 220px;
      height: 124px;
    }
  }
`;

// Add to src/assets/dummyStyles.js
export const seatSelectorHStyles = {
  // Page container
  pageContainer:
    "min-h-screen bg-gradient-to-b from-black to-slate-900 text-white py-8 px-4",

  // Main container
  mainContainer: "max-w-6xl mx-auto",

  // Header
  headerContainer: "flex items-center mb-8 gap-4",
  backButton:
    "inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-all px-4 py-3 rounded-xl hover:bg-cyan-900/20",
  titleContainer: "flex-1 text-center",
  movieTitle:
    "text-4xl md:text-6xl py-1 font-bold tracking-wider mb-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent",
  showtimeText:
    "text-sm text-gray-500 mt-1 flex items-center justify-center gap-2",

  // Screen
  screenContainer: "mb-8",
  screen:
    "mx-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-2xl shadow-2xl text-center p-6 relative",
  screenText:
    "text-lg font-semibold text-cyan-200 tracking-widest",
  screenSubtext:
    "text-xs text-cyan-300 mt-2",

  // Main content
  mainContent:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-3xl p-8 border border-cyan-700/10 shadow-2xl",
  sectionHeader: "flex justify-center mb-6",
  sectionTitleContainer: "text-center",
  sectionTitle:
    "text-2xl bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent font-bold mb-2 flex items-center justify-center gap-2",
  titleDivider:
    "w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto",

  // Seat grid
  seatGridContainer: "flex flex-col items-center gap-6",
  rowContainer:
    "w-full max-w-4xl flex flex-col items-center",
  rowHeader:
    "w-full flex items-center justify-center mb-3",
  rowLabel:
    "w-12 mx-3 text-lg font-bold text-cyan-400 text-center",
  rowType:
    "w-20 px-3 text-sm font-semibold text-gray-400 capitalize text-center",

  // Seat buttons
  seatGrid: "seat-grid",
  seatButton:
    "seat-btn flex items-center justify-center text-sm font-semibold cursor-pointer transition-transform duration-200 transform hover:scale-105",
  seatButtonBooked:
    "opacity-40 cursor-not-allowed bg-slate-800 text-slate-500",

  seatButtonSelectedStandard:
    "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-2xl",
  seatButtonSelectedRecliner:
    "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-2xl",

  seatButtonAvailableStandard:
    "bg-slate-800 text-slate-200",
  seatButtonAvailableRecliner:
    "bg-emerald-900 text-emerald-200",

  seatContent:
    "flex flex-col items-center justify-center",
  seatIcon: "seat-icon",
  seatNumber:
    "text-xs mt-0.5 font-bold seat-num",

  // Booking summary
  summaryGrid:
    "mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
  summaryContainer:
    "lg:col-span-2 bg-black/30 p-6 rounded-2xl",
  summaryTitle:
    "text-lg font-bold mb-4 flex items-center gap-2",
  summaryItem:
    "flex justify-between items-center p-3 bg-black/40 rounded-xl",
  summaryLabel:
    "text-gray-300",
  summaryValue:
    "font-bold text-cyan-300 text-lg",

  // Selected seats
  selectedSeatsContainer:
    "p-3 bg-black/30 cursor-pointer rounded-xl",
  selectedSeatsLabel:
    "text-sm text-gray-400 mb-2",
  selectedSeatsList:
    "flex flex-wrap gap-2",
  selectedSeatBadge:
    "px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300",

  // Total amount
  totalContainer:
    "p-3 bg-gradient-to-r from-cyan-900/20 to-transparent rounded-xl",
  totalLabel:
    "text-gray-300 font-semibold",
  totalValue:
    "font-bold text-cyan-400 text-2xl",

  // Empty state
  emptyState:
    "text-center py-6 text-gray-500",
  emptyStateTitle:
    "text-lg mb-1",
  emptyStateSubtitle:
    "text-sm",

  // Action buttons
  actionButtons:
    "flex gap-3 mt-4",
  clearButton:
    "flex-1 px-4 py-3 rounded-full cursor-pointer bg-slate-800 text-gray-300 hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
  confirmButton:
    "flex-1 px-4 py-3 rounded-full cursor-pointer bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:from-cyan-700 hover:to-blue-700 transition-all transform disabled:opacity-50 disabled:cursor-not-allowed",

  // Pricing info
  pricingContainer:
    "bg-black/30 p-6 rounded-2xl",
  pricingTitle:
    "text-lg font-bold mb-4 flex items-center gap-2",
  pricingItem:
    "p-3 rounded-xl bg-black/40",
  pricingRow:
    "flex justify-between",
  pricingLabel:
    "text-sm text-gray-300",
  pricingValueStandard:
    "font-bold text-cyan-400",
  pricingValueRecliner:
    "font-bold text-emerald-400",
  pricingNote:
    "text-xs text-gray-500",

  // Custom CSS (unchanged)
  customCSS: `
    .seat-grid { display: grid; gap: 0.75rem; grid-template-columns: repeat(8, minmax(3.2rem, 5rem)); }
    .seat-btn { width: 100%; height: 3.5rem; border-radius: .75rem; }

    @media (max-width: 1024px) {
      .seat-grid { grid-template-columns: repeat(8, minmax(2.6rem, 4rem)); }
      .seat-btn { height: 3rem; }
    }

    @media (max-width: 640px) {
      .seat-grid { grid-template-columns: repeat(8, minmax(1.4rem, 1fr)); gap: .45rem; }
      .seat-btn { height: 2.2rem; font-size: .625rem; border-radius: .5rem; padding: 0 .25rem; }
      .seat-icon { transform: scale(0.85); }
      .seat-num { font-size: .6rem; }
    }

    @media (max-width: 420px) {
      .seat-grid { grid-template-columns: repeat(8, minmax(1.1rem, 1fr)); gap: .35rem; }
      .seat-btn { height: 1.9rem; font-size: .55rem; }
    }
  `,
};

// ... previous styles ...

export const movieDetailStyles = {
  // Main container
  container:
    "min-h-screen bg-gradient-to-b from-black to-slate-900 text-white py-8 px-4",
  wrapper: "max-w-7xl mx-auto",

  // Header
  header: "flex items-center gap-4 mb-8",
  backButton:
    "inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-cyan-900/20",
  backIcon: "size-18",
  backText: "text-sm sm:text-base",

  // Movie title
  titleContainer: "text-center mb-8 sm:mb-12",
  movieTitle:
    "text-3xl sm:text-5xl md:text-5xl lg:text-7xl py-1 font-bold tracking-wider mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent",
  movieMeta:
    "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg text-gray-300",
  metaItem: "flex items-center gap-2",
  metaIcon: "h-4 w-4",
  ratingIcon: "text-yellow-400",
  durationIcon: "text-cyan-400",
  genreTag:
    "px-3 py-1 bg-cyan-900/40 rounded-full text-cyan-300 text-sm border border-cyan-700/30",

  // Main layout
  mainLayout:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8",

  // Left column - Poster
  leftColumn: "lg:col-span-1 order-1 md:order-1",
  posterCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-6 border border-cyan-700/20 shadow-2xl",
  posterImage:
    "relative overflow-hidden rounded-xl mx-auto w-full",
  posterImg:
    "w-full h-full object-cover rounded-xl transition-transform duration-300",
  trailerButton:
    "w-full mt-6 flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-base sm:text-lg transition-all shadow-lg",
  trailerIcon: "size-18",

  // Middle + Right columns
  rightColumns: "lg:col-span-2 order-2 md:order-2",

  // Showtimes section
  showtimesCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-8 border border-cyan-700/20 shadow-2xl mb-6",
  showtimesTitle:
    "text-2xl sm:text-4xl font-bold mb-6 text-cyan-300 text-center flex items-center justify-center gap-2",
  showtimesIcon: "h-6 w-6",

  // Day selection
  daySelection:
    "flex overflow-x-auto gap-2 mb-4 pb-2 sm:mb-8 sm:pb-0 scrollbar-hide",
  dayButton: {
    base:
      "flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base",
    active:
      "bg-cyan-600 text-white shadow-lg transform scale-105",
    inactive:
      "bg-slate-800/60 text-gray-300 hover:bg-slate-700/80",
  },
  dayName: "text-xs sm:text-sm",
  dayDate: "text-sm sm:text-base",

  // Showtimes grid
  showtimesGrid:
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4",
  timeButton: {
    base:
      "px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-sm sm:text-lg font-semibold transition-all duration-300 border flex items-center justify-center gap-2 text-center",
    active:
      "bg-cyan-600 text-white border-cyan-500/50 transform scale-105",
    inactive:
      "bg-slate-800/40 text-gray-200 border-slate-700/50 hover:bg-cyan-600 hover:text-white hover:border-cyan-500/50",
  },
  soldOutBadge:
    "ml-2 px-2 py-0.5 rounded-full text-xs bg-cyan-700/90 text-white font-bold",

  // Proceed button
  proceedButton: "mt-4 sm:mt-6 text-center",
  bookButton:
    "px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-base sm:text-lg shadow-2xl hover:from-cyan-700 hover:to-blue-700 transition-transform transform hover:scale-105",

  // Cast section
  castCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-8 border border-cyan-700/20 shadow-2xl",
  castTitle:
    "text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-cyan-300 text-center flex items-center justify-center gap-2",
  castIcon: "h-5 w-5",
  castGrid:
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
  castItem: "text-center group",
  castImageContainer:
    "relative mx-auto mb-3",
  castImage:
    "w-20 h-20 rounded-full object-cover mx-auto border-2 border-cyan-600/30 group-hover:border-cyan-400 transition-colors",
  castName:
    "font-semibold text-base sm:text-lg",
  castRole:
    "text-xs sm:text-sm text-gray-400",
  noCast:
    "text-gray-400 col-span-full text-center py-8",

  // Story section
  storyCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-8 border border-cyan-700/20 shadow-2xl mb-8",
  storyTitle:
    "text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-cyan-300 text-center",
  storyText:
    "text-gray-300 leading-relaxed text-base sm:text-lg text-center max-w-4xl mx-auto",

  // Director & Producer section
  crewGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
  crewCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-8 border border-cyan-700/20 shadow-2xl text-center",
  crewHeader:
    "flex items-center justify-center gap-3 mb-4",
  crewIcon:
    "h-5 w-5 text-cyan-400",
  crewTitle:
    "text-xl sm:text-3xl font-bold text-cyan-300",
  crewContent:
    "flex flex-col items-center",
  crewImageGrid:
    "flex gap-4 sm:gap-6 items-start justify-center",
  crewImage:
    "w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-cyan-600/30 mb-3 sm:mb-4",
  crewName:
    "font-semibold text-base sm:text-xl",
  fallbackAvatar:
    "w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-700 flex items-center justify-center text-xl text-gray-300 mb-3 sm:mb-4",

  // Trailer modal
  modalOverlay:
    "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4",
  modalContainer:
    "relative w-full max-w-6xl",
  closeButton:
    "absolute right-0 sm:-top-10 -top-6 sm:-right-4 text-white hover:text-cyan-400 z-10",
  closeIcon: "size-36",
  videoContainer:
    "w-full aspect-video rounded-xl overflow-hidden",
  videoIframe:
    "w-full h-full rounded-xl",

  // Not found state
  notFoundContainer:
    "min-h-screen flex items-center justify-center bg-black text-white",
  notFoundContent:
    "text-center",
  notFoundTitle:
    "text-2xl",
  notFoundLink:
    "mt-4 inline-block text-cyan-400 underline",
};

// CSS styles for the MovieDetail component
export const movieDetailCSS = `
  /* hide default scrollbar on small devices for horizontal scrollers while keeping scrolling usable */
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  
  @media (max-width: 640px) {
    /* compact title spacing on very small screens */
    h1 { line-height: 1.05; }
  }

  /* Custom font for titles */
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
`;

// Add to src/assets/dummyStyles.js
export const movieDetailHStyles = {
  // Page container
  pageContainer: "min-h-screen bg-gradient-to-b from-black to-slate-900 text-white py-8 px-4",

  // Main container
  mainContainer: "max-w-7xl mx-auto",

  // Header
  headerContainer: "flex items-center gap-4 mb-6 sm:mb-8",
  backButton:
    "inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-cyan-900/20",
  backButtonText: "text-sm sm:text-base",

  // Movie title
  titleContainer: "text-center mb-6 sm:mb-12",
  movieTitle:
    "text-2xl sm:text-4xl md:text-5xl lg:text-7xl py-1 font-bold tracking-wider mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent",
  movieInfoContainer:
    "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-lg text-gray-300",
  rating: "flex items-center gap-2",
  ratingIcon: "h-4 w-4 text-yellow-400",
  duration: "flex items-center gap-2",
  durationIcon: "h-4 w-4 text-blue-400",
  genre:
    "px-3 py-1 bg-cyan-900/40 rounded-full text-cyan-300 text-xs sm:text-sm border border-cyan-700/30",

  // Main grid layout
  mainGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8",

  // Poster section
  posterContainer: "lg:col-span-1 order-1 md:order-1",
  posterCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-6 border border-cyan-700/20 shadow-2xl",
  posterImageContainer: "relative overflow-hidden rounded-xl mx-auto w-full",
  posterImage:
    "w-full h-full object-cover rounded-xl transition-transform duration-300",
  trailerButton:
    "w-full mt-5 sm:mt-6 flex items-center justify-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-sm sm:text-base transition-all shadow-lg",

  // Showtimes section
  showtimesContainer: "lg:col-span-2 order-2 md:order-2",
  showtimesCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-8 border border-cyan-700/20 shadow-2xl mb-6",
  showtimesTitle:
    "text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-cyan-300 text-center flex items-center justify-center gap-2",
  showtimesTitleIcon: "h-6 w-6",

  // Day selection
  daySelection:
    "flex overflow-x-auto gap-2 mb-4 pb-2 sm:mb-6 sm:pb-0 scrollbar-hide",
  dayButton:
    "flex-shrink-0 px-3 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm",
  dayButtonSelected:
    "bg-cyan-600 text-white shadow-lg transform scale-105",
  dayButtonDefault:
    "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80",
  dayName: "text-xs",
  dayDate: "text-sm sm:text-base",

  // Showtimes grid
  showtimesGrid:
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4",
  showtimeButton:
    "px-2 sm:px-3 py-2 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 border flex items-center justify-center gap-2 text-center",
  showtimeButtonSelected:
    "bg-cyan-600 text-white border-cyan-500/50 transform scale-105",
  showtimeButtonDefault:
    "bg-gray-800/40 text-gray-200 border-gray-700/50 hover:bg-cyan-600 hover:text-white hover:border-cyan-500/50",
  soldOutBadge:
    "ml-2 px-2 py-0.5 rounded-full text-xs bg-blue-700/90 text-white font-bold",

  // No showtimes message
  noShowtimes: "col-span-full text-center text-gray-400 py-6",

  // Book now button
  bookNowContainer: "mt-4 sm:mt-6 text-center",
  bookNowButton:
    "px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm sm:text-base shadow-2xl hover:from-cyan-700 hover:to-blue-700 transition-transform transform hover:scale-105",

  // Cast section
  castCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-8 border border-cyan-700/20 shadow-2xl",
  castTitle:
    "text-lg sm:text-2xl font-bold mb-4 text-cyan-300 text-center flex items-center justify-center gap-2",
  castTitleIcon: "h-5 w-5",
  castGrid:
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
  castMember: "text-center group",
  castImageContainer: "relative mx-auto mb-3",
  castImage:
    "w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto border-2 border-cyan-600/30 group-hover:border-cyan-400 transition-colors",
  castName: "font-semibold text-sm sm:text-base",
  castRole: "text-xs sm:text-sm text-gray-400",
  noCastMessage:
    "text-gray-400 col-span-full text-center py-8",

  // Story section
  storyCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-8 border border-cyan-700/20 shadow-2xl mb-8",
  storyTitle:
    "text-lg sm:text-2xl md:text-3xl font-bold mb-4 text-cyan-300 text-center",
  storyText:
    "text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg text-center max-w-4xl mx-auto",

  // Director & Producer section
  crewGrid: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
  crewCard:
    "bg-gradient-to-br from-black/80 to-slate-900 rounded-2xl p-4 sm:p-8 border border-cyan-700/20 shadow-2xl text-center",
  crewTitle:
    "text-lg sm:text-2xl md:text-3xl font-bold text-cyan-300 flex items-center justify-center gap-3 mb-4",
  crewIcon: "h-5 w-5 text-cyan-400",
  crewContent: "flex flex-col items-center",
  crewGridInner:
    "flex gap-4 sm:gap-6 items-start justify-center",
  crewImage:
    "w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-cyan-600/30 mb-3 sm:mb-4",
  crewName: "font-semibold text-sm sm:text-base",
  fallbackAvatar:
    "w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-700 flex items-center justify-center text-xl text-gray-300 mb-3 sm:mb-4",

  // Trailer modal
  trailerModal:
    "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4",
  trailerContainer: "relative w-full max-w-6xl",
  closeButton:
    "absolute right-0 sm:-top-10 -top-6 sm:-right-4 text-white hover:text-cyan-400 z-10",
  trailerIframe:
    "w-full aspect-video rounded-xl overflow-hidden",
  iframe: "w-full h-full rounded-xl",

  // Not found state
  notFoundContainer:
    "min-h-screen flex items-center justify-center bg-black text-white",
  notFoundContent: "text-center",
  notFoundTitle: "text-2xl",
  notFoundLink:
    "mt-4 inline-block text-cyan-400 underline",

  // Custom CSS
  customCSS: `
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    .scrollbar-hide::-webkit-scrollbar { display: none; }

    @media (max-width: 420px) {
      h1 { line-height: 1.05; font-size: 1.25rem; }
    }
  `
};
