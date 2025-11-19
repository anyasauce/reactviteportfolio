import React from 'react';
import { CreditCard, Slash, XCircle, LayoutDashboard, Clock, FileText, LifeBuoy, Server } from 'lucide-react';

function TermsPolicy() {
    const terms = [
        {
            title: "Payment Terms",
            content: "A downpayment of 40-50% of the base price is required to start the project. This confirms your commitment to the project.",
            icon: <CreditCard />,
            color: "#FFD700"
        },
        {
            title: "Non-Refundable Policy",
            content: "The downpayment is non-refundable under any circumstances. By making a downpayment, you acknowledge and accept this policy.",
            icon: <Slash />,
            color: "#FF4C4C"
        },
        {
            title: "Cancellation Policy",
            content: "Projects cannot be canceled once the downpayment is made. Any cancellations made after payment will not be refunded.",
            icon: <XCircle />,
            color: "#FF6B6B"
        },
        {
            title: "Project Scope & Features",
            content: "The base price covers the requested system, whether it is custom-built from scratch or prebuilt. Any additional features or custom requests made during development will incur extra charges based on complexity.",
            icon: <LayoutDashboard />,
            color: "#4C9AFF"
        },
        {
            title: "Delivery & Revisions",
            content: "The project will be delivered according to the agreed timeline. Minor revisions are allowed, but major changes may affect delivery time and cost.",
            icon: <Clock />,
            color: "#FFA500"
        },
        {
            title: "Ownership & Intellectual Property",
            content: "Once full payment is completed, the client gains ownership of the project. Until then, the intellectual property remains with the developer.",
            icon: <FileText />,
            color: "#00C4CC"
        },
        {
            title: "Support",
            content: "Basic support is provided after project delivery. Extended support or maintenance will require a separate agreement.",
            icon: <LifeBuoy />,
            color: "#7C3AED"
        },
        {
            title: "Maintenance & Hosting",
            content: "If the client provides hosting or cloud database, ongoing maintenance, updates, or support for the system may incur additional charges.",
            icon: <Server />,
            color: "#4CAF50"
        }
    ];

    return (
        <section className="py-5">
            <h2 className="section-title text-center mb-5">Terms & Policies</h2>

            <div className="row g-4">
                {terms.map((term, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card border-0 bg-dark bg-opacity-25 rounded-4 h-100 hover:bg-dark hover:bg-opacity-50 transition-colors">
                            <div className="card-body d-flex align-items-start gap-3 p-4">
                                <div className="icon-box flex-shrink-0 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: term.color + "33" }}>
                                    {React.cloneElement(term.icon, { size: 28, color: term.color })}
                                </div>
                                <div>
                                    <h5 className="card-title mb-2">{term.title}</h5>
                                    <p className="card-text mb-0">{term.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <div className="card border-0 bg-dark bg-opacity-25 rounded-4 p-4 text-center hover:bg-dark hover:bg-opacity-50 transition-colors">
                    <h5 className="mb-3">Acknowledgment</h5>
                    <p className="mb-0">
                        By proceeding with the downpayment, you acknowledge that you have read, understood, and agreed to all the terms and policies listed above.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TermsPolicy;
