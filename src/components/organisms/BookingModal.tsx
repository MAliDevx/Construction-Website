import { X, Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Heading, Text } from '../atoms/Typography';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <style>{`
        .modal-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .modal-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .modal-scroll::-webkit-scrollbar-thumb {
          background: #F2652280;
          border-radius: 10px;
        }
        .modal-scroll::-webkit-scrollbar-thumb:hover {
          background: #F26522;
        }
        .modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: #F2652280 #f1f1f1;
        }
        .input-field {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
          background: #fafafa;
          color: #111;
          appearance: none;
        }
        .input-field:focus {
          border-color: #F26522;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(242, 101, 34, 0.1);
        }
        .input-field::placeholder {
          color: #aaa;
        }
        .form-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #374151;
          margin-bottom: 6px;
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #F26522 0%, #e8520f 100%);
          color: white;
          font-weight: 700;
          font-size: 15px;
          padding: 14px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.25s;
          box-shadow: 0 4px 15px rgba(242, 101, 34, 0.35);
        }
        .submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(242, 101, 34, 0.45);
        }
        .submit-btn:active {
          transform: translateY(0);
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-[100]"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
            />

            {/* Modal Wrapper — centers on screen, scrolls on mobile */}
            <div
              className="fixed inset-0 z-[101] flex items-center justify-center p-3 md:p-6"
              style={{ overflowY: 'auto' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 40 }}
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                style={{
                  width: '100%',
                  maxWidth: '960px',
                  background: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.25)',
                  overflow: 'hidden',
                  position: 'relative',
                  margin: 'auto',
                }}
              >
                {/* Success State */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        zIndex: 50,
                        borderRadius: '20px',
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', delay: 0.15, stiffness: 200 }}
                      >
                        <CheckCircle size={90} color="#16a34a" strokeWidth={1.5} />
                      </motion.div>
                      <div style={{ textAlign: 'center', padding: '0 24px' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#15803d', marginBottom: '8px' }}>
                          Request Submitted! 🎉
                        </h2>
                        <p style={{ color: '#16a34a', fontSize: '15px' }}>
                          We'll contact you within 24 hours to discuss your project.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 20,
                    background: 'rgba(255,255,255,0.9)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = '#f3f4f6')}
                  onMouseOut={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.9)')}
                >
                  <X size={20} color="#374151" />
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

                  {/* ── LEFT PANEL ── */}
                  <div
                    style={{
                      background: 'linear-gradient(160deg, #F26522 0%, #c94d0f 60%, #a33d0a 100%)',
                      padding: '48px 36px',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '520px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Decorative circles */}
                    <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                    <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                    <div style={{ position: 'absolute', top: '40%', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {/* Badge */}
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        borderRadius: '20px', padding: '6px 14px',
                        fontSize: '12px', fontWeight: 600, marginBottom: '20px',
                      }}>
                        <Sparkles size={14} />
                        100% Free — No Hidden Charges
                      </div>

                      <h2 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
                        Get Your Free<br />Consultation
                      </h2>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px' }}>
                        Share your vision. Our expert team at Shaah Infra will help you build it.
                      </p>

                      {/* Feature list */}
                      <div style={{
                        background: 'rgba(255,255,255,0.12)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '16px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                      }}>
                        {[
                          { icon: <CheckCircle size={18} />, title: 'Free Consultation', sub: 'No charges, completely free' },
                          { icon: <Clock size={18} />, title: 'Quick Response', sub: 'Reply within 24 hours' },
                          { icon: <Users size={18} />, title: 'Expert Team', sub: 'Seasoned professionals' },
                        ].map(item => (
                          <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ marginTop: '2px', opacity: 0.9 }}>{item.icon}</div>
                            <div>
                              <p style={{ fontWeight: 700, fontSize: '14px', marginBottom: '2px' }}>{item.title}</p>
                              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{item.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact info */}
                    <div style={{ position: 'relative', zIndex: 1, marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                      {[
                        { icon: <Phone size={16} />, text: '+91 9705779992' },
                        { icon: <Mail size={16} />, text: 'info@shaahinfra.com' },
                        { icon: <MapPin size={16} />, text: 'Kalyandurgam Road, Anantapur, AP 515001' },
                      ].map(item => (
                        <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
                          <div style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── RIGHT FORM PANEL ── */}
                  <div
                    className="modal-scroll"
                    style={{
                      padding: '40px 32px',
                      overflowY: 'auto',
                      maxHeight: '90vh',
                      background: '#fff',
                    }}
                  >
                    {/* Form header */}
                    <div style={{ marginBottom: '28px' }}>
                      <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#1f2937', marginBottom: '6px' }}>
                        Tell Us About Your Project
                      </h3>
                      <p style={{ fontSize: '14px', color: '#6b7280' }}>
                        Fill in the details below and we'll reach out shortly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

                      {/* Row: Name + Phone */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                          <label className="form-label">Full Name</label>
                          <input type="text" placeholder="Your name" required className="input-field" />
                        </div>
                        <div>
                          <label className="form-label">Phone Number</label>
                          <input type="tel" placeholder="+91 XXXXXXXXXX" required className="input-field" />
                        </div>
                      </div>

                      {/* Row: Email + City */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                          <label className="form-label">Email Address</label>
                          <input type="email" placeholder="you@email.com" required className="input-field" />
                        </div>
                        <div>
                          <label className="form-label">City / Location</label>
                          <input type="text" placeholder="Your city" required className="input-field" />
                        </div>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label className="form-label">Project Type</label>
                        <div style={{ position: 'relative' }}>
                          <select required className="input-field" style={{ paddingRight: '36px' }}>
                            <option value="">Select project type</option>
                            <option>Residential Construction</option>
                            <option>Commercial Construction</option>
                            <option>Interior Designing</option>
                            <option>Renovation</option>
                            <option>Other</option>
                          </select>
                          <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>▾</div>
                        </div>
                      </div>

                      {/* Row: Timeline + Budget */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                          <label className="form-label">Start Timeline</label>
                          <div style={{ position: 'relative' }}>
                            <select required className="input-field" style={{ paddingRight: '36px' }}>
                              <option>Immediately</option>
                              <option>In 1 Month</option>
                              <option>In 3 Months</option>
                              <option>In 6 Months</option>
                              <option>Not decided yet</option>
                            </select>
                            <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>▾</div>
                          </div>
                        </div>
                        <div>
                          <label className="form-label">Budget Range</label>
                          <div style={{ position: 'relative' }}>
                            <select required className="input-field" style={{ paddingRight: '36px' }}>
                              <option value="">Select range</option>
                              <option>Below 20 Lakhs</option>
                              <option>20–50 Lakhs</option>
                              <option>50L – 1 Crore</option>
                              <option>Above 1 Crore</option>
                            </select>
                            <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>▾</div>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="form-label">Project Details <span style={{ color: '#9ca3af', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(Optional)</span></label>
                        <textarea
                          placeholder="Describe your project, plot size, specific requirements..."
                          rows={3}
                          className="input-field"
                          style={{ resize: 'none' }}
                        />
                      </div>

                      {/* Submit */}
                      <button type="submit" className="submit-btn">
                        <Send size={18} style={{ transform: 'rotate(45deg)' }} />
                        Get Free Consultation
                      </button>

                      <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
                        🔒 Your information is 100% secure and confidential.
                      </p>
                    </form>
                  </div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}