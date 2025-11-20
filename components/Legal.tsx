import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicy: React.FC = () => (
  <>
    <Helmet>
      <title>Privacy Policy | Driftwood AI</title>
    </Helmet>
    <div className="min-h-screen bg-driftwood-light-bg dark:bg-driftwood-dark-bg pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-driftwood-orange mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <article className="prose dark:prose-invert prose-headings:font-sans prose-p:text-driftwood-light-text dark:prose-p:text-driftwood-dark-text">
          <h1 className="text-3xl font-bold text-driftwood-dark-bg dark:text-white mb-6">Privacy Policy</h1>
          <p className="text-sm font-mono text-driftwood-dark-text mb-8">Last Updated: February 2025</p>

          <p>At Driftwood AI, we take data privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our AI voice services.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">1. Information We Collect</h3>
          <p>We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Identifiers:</strong> Name, email address, phone number.</li>
              <li><strong>Audio Data:</strong> Voice recordings processed by our AI agents for quality assurance and service delivery.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our website (via cookies and analytics).</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">2. How We Use Your Information</h3>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, operate, and maintain our AI services.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Analyze call sentiment and improve AI model performance.</li>
              <li>Send you emails, including confirmations, technical notices, updates, and support messages.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">3. Data Security</h3>
          <p>We implement appropriate technical and organizational security measures to protect the security of your personal information. However, please remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.</p>
        </article>
      </div>
    </div>
  </>
);

export const TermsOfService: React.FC = () => (
  <>
    <Helmet>
      <title>Terms of Service | Driftwood AI</title>
    </Helmet>
    <div className="min-h-screen bg-driftwood-light-bg dark:bg-driftwood-dark-bg pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-driftwood-orange mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <article className="prose dark:prose-invert prose-headings:font-sans prose-p:text-driftwood-light-text dark:prose-p:text-driftwood-dark-text">
          <h1 className="text-3xl font-bold text-driftwood-dark-bg dark:text-white mb-6">Terms of Service</h1>
          <p className="text-sm font-mono text-driftwood-dark-text mb-8">Last Updated: February 2025</p>

          <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">1. Acceptance of Terms</h3>
          <p>By accessing or using the Driftwood AI website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Driftwood AI's website for personal, non-commercial transitory viewing only.</p>

          <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">3. AI Usage & Compliance</h3>
          <p>You agree not to use our Voice AI agents for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Illegal robocalling or spamming in violation of TCPA or local regulations.</li>
              <li>Harassment, hate speech, or abuse.</li>
              <li>Impersonating government officials or emergency services.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">4. Limitation of Liability</h3>
          <p>In no event shall Driftwood AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Driftwood AI's website.</p>
        </article>
      </div>
    </div>
  </>
);