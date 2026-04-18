import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import doppelgangerCert from '../../assets/openpools_doppelganger.png';
import { CardContainer, CardBody, CardItem } from '../ui/3d-card';

const certificatesData = [
    {
        id: 1,
        title: 'Udemy Certificate of Completion',
        issuer: 'Udemy',
        date: '2024',
        description: 'Successfully completed the comprehensive course on Udemy, covering key concepts and practical applications.',
        image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-fc5e81aa-82be-4709-8f64-ca7141c718dc.jpg',
        link: 'https://www.udemy.com/certificate/UC-fc5e81aa-82be-4709-8f64-ca7141c718dc/',
        category: 'Skill',
    },
    {
        id: 2,
        title: 'Doppelganger — Certificate of Participation',
        issuer: 'openpools.in',
        date: '2025',
        description: 'Participated in Doppelganger, a collaborative 30-hour build sprint hosted on OpenPools, where teams transformed their Professional DNA into real-world solutions.',
        image: doppelgangerCert,
        link: 'https://www.openpools.in',
        category: 'Hackathon',
    },
    {
        id: 3,
        title: 'ArtPark CodeForge Hackathon',
        issuer: 'ArtPark',
        date: '2024',
        description: 'Participated in the ArtPark CodeForge Hackathon, collaborating with a team in the Build & Submit Prototype Development Round.',
        image: 'https://res.cloudinary.com/dgg4scip6/image/upload/q_auto/f_auto/v1776414169/98072f4c-ba9b-4ef2-a82a-b4dcf6249141-1_1_hxpndr.png',
        link: 'https://res.cloudinary.com/dgg4scip6/image/upload/q_auto/f_auto/v1776414169/98072f4c-ba9b-4ef2-a82a-b4dcf6249141-1_1_hxpndr.png',
        category: 'Hackathon',
    },
    {
        id: 4,
        title: 'PostgreSQL Certification',
        issuer: 'CodingGita',
        date: '2024',
        description: 'Successfully completed PostgreSQL concepts and practical applications.',
        image: 'https://res.cloudinary.com/dgg4scip6/image/upload/q_auto/f_auto/v1776413916/postgress_s4bzit.png',
        link: 'https://res.cloudinary.com/dgg4scip6/image/upload/q_auto/f_auto/v1776413916/postgress_s4bzit.png',
        category: 'Skill',
    },
    {
        id: 5,
        title: 'Node.js Certification',
        issuer: 'CodingGita',
        date: '2024',
        description: 'Successfully completed backend development using Node.js.',
        image: 'https://res.cloudinary.com/dgg4scip6/image/upload/q_auto/f_auto/v1776413904/nodejs1_gz6dsk.png',
        link: 'https://res.cloudinary.com/dgg4scip6/image/upload/q_auto/f_auto/v1776413904/nodejs1_gz6dsk.png',
        category: 'Skill',
    },
    {
        id: 6,
        title: 'Hacrux Hackathon Excellence',
        issuer: 'Hacrux',
        date: '2025',
        description: 'Participated in the Hacrux high-intensity hackathon sprint, collaborating with a team to architect and build an innovative project under strict deadlines. Demonstrated rapid prototyping and problem-solving skills.',
        image: 'https://res.cloudinary.com/dgg4scip6/image/upload/q_auto/f_auto/v1776413482/Aman_kumar_wplz4x.png',
        link: 'https://res.cloudinary.com/dgg4scip6/image/upload/q_auto/f_auto/v1776413482/Aman_kumar_wplz4x.png',
        category: 'Hackathon',
    },
    {
        id: 7,
        title: 'Responsive Web Design',
        issuer: 'FreeCodeCamp',
        date: '2023',
        description: 'Certified in Responsive Web Design, covering HTML/CSS, Flexbox, Grid, and accessible design patterns.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
        link: 'https://www.freecodecamp.org/certification/aman-kumar/responsive-web-design',
        category: 'Skill',
    },
    {
        id: 8,
        title: 'Problem Solving (Basic)',
        issuer: 'HackerRank',
        date: '2024',
        description: 'Demonstrated proficiency in solving basic algorithms and data structure challenges on the HackerRank platform.',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
        link: 'https://www.hackerrank.com/certificates/problem-solving-basic',
        category: 'Skill',
    }
];

const Certificates = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [filter, setFilter] = useState('All');

    return (
        <section id="certificates" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Certifications
                </motion.h2>

                {/* Filter Buttons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    {['All', 'Hackathon', 'Skill'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'} cursor-target`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Certificate Detail Cards with 3D Effect */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', padding: '20px 0' }}>
                    <AnimatePresence>
                        {certificatesData.filter(cert => filter === 'All' || cert.category === filter).map((cert, index) => (
                            <CardContainer key={cert.id} containerClassName="py-10">
                                <CardBody
                                    className="bg-[var(--bg-card)] backdrop-blur-md relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-all duration-300"
                                    style={{ border: '1px solid var(--border-main)' }}
                                >
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-white dark:text-white"
                                    >
                                        {cert.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-var(--primary-color) text-sm max-w-sm mt-2 font-bold"
                                    >
                                        {cert.issuer}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <img
                                            src={cert.image}
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                            onClick={() => setSelectedId(cert.id)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </CardItem>
                                    <div className="flex justify-center items-center mt-20">
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            onClick={() => setSelectedId(cert.id)}
                                            className="px-6 py-2 rounded-xl text-sm font-semibold text-white bg-[var(--primary-color)]/20 hover:bg-[var(--primary-color)]/40 hover:scale-105 transition-all cursor-target"
                                        >
                                            View Details →
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </AnimatePresence>
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
                                    className="cursor-target"
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
                                                    className="btn btn-primary cursor-target"
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
