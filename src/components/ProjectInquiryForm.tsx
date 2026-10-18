import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Mail,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import {
  PROFESSION_OPTIONS,
  WEBSITE_TYPE_OPTIONS,
  DESIGN_STYLE_OPTIONS,
  BUDGET_RANGE_OPTIONS,
} from '../data/vizoraData';
import {
  InquiryPreselection,
  ProjectInquiryPayload,
  ProfessionOption,
  WebsiteTypeOption,
  DesignStyleOption,
} from '../types';
import {
  submitProjectInquiry,
  InquirySubmissionResult,
} from '../services/inquiryService';

interface ProjectInquiryFormProps {
  preselection?: InquiryPreselection | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  profession?: string;
  websiteType?: string;
  projectGoals?: string;
  designStyle?: string;
  existingWebsiteUrl?: string;
  projectDetails?: string;
}

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({
  preselection,
}) => {
  const [formData, setFormData] = useState<ProjectInquiryPayload>({
    fullName: '',
    email: '',
    businessName: '',
    profession: '',
    websiteType: '',
    projectGoals: '',
    designStyle: '',
    existingWebsiteUrl: '',
    budgetRange: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] =
    useState<InquirySubmissionResult | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [preselectBanner, setPreselectBanner] = useState<string | null>(null);

  useEffect(() => {
    if (!preselection) return;
    setFormData((prev) => ({
      ...prev,
      profession: preselection.profession ?? prev.profession,
      websiteType: preselection.websiteType ?? prev.websiteType,
      designStyle: preselection.designStyle ?? prev.designStyle,
      projectGoals:
        preselection.projectContext && !prev.projectGoals
          ? preselection.projectContext
          : prev.projectGoals,
    }));

    const parts: string[] = [];
    if (preselection.profession) parts.push(preselection.profession);
    if (preselection.websiteType) parts.push(preselection.websiteType);
    if (parts.length > 0) {
      setPreselectBanner(`Preselected for your project: ${parts.join(' · ')}`);
    }
  }, [preselection]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email =
        'Please enter a valid email address (e.g., name@domain.com).';
    }
    if (!formData.profession) {
      nextErrors.profession = 'Please select your profession or business type.';
    }
    if (!formData.websiteType) {
      nextErrors.websiteType = 'Please select the type of website you need.';
    }
    if (!formData.projectGoals.trim()) {
      nextErrors.projectGoals =
        'Please share your primary goals for this website (e.g., showcase portfolio, accept client inquiries).';
    }
    if (!formData.designStyle) {
      nextErrors.designStyle = 'Please select a preferred design style.';
    }
    if (
      formData.existingWebsiteUrl.trim() &&
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(
        formData.existingWebsiteUrl.trim()
      )
    ) {
      nextErrors.existingWebsiteUrl =
        'Please enter a valid domain or URL (or leave this optional field blank).';
    }
    if (
      !formData.projectDetails.trim() ||
      formData.projectDetails.trim().length < 10
    ) {
      nextErrors.projectDetails =
        'Please tell us a bit more about your project, pages, or visual references (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitProjectInquiry(formData);
      setSubmissionResult(result);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyBrief = async () => {
    if (!submissionResult) return;
    try {
      await navigator.clipboard.writeText(submissionResult.formattedBrief);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setCopiedBrief(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setErrors({});
  };

  return (
    <section
      id="inquiry"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 text-[#211C19] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-[#C99A52]" aria-hidden="true" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#9A6B28]">
              START YOUR PROJECT
            </span>
            <span className="w-10 h-[1px] bg-[#C99A52]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#211C19] leading-[1.08] mb-4">
            Let&apos;s Build Something That{' '}
            <span className="italic text-[#A8762E]">Represents You.</span>
          </h2>

          <p className="font-serif text-lg sm:text-2xl text-[#49382B] leading-relaxed">
            Tell us about your work, your business, and the digital presence you
            envision.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="rounded-[32px] bg-[#FFF9F0] border border-[#C99A52]/40 shadow-champagne-elevated p-6 sm:p-10 lg:p-14">
          {preselectBanner && !submissionResult && (
            <div className="mb-8 p-4 rounded-2xl bg-[#F5EBDD] text-[#211C19] flex items-center justify-between gap-4 border border-[#C99A52]/50">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                <Sparkles className="w-4 h-4 text-[#9A6B28] shrink-0" />
                <span>{preselectBanner}</span>
              </div>
              <button
                type="button"
                onClick={() => setPreselectBanner(null)}
                className="text-[11px] uppercase tracking-wider font-bold text-[#49382B] hover:text-[#211C19]"
              >
                Dismiss
              </button>
            </div>
          )}

          {submissionResult ? (
            <div
              role="status"
              aria-live="polite"
              className="space-y-6 p-6 sm:p-8 rounded-3xl bg-[#F5EBDD] text-[#211C19] border border-[#C99A52]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C99A52]/30 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-champagne-gold-pill flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#211C19]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#9A6B28] block">
                      {submissionResult.status === 'delivered'
                        ? 'INQUIRY TRANSMITTED'
                        : 'PROJECT BRIEF PREPARED · READY TO SEND'}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#211C19]">
                      Reference: {submissionResult.referenceCode}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFF9F0] hover:bg-[#E7D2B8]/60 border border-[#C99A52]/40 text-xs font-bold uppercase tracking-wider text-[#211C19] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Edit Inquiry Details</span>
                </button>
              </div>

              <p className="text-sm text-[#49382B] leading-relaxed">
                {submissionResult.message}
              </p>

              {/* Formatted Brief Preview */}
              <div className="rounded-2xl bg-[#FFF9F0] border border-[#C99A52]/35 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#C99A52]/25">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#9A6B28]">
                    Structured Project Inquiry Summary
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-champagne-gold-pill text-[#211C19] text-xs font-bold transition-all"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Project Brief</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs font-mono text-[#211C19] whitespace-pre-wrap overflow-x-auto leading-relaxed">
                  {submissionResult.formattedBrief}
                </pre>
              </div>

              {/* Actionable Mailto & Integration Note */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                <a
                  href={submissionResult.mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-champagne-gold-pill text-[#211C19] text-xs font-bold uppercase tracking-[0.16em] transition-all"
                >
                  <Mail className="w-4 h-4 text-[#211C19]" />
                  <span>Open Brief in Email Client</span>
                </a>

                <span className="text-[11px] text-[#49382B]">
                  Integration boundary: set{' '}
                  <code className="text-[#9A6B28] font-semibold">
                    VITE_INQUIRY_ENDPOINT
                  </code>{' '}
                  in <code className="text-[#211C19]">.env</code> to connect
                  your live webhook or email service.
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              {/* Row 1: Name, Email & Business/Brand Name (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="inquiry-fullName"
                    className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                  >
                    Full Name <span className="text-[#9A6B28]">*</span>
                  </label>
                  <input
                    id="inquiry-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName)
                        setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g., Khadija Farhat"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={
                      errors.fullName ? 'err-fullName' : undefined
                    }
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border text-sm text-[#211C19] placeholder:text-[#49382B]/55 focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all ${
                      errors.fullName ? 'border-red-600' : 'border-[#C99A52]/35'
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      id="err-fullName"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-email"
                    className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                  >
                    Email Address <span className="text-[#9A6B28]">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email)
                        setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border text-sm text-[#211C19] placeholder:text-[#49382B]/55 focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all ${
                      errors.email ? 'border-red-600' : 'border-[#C99A52]/35'
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="err-email"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-businessName"
                    className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                  >
                    Business or Brand Name{' '}
                    <span className="text-[#49382B]/70 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    id="inquiry-businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    placeholder="e.g., Atelier Elara"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border border-[#C99A52]/35 text-sm text-[#211C19] placeholder:text-[#49382B]/55 focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Profession & Website Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="inquiry-profession"
                    className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                  >
                    Profession or Industry{' '}
                    <span className="text-[#9A6B28]">*</span>
                  </label>
                  <select
                    id="inquiry-profession"
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        profession: e.target.value as ProfessionOption | '',
                      });
                      if (errors.profession)
                        setErrors({ ...errors, profession: undefined });
                    }}
                    aria-invalid={Boolean(errors.profession)}
                    aria-describedby={
                      errors.profession ? 'err-profession' : undefined
                    }
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border text-sm text-[#211C19] focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all ${
                      errors.profession
                        ? 'border-red-600'
                        : 'border-[#C99A52]/35'
                    }`}
                  >
                    <option value="">
                      Select your profession or business...
                    </option>
                    {PROFESSION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.profession && (
                    <p
                      id="err-profession"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.profession}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-websiteType"
                    className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                  >
                    Website Type <span className="text-[#9A6B28]">*</span>
                  </label>
                  <select
                    id="inquiry-websiteType"
                    name="websiteType"
                    required
                    value={formData.websiteType}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        websiteType: e.target.value as WebsiteTypeOption | '',
                      });
                      if (errors.websiteType)
                        setErrors({ ...errors, websiteType: undefined });
                    }}
                    aria-invalid={Boolean(errors.websiteType)}
                    aria-describedby={
                      errors.websiteType ? 'err-websiteType' : undefined
                    }
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border text-sm text-[#211C19] focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all ${
                      errors.websiteType
                        ? 'border-red-600'
                        : 'border-[#C99A52]/35'
                    }`}
                  >
                    <option value="">Select website type...</option>
                    {WEBSITE_TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.websiteType && (
                    <p
                      id="err-websiteType"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.websiteType}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Preferred Design Style */}
              <div>
                <span className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2.5">
                  Preferred Design Direction{' '}
                  <span className="text-[#9A6B28]">*</span>
                </span>
                <div
                  role="radiogroup"
                  aria-label="Preferred Design Style"
                  className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5"
                >
                  {DESIGN_STYLE_OPTIONS.map((styleOpt) => {
                    const isSelected = formData.designStyle === styleOpt;
                    return (
                      <button
                        key={styleOpt}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            designStyle: styleOpt as DesignStyleOption,
                          });
                          if (errors.designStyle)
                            setErrors({ ...errors, designStyle: undefined });
                        }}
                        className={`px-4 py-3 rounded-2xl text-xs font-semibold border text-left transition-all flex items-center justify-between gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52] ${
                          isSelected
                            ? 'bg-champagne-gold-pill text-[#211C19] border-[#A67635]'
                            : 'bg-[#F5EBDD]/65 text-[#49382B] border-[#C99A52]/30 hover:border-[#C99A52]'
                        }`}
                      >
                        <span>{styleOpt}</span>
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            isSelected ? 'bg-[#211C19]' : 'bg-[#C99A52]/50'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
                {errors.designStyle && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.designStyle}</span>
                  </p>
                )}
              </div>

              {/* Row 4: Project Goals */}
              <div>
                <label
                  htmlFor="inquiry-projectGoals"
                  className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                >
                  Project Goals <span className="text-[#9A6B28]">*</span>
                </label>
                <input
                  id="inquiry-projectGoals"
                  name="projectGoals"
                  type="text"
                  required
                  value={formData.projectGoals}
                  onChange={(e) => {
                    setFormData({ ...formData, projectGoals: e.target.value });
                    if (errors.projectGoals)
                      setErrors({ ...errors, projectGoals: undefined });
                  }}
                  placeholder="e.g., Present my modeling comp card & tear sheets, display salon services & pricing, receive client booking inquiries"
                  aria-invalid={Boolean(errors.projectGoals)}
                  aria-describedby={
                    errors.projectGoals ? 'err-projectGoals' : undefined
                  }
                  className={`w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border text-sm text-[#211C19] placeholder:text-[#49382B]/55 focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all ${
                    errors.projectGoals
                      ? 'border-red-600'
                      : 'border-[#C99A52]/35'
                  }`}
                />
                {errors.projectGoals && (
                  <p
                    id="err-projectGoals"
                    className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.projectGoals}</span>
                  </p>
                )}
              </div>

              {/* Row 5: Optional Existing Website URL & Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="inquiry-existingUrl"
                    className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                  >
                    Existing Website URL{' '}
                    <span className="text-[#49382B]/70 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    id="inquiry-existingUrl"
                    name="existingWebsiteUrl"
                    type="url"
                    value={formData.existingWebsiteUrl}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        existingWebsiteUrl: e.target.value,
                      });
                      if (errors.existingWebsiteUrl)
                        setErrors({ ...errors, existingWebsiteUrl: undefined });
                    }}
                    placeholder="https://yourcurrentsite.com"
                    aria-invalid={Boolean(errors.existingWebsiteUrl)}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border text-sm text-[#211C19] placeholder:text-[#49382B]/55 focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all ${
                      errors.existingWebsiteUrl
                        ? 'border-red-600'
                        : 'border-[#C99A52]/35'
                    }`}
                  />
                  {errors.existingWebsiteUrl && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.existingWebsiteUrl}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-budgetRange"
                    className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                  >
                    Budget Range / Project Tier{' '}
                    <span className="text-[#49382B]/70 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <select
                    id="inquiry-budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) =>
                      setFormData({ ...formData, budgetRange: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border border-[#C99A52]/35 text-sm text-[#211C19] focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all"
                  >
                    <option value="">
                      Select scope or request a custom quote...
                    </option>
                    {BUDGET_RANGE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 6: Additional Details */}
              <div>
                <label
                  htmlFor="inquiry-projectDetails"
                  className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#211C19] mb-2"
                >
                  Additional Details <span className="text-[#9A6B28]">*</span>
                </label>
                <textarea
                  id="inquiry-projectDetails"
                  name="projectDetails"
                  rows={4}
                  required
                  value={formData.projectDetails}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      projectDetails: e.target.value,
                    });
                    if (errors.projectDetails)
                      setErrors({ ...errors, projectDetails: undefined });
                  }}
                  placeholder="Share any pages, gallery categories, comp-card stats, service menus, booking preferences, or visual references you admire..."
                  aria-invalid={Boolean(errors.projectDetails)}
                  aria-describedby={
                    errors.projectDetails ? 'err-projectDetails' : undefined
                  }
                  className={`w-full px-4 py-3.5 rounded-2xl bg-[#F5EBDD]/70 border text-sm text-[#211C19] placeholder:text-[#49382B]/55 focus:outline-none focus:ring-2 focus:ring-[#C99A52] transition-all ${
                    errors.projectDetails
                      ? 'border-red-600'
                      : 'border-[#C99A52]/35'
                  }`}
                />
                {errors.projectDetails && (
                  <p
                    id="err-projectDetails"
                    className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.projectDetails}</span>
                  </p>
                )}
              </div>

              {/* Submit Button Bar */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-3.5 px-9 py-4 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill disabled:opacity-60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#211C19]"
                >
                  <span>
                    {isSubmitting
                      ? 'Preparing Your Inquiry...'
                      : 'Send My Project Inquiry'}
                  </span>
                  <Send className="w-4 h-4 text-[#211C19] transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <span className="font-serif italic text-sm text-[#49382B]">
                  Bespoke proposals tailored to your profession, pages, and
                  creative vision.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
