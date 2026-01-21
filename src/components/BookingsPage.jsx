import React, { useEffect, useState } from "react";
import { Film, Clock, MapPin, QrCode, ChevronDown, X } from "lucide-react";
import QRCode from "qrcode";


const formatDuration = (mins) => {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};


const fmtTime = (d) =>
  d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

// pricing config
const RECLINER_EXTRA = 200;
const SERVICE_FEE_RATE = 0.05; // 5%
const SERVICE_FEE_MIN = 10;

// sample bookings array (3 cards)
const sampleBookings = [
  {
    id: "b1",
    title: "Fighter",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/d/df/Fighter_film_teaser.jpg",
    category: "Action",
    durationMins: 140,
    slotTime: new Date(new Date().setHours(19, 30, 0, 0)), // 7:30 PM today
    auditorium: "Audi 3",
    basePrice: 250,
    seats: [
      { id: "E5", type: "recliner" },
      { id: "E6", type: "recliner" },
      { id: "B3", type: "standard" },
    ],
  },
  {
    id: "b2",
    title: "Midnight Chase",
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f7c2b5c6b0d2b7d0b2b4722d7f6bc3c",
    category: "Thriller",
    durationMins: 125,
    slotTime: new Date(new Date().setHours(21, 0, 0, 0)),
    auditorium: "Audi 1",
    basePrice: 220,
    seats: [
      { id: "C4", type: "standard" },
      { id: "C5", type: "standard" },
    ],
  },
  {
    id: "b3",
    title: "Romance in Red",
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=181b2a6f89c3f37f8d4e2f4a1a47f2aa",
    category: "Romance",
    durationMins: 110,
    slotTime: new Date(new Date().setHours(17, 15, 0, 0)),
    auditorium: "Audi 2",
    basePrice: 200,
    seats: [{ id: "A1", type: "standard" }],
  },
];

export default function BookingsPage() {
  // qrs: { bookingId: { url: dataUrl, payload: string } }
  const [qrs, setQrs] = useState({});
  const [expanded, setExpanded] = useState({}); // { bookingId: true/false }
  const [scannedDetails, setScannedDetails] = useState(null); // object or null

  // generate QR codes for each booking (scannable)
  useEffect(() => {
    let mounted = true;
    const makeAll = async () => {
      const map = {};
      for (const b of sampleBookings) {
        // payload that we encode inside the QR
        const payload = JSON.stringify({
          id: b.id,
          title: b.title,
          time: fmtTime(b.slotTime),
          auditorium: b.auditorium,
          seats: b.seats.map((s) => s.id),
        });
        try {
          const url = await QRCode.toDataURL(payload, {
            errorCorrectionLevel: "M",
            margin: 1,
            scale: 6,
            color: { dark: "#000000", light: "#ffffff" },
          });
          // store both the data url (image) and the original payload string
          map[b.id] = { url, payload };
        } catch (e) {
          console.error("QR error", e);
          map[b.id] = { url: "", payload };
        }
      }
      if (mounted) setQrs(map);
    };
    makeAll();
    return () => {
      mounted = false;
    };
  }, []);

  const computeTotals = (booking) => {
    let subtotal = 0;
    booking.seats.forEach((s) => {
      subtotal += booking.basePrice + (s.type === "recliner" ? RECLINER_EXTRA : 0);
    });
    const total = subtotal;
    return { subtotal, total, seatCount: booking.seats.length };
  };

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Handler when QR is "scanned" (we simulate scan by clicking the QR image)
  const handleQrScan = (bookingId) => {
    // find payload from qrs state
    const entry = qrs[bookingId];
    if (!entry || !entry.payload) {
      // fallback: nothing to show
      return;
    }
    try {
      const parsed = JSON.parse(entry.payload);
      // Expand the card for the booking
      setExpanded((prev) => ({ ...prev, [bookingId]: true }));
      // Scroll the card into view for better UX
      const el = document.getElementById(`booking-card-${bookingId}`);
      if (el && el.scrollIntoView) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      // Set scanned details to open the modal (this shows the full booking details)
      setScannedDetails({ bookingId, ...parsed });
    } catch (e) {
      console.error("Failed to parse QR payload", e);
    }
  };

  const closeModal = () => setScannedDetails(null);

  return (
    <div
      className="min-h-screen  bg-black p-6 sm:p-8 text-gray-100"
      style={{ fontFamily: '"Cinzel", serif' }}
    >
      <div className="max-w-7xl pt-30 mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-500">Your Tickets</h1>
          <div className="text-sm text-gray-400">Present QR at entry</div>
        </header>

        {/* grid: 1 col mobile, 2 cols md, 3 cols lg+ (desktop & xl keep 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleBookings.map((b) => {
            const totals = computeTotals(b);
            const isOpen = !!expanded[b.id];

            return (
              <article
                id={`booking-card-${b.id}`}
                key={b.id}
                className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4 border border-red-800 shadow-xl"
                aria-labelledby={`booking-${b.id}-title`}
              >
               
                <div className="flex flex-col lg:flex-row items-start gap-4">
                  <div className="w-full lg:w-24 h-44 lg:h-36 flex-shrink-0 overflow-hidden rounded-md border border-red-700">
                    <img src={b.poster} alt={b.title} className="w-full h-full object-cover lg:object-cover xl:object-cover md:object-contain" />
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2
                          id={`booking-${b.id}-title`}
                          className="text-lg font-bold text-red-400 flex items-center gap-2"
                        >
                          <Film className="w-5 h-5" />
                          <span>{b.title}</span>
                        </h2>

                        {/* VISIBLE: Booking ID (small) */}
                        <div className="text-xs text-gray-400 mt-1">
                          Booking ID: <span className="font-mono text-xs text-gray-200">{b.id}</span>
                        </div>
                      </div>

                      {/* compact info on right side on lg+, on small screens appears under title */}
                      <div className="text-xs text-gray-400 text-right">
                        <div className="hidden lg:block">{b.category}</div>
                      </div>
                    </div>

                    <div className="mt-3 text-sm text-gray-300 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-300" />
                        <div>{fmtTime(b.slotTime)}</div>
                      </div>

                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <MapPin className="w-4 h-4 text-red-300" />
                        <div className="text-sm">{b.auditorium}</div>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-gray-400">Duration</div>
                    <div className="mt-1 text-sm text-gray-200">{formatDuration(b.durationMins)}</div>
                  </div>
                </div>

                {/* compact row: show seats count + price summary (always visible) */}
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="text-sm text-gray-400">Seats ({totals.seatCount})</div>
                  <div className="text-sm text-gray-300 font-semibold">₹{totals.total.toLocaleString("en-IN")}</div>
                </div>

                {/* toggled details (seats list, price breakdown, QR). Hidden by default on small; shown when 'View details' clicked */}
                <div
                  className={`mt-4 border-t border-red-900/40 pt-3 text-sm text-gray-300 space-y-3 transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                  aria-hidden={!isOpen}
                >
                  {/* seats */}
                  <div>
                    <div className="text-sm text-gray-400">Seats ({totals.seatCount})</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {b.seats.map((s) => (
                        <div
                          key={s.id}
                          className="px-3 py-1 rounded-md bg-black/40 border border-red-800 flex items-center gap-2 text-sm"
                        >
                          <div className="font-semibold">{s.id}</div>
                          <div
                            className={`text-xs px-2 py-0.5 rounded ${
                              s.type === "recliner" ? "bg-red-700 text-white" : "bg-gray-800 text-gray-200"
                            }`}
                          >
                            {s.type === "recliner" ? "Recliner" : "Standard"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* price breakdown */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-gray-300">
                      <div>Seats subtotal</div>
                      <div>₹{totals.subtotal.toLocaleString("en-IN")}</div>
                    </div>
                    
                    <div className="flex items-center justify-between font-semibold text-gray-100 text-lg">
                      <div>Total</div>
                      <div>₹{totals.total.toLocaleString("en-IN")}</div>
                    </div>
                  </div>

                  {/* QR */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <QrCode className="w-4 h-4" />
                      <div>Ticket QR</div>
                    </div>
                    <div className="ml-auto">
                      {qrs[b.id] && qrs[b.id].url ? (
                        // clickable QR image: clicking acts as "scan"
                        <img
                          src={qrs[b.id].url}
                          alt={`${b.title} qr`}
                          className="w-28 h-28 object-contain rounded-md bg-white p-1 cursor-pointer"
                          role="button"
                          tabIndex={0}
                          onClick={() => handleQrScan(b.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleQrScan(b.id);
                          }}
                        />
                      ) : (
                        <div className="w-28 h-28 bg-gray-800 rounded-md flex items-center justify-center text-xs text-gray-500">
                          QR unavailable
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* actions */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => toggle(b.id)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-red-700 bg-black/30 hover:bg-black/40 transition"
                  >
                    <span>{isOpen ? "Hide details" : "View details"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                 
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {/* Modal to show scanned booking details */}
      {scannedDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative max-w-md w-full bg-gray-900 rounded-2xl p-6 border border-red-800 shadow-2xl text-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-red-400">{scannedDetails.title}</h3>
                <div className="text-sm text-gray-300">Booking ID: <span className="font-mono text-sm">{scannedDetails.bookingId}</span></div>
                <div className="mt-2 text-sm text-gray-300">
                  <div><strong>Time:</strong> {scannedDetails.time}</div>
                  <div><strong>Auditorium:</strong> {scannedDetails.auditorium}</div>
                  <div className="mt-2"><strong>Seats:</strong> {Array.isArray(scannedDetails.seats) ? scannedDetails.seats.join(", ") : scannedDetails.seats}</div>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/30 border border-gray-700"
                aria-label="Close scanned details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

           
          </div>
        </div>
      )}
    </div>
  );
}
