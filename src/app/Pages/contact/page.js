"use client";
import GoogleMap from "@/app/Components/GoogleMap/GoogleMap";
import InquiaryForm from "@/app/Components/InquiaryForm/InquiaryForm";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8faff, #e6f0ff)",
        minHeight: "100vh",
      }}
    >
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "2.5rem", color: "#0d6efd" }}>
            Contact Us
          </h2>
          <p
            className="text-secondary mx-auto"
            style={{ fontSize: "1.1rem", maxWidth: "700px", lineHeight: "1.6" }}
          >
            Thanks for your interest in <strong>Ocean Techzone</strong>. We did love
            to hear from you! Please fill out the form, and we will get back to you
            shortly.
          </p>
        </div>

        <Row className="g-4">
          {/* Contact Form */}
          <Col
            md={6}
            className="mb-4 order-1 order-md-1"
          >
            <div className="shadow-lg p-4 rounded-4 bg-white h-100">
              <h4 className="fw-bold mb-3 text-primary">Request a Callback</h4>
              <p className="text-muted mb-4">
                Fill out the form and we will get back to you within 24 hours.
              </p>
              <InquiaryForm />
            </div>
          </Col>

          {/* Address Section */}
          <Col
            md={6}
            className="mb-4 order-2 order-md-2"
          >
            <div className="shadow-lg p-4 rounded-4 bg-white h-100">
              <h4 className="fw-bold mb-3">Get in Touch</h4>
              <p className="text-muted">
                Have questions about our services? We are always ready to help!
              </p>

              <div className="d-flex align-items-start mb-3">
                <FaMapMarkerAlt className="me-2 text-primary mt-1" />
                <p className="mb-0">F318, OLD MB ROAD, LADO SARAI, NEW DELHI 110030</p>
              </div>

              <div className="d-flex align-items-start mb-3">
                <FaEnvelope className="me-2 text-primary mt-1" />
                <a
                  href="mailto:info@oceantechzone.com"
                  className="text-decoration-none text-dark"
                  onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseLeave={(e) => (e.target.style.color = "#333")}
                >
                  info@oceantechzone.com
                </a>
              </div>

              <div className="d-flex align-items-start mb-4">
                <FaPhone className="me-2 text-primary mt-1" />
                <a
                  href="tel:+919289933499"
                  className="text-decoration-none text-dark"
                  onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseLeave={(e) => (e.target.style.color = "#333")}
                >
                  +91 9289933499
                </a>
              </div>

              <p className="fw-semibold">Follow us:</p>
              <div className="d-flex gap-3 fs-4">
                {[
                  { icon: <FaFacebook />, link: "https://www.facebook.com/Promotionkiduniya/" },
                  { icon: <FaInstagram />, link: "https://www.instagram.com/oceantechzone?igsh=bXp6NmJqZnM0cnhm" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/ocean-tech-zone/" },
                  { icon: <FaYoutube />, link: "https://www.youtube.com/channel/UC1RKOYMU2fW13keNQmZLKyQ" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => { e.target.style.color = "#0d6efd"; e.target.style.transform = "scale(1.2)"; }}
                    onMouseLeave={(e) => { e.target.style.color = "#333"; e.target.style.transform = "scale(1)"; }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Map Section */}
          <Col xs={12} className="order-3">
            <div className="shadow-lg rounded-4 overflow-hidden mt-3">
              <GoogleMap />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
