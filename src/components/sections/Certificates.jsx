import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import doppelgangerCert from '../../assets/openpools_doppelganger.png';

const certificatesData = [
    {
        id: 1,
        title: 'Udemy Certificate of Completion',
        issuer: 'Udemy',
        date: '2024',
        description: 'Successfully completed the comprehensive course on Udemy, covering key concepts and practical applications.',
        image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-fc5e81aa-82be-4709-8f64-ca7141c718dc.jpg',
        link: 'https://www.udemy.com/certificate/UC-fc5e81aa-82be-4709-8f64-ca7141c718dc/',
    },
    {
        id: 2,
        title: 'Doppelganger — Certificate of Participation',
        issuer: 'openpools.in',
        date: '2025',
        description: 'Participated in Doppelganger, a collaborative 30-hour build sprint hosted on OpenPools, where teams transformed their Professional DNA into real-world solutions.',
        image: doppelgangerCert,
        link: 'https://www.openpools.in',
    },
];

const Certificates = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="certificates" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Certifications
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            layoutId={`card-container-${cert.id}`}
                            key={cert.id}
                            className="glass-card"
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 20px rgba(var(--primary-rgb), 0.15)',
                                borderColor: 'rgba(var(--primary-rgb), 0.3)',
                            }}
                            onClick={() => setSelectedId(cert.id)}
                            style={{ cursor: 'pointer', overflow: 'hidden' }}
                        >
                            <motion.div className="cert-image-container" style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <motion.img
                                    src={cert.image}
                                    alt={cert.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    whileHover={{ scale: 1.08 }}
                                />
                            </motion.div>
                            <div style={{ padding: '25px' }}>
                                <motion.h3 style={{ marginBottom: '10px', fontSize: '1.5rem', fontWeight: '700' }}>{cert.title}</motion.h3>
                                <motion.p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: '12px', fontSize: '1.2rem' }}>{cert.issuer}</motion.p>
                                <motion.p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    {cert.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            layoutId={`card-container-${selectedId}`}
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.8)',
                                zIndex: 1000,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                className="glass-card"
                                style={{
                                    maxWidth: '800px',
                                    width: '100%',
                                    maxHeight: '90vh',
                                    overflowY: 'auto',
                                    background: 'var(--surface-color)',
                                    padding: '0',
                                    position: 'relative'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedId(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        background: 'rgba(0,0,0,0.5)',
                                        border: 'none',
                                        color: 'white',
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        zIndex: 10,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    ✕
                                </button>

                                {certificatesData.filter(c => c.id === selectedId).map(cert => (
                                    <div key={cert.id}>
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain', background: '#000' }}
                                        />
                                        <div style={{ padding: '40px' }}>
                                            <h2 style={{ marginBottom: '15px', color: 'var(--text-main)', fontSize: '2.5rem' }}>{cert.title}</h2>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', fontSize: '1.2rem' }}>
                                                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{cert.issuer}</span>
                                                <span style={{ color: 'var(--text-secondary)' }}>{cert.date}</span>
                                            </div>
                                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '30px', fontSize: '1.25rem' }}>
                                                {cert.description}
                                            </p>

                                            <div style={{ display: 'flex', gap: '15px' }}>
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary"
                                                    style={{ textDecoration: 'none', display: 'inline-block' }}
                                                >
                                                    Verify Credential
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Certificates;
