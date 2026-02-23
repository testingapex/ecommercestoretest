'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useToast } from '@/context/ToastContext';
import styles from './Contact.module.css';

export default function ContactPage() {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        showToast('Your message has been sent. We will get back to you soon!', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container section">
            <div className={styles.header}>
                <span className={styles.subheading}>Get in Touch</span>
                <h1>We'd love to hear from you.</h1>
                <p>Common questions? Our customer service team is here to help you with anything from orders to product inquiries.</p>
            </div>

            <div className={styles.contactLayout}>
                {/* Contact Info */}
                <div className={styles.infoColumn}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><Mail size={20} /></div>
                            <div>
                                <h3>Email Us</h3>
                                <p>hello@novamart.com</p>
                                <p>support@novamart.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><Phone size={20} /></div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+1 (555) 123-4567</p>
                                <p>Mon - Fri, 9am - 6pm EST</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><MapPin size={20} /></div>
                            <div>
                                <h3>Visit Our Studio</h3>
                                <p>123 Design District</p>
                                <p>New York, NY 10012</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><Clock size={20} /></div>
                            <div>
                                <h3>Business Hours</h3>
                                <p>Mon - Fri: 9:00 - 18:00</p>
                                <p>Sat - Sun: 10:00 - 15:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formColumn}>
                    <div className={styles.formCard}>
                        <div className={styles.formHeader}>
                            <MessageSquare size={24} />
                            <h2>Send us a Message</h2>
                        </div>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text" id="name" name="name" required
                                        value={formData.name} onChange={handleInputChange}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email" id="email" name="email" required
                                        value={formData.email} onChange={handleInputChange}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="subject">Subject</label>
                                <select
                                    id="subject" name="subject" required
                                    value={formData.subject} onChange={handleInputChange}
                                >
                                    <option value="">Select a reason</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Order Support">Order Support</option>
                                    <option value="Returns">Returns & Refunds</option>
                                    <option value="Collaboration">Partnerships</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message">How can we help?</label>
                                <textarea
                                    id="message" name="message" required rows={6}
                                    value={formData.message} onChange={handleInputChange}
                                    placeholder="Tell us about your inquiry..."
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
