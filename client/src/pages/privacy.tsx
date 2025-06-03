// d:\1Projects\PeekabooWebsite\client\src\pages\privacy.tsx
// This component renders the full Privacy Policy page, based on docs/privacy.md
// Author: Cascade
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Privacy Policy for Big Happy Holding Company and Subsidiaries (Peekaboo Interactive Games)</h1>
        <p>Effective Date: June 2, 2025</p>
        <p>Last Updated: June 2, 2025</p>
      </header>

      <section>
        <h2>1. INTRODUCTION</h2>
        <p>This Privacy Policy explains how Big Happy Holding Company and its subsidiaries ("Big Happy," "we," "our," or "us") collect, use, and protect information when you use our services.</p>
        <p>Key points: We collect only anonymous technical data to improve our apps. We never collect personal information from children or adults.</p>
        <p>Compliance: GDPR, CCPA, CPRA, and COPPA.</p>
      </section>

      <section>
        <h2>2. OUR COMMITMENT TO PRIVACY</h2>
        <ul>
          <li>No personal information collection from anyone</li>
          <li>Anonymous technical data only</li>
          <li>Data used solely for app improvement</li>
          <li>No advertising or marketing use</li>
          <li>Full COPPA compliance for children's safety</li>
        </ul>
      </section>

      <section>
        <h2>3. DATA WE COLLECT</h2>
        <h3>3.1 Anonymous Technical Data</h3>
        <ul>
          <li>Usage analytics (features used, session duration)</li>
          <li>Performance metrics (loading times, crash reports)</li>
          <li>General device information (OS version, device type)</li>
        </ul>
        <h3>3.2 We Do Not Collect</h3>
        <ul>
          <li>Names, emails, contact info</li>
          <li>Photos, videos, audio</li>
          <li>Location data, identifiers, IP addresses</li>
          <li>Any personal or child-specific information</li>
        </ul>
      </section>

      <section>
        <h2>4. HOW WE USE DATA</h2>
        <ul>
          <li>Improve app performance and stability</li>
          <li>Fix bugs and technical issues</li>
          <li>Understand feature usage</li>
          <li>Optimize across devices</li>
        </ul>
      </section>

      <section>
        <h2>5. CHILDREN'S PRIVACY PROTECTION</h2>
        <p>We fully comply with COPPA: no personal data from children under 13; all data is anonymous.</p>
        <p>No social features, no external links, no ads, no behavioral tracking of children.</p>
      </section>

      <section>
        <h2>6. DATA SHARING AND THIRD PARTIES</h2>
        <p>All shared data is anonymous and limited to reputable analytics and crash reporting services. No sales or ad sharing.</p>
      </section>

      <section>
        <h2>7. COOKIES AND TRACKING</h2>
        <p>Mobile apps use anonymous analytics SDKs. Our website uses only essential cookies and no tracking cookies for marketing.</p>
      </section>

      <section>
        <h2>8. DATA SECURITY</h2>
        <p>We implement secure transmission, access controls, and regular assessments to protect data.</p>
      </section>

      <section>
        <h2>9. DATA RETENTION</h2>
        <p>Data is retained up to 24 months for app improvement. Anonymous data purged regularly.</p>
      </section>

      <section>
        <h2>10. YOUR RIGHTS</h2>
        <p>Anonymous data rights do not apply, but you may contact us for confirmation of our practices.</p>
        <p>California (CCPA/CPRA) and EU/UK (GDPR) rights do not apply to anonymous data but can request information.</p>
      </section>

      <section>
        <h2>11. CONTACT INFORMATION</h2>
        <p>Data Protection Officer: Mark Barney</p>
        <address>
          Big Happy Holding Company<br />
          653 Pudding Hill Road<br />
          Hampton, CT 06247, USA<br />
          Phone: (860) 294-4111<br />
          Email: <a href="mailto:data.protection@bighappyhc.com">data.protection@bighappyhc.com</a>
        </address>
        <p>Response Time: Within 30 days</p>
      </section>

      <section>
        <h2>12. LEGAL COMPLIANCE</h2>
        <p>Governed by Connecticut law. Compliant with COPPA, CCPA/CPRA, GDPR, and other applicable privacy laws.</p>
      </section>

      <section>
        <h2>13. CHANGES TO THIS POLICY</h2>
        <p>Updates posted with a new effective date. Continued use constitutes acceptance.</p>
      </section>

      <footer>
        <a href="/">Back to Homepage</a>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;