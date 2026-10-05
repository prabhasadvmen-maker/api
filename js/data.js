const apisData = [
    { id: 'api-1', name: 'Maps & Location Services', icon: 'ph-map-pin', price: 25000, category: 'Location', description: 'Enterprise-grade mapping, routing, and location APIs for accurate geographic data.' },
    { id: 'api-2', name: 'OTP & SMS Service', icon: 'ph-chat-circle-dots', price: 30000, category: 'Communication', description: 'Reliable SMS delivery and OTP generation for secure user authentication.' },
    { id: 'api-3', name: 'Aadhaar / KYC Verification', icon: 'ph-identification-card', price: 30000, category: 'Verification', description: 'Instant identity verification using Aadhaar and centralized KYC databases.' },
    { id: 'api-4', name: 'PAN Verification', icon: 'ph-bank', price: 12000, category: 'Verification', description: 'Real-time PAN card validation and fetching of associated entity details.' },
    { id: 'api-5', name: 'Driving Licence Verification', icon: 'ph-car', price: 15000, category: 'Verification', description: 'Verify driver credentials and history against official RTO databases.' },
    { id: 'api-6', name: 'Vehicle RC Verification', icon: 'ph-file-text', price: 20000, category: 'Verification', description: 'Registration Certificate validation for vehicles and ownership checks.' },
    { id: 'api-7', name: 'Insurance / Fitness / Permit', icon: 'ph-shield-check', price: 15000, category: 'Compliance', description: 'Check commercial vehicle insurance, fitness certificates, and permit validity.' },
    { id: 'api-8', name: 'Bank Account & IFSC Verification', icon: 'ph-money', price: 10000, category: 'Finance', description: 'Verify bank account existence and IFSC code correctness before payouts.' },
    { id: 'api-9', name: 'OCR / Document Verification', icon: 'ph-scan', price: 15000, category: 'Verification', description: 'Extract text from images and documents to automate data entry and verification.' },
    { id: 'api-10', name: 'Face Match & Liveness', icon: 'ph-user-focus', price: 20000, category: 'Security', description: 'AI-powered face matching and liveness detection for secure onboarding.' },
    { id: 'api-11', name: 'Payment Gateway', icon: 'ph-credit-card', price: 5000, category: 'Finance', description: 'Accept payments via UPI, Cards, Net Banking, and Wallets securely.' },
    { id: 'api-12', name: 'Partner Payout / Settlement', icon: 'ph-arrows-left-right', price: 10000, category: 'Finance', description: 'Automated mass payouts and settlements to vendors or partners.' },
    { id: 'api-13', name: 'WhatsApp Business', icon: 'ph-whatsapp-logo', price: 15000, category: 'Communication', description: 'Engage customers on WhatsApp with notifications and conversational AI.' },
    { id: 'api-14', name: 'Email Service', icon: 'ph-envelope', price: 6000, category: 'Communication', description: 'High-deliverability transactional and marketing email APIs.' },
    { id: 'api-15', name: 'Push Notifications & App Monitoring', icon: 'ph-bell-ringing', price: 12000, category: 'Infrastructure', description: 'Real-time push alerts and application performance monitoring.' },
    { id: 'api-16', name: 'Document & Image Storage', icon: 'ph-database', price: 12000, category: 'Infrastructure', description: 'Secure, scalable cloud storage for customer documents and assets.' },
    { id: 'api-17', name: 'Live Location / Tracking', icon: 'ph-crosshair', price: 24000, category: 'Location', description: 'Real-time asset and fleet tracking with geolocation sockets.' },
    { id: 'api-18', name: 'Redis / Location Cache', icon: 'ph-lightning', price: 12000, category: 'Infrastructure', description: 'High-speed in-memory caching for location data and rapid data retrieval.' }
];

// Helper to format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};
