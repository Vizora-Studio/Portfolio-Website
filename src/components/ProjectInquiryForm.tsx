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
import { submitProjectInquiry, InquirySubmissionResult } from '../services/inquiryService';

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

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({ preselection }) => {
  const [formData, setFormData] = useState<ProjectInquiryPayload>({
    fullName: '',
    email: '',
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
  const [submissionResult, setSubmissionResult] = useState<InquirySubmissionResult | null>(null);
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
      nextErrors.email = 'Please enter a valid email address (e.g., name@domain.com).';
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
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(formData.existingWebsiteUrl.trim())
    ) {
      nextErrors.existingWebsiteUrl =
        'Please enter a valid domain or URL (or leave this optional field blank).';
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 10) {
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
      // Fallback if clipboard API is restricted
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
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-paper text-vizora-black editorial-grid-lines-light overflow-hidden border-t border-vizora-paper-border"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vizora-blue/10 border border-vizora-blue/25 mb-5">
            <span className="w-2 h-2 rounded-full bg-vizora-blue" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-vizora-blue">
              Start Your Project
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-vizora-black leading-[1.08] mb-5">
            Let&apos;s Build Something That{' '}
            <span className="text-blue-purple-gradient">Represents You.</span>
          </h2>

          <p className="text-base sm:text-lg text-vizora-paper-muted leading-relaxed">
            Tell us about your work, your business, and the website you have in mind. We&apos;ll
            use your requirements to understand the right direction for your project.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl bg-white border border-vizora-paper-border shadow-editorial-light p-6 sm:p-10 lg:p-12">
          {preselectBanner && !submissionResult && (
            <div className="mb-8 p-4 rounded-2xl bg-vizora-black text-white flex items-center justify-between gap-4 border-l-4 border-vizora-yellow">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-vizora-yellow shrink-0" />
                <span>{preselectBanner}</span>
              </div>
              <button
                type="button"
                onClick={() => setPreselectBanner(null)}
                className="text-[11px] uppercase tracking-wider text-slate-300 hover:text-vizora-yellow"
              >
                Dismiss
              </button>
            </div>
          )}

          {submissionResult ? (
            <div
              role="status"
              aria-live="polite"
              className="space-y-6 p-6 sm:p-8 rounded-2xl bg-vizora-black text-white border border-vizora-blue/50"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-vizora-blue flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-vizora-yellow" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-vizora-yellow block">
                      {submissionResult.status === 'delivered'
                        ? 'INQUIRY TRANSMITTED'
                        : 'PROJECT BRIEF PREPARED · READY TO SEND'}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Reference: {submissionResult.referenceCode}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Edit Inquiry Details</span>
                </button>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed">{submissionResult.message}</p>

              {/* Formatted Brief Preview */}
              <div className="rounded-2xl bg-[#0D0D16] border border-white/10 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vizora-yellow">
                    Structured Project Inquiry Summary
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-vizora-blue hover:bg-vizora-blue-light text-white text-xs font-semibold transition-colors"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-vizora-yellow" />
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
                <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap overflow-x-auto leading-relaxed">
                  {submissionResult.formattedBrief}
                </pre>
              </div>

              {/* Actionable Mailto & Integration Note */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                <a
                  href={submissionResult.mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-vizora-blue hover:bg-vizora-blue-light text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors"
                >
                  <Mail className="w-4 h-4 text-vizora-yellow" />
                  <span>Open Brief in Email Client</span>
                </a>

                <span className="text-[11px] text-slate-400">
                  Integration boundary: set <code className="text-vizora-yellow">VITE_INQUIRY_ENDPOINT</code>{' '}
                  in <code className="text-slate-300">.env</code> to connect your live webhook or
                  email service.
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="inquiry-fullName"
                    className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2"
                  >
                    Full Name <span className="text-vizora-blue">*</span>
                  </label>
                  <input
                    id="inquiry-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g., Anya Laurent"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'err-fullName' : undefined}
                    className={`w-full px-4 py-3.5 rounded-xl bg-vizora-paper border text-sm text-vizora-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-vizora-blue transition-all ${
                      errors.fullName ? 'border-red-600' : 'border-vizora-paper-border'
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
                    className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2"
                  >
                    Email Address <span className="text-vizora-blue">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    className={`w-full px-4 py-3.5 rounded-xl bg-vizora-paper border text-sm text-vizora-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-vizora-blue transition-all ${
                      errors.email ? 'border-red-600' : 'border-vizora-paper-border'
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
              </div>

              {/* Row 2: Profession or Business Type & Website Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="inquiry-profession"
                    className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2"
                  >
                    Profession or Business Type <span className="text-vizora-blue">*</span>
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
                      if (errors.profession) setErrors({ ...errors, profession: undefined });
                    }}
                    aria-invalid={Boolean(errors.profession)}
                    aria-describedby={errors.profession ? 'err-profession' : undefined}
                    className={`w-full px-4 py-3.5 rounded-xl bg-vizora-paper border text-sm text-vizora-black focus:outline-none focus:ring-2 focus:ring-vizora-blue transition-all ${
                      errors.profession ? 'border-red-600' : 'border-vizora-paper-border'
                    }`}
                  >
                    <option value="">Select your profession or business...</option>
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
                    className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2"
                  >
                    Website Type <span className="text-vizora-blue">*</span>
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
                      if (errors.websiteType) setErrors({ ...errors, websiteType: undefined });
                    }}
                    aria-invalid={Boolean(errors.websiteType)}
                    aria-describedby={errors.websiteType ? 'err-websiteType' : undefined}
                    className={`w-full px-4 py-3.5 rounded-xl bg-vizora-paper border text-sm text-vizora-black focus:outline-none focus:ring-2 focus:ring-vizora-blue transition-all ${
                      errors.websiteType ? 'border-red-600' : 'border-vizora-paper-border'
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

              {/* Row 3: Preferred Design Style (Interactive Pills / Radio Group) */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2.5">
                  Preferred Design Style <span className="text-vizora-blue">*</span>
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
                        className={`px-3.5 py-3 rounded-xl text-xs font-semibold border text-left transition-all flex items-center justify-between gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-blue ${
                          isSelected
                            ? 'bg-vizora-black text-white border-vizora-black shadow-md'
                            : 'bg-vizora-paper text-vizora-black border-vizora-paper-border hover:border-vizora-blue'
                        }`}
                      >
                        <span>{styleOpt}</span>
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            isSelected ? 'bg-vizora-yellow' : 'bg-slate-300'
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
                  className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2"
                >
                  Project Goals <span className="text-vizora-blue">*</span>
                </label>
                <input
                  id="inquiry-projectGoals"
                  name="projectGoals"
                  type="text"
                  required
                  value={formData.projectGoals}
                  onChange={(e) => {
                    setFormData({ ...formData, projectGoals: e.target.value });
                    if (errors.projectGoals) setErrors({ ...errors, projectGoals: undefined });
                  }}
                  placeholder="e.g., Present my modeling comp card & tear sheets, display salon services & pricing, receive client booking inquiries"
                  aria-invalid={Boolean(errors.projectGoals)}
                  aria-describedby={errors.projectGoals ? 'err-projectGoals' : undefined}
                  className={`w-full px-4 py-3.5 rounded-xl bg-vizora-paper border text-sm text-vizora-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-vizora-blue transition-all ${
                    errors.projectGoals ? 'border-red-600' : 'border-vizora-paper-border'
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

              {/* Row 5: Optional Existing Website URL & Optional Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="inquiry-existingUrl"
                    className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2"
                  >
                    Existing Website URL{' '}
                    <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="inquiry-existingUrl"
                    name="existingWebsiteUrl"
                    type="url"
                    value={formData.existingWebsiteUrl}
                    onChange={(e) => {
                      setFormData({ ...formData, existingWebsiteUrl: e.target.value });
                      if (errors.existingWebsiteUrl)
                        setErrors({ ...errors, existingWebsiteUrl: undefined });
                    }}
                    placeholder="https://yourcurrentsite.com"
                    aria-invalid={Boolean(errors.existingWebsiteUrl)}
                    className={`w-full px-4 py-3.5 rounded-xl bg-vizora-paper border text-sm text-vizora-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-vizora-blue transition-all ${
                      errors.existingWebsiteUrl
                        ? 'border-red-600'
                        : 'border-vizora-paper-border'
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
                    className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2"
                  >
                    Project Scope / Budget Range{' '}
                    <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="inquiry-budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-vizora-paper border border-vizora-paper-border text-sm text-vizora-black focus:outline-none focus:ring-2 focus:ring-vizora-blue transition-all"
                  >
                    <option value="">Select scope or request a quote...</option>
                    {BUDGET_RANGE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 6: Project Details */}
              <div>
                <label
                  htmlFor="inquiry-projectDetails"
                  className="block text-xs font-bold uppercase tracking-[0.15em] text-vizora-black mb-2"
                >
                  Project Details <span className="text-vizora-blue">*</span>
                </label>
                <textarea
                  id="inquiry-projectDetails"
                  name="projectDetails"
                  rows={4}
                  required
                  value={formData.projectDetails}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDetails: e.target.value });
                    if (errors.projectDetails)
                      setErrors({ ...errors, projectDetails: undefined });
                  }}
                  placeholder="Share any sections you want included (e.g., gallery categories, comp card stats, bridal service menu, booking integration, or reference styles you admire)..."
                  aria-invalid={Boolean(errors.projectDetails)}
                  aria-describedby={errors.projectDetails ? 'err-projectDetails' : undefined}
                  className={`w-full px-4 py-3.5 rounded-xl bg-vizora-paper border text-sm text-vizora-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-vizora-blue transition-all ${
                    errors.projectDetails ? 'border-red-600' : 'border-vizora-paper-border'
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
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white bg-vizora-blue hover:bg-vizora-blue-deep disabled:opacity-60 shadow-blue-glow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-black"
                >
                  <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
                  <span>
                    {isSubmitting ? 'Preparing Your Inquiry...' : 'Send My Project Inquiry'}
                  </span>
                  <Send className="w-4 h-4 text-vizora-yellow transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <span className="text-xs text-vizora-paper-muted">
                  Custom quotes tailored to your profession, pages, and feature requirements.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
